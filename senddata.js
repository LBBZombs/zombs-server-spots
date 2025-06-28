let uid = 825;
let playerUid = ++uid;
let entities_1 = {};
let newEntities_1 = {};
let newEntitiesByPos_1 = {};
let buildings_1 = {};
let activeBuildingsByPos_1 = {};
let rss_1 = {};
let rssNearStash = {};
let GetGoldStash = ()=>{
    for (let i in buildings_1) {
        if (buildings_1[i].type == "GoldStash") {
            return buildings_1[i];
        }
    }
}
let towersLength = {
    Wall: 0,
    Door: 0,
    SlowTrap: 0,
    ArrowTower: 0,
    CannonTower: 0,
    MeleeTower: 0,
    MagicTower: 0,
    BombTower: 0,
    GoldMine: 0,
    Harvester: 0,
    GoldStash: 0
};
let towerLimits = {
    Wall: 1000,
    Door: 160,
    SlowTrap: 48,
    ArrowTower: 24,
    CannonTower: 24,
    MeleeTower: 24,
    MagicTower: 24,
    BombTower: 24,
    GoldMine: 8,
    Harvester: 8,
    GoldStash: 1
};
let goldstash;
let connectpacketdata = {
    allowed: 1,
    chatChannel: 0,
    effectiveDisplayName: "Player",
    effectiveTickRate: 20,
    maxPlayers: 32,
    opcode: 4,
    players: 1,
    startingTick: 0,
    tickRate: 20,
    uid: playerUid,
    x1: 0,
    x2: 24000,
    y1: 0,
    y2: 24000
};
let playerdata = {
    aimingYaw: 0,
    availableSkillPoints: 1,
    baseSpeed: 37.5,
    collisionRadius: 27,
    damage: 10,
    dead: 0,
    energy: 0,
    energyRegenerationRate: 0,
    entityClass: "PlayerEntity",
    experience: 0,
    firingTick: 0,
    gold: 0,
    hatName: "",
    health: 500,
    height: 32,
    isBuildingWalking: 0,
    isInvulnerable: 1,
    isPaused: 0,
    kills: 0,
    lastDamage: 0,
    lastDamageTarget: 0,
    lastDamageTick: 0,
    lastPetDamage: 0,
    lastPetDamageTarget: 0,
    lastPetDamageTick: 0,
    level: 1,
    maxEnergy: 0,
    maxHealth: 500,
    model: "GamePlayer",
    msBetweenFires: 300,
    name: "Player",
    partyId: 1,
    petUid: 0,
    position: {
        x: 24000 / 2,
        y: 24000 / 2
    },
    reconnectSecret: "",
    score: 0,
    slowed: 0,
    speedAttribute: 0,
    startChargingTick: 0,
    stone: 0,
    stunned: 0,
    timeDead: 0,
    token: 0,
    uid: playerUid,
    wave: 0,
    weaponName: "Pickaxe",
    weaponTier: 1,
    width: 32,
    wood: 0,
    yaw: 1,
    zombieShieldHealth: 0,
    zombieShieldMaxHealth: 0,
}
createBuildingEntity = (uid,x,y,type,yaw,tier)=>{
    if (type == "GoldStash")
        return {
            collisionRadius: 0,
            damage: 10,
            dead: 0,
            entityClass: "Prop",
            health: 1500,
            height: 95,
            interpolatedYaw: 0,
            maxHealth: 1500,
            model: type,
            partyId: 1,
            position: {
                x: x,
                y: y
            },
            slowed: 0,
            stunned: 0,
            tier: tier,
            timeDead: 0,
            uid: uid,
            width: 95,
            yaw: yaw,
        }
    if (type == "Wall")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 150,
            "maxHealth": 150,
            "damage": 10,
            "height": 47,
            "width": 47,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1
        }
    if (type == "Door")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 150,
            "maxHealth": 150,
            "damage": 10,
            "height": 47,
            "width": 47,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1
        }
    if (type == "SlowTrap")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 150,
            "maxHealth": 150,
            "damage": 10,
            "height": 47,
            "width": 47,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1
        }
    if (type == "ArrowTower")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 150,
            "maxHealth": 150,
            "damage": 10,
            "height": 95,
            "width": 95,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1,
            "towerYaw": 0,
            "firingTick": 0,
            "healingTick": 0
        }
    if (type == "CannonTower")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 150,
            "maxHealth": 150,
            "damage": 10,
            "height": 95,
            "width": 95,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1,
            "towerYaw": 0,
            "firingTick": 0,
            "healingTick": 0
        }
    if (type == "BombTower")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 150,
            "maxHealth": 150,
            "damage": 10,
            "height": 95,
            "width": 95,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1,
            "towerYaw": 0,
            "firingTick": 0,
            "healingTick": 0
        }
    if (type == "MagicTower")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 150,
            "maxHealth": 150,
            "damage": 10,
            "height": 95,
            "width": 95,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1,
            "towerYaw": 0,
            "firingTick": 0,
            "healingTick": 0
        }
    if (type == "MeleeTower")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 200,
            "maxHealth": 200,
            "damage": 10,
            "height": 95,
            "width": 95,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1,
            "towerYaw": 0,
            "firingTick": 0,
            "healingTick": 0
        }
    if (type == "GoldMine")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 150,
            "maxHealth": 150,
            "damage": 10,
            "height": 95,
            "width": 95,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1
        }
    if (type == "Harvester")
        return {
            "uid": uid,
            "entityClass": "Prop",
            "model": type,
            "position": {
                "x": x,
                "y": y
            },
            "yaw": yaw,
            "health": 150,
            "maxHealth": 150,
            "damage": 10,
            "height": 95,
            "width": 95,
            "collisionRadius": 0,
            "dead": 0,
            "timeDead": 0,
            "slowed": 0,
            "stunned": 0,
            "tier": tier,
            "partyId": 1,
            "harvestMax": 400,
            "stone": 0,
            "wood": 0,
            "firingTick": 0,
            "deposit": 0,
            "depositMax": 800,
            "lastHarvestedBy": ""
        }
}
let fixOccurredBuildingsByType = (x,y,type)=>{
    if (type == "Wall" || type == "Door" || type == "SlowTrap") {
        return x % 48 == 24 && y % 48 == 24 && !activeBuildingsByPos_1[(24 + x) + ", " + y] && !activeBuildingsByPos_1[(x - 24) + ", " + y] && !activeBuildingsByPos_1[x + ", " + (y + 24)] && !activeBuildingsByPos_1[x + ", " + (y - 24)] && !activeBuildingsByPos_1[(x - 24) + ", " + (y - 24)] && !activeBuildingsByPos_1[(24 + x) + ", " + (y + 24)] && !activeBuildingsByPos_1[(x - 24) + ", " + (y + 24)] && !activeBuildingsByPos_1[(24 + x) + ", " + (y - 24)];
    }
    return x % 48 == 0 && y % 48 == 0 && !activeBuildingsByPos_1[(24 + x) + ", " + y] && !activeBuildingsByPos_1[(x - 24) + ", " + y] && !activeBuildingsByPos_1[x + ", " + (y + 24)] && !activeBuildingsByPos_1[x + ", " + (y - 24)] && !activeBuildingsByPos_1[(x - 24) + ", " + (y - 24)] && !activeBuildingsByPos_1[(24 + x) + ", " + (y + 24)] && !activeBuildingsByPos_1[(x - 24) + ", " + (y + 24)] && !activeBuildingsByPos_1[(24 + x) + ", " + (y - 24)] && !activeBuildingsByPos_1[(48 + x) + ", " + y] && !activeBuildingsByPos_1[(x - 48) + ", " + y] && !activeBuildingsByPos_1[x + ", " + (y + 48)] && !activeBuildingsByPos_1[x + ", " + (y - 48)] && !activeBuildingsByPos_1[(x - 48) + ", " + (y - 48)] && !activeBuildingsByPos_1[(48 + x) + ", " + (y + 48)] && !activeBuildingsByPos_1[(x - 48) + ", " + (y + 48)] && !activeBuildingsByPos_1[(48 + x) + ", " + (y - 48)];
}
let arr_ = [[24, 24], [24, -24], [-24, 24], [-24, -24]];
let buildingRadius = (model,type)=>{
    let e = 24;
    let t;
    if (type == "Wall" || type == "Door" || type == "SlowTrap") {
        e = 0;
    }
    if (model == "Tree")
        t = 192;
    if (model == "Stone")
        t = 144;
    if (model == "NeutralCamp")
        t = 144;
    return [t / 2, e];
}
let checkOccupiedBuildingForRss = (rss,x,y,type)=>{
    let placements = [];
    let r2 = buildingRadius(rss.model, type);
    if (r2[1] == 24) {
        for (let i = 0; i < arr_.length; i++) {
            placements.push((Math.sqrt((rss.position.x - (x + arr_[i][0])) ** 2 + (rss.position.y - (y + arr_[i][1])) ** 2)))
        }
    } else
        placements.push(((rss.position.x - x) ** 2 + (rss.position.y - y) ** 2) ** (1 / 2))
    if (placements.find(e=>e < r2[0])) {
        return 1;
    }
}
let fixOccurredBuildingsForRssByType = (x,y,type)=>{
    for (let i in (goldstash ? rssNearStash : rss_1)) {
        if (checkOccupiedBuildingForRss(rss_1[i], x, y, type) === 1) {
            return false;
        }
        ;
    }
    return true;
}

let yaw;
let up;
let down;
let right;
let left;
let ticks = 0;
let packet = {
    send(event, data) {
        setTimeout(()=>{
            if (event == 4) {
                connectpacketdata.effectiveDisplayName = localStorage.name;
                playerdata.name = localStorage.name;
                game.network.onMessage({
                    ...connectpacketdata
                });

                game.network.onMessage({
                    name: 'SetItem',
                    response: {
                        itemName: 'Pickaxe',
                        tier: 1,
                        stacks: 1
                    },
                    opcode: 9
                })
                game.network.onMessage({
                    name: 'PartyInfo',
                    response: [{
                        playerUid: playerUid,
                        displayName: playerdata.name,
                        isLeader: 1,
                        canSell: 1
                    }],
                    opcode: 9
                })
                game.network.onMessage({
                    name: 'PartyShareKey',
                    response: {
                        partyShareKey: 'serverspots'
                    },
                    opcode: 9
                })
                game.network.onMessage({
                    name: 'DayCycle',
                    response: {
                        cycleStartTick: ticks,
                        nightEndTick: ticks + Infinity,
                        dayEndTick: 0,
                        isDay: 0
                    },
                    opcode: 9
                })
                game.network.onMessage({
                    name: 'BuildingShopPrices',
                    response: {
                        json: '[{"Name":"Wall","Class":"PlayerObject","GoldCosts":[0,5,30,60,80,100,250,800],"WoodCosts":[2,0,0,0,0,0,0,0],"StoneCosts":[0,2,0,0,0,0,0,0],"TokenCosts":[0,0,0,0,0,0,0,0],"Width":47.99,"Height":47.99,"Health":[150,200,300,400,600,800,1500,2500],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[5,7,12,17,25,40,80,250]},{"Name":"GoldStash","Class":"GoldStash","GoldCosts":[0,5000,10000,16000,20000,32000,100000,400000],"WoodCosts":[0,0,0,0,0,0,0,0],"StoneCosts":[0,0,0,0,0,0,0,0],"TokenCosts":[0,0,0,0,0,0,0,0],"Width":95.99,"Height":95.99,"Health":[1500,1800,2300,3000,5000,8000,12000,20000],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[50,60,70,90,110,150,400,700]},{"Name":"GoldMine","Class":"GoldMine","GoldCosts":[0,200,300,600,800,1200,8000,30000],"WoodCosts":[5,15,25,35,45,55,700,1600],"StoneCosts":[5,15,25,35,45,55,700,1600],"TokenCosts":[0,0,0,0,0,0,0,0],"Width":95.99,"Height":95.99,"Health":[150,250,350,500,800,1400,1800,2800],"GoldPerSecond":[4,6,7,10,12,15,25,35],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[5,7,12,17,25,40,70,120]},{"Name":"Door","Class":"Door","GoldCosts":[0,10,50,70,150,200,400,800],"WoodCosts":[5,5,0,0,0,0,0,0],"StoneCosts":[5,5,0,0,0,0,0,0],"TokenCosts":[0,0,0,0,0,0,0,0],"Width":47.99,"Height":47.99,"Health":[150,200,300,500,700,1000,1500,2000],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,1000],"HealthRegenPerSecond":[5,7,12,17,25,40,70,100]},{"Name":"CannonTower","Class":"Tower","GoldCosts":[0,100,200,600,1200,2000,8000,35000],"WoodCosts":[15,25,30,40,60,80,300,800],"StoneCosts":[15,25,40,50,80,120,300,800],"TokenCosts":[0,0,0,0,0,0,0,0],"TowerRadius":[500,500,500,500,600,600,600,600],"MsBetweenFires":[1000,769,625,500,400,350,250,250],"Height":95.99,"Width":95.99,"Health":[150,200,400,800,1200,1600,2200,3600],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[2,5,10,20,40,80,110,150],"DamageToZombies":[20,30,50,70,120,150,200,300],"DamageToPlayers":[5,5,5,5,5,5,6,8],"DamageToPets":[5,5,5,5,5,5,6,8],"DamageToNeutrals":[250,350,450,550,650,750,850,1000],"ProjectileLifetime":[1000,1000,1000,1000,1000,1000,1000,1000],"ProjectileVelocity":[60,65,70,70,75,80,100,140],"ProjectileName":"CannonProjectile","ProjectileAoe":[true,true,true,true,true,true,true,true],"ProjectileAoeRadius":[250,250,250,250,250,250,250,250],"ProjectileCollisionRadius":[10,10,10,10,10,10,10,10]},{"Name":"ArrowTower","Class":"ArrowTower","GoldCosts":[0,100,200,600,1200,2000,8000,35000],"WoodCosts":[5,25,30,40,50,70,300,800],"StoneCosts":[5,20,30,40,60,80,300,800],"TokenCosts":[0,0,0,0,0,0,0,0],"TowerRadius":[600,650,700,750,800,850,900,1000],"MsBetweenFires":[400,333,285,250,250,250,250,250],"Height":95.99,"Width":95.99,"Health":[150,200,400,800,1200,1600,2200,3600],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[2,5,10,20,40,80,110,150],"DamageToZombies":[20,40,70,120,180,250,400,500],"DamageToPlayers":[5,5,5,5,5,5,6,6],"DamageToPets":[5,5,5,5,5,5,6,6],"DamageToNeutrals":[250,350,450,550,650,750,850,1000],"ProjectileLifetime":[1300,1300,1300,1300,1300,1300,1300,1300],"ProjectileVelocity":[60,65,70,70,75,80,120,140],"ProjectileName":"ArrowProjectile","ProjectileAoe":[false,false,false,false,false,false,false,false],"ProjectileCollisionRadius":[10,10,10,10,10,10,10,10]},{"Name":"Harvester","Class":"Harvester","GoldCosts":[0,100,200,600,1200,2000,8000,10000],"WoodCosts":[5,25,30,40,50,70,300,600],"StoneCosts":[5,20,30,40,60,80,300,600],"TokenCosts":[0,0,0,0,0,0,0,0],"Height":95.99,"Width":95.99,"Health":[150,200,400,800,1200,1600,2200,2800],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[2,5,10,20,40,80,110,130],"HarvestAmount":[2.5,4.65,4.55,7.2,8.25,10,13.5,16],"HarvestCooldown":[1500,1400,1300,1200,1100,1000,900,800],"HarvestMax":[400,800,1200,1600,2000,2400,2800,3600],"HarvestRange":[300,300,300,300,300,300,300,300],"DepositCostPerMinute":[200,300,350,500,600,700,1200,1400],"DepositMax":[800,1200,1400,2000,2400,2800,4800,6000],"MaxYawDeviation":[70,70,70,70,70,70,70,70]},{"Name":"BombTower","Class":"Tower","GoldCosts":[0,100,200,600,1200,2000,8000,35000],"WoodCosts":[10,25,40,50,80,120,300,800],"StoneCosts":[10,25,40,50,80,120,300,800],"TokenCosts":[0,0,0,0,0,0,0,0],"TowerRadius":[1000,1000,1000,1000,1000,1000,1000,1000],"MsBetweenFires":[1000,1000,1000,1000,1000,1000,900,900],"Height":95.99,"Width":95.99,"Health":[150,200,400,800,1200,1600,2200,3600],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[2,5,10,20,40,80,110,150],"DamageToZombies":[30,60,100,140,200,600,1200,1600],"DamageToPlayers":[10,10,10,10,10,10,10,10],"DamageToPets":[10,10,10,10,10,10,10,10],"DamageToNeutrals":[250,350,450,550,650,750,850,1000],"ProjectileLifetime":[1000,1000,1000,1000,1000,1000,1000,1000],"ProjectileVelocity":[20,20,20,20,20,20,20,20],"ProjectileName":"BombProjectile","ProjectileAoe":[true,true,true,true,true,true,true,true],"ProjectileIgnoresCollisions":[true,true,true,true,true,true,true,true],"ProjectileAoeRadius":[250,250,250,250,250,250,250,250],"ProjectileCollisionRadius":[10,10,10,10,10,10,10,10],"ProjectileMaxRange":[1000,1000,1000,1000,1000,1000,1000,1000]},{"Name":"MagicTower","Class":"MagicTower","GoldCosts":[0,100,200,600,1200,2000,8000,35000],"WoodCosts":[15,25,40,50,70,100,300,800],"StoneCosts":[15,25,40,50,70,100,300,800],"TokenCosts":[0,0,0,0,0,0,0,0],"TowerRadius":[400,400,400,400,400,400,400,400],"MsBetweenFires":[800,800,700,600,500,400,300,300],"Height":95.99,"Width":95.99,"Health":[150,200,400,800,1200,1600,2200,3600],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[2,5,10,20,40,80,110,150],"DamageToZombies":[10,20,40,50,70,80,120,160],"DamageToPlayers":[5,5,5,5,5,5,5,5],"DamageToPets":[5,5,5,5,5,5,5,5],"DamageToNeutrals":[250,350,450,550,650,750,850,1000],"ProjectileLifetime":[500,500,500,500,500,500,500,500],"ProjectileVelocity":[45,45,45,45,45,45,45,45],"ProjectileName":"FireballProjectile","ProjectileAoe":[true,true,true,true,true,true,true,true],"ProjectileAoeRadius":[100,100,100,100,100,100,100,100],"ProjectileCollisionRadius":[10,10,10,10,10,10,10,10]},{"Name":"MeleeTower","Class":"MeleeTower","GoldCosts":[0,100,200,600,1200,2000,8000,35000],"WoodCosts":[10,25,30,40,50,70,300,800],"StoneCosts":[10,20,30,40,60,80,300,800],"TokenCosts":[0,0,0,0,0,0,0,0],"TowerRadius":[110,110,110,110,110,110,110,110],"MsBetweenFires":[400,333,285,250,250,250,250,250],"Height":95.99,"Width":95.99,"Health":[200,400,800,1200,1600,2200,4000,9000],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[2,5,10,20,40,80,220,350],"DamageToZombies":[80,120,200,280,500,1000,2000,3000],"DamageToPlayers":[5,5,5,5,5,5,6,6],"DamageToPets":[5,5,5,5,5,5,6,6],"DamageToNeutrals":[250,350,450,550,650,750,850,1000],"MaxYawDeviation":[30,30,30,30,30,30,30,30]},{"Name":"SlowTrap","Class":"Trap","GoldCosts":[0,100,200,400,600,800,1000,1500],"WoodCosts":[5,25,30,40,50,70,300,800],"StoneCosts":[5,20,30,40,60,80,300,800],"TokenCosts":[0,0,0,0,0,0,0,0],"Height":47.99,"Width":47.99,"Health":[150,200,400,800,1200,1600,2200,3000],"MsBeforeRegen":[10000,10000,10000,10000,10000,10000,10000,10000],"HealthRegenPerSecond":[2,5,10,20,40,80,110,150],"SlowDuration":[2500,2500,2500,3000,3000,3250,3500,4000],"SlowAmount":[0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.7]}]'
                    },
                    opcode: 9
                })
                game.network.onMessage({
                    name: 'ItemShopPrices',
                    response: {
                        json: '[{"Name":"Spear","Class":"MeleeWeapon","MsBetweenFires":[250,250,250,250,250,250,250],"DamageToZombies":[30,80,120,300,2000,8000,10000],"DamageToNeutrals":[50,80,100,200,250,400,600],"DamageToBuildings":[3,3.5,4,4.5,5,5.5,5.5],"DamageToPlayers":[15,16,17,18,20,22,22],"DamageToPets":[3,3.5,4,4.5,5,5.5,5.5],"GoldCosts":[100,400,3000,5000,25000,35000,90000],"StoneCosts":[0,0,0,0,0,0,0],"WoodCosts":[0,0,0,0,0,0,0],"TokenCosts":[0,0,0,0,0,0,0],"Range":[100,100,100,100,100,100,100],"MaxYawDeviation":[50,50,50,50,50,50,50]},{"Name":"Pickaxe","Class":"MeleeWeapon","MsBetweenFires":[300,300,285,250,200,200,200],"DamageToZombies":[20,20,20,20,20,20,20],"DamageToBuildings":[0,0,0,0,0,0,0],"DamageToPlayers":[0,0,0,0,0,0,0],"DamageToNeutrals":[10,10,10,10,10,10,10],"DamageToPets":[0,0,0,0,0,0,0],"GoldCosts":[0,1000,3000,6000,8000,24000,90000],"StoneCosts":[0,0,0,0,0,0,0],"WoodCosts":[0,0,0,0,0,0,0],"TokenCosts":[0,0,0,0,0,0,0],"Range":[100,100,100,100,100,100,100],"MaxYawDeviation":[70,70,70,70,70,70,70],"IsTool":true,"HarvestCount":[1,2,2,3,3,4,6]},{"Name":"Bow","Class":"RangedWeapon","DamageToZombies":[20,40,100,300,2400,10000,14000],"DamageToBuildings":[2,2.3,2.5,2.7,3,3,3],"DamageToPlayers":[22,24,26,28,30,32,32],"DamageToNeutrals":[50,100,150,200,250,400,700],"DamageToPets":[2,2.3,2.5,2.7,3,3,3],"GoldCosts":[100,400,2000,7000,24000,30000,90000],"StoneCosts":[0,0,0,0,0,0,0],"WoodCosts":[0,0,0,0,0,0,0],"TokenCosts":[0,0,0,0,0,0,0],"MsBetweenFires":[500,500,500,500,500,500,500],"ChargeTime":[150,150,150,150,150,150,150],"ProjectileVelocity":[100,100,100,100,100,100,100],"ProjectileName":"BowProjectile","ProjectileCollisionRadius":[10,10,10,10,10,10,10],"ProjectileLifetime":[550,550,550,550,550,550,550]},{"Name":"Crossbow","Class":"RangedWeapon","DamageToZombies":[10,10],"DamageToBuildings":[0,0],"DamageToPlayers":[0,0],"GoldCosts":[0,0],"StoneCosts":[0,0],"WoodCosts":[0,0],"TokenCosts":[0,0],"MsBetweenFires":[500,500],"ProjectileVelocity":[150,150],"ProjectileName":"BowProjectile","ProjectileCollisionRadius":[10,10],"ProjectileLifetime":[1000,1000]},{"Name":"Bomb","Class":"RangedWeapon","GoldCosts":[100,400,3000,5000,24000,30000,90000],"DamageToNeutrals":[50,100,150,200,250,300,500],"StoneCosts":[0,0,0,0,0,0,0],"WoodCosts":[0,0,0,0,0,0,0],"TokenCosts":[0,0,0,0,0,0,0],"MsBetweenFires":[500,500,500,500,500,500,500],"DamageToZombies":[10,30,80,150,1200,6000,9000],"DamageToBuildings":[1,1,1,1,1,1,1],"DamageToPlayers":[20,22,24,26,28,30,30],"DamageToPets":[1,1,1,1,1,1,1],"ProjectileVelocity":[40,40,40,40,40,40,40],"ProjectileName":"BombProjectile","ProjectileCollisionRadius":[10,10,10,10,10,10,10],"ProjectileLifetime":[700,700,700,700,700,700,700],"ProjectileAoe":[true,true,true,true,true,true,true],"ProjectileAoeRadius":[50,50,50,50,50,50,50],"ProjectileIgnoresCollisions":[false,false,false,false,false,false,false],"ProjectileMaxRange":[700,700,700,700,700,700,700]},{"Name":"HealthPotion","Class":"HealthPotion","GoldCosts":[100],"StoneCosts":[0],"WoodCosts":[0],"TokenCosts":[0],"PurchaseCooldown":15000},{"Name":"ZombieShield","Class":"ZombieShield","GoldCosts":[1000,3000,7000,14000,18000,22000,24000,30000,45000,70000],"StoneCosts":[0,0,0,0,0,0,0,0,0,0],"WoodCosts":[0,0,0,0,0,0,0,0,0,0],"TokenCosts":[0,0,0,0,0,0,0,0,0,0],"Health":[500,1000,1800,4000,10000,20000,35000,50000,65000,85000],"RechargePerSecond":[50,100,200,400,1000,2000,3500,5000,6500,8500],"MsBeforeRecharge":[10000,9000,8000,7000,6000,6000,6000,6000,6000,6000]},{"Name":"Pause","Class":"Pause","GoldCosts":[10000],"StoneCosts":[0],"WoodCosts":[0],"TokenCosts":[0],"PurchaseCooldown":240000},{"Name":"PetMiner","Class":"Pet","GoldCosts":[0,0,0,0,0,0,0,0],"WoodCosts":[0,0,0,0,0,0,0,0],"StoneCosts":[0,0,0,0,0,0,0,0],"TokenCosts":[0,100,100,100,100,200,200,300],"CollisionRadius":25,"Health":[400,800,1500,3000,5000,8000,10000,16000],"MsBeforeRegen":[8000,8000,8000,8000,8000,8000,8000,8000],"HealthRegenPerSecond":[5,5,5,5,5,5,5,5],"Speed":[30,32,34,35,35,37,37,38],"DamageToNeutrals":[80,100,150,200,250,400,500,600],"HarvestCount":[1,1,2,2,3,3,4,4],"Ranged":[false,false,false,false,false,false,false,false],"CanAttackPlayers":[false,false,false,false,false,false,false,false],"CanMine":[true,true,true,true,true,true,true,true],"LeashRange":[500,500,500,500,500,500,500,500],"HarvestLeashRange":[0,0,0,0,0,0,0,0],"AttackRange":[80,80,80,80,80,80,80,80],"MsBetweenFires":[500,450,450,400,400,380,380,350],"EvolvesAtLevel":[0,8,16,24,32,48,64,96],"ExperienceFromMiningPerHalfSecond":[1,1,1,1,1,1,1,1]},{"Name":"PetCARL","Class":"Pet","GoldCosts":[0,0,0,0,0,0,0,0],"WoodCosts":[0,0,0,0,0,0,0,0],"StoneCosts":[0,0,0,0,0,0,0,0],"TokenCosts":[0,100,100,100,100,200,200,300],"CollisionRadius":25,"Health":[400,800,1500,3000,5000,8000,10000,16000],"MsBeforeRegen":[8000,8000,8000,8000,8000,8000,8000,8000],"HealthRegenPerSecond":[5,5,5,5,5,5,5,5],"Speed":[30,32,34,35,35,37,37,38],"DamageToNeutrals":[80,100,150,200,250,400,500,600],"Ranged":[false,false,false,false,false,false,false,false],"CanAttackPlayers":[true,true,true,true,true,true,true,true],"LeashRange":[500,500,500,500,500,500,500,500],"AttackRange":[80,80,80,80,80,80,80,80],"MsBetweenFires":[500,490,490,490,480,480,470,470],"ProjectileLifetime":[1000,1000,1000,1000,1000,1000,1000,1000],"ProjectileVelocity":[60,60,60,60,60,60,60,60],"ProjectileName":"PetCARLProjectile","ProjectileAoe":[true,true,true,true,true,true,true,true],"ProjectileAoeRadius":[250,250,250,250,250,250,250,250],"ProjectileCollisionRadius":[10,10,10,10,10,10,10,10],"DamageToZombies":[30,100,400,600,1000,3000,6000,8000],"DamageToPlayers":[30,31,32,33,34,35,36,37],"DamageToBuildings":[2,2,2,3,3,3,4,4],"EvolvesAtLevel":[0,8,16,24,32,48,64,96],"ExperienceFromZombies":[30,28,25,25,25,25,25,25],"ExperienceFromNeutrals":[30,28,25,25,25,25,25,25]},{"Name":"HatHorns","Class":"Hat","GoldCosts":[0],"WoodCosts":[0],"StoneCosts":[0],"TokenCosts":[0]},{"Name":"PetHealthPotion","Class":"PetHealthPotion","GoldCosts":[100],"StoneCosts":[0],"WoodCosts":[0],"TokenCosts":[0]},{"Name":"PetWhistle","Class":"PetWhistle","GoldCosts":[0],"StoneCosts":[0],"WoodCosts":[0],"TokenCosts":[0]},{"Name":"PetRevive","Class":"PetRevive","GoldCosts":[0],"StoneCosts":[0],"WoodCosts":[0],"TokenCosts":[0]}]'
                    },
                    opcode: 9
                })
                game.network.onMessage({
                    name: 'Spells',
                    response: {
                        json: '[{"Name":"HealTowersSpell","VisualLifetime":10000,"VisualRadius":600,"Cooldown":[240000],"IsCooldownForParty":true,"Healing":[{"Type":"Tower","Amount":[50],"Over":[10000],"Radius":[600]}],"GoldCosts":[1000],"WoodCosts":[0],"StoneCosts":[0],"TokenCosts":[0]}]'
                    },
                    opcode: 9
                })
                game.network.onMessage({
                    name: 'SetPartyList',
                    response: [{
                        partyId: 1,
                        partyName: 'Party1',
                        isOpen: 0,
                        memberCount: 1
                    }],
                    opcode: 9
                })
                entities_1 = {};
                entities_1[playerUid] = {
                    ...playerdata
                };
                if (serverspots[game.options.serverId] && serverspots[game.options.serverId].spotEncoded) {
                    let spots = decodeSpotJSON(serverspots[game.options.serverId].spotEncoded);
                    for (let i = 0; i < 825; i++) {
                        delete entities_1[i + 1];
                        delete rss_1[i + 1];
                    }
                    for (let i in spots) {
                        let entity = toInclude(spots[i]);
                        entities_1[entity.uid] = entity;
                        rss_1[entity.uid] = entity;
                    }
                }
                setInterval(()=>{
                    game.network.onMessage({
                        tick: ticks++,
                        entities: entities_1,
                        byteSize: 48,
                        opcode: 0
                    })
                }
                , 50)
            }
            if (event == 3) {
                yaw = 1;
                if (data.up) {
                    up = 1;
                }
                if (data.down) {
                    down = 1;
                }
                if (data.right) {
                    right = 1;
                }
                if (data.left) {
                    left = 1;
                }
                if (data.up == 0) {
                    up = 0;
                }
                if (data.down == 0) {
                    down = 0;
                }
                if (data.right == 0) {
                    right = 0;
                }
                if (data.left == 0) {
                    left = 0;
                }
                if (up && !down && !right && !left) {
                    yaw = 0;
                }
                if (down && !up && !right && !left) {
                    yaw = 180;
                }
                if (right && !up && !down && !left) {
                    yaw = 90;
                }
                if (left && !up && !right && !down) {
                    yaw = 270;
                }
                if (up && !down && right && !left) {
                    yaw = 45;
                }
                if (up && !down && !right && left) {
                    yaw = 315;
                }
                if (!up && down && right && !left) {
                    yaw = 135;
                }
                if (!up && down && !right && left) {
                    yaw = 225;
                }
                if (up && down && !right && left) {
                    yaw = 270;
                }
                if (up && down && right && !left) {
                    yaw = 90;
                }
                if (up && !down && right && left) {
                    yaw = 0;
                }
                if (!up && down && right && left) {
                    yaw = 180;
                }
                if (up && down && !right && !left) {
                    yaw = 1;
                }
                if (!up && !down && right && left) {
                    yaw = 1;
                }
                if (up && down && right && left) {
                    yaw = 1;
                }
                playerdata.yaw = yaw;
            }
            if (event == 9) {
                if (data.name == "CastSpell") {
                    if (data.type == "Tree" || data.type == "Stone") {
                        if (data.x >= 0 && data.x <= 24000 && data.y >= 0 && data.y <= 24000 && !newEntitiesByPos_1[data.x + ", " + data.y + ", " + data.type]) {
                            let _uid = ++uid;
                            let entity = toInclude({
                                uid: _uid,
                                position: {
                                    x: data.x,
                                    y: data.y
                                },
                                model: data.type,
                                partyId: 1
                            })
                            newEntities_1[_uid] = entity;
                            newEntitiesByPos_1[data.x + ", " + data.y + ", " + data.type] = entity;
                            entities_1[_uid] = entity;
                        }
                    }
                }
                if (data.name == "MakeBuilding") {
                    if (!goldstash && data.type == "GoldStash" && data.x >= 192 && data.x <= 23808 && data.y >= 192 && data.y <= 23808 && fixOccurredBuildingsForRssByType(data.x, data.y, data.type)) {
                        let _uid = ++uid;
                        let obj = {
                            x: data.x,
                            y: data.y,
                            type: data.type,
                            dead: 0,
                            uid: _uid,
                            tier: 1,
                            yaw: data.yaw || 0
                        };
                        goldstash = obj;
                        buildings_1[_uid] = obj;
                        activeBuildingsByPos_1[data.x + ", " + data.y] = obj;
                        entities_1[_uid] = createBuildingEntity(_uid, data.x, data.y, data.type, data.yaw, 1);
                        ++towersLength[data.type];
                        game.network.onMessage({
                            name: 'LocalBuilding',
                            response: [obj],
                            opcode: 9
                        })
                        rssNearStash = {};
                        for (let i in rss_1) {
                            if (Math.abs(rss_1[i].position.y - goldstash.y) < 1225 && Math.abs(rss_1[i].position.x - goldstash.x) < 1225) {
                                rssNearStash[i] = rss_1[i];
                            }
                        }
                    }
                    if (goldstash && data.type !== "GoldStash" && !activeBuildingsByPos_1[data.x + ", " + data.y] && towersLength[data.type] < towerLimits[data.type] && ((Math.abs(data.y - goldstash.y) < 865 && Math.abs(data.x - goldstash.x) < 865) || data.type == "Harvester") && data.x >= 192 && data.x <= 23808 && data.y >= 192 && data.y <= 23808 && fixOccurredBuildingsByType(data.x, data.y, data.type) && fixOccurredBuildingsForRssByType(data.x, data.y, data.type)) {
                        let _uid = ++uid;
                        let obj = {
                            x: data.x,
                            y: data.y,
                            type: data.type,
                            dead: 0,
                            uid: _uid,
                            tier: 1,
                            yaw: data.yaw || 0
                        };
                        buildings_1[_uid] = obj;
                        activeBuildingsByPos_1[data.x + ", " + data.y] = obj;
                        entities_1[_uid] = createBuildingEntity(_uid, data.x, data.y, data.type, data.yaw, 1);
                        ++towersLength[data.type];
                        game.network.onMessage({
                            name: 'LocalBuilding',
                            response: [obj],
                            opcode: 9
                        })
                    }
                }
                if (data.name == "DeleteBuilding") {
                    if (buildings_1[data.uid]) {
                        buildings_1[data.uid].dead = 1;
                        game.network.onMessage({
                            name: 'LocalBuilding',
                            response: [buildings_1[data.uid]],
                            opcode: 9
                        });
                        --towersLength[buildings_1[data.uid].type];
                        delete activeBuildingsByPos_1[buildings_1[data.uid].x + ", " + buildings_1[data.uid].y];
                        delete buildings_1[data.uid];
                        delete entities_1[data.uid];
                        if (data.uid == goldstash.uid) {
                            goldstash = undefined;
                            for (let i in activeBuildingsByPos_1) {
                                delete activeBuildingsByPos_1[i];
                            }
                            for (let i in buildings_1) {
                                buildings_1[i].dead = 1;
                                game.network.onMessage({
                                    name: 'LocalBuilding',
                                    response: [buildings_1[i]],
                                    opcode: 9
                                });
                                delete buildings_1[i];
                                delete entities_1[i];
                            }
                            for (let i in towersLength) {
                                towersLength[i] = 0;
                            }
                            ;
                        }
                    }
                }
                if (data.name == "UpgradeBuilding") {
                    if (buildings_1[data.uid] && buildings_1[data.uid].tier < 8 && (buildings_1[data.uid].tier < goldstash.tier || goldstash.uid == data.uid)) {
                        let tier = buildings_1[data.uid].tier + 1;
                        buildings_1[data.uid].tier = tier;
                        activeBuildingsByPos_1[buildings_1[data.uid].x + ", " + buildings_1[data.uid].y].tier = tier;
                        game.network.onMessage({
                            name: 'LocalBuilding',
                            response: [buildings_1[data.uid]],
                            opcode: 9
                        })
                        entities_1[data.uid].tier = tier;
                    }
                }
            }
        }
        , 0);
    },
    connectpacket: connectpacketdata
}
let speed = 7.5;
let _speed = 7.5;
let dimension;
setInterval(()=>{
    speed = Math.min(45, _speed * dimension);
    if (yaw == 0) {
        playerdata.position.y -= speed;
    }
    if (yaw == 45) {
        playerdata.position.x += speed / 1.5;
        playerdata.position.y -= speed / 1.5;
    }
    if (yaw == 90) {
        playerdata.position.x += speed;
    }
    if (yaw == 135) {
        playerdata.position.x += speed / 1.5;
        playerdata.position.y += speed / 1.5;
    }
    if (yaw == 180) {
        playerdata.position.y += speed;
    }
    if (yaw == 225) {
        playerdata.position.x -= speed / 1.5;
        playerdata.position.y += speed / 1.5;
    }
    if (yaw == 270) {
        playerdata.position.x -= speed;
    }
    if (yaw == 315) {
        playerdata.position.x -= speed / 1.5;
        playerdata.position.y -= speed / 1.5;
    }
    playerdata.position.x = Math.max(0, Math.min(24000, playerdata.position.x)) | 0;
    playerdata.position.y = Math.max(0, Math.min(24000, playerdata.position.y)) | 0;
}
)
