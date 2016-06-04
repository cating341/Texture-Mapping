varying vec2 vv2texCoord;
varying vec4 vv4colour, vv4vertex;

uniform sampler2D us2dtexture;
uniform int texMapping;

void main()
{
	//gl_FragColor = vec4(vv4vertex.zzz/2.0/sqrt(3.0)+0.5, 0.0);
	// TODO: deal with the texture color
	vec4 v4texColor = texture2D(us2dtexture, vv2texCoord).bgra;
	if(texMapping==1) gl_FragColor = v4texColor;
	else gl_FragColor = vec4(vv4vertex.zzz/2.0/sqrt(3.0)+0.5, 0.0);
	
}
