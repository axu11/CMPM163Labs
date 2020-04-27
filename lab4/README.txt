Lab 4 
Link to video: https://drive.google.com/file/d/1eI9xepwR1qb9VqvJUlkF7b-rZc2h1dY7/view?usp=sharing

The left cube is Part 1 Texture A, made with three.js built in texture functionality.
The center cube is Part 1 Texture A & Normal Map A,, made with three.js built in texture functionality.
The right cube is Part 1 Texture B & Normal Map B, made with three.js built in texture functionality. 
The top cube is Part 2 Texture C, loaded with the provided shader.
The bottom cube is Part 2 Texture D, which takes a texture of 16 brick squares and tiles it, creating a texture of 64 brick squares.
This was done by mapping sampling the texture four times, once from each quadrant.

Answers to 24:
a. x = floor(8u)
b. y = floor[8(|0.999-v|)]
c. (3, 6) = white