
function menuline() {
    let spacing = 260;
    let hspace = 120;
    fill(0, 0, 240);
    rect(0, 0, width, hspace * prop);
    strokeWeight(2);
    line(hspace * prop, -hspace * prop, hspace * prop, hspace * prop);
    for (let i = 0; i < 9; i++) {
      line((hspace * prop) + (spacing * prop) * i, -spacing * prop, (hspace * prop) + spacing * prop * i, hspace * prop);
    }
    line(0, hspace * prop, width, hspace * prop);
    strokeWeight(1);
  }

function fpage() {
    smargin = 40;
    stroke(0);
    fill(200, 200, 200);
    // Main body
    rect(0+smargin,0+smargin*3,width-smargin*2,height+smargin*9);
    // Left side boxes
    
    for (let i = 0; i < 7; i++) {
      rect(smargin,(smargin*3)+(smargin*2)*i,smargin*5, smargin*2)
    }
    boxContent = [tmp,tmpmin,tmpmax,tmpfeel,humidity,weather,sunSetTime]


    
  }
  