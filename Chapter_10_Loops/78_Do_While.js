let retry = 0;
do {
    console.log("Execute acode!");
    console.log("Retrying .....", retry);
    retry++;

} while (retry < 3);