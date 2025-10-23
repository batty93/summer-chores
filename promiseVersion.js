const CHORE_TIMES = {
    MOW_YARD: 2000,
    WEED_EAT: 1500,
    TRIM_HEDGES: 1000,
    COLLECT_WOOD: 2500,
    WATER_GARDEN: 500
};


function isAwake() {
    return Math.random() < 0.7;
}


function performChore(taskName, duration, personName, canFail, failMsg) {
    return new Promise((resolve, reject) => {
        if (taskName !== 'mowYard') {
            console.log(`${personName} is starting to ${taskName}...`);
        }

        setTimeout(() => {
            if (canFail && !isAwake()) {
                console.log(failMsg);
                reject(new Error(`${personName} fell asleep.`));
            } else {
                resolve(personName);
            }
        }, duration);
    });
}


function mowYard(personName) {
    console.log(`${personName} is starting to mow the yard... 🚜`);
    return performChore('mowYard', CHORE_TIMES.MOW_YARD, personName, false);
}

function weedEat(personName) {
    console.log(`${personName} mowed the yard.`);
    console.log(`${personName} is starting to weed eat... 🌱`);
    return performChore(
        'weed eat',
        CHORE_TIMES.WEED_EAT,
        personName,
        true,
        `${personName} fell asleep after mowing the yard.`
    );
}

function trimHedges(personName) {
    console.log(`${personName} finished using the weed eater.`);
    console.log(`${personName} is starting to trim the hedges... ✂️`);
    return performChore(
        'trim the hedges',
        CHORE_TIMES.TRIM_HEDGES,
        personName,
        true,
        `${personName} fell asleep after weed eating the yard.`
    );
}

function collectWood(personName) {
    console.log(`${personName} finished trimming the hedges.`);
    console.log(`${personName} is starting to collect wood... 🪵`);
    return performChore(
        'collect wood',
        CHORE_TIMES.COLLECT_WOOD,
        personName,
        true,
        `${personName} fell asleep after trimming the hedges.`
    );
}

function waterGarden(personName) {
    console.log(`${personName} finished collecting wood.`);
    console.log(`${personName} is starting to water the garden... 💧`);
    return performChore(
        'water the garden',
        CHORE_TIMES.WATER_GARDEN,
        personName,
        true,
        `${personName} fell asleep after collecting wood.`
    );
}


function doSummerChores(personName) {
    if (typeof personName !== 'string') {
        console.error("Error: The person's name must be a string literal.");
        return;
    }

    mowYard(personName)
        .then(weedEat)
        .then(trimHedges)
        .then(collectWood)
        .then(waterGarden)
        .then((name) => {
            console.log(`${name} finished watering the garden.`);
            console.log(`\n🎉 ${name} finished all their chores!`);
        })
        .catch((error) => {
        });
}

doSummerChores("Elizabeth");