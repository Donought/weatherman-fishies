function futureTemp() {
  function fText(txt, a, b, s) {
    textAlign(LEFT, CENTER);
    textSize(s);
    noStroke();
    fill(0);
    text(txt, x + a, y + b);
  }
  function fBox(a, b, c, d) {
    stroke(0);
    noFill();
    rect(x + a, y + b, c, d);
  }

  x = 450;
  y = 200;

  w = 1000;
  h = 650;

  fBox(0, 0, w, h);

  fText("Vejr i fremtiden", 20, 45, 40);
  //fLine(20, w - 20, 60);

  for (i = 0; i < 5; i++) {
    a = (h - 110) / 5;
    fBox(20, 90 + a * i, w - 40, a);
    fText(json2.daily.time[i + 1], 60, 90 + a * i + a * 0.5, 30);

    // Temperatur (både min og max i celsius)
    fBox(240, 100 + a * i, 390, a - 20);
    image(tempImg, x + 250, y + 110 + a * i, a - 40, a - 40);
    fText(
      "Min: " + json2.daily.temperature_2m_min[i + 1] + "°",
      330,
      90 + a * i + a * 0.5,
      30
    );
    fText(
      "Max: " + json2.daily.temperature_2m_max[i + 1] + "°",
      470,
      90 + a * i + a * 0.5,
      30
    );

    // Nedbør (sum i ml)
    fBox(640, 100 + a * i, w - 670, a - 20);
    image(rainImg, x + 660, y + 110 + a * i, a - 40, a - 40);
    fText(
      "Sum: " + json2.daily.precipitation_sum[i + 1] + " ml",
      760,
      90 + a * i + a * 0.5,
      30
    );
  }
}
