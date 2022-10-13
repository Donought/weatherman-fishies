
let extraText = 0
let fishNames = []
let fishScore = []
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
      rect(smargin,(smargin*3)+(smargin*2)*i,smargin*8+(extraText), smargin*2)
    }


    // Arrays containing data, labels and icons that will be displayed in the boxes
    boxContent = [tmp+"°",tmpmin+"°",tmpmax+"°",tmpfeel+"°",humidity+"%",weather,"kl: "+sunSetTime,precipitation+" ml",windSpeed+" m/s",windDir]
    boxNames = ["Temperatur: ","Min tmp: ","Maks tmp: ","Føles som: ","Luftfugtighed: ","Vejrbeskrivelse: ","Solnedgang: ","Nedbør: ","Vindhastighed: ","Vind fra: "]
    icons = [tempImg,tempImg,tempImg,tempImg,humidityImg,cloudImg,sunsetImg,rainImg,windImg,directionImg];
    // Inserting content into left boxes using a for-loop
    textSize(16)
    fill(0)
    textFont("Solis")
    for (let i = 0; i < boxContent.length; i++) {
    text(boxContent[i],160,160+(i*160/2))
    text(boxNames[i],smargin+smargin/3,160+(i*160/2))
    //sMod modifies the size of the icons
    sMod = 60
    image(icons[i],smargin*6.7+smargin/3,130+(i*160/2),sMod,sMod)
    }


// Seasonal fish
noFill()
stroke(0)
rect(width-smargin,0+smargin*3,-smargin*8+(extraText),height)
textSize(32)
fill(0)

text("Fisk lige nu:",width-smargin*7,smargin*4.9)
textSize(20)
for (let i = 0; i < fishNames.length; i++) {
  fill(0)
  noStroke()
  text(fishNames[i],width-smargin*8,smargin*6.5+i*28)
  if(fishScore[i]>1){
    fill(0,255,0)
  }else{
    fill(0)
  }
  text(fishScore[i],width-smargin*4,smargin*6.5+i*28)
}
fill(0)  
text("Type:                       Score:",width-smargin*8,smargin*5.7)



  }
function fishSorter(){
  for (let i = 0; i < relevantFish.length; i++) {
    fishNames.push(relevantFish[i].name)
    fishScore.push(relevantFish[i].val)
    
  }

}