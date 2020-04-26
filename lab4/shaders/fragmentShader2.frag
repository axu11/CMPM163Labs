uniform sampler2D texture1;
uniform vec2 textureRatio;
varying vec2 vUv;

void main() {
	vec4 textureColor = texture2D(texture1, vUv);
	resultx = vUv/2	
	vec2 tiledUv = vec2(resultx, resulty);

	gl_FragColor = texture2D(texture1, tiledUv);
}
