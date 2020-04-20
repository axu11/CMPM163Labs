uniform vec3 colorA;
uniform vec3 colorB;
uniform float u_time;

void main() {
  float blend = abs(sin(u_time));
  gl_FragColor = vec4(mix(colorA, colorB, blend), 1.0); //rgba, return blue
}
