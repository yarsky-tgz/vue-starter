<template>
    <canvas :width="width" :height="height"></canvas>
</template>

<script>
    import Shell from 'gl-now';
    import createShader from 'gl-shader';

    export default {
        props: ['width', 'height', 'fragment'],
        mounted() {
            const shell = Shell({ element: this.$el});
            shell.on('gl-init', function() {
                var gl = shell.gl

                //Create shader
                shader = createShader(gl,
                    'attribute vec3 position;\
                    varying vec2 uv;\
                    void main() {\
                      gl_Position = vec4(position, 1.0);\
                      uv = position.xy;\
                    }',
                    'precision highp float;\
                    uniform float t;\
                    varying vec2 uv;\
                    void main() {\
                      gl_FragColor = vec4(0.5*(uv+1.0), 0.5*(cos(t)+1.0), 1.0);\
                    }')

                //Create vertex buffer
                buffer = gl.createBuffer()
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                    -1, 0, 0,
                    0, -1, 0,
                    1, 1, 0
                ]), gl.STATIC_DRAW)
            });

            shell.on('gl-render', function(t) {
                var gl = shell.gl

                //Bind shader
                shader.bind()

                //Set attributes
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
                shader.attributes.position.pointer()

                //Set uniforms
                shader.uniforms.t += 0.01

                //Draw
                gl.drawArrays(gl.TRIANGLES, 0, 3)
            });
        }
    }
</script>