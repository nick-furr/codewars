function abbrevName(name) {
    var separate = name.split(" ");
    var abbrev = (separate[0].charAt(0) + "." + separate[1].charAt(0)).toUpperCase();
    return abbrev;
}