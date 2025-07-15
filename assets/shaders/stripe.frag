precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
varying vec2 vUv;

// Parameters
const float STRIPE_DENSITY = 80.0;  // Density of stripes along X axis
const float MIN_HEIGHT = 0.1;       // Minimum stripe height
const float MAX_HEIGHT = 0.3;       // Maximum stripe height
const float SPEED = 0.1;            // Upward movement speed
const float STRIPE_BASE_WIDTH = 0.002;      // Base width of stripes
const float STRIPE_WIDTH_VARIATION = 0.00; // Max random width variation

// Hash function for random values
float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}

// 1D noise function
float noise(float x) {
    float i = floor(x);
    float f = fract(x);
    float u = f * f * (3.0 - 2.0 * f);
    return mix(hash(i), hash(i + 1.0), u);
}

// Function to create a single stripe
float stripe(vec2 uv, float index, float height) {
    // Calculate stripe position
    float xPos = hash(index) * 0.8 + 0.1;  // Random position between 0.1 and 0.9
    float width = STRIPE_BASE_WIDTH + hash(index + 7.89) * STRIPE_WIDTH_VARIATION;  // Adjustable width
    // Calculate distance from stripe center
    float dist = abs(uv.x - xPos) / width;
    // Create tapered shape
    float taper = 1.0 - uv.y / height;
    taper = max(0.0, taper);
    // Combine for final stripe shape
    float stripe = smoothstep(1.0, 0.0, dist) * taper;
    return stripe;
}

void main() {
    // Correct aspect ratio
    vec2 uv = vUv;
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;
    // Flip vertically for 180-degree rotation
    uv.y = 1.0 - uv.y;
    // Mouse influence
    vec2 mousePos = u_mouse;
    mousePos.x *= aspect;
    float mouseDist = length(uv - mousePos);
    float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.5;
    // Animate vertical position
    float yOffset = u_time * SPEED;
    // Initialize color
    vec3 color = vec3(0.0);
    // Generate stripes
    for (float i = 0.0; i < STRIPE_DENSITY; i++) {
        // Random height for this stripe
        float height = mix(MIN_HEIGHT, MAX_HEIGHT, hash(i + 3.14)) * (1.0 + mouseInfluence);
        // Random speed variation
        float speed = 1.0 + hash(i) * 0.5;
        // Add random time offset so stripes appear at different times
        float timeOffset = hash(i + 12.345) * 10.0;
        // Calculate y position with wrapping and random offset
        float y = fract(uv.y + (u_time + timeOffset) * SPEED * speed);
        // Create stripe
        float stripeValue = stripe(vec2(uv.x, y), i, height);
        // Add glow effect
        float glow = stripeValue * (0.8 + 0.2 * sin(u_time + i));
        // Add to final color
        color += vec3(1.0, 1.0, 1.0) * glow;
    }
    // Add subtle color variation
    color.r += color.r * 0.1 * sin(u_time * 0.2);
    color.b += color.b * 0.05 * cos(u_time * 0.3);
    // Apply mouse-based intensity boost
    color *= 1.0 + mouseInfluence;
    // Output final color
    gl_FragColor = vec4(color, 1.0);
    // #include <colorspace_fragment> (not supported in WebGL, ignored)
} 