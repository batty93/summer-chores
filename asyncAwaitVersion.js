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

function mowYard(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is starting to mow the yard... 🚜`);
        setTimeout(() => {
            console.log(`${personName} mowed the yard.`);
            resolve(personName);
        }, CHORE_TIMES.MOW_YARD);
    });
}

function weedEat(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is starting to weed eat... 🌱`);
        setTimeout(() => {
            if (isAwake()) {
                console.log(`${personName} finished using the weed eater.`);
                resolve(personName);
            } else {
                const errorMessage = `${personName} fell asleep after mowing the yard.`;
                console.log(errorMessage);
                reject(new Error(errorMessage));
            }
        }, CHORE_TIMES.WEED_EAT);
    });
}

function trimHedges(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is starting to trim the hedges... ✂️`);
        setTimeout(() => {
            if (isAwake()) {
                console.log(`${personName} finished trimming the hedges.`);
                resolve(personName);
            } else {
                const errorMessage = `${personName} fell asleep after weed eating the yard.`;
                console.log(errorMessage);
                reject(new Error(errorMessage));
            }
        }, CHORE_TIMES.TRIM_HEDGES);
    });
}


function collectWood(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is starting to collect wood... 🪵`);
        setTimeout(() => {
            if (isAwake()) {
                console.log(`${personName} finished collecting wood.`);
                resolve(personName);
            } else {
                const errorMessage = `${personName} fell asleep after trimming the hedges.`;
                console.log(errorMessage);
                reject(new Error(errorMessage));
            }
        }, CHORE_TIMES.COLLECT_WOOD);
    });
}


function waterGarden(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is starting to water the garden... 💧`);
        setTimeout(() => {
            if (isAwake()) {
                console.log(`${personName} finished watering the garden.`);
                resolve(personName);
            } else {
                const errorMessage = `${personName} fell asleep after collecting wood.`;
                console.log(errorMessage);
                reject(new Error(errorMessage));
            }
        }, CHORE_TIMES.WATER_GARDEN);
    });
}

async function doSummerChores(personName) {
    if (typeof personName !== 'string') {
        console.error("Error: The person's name must be a string literal.");
        return;
    }

    try {
        let name = await mowYard(personName);
        name = await weedEat(name);
        name = await trimHedges(name);
        name = await collectWood(name);
        name = await waterGarden(name);

        console.log(`\n🎉 ${name} finished all their chores!`);
    } catch (error) {
        console.error(`\n🛑 Chores stopped: ${error.message}`);
    }
}

doSummerChores("Elizabeth");