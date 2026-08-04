function decide(intent) {

  switch(intent) {

    case "RULES":
      return "SHOW_RULES";

    case "STATUS":
      return "SHOW_STATUS";

    case "HELP":
      return "SHOW_HELP";

    case "HISTORY":
      return "SHOW_HISTORY";

    case "STATS":
      return "SHOW_STATS";

    default:
      return "NORMAL_CHAT";
  }

}

module.exports = decide;
