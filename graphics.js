
let extraText = 0
function menuline() {
    // Creates menuline at the top
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

    // Main body
    smargin = 40;
    fill(200, 200, 200);
    stroke(0);
    rect(0+smargin,0+smargin*3,width-smargin*2,height+smargin*9);
    
    
    // Left side boxes
    
  // Makes sure that the weather descriptions fit
     if(weather.length > 15){
  extraText = 0.5*weather.length
    }
      for (let i = 0; i < 11; i++) {
      rect(smargin,(smargin*3)+(smargin*2)*i,smargin*5.6+(extraText), smargin*2)
    }


    // Arrays containing data and labels that will be displayed in the boxes
    boxContent = [tmp,tmpmin,tmpmax,tmpfeel,humidity,weather,sunSetTime,precipitation,windSpeed,windDir]
    boxNames = ["Temperatur: ","Min tmp: ","Maks tmp: ","Føles som: ","Luftfugtighed: ","Vejrbeskrivelse: ","Solnedgang: ","Nedbør: ","Vindhastighed: ","Vind fra: "]
    
    // Content for boxes left
    textSize(16)
    fill(0)
    textFont("Solis")
    for (let i = 0; i < boxContent.length; i++) {
    text(boxContent[i],160,165+(i*165/2))
    text(boxNames[i],smargin+smargin/3,165+(i*165/2))
    }
    
  }
  function fdisplay(){
    fill(255,0,0)
rect(width-smargin*2,0,width-smargin,10)

  }