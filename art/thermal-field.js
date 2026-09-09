// Attitude Fields: seeded, static p5.js illustration. Not scientific telemetry.
function renderThermalField(p, settings) {
  p.randomSeed(settings.seed);
  p.noiseSeed(settings.seed);
  p.background("#102941");
  const phase = p.random(p.TWO_PI);
  const strands = [];
  const radius = p.height * 0.34;
  for (let band = 0; band < settings.bands; band++) {
    const latitude = p.map(band, 0, settings.bands - 1, -1.43, 1.43);
    const points = [];
    for (let sample = 0; sample <= settings.detail; sample++) {
      const angle = p.map(sample, 0, settings.detail, 0, p.TWO_PI);
      const noise = p.noise(
        Math.cos(angle) + 2,
        Math.sin(angle) + 2,
        band * 0.09,
      );
      const modulation =
        1 +
        0.11 * Math.sin(angle * 3 + phase + latitude * settings.twist) +
        (noise - 0.5) * 0.14;
      const r = radius * Math.cos(latitude) * modulation;
      let x = r * Math.cos(angle);
      const y =
        radius * Math.sin(latitude) +
        radius * 0.14 * Math.sin(angle * 2 + latitude * settings.twist);
      let z = r * Math.sin(angle);
      const turn = latitude * settings.twist * 0.45;
      const turnedX = x * Math.cos(turn) - z * Math.sin(turn);
      z = x * Math.sin(turn) + z * Math.cos(turn);
      x = turnedX;
      const tiltedY = y * Math.cos(settings.tilt) - z * Math.sin(settings.tilt);
      z = y * Math.sin(settings.tilt) + z * Math.cos(settings.tilt);
      // A final roll gives the composed field an asymmetric axis.
      const roll = -0.48;
      points.push({
        x: p.width * 0.52 + x * Math.cos(roll) - tiltedY * Math.sin(roll),
        y: p.height * 0.52 + x * Math.sin(roll) + tiltedY * Math.cos(roll),
        z,
      });
    }
    strands.push(points);
  }
  const segments = [];
  strands.forEach((points, band) =>
    points
      .slice(1)
      .forEach((end, index) =>
        segments.push({
          start: points[index],
          end,
          band,
          depth: (end.z + points[index].z) / 2,
          index,
        }),
      ),
  );
  segments.sort((a, b) => a.depth - b.depth);
  p.noFill();
  for (const segment of segments) {
    const exposure = p.constrain(
      p.map(segment.depth, -radius, radius, 0, 1),
      0,
      1,
    );
    const warm = segment.band > settings.bands * 0.55;
    const color = p.lerpColor(
      p.color("#284f74"),
      p.color(warm ? "#e8b993" : "#a0c7ff"),
      Math.pow(exposure, 1.8),
    );
    p.stroke(color);
    p.strokeWeight(0.55 + exposure * 1.1);
    p.line(segment.start.x, segment.start.y, segment.end.x, segment.end.y);
    if (segment.index % 17 === 0 && segment.band % 4 === 0 && exposure > 0.55) {
      p.strokeWeight(2.3);
      p.point(segment.start.x, segment.start.y);
    }
  }
}
