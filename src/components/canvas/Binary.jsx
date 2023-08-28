import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Digits = () => {
  const [digits, setDigits] = useState([]);

  useEffect(() => {
    setDigits(generateDigits());
  }, []);

  useFrame((state, delta) => {
    setDigits((prevDigits) =>
      prevDigits.map((digit) => {
        digit.position[1] += delta * digit.speed;
        if (digit.position[1] > 3) {
          digit.position[1] = -3;
          digit.value = Math.round(Math.random());
          digit.color = digit.value === 0 ? "#f272c8" : "#52c7f2";
          digit.speed = randomRange(10, 30); // Adjust the speed range for desired animation
        }
        return digit;
      })
    );
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {digits.map((digit, index) => (
        <Html key={index} position={digit.position}>
          <div
            style={{
              color: digit.color,
              fontSize: "30px",
              fontFamily: "monospace",
              position: "absolute",
              transform: "translate(-60%, -60%)",
              animation: `move-${index} ${digit.speed}s linear infinite`,
            }}
          >
            {digit.value}
          </div>
        </Html>
      ))}
    </group>
  );
};

const generateDigits = () => {
  const digits = [];
  const totalDigits = 1000; // Increase the number of digits here

  for (let i = 0; i < totalDigits; i++) {
    const value = Math.round(Math.random());
    const position = [
      randomRange(-20, 20), // Adjust the range for the x position
      randomRange(-20, 20), // Adjust the range for the y position
      randomRange(-20, 20), // Adjust the range for the z position
    ];
    const color = value === 0 ? "#f272ff" : "#52c7f2";
    const speed = randomRange(20, 30); // Adjust the speed range for desired animation

    digits.push({
      value,
      position,
      color,
      speed,
    });
  }

  return digits;
};

const randomRange = (min, max) => {
  return min + Math.random() * (max - min);
};

const BinaryCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Digits />

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BinaryCanvas;
