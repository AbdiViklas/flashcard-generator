var ClozeCard = function (text, cloze) {
  if (this instanceof ClozeCard) {
    if (!text.includes(cloze)) {
      console.log("Sorry, that cloze text isn't found in the full text! Remember, capatilization counts.");
    } else {
      this.fullText = text;
      this.cloze = cloze.trim();
      this.partial = text.replace(cloze, "...");
    }
  } else {
    return new ClozeCard(text, cloze);
  }
}

module.exports = ClozeCard;