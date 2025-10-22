
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

// --- Chore Functions ---
function mowYard(personName, callback) {
    console.log(`${personName} is starting to mow the yard... 🚜`);
    setTimeout(() => {
        console.log(`${personName} mowed the yard.`);
        callback(personName);
    }, CHORE_TIMES.MOW_YARD);
}


function weedEat(personName, callback) {
    console.log(`${personName} is starting to weed eat... 🌱`);
    setTimeout(() => {
        if (isAwake()) {
            console.log(`${personName} finished using the weed eater.`);
            callback(personName);
        } else {
            console.log(`${personName} fell asleep after mowing the yard.`);
        }
    }, CHORE_TIMES.WEED_EAT);
}



function trimHedges(personName, callback) {
    console.log(`${personName} is starting to trim the hedges... ✂️`);
    setTimeout(() => {
        if (isAwake()) {
            console.log(`${personName} finished trimming the hedges.`);
            callback(personName);
        } else {
            console.log(`${personName} fell asleep after weed eating the yard.`);
        }
    }, CHORE_TIMES.TRIM_HEDGES);
}



function collectWood(personName, callback) {
    console.log(`${personName} is starting to collect wood... 🪵`);
    setTimeout(() => {
        if (isAwake()) {
            console.log(`${personName} finished collecting wood.`);
            callback(personName);
        } else {
            console.log(`${personName} fell asleep after trimming the hedges.`);
        }
    }, CHORE_TIMES.COLLECT_WOOD);
}




function waterGarden(personName, callback) {
    console.log(`${personName} is starting to water the garden... 💧`);
    setTimeout(() => {
        if (isAwake()) {
            console.log(`${personName} finished watering the garden.`);
            callback(personName);
        } else {
            console.log(`${personName} fell asleep after collecting wood.`);
        }
    }, CHORE_TIMES.WATER_GARDEN);
}

function doSummerChores(personName) {
    if (typeof personName !== 'string') {
        console.error("Error: The person's name must be a string literal.");
        return;
    }

    mowYard(personName, (name) => {
        weedEat(name, (name) => {
            trimHedges(name, (name) => {
                collectWood(name, (name) => {
                    waterGarden(name, (name) => {
                        console.log(`\n🎉 ${name} finished all their chores!`);
                    });
                });
            });
        });
    });
}

doSummerChores("Elizabeth");