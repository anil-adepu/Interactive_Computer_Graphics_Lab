var canvas = document.getElementById('my_canvas');
var gl = canvas.getContext('experimental-webgl');


// calculated all vertices manually
var vertices = [
      0,0,0,
      0,0.05,0,
      0.02,0.09,0,
      0.04,0.05,0,
      0.04,0,0,
      0.02,-0.04,0,

      0.04,0.05,0,
      0.06,0.09,0,
      0.08,0.05,0,
      0.08,0,0,
      0.06,-0.04,0,
      0.04,0,0,

      0.08,0.05,0,
      0.1,0.09,0,
      0.12,0.05,0,
      0.12,0,0,
      0.1,-0.04,0,
      0.08,0,0,

      0.12,0.05,0,
      0.14,0.09,0,
      0.16,0.05,0,
      0.16,0,0,
      0.14,-0.04,0,
      0.12,0,0,

      0.16,0.05,0,
      0.18,0.09,0,
      0.20,0.05,0,
      0.20,0,0,
      0.18,-0.04,0,
      0.16,0,0,


      0.20,0.05,0,
      0.22,0.09,0,
      0.24,0.05,0,
      0.24,0,0,
      0.22,-0.04,0,
      0.20,0,0,

      0.24,0.05,0,
      0.26,0.09,0,
      0.28,0.05,0,
      0.28,0,0,
      0.26,-0.04,0,
      0.24,0,0,

      0.28,0.05,0,
      0.30,0.09,0,
      0.32,0.05,0,
      0.32,0,0,
      0.30,-0.04,0,
      0.28,0,0,

      0.32,0.05,0,
      0.34,0.09,0,
      0.36,0.05,0,
      0.36,0,0,
      0.34,-0.04,0,
      0.32,0,0,

      0.36,0.05,0,
      0.38,0.09,0,
      0.40,0.05,0,
      0.40,0,0,
      0.38,-0.04,0,
      0.36,0,0,

      0.40,0.05,0,
      0.42,0.09,0,
      0.44,0.05,0,
      0.44,0,0,
      0.42,-0.04,0,
      0.40,0,0,
      //
      // 0.44,0.05,0,
      // 0.46,0.09,0,
      // 0.48,0.05,0,
      // 0.48,0,0,
      // 0.46,-0.04,0,
      // 0.44,0,0,
      //
      // 0.48,0.05,0,
      // 0.50,0.09,0,
      // 0.52,0.05,0,
      // 0.52,0,0,
      // 0.50,-0.04,0,
      // 0.48,0,0,
      //
      // 0.52,0.05,0,
      // 0.54,0.09,0,
      // 0.56,0.05,0,
      // 0.56,0,0,
      // 0.54,-0.04,0,
      // 0.52,0,0,
      //
      // 0.56,0.05,0,
      // 0.58,0.09,0,
      // 0.60,0.05,0,
      // 0.60,0,0,
      // 0.58,-0.04,0,
      // 0.56,0,0,
      //
      // 0.60,0.05,0,
      // 0.62,0.09,0,
      // 0.64,0.05,0,
      // 0.64,0,0,
      // 0.62,-0.04,0,
      // 0.60,0,0,
      //
      // 0.64,0.05,0,
      // 0.66,0.09,0,
      // 0.68,0.05,0,
      // 0.68,0,0,
      // 0.66,-0.04,0,
      // 0.64,0,0,
      //
      // 0.68,0.05,0,
      // 0.70,0.09,0,
      // 0.72,0.05,0,
      // 0.72,0,0,
      // 0.70,-0.04,0,
      // 0.68,0,0,

      0,0,0,
      0,0.05,0,
      -0.02,0.09,0,
      -0.04,0.05,0,
      -0.04,0,0,
      -0.02,-0.04,0,

      -0.04,0.05,0,
      -0.06,0.09,0,
      -0.08,0.05,0,
      -0.08,0,0,
      -0.06,-0.04,0,
      -0.04,0,0,

      -0.08,0.05,0,
      -0.1,0.09,0,
      -0.12,0.05,0,
      -0.12,0,0,
      -0.1,-0.04,0,
      -0.08,0,0,

      -0.12,0.05,0,
      -0.14,0.09,0,
      -0.16,0.05,0,
      -0.16,0,0,
      -0.14,-0.04,0,
      -0.12,0,0,

      -0.16,0.05,0,
      -0.18,0.09,0,
      -0.20,0.05,0,
      -0.20,0,0,
      -0.18,-0.04,0,
      -0.16,0,0,

      -0.20,0.05,0,
      -0.22,0.09,0,
      -0.24,0.05,0,
      -0.24,0,0,
      -0.22,-0.04,0,
      -0.20,0,0,

      -0.24,0.05,0,
      -0.26,0.09,0,
      -0.28,0.05,0,
      -0.28,0,0,
      -0.26,-0.04,0,
      -0.24,0,0,

      -0.28,0.05,0,
      -0.30,0.09,0,
      -0.32,0.05,0,
      -0.32,0,0,
      -0.30,-0.04,0,
      -0.28,0,0,

      -0.32,0.05,0,
      -0.34,0.09,0,
      -0.36,0.05,0,
      -0.36,0,0,
      -0.34,-0.04,0,
      -0.32,0,0,

      -0.36,0.05,0,
      -0.38,0.09,0,
      -0.40,0.05,0,
      -0.40,0,0,
      -0.38,-0.04,0,
      -0.36,0,0,

      -0.40,0.05,0,
      -0.42,0.09,0,
      -0.44,0.05,0,
      -0.44,0,0,
      -0.42,-0.04,0,
      -0.40,0,0,

      // -0.44,0.05,0,
      // -0.46,0.09,0,
      // -0.48,0.05,0,
      // -0.48,0,0,
      // -0.46,-0.04,0,
      // -0.44,0,0,
      //
      // -0.48,0.05,0,
      // -0.50,0.09,0,
      // -0.52,0.05,0,
      // -0.52,0,0,
      // -0.50,-0.04,0,
      // -0.48,0,0,
      //
      // -0.52,0.05,0,
      // -0.54,0.09,0,
      // -0.56,0.05,0,
      // -0.56,0,0,
      // -0.54,-0.04,0,
      // -0.52,0,0,
      //
      // -0.56,0.05,0,
      // -0.58,0.09,0,
      // -0.60,0.05,0,
      // -0.60,0,0,
      // -0.58,-0.04,0,
      // -0.56,0,0,
      //
      // -0.60,0.05,0,
      // -0.62,0.09,0,
      // -0.64,0.05,0,
      // -0.64,0,0,
      // -0.62,-0.04,0,
      // -0.60,0,0,
      //
      // -0.64,0.05,0,
      // -0.66,0.09,0,
      // -0.68,0.05,0,
      // -0.68,0,0,
      // -0.66,-0.04,0,
      // -0.64,0,0,
      //
      // -0.68,0.05,0,
      // -0.70,0.09,0,
      // -0.72,0.05,0,
      // -0.72,0,0,
      // -0.70,-0.04,0,
      // -0.68,0,0,

      0.02,0.09,0,
      0.02,0.14,0,
      0.04,0.18,0,
      0.06,0.14,0,
      0.06,0.09,0,
      0.04,0.05,0,

      0.06,0.09,0,
      0.06,0.14,0,
      0.08,0.18,0,
      0.1,0.14,0,
      0.1,0.09,0,
      0.08,0.05,0,

      0.1,0.09,0,
      0.1,0.14,0,
      0.12,0.18,0,
      0.14,0.14,0,
      0.14,0.09,0,
      0.12,0.05,0,

      0.14,0.09,0,
      0.14,0.14,0,
      0.16,0.18,0,
      0.18,0.14,0,
      0.18,0.09,0,
      0.16,0.05,0,

      0.18,0.09,0,
      0.18,0.14,0,
      0.20,0.18,0,
      0.22,0.14,0,
      0.22,0.09,0,
      0.20,0.05,0,

      0.22,0.09,0,
      0.22,0.14,0,
      0.24,0.18,0,
      0.26,0.14,0,
      0.26,0.09,0,
      0.24,0.05,0,

      0.26,0.09,0,
      0.26,0.14,0,
      0.28,0.18,0,
      0.30,0.14,0,
      0.30,0.09,0,
      0.28,0.05,0,

      0.30,0.09,0,
      0.30,0.14,0,
      0.32,0.18,0,
      0.34,0.14,0,
      0.34,0.09,0,
      0.32,0.05,0,

      0.34,0.09,0,
      0.34,0.14,0,
      0.36,0.18,0,
      0.38,0.14,0,
      0.38,0.09,0,
      0.36,0.05,0,

      0.38,0.09,0,
      0.38,0.14,0,
      0.40,0.18,0,
      0.42,0.14,0,
      0.42,0.09,0,
      0.40,0.05,0,

      -0.02,0.09,0,
      -0.02,0.14,0,
      0,0.18,0,
      0.02,0.14,0,
      0.02,0.09,0,
      0,0.05,0,

      -0.02,0.09,0,
      -0.02,0.14,0,
      -0.04,0.18,0,
      -0.06,0.14,0,
      -0.06,0.09,0,
      -0.04,0.05,0,

      -0.06,0.09,0,
      -0.06,0.14,0,
      -0.08,0.18,0,
      -0.1,0.14,0,
      -0.1,0.09,0,
      -0.08,0.05,0,

      -0.1,0.09,0,
      -0.1,0.14,0,
      -0.12,0.18,0,
      -0.14,0.14,0,
      -0.14,0.09,0,
      -0.12,0.05,0,

      -0.14,0.09,0,
      -0.14,0.14,0,
      -0.16,0.18,0,
      -0.18,0.14,0,
      -0.18,0.09,0,
      -0.16,0.05,0,

      -0.18,0.09,0,
      -0.18,0.14,0,
      -0.20,0.18,0,
      -0.22,0.14,0,
      -0.22,0.09,0,
      -0.20,0.05,0,

      -0.22,0.09,0,
      -0.22,0.14,0,
      -0.24,0.18,0,
      -0.26,0.14,0,
      -0.26,0.09,0,
      -0.24,0.05,0,

      -0.26,0.09,0,
      -0.26,0.14,0,
      -0.28,0.18,0,
      -0.30,0.14,0,
      -0.30,0.09,0,
      -0.28,0.05,0,

      -0.30,0.09,0,
      -0.30,0.14,0,
      -0.32,0.18,0,
      -0.34,0.14,0,
      -0.34,0.09,0,
      -0.32,0.05,0,

      -0.34,0.09,0,
      -0.34,0.14,0,
      -0.36,0.18,0,
      -0.38,0.14,0,
      -0.38,0.09,0,
      -0.36,0.05,0,

      -0.38,0.09,0,
      -0.38,0.14,0,
      -0.40,0.18,0,
      -0.42,0.14,0,
      -0.42,0.09,0,
      -0.40,0.05,0,

      0.02,-0.04,0,
      0.04,0,0,
      0.06,-0.04,0,
      0.06,-0.09,0,
      0.04,-0.13,0,
      0.02,-0.09,0,

      0.06,-0.04,0,
      0.08,0,0,
      0.1,-0.04,0,
      0.1,-0.09,0,
      0.08,-0.13,0,
      0.06,-0.09,0,

      0.1,-0.04,0,
      0.12,0,0,
      0.14,-0.04,0,
      0.14,-0.09,0,
      0.12,-0.13,0,
      0.1,-0.09,0,

      0.14,-0.04,0,
      0.16,0,0,
      0.18,-0.04,0,
      0.18,-0.09,0,
      0.16,-0.13,0,
      0.14,-0.09,0,

      0.18,-0.04,0,
      0.20,0,0,
      0.22,-0.04,0,
      0.22,-0.09,0,
      0.20,-0.13,0,
      0.18,-0.09,0,

      0.22,-0.04,0,
      0.24,0,0,
      0.26,-0.04,0,
      0.26,-0.09,0,
      0.24,-0.13,0,
      0.22,-0.09,0,

      0.26,-0.04,0,
      0.28,0,0,
      0.30,-0.04,0,
      0.30,-0.09,0,
      0.28,-0.13,0,
      0.26,-0.09,0,

      0.30,-0.04,0,
      0.32,0,0,
      0.34,-0.04,0,
      0.34,-0.09,0,
      0.32,-0.13,0,
      0.30,-0.09,0,

      0.34,-0.04,0,
      0.36,0,0,
      0.38,-0.04,0,
      0.38,-0.09,0,
      0.36,-0.13,0,
      0.34,-0.09,0,

      0.38,-0.04,0,
      0.40,0,0,
      0.42,-0.04,0,
      0.42,-0.09,0,
      0.40,-0.13,0,
      0.38,-0.09,0,

      -0.02,-0.04,0,
      0,0,0,
      0.02,-0.04,0,
      0.02,-0.09,0,
      0,-0.13,0,
      -0.02,-0.09,0,

      -0.02,-0.04,0,
      -0.04,0,0,
      -0.06,-0.04,0,
      -0.06,-0.09,0,
      -0.04,-0.13,0,
      -0.02,-0.09,0,

      -0.06,-0.04,0,
      -0.08,0,0,
      -0.1,-0.04,0,
      -0.1,-0.09,0,
      -0.08,-0.13,0,
      -0.06,-0.09,0,

      -0.1,-0.04,0,
      -0.12,0,0,
      -0.14,-0.04,0,
      -0.14,-0.09,0,
      -0.12,-0.13,0,
      -0.1,-0.09,0,

      -0.14,-0.04,0,
      -0.16,0,0,
      -0.18,-0.04,0,
      -0.18,-0.09,0,
      -0.16,-0.13,0,
      -0.14,-0.09,0,

      -0.18,-0.04,0,
      -0.20,0,0,
      -0.22,-0.04,0,
      -0.22,-0.09,0,
      -0.20,-0.13,0,
      -0.18,-0.09,0,

      -0.22,-0.04,0,
      -0.24,0,0,
      -0.26,-0.04,0,
      -0.26,-0.09,0,
      -0.24,-0.13,0,
      -0.22,-0.09,0,

      -0.26,-0.04,0,
      -0.28,0,0,
      -0.30,-0.04,0,
      -0.30,-0.09,0,
      -0.28,-0.13,0,
      -0.26,-0.09,0,

      -0.30,-0.04,0,
      -0.32,0,0,
      -0.34,-0.04,0,
      -0.34,-0.09,0,
      -0.32,-0.13,0,
      -0.30,-0.09,0,

      -0.34,-0.04,0,
      -0.36,0,0,
      -0.38,-0.04,0,
      -0.38,-0.09,0,
      -0.36,-0.13,0,
      -0.34,-0.09,0,

      -0.38,-0.04,0,
      -0.40,0,0,
      -0.42,-0.04,0,
      -0.42,-0.09,0,
      -0.40,-0.13,0,
      -0.38,-0.09,0,

      0.04,0.18,0,
      0.04,0.23,0,
      0.06,0.27,0,
      0.08,0.23,0,
      0.08,0.18,0,
      0.06,0.14,0,

      0.08,0.18,0,
      0.08,0.23,0,
      0.1,0.27,0,
      0.12,0.23,0,
      0.12,0.18,0,
      0.1,0.14,0,

      0.12,0.18,0,
      0.12,0.23,0,
      0.14,0.27,0,
      0.16,0.23,0,
      0.16,0.18,0,
      0.14,0.14,0,

      0.16,0.18,0,
      0.16,0.23,0,
      0.18,0.27,0,
      0.20,0.23,0,
      0.20,0.18,0,
      0.18,0.14,0,

      0.20,0.18,0,
      0.20,0.23,0,
      0.22,0.27,0,
      0.24,0.23,0,
      0.24,0.18,0,
      0.22,0.14,0,

      0.24,0.18,0,
      0.24,0.23,0,
      0.26,0.27,0,
      0.28,0.23,0,
      0.28,0.18,0,
      0.26,0.14,0,

      0.28,0.18,0,
      0.28,0.23,0,
      0.30,0.27,0,
      0.32,0.23,0,
      0.32,0.18,0,
      0.30,0.14,0,

      0.32,0.18,0,
      0.32,0.23,0,
      0.34,0.27,0,
      0.36,0.23,0,
      0.36,0.18,0,
      0.34,0.14,0,

      0.36,0.18,0,
      0.36,0.23,0,
      0.38,0.27,0,
      0.40,0.23,0,
      0.40,0.18,0,
      0.38,0.14,0,

      0.16,0.18,0,
      0.16,0.23,0,
      0.18,0.27,0,
      0.20,0.23,0,
      0.20,0.18,0,
      0.18,0.14,0,

      0.16,0.18,0,
      0.16,0.23,0,
      0.18,0.27,0,
      0.20,0.23,0,
      0.20,0.18,0,
      0.18,0.14,0,

      -0.04,0.18,0,
      -0.04,0.23,0,
      -0.02,0.27,0,
      0,0.23,0,
      0,0.18,0,
      -0.02,0.14,0,

      0,0.18,0,
      0,0.23,0,
      0.02,0.27,0,
      0.04,0.23,0,
      0.04,0.18,0,
      0.02,0.14,0,

      -0.04,0.18,0,
      -0.04,0.23,0,
      -0.06,0.27,0,
      -0.08,0.23,0,
      -0.08,0.18,0,
      -0.06,0.14,0,

      -0.08,0.18,0,
      -0.08,0.23,0,
      -0.1,0.27,0,
      -0.12,0.23,0,
      -0.12,0.18,0,
      -0.1,0.14,0,

      -0.12,0.18,0,
      -0.12,0.23,0,
      -0.14,0.27,0,
      -0.16,0.23,0,
      -0.16,0.18,0,
      -0.14,0.14,0,

      -0.16,0.18,0,
      -0.16,0.23,0,
      -0.18,0.27,0,
      -0.20,0.23,0,
      -0.20,0.18,0,
      -0.18,0.14,0,

      -0.20,0.18,0,
      -0.20,0.23,0,
      -0.22,0.27,0,
      -0.24,0.23,0,
      -0.24,0.18,0,
      -0.22,0.14,0,

      -0.24,0.18,0,
      -0.24,0.23,0,
      -0.26,0.27,0,
      -0.28,0.23,0,
      -0.28,0.18,0,
      -0.26,0.14,0,

      -0.28,0.18,0,
      -0.28,0.23,0,
      -0.30,0.27,0,
      -0.32,0.23,0,
      -0.32,0.18,0,
      -0.30,0.14,0,

      -0.32,0.18,0,
      -0.32,0.23,0,
      -0.34,0.27,0,
      -0.36,0.23,0,
      -0.36,0.18,0,
      -0.34,0.14,0,

      -0.36,0.18,0,
      -0.36,0.23,0,
      -0.38,0.27,0,
      -0.40,0.23,0,
      -0.40,0.18,0,
      -0.38,0.14,0,

      -0.04,-0.18,0,
      -0.04,-0.13,0,
      -0.02,-0.09,0,
      0,-0.13,0,
      0,-0.18,0,
      -0.02,-0.22,0,

      0,-0.18,0,
      0,-0.13,0,
      0.02,-0.09,0,
      0.04,-0.13,0,
      0.04,-0.18,0,
      0.02,-0.22,0,

      0.04,-0.18,0,
      0.04,-0.13,0,
      0.06,-0.09,0,
      0.08,-0.13,0,
      0.08,-0.18,0,
      0.06,-0.22,0,

      0.08,-0.18,0,
      0.08,-0.13,0,
      0.1,-0.09,0,
      0.12,-0.13,0,
      0.12,-0.18,0,
      0.1,-0.22,0,

      0.12,-0.18,0,
      0.12,-0.13,0,
      0.14,-0.09,0,
      0.16,-0.13,0,
      0.16,-0.18,0,
      0.14,-0.22,0,

      0.16,-0.18,0,
      0.16,-0.13,0,
      0.18,-0.09,0,
      0.20,-0.13,0,
      0.20,-0.18,0,
      0.18,-0.22,0,

      0.20,-0.18,0,
      0.20,-0.13,0,
      0.22,-0.09,0,
      0.24,-0.13,0,
      0.24,-0.18,0,
      0.22,-0.22,0,

      0.24,-0.18,0,
      0.24,-0.13,0,
      0.26,-0.09,0,
      0.28,-0.13,0,
      0.28,-0.18,0,
      0.26,-0.22,0,

      0.28,-0.18,0,
      0.28,-0.13,0,
      0.30,-0.09,0,
      0.32,-0.13,0,
      0.32,-0.18,0,
      0.30,-0.22,0,

      0.32,-0.18,0,
      0.32,-0.13,0,
      0.34,-0.09,0,
      0.36,-0.13,0,
      0.36,-0.18,0,
      0.34,-0.22,0,

      0.36,-0.18,0,
      0.36,-0.13,0,
      0.38,-0.09,0,
      0.40,-0.13,0,
      0.40,-0.18,0,
      0.38,-0.22,0,

      -0.08,-0.18,0,
      -0.08,-0.13,0,
      -0.06,-0.09,0,
      -0.04,-0.13,0,
      -0.04,-0.18,0,
      -0.06,-0.22,0,

      -0.08,-0.18,0,
      -0.08,-0.13,0,
      -0.1,-0.09,0,
      -0.12,-0.13,0,
      -0.12,-0.18,0,
      -0.1,-0.22,0,

      -0.12,-0.18,0,
      -0.12,-0.13,0,
      -0.14,-0.09,0,
      -0.16,-0.13,0,
      -0.16,-0.18,0,
      -0.14,-0.22,0,

      -0.16,-0.18,0,
      -0.16,-0.13,0,
      -0.18,-0.09,0,
      -0.20,-0.13,0,
      -0.20,-0.18,0,
      -0.18,-0.22,0,

      -0.20,-0.18,0,
      -0.20,-0.13,0,
      -0.22,-0.09,0,
      -0.24,-0.13,0,
      -0.24,-0.18,0,
      -0.22,-0.22,0,

      -0.24,-0.18,0,
      -0.24,-0.13,0,
      -0.26,-0.09,0,
      -0.28,-0.13,0,
      -0.28,-0.18,0,
      -0.26,-0.22,0,

      -0.28,-0.18,0,
      -0.28,-0.13,0,
      -0.30,-0.09,0,
      -0.32,-0.13,0,
      -0.32,-0.18,0,
      -0.30,-0.22,0,

      -0.32,-0.18,0,
      -0.32,-0.13,0,
      -0.34,-0.09,0,
      -0.36,-0.13,0,
      -0.36,-0.18,0,
      -0.34,-0.22,0,

      -0.36,-0.18,0,
      -0.36,-0.13,0,
      -0.38,-0.09,0,
      -0.40,-0.13,0,
      -0.40,-0.18,0,
      -0.38,-0.22,0,
]
var vertex_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
gl.bindBuffer(gl.ARRAY_BUFFER, null);


var vertCode =
'attribute vec3 coordinates;' +
'void main(void) {' +
   ' gl_Position = vec4(coordinates, 1.0);' +
'}';

var vertShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertShader, vertCode);
gl.compileShader(vertShader);
var fragCode =
'void main(void) {' +
   'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' +
'}';

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragShader, fragCode);
gl.compileShader(fragShader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertShader);
gl.attachShader(shaderProgram, fragShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
var coord = gl.getAttribLocation(shaderProgram, "coordinates");
gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(coord);

gl.clearColor(0.7, 0.1, 0.1, 0.7); //modified
gl.enable(gl.DEPTH_TEST);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
gl.viewport(0,0,canvas.width,canvas.height);

gl.lineWidth(4);   //modified

// var i;
// for(i=0;i<715;i+=6)
//       gl.drawArrays(gl.LINE_LOOP,i,6);
//all below modified
gl.drawArrays(gl.LINE_LOOP, 0, 6 );
gl.drawArrays(gl.LINE_LOOP, 6, 6 );
gl.drawArrays(gl.LINE_LOOP, 12, 6 );
gl.drawArrays(gl.LINE_LOOP, 18, 6 );
gl.drawArrays(gl.LINE_LOOP, 24, 6 );
gl.drawArrays(gl.LINE_LOOP, 30, 6 );
gl.drawArrays(gl.LINE_LOOP, 36, 6 );
gl.drawArrays(gl.LINE_LOOP, 42, 6 );
gl.drawArrays(gl.LINE_LOOP, 48, 6 );
gl.drawArrays(gl.LINE_LOOP, 54, 6 );
gl.drawArrays(gl.LINE_LOOP, 60, 6 );
gl.drawArrays(gl.LINE_LOOP, 66, 6 );
gl.drawArrays(gl.LINE_LOOP, 72, 6 );
gl.drawArrays(gl.LINE_LOOP, 78, 6 );
gl.drawArrays(gl.LINE_LOOP, 84, 6 );
gl.drawArrays(gl.LINE_LOOP, 90, 6 );
gl.drawArrays(gl.LINE_LOOP, 96, 6 );
gl.drawArrays(gl.LINE_LOOP, 102, 6 );
gl.drawArrays(gl.LINE_LOOP, 108, 6 );
gl.drawArrays(gl.LINE_LOOP, 114, 6 );
gl.drawArrays(gl.LINE_LOOP, 120, 6 );
gl.drawArrays(gl.LINE_LOOP, 126, 6 );
gl.drawArrays(gl.LINE_LOOP, 132, 6 );
gl.drawArrays(gl.LINE_LOOP, 138, 6 );
gl.drawArrays(gl.LINE_LOOP, 144, 6 );
gl.drawArrays(gl.LINE_LOOP, 150, 6 );
gl.drawArrays(gl.LINE_LOOP, 156, 6 );
gl.drawArrays(gl.LINE_LOOP, 162, 6 );
gl.drawArrays(gl.LINE_LOOP, 168, 6 );
gl.drawArrays(gl.LINE_LOOP, 174, 6 );
gl.drawArrays(gl.LINE_LOOP, 180, 6 );
gl.drawArrays(gl.LINE_LOOP, 186, 6 );
gl.drawArrays(gl.LINE_LOOP, 192, 6 );
gl.drawArrays(gl.LINE_LOOP, 198, 6 );
gl.drawArrays(gl.LINE_LOOP, 204, 6 );
gl.drawArrays(gl.LINE_LOOP, 210, 6 );
gl.drawArrays(gl.LINE_LOOP, 216, 6 );
gl.drawArrays(gl.LINE_LOOP, 222, 6 );
gl.drawArrays(gl.LINE_LOOP, 228, 6 );
gl.drawArrays(gl.LINE_LOOP, 234, 6 );
gl.drawArrays(gl.LINE_LOOP, 240, 6 );
gl.drawArrays(gl.LINE_LOOP, 246, 6 );
gl.drawArrays(gl.LINE_LOOP, 252, 6 );
gl.drawArrays(gl.LINE_LOOP, 258, 6 );
gl.drawArrays(gl.LINE_LOOP, 264, 6 );
gl.drawArrays(gl.LINE_LOOP, 270, 6 );
gl.drawArrays(gl.LINE_LOOP, 276, 6 );
gl.drawArrays(gl.LINE_LOOP, 282, 6 );
gl.drawArrays(gl.LINE_LOOP, 288, 6 );
gl.drawArrays(gl.LINE_LOOP, 294, 6 );
gl.drawArrays(gl.LINE_LOOP, 300, 6 );
gl.drawArrays(gl.LINE_LOOP, 306, 6 );
gl.drawArrays(gl.LINE_LOOP, 312, 6 );
gl.drawArrays(gl.LINE_LOOP, 318, 6 );
gl.drawArrays(gl.LINE_LOOP, 324, 6 );
gl.drawArrays(gl.LINE_LOOP, 330, 6 );
gl.drawArrays(gl.LINE_LOOP, 336, 6 );
gl.drawArrays(gl.LINE_LOOP, 342, 6 );
gl.drawArrays(gl.LINE_LOOP, 348, 6 );
gl.drawArrays(gl.LINE_LOOP, 354, 6 );
gl.drawArrays(gl.LINE_LOOP, 360, 6 );
gl.drawArrays(gl.LINE_LOOP, 366, 6 );
gl.drawArrays(gl.LINE_LOOP, 372, 6 );
gl.drawArrays(gl.LINE_LOOP, 378, 6 );
gl.drawArrays(gl.LINE_LOOP, 384, 6 );
gl.drawArrays(gl.LINE_LOOP, 390, 6 );
gl.drawArrays(gl.LINE_LOOP, 396, 6 );
gl.drawArrays(gl.LINE_LOOP, 402, 6 );
gl.drawArrays(gl.LINE_LOOP, 408, 6 );
gl.drawArrays(gl.LINE_LOOP, 414, 6 );
gl.drawArrays(gl.LINE_LOOP, 420, 6 );
gl.drawArrays(gl.LINE_LOOP, 426, 6 );
gl.drawArrays(gl.LINE_LOOP, 432, 6 );
gl.drawArrays(gl.LINE_LOOP, 438, 6 );
gl.drawArrays(gl.LINE_LOOP, 444, 6 );
gl.drawArrays(gl.LINE_LOOP, 450, 6 );
gl.drawArrays(gl.LINE_LOOP, 456, 6 );
gl.drawArrays(gl.LINE_LOOP, 462, 6 );
gl.drawArrays(gl.LINE_LOOP, 468, 6 );
gl.drawArrays(gl.LINE_LOOP, 474, 6 );
gl.drawArrays(gl.LINE_LOOP, 480, 6 );
gl.drawArrays(gl.LINE_LOOP, 486, 6 );
gl.drawArrays(gl.LINE_LOOP, 492, 6 );
gl.drawArrays(gl.LINE_LOOP, 498, 6 );
gl.drawArrays(gl.LINE_LOOP, 504, 6 );
gl.drawArrays(gl.LINE_LOOP, 510, 6 );
gl.drawArrays(gl.LINE_LOOP, 516, 6 );
gl.drawArrays(gl.LINE_LOOP, 522, 6 );
gl.drawArrays(gl.LINE_LOOP, 528, 6 );
gl.drawArrays(gl.LINE_LOOP, 534, 6 );
gl.drawArrays(gl.LINE_LOOP, 540, 6 );
gl.drawArrays(gl.LINE_LOOP, 546, 6 );
gl.drawArrays(gl.LINE_LOOP, 552, 6 );
gl.drawArrays(gl.LINE_LOOP, 558, 6 );
gl.drawArrays(gl.LINE_LOOP, 564, 6 );
gl.drawArrays(gl.LINE_LOOP, 570, 6 );
gl.drawArrays(gl.LINE_LOOP, 576, 6 );
gl.drawArrays(gl.LINE_LOOP, 582, 6 );
gl.drawArrays(gl.LINE_LOOP, 588, 6 );
gl.drawArrays(gl.LINE_LOOP, 594, 6 );
gl.drawArrays(gl.LINE_LOOP, 600, 6 );
gl.drawArrays(gl.LINE_LOOP, 606, 6 );
gl.drawArrays(gl.LINE_LOOP, 612, 6 );
gl.drawArrays(gl.LINE_LOOP, 618, 6 );
gl.drawArrays(gl.LINE_LOOP, 624, 6 );
gl.drawArrays(gl.LINE_LOOP, 630, 6 );
gl.drawArrays(gl.LINE_LOOP, 636, 6 );
gl.drawArrays(gl.LINE_LOOP, 642, 6 );
gl.drawArrays(gl.LINE_LOOP, 648, 6 );
gl.drawArrays(gl.LINE_LOOP, 654, 6 );
gl.drawArrays(gl.LINE_LOOP, 660, 6 );
gl.drawArrays(gl.LINE_LOOP, 666, 6 );
gl.drawArrays(gl.LINE_LOOP, 672, 6 );
gl.drawArrays(gl.LINE_LOOP, 678, 6 );
gl.drawArrays(gl.LINE_LOOP, 684, 6 );
gl.drawArrays(gl.LINE_LOOP, 690, 6 );
gl.drawArrays(gl.LINE_LOOP, 696, 6 );
gl.drawArrays(gl.LINE_LOOP, 702, 6 );
gl.drawArrays(gl.LINE_LOOP, 708, 6 );
gl.drawArrays(gl.LINE_LOOP, 714, 6 );