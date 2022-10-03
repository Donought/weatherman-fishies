function tempGraph(x, y, day, scale) {
    arr = json2.hourly.temperature_2m.slice(0, 23);
    w = 200 * scale; h = 200 * scale;
    rectMode(CORNER);
    fill(255);
    noStroke();
    rect(x, y, w, h);
    stroke(20)
    line(x + w / 8, y + h / 8 * 7, x + w / 8, y + h / 8);
    line(x + w / 8, y + h / 8 * 7, x + w / 8 * 7, y + h / 8 * 7);

    for (i = 0; i < 24; i++) {

    }
}