// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Canvas Image Classification using DoodleNet and p5.js
This example uses a callback pattern to create the classifier
=== */

// Initialize the Image Classifier method with DoodleNet.
let classifier;

// A variable to hold the canvas image we want to classify
let canvas;

// Two variable to hold the label and confidence of the result
let label;
let confidence;

// Variable holding prompt words 
let words = ['computer', 'sandwich', 'pencil', 'snake', 'dragon', 'microphone', 'apple', 'necklace', 'television', 'lightning', 'eye', 'mouth', 'book', 'wine_bottle', 'soccer_ball', 'cloud', 'moustache', 'coffee_cup', 'bracelet', 'diamond', 'star', 'sun', 'cake', 'toothpaste', 'speedboat', 'police_car', 'sword', 'snowflake', 'arm', 'leg', 'matches'];

let curr = 0;

let scoreboard = document.getElementById('score');

let score = 0;

let audio = document.getElementById('audio');

function preload() {
  // Load the DoodleNet Image Classification model
  classifier = ml5.imageClassifier('DoodleNet');
}

function setup() {
  // Create a canvas with 280 x 280 px
  canvas = createCanvas(680, 400);
  // Set canvas background to white
  background(255);
  // Whenever mouseReleased event happens on canvas, call "classifyCanvas" function
  canvas.mouseReleased(classifyCanvas);
  // Create a clear canvas button
  let button = createButton('Clear Canvas');
  // button.center('horizontal');
  button.position(377, 597);
  button.mousePressed(clearCanvas);
  // Create 'label' and 'confidence' div to hold results
  label = createDiv('Label: ...');
  confidence = createDiv('Confidence: ...');
}

function clearCanvas() {
  background(255);
}

function draw() {
  // Set stroke weight to 10
  strokeWeight(15);
  // Set stroke color to black
  stroke(0);
  // If mouse is pressed, draw line between previous and current mouse positions
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function classifyCanvas() {
  classifier.classify(canvas, gotResult);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  // Show the first label and confidence
  label.html('Label: ' + results[0].label);
  confidence.html('Confidence: ' + nf(results[0].confidence, 0, 2)); // Round the confidence to 0.01
  if (results[0].label == words[curr]){
    console.log('correct');
    score++;
    scoreboard.innerHTML = score;
    audio.play();
  }
}

window.addEventListener('load', ()=> {
  scoreboard.innerHTML = score;
  // curr = Math.floor(Math.random() * words.length);
  let promptWord = document.getElementById('prompt');
  promptWord.innerHTML = words[curr];

  let changeBtn = document.getElementById('change-btn');
  changeBtn.addEventListener('click', () => {
    if (curr == words.length-1){
      curr=0;
    }
    curr++;
    // curr = Math.floor(Math.random() * words.length);
    promptWord.innerHTML = words[curr];
  })
})