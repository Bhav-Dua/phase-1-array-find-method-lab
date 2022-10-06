function superbowlWin(record) {
    const w = record.find((element, index, array) => element.result === "W");

    if (w !== undefined) return w.year;
    else return w;
}