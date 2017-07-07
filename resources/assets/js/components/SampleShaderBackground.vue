<template>
    <shader-background :width="width" :height="height" :fragment="shaders"></shader-background>
</template>

<script>
    let shaders = [
        `attribute vec3 position;
        varying vec2 uv;
        void main() {
          gl_Position = vec4(position, 1.0);
          uv = position.xy;
        }`,
        `precision highp float;
        uniform float t;
        varying vec2 uv;
        void main() {
          gl_FragColor = vec4(0.5*(uv+1.0), 0.5*(cos(t)+1.0), 1.0);
        }`
    ];

    export default {
        data() {
            return { shaders }
        }
    }
</script>