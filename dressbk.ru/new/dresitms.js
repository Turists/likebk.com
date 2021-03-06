//update 11.01.09 by gram
var dressItems = {


/*NEW ------------------------------------------------------------------------------------------(�������� ��������)---------------------------------------------------------------------------------*/
avengersword: {id:'avengersword',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������� [10]',
		common: {weight:25,price:330,durability:50},
		required: {dexterity:60,intuition:45,level:10,knifeskill:5,endurance:30,strength:25},
		modify: {dexterity:7},
		properties: {mindamage:37,maxdamage:78,criticalhit:190,twohandled:'yes',blockzones:'+'},
		setlink: {name:'avenger'}
		
	},
avengerdagger: {id:'avengerdagger',category:'knives',slot:'w3',width:60,height:60,caption:'������ �������� [10]',
		common: {weight:10,price:220,durability:50},
		required: {dexterity:60,intuition:45,level:10,knifeskill:5,endurance:30,strength:25},
		modify: {jumpaway:90,dexterity:4,intuition:2,antijumpaway:15,criticalhit:75,knifeskill:1,piercearmor:75},
		properties: {mindamage:8,maxdamage:22,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'avenger'}
		
	},
avengerking: {id:'avengerking',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� [10]',
		common: {weight:1,price:140,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:30,criticalhit:95,jumpaway:45,dexterity:3,hitpoints:28,strength:1},
		setlink: {name:'avenger'}
	},
avengeramulet: {id:'avengeramulet',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ �������� [10]',
		common: {weight:1,price:336,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:65,jumpaway:110,dexterity:4,magicdefence:60,defence:60,hitpoints:65},
		setlink: {name:'avenger'}
	},
avengerearrings: {id:'avengerearrings',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������� [10]',
		common: {weight:1,price:240,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:30,strength:25},
		modify: {criticalhit:120,jumpaway:120,counterstroke:13,dexterity:6,intuition:3,weaponskill:1},
		setlink: {name:'avenger'}
	},
avengershield: {id:'avengershield',category:'shields',slot:'w10',width:60,height:60,caption:'��� �������� [10]',
		common: {weight:15,price:266,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:50,criticalhit:95,jumpaway:95,defence:50,hitpoints:56},
		setlink: {name:'avenger'},
		defences: {crush:'normal',thrust:'weak',cut:'good',sabre:'normal'}
	},
avengerleggings: {id:'avengerleggings',category:'pants',slot:'w19',caption:'������ �������� [10]',
		common: {weight:10,price:210,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:40,criticalhit:40,jumpaway:40,dexterity:2,intuition:2,magicdefence:40},
		properties: {defence:45},
		setlink: {name:'avenger'}
	},
avengerbelt: {id:'avengerbelt',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������� [10]',
		common: {weight:2,price:196,durability:40},
		required: {dexterity:60,intuition:45,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:40,counterstroke:17,magicdefence:50,hitpoints:30},
		setlink: {name:'avenger'}
	},
avengerbracers: {id:'avengerbracers',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������� [10]',
		common: {weight:2,price:196,durability:40},
		required: {dexterity:60,intuition:45,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:25,criticalhit:65,counterstroke:17,dexterity:2,intuition:2,weaponskill:1,hitpoints:24},
		setlink: {name:'avenger'}
	
	},
avengerhelmet: {id:'avengerhelmet',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������� [10]',
		common: {weight:15,price:294,durability:60},
		required: {dexterity:50,intuition:40,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:50,criticalhit:60,jumpaway:35,dexterity:2,magicdefence:70,hitpoints:44},
		properties: {defence:70},
		setlink: {name:'avenger'}
   	
	},
avengergloves: {id:'avengergloves',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������� [10]',
		common: {weight:1,price:182,durability:30},
		required: {dexterity:60,intuition:45,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:45,jumpaway:40,dexterity:2,intuition:2,weaponskill:3,hitpoints:17},
		setlink: {name:'avenger'}
	},
avengerboots: {id:'avengerboots',category:'boots',slot:'w12',width:60,height:40,caption:'������ �������� [10]',
		common: {weight:10,price:210,durability:50},
		required: {dexterity:50,intuition:40,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:40,criticalhit:40,jumpaway:70,dexterity:4,magicdefence:40,defence:40},
		setlink: {name:'avenger'}
	},
avengerarmor: {id:'avengerarmor',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� �������� [10]',
		common: {weight:40,price:532,durability:100},
		required: {dexterity:60,intuition:45,level:10,endurance:30,strength:25},
		modify: {anticriticalhit:65,criticalhit:60,jumpaway:70,dexterity:7,intuition:3,magicdefence:80,hitpoints:74,strength:2},
		properties: {defence:80},
		setlink: {name:'avenger'}
	},
/*NEW ------------------------------------------------------------------------------------------(�������� Ice Power)---------------------------------------------------------------------------------*/
StaffIcePower: {id:'StaffIcePower',category:'staffs',slot:'w3',width:60,height:60,caption:'Staff of Ice Power',imp1:true,
		common: {weight:5,durability:50,eprice:26.97},
		required: {level:11},
		modify: {watermagicdefencereduce:6,watermagicpower:28,intellect:8,watermagicskill:3,magicdefence:70,defence:67,hitpoints:85,mana:60,manaconsumption:6},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
        setlink: {name:'IcePower'}, 
		attacks: {water:'routinely',crush:'small'}
	},
	BootsIcePower: {id:'BootsIcePower',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Ice Power',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:8.97},
		required: {level:11},
		modify: {watermagicdefencereduce:1,anticriticalhit:40,watermagicpower:6,intellect:2,magicdefence:40,defence:40,hitpoints:40,mana:85},
		setlink: {name:'IcePower'}, 
	},
	GlovesIcePower: {id:'GlovesIcePower',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Ice Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:9.72},
		required: {level:11},
		modify: {anticriticalhit:35,watermagicdefencereduce:2,watermagicpower:8,intellect:2,staffskill:1,magicdefence:25,defence:35,hitpoints:30,mana:70},
		setlink: {name:'IcePower'}, 
	},
	ArmorIcePower: {id:'ArmorIcePower',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Robe of Ice Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:22.47},
		required: {level:11},
		modify: {anticriticalhit:50,watermagicdefencereduce:3,watermagicpower:28,intellect:6,watermagicskill:3,magicdefence:50,defence:50,hitpoints:138,mana:165},
		setlink: {name:'IcePower'}, 
	},
	HelmetIcePower: {id:'HelmetIcePower',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Ice Power',imp1:true,
		common: {weight:2,durability:30,eprice:11.97},
		required: {level:11},
		modify: {watermagicdefencereduce:2,watermagicpower:8,intellect:5,watermagicskill:1,magicdefence:45,defence:35,hitpoints:55,mana:85},
		setlink: {name:'IcePower'}, 
	},
	BracersIcePower: {id:'BracersIcePower',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bracers of Ice Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:8.22},
		required: {level:11},
		modify: {watermagicdefencereduce:2,watermagicpower:6,intellect:3,magicdefence:33,defence:28,hitpoints:32,mana:60},
		setlink: {name:'IcePower'}, 
	},
	BeltIcePower: {id:'BeltIcePower',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Ice Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:7.47},
		required: {level:11},
		modify: {watermagicdefencereduce:1,watermagicpower:8,intellect:2,magicdefence:40,defence:28,hitpoints:35,mana:60},
		setlink: {name:'IcePower'}, 
	},
	LeggingsIcePower: {id:'LeggingsIcePower',category:'pants',slot:'w19',caption:'Leggings of Ice Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:9.35},
		required: {level:11},
		modify: {watermagicdefencereduce:1,anticriticalhit:40,watermagicpower:8,intellect:2,mana:50},
		setlink: {name:'IcePower'}, 
	},
	
	RingIcePower: {id:'RingIcePower',category:'rings',slot:'w19',caption:'Ring of Ice Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.99},
		required: {level:11},
		modify: {watermagicdefencereduce:2,watermagicpower:3,watermagicskill:2,intellect:7,magicdefence:70,defence:60},
		setlink: {name:'IcePower'}, 
	},
	AmuletIcePower: {id:'AmuletIcePower',category:'necklaces',slot:'w19',caption:'Amulet of Ice Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:14.99},
		required: {level:11},
		modify: {watermagicdefencereduce:3,anticriticalhit:50,watermagicpower:8,intellect:5,magicdefence:85,defence:150},
		setlink: {name:'IcePower'}, 
	},
	EarringsIcePower: {id:'EarringsIcePower',category:'earrings',slot:'w19',caption:'Earrings of Ice Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:11.99},
		required: {level:11},
		modify: {hitpoints:58,manaconsumption:8,watermagicdefencereduce:3,watermagicskill:2,anticriticalhit:95,watermagicpower:26,intellect:9,magicdefence:28,defence:60},
		setlink: {name:'IcePower'}, 
	},

/*NEW ------------------------------------------------------------------------------------------(�������� Fire Power)---------------------------------------------------------------------------------*/
StaffofFirePower: {id:'StaffofFirePower',category:'staffs',slot:'w3',width:60,height:60,caption:'Staff of Fire Power',imp1:true,
		common: {weight:5,durability:50,eprice:26.97},
		required: {level:11},
		modify: {firemagicdefencereduce:6,firemagicpower:28,intellect:8,firemagicskill:3,magicdefence:55,defence:55,hitpoints:85,mana:83,manaconsumption:6},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
        setlink: {name:'FirePower'},
		attacks: {fire:'routinely',crush:'small'}
	},
	BootsofFirePower: {id:'BootsofFirePower',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Fire Power',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:8.75},
		required: {level:11},
		modify: {firemagicdefencereduce:1,anticriticalhit:40,firemagicpower:6,intellect:2,magicdefence:33,defence:28,hitpoints:40,mana:90},
		setlink: {name:'FirePower'},
	},
	GlovesofFirePower: {id:'GlovesofFirePower',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Fire Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:9.72},
		required: {level:11},
		modify: {anticriticalhit:40,firemagicdefencereduce:2,firemagicpower:8,intellect:2,staffskill:1,magicdefence:28,defence:17,hitpoints:36,mana:75},
		setlink: {name:'FirePower'},
	},
	RobeofFirePower: {id:'RobeofFirePower',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Robe of Fire Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:22.47},
		required: {level:11},
		modify: {anticriticalhit:45,firemagicdefencereduce:3,firemagicpower:28,intellect:6,firemagicskill:3,magicdefence:40,defence:50,hitpoints:138,mana:160},
		setlink: {name:'FirePower'},
	},
	HelmetofFirePower: {id:'HelmetofFirePower',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Fire Power',imp1:true,
		common: {weight:2,durability:30,eprice:11.97},
		required: {level:11},
		modify: {firemagicdefencereduce:2,firemagicpower:8,intellect:5,firemagicskill:1,magicdefence:50,defence:23,hitpoints:50,mana:95},
		setlink: {name:'FirePower'},
	},
	BracersofFirePower: {id:'BracersofFirePower',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bracers of Fire Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:8.22},
		required: {level:11},
		modify: {firemagicdefencereduce:2,firemagicpower:6,intellect:3,magicdefence:38,defence:11,hitpoints:28,mana:66},
		setlink: {name:'FirePower'},
	},
	BeltofFirePower: {id:'BeltofFirePower',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Fire Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:7.47},
		required: {level:11},
		modify: {firemagicdefencereduce:1,firemagicpower:8,intellect:2,magicdefence:28,defence:23,hitpoints:40,mana:55},
		setlink: {name:'FirePower'},
	},
	LeggingsofFirePower: {id:'LeggingsofFirePower',category:'pants',slot:'w19',caption:'Leggings of Fire Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:9.35},
		required: {level:11},
		modify: {firemagicdefencereduce:1,anticriticalhit:35,firemagicpower:8,intellect:2,hitpoints:40,mana:90},
		setlink: {name:'FirePower'},
	},
	RingofFirePower: {id:'RingofFirePower',category:'rings',slot:'w19',caption:'Ring of Fire Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.99},
		required: {level:11},
		modify: {firemagicdefencereduce:2,intellect:8,magicdefence:28,mana:105,firemagicskill:2},
		setlink: {name:'FirePower'},
	},
	AmuletofFirePower: {id:'AmuletofFirePower',category:'necklaces',slot:'w19',caption:'Amulet of Fire Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:14.99},
		required: {level:11},
		modify: {firemagicdefencereduce:3,intellect:5,mana:160,anticriticalhit:60,firemagicpower:8,magicdefence:17,defence:72},
		setlink: {name:'FirePower'},
	},
	EarringsofFirePower: {id:'EarringsofFirePower',category:'earrings',slot:'w19',caption:'Earrings of Fire Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:11.99},
		required: {level:11},
		modify: {firemagicdefencereduce:3,manaconsumption:6,intellect:11,firemagicskill:2,hitpoints:64,anticriticalhit:50,firemagicpower:45},
		setlink: {name:'FirePower'},
	},


/*NEW ------------------------------------------------------------------------------------------(�������� Air Power)---------------------------------------------------------------------------------*/
StaffofAirPower: {id:'StaffofAirPower',category:'staffs',slot:'w3',width:60,height:60,caption:'Staff of Air Power',imp1:true,
		common: {weight:5,durability:50,eprice:26.97},
		required: {level:11},
		modify: {airmagicdefencereduce:6,intellect:8,airmagicskill:3,hitpoints:110,mana:50,airmagicpower:28,defence:50,magicdefence:60,manaconsumption:6},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
        setlink: {name:'AirPower'},
		attacks: {air:'routinely',crush:'small'}
	},
BootsofAirPower: {id:'BootsofAirPower',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Air Power',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:8.75},
		required: {level:11},
		modify: {airmagicdefencereduce:1,anticriticalhit:33,airmagicpower:6,intellect:3,magicdefence:27,defence:17,hitpoints:28,mana:83},
		setlink: {name:'AirPower'},
	},
	GlovesofAirPower: {id:'GlovesofAirPower',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Air Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:9.72},
		required: {level:11},
		modify: {anticriticalhit:28,airmagicdefencereduce:2,airmagicpower:8,intellect:3,staffskill:1,magicdefence:27,defence:17,hitpoints:33,mana:72},
		setlink: {name:'AirPower'},
	},
	RobeofAirPower: {id:'RobeofAirPower',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Robe of Air Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:22.47},
		required: {level:11},
		modify: {anticriticalhit:40,airmagicdefencereduce:3,airmagicpower:28,intellect:7,airmagicskill:3,magicdefence:50,defence:40,hitpoints:120,mana:170},
		setlink: {name:'AirPower'},
	},
	HelmetofAirPower: {id:'HelmetofAirPower',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Air Power',imp1:true,
		common: {weight:2,durability:30,eprice:11.97},
		required: {level:11},
		modify: {airmagicdefencereduce:2,airmagicpower:8,intellect:8,airmagicskill:1,magicdefence:27,defence:17,hitpoints:50,mana:95},
		setlink: {name:'AirPower'},
	},
	BracersofAirPower: {id:'BracersofAirPower',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bracers of Air Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:8.22},
		required: {level:11},
		modify: {airmagicdefencereduce:2,airmagicpower:6,intellect:3,magicdefence:27,defence:17,hitpoints:28,mana:72},
		setlink: {name:'AirPower'},
	},
	BeltofAirPower: {id:'BeltofAirPower',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Air Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:7.47},
		required: {level:11},
		modify: {airmagicdefencereduce:1,airmagicpower:8,intellect:2,magicdefence:17,defence:17,hitpoints:30,mana:53},
		setlink: {name:'AirPower'},
	},
	LeggingsofAirPower: {id:'LeggingsofAirPower',category:'pants',slot:'w19',caption:'Leggings of Air Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:9.35},
		required: {level:11},
		modify: {airmagicdefencereduce:1,anticriticalhit:40,airmagicpower:8,intellect:4,magicdefence:17,defence:11,hitpoints:40,mana:72},
		setlink: {name:'AirPower'},
	},
	RingofAirPower: {id:'RingofAirPower',category:'rings',slot:'w19',caption:'Ring of Air Power',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:11},
		modify: {airmagicdefencereduce:2,manaconsumption:2,intellect:9,airmagicskill:2,mana:127},
		setlink: {name:'AirPower'},
	},
	AmuletofAirPower: {id:'AmuletofAirPower',category:'necklaces',slot:'w19',caption:'Amulet of Air Power ',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:14.99},
		required: {level:11},
		modify: {airmagicdefencereduce:3,intellect:8,mana:138,anticriticalhit:60,airmagicpower:8,magicdefence:17,defence:40},
		setlink: {name:'AirPower'},
	},
	EarringsofAirPower: {id:'EarringsofAirPower',category:'earrings',slot:'w19',caption:'Earrings of Air Power',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:11.99},
		required: {level:11},
		modify: {airmagicdefencereduce:3,manaconsumption:11,intellect:12,airmagicskill:2,hitpoints:40,anticriticalhit:50,airmagicpower:19},
		setlink: {name:'AirPower'},
	},


/*NEW ------------------------------------------------------------------------------------------(�������� Earth Power)---------------------------------------------------------------------------------*/
StaffoftheEarthPower: {id:'StaffoftheEarthPower',category:'staffs',slot:'w3',width:60,height:60,caption:'Staff of the Earth Power ',imp1:true,
		common: {weight:5,durability:50,eprice:26.97},
		required: {level:11},
		modify: {earthmagicdefencereduce:6,earthmagicpower:28,intellect:8,earthmagicskill:3,magicdefence:60,defence:50,hitpoints:112,mana:84,manaconsumption:6},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
        setlink: {name:'EarthPower'},     
		attacks: {earth:'routinely',crush:'small'}
	},
BootsoftheEarthPower: {id:'BootsoftheEarthPower',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of the Earth Power',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:8.75},
		required: {level:11},
		modify: {earthmagicdefencereduce:1,anticriticalhit:40,earthmagicpower:6,intellect:2,magicdefence:28,defence:38,hitpoints:68,mana:90},
		setlink: {name:'EarthPower'}, 
	},
	GlovesoftheEarthPower: {id:'GlovesoftheEarthPower',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of the Earth Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:9.72},
		required: {level:11},
		modify: {anticriticalhit:40,earthmagicdefencereduce:2,earthmagicpower:8,intellect:2,staffskill:1,magicdefence:18,defence:28,hitpoints:60,mana:105},
		setlink: {name:'EarthPower'}, 
	},
	RobeoftheEarthPower: {id:'RobeoftheEarthPower',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Robe of the Earth Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:22.47},
		required: {level:11},
		modify: {anticriticalhit:55,earthmagicdefencereduce:3,earthmagicpower:28,intellect:6,earthmagicskill:3,magicdefence:40,defence:45,hitpoints:152,mana:185},
		setlink: {name:'EarthPower'}, 
	},
	HelmetoftheEarthPower: {id:'HelmetoftheEarthPower',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of the Earth Power',imp1:true,
		common: {weight:2,durability:30,eprice:11.97},
		required: {level:11},
		modify: {earthmagicdefencereduce:2,earthmagicpower:8,intellect:5,earthmagicskill:1,magicdefence:23,defence:40,hitpoints:85,mana:115},
		setlink: {name:'EarthPower'}, 
	},
	BracersoftheEarthPower: {id:'BracersoftheEarthPower',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bracers of the Earth Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:8.22},
		required: {level:11},
		modify: {earthmagicdefencereduce:2,earthmagicpower:6,intellect:3,magicdefence:23,defence:17,hitpoints:66,mana:95},
		setlink: {name:'EarthPower'}, 
	},
	BeltoftheEarthPower: {id:'BeltoftheEarthPower',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of the Earth Power',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:7.47},
		required: {level:11},
		modify: {earthmagicdefencereduce:1,earthmagicpower:8,intellect:2,magicdefence:23,defence:23,hitpoints:60,mana:75},
		setlink: {name:'EarthPower'}, 
	},
	LeggingsoftheEarthPower: {id:'LeggingsoftheEarthPower',category:'pants',slot:'w19',caption:'Leggings of the Earth Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:9.35},
		required: {level:11},
		modify: {earthmagicdefencereduce:1,anticriticalhit:40,earthmagicpower:8,intellect:2,hitpoints:66,mana:86},
		setlink: {name:'EarthPower'}, 
	},
	RingoftheEarthPower: {id:'RingoftheEarthPower',category:'rings',slot:'w19',caption:'Ring of the Earth Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.39},
		required: {level:11},
		modify: {earthmagicdefencereduce:2,intellect:7,earthmagicskill:2,hitpoints:55,mana:145},
		setlink: {name:'EarthPower'}, 
	},
	AmuletoftheEarthPower: {id:'AmuletoftheEarthPower',category:'necklaces',slot:'w19',caption:'Amulet of the Earth Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:14.99},
		required: {level:11},
		modify: {earthmagicdefencereduce:3,intellect:5,hitpoints:123,mana:170,earthmagicpower:8,magicdefence:28,defence:50},
		setlink: {name:'EarthPower'}, 
	},
	EarringsoftheEarthPower: {id:'EarringsoftheEarthPower',category:'earrings',slot:'w19',caption:'Earrings of the Earth Power',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:11.99},
		required: {level:11},
		modify: {earthmagicdefencereduce:3,manaconsumption:11,intellect:11,hitpoints:115,mana:60,earthmagicpower:35,anticriticalhit:50,magicdefence:28,defence:60},
		setlink: {name:'EarthPower'}, 
	},

/*NEW ------------------------------------------------------------------------------------------(�������� Airy of Golem)---------------------------------------------------------------------------------*/
StaffofAiry: {id:'StaffofAiry',category:'staffs',slot:'w3',width:60,height:60,caption:'Staff of Airy Golem',imp1:true,
		common: {weight:5,durability:50,eprice:10.79},
		required: {level:9},
		modify: {airmagicdefencereduce:5,intellect:7,airmagicskill:2,hitpoints:99,mana:45,airmagicpower:25,defence:45,magicdefence:55,manaconsumption:5},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
        setlink: {name:'AiryofGolem'},
		attacks: {air:'routinely',crush:'small'}
	},
BootsofAiry: {id:'BootsofAiry',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Airy Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:3.59},
		required: {level:9},
		modify: {airmagicdefencereduce:1,anticriticalhit:30,airmagicpower:5,intellect:3,magicdefence:25,defence:15,hitpoints:25,mana:75},
		setlink: {name:'AiryofGolem'},
	},
	GlovesofAiry: {id:'GlovesofAiry',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Airy Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.89},
		required: {level:9},
		modify: {anticriticalhit:25,airmagicdefencereduce:2,airmagicpower:7,intellect:3,staffskill:1,magicdefence:25,defence:15,hitpoints:30,mana:65},
		setlink: {name:'AiryofGolem'},
	},
	ArmorofAiry: {id:'ArmorofAiry',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Robe of Airy Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:8.99},
		required: {level:9},
		modify: {anticriticalhit:25,airmagicdefencereduce:2,airmagicpower:25,intellect:6,airmagicskill:2,magicdefence:45,defence:35,hitpoints:109,mana:155},
		setlink: {name:'AiryofGolem'},
	},
	HelmetofAiry: {id:'HelmetofAiry',category:'helmets',slot:'w9',width:60,height:60,caption:'Hat of Airy Golem',imp1:true,
		common: {weight:2,durability:30,eprice:4.79},
		required: {level:9},
		modify: {airmagicdefencereduce:2,airmagicpower:7,intellect:7,airmagicskill:1,magicdefence:25,defence:15,hitpoints:45,mana:85},
		setlink: {name:'AiryofGolem'},
	},
	BracersofAiry: {id:'BracersofAiry',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bands of Airy Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.29},
		required: {level:9},
		modify: {airmagicdefencereduce:2,airmagicpower:5,intellect:3,magicdefence:25,defence:15,hitpoints:25,mana:65},
		setlink: {name:'AiryofGolem'},
	},
	BeltofAiry: {id:'BeltofAiry',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Airy Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.99},
		required: {level:9},
		modify: {airmagicdefencereduce:1,airmagicpower:7,intellect:2,magicdefence:15,defence:15,hitpoints:27,mana:48},
		setlink: {name:'AiryofGolem'},
	},
	LeggingsofAiry: {id:'LeggingsofAiry',category:'pants',slot:'w19',caption:'Leggings of Airy Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.74},
		required: {level:9},
		modify: {airmagicdefencereduce:1,anticriticalhit:35,airmagicpower:7,intellect:4,magicdefence:15,defence:10,hitpoints:35,mana:65},
		setlink: {name:'AiryofGolem'},
	},
	RingofAiry: {id:'RingofAiry',category:'rings',slot:'w19',caption:'Ring of Airy Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:2.39},
		required: {level:9},
		modify: {airmagicdefencereduce:2,manaconsumption:2,intellect:8,airmagicskill:2,mana:115},
		setlink: {name:'AiryofGolem'},
	},
	AmuletofAiry: {id:'AmuletofAiry',category:'necklaces',slot:'w19',caption:'Amulet of Airy Golem ',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:9},
		modify: {airmagicdefencereduce:2,intellect:7,hitpoints:45,mana:125,anticriticalhit:55,airmagicpower:7,magicdefence:15,defence:35},
		setlink: {name:'AiryofGolem'},
	},
	EarringsofAiry: {id:'EarringsofAiry',category:'earrings',slot:'w19',caption:'Earrings of Airy Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:4.79},
		required: {level:9},
		modify: {airmagicdefencereduce:2,manaconsumption:10,intellect:11,airmagicskill:2,hitpoints:36,anticriticalhit:45,airmagicpower:17},
		setlink: {name:'AiryofGolem'},
	},

/*NEW ------------------------------------------------------------------------------------------(�������� Fiery of Golem)---------------------------------------------------------------------------------*/
StaffFeary: {id:'StaffFeary',category:'staffs',slot:'w3',width:60,height:60,caption:'Staff of Feary Golem',imp1:true,
		common: {weight:5,durability:50,eprice:10.79},
		required: {level:9},
		modify: {firemagicdefencereduce:5,firemagicpower:25,intellect:7,firemagicskill:2,magicdefence:50,defence:50,hitpoints:75,mana:75,manaconsumption:5},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
        setlink: {name:'FieryofGolem'},
		attacks: {fire:'routinely',crush:'small'}
	},
	BootsFeary: {id:'BootsFeary',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Feary Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:3.59},
		required: {level:9},
		modify: {firemagicdefencereduce:1,anticriticalhit:35,firemagicpower:5,intellect:2,magicdefence:30,defence:25,hitpoints:35,mana:80},
		setlink: {name:'FieryofGolem'},
	},
	GlovesFeary: {id:'GlovesFeary',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Feary Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.89},
		required: {level:9},
		modify: {anticriticalhit:35,firemagicdefencereduce:2,firemagicpower:7,intellect:2,staffskill:1,magicdefence:25,defence:15,hitpoints:33,mana:68},
		setlink: {name:'FieryofGolem'},
	},
	ArmorFeary: {id:'ArmorFeary',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Robe of Feary Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:8.99},
		required: {level:9},
		modify: {anticriticalhit:40,firemagicdefencereduce:2,firemagicpower:25,intellect:5,firemagicskill:2,magicdefence:35,defence:45,hitpoints:125,mana:145},
		setlink: {name:'FieryofGolem'},
	},
	HelmetFeary: {id:'HelmetFeary',category:'helmets',slot:'w9',width:60,height:60,caption:'Hat of Feary Golem',imp1:true,
		common: {weight:2,durability:30,eprice:4.79},
		required: {level:9},
		modify: {firemagicdefencereduce:2,firemagicpower:7,intellect:5,firemagicskill:1,magicdefence:45,defence:20,hitpoints:45,mana:85},
		setlink: {name:'FieryofGolem'},
	},
	BracersFeary: {id:'BracersFeary',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bands of Feary Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.29},
		required: {level:9},
		modify: {firemagicdefencereduce:2,firemagicpower:5,intellect:3,magicdefence:35,defence:10,hitpoints:25,mana:60},
		setlink: {name:'FieryofGolem'},
	},
	BeltFeary: {id:'BeltFeary',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Feary Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.99},
		required: {level:9},
		modify: {firemagicdefencereduce:1,firemagicpower:7,intellect:2,magicdefence:25,defence:20,hitpoints:35,mana:50},
		setlink: {name:'FieryofGolem'},
	},
	LeggingsFeary: {id:'LeggingsFeary',category:'pants',slot:'w19',caption:'Leggings of Feary Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.74},
		required: {level:9},
		modify: {firemagicdefencereduce:1,anticriticalhit:30,firemagicpower:7,intellect:2,magicdefence:25,defence:20,hitpoints:35,mana:82},
		setlink: {name:'FieryofGolem'},
	},
	RingFeary: {id:'RingFeary',category:'rings',slot:'w19',caption:'Ring of Feary Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:2.39},
		required: {level:9},
		modify: {anticriticalhit:15,firemagicdefencereduce:2,intellect:7,magicdefence:25,mana:95,firemagicskill:2},
		setlink: {name:'FieryofGolem'},
	},
	AmuletFeary: {id:'AmuletFeary',category:'necklaces',slot:'w19',caption:'Amulet of Feary Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.99},
		required: {level:9},
		modify: {firemagicdefencereduce:2,intellect:5,mana:145,anticriticalhit:55,firemagicpower:7,magicdefence:15,defence:65},
		setlink: {name:'FieryofGolem'},
	},
	EarringsFeary: {id:'EarringsFeary',category:'earrings',slot:'w19',caption:'Earrings of Feary Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:4.79},
		required: {level:9},
		modify: {firemagicdefencereduce:2,manaconsumption:5,intellect:10,firemagicskill:2,hitpoints:58,anticriticalhit:45,firemagicpower:40},
		setlink: {name:'FieryofGolem'},
	},

/*NEW ------------------------------------------------------------------------------------------(�������� Icy of Golem)---------------------------------------------------------------------------------*/
AiryStaffofSpirit: {id:'AiryStaffofSpirit',category:'staffs',slot:'w3',width:60,height:60,caption:'Staff of Icy Golem  ',imp1:true,
		common: {weight:5,durability:50,eprice:10.79},
		required: {level:9},
		modify: {watermagicdefencereduce:5,watermagicpower:25,intellect:7,watermagicskill:2,magicdefence:65,defence:60,hitpoints:75,mana:55,manaconsumption:5},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
        setlink: {name:'IcyofGolem'}, 
		attacks: {water:'routinely',crush:'small'}
	},
	IcyBootsofSpirit: {id:'IcyBootsofSpirit',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Icy Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:3.59},
		required: {level:9},
		modify: {watermagicdefencereduce:1,anticriticalhit:35,watermagicpower:5,intellect:2,magicdefence:35,defence:35,hitpoints:35,mana:75},
		setlink: {name:'IcyofGolem'}, 
	},
	AiryGlovesofSpirit: {id:'AiryGlovesofSpirit',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Icy Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.89},
		required: {level:9},
		modify: {anticriticalhit:30,watermagicdefencereduce:2,watermagicpower:7,intellect:2,staffskill:1,magicdefence:25,defence:30,hitpoints:30,mana:65},
		setlink: {name:'IcyofGolem'}, 
	},
	IcyRobeofSpirit: {id:'IcyRobeofSpirit',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Robe of Icy Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:8.99},
		required: {level:9},
		modify: {anticriticalhit:45,watermagicdefencereduce:2,watermagicpower:25,intellect:5,watermagicskill:2,magicdefence:45,defence:45,hitpoints:124,mana:148},
		setlink: {name:'IcyofGolem'}, 
	},
	AiryHatofSpirit: {id:'AiryHatofSpirit',category:'helmets',slot:'w9',width:60,height:60,caption:'Hat of Icy Golem',imp1:true,
		common: {weight:2,durability:30,eprice:4.79},
		required: {level:9},
		modify: {watermagicdefencereduce:2,watermagicpower:7,intellect:5,watermagicskill:1,magicdefence:40,defence:30,hitpoints:50,mana:75},
		setlink: {name:'IcyofGolem'}, 
	},
	AiryCuffsofSpirit: {id:'AiryCuffsofSpirit',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bands of Icy Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.29},
		required: {level:9},
		modify: {watermagicdefencereduce:2,watermagicpower:5,intellect:3,magicdefence:30,defence:25,hitpoints:28,mana:55},
		setlink: {name:'IcyofGolem'}, 
	},
	IcyBeltofSpirit: {id:'IcyBeltofSpirit',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Icy Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.99},
		required: {level:9},
		modify: {watermagicdefencereduce:1,watermagicpower:7,intellect:2,magicdefence:35,defence:25,hitpoints:30,mana:55},
		setlink: {name:'IcyofGolem'}, 
	},
	IcyPantsofSpirit: {id:'IcyPantsofSpirit',category:'pants',slot:'w19',caption:'Leggings of Icy Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.74},
		required: {level:9},
		modify: {watermagicdefencereduce:1,anticriticalhit:35,watermagicpower:7,intellect:2,magicdefence:30,defence:25,hitpoints:35,mana:45},
		setlink: {name:'IcyofGolem'}, 
	},
	
	IcyRingofSpirit: {id:'IcyRingofSpirit',category:'rings',slot:'w19',caption:'Ring of Icy Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:2.39},
		required: {level:9},
		modify: {watermagicdefencereduce:2,watermagicpower:2,watermagicskill:2,intellect:6,magicdefence:65,defence:55},
		setlink: {name:'IcyofGolem'}, 
	},
	IcyAmuletofSpirit: {id:'IcyAmuletofSpirit',category:'necklaces',slot:'w19',caption:'Amulet of Icy Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.99},
		required: {level:9},
		modify: {watermagicdefencereduce:2,anticriticalhit:45,watermagicpower:7,intellect:5,magicdefence:75,defence:135},
		setlink: {name:'IcyofGolem'}, 
	},
	IcyEarringsofSpirit: {id:'IcyEarringsofSpirit',category:'earrings',slot:'w19',caption:'Earrings of Icy Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:4.79},
		required: {level:9},
		modify: {hitpoints:52,manaconsumption:7,watermagicdefencereduce:2,watermagicskill:2,anticriticalhit:85,watermagicpower:23,intellect:8,magicdefence:25,defence:55},
		setlink: {name:'IcyofGolem'}, 
	},

/*NEW ------------------------------------------------------------------------------------------(�������� Eartnen of Golem)---------------------------------------------------------------------------------*/
StaffofEartnen: {id:'StaffofEartnen',category:'staffs',slot:'w3',width:60,height:60,caption:'Staff of Eartnen Golem ',imp1:true,
		common: {weight:5,durability:50,eprice:10.79},
		required: {level:9},
		modify: {earthmagicdefencereduce:5,earthmagicpower:25,intellect:7,earthmagicskill:2,magicdefence:55,defence:45,hitpoints:102,mana:76,manaconsumption:5},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
        setlink: {name:'EartnenofGolem'},     
		attacks: {earth:'routinely',crush:'small'}
	},
BootsofEartnen: {id:'BootsofEartnen',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Eartnen Golem ',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:3.59},
		required: {level:9},
		modify: {earthmagicdefencereduce:1,anticriticalhit:35,earthmagicpower:5,intellect:2,magicdefence:25,defence:35,hitpoints:55,mana:80},
		setlink: {name:'EartnenofGolem'}, 
	},
	GlovesofEartnen: {id:'GlovesofEartnen',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Eartnen Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.89},
		required: {level:9},
		modify: {anticriticalhit:35,earthmagicdefencereduce:2,earthmagicpower:7,intellect:2,staffskill:1,magicdefence:15,defence:25,hitpoints:55,mana:95},
		setlink: {name:'EartnenofGolem'}, 
	},
	ArmorofEartnen: {id:'ArmorofEartnen',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Robe of Eartnen Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:8.99},
		required: {level:9},
		modify: {anticriticalhit:50,earthmagicdefencereduce:2,earthmagicpower:25,intellect:5,earthmagicskill:2,magicdefence:35,defence:40,hitpoints:137,mana:168},
		setlink: {name:'EartnenofGolem'}, 
	},
	HelmetofEartnen: {id:'HelmetofEartnen',category:'helmets',slot:'w9',width:60,height:60,caption:'Hat of Eartnen Golem',imp1:true,
		common: {weight:2,durability:30,eprice:4.79},
		required: {level:9},
		modify: {earthmagicdefencereduce:2,earthmagicpower:7,intellect:5,earthmagicskill:1,magicdefence:20,defence:35,hitpoints:75,mana:105},
		setlink: {name:'EartnenofGolem'}, 
	},
	BracersofEartnen: {id:'BracersofEartnen',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bans of Eartnen Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.29},
		required: {level:9},
		modify: {earthmagicdefencereduce:2,earthmagicpower:5,intellect:3,magicdefence:20,defence:15,hitpoints:60,mana:85},
		setlink: {name:'EartnenofGolem'}, 
	},
	BeltofEartnen: {id:'BeltofEartnen',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Eartnen Golem',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.99},
		required: {level:9},
		modify: {earthmagicdefencereduce:1,earthmagicpower:7,intellect:2,magicdefence:20,defence:20,hitpoints:55,mana:65},
		setlink: {name:'EartnenofGolem'}, 
	},
	LeggingsofEartnen: {id:'LeggingsofEartnen',category:'pants',slot:'w19',caption:'Leggings of Eartnen Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.74},
		required: {level:9},
		modify: {earthmagicdefencereduce:1,anticriticalhit:35,earthmagicpower:7,intellect:2,magicdefence:15,defence:25,hitpoints:60,mana:78},
		setlink: {name:'EartnenofGolem'}, 
	},
	RingofEartnen: {id:'RingofEartnen',category:'rings',slot:'w19',caption:'Ring of Eartnen Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:2.39},
		required: {level:9},
		modify: {earthmagicdefencereduce:2,intellect:6,earthmagicskill:2,hitpoints:48,mana:130},
		setlink: {name:'EartnenofGolem'}, 
	},
	AmuletofEartnen: {id:'AmuletofEartnen',category:'necklaces',slot:'w19',caption:'Amulet of Eartnen Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.99},
		required: {level:9},
		modify: {earthmagicdefencereduce:2,intellect:5,hitpoints:110,mana:155,earthmagicpower:7,magicdefence:25,defence:45},
		setlink: {name:'EartnenofGolem'}, 
	},
	EarringsofEartnen: {id:'EarringsofEartnen',category:'earrings',slot:'w19',caption:'Earrings of Eartnen Golem',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:4.79},
		required: {level:9},
		modify: {earthmagicdefencereduce:2,manaconsumption:10,intellect:10,earthmagicskill:2,hitpoints:105,mana:55,earthmagicpower:30,anticriticalhit:45},
		setlink: {name:'EartnenofGolem'}, 
	},

/*NEW ------------------------------------------------------------------------------------------(�������� Earthen Haughtiness)---------------------------------------------------------------------------------*/
staff802: {id:'staff802',category:'staffs',slot:'w3',width:60,height:60,caption:'Earthen Staff of Haughtiness ',imp1:true,
		common: {weight:5,durability:50,eprice:7.19},
		required: {level:8},
		modify: {earthmagicdefencereduce:3,earthmagicpower:20,intellect:5,earthmagicskill:1,magicdefence:45,defence:35,hitpoints:90,mana:60,manaconsumption:2},
		properties: {mindamage:1,maxdamage:19,twohandled:'yes',blockzones:'+'},
        setlink: {name:'EarthenofHaughtiness'},     
		attacks: {earth:'routinely',crush:'small'}
	},
boots217: {id:'boots217',category:'boots',slot:'w12',width:60,height:40,caption:'Earthen Boots of Haughtiness ',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:2.39},
		required: {level:8},
		modify: {anticriticalhit:25,earthmagicpower:3,intellect:1,magicdefence:15,defence:25,hitpoints:45,mana:60},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
	gloves212: {id:'gloves212',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Earthen Gloves of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.59},
		required: {level:8},
		modify: {anticriticalhit:30,earthmagicdefencereduce:1,earthmagicpower:5,intellect:2,staffskill:1,magicdefence:5,defence:20,hitpoints:40,mana:80},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
	roba204: {id:'roba204',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Earthen Robe of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.49},
		required: {level:8},
		modify: {anticriticalhit:40,earthmagicdefencereduce:1,earthmagicpower:20,intellect:4,earthmagicskill:2,magicdefence:25,defence:35,hitpoints:124,mana:155},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
	helmet209: {id:'helmet209',category:'helmets',slot:'w9',width:60,height:60,caption:'Earthen Hat of Haughtiness',imp1:true,
		common: {weight:2,durability:30,eprice:3.19},
		required: {level:8},
		modify: {earthmagicdefencereduce:1,earthmagicpower:5,intellect:5,earthmagicskill:1,magicdefence:10,defence:25,hitpoints:60,mana:90},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
	braslet212: {id:'braslet212',category:'bracelets',slot:'w13',width:60,height:40,caption:'Earthen Cuffs of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.19},
		required: {level:8},
		modify: {earthmagicdefencereduce:1,earthmagicpower:3,intellect:3,magicdefence:10,defence:10,hitpoints:50,mana:70},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
	belt211: {id:'belt211',category:'belts',slot:'w5',width:60,height:40,caption:'Earthen Belt of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:1.99},
		required: {level:8},
		modify: {earthmagicpower:7,intellect:2,magicdefence:10,defence:10,hitpoints:45,mana:50},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
	legs44: {id:'legs44',category:'pants',slot:'w19',caption:'Earthen Pants of Haughtiness ',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:2.49},
		required: {level:8},
		modify: {anticriticalhit:25,earthmagicpower:3,intellect:2,magicdefence:5,defence:15,hitpoints:50,mana:65},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
	EarthenRingofHaughtiness: {id:'EarthenRingofHaughtiness',category:'rings',slot:'w19',caption:'Earthen Ring of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:1.59},
		required: {level:8},
		modify: {earthmagicdefencereduce:1,intellect:5,earthmagicskill:2,hitpoints:39,mana:115},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
	EarthenAmuletofHaughtiness: {id:'EarthenAmuletofHaughtiness',category:'necklaces',slot:'w19',caption:'Earthen Amulet of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.99},
		required: {level:8},
		modify: {earthmagicdefencereduce:1,intellect:5,hitpoints:90,mana:120,earthmagicpower:5,magicdefence:15,defence:35},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
	EarthenEarringsofHaughtiness: {id:'EarthenEarringsofHaughtiness',category:'earrings',slot:'w19',caption:'Earthen Earrings of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.19},
		required: {level:8},
		modify: {earthmagicdefencereduce:1,manaconsumption:7,intellect:9,earthmagicskill:2,hitpoints:90,mana:30,earthmagicpower:25,anticriticalhit:30},
		setlink: {name:'EarthenofHaughtiness'}, 
	},
/*NEW ------------------------------------------------------------------------------------------(�������� Icy Haughtiness)---------------------------------------------------------------------------------*/
staff801: {id:'staff801',category:'staffs',slot:'w3',width:60,height:60,caption:'Icy Staff of Haughtiness ',imp1:true,
		common: {weight:5,durability:50,eprice:7.19},
		required: {level:8},
		modify: {watermagicdefencereduce:3,watermagicpower:20,intellect:5,watermagicskill:1,magicdefence:50,defence:50,hitpoints:65,mana:45,manaconsumption:2},
		properties: {mindamage:1,maxdamage:19,twohandled:'yes',blockzones:'+'},
        setlink: {name:'IcyofHaughtiness'}, 
		attacks: {water:'routinely',crush:'small'}
	},
	boots214: {id:'boots214',category:'boots',slot:'w12',width:60,height:40,caption:'Icy Boots of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:2.39},
		required: {level:8},
		modify: {anticriticalhit:25,watermagicpower:3,intellect:1,magicdefence:30,defence:25,hitpoints:25,mana:50},
		setlink: {name:'IcyofHaughtiness'}, 
	},
	gloves210: {id:'gloves210',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Icy Gloves of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.59},
		required: {level:8},
		modify: {anticriticalhit:25,watermagicdefencereduce:1,watermagicpower:5,intellect:2,staffskill:1,magicdefence:20,defence:25,hitpoints:25,mana:50},
		setlink: {name:'IcyofHaughtiness'}, 
	},
	roba203: {id:'roba203',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Icy Robe of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.49},
		required: {level:8},
		modify: {anticriticalhit:40,watermagicdefencereduce:2,watermagicpower:20,intellect:4,watermagicskill:2,magicdefence:35,defence:35,hitpoints:114,mana:135},
		setlink: {name:'IcyofHaughtiness'}, 
	},
	helmet211: {id:'helmet211',category:'helmets',slot:'w9',width:60,height:60,caption:'Icy Hat of Haughtiness',imp1:true,
		common: {weight:2,durability:30,eprice:3.19},
		required: {level:8},
		modify: {watermagicdefencereduce:1,watermagicpower:5,intellect:5,watermagicskill:1,magicdefence:30,defence:25,hitpoints:45,mana:60},
		setlink: {name:'IcyofHaughtiness'}, 
	},
	braslet209: {id:'braslet209',category:'bracelets',slot:'w13',width:60,height:40,caption:'Icy Cuffs of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.19},
		required: {level:8},
		modify: {watermagicdefencereduce:1,watermagicpower:3,intellect:3,magicdefence:20,defence:20,hitpoints:20,mana:40},
		setlink: {name:'IcyofHaughtiness'}, 
	},
	belt209: {id:'belt209',category:'belts',slot:'w5',width:60,height:40,caption:'Icy Belt of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:1.99},
		required: {level:8},
		modify: {watermagicpower:7,intellect:2,magicdefence:25,defence:20,hitpoints:20,mana:35},
		setlink: {name:'IcyofHaughtiness'}, 
	},
	legs41: {id:'legs41',category:'pants',slot:'w19',caption:'Icy Pants of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:2.49},
		required: {level:8},
		modify: {anticriticalhit:20,watermagicpower:3,intellect:2,magicdefence:20,defence:20,hitpoints:20,mana:35},
		setlink: {name:'IcyofHaughtiness'}, 
	},
	
	IcyRingofHaughtiness: {id:'IcyRingofHaughtiness',category:'rings',slot:'w19',caption:'Icy Ring of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:1.59},
		required: {level:8},
		modify: {watermagicdefencereduce:1,watermagicpower:1,watermagicskill:2,intellect:6,magicdefence:35,defence:35},
		setlink: {name:'IcyofHaughtiness'}, 
	},
	IcyAmuletofHaughtiness: {id:'IcyAmuletofHaughtiness',category:'necklaces',slot:'w19',caption:'Icy Amulet of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.99},
		required: {level:8},
		modify: {watermagicdefencereduce:1,anticriticalhit:35,watermagicpower:5,intellect:5,magicdefence:55,defence:115},
		setlink: {name:'IcyofHaughtiness'}, 
	},
	IcyEarringsofHaughtiness: {id:'IcyEarringsofHaughtiness',category:'earrings',slot:'w19',caption:'Icy Earrings of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.19},
		required: {level:8},
		modify: {hitpoints:42,manaconsumption:1,watermagicdefencereduce:1,watermagicskill:2,anticriticalhit:65,watermagicpower:20,intellect:7,magicdefence:10,defence:50},
		setlink: {name:'IcyofHaughtiness'}, 
	},
/*NEW ------------------------------------------------------------------------------------------(�������� Fiery Haughtiness)---------------------------------------------------------------------------------*/
staff800: {id:'staff800',category:'staffs',slot:'w3',width:60,height:60,caption:'Fiery Staff of Haughtiness',imp1:true,
		common: {weight:5,durability:50,eprice:7.19},
		required: {level:8},
		modify: {firemagicdefencereduce:3,firemagicpower:20,intellect:5,firemagicskill:1,magicdefence:45,defence:40,hitpoints:55,mana:55,manaconsumption:2},
		properties: {mindamage:1,maxdamage:19,twohandled:'yes',blockzones:'+'},
        setlink: {name:'FieryofHaughtiness'},
		attacks: {fire:'routinely',crush:'small'}
	},
	boots216: {id:'boots216',category:'boots',slot:'w12',width:60,height:40,caption:'Fiery Boots of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:2.39},
		required: {level:8},
		modify: {anticriticalhit:25,firemagicpower:3,intellect:1,magicdefence:20,defence:20,hitpoints:20,mana:55},
		setlink: {name:'FieryofHaughtiness'},
	},
	gloves211: {id:'gloves211',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Fiery Gloves of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.59},
		required: {level:8},
		modify: {anticriticalhit:20,firemagicdefencereduce:1,firemagicpower:5,intellect:2,staffskill:1,magicdefence:15,defence:10,hitpoints:25,mana:55},
		setlink: {name:'FieryofHaughtiness'},
	},
	roba202: {id:'roba202',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Fiery Robe of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.49},
		required: {level:8},
		modify: {anticriticalhit:30,firemagicdefencereduce:1,firemagicpower:20,intellect:4,firemagicskill:2,magicdefence:25,defence:25,hitpoints:114,mana:130},
		setlink: {name:'FieryofHaughtiness'},
	},
	helmet212: {id:'helmet212',category:'helmets',slot:'w9',width:60,height:60,caption:'Fiery Hat of Haughtiness',imp1:true,
		common: {weight:2,durability:30,eprice:3.19},
		required: {level:8},
		modify: {firemagicdefencereduce:1,firemagicpower:5,intellect:5,firemagicskill:1,magicdefence:15,defence:15,hitpoints:40,mana:65},
		setlink: {name:'FieryofHaughtiness'},
	},
	braslet211: {id:'braslet211',category:'bracelets',slot:'w13',width:60,height:40,caption:'Fiery Cuffs of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.19},
		required: {level:8},
		modify: {firemagicdefencereduce:1,firemagicpower:3,intellect:3,magicdefence:20,defence:10,hitpoints:20,mana:50},
		setlink: {name:'FieryofHaughtiness'},
	},
	belt210: {id:'belt210',category:'belts',slot:'w5',width:60,height:40,caption:'Fiery Belt of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:1.99},
		required: {level:8},
		modify: {firemagicpower:7,intellect:2,magicdefence:10,defence:10,hitpoints:20,mana:30},
		setlink: {name:'FieryofHaughtiness'},
	},
	legs43: {id:'legs43',category:'pants',slot:'w19',caption:'Fiery Pants of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:2.49},
		required: {level:8},
		modify: {anticriticalhit:20,firemagicpower:3,intellect:2,magicdefence:10,defence:10,hitpoints:20,mana:45},
		setlink: {name:'FieryofHaughtiness'},
	},
	FieryRingofHaughtiness: {id:'FieryRingofHaughtiness',category:'rings',slot:'w19',caption:'Fiery Ring of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:1.59},
		required: {level:8},
		modify: {firemagicdefencereduce:1,intellect:7,magicdefence:20,mana:50,firemagicskill:2},
		setlink: {name:'FieryofHaughtiness'},
	},
	FieryAmuletofHaughtiness: {id:'FieryAmuletofHaughtiness',category:'necklaces',slot:'w19',caption:'Fiery Amulet of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.99},
		required: {level:8},
		modify: {firemagicdefencereduce:1,intellect:5,mana:110,anticriticalhit:40,firemagicpower:5,magicdefence:10,defence:45},
		setlink: {name:'FieryofHaughtiness'},
	},
	FieryEarringsofHaughtiness: {id:'FieryEarringsofHaughtiness',category:'earrings',slot:'w19',caption:'Fiery Earrings of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.19},
		required: {level:8},
		modify: {firemagicdefencereduce:1,manaconsumption:3,intellect:8,firemagicskill:2,hitpoints:48,anticriticalhit:25,firemagicpower:35},
		setlink: {name:'FieryofHaughtiness'},
	},
/*NEW ------------------------------------------------------------------------------------------(�������� Airy Haughtiness)---------------------------------------------------------------------------------*/
staff803: {id:'staff803',category:'staffs',slot:'w3',width:60,height:60,caption:'Airy Staff of Haughtiness',imp1:true,
		common: {weight:5,durability:50,eprice:7.19},
		required: {level:8},
		modify: {airmagicdefencereduce:3,intellect:7,airmagicskill:1,hitpoints:90,mana:20,airmagicpower:20,defence:45,magicdefence:35,manaconsumption:2},
		properties: {mindamage:1,maxdamage:19,twohandled:'yes',blockzones:'+'},
        setlink: {name:'AiryofHaughtiness'},
		attacks: {air:'routinely',crush:'small'}
	},
boots215: {id:'boots215',category:'boots',slot:'w12',width:60,height:40,caption:'Airy Boots of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:30,eprice:2.39},
		required: {level:8},
		modify: {anticriticalhit:25,airmagicpower:3,intellect:2,magicdefence:25,defence:15,hitpoints:15,mana:60},
		setlink: {name:'AiryofHaughtiness'},
	},
	gloves209: {id:'gloves209',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Airy Gloves of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.59},
		required: {level:8},
		modify: {anticriticalhit:20,airmagicdefencereduce:1,airmagicpower:5,intellect:3,staffskill:1,magicdefence:20,defence:5,hitpoints:20,mana:60},
		setlink: {name:'AiryofHaughtiness'},
	},
	roba205: {id:'roba205',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Airy Robe of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.49},
		required: {level:8},
		modify: {anticriticalhit:30,airmagicdefencereduce:1,airmagicpower:20,intellect:5,airmagicskill:2,magicdefence:35,defence:25,hitpoints:104,mana:140},
		setlink: {name:'AiryofHaughtiness'},
	},
	helmet210: {id:'helmet210',category:'helmets',slot:'w9',width:60,height:60,caption:'Airy Hat of Haughtiness',imp1:true,
		common: {weight:2,durability:30,eprice:3.19},
		required: {level:8},
		modify: {airmagicdefencereduce:1,airmagicpower:5,intellect:7,airmagicskill:1,magicdefence:25,defence:10,hitpoints:35,mana:70},
		setlink: {name:'AiryofHaughtiness'},
	},
	braslet210: {id:'braslet210',category:'bracelets',slot:'w13',width:60,height:40,caption:'Airy Cuffs of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:2.19},
		required: {level:8},
		modify: {airmagicdefencereduce:1,airmagicpower:3,intellect:3,magicdefence:25,defence:10,hitpoints:15,mana:60},
		setlink: {name:'AiryofHaughtiness'},
	},
	belt208: {id:'belt208',category:'belts',slot:'w5',width:60,height:40,caption:'Airy Belt of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:1.99},
		required: {level:8},
		modify: {airmagicpower:7,intellect:2,magicdefence:10,defence:10,hitpoints:10,mana:30},
		setlink: {name:'AiryofHaughtiness'},
	},
	legs42: {id:'legs42',category:'pants',slot:'w19',caption:'Airy Pants of Haughtiness',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:2.49},
		required: {level:8},
		modify: {anticriticalhit:20,airmagicpower:3,intellect:4,magicdefence:15,defence:5,hitpoints:20,mana:50},
		setlink: {name:'AiryofHaughtiness'},
	},
	AiryRingofHaughtiness: {id:'AiryRingofHaughtiness',category:'rings',slot:'w19',caption:'Airy Ring of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:1.59},
		required: {level:8},
		modify: {airmagicdefencereduce:1,manaconsumption:1,intellect:7,airmagicskill:2,mana:50},
		setlink: {name:'AiryofHaughtiness'},
	},
	AiryAmuletofHaughtiness: {id:'AiryAmuletofHaughtiness',category:'necklaces',slot:'w19',caption:'Airy Amulet of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:3.99},
		required: {level:8},
		modify: {airmagicdefencereduce:1,intellect:7,hitpoints:30,mana:100,anticriticalhit:45,airmagicpower:5,magicdefence:10,defence:25},
		setlink: {name:'AiryofHaughtiness'},
	},
	AiryEarringsofHaughtiness: {id:'AiryEarringsofHaughtiness',category:'earrings',slot:'w19',caption:'Airy Earrings of Haughtiness',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:3.19},
		required: {level:8},
		modify: {airmagicdefencereduce:1,manaconsumption:7,intellect:9,airmagicskill:2,hitpoints:27,anticriticalhit:25,airmagicpower:15},
		setlink: {name:'AiryofHaughtiness'},
	},
/*NEW ------------------------------------------------------------------------------------------(�������� Steel Wolf)---------------------------------------------------------------------------------*/

ShieldSteelWolf: {id:'ShieldSteelWolf',category:'shields',slot:'w10',width:60,height:60,caption:'Shield of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:15,durability:40,eprice:13.47},
		required: {level:11},
		modify: {hitpoints:45,criticalhit:50,anticriticalhit:90,defence:40,magicdefence:30,shieldblock:12},
		setlink: {name:'SteelWolf'},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'good'}
	},

AxeSteelWolf: {id:'AxeSteelWolf',category:'axes',slot:'w3',width:60,height:60,caption:'Axe of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:13.47},
		required: {level:11},
		modify: {intuition:5,axeskill:2,criticalhit:80,antijumpaway:80,sabrepower:17},
		properties: {mindamage:23,maxdamage:45,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'SteelWolf'}
	,
	},
SwordSteelWolf2: {id:'SwordSteelWolf2',category:'swords',slot:'w3',width:60,height:60,caption:'Sword of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:13.47},
		required: {level:11},
		modify: {intuition:6,swordskill:2,criticalhit:70,criticalpower:23,antijumpaway:55,parry:9,cutpower:17},
		properties: {mindamage:18,maxdamage:40,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'SteelWolf'}
	,
		
	},
BracersSteelWolf: {id:'BracersSteelWolf',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bracers of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:8.22},
		required: {level:11},
		modify: {strength:3,weaponskill:2,hitpoints:50,criticalhit:40,anticriticalhit:40,criticalpower:23,antijumpaway:30,defence:20,magicdefence:30},
			setlink: {name:'SteelWolf'}
	,
	},

ArmorSteelWolf: {id:'ArmorSteelWolf',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:22.47},
		required: {level:11},
		modify: {strength:4,intuition:3,weaponskill:3,hitpoints:115,criticalhit:75,anticriticalhit:90,criticalpower:12,antijumpaway:40,defence:130,magicdefence:60},
			setlink: {name:'SteelWolf'}
	,
	},
	
	LeggingsSteelWolf: {id:'LeggingsSteelWolf',category:'pants',slot:'w19',caption:'Leggings of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:9.35},
		required: {level:11},
		modify: {intuition:2,hitpoints:48,criticalhit:50,anticriticalhit:40,criticalpower:23,antijumpaway:40,defence:50,magicdefence:25},
			setlink: {name:'SteelWolf'}
	,
	},
	
	RingSteelWolf: {id:'RingSteelWolf',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:11},
		modify: {strength:2,hitpoints:54,criticalhit:62,criticalpower:12,antijumpaway:50,defence:12,magicdefence:7},
			setlink: {name:'SteelWolf'}
	,
	},
	NecklaceSteelWolf: {id:'NecklaceSteelWolf',category:'necklaces',slot:'w2',width:60,height:20,caption:'Necklace of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:14.99},
		required: {level:11},
		modify: {strength:4,weaponskill:2,hitpoints:70,criticalhit:30,anticriticalhit:75,antijumpaway:60,defence:60,magicdefence:50},
			setlink: {name:'SteelWolf'}
	,
	},
    GlovesSteelWolf: {id:'GlovesSteelWolf',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:9.72},
		required: {level:11},
		modify: {strength:2,intuition:2,weaponskill:3,criticalhit:40,criticalpower:12,antijumpaway:50},
			setlink: {name:'SteelWolf'}
	,
	}, 
BeltSteelWolf: {id:'BeltSteelWolf',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:7.47},
		required: {level:11},
		modify: {intuition:2,hitpoints:55,criticalhit:30,criticalpower:23,defence:35,magicdefence:30},
			setlink: {name:'SteelWolf'}
	,
	},
BootsSteelWolf: {id:'BootsSteelWolf',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:8.75},
		required: {level:11},
		modify: {strength:2,hitpoints:60,criticalhit:50,anticriticalhit:50,antijumpaway:60,defence:40,magicdefence:20},
			setlink: {name:'SteelWolf'}
	,
	},
	EarringsSteelWolf: {id:'EarringsSteelWolf',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:11.99},
		required: {level:11},
		modify: {strength:4,weaponskill:2,hitpoints:60,criticalhit:105,criticalpower:35,antijumpaway:55},
			setlink: {name:'SteelWolf'}
	,
	},
	HelmetSteelWolf: {id:'HelmetSteelWolf',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Steel Wolf',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:11.97},
		required: {level:11},
		modify: {weaponskill:1,hitpoints:60,criticalhit:65,anticriticalhit:55,criticalpower:10,antijumpaway:40,defence:70,magicdefence:65},
			setlink: {name:'SteelWolf'}
	,
	},
	

/*NEW ------------------------------------------------------------------------------------------(�������� Gold Scorpion)---------------------------------------------------------------------------------*/

DaggerGoldScorpion: {id:'DaggerGoldScorpion',category:'knives',slot:'w3',width:60,height:60,caption:'Dagger of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:13.47},
		required: {level:11},
		modify: {dexterity:5,knifeskill:2,jumpaway:105,counterstroke:6,thrustpower:17},
		properties: {mindamage:11,maxdamage:27,piercearmor:80,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'GoldScorpion'}
	,
		
	},
BracersGoldScorpion: {id:'BracersGoldScorpion',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bracers of Gold Scorpion ',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:8.22},
		required: {level:11},
		modify: {strength:2,dexterity:2,weaponskill:2,hitpoints:58,anticriticalhit:50,jumpaway:40,counterstroke:8,parry:4,thrustpower:6,defence:17,magicdefence:27},
			setlink: {name:'GoldScorpion'}
	,
	},

ArmorGoldScorpion: {id:'ArmorGoldScorpion',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:22.47},
		required: {level:11},
		modify: {dexterity:3,weaponskill:3,hitpoints:135,anticriticalhit:75,jumpaway:115,antijumpaway:85,counterstroke:12,parry:12,defence:115,magicdefence:50},
			setlink: {name:'GoldScorpion'}
	,
	},
	
	LeggingsGoldScorpion: {id:'LeggingsGoldScorpion',category:'pants',slot:'w19',caption:'Leggings of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:9.35},
		required: {level:11},
		modify: {dexterity:2,hitpoints:38,anticriticalhit:60,jumpaway:60,antijumpaway:23,defence:45,magicdefence:28},
			setlink: {name:'GoldScorpion'}
	,
	},
	
	RingGoldScorpion: {id:'RingGoldScorpion',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:11},
		modify: {strength:1,dexterity:2,hitpoints:32,anticriticalhit:40,jumpaway:60,counterstroke:6,defence:17,magicdefence:23},
			setlink: {name:'GoldScorpion'}
	,
	},
	AmuletGoldScorpion: {id:'AmuletGoldScorpion',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:14.99},
		required: {level:11},
		modify: {strength:2,dexterity:2,weaponskill:2,hitpoints:75,anticriticalhit:60,jumpaway:85,counterstroke:17,parry:6,defence:45,magicdefence:40},
			setlink: {name:'GoldScorpion'}
	,
	},
    GlovesGoldScorpion: {id:'GlovesGoldScorpion',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:9.72},
		required: {level:11},
		modify: {strength:2,dexterity:4,weaponskill:3,anticriticalhit:50,antijumpaway:40,counterstroke:6,parry:6},
			setlink: {name:'GoldScorpion'}
	,
	}, 
BeltGoldScorpion: {id:'BeltGoldScorpion',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:7.47},
		required: {level:11},
		modify: {strength:2,dexterity:2,hitpoints:48,anticriticalhit:60,jumpaway:40,parry:4,defence:28,magicdefence:35},
			setlink: {name:'GoldScorpion'}
	,
	},
BootsGoldScorpion: {id:'BootsGoldScorpion',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:8.75},
		required: {level:11},
		modify: {hitpoints:44,anticriticalhit:75,jumpaway:60,antijumpaway:50,counterstroke:6,parry:4,defence:40,magicdefence:30},
			setlink: {name:'GoldScorpion'}
	,
	},
	EarringsGoldScorpion: {id:'EarringsGoldScorpion',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:11.99},
		required: {level:11},
		modify: {strength:4,dexterity:5,hitpoints:52,jumpaway:110,antijumpaway:50,counterstroke:17,parry:4,thrustpower:17,defence:10},
			setlink: {name:'GoldScorpion'}
	,
	},
	HelmetGoldScorpion: {id:'HelmetGoldScorpion',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Gold Scorpion',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:11.97},
		required: {level:11},
		modify: {strength:2,weaponskill:1,hitpoints:65,anticriticalhit:55,jumpaway:75,defence:60,magicdefence:55},
			setlink: {name:'GoldScorpion'}
	,
	},
	


/*NEW ------------------------------------------------------------------------------------------(�������� Steel Tiger)---------------------------------------------------------------------------------*/
ShieldSteelTiger: {id:'ShieldSteelTiger',category:'shields',slot:'w10',width:60,height:60,caption:'Shield of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:15,durability:40,eprice:13.47},
		required: {level:11},
		modify: {hitpoints:60,anticriticalhit:85,defence:50,magicdefence:35,shieldblock:14},
		setlink: {name:'SteelTiger'},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'good'}
	},
HammerSteelTiger: {id:'HammerSteelTiger',category:'clubs',slot:'w3',width:60,height:60,caption:'Hammer of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:13.47},
		required: {level:11},
		modify: {strength:11,clubskill:1,antijumpaway:80,crushpower:23},
		properties: {mindamage:30,maxdamage:48,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'SteelTiger'}
	,
		
	},
BracersSteelTiger: {id:'BracersSteelTiger',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bracers of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:8.22},
		required: {level:11},
		modify: {strength:5,weaponskill:2,hitpoints:70,anticriticalhit:40,antijumpaway:60,crushpower:6,defence:30,magicdefence:40},
			setlink: {name:'SteelTiger'}
	,
	},

ArmorSteelTiger: {id:'ArmorSteelTiger',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:22.47},
		required: {level:11},
		modify: {strength:8,weaponskill:3,hitpoints:135,anticriticalhit:105,antijumpaway:50,parry:6,defence:160,magicdefence:72},
			setlink: {name:'SteelTiger'}
	,
	},
	
	LeggingsSteelTiger: {id:'LeggingsSteelTiger',category:'pants',slot:'w19',caption:'Leggings of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:9.35},
		required: {level:11},
		modify: {hitpoints:65,anticriticalhit:45,antijumpaway:35,parry:4,defence:45,magicdefence:35},
			setlink: {name:'SteelTiger'}
	,
	},
	
	RingSteelTiger: {id:'RingSteelTiger',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:11},
		modify: {strength:1,anticriticalhit:55,antijumpaway:45,parry:4,defence:35,magicdefence:30},
			setlink: {name:'SteelTiger'}
	,
	},
	AmuletSteelTiger: {id:'AmuletSteelTiger',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:14.99},
		required: {level:11},
		modify: {strength:7,hitpoints:135,anticriticalhit:85,antijumpaway:65,parry:11,defence:40,magicdefence:35},
			setlink: {name:'SteelTiger'}
	,
	},
    GlovesSteelTiger: {id:'GlovesSteelTiger',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:9.72},
		required: {level:11},
		modify: {strength:2,weaponskill:3,anticriticalhit:60,parry:5,defence:28,magicdefence:18},
			setlink: {name:'SteelTiger'}
	,
	}, 
BeltSteelTiger: {id:'BeltSteelTiger',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:7.47},
		required: {level:11},
		modify: {strength:1,hitpoints:95,anticriticalhit:50,defence:40,magicdefence:35},
			setlink: {name:'SteelTiger'}
	,
	},
BootsSteelTiger: {id:'BootsSteelTiger',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:8.75},
		required: {level:11},
		modify: {strength:3,hitpoints:85,anticriticalhit:45,antijumpaway:30,defence:60,magicdefence:50},
			setlink: {name:'SteelTiger'}
	,
	},
	EarringsSteelTiger: {id:'EarringsSteelTiger',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:11.99},
		required: {level:11},
		modify: {strength:4,weaponskill:2,hitpoints:85,anticriticalhit:70,antijumpaway:60,defence:40,magicdefence:30},
			setlink: {name:'SteelTiger'}
	,
	},
	HelmetSteelTiger: {id:'HelmetSteelTiger',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Steel Tiger',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:11.97},
		required: {level:11},
		modify: {strength:2,weaponskill:1,hitpoints:90,anticriticalhit:60,antijumpaway:50,defence:60,magicdefence:60},
			setlink: {name:'SteelTiger'}
	,
	},
	

/*NEW ------------------------------------------------------------------------------------------(�������� Night Demon)---------------------------------------------------------------------------------*/
DaggerNightdemon: {id:'DaggerNightdemon',category:'knives',slot:'w3',width:60,height:60,caption:'Dagger of Night Demon',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:13.47},
		required: {level:11},
		modify: {jumpaway:95,knifeskill:2,intuition:2,dexterity:4,criticalhit:90,antijumpaway:50,thrustpower:11},
		properties: {mindamage:11,maxdamage:26,piercearmor:75,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'NightDemon'}
	,
		
	},
BracersNightdemon: {id:'BracersNightdemon',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bracers of Night Demon',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:8.22},
		required: {level:11},
		modify: {dexterity:3,intuition:2,weaponskill:2,hitpoints:30,criticalhit:75,anticriticalhit:40,criticalpower:6,counterstroke:17,parry:6,defence:17,magicdefence:17},
			setlink: {name:'NightDemon'}
	,
	},

ArmorNightdemon: {id:'ArmorNightdemon',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Night Demon',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:22.47},
		required: {level:11},
		modify: {strength:2,dexterity:7,intuition:5,weaponskill:3,hitpoints:86,criticalhit:80,anticriticalhit:85,criticalpower:6,jumpaway:85,defence:110,magicdefence:110},
			setlink: {name:'NightDemon'}
	,
	},
	
	LeggingsNightdemon: {id:'LeggingsNightdemon',category:'pants',slot:'w19',caption:'Leggings of Night Demon',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:9.35},
		required: {level:11},
		modify: {dexterity:2,intuition:2,criticalhit:40,anticriticalhit:30,criticalpower:11,jumpaway:45,defence:40,magicdefence:45},
			setlink: {name:'NightDemon'}
	,
	},
	
	RingNightdemon: {id:'RingNightdemon',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Night Demon',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:11},
		modify: {strength:1,dexterity:2,hitpoints:36,criticalhit:105,anticriticalhit:23,criticalpower:3,jumpaway:60,defence:28,magicdefence:12},
			setlink: {name:'NightDemon'}
	,
	},
	AmuletNightdemon: {id:'AmuletNightdemon',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Night Demon',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:14.99},
		required: {level:11},
		modify: {dexterity:4,hitpoints:75,criticalhit:85,anticriticalhit:65,jumpaway:120,defence:60,magicdefence:60},
			setlink: {name:'NightDemon'}
	,
	},
    GlovesNightdemon: {id:'GlovesNightdemon',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Night Demon',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:9.72},
		required: {level:11},
		modify: {dexterity:3,intuition:2,weaponskill:3,criticalhit:35,anticriticalhit:50,antijumpaway:50},
			setlink: {name:'NightDemon'}
	,
	}, 
BeltNightdemon: {id:'BeltNightdemon',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Night Demon',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:7.47},
		required: {level:11},
		modify: {hitpoints:28,criticalhit:35,anticriticalhit:40,counterstroke:17,parry:6,defence:28,magicdefence:40},
			setlink: {name:'NightDemon'}
	,
	},
BootsNightdemon: {id:'BootsNightdemon',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Night Demon',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:8.75},
		required: {level:11},
		modify: {dexterity:4,criticalhit:85,anticriticalhit:50,jumpaway:75,defence:40,magicdefence:40},
			setlink: {name:'NightDemon'}
	,
	},
	EarringsNightdemon: {id:'EarringsNightdemon',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Night Demon',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:11.99},
		required: {level:11},
		modify: {dexterity:5,intuition:3,weaponskill:1,criticalhit:130,anticriticalhit:30,criticalpower:9,jumpaway:130,counterstroke:12,parry:4,defence:12,magicdefence:12},
			setlink: {name:'NightDemon'}
	,
	},
	HelmetNightdemon: {id:'HelmetNightdemon',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Night Demon',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:11.97},
		required: {level:11},
		modify: {dexterity:2,weaponskill:1,hitpoints:40,criticalhit:75,anticriticalhit:50,criticalpower:7,jumpaway:40,defence:60,magicdefence:60},
			setlink: {name:'NightDemon'}
	,
	},
	AxeNightdemon: {id:'AxeNightdemon',category:'axes',slot:'w3',width:60,height:60,caption:'Axe of Night Demon',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:13.47},
		required: {level:11},
		modify: {strength:2,intuition:3,axeskill:2,criticalhit:75,anticriticalhit:65,jumpaway:30,sabrepower:17},
		properties: {mindamage:23,maxdamage:45,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'NightDemon'}
	,
	},
	


/*NEW ------------------------------------------------------------------------------------------(�������� Golden Warrior)---------------------------------------------------------------------------------*/

Shieldgoldenwarrior: {id:'Shieldgoldenwarrior',category:'shields',slot:'w10',width:60,height:60,caption:'Shield of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:15,durability:40,eprice:5.39},
		required: {level:9},
		modify: {hitpoints:54,anticriticalhit:75,defence:45,magicdefence:30,shieldblock:12},
		setlink: {name:'goldenwarrior'},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'good'}
	},

Macegoldenwarrior: {id:'Macegoldenwarrior',category:'clubs',slot:'w3',width:60,height:60,caption:'Mace of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.39},
		required: {level:9},
		modify: {strength:6,clubskill:1,antijumpaway:70,crushpower:20},
		properties: {mindamage:26,maxdamage:41,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'goldenwarrior'}
	,
		
	},
Bracersgoldenwarrior: {id:'Bracersgoldenwarrior',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bands of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:3.29},
		required: {level:9},
		modify: {strength:4,weaponskill:1,hitpoints:64,anticriticalhit:35,antijumpaway:55,crushpower:5,defence:25,magicdefence:35},
			setlink: {name:'goldenwarrior'}
	,
	},

Armorgoldenwarrior: {id:'Armorgoldenwarrior',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:8.99},
		required: {level:9},
		modify: {strength:7,weaponskill:2,hitpoints:121,anticriticalhit:95,antijumpaway:45,parry:5,defence:145,magicdefence:65},
			setlink: {name:'goldenwarrior'}
	,
	},
	
	Leggingsgoldenwarrior: {id:'Leggingsgoldenwarrior',category:'pants',slot:'w19',caption:'Leggings of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.74},
		required: {level:9},
		modify: {hitpoints:57,anticriticalhit:40,antijumpaway:30,parry:3,defence:40,magicdefence:35},
			setlink: {name:'goldenwarrior'}
	,
	},
	
	Goldringwarrior: {id:'Goldringwarrior',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:2.39},
		required: {level:9},
		modify: {strength:1,hitpoints:42,anticriticalhit:50,antijumpaway:40,parry:3,defence:30,magicdefence:25},
			setlink: {name:'goldenwarrior'}
	,
	},
	Necklacegoldenwarrior: {id:'Necklacegoldenwarrior',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:9},
		modify: {strength:6,hitpoints:118,anticriticalhit:75,antijumpaway:55,parry:10,defence:35,magicdefence:30},
			setlink: {name:'goldenwarrior'}
	,
	},
    GlovesGoldenWarrior: {id:'GlovesGoldenWarrior',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Golden Warrior ',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:3.89},
		required: {level:9},
		modify: {strength:2,weaponskill:3,anticriticalhit:55,parry:4,defence:25,magicdefence:15},
			setlink: {name:'goldenwarrior'}
	,
	}, 
Beltgoldenwarrior: {id:'Beltgoldenwarrior',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:2.99},
		required: {level:9},
		modify: {strength:1,hitpoints:86,anticriticalhit:45,defence:35,magicdefence:30},
			setlink: {name:'goldenwarrior'}
	,
	},
BootsGoldenWarrior: {id:'BootsGoldenWarrior',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.59},
		required: {level:9},
		modify: {strength:3,hitpoints:77,anticriticalhit:40,antijumpaway:25,defence:55,magicdefence:45},
			setlink: {name:'goldenwarrior'}
	,
	},
	Earringsgoldenwarrior: {id:'Earringsgoldenwarrior',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:4.79},
		required: {level:9},
		modify: {strength:4,weaponskill:1,hitpoints:78,anticriticalhit:60,antijumpaway:55,defence:35,magicdefence:25},
			setlink: {name:'goldenwarrior'}
	,
	},
	Helmetgoldenwarrior: {id:'Helmetgoldenwarrior',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Golden Warrior',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:4.79},
		required: {level:9},
		modify: {strength:2,weaponskill:1,hitpoints:82,anticriticalhit:55,antijumpaway:45,defence:55,magicdefence:55},
			setlink: {name:'goldenwarrior'}
	,
	},
	




/*NEW ------------------------------------------------------------------------------------------(�������� ��������� �����)---------------------------------------------------------------------------------*/
SteelShieldWarrior: {id:'SteelShieldWarrior',category:'shields',slot:'w10',width:60,height:60,caption:'Shield of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:15,durability:40,eprice:5.39},
		required: {level:9},
		modify: {hitpoints:39,criticalhit:45,anticriticalhit:80,defence:35,magicdefence:25,shieldblock:10},
		setlink: {name:'SteelWarrior'},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'good'}
	},

AxeSteelWarrior: {id:'AxeSteelWarrior',category:'axes',slot:'w3',width:60,height:60,caption:'Axe of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:5.39},
		required: {level:9},
		modify: {intuition:4,axeskill:2,criticalhit:70,antijumpaway:70,sabrepower:15},
		properties: {mindamage:20,maxdamage:40,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'SteelWarrior'}
	,
	},
SteelSwordWarrior: {id:'SteelSwordWarrior',category:'swords',slot:'w3',width:60,height:60,caption:'Sword of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.39},
		required: {level:9},
		modify: {intuition:5,swordskill:2,criticalhit:60,criticalpower:20,antijumpaway:50,parry:7,cutpower:15},
		properties: {mindamage:15,maxdamage:35,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'SteelWarrior'}
	,
		
	},
BracersSteelWarrior: {id:'BracersSteelWarrior',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bands of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:3.29},
		required: {level:9},
		modify: {strength:3,weaponskill:1,hitpoints:48,criticalhit:35,anticriticalhit:35,criticalpower:20,antijumpaway:25,defence:15,magicdefence:25},
			setlink: {name:'SteelWarrior'}
	,
	},

ArmorSteelWarrior: {id:'ArmorSteelWarrior',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:8.99},
		required: {level:9},
		modify: {strength:4,intuition:2,weaponskill:2,hitpoints:100,criticalhit:65,anticriticalhit:80,criticalpower:10,antijumpaway:40,defence:115,magicdefence:50},
			setlink: {name:'SteelWarrior'}
	,
	},
	
	LeggingsSteelWarrior: {id:'LeggingsSteelWarrior',category:'pants',slot:'w19',caption:'Leggings of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.74},
		required: {level:9},
		modify: {intuition:2,hitpoints:42,criticalhit:45,anticriticalhit:35,criticalpower:20,antijumpaway:35,defence:45,magicdefence:20},
			setlink: {name:'SteelWarrior'}
	,
	},
	
	RingofSteelWarrior: {id:'RingofSteelWarrior',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:2.39},
		required: {level:9},
		modify: {strength:2,hitpoints:46,criticalhit:55,criticalpower:10,antijumpaway:45,defence:10,magicdefence:5},
			setlink: {name:'SteelWarrior'}
	,
	},
	AmuletSteelWarrior: {id:'AmuletSteelWarrior',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:9},
		modify: {strength:4,weaponskill:2,hitpoints:58,criticalhit:25,anticriticalhit:65,antijumpaway:55,defence:55,magicdefence:45},
			setlink: {name:'SteelWarrior'}
	,
	},
    GlovesSteelWarrior: {id:'GlovesSteelWarrior',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:3.89},
		required: {level:9},
		modify: {strength:2,intuition:2,weaponskill:3,criticalhit:35,criticalpower:10,antijumpaway:45},
			setlink: {name:'SteelWarrior'}
	,
	}, 
BeltSteelWarrior: {id:'BeltSteelWarrior',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:2.99},
		required: {level:9},
		modify: {intuition:2,hitpoints:48,criticalhit:25,criticalpower:20,defence:30,magicdefence:25},
			setlink: {name:'SteelWarrior'}
	,
	},
BootsSteelWarrior: {id:'BootsSteelWarrior',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.59},
		required: {level:9},
		modify: {strength:2,hitpoints:52,criticalhit:45,anticriticalhit:45,antijumpaway:50,defence:35,magicdefence:20},
			setlink: {name:'SteelWarrior'}
	,
	},
	EarringsSteelWarrior: {id:'EarringsSteelWarrior',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:4.79},
		required: {level:9},
		modify: {strength:4,weaponskill:1,hitpoints:52,criticalhit:95,criticalpower:30,antijumpaway:45},
			setlink: {name:'SteelWarrior'}
	,
	},
	Steelwarriorhelmet: {id:'Steelwarriorhelmet',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Steel Warrior',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:4.79},
		required: {level:9},
		modify: {weaponskill:1,hitpoints:54,criticalhit:55,anticriticalhit:45,criticalpower:10,antijumpaway:35,defence:60,magicdefence:55},
			setlink: {name:'SteelWarrior'}
	,
	},
	

/*NEW ------------------------------------------------------------------------------------------(�������� ����)---------------------------------------------------------------------------------*/


DaggerofSnake: {id:'DaggerofSnake',category:'knives',slot:'w3',width:60,height:60,caption:'Dagger of Snake',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.39},
		required: {level:9},
		modify: {dexterity:4,knifeskill:2,jumpaway:90,counterstroke:5,thrustpower:15},
		properties: {mindamage:8,maxdamage:21,piercearmor:75,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'Snake'}
	,
		
	},
BandsofSnake: {id:'BandsofSnake',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bands of Snake',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:3.29},
		required: {level:9},
		modify: {strength:2,dexterity:2,weaponskill:1,hitpoints:51,anticriticalhit:45,jumpaway:35,counterstroke:7,parry:3,thrustpower:5,defence:15,magicdefence:25},
			setlink: {name:'Snake'}
	,
	},

ArmorofSnake: {id:'ArmorofSnake',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Snake',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:8.99},
		required: {level:9},
		modify: {dexterity:2,weaponskill:2,hitpoints:120,anticriticalhit:65,jumpaway:100,antijumpaway:75,counterstroke:10,parry:10,defence:100,magicdefence:45},
			setlink: {name:'Snake'}
	,
	},
	
	LeggingsofSnake: {id:'LeggingsofSnake',category:'pants',slot:'w19',caption:'Leggings of Snake',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.74},
		required: {level:9},
		modify: {dexterity:2,hitpoints:34,anticriticalhit:55,jumpaway:55,antijumpaway:20,defence:40,magicdefence:25},
			setlink: {name:'Snake'}
	,
	},
	
	RingofSnake: {id:'RingofSnake',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Snake',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:2.39},
		required: {level:9},
		modify: {strength:1,dexterity:2,hitpoints:28,anticriticalhit:35,jumpaway:55,counterstroke:5,defence:15,magicdefence:20},
			setlink: {name:'Snake'}
	,
	},
	AmuletofSnake: {id:'AmuletofSnake',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Snake',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:9},
		modify: {strength:2,dexterity:2,weaponskill:1,hitpoints:68,anticriticalhit:55,jumpaway:75,antijumpaway:55,counterstroke:15,parry:5,defence:40,magicdefence:35},
			setlink: {name:'Snake'}
	,
	},
    GlovesofSnake: {id:'GlovesofSnake',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Snake',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:3.89},
		required: {level:9},
		modify: {strength:2,dexterity:3,weaponskill:3,anticriticalhit:45,antijumpaway:35,counterstroke:5,parry:5},
			setlink: {name:'Snake'}
	,
	}, 
BeltofSnake: {id:'BeltofSnake',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Snake',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:2.99},
		required: {level:9},
		modify: {strength:2,dexterity:2,hitpoints:42,anticriticalhit:55,jumpaway:35,parry:3,defence:25,magicdefence:30},
			setlink: {name:'Snake'}
	,
	},
BootsofSnake: {id:'BootsofSnake',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Snake',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.59},
		required: {level:9},
		modify: {hitpoints:38,anticriticalhit:65,jumpaway:55,antijumpaway:45,counterstroke:5,parry:5,defence:55,magicdefence:30},
			setlink: {name:'Snake'}
	,
	},
	EarringsofSnake: {id:'EarringsofSnake',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Snake',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:4.79},
		required: {level:9},
		modify: {strength:4,dexterity:4,hitpoints:46,jumpaway:100,antijumpaway:45,counterstroke:15,parry:3,thrustpower:15,defence:10},
			setlink: {name:'Snake'}
	,
	},
	HelmetofSnake: {id:'HelmetofSnake',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Snake',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:4.79},
		required: {level:9},
		modify: {strength:2,weaponskill:1,hitpoints:56,anticriticalhit:45,jumpaway:65,defence:55,magicdefence:50},
			setlink: {name:'Snake'}
	,
	},
	
/*NEW ------------------------------------------------------------------------------------------(���� �������)---------------------------------------------------------------------------------*/

HammerofAztec: {id:'HammerofAztec',category:'clubs',slot:'w3',width:60,height:60,caption:'Hammer of Aztecs',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.59},
		required: {level:8},
		modify: {antijumpaway:60,strength:5,clubskill:1,crushpower:15},
		properties: {mindamage:22,maxdamage:34,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'Aztecs'}
	,
		
	},
BandsofAztec: {id:'BandsofAztec',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bands of Aztecs',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:2.19},
		required: {level:8},
		modify: {strength:4,weaponskill:1,hitpoints:52,anticriticalhit:25,antijumpaway:35,crushpower:5,defence:20,magicdefence:25},
			setlink: {name:'Aztecs'}
	,
	},
ArmorofAztec: {id:'ArmorofAztec',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Aztecs',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:5.99},
		required: {level:8},
		modify: {strength:7,weaponskill:2,hitpoints:100,anticriticalhit:85,antijumpaway:45,parry:5,defence:125,magicdefence:55},
			setlink: {name:'Aztecs'}
	,
	},
LeggingsofAztec: {id:'LeggingsofAztec',category:'pants',slot:'w19',caption:'Leggings of Aztecs',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.74},
		required: {level:8},
		modify: {hitpoints:45,anticriticalhit:30,antijumpaway:20,parry:2,defence:35,magicdefence:25},
			setlink: {name:'Aztecs'}
	,
	},
RingofAztec: {id:'RingofAztec',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Aztecs',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:1.59},
		required: {level:8},
		modify: {strength:1,hitpoints:24,anticriticalhit:45,antijumpaway:35,parry:3,defence:25,magicdefence:15},
			setlink: {name:'Aztecs'}
	,
	},
AmuletofAztec: {id:'AmuletofAztec',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Aztecs',imp1:true,binding:'boe', 
		common: {weight:1,durability:50,eprice:3.99},
		required: {level:8},
		modify: {strength:8,hitpoints:100,anticriticalhit:70,antijumpaway:50,parry:10,defence:20,magicdefence:30},
			setlink: {name:'Aztecs'}
	,
	},
GlovesofAztec: {id:'GlovesofAztec',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Aztecs',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:2.59},
		required: {level:8},
		modify: {strength:2,weaponskill:3,anticriticalhit:35,parry:4,defence:15,magicdefence:15},
			setlink: {name:'Aztecs'}
	,
	}, 
BeltofAztec: {id:'BeltofAztec',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Aztecs',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:1.99},
		required: {level:8},
		modify: {strength:1,hitpoints:78,anticriticalhit:35,defence:25,magicdefence:20},
			setlink: {name:'Aztecs'}
	,

	},
BootsofAztecs: {id:'BootsofAztecs',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Aztecs',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:2.39},
		required: {level:8},
		modify: {strength:3,hitpoints:66,anticriticalhit:30,antijumpaway:15,defence:45,magicdefence:35},
			setlink: {name:'Aztecs'}
	,
	},
	EarringsofAztec: {id:'EarringsofAztec',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Aztecs',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:3.19},
		required: {level:8},
		modify: {strength:2,weaponskill:1,hitpoints:66,anticriticalhit:45,antijumpaway:35,defence:25,magicdefence:15},
			setlink: {name:'Aztecs'}
	,

	},
	HelmetOfAztec: {id:'HelmetOfAztec',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Aztecs',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:3.19},
		required: {level:8},
		modify: {strength:2,weaponskill:1,hitpoints:68,anticriticalhit:45,antijumpaway:35,defence:45,magicdefence:55},
			setlink: {name:'Aztecs'}
	,
	},
		
ShieldofAztecs: {id:'ShieldofAztecs',category:'shields',slot:'w10',width:60,height:60,caption:'Shield of Aztecs',imp1:true,binding:'boe',
		common: {weight:15,durability:40,eprice:3.59},
		required: {level:8},
		modify: {hitpoints:48,anticriticalhit:65,defence:35,magicdefence:25,shieldblock:10},
		setlink: {name:'Aztecs'},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'good'}
	},

/*NEW ------------------------------------------------------------------------------------------(���� ������)---------------------------------------------------------------------------------*/

voinshit: {id:'voinshit',category:'shields',slot:'w10',width:60,height:60,caption:'Shield of Jaguar',imp1:true,binding:'boe',
		common: {weight:15,durability:40,eprice:3.59},
		required: {level:8},
		modify: {hitpoints:36,criticalhit:45,anticriticalhit:50,jumpaway:75,defence:25},
		setlink: {name:'Jaguar'},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'good'}
	},

voinkingal: {id:'voinkingal',category:'swords',slot:'w3',width:60,height:60,caption:'Sword of Jaguar',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:7.19},
		required: {level:8},
		modify: {intuition:2,dexterity:4,criticalhit:175},
		properties: {mindamage:27,maxdamage:73,twohandled:'yes',blockzones:'+'},
			setlink: {name:'Jaguar'}
	,
		
	},

voinkingal2: {id:'voinkingal2',category:'knives',slot:'w3',width:60,height:60,caption:'Dagger of Jaguar',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.59},
		required: {level:8},
		modify: {jumpaway:80,knifeskill:2,intuition:1,dexterity:4,criticalhit:75,antijumpaway:45,anticriticalhit:10},
		properties: {mindamage:5,maxdamage:16,piercearmor:70,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'Jaguar'}
	,
		
	},
voinnaruchi: {id:'voinnaruchi',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bands of Jaguar',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:2.19},
		required: {level:8},
		modify: {dexterity:3,intuition:2,weaponskill:1,hitpoints:18,criticalhit:55,anticriticalhit:30,criticalpower:3,counterstroke:11,parry:4},
			setlink: {name:'Jaguar'}
	,
	},
voinbron: {id:'voinbron',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Jaguar',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:5.99},
		required: {level:8},
		modify: {strength:2,dexterity:7,intuition:4,weaponskill:2,hitpoints:57,criticalhit:55,anticriticalhit:45,criticalpower:3,jumpaway:65,counterstroke:2,defence:85,magicdefence:95},
			setlink: {name:'Jaguar'}
	,
	},
voinponogi: {id:'voinponogi',category:'pants',slot:'w19',caption:'Leggings of Jaguar',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.74},
		required: {level:8},
		modify: {dexterity:2,intuition:2,criticalhit:20,anticriticalhit:20,criticalpower:7,jumpaway:25,defence:30,magicdefence:35},
			setlink: {name:'Jaguar'}
	,
	},
voinkolco: {id:'voinkolco',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Jaguar',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:1.59},
		required: {level:8},
		modify: {strength:1,dexterity:2,hitpoints:27,criticalhit:65,anticriticalhit:15,criticalpower:1,jumpaway:25,defence:15,magicdefence:5},
			setlink: {name:'Jaguar'}
	,
	},
		voinamulet: {id:'voinamulet',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Jaguar',imp1:true,binding:'boe', 
		common: {weight:1,durability:50,eprice:3.99},
		required: {level:8},
		modify: {dexterity:4,hitpoints:42,criticalhit:55,anticriticalhit:45,jumpaway:75,defence:55,magicdefence:50},
			setlink: {name:'Jaguar'}
	,
	},
    voinperchatk: {id:'voinperchatk',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Jaguar',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:2.59},
		required: {level:8},
		modify: {dexterity:3,intuition:2,weaponskill:3,anticriticalhit:35,antijumpaway:25},
			setlink: {name:'Jaguar'}
	,
	}, 
voinpoyas: {id:'voinpoyas',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Jaguar',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:1.99},
		required: {level:8},
		modify: {hitpoints:16,criticalhit:25,anticriticalhit:15,counterstroke:11,parry:4,defence:25,magicdefence:25},
			setlink: {name:'Jaguar'}
	,

	},
voinbotink: {id:'voinbotink',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Jaguar',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:2.39},
		required: {level:8},
		modify: {dexterity:4,criticalhit:55,anticriticalhit:35,jumpaway:45,defence:25,magicdefence:25},
			setlink: {name:'Jaguar'}
	,
	},
	voinsergi: {id:'voinsergi',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Jaguar',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:3.19},
		required: {level:8},
		modify: {dexterity:5,intuition:2,weaponskill:1,criticalhit:85,anticriticalhit:10,criticalpower:5,jumpaway:95,counterstroke:7,parry:2,defence:10,magicdefence:10},
			setlink: {name:'Jaguar'}
	,

	},
	voinshlem: {id:'voinshlem',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Jaguar',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:3.19},
		required: {level:8},
		modify: {dexterity:2,weaponskill:1,hitpoints:27,criticalhit:50,anticriticalhit:40,criticalpower:4,jumpaway:25,defence:55,magicdefence:55},
			setlink: {name:'Jaguar'}
	,
	},
	









/*NEW ------------------------------------------------------------------------------------------(���� ����� ����)---------------------------------------------------------------------------------*/





haoss6: {id:'haoss6',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����',adjustment:true,artefact:true,
		common: {weight:1,eprice:99.95,durability:250},
		required: {level:8},
		setlink: {name:'chaosenerggy'},
		modify: {hitpoints:35,intuition:35,criticalpower:10,}
	},

        haoss5: {id:'haoss5',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����',adjustment:true,artefact:true,
		common: {weight:1,eprice:99.95,durability:250},
		required: {level:8},
		setlink: {name:'chaosenerggy'},
		modify: {hitpoints:33,dexterity:35,counterstroke:7,parry:3}
	},


        haoss4: {id:'haoss4',category:'gauntlets',slot:'w11',width:60,height:20,caption:'�������� �����',adjustment:true,artefact:true,
		common: {weight:1,eprice:59.95,durability:100},
		required: {level:8},
		modify: {strength:1,dexterity:1,intuition:1,weaponskill:3,hitpoints:33,criticalhit:50,anticriticalhit:25,antijumpaway:20,power:5}
	, 
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	haoss4_upgrade_9: {id:'haoss4_upgrade_9',level:9,
		common: {weight:1,eprice:89.95,durability:100},
		required: {level:9},
		modify: {strength:2,dexterity:2,intuition:2,weaponskill:4,hitpoints:66,criticalhit:75,anticriticalhit:40,antijumpaway:35,power:10}
	},
	haoss4_upgrade_10: {id:'haoss4_upgrade_10',level:10,
		common: {weight:1,eprice:149.95,durability:100},
		required: {level:10},
		modify: {strength:3,dexterity:3,intuition:3,weaponskill:5,hitpoints:99,criticalhit:100,anticriticalhit:60,antijumpaway:50,power:15}
	}}

	},


		haoss3: {id:'haoss3',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �����',adjustment:true,artefact:true,
		common: {weight:1,eprice:89.95,durability:100},
		required: {level:8},
		modify: {strength:3,dexterity:1,intuition:1,weaponskill:1,hitpoints:33,criticalhit:50,anticriticalhit:50,jumpaway:50,antijumpaway:50,counterstroke:3,parry:2,power:20}
	, 
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	haoss3_upgrade_9: {id:'haoss3_upgrade_9',level:9,
		common: {weight:1,eprice:134.95,durability:100},
		required: {level:9},
		modify: {strength:6,dexterity:2,intuition:2,weaponskill:2,hitpoints:66,criticalhit:85,anticriticalhit:85,jumpaway:85,antijumpaway:85,counterstroke:5,parry:3,power:25}
	},
	haoss3_upgrade_10: {id:'haoss3_upgrade_10',level:10,
		common: {weight:1,eprice:224.95,durability:100},
		required: {level:10},
		modify: {strength:9,dexterity:3,intuition:3,weaponskill:3,hitpoints:99,criticalhit:120,anticriticalhit:120,jumpaway:120,antijumpaway:120,counterstroke:10,parry:5,power:30}
	}}

	},
		
		
		
		haoss2: {id:'haoss2',category:'bracelets',slot:'w13',width:60,height:20,caption:'������ �����',adjustment:true,artefact:true,
		common: {weight:1,eprice:39.95,durability:100},
		required: {level:8},
		modify: {weaponskill:1,hitpoints:33,criticalhit:50,anticriticalhit:50,jumpaway:50,antijumpaway:50,defence:40,magicdefence:40,power:5}
	, 
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	haoss2_upgrade_9: {id:'haoss2_upgrade_9',level:9,
		common: {weight:1,eprice:59.95,durability:100},
		required: {level:9},
		modify: {weaponskill:1,hitpoints:66,criticalhit:70,anticriticalhit:70,jumpaway:70,antijumpaway:70,defence:60,magicdefence:60,power:10}
	},
	haoss2_upgrade_10: {id:'haoss2_upgrade_10',level:10,
		common: {weight:1,eprice:99.95,durability:100},
		required: {level:10},
		modify: {weaponskill:2,hitpoints:99,criticalhit:100,anticriticalhit:100,jumpaway:100,antijumpaway:100,defence:80,magicdefence:80,power:15}
	}}

	},
		
		haoss1: {id:'haoss1',category:'belts',slot:'w5',width:60,height:20,caption:'���� �����',adjustment:true,artefact:true,
		common: {weight:1,eprice:39.95,durability:100},
		required: {level:8},
		modify: {strength:4,hitpoints:30,criticalhit:25,anticriticalhit:50,jumpaway:25,antijumpaway:50,defence:25,magicdefence:25,power:5}
	, 
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	haoss1_upgrade_9: {id:'haoss1_upgrade_9',level:9,
		common: {weight:1,eprice:59.95,durability:100},
		required: {level:9},
		modify: {strength:7,hitpoints:60,criticalhit:50,anticriticalhit:75,jumpaway:50,antijumpaway:75,defence:50,magicdefence:50,power:10}
	},
	haoss1_upgrade_10: {id:'haoss1_upgrade_10',level:10,
		common: {weight:1,eprice:99.95,durability:100},
		required: {level:10},
		modify: {strength:10,hitpoints:90,criticalhit:75,anticriticalhit:100,jumpaway:75,antijumpaway:100,defence:75,magicdefence:75,power:15}
	}}

	},
		
		
		aring11: {id:'aring11',category:'rings',slot:'w6',width:20,height:20,caption:'������� ������ �����',adjustment:true,artefact:true,
		common: {weight:1,eprice:179.49,durability:500},
		required: {level:8},
		modify: {hitpoints:800}
	, 
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	
	aring11_upgrade_9: {id:'aring11_upgrade_9',level:9,
		common: {eprice:199.49},
		required: {level:9},
		modify: {hitpoints:1100}
	},
	aring11_upgrade_10: {id:'aring11_upgrade_10',level:10,
		common: {eprice:229.49},
		required: {level:10},
		modify: {hitpoints:1500}
	}}

	},
		
		aring12: {id:'aring12',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',adjustment:true,artefact:true,
		common: {weight:1,eprice:99.95,durability:250},
		required: {level:8},
		setlink: {name:'chaosenerggy'},
		modify: {power:10,magicdefence:20,defence:50,hitpoints:50,strength:35}
	},
		
		aring10: {id:'aring10',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����',adjustment:true,artefact:true,
		common: {weight:1,eprice:69.49,durability:500},
		required: {level:4},
		modify: {hitpoints:300}
	},
		
		aring5: {id:'aring5',category:'rings',slot:'w6',width:20,height:20,caption:'����� ������ �����',description:'���� ����������� ��������������� ����� �� ���� ���',adjustment:true,artefact:true,
		common: {weight:1,eprice:299.49,durability:200,probability:70},
		required: {level:8},
		modify: {dexterity:1,intuition:1},
		properties: {attackcount:1},
		setlink: {name:'chaosenerggy'},
		magic: {name:'attackb',caption:'�������� ���������',description:'3 ��. � �����'}
	},

		aamulet11: {id:'aamulet11',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������',adjustment:true,artefact:true,
		common: {weight:1,eprice:39.49,durability:100},
		required: {level:8},
		modify: {anticriticalhit:50,antijumpaway:50,parry:10,power:5,magicdefence:80,defence:50,hitpoints:60,strength:4}
	, 
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	aamulet11_upgrade_9: {id:'aamulet11_upgrade_9',level:9,
		common: {weight:1,eprice:59.49,durability:100},
		required: {level:9},
		modify: {anticriticalhit:75,antijumpaway:75,parry:12,power:10,magicdefence:75,defence:75,hitpoints:100,strength:7,swordskill:2,clubskill:2,knifeskill:2,axeskill:2}
	},
	aamulet11_upgrade_10: {id:'aamulet11_upgrade_10',level:10,
		common: {weight:1,eprice:99.49,durability:100},
		required: {level:10},
		modify: {anticriticalhit:100,antijumpaway:100,parry:15,power:15,magicdefence:100,defence:100,hitpoints:150,strength:10,swordskill:3,clubskill:3,knifeskill:3,axeskill:3}
	}}

	},
		
		ashield4: {id:'ashield4',category:'shields',slot:'w10',width:60,height:60,caption:'��� �����������',adjustment:true,artefact:true,
		common: {eprice:39.49,weight:20,durability:500},
		required: {level:8},
		modify: {magicdefence:10,defence:10,hitpoints:80,criticalhit:50,anticriticalhit:50,jumpaway:25,antijumpaway:50,intuition:10,strength:4,knifeskill:3,clubskill:3,axeskill:3,swordskill:3,shieldblock:3},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	, 
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	
	
	ashield4_upgrade_9: {id:'ashield4_upgrade_9',level:9,
		common: {eprice:59.49},
		required: {level:9},
		modify: {magicdefence:25,defence:25,hitpoints:100,criticalhit:100,anticriticalhit:75,jumpaway:50,antijumpaway:75,intuition:12,strength:6,knifeskill:3,clubskill:3,axeskill:3,swordskill:3,shieldblock:5}
	},
	ashield4_upgrade_10: {id:'ashield4_upgrade_10',level:10,
		common: {eprice:99.49},
		required: {level:10},
		modify: {magicdefence:30,defence:50,hitpoints:120,criticalhit:150,anticriticalhit:100,jumpaway:75,antijumpaway:100,intuition:14,strength:8,knifeskill:4,clubskill:4,axeskill:4,swordskill:4,shieldblock:10}
	}}

	},
	
		
		ashield1: {id:'ashield1',category:'shields',slot:'w10',width:60,height:60,caption:'��� ����������',adjustment:true,artefact:true,
		common: {eprice:39.49,weight:20,durability:500},
		required: {level:8},
		modify: {hitpoints:80,anticriticalhit:70,jumpaway:50,antijumpaway:60,intuition:4,strength:10,weaponskill:3,shieldblock:15,magicdefence:10,defence:10},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	, 
	setlink: {name:'chaosenerggy'},
	upgrade: {
	

	ashield1_upgrade_9: {id:'ashield1_upgrade_9',level:9,
		common: {eprice:59.49},
		required: {level:9},
		modify: {hitpoints:100,anticriticalhit:85,jumpaway:100,antijumpaway:75,strength:11,intuition:6,weaponskill:3,shieldblock:22,magicdefence:20,defence:25}
		
	},
	ashield1_upgrade_10: {id:'ashield1_upgrade_10',level:10,
		common: {eprice:99.49},
		required: {level:10},
		
		modify: {hitpoints:120,anticriticalhit:100,jumpaway:150,antijumpaway:90,strength:12,dexterity:8,intuition:0,weaponskill:4,shieldblock:30,magicdefence:30,defence:50}
	}}

	},
		
		aleg1: {id:'aleg1',category:'pants',slot:'w19',caption:'������ �����',adjustment:true,artefact:true,binding:'bop',
		common: {weight:10,durability:250,eprice:59.49},
		required: {level:8},
		modify: {anticriticalhit:35,antijumpaway:30,jumpaway:50,magicdefence:30,hitpoints:50,strength:5,power:10},
		properties: {defence:30}
	, 
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	
	aleg1_level9: {id:'aleg1_level9',level:9,
		common: {weight:10,durability:250,eprice:89.49},
		required: {level:9},
		modify: {anticriticalhit:65,antijumpaway:45,jumpaway:100,magicdefence:60,hitpoints:80,strength:7,power:15},
		properties: {defence:60}
	},
	aleg1_level10: {id:'aleg1_level10',level:10,
		common: {weight:10,durability:250,eprice:149.49},
		required: {level:10},
		modify: {anticriticalhit:95,antijumpaway:60,jumpaway:150,magicdefence:90,hitpoints:120,strength:10,power:25},
		properties: {defence:90}
	}}

	},
		
		ahelmet3_1: {id:'ahelmet3_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������',adjustment:true,artefact:true,
		common: {eprice:39.49,weight:9,durability:500},
		required: {level:8},
		modify: {anticriticalhit:50,antijumpaway:50,strength:8,dexterity:8,intuition:8,intellect:8,knifeskill:2,axeskill:2,clubskill:2,swordskill:2,hitpoints:50,defence:15,magicdefence:15,parry:3}, 
	    
	upgrade: {
	
	
	ahelmet3_upgrade_9: {id:'ahelmet3_upgrade_9',level:9,
		common: {eprice:59.49,weight:9,durability:500},
		required: {level:9},
		modify: {anticriticalhit:75,antijumpaway:75,strength:9,dexterity:9,intuition:9,intellect:9,knifeskill:2,axeskill:2,clubskill:2,swordskill:2,hitpoints:100,defence:25,magicdefence:25,parry:7}
	},
	ahelmet3_upgrade_10: {id:'ahelmet3_upgrade_10',level:10,
		common: {eprice:99.49,weight:9,durability:500},
		required: {level:10},
		modify: {anticriticalhit:100,antijumpaway:100,strength:10,dexterity:10,intuition:10,intellect:10,knifeskill:3,axeskill:3,clubskill:3,swordskill:3,hitpoints:150,defence:45,magicdefence:45,parry:10}
	}}

	},	
		
	ahelmet1: {id:'ahelmet1',category:'helmets',slot:'w9',width:60,height:60,caption:'�������� ���� ��������',adjustment:true,artefact:true,
		common: {eprice:39.49,weight:9,durability:500},
		required: {level:8},
		modify: {hitpoints:60,anticriticalhit:65,jumpaway:80,antijumpaway:50,magicdefence:30,dexterity:10,weaponskill:2}, 
	    properties: {defence:50},
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	
	 ahelmet1_upgrade_9: {id:'ahelmet1_upgrade_9',level:9,
		common: {eprice:59.49},
		required: {level:9},
		modify: {dexterity:15,anticriticalhit:90,jumpaway:110,antijumpaway:75,counterstroke:7,magicdefence:45,hitpoints:80,weaponskill:2},
		properties: {defence:75}
	},
	ahelmet1_upgrade_10: {id:'ahelmet1_upgrade_10',level:10,
		common: {eprice:99.49},
		required: {level:10},
		modify: {dexterity:20,anticriticalhit:120,jumpaway:150,antijumpaway:100,counterstroke:10,magicdefence:60,hitpoints:100,weaponskill:3},
		properties: {defence:125}
	}}

	},
		
		aarmor2: {id:'aarmor2',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ �����',adjustment:true,artefact:true,
		common: {eprice:89.49,weight:20,durability:500},
		required: {level:8},
		modify: {hitpoints:120,criticalhit:100,anticriticalhit:100,jumpaway:75,antijumpaway:75,magicdefence:50,strength:15,weaponskill:4,power:10}
	, 
	properties: {defence:100},
	setlink: {name:'chaosenerggy'},
	upgrade: {
	aarmor2_upgrade_9: {id:'aarmor2_upgrade_9',level:9,
		common: {eprice:149.49},
		required: {level:9},
		modify: {hitpoints:0,criticalhit:150,anticriticalhit:130,jumpaway:125,antijumpaway:100,magicdefence:100,strength:20,weaponskill:4,power:15},
		properties: {defence:150}
	},
	aarmor2_upgrade_10: {id:'aarmor2_upgrade_10',level:10,
		common: {eprice:249.49},
		required: {level:10},
		modify: {hitpoints:250,criticalhit:200,anticriticalhit:160,jumpaway:175,antijumpaway:125,magicdefence:150,strength:25,weaponskill:5,power:25},
		properties: {defence:250}
	}}

	},
		
		aarmor4: {id:'aarmor4',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� ������',adjustment:true,artefact:true,
		common: {eprice:39.49,weight:23,durability:500},
		required: {level:8},
		modify: {hitpoints:100,criticalhit:85,anticriticalhit:50,jumpaway:25,antijumpaway:25,magicdefence:25,strength:12,intuition:12,weaponskill:2}, 
	    properties: {defence:50},
	    
	upgrade: {
	

	aarmor4_upgrade_9: {id:'aarmor4_upgrade_9',level:9,
		common: {eprice:59.49},
		required: {level:9},
		modify: {hitpoints:140,criticalhit:120,anticriticalhit:75,jumpaway:40,antijumpaway:40,magicdefence:50,strength:14,intuition:14,weaponskill:3},
		properties: {defence:100}
	},
	aarmor4_upgrade_10: {id:'aarmor4_upgrade_10',level:10,
		common: {eprice:99.49},
		required: {level:10},
		modify: {hitpoints:180,criticalhit:155,anticriticalhit:100,jumpaway:60,antijumpaway:60,magicdefence:75,strength:16,intuition:16,weaponskill:4},
		properties: {defence:150}
	}}

	},
		
		aarmor3_1: {id:'aarmor3_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������',adjustment:true,artefact:true,
		common: {weight:25,durability:500,eprice:39.49},
		required: {level:8},
		modify: {criticalhit:50,jumpaway:50,anticriticalhit:35,antijumpaway:35,hitpoints:100,strength:7,dexterity:7,intuition:7,weaponskill:2,magicdefence:20}, 
	    
	upgrade: {
	
	
	aarmor3_upgrade_9: {id:'aarmor3_upgrade_9',level:9,
		common: {eprice:59.49},
		required: {level:9},
		modify: {criticalhit:75,jumpaway:75,anticriticalhit:35,antijumpaway:35,hitpoints:150,strength:8,dexterity:8,intuition:8,weaponskill:3,magicdefence:30,counterstroke:5,criticalpower:5}
	},
	aarmor3_upgrade_10: {id:'aarmor3_upgrade_10',level:10,
		common: {eprice:99.49},
		required: {level:10},
		modify: {criticalhit:100,jumpaway:100,anticriticalhit:50,antijumpaway:50,hitpoints:186,strength:10,dexterity:10,intuition:10,weaponskill:4,magicdefence:50,counterstroke:10,criticalpower:10}
	}}

	},
		
		aarmor1: {id:'aarmor1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ -����� �������-',adjustment:true,artefact:true,
		common: {eprice:39.49,weight:20,durability:500},
		required: {level:8},
		modify: {criticalhit:70,anticriticalhit:35,jumpaway:35,antijumpaway:35,magicdefence:20,strength:13,weaponskill:3}, 
		properties: {defence:50},
		
		upgrade: {
	
	
	aarmor1_upgrade_9: {id:'aarmor1_upgrade_9',level:9,
		common: {eprice:59.49},
		required: {level:9},
		modify: {criticalhit:80,anticriticalhit:40,jumpaway:40,antijumpaway:40,magicdefence:30,strength:15,axeskill:4,sabrepower:5},
		properties: {defence:75}
	},
	aarmor1_upgrade_10: {id:'aarmor1_upgrade_10',level:10,
		common: {eprice:99.49},
		required: {level:10},
		modify: {criticalpower:10,criticalhit:90,anticriticalhit:45,jumpaway:45,antijumpaway:45,magicdefence:50,strength:20,axeskill:4,sabrepower:5},
		properties: {defence:100}
	}}
	},
		
		roba_s3: {id:'roba_s3',category:'shirts',slot:'wshirt',width:60,height:80,caption:'�������� ��������',
		common: {weight:1,eprice:64.49,durability:200},
		required: {level:8},
		modify: {criticalpower:5,anticriticalhit:45,antijumpaway:45,parry:5,counterstroke:5,dexterity:4,strength:5,weaponskill:2,magicdefence:50,defence:50,hitpoints:60,hpspeed:50,power:5}, 
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	
	roba_s3_level9: {id:'roba_s3_level9',level:9,
		common: {weight:1,eprice:89.49,durability:200},
		required: {level:9},
		modify: {anticriticalhit:75,antijumpaway:75,parry:10,counterstroke:7,dexterity:6,strength:6,weaponskill:2,magicdefence:75,defence:75,hitpoints:90,hpspeed:75,power:10}
	},
	roba_s3_level10: {id:'roba_s3_level10',level:10,
		common: {weight:1,eprice:139.49,durability:200},
		required: {level:10},
		modify: {anticriticalhit:100,antijumpaway:100,parry:15,counterstroke:10,dexterity:8,strength:8,weaponskill:3,magicdefence:100,defence:100,hitpoints:120,hpspeed:100,power:15}
	}}

	},
		
		aboots1: {id:'aboots1',category:'boots',slot:'w12',width:60,height:40,caption:'������ �������',adjustment:true,artefact:true,
		common: {weight:6,eprice:54.99,durability:500},
		required: {level:8},
		modify: {anticriticalhit:40,antijumpaway:40,criticalhit:50,jumpaway:50,dexterity:5,intuition:5,hitpoints:66,magicdefence:50,power:5},
		properties: {defence:50},
	    setlink: {name:'chaosenerggy'},
	upgrade: {
	
	
	aboots_upgrade_9: {id:'aboots_upgrade_9',level:9,
		common: {eprice:84.99},
		required: {level:9},
		modify: {anticriticalhit:55,antijumpaway:55,criticalhit:75,jumpaway:75,dexterity:7,intuition:7,hitpoints:99,magicdefence:75,power:10},
		properties: {defence:75}
	},
	aboots_upgrade_10: {id:'aboots_upgrade_10',level:10,
		common: {eprice:144.99},
		required: {level:10},
		modify: {anticriticalhit:75,antijumpaway:75,criticalhit:100,jumpaway:100,dexterity:10,intuition:10,hitpoints:120,magicdefence:100,power:15},
		properties: {defence:100}
	}}

	},
		
		asword4: {id:'asword4',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������',adjustment:true,artefact:true,
		common: {eprice:28.99,weight:6,durability:500},
		required: {level:8},
		modify: {strength:5,intuition:3,jumpaway:45,parry:10,criticalhit:70,antijumpaway:45,swordskill:3,piercearmor:20,criticalpower:5},
		properties: {mindamage:20,maxdamage:31},
	    
	upgrade: {
	
	asword4_upgrade_9: {id:'asword4_upgrade_9',level:9,
		common: {eprice:38.99},
		required: {level:9},
		modify: {strength:6,intuition:4,jumpaway:55,parry:15,criticalhit:85,antijumpaway:55,swordskill:3,piercearmor:25,criticalpower:10},
		properties: {mindamage:25,maxdamage:36},
		
	},
	asword4_upgrade_10: {id:'asword4_upgrade_10',level:10,
		common: {eprice:58.99},
		required: {level:10},
		modify: {strength:7,intuition:5,jumpaway:70,parry:20,criticalpower:30,criticalhit:100,antijumpaway:100,swordskill:3,piercearmor:30,cutpower:15},
		properties: {mindamage:30,maxdamage:40},
		
	}}

	},
		
		asword3: {id:'asword3',category:'swords',slot:'w3',width:60,height:60,caption:'��� ������',adjustment:true,artefact:true,
		common: {eprice:28.99,weight:5,durability:500},
		required: {level:8},
		modify: {strength:5,anticriticalhit:70,parry:3,intuition:3,jumpaway:40,antijumpaway:50,swordskill:3,piercearmor:10,cutpower:5},
		properties: {mindamage:18,maxdamage:32},
	
	 upgrade:{
	asword3_upgrade_9: {id:'asword3_upgrade_9',level:9,
		common: {eprice:38.99},
		required: {level:9},
		modify: {strength:6,anticriticalhit:85,parry:4,intuition:4,jumpaway:55,piercearmor:20,swordskill:4,antijumpaway:75,cutpower:10},
		properties: {mindamage:25,maxdamage:36},
		
	},
	asword3_upgrade_10: {id:'asword3_upgrade_10',level:10,
		common: {eprice:58.99},
		required: {level:10},
		modify: {strength:7,anticriticalhit:100,parry:5,intuition:5,jumpaway:75,piercearmor:25,swordskill:4,antijumpaway:100,cutpower:15},
		properties: {mindamage:30,maxdamage:40},
		
	}}

	},
		
		amolot1: {id:'amolot1',category:'clubs',slot:'w3',width:60,height:60,caption:'������� �������',adjustment:true,artefact:true,
		common: {eprice:84.99,weight:9,durability:500},
		required: {level:8},
		modify: {strength:10,criticalhit:100,antijumpaway:100,crushpower:10,clubskill:3},
		properties: {mindamage:40,maxdamage:55,blockzones:'+'},
		setlink: {name:'chaosenerggy'},
	 upgrade: {
	
	amolot1_level9: {id:'amolot1_level9',level:9,
		common: {eprice:129.99},
		required: {level:9},
		modify: {strength:20,crushpower:15,criticalhit:150,antijumpaway:150,clubskill:4},
		properties: {mindamage:45,maxdamage:60},
		
	},
	amolot1_level10: {id:'amolot1_level10',level:10,
		common: {eprice:219.99},
		required: {level:10},
		modify: {strength:35,criticalpower:50,criticalhit:200,antijumpaway:200,crushpower:25,clubskill:5},
		properties: {mindamage:50,maxdamage:65},
		
	}}

	},
		
		aknife1: {id:'aknife1',category:'knives',slot:'w3',width:60,height:60,caption:'������ ������ ���',adjustment:true,artefact:true,binding:'bop',
		common: {weight:5,durability:500,eprice:84.99},
		required: {level:8},
		modify: {antijumpaway:50,jumpaway:100,criticalhit:100,parry:20,counterstroke:20,thrustpower:10,dexterity:15,knifeskill:3},
		properties: {mindamage:10,maxdamage:25,piercearmor:100,secondweapon:'yes',blockzones:'+'},
	    setlink: {name:'chaosenerggy'},
	 upgrade: {
	aknife1_level9: {id:'aknife1_level9',level:9,
		common: {weight:5,durability:500,eprice:129.99},
		required: {level:9},
		modify: {antijumpaway:85,jumpaway:150,criticalhit:150,parry:25,counterstroke:25,thrustpower:15,dexterity:20,knifeskill:4},
		properties: {mindamage:12,maxdamage:27,piercearmor:100,secondweapon:'yes',blockzones:'+'}
	},
	aknife1_level10: {id:'aknife1_level10',level:10,
		common: {weight:5,durability:500,eprice:219.99},
		required: {level:10},
		modify: {antijumpaway:125,jumpaway:200,criticalhit:200,parry:30,counterstroke:30,thrustpower:20,dexterity:30,knifeskill:5},
		properties: {mindamage:15,maxdamage:30,piercearmor:100,secondweapon:'yes',blockzones:'+'}
	}}

	},
	
	aaxe5: {id:'aaxe5',category:'axes',slot:'w3',width:60,height:60,caption:'����� �����',adjustment:true,artefact:true,
		common: {weight:5,eprice:84.99,durability:500},
		required: {level:8},
		modify: {anticriticalhit:50,parry:15,counterstroke:20,dexterity:15,jumpaway:150,antijumpaway:50,axeskill:3},
		properties: {mindamage:38,maxdamage:42,piercearmor:15,blockzones:'+'},
	    setlink: {name:'chaosenerggy'},
    	upgrade: {
	aaxe5_level9: {id:'aaxe5_level9',level:9,
		common: {eprice:129.99},
		required: {level:9},
		modify: {anticriticalhit:100,parry:20,counterstroke:30,dexterity:20,jumpaway:200,antijumpaway:100,axeskill:4},
		properties: {mindamage:43,maxdamage:47,piercearmor:20}
	},
	aaxe5_level10: {id:'aaxe5_level10',level:10,
		common: {eprice:219.99},
		required: {level:10},
		modify: {anticriticalhit:200,parry:30,counterstroke:50,dexterity:30,jumpaway:250,antijumpaway:150,axeskill:5},
		properties: {mindamage:48,maxdamage:52,piercearmor:25}
	}}

	},


/*NEW (�������� Revenge)*/

Revengemech: {id:'Revengemech',category:'swords',slot:'w3',width:60,height:60,caption:'Sword of Revenge',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:10.79},
		required: {level:9},
		modify: {intuition:2,dexterity:4,criticalhit:185},
		properties: {mindamage:29,maxdamage:76,twohandled:'yes',blockzones:'+'},
			setlink: {name:'Revenge'}
	,
		
	},

knife783: {id:'knife783',category:'knives',slot:'w3',width:60,height:60,caption:'Dagger of Revenge',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:5.39},
		required: {level:9},
		modify: {jumpaway:85,knifeskill:1,intuition:1,dexterity:4,criticalhit:80,antijumpaway:45,thrustpower:10},
		properties: {mindamage:8,maxdamage:21,piercearmor:70,secondweapon:'yes',blockzones:'+'},
			setlink: {name:'Revenge'}
	,
		
	},
naruchi783: {id:'naruchi783',category:'bracelets',slot:'w13',width:60,height:40,caption:'Bands of Revenge',imp1:true,binding:'boe',
		common: {weight:2,durability:50,eprice:3.29},
		required: {level:9},
		modify: {dexterity:3,intuition:2,weaponskill:1,hitpoints:28,criticalhit:50,anticriticalhit:30,criticalpower:2,antijumpaway:5,counterstroke:13,parry:5,defence:15,magicdefence:15},
			setlink: {name:'Revenge'}
	,
	},

armor783: {id:'armor783',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Armor of Revenge',imp1:true,binding:'boe',
		common: {weight:30,durability:50,eprice:8.99},
		required: {level:9},
		modify: {strength:2,dexterity:7,intuition:4,weaponskill:2,hitpoints:74,criticalhit:60,anticriticalhit:65,criticalpower:4,jumpaway:75,antijumpaway:50,defence:100,magicdefence:100},
			setlink: {name:'Revenge'}
	,
	},
	
	leg783: {id:'leg783',category:'pants',slot:'w19',caption:'Leggings of Revenge',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.74},
		required: {level:9},
		modify: {dexterity:2,intuition:2,criticalhit:25,anticriticalhit:20,criticalpower:8,jumpaway:40,defence:35,magicdefence:40},
			setlink: {name:'Revenge'}
	,
	},
	
	ring783: {id:'ring783',category:'rings',slot:'w6',width:20,height:20,caption:'Ring of Revenge',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:2.39},
		required: {level:9},
		modify: {strength:1,dexterity:2,hitpoints:32,criticalhit:85,anticriticalhit:15,criticalpower:1,jumpaway:55,defence:25,magicdefence:10},
			setlink: {name:'Revenge'}
	,
	},
	kulon783: {id:'kulon783',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Revenge',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:5.99},
		required: {level:9},
		modify: {dexterity:4,hitpoints:68,criticalhit:65,anticriticalhit:45,jumpaway:95,defence:55,magicdefence:55},
			setlink: {name:'Revenge'}
	,
	},
    gloves783: {id:'gloves783',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Gloves of Revenge',imp1:true,binding:'boe',
		common: {weight:3,durability:50,eprice:3.89},
		required: {level:9},
		modify: {dexterity:3,intuition:2,weaponskill:3,criticalhit:15,anticriticalhit:40,antijumpaway:45},
			setlink: {name:'Revenge'}
	,
	}, 
belt783: {id:'belt783',category:'belts',slot:'w5',width:60,height:40,caption:'Belt of Revenge',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:2.99},
		required: {level:9},
		modify: {hitpoints:24,criticalhit:20,anticriticalhit:30,counterstroke:13,parry:5,defence:25,magicdefence:35},
			setlink: {name:'Revenge'}
	,
	},
boots783: {id:'boots783',category:'boots',slot:'w12',width:60,height:40,caption:'Boots of Revenge',imp1:true,binding:'boe',
		common: {weight:6,durability:50,eprice:3.59},
		required: {level:9},
		modify: {dexterity:4,criticalhit:65,anticriticalhit:40,jumpaway:65,defence:35,magicdefence:35},
			setlink: {name:'Revenge'}
	,
	},
	earrings783: {id:'earrings783',category:'earrings',slot:'w1',width:60,height:20,caption:'Earrings of Revenge',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:4.79},
		required: {level:9},
		modify: {dexterity:5,intuition:2,weaponskill:1,criticalhit:105,anticriticalhit:20,criticalpower:7,jumpaway:105,counterstroke:9,parry:3,defence:10,magicdefence:10},
			setlink: {name:'Revenge'}
	,
	},
	helmet783: {id:'helmet783',category:'helmets',slot:'w9',width:60,height:60,caption:'Helmet of Revenge',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:4.79},
		required: {level:9},
		modify: {dexterity:2,weaponskill:1,hitpoints:34,criticalhit:50,anticriticalhit:40,criticalpower:5,jumpaway:35,defence:55,magicdefence:55},
			setlink: {name:'Revenge'}
	,
	},
	axe783: {id:'axe783',category:'axes',slot:'w3',width:60,height:60,caption:'Axe of Revenge',imp1:true,binding:'boe',
		common: {weight:15,durability:50,eprice:5.39},
		required: {level:9},
		modify: {strength:2,intuition:2,axeskill:2,criticalhit:60,anticriticalhit:45,jumpaway:25,sabrepower:15},
		properties: {mindamage:20,maxdamage:40,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'Revenge'}
	,
	},
	
	/*NEW (���� ����� ���)*/
	
	
	aboots100: {id:'aboots100',category:'boots',slot:'w12',width:60,height:40,caption:'������ �����',artefact:true,adjustment:false,
		common: {weight:1,eprice:54.99,durability:500},
		required: {level:8},
		modify: {anticriticalhit:100,magicdefencereduce:2,magicdefence:50,magicpower:5,magicskill:2,hitpoints:100,mana:100},
		properties: {defence:50},
		setlink: {name:'chaosenergy'}
	, upgrade: {
	aboots100_level_9: {id:'aboots100_level_9',level:9,
		common: {weight:1,eprice:84.99,durability:500},
		required: {level:9},
		modify: {anticriticalhit:150,magicdefencereduce:3,magicdefence:75,magicpower:10,magicskill:2,hitpoints:150,mana:150},
		properties: {defence:75}
	},
	aboots100_level_10: {id:'aboots100_level_10',level:10,
		common: {weight:1,eprice:144.99,durability:500},
		required: {level:10},
		modify: {anticriticalhit:200,magicdefencereduce:5,magicdefence:100,magicpower:15,magicskill:3,hitpoints:200,mana:200},
		properties: {defence:100}
	}}

	},
	staff_chaos1: {id:'staff_chaos1',category:'staffs',slot:'w3',width:60,height:60,caption:'����� ������� �����',artefact:true,
		common: {weight:5,eprice:174.99,durability:500},
		required: {level:8},
		modify: {hitpoints:100,mana:500,magicskill:3,magicpower:25,magicdefencereduce:10,manaconsumption:15,greymagicskill:3,magicdefence:50,defence:50},
		properties: {mindamage:1,maxdamage:10,twohandled:'yes',blockzones:'+'},
		attacks: {air:'always'},
		setlink: {name:'chaosenergy'}
	, upgrade: {
	staff_chaos1_level_9: {id:'staff_chaos1_level_9',caption:'����� ������� �����',level:9,
		common: {eprice:264.99},
		required: {level:9},
		modify: {hitpoints:250,mana:600,magicskill:4,magicpower:30,magicdefencereduce:15,manaconsumption:25,greymagicskill:4,magicdefence:75,defence:75}
	},
	staff_chaos1_level_10: {id:'staff_chaos1_level_10',caption:'����� ������� �����',level:10,
		common: {eprice:444.99},
		required: {level:10},
		modify: {hitpoints:450,mana:700,magicskill:5,magicpower:45,magicdefencereduce:20,manaconsumption:35,greymagicskill:5,magicdefence:100,defence:100},
  properties: {blockzones:'++'}
  
  
	}}

	},
	Gloves_chaos1: {id:'Gloves_chaos1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �����',artefact:true,
		common: {weight:5,eprice:59.95,durability:500},
		required: {level:8},
		modify: {magicdefencereduce:2,intellect:5,staffskill:2,magicskill:1,hitpoints:50,mana:100,magicpower:5,magicdefence:10,defence:10},
		setlink: {name:'chaosenergy'}
	, upgrade: {
	Gloves_chaos1_level_9: {id:'Gloves_chaos1_level_9',caption:'�������� �����',level:9,
		common: {eprice:89.95},
		required: {level:9},
		modify: {magicdefencereduce:3,intellect:10,staffskill:2,magicskill:2,hitpoints:75,mana:150,magicpower:10,magicdefence:20,defence:20}
	},
	Gloves_chaos1_level_10: {id:'Gloves_chaos1_level_10',caption:'�������� �����',level:10,
		common: {eprice:149.95},
		required: {level:10},
		modify: {magicdefencereduce:5,intellect:15,staffskill:3,magicskill:3,hitpoints:100,mana:200,magicpower:15,magicdefence:30,defence:30}

  
	}}

	},
	
	arobe1: {id:'arobe1',category:'lightarmors',slot:'w4',width:60,height:80,caption:'���� �����',adjustment:false,artefact:true,
		common: {weight:5,eprice:99.49,durability:100},
		required: {level:8},
		modify: {anticriticalhit:100,magicdefencereduce:2,magicpower:20,intellect:15,magicdefence:75,hitpoints:150,mana:200,magicskill:2},
		properties: {defence:75},
		setlink: {name:'chaosenergy'}
	, upgrade: {
	arobe1_level9: {id:'arobe1_level9',level:9,
		common: {eprice:149.49},
		required: {level:9},
		modify: {anticriticalhit:150,magicdefencereduce:3,magicpower:30,intellect:20,magicdefence:100,hitpoints:225,mana:350,magicskill:3},
		properties: {defence:100}
	},
	arobe1_level10: {id:'arobe1_level10',level:10,
		common: {eprice:249.49},
		required: {level:10},
		modify: {anticriticalhit:200,magicdefencereduce:5,magicpower:40,intellect:25,magicdefence:125,hitpoints:300,mana:500,magicskill:4},
		properties: {defence:125}
	}}

	},

	ahelmet100: {id:'ahelmet100',category:'helmets',slot:'w9',width:60,height:60,caption:'����� �����',artefact:true,adjustment:false,
		common: {eprice:39.49,weight:1,durability:500},
		required: {level:8},
		modify: {anticriticalhit:100, magicpower:5, magicskill:2, hitpoints:80, mana: 100,magicdefencereduce:2,magicdefence:50},
		properties: {defence:50},
		setlink: {name:'chaosenergy'}
	, upgrade: {
	ahelmet100_upgrade_9: {id:'ahelmet100_upgrade_9',level:9,
		common: {eprice:59.49,weight:1,durability:500},
		required: {level:9},
		modify: {anticriticalhit:150, magicpower:10, magicskill:2, hitpoints:100, mana: 150,magicdefencereduce:3,magicdefence:65},
		properties: {defence:65}
	},
	ahelmet100_upgrade_10: {id:'ahelmet100_upgrade_10',level:10,
		common: {eprice:99.49,weight:1,durability:500},
		required: {level:10},
		modify: {anticriticalhit:200, magicpower:15, magicskill:2, hitpoints:120, mana: 200,magicdefencereduce:5,magicdefence:80},
		properties: {defence:80}
	}}

	},
	
		aleg2: {id:'aleg2',category:'pants',slot:'w19',caption:'����� �����',adjustment:false,artefact:true,binding:'bop',
		common: {weight:10,durability:250,eprice:59.49},
		required: {level:8},
		modify: {anticriticalhit:50,magicdefencereduce:2,intellect:5,magicdefence:30,hitpoints:42,mana:150},
		properties: {defence:30},
		setlink: {name:'chaosenergy'}
	, upgrade: {
	
	aleg2_level9: {id:'aleg2_level9',level:9,
		common: {weight:10,durability:250,eprice:89.49},
		required: {level:9},
		modify: {anticriticalhit:85,magicdefencereduce:3,intellect:7,magicpower:15,magicdefence:60,hitpoints:56,mana:225},
		properties: {defence:60}
	},
	aleg2_level10: {id:'aleg2_level10',level:10,
		common: {weight:10,durability:250,eprice:149.49},
		required: {level:10},
		modify: {anticriticalhit:125,magicdefencereduce:5,intellect:10,magicpower:25,magicdefence:90,hitpoints:72,mana:300},
		properties: {defence:90}
	}}

	},
	
	aamulet10: {id:'aamulet10',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ �������� ����������',adjustment:true,artefact:true,
		common: {weight:1,eprice:39.49,durability:100},
		required: {level:8},
		modify: {anticriticalhit:50,magicpower:5,intellect:5,magicskill:1,magicdefence:50,defence:50,hitpoints:75,mana:100},
        setlink: {name:'chaosenergy'},		
	upgrade: {
	aamulet10_level9: {id:'aamulet10_level9',level:9,
		common: {eprice:59.49},
		required: {level:9},
		modify: {anticriticalhit:50,magicpower:10,magicdefencereduce:2,intellect:10,magicskill:2,magicdefence:75,defence:75,hitpoints:100,mana:125}
	},
	aamulet10_level10: {id:'aamulet10_level10',level:10,
		common: {eprice:99.49},
		required: {level:10},
		modify: {anticriticalhit:100,magicpower:15,magicdefencereduce:3,intellect:15,magicskill:3,magicdefence:100,defence:100,hitpoints:150,mana:175}
	}}

	},

	aring100: {id:'aring100',category:'rings',slot:'w6',width:20,height:20,caption:'����� ������ ������',description:'���� ����������� ������������ �������������� ���������� ������ ���',artefact:true,
		common: {weight:1,eprice:299.49,durability:250},
		required: {level:8},
		modify: {intellect:10},
		setlink: {name:'chaosenergy'}
	,
	},
	
	roba_s6: {id:'roba_s6',category:'shirts',slot:'wshirt',width:60,height:80,caption:'�������� ���������',
		common: {weight:1,eprice:64.49,durability:200},
		required: {level:8},
		modify: {anticriticalhit:150,magicdefencereduce:2,magicpower:5,intellect:5,magicskill:2,magicdefence:50,defence:50,hitpoints:60,manaspeed:50}, 
		setlink: {name:'chaosenergy'},	
		upgrade: {
	
	roba_s6_level9: {id:'roba_s6_level9',level:9,
		common: {weight:1,eprice:89.49,durability:200},
		required: {level:9},
		modify: {staffskill:1,anticriticalhit:200,magicdefencereduce:3,magicpower:10,intellect:10,magicskill:2,magicdefence:75,defence:75,hitpoints:90,manaspeed:75}
	},
	roba_s6_level10: {id:'roba_s6_level10',level:10,
		common: {weight:1,eprice:139.49,durability:200},
		required: {level:10},
		modify: {staffskill:1,anticriticalhit:250,magicdefencereduce:5,magicpower:15,intellect:15,magicskill:3,magicdefence:100,defence:100,hitpoints:120,manaspeed:100}
	}}

	},
	
	aring8: {id:'aring8',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� ����������',adjustment:true,artefact:true,
		common: {weight:1,eprice:69.49,durability:500},
		required: {level:8},
		modify: {intellect:20,defence:15,magicdefencereduce:1,magicpower:5,magicskill:1,mana:100}, 
		setlink: {name:'chaosenergy'},	
		upgrade: {
    aring8_upgrade_9: {id:'aring8_upgrade_9',level:9,
		common: {eprice:99.49},
		required: {level:9},
		modify: {intellect:25,defence:20,magicdefencereduce:3,magicpower:10,magicskill:1,greymagicskill:1,mana:200}
	},
	aring8_upgrade_10: {id:'aring8_upgrade_10',level:10,
		common: {eprice:174.49},
		required: {level:10},
		modify: {intellect:30,defence:25,magicdefencereduce:5,magicpower:15,magicskill:2,greymagicskill:2,mana:300}
	}}

	},
	
	Bands_chaos: {id:'Bands_chaos',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �����',artefact:true,
		common: {weight:5,eprice:39.95,durability:500},
		required: {level:8},
		modify: {magicdefencereduce:1,magicskill:1,hitpoints:50,mana:100,anticriticalhit:80,magicdefence:40,defence:40,magicpower:5},
		setlink: {name:'chaosenergy'}
	, upgrade: {
	Bands_chaos_level_9: {id:'Bands_chaos_level_9',caption:'������ �����',level:9,
		common: {eprice:59.95},
		required: {level:9},
		modify: {magicdefencereduce:3,magicskill:1,hitpoints:75,mana:150,anticriticalhit:120,magicdefence:60,defence:60,magicpower:10}
	},
	Bands_chaos_level_10: {id:'Bands_chaos_level_10',caption:'������ �����',level:10,
		common: {eprice:99.95},
		required: {level:10},
		modify: {magicdefencereduce:5,magicskill:2,hitpoints:100,mana:200,anticriticalhit:160,magicdefence:80,defence:80,magicpower:15}

  
	}}

	},

	Belt_chaos: {id:'Belt_chaos',category:'belts',slot:'w5',width:60,height:40,caption:'���� �����',artefact:true,
		common: {weight:5,eprice:39.95,durability:500},
		required: {level:8},
		modify: {magicdefencereduce:1,intellect:4,hitpoints:24,mana:50,magicpower:5,anticriticalhit:25,magicdefence:25,defence:25},
		setlink: {name:'chaosenergy'}
	, upgrade: {
	Belt_chaos_level_9: {id:'Belt_chaos_level_9',caption:'���� �����',level:9,
		common: {eprice:59.95},
		required: {level:9},
		modify: {magicdefencereduce:3,intellect:7,hitpoints:36,mana:100,magicpower:10,anticriticalhit:50,magicdefence:50,defence:50}
	},
	Belt_chaos_level_10: {id:'Belt_chaos_level_10',caption:'���� �����',level:10,
		common: {eprice:99.95},
		required: {level:10},
		modify: {magicdefencereduce:5,intellect:10,hitpoints:48,mana:150,magicpower:15,anticriticalhit:75,magicdefence:75,defence:75}

	}}

	},
	
	Earrings_chaos: {id:'Earrings_chaos',category:'earrings',slot:'w1',width:60,height:40,caption:'������ �����',artefact:true,
		common: {weight:5,eprice:89.95,durability:500},
		required: {level:8},
		modify: {magicdefencereduce:1,intellect:5,hitpoints:100,mana:150,magicpower:20,anticriticalhit:100,magicskill:1},
		setlink: {name:'chaosenergy'}
	, upgrade: {
	Earrings_chaos_level_9: {id:'Earrings_chaos_level_9',caption:'������ �����',level:9,
		common: {eprice:134.95},
		required: {level:9},
		modify: {magicdefencereduce:3,intellect:10,hitpoints:150,mana:225,magicpower:25,anticriticalhit:125,magicskill:2}
	},
	Earrings_chaos_level_10: {id:'Earrings_chaos_level_10',caption:'������ �����',level:10,
		common: {eprice:224.95},
		required: {level:10},
		modify: {magicdefencereduce:5,intellect:15,hitpoints:200,mana:300,magicpower:30,anticriticalhit:150,magicskill:3}

	}}

	},
	

	
/*NEW (21.03.2008)*/
  
  braslet33_1 : { id: 'braslet33_1', category: 'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������� [10]',binding:'bop',
    common: {weight:2,price:157,durability:40},
   	required: {level:10},
   	modify: {stats:13, hitpoints: 150}
  },
  braslet33 : { id: 'braslet33', category: 'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������� [9]',binding:'bop',
    common: {weight:2,price:157,durability:40},
   	required: {level:9},
   	modify: {stats:11, hitpoints: 125}
  },
  
  
  
  
/*STARTOF: �������� ������������� ���������*/
  
  

/*ENDOF : �������� ������������� ���������*/



/*
  amulet100: {id:'amulet100',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� ��������',
	  	common: {weight:1,price:90,durability:30},
	  	required: {level:4,intellect:15},
	  	modify: {anticriticalhit:27,hitpoints:30,mana:30,intellect:3,headarmor1:4,headarmor2:6,headarmorf:3,headarmorm:1,headarmord:3,bodyarmor1:4,bodyarmor2:6,bodyarmorf:3,bodyarmorm:1,bodyarmord:3,waistarmor1:4,waistarmor2:6,waistarmorf:3,waistarmorm:1,waistarmord:3,legarmor1:4,legarmor2:6,legarmorf:3,legarmorm:1,legarmord:3}
	 },
*/
 /*End OF NEW (21.03.2008)*/

rune_0_0_1: { id: 'rune_0_0_1', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},
rune_0_0_2: { id: 'rune_0_0_2', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},
rune_0_0_3: { id: 'rune_0_0_3', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},
rune_0_0_4: { id: 'rune_0_0_4', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},
rune_0_0_5: { id: 'rune_0_0_5', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},
rune_0_0_6: { id: 'rune_0_0_6', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},
rune_0_0_7: { id: 'rune_0_0_7', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},
rune_0_0_8: { id: 'rune_0_0_8', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},
rune_0_0_9: { id: 'rune_0_0_9', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},
rune_0_0_10: { id: 'rune_0_0_10', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { sabrepower:1 }, { firemagicpower:1 }, { criticalhit:5 }, { sabredefence:5 }, { firemagicdefence:5 } ]  }
			},

rune_0_1_1: { id: 'rune_0_1_1', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 } ]  }
			},
rune_0_1_2: { id: 'rune_0_1_2', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 } ]  }
			},
rune_0_1_3: { id: 'rune_0_1_3', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 } ]  }
			},
rune_0_1_4: { id: 'rune_0_1_4', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 } ]  }
			},
rune_0_1_5: { id: 'rune_0_1_5', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 } ]  }
			},
rune_0_1_6: { id: 'rune_0_1_6', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 } ]  }
			},
rune_0_1_7: { id: 'rune_0_1_7', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 } ]  }
			},
rune_0_1_8: { id: 'rune_0_1_8', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 } ]  }
			},
rune_0_1_9: { id: 'rune_0_1_9', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 } ]  }
			},
rune_0_1_10: { id: 'rune_0_1_10', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [  { cutpower:1 }, { watermagicpower:1 }, { anticriticalhit:5 }, { cutdefence:5 }, { watermagicdefence:5 }  ]  }
			},

rune_0_2_1: { id: 'rune_0_2_1', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},
rune_0_2_2: { id: 'rune_0_2_2', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},
rune_0_2_3: { id: 'rune_0_2_3', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},
rune_0_2_4: { id: 'rune_0_2_4', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},
rune_0_2_5: { id: 'rune_0_2_5', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},
rune_0_2_6: { id: 'rune_0_2_6', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},
rune_0_2_7: { id: 'rune_0_2_7', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},
rune_0_2_8: { id: 'rune_0_2_8', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},
rune_0_2_9: { id: 'rune_0_2_9', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},
rune_0_2_10: { id: 'rune_0_2_10', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { thrustpower:1 }, { airmagicpower:1 }, { jumpaway:5 }, { thrustdefence:5 }, { airmagicdefence:5 } ]  }
			},

rune_0_3_1: { id: 'rune_0_3_1', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},
rune_0_3_2: { id: 'rune_0_3_2', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},
rune_0_3_3: { id: 'rune_0_3_3', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},
rune_0_3_4: { id: 'rune_0_3_4', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},
rune_0_3_5: { id: 'rune_0_3_5', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},
rune_0_3_6: { id: 'rune_0_3_6', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},
rune_0_3_7: { id: 'rune_0_3_7', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},
rune_0_3_8: { id: 'rune_0_3_8', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},
rune_0_3_9: { id: 'rune_0_3_9', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},
rune_0_3_10: { id: 'rune_0_3_10', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:4 },
			modify: { opts: [ { crushpower:1 }, { earthmagicpower:1 }, { antijumpaway:5 }, { crushdefence:5 }, { earthmagicdefence:5 } ]  }
			},


rune_1_0_1: { id: 'rune_1_0_1', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},
rune_1_0_2: { id: 'rune_1_0_2', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},
rune_1_0_3: { id: 'rune_1_0_3', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},
rune_1_0_4: { id: 'rune_1_0_4', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},
rune_1_0_5: { id: 'rune_1_0_5', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},
rune_1_0_6: { id: 'rune_1_0_6', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},
rune_1_0_7: { id: 'rune_1_0_7', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},
rune_1_0_8: { id: 'rune_1_0_8', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},
rune_1_0_9: { id: 'rune_1_0_9', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},
rune_1_0_10: { id: 'rune_1_0_10', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:1 }, { sabrepower:3 }, { firemagicpower:3 }, { criticalhit:10 }, { sabredefence:10 }, { firemagicdefence:10 } ]  }
			},

rune_1_1_1: { id: 'rune_1_1_1', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},
rune_1_1_2: { id: 'rune_1_1_2', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},
rune_1_1_3: { id: 'rune_1_1_3', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},
rune_1_1_4: { id: 'rune_1_1_4', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},
rune_1_1_5: { id: 'rune_1_1_5', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},
rune_1_1_6: { id: 'rune_1_1_6', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},
rune_1_1_7: { id: 'rune_1_1_7', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},
rune_1_1_8: { id: 'rune_1_1_8', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},
rune_1_1_9: { id: 'rune_1_1_9', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},
rune_1_1_10: { id: 'rune_1_1_10', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:1 }, { cutpower:3 }, { watermagicpower:3 }, { anticriticalhit:10 }, { cutdefence:10 }, { watermagicdefence:10 } ]  }
			},

rune_1_2_1: { id: 'rune_1_2_1', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},
rune_1_2_2: { id: 'rune_1_2_2', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},
rune_1_2_3: { id: 'rune_1_2_3', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},
rune_1_2_4: { id: 'rune_1_2_4', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},
rune_1_2_5: { id: 'rune_1_2_5', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},
rune_1_2_6: { id: 'rune_1_2_6', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},
rune_1_2_7: { id: 'rune_1_2_7', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},
rune_1_2_8: { id: 'rune_1_2_8', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},
rune_1_2_9: { id: 'rune_1_2_9', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},
rune_1_2_10: { id: 'rune_1_2_10', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana: 10 }, { intellect:1 }, { thrustpower:3 }, { airmagicpower:3 }, { jumpaway:10 }, { thrustdefence:10 }, { airmagicdefence:10 } ]  }
			},

rune_1_3_1: { id: 'rune_1_3_1', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},
rune_1_3_2: { id: 'rune_1_3_2', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},
rune_1_3_3: { id: 'rune_1_3_3', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},
rune_1_3_4: { id: 'rune_1_3_4', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},
rune_1_3_5: { id: 'rune_1_3_5', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},
rune_1_3_6: { id: 'rune_1_3_6', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},
rune_1_3_7: { id: 'rune_1_3_7', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},
rune_1_3_8: { id: 'rune_1_3_8', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},
rune_1_3_9: { id: 'rune_1_3_9', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},
rune_1_3_10: { id: 'rune_1_3_10', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints: 10 }, { strength:1 }, { crushpower:3 }, { earthmagicpower:3 }, { antijumpaway:10 }, { crushdefence:10 }, { earthmagicdefence:10 } ]  }
			},

rune_2_0_1: { id: 'rune_2_0_1', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},
rune_2_0_2: { id: 'rune_2_0_2', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},
rune_2_0_3: { id: 'rune_2_0_3', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},
rune_2_0_4: { id: 'rune_2_0_4', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},
rune_2_0_5: { id: 'rune_2_0_5', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},
rune_2_0_6: { id: 'rune_2_0_6', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},
rune_2_0_7: { id: 'rune_2_0_7', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},
rune_2_0_8: { id: 'rune_2_0_8', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},
rune_2_0_9: { id: 'rune_2_0_9', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},
rune_2_0_10: { id: 'rune_2_0_10', category:'runes', width:60, height:60, caption:'����� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { intuition:2 }, { magicpower:3 }, { sabrepower:5 }, { firemagicpower:5 }, { criticalpower:5 }, { criticalhit:20 }, { sabredefence:20 }, { firemagicdefence:20 } ]  }
			},

rune_2_1_10: { id: 'rune_2_1_10', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},
rune_2_1_1: { id: 'rune_2_1_1', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},
rune_2_1_2: { id: 'rune_2_1_2', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},
rune_2_1_3: { id: 'rune_2_1_3', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},
rune_2_1_4: { id: 'rune_2_1_4', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},
rune_2_1_5: { id: 'rune_2_1_5', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},
rune_2_1_6: { id: 'rune_2_1_6', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},
rune_2_1_7: { id: 'rune_2_1_7', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},
rune_2_1_8: { id: 'rune_2_1_8', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},
rune_2_1_9: { id: 'rune_2_1_9', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { dexterity:2 }, { counterstroke:5 },{ magicdefence:10 }, { cutpower:5 }, { watermagicpower:5 }, { anticriticalhit:20 }, { cutdefence:20 }, { watermagicdefence:20 } ]  }
			},

rune_2_2_1: { id: 'rune_2_2_1', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},
rune_2_2_2: { id: 'rune_2_2_2', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},
rune_2_2_3: { id: 'rune_2_2_3', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},
rune_2_2_4: { id: 'rune_2_2_4', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},
rune_2_2_5: { id: 'rune_2_2_5', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},
rune_2_2_6: { id: 'rune_2_2_6', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},
rune_2_2_7: { id: 'rune_2_2_7', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},
rune_2_2_8: { id: 'rune_2_2_8', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},
rune_2_2_9: { id: 'rune_2_2_9', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},
rune_2_2_10: { id: 'rune_2_2_10', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { mana: 20 }, { intellect:2 }, { parry:3 }, { thrustpower:5 }, { airmagicpower:5 }, { jumpaway:20 }, { thrustdefence:20 }, { airmagicdefence:20 } ]  }
			},

rune_2_3_1: { id: 'rune_2_3_1', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'earrings',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			},
rune_2_3_2: { id: 'rune_2_3_2', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'necklaces',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			},
rune_2_3_3: { id: 'rune_2_3_3', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'rings',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			},
rune_2_3_4: { id: 'rune_2_3_4', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'gauntlets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			},
rune_2_3_5: { id: 'rune_2_3_5', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'pants',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			},
rune_2_3_6: { id: 'rune_2_3_6', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'boots',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			},
rune_2_3_7: { id: 'rune_2_3_7', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'helmets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			},
rune_2_3_8: { id: 'rune_2_3_8', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'bracelets',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			},
rune_2_3_9: { id: 'rune_2_3_9', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'heavyarmors',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			},
rune_2_3_10: { id: 'rune_2_3_10', category:'runes', width:60, height:60, caption:'���� ������',objcategory:'belts',
			common: { weight:1, durability:1 },
			required: { level:9 },
			modify: { opts: [ { power:3 }, { defence:10 }, { hitpoints: 20 }, { strength:2 }, { crushpower:5 }, { earthmagicpower:5 }, { antijumpaway:20 }, { crushdefence:20 }, { earthmagicdefence:20 } ]  }
			}	,

rune_super_1: { id: 'rune_super_1', category:'runes', width:60, height:60, caption:'������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [{ defence:25 }]  }
			},
rune_super_2: { id: 'rune_super_2', category:'runes', width:60, height:60, caption:'������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { magicdefence:25 } ]  }
			},
rune_super_3: { id: 'rune_super_3', category:'runes', width:60, height:60, caption:'��������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { hitpoints:100 } ]  }
			},
rune_super_4: { id: 'rune_super_4', category:'runes', width:60, height:60, caption:'�������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { mana:100 } ]  }
			},
rune_super_5: { id: 'rune_super_5', category:'runes', width:60, height:60, caption:'��������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [{ power:5 }]  }
			},
rune_super_6: { id: 'rune_super_6', category:'runes', width:60, height:60, caption:'��������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { magicpower:5 } ]  }
			},
rune_super_7: { id: 'rune_super_7', category:'runes', width:60, height:60, caption:'�������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { dexterity:4 } ]  }
			},
rune_super_8: { id: 'rune_super_8', category:'runes', width:60, height:60, caption:'��������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { strength:4 } ]  }
			},
rune_super_9: { id: 'rune_super_9', category:'runes', width:60, height:60, caption:'���������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intuition:4 } ]  }
			},
rune_super_10: { id: 'rune_super_10', category:'runes', width:60, height:60, caption:'�������',objcategory:'all',
			common: { weight:1, durability:1 },
			required: { level:7 },
			modify: { opts: [ { intellect:4 } ]  }
			},

	w1: {id:'w1',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w2: {id:'w2',caption:'������ ���� ��������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w3: {id:'w3',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w3_u: {id:'w3_u',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w4: {id:'w4',caption:'������ ���� �����',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w5: {id:'w5',caption:'������ ���� ����',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w6: {id:'w6',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w7: {id:'w7',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w8: {id:'w8',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w9: {id:'w9',caption:'������ ���� ����',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	wwreath: {id:'wwreath',caption:'������ ���� �����',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w11: {id:'w11',caption:'������ ���� ��������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w10: {id:'w10',caption:'������ ���� ���',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w10_u: {id:'w10_u',caption:'������ ���� ���',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w12: {id:'w12',caption:'������ ���� �����',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w13: {id:'w13',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w14: {id:'w14',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w15: {id:'w15',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w19: {id:'w19',caption:'������ ���� �����',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	wb: {id:'wb',caption:'������ ���� ���������� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	wshirt: {id:'wshirt',caption:'������ ���� ������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	wcape: {id:'wcape',caption:'������ ���� ����',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w100: {id:'w100',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w101: {id:'w101',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w102: {id:'w102',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w103: {id:'w103',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w104: {id:'w104',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w105: {id:'w105',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w106: {id:'w106',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w107: {id:'w107',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w108: {id:'w108',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w109: {id:'w109',caption:'������ ���� ����������',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	wbook: {id:'wbook',caption:'������ ���� �����',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	w20_1: {id:'w20_1',caption:'������ ����',description:'������ ����. ������� �����, ����� ����� �������.',emptyitem:true
	},
	kastet2: {id:'kastet2',category:'knives',slot:'w3',width:60,height:60,caption:'������ -����� �������-',old:true,
		common: {price:3,weight:2,durability:20},
		required: {strength:4,dexterity:4},
		properties: {mindamage:2,maxdamage:4},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife2: {id:'knife2',category:'knives',slot:'w3',width:60,height:60,caption:'��� -������-',old:true,
		common: {price:3,weight:2,durability:20},
		required: {strength:4,dexterity:5},
		properties: {mindamage:1,maxdamage:5},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	kastet1: {id:'kastet1',category:'knives',slot:'w3',width:60,height:60,caption:'������ -���� ����-',old:true,
		common: {price:5,weight:2,durability:20},
		required: {strength:5},
		properties: {mindamage:3,maxdamage:4},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife1: {id:'knife1',category:'knives',slot:'w3',width:60,height:60,caption:'������ -Jackal-',old:true,
		common: {price:5,weight:2,durability:20},
		required: {strength:5,endurance:4},
		properties: {mindamage:1,maxdamage:6},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife63: {id:'knife63',category:'knives',slot:'w3',width:60,height:60,caption:'��� ���������',
		common: {weight:1,price:5,durability:20},
		required: {intuition:2,level:1,knifeskill:1,endurance:4,strength:4},
		properties: {mindamage:1,maxdamage:5,criticalhit:3,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'rare',crush:'insignificant',cut:'sometimes'}
	},
	knife59: {id:'knife59',category:'knives',slot:'w3',width:60,height:60,caption:'��������� ���',
		common: {weight:3,price:6,durability:30},
		required: {dexterity:2,level:1,knifeskill:1,endurance:4,strength:4},
		modify: {hitpoints:3},
		properties: {mindamage:1,maxdamage:5,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'sometimes'}
	},
	knife61: {id:'knife61',category:'knives',slot:'w3',width:60,height:60,caption:'������ ������',
		common: {weight:4,price:9,durability:30},
		required: {dexterity:8,intuition:8,level:2,knifeskill:2,endurance:4},
		modify: {anticriticalhit:5,jumpaway:5},
		properties: {mindamage:3,maxdamage:5,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife4: {id:'knife4',category:'knives',slot:'w3',width:60,height:60,caption:'������ -��� �������-',old:true,
		common: {price:10,weight:2,durability:50},
		required: {strength:6,dexterity:6,level:1},
		modify: {hitpoints:3},
		properties: {mindamage:1,maxdamage:6},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife52: {id:'knife52',category:'knives',slot:'w3',width:60,height:60,caption:'��������� ���',
		common: {weight:2,price:10,durability:20},
		required: {dexterity:8,level:2,knifeskill:2,endurance:4,strength:8},
		modify: {anticriticalhit:5,piercearmor:5},
		properties: {mindamage:2,maxdamage:6,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'sometimes'}
	},
	knife3: {id:'knife3',category:'knives',slot:'w3',width:60,height:60,caption:'������ -���� �����-',old:true,
		common: {price:14,weight:2,durability:50},
		required: {strength:7,dexterity:6,endurance:6,level:1},
		properties: {mindamage:3,maxdamage:6,criticalhit:2},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife5: {id:'knife5',category:'knives',slot:'w3',width:60,height:60,caption:'������ -�������������-',old:true,
		common: {price:14,weight:2,durability:50},
		required: {strength:7,intuition:7,level:1},
		modify: {jumpaway:5},
		properties: {mindamage:2,maxdamage:7,antijumpaway:5},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife69: {id:'knife69',category:'knives',slot:'w3',width:60,height:60,caption:'��������� ������',
		common: {weight:3,price:17,durability:30},
		required: {dexterity:12,intuition:12,level:3,knifeskill:2,endurance:6},
		properties: {mindamage:3,maxdamage:7,antijumpaway:5,criticalhit:5,piercearmor:15,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	kastet3: {id:'kastet3',category:'knives',slot:'w3',width:60,height:60,caption:'������ ������',old:true,
		common: {price:17,weight:2,durability:30},
		required: {strength:6,endurance:7,level:1},
		modify: {dexterity:1},
		properties: {mindamage:4,maxdamage:6},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife67: {id:'knife67',category:'knives',slot:'w3',width:60,height:60,caption:'��� ���������� ����',
		common: {weight:3,price:19,durability:40},
		required: {dexterity:12,intuition:12,level:3,knifeskill:2,endurance:6},
		properties: {mindamage:3,maxdamage:7,criticalhit:20,piercearmor:10,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'small',crush:'rare',cut:'small'}
	},
	kastet4: {id:'kastet4',category:'knives',slot:'w3',width:60,height:60,caption:'������ -������ ������-',old:true,
		common: {price:19,weight:3,durability:30},
		required: {strength:7,endurance:7,level:1},
		modify: {dexterity:1},
		properties: {mindamage:5,maxdamage:6},
		attacks: {thrust:'small',sabre:'none',crush:'sometimes',cut:'rare'}
	},
	knife64: {id:'knife64',category:'knives',slot:'w3',width:60,height:60,caption:'�������� ������',
		common: {weight:5,price:22,durability:30},
		required: {dexterity:12,intuition:12,level:3,knifeskill:2,endurance:6},
		properties: {mindamage:3,maxdamage:7,piercearmor:30,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife7: {id:'knife7',category:'knives',slot:'w3',width:60,height:60,caption:'���������� ��� ����������������',old:true,alignment:'dark',
		common: {price:25,weight:2,durability:100},
		required: {intuition:12,level:2},
		modify: {anticriticalhit:1,jumpaway:10},
		properties: {mindamage:5,maxdamage:7,criticalhit:1,antijumpaway:10},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife2t: {id:'knife2t',category:'knives',slot:'w3',width:60,height:60,caption:'��������� ������',
		common: {weight:9,price:25,durability:50},
		required: {level:8,knifeskill:5},
		modify: {intuition:1},
		properties: {mindamage:6,maxdamage:8,blockzones:'+'},
		attacks: {thrust:'routinely',cut:'small'}
	},
	knife6: {id:'knife6',category:'knives',slot:'w3',width:60,height:60,caption:'������ -�������-',old:true,
		common: {price:26,weight:2,durability:50},
		required: {strength:9,endurance:8,level:2},
		modify: {hitpoints:3},
		properties: {mindamage:5,maxdamage:10},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife10: {id:'knife10',category:'knives',slot:'w3',width:60,height:60,caption:'Merlin Dagger',old:true,
		common: {price:31,weight:2,durability:40},
		modify: {hitpoints:5},
		properties: {mindamage:4,maxdamage:10,criticalhit:10,antijumpaway:3},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife54: {id:'knife54',category:'knives',slot:'w3',width:60,height:60,caption:'��� ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:8}}}},
		common: {weight:5,price:40,durability:40},
		required: {dexterity:17,intuition:17,level:4,knifeskill:3,endurance:9},
		properties: {mindamage:3,maxdamage:9,antijumpaway:20,criticalhit:30,piercearmor:20,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'rare',crush:'insignificant',cut:'sometimes'}
	},
	knife56: {id:'knife56',category:'knives',slot:'w3',width:60,height:60,caption:'������ ����� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:6,price:43,durability:30},
		required: {dexterity:17,intuition:17,level:4,knifeskill:3,endurance:9},
		properties: {mindamage:3,maxdamage:9,criticalhit:10,piercearmor:50,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife58: {id:'knife58',category:'knives',slot:'w3',width:60,height:60,caption:'�������� ����������� ���',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:14}}}},
		common: {weight:4,price:68,durability:40},
		required: {dexterity:21,intuition:21,level:4,knifeskill:3,strength:11},
		modify: {jumpaway:60},
		properties: {mindamage:4,maxdamage:11,antijumpaway:40,criticalhit:20,piercearmor:5,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'small',crush:'insignificant',cut:'small'}
	},
	knife66: {id:'knife66',category:'knives',slot:'w3',width:60,height:60,caption:'������� ��� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:14}}}},
		common: {weight:5,price:70,durability:50},
		required: {dexterity:21,intuition:21,level:5,knifeskill:3,endurance:11},
		modify: {jumpaway:20,dexterity:1,intuition:1},
		properties: {mindamage:4,maxdamage:11,antijumpaway:20,criticalhit:20,piercearmor:20,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',cut:'sometimes'}
	},
	knife62: {id:'knife62',category:'knives',slot:'w3',width:60,height:60,caption:'����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:14}}}},
		common: {weight:6,price:71,durability:40},
		required: {dexterity:18,intuition:18,level:5,knifeskill:3},
		modify: {parry:5},
		properties: {mindamage:4,maxdamage:11,piercearmor:35,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	dagger70: {id:'dagger70',category:'knives',slot:'w3',width:60,height:60,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:19}}}},
		common: {weight:7,price:99,durability:50},
		required: {dexterity:34,intuition:25,level:6,knifeskill:4,endurance:13},
		properties: {mindamage:4,maxdamage:12,antijumpaway:45,cutpower:15,piercearmor:50,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'often',cut:'rare'}
	, upgrade: {
	dagger70_olditem: {id:'dagger70_olditem',old:true,
		common: {price:105,weight:7,durability:50},
		required: {dexterity:34,intuition:25,level:6,knifeskill:4,endurance:13},
		properties: {antijumpaway:40,cutpower:10,piercearmor:45,mindamage:4,maxdamage:12,secondweapon:'yes'}
	}}

	},
	knife57: {id:'knife57',category:'knives',slot:'w3',width:60,height:60,caption:'������ ������',magic1:'�����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:20}}}},
		common: {weight:6,price:100,durability:40},
		required: {dexterity:25,intuition:25,intellect:5,level:6,knifeskill:4,endurance:13},
		properties: {mindamage:4,maxdamage:13,antijumpaway:20,piercearmor:30,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife68: {id:'knife68',category:'knives',slot:'w3',width:60,height:60,caption:'������ ������',magic1:'����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:20}}}},
		common: {weight:7,price:100,durability:40},
		required: {dexterity:25,intuition:25,intellect:5,level:6,knifeskill:4,endurance:13},
		modify: {jumpaway:20},
		properties: {mindamage:4,maxdamage:12,criticalhit:20,secondweapon:'yes',blockzones:'+'},
		attacks: {fire:'small',thrust:'sometimes',sabre:'rare',crush:'insignificant'}
	},
	dagger71: {id:'dagger71',category:'knives',slot:'w3',width:60,height:60,caption:'������� ������',
		common: {weight:7,price:138,durability:60},
		required: {dexterity:39,intuition:39,level:7,knifeskill:4,endurance:16},
		modify: {jumpaway:55,intuition:2},
		properties: {mindamage:4,maxdamage:14,antijumpaway:45,criticalhit:90,piercearmor:30,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'routinely',cut:'small'}
	},
	knife60: {id:'knife60',category:'knives',slot:'w3',width:60,height:60,caption:'���������� ������',
		common: {weight:8,price:144,durability:50},
		required: {dexterity:30,intuition:30,level:7,knifeskill:4,endurance:16},
		modify: {anticriticalhit:25,parry:15},
		properties: {mindamage:4,maxdamage:12,piercearmor:25,secondweapon:'yes',blockzones:'++'},
		attacks: {thrust:'routinely',sabre:'rare',crush:'insignificant',cut:'rare'}
	},
	knife55: {id:'knife55',category:'knives',slot:'w3',width:60,height:60,caption:'������ ������',
		common: {weight:10,price:180,durability:50},
		required: {intuition:45,level:8,knifeskill:5,endurance:30,strength:30},
		modify: {criticalpower:10,intuition:1,knifeskill:1,strength:1},
		properties: {mindamage:5,maxdamage:15,antijumpaway:70,criticalhit:70,piercearmor:70,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'sunset'},
		attacks: {thrust:'routinely',sabre:'insignificant',crush:'insignificant',water:'rare'}
	, upgrade: {
	knife55_olditem: {id:'knife55_olditem',caption:'������ ��������� ������',old:true,
		common: {weight:7,price:76,durability:50},
		required: {intuition:21,level:5,knifeskill:3,endurance:11,strength:0,dexterity:21},
		modify: {criticalpower:0,intuition:0,knifeskill:0,strength:0,counterstroke:15},
		properties: {mindamage:4,maxdamage:11,antijumpaway:0,criticalhit:25,piercearmor:0,secondweapon:'yes'}
	}}

	},
	knife51: {id:'knife51',category:'knives',slot:'w3',width:60,height:60,caption:'�������� ���',
		common: {weight:7,price:180,durability:50},
		required: {dexterity:35,intuition:45,level:8,knifeskill:5,endurance:10,strength:10},
		modify: {criticalpower:10,antijumpaway:45,strength:2},
		properties: {mindamage:5,maxdamage:15,criticalhit:95,piercearmor:50,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'routinely',cut:'rare',air:'insignificant'}
	, upgrade: {
	knife51_olditem: {id:'knife51_olditem',old:true,
		common: {price:140,weight:7,durability:50},
		required: {dexterity:39,intuition:39,level:7,knifeskill:4,endurance:0,strength:21},
		modify: {criticalpower:0,antijumpaway:0,strength:0,parry:15,jumpaway:45},
		properties: {mindamage:4,maxdamage:14,criticalhit:0,piercearmor:0,secondweapon:'yes'}
	}}

	},
	knife70: {id:'knife70',category:'knives',slot:'w3',width:60,height:60,caption:'������ ���������� ����',
		common: {weight:12,price:181,durability:50},
		required: {dexterity:45,intuition:30,level:8,airmagicskill:2,knifeskill:5,endurance:15,strength:15},
		modify: {parry:5,jumpaway:50,counterstroke:10},
		properties: {mindamage:3,maxdamage:17,antijumpaway:90,piercearmor:60,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',air:'sometimes'}
	, upgrade: {
	knife70_olditem: {id:'knife70_olditem',old:true,
		required: {intuition:45}
	}}

	},
	knife11: {id:'knife11',category:'knives',slot:'w3',width:60,height:60,caption:'�������� ������ �������� ����',
		common: {weight:8,price:180,durability:50},
		required: {dexterity:40,intuition:40,level:8,knifeskill:5,endurance:8,strength:8},
		modify: {criticalpower:-5,antijumpaway:15,parry:10,jumpaway:25,thrustpower:5,intuition:2,knifeskill:1},
		properties: {mindamage:5,maxdamage:15,piercearmor:65,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'firedown'},
		attacks: {fire:'rare',thrust:'routinely',cut:'rare'}
	},
	knife53: {id:'knife53',category:'knives',slot:'w3',width:60,height:60,caption:'��� ��������',alignment:'light',
		common: {weight:10,price:200,durability:50},
		required: {dexterity:35,intuition:35,level:8,knifeskill:5,endurance:15,strength:15},
		modify: {parry:5,dexterity:1,intuition:1},
		properties: {mindamage:5,maxdamage:15,antijumpaway:40,thrustpower:15,knifeskill:3,piercearmor:65,secondweapon:'yes'},
		attacks: {thrust:'routinely',sabre:'insignificant',cut:'insignificant',light:'insignificant'}
	},
	knife71: {id:'knife71',category:'knives',slot:'w3',width:60,height:60,caption:'������ �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater12:{id:'mater12',caption:'�����',count:12}}}},
		common: {weight:10,price:220,durability:50},
		required: {dexterity:50,intuition:25,level:9,knifeskill:5,endurance:30,strength:30},
		modify: {jumpaway:50,thrustpower:20},
		properties: {mindamage:5,maxdamage:17,antijumpaway:70,knifeskill:3,piercearmor:65,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'spider'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife72: {id:'knife72',category:'knives',slot:'w3',width:60,height:60,caption:'������ �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater5:{id:'mater5',caption:'������',count:12}}}},
		common: {weight:10,price:220,durability:50},
		required: {dexterity:20,intuition:55,level:9,knifeskill:5,endurance:30,strength:30},
		modify: {criticalpower:10,intuition:2,parry:3},
		properties: {knifeskill:3,mindamage:6,maxdamage:17,antijumpaway:80,criticalhit:80,piercearmor:25,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'bloodmoon'},
		attacks: {thrust:'routinely',sabre:'rare',cut:'rare',water:'rare'}
	, upgrade: {
	knife72_olditem: {id:'knife72_olditem',old:true,requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater5:{id:'mater5',caption:'������',count:12}}}},
		common: {weight:10,price:220,durability:50},
		required: {dexterity:20,intuition:55,level:9,knifeskill:5,endurance:30,strength:30},
		modify: {criticalpower:15,intuition:2,knifeskill:2,parry:0},
		properties: {knifeskill:0,mindamage:6,maxdamage:17,antijumpaway:70,criticalhit:70,piercearmor:70,secondweapon:'yes',blockzones:'+'}
	}}

	},
	knife73: {id:'knife73',category:'knives',slot:'w3',width:60,height:60,caption:'������ ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater6:{id:'mater6',caption:'�������� ������',count:12}}}},
		common: {weight:10,price:220,durability:50},
		required: {dexterity:20,intuition:20,level:9,knifeskill:5,endurance:50,strength:45},
		modify: {anticriticalhit:35,thrustpower:25},
		properties: {mindamage:5,maxdamage:17,antijumpaway:80,knifeskill:3,piercearmor:30,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'losttime'},
		attacks: {thrust:'sometimes',sabre:'rare',crush:'insignificant',cut:'small'}
	},
	knife74_du2: {id:'knife74_du2',category:'knives',slot:'w3',width:60,height:60,caption:'������ ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:1},mater2:{id:'mater2',caption:'������',count:11},mater16:{id:'mater16',caption:'��������� ������',count:1}}}},
		common: {weight:8,price:220,durability:50},
		required: {dexterity:35,intuition:35,level:9,knifeskill:5,endurance:35,strength:35},
		modify: {anticriticalhit:15,antijumpaway:15,parry:10,thrustpower:10,knifeskill:1,strength:2},
		properties: {mindamage:6,maxdamage:17,piercearmor:65,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'morningsun'},
		attacks: {fire:'small',thrust:'routinely'}
	},
	knife76: {id:'knife76',category:'knives',slot:'w3',width:60,height:60,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:1},mater10:{id:'mater10',caption:'���� �������� ������',count:12}}}},
		common: {weight:10,price:220,durability:50},
		required: {dexterity:50,intuition:40,level:9,knifeskill:5,endurance:30,strength:25},
		modify: {jumpaway:80,dexterity:4,intuition:1,antijumpaway:50,criticalhit:70,knifeskill:2},
		properties: {mindamage:5,maxdamage:17,piercearmor:70,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'misdeed'},
		attacks: {thrust:'often',air:'rare'}
	},
	
	
	
	
	
	
	knife205: {id:'knife205',category:'knives',slot:'w3',width:60,height:60,caption:'Smashing Knife',imp1:true,binding:'boe',
		common: {weight:5,durability:20,eprice:3.49},
		required: {level:8},
		modify: {criticalpower:5,anticriticalhit:40,antijumpaway:40,antijumpaway:40,criticalhit:60,thrustpower:20,knifeskill:2},
		properties: {mindamage:5,maxdamage:15,piercearmor:40,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'smash'},
		attacks: {thrust:'routinely',sabre:'rare',cut:'rare'}
	},

	knife206: {id:'knife206',category:'knives',slot:'w3',width:60,height:60,caption:'Desert Dagger',imp1:true,binding:'boe',
		common: {weight:5,durability:50,eprice:3.49},
		required: {level:8},
		modify: {jumpaway:75,counterstroke:5,dexterity:4,knifeskill:2,thrustpower:20},
		properties: {mindamage:5,maxdamage:16,piercearmor:70,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'wanderer'},
		attacks: {thrust:'routinely',cut:'small'},
upgrade: {
	knife206_old: {id:'knife206_old',caption:'Desert Dagger-old' ,
		modify: {jumpaway:70,counterstroke:5,thrustpower:15,dexterity:4},
		properties: {mindamage:5,maxdamage:16,knifeskill:2,piercearmor:70,thrustpower:0,secondweapon:'yes',blockzones:'+'}
	}}

	},
 
	
	
	

	
	axe19: {id:'axe19',category:'axes',slot:'w3',width:60,height:60,caption:'��������',
		common: {weight:8,price:4,durability:20},
		required: {dexterity:8,level:2,axeskill:2,endurance:8},
		properties: {mindamage:4,maxdamage:7,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe50: {id:'axe50',category:'axes',slot:'w3',width:60,height:60,caption:'��������� �����',
		common: {weight:5,price:5,durability:50},
		required: {dexterity:4,level:1,axeskill:1,endurance:4,strength:4},
		properties: {mindamage:3,maxdamage:5,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe61: {id:'axe61',category:'axes',slot:'w3',width:60,height:60,caption:'�������������� �����',
		common: {weight:6,price:8,durability:50},
		required: {dexterity:4,level:1,axeskill:1,endurance:4,strength:4},
		modify: {jumpaway:5},
		properties: {mindamage:3,maxdamage:5,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe1: {id:'axe1',category:'axes',slot:'w3',width:60,height:60,caption:'�����',
		common: {weight:8,price:13,durability:30},
		required: {dexterity:9,level:2,axeskill:2,endurance:9},
		modify: {jumpaway:10},
		properties: {mindamage:4,maxdamage:8,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe20: {id:'axe20',category:'axes',slot:'w3',width:60,height:60,caption:'������ �����',
		common: {weight:10,price:8,durability:20},
		required: {dexterity:7,level:2,axeskill:2,endurance:9},
		properties: {mindamage:5,maxdamage:7,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe2: {id:'axe2',category:'axes',slot:'w3',width:60,height:60,caption:'�������������� �����',old:true,
		common: {price:10,weight:3,durability:30},
		required: {strength:5,dexterity:6,endurance:6,level:1},
		modify: {dexterity:1},
		properties: {mindamage:1,maxdamage:6},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe5: {id:'axe5',category:'axes',slot:'w3',width:60,height:60,caption:'��������� �����',old:true,
		common: {price:13,weight:3,durability:30},
		required: {dexterity:6,endurance:6,level:1,axeskill:1},
		properties: {mindamage:4,maxdamage:6},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe11: {id:'axe11',category:'axes',slot:'w3',width:60,height:60,caption:'�������� �����',
		common: {weight:6,price:19,durability:30},
		required: {dexterity:9,level:2,axeskill:2,endurance:9},
		properties: {mindamage:6,maxdamage:9,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe53: {id:'axe53',category:'axes',slot:'w3',width:60,height:60,caption:'������� �����',
		common: {weight:9,price:23,durability:50},
		required: {dexterity:7,level:2,axeskill:2,endurance:7,strength:7},
		modify: {jumpaway:10,hitpoints:5},
		properties: {mindamage:5,maxdamage:8,antijumpaway:10,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe2t: {id:'axe2t',category:'axes',slot:'w3',width:60,height:60,caption:'��������� �����',
		common: {weight:9,price:25,durability:50},
		required: {level:8,axeskill:5},
		modify: {dexterity:1},
		properties: {mindamage:6,maxdamage:8,blockzones:'+'},
		attacks: {sabre:'routinely',cut:'small'}
	},
	axe3: {id:'axe3',category:'axes',slot:'w3',width:60,height:60,caption:'������ ��������� �����',old:true,
		common: {price:28,weight:4,durability:60},
		required: {strength:9,dexterity:8,endurance:8,level:2},
		properties: {mindamage:6,maxdamage:8,criticalhit:5},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe7: {id:'axe7',category:'axes',slot:'w3',width:60,height:60,caption:'����������� �������� �����',old:true,
		common: {price:32,weight:4,durability:40},
		required: {strength:10,dexterity:10,endurance:10,level:2},
		properties: {mindamage:8,maxdamage:10,antijumpaway:10},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe77: {id:'axe77',category:'axes',slot:'w3',width:60,height:60,caption:'����� ���������',
		common: {weight:10,price:30,durability:50},
		required: {dexterity:10,level:3,axeskill:2,endurance:10,strength:10},
		modify: {strength:-1},
		properties: {mindamage:7,maxdamage:11,antijumpaway:20,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe78: {id:'axe78',category:'axes',slot:'w3',width:60,height:60,caption:'�������� �����',
		common: {weight:9,price:37,durability:50},
		required: {dexterity:10,level:3,axeskill:2,endurance:10,strength:10},
		properties: {mindamage:7,maxdamage:11,antijumpaway:20,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe56: {id:'axe56',category:'axes',slot:'w3',width:60,height:60,caption:'����� �����',
		common: {weight:14,price:38,durability:50},
		required: {dexterity:10,level:3,axeskill:2,endurance:10,strength:10},
		properties: {mindamage:7,maxdamage:11,antijumpaway:10,criticalhit:10,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe80: {id:'axe80',category:'axes',slot:'w3',width:60,height:60,caption:'��������� ����������� �����',
		common: {weight:10,price:40,durability:50},
		required: {dexterity:10,level:3,axeskill:2,endurance:10,strength:10},
		modify: {jumpaway:4,strength:1},
		properties: {mindamage:7,maxdamage:11,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe6: {id:'axe6',category:'axes',slot:'w3',width:60,height:60,caption:'������� �����',old:true,
		common: {price:40,weight:6,durability:40},
		required: {strength:12,dexterity:12,endurance:12,level:3},
		properties: {mindamage:9,maxdamage:12,criticalhit:5},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe60: {id:'axe60',category:'axes',slot:'w3',width:60,height:60,caption:'����� �����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:10,price:60,durability:50},
		required: {dexterity:13,level:4,axeskill:3,endurance:13,strength:13},
		modify: {dexterity:2},
		properties: {mindamage:8,maxdamage:14,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe84: {id:'axe84',category:'axes',slot:'w3',width:60,height:60,caption:'������ ������ �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:13}}}},
		common: {weight:8,price:62,durability:30},
		required: {dexterity:15,level:4,axeskill:3,endurance:15,strength:15},
		modify: {dexterity:1},
		properties: {mindamage:7,maxdamage:13,antijumpaway:30,criticalhit:20,secondweapon:'yes',blockzones:'+'},
		attacks: {sabre:'always'}
	},
	axe8: {id:'axe8',category:'axes',slot:'w3',width:60,height:60,caption:'���������� ������',old:true,
		common: {price:65,weight:9,durability:60},
		required: {strength:16,dexterity:16,endurance:16,level:4},
		modify: {jumpaway:10},
		properties: {mindamage:13,maxdamage:16,criticalhit:10},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe63: {id:'axe63',category:'axes',slot:'w3',width:60,height:60,caption:'����� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:15}}}},
		common: {weight:10,price:72,durability:50},
		required: {dexterity:13,level:4,axeskill:3,endurance:13,strength:13},
		modify: {parry:5,dexterity:-1},
		properties: {mindamage:8,maxdamage:15,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe70: {id:'axe70',category:'axes',slot:'w3',width:60,height:60,caption:'������� �����',magic1:'�����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:16}}}},
		common: {weight:13,price:80,durability:50},
		required: {intuition:13,intellect:2,level:4,axeskill:3,endurance:13,strength:13},
		properties: {mindamage:8,maxdamage:15,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe79: {id:'axe79',category:'axes',slot:'w3',width:60,height:60,caption:'����� ���� � �����',magic1:'����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:16}}}},
		common: {weight:12,price:80,durability:50},
		required: {intuition:13,intellect:2,level:4,axeskill:3,endurance:13,strength:13},
		properties: {mindamage:8,maxdamage:15,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe12: {id:'axe12',category:'axes',slot:'w3',width:60,height:60,caption:'������ �����',old:true,
		common: {price:83,weight:5,durability:50},
		required: {strength:17,dexterity:17,endurance:17,level:4},
		properties: {mindamage:10,maxdamage:17,criticalhit:25,antijumpaway:50},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe4: {id:'axe4',category:'axes',slot:'w3',width:60,height:60,caption:'������ ������',old:true,
		common: {price:85,weight:10,durability:60},
		required: {strength:20,dexterity:15,endurance:20,level:5},
		properties: {mindamage:15,maxdamage:18,criticalhit:20,antijumpaway:20},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe52: {id:'axe52',category:'axes',slot:'w3',width:60,height:60,caption:'������ ��������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:17}}}},
		common: {weight:15,price:89,durability:50},
		required: {dexterity:16,level:5,axeskill:3,endurance:16,strength:16},
		modify: {dexterity:-1},
		properties: {mindamage:10,maxdamage:18,antijumpaway:40,sabrepower:8,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe67: {id:'axe67',category:'axes',slot:'w3',width:60,height:60,caption:'����� ���������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:13,price:90,durability:50},
		required: {dexterity:16,level:5,axeskill:3,endurance:16,strength:16},
		modify: {jumpaway:20},
		properties: {mindamage:10,maxdamage:18,antijumpaway:20,criticalhit:20,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe10: {id:'axe10',category:'axes',slot:'w3',width:60,height:60,caption:'�������� �����',old:true,alignment:'dark',
		common: {price:90,weight:5,durability:50},
		required: {strength:15,dexterity:15,endurance:15,level:3},
		modify: {dexterity:1,jumpaway:50},
		properties: {mindamage:9,maxdamage:16,antijumpaway:50,axeskill:2},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe9: {id:'axe9',category:'axes',slot:'w3',width:60,height:60,caption:'������������ �����',old:true,alignment:'dark',
		common: {price:90,weight:5,durability:50},
		required: {strength:15,dexterity:15,endurance:15,level:3},
		modify: {jumpaway:30,intuition:2},
		properties: {mindamage:10,maxdamage:15,criticalhit:10,antijumpaway:30,axeskill:2},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe71: {id:'axe71',category:'axes',slot:'w3',width:60,height:60,caption:'����� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:13,price:91,durability:50},
		required: {intuition:16,level:5,axeskill:3,endurance:16,strength:16},
		properties: {mindamage:10,maxdamage:18,antijumpaway:50,criticalhit:20,blockzones:'+'},
		attacks: {sabre:'routinely',water:'small'}
	},
	axe57: {id:'axe57',category:'axes',slot:'w3',width:60,height:60,caption:'��������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:15,price:92,durability:50},
		required: {intuition:16,level:5,axeskill:3,endurance:16,strength:16},
		modify: {strength:2},
		properties: {mindamage:10,maxdamage:18,criticalhit:25,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe13: {id:'axe13',category:'axes',slot:'w3',width:60,height:60,caption:'����� ����������',old:true,
		common: {price:100,weight:6,durability:50},
		required: {strength:20,dexterity:20,endurance:20,level:4},
		properties: {mindamage:10,maxdamage:18,criticalhit:50},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe15: {id:'axe15',category:'axes',slot:'w3',width:60,height:60,caption:'������� ����� �����',old:true,alignment:'light',
		common: {price:100,weight:6,durability:100},
		required: {strength:15,dexterity:15,endurance:15,level:3},
		modify: {hitpoints:21,jumpaway:30},
		properties: {mindamage:9,maxdamage:17,antijumpaway:30,axeskill:3},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe76: {id:'axe76',category:'axes',slot:'w3',width:60,height:60,caption:'����� ���������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:22}}}},
		common: {weight:17,price:111,durability:50},
		required: {dexterity:16,level:6,axeskill:4,endurance:16,strength:16},
		modify: {jumpaway:20,dexterity:2,strength:1},
		properties: {mindamage:11,maxdamage:19,criticalhit:15,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe58: {id:'axe58',category:'axes',slot:'w3',width:60,height:60,caption:'����������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:23}}}},
		common: {weight:19,price:115,durability:50},
		required: {dexterity:19,level:6,axeskill:4,endurance:19,strength:19},
		modify: {jumpaway:30,axeskill:1},
		properties: {mindamage:11,maxdamage:21,antijumpaway:40,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe59: {id:'axe59',category:'axes',slot:'w3',width:60,height:60,caption:'����� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:23}}}},
		common: {weight:16,price:119,durability:50},
		required: {dexterity:19,level:6,axeskill:4,endurance:19,strength:19},
		properties: {mindamage:12,maxdamage:21,criticalpower:10,criticalhit:30,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe68: {id:'axe68',category:'axes',slot:'w3',width:60,height:60,caption:'����� �����',
		common: {weight:17,price:139,durability:50},
		required: {dexterity:22,intuition:22,level:7,axeskill:4,endurance:22,strength:22},
		properties: {mindamage:13,maxdamage:25,criticalhit:60,sabrepower:5,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',cut:'rare'}
	},
	axe85: {id:'axe85',category:'axes',slot:'w3',width:60,height:60,caption:'������ ������',
		common: {weight:15,price:140,durability:50},
		required: {dexterity:22,level:7,axeskill:4,endurance:22,strength:22},
		modify: {anticriticalhit:25,axeskill:2},
		properties: {mindamage:12,maxdamage:25,antijumpaway:25,blockzones:'+'},
		setlink: {name:'forest'},
		attacks: {sabre:'routinely',cut:'small'}
	},
	axe72: {id:'axe72',category:'axes',slot:'w3',width:60,height:60,caption:'����� ��������',
		common: {weight:18,price:141,durability:50},
		required: {intuition:22,level:7,axeskill:4,endurance:22,strength:22},
		modify: {dexterity:2,intuition:2},
		properties: {mindamage:12,maxdamage:25,criticalhit:30,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe83: {id:'axe83',category:'axes',slot:'w3',width:60,height:60,caption:'���������� �����',
		common: {weight:17,price:141,durability:50},
		required: {dexterity:22,level:7,axeskill:4,endurance:22,strength:22},
		modify: {anticriticalhit:30,jumpaway:30,dexterity:1},
		properties: {mindamage:13,maxdamage:25,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe69: {id:'axe69',category:'axes',slot:'w3',width:60,height:60,caption:'����� �������� ������',
		common: {weight:17,price:163,durability:50},
		required: {dexterity:22,level:7,axeskill:4,endurance:22,strength:22},
		modify: {jumpaway:10,counterstroke:10,intuition:2,hitpoints:10},
		properties: {mindamage:13,maxdamage:24,antijumpaway:30,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},
	axe75: {id:'axe75',category:'axes',slot:'w3',width:60,height:60,caption:'����� �������� ����',
		common: {weight:15,price:200,durability:50},
		required: {dexterity:35,intuition:25,level:8,axeskill:5,endurance:25,strength:25},
		modify: {anticriticalhit:35,antijumpaway:35,axeskill:2,strength:1},
		properties: {mindamage:16,maxdamage:30,blockzones:'+'},
		setlink: {name:'firedown'},
		attacks: {fire:'sometimes',sabre:'sometimes'}
	},
	axe73: {id:'axe73',category:'axes',slot:'w3',width:60,height:60,caption:'����� ������',
		common: {weight:21,price:202,durability:50},
		required: {dexterity:30,intuition:28,level:8,axeskill:5,endurance:26,strength:26},
		modify: {dexterity:2,intuition:2},
		properties: {mindamage:15,maxdamage:28,antijumpaway:70,criticalhit:30,piercearmor:30,blockzones:'+'},
		setlink: {name:'sunset'},
		attacks: {thrust:'sometimes',sabre:'sometimes',cut:'insignificant'}
	},
	axe82: {id:'axe82',category:'axes',slot:'w3',width:60,height:60,caption:'������������� �����',
		common: {weight:23,price:224,durability:60},
		required: {dexterity:40,level:8,axeskill:5,endurance:25,strength:25},
		modify: {jumpaway:80,dexterity:2},
		properties: {mindamage:16,maxdamage:30,antijumpaway:65,axeskill:2,piercearmor:10,blockzones:'+'},
		attacks: {sabre:'routinely',crush:'rare',cut:'rare'}
	},
	
	axe87: {id:'axe87',category:'axes',slot:'w3',width:60,height:60,caption:'����� �����',requireditems:{shop:{exchanger:'shop', items: {mater18:{id:'mater18',caption:'������������ ������',count:9},mater12:{id:'mater12',caption:'�����',count:8}}}},
		common: {weight:10,price:260,durability:50},
		required: {dexterity:60,intuition:15,level:9,axeskill:5,endurance:30,strength:30},
		modify: {jumpaway:65,dexterity:3},
		properties: {mindamage:15,maxdamage:35,antijumpaway:70,sabrepower:10,axeskill:2,piercearmor:10,blockzones:'+'},
		setlink: {name:'spider'},
		attacks: {sabre:'often',crush:'rare'}
	},
	axe88: {id:'axe88',category:'axes',slot:'w3',width:60,height:60,caption:'����� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater15:{id:'mater15',caption:'������� �������',count:9},mater5:{id:'mater5',caption:'������',count:8}}}},
		common: {weight:20,price:260,durability:50},
		required: {dexterity:30,intuition:50,level:9,axeskill:5,endurance:30,strength:30},
		modify: {dexterity:5},
		properties: {mindamage:15,maxdamage:35,antijumpaway:60,criticalhit:50,sabrepower:10,axeskill:2,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'bloodmoon'},
		attacks: {sabre:'routinely',crush:'rare',water:'rare'}
	},
	axe89: {id:'axe89',category:'axes',slot:'w3',width:60,height:60,caption:'����� ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater19:{id:'mater19',caption:'�������� ������',count:9},mater6:{id:'mater6',caption:'�������� ������',count:8}}}},
		common: {weight:20,price:260,durability:60},
		required: {dexterity:15,intuition:15,level:9,axeskill:5,endurance:50,strength:45},
		modify: {dexterity:2,intellect:2},
		properties: {mindamage:15,maxdamage:35,antijumpaway:80,sabrepower:20,axeskill:2,blockzones:'+'},
		setlink: {name:'losttime'},
		attacks: {sabre:'often',crush:'rare'}
	},
	axe90_du2: {id:'axe90_du2',category:'axes',slot:'w3',width:60,height:60,caption:'����� ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater16:{id:'mater16',caption:'��������� ������',count:9},mater2:{id:'mater2',caption:'������',count:8}}}},
		common: {weight:15,price:260,durability:50},
		required: {dexterity:35,intuition:30,level:9,axeskill:5,endurance:35,strength:35},
		modify: {anticriticalhit:50,antijumpaway:55,strength:4},
		properties: {mindamage:16,maxdamage:35,axeskill:2,blockzones:'+'},
		setlink: {name:'morningsun'},
		attacks: {fire:'small',sabre:'routinely'}
	},
	axe90: {id:'axe90',category:'axes',slot:'w3',width:60,height:60,caption:'����� ���������',requireditems:{shop:{exchanger:'shop', items: {mater16:{id:'mater16',caption:'��������� ������',count:9},mater3:{id:'mater3',caption:'�������',count:8}}}},
		common: {weight:20,price:260,durability:50},
		required: {dexterity:15,intuition:45,level:9,axeskill:5,endurance:45,strength:35},
		modify: {intuition:2,strength:5},
		properties: {mindamage:15,maxdamage:35,antijumpaway:35,criticalhit:35,sabrepower:10,axeskill:2,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'scorpion'},
		attacks: {sabre:'routinely',crush:'rare',dark:'insignificant'}
	},
	 
	aaxe2: {id:'aaxe2',category:'axes',slot:'w3',width:60,height:60,owner:'!NeGaTiVe!',caption:'���������� �����',
		common: {weight:5,price:326,durability:5000},
		required: {strength:25,dexterity:20,endurance:25,level:5},
		modify: {strength:6,intuition:3},
		properties: {mindamage:15,maxdamage:18,axeskill:3,criticalhit:80,antijumpaway:80},
		attacks: {thrust:'rare',sabre:'routinely',crush:'rare',cut:'insignificant'}
	},

	
	
	


	
	
	
	
	
	
	
	
	
	
	
	axe210: {id:'axe210',category:'axes',slot:'w3',width:60,height:60,caption:'Smashing Axe',imp1:true,binding:'boe',
		common: {weight:10,durability:40,eprice:3.49},
		required: {dexterity:20,intuition:30,level:8,axeskill:5,endurance:30,strength:30},
		modify: {dexterity:4},
		properties: {mindamage:16,maxdamage:30,antijumpaway:60,criticalhit:60,sabrepower:10,axeskill:2,blockzones:'+'},
		setlink: {name:'smash'},
		attacks: {thrust:'insignificant',sabre:'routinely',crush:'rare',cut:'rare'}
	},
	

	dubina1: {id:'dubina1',category:'clubs',slot:'w3',width:60,height:60,caption:'������',
		common: {weight:12,price:7,durability:20},
		required: {dexterity:5,level:1,clubskill:1,endurance:5,strength:5},
		modify: {dexterity:-1},
		properties: {mindamage:2,maxdamage:9,blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	},
	dubina2: {id:'dubina2',category:'clubs',slot:'w3',width:60,height:60,caption:'���������� ������',
		common: {weight:12,price:11,durability:20},
		required: {dexterity:6,level:1,clubskill:1,endurance:6,strength:6},
		modify: {dexterity:-1},
		properties: {mindamage:1,maxdamage:12,blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	},
	dubina3: {id:'dubina3',category:'clubs',slot:'w3',width:60,height:60,caption:'������ ������ ������',
		common: {weight:13,price:20,durability:30},
		required: {dexterity:9,level:2,clubskill:2,endurance:9,strength:9},
		modify: {dexterity:-1},
		properties: {mindamage:1,maxdamage:15,criticalhit:10,blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	},
	dubina2t: {id:'dubina2t',category:'clubs',slot:'w3',width:60,height:60,caption:'��������� ������',
		common: {weight:9,price:25,durability:50},
		required: {level:8,clubskill:5},
		modify: {strength:1},
		properties: {mindamage:6,maxdamage:8,blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	mace58: {id:'mace58',category:'clubs',slot:'w3',width:60,height:60,caption:'�������� �������',
		common: {weight:13,price:29,durability:50},
		required: {level:2,clubskill:2,endurance:8,strength:10},
		modify: {strength:1},
		properties: {mindamage:5,maxdamage:8,antijumpaway:15,criticalhit:10,blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	hammer5: {id:'hammer5',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ���������',
		common: {weight:9,price:38,durability:40},
		required: {dexterity:13,level:3,clubskill:2,endurance:13,strength:13},
		modify: {anticriticalhit:10,dexterity:-2},
		properties: {mindamage:1,maxdamage:19,antijumpaway:30,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'none',crush:'often',cut:'none'}
	},
	hammer1: {id:'hammer1',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ������',
		common: {weight:8,price:39,durability:40},
		required: {dexterity:12,level:3,clubskill:2,endurance:12,strength:12},
		modify: {dexterity:-2},
		properties: {mindamage:4,maxdamage:18,antijumpaway:15,criticalhit:10,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'none',crush:'often',cut:'none'}
	, upgrade: {
	hammer1_olditem: {id:'hammer1_olditem',old:true,alignment:'dark',
		common: {weight:8,price:39,durability:40},
		required: {dexterity:12,level:3,clubskill:2,endurance:12,strength:12},
		modify: {dexterity:-2},
		properties: {mindamage:4,maxdamage:18,antijumpaway:15,criticalhit:10,blockzones:'+'}
	}}

	},
	mace51: {id:'mace51',category:'clubs',slot:'w3',width:60,height:60,caption:'�������� �������� ������',
		common: {weight:11,price:40,durability:50},
		required: {level:3,clubskill:2,endurance:12,strength:15},
		modify: {jumpaway:-15,dexterity:-1},
		properties: {mindamage:8,maxdamage:15,criticalhit:10,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	mace63: {id:'mace63',category:'clubs',slot:'w3',width:60,height:60,caption:'������ ������ ������',
		common: {weight:9,price:42,durability:50},
		required: {level:3,clubskill:2,endurance:12,strength:15},
		modify: {dexterity:-1},
		properties: {mindamage:8,maxdamage:15,blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	mace52: {id:'mace52',category:'clubs',slot:'w3',width:60,height:60,caption:'��� ����������',
		common: {weight:16,price:45,durability:50},
		required: {intuition:10,level:3,clubskill:2,endurance:12,strength:15},
		modify: {jumpaway:-10,strength:-1},
		properties: {mindamage:8,maxdamage:15,antijumpaway:30,criticalhit:10,blockzones:'&#8212;'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	hammer3: {id:'hammer3',category:'clubs',slot:'w3',width:60,height:60,caption:'������ ������� (������)',
		common: {weight:8,price:64,durability:50},
		required: {dexterity:14,level:3,clubskill:2,endurance:14,strength:14},
		modify: {dexterity:-2},
		properties: {mindamage:12,maxdamage:18,criticalhit:10,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'none',crush:'often',cut:'none'}
	},
	hammer60: {id:'hammer60',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:31}}}},
		common: {weight:29,price:157,durability:50},
		required: {level:5,clubskill:4,endurance:20,strength:25},
		modify: {jumpaway:-20,dexterity:-1},
		properties: {mindamage:20,maxdamage:27,antijumpaway:30,criticalhit:45,clubskill:1,twohandled:'yes',blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	, upgrade: {
	hammer60_olditem: {id:'hammer60_olditem',old:true,
		common: {weight:29,price:150,durability:50},
		required: {level:4,clubskill:4,endurance:16,strength:20},
		modify: {jumpaway:-20,dexterity:-1},
		properties: {mindamage:20,maxdamage:27,antijumpaway:30,criticalhit:45,clubskill:1,twohandled:'yes',blockzones:'+'}
	}}

	},
	hammer50: {id:'hammer50',category:'clubs',slot:'w3',width:60,height:60,caption:'������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:15}}}},
		common: {weight:18,price:71,durability:50},
		required: {level:4,clubskill:3,endurance:16,strength:20},
		modify: {dexterity:-1},
		properties: {mindamage:10,maxdamage:18,antijumpaway:7,criticalhit:20,blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	},
	hammer65: {id:'hammer65',category:'clubs',slot:'w3',width:60,height:60,caption:'������ �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:15}}}},
		common: {weight:19,price:71,durability:50},
		required: {level:4,clubskill:3,endurance:16,strength:20},
		modify: {dexterity:-2},
		properties: {mindamage:10,maxdamage:18,criticalhit:15,piercearmor:20,blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	},
	mace55: {id:'mace55',category:'clubs',slot:'w3',width:60,height:60,caption:'��� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:17}}}},
		common: {weight:7,price:83,durability:50},
		required: {level:4,clubskill:3,endurance:16,strength:20},
		modify: {dexterity:-1},
		properties: {mindamage:10,maxdamage:18,antijumpaway:50,criticalhit:20,blockzones:'&#8212;'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	hammer51: {id:'hammer51',category:'clubs',slot:'w3',width:60,height:60,caption:'����� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:19}}}},
		common: {weight:23,price:98,durability:50},
		required: {level:5,clubskill:3,endurance:20,strength:25},
		modify: {dexterity:-2,strength:1},
		properties: {mindamage:13,maxdamage:22,criticalhit:30,blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	},
	mace60: {id:'mace60',category:'clubs',slot:'w3',width:60,height:60,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:19}}}},
		common: {weight:21,price:99,durability:50},
		required: {level:5,clubskill:3,endurance:20,strength:25},
		modify: {anticriticalhit:-20,antijumpaway:20,jumpaway:-20},
		properties: {mindamage:13,maxdamage:22,criticalhit:35,blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	hammer52: {id:'hammer52',category:'clubs',slot:'w3',width:60,height:60,caption:'�������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:20}}}},
		common: {weight:24,price:101,durability:50},
		required: {level:5,clubskill:3,endurance:20,strength:25},
		modify: {jumpaway:-15,dexterity:-1,strength:1},
		properties: {mindamage:13,maxdamage:23,antijumpaway:15,criticalhit:15,blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	},
	hammer53: {id:'hammer53',category:'clubs',slot:'w3',width:60,height:60,caption:'��������� ������� �����',
		common: {weight:50,price:300,durability:70},
		required: {level:8,clubskill:5,endurance:45,strength:35},
		modify: {antijumpaway:65},
		properties: {mindamage:27,maxdamage:46,crushpower:15,twohandled:'yes',blockzones:'+'},
		setlink: {name:'siege'},
		attacks: {thrust:'rare',crush:'often'}
	},
	mace54: {id:'mace54',category:'clubs',slot:'w3',width:60,height:60,caption:'�������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:20}}}},
		common: {weight:22,price:104,durability:50},
		required: {level:5,clubskill:3,endurance:20,strength:25},
		modify: {dexterity:-2},
		properties: {mindamage:13,maxdamage:22,criticalpower:10,antijumpaway:15,blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	hammer4: {id:'hammer4',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:22}}}},
		common: {weight:20,price:110,durability:50},
		required: {dexterity:10,intuition:10,level:5,clubskill:3,endurance:20,strength:20},
		modify: {dexterity:-2},
		properties: {mindamage:13,maxdamage:25,criticalhit:50,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'none',crush:'often',cut:'none'}
	, upgrade: {
	hammer4_olditem: {id:'hammer4_olditem',old:true,
		required: {dexterity:20,intuition:20,level:4}
	}}

	},
	mace53: {id:'mace53',category:'clubs',slot:'w3',width:60,height:60,caption:'������� ��� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:24}}}},
		common: {weight:9,price:120,durability:50},
		required: {level:5,clubskill:3,endurance:20,strength:25},
		properties: {mindamage:13,maxdamage:22,antijumpaway:70,criticalhit:15,blockzones:'&#8212;'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	molot1: {id:'molot1',category:'clubs',slot:'w3',width:60,height:60,caption:'������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:25}}}},
		common: {weight:10,price:125,durability:50},
		required: {dexterity:15,level:6,clubskill:3,endurance:20,strength:20},
		modify: {dexterity:-2,strength:5},
		properties: {mindamage:10,maxdamage:22,antijumpaway:25,criticalhit:35,blockzones:'+'},
		attacks: {sabre:'none',crush:'routinely',cut:'none',water:'small'}
	, upgrade: {
	molot1_olditem: {id:'molot1_olditem',old:true,
		common: {weight:10,price:125,durability:50},
		required: {dexterity:15,level:4,clubskill:3,endurance:20,strength:20},
		modify: {dexterity:-2,strength:5},
		properties: {mindamage:10,maxdamage:22,antijumpaway:25,criticalhit:35,blockzones:'+'}
	}}

	},
	mace56: {id:'mace56',category:'clubs',slot:'w3',width:60,height:60,caption:'������ Ҹ���� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:26}}}},
		common: {weight:25,price:130,durability:50},
		required: {level:6,clubskill:4,endurance:24,strength:30},
		modify: {jumpaway:-20},
		properties: {mindamage:15,maxdamage:25,antijumpaway:50,criticalhit:30,blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	hammer59: {id:'hammer59',category:'clubs',slot:'w3',width:60,height:60,caption:'˸���� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:27}}}},
		common: {weight:27,price:135,durability:40},
		required: {level:6,clubskill:4,endurance:24,strength:30},
		modify: {strength:1},
		properties: {mindamage:15,maxdamage:25,clubskill:2,blockzones:'+'},
		attacks: {thrust:'insignificant',crush:'often',air:'insignificant'}
	},
	mace62: {id:'mace62',category:'clubs',slot:'w3',width:60,height:60,caption:'��� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:29}}}},
		common: {weight:9,price:148,durability:50},
		required: {level:6,clubskill:4,endurance:24,strength:30},
		properties: {mindamage:15,maxdamage:25,antijumpaway:70,criticalhit:40,blockzones:'&#8212;'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	mace59: {id:'mace59',category:'clubs',slot:'w3',width:60,height:60,caption:'�������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:29}}}},
		common: {weight:25,price:149,durability:50},
		required: {level:6,clubskill:4,endurance:24,strength:30},
		properties: {mindamage:15,maxdamage:25,antijumpaway:-10,criticalhit:25,thrustpower:15,blockzones:'+'},
		attacks: {thrust:'sometimes',crush:'sometimes'}
	},
	mace64: {id:'mace64',category:'clubs',slot:'w3',width:60,height:60,caption:'�������� ������',
		common: {weight:27,price:153,durability:50},
		required: {level:7,clubskill:4,endurance:28,strength:35},
		modify: {hitpoints:33,strength:-2},
		properties: {mindamage:17,maxdamage:28,criticalpower:5,criticalhit:20,blockzones:'+'},
		attacks: {thrust:'sometimes',crush:'sometimes'}
	},
	hammer54: {id:'hammer54',category:'clubs',slot:'w3',width:60,height:60,caption:'������������ �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:32}}}},
		common: {weight:24,price:160,durability:50},
		required: {level:6,clubskill:4,endurance:24,strength:30},
		modify: {criticalpower:10,dexterity:-3,intuition:1,strength:3},
		properties: {mindamage:15,maxdamage:25,criticalhit:30,blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	},
	mace57: {id:'mace57',category:'clubs',slot:'w3',width:60,height:60,caption:'������ ���������',
		common: {weight:26,price:160,durability:50},
		required: {level:7,clubskill:4,endurance:28,strength:35},
		modify: {dexterity:-2,strength:2},
		properties: {mindamage:17,maxdamage:28,crushpower:15,blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	mace61: {id:'mace61',category:'clubs',slot:'w3',width:60,height:60,caption:'����������� ������',
		common: {weight:28,price:162,durability:50},
		required: {level:7,clubskill:4,endurance:28,strength:32},
		modify: {antijumpaway:-25,dexterity:-2},
		properties: {mindamage:17,maxdamage:28,crushpower:30,blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	hammer56: {id:'hammer56',category:'clubs',slot:'w3',width:60,height:60,caption:'����� �������',
		common: {weight:30,price:173,durability:50},
		required: {level:7,clubskill:4,endurance:28,strength:35},
		modify: {dexterity:-1,intuition:-1},
		properties: {mindamage:17,maxdamage:28,antijumpaway:-10,crushpower:30,blockzones:'+'},
		attacks: {thrust:'rare',crush:'often'}
	},
	hammer66: {id:'hammer66',category:'clubs',slot:'w3',width:60,height:60,caption:'������ ��������������',
		common: {weight:10,price:180,durability:50},
		required: {level:7,clubskill:4,endurance:30,strength:35},
		modify: {dexterity:-2},
		properties: {mindamage:17,maxdamage:30,antijumpaway:70,criticalhit:45,clubskill:2,blockzones:'&#8212;'},
		attacks: {thrust:'small',crush:'routinely'}
	},
	hammer62: {id:'hammer62',category:'clubs',slot:'w3',width:60,height:60,caption:'����� �������� ����',
		common: {weight:30,price:200,durability:100},
		required: {dexterity:25,intuition:25,level:8,clubskill:5,endurance:30,strength:35},
		properties: {mindamage:20,maxdamage:32,antijumpaway:35,crushpower:15,blockzones:'+'},
		setlink: {name:'firedown'},
		attacks: {fire:'small',crush:'routinely'}
	},
	hammer68: {id:'hammer68',category:'clubs',slot:'w3',width:60,height:60,caption:'�������� �����',
		common: {weight:32,price:200,durability:60},
		required: {level:8,firemagicskill:2,clubskill:5,endurance:35,strength:40},
		modify: {firemagicpower:5,dexterity:-2},
		properties: {mindamage:20,maxdamage:32,antijumpaway:50,criticalhit:50,clubskill:1,blockzones:'+'},
		attacks: {fire:'sometimes',crush:'sometimes'}
	},
	hammer61: {id:'hammer61',category:'clubs',slot:'w3',width:60,height:60,caption:'�������� �����',
		common: {weight:30,price:201,durability:100},
		required: {level:8,clubskill:5,endurance:35,strength:40},
		modify: {dexterity:-3},
		properties: {mindamage:20,maxdamage:32,antijumpaway:80,crushpower:20,blockzones:'+'},
		attacks: {thrust:'insignificant',crush:'often'}
	},
	hammer58: {id:'hammer58',category:'clubs',slot:'w3',width:60,height:60,caption:'�������� �����',magic1:'����������',
		common: {weight:30,price:220,durability:50},
		required: {level:8,clubskill:5,endurance:32,strength:40},
		properties: {mindamage:20,maxdamage:32,antijumpaway:20,criticalhit:30,blockzones:'+'},
		attacks: {thrust:'rare',crush:'routinely',cut:'rare'}
	},
	hammer69: {id:'hammer69',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ��������',alignment:'light',
		common: {weight:30,price:230,durability:60},
		required: {level:8,clubskill:5,endurance:35,strength:40},
		modify: {dexterity:-2,strength:1},
		properties: {mindamage:20,maxdamage:32,antijumpaway:70,crushpower:20,clubskill:2},
		attacks: {thrust:'insignificant',crush:'often',light:'insignificant'}
	},
	mace66: {id:'mace66',category:'clubs',slot:'w3',width:60,height:60,caption:'������ �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:2},mater12:{id:'mater12',caption:'�����',count:5}}}},
		common: {weight:25,price:250,durability:50},
		required: {dexterity:50,level:9,clubskill:5,endurance:30,strength:40},
		modify: {clubskill:2},
		properties: {mindamage:22,maxdamage:34,antijumpaway:75,crushpower:20,blockzones:'+'},
		setlink: {name:'spider'},
		attacks: {thrust:'small',crush:'routinely'}
	, upgrade: {
	mace66_olditem: {id:'mace66_olditem',old:true,
		common: {weight:25,price:250,durability:50},
		required: {dexterity:45,intuition:15,level:9,clubskill:5,endurance:35,strength:40},
		modify: {clubskill:0},
		properties: {mindamage:22,maxdamage:34,antijumpaway:25,crushpower:30,clubskill:1,blockzones:'+'}
	}}

	},
	mace67: {id:'mace67',category:'clubs',slot:'w3',width:60,height:60,caption:'������ �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:2},mater5:{id:'mater5',caption:'������',count:5}}}},
		common: {weight:30,price:250,durability:50},
		required: {dexterity:15,intuition:45,level:9,clubskill:5,endurance:35,strength:40},
		modify: {dexterity:-2},
		properties: {mindamage:22,maxdamage:34,antijumpaway:60,criticalhit:60,crushpower:20,clubskill:1,blockzones:'+'},
		setlink: {name:'bloodmoon'},
		attacks: {crush:'often',water:'rare'}
	},
	mace68: {id:'mace68',category:'clubs',slot:'w3',width:60,height:60,caption:'������ ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:2},mater6:{id:'mater6',caption:'�������� ������',count:5}}}},
		common: {weight:30,price:250,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45,clubskill:5},
		modify: {strength:1},
		properties: {mindamage:22,maxdamage:34,antijumpaway:80,crushpower:20,clubskill:1,blockzones:'+'},
		setlink: {name:'losttime'},
		attacks: {thrust:'insignificant',crush:'often'}
	},
	hammer72_du2: {id:'hammer72_du2',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:2},mater2:{id:'mater2',caption:'������',count:5}}}},
		common: {weight:30,price:250,durability:100},
		required: {dexterity:30,intuition:30,level:9,clubskill:5,endurance:40,strength:40},
		modify: {dexterity:-1,strength:6},
		properties: {mindamage:22,maxdamage:34,antijumpaway:40,crushpower:15,blockzones:'+'},
		setlink: {name:'morningsun'},
		attacks: {fire:'small',crush:'routinely'}
	},
	hammer74: {id:'hammer74',category:'clubs',slot:'w3',width:60,height:60,caption:'��� ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:2},mater3:{id:'mater3',caption:'�������',count:5}}}},
		common: {weight:25,price:250,durability:50},
		required: {dexterity:15,intuition:45,level:9,clubskill:5,endurance:45,strength:35},
		modify: {clubskill:1},
		properties: {mindamage:22,maxdamage:34,antijumpaway:100,criticalhit:30,crushpower:15,blockzones:'+'},
		setlink: {name:'scorpion'},
		attacks: {thrust:'rare',crush:'routinely',dark:'insignificant'}
	},
    hammer75: {id:'hammer75',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ������� ��������',
		common: {weight:35,price:220,durability:100},
		required: {level:8,clubskill:5,endurance:50,strength:40},
		modify: {anticriticalhit:50,antijumpaway:70},
		properties: {mindamage:20,maxdamage:32},
		attacks: {thrust:'insignificant',crush:'often'}
	},
	hammer76: {id:'hammer76',category:'clubs',slot:'w3',width:60,height:60,caption:'������ ��������� ������',requireditems:{shop:{exchanger:'shop',items:{mater27:{id:'mater27',caption:'������ ���������� ������',count:5},mater5:{id:'mater5',caption:'������',count:20}}}},
        common: {weight:30,price:370,durability:60},
        required: {dexterity:25,intuition:25,level:9,clubskill:5,endurance:50,strength:50},
        modify: {anticriticalhit:50},
        properties: {mindamage:30,maxdamage:48,antijumpaway:50,crushpower:30,clubskill:2,twohandled:'yes',blockzones:'+'},
        setlink: {name:'morningsun'},
        attacks: {fire:'small',crush:'routinely'}
    },
	hammer70: {id:'hammer70',category:'clubs',slot:'w3',width:60,height:60,caption:'����� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater15:{id:'mater15',caption:'������� �������',count:9},mater5:{id:'mater5',caption:'������',count:10}}}},
		common: {weight:30,price:370,durability:60},
		required: {dexterity:15,intuition:50,level:9,clubskill:5,endurance:35,strength:45},
		modify: {dexterity:-1,strength:1},
		properties: {mindamage:30,maxdamage:48,antijumpaway:60,criticalhit:80,crushpower:25,clubskill:2,twohandled:'yes',blockzones:'+'},
		setlink: {name:'bloodmoon'},
		attacks: {crush:'often',water:'rare'}
	},
	hammer71: {id:'hammer71',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater19:{id:'mater19',caption:'�������� ������',count:9},mater6:{id:'mater6',caption:'�������� ������',count:10}}}},
		common: {weight:30,price:370,durability:60},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:55,clubskill:5},
		modify: {anticriticalhit:20,strength:2},
		properties: {mindamage:30,maxdamage:48,antijumpaway:80,crushpower:25,clubskill:2,blockzones:'+',twohandled:'yes'},
		setlink: {name:'losttime'},
		attacks: {thrust:'insignificant',crush:'often'}
	, upgrade: {
	hammer71_mf1: {id:'hammer71_mf1',caption:'����� ������� ������ (��)',fixless:true,
		common: {weight:30,price:290,durability:60},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:55,clubskill:5},
		modify: {anticriticalhit:20,strength:2},
		properties: {mindamage:34,maxdamage:52,antijumpaway:80,crushpower:25,clubskill:2,blockzones:'+',twohandled:'yes'}
	}}

	},
	hammer63: {id:'hammer63',category:'clubs',slot:'w3',width:60,height:60,caption:'������� ����� ���������',
		common: {weight:50,price:300,durability:70},
		required: {intuition:25,level:8,clubskill:5,endurance:35,strength:40},
		modify: {dexterity:-4,intuition:4,hitpoints:18},
		properties: {mindamage:27,maxdamage:46,criticalpower:20,criticalhit:40,twohandled:'yes',blockzones:'+'},
		attacks: {thrust:'insignificant',crush:'often'}
	},
	
	
	dmposoh: {id:'dmposoh',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ���� ������',adjustment:true,artefact:true,
		common: {durability:500},
		properties: {mindamage:15,maxdamage:45}
	},
	sposoh: {id:'sposoh',category:'clubs',slot:'w3',width:60,height:60,caption:'����� ����������',
		common: {durability:500},
		properties: {mindamage:14,maxdamage:42}
	},
	
	
	
	
	
	
	
	
	hammer204: {id:'hammer204',category:'clubs',slot:'w3',width:60,height:60,caption:'Smashing Hammer',imp1:true,binding:'boe',
		common: {weight:20,price:200,durability:40,eprice:3.49},
		required: {level:8},
		properties: {mindamage:20,maxdamage:32,antijumpaway:30,criticalhit:50,crushpower:20,clubskill:2,blockzones:'+'},
		setlink: {name:'smash'},
		attacks: {thrust:'insignificant',sabre:'insignificant',crush:'often'}
	},
	
	
	sword97: {id:'sword97',category:'swords',slot:'w3',width:60,height:60,caption:'������� ���',
		common: {weight:8,price:8,durability:50},
		required: {level:1,swordskill:1,endurance:4,strength:4},
		modify: {anticriticalhit:5},
		properties: {mindamage:2,maxdamage:7,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword53: {id:'sword53',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������',
		common: {weight:6,price:11,durability:20},
		required: {level:1,swordskill:1,endurance:4,strength:4},
		properties: {mindamage:4,maxdamage:9,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword2: {id:'sword2',category:'swords',slot:'w3',width:60,height:60,caption:'�������� ���������� ���',old:true,
		common: {price:16,weight:3,durability:30},
		required: {strength:8,endurance:7,level:1},
		properties: {mindamage:4,maxdamage:8},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword75: {id:'sword75',category:'swords',slot:'w3',width:60,height:60,caption:'��� ��������� ��������',
		common: {weight:6,price:20,durability:50},
		required: {dexterity:9,intuition:7,level:2,swordskill:2,endurance:7,strength:7},
		modify: {anticriticalhit:-10,jumpaway:-5},
		properties: {mindamage:5,maxdamage:9,criticalhit:28,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	, upgrade: {
	sword75_newcap: {id:'sword75_newcap',caption:'Mad Hero`s Sword',imp1:true,
		common: {weight:6,price:20,durability:50},
		required: {dexterity:9,intuition:7,level:2,swordskill:2,endurance:7,strength:7},
		modify: {anticriticalhit:0,jumpaway:0},
		properties: {mindamage:5,maxdamage:9,criticalhit:28,secondweapon:'yes',blockzones:'+'}
	}}

	},
	sword78: {id:'sword78',category:'swords',slot:'w3',width:60,height:60,caption:'��� �����',
		common: {weight:8,price:21,durability:50},
		required: {dexterity:7,level:2,swordskill:2,endurance:7,strength:7},
		properties: {mindamage:5,maxdamage:9,criticalhit:10,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword60: {id:'sword60',category:'swords',slot:'w3',width:60,height:60,caption:'������� ��� ����������',
		common: {weight:7,price:21,durability:50},
		required: {dexterity:7,level:2,swordskill:2,endurance:7,strength:7},
		modify: {anticriticalhit:-10,jumpaway:5,dexterity:1},
		properties: {mindamage:4,maxdamage:9,antijumpaway:5,piercearmor:5,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword2t: {id:'sword2t',category:'swords',slot:'w3',width:60,height:60,caption:'��������� ���',
		common: {weight:9,price:25,durability:50},
		required: {level:8,swordskill:5},
		modify: {hitpoints:10},
		properties: {mindamage:6,maxdamage:8,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',cut:'small'}
	},
	sword63: {id:'sword63',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������� ������',
		common: {weight:13,price:36,durability:50},
		required: {dexterity:10,level:3,swordskill:2,endurance:10,strength:10},
		properties: {mindamage:6,maxdamage:12,antijumpaway:15,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword72: {id:'sword72',category:'swords',slot:'w3',width:60,height:60,caption:'���������� ���',
		common: {weight:11,price:38,durability:50},
		required: {dexterity:10,level:3,swordskill:2,endurance:10,strength:10},
		modify: {anticriticalhit:-15,jumpaway:10},
		properties: {mindamage:6,maxdamage:12,piercearmor:20,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword7: {id:'sword7',category:'swords',slot:'w3',width:60,height:60,caption:'��� ���������',old:true,
		common: {price:48,weight:6,durability:30},
		required: {strength:12,endurance:11,level:3},
		properties: {mindamage:5,maxdamage:15,criticalhit:10,antijumpaway:30},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword4: {id:'sword4',category:'swords',slot:'w3',width:60,height:60,caption:'������������ ���',old:true,alignment:'dark',
		common: {price:50,weight:7,durability:100},
		required: {strength:12,endurance:11,level:3},
		modify: {strength:1,dexterity:1},
		properties: {mindamage:5,maxdamage:15,criticalhit:7,antijumpaway:10,swordskill:1},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword85: {id:'sword85',category:'swords',slot:'w3',width:60,height:60,caption:'������� ������ ����',
		common: {weight:8,price:52,durability:50},
		required: {dexterity:11,level:3,swordskill:2,endurance:10,strength:11},
		properties: {mindamage:6,maxdamage:12,sabrepower:10,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'insignificant',sabre:'routinely',cut:'small'}
	},
	sword77: {id:'sword77',category:'swords',slot:'w3',width:60,height:60,caption:'��� ������������',
		common: {weight:12,price:54,durability:50},
		required: {intuition:10,level:3,swordskill:2,endurance:10,strength:10},
		modify: {anticriticalhit:20},
		properties: {mindamage:6,maxdamage:15,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword99: {id:'sword99',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������',
		common: {weight:12,price:55,durability:30},
		required: {dexterity:11,level:3,swordskill:3,endurance:11,strength:11},
		modify: {dexterity:-1},
		properties: {mindamage:11,maxdamage:16,twohandled:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',cut:'small'}
	},
	sword9: {id:'sword9',category:'swords',slot:'w3',width:60,height:60,caption:'��� ����������',old:true,
		common: {price:56,weight:7,durability:50},
		required: {strength:13,endurance:13,level:3},
		modify: {jumpaway:20},
		properties: {mindamage:5,maxdamage:16,criticalhit:10,antijumpaway:30},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword61: {id:'sword61',category:'swords',slot:'w3',width:60,height:60,caption:'��� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:10,price:56,durability:50},
		required: {dexterity:13,level:4,swordskill:3,endurance:13,strength:13},
		properties: {mindamage:7,maxdamage:18,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword67: {id:'sword67',category:'swords',slot:'w3',width:60,height:60,caption:'��� ̸������ ����',
		common: {weight:14,price:56,durability:50},
		required: {intuition:11,level:3,swordskill:3,endurance:10,strength:11},
		modify: {jumpaway:-20,dexterity:-1},
		properties: {mindamage:8,maxdamage:16,criticalpower:6,criticalhit:15,twohandled:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword62: {id:'sword62',category:'swords',slot:'w3',width:60,height:60,caption:'��� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:12,price:60,durability:50},
		required: {dexterity:10,level:4,swordskill:3,endurance:10,strength:10},
		modify: {jumpaway:-20,counterstroke:5},
		properties: {mindamage:5,maxdamage:18,antijumpaway:20,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword55: {id:'sword55',category:'swords',slot:'w3',width:60,height:60,caption:'��������� ���',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:13}}}},
		common: {weight:13,price:62,durability:50},
		required: {dexterity:13,level:4,swordskill:3,endurance:13,strength:13},
		modify: {criticalhit:15,jumpaway:10,dexterity:-1,strength:1},
		properties: {mindamage:8,maxdamage:15,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword54: {id:'sword54',category:'swords',slot:'w3',width:60,height:60,caption:'�������� ���',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:13}}}},
		common: {weight:11,price:64,durability:50},
		required: {dexterity:13,level:4,swordskill:3,endurance:13,strength:13},
		modify: {jumpaway:20},
		properties: {mindamage:8,maxdamage:15,antijumpaway:20,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword59: {id:'sword59',category:'swords',slot:'w3',width:60,height:60,caption:'���������� ���',
		common: {weight:10,price:70,durability:50},
		required: {intuition:7,level:2,swordskill:2,endurance:7,strength:7},
		properties: {mindamage:5,maxdamage:12,criticalpower:20,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword11: {id:'sword11',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������',old:true,
		common: {price:74,weight:8,durability:50},
		required: {strength:15,endurance:15,level:3},
		modify: {jumpaway:50},
		properties: {mindamage:5,maxdamage:16,antijumpaway:50,swordskill:2},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword3: {id:'sword3',category:'swords',slot:'w3',width:60,height:60,caption:'��� ����',old:true,alignment:'light',
		common: {price:80,weight:5,durability:100},
		required: {strength:13,endurance:12,level:3},
		modify: {intuition:2,parry:10},
		properties: {mindamage:6,maxdamage:16,criticalhit:5,antijumpaway:5,swordskill:1},
		attacks: {fire:'small',thrust:'small',sabre:'sometimes',crush:'none',cut:'rare'}
	},
	sword13: {id:'sword13',category:'swords',slot:'w3',width:60,height:60,caption:'��� ����������',old:true,
		common: {price:90,weight:8,durability:50},
		required: {strength:20,endurance:20,level:4},
		properties: {mindamage:5,maxdamage:18,criticalhit:50},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword79: {id:'sword79',category:'swords',slot:'w3',width:60,height:60,caption:'��� -����-',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:16,price:90,durability:50},
		required: {dexterity:16,level:5,swordskill:3,endurance:16,strength:16},
		properties: {mindamage:8,maxdamage:21,antijumpaway:50,criticalhit:10,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword81: {id:'sword81',category:'swords',slot:'w3',width:60,height:60,caption:'��� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:13,price:90,durability:50},
		required: {level:5,swordskill:3,endurance:16,strength:16},
		modify: {anticriticalhit:-10,jumpaway:-30,dexterity:1,intuition:-1,hitpoints:20,strength:1},
		properties: {mindamage:10,maxdamage:18,antijumpaway:40,criticalhit:25,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword73: {id:'sword73',category:'swords',slot:'w3',width:60,height:60,caption:'��� ̸�����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:13,price:91,durability:50},
		required: {intuition:16,level:5,swordskill:3,endurance:16,strength:16},
		modify: {anticriticalhit:40,dexterity:-1,intuition:1},
		properties: {mindamage:10,maxdamage:18,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword50: {id:'sword50',category:'swords',slot:'w3',width:60,height:60,caption:'��� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:7,price:92,durability:50},
		required: {intuition:16,level:5,swordskill:3,endurance:16,strength:16},
		modify: {anticriticalhit:20,jumpaway:30},
		properties: {mindamage:10,maxdamage:18,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword56: {id:'sword56',category:'swords',slot:'w3',width:60,height:60,caption:'����� -��������-',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:13,price:92,durability:50},
		required: {dexterity:16,level:5,swordskill:3,endurance:16,strength:16},
		properties: {mindamage:7,maxdamage:23,antijumpaway:25,criticalhit:25,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'sometimes',cut:'small'}
	},
	sword87: {id:'sword87',category:'swords',slot:'w3',width:60,height:60,caption:'������������ ���',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:13,price:92,durability:50},
		required: {intuition:16,level:5,swordskill:3,endurance:16,strength:16},
		modify: {anticriticalhit:10,jumpaway:10,strength:1},
		properties: {mindamage:10,maxdamage:18,antijumpaway:10,criticalhit:10,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword57: {id:'sword57',category:'swords',slot:'w3',width:60,height:60,caption:'������ �������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:11,price:93,durability:50},
		required: {dexterity:14,intuition:14,level:5,swordskill:3,endurance:16,strength:16},
		modify: {anticriticalhit:20,jumpaway:20,dexterity:-1,intuition:-1,strength:1},
		properties: {mindamage:10,maxdamage:18,criticalhit:30,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword8: {id:'sword8',category:'swords',slot:'w3',width:60,height:60,caption:'��� ������',old:true,
		common: {price:94,weight:8,durability:50},
		required: {strength:20,endurance:20,level:4},
		properties: {mindamage:7,maxdamage:18,criticalhit:50},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword10: {id:'sword10',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������������',old:true,
		common: {price:94,weight:8,durability:50},
		required: {strength:20,endurance:20,level:4},
		modify: {anticriticalhit:50},
		properties: {mindamage:7,maxdamage:17,antijumpaway:10},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword96: {id:'sword96',category:'swords',slot:'w3',width:60,height:60,caption:'��� ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:22}}}},
		common: {weight:13,price:110,durability:50},
		required: {intuition:19,level:6,swordskill:4,endurance:19,strength:19},
		modify: {dexterity:4},
		properties: {mindamage:11,maxdamage:21,criticalpower:-10,antijumpaway:25,criticalhit:30,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword70: {id:'sword70',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:22}}}},
		common: {weight:16,price:113,durability:50},
		required: {dexterity:18,level:6,swordskill:4,endurance:18,strength:18},
		modify: {anticriticalhit:1,dexterity:3,hitpoints:15},
		properties: {mindamage:11,maxdamage:21,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword71: {id:'sword71',category:'swords',slot:'w3',width:60,height:60,caption:'��� ���������',
		common: {weight:17,price:170,durability:50},
		required: {dexterity:30,level:8,swordskill:5,endurance:25,strength:25},
		modify: {anticriticalhit:40},
		properties: {mindamage:11,maxdamage:30,antijumpaway:40,sabrepower:5,swordskill:1,blockzones:'+'},
		attacks: {sabre:'routinely',cut:'small'}
	},
	sword83: {id:'sword83',category:'swords',slot:'w3',width:60,height:60,caption:'�������� ���',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:23}}}},
		common: {weight:10,price:116,durability:50},
		required: {dexterity:16,level:6,swordskill:4,endurance:16,strength:16},
		modify: {jumpaway:60},
		properties: {mindamage:9,maxdamage:24,piercearmor:10,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword69: {id:'sword69',category:'swords',slot:'w3',width:60,height:60,caption:'������ ������� ����',magic1:'�����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:24}}}},
		common: {weight:15,price:120,durability:50},
		required: {intuition:16,intellect:2,level:5,swordskill:3,endurance:16,strength:16},
		modify: {anticriticalhit:-20,jumpaway:20},
		properties: {mindamage:10,maxdamage:18,antijumpaway:20,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword52: {id:'sword52',category:'swords',slot:'w3',width:60,height:60,caption:'��� ������',
		common: {weight:15,price:142,durability:50},
		required: {intuition:25,level:7,swordskill:4,endurance:20,strength:20},
		modify: {anticriticalhit:-10,dexterity:-1,strength:3},
		properties: {mindamage:11,maxdamage:27,antijumpaway:30,criticalhit:50,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword66: {id:'sword66',category:'swords',slot:'w3',width:60,height:60,caption:'��� ��������',
		common: {weight:17,price:142,durability:50},
		required: {intuition:22,level:7,swordskill:4,endurance:22,strength:22},
		modify: {piercearmor:10},
		properties: {mindamage:13,maxdamage:24,antijumpaway:35,criticalhit:45,blockzones:'+'},
		attacks: {fire:'insignificant',thrust:'rare',sabre:'sometimes',cut:'small',water:'insignificant',air:'insignificant'}
	},
	sword51: {id:'sword51',category:'swords',slot:'w3',width:60,height:60,caption:'��� ���������',
		common: {weight:15,price:144,durability:50},
		required: {intuition:22,level:7,swordskill:4,endurance:22,strength:22},
		modify: {intuition:1},
		properties: {mindamage:13,maxdamage:24,antijumpaway:20,criticalhit:60,piercearmor:10,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword92: {id:'sword92',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������',
		common: {weight:14,price:140,durability:50},
		required: {dexterity:25,level:7,swordskill:4,endurance:25,strength:25},
		modify: {anticriticalhit:55},
		properties: {mindamage:10,maxdamage:28,piercearmor:7,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword91: {id:'sword91',category:'swords',slot:'w3',width:60,height:60,caption:'����������� ���',
		common: {weight:15,price:160,durability:30},
		required: {intuition:22,level:7,swordskill:4,endurance:22,strength:22},
		properties: {mindamage:12,maxdamage:25,criticalpower:10,criticalhit:70,swordskill:1,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword58: {id:'sword58',category:'swords',slot:'w3',width:60,height:60,caption:'��������� ��� ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:32}}}},
		common: {weight:22,price:160,durability:50},
		required: {intuition:19,level:6,swordskill:5,endurance:22,strength:22},
		modify: {dexterity:-2},
		properties: {mindamage:14,maxdamage:32,sabrepower:20,twohandled:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',cut:'small'}
	},
	sword95: {id:'sword95',category:'swords',slot:'w3',width:60,height:60,caption:'��� �����',
		common: {weight:18,price:166,durability:50},
		required: {intuition:22,level:7,swordskill:4,endurance:22,strength:22},
		modify: {anticriticalhit:-30,parry:5,jumpaway:-10,intuition:2},
		properties: {mindamage:13,maxdamage:24,antijumpaway:50,criticalhit:70,blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword82: {id:'sword82',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������� ����',magic1:'����������� ������',
		common: {weight:17,price:170,durability:50},
		required: {dexterity:25,intuition:25,level:8,swordskill:5,firemagicskill:2,endurance:25,strength:25},
		modify: {anticriticalhit:50},
		properties: {mindamage:10,maxdamage:30,piercearmor:10,blockzones:'+'},
		setlink: {name:'firedown'},
		attacks: {fire:'sometimes',thrust:'rare',sabre:'small',cut:'rare'}
	, upgrade: {
	sword82_olditem: {id:'sword82_olditem',caption:'��� ��������� ����',old:true,
		common: {price:120,weight:17,durability:50},
		required: {dexterity:19,level:6,swordskill:4,firemagicskill:0,endurance:19,strength:19,intuition:25},
		modify: {anticriticalhit:50},
		properties: {mindamage:11,maxdamage:21,piercearmor:5}
	}}

	},
	sword80: {id:'sword80',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������',
		common: {weight:18,price:172,durability:50},
		required: {intuition:30,level:8,swordskill:5,endurance:25,strength:25},
		modify: {anticriticalhit:80},
		properties: {mindamage:10,maxdamage:32,piercearmor:10,blockzones:'+'},
		attacks: {thrust:'sometimes',sabre:'small',cut:'small'}
	},
	sword94: {id:'sword94',category:'swords',slot:'w3',width:60,height:60,caption:'������� ���',
		common: {weight:19,price:174,durability:50},
		required: {dexterity:25,intuition:25,level:8,swordskill:5,watermagicskill:2,endurance:25,strength:25},
		modify: {parry:5},
		properties: {mindamage:15,maxdamage:27,antijumpaway:25,criticalhit:45,blockzones:'+'},
		attacks: {sabre:'sometimes',water:'sometimes'}
	},
	sword93: {id:'sword93',category:'swords',slot:'w3',width:60,height:60,caption:'��� Ҹ����� �������',
		common: {weight:18,price:177,durability:80},
		required: {intuition:25,level:8,swordskill:5,endurance:25,strength:25},
		modify: {strength:3},
		properties: {mindamage:11,maxdamage:30,antijumpaway:20,criticalhit:80,blockzones:'+'},
		attacks: {thrust:'rare',sabre:'routinely',cut:'small'}
	},
	sword86: {id:'sword86',category:'swords',slot:'w3',width:60,height:60,caption:'��� ����������',
		common: {weight:28,price:200,durability:50},
		required: {intuition:22,level:7,swordskill:5,endurance:26,strength:26},
		modify: {parry:7,jumpaway:-15,dexterity:-2},
		properties: {mindamage:18,maxdamage:36,criticalhit:45,twohandled:'yes',blockzones:'+'},
		attacks: {thrust:'insignificant',sabre:'routinely',cut:'rare'}
	},
	sword64: {id:'sword64',category:'swords',slot:'w3',width:60,height:60,caption:'��� ��������',alignment:'light',
		common: {weight:17,price:200,durability:50},
		required: {dexterity:25,level:8,swordskill:5,endurance:25,strength:25},
		modify: {anticriticalhit:45,parry:5},
		properties: {mindamage:10,maxdamage:30,antijumpaway:45,swordskill:2,piercearmor:10},
		attacks: {thrust:'small',sabre:'sometimes',crush:'insignificant',cut:'small',light:'insignificant'}
	},
	sword102: {id:'sword102',category:'swords',slot:'w3',width:60,height:60,caption:'��� �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater12:{id:'mater12',caption:'�����',count:12}}}},
		common: {weight:17,price:220,durability:50},
		required: {dexterity:55,intuition:15,level:9,swordskill:5,endurance:30,strength:30},
		modify: {anticriticalhit:35,jumpaway:75,strength:1},
		properties: {mindamage:12,maxdamage:34,swordskill:2,piercearmor:20,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'spider'},
		attacks: {thrust:'small',sabre:'sometimes',cut:'small'}
	, upgrade: {
	sword102_1: {id:'sword102_1',caption:'��� ����� (��)',fixless:true,
		common: {weight:17,price:220,durability:50},
		required: {dexterity:55,intuition:15,level:9,swordskill:5,endurance:30,strength:30},
		modify: {intellect:2,anticriticalhit:35,jumpaway:75,strength:1},
		properties: {mindamage:12,maxdamage:34,swordskill:2,piercearmor:20,secondweapon:'yes',blockzones:'+'}
	}}

	},
	sword103: {id:'sword103',category:'swords',slot:'w3',width:60,height:60,caption:'��� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater5:{id:'mater5',caption:'������',count:12}}}},
		common: {weight:17,price:220,durability:50},
		required: {dexterity:15,intuition:50,level:9,swordskill:5,endurance:30,strength:30},
		properties: {mindamage:12,maxdamage:34,criticalpower:10,antijumpaway:50,criticalhit:80,swordskill:2,blockzones:'+'},
		setlink: {name:'bloodmoon'},
		attacks: {thrust:'small',sabre:'sometimes',cut:'small',water:'rare'}
	, upgrade: {
	sword103_1: {id:'sword103_1',caption:'��� �������� ���� (��)',fixless:true,
		common: {weight:17,price:220,durability:50},
		required: {dexterity:15,intuition:50,level:9,swordskill:5,endurance:30,strength:30},
		modify: {intuition:5},
		properties: {mindamage:12,maxdamage:34,criticalpower:10,antijumpaway:50,criticalhit:80,swordskill:2,blockzones:'+'}
	}}

	},
	sword104: {id:'sword104',category:'swords',slot:'w3',width:60,height:60,caption:'��� ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater6:{id:'mater6',caption:'�������� ������',count:12}}}},
		common: {weight:17,price:220,durability:50},
		required: {dexterity:15,intuition:15,level:9,swordskill:5,endurance:50,strength:45},
		modify: {anticriticalhit:40,strength:2},
		properties: {mindamage:12,maxdamage:34,antijumpaway:40,sabrepower:10,swordskill:2,blockzones:'+'},
		setlink: {name:'losttime'},
		attacks: {thrust:'small',sabre:'sometimes',cut:'small'}
	},
	sword105_du2: {id:'sword105_du2',category:'swords',slot:'w3',width:60,height:60,caption:'��� ��������� ������',magic1:'�������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:1},mater2:{id:'mater2',caption:'������',count:11},mater16:{id:'mater16',caption:'��������� ������',count:1}}}},
		common: {weight:17,price:220,durability:50},
		required: {dexterity:30,intuition:30,level:9,swordskill:5,endurance:35,strength:35},
		modify: {anticriticalhit:55,parry:3,dexterity:1,intuition:1},
		properties: {mindamage:12,maxdamage:34,antijumpaway:30,swordskill:1,piercearmor:10,blockzones:'+'},
		setlink: {name:'morningsun'},
		attacks: {fire:'small',thrust:'rare',sabre:'sometimes',cut:'rare'}
	},
	knife77: {id:'knife77',category:'swords',slot:'w3',width:60,height:60,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater3:{id:'mater3',caption:'�������',count:12}}}},
		common: {weight:10,price:220,durability:50},
		required: {dexterity:15,intuition:45,level:9,swordskill:5,endurance:45,strength:35},
		modify: {parry:7,intuition:5},
		properties: {mindamage:6,maxdamage:17,antijumpaway:75,criticalhit:90,swordskill:2,piercearmor:25,secondweapon:'yes',blockzones:'+'},
		setlink: {name:'scorpion'},
		attacks: {thrust:'sometimes',sabre:'rare',cut:'small',dark:'insignificant'}
	},
	sword105: {id:'sword105',category:'swords',slot:'w3',width:60,height:60,caption:'��� ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater3:{id:'mater3',caption:'�������',count:12}}}},
		common: {weight:17,price:220,durability:50},
		required: {dexterity:15,intuition:50,level:9,swordskill:5,endurance:30,strength:30},
		modify: {strength:2},
		properties: {mindamage:11,maxdamage:33,antijumpaway:100,criticalhit:100,swordskill:1,blockzones:'+'},
		setlink: {name:'scorpion'},
		attacks: {thrust:'small',sabre:'sometimes',cut:'small',dark:'insignificant'}
	},
	sword106: {id:'sword106',category:'swords',slot:'w3',width:60,height:60,caption:'��� ��������',description:'������ ������, ���� ����� ������... ',binding:'bop',requireditems:{shop:{exchanger:'shop', items: {mater24:{id:'mater24',caption:'���������',count:1},mater13:{id:'mater13',caption:'�������� ������ �������',count:3},mater12:{id:'mater12',caption:'�����',count:5}}}},
		common: {weight:17,price:220,durability:50},
		required: {dexterity:25,intuition:50,level:9,swordskill:5,endurance:30,strength:25},
		properties: {mindamage:15,maxdamage:30,criticalhit:50,antijumpaway:50,cutpower:20,swordskill:2,blockzones:'+'},
		attacks: {thrust:'small',cut:'routinely'}
	},
	sword76: {id:'sword76',category:'swords',slot:'w3',width:60,height:60,caption:'��� ������',
		common: {weight:22,price:221,durability:50},
		required: {dexterity:22,level:7,swordskill:5,endurance:26,strength:26},
		modify: {parry:5,jumpaway:-30,dexterity:-3,strength:-2},
		properties: {mindamage:19,maxdamage:36,criticalpower:30,antijumpaway:-30,criticalhit:50,twohandled:'yes',blockzones:'+'},
		attacks: {thrust:'small',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	sword74: {id:'sword74',category:'swords',slot:'w3',width:60,height:60,caption:'��� ������',
		common: {weight:28,price:260,durability:50},
		required: {intuition:25,level:8,swordskill:5,endurance:30,strength:30},
		properties: {mindamage:21,maxdamage:40,criticalpower:15,antijumpaway:25,criticalhit:50,swordskill:1,piercearmor:10,twohandled:'yes',blockzones:'+'},
		setlink: {name:'sunset'},
		attacks: {thrust:'rare',sabre:'sometimes',cut:'rare',water:'rare'}
	, upgrade: {
	sword74_olditem1: {id:'sword74_olditem1',old:true,
		common: {price:217,weight:28,durability:50},
		required: {intuition:25,level:8,swordskill:5,endurance:30,strength:30},
		modify: {parry:15,jumpaway:30},
		properties: {mindamage:13,maxdamage:24,antijumpaway:30,criticalpower:15,criticalhit:50,swordskill:1,piercearmor:10,twohandled:'yes'}
	},
	sword74_olditem2: {id:'sword74_olditem2',caption:'��� ��������',old:true,
		common: {weight:26,price:214,durability:50},
		required: {intuition:0,level:7,endurance:22,strength:26,dexterity:26,swordskill:5},
		modify: {parry:5},
		properties: {mindamage:19,maxdamage:36,criticalpower:0,antijumpaway:45,criticalhit:0,swordskill:0,piercearmor:10,twohandled:'yes'}
	}}

	},
	sword89: {id:'sword89',category:'swords',slot:'w3',width:60,height:60,caption:'��������� ��� �������',
		common: {weight:28,price:260,durability:50},
		required: {intuition:25,level:8,swordskill:5,endurance:30,strength:30},
		modify: {jumpaway:-20,dexterity:-2,strength:4},
		properties: {mindamage:21,maxdamage:40,criticalpower:16,criticalhit:60,swordskill:1,twohandled:'yes',blockzones:'+'},
		attacks: {thrust:'rare',sabre:'sometimes',crush:'rare',cut:'rare'}
	},
	sword106_kki8: {id:'sword106_kki8',category:'swords',slot:'w3',width:60,height:60,caption:'�������� ���',binding:'boe',
		common: {weight:20,price:280,durability:70},
		required: {dexterity:25,intuition:25,level:10,swordskill:5,endurance:35,strength:50},
		modify: {parry:10},
		properties: {mindamage:14,maxdamage:38,antijumpaway:80,swordskill:3,piercearmor:10,blockzones:'+'},
		attacks: {thrust:'small',sabre:'routinely',cut:'insignificant',dark:'insignificant'}
	},
	sword100: {id:'sword100',category:'swords',slot:'w3',width:60,height:60,caption:'��� ���������',description:'������� ���������� �������� ������ � ���������',requireditems:{shop:{exchanger:'shop', items: {mater14:{id:'mater14',caption:'������� �����',count:8},mater10:{id:'mater10',caption:'���� �������� ������',count:9}}}},
		common: {weight:25,price:330,durability:50},
		required: {dexterity:50,intuition:40,level:9,knifeskill:5,endurance:30,strength:25},
		modify: {dexterity:6},
		properties: {mindamage:17,maxdamage:51,criticalhit:180,twohandled:'yes',blockzones:'+'},
		setlink: {name:'misdeed'},
		attacks: {thrust:'sometimes',sabre:'small',air:'small'}
	},
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	sword210: {id:'sword210',category:'swords',slot:'w3',width:60,height:60,caption:'Smashing Sword',imp1:true,binding:'boe',
		common: {weight:15,price:170,durability:50,eprice:3.49},
		required: {level:8},
		modify: {parry:5},
		properties: {mindamage:10,maxdamage:30,antijumpaway:40,criticalhit:40,sabrepower:10,swordskill:2,blockzones:'+'},
		setlink: {name:'smash'},
		attacks: {thrust:'rare',sabre:'sometimes',crush:'rare',cut:'small'}
	},
	
	kostyl1: {id:'kostyl1',category:'crutches',slot:'w3',width:60,height:60,caption:'������� �������',description:'��� ������������ ������� � ������� �����',
		common: {weight:3,price:3,durability:100},
		required: {level:4},
		properties: {mindamage:3,maxdamage:10,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'sometimes',crush:'sometimes'}
	},
	kostyl2: {id:'kostyl2',category:'crutches',slot:'w3',width:60,height:60,caption:'����������� �������',description:'��� ������������ ������� � ������� �����',
		common: {weight:4,price:4,durability:110},
		required: {level:4},
		properties: {mindamage:5,maxdamage:10,secondweapon:'yes',blockzones:'+'},
		attacks: {thrust:'small',crush:'routinely'}
	},

 
	
	staff1: {id:'staff1',category:'staffs',slot:'w3',width:60,height:60,caption:'����� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:20}}}},
		common: {weight:4,price:100,durability:30},
		required: {intellect:20,level:4,staffskill:1},
		modify: {magicskill:1,hitpoints:30,mana:100},
		properties: {mindamage:1,maxdamage:10,twohandled:'yes',blockzones:'+'},
		attacks: {crush:'sometimes',earth:'sometimes'}
	},
	staff2: {id:'staff2',category:'staffs',slot:'w3',width:60,height:60,caption:'������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:30}}}},
		common: {weight:4,price:150,durability:30},
		required: {intellect:30,level:6,staffskill:2},
		modify: {magicpower:5,magicskill:1,hitpoints:33,mana:100},
		properties: {mindamage:1,maxdamage:15,twohandled:'yes',blockzones:'+'},
		attacks: {water:'sometimes',air:'sometimes'}
	},
	staff49: {id:'staff49',category:'staffs',slot:'w3',width:60,height:60,caption:'������� �����',
		common: {weight:4,price:200,durability:40},
		required: {intellect:25,level:7,staffskill:2,wisdom:30},
		modify: {magicpower:10,intellect:5,magicskill:1,defence:35,hitpoints:18},
		properties: {mindamage:1,maxdamage:18,twohandled:'yes',blockzones:'+'},
		attacks: {fire:'routinely',water:'insignificant',air:'insignificant',earth:'insignificant'}
	},
	staff3: {id:'staff3',category:'staffs',slot:'w3',width:60,height:60,caption:'����� �������',
		common: {weight:4,price:200,durability:30},
		required: {intellect:25,level:7,staffskill:2,endurance:15,strength:15,wisdom:30},
		modify: {magicpower:5,intellect:5,magicskill:1,magicdefence:10,hitpoints:18,mana:100},
		properties: {mindamage:1,maxdamage:18,twohandled:'yes',blockzones:'+'},
		attacks: {fire:'sometimes',air:'sometimes'}
	},
	staff50: {id:'staff50',category:'staffs',slot:'w3',width:60,height:60,caption:'����� ����',
		common: {weight:5,price:300,durability:50,probability:70},
		required: {intellect:40,level:8,staffskill:3,mana:80,wisdom:40},
		modify: {magicpower:10,intellect:5,magicskill:1,defence:50,hitpoints:33,manaconsumption:5},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
		magic: {name:'cureHP60',caption:'�������������� ������� 60HP',description:'5 ��. �� ���'},
		attacks: {air:'always'}
	},
	staff51: {id:'staff51',category:'staffs',slot:'w3',width:60,height:60,caption:'����� ��������',alignment:'light',
		common: {weight:5,price:330,durability:50,probability:70},
		required: {level:8,intellect:40,wisdom:40,mana:100},
		modify: {magicpower:10,intellect:5,magicskill:1,lightmagicskill:1,greymagicskill:1,magicdefence:20,defence:50,hitpoints:45,manaconsumption:5},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes'},
		magic: {name:'cureHP600',caption:'������� �������������� �������',description:'1 ��. �� ���'},
		attacks: {light:'always'}
	},
	
	staff52: {id:'staff52',category:'staffs',slot:'w3',width:60,height:60,caption:'����� ���������',requireditems:{shop:{exchanger:'shop', items: {mater24:{id:'mater24',caption:'���������',count:1},mater17:{id:'mater17',caption:'���� �������� ������',count:2}}}},
		common: {weight:5,price:360,durability:50,probability:70},
		required: {intellect:50,level:9,staffskill:3,mana:80,wisdom:50},
		modify: {magicdefencereduce:2,magicpower:15,intellect:6,firemagicskill:1,airmagicskill:1,watermagicskill:1,earthmagicskill:1,defence:50,hitpoints:60,manaconsumption:3},
		properties: {mindamage:1,maxdamage:20,twohandled:'yes',blockzones:'+'},
		magic: {name:'cureHP60',caption:'�������������� ������� 60HP',description:'6 ��. �� ���'},
		setlink: {name:'determination'},
		attacks: {fire:'always'}
	, upgrade: {
	staff52_fury: {id:'staff52_fury',caption:'����� ������',old:true,
		modify: {magicdefencereduce:3,magicpower:12,intellect:6,firemagicskill:1,airmagicskill:1,watermagicskill:1,earthmagicskill:1,defence:25,hitpoints:60,manaconsumption:3},
		properties: {mindamage:5,maxdamage:25,twohandled:'yes',blockzones:'+'},
		attacks: {fire:'sometimes',earth:'sometimes'}
	}}

	},
	
	
	
	

	


	

	
	
	
	
	
	
	
	
	
	
	apero1: {id:'apero1',category:'legendaryweapon',slot:'w3',width:60,height:60,caption:'������� ���� �����������',adjustment:true,artefact:true,
		common: {price:420,weight:1,durability:500},
		required: {level:8,strength:25,dexterity:25,intuition:25,endurance:25},
		modify: {strength:4,dexterity:4,intuition:4,intellect:4,parry:15,counterstroke:15,jumpaway:100},
		properties: {mindamage:20,maxdamage:30,antijumpaway:100,secondweapon:'yes',blockzones:'+'},
		attacks: {fire:'small',water:'small',air:'small',dark:'small',light:'small'}
	},
	boots1: {id:'boots1',category:'boots',slot:'w12',width:60,height:40,caption:'������� ������',old:true,
		common: {price:7,weight:2,durability:20},
		required: {strength:6,endurance:6,level:1},
		modify: {hitpoints:6,legarmor:3}
	},
	boots2: {id:'boots2',category:'boots',slot:'w12',width:60,height:40,caption:'�������� ������',old:true,
		common: {price:21,weight:3,durability:20},
		required: {strength:9,endurance:9,level:2},
		modify: {intuition:1,hitpoints:6,anticriticalhit:5,jumpaway:5,antijumpaway:5,legarmor:6}
	},
	boots5: {id:'boots5',category:'boots',slot:'w12',width:60,height:40,caption:'����������� ������',old:true,
		common: {price:22,weight:4,durability:20},
		required: {strength:9,endurance:9,level:2},
		modify: {dexterity:1,jumpaway:5,anticriticalhit:10,legarmor:6}
	},
	boots9: {id:'boots9',category:'boots',slot:'w12',width:60,height:40,caption:'�������� �������',
		common: {weight:3,price:24,durability:20},
		required: {level:2,endurance:9,strength:9},
		modify: {criticalhit:10,strength:2,legarmor1:1,legarmor2:6,legarmorm:1,legarmord:6}
	},
	boots8: {id:'boots8',category:'boots',slot:'w12',width:60,height:40,caption:'������� �������',
		common: {weight:5,price:30,durability:20},
		required: {level:2,endurance:9,strength:9},
		modify: {dexterity:1,intuition:1,hitpoints:6,strength:1,legarmor1:2,legarmor2:7,legarmorf:1,legarmorm:1,legarmord:6}
	},
	boots13: {id:'boots13',category:'boots',slot:'w12',width:60,height:40,caption:'���������� ������� ������',
		common: {weight:14,price:120,durability:50},
		required: {intuition:35,level:8,endurance:30,strength:30},
		modify: {anticriticalhit:30,antijumpaway:30,criticalhit:25,hitpoints:33,strength:4,legarmor1:9,legarmor2:32,legarmorf:8,legarmorm:1,legarmord:24},
		setlink: {name:'sunset'}
	, upgrade: {
	boots13_olditem: {id:'boots13_olditem',caption:'���������� �������',old:true,
		common: {weight:5,price:33,durability:40},
		required: {intuition:0,level:5,endurance:17,strength:17},
		modify: {anticriticalhit:0,antijumpaway:0,criticalhit:20,hitpoints:12,strength:0,legarmor1:6,legarmor2:20,legarmorf:5,legarmord:15,legarmorm:1}
	},
	boots13_rareitem: {id:'boots13_rareitem',caption:'���������� ������� [7]',old:true,
		required: {level:7}
	}}

	},
	boots12: {id:'boots12',category:'boots',slot:'w12',width:60,height:40,caption:'������������ ������',
		common: {weight:5,price:36,durability:30},
		required: {level:3,endurance:12,strength:12},
		modify: {anticriticalhit:7,antijumpaway:7,criticalhit:7,jumpaway:7,intuition:1,hitpoints:9,legarmor1:3,legarmor2:11,legarmorf:2,legarmorm:1,legarmord:9}
	},
	boots7: {id:'boots7',category:'boots',slot:'w12',width:60,height:40,caption:'�������� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:7}}}},
		common: {weight:6,price:36,durability:40},
		required: {level:5,endurance:17,strength:17},
		modify: {anticriticalhit:25,hitpoints:12,legarmor1:6,legarmor2:20,legarmorf:5,legarmorm:1,legarmord:15}
	},
	boots10: {id:'boots10',category:'boots',slot:'w12',width:60,height:40,caption:'������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:8}}}},
		common: {weight:4,price:37,durability:20},
		required: {level:4,endurance:15,strength:15},
		modify: {antijumpaway:20,jumpaway:25,hitpoints:15,legarmor1:2,legarmor2:10,legarmorf:1,legarmorm:1,legarmord:9}
	},
	boots3: {id:'boots3',category:'boots',slot:'w12',width:60,height:40,caption:'��������� ������� (��)',old:true,
		common: {price:40,weight:5,durability:40},
		required: {strength:15,endurance:15,level:4},
		modify: {hitpoints:9,anticriticalhit:5,jumpaway:15,antijumpaway:15,legarmor:9}
	},
	boots210: {id:'boots210',category:'boots',slot:'w12',width:60,height:40,caption:'������ �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:8}}}},
		common: {weight:4,price:40,durability:30},
		required: {intellect:20,level:4},
		modify: {anticriticalhit:20,hitpoints:15,mana:30,legarmor1:2,legarmor2:2}
	},
	boots11: {id:'boots11',category:'boots',slot:'w12',width:60,height:40,caption:'������ �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:9}}}},
		common: {weight:7,price:49,durability:50},
		required: {level:5,endurance:17,strength:17},
		modify: {hitpoints:45,strength:1,legarmor1:6,legarmor2:20,legarmorf:5,legarmorm:1,legarmord:15}
	},
	boots17: {id:'boots17',category:'boots',slot:'w12',width:60,height:40,caption:'�������� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:12}}}},
		common: {weight:6,price:61,durability:40},
		required: {level:6,endurance:20,strength:20},
		modify: {antijumpaway:50,dexterity:2,legarmor1:7,legarmor2:24,legarmorf:6,legarmorm:1,legarmord:18}
	},
	boots15: {id:'boots15',category:'boots',slot:'w12',width:60,height:40,caption:'������������ �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:13}}}},
		common: {weight:6,price:69,durability:30},
		required: {level:6,endurance:20,strength:20},
		modify: {anticriticalhit:15,antijumpaway:15,criticalhit:5,jumpaway:15,strength:4,legarmor1:6,legarmor2:20,legarmorf:5,legarmorm:1,legarmord:15}
	},
	boots19: {id:'boots19',category:'boots',slot:'w12',width:60,height:40,caption:'������ ������ ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:13}}}},
		common: {weight:5,price:69,durability:50},
		required: {intellect:15,level:6,endurance:20,strength:20},
		modify: {anticriticalhit:25,jumpaway:20,intellect:4,legarmor1:7,legarmor2:24,legarmorf:6,legarmorm:1,legarmord:18}
	},
	boots211: {id:'boots211',category:'boots',slot:'w12',width:60,height:40,caption:'������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:14}}}},
		common: {weight:4,price:70,durability:30},
		required: {intellect:30,level:6,endurance:15,strength:10},
		modify: {anticriticalhit:25,intellect:1,hitpoints:18,mana:50,legarmor1:4,legarmor2:12,legarmorf:3,legarmorm:1,legarmord:9}
	},
	boots18: {id:'boots18',category:'boots',slot:'w12',width:60,height:40,caption:'������ ������',
		common: {weight:3,price:90,durability:30},
		required: {level:7,endurance:25,strength:25},
		modify: {anticriticalhit:15,antijumpaway:15,dexterity:1,watermagicdefence:15,airmagicdefence:15,earthmagicdefence:15,hitpoints:33,legarmor1:6,legarmor2:29,legarmorf:5,legarmorm:1,legarmord:24},
		setlink: {name:'forest'}
	, upgrade: {
	boots18_olditem: {id:'boots18_olditem',old:true,
		common: {price:79,weight:3,durability:30},
		required: {level:5,endurance:17,strength:17},
		modify: {anticriticalhit:0,antijumpaway:0,watermagicdefence:50,airmagicdefence:0,earthmagicdefence:50,hitpoints:21,legarmor1:4,legarmor2:15,legarmorf:3,legarmord:12,jumpaway:10,dexterity:1,legarmorm:1}
	}}

	},
	boots209: {id:'boots209',category:'boots',slot:'w12',width:60,height:40,caption:'���������� ������',
		common: {weight:4,price:100,durability:30},
		required: {intellect:25,level:7,endurance:20,strength:15},
		modify: {anticriticalhit:30,intellect:5,hitpoints:24,legarmor1:5,legarmor2:16,legarmorf:4,legarmorm:1,legarmord:12},
		properties: {defence:25}
	},
	boots212: {id:'boots212',category:'boots',slot:'w12',width:60,height:40,caption:'������ �������',
		common: {weight:4,price:100,durability:30},
		required: {intellect:25,level:7,endurance:20,strength:15},
		modify: {anticriticalhit:40,magicpower:2,hitpoints:36,legarmor1:6,legarmor2:20,legarmorf:5,legarmorm:1,legarmord:15},
		properties: {defence:35}
	},
	boots28: {id:'boots28',category:'boots',slot:'w12',width:60,height:40,caption:'������� ������',
		common: {weight:8,price:111,durability:50},
		required: {dexterity:45,intuition:25,level:8,endurance:15,strength:15},
		modify: {anticriticalhit:30,jumpaway:45,counterstroke:3,magicdefence:20,hitpoints:33,legarmor1:10,legarmor2:33,legarmorf:9,legarmorm:1,legarmord:24},
		properties: {defence:10},
		setlink: {name:'flash'}
	},
	boots14: {id:'boots14',category:'boots',slot:'w12',width:60,height:40,caption:'������ ����',
		common: {weight:8,price:111,durability:50},
		required: {dexterity:25,intuition:25,level:8,endurance:30,strength:30},
		modify: {anticriticalhit:50,jumpaway:50,magicdefence:30,legarmor1:11,legarmor2:34,legarmorf:10,legarmorm:1,legarmord:24}
	},
	boots16: {id:'boots16',category:'boots',slot:'w12',width:60,height:40,caption:'������ �����',
		common: {weight:8,price:120,durability:50},
		required: {intuition:30,level:8,endurance:30,strength:30},
		modify: {antijumpaway:60,criticalhit:40,magicdefence:30,legarmor1:11,legarmor2:34,legarmorf:10,legarmorm:1,legarmord:24}
	},
	boots6: {id:'boots6',category:'boots',slot:'w12',width:60,height:40,caption:'������ �������� ����',
		common: {weight:13,price:120,durability:60},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:30,antijumpaway:15,firemagicdefence:20,watermagicdefence:-20,hitpoints:24,strength:2,legarmor1:9,legarmor2:32,legarmorf:8,legarmorm:1,legarmord:24},
		properties: {defence:50},
		setlink: {name:'firedown'}
	, upgrade: {
	boots6_olditem: {id:'boots6_olditem',caption:'�������� ������',old:true,
		common: {weight:3,price:9,durability:20},
		required: {dexterity:0,intuition:0,level:1,endurance:6,strength:6},
		modify: {anticriticalhit:0,antijumpaway:0,firemagicdefence:0,watermagicdefence:0,hitpoints:0,strength:1,legarmor1:1,legarmor2:3,legarmorf:0,legarmord:3,legarmorm:1},
		properties: {defence:50}
	}}

	},
	boots4: {id:'boots4',category:'boots',slot:'w12',width:60,height:40,caption:'������� ������',
		common: {weight:15,price:128,durability:40},
		required: {level:8,endurance:40,strength:25},
		modify: {anticriticalhit:20,antijumpaway:15,jumpaway:-30,dexterity:-2,hitpoints:66,legarmor1:31,legarmor2:75,legarmorf:30,legarmorm:1,legarmord:45},
		properties: {defence:50},
		setlink: {name:'siege'}
	, upgrade: {
	boots4_olditem: {id:'boots4_olditem',caption:'������ ������� �������',old:true,
		common: {weight:15,price:128,durability:40},
		required: {level:8,endurance:40,strength:25},
		modify: {anticriticalhit:25,antijumpaway:20,jumpaway:-30,dexterity:-2,hitpoints:66,legarmor1:31,legarmor2:75,legarmorf:30,legarmorm:1,legarmord:45},
		properties: {defence:75}
	}}
	},
	boots31: {id:'boots31',category:'boots',slot:'w12',width:60,height:40,caption:'������ �������������',
		common: {weight:5,price:120,durability:40},
		required: {intellect:25,level:8,endurance:20,strength:15,wisdom:30},
		modify: {hitpoints:45,mana:70, legarmor1:4,legarmor2:9,legarmorf:3,legarmorm:1,legarmord:6},
		properties: {defence:50},
 	setlink: {name:'rashness'}
	},
	boots21: {id:'boots21',category:'boots',slot:'w12',width:60,height:40,caption:'������ �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater12:{id:'mater12',caption:'�����',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:50,jumpaway:50,magicdefence:30,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		properties: {defence:50},
		setlink: {name:'spider'}
	, upgrade: {
	boots21_1: {id:'boots21_1',category:'boots',slot:'w12',width:60,height:40,caption:'������ ����� [10]',binding:'boe',baseitem:'boots21',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},boots21:{id:'boots21',caption:'������ �����',count:1}}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:50,jumpaway:50,magicdefence:40,hitpoints:24,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:50},
		setlink: {name:''}
	}}

	},
	boots21_1: {id:'boots21_1',category:'boots',slot:'w12',width:60,height:40,caption:'������ ����� [10]',binding:'boe',baseitem:'boots21',clist:{_:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},boots21:{id:'boots21',caption:'������ �����',count:1}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:50,jumpaway:50,magicdefence:40,hitpoints:24,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:50},
		setlink: {name:''}
	},
	boots22: {id:'boots22',category:'boots',slot:'w12',width:60,height:40,caption:'������� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater5:{id:'mater5',caption:'������',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:30,antijumpaway:30,criticalhit:25,magicdefence:10,defence:25,hitpoints:33,strength:2,legarmor1:9,legarmor2:35,legarmorf:8,legarmorm:1,legarmord:27},
		setlink: {name:'bloodmoon'}
	, upgrade: {
	boots22_1: {id:'boots22_1',category:'boots',slot:'w12',width:60,height:40,caption:'������� �������� ���� [10]',binding:'boe',baseitem:'boots22',clist:{_:{sp_mat1:{id:'sp_mat1',caption:'�������� �����',count:1},mater30:{id:'mater30',caption:'����� ���',count:3},boots22:{id:'boots22',caption:'������� �������� ����',count:1}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:30,antijumpaway:30,criticalhit:25,magicdefence:20,defence:25,hitpoints:54,strength:2,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		setlink: {name:''}
	}}

	},
	boots22_1: {id:'boots22_1',category:'boots',slot:'w12',width:60,height:40,caption:'������� �������� ���� [10]',binding:'boe',baseitem:'boots22',clist:{_:{sp_mat1:{id:'sp_mat1',caption:'�������� �����',count:1},mater30:{id:'mater30',caption:'����� ���',count:3},boots22:{id:'boots22',caption:'������� �������� ����',count:1}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:30,antijumpaway:30,criticalhit:25,magicdefence:20,defence:25,hitpoints:54,strength:2,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		setlink: {name:''}
	},
	boots23: {id:'boots23',category:'boots',slot:'w12',width:60,height:40,caption:'������ ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater6:{id:'mater6',caption:'�������� ������',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {anticriticalhit:20,antijumpaway:20,dexterity:-2,hitpoints:66,legarmor1:35,legarmor2:84,legarmorf:34,legarmorm:1,legarmord:50},
		properties: {defence:50},
		setlink: {name:'losttime'}
	, upgrade: {
	boots23_1: {id:'boots23_1',category:'boots',slot:'w12',width:60,height:40,caption:'������ ������� ������ [10]',binding:'boe',baseitem:'boots23',clist:{_:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},boots23:{id:'boots23',caption:'������ ������� ������',count:1}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:30,antijumpaway:30,dexterity:-2,hitpoints:90,legarmor1:41,legarmor2:90,legarmorf:40,legarmorm:1,legarmord:50},
		properties: {defence:50},
		setlink: {name:''}
	}}

	},
	boots23_1: {id:'boots23_1',category:'boots',slot:'w12',width:60,height:40,caption:'������ ������� ������ [10]',binding:'boe',baseitem:'boots23',clist:{_:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},boots23:{id:'boots23',caption:'������ ������� ������',count:1}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:30,antijumpaway:30,dexterity:-2,hitpoints:90,legarmor1:41,legarmor2:90,legarmorf:40,legarmorm:1,legarmord:50},
		properties: {defence:50},
		setlink: {name:''}
	},
	boots24_du2: {id:'boots24_du2',category:'boots',slot:'w12',width:60,height:40,caption:'������ ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:1},mater2:{id:'mater2',caption:'������',count:5}}}},
		common: {weight:13,price:150,durability:60},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:30,antijumpaway:15,firemagicdefence:10,watermagicdefence:-10,hitpoints:33,strength:2,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		properties: {defence:75},
		setlink: {name:'morningsun'}
	, upgrade: {
	boots24_du2_1: {id:'boots24_du2_1',category:'boots',slot:'w12',width:60,height:40,caption:'������ ��������� ������ [10]',requireditems:{shop:{exchanger:'shop', items: {boots24_du2:{id:'boots24_du2',caption:'������ ��������� ������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:13,price:180,durability:60},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:40,antijumpaway:25,firemagicdefence:20,watermagicdefence:-10,hitpoints:44,strength:2,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:80},
		setlink: {name:''}
     }}
	},
	boots24_du2_1: {id:'boots24_du2_1',category:'boots',slot:'w12',width:60,height:40,caption:'������ ��������� ������ [10]',requireditems:{shop:{exchanger:'shop', items: {boots24_du2:{id:'boots24_du2',caption:'������ ��������� ������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:13,price:180,durability:60},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:40,antijumpaway:25,firemagicdefence:20,watermagicdefence:-10,hitpoints:44,strength:2,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:80},
		setlink: {name:''}
	},
	boots25: {id:'boots25',category:'boots',slot:'w12',width:60,height:40,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:1},mater1:{id:'mater1',caption:'����� ��������� �����',count:5}}}},
		common: {weight:5,price:150,durability:50},
		required: {intellect:40,level:9,wisdom:50},
		modify: {magicdefencereduce:1,magicpower:5,hitpoints:24,mana:60,legarmor1:5,legarmor2:16,legarmorf:4,legarmorm:1,legarmord:12},
		properties: {defence:50},
		setlink: {name:'determination'}
	, upgrade: {
    boots25_1: {id:'boots25_1',category:'boots',slot:'w12',width:60,height:40,caption:'������ ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {boots25:{id:'boots25',caption:'������ ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:5,price:180,durability:50},
		required: {intellect:50,level:10,wisdom:60,angelsreputation:10000},
		modify: {magicdefencereduce:1,magicpower:7,hitpoints:29,mana:70,legarmor1:6,legarmor2:20,legarmorf:5,legarmorm:1,legarmord:15},
		properties: {defence:55},
		setlink: {name:''}
     },
	boots25_old: {id:'boots25_old',caption:'������ ������',old:true
	}}

	},
	boots25_1: {id:'boots25_1',category:'boots',slot:'w12',width:60,height:40,caption:'������ ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {boots25:{id:'boots25',caption:'������ ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:5,price:180,durability:50},
		required: {intellect:50,level:10,wisdom:60,angelsreputation:10000},
		modify: {magicdefencereduce:1,magicpower:7,hitpoints:29,mana:70,legarmor1:6,legarmor2:20,legarmorf:5,legarmorm:1,legarmord:15},
		properties: {defence:55},
		setlink: {name:''}
	},
	boots26: {id:'boots26',category:'boots',slot:'w12',width:60,height:40,caption:'������� ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:1},mater10:{id:'mater10',caption:'���� �������� ������',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {anticriticalhit:20,criticalhit:30,jumpaway:50,dexterity:4,magicdefence:20,defence:20,legarmor1:9,legarmor2:35,legarmorf:8,legarmorm:1,legarmord:27},
		setlink: {name:'misdeed'}
	,upgrade:{
		boots26_1: {id:'boots26_1',category:'boots',slot:'w12',width:60,height:40,caption:'������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {boots26:{id:'boots26',caption:'������� ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25,angelsreputation:10000},
		modify: {anticriticalhit:25,criticalhit:40,jumpaway:60,dexterity:4,magicdefence:25,defence:25,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		setlink: {name:''}
       }}
	},
	boots26_1: {id:'boots26_1',category:'boots',slot:'w12',width:60,height:40,caption:'������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {boots26:{id:'boots26',caption:'������� ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25,angelsreputation:10000},
		modify: {anticriticalhit:25,criticalhit:40,jumpaway:60,dexterity:4,magicdefence:25,defence:25,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		setlink: {name:''}
	},
	boots27: {id:'boots27',category:'boots',slot:'w12',width:60,height:40,caption:'������� ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater3:{id:'mater3',caption:'�������',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {anticriticalhit:50,antijumpaway:30,criticalhit:25,defence:25,hitpoints:45,strength:1,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		setlink: {name:'scorpion'}
    , upgrade: {
    	boots27_1: {id:'boots27_1',category:'boots',slot:'w12',width:60,height:40,caption:'������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {boots27:{id:'boots27',caption:'������� ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:60,antijumpaway:40,criticalhit:35,defence:30,hitpoints:49,strength:1,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		setlink: {name:''}
      }}
	},
	boots27_1: {id:'boots27_1',category:'boots',slot:'w12',width:60,height:40,caption:'������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {boots27:{id:'boots27',caption:'������� ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:10,price:180,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:60,antijumpaway:40,criticalhit:35,defence:30,hitpoints:49,strength:1,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		setlink: {name:''}
     },
	aboots2_dk2kd9: {id:'aboots2_dk2kd9',category:'boots',slot:'w12',width:60,height:40,caption:'������ ��������� �����',binding:'bop',
		common: {weight:10,price:310,durability:100},
		required: {dexterity:50,intuition:20,level:10,endurance:35,strength:50},
		modify: {anticriticalhit:70,jumpaway:70,dexterity:6,intuition:2,magicdefence:40,hitpoints:54,legarmor1:14,legarmor2:52,legarmorf:13,legarmorm:1,legarmord:39},
		properties: {defence:75}
	},
	dmboots: {id:'dmboots',category:'boots',slot:'w12',width:60,height:40,caption:'������� ���� ������',binding:'bop',
		common: {price:20,durability:50,expirationdate:60},
		required: {level:4,sex:'male'},
		
	},
	sboots: {id:'sboots',category:'boots',slot:'w12',width:60,height:40,caption:'������� ����������',binding:'bop',
		common: {price:22,durability:50,expirationdate:60},
		required: {level:4,sex:'female'},
		
	},

	


	
	
	
	
	
	
	boots208: {id:'boots208',category:'boots',slot:'w12',width:60,height:40,caption:'Smashing Boots',imp1:true,binding:'boe',
		common: {weight:6,durability:30,eprice:2.39},
		required: {level:8},
		modify: {anticriticalhit:40,antijumpaway:50,magicdefence:20,hitpoints:33,legarmor1:11,legarmor2:34,legarmorf:10,legarmorm:1,legarmord:24},
		properties: {defence:25},
		setlink: {name:'smash'}
	},
	boots213: {id:'boots213',category:'boots',slot:'w12',width:60,height:40,caption:'Desert Boots',imp1:true,binding:'boe',
		common: {weight:6,durability:30,eprice:2.39},
		required: {level:8},
		modify: {anticriticalhit:50,antijumpaway:40,magicdefence:20,hitpoints:33,legarmor1:11,legarmor2:34,legarmorf:10,legarmorm:1,legarmord:24},
		properties: {defence:25},
		setlink: {name:'wanderer'}
	},
	
	
	
	
	
	
	
	
	naruchi2: {id:'naruchi2',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������',old:true,
		common: {price:10,weight:2,durability:20},
		required: {strength:7,dexterity:7,level:2},
		modify: {knifeskill:1}
	},
	naruchi3: {id:'naruchi3',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ���������',old:true,
		common: {price:10,weight:2,durability:20},
		required: {strength:8,dexterity:7,level:2},
		modify: {axeskill:1}
	},
	naruchi4: {id:'naruchi4',category:'gauntlets',slot:'w11',width:60,height:40,caption:'���������� ��������',old:true,
		common: {price:10,weight:2,durability:20},
		required: {strength:8,dexterity:7,level:2},
		modify: {swordskill:1}
	},
	naruchi6: {id:'naruchi6',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������',old:true,
		common: {price:10,weight:2,durability:20},
		required: {strength:9,dexterity:7,level:2},
		modify: {clubskill:1}
	},
	naruchi50: {id:'naruchi50',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ����������',
		common: {weight:1,price:10,durability:20},
		required: {dexterity:10,level:1,strength:7},
		modify: {axeskill:1}
	},
	naruchi52: {id:'naruchi52',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ���������',
		common: {weight:2,price:10,durability:20},
		required: {dexterity:8,level:1,strength:8},
		modify: {swordskill:1}
	},
	naruchi69: {id:'naruchi69',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �����������',
		common: {weight:2,price:10,durability:20},
		required: {dexterity:7,level:1,strength:12},
		modify: {clubskill:1}
	},
	naruchi1: {id:'naruchi1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �����������',old:true,
		common: {price:20,weight:3,durability:50},
		required: {level:1},
		modify: {knifeskill:1,clubskill:1,axeskill:1,swordskill:1}
	},
	naruchi62: {id:'naruchi62',category:'gauntlets',slot:'w11',width:60,height:40,caption:'��������� �������� �������',
		common: {weight:2,price:24,durability:30},
		required: {dexterity:20,level:3,strength:15},
		modify: {antijumpaway:5,jumpaway:5,axeskill:2}
	},
	naruchi59: {id:'naruchi59',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������',
		common: {weight:2,price:25,durability:30},
		required: {dexterity:12,level:3,strength:12},
		modify: {anticriticalhit:2,antijumpaway:3,criticalhit:2,jumpaway:3,swordskill:2}
	},
	naruchi60: {id:'naruchi60',category:'gauntlets',slot:'w11',width:60,height:40,caption:'��������� ��������',
		common: {weight:2,price:25,durability:30},
		required: {dexterity:10,level:3,strength:15},
		modify: {criticalhit:10,clubskill:2}
	},
	naruchi54: {id:'naruchi54',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:3,price:29,durability:30},
		required: {dexterity:15,level:4,strength:20},
		modify: {anticriticalhit:5,hitpoints:18,strength:2}
	},
	naruchi5: {id:'naruchi5',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������',old:true,
		common: {price:30,weight:4,durability:20},
		required: {strength:12,dexterity:15,level:4},
		modify: {swordskill:2}
	},
	naruchi7: {id:'naruchi7',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� ���������',old:true,
		common: {price:30,weight:4,durability:20},
		required: {strength:13,dexterity:15,level:4},
		modify: {axeskill:2}
	},
	naruchi9: {id:'naruchi9',category:'gauntlets',slot:'w11',width:60,height:40,caption:'���������� �������� ��������',old:true,
		common: {price:30,weight:4,durability:20},
		required: {strength:15,dexterity:15,level:4},
		modify: {clubskill:2}
	},
	gloves1: {id:'gloves1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:1,price:30,durability:30},
		required: {intellect:20,level:4},
		modify: {staffskill:1,hitpoints:6,mana:30}
	},
	naruchi61: {id:'naruchi61',category:'gauntlets',slot:'w11',width:60,height:40,caption:'������� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:3,price:30,durability:30},
		required: {dexterity:25,level:4,strength:15},
		modify: {antijumpaway:15,jumpaway:30,dexterity:1}
	},
	naruchi70: {id:'naruchi70',category:'gauntlets',slot:'w11',width:60,height:40,caption:'��������� �������� ���',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:1,price:30,durability:30},
		required: {dexterity:20,level:4,strength:20},
		modify: {strength:1,maxdamage:6,mindamage:3}
	},
	naruchi65: {id:'naruchi65',category:'gauntlets',slot:'w11',width:60,height:40,caption:'��������� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:7}}}},
		common: {weight:2,price:31,durability:20},
		required: {dexterity:10,level:4,endurance:15,strength:15},
		modify: {anticriticalhit:5,hitpoints:45}
	},
	naruchi58: {id:'naruchi58',category:'gauntlets',slot:'w11',width:60,height:40,caption:'���������� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:7}}}},
		common: {weight:3,price:31,durability:30},
		required: {dexterity:25,level:4,strength:10},
		modify: {anticriticalhit:5,antijumpaway:5,counterstroke:5,swordskill:1}
	},
	naruchi51: {id:'naruchi51',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:7}}}},
		common: {weight:3,price:38,durability:50},
		required: {dexterity:20,level:5,strength:15},
		modify: {weaponskill:1,hitpoints:30}
	},
	naruchi57: {id:'naruchi57',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:8}}}},
		common: {weight:3,price:42,durability:30},
		required: {dexterity:20,level:5,strength:20},
		modify: {magicdefence:20,airmagicdefence:30}
	},
	naruchi66: {id:'naruchi66',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������� �������',magic1:'�����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:10}}}},
		common: {weight:3,price:50,durability:50},
		required: {dexterity:15,level:6,strength:15},
		modify: {watermagicdefence:10}
	},
	naruchi71: {id:'naruchi71',category:'gauntlets',slot:'w11',width:60,height:40,caption:'������� ��������',magic1:'������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:10}}}},
		common: {weight:3,price:50,durability:50},
		required: {dexterity:15,level:6,strength:15},
		modify: {airmagicdefence:10}
	},
	naruchi72: {id:'naruchi72',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������� ����',magic1:'����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:10}}}},
		common: {weight:3,price:50,durability:50},
		required: {dexterity:15,level:6,strength:15},
		modify: {firemagicdefence:10}
	},
	naruchi64: {id:'naruchi64',category:'gauntlets',slot:'w11',width:60,height:40,caption:'���������� �������� ���������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:11}}}},
		common: {weight:3,price:55,durability:30},
		required: {dexterity:25,level:5,strength:15},
		modify: {sabrepower:6,axeskill:3}
	},
	naruchi63: {id:'naruchi63',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:11}}}},
		common: {weight:3,price:55,durability:30},
		required: {dexterity:15,level:5,strength:25},
		modify: {crushpower:3,clubskill:3}
	},
	naruchi68: {id:'naruchi68',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:11}}}},
		common: {weight:3,price:55,durability:30},
		required: {dexterity:20,level:5,strength:20},
		modify: {sabrepower:4,cutpower:2,swordskill:3}
	},
	gloves2: {id:'gloves2',category:'gauntlets',slot:'w11',width:60,height:40,caption:'������� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:11}}}},
		common: {weight:1,price:55,durability:30},
		required: {intellect:25,level:5,endurance:10},
		modify: {intellect:1,staffskill:1,defence:10,hitpoints:12,mana:30}
	},
	naruchi74: {id:'naruchi74',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:14}}}},
		common: {weight:4,price:74,durability:50},
		required: {dexterity:30,intuition:30,level:6,endurance:10,strength:10},
		modify: {knifeskill:4}
	},
	naruchi55: {id:'naruchi55',category:'gauntlets',slot:'w11',width:60,height:40,caption:'������ ��������',
		common: {weight:2,price:100,durability:20},
		required: {dexterity:25,level:7,endurance:25,strength:25},
		modify: {anticriticalhit:20,antijumpaway:20,intuition:1,weaponskill:2,watermagicdefence:10,airmagicdefence:10,earthmagicdefence:10,strength:2},
		setlink: {name:'forest'}
	, upgrade: {
	naruchi55_olditem: {id:'naruchi55_olditem',old:true,
		common: {price:30,weight:2,durability:20},
		required: {dexterity:15,level:4,endurance:0,strength:15,intuition:10},
		modify: {anticriticalhit:0,antijumpaway:0,swordskill:0,clubskill:0,knifeskill:0,axeskill:0,airmagicdefence:10,strength:0,intuition:1,watermagicdefence:20,earthmagicdefence:20}
	}}

	},
	naruchi10: {id:'naruchi10',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������',old:true,alignment:'light',
		common: {price:100,weight:5,durability:30},
		required: {strength:12,dexterity:16,level:4},
		modify: {hitpoints:60,knifeskill:2,clubskill:2,axeskill:2,swordskill:2}
	},
	naruchi53: {id:'naruchi53',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������',alignment:'light',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:20}}}},
		common: {weight:3,price:100,durability:50},
		required: {dexterity:20,level:6,strength:15},
		modify: {anticriticalhit:5,antijumpaway:5,criticalhit:5,jumpaway:5,weaponskill:2,hitpoints:72,strength:1}
	},
	naruchi56: {id:'naruchi56',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������',
		common: {weight:1,price:100,durability:30},
		required: {intuition:35,level:7,endurance:30,strength:30},
		modify: {criticalpower:20,weaponskill:2},
		setlink: {name:'sunset'}
	, upgrade: {
	naruchi56_olditem: {id:'naruchi56_olditem',caption:'�������� �������',old:true,
		common: {price:31,weight:1,durability:30},
		required: {intuition:20,level:4,endurance:0,strength:15,dexterity:10},
		modify: {criticalpower:5,swordskill:0,clubskill:0,knifeskill:0,axeskill:0}
	}}

	},
	naruchi67: {id:'naruchi67',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������� ����',
		common: {weight:1,price:100,durability:30},
		required: {dexterity:20,intuition:20,level:7,endurance:20,strength:20},
		modify: {antijumpaway:25,firemagicpower:15,swordskill:2,clubskill:2,knifeskill:2,axeskill:2,firemagicdefence:10,watermagicdefence:-10},
		setlink: {name:'firedown'}
	},
	naruchi80: {id:'naruchi80',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ���������� ������',
		common: {weight:1,price:100,durability:30},
		required: {intellect:35,level:7,watermagicskill:5,endurance:20,wisdom:35},
		modify: {watermagicdefencereduce:9,intellect:1,manaconsumption:1}
	},
	naruchi90: {id:'naruchi90',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������ �����',
		common: {weight:1,price:144,durability:50},
		required: {dexterity:10,intuition:50,level:8,endurance:25,strength:25},
		modify: {criticalpower:10,criticalhit:25,intuition:3,weaponskill:3}
	},
	gloves90: {id:'gloves90',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������������',
		common: {weight:1,price:120,durability:40},
		required: {intellect:30,level:8,endurance:20,wisdom:40},
		modify: {magicpower:5,intellect:1,staffskill:1,hitpoints:30,mana:90},
 	setlink: {name:'rashness'}
	},
	gloves206: {id:'gloves206',category:'gauntlets',slot:'w11',width:60,height:40,caption:'���������� ��������',
		common: {weight:1,price:100,durability:20},
		required: {intellect:20,level:7,endurance:20,wisdom:30},
		modify: {magicdefencereduce:2,intellect:4,staffskill:1,magicdefence:10,defence:10}
	},
	gloves3: {id:'gloves3',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������',
		common: {weight:1,price:100,durability:30},
		required: {intellect:25,level:7,endurance:15,strength:15,wisdom:30},
		modify: {magicdefencereduce:1,magicpower:5,staffskill:1,defence:25,hitpoints:21}
	},
	naruchi8: {id:'naruchi8',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������',old:true,alignment:'dark',
		common: {price:110,weight:3,durability:30,probability:70},
		required: {intellect:3,level:5},
		magic: {name:'friendly_blood',caption:'������������� �����',description:'5 ��. �� ���'}
	},
	gloves204: {id:'gloves204',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������� ����',
		common: {weight:1,price:130,durability:30},
		required: {intellect:30,level:8,endurance:20,wisdom:40},
		modify: {magicdefencereduce:5,staffskill:2,magicdefence:10,hitpoints:15}
	},

	naruchi78: {id:'naruchi78',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater12:{id:'mater12',caption:'�����',count:3}}}},
		common: {weight:1,price:130,durability:30},
		required: {dexterity:50,intuition:15,level:8,endurance:30,strength:30},
		modify: {anticriticalhit:35,dexterity:4,weaponskill:3,strength:1},
		setlink: {name:'spider'}
	, upgrade: {
	naruchi78_1: {id:'naruchi78_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ����� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi78:{id:'naruchi78',caption:'�������� �����',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {anticriticalhit:50,jumpaway:20,dexterity:4,hitpoints:14,strength:1},
		setlink: {name:''}
		},
	naruchi78_olditem: {id:'naruchi78_olditem',old:true,
		required: {dexterity:45,intuition:10,level:8,endurance:25,strength:25}
	}}

	},
	naruchi78_1: {id:'naruchi78_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ����� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi78:{id:'naruchi78',caption:'�������� �����',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {anticriticalhit:50,jumpaway:20,dexterity:4,weaponskill:3,hitpoints:14,strength:1},
		setlink: {name:''}
	},

	naruchi79: {id:'naruchi79',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater6:{id:'mater6',caption:'�������� ������',count:3}}}},
		common: {weight:1,price:130,durability:30},
		required: {dexterity:15,intuition:15,level:8,endurance:50,strength:45},
		modify: {anticriticalhit:40,weaponskill:3,magicdefence:20,strength:1},
		setlink: {name:'losttime'}
	,upgrade: {
	naruchi79_1: {id:'naruchi79_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������� ������ [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi79:{id:'naruchi79',caption:'�������� ������� ������',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,sandreputation:10000},
		modify: {anticriticalhit:50,magicdefence:30,hitpoints:16,strength:1},
		setlink: {name:''}

	}}
	},
	naruchi79_1: {id:'naruchi79_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ������� ������ [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi79:{id:'naruchi79',caption:'�������� ������� ������',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,sandreputation:10000},
		modify: {anticriticalhit:50,weaponskill:3,magicdefence:30,hitpoints:16,strength:1},
		setlink: {name:''}
	},
	naruchi83_du2: {id:'naruchi83_du2',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:1},mater2:{id:'mater2',caption:'������',count:3}}}},
		common: {weight:1,price:130,durability:30},
		required: {dexterity:25,intuition:25,level:8,endurance:30,strength:30},
		modify: {anticriticalhit:30,parry:4,weaponskill:3,strength:2},
		setlink: {name:'morningsun'}
	, upgrade: {
	naruchi83_du2_1: {id:'naruchi83_du2_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� ������ [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi83_du2:{id:'naruchi83_du2',caption:'�������� ��������� ������',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:25,intuition:25,level:10,endurance:45,strength:45,sandreputation:10000},
		modify: {anticriticalhit:50,parry:5,strength:2,hitpoints:14},
		setlink: {name:''}
    }}
	},
	naruchi83_du2_1: {id:'naruchi83_du2_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� ������ [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi83_du2:{id:'naruchi83_du2',caption:'�������� ��������� ������',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:25,intuition:25,level:10,endurance:45,strength:45,sandreputation:10000},
		modify: {anticriticalhit:50,parry:5,weaponskill:3,strength:2,hitpoints:14},
		setlink: {name:''}
	},
	naruchi85: {id:'naruchi85',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:1},mater10:{id:'mater10',caption:'���� �������� ������',count:3}}}},
		common: {weight:1,price:130,durability:30},
		required: {dexterity:50,intuition:40,level:8,endurance:30,strength:25},
		modify: {anticriticalhit:30,jumpaway:25,dexterity:2,intuition:2,weaponskill:3},
		setlink: {name:'misdeed'}
	, upgrade: {
		naruchi85_1: {id:'naruchi85_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi85:{id:'naruchi85',caption:'�������� ���������',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,sandreputation:10000},
		modify: {anticriticalhit:45,jumpaway:40,dexterity:2,intuition:2,hitpoints:17},
		setlink: {name:''}
		}}
	},
	naruchi85_1: {id:'naruchi85_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi85:{id:'naruchi85',caption:'�������� ���������',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,sandreputation:10000},
		modify: {anticriticalhit:45,jumpaway:40,dexterity:2,intuition:2,weaponskill:3,hitpoints:17},
		setlink: {name:''}
	},
	naruchi86: {id:'naruchi86',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater3:{id:'mater3',caption:'�������',count:3}}}},
		common: {weight:1,price:130,durability:30},
		required: {dexterity:15,intuition:45,level:8,endurance:45,strength:35},
		modify: {antijumpaway:40,criticalhit:5,parry:1,weaponskill:3,strength:3},
		setlink: {name:'scorpion'}
	, upgrade: {
	naruchi86_1: {id:'naruchi86_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi86:{id:'naruchi86',caption:'�������� ���������',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,sandreputation:10000},
		modify: {antijumpaway:50,criticalhit:15,parry:2,hitpoints:17,strength:3},
		setlink: {name:''}
	 }}
	},
	naruchi86_1: {id:'naruchi86_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi86:{id:'naruchi86',caption:'�������� ���������',count:1}}}},
		common: {weight:1,price:155,durability:30},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,sandreputation:10000},
		modify: {antijumpaway:50,criticalhit:15,parry:2,weaponskill:3,hitpoints:17,strength:3},
		setlink: {name:''}
	},
	naruchi77: {id:'naruchi77',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater5:{id:'mater5',caption:'������',count:3}}}},
		common: {weight:1,price:131,durability:30},
		required: {dexterity:15,intuition:50,level:8,endurance:30,strength:30},
		modify: {criticalpower:10,antijumpaway:30,criticalhit:5,weaponskill:3,strength:1},
		setlink: {name:'bloodmoon'}
    , upgrade: {
    naruchi77_1: {id:'naruchi77_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������� ���� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi77:{id:'naruchi77',caption:'�������� �������� ����',count:1}}}},
		common: {weight:1,price:131,durability:30},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {criticalpower:13,antijumpaway:40,criticalhit:5,hitpoints:16,strength:1},
		setlink: {name:''}
 	}}

	},
	naruchi77_1: {id:'naruchi77_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� �������� ���� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi77:{id:'naruchi77',caption:'�������� �������� ����',count:1}}}},
		common: {weight:1,price:131,durability:30},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {criticalpower:13,antijumpaway:40,criticalhit:5,weaponskill:3,hitpoints:16,strength:1},
		setlink: {name:''}
    },


	naruchi84: {id:'naruchi84',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ���������',requireditems:{shop:{exchanger:'shop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:1},mater1:{id:'mater1',caption:'����� ��������� �����',count:6}}}},
		common: {weight:1,price:160,durability:50},
		required: {intellect:40,level:9,wisdom:50},
		modify: {magicdefencereduce:5,magicpower:2,intellect:2,staffskill:2,magicdefence:10,hitpoints:18},
		setlink: {name:'determination'}
	, upgrade: {
	naruchi84_1: {id:'naruchi84_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi84:{id:'naruchi84',caption:'�������� ���������',count:1}}}},
		common: {weight:1,price:185,durability:50},
		required: {intellect:50,level:10,wisdom:60,sandreputation:10000},
		modify: {magicdefencereduce:5,magicpower:4,intellect:2,staffskill:2,magicdefence:20,hitpoints:25},
		setlink: {name:''}
     },
	naruchi84_fury: {id:'naruchi84_fury',caption:'�������� ������',old:true,
		modify: {magicdefencereduce:5,magicpower:2,intuition:1,intellect:1,staffskill:2,magicdefence:10,hitpoints:18}
	}}

	},
	naruchi84_1: {id:'naruchi84_1',category:'gauntlets',slot:'w11',width:60,height:40,caption:'�������� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},naruchi84:{id:'naruchi84',caption:'�������� ���������',count:1}}}},
		common: {weight:1,price:185,durability:50},
		required: {intellect:50,level:10,wisdom:60,sandreputation:10000},
		modify: {magicdefencereduce:5,magicpower:4,intellect:2,staffskill:2,magicdefence:20,hitpoints:25},
		setlink: {name:''}
	},
	dmnaruchi: {id:'dmnaruchi',category:'gauntlets',slot:'w11',width:60,height:40,caption:'������� ���� ������',binding:'bop',
		common: {price:20,durability:50,expirationdate:60},
		required: {level:4,sex:'male'},
		
	},
	snaruchi: {id:'snaruchi',category:'gauntlets',slot:'w11',width:60,height:40,caption:'������� ����������',binding:'bop',
		common: {price:22,durability:50,expirationdate:60},
		required: {level:4,sex:'female'},
		
	},
	
	
	
	
	
	gloves205: {id:'gloves205',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Smashing Gloves',imp1:true,binding:'boe',
		common: {weight:3,durability:30,eprice:2.59},
		required: {level:8},
		modify: {criticalpower:5,antijumpaway:30,criticalhit:30,intuition:2,weaponskill:3,strength:2},
		setlink: {name:'smash'}
	},
	gloves207: {id:'gloves207',category:'gauntlets',slot:'w11',width:60,height:40,caption:'Desert Gloves',imp1:true,binding:'boe',
		common: {weight:3,durability:30,eprice:2.59},
		required: {level:8},
		modify: {antijumpaway:30,parry:5,counterstroke:5,dexterity:2,weaponskill:3},
		setlink: {name:'wanderer'}
	},
	
	
 	
	
	
	
	
	roba1: {id:'roba1',category:'shirts',slot:'wshirt',width:60,height:80,caption:'�������',old:true,
		common: {price:2,weight:1,durability:10},
		modify: {hitpoints:3}
	},
	
	roba6: {id:'roba6',category:'shirts',slot:'wshirt',width:60,height:80,caption:'���� �����',old:true,
		common: {price:5,weight:2,durability:20},
		required: {strength:6,level:1},
		modify: {hitpoints:3,jumpaway:5,antijumpaway:5,bodyarmor1:1,bodyarmor2:1,bodyarmorm:1,bodyarmord:1}
	},
	
	
	roba5: {id:'roba5',category:'shirts',slot:'wshirt',width:60,height:80,caption:'������� ������',old:true,
		common: {price:7,weight:2,durability:20},
		required: {endurance:5,level:1},
		modify: {hitpoints:9,bodyarmor1:1,bodyarmor2:1,bodyarmorm:1,bodyarmord:1}
	},
	roba12: {id:'roba12',category:'shirts',slot:'wshirt',width:60,height:80,caption:'������ ����',
		common: {weight:2,price:15,durability:30},
		required: {level:1,endurance:5,strength:5},
		modify: {hitpoints:6,strength:1,bodyarmor1:1,bodyarmor2:3,bodyarmorm:1,bodyarmord:3}
	},
	roba13: {id:'roba13',category:'shirts',slot:'wshirt',width:60,height:80,caption:'������ ��������',
		common: {weight:2,price:15,durability:30},
		required: {level:1,endurance:5,strength:5},
		modify: {dexterity:1,hitpoints:6,bodyarmor1:1,bodyarmor2:3,bodyarmorm:1,bodyarmord:3}
	},
	roba14: {id:'roba14',category:'shirts',slot:'wshirt',width:60,height:80,caption:'�������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:3}}}},
		common: {weight:2,price:15,durability:30},
		required: {level:4,endurance:15,strength:15},
		modify: {firemagicdefence:10,watermagicdefence:10,airmagicdefence:10,earthmagicdefence:10,hitpoints:3}
	},
	
	roba_s1: {id:'roba_s1',category:'shirts',slot:'wshirt',width:60,height:80,caption:'�������� ��',
		common: {eprice:6.49,weight:1,durability:20},
		required: {level:2},
		modify: {strength:4,hitpoints:10,criticalhit:10,anticriticalhit:10}
	, upgrade: {
	roba_s1_level4: {id:'roba_s1_level4',level:4,
		common: {eprice:8.49},
		required: {level:4},
		modify: {strength:5,hitpoints:20,criticalhit:20,antijumpaway:20,anticriticalhit:20}
	},
	roba_s1_level5: {id:'roba_s1_level5',level:5,
		common: {eprice:12.99,weight:1,durability:20},
		required: {level:5},
		modify: {strength:6,hitpoints:35,criticalhit:30,antijumpaway:30,anticriticalhit:30}
	},
	roba_s1_level6: {id:'roba_s1_level6',level:6,
		common: {eprice:19.99,weight:1,durability:20},
		required: {level:6},
		modify: {strength:7,hitpoints:45,criticalhit:40,antijumpaway:40,anticriticalhit:40,weaponskill:1}
	},
	roba_s1_level7: {id:'roba_s1_level7',level:7,
		common: {eprice:29.99,weight:1,durability:25},
		required: {level:7},
		modify: {strength:8,hitpoints:60,criticalhit:50,antijumpaway:50,anticriticalhit:50,weaponskill:1}
	}}

	},
	roba12_1: {id:'roba12_1',category:'shirts',slot:'wshirt',width:60,height:80,caption:'������� ������ ����',
		common: {price:29,weight:2,durability:30},
		required: {level:7,endurance:25,strength:10},
		modify: {hitpoints:15,strength:2,bodyarmor1:5,bodyarmor2:5}
	},
	roba12_2: {id:'roba12_2',category:'shirts',slot:'wshirt',width:60,height:80,caption:'������� ������ ��������',
		common: {price:27,weight:2,durability:30},
		required: {level:7,endurance:25,strength:10},
		modify: {jumpaway:15,dexterity:2,bodyarmor1:5,bodyarmor2:5}
	},
	roba12_3: {id:'roba12_3',category:'shirts',slot:'wshirt',width:60,height:80,caption:'������� ������ ��������',
		common: {price:29,weight:2,durability:30},
		required: {level:7,endurance:25,strength:10},
		modify: {criticalhit:15,intuition:2,bodyarmor1:5,bodyarmor2:5}
	},
	roba12_4: {id:'roba12_4',category:'shirts',slot:'wshirt',width:60,height:80,caption:'������� ������ ����������',
		common: {price:29,weight:2,durability:30},
		required: {level:7,endurance:25,strength:10},
		modify: {mana:15,intellect:2,bodyarmor1:5,bodyarmor2:5}
	},
	
	
  	
	
	roba_s5: {id:'roba_s5',category:'shirts',slot:'wshirt',width:60,height:80,caption:'�������� ����������',
		common: {eprice:29.99,weight:1,durability:25},
		required: {level:7},
		modify: {intellect:10,greymagicskill:1,hitpoints:50,mana:50,manaspeed:30}
	},
	
	
	cloak2: {id:'cloak2',category:'capes',slot:'wcape',width:60,height:80,caption:'���� ������',
		common: {weight:1,price:200,durability:100},
		required: {level:8,capitalreputation:10000},
		magic: {name:'sp_tacpts_KRT2',caption:'������� �����: 2',description:'1 ��. �� ���'}
	},
	cloak2_1: {id:'cloak2_1',category:'capes',slot:'wcape',width:60,height:80,caption:'���� ������',
		common: {weight:1,price:200,durability:100},
		required: {level:8,capitalreputation:10000},
		magic: {name:'sp_tacpts_HIT3',caption:'������� ���: 3',description:'1 ��. �� ���'}
	},
	cloak2_2: {id:'cloak2_2',category:'capes',slot:'wcape',width:60,height:80,caption:'���� ������',
		common: {weight:1,price:200,durability:100},
		required: {level:8,capitalreputation:10000},
		magic: {name:'sp_tacpts_PRY1',caption:'������� ���������: 1',description:'1 ��. �� ���'}
	},
	cloak2_3: {id:'cloak2_3',category:'capes',slot:'wcape',width:60,height:80,caption:'���� ������',
		common: {weight:1,price:200,durability:100},
		required: {level:8,capitalreputation:10000},
		magic: {name:'sp_tacpts_BLK2',caption:'������� ������: 2',description:'1 ��. �� ���'}
	},
	cloak2_4: {id:'cloak2_4',category:'capes',slot:'wcape',width:60,height:80,caption:'���� ������',
		common: {weight:1,price:200,durability:100},
		required: {level:8,capitalreputation:10000},
		magic: {name:'sp_tacpts_CNTR2',caption:'������� ������: 2',description:'1 ��. �� ���'}
	},
	cloak23f1: {id:'cloak23f1',category:'capes',slot:'wcape',width:60,height:80,caption:'����������� ����',
		common: {weight:1,price:100,durability:100},
		required: {level:8},
		modify: {hitpoints:6}
	},
	cloak23f2: {id:'cloak23f2',category:'capes',slot:'wcape',width:60,height:80,caption:'����� ����������� ����',
		common: {weight:1,price:300,durability:100},
		required: {level:10},
		modify: {strength:1,dexterity:1,intuition:1,intellect:1,hitpoints:6}
	},
	cloak201: {id:'cloak201',category:'capes',slot:'wcape',width:60,height:80,caption:'Romantic Red Cloak [8]',binding:'boe',
		common: {weight:1,durability:50,eprice:2.49},
		required: {level:8},
		modify: {strength:1,dexterity:1,intuition:1,intellect:1,magicdefence:10,hitpoints:50}
	},
	cloak204: {id:'cloak204',category:'capes',slot:'wcape',width:60,height:80,caption:'Romantic Blue Cloak [8]',binding:'boe',
		common: {weight:1,durability:50,eprice:2.49},
		required: {level:8},
		modify: {strength:1,dexterity:1,intuition:1,intellect:1,defence:10,hitpoints:50}
	},
	cloak202: {id:'cloak202',category:'capes',slot:'wcape',width:60,height:80,caption:'Romantic Red Cloak [9]',binding:'boe',
		common: {weight:1,durability:50,eprice:4.99},
		required: {level:9},
		modify: {strength:2,dexterity:2,intuition:2,intellect:2,magicdefence:20,hitpoints:60}
	},
	cloak205: {id:'cloak205',category:'capes',slot:'wcape',width:60,height:80,caption:'Romantic Blue Cloak [9]',binding:'boe',
		common: {weight:1,durability:50,eprice:4.99},
		required: {level:9},
		modify: {strength:2,dexterity:2,intuition:2,intellect:2,defence:20,hitpoints:60}
	},
	cloak203: {id:'cloak203',category:'capes',slot:'wcape',width:60,height:80,caption:'Romantic Red Cloak [10]',binding:'boe',
		common: {weight:1,durability:50,eprice:9.99},
		required: {level:10},
		modify: {strength:3,dexterity:3,intuition:3,intellect:3,magicdefence:30,hitpoints:70}
	},
	cloak206: {id:'cloak206',category:'capes',slot:'wcape',width:60,height:80,caption:'Romantic Blue Cloak [10]',binding:'boe',
		common: {weight:1,durability:50,eprice:9.99},
		required: {level:10},
		modify: {strength:3,dexterity:3,intuition:3,intellect:3,defence:30,hitpoints:70}
	},
	


	gilet1: {id:'gilet1',category:'lightarmors',slot:'w4',width:60,height:80,caption:'�����',old:true,
		common: {price:12,weight:4,durability:20},
		required: {strength:7,endurance:7,level:1},
		modify: {hitpoints:9,jumpaway:15,bodyarmor:3}
	},
	roba11: {id:'roba11',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������� ���������',old:true,
		common: {price:15,weight:3,durability:20},
		required: {strength:7,endurance:7,level:1},
		modify: {hitpoints:3,axeskill:1,bodyarmor:2}
	},
	roba2: {id:'roba2',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������� ���������',old:true,
		common: {price:15,weight:3,durability:20},
		required: {strength:7,endurance:7,level:1},
		modify: {hitpoints:3,clubskill:1,bodyarmor:2}
	},
	roba10: {id:'roba10',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������� �������',old:true,
		common: {price:15,weight:3,durability:20},
		required: {strength:7,endurance:7,level:1},
		modify: {hitpoints:3,swordskill:1,bodyarmor:2}
	},
	roba7: {id:'roba7',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������� ���������',old:true,
		common: {price:21,weight:2,durability:20},
		required: {endurance:6,level:1},
		modify: {hitpoints:30,bodyarmor:1}
	},
	roba9: {id:'roba9',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������� ��������',old:true,
		common: {price:70,weight:1,durability:30},
		required: {strength:10,endurance:10,level:4},
		modify: {strength:4,dexterity:1,intuition:1,intellect:2,knifeskill:1,clubskill:1,axeskill:1,swordskill:1,bodyarmor1:1,bodyarmor2:3,bodyarmorm:1,bodyarmord:3}
	},
	roba17: {id:'roba17',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:20}}}},
		common: {weight:5,price:100,durability:50},
		required: {intellect:20,level:4},
		modify: {anticriticalhit:10,magicskill:1,hitpoints:30,mana:80,bodyarmor1:6,bodyarmor2:10,bodyarmorf:5,bodyarmorm:1,bodyarmord:5}
	},
	suit1: {id:'suit1',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������ 1',old:true,
		common: {price:100,durability:100},
		required: {level:1}
	},
	roba18: {id:'roba18',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:34}}}},
		common: {weight:5,price:170,durability:50},
		required: {intellect:30,level:6,endurance:15,strength:10},
		modify: {anticriticalhit:15,magicpower:5,magicskill:1,hitpoints:48,mana:90,bodyarmor1:4,bodyarmor2:10,bodyarmorf:3,bodyarmorm:1,bodyarmord:7},
		properties: {defence:25}
	},
	roba19: {id:'roba19',category:'lightarmors',slot:'w4',width:60,height:80,caption:'���� �������',
		common: {weight:5,price:220,durability:50},
		required: {intellect:25,level:7,endurance:15,strength:15,wisdom:30},
		modify: {anticriticalhit:25,magicpower:7,magicdefence:20,hitpoints:24,mana:120,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		properties: {defence:50}
	},
	roba50: {id:'roba50',category:'lightarmors',slot:'w4',width:60,height:80,caption:'���� ��������',
		common: {weight:5,price:300,durability:50},
		required: {intellect:40,level:8,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:20,magicpower:20,hitpoints:24,mana:100,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		properties: {defence:100}
	},
	roba15: {id:'roba15',category:'lightarmors',slot:'w4',width:60,height:80,caption:'���� ����',
		common: {weight:5,price:300,durability:50},
		required: {intellect:40,level:8,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:30,firemagicpower:30,intellect:3,magicdefence:20,hitpoints:33,mana:130,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		properties: {defence:50}
	},
	roba52: {id:'roba52',category:'lightarmors',slot:'w4',width:60,height:80,caption:'���� �������������',
		common: {weight:5,price:300,durability:50},
		required: {intellect:40,level:8,endurance:15,strength:15,wisdom:40},
		modify: {magicpower:25,magicskill:1,hitpoints:36,mana:100,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		properties: {defence:50},
  setlink: {name:'rashness'}
	},
	roba53: {id:'roba53',category:'lightarmors',slot:'w4',width:60,heigth:80,caption:'������� �������� ����',binding:'boe',
       common: {weight:5,price:659,durability:100},
       required: {intellect:75,level:10,wisdom:50},
       modify: {magicdefencereduce:5,magicpower:30,defence:100,intellect:10,hitpoints:100,mana:200,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmorm:1,bodyarmord:15}
   },
	roba51: {id:'roba51',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater24:{id:'mater24',caption:'���������',count:1},mater1:{id:'mater1',caption:'����� ��������� �����',count:8}}}},
		common: {weight:5,price:380,durability:50},
		required: {intellect:40,level:9,wisdom:50},
		modify: {anticriticalhit:25,magicdefencereduce:3,magicpower:20,hitpoints:42,mana:120,bodyarmor1:5,bodyarmor2:16,bodyarmorf:4,bodyarmorm:1,bodyarmord:12},
		properties: {defence:100},
		setlink: {name:'determination'}
	, upgrade: {
   roba51_1: {id:'roba51_1',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������ ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},roba51:{id:'roba51',caption:'������ ���������',count:1}}}},
		common: {weight:5,price:455,durability:50},
		required: {intellect:50,level:10,wisdom:60,demonsreputation:10000},
		modify: {anticriticalhit:40,magicdefencereduce:3,magicpower:25,hitpoints:59,mana:150,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmorm:1,bodyarmord:15},
		properties: {defence:105},
		setlink: {name:''}
     },
	roba51_old: {id:'roba51_old',caption:'������ ������',old:true
	}}

	},
	roba51_1: {id:'roba51_1',category:'lightarmors',slot:'w4',width:60,height:80,caption:'������ ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},roba51:{id:'roba51',caption:'������ ���������',count:1}}}},
		common: {weight:5,price:455,durability:50},
		required: {intellect:50,level:10,wisdom:60,demonsreputation:10000},
		modify: {anticriticalhit:40,magicdefencereduce:3,magicpower:25,hitpoints:59,mana:150,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmorm:1,bodyarmord:15},
		properties: {defence:105},
		setlink: {name:''}
	},
	gilet200: {id:'gilet200',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Leather Armor',imp1:true,
		common: {weight:5,price:30,durability:40,eprice:6},
		required: {level:2,endurance:10,strength:10},
		modify: {jumpaway:15,hitpoints:18,strength:1,bodyarmor1:5,bodyarmor2:16,bodyarmorf:4,bodyarmorm:1,bodyarmord:12},
		defences: {crush:'mediocre',thrust:'weak'}
	, upgrade: {
	gilet200_olditem: {id:'gilet200_olditem',old:true,
		common: {weight:4,price:17,durability:20,eprice:3.4},
		required: {level:2,endurance:10,strength:10},
		modify: {hitpoints:6,bodyarmor:6,jumpaway:15,strength:1,bodyarmor1:5,bodyarmor2:16,bodyarmorf:4,bodyarmorm:1,bodyarmord:12}
	}}

	},
	gilet201: {id:'gilet201',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Battle Shirt',imp1:true,
		common: {weight:2,price:50,durability:20,eprice:10},
		required: {level:3,endurance:9,strength:9},
		modify: {dexterity:2,swordskill:2,hitpoints:6,strength:3,bodyarmor1:2,bodyarmor2:4,bodyarmorf:1,bodyarmorm:1,bodyarmord:3}
	},
	gilet202: {id:'gilet202',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Knight�s Shirt',imp1:true,
		common: {weight:2,price:70,durability:20,eprice:14},
		required: {level:4,endurance:10,strength:10},
		modify: {intuition:2,axeskill:2,hitpoints:33,strength:4,bodyarmor1:3,bodyarmor2:8,bodyarmorf:2,bodyarmorm:1,bodyarmord:6}
	},
	roba21: {id:'roba21',category:'lightarmors',slot:'w4',width:60,height:80,caption:'Mystic Energy Robe',imp1:true,binding:'boe',
		common: {weight:5,price:205,durability:50,eprice:41},
		required: {intellect:25,level:7,endurance:15,wisdom:30},
		modify: {anticriticalhit:60,magicpower:10,magicdefence:20,hitpoints:54,mana:100,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		properties: {defence:50}
	},
	roba200: {id:'roba200',category:'lightarmors',slot:'w4',width:60,height:80,caption:'FireWind Robe',imp1:true,
		common: {weight:5,price:219,durability:50,eprice:43.8},
		required: {intellect:30,level:7,endurance:10,strength:10,wisdom:30},
		modify: {anticriticalhit:25,firemagicpower:25,intellect:4,firemagicdefence:70,hitpoints:33,mana:50,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		properties: {defence:75}
	, upgrade: {
	roba200_olditem: {id:'roba200_olditem',old:true,
		common: {price:215,weight:5,durability:50,eprice:43},
		required: {intellect:30,level:7,endurance:10,strength:10,wisdom:30},
		modify: {anticriticalhit:0,intellect:0,hitpoints:18,firemagicpower:25,firemagicdefence:70,mana:50,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		properties: {defence:75}
	}}

	},

	
	
	
	
	
	

	aarmordc: {id:'aarmordc',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ ����� ��������',old:true,artefact:true,alignment:'dark',
		common: {weight:25,durability:500},
		modify: {strength:5,dexterity:6,intuition:6,hitpoints:90,criticalhit:60,anticriticalhit:80,jumpaway:30,antijumpaway:80,weaponskill:5,bodyarmor:25}
	},

	armorl1: {id:'armorl1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ ������',old:true,
		common: {price:19,weight:8,durability:50},
		required: {strength:9,dexterity:9,endurance:6,level:2},
		modify: {hitpoints:12,anticriticalhit:5,bodyarmor:6}
	},
	armor2: {id:'armor2',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������',old:true,
		common: {price:23,weight:8,durability:50},
		required: {strength:9,endurance:9,level:2},
		modify: {hitpoints:12,anticriticalhit:3,dexterity:1,bodyarmor:6}
	},
	armor77: {id:'armor77',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'�������� ����� �����',
		common: {weight:4,price:29,durability:50},
		required: {level:2,endurance:10,strength:10},
		modify: {hitpoints:33,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9}
	},
	armor80: {id:'armor80',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ �������',
		common: {weight:6,price:31,durability:50},
		required: {level:2,endurance:12,strength:12},
		modify: {hitpoints:24,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18},
		defences: {crush:'good',thrust:'normal',cut:'good',sabre:'normal'}
	},
	armor100: {id:'armor100',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ ���������',
		common: {weight:7,price:32,durability:40},
		required: {level:2,endurance:10,strength:10},
		modify: {anticriticalhit:5,criticalhit:6,hitpoints:12,strength:1,bodyarmor1:5,bodyarmor2:16,bodyarmorf:4,bodyarmorm:1,bodyarmord:12},
		defences: {thrust:'mediocre',cut:'good',sabre:'mediocre'}
	},
	armor4: {id:'armor4',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� ���������',old:true,
		common: {price:30,weight:9,durability:50},
		required: {strength:9,endurance:9,level:2},
		modify: {hitpoints:12,anticriticalhit:15,jumpaway:-5,bodyarmor:6}
	},
	armor5: {id:'armor5',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������������ ����',old:true,
		common: {price:35,weight:10,durability:50},
		required: {strength:9,endurance:9,level:2},
		modify: {hitpoints:21,anticriticalhit:15,jumpaway:-10,bodyarmor:6}
	},
	armor66: {id:'armor66',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����������� �����',
		common: {weight:4,price:68,durability:50},
		required: {dexterity:17,intuition:17,level:3,endurance:5,strength:5},
		modify: {anticriticalhit:5,jumpaway:35,counterstroke:5,dexterity:1,firemagicdefence:25,bodyarmor1:2,bodyarmor2:5,bodyarmorf:1,bodyarmorm:1,bodyarmord:4}
	},
	armor69: {id:'armor69',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'��������� �����',
		common: {weight:6,price:71,durability:50},
		required: {dexterity:10,intuition:10,level:3,endurance:10,strength:10},
		modify: {anticriticalhit:25,sabrepower:5,swordskill:2,bodyarmor1:3,bodyarmor2:9,bodyarmorf:2,bodyarmorm:1,bodyarmord:7}
	},
	armor101: {id:'armor101',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� �������� �����',
		common: {weight:11,price:74,durability:70},
		required: {level:3,endurance:15,strength:15},
		modify: {anticriticalhit:5,hitpoints:18,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18},
		properties: {defence:50},
		defences: {crush:'good',cut:'magnificent'}
	},
	armor75: {id:'armor75',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ ���������',
		common: {weight:12,price:76,durability:50},
		required: {dexterity:5,intuition:5,level:3,endurance:15,strength:15},
		modify: {anticriticalhit:35,antijumpaway:10,shieldblock:3,dexterity:1,hitpoints:24,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmorm:1,bodyarmord:15},
		defences: {crush:'good',thrust:'weak'}
	},
	armor61: {id:'armor61',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'�������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:18}}}},
		common: {weight:10,price:90,durability:50},
		required: {dexterity:5,intuition:5,level:4,endurance:17,strength:17},
		modify: {anticriticalhit:15,jumpaway:-10,clubskill:1,hitpoints:24,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18},
		properties: {crushdefence:20},
		defences: {thrust:'weak'}
	, upgrade: {
	armor61_olditem: {id:'armor61_olditem',old:true,
		common: {price:78,weight:10,durability:50},
		required: {level:3,dexterity:5,intuition:5,endurance:17,strength:17},
		modify: {anticriticalhit:20,hitpoints:18,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmord:15,defence:25,jumpaway:-10,clubskill:1,bodyarmorm:1},
		properties: {crushdefence:75}
	}}

	},
	armor81: {id:'armor81',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ���������',
		common: {weight:9,price:80,durability:50},
		required: {dexterity:5,intuition:5,level:3,endurance:15,strength:15},
		modify: {anticriticalhit:5,dexterity:2,intuition:2,hitpoints:33,strength:2,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmorm:1,bodyarmord:15}
	},
	armor63: {id:'armor63',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'�������� �����',
		common: {weight:25,price:220,durability:50},
		required: {intuition:25,level:7,endurance:25,strength:25},
		modify: {criticalpower:20,anticriticalhit:30,criticalhit:50,airmagicdefence:100,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27},
		properties: {sabredefence:75}
	, upgrade: {
	armor63_olditem: {id:'armor63_olditem',old:true,
		common: {weight:12,price:80,durability:50},
		required: {intuition:7,level:3,endurance:20,strength:20,dexterity:7},
		modify: {criticalpower:0,anticriticalhit:25,criticalhit:0,airmagicdefence:30,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmord:15,jumpaway:25,sabredefence:75,bodyarmorm:1},
		properties: {sabredefence:75}
	}}

	},
	armor58: {id:'armor58',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� �������',
		common: {weight:10,price:80,durability:50},
		required: {dexterity:5,intuition:5,level:3,endurance:20,strength:15},
		modify: {anticriticalhit:35,hitpoints:66,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21}
	},
	armor52: {id:'armor52',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'��������� ���������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:20}}}},
		common: {weight:14,price:97,durability:40},
		required: {dexterity:15,level:4,endurance:15,strength:15},
		modify: {anticriticalhit:15,antijumpaway:5,jumpaway:15,dexterity:2,intuition:2,hitpoints:12,strength:4,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmorm:1,bodyarmord:15},
		defences: {crush:'good',thrust:'weak'}
	},
	armor64: {id:'armor64',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'���������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:18}}}},
		common: {weight:18,price:90,durability:50},
		required: {dexterity:7,intuition:7,level:4,endurance:22,strength:22},
		modify: {anticriticalhit:15,antijumpaway:15,weaponskill:2,hitpoints:33,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18},
		defences: {crush:'normal',thrust:'mediocre',cut:'good',sabre:'normal'}
	, upgrade: {
	armor64_olditem: {id:'armor64_olditem',old:true,
		common: {price:98,weight:18,durability:50},
		required: {dexterity:7,intuition:7,level:4,endurance:22,strength:22},
		modify: {swordskill:0,clubskill:0,knifeskill:0,axeskill:0,hitpoints:6,shieldblock:10,magicdefence:10,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18,anticriticalhit:15,antijumpaway:15}
	}}

	},
	armor3: {id:'armor3',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������������ ���������',old:true,
		common: {price:74,weight:7,durability:100},
		required: {strength:15,endurance:15,level:3},
		modify: {hitpoints:21,anticriticalhit:25,jumpaway:10,knifeskill:1,clubskill:1,axeskill:1,swordskill:1,bodyarmor:6}
	},
	armor51: {id:'armor51',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� �������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:20}}}},
		common: {weight:23,price:101,durability:80},
		required: {level:5,endurance:25,strength:25},
		modify: {anticriticalhit:20,defence:25,hitpoints:27,strength:1,bodyarmor1:6,bodyarmor2:26,bodyarmorf:5,bodyarmorm:1,bodyarmord:21},
		properties: {defence:5},
		defences: {crush:'good',thrust:'mediocre',cut:'magnificent',sabre:'normal'}
	},
	armor83: {id:'armor83',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:21}}}},
		common: {weight:17,price:103,durability:50},
		required: {dexterity:7,intuition:7,level:4,endurance:22,strength:22},
		modify: {antijumpaway:25,criticalhit:30,jumpaway:45,intuition:2,hitpoints:33,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18},
		defences: {thrust:'weak'}
	},
	armor60: {id:'armor60',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'���������� ���������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:26}}}},
		common: {weight:18,price:130,durability:50},
		required: {dexterity:7,intuition:7,level:5,endurance:25,strength:25},
		modify: {anticriticalhit:30,antijumpaway:20,clubskill:1,hitpoints:33,strength:1,bodyarmor1:8,bodyarmor2:31,bodyarmorf:7,bodyarmorm:1,bodyarmord:24},
		properties: {crushdefence:20},
		defences: {thrust:'mediocre',cut:'magnificent'}
	, upgrade: {
	armor60_olditem: {id:'armor60_olditem',old:true,
		common: {price:105,weight:18,durability:50},
		required: {level:4,endurance:22,strength:22,dexterity:7,intuition:7},
		modify: {anticriticalhit:20,antijumpaway:15,clubskill:0,strength:2,hitpoints:33,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmord:18,shieldblock:5,bodyarmorm:1},
		properties: {crushdefence:0,defence:25}
	}}

	},
	armor82: {id:'armor82',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������������ �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:22}}}},
		common: {weight:15,price:106,durability:50},
		required: {dexterity:7,intuition:7,level:4,endurance:20,strength:20},
		modify: {anticriticalhit:20,criticalhit:20,jumpaway:20,hitpoints:6,piercearmor:20,strength:4,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18},
		defences: {thrust:'mediocre'}
	},
	armor98: {id:'armor98',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:22}}}},
		common: {weight:9,price:106,durability:50},
		required: {dexterity:22,intuition:22,level:4,endurance:7,strength:7},
		modify: {antijumpaway:30,thrustpower:5,knifeskill:2,hitpoints:18,strength:3,bodyarmor1:3,bodyarmor2:8,bodyarmorf:2,bodyarmorm:1,bodyarmord:6},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'normal'}
	},
	armor59: {id:'armor59',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'��������� �����',
		common: {weight:11,price:115,durability:60},
		required: {dexterity:14,intuition:14,level:4,endurance:14,strength:14},
		modify: {dexterity:2,intuition:2,hitpoints:18,strength:2,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		properties: {sabredefence:125}
	},
	armor88: {id:'armor88',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� �������� ����',
		common: {weight:23,price:301,durability:50},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:75,antijumpaway:40,parry:5,magicdefence:30,firemagicdefence:50,hitpoints:66,strength:4,bodyarmor1:11,bodyarmor2:40,bodyarmorf:10,bodyarmorm:1,bodyarmord:30},
		properties: {defence:50},
		setlink: {name:'firedown'},
		defences: {crush:'weak',thrust:'weak'}
	, upgrade: {
	armor88_olditem: {id:'armor88_olditem',caption:'����� ����',old:true,
		common: {price:117,weight:23,durability:50},
		required: {dexterity:9,intuition:9,level:5,endurance:25,strength:25},
		modify: {anticriticalhit:0,antijumpaway:0,parry:0,magicdefence:0,firemagicdefence:90,hitpoints:24,strength:0,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmord:21,dexterity:6,bodyarmorm:1},
		properties: {defence:50}
	}}

	},
	armor86: {id:'armor86',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ �����',
		common: {weight:18,price:221,durability:40},
		required: {level:7,endurance:25,strength:30},
		modify: {anticriticalhit:25,antijumpaway:25,dexterity:1,intuition:1,watermagicdefence:20,airmagicdefence:20,earthmagicdefence:20,hitpoints:24,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24},
		properties: {defence:125},
		setlink: {name:'forest'},
		defences: {thrust:'weak',cut:'good'}
	, upgrade: {
	armor86_olditem: {id:'armor86_olditem',old:true,
		common: {price:128,weight:18,durability:40},
		required: {level:5,endurance:20,strength:20},
		modify: {anticriticalhit:15,antijumpaway:5,watermagicdefence:30,airmagicdefence:10,earthmagicdefence:30,hitpoints:18,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmord:18,parry:2,jumpaway:30,magicdefence:10,dexterity:1,intuition:1,bodyarmorm:1},
		properties: {defence:125}
	}}

	},
	armor53: {id:'armor53',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:25}}}},
		common: {weight:16,price:128,durability:40},
		required: {dexterity:25,level:5,endurance:10,strength:15},
		modify: {anticriticalhit:15,antijumpaway:25,parry:5,jumpaway:50,dexterity:2,hitpoints:18,strength:2,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmorm:1,bodyarmord:15},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good'}
	},
	armor56: {id:'armor56',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� ����� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:25}}}},
		common: {weight:24,price:128,durability:70},
		required: {intuition:20,level:5,endurance:25,strength:25},
		modify: {criticalpower:5,anticriticalhit:30,criticalhit:40,hitpoints:33,strength:4,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21},
		defences: {crush:'mediocre',thrust:'normal',cut:'good',sabre:'normal'}
	, upgrade: {
	armor56_olditem: {id:'armor56_olditem',old:true,
		common: {weight:24,price:128,durability:70},
		required: {intuition:20,level:5,endurance:25,strength:25},
		modify: {anticriticalhit:25,criticalhit:35,hitpoints:21,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21,criticalpower:5,strength:4}
	}}

	},
	armor55: {id:'armor55',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� ������ �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:25}}}},
		common: {weight:25,price:128,durability:80},
		required: {level:5,endurance:25,strength:25},
		modify: {anticriticalhit:40,hitpoints:33,bodyarmor1:7,bodyarmor2:30,bodyarmorf:6,bodyarmorm:1,bodyarmord:24},
		properties: {defence:15},
		defences: {crush:'good',thrust:'mediocre',cut:'magnificent',sabre:'normal'}
	},
	armor102: {id:'armor102',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'��������� ������ ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:26}}}},
		common: {weight:20,price:132,durability:80},
		required: {dexterity:20,intuition:20,level:5,endurance:15,strength:15},
		modify: {anticriticalhit:20,antijumpaway:20,thrustpower:25,hitpoints:24,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21},
		defences: {thrust:'weak',cut:'good',sabre:'good'}
	, upgrade: {
	armor102_olditem: {id:'armor102_olditem',old:true,
		common: {weight:20,price:132,durability:80},
		required: {dexterity:20,intuition:20,level:5,endurance:25,strength:25},
		modify: {anticriticalhit:20,antijumpaway:-10,thrustpower:35,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21}
	}}

	},
	armor79: {id:'armor79',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� ��������������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:34}}}},
		common: {weight:28,price:170,durability:60},
		required: {dexterity:15,intuition:15,level:6,endurance:25,strength:25},
		modify: {anticriticalhit:40,antijumpaway:40,strength:2,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24},
		properties: {crushdefence:200},
		defences: {crush:'good',thrust:'normal',cut:'good',sabre:'good'}
	, upgrade: {
	armor79_olditem: {id:'armor79_olditem',old:true,
		common: {weight:24,price:136,durability:50},
		required: {dexterity:9,intuition:9,level:5,endurance:25,strength:25},
		modify: {anticriticalhit:25,antijumpaway:50,strength:0,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmord:21,magicdefence:40,bodyarmorm:1},
		properties: {crushdefence:0}
	}}

	},
	armor8: {id:'armor8',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� ����� ������',old:true,
		common: {price:145,weight:25,durability:100},
		required: {strength:25,endurance:25,level:5},
		modify: {hitpoints:33,criticalhit:25,anticriticalhit:25,antijumpaway:20,strength:4,intellect:1,knifeskill:1,clubskill:1,axeskill:1,swordskill:1,bodyarmor:18}
	},
	armor57: {id:'armor57',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ��������� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:34}}}},
		common: {weight:23,price:170,durability:60},
		required: {dexterity:20,intuition:15,level:6,endurance:20,strength:20},
		modify: {criticalpower:5,anticriticalhit:30,antijumpaway:30,criticalhit:20,parry:5,defence:25,hitpoints:33,strength:1,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21}
	},
	armor6: {id:'armor6',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� ����������� �����',old:true,alignment:'light',
		common: {price:165,weight:25,durability:100},
		required: {strength:21,endurance:21,intellect:2,level:5},
		modify: {hitpoints:45,criticalhit:45,anticriticalhit:35,jumpaway:35,antijumpaway:45,strength:-3,knifeskill:2,clubskill:2,axeskill:2,swordskill:2,bodyarmor:18}
	},
	armor74: {id:'armor74',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:33}}}},
		common: {weight:3,price:166,durability:50},
		required: {dexterity:17,intuition:17,level:6},
		modify: {anticriticalhit:25,antijumpaway:30,jumpaway:50,intuition:4,firemagicdefence:45,crushdefence:25,hitpoints:33,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24},
		defences: {crush:'good',thrust:'mediocre',cut:'magnificent'}
	},
	armor73: {id:'armor73',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ �����',
		common: {weight:34,price:220,durability:50},
		required: {dexterity:15,intuition:25,level:7,endurance:30,strength:30},
		modify: {anticriticalhit:50,criticalhit:50,firemagicdefence:100,hitpoints:99,strength:2,bodyarmor1:11,bodyarmor2:40,bodyarmorf:10,bodyarmorm:1,bodyarmord:30},
		defences: {crush:'good',thrust:'mediocre'}
	, upgrade: {
	armor73_olditem: {id:'armor73_olditem',old:true,
		common: {price:167,weight:34,durability:50},
		required: {dexterity:11,intuition:11,level:6,endurance:30,strength:30},
		modify: {anticriticalhit:0,firemagicdefence:120,strength:0,hitpoints:99,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmord:27,criticalhit:50,bodyarmorm:1}
	}}

	},
	armor65: {id:'armor65',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ����� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:33}}}},
		common: {weight:14,price:168,durability:50},
		required: {dexterity:34,intuition:34,level:6,endurance:11,strength:11},
		modify: {anticriticalhit:25,jumpaway:65,intuition:10,weaponskill:2,hitpoints:18,bodyarmor1:4,bodyarmor2:11,bodyarmorf:3,bodyarmorm:1,bodyarmord:8}
	},
	armor76: {id:'armor76',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ ���������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:34}}}},
		common: {weight:33,price:170,durability:50},
		required: {dexterity:11,intuition:11,level:6,endurance:30,strength:30},
		modify: {anticriticalhit:40,antijumpaway:40,sabrepower:20,hitpoints:33,strength:3,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24},
		defences: {crush:'magnificent',thrust:'mediocre',cut:'magnificent'}
	, upgrade: {
	armor76_olditem: {id:'armor76_olditem',old:true,
		common: {weight:33,price:170,durability:50},
		required: {dexterity:11,intuition:11,level:6,endurance:30,strength:30},
		modify: {anticriticalhit:15,antijumpaway:15,hitpoints:18,strength:0,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24,sabrepower:20}
	}}

	},
	armor90: {id:'armor90',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:34}}}},
		common: {weight:13,price:170,durability:50},
		required: {dexterity:34,intuition:34,level:6,endurance:11,strength:11},
		modify: {antijumpaway:30,parry:10,jumpaway:95,counterstroke:15,bodyarmor1:3,bodyarmor2:8,bodyarmorf:2,bodyarmorm:1,bodyarmord:6},
		defences: {crush:'weak',thrust:'weak',cut:'normal',sabre:'mediocre'}
	},
	armor54: {id:'armor54',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:34}}}},
		common: {weight:21,price:171,durability:50},
		required: {level:6,endurance:12,strength:20},
		modify: {anticriticalhit:25,antijumpaway:25,parry:5,jumpaway:40,counterstroke:5,dexterity:1,hitpoints:33,strength:2,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18},
		properties: {defence:25},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good'}
	},
	armor92: {id:'armor92',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ �������',
		common: {weight:31,price:220,durability:50},
		required: {dexterity:11,intuition:11,level:7,endurance:30,strength:30},
		modify: {anticriticalhit:25,antijumpaway:15,crushpower:20,clubskill:3,hitpoints:33,strength:2,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27},
		properties: {defence:50},
		
		defences: {crush:'magnificent',thrust:'weak'}
	, upgrade: {
	armor92_olditem: {id:'armor92_olditem',caption:'������ �������',old:true,
		common: {price:172,weight:31,durability:50},
		required: {level:6,dexterity:11,intuition:11,endurance:30,strength:30},
		modify: {anticriticalhit:15,antijumpaway:0,crushpower:15,strength:0,hitpoints:33,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmord:24,jumpaway:-10,clubskill:3,bodyarmorm:1},
		properties: {defence:0}
	}}

	},
	armor70: {id:'armor70',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������',alignment:'light',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:38}}}},
		common: {weight:33,price:194,durability:50},
		required: {dexterity:11,intuition:11,level:6,endurance:30,strength:30},
		modify: {anticriticalhit:30,antijumpaway:30,criticalhit:45,dexterity:2,intuition:2,magicdefence:30,hitpoints:45,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24},
		defences: {crush:'magnificent',sabre:'good'}
	},
	armor93: {id:'armor93',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ��������',
		common: {weight:16,price:214,durability:50},
		required: {dexterity:39,intuition:39,level:7,endurance:13,strength:13},
		modify: {anticriticalhit:40,jumpaway:65,thrustpower:35,knifeskill:3,hitpoints:18,strength:1,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent'}
	},
	armor67: {id:'armor67',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� �����',
		common: {weight:43,price:306,durability:50},
		required: {dexterity:20,intuition:20,level:8,endurance:35,strength:35},
		modify: {anticriticalhit:50,hitpoints:66,bodyarmor1:11,bodyarmor2:40,bodyarmorf:10,bodyarmorm:1,bodyarmord:30},
		properties: {defence:250},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'normal'}
	, upgrade: {
	armor67_olditem: {id:'armor67_olditem',old:true,
		common: {price:214,weight:43,durability:50},
		required: {dexterity:13,intuition:13,level:7,endurance:35,strength:35},
		modify: {anticriticalhit:15,hitpoints:66,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmord:27,shieldblock:5,bodyarmorm:1},
		properties: {defence:250}
	}}

	},
	armor99: {id:'armor99',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� �������',
		common: {weight:31,price:219,durability:100},
		required: {intuition:30,level:7,endurance:25,strength:25},
		modify: {criticalpower:10,anticriticalhit:30,criticalhit:40,dexterity:2,intuition:2,firemagicdefence:20,hitpoints:45,bodyarmor1:16,bodyarmor2:51,bodyarmorf:15,bodyarmorm:1,bodyarmord:36},
		properties: {defence:50},
		defences: {crush:'good',thrust:'mediocre',cut:'good',sabre:'mediocre'}
	},
	armor85: {id:'armor85',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'���������� ����� ������������',
		common: {weight:17,price:220,durability:50},
		required: {dexterity:35,intuition:20,level:7,endurance:12,strength:12},
		modify: {anticriticalhit:30,parry:10,jumpaway:70,counterstroke:5,dexterity:5,hitpoints:66,bodyarmor1:6,bodyarmor2:17,bodyarmorf:5,bodyarmorm:1,bodyarmord:12},
		properties: {sabredefence:25},
		defences: {crush:'mediocre',thrust:'mediocre'}
	, upgrade: {
	armor85_olditem1: {id:'armor85_olditem1',old:true,
		common: {weight:17,price:220,durability:50},
		required: {dexterity:35,intuition:20,level:7,endurance:12,strength:12},
		modify: {anticriticalhit:25,hitpoints:33,headarmor1:6,headarmor2:17,headarmorf:5,headarmorm:1,headarmord:12,bodyarmor1:6,bodyarmor2:17,bodyarmorf:5,bodyarmorm:1,bodyarmord:12,waistarmor1:6,waistarmor2:17,waistarmorf:5,waistarmorm:1,waistarmord:12,legarmor1:6,legarmor2:17,legarmorf:5,legarmorm:1,legarmord:12,parry:10,jumpaway:70,counterstroke:5,dexterity:5},
		properties: {sabredefence:25}
	},
	armor85_olditem2: {id:'armor85_olditem2',old:true,
		common: {weight:17,price:220,durability:50},
		required: {dexterity:35,intuition:20,level:7,endurance:12,strength:12},
		modify: {anticriticalhit:35,hitpoints:45,bodyarmor1:6,bodyarmor2:17,bodyarmorf:5,bodyarmorm:1,bodyarmord:12,parry:10,jumpaway:70,counterstroke:5,dexterity:5},
		properties: {sabredefence:0,defence:50}
	}}

	},
	armor87: {id:'armor87',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������� ���������',
		common: {weight:35,price:300,durability:70},
		required: {dexterity:20,intuition:20,level:8,endurance:30,strength:35},
		modify: {anticriticalhit:80,antijumpaway:80,magicdefence:70,hitpoints:45,bodyarmor1:11,bodyarmor2:40,bodyarmorf:10,bodyarmorm:1,bodyarmord:30},
		properties: {defence:75},
		defences: {crush:'good',cut:'magnificent',sabre:'good'}
	, upgrade: {
	armor87_olditem: {id:'armor87_olditem',old:true,
		common: {weight:18,price:221,durability:50},
		required: {dexterity:39,intuition:39,level:7,endurance:13,strength:13},
		modify: {anticriticalhit:65,magicdefence:50,hitpoints:33,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmord:27,antijumpaway:80,bodyarmorm:1},
		properties: {defence:0}
	}}

	},
	armor89: {id:'armor89',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'���������� ������ �����������',
		common: {weight:8,price:222,durability:50},
		required: {dexterity:39,intuition:39,level:7,endurance:13,strength:13},
		modify: {criticalpower:30,anticriticalhit:30,criticalhit:30,intuition:2,knifeskill:1,airmagicdefence:20,hitpoints:24,strength:1,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18},
		properties: {defence:25},
		defences: {crush:'mediocre',thrust:'mediocre'}
	, upgrade: {
	armor89_olditem: {id:'armor89_olditem',old:true,
		common: {weight:8,price:222,durability:50},
		required: {dexterity:39,intuition:39,level:7,endurance:13,strength:13},
		modify: {criticalpower:25,anticriticalhit:25,criticalhit:25,knifeskill:0,airmagicdefence:0,hitpoints:18,strength:0,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18,intuition:2},
		properties: {defence:0}
	}}

	},
	armor94: {id:'armor94',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ���������',
		common: {weight:36,price:223,durability:100},
		required: {level:7,endurance:30,strength:30},
		modify: {anticriticalhit:50,antijumpaway:30,hitpoints:66,strength:4,bodyarmor1:16,bodyarmor2:60,bodyarmorf:15,bodyarmorm:1,bodyarmord:45},
		properties: {defence:75},
		defences: {crush:'good',thrust:'weak',cut:'good',sabre:'mediocre'}
	},
	armor103: {id:'armor103',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������ ������ �����',
		common: {weight:35,price:222,durability:80},
		required: {dexterity:30,intuition:30,level:7,endurance:20,strength:20},
		modify: {anticriticalhit:40,antijumpaway:40,criticalhit:40,jumpaway:40,sabrepower:10,axeskill:2,hitpoints:33,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24},
		properties: {sabredefence:100},
		defences: {thrust:'weak',cut:'good',sabre:'good'}
	, upgrade: {
	armor103_olditem: {id:'armor103_olditem',old:true,
		common: {price:223,weight:35,durability:80},
		required: {dexterity:30,intuition:30,level:7,endurance:20,strength:20},
		modify: {anticriticalhit:35,antijumpaway:35,hitpoints:24,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24,criticalhit:40,jumpaway:40,sabrepower:10,axeskill:2},
		properties: {sabredefence:100}
	}}

	},
	armor72: {id:'armor72',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������ �������',
		common: {weight:44,price:220,durability:50},
		required: {intuition:25,level:7,endurance:25,strength:25},
		modify: {anticriticalhit:10,criticalhit:50,magicdefence:100,hitpoints:66,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27}
	, upgrade: {
	armor72_olditem: {id:'armor72_olditem',old:true,
		common: {weight:44,price:220,durability:50},
		required: {dexterity:13,intuition:13,level:7,endurance:35,strength:35},
		modify: {anticriticalhit:10,criticalhit:50,magicdefence:100,hitpoints:66,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27}
	}}

	},
	armor68: {id:'armor68',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ���������� �����',
		common: {weight:19,price:224,durability:50},
		required: {dexterity:40,intuition:20,level:7,endurance:20,strength:20},
		modify: {anticriticalhit:40,parry:15,jumpaway:65,magicdefence:20,hitpoints:33,strength:4,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'normal'}
	, upgrade: {
	armor68_olditem: {id:'armor68_olditem',old:true,
		common: {weight:19,price:224,durability:50},
		required: {dexterity:39,intuition:39,level:7,endurance:13,strength:13},
		modify: {anticriticalhit:40,parry:15,jumpaway:65,magicdefence:20,hitpoints:33,strength:4,bodyarmor1:4,bodyarmor2:12,bodyarmorf:3,bodyarmorm:1,bodyarmord:9},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'normal'}
	}}

	},
	armor91: {id:'armor91',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� ����� ����',
		common: {weight:42,price:222,durability:50},
		required: {level:7,endurance:30,strength:30},
		modify: {anticriticalhit:35,antijumpaway:35,sabrepower:10,swordskill:2,firemagicdefence:25,hitpoints:66,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27},
		properties: {sabredefence:125},
		defences: {crush:'good'}
	, upgrade: {
	armor91_olditem2: {id:'armor91_olditem2',old:true,
		common: {weight:42,price:222,durability:50},
		required: {dexterity:13,intuition:13,level:7,endurance:35,strength:35},
		modify: {anticriticalhit:35,antijumpaway:25,criticalhit:15,sabrepower:10,intuition:2,firemagicdefence:50,hitpoints:33,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27},
		properties: {sabredefence:175}
	},
	armor91_olditem: {id:'armor91_olditem',caption:'������� ����� ���� [very old]',
		common: {price:233,weight:42,durability:50},
		required: {dexterity:13,intuition:13,level:7,endurance:35,strength:35},
		modify: {hitpoints:30,jumpaway:-25,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27,anticriticalhit:35,antijumpaway:25,criticalhit:15,sabrepower:10,intuition:2,firemagicdefence:50},
		properties: {sabredefence:250}
	}}

	},
	armor97: {id:'armor97',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������',
		common: {weight:21,price:300,durability:50},
		required: {dexterity:45,intuition:25,level:8,endurance:15,strength:15},
		modify: {anticriticalhit:35,parry:10,jumpaway:80,counterstroke:5,dexterity:2,intuition:2,swordskill:2,knifeskill:2,axeskill:2,magicdefence:20,hitpoints:33,strength:6,bodyarmor1:8,bodyarmor2:25,bodyarmorf:7,bodyarmorm:1,bodyarmord:18},
		setlink: {name:'flash'},
		defences: {crush:'good',thrust:'mediocre'}
	, upgrade: {
	armor97_olditem: {id:'armor97_olditem',caption:'����� ������� ������',old:true,
		common: {weight:21,price:300,durability:50},
		required: {dexterity:45,intuition:25,level:8,endurance:15,strength:15},
		modify: {hitpoints:33,headarmor1:8,headarmor2:25,headarmorf:7,headarmorm:1,headarmord:18,bodyarmor1:8,bodyarmor2:25,bodyarmorf:7,bodyarmorm:1,bodyarmord:18,waistarmor1:8,waistarmor2:25,waistarmorf:7,waistarmorm:1,waistarmord:18,legarmor1:8,legarmor2:25,legarmorf:7,legarmorm:1,legarmord:18,anticriticalhit:35,parry:10,jumpaway:80,counterstroke:5,dexterity:2,intuition:2,swordskill:2,knifeskill:2,axeskill:2,magicdefence:20,strength:6}
	}}

	},
	armor96: {id:'armor96',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������������',
		common: {weight:35,price:304,durability:50},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {criticalpower:15,anticriticalhit:15,counterstroke:7,dexterity:6,intuition:6,intellect:6,swordskill:1,clubskill:1,knifeskill:1,axeskill:1,strength:8,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27}
	, upgrade: {
	armor96_olditem: {id:'armor96_olditem',old:true,
		common: {price:297,weight:35,durability:50},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {criticalpower:0,counterstroke:0,dexterity:8,intuition:8,intellect:2,swordskill:0,clubskill:0,knifeskill:0,axeskill:0,strength:10,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmord:15,hitpoints:120,anticriticalhit:15,bodyarmorm:1}
	}}

	},
	armor78: {id:'armor78',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������',
		common: {weight:41,price:302,durability:100},
		required: {intuition:35,level:8,endurance:30,strength:30},
		modify: {criticalpower:15,anticriticalhit:45,antijumpaway:15,criticalhit:45,intuition:6,intellect:2,swordskill:2,clubskill:2,magicdefence:20,hitpoints:66,bodyarmor1:16,bodyarmor2:51,bodyarmorf:15,bodyarmorm:1,bodyarmord:36},
		setlink: {name:'sunset'},
		defences: {crush:'good',thrust:'mediocre',cut:'good',sabre:'mediocre'}
	},
	armor84: {id:'armor84',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'������� �����',
		common: {weight:55,price:303,durability:100},
		required: {level:8,endurance:40,strength:40},
		modify: {anticriticalhit:50,antijumpaway:20,hitpoints:99,strength:6,bodyarmor1:26,bodyarmor2:75,bodyarmorf:25,bodyarmorm:1,bodyarmord:50},
		properties: {defence:125},
		setlink: {name:'siege'},
		defences: {crush:'good',thrust:'weak',cut:'good',sabre:'mediocre'}
	, upgrade: {
	armor84_olditem: {id:'armor84_olditem',old:true,
		common: {price:302,weight:55,durability:100},
		required: {level:8,endurance:40,strength:40},
		modify: {antijumpaway:30,hitpoints:99,bodyarmor1:26,bodyarmor2:85,bodyarmorf:25,bodyarmorm:1,bodyarmord:60,shieldblock:5,anticriticalhit:50,strength:6},
		properties: {defence:150}
	}}

	},
	armor105: {id:'armor105',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� �����',requireditems:{shop:{exchanger:'shop', items: {mater22:{id:'mater22',caption:'�������� �������',count:1},mater12:{id:'mater12',caption:'�����',count:8}}}},
		common: {weight:35,price:380,durability:50},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:40,antijumpaway:70,parry:10,jumpaway:80,counterstroke:10,swordskill:2,clubskill:2,knifeskill:2,axeskill:2,magicdefence:30,hitpoints:45,bodyarmor1:12,bodyarmor2:44,bodyarmorf:11,bodyarmorm:1,bodyarmord:33},
		properties: {defence:75},
		setlink: {name:'spider'},
		defences: {crush:'normal',cut:'mediocre',sabre:'good'}
	, upgrade: {
	armor105_1: {id:'armor105_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ����� [10]',baseitem:'armor105',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor105:{id:'armor105',caption:'����� �����',count:1}}}},
		common: {weight:35,price:455,durability:50},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,demonsreputation:10000},
		modify: {anticriticalhit:40,antijumpaway:70,parry:15,jumpaway:80,counterstroke:10,swordskill:2,clubskill:2,knifeskill:2,axeskill:2,magicdefence:40,hitpoints:60,bodyarmor1:13,bodyarmor2:48,bodyarmorf:12,bodyarmorm:1,bodyarmord:36},
		properties: {defence:100},
		setlink: {name:'',skip:'yes'},
		defences: {crush:'normal',cut:'mediocre',sabre:'good'}
	}}

	},
	armor105_1: {id:'armor105_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ����� [10]',baseitem:'armor105',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor105:{id:'armor105',caption:'����� �����',count:1}}}},
		common: {weight:35,price:455,durability:50},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,demonsreputation:10000},
		modify: {anticriticalhit:40,antijumpaway:70,parry:15,jumpaway:80,counterstroke:10,swordskill:2,clubskill:2,knifeskill:2,axeskill:2,magicdefence:40,hitpoints:60,bodyarmor1:13,bodyarmor2:48,bodyarmorf:12,bodyarmorm:1,bodyarmord:36},
		properties: {defence:100},
		setlink: {name:'',skip:'yes'},
		defences: {crush:'normal',cut:'mediocre',sabre:'good'}
	},
	armor106: {id:'armor106',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater20:{id:'mater20',caption:'�������� ������� �����',count:1},mater5:{id:'mater5',caption:'������',count:8}}}},
		common: {weight:40,price:380,durability:100},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:75,antijumpaway:30,criticalhit:45,intuition:2,intellect:2,magicdefence:40,hitpoints:66,strength:4,bodyarmor1:19,bodyarmor2:54,bodyarmorf:18,bodyarmorm:1,bodyarmord:36},
		properties: {defence:125},
		setlink: {name:'bloodmoon'},
		defences: {crush:'good',thrust:'mediocre',cut:'mediocre',sabre:'good'}
	, upgrade: {
	armor106_1: {id:'armor106_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� �������� ���� [10]',baseitem:'armor106',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor106:{id:'armor106',caption:'����� �������� ����',count:1}}}},
		common: {weight:40,price:455,durability:100},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,demonsreputation:10000},
		modify: {anticriticalhit:75,antijumpaway:30,criticalhit:45,intuition:2,intellect:2,magicdefence:60,hitpoints:66,strength:8,bodyarmor1:21,bodyarmor2:62,bodyarmorf:20,bodyarmorm:1,bodyarmord:42,knifeskill:1,axeskill:1,clubskill:1,swordskill:1},
		properties: {defence:125},
		setlink: {name:'',skip:'yes'},
		defences: {crush:'good',thrust:'mediocre',cut:'mediocre',sabre:'good'}
	}}

	},
	armor106_1: {id:'armor106_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� �������� ���� [10]',baseitem:'armor106',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor106:{id:'armor106',caption:'����� �������� ����',count:1}}}},
		common: {weight:40,price:455,durability:100},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,demonsreputation:10000},
		modify: {anticriticalhit:75,antijumpaway:30,criticalhit:45,intuition:2,intellect:2,magicdefence:60,hitpoints:66,strength:8,bodyarmor1:21,bodyarmor2:62,bodyarmorf:20,bodyarmorm:1,bodyarmord:42,knifeskill:1,axeskill:1,clubskill:1,swordskill:1},
		properties: {defence:125},
		setlink: {name:'',skip:'yes'},
		defences: {crush:'good',thrust:'mediocre',cut:'mediocre',sabre:'good'}
    },
 	armor108: {id:'armor108',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ���������',requireditems:{shop:{exchanger:'shop', items: {mater21:{id:'mater21',caption:'�������� �������',count:1},mater10:{id:'mater10',caption:'���� �������� ������',count:8}}}},
		common: {weight:40,price:380,durability:100},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {anticriticalhit:55,criticalhit:50,jumpaway:60,dexterity:7,intuition:3,magicdefence:65,hitpoints:54,strength:2,bodyarmor1:12,bodyarmor2:44,bodyarmorf:11,bodyarmorm:1,bodyarmord:33},
		properties: {defence:75},
		setlink: {name:'misdeed'}
	,upgrade:{
	armor108_1: {id:'armor108_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor108:{id:'armor108',caption:'����� ���������',count:1}}}},
		common: {weight:40,price:455,durability:100},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,demonsreputation:10000},
		modify: {anticriticalhit:75,criticalhit:70,jumpaway:80,dexterity:7,intuition:3,magicdefence:80,hitpoints:81,strength:2,bodyarmor1:14,bodyarmor2:53,bodyarmorf:13,bodyarmorm:1,bodyarmord:40},
		properties: {defence:80},
		setlink: {name:''}
	 }}
	},
	armor108_1: {id:'armor108_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor108:{id:'armor108',caption:'����� ���������',count:1}}}},
		common: {weight:40,price:455,durability:100},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,demonsreputation:10000},
		modify: {anticriticalhit:75,criticalhit:70,jumpaway:80,dexterity:7,intuition:3,magicdefence:80,hitpoints:81,strength:2,bodyarmor1:14,bodyarmor2:53,bodyarmorf:13,bodyarmorm:1,bodyarmord:40},
		properties: {defence:80},
		setlink: {name:''}
	},

	armor107: {id:'armor107',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater31:{id:'mater31',caption:'�������� ���������� �����',count:1},mater6:{id:'mater6',caption:'�������� ������',count:8}}}},
		common: {weight:60,price:380,durability:100},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {anticriticalhit:50,antijumpaway:25,intellect:1,magicdefence:30,hitpoints:99,strength:6,bodyarmor1:31,bodyarmor2:90,bodyarmorf:30,bodyarmorm:1,bodyarmord:60},
		properties: {defence:150},
		setlink: {name:'losttime'},
		defences: {crush:'good',thrust:'weak',cut:'good',sabre:'mediocre'}
	, upgrade: {
	armor107_1: {id:'armor107_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������� ������ [10]',baseitem:'armor107',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor107:{id:'armor107',caption:'����� ������� ������',count:1}}}},
		common: {weight:60,price:455,durability:100},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,demonsreputation:10000},
		modify: {anticriticalhit:90,antijumpaway:45,intellect:1,magicdefence:30,hitpoints:120,strength:6,bodyarmor1:34,bodyarmor2:99,bodyarmorf:33,bodyarmorm:1,bodyarmord:66,knifeskill:1,axeskill:1,clubskill:1,swordskill:1},
		properties: {defence:150},
		setlink: {name:'',skip:'yes'},
		defences: {crush:'good',thrust:'weak',cut:'good',sabre:'mediocre'}
	}}

	},
	armor107_1: {id:'armor107_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ������� ������ [10]',baseitem:'armor107',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor107:{id:'armor107',caption:'����� ������� ������',count:1}}}},
		common: {weight:60,price:455,durability:100},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,demonsreputation:10000},
		modify: {anticriticalhit:90,antijumpaway:45,intellect:1,magicdefence:30,hitpoints:120,strength:6,bodyarmor1:34,bodyarmor2:99,bodyarmorf:33,bodyarmorm:1,bodyarmord:66,knifeskill:1,axeskill:1,clubskill:1,swordskill:1},
		properties: {defence:150},
		setlink: {name:'',skip:'yes'},
		defences: {crush:'good',thrust:'weak',cut:'good',sabre:'mediocre'}
	},
	armor108_du1: {id:'armor108_du1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater23:{id:'mater23',caption:'�������',count:1},mater2:{id:'mater2',caption:'������',count:8}}}},
		common: {weight:23,price:380,durability:50},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:85,antijumpaway:60,parry:5,magicdefence:50,firemagicdefence:25,hitpoints:66,strength:5,bodyarmor1:13,bodyarmor2:48,bodyarmorf:12,bodyarmorm:1,bodyarmord:36},
		properties: {defence:100},
		setlink: {name:'morningsun'}
	, upgrade: {
	armor108_du1_1: {id:'armor108_du1_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ��������� ������ [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor108_du1:{id:'armor108_du1',caption:'����� ��������� ������',count:1}}}},
		common: {weight:23,price:455,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,demonsreputation:10000},
		modify: {anticriticalhit:100,antijumpaway:75,parry:7,magicdefence:60,firemagicdefence:50,hitpoints:76,strength:5,bodyarmor1:16,bodyarmor2:58,bodyarmorf:15,bodyarmorm:1,bodyarmord:43},
		properties: {defence:105},
		setlink: {name:''}
	}}
	},
	armor108_du1_1: {id:'armor108_du1_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ��������� ������ [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor108_du1:{id:'armor108_du1',caption:'����� ��������� ������',count:1}}}},
		common: {weight:23,price:455,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,demonsreputation:10000},
		modify: {anticriticalhit:100,antijumpaway:75,parry:7,magicdefence:60,firemagicdefence:50,hitpoints:76,strength:5,bodyarmor1:16,bodyarmor2:58,bodyarmorf:15,bodyarmorm:1,bodyarmord:43},
		properties: {defence:105},
		setlink: {name:''}
	},
	armor109: {id:'armor109',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ���������',requireditems:{shop:{exchanger:'shop', items: {mater22:{id:'mater22',caption:'�������� �������',count:1},mater3:{id:'mater3',caption:'�������',count:8}}}},
		common: {weight:40,price:380,durability:100},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {anticriticalhit:90,antijumpaway:60,criticalhit:60,parry:3,magicdefence:20,hitpoints:78,strength:3,bodyarmor1:18,bodyarmor2:53,bodyarmorf:17,bodyarmorm:1,bodyarmord:36},
		properties: {defence:125},
		setlink: {name:'scorpion'},
		defences: {crush:'good',thrust:'mediocre',cut:'mediocre',sabre:'good'}
	, upgrade: {
	armor109_1: {id:'armor109_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor109:{id:'armor109',caption:'����� ���������',count:1}}}},
		common: {weight:40,price:455,durability:100},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,demonsreputation:10000},
		modify: {anticriticalhit:110,antijumpaway:80,criticalhit:80,parry:4,magicdefence:30,hitpoints:99,strength:3,bodyarmor1:21,bodyarmor2:60,bodyarmorf:20,bodyarmorm:1,bodyarmord:40},
		properties: {defence:130},
		setlink: {name:''},
		defences: {crush:'good',thrust:'mediocre',cut:'mediocre',sabre:'good'}
	 }}
	},
	armor109_1: {id:'armor109_1',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ��������� [10]',requireditems:{shop:{exchanger:'shop', items:{mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50},armor109:{id:'armor109',caption:'����� ���������',count:1}}}},
		common: {weight:40,price:455,durability:100},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,demonsreputation:10000},
		modify: {anticriticalhit:110,antijumpaway:80,criticalhit:80,parry:4,magicdefence:30,hitpoints:99,strength:3,bodyarmor1:21,bodyarmor2:60,bodyarmorf:20,bodyarmorm:1,bodyarmord:40},
		properties: {defence:130},
		setlink: {name:''},
		defences: {crush:'good',thrust:'mediocre',cut:'mediocre',sabre:'good'}
	},
	armor109_ppwa: {id:'armor109_ppwa',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'����� ����������',fixless:true,binding:'boe',
		common: {weight:45,price:525,durability:100},
		required: {level:10,endurance:40,strength:45},
		modify: {criticalhit:60,anticriticalhit:100,antijumpaway:65,magicdefence:50,hitpoints:200,strength:4,bodyarmor1:35,bodyarmor2:35,bodyarmorf:35,bodyarmorm:1,bodyarmord:0,weaponskill:2},
		properties: {defence:125},
		defences: {crush:'good',thrust:'weak',cut:'good',sabre:'good'}	,
 upgrade: {
	armor109_ppwa_k1: {id:'armor109_ppwa_k1',caption:'����� ���������� (���� +65)',fixless:true,binding:'bop',
		modify: {criticalhit:65}
	},
	armor109_ppwa_k2: {id:'armor109_ppwa_k2',caption:'����� ���������� (���� +70)',fixless:true,binding:'bop',
		modify: {criticalhit:70}
	},
	armor109_ppwa_k3: {id:'armor109_ppwa_k3',caption:'����� ���������� (���� +75)',fixless:true,binding:'bop',
		modify: {criticalhit:75}
	},
	armor109_ppwa_j1: {id:'armor109_ppwa_j1',caption:'����� ���������� (������ +60)',fixless:true,binding:'bop',
		modify: {criticalhit:0,jumpaway:60}
	},
	armor109_ppwa_j2: {id:'armor109_ppwa_j2',caption:'����� ���������� (������ +65)',fixless:true,binding:'bop',
		modify: {criticalhit:0,jumpaway:65}
	},
	armor109_ppwa_j3: {id:'armor109_ppwa_j3',caption:'����� ���������� (������ +70)',fixless:true,binding:'bop',
		modify: {criticalhit:0,jumpaway:70}
	},
	armor109_ppwa_j4: {id:'armor109_ppwa_j4',caption:'����� ���������� (������ +75)',fixless:true,binding:'bop',
		modify: {criticalhit:0,jumpaway:75}
	}}
	},

	armor113: { id: 'armor113', category:'heavyarmors', slot:'w4', width:60, height:80, caption: '����� ������������� �����', stats:true,binding: 'bop',clist:{_:{	sp_mat42:{id:'sp_mat42',caption:'��������� �������� �����',count:1},mater301:{id:'mater301',caption:'����� ��������� ������',count:1},mater299:{id:'mater299',caption:'������ �����',count:10},mater300:{id:'mater300',caption:'����� �����',count:12},mater293:{id:'mater293',caption:'��������� ��������',count:10}, mater296:{id:'mater296',caption:'��������� ���������� �������',count:20},mater295:{id:'mater295',caption:'���������� �����',count:10},mater297:{id:'mater297',caption:'���������� ���������',count:10}}},
	    common: {weight: 60, price: 537, durability: 100},
		required: {level:10,endurance:70,strength:50, dexterity:10,intuition:10},
		modify: { anticriticalhit:150,antijumpaway:100,magicdefence:50,defence:100,hitpoints:200,bodyarmor1:33,bodyarmor2:33,bodyarmorf:0,bodyarmorm:66,bodyarmord:66,knifeskill:1,swordskill:1,axeskill:1,clubskill:1},
		properties: {},
		
		defences: {crush:'mediocre',thrust:'mediocre'}
	},



	
	


	dmarmor: {id:'dmarmor',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'���� ���� ������',binding:'bop',
		common: {price:40,durability:50,expirationdate:60},
		required: {level:4,sex:'male'},
		
	},
	sarmor: {id:'sarmor',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'���� ����������',binding:'bop',
		common: {price:44,durability:50,expirationdate:60},
		required: {level:4,sex:'female'},
		
	},
	
	
	armor207: {id:'armor207',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Smashing  Armor',imp1:true,binding:'boe',
		common: {weight:30,durability:80,eprice:5.49},
		required: {level:8},
		modify: {criticalpower:5,anticriticalhit:60,antijumpaway:30,criticalhit:30,clubskill:2,axeskill:2,magicdefence:40,hitpoints:66,strength:4,bodyarmor1:13,bodyarmor2:42,bodyarmorf:12,bodyarmorm:1,bodyarmord:30},
		properties: {defence:100},
		setlink: {name:'smash'},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'good'}
	},
	armor208: {id:'armor208',category:'heavyarmors',slot:'w4',width:60,height:80,caption:'Desert Armor',imp1:true,binding:'boe',
		common: {weight:30,durability:80,eprice:5.49},
		required: {level:8},
		modify: {anticriticalhit:60,antijumpaway:30,counterstroke:10,dexterity:4,swordskill:2,knifeskill:2,magicdefence:40,hitpoints:66,bodyarmor1:13,bodyarmor2:42,bodyarmorf:12,bodyarmorm:1,bodyarmord:30},
		properties: {defence:100},
		setlink: {name:'wanderer'}
	},
	
	
	/*---------------------------------------------------------------�������� �� �����----------------------------------------------*/
	
	
	
	
	helmet2: {id:'helmet2',category:'helmets',slot:'w9',width:60,height:60,caption:'������� ����',old:true,
		common: {price:6,weight:3,durability:20},
		required: {strength:6,endurance:6,level:1},
		modify: {hitpoints:3,anticriticalhit:1,headarmor:3}
	},
	helmet7: {id:'helmet7',category:'helmets',slot:'w9',width:60,height:60,caption:'����������� ����',old:true,
		common: {price:6,weight:3,durability:20},
		required: {strength:6,endurance:6,level:1},
		modify: {hitpoints:3,jumpaway:5,headarmor:3}
	},
	helmet1: {id:'helmet1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� -��������-',old:true,
		common: {price:7,weight:3,durability:20},
		required: {strength:6},
		modify: {hitpoints:9,headarmor:1}
	},
	helmet3: {id:'helmet3',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �����������',old:true,
		common: {price:7,weight:3,durability:20},
		required: {strength:6,endurance:6,level:1},
		modify: {hitpoints:6,headarmor:3}
	},
	helmet27: {id:'helmet27',category:'helmets',slot:'w9',width:60,height:60,caption:'��������',
		common: {weight:3,price:7,durability:20},
		required: {level:1,endurance:6,strength:6},
		modify: {hitpoints:6,headarmor1:2,headarmor2:4,headarmorf:1,headarmorm:1,headarmord:3}
	},
	helmet42: {id:'helmet42',category:'helmets',slot:'w9',width:60,height:60,caption:'�������� ����',
		common: {weight:4,price:7,durability:10},
		required: {level:1,endurance:6,strength:6},
		modify: {anticriticalhit:10,headarmor1:1,headarmor2:3,headarmorm:1,headarmord:3}
	},
	helmet31: {id:'helmet31',category:'helmets',slot:'w9',width:60,height:60,caption:'����� ����������',
		common: {weight:3,price:7,durability:20},
		required: {level:1,endurance:6,strength:6},
		modify: {anticriticalhit:2,criticalhit:3,hitpoints:3,headarmor1:1,headarmor2:3,headarmorm:1,headarmord:3},
		defences: {thrust:'weak'}
	},
	helmet71: {id:'helmet71',category:'helmets',slot:'w9',width:60,height:60,caption:'����������� ����',
		common: {weight:3,price:8,durability:20},
		required: {level:1,endurance:6,strength:6},
		modify: {maxdamage:1,mindamage:1,headarmor1:2,headarmor2:4,headarmorf:1,headarmorm:1,headarmord:3}
	},
	helmet53: {id:'helmet53',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������',
		common: {weight:4,price:11,durability:20},
		required: {level:2,endurance:9,strength:9},
		modify: {jumpaway:20,headarmor1:2,headarmor2:4,headarmorf:1,headarmorm:1,headarmord:3}
	},
	helmet29: {id:'helmet29',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������',
		common: {weight:4,price:15,durability:20},
		required: {level:2,endurance:9,strength:9},
		modify: {hitpoints:18,headarmor1:2,headarmor2:7,headarmorf:1,headarmorm:1,headarmord:6}
	},
	helmet46: {id:'helmet46',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �����',
		common: {weight:5,price:15,durability:20},
		required: {level:2,endurance:9,strength:9},
		modify: {anticriticalhit:5,intuition:1,headarmor1:2,headarmor2:7,headarmorf:1,headarmorm:1,headarmord:6}
	},
	helmet22: {id:'helmet22',category:'helmets',slot:'w9',width:60,height:60,caption:'�������� ����',
		common: {weight:5,price:15,durability:30},
		required: {level:2,endurance:9,strength:9},
		modify: {anticriticalhit:15,headarmor1:3,headarmor2:8,headarmorf:2,headarmorm:1,headarmord:6}
	},
	helmet40: {id:'helmet40',category:'helmets',slot:'w9',width:60,height:60,caption:'���� � ������',
		common: {weight:4,price:15,durability:20},
		required: {level:2,endurance:9,strength:9},
		modify: {hitpoints:9,strength:1,headarmor1:1,headarmor2:3,headarmorm:1,headarmord:3}
	},
	helmet57: {id:'helmet57',category:'helmets',slot:'w9',width:60,height:60,caption:'��������� ����',
		common: {weight:5,price:17,durability:10},
		required: {level:2,endurance:9,strength:9},
		modify: {dexterity:2,headarmor1:2,headarmor2:4,headarmorf:1,headarmorm:1,headarmord:3}
	},
	helmet25: {id:'helmet25',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������',
		common: {weight:4,price:18,durability:30},
		required: {level:2,endurance:10,strength:10},
		modify: {criticalhit:5,swordskill:1,headarmor1:3,headarmor2:8,headarmorf:2,headarmorm:1,headarmord:6}
	},
	helmet4: {id:'helmet4',category:'helmets',slot:'w9',width:60,height:60,caption:'��������� ��������� ����',old:true,
		common: {price:23,weight:6,durability:40},
		required: {strength:9,endurance:9,level:2},
		modify: {hitpoints:12,anticriticalhit:2,jumpaway:10,dexterity:1,headarmor:6}
	},
	helmet6: {id:'helmet6',category:'helmets',slot:'w9',width:60,height:60,caption:'�������� ������ ����',old:true,
		common: {price:23,weight:5,durability:40},
		required: {strength:10,endurance:10,level:2},
		modify: {hitpoints:9,criticalhit:5,anticriticalhit:5,jumpaway:5,antijumpaway:5,headarmor:6}
	},
	helmet23: {id:'helmet23',category:'helmets',slot:'w9',width:60,height:60,caption:'�����',
		common: {weight:6,price:30,durability:20},
		required: {level:3,endurance:12,strength:12},
		modify: {jumpaway:20,dexterity:2,headarmor1:3,headarmor2:11,headarmorf:2,headarmorm:1,headarmord:9}
	},
	helmet21: {id:'helmet21',category:'helmets',slot:'w9',width:60,height:60,caption:'������� ����',
		common: {weight:4,price:31,durability:30},
		required: {level:3,endurance:12,strength:12},
		modify: {hitpoints:18,strength:2,headarmor1:3,headarmor2:8,headarmorf:2,headarmorm:1,headarmord:6}
	},
	helmet69: {id:'helmet69',category:'helmets',slot:'w9',width:60,height:60,caption:'���������� ����',
		common: {weight:5,price:31,durability:30},
		required: {level:3,endurance:12,strength:12},
		modify: {anticriticalhit:15,hitpoints:12,strength:1,headarmor1:3,headarmor2:11,headarmorf:2,headarmorm:1,headarmord:9}
	},
	helmet26: {id:'helmet26',category:'helmets',slot:'w9',width:60,height:60,caption:'������� ����',
		common: {weight:7,price:32,durability:40},
		required: {level:3,endurance:12,strength:12},
		modify: {anticriticalhit:20,hitpoints:18,headarmor1:4,headarmor2:12,headarmorf:3,headarmorm:1,headarmord:9}
	},
	helmet36: {id:'helmet36',category:'helmets',slot:'w9',width:60,height:60,caption:'���������� ����',
		common: {weight:5,price:33,durability:30},
		required: {level:3,endurance:12,strength:12},
		modify: {dexterity:1,intuition:2,hitpoints:6,headarmor1:3,headarmor2:11,headarmorf:2,headarmorm:1,headarmord:9}
	},
	helmet5: {id:'helmet5',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �����������',old:true,
		common: {price:36,weight:6,durability:40},
		required: {strength:12,dexterity:12,endurance:12,level:3},
		modify: {hitpoints:15,anticriticalhit:10,jumpaway:10,dexterity:1,intuition:1,headarmor:9}
	},
	helmet76: {id:'helmet76',category:'helmets',slot:'w9',width:60,height:60,caption:'��������� ����',
		common: {weight:7,price:37,durability:30},
		required: {level:3,endurance:12,strength:12},
		modify: {dexterity:1,intuition:1,strength:2,headarmor1:4,headarmor2:12,headarmorf:3,headarmorm:1,headarmord:9}
	},
	helmet61: {id:'helmet61',category:'helmets',slot:'w9',width:60,height:60,caption:'������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:5,price:41,durability:30},
		required: {level:4,endurance:15,strength:15},
		modify: {antijumpaway:15,jumpaway:30,hitpoints:21,headarmor1:2,headarmor2:10,headarmorf:1,headarmorm:1,headarmord:9}
	},
	helmet8: {id:'helmet8',category:'helmets',slot:'w9',width:60,height:60,caption:'���� -����� �������-',old:true,alignment:'dark',
		common: {price:43,weight:6,durability:40},
		required: {strength:12,endurance:12,level:3},
		modify: {hitpoints:15,anticriticalhit:5,jumpaway:10,strength:2,knifeskill:1,clubskill:1,axeskill:1,swordskill:1,headarmor:9}
	},
	helmet34: {id:'helmet34',category:'helmets',slot:'w9',width:60,height:60,caption:'��������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:10,price:44,durability:40},
		required: {level:4,endurance:15,strength:15},
		modify: {anticriticalhit:20,hitpoints:30,headarmor1:5,headarmor2:22,headarmorf:4,headarmorm:1,headarmord:18}
	},
	helmet52: {id:'helmet52',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:10,price:45,durability:35},
		required: {level:4,endurance:15,strength:15},
		modify: {criticalhit:10,dexterity:2,airmagicdefence:20,headarmor1:5,headarmor2:16,headarmorf:4,headarmorm:1,headarmord:12},
		defences: {thrust:'mediocre'}
	},
	helmet32: {id:'helmet32',category:'helmets',slot:'w9',width:60,height:60,caption:'��������� ��������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:4,price:45,durability:30},
		required: {level:4},
		modify: {jumpaway:25,dexterity:2,intuition:2,headarmor1:3,headarmor2:8,headarmorf:2,headarmorm:1,headarmord:6}
	},
	helmet30: {id:'helmet30',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:8,price:45,durability:40},
		required: {level:4,endurance:15,strength:15},
		modify: {anticriticalhit:15,hitpoints:18,strength:2,headarmor1:4,headarmor2:15,headarmorf:3,headarmorm:1,headarmord:12}
	},
	whelmet4: {id:'whelmet4',category:'helmets',slot:'w9',width:60,height:60,caption:'����� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:2,price:45,durability:30},
		required: {intellect:20,level:4},
		modify: {hitpoints:24,mana:45,headarmor1:3,headarmor2:3}
	},
	helmet48: {id:'helmet48',category:'helmets',slot:'w9',width:60,height:60,caption:'��������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:10}}}},
		common: {weight:5,price:46,durability:30},
		required: {dexterity:10,intuition:10,level:4,endurance:10,strength:10},
		modify: {dexterity:1,intuition:1,intellect:1,hitpoints:12,strength:1,headarmor1:4,headarmor2:15,headarmorf:3,headarmorm:1,headarmord:12}
	},
	helmet49: {id:'helmet49',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ���������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:10}}}},
		common: {weight:7,price:47,durability:30},
		required: {level:4,endurance:15,strength:15},
		modify: {anticriticalhit:10,strength:4,headarmor1:5,headarmor2:16,headarmorf:4,headarmorm:1,headarmord:12}
	},
	helmet77: {id:'helmet77',category:'helmets',slot:'w9',width:60,height:60,caption:'����� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:10}}}},
		common: {weight:5,price:48,durability:30},
		required: {level:4,endurance:15,strength:15},
		modify: {jumpaway:30,dexterity:2,intuition:2,headarmor1:3,headarmor2:10,headarmorf:2,headarmorm:1,headarmord:8},
		defences: {crush:'normal',thrust:'normal',cut:'good',sabre:'good'}
	},
	helmet9: {id:'helmet9',category:'helmets',slot:'w9',width:60,height:60,caption:'������� ���� ������ �� ����',old:true,alignment:'light',
		common: {price:50,weight:6,durability:50},
		required: {strength:12,dexterity:14,endurance:12,level:3},
		modify: {hitpoints:15,anticriticalhit:10,jumpaway:10,antijumpaway:10,strength:2,intuition:2,swordskill:1,headarmor1:1,headarmor2:9,headarmorm:1,headarmord:9}
	},
	helmet63: {id:'helmet63',category:'helmets',slot:'w9',width:60,height:60,caption:'�������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:10}}}},
		common: {weight:5,price:51,durability:40},
		required: {level:5,endurance:18,strength:18},
		modify: {antijumpaway:50,hitpoints:12,headarmor1:6,headarmor2:20,headarmorf:5,headarmorm:1,headarmord:15}
	},
	helmet65: {id:'helmet65',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������� ����',
		common: {weight:15,price:160,durability:60},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:35,antijumpaway:25,intellect:1,magicdefence:20,firemagicdefence:20,watermagicdefence:-20,hitpoints:24,strength:2,headarmor1:9,headarmor2:32,headarmorf:8,headarmorm:1,headarmord:24},
		properties: {defence:50},
		setlink: {name:'firedown'}
	, upgrade: {
	helmet65_olditem: {id:'helmet65_olditem',caption:'���� �������������',old:true,
		common: {weight:5,price:51,durability:40},
		required: {dexterity:0,level:5,endurance:18,strength:18,intuition:25},
		modify: {anticriticalhit:0,antijumpaway:5,intellect:0,magicdefence:0,firemagicdefence:0,watermagicdefence:0,hitpoints:0,strength:0,headarmor1:4,headarmor2:18,headarmorf:3,headarmord:15,criticalpower:5,criticalhit:10,headarmorm:1},
		properties: {defence:0}
	}}

	},
	helmet60: {id:'helmet60',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ���������',
		common: {weight:10,price:51,durability:40},
		required: {level:5,endurance:19,strength:19},
		modify: {headarmor1:6,headarmor2:23,headarmorf:5,headarmorm:1,headarmord:18},
		properties: {sabredefence:150},
		defences: {crush:'good',cut:'good',sabre:'magnificent'}
	},
	helmet35: {id:'helmet35',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������� �����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:10}}}},
		common: {weight:12,price:53,durability:50},
		required: {dexterity:20,level:5,endurance:20,strength:20},
		modify: {criticalhit:35,jumpaway:35,hitpoints:12,headarmor1:1,headarmor2:15,headarmorm:1,headarmord:15}
	},
	helmet72: {id:'helmet72',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:10}}}},
		common: {weight:4,price:53,durability:20},
		required: {level:5,endurance:18,strength:18},
		modify: {intuition:1,watermagicdefence:30,hitpoints:33,strength:1}
	},
	helmet67: {id:'helmet67',category:'helmets',slot:'w9',width:60,height:60,caption:'�������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:10}}}},
		common: {weight:7,price:53,durability:30},
		required: {level:5,endurance:18,strength:18},
		modify: {criticalhit:15,intuition:1,hitpoints:18,strength:2,headarmor1:4,headarmor2:18,headarmorf:3,headarmorm:1,headarmord:15}
	},
	helmet38: {id:'helmet38',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ���������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:11}}}},
		common: {weight:5,price:55,durability:30},
		required: {intuition:20,level:5,endurance:20,strength:20},
		modify: {criticalpower:20,antijumpaway:-25,criticalhit:20,jumpaway:-25,headarmor1:1,headarmor2:15,headarmorm:1,headarmord:15}
	},
	helmet11: {id:'helmet11',category:'helmets',slot:'w9',width:60,height:60,caption:'����� ��������',old:true,
		common: {price:57,weight:9,durability:50},
		required: {strength:12,endurance:13,level:3},
		modify: {hitpoints:6,anticriticalhit:15,jumpaway:15,clubskill:2,headarmor:9}
	},
	helmet59: {id:'helmet59',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������',
		common: {weight:15,price:160,durability:50},
		required: {intuition:35,level:8,endurance:30,strength:30},
		modify: {criticalpower:10,anticriticalhit:25,antijumpaway:45,criticalhit:45,magicdefence:20,hitpoints:24,headarmor1:9,headarmor2:32,headarmorf:8,headarmorm:1,headarmord:24},
		setlink: {name:'sunset'}
	, upgrade: {
	helmet59_olditem: {id:'helmet59_olditem',caption:'���� �������',old:true,
		common: {weight:9,price:60,durability:30},
		required: {intuition:0,level:5,endurance:21,strength:21,dexterity:21},
		modify: {criticalpower:0,anticriticalhit:0,antijumpaway:0,criticalhit:0,magicdefence:0,hitpoints:12,headarmor1:6,headarmor2:20,headarmorf:5,headarmord:15,parry:3,shieldblock:3,counterstroke:3,headarmorm:1}
	}}

	},
	helmet10: {id:'helmet10',category:'helmets',slot:'w9',width:60,height:60,caption:'����� ������� ���������',old:true,alignment:'dark',
		common: {price:61,weight:9,durability:50},
		required: {strength:14,endurance:14,level:3},
		modify: {hitpoints:6,anticriticalhit:15,jumpaway:15,antijumpaway:15,axeskill:2,headarmor:9}
	},
	helmet45: {id:'helmet45',category:'helmets',slot:'w9',width:60,height:60,caption:'�������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:13}}}},
		common: {weight:10,price:68,durability:40},
		required: {level:6,endurance:21,strength:21},
		modify: {anticriticalhit:35,antijumpaway:25,weaponskill:1,headarmor1:6,headarmor2:20,headarmorf:5,headarmorm:1,headarmord:15}
	},
	helmet58: {id:'helmet58',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ���������',
		common: {weight:9,price:110,durability:50},
		required: {intuition:20,level:7,endurance:20,strength:20},
		modify: {magicdefence:60,airmagicdefence:30,headarmor1:8,headarmor2:28,headarmorf:7,headarmorm:1,headarmord:21}
	, upgrade: {
	helmet58_olditem: {id:'helmet58_olditem',old:true,
		common: {price:70,durability:30,weight:9},
		required: {level:6,endurance:15,strength:15,intuition:20},
		modify: {magicdefence:10,airmagicdefence:0,headarmor1:7,headarmor2:24,headarmorf:6,headarmord:18,firemagicdefence:20,watermagicdefence:20,earthmagicdefence:40,headarmorm:1}
	}}

	},
	whelmet5: {id:'whelmet5',category:'helmets',slot:'w9',width:60,height:60,caption:'������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:14}}}},
		common: {weight:2,price:70,durability:30},
		required: {intellect:30,level:6,endurance:15,strength:10},
		modify: {magicpower:3,hitpoints:30,mana:50,headarmor1:4,headarmor2:4}
	},
	helmet50: {id:'helmet50',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������� �����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:14}}}},
		common: {weight:10,price:71,durability:50},
		required: {level:6,endurance:21,strength:21},
		modify: {criticalpower:8,sabrepower:10,headarmor1:7,headarmor2:24,headarmorf:6,headarmorm:1,headarmord:18}
	},
	helmet39: {id:'helmet39',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:14}}}},
		common: {weight:8,price:71,durability:40},
		required: {level:6,endurance:21,strength:21},
		modify: {dexterity:4,strength:4,headarmor1:6,headarmor2:20,headarmorf:5,headarmorm:1,headarmord:15}
	},
	helmet75: {id:'helmet75',category:'helmets',slot:'w9',width:60,height:60,caption:'������������ ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:14}}}},
		common: {weight:5,price:71,durability:30},
		required: {level:6,endurance:21,strength:21},
		modify: {anticriticalhit:15,antijumpaway:20,jumpaway:20,strength:4,headarmor1:6,headarmor2:20,headarmorf:5,headarmorm:1,headarmord:15}
	},
	helmet70: {id:'helmet70',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:14}}}},
		common: {weight:7,price:72,durability:50},
		required: {dexterity:20,level:6,endurance:20,strength:20},
		modify: {anticriticalhit:25,antijumpaway:25,parry:5,headarmor1:4,headarmor2:18,headarmorf:3,headarmorm:1,headarmord:15}
	},
	helmet51: {id:'helmet51',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:15}}}},
		common: {weight:13,price:75,durability:40},
		required: {level:6,endurance:25,strength:25},
		modify: {anticriticalhit:10,parry:5,swordskill:2,hitpoints:6,headarmor1:7,headarmor2:27,headarmorf:6,headarmorm:1,headarmord:21}
	},
	helmet43: {id:'helmet43',category:'helmets',slot:'w9',width:60,height:60,caption:'��������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:15}}}},
		common: {weight:8,price:76,durability:40},
		required: {level:5,endurance:18,strength:18},
		modify: {anticriticalhit:20,jumpaway:-10,hitpoints:27,strength:2,headarmor1:7,headarmor2:24,headarmorf:6,headarmorm:1,headarmord:18},
		properties: {sabredefence:5,crushdefence:5}
	},
	helmet66: {id:'helmet66',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������ ���������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:15}}}},
		common: {weight:4,price:78,durability:30},
		required: {level:6,endurance:21,strength:21},
		modify: {antijumpaway:25,crushpower:10,hitpoints:33,headarmor1:5,headarmor2:22,headarmorf:4,headarmorm:1,headarmord:18},
		defences: {thrust:'weak',cut:'mediocre'}
	},
	helmet64: {id:'helmet64',category:'helmets',slot:'w9',width:60,height:60,caption:'������ ����',
		common: {weight:5,price:110,durability:40},
		required: {level:7,endurance:25,strength:27},
		modify: {anticriticalhit:15,antijumpaway:15,watermagicdefence:15,airmagicdefence:15,earthmagicdefence:15,hitpoints:21,strength:2,headarmor1:6,headarmor2:23,headarmorf:5,headarmorm:1,headarmord:18},
		properties: {defence:25},
		setlink: {name:'forest'}
	, upgrade: {
	helmet64_olditem: {id:'helmet64_olditem',old:true,
		common: {price:91,weight:5,durability:40},
		required: {level:5,endurance:18,strength:18},
		modify: {anticriticalhit:0,antijumpaway:0,watermagicdefence:60,airmagicdefence:0,earthmagicdefence:60,hitpoints:21,headarmor1:4,headarmor2:15,headarmorf:3,headarmord:12,strength:2,headarmorm:1},
		properties: {defence:25}
	}}

	},
	helmet33: {id:'helmet33',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ���������',
		common: {weight:9,price:92,durability:50},
		required: {level:7,endurance:25,strength:25},
		modify: {criticalhit:20,jumpaway:20,intuition:4,firemagicdefence:35,headarmor1:8,headarmor2:31,headarmorf:7,headarmorm:1,headarmord:24}
	},
	helmet28: {id:'helmet28',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������',
		common: {weight:12,price:93,durability:40},
		required: {level:7,endurance:25,strength:30},
		modify: {hitpoints:12,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {sabredefence:75,crushdefence:75},
		defences: {crush:'good',sabre:'good'}
	},
	helmet24: {id:'helmet24',category:'helmets',slot:'w9',width:60,height:60,caption:'���������� ����',
		common: {weight:9,price:93,durability:40},
		required: {level:7,endurance:24,strength:24},
		modify: {intuition:5,hitpoints:72,headarmor1:6,headarmor2:20,headarmorf:5,headarmorm:1,headarmord:15}
	},
	helmet47: {id:'helmet47',category:'helmets',slot:'w9',width:60,height:60,caption:'���������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:17}}}},
		common: {weight:18,price:89,durability:60},
		required: {intuition:24,level:6,endurance:21,strength:21},
		modify: {magicdefence:40,headarmor1:21,headarmor2:60,headarmorf:20,headarmorm:1,headarmord:40}
	},
	helmet73: {id:'helmet73',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������',
		common: {weight:10,price:112,durability:50},
		required: {intuition:20,level:7,endurance:25,strength:30},
		modify: {criticalpower:10,crushpower:10,clubskill:2,strength:2,headarmor1:8,headarmor2:28,headarmorf:7,headarmorm:1,headarmord:21},
		
	},
	helmet68: {id:'helmet68',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������',
		common: {weight:7,price:97,durability:40},
		required: {level:7,endurance:24,strength:24},
		modify: {sabrepower:20,axeskill:2,headarmor1:8,headarmor2:28,headarmorf:7,headarmorm:1,headarmord:21}
	},
	whelmet3: {id:'whelmet3',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������� ����',
		common: {weight:10,price:97,durability:50},
		required: {intuition:30,level:7,endurance:20,strength:20,wisdom:25},
		modify: {anticriticalhit:50,hitpoints:33,mana:50,headarmor1:7,headarmor2:24,headarmorf:6,headarmorm:1,headarmord:18}
	},
	helmet56: {id:'helmet56',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������',
		common: {weight:6,price:98,durability:40},
		required: {dexterity:30,intuition:30,level:7,endurance:10,strength:10},
		modify: {anticriticalhit:15,thrustpower:20,knifeskill:2,headarmor1:5,headarmor2:16,headarmorf:4,headarmorm:1,headarmord:12}
	},
	whelmet6: {id:'whelmet6',category:'helmets',slot:'w9',width:60,height:60,caption:'����� �������',
		common: {weight:2,price:110,durability:30},
		required: {intellect:25,level:7,endurance:15,strength:15,wisdom:30},
		modify: {intellect:4,defence:10,hitpoints:33,mana:70,headarmor1:5,headarmor2:5}
	},
	helmet74: {id:'helmet74',category:'helmets',slot:'w9',width:60,height:60,caption:'����������� ����',
		common: {weight:6,price:115,durability:50},
		required: {level:7,endurance:24,strength:24},
		modify: {anticriticalhit:30,intellect:1,hitpoints:33,strength:4,headarmor1:6,headarmor2:26,headarmorf:5,headarmorm:1,headarmord:21},
		properties: {defence:25}
	},
	helmet62: {id:'helmet62',category:'helmets',slot:'w9',width:60,height:60,caption:'������� ����',
		common: {weight:15,price:136,durability:50},
		required: {dexterity:33,level:8,endurance:30,strength:30},
		modify: {anticriticalhit:30,jumpaway:40,dexterity:3,magicdefence:30,hitpoints:33,headarmor1:11,headarmor2:34,headarmorf:10,headarmorm:1,headarmord:24}
	},
	helmet54: {id:'helmet54',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ����',
		common: {weight:12,price:153,durability:50},
		required: {intuition:33,level:8,endurance:30,strength:30},
		modify: {antijumpaway:30,criticalhit:60,magicdefence:40,strength:4,headarmor1:11,headarmor2:34,headarmorf:10,headarmorm:1,headarmord:24}
	},
	helmet44: {id:'helmet44',category:'helmets',slot:'w9',width:60,height:60,caption:'����� ������',   stats:true,
		common: {weight:10,price:167,durability:30},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {axeskill:5,headarmor1:11,headarmor2:35,headarmorf:10,headarmorm:1,headarmord:25}
	},
	whelmet1: {id:'whelmet1',category:'helmets',slot:'w9',width:60,height:60,caption:'����� ������� ����������',
		common: {weight:2,price:189,durability:30},
		required: {intellect:40,level:8,endurance:10,strength:10,wisdom:40},
		modify: {intuition:5,intellect:5,magicdefence:20,defence:50,hitpoints:33,headarmor1:6,headarmor2:6}
	},
	whelmet2: {id:'whelmet2',category:'helmets',slot:'w9',width:60,height:60,caption:'������ ������',
		common: {weight:5,price:197,durability:50},
		required: {intellect:30,level:8,endurance:15,strength:15,wisdom:40},
		modify: {intuition:5,intellect:2,firemagicskill:1,watermagicskill:1,airmagicskill:1,earthmagicskill:1,mana:200,headarmor1:1,headarmor2:12,headarmorm:1,headarmord:12}
	},
	helmet37: {id:'helmet37',category:'helmets',slot:'w9',width:60,height:60,caption:'������� ����',
		common: {weight:20,price:203,durability:100},
		required: {level:8,endurance:40,strength:25},
		modify: {anticriticalhit:15,swordskill:1,clubskill:1,knifeskill:1,axeskill:1,magicdefence:50,hitpoints:66,headarmor1:31,headarmor2:75,headarmorf:30,headarmorm:1,headarmord:45},
		properties: {defence:25},
		setlink: {name:'siege'}
	},
	helmet79: {id:'helmet79',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �����',requireditems:{shop:{exchanger:'shop', items: {mater18:{id:'mater18',caption:'������������ ������',count:5},mater12:{id:'mater12',caption:'�����',count:6}}}},
		common: {weight:15,price:210,durability:60},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:35,jumpaway:40,intellect:2,weaponskill:1,magicdefence:40,hitpoints:45,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27},
		properties: {defence:50},
		setlink: {name:'spider'},
		defences: {crush:'good',sabre:'normal'}
	,upgrade:{
	helmet79_1: {id:'helmet79_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ����� [10]',requireditems:{shop:{exchanger:'shop', items: {helmet79:{id:'helmet79',caption:'���� �����',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:15,price:245,durability:60},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,capitalreputation:10000},
		modify: {anticriticalhit:50,jumpaway:55,intellect:2,weaponskill:1,magicdefence:50,hitpoints:55,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:55},
		setlink: {name:''},
		defences: {crush:'good',sabre:'normal'}
	}}
	},
	helmet79_1: {id:'helmet79_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ����� [10]',requireditems:{shop:{exchanger:'shop', items: {mater18:{id:'mater18',caption:'������������ ������',count:5},mater12:{id:'mater12',caption:'�����',count:6}}}},
		common: {weight:15,price:245,durability:60},
		required: {dexterity:50,intuition:15,level:10,endurance:35,strength:35,capitalreputation:10000},
		modify: {anticriticalhit:50,jumpaway:55,intellect:2,weaponskill:1,magicdefence:50,hitpoints:55,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:55},
		setlink: {name:''},
		defences: {crush:'good',sabre:'normal'}
	},
	helmet80: {id:'helmet80',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater15:{id:'mater15',caption:'������� �������',count:5},mater5:{id:'mater5',caption:'������',count:6}}}},
		common: {weight:15,price:210,durability:60},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:40,antijumpaway:20,criticalhit:45,magicdefence:50,hitpoints:33,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27},
		properties: {defence:50},
		setlink: {name:'bloodmoon'}
	,  upgrade:{
	helmet80_1: {id:'helmet80_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������� ���� [10]',requireditems:{shop:{exchanger:'shop', items: {helmet80:{id:'helmet80',caption:'���� �������� ����',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:15,price:210,durability:60},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,capitalreputation:10000},
		modify: {anticriticalhit:50,antijumpaway:30,criticalhit:60,magicdefence:60,hitpoints:40,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:55},
		setlink: {name:''}
  	}}

	},
	helmet80_1: {id:'helmet80_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� �������� ���� [10]',requireditems:{shop:{exchanger:'shop', items: {mater15:{id:'mater15',caption:'������� �������',count:5},mater5:{id:'mater5',caption:'������',count:6}}}},
		common: {weight:15,price:210,durability:60},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,capitalreputation:10000},
		modify: {anticriticalhit:50,antijumpaway:30,criticalhit:60,magicdefence:60,hitpoints:40,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:55},
		setlink: {name:''}
     },
	helmet82_du2: {id:'helmet82_du2',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater16:{id:'mater16',caption:'��������� ������',count:5},mater2:{id:'mater2',caption:'������',count:6}}}},
		common: {weight:15,price:210,durability:60},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:45,antijumpaway:35,magicdefence:20,firemagicdefence:10,watermagicdefence:-5,hitpoints:33,strength:4,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27},
		properties: {defence:75},
		setlink: {name:'morningsun'}
	, upgrade: {
	helmet82_du2_1: {id:'helmet82_du2_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������� ������ [10]',requireditems:{shop:{exchanger:'shop', items: {helmet82_du2:{id:'helmet82_du2',caption:'���� ��������� ������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:15,price:245,durability:60},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,capitalreputation:10000},
		modify: {anticriticalhit:55,antijumpaway:45,magicdefence:30,firemagicdefence:20,watermagicdefence:-5,hitpoints:40,strength:4,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:80},
		setlink: {name:''}
    }}
	},
	helmet82_du2_1: {id:'helmet82_du2_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������� ������ [10]',requireditems:{shop:{exchanger:'shop', items: {mater16:{id:'mater16',caption:'��������� ������',count:5},mater2:{id:'mater2',caption:'������',count:6}}}},
		common: {weight:15,price:245,durability:60},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,capitalreputation:10000},
		modify: {anticriticalhit:55,antijumpaway:45,magicdefence:30,firemagicdefence:20,watermagicdefence:-5,hitpoints:40,strength:4,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:80},
		setlink: {name:''}
	},
	helmet84: {id:'helmet84',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ���������',requireditems:{shop:{exchanger:'shop', items: {mater14:{id:'mater14',caption:'������� �����',count:5},mater10:{id:'mater10',caption:'���� �������� ������',count:6}}}},
		common: {weight:15,price:210,durability:60},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {anticriticalhit:30,criticalhit:45,jumpaway:20,dexterity:2,magicdefence:50,hitpoints:24,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27},
		properties: {defence:50},
		setlink: {name:'misdeed'}
	,upgrade: {
     helmet84_1: {id:'helmet84_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {helmet84:{id:'helmet84',caption:'���� ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:15,price:245,durability:60},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,capitalreputation:10000},
		modify: {anticriticalhit:40,criticalhit:60,jumpaway:30,dexterity:2,magicdefence:60,hitpoints:33,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:55},
		setlink: {name:''}
   	}}
	},
	helmet84_1: {id:'helmet84_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {mater14:{id:'mater14',caption:'������� �����',count:5},mater10:{id:'mater10',caption:'���� �������� ������',count:6}}}},
		common: {weight:15,price:245,durability:60},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,capitalreputation:10000},
		modify: {anticriticalhit:40,criticalhit:60,jumpaway:30,dexterity:2,magicdefence:60,hitpoints:33,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:55},
		setlink: {name:''}
	},
	helmet85: {id:'helmet85',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ���������',requireditems:{shop:{exchanger:'shop', items: {mater16:{id:'mater16',caption:'��������� ������',count:5},mater3:{id:'mater3',caption:'�������',count:6}}}},
		common: {weight:15,price:210,durability:60},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {anticriticalhit:45,antijumpaway:70,criticalhit:50,magicdefence:15,hitpoints:42,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27},
		properties: {defence:50},
		setlink: {name:'scorpion'}
    , upgrade: {
    helmet85_1: {id:'helmet85_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {helmet85:{id:'helmet85',caption:'���� ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:15,price:245,durability:60},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,capitalreputation:10000},
		modify: {anticriticalhit:55,antijumpaway:80,criticalhit:60,magicdefence:25,hitpoints:53,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:55},
		setlink: {name:''}
      }}
	},
	helmet85_1: {id:'helmet85_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {mater16:{id:'mater16',caption:'��������� ������',count:5},mater3:{id:'mater3',caption:'�������',count:6}}}},
		common: {weight:15,price:245,durability:60},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,capitalreputation:10000},
		modify: {anticriticalhit:55,antijumpaway:80,criticalhit:60,magicdefence:25,hitpoints:53,headarmor1:10,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30},
		properties: {defence:55},
		setlink: {name:''}
	},
	helmet81: {id:'helmet81',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater19:{id:'mater19',caption:'�������� ������',count:5},mater6:{id:'mater6',caption:'�������� ������',count:6}}}},
		common: {weight:20,price:215,durability:100},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {anticriticalhit:20,knifeskill:1,axeskill:1,clubskill:1,swordskill:1,magicdefence:50,hitpoints:66,headarmor1:36,headarmor2:85,headarmorf:35,headarmorm:1,headarmord:50},
		properties: {defence:25},
		setlink: {name:'losttime'}
	,upgrade: {
	helmet81_1: {id:'helmet81_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������� ������ [10]',requireditems:{shop:{exchanger:'shop', items: {helmet81:{id:'helmet81',caption:'���� ������� ������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:20,price:250,durability:100},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,capitalreputation:10000},
		modify: {anticriticalhit:30,weaponskill:1,magicdefence:60,hitpoints:77,headarmor1:41,headarmor2:100,headarmorf:40,headarmorm:1,headarmord:60},
		properties: {defence:30},
		setlink: {name:''}
	 }}
	},
	helmet81_1: {id:'helmet81_1',category:'helmets',slot:'w9',width:60,height:60,caption:'���� ������� ������ [10]',requireditems:{shop:{exchanger:'shop', items: {mater19:{id:'mater19',caption:'�������� ������',count:5},mater6:{id:'mater6',caption:'�������� ������',count:6}}}},
		common: {weight:20,price:250,durability:100},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,capitalreputation:10000},
		modify: {anticriticalhit:30,weaponskill:1,magicdefence:60,hitpoints:77,headarmor1:41,headarmor2:100,headarmorf:30,headarmorm:1,headarmord:60},
		properties: {defence:30},
		setlink: {name:''}
	},
	helmet83: {id:'helmet83',category:'helmets',slot:'w9',width:60,height:60,caption:'����� ���������',requireditems:{shop:{exchanger:'shop', items: {mater17:{id:'mater17',caption:'���� �������� ������',count:5},mater1:{id:'mater1',caption:'����� ��������� �����',count:6}}}},
		common: {weight:5,price:215,durability:50},
		required: {intellect:40,level:9,wisdom:50},
		modify: {intellect:6,magicskill:1,magicdefence:30,hitpoints:60,mana:120,headarmor1:8,headarmor2:8},
		setlink: {name:'determination'}
	, upgrade: {
	 helmet83_1: {id:'helmet83_1',category:'helmets',slot:'w9',width:60,height:60,caption:'����� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {helmet83:{id:'helmet83',caption:'����� ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:50}}}},
		common: {weight:5,price:250,durability:50},
		required: {intellect:50,level:10,wisdom:60,capitalreputation:10000},
		modify: {intellect:6,magicdefence:40,hitpoints:78,mana:140,headarmor1:10,headarmor2:10},
		setlink: {name:''}
	 },
	helmet83_fury: {id:'helmet83_fury',caption:'����� ������',old:true,
		modify: {magicskill:0,intellect:4,magicdefencereduce:2,intuition:4,magicdefence:30,hitpoints:30,mana:100,headarmor1:8,headarmor2:8}
	}}

	},
	helmet83_1: {id:'helmet83_1',category:'helmets',slot:'w9',width:60,height:60,caption:'����� ��������� [10]',requireditems:{shop:{exchanger:'shop', items: {mater17:{id:'mater17',caption:'���� �������� ������',count:5},mater1:{id:'mater1',caption:'����� ��������� �����',count:6}}}},
		common: {weight:5,price:250,durability:50},
		required: {intellect:50,level:10,wisdom:60,capitalreputation:10000},
		modify: {intellect:6,magicskill:1,magicdefence:40,hitpoints:78,mana:140,headarmor1:10,headarmor2:10},
		setlink: {name:''}
	},
	helmet90: {id:'helmet90',category:'helmets',slot:'w9',width:60,height:60,caption:'����� �������������',
		common: {weight:2,price:192,durability:30},
		required: {intellect:25,level:8,endurance:15,strength:15,wisdom:30},
		modify: {intellect:5,magicskill:1,mana:100,hitpoints:45,headarmor1:4,headarmor2:9,headarmorm:3,headarmord:6},
		properties: {defence:50},
  setlink: {name:'rashness'}
	},
	helmet91: {id:'helmet91',category:'helmets',slot:'w9',width:60,heigth:60,caption:'���� �������� ����',binding:'boe',
       common: {weight:5,price:363,durability:100},
       required: {intellect:75,level:10,wisdom:50},
       modify: {magicpower:10,intellect:10,hitpoints:100,mana:160,headarmor1:10,headarmor2:10,defence:50}

    },
	


	
	
santa1: {id:'santa1',category:'capes',slot:'wcape',width:60,height:60,caption:'�������� ����� ',
		common: {durability:50},
		required: {level:8,sex:'male'},
		 modify: {magicdefence:15,defence:15,stats:7,hitpoints:50},	
	upgrade: {
	
	santa19: {id:'santa19',level:9,
		common: {durability:50},
		required: {level:9},
		modify: {magicdefence:20,defence:20,stats:8,hitpoints:60}
	},
	santa110: {id:'santa110',level:10,
		common: {durability:50},
		required: {level:10},
		modify: {magicdefence:25,defence:25,stats:9,hitpoints:70}
	}}

	},

mask1017: {id:'mask1017',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'������� ������ ',
		common: {durability:50},
		required: {},
		 modify: {stats:9,hitpoints:100,magicdefence:30,defence:30},
},

	dmhelmet: {id:'dmhelmet',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� ���� ������ ',
		common: {durability:50},
		required: {level:8,sex:'male'},
		 modify: {stats:5,hitpoints:70},	
	upgrade: {
	
	dmhelmet9: {id:'dmhelmet9',level:9,
		common: {durability:50},
		required: {level:9},
		modify: {stats:7,hitpoints:70}
	},
	dmhelmet10: {id:'dmhelmet10',level:10,
		common: {durability:50},
		required: {level:10},
		modify: {stats:9,hitpoints:90}
	}}

	},
	shelmet: {id:'shelmet',category:'helmets',slot:'w9',width:60,height:60,caption:'�������� ����������',binding:'bop',
		common: {price:22,durability:50,expirationdate:60},
		required: {level:4,sex:'female'},
	    modify: {stats:5,hitpoints:70},	
	},
	
	
	
	
	helmet206: {id:'helmet206',category:'helmets',slot:'w9',width:60,height:60,caption:'Smashing Helmet',imp1:true,binding:'boe',
		common: {weight:15,durability:30,eprice:3.19},
		required: {level:8},
		modify: {anticriticalhit:35,antijumpaway:30,weaponskill:1,magicdefence:30,hitpoints:48,headarmor1:13,headarmor2:42,headarmorf:12,headarmorm:1,headarmord:30},
		properties: {defence:50},
		setlink: {name:'smash'}
	},
	helmet207: {id:'helmet207',category:'helmets',slot:'w9',width:60,height:60,caption:'Desert Helmet',imp1:true,binding:'boe',
		common: {weight:15,durability:30,eprice:3.19},
		required: {level:8},
		modify: {anticriticalhit:30,jumpaway:35,dexterity:1,weaponskill:1,magicdefence:30,hitpoints:48,headarmor1:13,headarmor2:42,headarmorf:12,headarmorm:1,headarmord:30},
		properties: {defence:50},
		setlink: {name:'wanderer'}
	},
	
	
	
	
	
	helmet_illusion1: {id:'helmet_illusion1',category:'helmets',slot:'w9',width:60,height:60,caption:'������������� �������',description:'������� �������'
	},
	helmet_illusion2: {id:'helmet_illusion2',category:'helmets',slot:'w9',width:60,height:60,caption:'������� �������',description:'������� �������'
	},
	venok1: {id:'venok1',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� �������',
		common: {weight:1,price:3,durability:30,expirationdate:3},
		required: {sex:'female',level:4},
  modify: {power:15,magicdefence:50,defence:75,hitpoints:33}
	},
	venok2: {id:'venok2',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� ������� �������',
		common: {weight:1,price:2,durability:30,expirationdate:3},
		required: {sex:'female',level:4},
  modify: {hitpoints:120}
	},
	angel_game_armored_curse: {id:'angel_game_armored_curse',category:'wreaths',slot:'wwreath',width:60,height:60,owner:'Armored Saint',caption:'��������� ����� ����������',description:'���������� ������������ ����� ������ �� ������ ������ - ������ ������ � ���� ����� ��������',
		modify: {hitpoints:30}
	},
	venok3: {id:'venok3',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� ����������� �������',
		common: {weight:1,price:3,durability:30,expirationdate:3},
		required: {sex:'female',level:4},
  modify: {power:15,dexterity:2,intuition:2,intellect:2,magicdefence:30,defence:75,hitpoints:33,strength:2}
	},
	venok4: {id:'venok4',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� ������ �������',
		common: {weight:1,price:3,durability:30,expirationdate:3},
		required: {sex:'female',level:4},
  modify: {power:25,defence:125}
	},
	venok5: {id:'venok5',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� ������� �������',
		common: {weight:1,price:3,durability:30,expirationdate:3},
		required: {sex:'female',level:4},
  modify: {magicdefence:70,defence:175}
	},
	venok6: {id:'venok6',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'�����',
		common: {weight:1,price:1,durability:30,expirationdate:30},
		required: {sex:'female'}
	},
	venok7: {id:'venok7',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� ���������',
		common: {weight:1,price:100,durability:1000,expirationdate:365,probability:50},
		required: {sex:'male'},
		modify: {hitpoints:33,hpspeed:50,manaspeed:50},
		magic: {name:'spell_seduct',caption:'����������',description:'1 ��. � �����'}
	},
	venok8: {id:'venok8',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� ���������',
		common: {weight:1,price:100,durability:1000,expirationdate:365,probability:50},
		required: {sex:'female'},
		modify: {hitpoints:33,hpspeed:50,manaspeed:50},
		magic: {name:'spell_seduct',caption:'����������',description:'1 ��. � �����'}
	},
	venok9: {id:'venok9',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'��������� �������',description:'���� �� �������� ���� Angels city, 3 �����',
		common: {weight:1,price:1,indestructible:'yes'},
		required: {sex:'female'},
		modify: {intellect:1,hitpoints:6}
	},
	venok10: {id:'venok10',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����������� �������',description:'���� �� �������� ���� Angels city, 2 �����',
		common: {weight:1,price:1,indestructible:'yes'},
		required: {sex:'female'},
		modify: {intellect:2,hitpoints:12}
	},
	venok11: {id:'venok11',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'������� �������',description:'���� �� �������� ���� Angels city, 1 �����',
		common: {weight:1,price:1,indestructible:'yes'},
		required: {sex:'female'},
		modify: {intellect:3,hitpoints:18}
	},
	suven2007_36: {id:'suven2007_36',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'������� ��������',description:'�������� ����.',requireditems:{nyshop:{exchanger:'nyshop', items: {snowball1:{id:'snowball1',caption:'������',count:30}}}},
		common: {weight:1,price:25,durability:10,expirationdate:14},
		required: {sex:'female'},
		modify: {watermagicpower:50}
	},
	venok12: {id:'venok12',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� ��������� 2008',description:'������� �������������� �������� ��������� � ��������� 2008�',
		common: {weight:1,price:1,durability:1},
		required: {sex:'female'},
		modify: {stats:3,hitpoints:50}
	},
	venok13: {id:'venok13',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'����� ��������� 2008',description:'������� ���������� �������� ��������� � ��������� 2008�',
		common: {weight:1,price:1,durability:1},
		required: {sex:'male'},
		modify: {stats:3,hitpoints:50}
	},
	venok14: {id:'venok14',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'������� ������� 2008',description:'������� �������������� �������� ������� 2008.',
		common: {weight:1,price:1,durability:1},
		required: {sex:'female'},
		modify: {stats:3,hitpoints:50}
	},
	venok15: {id:'venok15',category:'wreaths',slot:'wwreath',width:60,height:60,caption:'������ ������� 2008',description:'������� ���������� �������� ������� 2008.',
		common: {weight:1,price:1,durability:1},
		required: {sex:'male'},
		modify: {stats:3,hitpoints:50}
	},

	braslet1: {id:'braslet1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� �����',
		common: {weight:2,price:5,durability:10},
		required: {level:2,endurance:12,strength:12},
		modify: {maxdamage:2}
	},
	braslet13: {id:'braslet13',category:'bracelets',slot:'w13',width:60,height:40,caption:'������������� �������',
		common: {weight:1,price:13,durability:30},
		required: {level:2,endurance:10,strength:10},
		modify: {headarmor1:1,headarmor2:6,headarmorm:1,headarmord:6,bodyarmor1:1,bodyarmor2:6,bodyarmorm:1,bodyarmord:6,waistarmor1:1,waistarmor2:6,waistarmorm:1,waistarmord:6,legarmor1:1,legarmor2:6,legarmorm:1,legarmord:6}
	},
	braslet20: {id:'braslet20',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ���������',
		common: {weight:1,price:14,durability:20},
		required: {dexterity:6,level:2,endurance:8,strength:8},
		modify: {antijumpaway:10,strength:1}
	, upgrade: {
	braslet2_olditem: {id:'braslet2_olditem',old:true,
		common: {price:42,weight:1,durability:20},
		required: {level:5,endurance:15,strength:15,dexterity:6},
		modify: {anticriticalhit:0,defence:0,watermagicdefence:14,airmagicdefence:10,earthmagicdefence:14,antijumpaway:10,strength:1}
	}}

	},
	braslet18: {id:'braslet18',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������',
		common: {weight:1,price:21,durability:30},
		required: {level:3,endurance:12,strength:12},
		modify: {hitpoints:33}
	},
	braslet6: {id:'braslet6',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:1,price:30,durability:20},
		required: {intuition:15,level:4,endurance:10,strength:10},
		modify: {antijumpaway:10,criticalhit:15,strength:2}
	},
	braslet9: {id:'braslet9',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:5,price:30,durability:30},
		required: {dexterity:15,level:4,endurance:10,strength:10},
		modify: {anticriticalhit:10,jumpaway:25,dexterity:2}
	},
	braslet26: {id:'braslet26',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:1,price:30,durability:30},
		required: {intellect:20,level:4},
		modify: {hitpoints:12,mana:35}
	},
	braslet34_2: {id:'braslet34_2',category:'bracelets',slot:'w13',width:60,height:40,caption:'�������� �������� [4]',
		common: {weight:2,price:54,durability:20},
		required: {intellect:20,level:4},
		modify: {anticriticalhit:15,intellect:3,hitpoints:18,mana:20}
	},
	braslet35_2: {id:'braslet35_2',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������� [4]',
		common: {weight:2,price:49,durability:20},
		required: {dexterity:5,intuition:5,level:4,endurance:15,strength:15},
		modify: {anticriticalhit:5,antijumpaway:5,criticalhit:5,jumpaway:5,defence:10,hitpoints:6,dexterity:1,intuition:1,strength:1}
	},
	naruchi81: {id:'naruchi81',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:8}}}},
		common: {weight:2,price:40,durability:30},
		required: {intuition:21,level:5,endurance:20,strength:20},
		modify: {anticriticalhit:10,antijumpaway:10,criticalhit:20,strength:2}
	},
	braslet28: {id:'braslet28',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:9}}}},
		common: {weight:1,price:45,durability:30},
		required: {intellect:25,level:5,endurance:10},
		modify: {intellect:1,hitpoints:21,mana:40}
	},
	braslet11: {id:'braslet11',category:'bracelets',slot:'w13',width:60,height:40,caption:'�������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:12}}}},
		common: {weight:1,price:61,durability:40},
		required: {intuition:15,level:6,endurance:15,strength:15},
		modify: {anticriticalhit:15,criticalhit:10,defence:25,strength:2}
	},
	braslet10: {id:'braslet10',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:13}}}},
		common: {weight:2,price:61,durability:30},
		required: {dexterity:10,intuition:10,level:4,endurance:10,strength:10},
		modify: {dexterity:2,intuition:2,hitpoints:18,strength:3}
	},
	braslet23: {id:'braslet23',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:12}}}},
		common: {weight:1,price:62,durability:60},
		required: {level:6,endurance:15,strength:15},
		modify: {crushpower:5,strength:6}
	},
	braslet8: {id:'braslet8',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:12}}}},
		common: {weight:1,price:60,durability:30},
		required: {level:6,endurance:25,strength:30},
		modify: {defence:35,headarmor1:1,headarmor2:9,headarmorm:1,headarmord:9,bodyarmor1:1,bodyarmor2:9,bodyarmorm:1,bodyarmord:9,waistarmor1:1,waistarmor2:9,waistarmorm:1,waistarmord:9,legarmor1:1,legarmor2:9,legarmorm:1,legarmord:9}
	, upgrade: {
	braslet8_olditem: {id:'braslet8_olditem',old:true,
		common: {price:63,weight:1,durability:30},
		required: {level:6,endurance:25,strength:30},
		modify: {shieldblock:5,defence:25,headarmor1:1,headarmor2:12,headarmorm:1,headarmord:12,bodyarmor1:1,bodyarmor2:12,bodyarmorm:1,bodyarmord:12,waistarmor1:1,waistarmor2:12,waistarmorm:1,waistarmord:12,legarmor1:1,legarmor2:12,legarmorm:1,legarmord:12}
	}}

	},
	braslet3: {id:'braslet3',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ������� �����������',
		common: {weight:1,price:79,durability:30},
		required: {dexterity:30,level:7,endurance:15,strength:15},
		modify: {parry:10,defence:15}
	},
	braslet16: {id:'braslet16',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ������',
		common: {weight:1,price:79,durability:30},
		required: {dexterity:20,intuition:20,level:7,endurance:10,strength:20},
		modify: {antijumpaway:5,sabrepower:20,strength:2}
	},
	braslet5: {id:'braslet5',category:'bracelets',slot:'w13',width:60,height:40,caption:'�������������� �������',
		common: {weight:1,price:80,durability:30},
		required: {level:7,endurance:10,strength:10,wisdom:25},
		modify: {intellect:1,magicdefence:10,mana:100}
	, upgrade: {
	braslet5_olditem: {id:'braslet5_olditem',old:true,
		common: {price:79},
		modify: {magicdefence:0,intuition:1,airmagicdefence:10}
	}}

	},
	braslet21: {id:'braslet21',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ������',
		common: {weight:1,price:79,durability:30},
		required: {dexterity:35,intuition:35,level:7,endurance:15,strength:15},
		modify: {dexterity:2,intuition:2,weaponskill:1,strength:4}
	, upgrade: {
	braslet21_olditem: {id:'braslet21_olditem',caption:'������� ����',old:true,
		common: {price:98,weight:1,durability:30},
		required: {dexterity:35,intuition:35,level:7,endurance:15,strength:15},
		modify: {swordskill:0,clubskill:0,knifeskill:0,axeskill:0,strength:0,jumpaway:5,thrustpower:10,piercearmor:5,dexterity:2,intuition:2}
	}}

	},
	braslet2: {id:'braslet2',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������',
		common: {weight:1,price:80,durability:40},
		required: {level:7,endurance:25,strength:25},
		modify: {anticriticalhit:15,antijumpaway:15,intuition:2,defence:25,watermagicdefence:10,airmagicdefence:10,earthmagicdefence:10},
		setlink: {name:'forest'}
	},
	braslet12: {id:'braslet12',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������',
		common: {weight:1,price:80,durability:30},
		required: {level:7,endurance:30,strength:30},
		modify: {criticalpower:10,crushpower:10,clubskill:1,hitpoints:18}
	, upgrade: {
	braslet12_olditem: {id:'braslet12_olditem',caption:'���������� ������',old:true,
		common: {price:58,weight:1,durability:30},
		required: {level:6,endurance:10,strength:10,dexterity:20,intuition:20},
		modify: {criticalpower:0,crushpower:0,clubskill:0,hitpoints:0,thrustpower:7,intuition:2}
	}}

	},
	braslet29: {id:'braslet29',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������',
		common: {weight:1,price:80,durability:30},
		required: {intellect:25,level:7,endurance:15,strength:15,wisdom:30},
		modify: {intellect:2,defence:10,hitpoints:30,mana:60}
	},
	braslet19: {id:'braslet19',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ������',
		common: {weight:1,price:91,durability:30},
		required: {dexterity:30,intuition:30,level:7},
		modify: {thrustpower:25,knifeskill:1,strength:1}
	},
	braslet22: {id:'braslet22',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� �������',
		common: {weight:1,price:92,durability:40},
		required: {dexterity:20,intuition:20,level:7,endurance:20,strength:20},
		modify: {criticalpower:10,power:10}
	},
	braslet35_1: {id:'braslet35_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������� [7]',
		common: {weight:2,price:103,durability:20},
		required: {dexterity:10,intuition:10,level:7,endurance:25,strength:25},
		modify: {anticriticalhit:10,antijumpaway:10,criticalhit:10,jumpaway:10,magicdefence:10,defence:15,hitpoints:12,dexterity:2,intuition:2,strength:2}
	},
	braslet34_1: {id:'braslet34_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'�������� �������� [7]',
		common: {weight:2,price:101,durability:20},
		required: {intellect:30,wisdom:30,level:7},
		modify: {anticriticalhit:25,magicpower:5,intellect:5,defence:10,hitpoints:12}
	},
	braslet7: {id:'braslet7',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ��������',
		common: {weight:1,price:109,durability:50},
		required: {intuition:30,level:8,endurance:30,strength:30},
		modify: {criticalpower:5,criticalhit:25,crushpower:20,clubskill:1,strength:1}
	},
	braslet14: {id:'braslet14',category:'bracelets',slot:'w13',width:60,height:40,caption:'��������� �������',
		common: {weight:2,price:109,durability:60},
		required: {level:8,endurance:35,strength:35},
		modify: {antijumpaway:15,crushpower:10,firemagicdefence:15,airmagicdefence:15,hitpoints:33,strength:4}
	},
	braslet4: {id:'braslet4',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ������',
		common: {weight:1,price:110,durability:30},
		required: {intuition:35,level:8,endurance:30,strength:30},
		modify: {criticalpower:15,criticalhit:20,weaponskill:2,strength:2},
		setlink: {name:'sunset'}
	, upgrade: {
	braslet4_olditem: {id:'braslet4_olditem',caption:'������� ������',old:true,
		common: {price:40,weight:1,durability:30},
		required: {intuition:20,level:5,endurance:15,strength:15},
		modify: {criticalpower:5,criticalhit:15,swordskill:0,clubskill:0,knifeskill:0,axeskill:0,strength:0}
	}}

	},
	braslet15: {id:'braslet15',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ������',
		common: {weight:5,price:110,durability:50},
		required: {dexterity:20,intuition:25,level:8},
		modify: {anticriticalhit:5,antijumpaway:10,sabrepower:25,axeskill:1,strength:2}
	},
	braslet17: {id:'braslet17',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� �������� ���',
		common: {weight:1,price:110,durability:50},
		required: {dexterity:32,intuition:25,level:8},
		modify: {anticriticalhit:5,jumpaway:15,thrustpower:25,dexterity:2,knifeskill:1}
	},
	braslet30: {id:'braslet30',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������� ����',
		common: {weight:1,price:110,durability:40},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:25,antijumpaway:25,weaponskill:1,magicdefence:10,hitpoints:33,strength:4},
		setlink: {name:'firedown'}
	},
	braslet40: {id:'braslet40',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������������',
		common: {weight:1,price:108,durability:40},
		required: {intellect:25,level:8,endurance:15,strength:15,wisdom:30},
		modify: {magicpower:5,intellect:5,hitpoints:27,mana:40},
 	setlink: {name:'rashness'}
	},
	naruchi76: {id:'naruchi76',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater12:{id:'mater12',caption:'�����',count:3}}}},
		common: {weight:2,price:140,durability:30},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:25,antijumpaway:25,power:15,intellect:1,hitpoints:18},
		setlink: {name:'spider'}
	, upgrade: {
	naruchi76_1: {id:'naruchi76_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ����� [10]',binding:'bop',baseitem:'naruchi76',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},naruchi76:{id:'naruchi76',caption:'������ �����',count:1}}},
		common: {weight:2,price:168,durability:30},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {anticriticalhit:35,antijumpaway:35,power:17,intellect:1,hitpoints:26},
		setlink: {name:''}
	}}

	},
	naruchi76_1: {id:'naruchi76_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ����� [10]',binding:'bop',baseitem:'naruchi76',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},naruchi76:{id:'naruchi76',caption:'������ �����',count:1}}},
		common: {weight:2,price:168,durability:30},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {anticriticalhit:35,antijumpaway:35,power:17,intellect:1,hitpoints:26},
		setlink: {name:''}
	},
	braslet24: {id:'braslet24',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater5:{id:'mater5',caption:'������',count:3}}}},
		common: {weight:2,price:140,durability:40},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {criticalpower:20,anticriticalhit:10,criticalhit:25,weaponskill:2,strength:3},
		setlink: {name:'bloodmoon'}
	, upgrade: {
	braslet24_1: {id:'braslet24_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� �������� ���� [10]',binding:'bop',baseitem:'braslet24',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet24:{id:'braslet24',caption:'������� �������� ����',count:1}}},
		common: {weight:2,price:167,durability:40},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {criticalpower:23,anticriticalhit:25,criticalhit:40,weaponskill:2,strength:3},
		setlink: {name:''}
	}}

	},
	braslet24_1: {id:'braslet24_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� �������� ���� [10]',binding:'bop',baseitem:'braslet24',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet24:{id:'braslet24',caption:'������� �������� ����',count:1}}},
		common: {weight:2,price:167,durability:40},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {criticalpower:23,anticriticalhit:25,criticalhit:40,weaponskill:2,strength:3},
		setlink: {name:''}
	},
	braslet25: {id:'braslet25',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater6:{id:'mater6',caption:'�������� ������',count:3}}}},
		common: {weight:2,price:140,durability:40},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {antijumpaway:20,weaponskill:2,magicdefence:30,hitpoints:33,strength:2},
		properties: {defence:25},
		setlink: {name:'losttime'}
	, upgrade: {
	braslet25_1: {id:'braslet25_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ������� ������ [10]',binding:'bop',baseitem:'braslet25',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet25:{id:'braslet25',caption:'������ ������� ������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,sandreputation:10000},
		modify: {antijumpaway:30,weaponskill:2,magicdefence:40,hitpoints:41,strength:2},
		properties: {defence:30},
		setlink: {name:''}
	}}

	},
	braslet25_1: {id:'braslet25_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ������� ������ [10]',binding:'bop',baseitem:'braslet25',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet25:{id:'braslet25',caption:'������ ������� ������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,sandreputation:10000},
		modify: {antijumpaway:30,weaponskill:2,magicdefence:40,hitpoints:41,strength:2},
		properties: {defence:30},
		setlink: {name:''}
	},
	braslet26_du2: {id:'braslet26_du2',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:1},mater2:{id:'mater2',caption:'������',count:3}}}},
		common: {weight:2,price:140,durability:40},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:25,antijumpaway:25,power:5,weaponskill:2,magicdefence:20,hitpoints:33},
		setlink: {name:'morningsun'}
	, upgrade: {
	braslet26_du2_1: {id:'braslet26_du2_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������� ������ [10]',binding:'bop',baseitem:'braslet26_du2',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet26_du2:{id:'braslet26_du2',caption:'������ ��������� ������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,sandreputation:10000},
		modify: {anticriticalhit:35,antijumpaway:35,power:5,weaponskill:2,magicdefence:30,hitpoints:37},
		setlink: {name:''}
	}}

	},
	braslet26_du2_1: {id:'braslet26_du2_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������� ������ [10]',binding:'bop',baseitem:'braslet26_du2',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet26_du2:{id:'braslet26_du2',caption:'������ ��������� ������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,sandreputation:10000},
		modify: {anticriticalhit:35,antijumpaway:35,power:5,weaponskill:2,magicdefence:30,hitpoints:37},
		setlink: {name:''}
	},
	braslet27: {id:'braslet27',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:1},mater1:{id:'mater1',caption:'����� ��������� �����',count:3}}}},
		common: {weight:2,price:140,durability:50},
		required: {intellect:40,level:9,wisdom:50},
		modify: {intellect:2,magicdefence:10,hitpoints:60,mana:120},
		setlink: {name:'determination'}
	, upgrade: {
	braslet27_fury: {id:'braslet27_fury',caption:'������ ������',old:true,
		modify: {magicdefencereduce:2,intuition:2,intellect:2,magicdefence:10,hitpoints:18,mana:80}
	},
	braslet27_1: {id:'braslet27_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������� [10]',binding:'bop',baseitem:'braslet27',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet27:{id:'braslet27',caption:'������ ���������',count:1}}},
		common: {weight:2,price:168,durability:50},
		required: {intellect:50,level:10,wisdom:60,sandreputation:10000},
		modify: {intellect:2,magicdefence:20,hitpoints:77,mana:135},
		setlink: {name:''}
	}}
	},
	braslet27_1: {id:'braslet27_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������� [10]',binding:'bop',baseitem:'braslet27',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet27:{id:'braslet27',caption:'������ ���������',count:1}}},
		common: {weight:2,price:168,durability:50},
		required: {intellect:50,level:10,wisdom:60,sandreputation:10000},
		modify: {intellect:2,magicdefence:20,hitpoints:77,mana:135},
		setlink: {name:''}
	},
	braslet31: {id:'braslet31',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:1},mater10:{id:'mater10',caption:'���� �������� ������',count:3}}}},
		common: {weight:2,price:140,durability:40},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {anticriticalhit:15,criticalhit:50,counterstroke:15,dexterity:2,intuition:2,weaponskill:1,hitpoints:12},
		setlink: {name:'misdeed'}
	, upgrade: {
	braslet31_1: {id:'braslet31_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������� [10]',binding:'bop',baseitem:'braslet31',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet31:{id:'braslet31',caption:'������ ���������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,sandreputation:10000},
		modify: {anticriticalhit:25,criticalhit:65,counterstroke:17,dexterity:2,intuition:2,weaponskill:1,hitpoints:24},
		setlink: {name:''}
	}}
	},
	braslet31_1: {id:'braslet31_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ ��������� [10]',binding:'bop',baseitem:'braslet31',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet31:{id:'braslet31',caption:'������ ���������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,sandreputation:10000},
		modify: {anticriticalhit:25,criticalhit:65,counterstroke:17,dexterity:2,intuition:2,weaponskill:1,hitpoints:24},
		setlink: {name:''}
	},
	braslet32: {id:'braslet32',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater3:{id:'mater3',caption:'�������',count:3}}}},
		common: {weight:2,price:140,durability:40},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {anticriticalhit:20,antijumpaway:40,criticalhit:35,weaponskill:1,magicdefence:25,hitpoints:18,strength:3},
		setlink: {name:'scorpion'}
	, upgrade: {
	braslet32_1: {id:'braslet32_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ��������� [10]',binding:'bop',baseitem:'braslet32',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet32:{id:'braslet32',caption:'������� ���������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,sandreputation:10000},
		modify: {anticriticalhit:30,antijumpaway:45,criticalhit:50,weaponskill:1,magicdefence:30,hitpoints:26,strength:3},
		setlink: {name:''}
	}}
	},
	braslet32_1: {id:'braslet32_1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ��������� [10]',binding:'bop',baseitem:'braslet32',clist:{anvil_sand:{sp_mat5:{id:'sp_mat5',caption:'�������� ��������',count:1},mater275:{id:'mater275',caption:'����� ��������',count:1},braslet32:{id:'braslet32',caption:'������� ���������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,sandreputation:10000},
		modify: {anticriticalhit:30,antijumpaway:45,criticalhit:50,weaponskill:1,magicdefence:30,hitpoints:26,strength:3},
		setlink: {name:''}
	},
	naruchi82: {id:'naruchi82',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �����������',adjustment:true,
		common: {weight:2,price:146,durability:40},
		required: {dexterity:20,intuition:20,level:9,endurance:20,strength:20},
		modify: {dexterity:5,intuition:5,strength:10}
	},
	braslet35: {id:'braslet35',category:'bracelets',slot:'w13',width:60,height:40,caption:'������ �������� [9]',
		common: {weight:2,price:169,durability:20},
		required: {dexterity:15,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:20,antijumpaway:20,criticalhit:20,jumpaway:20,magicdefence:20,defence:20,hitpoints:18,dexterity:3,intuition:3,strength:3}
	},
	braslet34: {id:'braslet34',category:'bracelets',slot:'w13',width:60,height:40,caption:'�������� �������� [9]',
		common: {weight:2,price:173,durability:20},
		required: {intellect:75,wisdom:75,level:9},
		modify: {magicpower:5,intellect:10,magicdefence:10,defence:10,hitpoints:18,mana:60}
	},

	
	naruchi207: {id:'naruchi207',category:'bracelets',slot:'w13',width:60,height:40,caption:'Smashing Bands',imp1:true,binding:'boe',
		common: {weight:2,durability:30,eprice:2.19},
		required: {level:8},
		modify: {criticalpower:5,anticriticalhit:30,antijumpaway:25,criticalhit:25,magicdefence:20,hitpoints:45,strength:2},
		setlink: {name:'smash'}
	},
	naruchi208: {id:'naruchi208',category:'bracelets',slot:'w13',width:60,height:40,caption:'Desert Bands',imp1:true,binding:'boe',
		common: {weight:2,durability:30,eprice:2.19},
		required: {level:8},
		modify: {anticriticalhit:25,antijumpaway:25,parry:2,jumpaway:30,counterstroke:5,dexterity:1,magicdefence:20,hitpoints:45},
		setlink: {name:'wanderer'}
	},
	
	
   	
	
	naruchi_illusion1: {id:'naruchi_illusion1',category:'bracelets',slot:'w13',width:60,height:40,caption:'������������� ������',description:'������� �������'
	},
	naruchi_illusion2: {id:'naruchi_illusion2',category:'bracelets',slot:'w13',width:60,height:40,caption:'������� ������',description:'������� �������'
	},
	belt17: {id:'belt17',category:'belts',slot:'w5',width:60,height:40,caption:'���� ����������',
		common: {weight:2,price:3,durability:20},
		required: {level:1,strength:6},
		modify: {waistarmor1:2,waistarmor2:4,waistarmorf:1,waistarmorm:1,waistarmord:3}
	},
	belt1: {id:'belt1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ����',
		common: {weight:1,price:7,durability:10},
		required: {level:2,endurance:9,strength:9},
		modify: {strength:1}
	},
	belt16: {id:'belt16',category:'belts',slot:'w5',width:60,height:40,caption:'������� ����',
		common: {weight:2,price:10,durability:20},
		required: {level:2,endurance:8,strength:8},
		modify: {anticriticalhit:2,hitpoints:6,waistarmor1:3,waistarmor2:8,waistarmorf:2,waistarmorm:1,waistarmord:6}
	},
	belt19: {id:'belt19',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������',
		common: {weight:3,price:16,durability:30},
		required: {level:3,endurance:12,strength:12},
		modify: {hitpoints:12,waistarmor1:4,waistarmor2:12,waistarmorf:3,waistarmorm:1,waistarmord:9}
	},
	belt15: {id:'belt15',category:'belts',slot:'w5',width:60,height:40,caption:'���� ������ ������',alignment:'dark',
		common: {weight:5,price:17,durability:20},
		required: {level:4,endurance:12,strength:12},
		modify: {darkmagicskill:1,waistarmor1:4,waistarmor2:12,waistarmorf:3,waistarmorm:1,waistarmord:9}
	},
	belt9: {id:'belt9',category:'belts',slot:'w5',width:60,height:40,caption:'���������� ���� �����',alignment:'light',
		common: {weight:7,price:17,durability:20},
		required: {level:4,endurance:12,strength:12},
		modify: {lightmagicskill:1,waistarmor1:4,waistarmor2:12,waistarmorf:3,waistarmorm:1,waistarmord:9}
	},
	belt5: {id:'belt5',category:'belts',slot:'w5',width:60,height:40,caption:'������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:4}}}},
		common: {weight:2,price:20,durability:30},
		required: {dexterity:10,intuition:10,level:4,endurance:10,strength:10},
		modify: {dexterity:1,intuition:1,waistarmor1:3,waistarmor2:8,waistarmorf:2,waistarmorm:1,waistarmord:6}
	},
	belt40: {id:'belt40',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:4}}}},
		common: {weight:2,price:20,durability:20},
		required: {intellect:20,level:4},
		modify: {mana:30,waistarmor1:3,waistarmor2:3}
	},
	belt31: {id:'belt31',category:'belts',slot:'w5',width:60,height:40,caption:'���� ������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:5}}}},
		common: {weight:2,price:21,durability:30},
		required: {intuition:15,level:4,strength:15},
		modify: {intuition:2,waistarmor1:1,waistarmor2:12,waistarmorm:1,waistarmord:12}
	},
	belt26: {id:'belt26',category:'belts',slot:'w5',width:60,height:40,caption:'������� ������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:6}}}},
		common: {weight:1,price:30,durability:20},
		required: {level:5,endurance:15,strength:20},
		modify: {anticriticalhit:5,jumpaway:5,firemagicdefence:5,hitpoints:18,waistarmor1:3,waistarmor2:17,waistarmorf:2,waistarmorm:1,waistarmord:15}
	},
	belt3: {id:'belt3',category:'belts',slot:'w5',width:60,height:40,caption:'������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:6}}}},
		common: {weight:3,price:30,durability:30},
		required: {dexterity:20,level:5,endurance:10,strength:20},
		modify: {antijumpaway:5,jumpaway:10,dexterity:1,intuition:1,waistarmor1:3,waistarmor2:14,waistarmorf:2,waistarmorm:1,waistarmord:12}
	},
	belt25: {id:'belt25',category:'belts',slot:'w5',width:60,height:40,caption:'���� ������������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:6}}}},
		common: {weight:3,price:30,durability:30},
		required: {dexterity:15,level:5,strength:15},
		modify: {antijumpaway:15,jumpaway:25,waistarmor1:5,waistarmor2:16,waistarmorf:4,waistarmorm:1,waistarmord:12}
	},
	belt20: {id:'belt20',category:'belts',slot:'w5',width:60,height:40,caption:'���� ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:6}}}},
		common: {weight:5,price:31,durability:30},
		required: {intuition:25,level:5,endurance:10,strength:10},
		modify: {anticriticalhit:5,criticalhit:25,waistarmor1:6,waistarmor2:20,waistarmorf:5,waistarmorm:1,waistarmord:15}
	},
	belt23: {id:'belt23',category:'belts',slot:'w5',width:60,height:40,caption:'��������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:6}}}},
		common: {weight:2,price:32,durability:20},
		required: {level:5,endurance:20,strength:20},
		modify: {hitpoints:45,waistarmor1:3,waistarmor2:8,waistarmorf:2,waistarmorm:1,waistarmord:6}
	},
	belt41: {id:'belt41',category:'belts',slot:'w5',width:60,height:40,caption:'������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:6}}}},
		common: {weight:2,price:32,durability:20},
		required: {intellect:25,level:5,endurance:10},
		modify: {mana:45,waistarmor1:4,waistarmor2:9,waistarmorf:3,waistarmorm:1,waistarmord:6}
	},
	belt13: {id:'belt13',category:'belts',slot:'w5',width:60,height:40,caption:'�������� ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:8}}}},
		common: {weight:1,price:40,durability:30},
		required: {level:6,endurance:15,strength:24},
		modify: {strength:4,waistarmor1:4,waistarmor2:21,waistarmorf:3,waistarmorm:1,waistarmord:18}
	},
	belt8: {id:'belt8',category:'belts',slot:'w5',width:60,height:40,caption:'������ ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:8}}}},
		common: {weight:3,price:40,durability:30},
		required: {dexterity:18,intuition:18,level:6,endurance:15,strength:15},
		modify: {dexterity:1,intuition:1,hitpoints:12,strength:1,waistarmor1:5,waistarmor2:16,waistarmorf:4,waistarmorm:1,waistarmord:12}
	},
	belt24: {id:'belt24',category:'belts',slot:'w5',width:60,height:40,caption:'������������ ����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:8}}}},
		common: {weight:2,price:40,durability:30},
		required: {dexterity:12,intuition:12,level:6,endurance:12,strength:12},
		modify: {anticriticalhit:5,antijumpaway:6,criticalhit:5,jumpaway:6,strength:2,waistarmor1:6,waistarmor2:20,waistarmorf:5,waistarmorm:1,waistarmord:15}
	},
	belt14: {id:'belt14',category:'belts',slot:'w5',width:60,height:40,caption:'������� ���� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:8}}}},
		common: {weight:2,price:41,durability:30},
		required: {intuition:24,level:6,strength:24},
		modify: {criticalpower:10,waistarmor1:4,waistarmor2:18,waistarmorf:3,waistarmorm:1,waistarmord:15}
	},
	belt29: {id:'belt29',category:'belts',slot:'w5',width:60,height:40,caption:'��������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:8}}}},
		common: {weight:3,price:41,durability:30},
		required: {dexterity:25,intuition:25,level:6,endurance:10,strength:10},
		modify: {thrustpower:10,waistarmor1:5,waistarmor2:16,waistarmorf:4,waistarmorm:1,waistarmord:12}
	},
	belt46_2: {id:'belt46_2',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������� [4]',
		common: {weight:1,price:43,durability:20},
		required: {intellect:20,level:4},
		modify: {hitpoints:36,mana:30,waistarmor1:2,waistarmor2:4,waistarmorf:1,waistarmorm:1,waistarmord:3}
	},
	belt45_2: {id:'belt45_2',category:'belts',slot:'w5',width:60,height:40,caption:'������ �������� [4]',
		common: {weight:1,price:44,durability:20},
		required: {dexterity:5,intuition:5,level:4,endurance:15,strength:15},
		modify: {anticriticalhit:5,criticalhit:5,antijumpaway:5,jumpaway:5,defence:15,hitpoints:12,waistarmor1:4,waistarmor2:12,waistarmorf:3,waistarmorm:1,waistarmord:9}
	},
	belt2: {id:'belt2',category:'belts',slot:'w5',width:60,height:40,caption:'������ ����',
		common: {weight:2,price:60,durability:40},
		required: {level:7,endurance:24,strength:24},
		modify: {intellect:1,earthmagicskill:1,watermagicdefence:15,airmagicdefence:15,earthmagicdefence:15,waistarmor1:8,waistarmor2:28,waistarmorf:7,waistarmorm:1,waistarmord:21},
		setlink: {name:'forest'}
	, upgrade: {
	belt2_olditem: {id:'belt2_olditem',old:true,
		common: {price:57,weight:2,durability:40},
		required: {level:6,endurance:18,strength:18},
		modify: {airmagicdefence:0,waistarmor1:6,waistarmor2:20,waistarmorf:5,waistarmord:15,intellect:1,earthmagicskill:1,watermagicdefence:30,earthmagicdefence:30,waistarmorm:1}
	}}

	},
	belt28: {id:'belt28',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� ������',
		common: {weight:1,price:59,durability:30},
		required: {intellect:15,level:7,strength:15,wisdom:15},
		modify: {jumpaway:8,intuition:3,intellect:3,hitpoints:6,waistarmor1:5,waistarmor2:16,waistarmorf:4,waistarmorm:1,waistarmord:12}
	},
	belt18: {id:'belt18',category:'belts',slot:'w5',width:60,height:40,caption:'���� ����������',
		common: {weight:1,price:59,durability:50},
		required: {dexterity:37,level:7,endurance:15,strength:15},
		modify: {anticriticalhit:40,hitpoints:30,waistarmor1:7,waistarmor2:24,waistarmorf:6,waistarmorm:1,waistarmord:18}
	},
	belt30: {id:'belt30',category:'belts',slot:'w5',width:60,height:40,caption:'������ ����',
		common: {weight:1,price:60,durability:40},
		required: {level:7,endurance:30,strength:30},
		modify: {crushpower:14,waistarmor1:8,waistarmor2:31,waistarmorf:7,waistarmorm:1,waistarmord:24}
	},
	belt42: {id:'belt42',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������',
		common: {weight:2,price:60,durability:20},
		required: {intellect:25,level:7,endurance:15,strength:15,wisdom:30},
		modify: {magicpower:5,hitpoints:36,waistarmor1:4,waistarmor2:12,waistarmorf:3,waistarmorm:1,waistarmord:9}
	},
	belt32: {id:'belt32',category:'belts',slot:'w5',width:60,height:40,caption:'���� ������������',
		common: {weight:4,price:62,durability:30},
		required: {dexterity:30,level:7,endurance:20,strength:30},
		modify: {antijumpaway:15,sabrepower:10,strength:1,waistarmor1:7,waistarmor2:24,waistarmorf:6,waistarmorm:1,waistarmord:18}
	},
	belt12: {id:'belt12',category:'belts',slot:'w5',width:60,height:40,caption:'������� ������ ����',
		common: {weight:4,price:62,durability:30},
		required: {level:7,endurance:15,strength:15},
		modify: {dexterity:2,intuition:2,hitpoints:6,strength:2,waistarmor1:7,waistarmor2:24,waistarmorf:6,waistarmorm:1,waistarmord:18}
	},
	belt45_1: {id:'belt45_1',category:'belts',slot:'w5',width:60,height:40,caption:'������ �������� [7]',
		common: {weight:1,price:101,durability:20},
		required: {dexterity:10,intuition:10,level:7,endurance:25,strength:25},
		modify: {anticriticalhit:10,criticalhit:10,antijumpaway:10,jumpaway:10,magicdefence:10,defence:25,hitpoints:24,waistarmor1:11,waistarmor2:35,waistarmorf:10,waistarmorm:1,waistarmord:25}
	},
	belt46_1: {id:'belt46_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������� [7]',
		common: {weight:1,price:100,durability:20},
		required: {intellect:30,level:7,wisdom:30},
		modify: {anticriticalhit:10,intellect:5,magicdefence:10,defence:5,hitpoints:24,mana:30,waistarmor1:4,waistarmor2:12,waistarmorf:3,waistarmorm:1,waistarmord:9}
	},
	belt22: {id:'belt22',category:'belts',slot:'w5',width:60,height:40,caption:'������ ����',
		common: {weight:12,price:98,durability:40},
		required: {dexterity:30,level:8,endurance:35},
		modify: {hitpoints:72,strength:4,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30}
	},
	belt4: {id:'belt4',category:'belts',slot:'w5',width:60,height:40,caption:'���� ������',
		common: {weight:1,price:100,durability:50},
		required: {intuition:35,level:8,endurance:30,strength:30},
		modify: {criticalpower:20,antijumpaway:5,waistarmor1:16,waistarmor2:60,waistarmorf:15,waistarmorm:1,waistarmord:45},
		setlink: {name:'sunset'}
	, upgrade: {
	belt4_olditem: {id:'belt4_olditem',caption:'���������� ����',old:true,
		common: {price:21,durability:20,weight:1},
		required: {intuition:20,level:4,endurance:0,strength:15},
		modify: {criticalpower:0,antijumpaway:0,waistarmor1:4,waistarmor2:15,waistarmorf:3,waistarmord:12,anticriticalhit:20,waistarmorm:1}
	}}

	},
	belt21: {id:'belt21',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������� ����',
		common: {weight:1,price:100,durability:50},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:25,firemagicdefence:20,defence:25,watermagicdefence:-20,hitpoints:18,strength:1,waistarmor1:16,waistarmor2:60,waistarmorf:15,waistarmorm:1,waistarmord:45},
		setlink: {name:'firedown'}
	, upgrade: {
	belt21_olditem: {id:'belt21_olditem',caption:'�������� ����',old:true,
		common: {price:22,durability:30,weight:1},
		required: {dexterity:0,intuition:0,level:4,endurance:15,strength:15},
		modify: {anticriticalhit:0,firemagicdefence:0,defence:0,watermagicdefence:20,hitpoints:0,strength:0,waistarmor1:3,waistarmor2:11,waistarmorf:2,waistarmord:9,intuition:1,waistarmorm:1}
	}}

	},
	belt7: {id:'belt7',category:'belts',slot:'w5',width:60,height:40,caption:'������� ������� ����',
		common: {weight:10,price:101,durability:50},
		required: {level:8,endurance:40,strength:40},
		modify: {dexterity:-2,crushdefence:25,hitpoints:99,waistarmor1:16,waistarmor2:60,waistarmorf:15,waistarmorm:1,waistarmord:45},
		setlink: {name:'siege'}
	},
	belt33: {id:'belt33',category:'belts',slot:'w5',width:60,height:40,caption:'���� ���������� ����',
		common: {weight:4,price:104,durability:50},
		required: {dexterity:40,level:8,endurance:15,strength:15},
		modify: {parry:5,jumpaway:60,dexterity:2,intuition:2,waistarmor1:7,waistarmor2:30,waistarmorf:6,waistarmorm:1,waistarmord:24}
	},
	belt10: {id:'belt10',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������',
		common: {weight:1,price:104,durability:35},
		required: {dexterity:35,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:35,parry:7,hitpoints:33,waistarmor1:9,waistarmor2:32,waistarmorf:8,waistarmorm:1,waistarmord:24}
	},
	belt6: {id:'belt6',category:'belts',slot:'w5',width:60,height:40,caption:'���� ����',
		common: {weight:2,price:60,durability:20},
		required: {intellect:20,level:7,endurance:10,strength:10,wisdom:20},
		modify: {mana:80,waistarmor1:7,waistarmor2:18,waistarmorf:6,waistarmorm:1,waistarmord:12}
	, upgrade: {
	belt6_olditem: {id:'belt6_olditem',old:true,
		common: {price:135},
		required: {intellect:10,endurance:0,wisdom:5},
		modify: {mana:200,waistarmor2:24,waistarmord:18}
	}}

	},
	belt50: {id:'belt50',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������������',
		common: {weight:2,price:102,durability:40},
		required: {intellect:25,level:8,endurance:15,strength:15,wisdom:30},
		modify: {magicpower:10,hitpoints:27,mana:30,waistarmor1:4,waistarmor2:9,waistarmorf:3,waistarmorm:1,waistarmord:6},
 	setlink: {name:'rashness'}
	},
	belt51: {id:'belt51',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������� ����',binding:'boe',
  common: {weight:2,price:242,durability:100},
  required: {intellect:75,level:10,wisdom:50},
  modify:{magicpower:10,intellect:5,hitpoints:50,defence:50,mana:65,waistarmor1:6,waistarmor2:20,waistarmorf:5,waistarmorm:1,waistarmord:15}
	},



	belt52: { id: 'belt52', category:'belts', slot:'w5', width:60, height:40, caption: '���� ������������� �����', binding: 'bop',clist:{_:{sp_mat45:{id:'sp_mat45',caption:'��������� �������� �����',count:1},mater294:{id:'mater294',caption:'����� ������� ��������',count:4},mater299:{id:'mater299',caption:'������ �����',count:3},mater300:{id:'mater300',caption:'����� �����',count:4},mater296:{id:'mater296',caption:'��������� ���������� �������',count:5},mater298:{id:'mater298',caption:'������� ���',count:10}}},
 		common: {weight: 2, price: 200, dorability: 50},
  		required: {level:10,endurance:70,strength:50, dexterity:10,intuition:10},
	   
		modify: {anticriticalhit:20,antijumpaway:20,defence:25,hitpoints:100,strength:5,waistarmor1:21,waistarmor2:80,waistarmorf:20,waistarmorm:1,waistarmord:60}

    },
	belt35: {id:'belt35',category:'belts',slot:'w5',width:60,height:40,caption:'���� �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater12:{id:'mater12',caption:'�����',count:4}}}},
		common: {weight:2,price:140,durability:40},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:45,magicdefence:20,hitpoints:33,strength:4,waistarmor1:19,waistarmor2:63,waistarmorf:18,waistarmorm:1,waistarmord:45},
		setlink: {name:'spider'}
	, upgrade: {
	belt35_1: {id:'belt35_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ����� [10]',binding:'bop',baseitem:'belt35',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt35:{id:'belt35',caption:'���� �����',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {anticriticalhit:55,jumpaway:15,magicdefence:25,hitpoints:41,strength:4,waistarmor1:21,waistarmor2:70,waistarmorf:20,waistarmorm:1,waistarmord:50},
		setlink: {name:''}
	}}

	},
	belt35_1: {id:'belt35_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ����� [10]',binding:'bop',baseitem:'belt35',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt35:{id:'belt35',caption:'���� �����',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {anticriticalhit:55,jumpaway:15,magicdefence:25,hitpoints:41,strength:4,waistarmor1:21,waistarmor2:70,waistarmorf:20,waistarmorm:1,waistarmord:50},
		setlink: {name:''}
	},
	belt36: {id:'belt36',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater5:{id:'mater5',caption:'������',count:4}}}},
		common: {weight:1,price:140,durability:50},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {criticalpower:15,magicdefence:20,defence:25,waistarmor1:19,waistarmor2:63,waistarmorf:18,waistarmorm:1,waistarmord:45},
		setlink: {name:'bloodmoon'}
	, upgrade: {
	belt36_1: {id:'belt36_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������� ���� [10]',binding:'bop',baseitem:'belt36',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt36:{id:'belt36',caption:'���� �������� ����',count:1}}},
		common: {weight:1,price:168,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {criticalpower:15,criticalhit:20,magicdefence:25,defence:30,waistarmor1:21,waistarmor2:70,waistarmorf:20,waistarmorm:1,waistarmord:50},
		setlink: {name:''}
	}}

	},
	belt36_1: {id:'belt36_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������� ���� [10]',binding:'bop',baseitem:'belt36',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt36:{id:'belt36',caption:'���� �������� ����',count:1}}},
		common: {weight:1,price:168,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,sandreputation:10000},
		modify: {criticalpower:15,criticalhit:20,magicdefence:25,defence:30,waistarmor1:21,waistarmor2:70,waistarmorf:20,waistarmorm:1,waistarmord:50},
		setlink: {name:''}
	},
	belt37: {id:'belt37',category:'belts',slot:'w5',width:60,height:40,caption:'���� ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater6:{id:'mater6',caption:'�������� ������',count:4}}}},
		common: {weight:2,price:140,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {magicdefence:20,crushdefence:25,hitpoints:99,waistarmor1:19,waistarmor2:68,waistarmorf:18,waistarmorm:1,waistarmord:50},
		setlink: {name:'losttime'}
	, upgrade: {
	belt37_1: {id:'belt37_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ������� ������ [10]',binding:'bop',baseitem:'belt37',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt37:{id:'belt37',caption:'���� ������� ������',count:1}}},
		common: {weight:2,price:168,durability:50},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,sandreputation:10000},
		modify: {magicdefence:25,crushdefence:25,hitpoints:121,waistarmor1:21,waistarmor2:80,waistarmorf:20,waistarmorm:1,waistarmord:60},
		setlink: {name:''}
	}}

	},
	belt37_1: {id:'belt37_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ������� ������ [10]',binding:'bop',baseitem:'belt37',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt37:{id:'belt37',caption:'���� ������� ������',count:1}}},
		common: {weight:2,price:168,durability:50},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,sandreputation:10000},
		modify: {magicdefence:25,crushdefence:25,hitpoints:121,waistarmor1:21,waistarmor2:80,waistarmorf:20,waistarmorm:1,waistarmord:60},
		setlink: {name:''}
	},
	belt38_du2: {id:'belt38_du2',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:1},mater2:{id:'mater2',caption:'������',count:4}}}},
		common: {weight:1,price:140,durability:50},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:35,firemagicdefence:10,defence:25,watermagicdefence:-10,hitpoints:33,strength:4,waistarmor1:19,waistarmor2:68,waistarmorf:18,waistarmorm:1,waistarmord:50},
		setlink: {name:'morningsun'}
	, upgrade: {
	belt38_du2_1: {id:'belt38_du2_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� ������ [10]',binding:'bop',baseitem:'belt38_du2',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt38_du2:{id:'belt38_du2',caption:'���� ��������� ������',count:1}}},
		common: {weight:1,price:168,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,sandreputation:10000},
		modify: {anticriticalhit:40,firemagicdefence:20,defence:30,watermagicdefence:-10,hitpoints:42,strength:4,waistarmor1:21,waistarmor2:75,waistarmorf:20,waistarmorm:1,waistarmord:55},
		setlink: {name:''}
	}}

	},
	belt38_du2_1: {id:'belt38_du2_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� ������ [10]',binding:'bop',baseitem:'belt38_du2',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt38_du2:{id:'belt38_du2',caption:'���� ��������� ������',count:1}}},
		common: {weight:1,price:168,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,sandreputation:10000},
		modify: {anticriticalhit:40,firemagicdefence:20,defence:30,watermagicdefence:-10,hitpoints:42,strength:4,waistarmor1:21,waistarmor2:75,waistarmorf:20,waistarmorm:1,waistarmord:55},
		setlink: {name:''}
	},
	belt39: {id:'belt39',category:'belts',slot:'w5',width:60,height:40,caption:'���� ���������',requireditems:{shop:{exchanger:'shop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:1},mater1:{id:'mater1',caption:'����� ��������� �����',count:4}}}},
		common: {weight:1,price:140,durability:50},
		required: {intellect:40,level:9,strength:10,wisdom:50},
		modify: {magicdefencereduce:2,intellect:2,mana:130,waistarmor1:5,waistarmor2:16,waistarmorf:4,waistarmorm:1,waistarmord:12},
		setlink: {name:'determination'}
	, upgrade: {
	belt39_fury: {id:'belt39_fury',caption:'���� ������',old:true,
		modify: {magicdefencereduce:2,intuition:1,intellect:1,mana:130,waistarmor1:5,waistarmor2:16,waistarmorf:4,waistarmorm:1,waistarmord:12}
	},
	belt39_1: {id:'belt39_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� [10]',binding:'bop',baseitem:'belt39',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt39:{id:'belt39',caption:'���� ���������',count:1}}},
		common: {weight:1,price:168,durability:50},
		required: {intellect:50,level:10,strength:10,wisdom:60,sandreputation:10000},
		modify: {magicdefencereduce:2,intellect:2,hitpoints:22,mana:150,waistarmor1:6,waistarmor2:20,waistarmorf:5,waistarmorm:1,waistarmord:15},
		setlink: {name:''}
	}}

	},
	belt39_1: {id:'belt39_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� [10]',binding:'bop',baseitem:'belt39',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt39:{id:'belt39',caption:'���� ���������',count:1}}},
		common: {weight:1,price:168,durability:50},
		required: {intellect:50,level:10,strength:10,wisdom:60,sandreputation:10000},
		modify: {magicdefencereduce:2,intellect:2,hitpoints:22,mana:150,waistarmor1:6,waistarmor2:20,waistarmorf:5,waistarmorm:1,waistarmord:15},
		setlink: {name:''}
	},
	belt43: {id:'belt43',category:'belts',slot:'w5',width:60,height:40,caption:'���� ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:1},mater10:{id:'mater10',caption:'���� �������� ������',count:4}}}},
		common: {weight:2,price:140,durability:40},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {anticriticalhit:20,counterstroke:15,magicdefence:30,hitpoints:12,waistarmor1:19,waistarmor2:63,waistarmorf:18,waistarmorm:1,waistarmord:45},
		setlink: {name:'misdeed'}
	, upgrade: {
	belt43_1: {id:'belt43_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� [10]',binding:'bop',baseitem:'belt43',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt43:{id:'belt43',caption:'���� ���������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,sandreputation:10000},
		modify: {anticriticalhit:30,counterstroke:17,magicdefence:35,hitpoints:20,waistarmor1:21,waistarmor2:70,waistarmorf:20,waistarmorm:1,waistarmord:50},
		setlink: {name:''}
	}}

	},
	belt43_1: {id:'belt43_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� [10]',binding:'bop',baseitem:'belt43',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt43:{id:'belt43',caption:'���� ���������',count:1}}},
		common: {weight:2,price:168,durability:40},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,sandreputation:10000},
		modify: {anticriticalhit:30,counterstroke:17,magicdefence:35,hitpoints:20,waistarmor1:21,waistarmor2:70,waistarmorf:20,waistarmorm:1,waistarmord:50},
		setlink: {name:''}
	},
	belt44: {id:'belt44',category:'belts',slot:'w5',width:60,height:40,caption:'���� ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater3:{id:'mater3',caption:'�������',count:4}}}},
		common: {weight:1,price:140,durability:50},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {anticriticalhit:55,magicdefence:15,defence:25,hitpoints:30,waistarmor1:19,waistarmor2:63,waistarmorf:18,waistarmorm:1,waistarmord:45},
		setlink: {name:'scorpion'}
	, upgrade: {
	belt44_1: {id:'belt44_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� [10]',binding:'bop',baseitem:'belt44',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt44:{id:'belt44',caption:'���� ���������',count:1}}},
		common: {weight:1,price:168,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,sandreputation:10000},
		modify: {anticriticalhit:65,magicdefence:20,defence:30,hitpoints:39,waistarmor1:21,waistarmor2:70,waistarmorf:20,waistarmorm:1,waistarmord:50},
		setlink: {name:''}
	}}

	},
	belt44_1: {id:'belt44_1',category:'belts',slot:'w5',width:60,height:40,caption:'���� ��������� [10]',binding:'bop',baseitem:'belt44',clist:{anvil_sand:{sp_mat13:{id:'sp_mat13',caption:'�������� �����',count:1},mater276:{id:'mater276',caption:'�������� ����',count:1},belt44:{id:'belt44',caption:'���� ���������',count:1}}},
		common: {weight:1,price:168,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,sandreputation:10000},
		modify: {anticriticalhit:65,magicdefence:20,defence:30,hitpoints:39,waistarmor1:21,waistarmor2:70,waistarmorf:20,waistarmorm:1,waistarmord:50},
		setlink: {name:''}
	},
	belt46: {id:'belt46',category:'belts',slot:'w5',width:60,height:40,caption:'���� �������� [9]',
		common: {weight:1,price:176,durability:20},
		required: {intellect:75,level:9,wisdom:75},
		modify: {intellect:10,magicdefence:20,defence:10,hitpoints:36,mana:60,waistarmor1:5,waistarmor2:16,waistarmorf:4,waistarmorm:1,waistarmord:12}
	},
	belt45: {id:'belt45',category:'belts',slot:'w5',width:60,height:40,caption:'������ �������� [9]',
		common: {weight:1,price:171,durability:20},
		required: {dexterity:15,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:20,criticalhit:20,antijumpaway:20,jumpaway:20,magicdefence:20,defence:35,hitpoints:36,waistarmor1:19,waistarmor2:63,waistarmorf:18,waistarmorm:1,waistarmord:45}
	},
    belt47: {id:'belt47',category:'belts',slot:'w5',width:60,height:40,caption:'���� ���������',
		common: {weight:4,price:113,durability:50},
		required: {dexterity:45,level:8,endurance:15,strength:10},
		modify: {jumpaway:50,counterstroke:5,dexterity:4,magicdefence:20,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30}
	},
	
	
	belt206: {id:'belt206',category:'belts',slot:'w5',width:60,height:40,caption:'Smashing Belt',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:1.99},
		required: {level:8},
		modify: {intuition:2,magicdefence:20,defence:25,hitpoints:45,waistarmor1:11,waistarmor2:37,waistarmorf:10,waistarmorm:1,waistarmord:27},
		setlink: {name:'smash'}
	},
	belt207: {id:'belt207',category:'belts',slot:'w5',width:60,height:40,caption:'Desert Belt',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:1.99},
		required: {level:8},
		modify: {anticriticalhit:5,parry:2,magicdefence:25,defence:25,hitpoints:33,waistarmor1:11,waistarmor2:37,waistarmorf:10,waistarmorm:1,waistarmord:27},
		setlink: {name:'wanderer'}
	},
	
	
   	
	
	belt_illusion1: {id:'belt_illusion1',category:'belts',slot:'w5',width:60,height:40,caption:'������� ����',description:'������� �����'
	},
	belt_illusion2: {id:'belt_illusion2',category:'belts',slot:'w5',width:60,height:40,caption:'������ ����',description:'������� �����'
	},
	leg1: {id:'leg1',category:'pants',slot:'w19',caption:'����� ���������',
		common: {weight:2,price:1,durability:20},
		modify: {waistarmor1:1,waistarmor2:1,waistarmorm:1,waistarmord:1,legarmor1:1,legarmor2:1,legarmorm:1,legarmord:1}
	, upgrade: {
	leg1_lvl1: {id:'leg1_lvl1',caption:'����� ��������� [1]',
		common: {weight:2,price:10,durability:20},
		required: {level:1},
		modify: {waistarmor1:1,waistarmor2:4,waistarmorm:1,waistarmord:4,legarmor1:1,legarmor2:4,legarmorm:1,legarmord:4}
	},
	leg1_lvl2: {id:'leg1_lvl2',caption:'����� ��������� [2]',
		common: {weight:2,price:20,durability:30},
		required: {level:2},
		modify: {hitpoints:3,waistarmor1:1,waistarmor2:6,waistarmorm:1,waistarmord:6,legarmor1:1,legarmor2:6,legarmorm:1,legarmord:6}
	},
	leg1_lvl3: {id:'leg1_lvl3',caption:'����� ��������� [3]',
		common: {weight:2,price:30,durability:30},
		required: {level:3},
		modify: {hitpoints:12,waistarmor1:2,waistarmor2:10,waistarmorf:1,waistarmorm:1,waistarmord:9,legarmor1:2,legarmor2:10,legarmorf:1,legarmorm:1,legarmord:9}
	},
	leg1_lvl4: {id:'leg1_lvl4',caption:'����� ��������� [4]',
		common: {weight:2,price:40,durability:30},
		required: {level:4},
		modify: {hitpoints:21,waistarmor1:3,waistarmor2:14,waistarmorf:2,waistarmorm:1,waistarmord:12,legarmor1:3,legarmor2:14,legarmorf:2,legarmorm:1,legarmord:12}
	},
	leg1_lvl5: {id:'leg1_lvl5',caption:'����� ��������� [5]',
		common: {weight:2,price:50,durability:30},
		required: {level:5},
		modify: {anticriticalhit:5,hitpoints:27,waistarmor1:3,waistarmor2:17,waistarmorf:2,waistarmorm:1,waistarmord:15,legarmor1:3,legarmor2:17,legarmorf:2,legarmorm:1,legarmord:15}
	},
	leg1_lvl6: {id:'leg1_lvl6',caption:'����� ��������� [6]',
		common: {weight:2,price:65,durability:30},
		required: {level:6},
		modify: {anticriticalhit:5,hitpoints:36,waistarmor1:4,waistarmor2:21,waistarmorf:3,waistarmorm:1,waistarmord:18,legarmor1:4,legarmor2:21,legarmorf:3,legarmorm:1,legarmord:18}
	},
	leg1_lvl7: {id:'leg1_lvl7',caption:'����� ��������� [7]',
		common: {weight:4,price:90,durability:30},
		required: {level:7},
		modify: {anticriticalhit:5,magicdefence:3,defence:3,hitpoints:42,waistarmor1:5,waistarmor2:25,waistarmorf:4,waistarmorm:1,waistarmord:21,legarmor1:5,legarmor2:25,legarmorf:4,legarmorm:1,legarmord:21}
	},
	leg1_lvl8: {id:'leg1_lvl8',caption:'����� ��������� [8]',
		common: {weight:5,price:120,durability:40},
		required: {level:8},
		modify: {anticriticalhit:10,magicdefence:7,defence:7,hitpoints:54,waistarmor1:6,waistarmor2:29,waistarmorf:5,waistarmorm:1,waistarmord:24,legarmor1:6,legarmor2:29,legarmorf:5,legarmorm:1,legarmord:24}
	}}

	},
	leg18: {id:'leg18',category:'pants',slot:'w19',caption:'�������� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:8}}}},
		common: {weight:2,price:40,durability:30},
		required: {level:4,endurance:15,strength:15},
		modify: {anticriticalhit:5,antijumpaway:5,criticalhit:5,jumpaway:5,hitpoints:27,waistarmor1:1,waistarmor2:12,waistarmorm:1,waistarmord:12,legarmor1:1,legarmor2:12,legarmorm:1,legarmord:12}
	},
	leg32: {id:'leg32',category:'pants',slot:'w19',caption:'������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:10}}}},
		common: {weight:7,price:50,durability:50},
		required: {level:5,endurance:18,strength:18},
		modify: {hitpoints:27,strength:1,waistarmor1:7,waistarmor2:18,waistarmorf:6,waistarmorm:1,waistarmord:12,legarmor1:7,legarmor2:18,legarmorf:6,legarmorm:1,legarmord:12}
	},
	leg19: {id:'leg19',category:'pants',slot:'w19',caption:'������ �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:13}}}},
		common: {weight:4,price:65,durability:30},
		required: {intuition:10,level:6,endurance:25,strength:10},
		modify: {anticriticalhit:10,antijumpaway:10,hitpoints:36,waistarmor1:3,waistarmor2:20,waistarmorf:2,waistarmorm:1,waistarmord:18,legarmor1:3,legarmor2:20,legarmorf:2,legarmorm:1,legarmord:18},
		properties: {defence:10}
	},
	leg21: {id:'leg21',category:'pants',slot:'w19',caption:'����� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:13}}}},
		common: {weight:4,price:65,durability:30},
		required: {intuition:10,level:6,endurance:25,strength:10},
		modify: {criticalhit:25,jumpaway:25,hitpoints:18,waistarmor1:3,waistarmor2:20,waistarmorf:2,waistarmorm:1,waistarmord:18,legarmor1:3,legarmor2:20,legarmorf:2,legarmorm:1,legarmord:18},
		properties: {defence:10}
	},
	leg22: {id:'leg22',category:'pants',slot:'w19',caption:'������ �����',
		common: {weight:5,price:90,durability:50},
		required: {intellect:30,level:7,wisdom:30},
		modify: {magicpower:2,intellect:2,hitpoints:24,mana:50,waistarmor1:3,waistarmor2:8,waistarmorf:2,waistarmorm:1,waistarmord:6,legarmor1:3,legarmor2:8,legarmorf:2,legarmorm:1,legarmord:6},
		properties: {defence:10}
	},
	leg34: {id:'leg34',category:'pants',slot:'w19',caption:'���������� ������',
		common: {weight:10,price:100,durability:30},
		required: {level:7,endurance:25,strength:30},
		modify: {anticriticalhit:10,antijumpaway:10,magicdefence:15,hitpoints:33,strength:1,waistarmor1:7,waistarmor2:30,waistarmorf:6,waistarmorm:1,waistarmord:24,legarmor1:7,legarmor2:30,legarmorf:6,legarmorm:1,legarmord:24},
		properties: {defence:10},
		setlink: {name:'forest'}
	},
	leg26: {id:'leg26',category:'pants',slot:'w19',caption:'������ ������',
		common: {weight:8,price:120,durability:50},
		required: {dexterity:45,intuition:25,level:8,endurance:15,strength:15},
		modify: {anticriticalhit:30,jumpaway:45,dexterity:2,magicdefence:15,waistarmor1:9,waistarmor2:32,waistarmorf:8,waistarmorm:1,waistarmord:24,legarmor1:9,legarmor2:32,legarmorf:8,legarmorm:1,legarmord:24},
		properties: {defence:15},
		setlink: {name:'flash'}
	},
	leg23: {id:'leg23',category:'pants',slot:'w19',caption:'������ �������� ����',
		common: {weight:13,price:120,durability:60},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:30,antijumpaway:15,firemagicdefence:25,hitpoints:30,waistarmor1:9,waistarmor2:32,waistarmorf:8,waistarmorm:1,waistarmord:24,legarmor1:9,legarmor2:32,legarmorf:8,legarmorm:1,legarmord:24},
		properties: {defence:25},
		setlink: {name:'firedown'}
	},
	leg24: {id:'leg24',category:'pants',slot:'w19',caption:'������ �����',
		common: {weight:15,price:120,durability:40},
		required: {level:8,endurance:40,strength:25},
		modify: {antijumpaway:10,magicdefence:15,hitpoints:42,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:25},
		setlink: {name:'siege'}
	},
	leg25: {id:'leg25',category:'pants',slot:'w19',caption:'������ ������',
		common: {weight:14,price:120,durability:50},
		required: {intuition:35,level:8,endurance:30,strength:30},
		modify: {anticriticalhit:10,antijumpaway:10,criticalhit:15,magicdefence:15,hitpoints:48,waistarmor1:10,waistarmor2:33,waistarmorf:9,waistarmorm:1,waistarmord:24,legarmor1:10,legarmor2:33,legarmorf:9,legarmorm:1,legarmord:24},
		properties: {defence:15},
		setlink: {name:'sunset'}
	},
	legs40: {id:'legs40',category:'pants',slot:'w19',caption:'����� �������������',
		common: {weight:5,price:120,durability:50},
		required: {intellect:30,level:8,endurance:15,strength:15,wisdom:30},
		modify: {magicpower:5,hitpoints:30,mana:60,waistarmor1:4,waistarmor2:12,waistarmorf:3,waistarmorm:1,waistarmord:9,legarmor1:4,legarmor2:12,legarmorf:3,legarmorm:1,legarmord:9},
		properties: {defence:25},
 	setlink: {name:'rashness'}
	},
	leg11: {id:'leg11',category:'pants',slot:'w19',caption:'������ ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater6:{id:'mater6',caption:'�������� ������',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {magicdefence:20,hitpoints:42,waistarmor1:13,waistarmor2:48,waistarmorf:12,waistarmorm:1,waistarmord:36,legarmor1:13,legarmor2:48,legarmorf:12,legarmorm:1,legarmord:36},
		properties: {defence:50},
		setlink: {name:'losttime'}
	, upgrade: {
	leg11_1: {id:'leg11_1',category:'pants',slot:'w19',caption:'������ ������� ������ [10]',binding:'bop',baseitem:'leg11',requireditems:{baltar:{exchanger:'baltar', items: {leg11:{id:'leg11',caption:'������ ������� ������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:65,strength:45,baltarreputation:100},
		modify: {magicdefence:25,hitpoints:57,waistarmor1:16,waistarmor2:55,waistarmorf:15,waistarmorm:1,waistarmord:40,legarmor1:16,legarmor2:55,legarmorf:15,legarmorm:1,legarmord:40},
		properties: {defence:55},
		setlink: {name:''}
	}}

	},
	leg11_1: {id:'leg11_1',category:'pants',slot:'w19',caption:'������ ������� ������ [10]',binding:'bop',baseitem:'leg11',requireditems:{baltar:{exchanger:'baltar', items: {leg11:{id:'leg11',caption:'������ ������� ������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:65,strength:45,baltarreputation:100},
		modify: {magicdefence:25,hitpoints:57,waistarmor1:16,waistarmor2:55,waistarmorf:15,waistarmorm:1,waistarmord:40,legarmor1:16,legarmor2:55,legarmorf:15,legarmorm:1,legarmord:40},
		properties: {defence:55},
		setlink: {name:''}
	},
	leg12: {id:'leg12',category:'pants',slot:'w19',caption:'������ �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater5:{id:'mater5',caption:'������',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:20,antijumpaway:20,criticalhit:35,magicdefence:10,hitpoints:30,waistarmor1:9,waistarmor2:35,waistarmorf:8,waistarmorm:1,waistarmord:27,legarmor1:9,legarmor2:35,legarmorf:8,legarmorm:1,legarmord:27},
		properties: {defence:40},
		setlink: {name:'bloodmoon'}
	, upgrade: {
	leg12_1: {id:'leg12_1',category:'pants',slot:'w19',caption:'������ �������� ���� [10]',binding:'bop',baseitem:'leg12',requireditems:{baltar:{exchanger:'baltar', items: {leg12:{id:'leg12',caption:'������ �������� ����',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,baltarreputation:100},
		modify: {anticriticalhit:25,antijumpaway:25,criticalhit:45,magicdefence:15,hitpoints:35,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:40},
		setlink: {name:''}
	}}

	},
	leg12_1: {id:'leg12_1',category:'pants',slot:'w19',caption:'������ �������� ���� [10]',binding:'bop',baseitem:'leg12',requireditems:{baltar:{exchanger:'baltar', items: {leg12:{id:'leg12',caption:'������ �������� ����',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,baltarreputation:100},
		modify: {anticriticalhit:25,antijumpaway:25,criticalhit:45,magicdefence:15,hitpoints:35,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:40},
		setlink: {name:''}
	},
	leg13: {id:'leg13',category:'pants',slot:'w19',caption:'������ �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater11:{id:'mater11',caption:'���� ������ �����',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:35,jumpaway:35,magicdefence:25,hitpoints:18,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		properties: {defence:30},
		setlink: {name:'spider'}
	, upgrade: {
	leg13_1: {id:'leg13_1',category:'pants',slot:'w19',caption:'������ ����� [10]',binding:'bop',baseitem:'leg13',requireditems:{baltar:{exchanger:'baltar', items: {leg13:{id:'leg13',caption:'������ �����',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,baltarreputation:100},
		modify: {anticriticalhit:45,jumpaway:50,magicdefence:30,hitpoints:27,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:35},
		setlink: {name:''}
	}}

	},
	leg13_1: {id:'leg13_1',category:'pants',slot:'w19',caption:'������ ����� [10]',binding:'bop',baseitem:'leg13',requireditems:{baltar:{exchanger:'baltar', items: {leg13:{id:'leg13',caption:'������ �����',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,baltarreputation:100},
		modify: {anticriticalhit:45,jumpaway:50,magicdefence:30,hitpoints:27,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:35},
		setlink: {name:''}
	},
	leg14: {id:'leg14',category:'pants',slot:'w19',caption:'������ ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:1},mater2:{id:'mater2',caption:'������',count:5}}}},
		common: {weight:13,price:150,durability:60},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:30,antijumpaway:15,parry:2,firemagicdefence:10,defence:10,watermagicdefence:-10,hitpoints:39,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		properties: {defence:35},
		setlink: {name:'morningsun'}
	, upgrade: {
	leg14_1: {id:'leg14_1',category:'pants',slot:'w19',caption:'������ ��������� ������ [10]',binding:'bop',baseitem:'leg14',requireditems:{baltar:{exchanger:'baltar', items: {leg14:{id:'leg14',caption:'������ ��������� ������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:13,price:30,durability:60},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,baltarreputation:100},
		modify: {anticriticalhit:40,antijumpaway:20,parry:2,firemagicdefence:15,defence:15,watermagicdefence:-10,hitpoints:45,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:40},
		setlink: {name:''}
	}}

	},
	leg14_1: {id:'leg14_1',category:'pants',slot:'w19',caption:'������ ��������� ������ [10]',binding:'bop',baseitem:'leg14',requireditems:{baltar:{exchanger:'baltar', items: {leg14:{id:'leg14',caption:'������ ��������� ������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:13,price:30,durability:60},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,baltarreputation:100},
		modify: {anticriticalhit:40,antijumpaway:20,parry:2,firemagicdefence:15,defence:15,watermagicdefence:-10,hitpoints:45,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:40},
		setlink: {name:''}
	},
	leg15: {id:'leg15',category:'pants',slot:'w19',caption:'����� ���������',requireditems:{shop:{exchanger:'shop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:1},mater1:{id:'mater1',caption:'����� ��������� �����',count:5}}}},
		common: {weight:5,price:150,durability:50},
		required: {intellect:40,level:9,wisdom:50},
		modify: {magicdefencereduce:2,magicpower:3,hitpoints:24,mana:90,waistarmor1:5,waistarmor2:16,waistarmorf:4,waistarmorm:1,waistarmord:12,legarmor1:5,legarmor2:16,legarmorf:4,legarmorm:1,legarmord:12},
		properties: {defence:10},
		setlink: {name:'determination'}
	, upgrade: {
	leg15_1: {id:'leg15_1',category:'pants',slot:'w19',caption:'����� ��������� [10]',binding:'bop',baseitem:'leg15',requireditems:{baltar:{exchanger:'baltar', items: {leg15:{id:'leg15',caption:'����� ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:5,price:30,durability:50},
		required: {intellect:50,level:10,wisdom:60,baltarreputation:100},
		modify: {magicdefencereduce:2,magicpower:5,hitpoints:25,mana:100,waistarmor1:6,waistarmor2:20,waistarmorf:5,waistarmorm:1,waistarmord:15,legarmor1:6,legarmor2:20,legarmorf:5,legarmorm:1,legarmord:15},
		properties: {defence:15},
		setlink: {name:''}
	}}

	},
	leg15_1: {id:'leg15_1',category:'pants',slot:'w19',caption:'����� ��������� [10]',binding:'bop',baseitem:'leg15',requireditems:{baltar:{exchanger:'baltar', items: {leg15:{id:'leg15',caption:'����� ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:5,price:30,durability:50},
		required: {intellect:50,level:10,wisdom:60,baltarreputation:100},
		modify: {magicdefencereduce:2,magicpower:5,hitpoints:25,mana:100,waistarmor1:6,waistarmor2:20,waistarmorf:5,waistarmorm:1,waistarmord:15,legarmor1:6,legarmor2:20,legarmorf:5,legarmorm:1,legarmord:15},
		properties: {defence:15},
		setlink: {name:''}
	},
	leg16: {id:'leg16',category:'pants',slot:'w19',caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater3:{id:'mater3',caption:'�������',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {anticriticalhit:25,antijumpaway:25,criticalhit:25,hitpoints:33,strength:2,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		properties: {defence:30},
		setlink: {name:'scorpion'}
	, upgrade: {
	leg16_1: {id:'leg16_1',category:'pants',slot:'w19',caption:'������ ��������� [10]',binding:'bop',baseitem:'leg16',requireditems:{baltar:{exchanger:'baltar', items: {leg16:{id:'leg16',caption:'������ ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,baltarreputation:100},
		modify: {anticriticalhit:30,antijumpaway:35,criticalhit:35,hitpoints:43,strength:2,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:35},
		setlink: {name:''}
	}}

	},
	leg16_1: {id:'leg16_1',category:'pants',slot:'w19',caption:'������ ��������� [10]',binding:'bop',baseitem:'leg16',requireditems:{baltar:{exchanger:'baltar', items: {leg16:{id:'leg16',caption:'������ ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,baltarreputation:100},
		modify: {anticriticalhit:30,antijumpaway:35,criticalhit:35,hitpoints:43,strength:2,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:35},
		setlink: {name:''}
	},
	leg17: {id:'leg17',category:'pants',slot:'w19',caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:1},mater10:{id:'mater10',caption:'���� �������� ������',count:5}}}},
		common: {weight:10,price:150,durability:50},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {anticriticalhit:20,criticalhit:20,jumpaway:20,dexterity:2,intuition:2,magicdefence:20,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		properties: {defence:25},
		setlink: {name:'misdeed'}
	, upgrade: {
	leg17_1: {id:'leg17_1',category:'pants',slot:'w19',caption:'������ ��������� [10]',binding:'bop',baseitem:'leg17',requireditems:{baltar:{exchanger:'baltar', items: {leg16:{id:'leg16',caption:'������ ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,baltarreputation:100},
		modify: {anticriticalhit:25,criticalhit:30,jumpaway:30,dexterity:2,intuition:2,magicdefence:25,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:30},
		setlink: {name:''}
	}}

	},
	leg17_1: {id:'leg17_1',category:'pants',slot:'w19',caption:'������ ��������� [10]',binding:'bop',baseitem:'leg17',requireditems:{baltar:{exchanger:'baltar', items: {leg16:{id:'leg16',caption:'������ ���������',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:6}}}},
		common: {weight:10,price:30,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,baltarreputation:100},
		modify: {anticriticalhit:25,criticalhit:30,jumpaway:30,dexterity:2,intuition:2,magicdefence:25,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {defence:30},
		setlink: {name:''}
	},
	
	leg27: {id:'leg27',category:'pants',slot:'w19',caption:'Smashing Leggings',imp1:true,binding:'boe',
		common: {weight:6,durability:30,eprice:2.49},
		required: {level:8},
		modify: {anticriticalhit:25,antijumpaway:25,criticalhit:25,magicdefence:10,hitpoints:30,waistarmor1:10,waistarmor2:33,waistarmorf:9,waistarmorm:1,waistarmord:24,legarmor1:10,legarmor2:33,legarmorf:9,legarmorm:1,legarmord:24},
		properties: {defence:10},
		setlink: {name:'smash'}
	},
	leg33: {id:'leg33',category:'pants',slot:'w19',caption:'Desert Leggings',imp1:true,binding:'boe',
		common: {weight:6,durability:30,eprice:2.49},
		required: {level:8},
		modify: {anticriticalhit:25,antijumpaway:15,jumpaway:50,magicdefence:10,hitpoints:30,waistarmor1:10,waistarmor2:33,waistarmorf:9,waistarmorm:1,waistarmord:24,legarmor1:10,legarmor2:33,legarmorf:9,legarmorm:1,legarmord:24},
		properties: {defence:10},
		setlink: {name:'wanderer'}
	},
	
	
	
	





	ashielddc: {id:'ashielddc',category:'shields',slot:'w10',width:60,height:60,caption:'��� ��������� ��������',old:true,artefact:true,alignment:'dark',
		common: {durability:500},
		modify: {strength:5,dexterity:5,intuition:5,hitpoints:90,weaponskill:5,headarmor:15,bodyarmor:15,waistarmor:15,legarmor:15}
	},

	shield1: {id:'shield1',category:'shields',slot:'w10',width:60,height:60,caption:'�����',
		common: {weight:3,price:14,durability:20},
		required: {dexterity:6,level:2,endurance:9,strength:9},
		modify: {hitpoints:6,headarmor1:2,headarmor2:4,headarmorf:1,headarmorm:1,headarmord:3,bodyarmor1:2,bodyarmor2:4,bodyarmorf:1,bodyarmorm:1,bodyarmord:3,waistarmor1:2,waistarmor2:4,waistarmorf:1,waistarmorm:1,waistarmord:3,legarmor1:2,legarmor2:4,legarmorf:1,legarmorm:1,legarmord:3},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield4: {id:'shield4',category:'shields',slot:'w10',width:60,height:60,caption:'����� �����',
		common: {weight:4,price:17,durability:20},
		required: {dexterity:6,level:2,endurance:9,strength:9},
		modify: {strength:1,headarmor1:2,headarmor2:4,headarmorf:1,headarmorm:1,headarmord:3,bodyarmor1:2,bodyarmor2:4,bodyarmorf:1,bodyarmorm:1,bodyarmord:3,waistarmor1:2,waistarmor2:4,waistarmorf:1,waistarmorm:1,waistarmord:3,legarmor1:2,legarmor2:4,legarmorf:1,legarmorm:1,legarmord:3},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield6: {id:'shield6',category:'shields',slot:'w10',width:60,height:60,caption:'������� �����',
		common: {weight:4,price:22,durability:20},
		required: {dexterity:6,level:2,endurance:9,strength:9},
		modify: {maxdamage:2,mindamage:3,headarmor1:2,headarmor2:4,headarmorf:1,headarmorm:1,headarmord:3,bodyarmor1:2,bodyarmor2:4,bodyarmorf:1,bodyarmorm:1,bodyarmord:3,waistarmor1:2,waistarmor2:4,waistarmorf:1,waistarmorm:1,waistarmord:3,legarmor1:2,legarmor2:4,legarmorf:1,legarmorm:1,legarmord:3},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	trshield2: {id:'trshield2',category:'shields',slot:'w10',width:60,height:60,caption:'����������� ���',
		common: {weight:5,price:23,durability:20},
		required: {dexterity:6,level:2,endurance:9,strength:9},
		modify: {anticriticalhit:10,strength:1,headarmor1:2,headarmor2:4,headarmorf:1,headarmorm:1,headarmord:3,bodyarmor1:2,bodyarmor2:4,bodyarmorf:1,bodyarmorm:1,bodyarmord:3,waistarmor1:2,waistarmor2:4,waistarmorf:1,waistarmorm:1,waistarmord:3,legarmor1:2,legarmor2:4,legarmorf:1,legarmorm:1,legarmord:3},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	, upgrade: {
	trshield2_olditem: {id:'trshield2_olditem',old:true,
		common: {price:25,weight:5,durability:40},
		required: {strength:10,endurance:10,level:2,dexterity:0},
		modify: {antijumpaway:5,strength:4,anticriticalhit:0,headarmor1:1,headarmor2:3,headarmorm:1,headarmord:3,bodyarmor1:1,bodyarmor2:3,bodyarmorm:1,bodyarmord:3,waistarmor1:1,waistarmor2:3,waistarmorm:1,waistarmord:3,legarmor1:1,legarmor2:3,legarmorm:1,legarmord:3,headarmorf:1,bodyarmorf:1,waistarmorf:1,legarmorf:1}
	}}

	},
	shield5: {id:'shield5',category:'shields',slot:'w10',width:60,height:60,caption:'����� ����������',
		common: {weight:3,price:25,durability:20},
		required: {dexterity:6,level:2,endurance:9,strength:9},
		modify: {intuition:2,headarmor1:2,headarmor2:4,headarmorf:1,headarmorm:1,headarmord:3,bodyarmor1:2,bodyarmor2:4,bodyarmorf:1,bodyarmorm:1,bodyarmord:3,waistarmor1:2,waistarmor2:4,waistarmorf:1,waistarmorm:1,waistarmord:3,legarmor1:2,legarmor2:4,legarmorf:1,legarmorm:1,legarmord:3},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	grshield2: {id:'grshield2',category:'shields',slot:'w10',width:60,height:60,caption:'��� ������',old:true,
		common: {price:37,weight:12,durability:50},
		required: {strength:15,endurance:15,level:3},
		modify: {hitpoints:15,anticriticalhit:10,headarmor:6,bodyarmor:6,waistarmor:6,legarmor:6}
	},
	trshield1: {id:'trshield1',category:'shields',slot:'w10',width:60,height:60,caption:'��������� ��� ����',
		common: {weight:10,price:39,durability:30},
		required: {dexterity:9,level:3,endurance:12,strength:12},
		modify: {hitpoints:12,strength:2,headarmor1:2,headarmor2:7,headarmorf:1,headarmorm:1,headarmord:6,bodyarmor1:3,bodyarmor2:8,bodyarmorf:2,bodyarmorm:1,bodyarmord:6,waistarmor1:2,waistarmor2:7,waistarmorf:1,waistarmorm:1,waistarmord:6,legarmor1:2,legarmor2:7,legarmorf:1,legarmorm:1,legarmord:6},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield78: {id:'shield78',category:'shields',slot:'w10',width:60,height:60,caption:'������ ������� ���',
		common: {weight:12,price:42,durability:30},
		required: {dexterity:9,level:3,endurance:9,strength:9},
		modify: {anticriticalhit:5,antijumpaway:20,hitpoints:18,headarmor1:2,headarmor2:7,headarmorf:1,headarmorm:1,headarmord:6,bodyarmor1:2,bodyarmor2:7,bodyarmorf:1,bodyarmorm:1,bodyarmord:6,waistarmor1:2,waistarmor2:7,waistarmorf:1,waistarmorm:1,waistarmord:6,legarmor1:2,legarmor2:7,legarmorf:1,legarmorm:1,legarmord:6},
		defences: {crush:'good',thrust:'weak',cut:'magnificent',sabre:'weak'}
	},
	grshield1: {id:'grshield1',category:'shields',slot:'w10',width:60,height:60,caption:'������� ������� ���',
		common: {weight:12,price:48,durability:38},
		required: {dexterity:9,level:3,endurance:12,strength:12},
		modify: {hitpoints:9,headarmor1:4,headarmor2:18,headarmorf:3,headarmorm:1,headarmord:15,bodyarmor1:5,bodyarmor2:19,bodyarmorf:4,bodyarmorm:1,bodyarmord:15,waistarmor1:4,waistarmor2:18,waistarmorf:3,waistarmorm:1,waistarmord:15,legarmor1:4,legarmor2:18,legarmorf:3,legarmorm:1,legarmord:15},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield12: {id:'shield12',category:'shields',slot:'w10',width:60,height:60,caption:'��� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:11}}}},
		common: {weight:8,price:55,durability:30},
		required: {dexterity:12,level:4,endurance:15,strength:15},
		modify: {anticriticalhit:25,intuition:1,headarmor1:3,headarmor2:14,headarmorf:2,headarmorm:1,headarmord:12,bodyarmor1:4,bodyarmor2:15,bodyarmorf:3,bodyarmorm:1,bodyarmord:12,waistarmor1:3,waistarmor2:14,waistarmorf:2,waistarmorm:1,waistarmord:12,legarmor1:3,legarmor2:14,legarmorf:2,legarmorm:1,legarmord:12},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield10: {id:'shield10',category:'shields',slot:'w10',width:60,height:60,caption:'��� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:10,price:60,durability:40},
		required: {dexterity:12,level:4,endurance:15,strength:15},
		modify: {anticriticalhit:25,maxdamage:3,mindamage:2,headarmor1:3,headarmor2:14,headarmorf:2,headarmorm:1,headarmord:12,bodyarmor1:4,bodyarmor2:15,bodyarmorf:3,bodyarmorm:1,bodyarmord:12,waistarmor1:3,waistarmor2:14,waistarmorf:2,waistarmorm:1,waistarmord:12,legarmor1:3,legarmor2:14,legarmorf:2,legarmorm:1,legarmord:12},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield19: {id:'shield19',category:'shields',slot:'w10',width:60,height:60,caption:'��� �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:13}}}},
		common: {weight:10,price:61,durability:30},
		required: {dexterity:12,level:4,endurance:15,strength:15},
		modify: {anticriticalhit:20,intuition:1,hitpoints:15,headarmor1:3,headarmor2:14,headarmorf:2,headarmorm:1,headarmord:12,bodyarmor1:4,bodyarmor2:15,bodyarmorf:3,bodyarmorm:1,bodyarmord:12,waistarmor1:3,waistarmor2:14,waistarmorf:2,waistarmorm:1,waistarmord:12,legarmor1:3,legarmor2:14,legarmorf:2,legarmorm:1,legarmord:12},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield7: {id:'shield7',category:'shields',slot:'w10',width:60,height:60,caption:'������� ���',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:14}}}},
		common: {weight:5,price:72,durability:30},
		required: {dexterity:15,level:5,endurance:18,strength:18},
		modify: {anticriticalhit:25,antijumpaway:20,hitpoints:15,headarmor1:4,headarmor2:15,headarmorf:3,headarmorm:1,headarmord:12,bodyarmor1:4,bodyarmor2:15,bodyarmorf:3,bodyarmorm:1,bodyarmord:12,waistarmor1:4,waistarmor2:15,waistarmorf:3,waistarmorm:1,waistarmord:12,legarmor1:4,legarmor2:15,legarmorf:3,legarmorm:1,legarmord:12},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield3: {id:'shield3',category:'shields',slot:'w10',width:60,height:60,caption:'��� ������',old:true,
		common: {price:76,weight:13,durability:50},
		required: {strength:15,endurance:15,level:3},
		modify: {hitpoints:15,anticriticalhit:50,headarmor1:1,headarmor2:6,headarmorm:1,headarmord:6,bodyarmor1:1,bodyarmor2:6,bodyarmorm:1,bodyarmord:6,waistarmor1:1,waistarmor2:6,waistarmorm:1,waistarmord:6,legarmor1:1,legarmor2:6,legarmorm:1,legarmord:6}
	},
	shield79: {id:'shield79',category:'shields',slot:'w10',width:60,height:60,caption:'������� ������� ���',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:16}}}},
		common: {weight:15,price:82,durability:50},
		required: {dexterity:15,level:5,endurance:18,strength:18},
		modify: {anticriticalhit:10,antijumpaway:15,sabredefence:50,headarmor1:4,headarmor2:15,headarmorf:3,headarmorm:1,headarmord:12,bodyarmor1:4,bodyarmor2:15,bodyarmorf:3,bodyarmorm:1,bodyarmord:12,waistarmor1:4,waistarmor2:15,waistarmorf:3,waistarmorm:1,waistarmord:12,legarmor1:4,legarmor2:15,legarmorf:3,legarmorm:1,legarmord:12},
		defences: {crush:'good',thrust:'weak',cut:'magnificent',sabre:'weak'}
	},
	shield13: {id:'shield13',category:'shields',slot:'w10',width:60,height:60,caption:'������� ���',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:17}}}},
		common: {weight:15,price:87,durability:50},
		required: {dexterity:15,level:5,endurance:18,strength:18},
		modify: {hitpoints:18,headarmor1:8,headarmor2:31,headarmorf:7,headarmorm:1,headarmord:24,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24,waistarmor1:8,waistarmor2:31,waistarmorf:7,waistarmorm:1,waistarmord:24,legarmor1:8,legarmor2:31,legarmorf:7,legarmorm:1,legarmord:24},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield9: {id:'shield9',category:'shields',slot:'w10',width:60,height:60,caption:'������� ��� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:19}}}},
		common: {weight:10,price:96,durability:40},
		required: {dexterity:18,level:6,endurance:21,strength:21},
		modify: {anticriticalhit:45,maxdamage:3,mindamage:2,headarmor1:6,headarmor2:23,headarmorf:5,headarmorm:1,headarmord:18,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18,waistarmor1:6,waistarmor2:23,waistarmorf:5,waistarmorm:1,waistarmord:18,legarmor1:6,legarmor2:23,legarmorf:5,legarmorm:1,legarmord:18},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield11: {id:'shield11',category:'shields',slot:'w10',width:60,height:60,caption:'������������ ���',
		common: {weight:15,price:129,durability:50},
		required: {dexterity:21,level:7,endurance:24,strength:24},
		modify: {anticriticalhit:15,antijumpaway:15,criticalhit:15,jumpaway:15,strength:4,headarmor1:7,headarmor2:27,headarmorf:6,headarmorm:1,headarmord:21,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21,waistarmor1:7,waistarmor2:27,waistarmorf:6,waistarmorm:1,waistarmord:21,legarmor1:7,legarmor2:27,legarmorf:6,legarmorm:1,legarmord:21},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield8: {id:'shield8',category:'shields',slot:'w10',width:60,height:60,caption:'������ ���',
		common: {weight:8,price:131,durability:30},
		required: {level:7,endurance:25,strength:25},
		modify: {anticriticalhit:25,antijumpaway:25,defence:25,hitpoints:18,headarmor1:7,headarmor2:24,headarmorf:6,headarmorm:1,headarmord:18,bodyarmor1:7,bodyarmor2:24,bodyarmorf:6,bodyarmorm:1,bodyarmord:18,waistarmor1:7,waistarmor2:24,waistarmorf:6,waistarmorm:1,waistarmord:18,legarmor1:7,legarmor2:24,legarmorf:6,legarmorm:1,legarmord:18},
		setlink: {name:'forest'},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	, upgrade: {
	shield8_olditem: {id:'shield8_olditem',old:true,
		common: {price:116,weight:8,durability:30},
		required: {level:6,endurance:21,strength:21,dexterity:18},
		modify: {anticriticalhit:15,antijumpaway:0,defence:0,hitpoints:21,headarmor1:6,headarmor2:20,headarmorf:5,headarmord:15,bodyarmor1:6,bodyarmor2:20,bodyarmorf:5,bodyarmord:15,waistarmor1:6,waistarmor2:20,waistarmorf:5,waistarmord:15,legarmor1:6,legarmor2:20,legarmorf:5,legarmord:15,watermagicdefence:50,earthmagicdefence:50,headarmorm:1,bodyarmorm:1,waistarmorm:1,legarmorm:1}
	}}

	},
	shield15: {id:'shield15',category:'shields',slot:'w10',width:60,height:60,caption:'��� �������������',
		common: {weight:15,price:135,durability:50},
		required: {dexterity:21,level:7,endurance:24,strength:24},
		modify: {anticriticalhit:40,jumpaway:20,magicdefence:30,headarmor1:7,headarmor2:27,headarmorf:6,headarmorm:1,headarmord:21,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21,waistarmor1:7,waistarmor2:27,waistarmorf:6,waistarmorm:1,waistarmord:21,legarmor1:7,legarmor2:27,legarmorf:6,legarmorm:1,legarmord:21},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield17: {id:'shield17',category:'shields',slot:'w10',width:60,height:60,caption:'��� �����',
		common: {weight:17,price:139,durability:40},
		required: {dexterity:21,level:7,endurance:24,strength:24},
		modify: {anticriticalhit:35,antijumpaway:20,hitpoints:66,headarmor1:7,headarmor2:27,headarmorf:6,headarmorm:1,headarmord:21,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21,waistarmor1:7,waistarmor2:27,waistarmorf:6,waistarmorm:1,waistarmord:21,legarmor1:7,legarmor2:27,legarmorf:6,legarmorm:1,legarmord:21},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield20: {id:'shield20',category:'shields',slot:'w10',width:60,height:60,caption:'����������� ���',
		common: {weight:19,price:141,durability:50},
		required: {dexterity:21,level:7,endurance:24,strength:24},
		modify: {anticriticalhit:50,earthmagicdefence:45,strength:1,headarmor1:8,headarmor2:31,headarmorf:7,headarmorm:1,headarmord:24,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24,waistarmor1:8,waistarmor2:31,waistarmorf:7,waistarmorm:1,waistarmord:24,legarmor1:8,legarmor2:31,legarmorf:7,legarmorm:1,legarmord:24},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield16: {id:'shield16',category:'shields',slot:'w10',width:60,height:60,caption:'�������� ���',
		common: {weight:12,price:147,durability:50},
		required: {dexterity:21,level:7,endurance:25,strength:24},
		modify: {anticriticalhit:40,dexterity:2,airmagicdefence:40,hitpoints:30,headarmor1:7,headarmor2:27,headarmorf:6,headarmorm:1,headarmord:21,bodyarmor1:8,bodyarmor2:28,bodyarmorf:7,bodyarmorm:1,bodyarmord:21,waistarmor1:7,waistarmor2:27,waistarmorf:6,waistarmorm:1,waistarmord:21,legarmor1:7,legarmor2:27,legarmorf:6,legarmorm:1,legarmord:21},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield77: {id:'shield77',category:'shields',slot:'w10',width:60,height:60,caption:'��� �������������',
		common: {weight:20,price:158,durability:80},
		required: {dexterity:25,intuition:25,level:8,endurance:30,strength:30},
		modify: {anticriticalhit:75,antijumpaway:35,firemagicdefence:20,hitpoints:18,headarmor1:7,headarmor2:27,headarmorf:6,headarmorm:1,headarmord:21,bodyarmor1:7,bodyarmor2:27,bodyarmorf:6,bodyarmorm:1,bodyarmord:21,waistarmor1:7,waistarmor2:27,waistarmorf:6,waistarmorm:1,waistarmord:21,legarmor1:7,legarmor2:27,legarmorf:6,legarmorm:1,legarmord:21},
		defences: {crush:'mediocre',thrust:'good',cut:'good',sabre:'mediocre'}
	},
	shield21: {id:'shield21',category:'shields',slot:'w10',width:60,height:60,caption:'��� ������',
		common: {weight:19,price:160,durability:50},
		required: {dexterity:18,intuition:35,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:50,criticalhit:25,shieldblock:5,hitpoints:24,headarmor1:9,headarmor2:32,headarmorf:8,headarmorm:1,headarmord:24,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24,waistarmor1:9,waistarmor2:32,waistarmorf:8,waistarmorm:1,waistarmord:24,legarmor1:9,legarmor2:32,legarmorf:8,legarmorm:1,legarmord:24},
		setlink: {name:'sunset'},
		defences: {crush:'weak',thrust:'weak',cut:'mediocre',sabre:'mediocre'}
	},
	shield80: {id:'shield80',category:'shields',slot:'w10',width:60,height:60,caption:'��� �������� ����',
		common: {weight:15,price:160,durability:50},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:60,shieldblock:6,firemagicdefence:20,watermagicdefence:-20,hitpoints:33,headarmor1:9,headarmor2:32,headarmorf:8,headarmorm:1,headarmord:24,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24,waistarmor1:9,waistarmor2:32,waistarmorf:8,waistarmorm:1,waistarmord:24,legarmor1:9,legarmor2:32,legarmorf:8,legarmorm:1,legarmord:24},
		setlink: {name:'firedown'}
	},
	shield18: {id:'shield18',category:'shields',slot:'w10',width:60,height:60,caption:'������� ���',
		common: {weight:15,price:161,durability:50},
		required: {level:8,endurance:40,strength:40},
		modify: {anticriticalhit:55,jumpaway:-35,defence:25,hitpoints:33,headarmor1:8,headarmor2:31,headarmorf:7,headarmorm:1,headarmord:24,bodyarmor1:8,bodyarmor2:31,bodyarmorf:7,bodyarmorm:1,bodyarmord:24,waistarmor1:8,waistarmor2:31,waistarmorf:7,waistarmorm:1,waistarmord:24,legarmor1:8,legarmor2:31,legarmorf:7,legarmorm:1,legarmord:24},
		properties: {shieldblock:10},
		setlink: {name:'siege'},
		defences: {crush:'good',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield14: {id:'shield14',category:'shields',slot:'w10',width:60,height:60,caption:'��� �������',
		common: {weight:10,price:173,durability:50},
		required: {dexterity:18,intuition:35,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:-5,criticalhit:65,shieldblock:5,maxdamage:15,mindamage:10,headarmor1:5,headarmor2:22,headarmorf:4,headarmorm:1,headarmord:18,bodyarmor1:6,bodyarmor2:23,bodyarmorf:5,bodyarmorm:1,bodyarmord:18,waistarmor1:5,waistarmor2:22,waistarmorf:4,waistarmorm:1,waistarmord:18,legarmor1:5,legarmor2:22,legarmorf:4,legarmorm:1,legarmord:18},
		defences: {crush:'weak',thrust:'weak',cut:'mediocre',sabre:'mediocre'}
	, upgrade: {
	shield14_old: {id:'shield14_old',old:true,
		common: {weight:10,price:121,durability:50},
		required: {intuition:0,dexterity:18,level:6,endurance:21,strength:21},
		modify: {anticriticalhit:-25,criticalhit:35,maxdamage:15,mindamage:10,headarmor1:4,headarmor2:18,headarmorf:3,headarmorm:1,headarmord:14,bodyarmor1:4,bodyarmor2:18,bodyarmorf:3,bodyarmorm:1,bodyarmord:14,waistarmor1:4,waistarmor2:18,waistarmorf:3,waistarmorm:1,waistarmord:14,legarmor1:4,legarmor2:18,legarmorf:3,legarmorm:1,legarmord:14}
	}}

	},
	shield82: {id:'shield82',category:'shields',slot:'w10',width:60,height:60,caption:'��� �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater18:{id:'mater18',caption:'������������ ������',count:3}}}},
		common: {weight:15,price:190,durability:50},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:80,antijumpaway:35,defence:15,hitpoints:24,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		setlink: {name:'spider'},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	, upgrade: {
	shield82_1: {id:'shield82_1',category:'shields',slot:'w10',width:60,height:60,caption:'��� ����� [10]',binding:'boe',baseitem:'shield82',clist:{_:{sp_mat17:{id:'sp_mat17',caption:'�������� ����',count:1},mater14:{id:'mater14',caption:'������� �����',count:3},mater21:{id:'mater21',caption:'�������� �������',count:1},shield82:{id:'shield82',caption:'��� �����',count:1}}},
		common: {weight:15,price:230,durability:200},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35},
		modify: {anticriticalhit:80,antijumpaway:35,defence:25,hitpoints:45,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		properties: {shieldblock:5},
		setlink: {name:'spider',skip:'yes'},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	}}

	},
	shield82_1: {id:'shield82_1',category:'shields',slot:'w10',width:60,height:60,caption:'��� ����� [10]',binding:'boe',baseitem:'shield82',clist:{_:{sp_mat17:{id:'sp_mat17',caption:'�������� ����',count:1},mater14:{id:'mater14',caption:'������� �����',count:3},mater21:{id:'mater21',caption:'�������� �������',count:1},shield82:{id:'shield82',caption:'��� �����',count:1}}},
		common: {weight:15,price:230,durability:200},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35},
		modify: {anticriticalhit:80,antijumpaway:35,defence:25,hitpoints:45,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		properties: {shieldblock:5},
		setlink: {name:'spider',skip:'yes'},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield83: {id:'shield83',category:'shields',slot:'w10',width:60,height:60,caption:'��� �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater15:{id:'mater15',caption:'������� �������',count:3}}}},
		common: {weight:20,price:190,durability:50},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:55,criticalhit:30,shieldblock:5,hitpoints:48,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		setlink: {name:'bloodmoon'},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	, upgrade: {
	shield83_1: {id:'shield83_1',category:'shields',slot:'w10',width:60,height:60,caption:'��� �������� ���� [10]',binding:'boe',baseitem:'shield83',clist:{_:{sp_mat17:{id:'sp_mat17',caption:'�������� ����',count:1},shield83:{id:'shield83',caption:'��� �������� ����',count:1},mater15:{id:'mater15',caption:'������� �������',count:2},mater20:{id:'mater20',caption:'�������� ������� �����',count:1}}},
		common: {weight:20,price:230,durability:200},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35},
		modify: {anticriticalhit:60,criticalhit:35,shieldblock:10,hitpoints:60,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30,bodyarmor1:11,bodyarmor2:40,bodyarmorf:10,bodyarmorm:1,bodyarmord:30,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		setlink: {name:'bloodmoon',skip:'yes'},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	}}

	},
	shield83_1: {id:'shield83_1',category:'shields',slot:'w10',width:60,height:60,caption:'��� �������� ���� [10]',binding:'boe',baseitem:'shield83',clist:{_:{sp_mat17:{id:'sp_mat17',caption:'�������� ����',count:1},shield83:{id:'shield83',caption:'��� �������� ����',count:1},mater15:{id:'mater15',caption:'������� �������',count:2},mater20:{id:'mater20',caption:'�������� ������� �����',count:1}}},
		common: {weight:20,price:230,durability:200},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35},
		modify: {anticriticalhit:60,criticalhit:35,shieldblock:10,hitpoints:60,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30,bodyarmor1:11,bodyarmor2:40,bodyarmorf:10,bodyarmorm:1,bodyarmord:30,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		setlink: {name:'bloodmoon',skip:'yes'},
		defences: {crush:'normal',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield84: {id:'shield84',category:'shields',slot:'w10',width:60,height:60,caption:'��� ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater19:{id:'mater19',caption:'�������� ������',count:3}}}},
		common: {weight:20,price:190,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {anticriticalhit:55,defence:25,hitpoints:33,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		properties: {shieldblock:10},
		setlink: {name:'losttime'},
		defences: {crush:'good',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	, upgrade: {
	shield84_1: {id:'shield84_1',category:'shields',slot:'w10',width:60,height:60,caption:'��� ������� ������ [10]',binding:'boe',baseitem:'shield84',clist:{_:{sp_mat17:{id:'sp_mat17',caption:'�������� ����',count:1},shield84:{id:'shield84',caption:'��� ������� ������',count:1},mater13:{id:'mater13',caption:'�������� ������ �������',count:2},mater31:{id:'mater31',caption:'�������� ���������� �����',count:1}}},
		common: {weight:20,price:230,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:65,strength:45},
		modify: {anticriticalhit:55,defence:25,hitpoints:66,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30,bodyarmor1:11,bodyarmor2:40,bodyarmorf:10,bodyarmorm:1,bodyarmord:30,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {shieldblock:20},
		setlink: {name:'losttime',skip:'yes'},
		defences: {crush:'good',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	}}

	},
	shield84_1: {id:'shield84_1',category:'shields',slot:'w10',width:60,height:60,caption:'��� ������� ������ [10]',binding:'boe',baseitem:'shield84',clist:{_:{sp_mat17:{id:'sp_mat17',caption:'�������� ����',count:1},shield84:{id:'shield84',caption:'��� ������� ������',count:1},mater13:{id:'mater13',caption:'�������� ������ �������',count:2},mater31:{id:'mater31',caption:'�������� ���������� �����',count:1}}},
		common: {weight:20,price:230,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:65,strength:45},
		modify: {anticriticalhit:55,defence:25,hitpoints:66,headarmor1:11,headarmor2:40,headarmorf:10,headarmorm:1,headarmord:30,bodyarmor1:11,bodyarmor2:40,bodyarmorf:10,bodyarmorm:1,bodyarmord:30,waistarmor1:11,waistarmor2:40,waistarmorf:10,waistarmorm:1,waistarmord:30,legarmor1:11,legarmor2:40,legarmorf:10,legarmorm:1,legarmord:30},
		properties: {shieldblock:20},
		setlink: {name:'losttime',skip:'yes'},
		defences: {crush:'good',thrust:'weak',cut:'magnificent',sabre:'mediocre'}
	},
	shield85_du2: {id:'shield85_du2',category:'shields',slot:'w10',width:60,height:60,caption:'��� ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:1},mater16:{id:'mater16',caption:'��������� ������',count:3}}}},
		common: {weight:15,price:190,durability:50},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:60,shieldblock:6,magicdefence:10,hitpoints:45,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		setlink: {name:'morningsun'}
	},
	shield85: {id:'shield85',category:'shields',slot:'w10',width:60,height:60,caption:'��� ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:1},mater14:{id:'mater14',caption:'������� �����',count:3}}}},
		common: {weight:15,price:190,durability:50},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {anticriticalhit:30,criticalhit:75,jumpaway:75,defence:10,hitpoints:36,headarmor1:6,headarmor2:26,headarmorf:5,headarmorm:1,headarmord:21,bodyarmor1:6,bodyarmor2:26,bodyarmorf:5,bodyarmorm:1,bodyarmord:21,waistarmor1:6,waistarmor2:26,waistarmorf:5,waistarmorm:1,waistarmord:21,legarmor1:6,legarmor2:26,legarmorf:5,legarmorm:1,legarmord:21},
		setlink: {name:'misdeed'},
		defences: {crush:'normal',thrust:'weak',cut:'good',sabre:'normal'}
	},
	shield86: {id:'shield86',category:'shields',slot:'w10',width:60,height:60,caption:'��� ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1},mater16:{id:'mater16',caption:'��������� ������',count:3}}}},
		common: {weight:20,price:190,durability:50},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {anticriticalhit:30,criticalhit:30,shieldblock:10,hitpoints:36,headarmor1:10,headarmor2:36,headarmorf:9,headarmorm:1,headarmord:27,bodyarmor1:10,bodyarmor2:36,bodyarmorf:9,bodyarmorm:1,bodyarmord:27,waistarmor1:10,waistarmor2:36,waistarmorf:9,waistarmorm:1,waistarmord:27,legarmor1:10,legarmor2:36,legarmorf:9,legarmorm:1,legarmord:27},
		setlink: {name:'scorpion'}
	},
	ashield6_7dk29as: {id:'ashield6_7dk29as',category:'shields',slot:'w10',width:60,height:60,caption:'������������ ���',binding:'bop',
		common: {price:390,weight:20,durability:100},
		required: {level:10,strength:75,endurance:50,dexterity:20,intuition:20},
		modify: {anticriticalhit:75,antijumpaway:45,defence:50,hitpoints:90,strength:4,headarmor1:14,headarmor2:52,headarmorf:13,headarmorm:1,headarmord:39,bodyarmor1:14,bodyarmor2:52,bodyarmorf:13,bodyarmorm:1,bodyarmord:39,waistarmor1:14,waistarmor2:52,waistarmorf:13,waistarmorm:1,waistarmord:39,legarmor1:14,legarmor2:52,legarmorf:13,legarmorm:1,legarmord:39},
		properties: {shieldblock:25}
	},

	

	
	
	
	shield209: {id:'shield209',category:'shields',slot:'w10',width:60,height:60,caption:'Smashing Shield',imp1:true,binding:'boe',
		common: {weight:15,durability:40,eprice:3.19},
		required: {level:8},
		modify: {anticriticalhit:70,magicdefence:20,defence:25,hitpoints:33,headarmor1:9,headarmor2:32,headarmorf:8,headarmorm:1,headarmord:24,bodyarmor1:9,bodyarmor2:32,bodyarmorf:8,bodyarmorm:1,bodyarmord:24,waistarmor1:9,waistarmor2:32,waistarmorf:8,waistarmorm:1,waistarmord:24,legarmor1:9,legarmor2:32,legarmorf:8,legarmorm:1,legarmord:24},
		setlink: {name:'smash'},
		defences: {crush:'mediocre',thrust:'mediocre',cut:'good',sabre:'good'}
	},
	
	shield88: {id:'shield88',category:'shields',slot:'w10',width:60,height:60,caption:'��� ������������� �����',clist:{_:{sp_mat46:{id:'sp_mat46',caption:'��������� �������� ����',count:1},mater294:{id:'mater294',caption:'����� ������� ��������',count:7},mater300:{id:'mater300',caption:'����� �����',count:7},mater296:{id:'mater296',caption:'��������� ���������� �������',count:11},mater295:{id:'mater295',caption:'���������� �����',count:6},mater298:{id:'mater298',caption:'������� ���',count:6}}},
		common: {weight:20,price:265,durability:50},
		required: {dexterity:10,level:10,endurance:70,strength:50},
		
		modify: {anticriticalhit:70,defence:25,hitpoints:50,headarmor1:13,headarmor2:48,headarmorf:12,headarmorm:1,headarmord:36,bodyarmor1:13,bodyarmor2:48,bodyarmorf:12,bodyarmorm:1,bodyarmord:36,waistarmor1:13,waistarmor2:48,waistarmorf:12,waistarmorm:1,waistarmord:36,legarmor1:13,legarmor2:48,legarmorf:12,legarmorm:1,legarmord:36},
		properties: {shieldblock:25}
	},
	clip7: {id:'clip7',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������',old:true,
		common: {price:7,weight:1,durability:20},
		required: {strength:8,endurance:8,level:2},
		modify: {headarmor:3,bodyarmor:3,waistarmor:3,legarmor:3}
	},
	clip6: {id:'clip6',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ���������',old:true,
		common: {price:15,weight:1,durability:30},
		required: {strength:10,level:1},
		modify: {criticalhit:5,anticriticalhit:5,antijumpaway:15}
	},
	clip2: {id:'clip2',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������',old:true,alignment:'light',
		common: {price:30,weight:1,durability:20},
		required: {strength:10,endurance:8,level:2},
		modify: {hitpoints:12,criticalhit:15,antijumpaway:30}
	},
	clip5: {id:'clip5',category:'earrings',slot:'w1',width:60,height:20,caption:'���������� ������ ��������',old:true,
		common: {price:30,weight:1,durability:30},
		required: {strength:10,endurance:10,level:2},
		modify: {hitpoints:3,criticalhit:20,jumpaway:30}
	},
	clip58: {id:'clip58',category:'earrings',slot:'w1',width:60,height:20,caption:'�������� ������',
		common: {weight:1,price:40,durability:40},
		required: {dexterity:10,level:3,endurance:10,strength:10},
		modify: {antijumpaway:50,hitpoints:18}
	},
	clip8: {id:'clip8',category:'earrings',slot:'w1',width:60,height:20,caption:'������� ������',old:true,
		common: {price:46,weight:1,durability:30},
		required: {strength:15,endurance:15,level:3},
		modify: {criticalhit:20,anticriticalhit:20,jumpaway:20,antijumpaway:20}
	},
	clip56: {id:'clip56',category:'earrings',slot:'w1',width:60,height:20,caption:'�������� ������',
		common: {weight:1,price:50,durability:40},
		required: {intuition:15,level:3,endurance:10,strength:12},
		modify: {criticalpower:6,criticalhit:50}
	},
	_1apr72: {id:'1apr72',category:'earrings',slot:'w1',width:60,height:20,caption:'����� �� ����',
		common: {weight:1,price:50,durability:5,expirationdate:30},
		required: {level:7,wisdom:0},
		modify: {hitpoints:99}
	},
	clip1: {id:'clip1',category:'earrings',slot:'w1',width:60,height:20,caption:'���������� ������',old:true,
		common: {price:60,weight:1,durability:30},
		required: {strength:20,endurance:15,level:4},
		modify: {hitpoints:12,criticalhit:50}
	},
	clip57: {id:'clip57',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:1,price:60,durability:40},
		required: {dexterity:18,level:4,endurance:10,strength:10},
		modify: {anticriticalhit:20,jumpaway:55,counterstroke:3,dexterity:2}
	},
	clip53: {id:'clip53',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:1,price:60,durability:30},
		required: {dexterity:12,level:4,endurance:12,strength:12},
		modify: {anticriticalhit:30,antijumpaway:30,criticalhit:15,jumpaway:15,dexterity:1}
	},
	clip86: {id:'clip86',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:1,price:60,durability:50},
		required: {intellect:20,level:4},
		modify: {anticriticalhit:10,hitpoints:36,mana:50}
	},
	clip11: {id:'clip11',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ����������',old:true,
		common: {price:64,weight:1,durability:50},
		required: {strength:13,endurance:13,level:3},
		modify: {hitpoints:9,knifeskill:2,clubskill:2,axeskill:2,swordskill:2}
	},
	clip4: {id:'clip4',category:'earrings',slot:'w1',width:60,height:20,caption:'��������� ������ �����',old:true,
		common: {price:68,weight:1,durability:30},
		required: {strength:20,endurance:15,level:4},
		modify: {hitpoints:99}
	},
	clip63: {id:'clip63',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:14}}}},
		common: {weight:1,price:74,durability:50},
		required: {level:5,endurance:20,strength:20},
		modify: {hitpoints:120}
	},
	clip55: {id:'clip55',category:'earrings',slot:'w1',width:60,height:20,caption:'������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:15}}}},
		common: {weight:1,price:75,durability:50},
		required: {level:5,endurance:17,strength:17},
		modify: {anticriticalhit:15,jumpaway:30,hitpoints:33,strength:2,headarmor1:1,headarmor2:9,headarmorm:1,headarmord:9,bodyarmor1:1,bodyarmor2:9,bodyarmorm:1,bodyarmord:9,waistarmor1:1,waistarmor2:9,waistarmorm:1,waistarmord:9,legarmor1:1,legarmor2:9,legarmorm:1,legarmord:9}
	},
	clip54: {id:'clip54',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:15}}}},
		common: {weight:1,price:79,durability:30},
		required: {dexterity:10,intuition:10,level:5,endurance:10,strength:10},
		modify: {dexterity:2,intuition:2,intellect:2,hitpoints:33,strength:2}
	},
	clip62: {id:'clip62',category:'earrings',slot:'w1',width:60,height:20,caption:'�������� ������ �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:17}}}},
		common: {weight:1,price:89,durability:50},
		required: {intuition:25,level:6,endurance:20,strength:20},
		modify: {criticalpower:10,criticalhit:50,hitpoints:33,strength:1}
	},
	clip10: {id:'clip10',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ����� ��������',old:true,
		common: {price:98,weight:1,durability:50},
		required: {strength:25,endurance:25,level:4},
		modify: {hitpoints:66,headarmor:18,bodyarmor:18,waistarmor:18,legarmor:18}
	},
	clip60: {id:'clip60',category:'earrings',slot:'w1',width:60,height:20,caption:'������������ ������ ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:19}}}},
		common: {weight:1,price:98,durability:50},
		required: {level:6,endurance:16,strength:15},
		modify: {anticriticalhit:30,antijumpaway:30,criticalhit:30,jumpaway:30,strength:4}
	},
	clip87: {id:'clip87',category:'earrings',slot:'w1',width:60,height:20,caption:'������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:20}}}},
		common: {weight:1,price:100,durability:50},
		required: {intellect:30,level:6,endurance:15,strength:10},
		modify: {anticriticalhit:15,magicpower:2,magicskill:1,hitpoints:36,mana:60}
	},
	clip51: {id:'clip51',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������',
		common: {weight:1,price:120,durability:20},
		required: {level:7,endurance:27,strength:27},
		modify: {anticriticalhit:25,antijumpaway:25,dexterity:1,intuition:1,defence:25,watermagicdefence:10,airmagicdefence:10,earthmagicdefence:10,hitpoints:18,headarmor1:1,headarmor2:9,headarmorm:1,headarmord:9,bodyarmor1:1,bodyarmor2:9,bodyarmorm:1,bodyarmord:9,waistarmor1:1,waistarmor2:9,waistarmorm:1,waistarmord:9,legarmor1:1,legarmor2:9,legarmorm:1,legarmord:9},
		setlink: {name:'forest'}
	, upgrade: {
	clip51_olditem: {id:'clip51_olditem',old:true,
		common: {price:76,weight:1,durability:20},
		required: {level:5,endurance:15,strength:15},
		modify: {anticriticalhit:5,antijumpaway:10,defence:0,airmagicdefence:10,hitpoints:12,headarmor1:1,headarmor2:6,headarmorm:1,headarmord:6,bodyarmor1:1,bodyarmor2:6,bodyarmorm:1,bodyarmord:6,waistarmor1:1,waistarmor2:6,waistarmorm:1,waistarmord:6,legarmor1:1,legarmor2:6,legarmorm:1,legarmord:6,jumpaway:25,dexterity:1,intuition:1,watermagicdefence:20,earthmagicdefence:20}
	}}

	},
	clip66: {id:'clip66',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������',
		common: {weight:1,price:120,durability:50},
		required: {level:7,endurance:35,strength:30},
		modify: {defence:100}
	},
	clip67: {id:'clip67',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ���������',
		common: {weight:1,price:120,durability:50},
		required: {level:7,strength:50},
		modify: {power:20}
	, upgrade: {
	clip67_olditem: {id:'clip67_olditem',old:true,
		common: {weight:1,price:120,durability:50},
		required: {intuition:35,level:7,strength:30},
		modify: {power:20}
	}}

	},
	clip70: {id:'clip70',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������',
		common: {weight:1,price:120,durability:70},
		required: {dexterity:15,intuition:15,level:7,endurance:27,strength:27},
		modify: {anticriticalhit:30,dexterity:1,crushdefence:150}
	},
	clip73: {id:'clip73',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �����',
		common: {weight:1,price:120,durability:70},
		required: {dexterity:35,level:7,endurance:15,strength:15},
		modify: {anticriticalhit:25,antijumpaway:25,jumpaway:45,counterstroke:5,magicdefence:20,hitpoints:24,strength:2}
	},
	clip74: {id:'clip74',category:'earrings',slot:'w1',width:60,height:20,caption:'����� ������',
		common: {weight:1,price:120,durability:60},
		required: {dexterity:15,intuition:30,level:7,endurance:20,strength:20},
		modify: {criticalpower:15,antijumpaway:30,criticalhit:60,swordskill:2}
	},
	clip3: {id:'clip3',category:'earrings',slot:'w1',width:60,height:20,caption:'����� ����������',old:true,alignment:'dark',
		common: {price:140,weight:1,durability:100},
		required: {strength:15,dexterity:15,intuition:15,endurance:15,level:4},
		modify: {criticalhit:30,jumpaway:30,antijumpaway:30,strength:4,knifeskill:2,clubskill:2,axeskill:2,swordskill:2}
	},
	clip52: {id:'clip52',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������',
		common: {weight:1,price:150,durability:50},
		required: {dexterity:40,level:8,endurance:15,strength:15},
		modify: {anticriticalhit:15,antijumpaway:25,jumpaway:85,counterstroke:15,strength:6},
		setlink: {name:'flash'}
	},
	clip79: {id:'clip79',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ���������',
		common: {weight:1,price:151,durability:50},
		required: {intellect:10,level:8,endurance:25,strength:25},
		modify: {intellect:4,firemagicdefence:100,watermagicdefence:100,airmagicdefence:100,earthmagicdefence:100},
		
	},
	clip64: {id:'clip64',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������� ��������',
		common: {weight:1,price:156,durability:50},
		required: {intuition:30,level:8,endurance:30,strength:30},
		modify: {criticalpower:20,antijumpaway:-30,criticalhit:50,jumpaway:-30,crushpower:20,dexterity:-2,hitpoints:33,strength:4}
	},
	clip69: {id:'clip69',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������',
		common: {weight:1,price:160,durability:50},
		required: {intuition:35,level:8,endurance:30,strength:30},
		modify: {criticalpower:25,antijumpaway:30,criticalhit:65,intuition:1,swordskill:1,clubskill:1,knifeskill:1,axeskill:1},
		setlink: {name:'sunset'}
	},
	clip75: {id:'clip75',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ���������',
		common: {weight:1,price:160,durability:50},
		required: {dexterity:20,intuition:20,level:8,endurance:30,strength:35},
		modify: {anticriticalhit:60,antijumpaway:60,intellect:2,weaponskill:1,magicdefence:20,defence:25}
	},
	clip65: {id:'clip65',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������� ������',
		common: {weight:1,price:161,durability:50},
		required: {intuition:35,level:8,endurance:25,strength:25},
		modify: {criticalpower:30,antijumpaway:20,criticalhit:70,strength:2}
	},
	clip68: {id:'clip68',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������� ����',
		common: {weight:1,price:163,durability:50},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:25,antijumpaway:25,power:10,swordskill:1,clubskill:1,knifeskill:1,axeskill:1,magicdefence:20,firemagicdefence:20,watermagicdefence:-20,strength:4},
		setlink: {name:'firedown'}
	},
	clip61: {id:'clip61',category:'earrings',slot:'w1',width:60,height:20,caption:'������� ������ ���������',
		common: {weight:1,price:165,durability:50},
		required: {level:8,endurance:40,strength:40},
		modify: {anticriticalhit:30,antijumpaway:30,clubskill:1,defence:25,hitpoints:66,headarmor1:1,headarmor2:25,headarmorm:1,headarmord:25,bodyarmor1:1,bodyarmor2:25,bodyarmorm:1,bodyarmord:25,waistarmor1:1,waistarmor2:25,waistarmorm:1,waistarmord:25,legarmor1:1,legarmor2:25,legarmorm:1,legarmord:25},
		setlink: {name:'siege'}
	, upgrade: {
	clip61_olditem: {id:'clip61_olditem',caption:'������ ���������',old:true,
		common: {price:150,weight:1,durability:50},
		required: {level:8,endurance:40,strength:40},
		modify: {anticriticalhit:20,antijumpaway:20,clubskill:0,defence:0,parry:6,hitpoints:66,headarmor1:1,headarmor2:25,headarmorm:1,headarmord:25,bodyarmor1:1,bodyarmor2:25,bodyarmorm:1,bodyarmord:25,waistarmor1:1,waistarmor2:25,waistarmorm:1,waistarmord:25,legarmor1:1,legarmor2:25,legarmorm:1,legarmord:25}
	}}

	},
	clip88: {id:'clip88',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������',
		common: {weight:1,price:180,durability:50},
		required: {level:7,endurance:15,strength:15,wisdom:25},
		modify: {anticriticalhit:15,intellect:2,magicskill:1,magicdefence:40,hitpoints:48,mana:100}
	},
	clip59: {id:'clip59',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� �����',
		common: {weight:1,price:182,durability:50},
		required: {level:7,endurance:15,strength:15,wisdom:25},
		modify: {magicskill:1,magicdefence:30,hitpoints:33,mana:80,manaconsumption:5}
	, upgrade: {
	clip59_olditem: {id:'clip59_olditem',old:true,
		modify: {manaconsumption:0,intuition:8}
	}}

	},
	clip76: {id:'clip76',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:2}}}},
		common: {weight:1,price:200,durability:60},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:25,antijumpaway:25,jumpaway:85,counterstroke:15,intellect:2,magicdefence:20,hitpoints:33,strength:4},
		setlink: {name:'spider'}
	, upgrade: {
	clip76_1: {id:'clip76_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ����� [10]',binding:'bop',baseitem:'clip76',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip76:{id:'clip76',caption:'������ �����',count:1}}},
		common: {weight:1,price:240,durability:60},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,demonsreputation:10000},
		modify: {anticriticalhit:35,antijumpaway:35,jumpaway:110,counterstroke:17,intellect:2,magicdefence:25,hitpoints:41,strength:4},
		setlink: {name:''}
	}}

	},
	clip76_1: {id:'clip76_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ����� [10]',binding:'bop',baseitem:'clip76',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip76:{id:'clip76',caption:'������ �����',count:1}}},
		common: {weight:1,price:240,durability:60},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,demonsreputation:10000},
		modify: {anticriticalhit:35,antijumpaway:35,jumpaway:110,counterstroke:17,intellect:2,magicdefence:25,hitpoints:41,strength:4},
		setlink: {name:''}
	},
	clip80: {id:'clip80',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:200,durability:50},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {criticalpower:25,antijumpaway:35,criticalhit:70,intellect:2,weaponskill:1,strength:4},
		setlink: {name:'bloodmoon'}
	, upgrade: {
	clip80_1: {id:'clip80_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������� ���� [10]',binding:'bop',baseitem:'clip80',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip80:{id:'clip80',caption:'������ �������� ����',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,demonsreputation:10000},
		modify: {criticalpower:30,antijumpaway:45,criticalhit:100,intellect:2,weaponskill:1,strength:4},
		setlink: {name:''}
	}}

	},
	clip80_1: {id:'clip80_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������� ���� [10]',binding:'bop',baseitem:'clip80',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip80:{id:'clip80',caption:'������ �������� ����',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,demonsreputation:10000},
		modify: {criticalpower:30,antijumpaway:45,criticalhit:100,intellect:2,weaponskill:1,strength:4},
		setlink: {name:''}
	},
	clip81: {id:'clip81',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:2}}}},
		common: {weight:1,price:200,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {anticriticalhit:40,antijumpaway:40,clubskill:1,magicdefence:10,defence:25,hitpoints:66,headarmor1:1,headarmor2:30,headarmorm:1,headarmord:30,bodyarmor1:1,bodyarmor2:30,bodyarmorm:1,bodyarmord:30,waistarmor1:1,waistarmor2:30,waistarmorm:1,waistarmord:30,legarmor1:1,legarmor2:30,legarmorm:1,legarmord:30},
		setlink: {name:'losttime'}
	, upgrade: {
	clip81_1: {id:'clip81_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������� ������ [10]',binding:'bop',baseitem:'clip81',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip81:{id:'clip81',caption:'������ ������� ������',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,demonsreputation:10000},
		modify: {anticriticalhit:45,antijumpaway:45,clubskill:1,magicdefence:20,defence:35,hitpoints:75,headarmor1:1,headarmor2:33,headarmorm:1,headarmord:33,bodyarmor1:1,bodyarmor2:33,bodyarmorm:1,bodyarmord:33,waistarmor1:1,waistarmor2:33,waistarmorm:1,waistarmord:33,legarmor1:1,legarmor2:33,legarmorm:1,legarmord:33},
		setlink: {name:''}
	}}

	},
	clip81_1: {id:'clip81_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������� ������ [10]',binding:'bop',baseitem:'clip81',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip81:{id:'clip81',caption:'������ ������� ������',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,demonsreputation:10000},
		modify: {anticriticalhit:45,antijumpaway:45,clubskill:1,magicdefence:20,defence:35,hitpoints:75,headarmor1:1,headarmor2:33,headarmorm:1,headarmord:33,bodyarmor1:1,bodyarmor2:33,bodyarmorm:1,bodyarmord:33,waistarmor1:1,waistarmor2:33,waistarmorm:1,waistarmord:33,legarmor1:1,legarmor2:33,legarmorm:1,legarmord:33},
		setlink: {name:''}
	},
	clip82_du2: {id:'clip82_du2',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:2}}}},
		common: {weight:1,price:200,durability:50},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:35,antijumpaway:30,power:10,weaponskill:1,magicdefence:30,firemagicdefence:10,watermagicdefence:-10,strength:6},
		setlink: {name:'morningsun'}
	, upgrade: {
	clip82_du2_1: {id:'clip82_du2_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� ������ [10]',binding:'bop',baseitem:'clip82_du2',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip82_du2:{id:'clip82_du2',caption:'������ ��������� ������',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,demonsreputation:10000},
		modify: {anticriticalhit:45,antijumpaway:40,power:12,weaponskill:1,magicdefence:40,firemagicdefence:20,watermagicdefence:-10,strength:6},
		setlink: {name:''}
	}}

	},
	clip82_du2_1: {id:'clip82_du2_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� ������ [10]',binding:'bop',baseitem:'clip82_du2',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip82_du2:{id:'clip82_du2',caption:'������ ��������� ������',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,demonsreputation:10000},
		modify: {anticriticalhit:45,antijumpaway:40,power:12,weaponskill:1,magicdefence:40,firemagicdefence:20,watermagicdefence:-10,strength:6},
		setlink: {name:''}
	},
	clip89: {id:'clip89',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:200,durability:50},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {criticalhit:95,jumpaway:100,counterstroke:10,dexterity:5,intuition:2,weaponskill:1},
		setlink: {name:'misdeed'}
	, upgrade: {
	clip89_1: {id:'clip89_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'clip89',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip89:{id:'clip89',caption:'������ ���������',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,demonsreputation:10000},
		modify: {criticalhit:110,jumpaway:120,counterstroke:12,dexterity:5,intuition:2,weaponskill:1,hitpoints:28},
		setlink: {name:''}
	}}

	},
	clip89_1: {id:'clip89_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'clip89',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip89:{id:'clip89',caption:'������ ���������',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,demonsreputation:10000},
		modify: {criticalhit:110,jumpaway:120,counterstroke:12,dexterity:5,intuition:2,weaponskill:1,hitpoints:28},
		setlink: {name:''}
	},
	clip90: {id:'clip90',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:2}}}},
		common: {weight:1,price:200,durability:50},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {antijumpaway:90,criticalhit:90,weaponskill:1,defence:25,hitpoints:24,strength:4},
		setlink: {name:'scorpion'}
	, upgrade: {
	clip90_1: {id:'clip90_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'clip90',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip90:{id:'clip90',caption:'������ ���������',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,demonsreputation:10000},
		modify: {antijumpaway:100,criticalhit:100,weaponskill:1,defence:35,hitpoints:48,strength:4},
		setlink: {name:''}
	}}

	},
	clip90_1: {id:'clip90_1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'clip90',clist:{anvil_dem:{sp_mat15:{id:'sp_mat15',caption:'�������� �����',count:1},mater267:{id:'mater267',caption:'������������ �����',count:1},clip90:{id:'clip90',caption:'������ ���������',count:1}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,demonsreputation:10000},
		modify: {antijumpaway:100,criticalhit:100,weaponskill:1,defence:35,hitpoints:48,strength:4},
		setlink: {name:''}
	},
	clip91: {id:'clip91',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������� ����',binding:'bop',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:200,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:50},
		modify: {anticriticalhit:70,antijumpaway:70,strength:10,hitpoints:55,clubskill:1}
	},
	clip71: {id:'clip71',category:'earrings',slot:'w1',width:60,height:20,caption:'�������� ������',
		common: {weight:1,price:240,durability:50},
		required: {intellect:40,level:8,firemagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:25,firemagicpower:25,intellect:7,firemagicskill:2,hitpoints:33,manaconsumption:5},
		setlink: {name:'fire'}
	, upgrade: {
	clip71_olditem: {id:'clip71_olditem',old:true,
		common: {price:240,durability:50},
		required: {intellect:40,level:8,firemagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:15,firemagicpower:25,intuition:4,intellect:4,firemagicskill:2,hitpoints:33,manaconsumption:5}
	}}

	},
	ring112: {id:'ring112',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ���������� ����',
		common: {weight:1,price:240,durability:50},
		required: {intellect:40,level:8,airmagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:30,airmagicpower:5,intellect:8,airmagicskill:2,hitpoints:18,manaconsumption:10},
		setlink: {name:'twilightstorm'}
	},

	clip95: {id:'clip95',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������ ������',
		common: {weight:1,price:240,durability:50},
		required: {intellect:40,level:8,darkmagicskill:5,wisdom:40},
		modify: {anticriticalhit:35,darkmagicpower:4,intellect:6,darkmagicskill:2,hitpoints:96,mana:60,magicdefence:15,defence:25}
	},

	clip93: {id:'clip93',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �������� ����������',
		common: {weight:1,price:300,durability:50},
		required: {intellect:50,level:9,darkmagicskill:5,wisdom:50},
		modify: {anticriticalhit:45,darkmagicpower:6,intellect:8,darkmagicskill:2,hitpoints:120,mana:75,magicdefence:20,defence:35}
	},

	clip94: {id:'clip94',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������ ���������',
		common: {weight:1,price:240,durability:50},
		required: {intellect:40,level:8,lightmagicskill:5,wisdom:40},
		modify: {manaconsumption:4,lightmagicpower:2,intellect:6,lightmagicskill:2,hitpoints:42,mana:100,magicdefence:25}
	},

	clip92: {id:'clip92',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������� �������',
		common: {weight:1,price:300,durability:50},
		required: {intellect:50,level:9,lightmagicskill:5,wisdom:50},
		modify: {manaconsumption:7,lightmagicpower:2,intellect:8,lightmagicskill:3,hitpoints:42,mana:100,magicdefence:30}
	},

	clip77: {id:'clip77',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� ��������',
		common: {weight:1,price:240,durability:50},
		required: {intellect:40,level:8,watermagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:60,watermagicpower:15,intellect:4,watermagicskill:2,defence:25,hitpoints:33,manaconsumption:5}
	},
	clip78: {id:'clip78',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ��������� ������',
		common: {weight:1,price:240,durability:50},
		required: {intellect:40,level:8,earthmagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:25,earthmagicpower:15,intellect:8,earthmagicskill:2,hitpoints:72,manaconsumption:5},
		setlink: {name:'granitepower'}
	},
	clip83: {id:'clip83',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ����������� �������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:3},mater7:{id:'mater7',caption:'������ ��������� ����',count:1}}}},
		common: {weight:1,price:300,durability:50},
		required: {intellect:50,level:9,firemagicskill:7,wisdom:50},
		modify: {anticriticalhit:25,firemagicpower:35,intellect:10,firemagicskill:2,hitpoints:48,manaconsumption:5},
		setlink: {name:'inceneration'}
	},
	clip84: {id:'clip84',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ����������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:3},mater8:{id:'mater8',caption:'����������',count:1}}}},
		common: {weight:1,price:300,durability:50},
		required: {intellect:50,level:9,earthmagicskill:7,wisdom:50},
		modify: {anticriticalhit:35,earthmagicpower:25,intellect:10,earthmagicskill:2,hitpoints:90,manaconsumption:5},
		setlink: {name:'gravitation'}
	},
	clip85: {id:'clip85',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ������ ������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:3},mater3:{id:'mater3',caption:'�������',count:1}}}},
		common: {weight:1,price:300,durability:50},
		required: {intellect:50,level:9,airmagicskill:7,wisdom:50},
		modify: {anticriticalhit:40,airmagicpower:15,intellect:10,airmagicskill:2,hitpoints:33,manaconsumption:10},
		setlink: {name:'chainlightning'}
	},
	clip82: {id:'clip82',category:'earrings',slot:'w1',width:60,height:20,caption:'������ ����������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:3},mater4:{id:'mater4',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:300,durability:50},
		required: {intellect:50,level:9,watermagicskill:7,wisdom:50},
		modify: {anticriticalhit:70,watermagicpower:20,intellect:7,watermagicskill:2,defence:35,hitpoints:42,manaconsumption:5},
		setlink: {name:'frosting'}
	},
	aclip1: {id:'aclip1',category:'earrings',slot:'w1',width:60,height:20,caption:'������ �����������',adjustment:true,artefact:true,
		common: {durability:500},
		modify: {hitpoints:1000}
	},
	

	earrings210: {id:'earrings210',category:'earrings',slot:'w1',width:60,height:20,caption:'Smashing Earrings',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.19},
		required: {level:8},
		modify: {criticalpower:20,antijumpaway:40,criticalhit:80,hitpoints:45,strength:4},
		setlink: {name:'smash'}
	},
	earrings211: {id:'earrings211',category:'earrings',slot:'w1',width:60,height:20,caption:'Desert Earrings',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:3.19},
		required: {level:8},
		modify: {antijumpaway:45,parry:2,jumpaway:90,counterstroke:10,thrustpower:10,dexterity:4,hitpoints:33},
		setlink: {name:'wanderer'}
	},
	earrings_illusion1: {id:'earrings_illusion1',category:'earrings',slot:'w1',width:60,height:20,caption:'������������� ������',description:'������� �������'
	},
	earrings_illusion2: {id:'earrings_illusion2',category:'earrings',slot:'w1',width:60,height:20,caption:'������� ������',description:'������� �������'
	},
	amulet4: {id:'amulet4',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� ��������',old:true,
		common: {price:1,weight:1,durability:50}
	},
	amulet6: {id:'amulet6',category:'necklaces',slot:'w2',width:60,height:20,caption:'������������ ��������',old:true,
		common: {price:1,weight:1,durability:50}
	},
	amulet2: {id:'amulet2',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� �������',old:true,
		common: {price:1,weight:1,durability:50}
	},
	amulet5: {id:'amulet5',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� ����� ���������',old:true,
		common: {price:15,weight:1,durability:40},
		required: {strength:10,level:1},
		modify: {criticalhit:5,anticriticalhit:5,jumpaway:10}
	},
	amulet70: {id:'amulet70',category:'necklaces',slot:'w2',width:60,height:20,caption:'���������� ������',
		common: {weight:1,price:17,durability:20},
		required: {dexterity:10,level:2,endurance:8,strength:8},
		modify: {anticriticalhit:5,antijumpaway:5,criticalhit:7,jumpaway:15}
	},
	amulet69: {id:'amulet69',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� �����',
		common: {weight:1,price:27,durability:20},
		required: {level:2,endurance:10,strength:10},
		modify: {criticalhit:10,strength:2,headarmor1:1,headarmor2:3,headarmorm:1,headarmord:3,bodyarmor1:1,bodyarmor2:3,bodyarmorm:1,bodyarmord:3,waistarmor1:1,waistarmor2:3,waistarmorm:1,waistarmord:3,legarmor1:1,legarmor2:3,legarmorm:1,legarmord:3}
	},
	amulet1: {id:'amulet1',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� �������',old:true,
		common: {price:30,weight:1,durability:40},
		required: {strength:12,endurance:10,level:3},
		modify: {strength:2,dexterity:2,headarmor:3,bodyarmor:3,waistarmor:3,legarmor:3}
	},
	amulet8: {id:'amulet8',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� �������� �������',old:true,
		common: {price:35,weight:1,durability:40},
		required: {strength:15,endurance:10,level:3},
		modify: {anticriticalhit:15,jumpaway:30,headarmor:6,bodyarmor:6,waistarmor:6,legarmor:6}
	},
	amulet66: {id:'amulet66',category:'necklaces',slot:'w2',width:60,height:20,caption:'���������� ��������',
		common: {weight:1,price:41,durability:30},
		required: {level:3,endurance:15,strength:15},
		modify: {anticriticalhit:15,criticalhit:15,sabredefence:25,hitpoints:6}
	},
	amulet62: {id:'amulet62',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� �����',
		common: {weight:1,price:42,durability:30},
		required: {level:3,endurance:15,strength:15},
		modify: {antijumpaway:30,headarmor1:1,headarmor2:12,headarmorm:1,headarmord:12,bodyarmor1:1,bodyarmor2:12,bodyarmorm:1,bodyarmord:12,waistarmor1:1,waistarmor2:12,waistarmorm:1,waistarmord:12,legarmor1:1,legarmor2:12,legarmorm:1,legarmord:12}
	},
	amulet53: {id:'amulet53',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� -����� �����-',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:1,price:58,durability:30},
		required: {intuition:15,level:4,endurance:15,strength:15},
		modify: {criticalhit:25,intuition:3,hitpoints:33}
	},
	amulet90: {id:'amulet90',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:1,price:60,durability:50},
		required: {intellect:20,level:4},
		modify: {anticriticalhit:30,intellect:2,hitpoints:18,mana:25}
	},
	amulet63: {id:'amulet63',category:'necklaces',slot:'w2',width:60,height:20,caption:'������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:13}}}},
		common: {weight:1,price:61,durability:50},
		required: {level:4,endurance:15,strength:15},
		modify: {anticriticalhit:30,defence:5,hitpoints:18}
	},
	amulet67: {id:'amulet67',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:13}}}},
		common: {weight:1,price:62,durability:50},
		required: {level:4,endurance:20,strength:10},
		modify: {hitpoints:99}
	, upgrade: {
	amulet67_1: {id:'amulet67_1',caption:'������ �������� (��)',
		modify: {hitpoints:150}
	}}

	},
	amulet7: {id:'amulet7',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� ����������� �������',old:true,
		common: {price:65,weight:1,durability:40},
		required: {strength:20,endurance:15,level:4},
		modify: {hitpoints:12,anticriticalhit:50,jumpaway:20}
	},
	amulet9: {id:'amulet9',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������-��������',old:true,
		common: {price:85,weight:1,durability:40},
		required: {strength:20,endurance:15,level:4},
		modify: {anticriticalhit:15,antijumpaway:15,strength:4,dexterity:2,intuition:2}
	},
	amulet56: {id:'amulet56',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ -��������� �����-',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:17}}}},
		common: {weight:1,price:89,durability:60},
		required: {dexterity:20,level:5,endurance:10,strength:10},
		modify: {anticriticalhit:25,antijumpaway:25,jumpaway:45,counterstroke:5,intuition:3}
	},
	amulet54: {id:'amulet54',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:17}}}},
		common: {weight:1,price:89,durability:50},
		required: {dexterity:10,intuition:10,level:5,endurance:10,strength:10},
		modify: {dexterity:4,intuition:4,strength:4}
	},
	amulet65: {id:'amulet65',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� ��������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:1,price:90,durability:50},
		required: {level:5,endurance:20,strength:20},
		modify: {anticriticalhit:25,jumpaway:25,dexterity:2,intuition:2,strength:5}
	},
	amulet99: {id:'amulet99',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� ����',
		common: {weight:1,price:90,durability:30},
		required: {level:4,strength:15},
		modify: {anticriticalhit:27,antijumpaway:27,hitpoints:33,strength:3,headarmor1:4,headarmor2:6,headarmorf:3,headarmorm:1,headarmord:3,bodyarmor1:4,bodyarmor2:6,bodyarmorf:3,bodyarmorm:1,bodyarmord:3,waistarmor1:4,waistarmor2:6,waistarmorf:3,waistarmorm:1,waistarmord:3,legarmor1:4,legarmor2:6,legarmorf:3,legarmorm:1,legarmord:3}
	},
	amulet100: {id:'amulet100',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� ��������',
		common: {weight:1,price:90,durability:30},
		required: {level:4,intellect:15},
		modify: {anticriticalhit:27,hitpoints:30,mana:30,intellect:3,headarmor1:4,headarmor2:6,headarmorf:3,headarmorm:1,headarmord:3,bodyarmor1:4,bodyarmor2:6,bodyarmorf:3,bodyarmorm:1,bodyarmord:3,waistarmor1:4,waistarmor2:6,waistarmorf:3,waistarmorm:1,waistarmord:3,legarmor1:4,legarmor2:6,legarmorf:3,legarmorm:1,legarmord:3}
	},
	amulet60: {id:'amulet60',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:18}}}},
		common: {weight:1,price:93,durability:30},
		required: {dexterity:15,intuition:15,level:5,endurance:15,strength:15},
		modify: {anticriticalhit:25,antijumpaway:25,criticalhit:25,jumpaway:25,dexterity:1,intuition:1,hitpoints:6,strength:1,headarmor1:1,headarmor2:6,headarmorm:1,headarmord:6,bodyarmor1:1,bodyarmor2:6,bodyarmorm:1,bodyarmord:6,waistarmor1:1,waistarmor2:6,waistarmorm:1,waistarmord:6,legarmor1:1,legarmor2:6,legarmorm:1,legarmord:6}
	},
	amulet3: {id:'amulet3',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� �������� ���',old:true,
		common: {price:120,weight:1,durability:50},
		required: {strength:20,endurance:15,level:4},
		modify: {swordskill:4}
	},
	amulet82: {id:'amulet82',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� ������ ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:24}}}},
		common: {weight:1,price:120,durability:60},
		required: {dexterity:10,intuition:10,level:6,endurance:25,strength:25},
		modify: {anticriticalhit:30,dexterity:1,intuition:1,intellect:1,defence:25,hitpoints:21,strength:1,headarmor1:1,headarmor2:15,headarmorm:1,headarmord:15,bodyarmor1:1,bodyarmor2:15,bodyarmorm:1,bodyarmord:15,waistarmor1:1,waistarmor2:15,waistarmorm:1,waistarmord:15,legarmor1:1,legarmor2:15,legarmorm:1,legarmord:15}
	},
	amulet55: {id:'amulet55',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:26}}}},
		common: {weight:1,price:130,durability:60},
		required: {intuition:25,level:6,endurance:15,strength:15},
		modify: {criticalpower:40,strength:1}
	},
	amulet91: {id:'amulet91',category:'necklaces',slot:'w2',width:60,height:20,caption:'������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:26}}}},
		common: {weight:1,price:130,durability:50},
		required: {intellect:30,level:6,endurance:15,strength:10},
		modify: {anticriticalhit:35,magicpower:5,intellect:2,magicskill:1,hitpoints:24,mana:50}
	},
	amulet58: {id:'amulet58',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������',
		common: {weight:1,price:160,durability:30},
		required: {dexterity:20,level:7,endurance:25,strength:30},
		modify: {anticriticalhit:35,antijumpaway:35,intellect:2,defence:50,watermagicdefence:20,airmagicdefence:20,earthmagicdefence:20,hitpoints:18},
		setlink: {name:'forest'}
	, upgrade: {
	amulet58_olditem: {id:'amulet58_olditem',old:true,
		common: {price:90,weight:1,durability:30},
		required: {level:5,endurance:10,strength:10,dexterity:20},
		modify: {anticriticalhit:0,antijumpaway:0,defence:0,airmagicdefence:20,jumpaway:45,intellect:2,watermagicdefence:40,earthmagicdefence:40,hitpoints:18}
	}}

	},
	amulet59: {id:'amulet59',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� ���������',
		common: {weight:1,price:168,durability:50},
		required: {dexterity:20,intuition:20,level:7,endurance:20,strength:20},
		modify: {anticriticalhit:55,antijumpaway:25,parry:5,dexterity:4,defence:25,strength:4}
	},
	amulet73: {id:'amulet73',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ��������',
		common: {weight:1,price:170,durability:50},
		required: {dexterity:15,intuition:15,level:7,endurance:27,strength:27},
		modify: {anticriticalhit:45,dexterity:3,intellect:3,magicdefence:30,defence:50}
	},
	amulet92: {id:'amulet92',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ �������',
		common: {weight:1,price:170,durability:50},
		required: {intellect:25,level:7,endurance:15,strength:15,wisdom:30},
		modify: {anticriticalhit:40,magicpower:10,magicskill:1,defence:15,hitpoints:18,mana:60}
	},
	amulet94: {id:'amulet94',category:'necklaces',slot:'w2',width:60,height:20,caption:'����������� ������',
		common: {weight:1,price:170,durability:50},
		required: {level:7,endurance:25,strength:25},
		modify: {magicdefence:20,defence:15,hitpoints:210}
	},
	amulet52: {id:'amulet52',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������ ������',
		common: {weight:1,price:171,durability:50},
		required: {level:7,endurance:30,strength:30},
		modify: {anticriticalhit:20,antijumpaway:15,shieldblock:5,magicdefence:20,hitpoints:66,strength:4,headarmor1:1,headarmor2:18,headarmorm:1,headarmord:18,bodyarmor1:1,bodyarmor2:18,bodyarmorm:1,bodyarmord:18,waistarmor1:1,waistarmor2:18,waistarmorm:1,waistarmord:18,legarmor1:1,legarmor2:18,legarmorm:1,legarmord:18}
	},
	amulet50: {id:'amulet50',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ -������ �����-',
		common: {weight:1,price:172,durability:50},
		required: {dexterity:35,level:7,endurance:15,strength:15},
		modify: {anticriticalhit:35,antijumpaway:25,jumpaway:80,counterstroke:10,dexterity:6,hitpoints:45}
	},
	amulet61: {id:'amulet61',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� ������',
		common: {weight:1,price:200,durability:50},
		required: {dexterity:45,intuition:20,level:8,endurance:15,strength:15},
		modify: {anticriticalhit:40,antijumpaway:30,jumpaway:125,counterstroke:15,dexterity:4,intuition:4},
		setlink: {name:'flash'}
	},
	amulet71: {id:'amulet71',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� ������',
		common: {weight:1,price:200,durability:50},
		required: {intellect:40,level:8,firemagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:30,firemagicpower:5,intellect:4,firemagicdefence:25,defence:50,mana:100},
		setlink: {name:'fire'}
	},
	amulet76: {id:'amulet76',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ���������� ����',
		common: {weight:1,price:200,durability:50},
		required: {intellect:40,level:8,airmagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:35,airmagicpower:5,intellect:6,defence:25,airmagicdefence:30,hitpoints:18,mana:100},
		setlink: {name:'twilightstorm'}
	},
	amulet77: {id:'amulet77',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ��������� ��������',
		common: {weight:1,price:200,durability:50},
		required: {intellect:40,level:8,watermagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {anticriticalhit:25,watermagicpower:5,intellect:4,watermagicskill:2,magicdefence:20,defence:75,watermagicdefence:10}
	},
	amulet78: {id:'amulet78',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ��������� ������',
		common: {weight:1,price:200,durability:50},
		required: {intellect:40,level:8,earthmagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {intellect:4,earthmagicskill:2,magicdefence:10,defence:25,earthmagicdefence:10,hitpoints:72,mana:100},
		setlink: {name:'granitepower'}
	},

	amulet107: {id:'amulet107',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������ ������',
		common: {weight:1,price:200,durability:50},
		required: {intellect:40,level:8,darkmagicskill:5,wisdom:40},
		modify: {anticriticalhit:45,intellect:6,darkmagicskill:2,defence:35,darkmagicpower:5,hitpoints:65,mana:25}
	},

	amulet105: {id:'amulet105',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ �������� ����������',
		common: {weight:1,price:240,durability:50},
		required: {intellect:50,level:9,darkmagicskill:5,wisdom:50},
		modify: {anticriticalhit:55,intellect:7,darkmagicskill:2,defence:45,darkmagicpower:7,hitpoints:75,mana:30}
	},

	amulet106: {id:'amulet106',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������ ���������',
		common: {weight:1,price:200,durability:50},
		required: {intellect:40,level:8,lightmagicskill:3,wisdom:40},
		modify: {manaconsumption:3,intellect:5,lightmagicskill:1,defence:20,hitpoints:36,mana:110}
	},

	amulet104: {id:'amulet104',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������� �������',
		common: {weight:1,price:240,durability:50},
		required: {intellect:50,level:9,lightmagicskill:3,wisdom:50},
		modify: {manaconsumption:5,intellect:5,lightmagicskill:2,defence:30,hitpoints:36,mana:120}
	},

	amulet79: {id:'amulet79',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� ���������',
		common: {weight:1,price:200,durability:50},
		required: {intellect:10,level:8,endurance:25,strength:25},
		modify: {intellect:3,firemagicdefence:60,defence:50,watermagicdefence:60,airmagicdefence:60,earthmagicdefence:60,hitpoints:72},
		
	},
	amulet68: {id:'amulet68',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� �������� ����',
		common: {weight:1,price:203,durability:50},
		required: {dexterity:25,intuition:25,level:8,endurance:25,strength:25},
		modify: {anticriticalhit:85,parry:10,magicdefence:10,firemagicdefence:20,watermagicdefence:-20,hitpoints:33,strength:8},
		setlink: {name:'firedown'}
	},
	amulet51: {id:'amulet51',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������',
		common: {weight:1,price:206,durability:50},
		required: {intellect:20,level:8,endurance:15,strength:15,wisdom:30},
		modify: {intellect:4,magicdefence:20,defence:75,mana:100}
	},
	amulet74: {id:'amulet74',category:'necklaces',slot:'w2',width:60,height:20,caption:'����� ���������',
		common: {weight:1,price:214,durability:50},
		required: {dexterity:20,intuition:20,level:8,endurance:30,strength:35},
		modify: {anticriticalhit:75,antijumpaway:75,intellect:1,magicdefence:30,defence:25,hitpoints:33,strength:4}
	},
	amulet64: {id:'amulet64',category:'necklaces',slot:'w2',width:60,height:20,caption:'������� �������� �����',
		common: {weight:1,price:219,durability:50},
		required: {level:8,endurance:40,strength:40},
		modify: {anticriticalhit:25,antijumpaway:25,magicdefence:30,hitpoints:99,strength:6,headarmor1:1,headarmor2:25,headarmorm:1,headarmord:25,bodyarmor1:1,bodyarmor2:25,bodyarmorm:1,bodyarmord:25,waistarmor1:1,waistarmor2:25,waistarmorm:1,waistarmord:25,legarmor1:1,legarmor2:25,legarmorm:1,legarmord:25},
		setlink: {name:'siege'}
	},
	amulet75: {id:'amulet75',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:2}}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:35,antijumpaway:35,jumpaway:110,counterstroke:15,magicdefence:30,hitpoints:66,strength:4},
		setlink: {name:'spider'}
	, upgrade: {
	amulet75_1: {id:'amulet75_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ����� [10]',binding:'bop',baseitem:'amulet75',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet75:{id:'amulet75',caption:'������ �����',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:45,antijumpaway:45,jumpaway:120,counterstroke:20,magicdefence:40,hitpoints:74,strength:4},
		setlink: {name:''}
	}}

	},
	amulet75_1: {id:'amulet75_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ����� [10]',binding:'bop',baseitem:'amulet75',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet75:{id:'amulet75',caption:'������ �����',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:45,antijumpaway:45,jumpaway:120,counterstroke:20,magicdefence:40,hitpoints:74,strength:4},
		setlink: {name:''}
	},
	amulet80: {id:'amulet80',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:65,antijumpaway:45,intellect:1,magicdefence:30,defence:75,hitpoints:48,strength:1},
		setlink: {name:'bloodmoon'}
	, upgrade: {
	amulet80_1: {id:'amulet80_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ �������� ���� [10]',binding:'bop',baseitem:'amulet80',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet80:{id:'amulet80',caption:'������ �������� ����',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:80,antijumpaway:60,intellect:1,magicdefence:40,defence:85,hitpoints:62,strength:1},
		setlink: {name:''}
	}}

	},
	amulet80_1: {id:'amulet80_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ �������� ���� [10]',binding:'bop',baseitem:'amulet80',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet80:{id:'amulet80',caption:'������ �������� ����',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:80,antijumpaway:60,intellect:1,magicdefence:40,defence:85,hitpoints:62,strength:1},
		setlink: {name:''}
	},
	amulet81: {id:'amulet81',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:2}}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {anticriticalhit:35,antijumpaway:35,magicdefence:40,hitpoints:99,strength:6,headarmor1:1,headarmor2:25,headarmorm:1,headarmord:25,bodyarmor1:1,bodyarmor2:25,bodyarmorm:1,bodyarmord:25,waistarmor1:1,waistarmor2:25,waistarmorm:1,waistarmord:25,legarmor1:1,legarmor2:25,legarmorm:1,legarmord:25},
		setlink: {name:'losttime'}
	, upgrade: {
	amulet81_angels: {id:'amulet81_angels',caption:'������ ������� ������ (��)',fixless:true,
		modify: {strength:10,hitpoints:250}
	},
	amulet81_1: {id:'amulet81_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������� ������ [10]',binding:'bop',baseitem:'amulet81',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet81:{id:'amulet81',caption:'������ ������� ������',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:45,antijumpaway:45,magicdefence:50,hitpoints:118,strength:6,headarmor1:1,headarmor2:30,headarmorm:1,headarmord:30,bodyarmor1:1,bodyarmor2:30,bodyarmorm:1,bodyarmord:30,waistarmor1:1,waistarmor2:30,waistarmorm:1,waistarmord:30,legarmor1:1,legarmor2:30,legarmorm:1,legarmord:30},
		setlink: {name:''}
	}}

	},
	amulet81_1: {id:'amulet81_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������� ������ [10]',binding:'bop',baseitem:'amulet81',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet81:{id:'amulet81',caption:'������ ������� ������',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:45,antijumpaway:45,magicdefence:50,hitpoints:118,strength:6,headarmor1:1,headarmor2:30,headarmorm:1,headarmord:30,bodyarmor1:1,bodyarmor2:30,bodyarmorm:1,bodyarmord:30,waistarmor1:1,waistarmor2:30,waistarmorm:1,waistarmord:30,legarmor1:1,legarmor2:30,legarmorm:1,legarmord:30},
		setlink: {name:''}
	},
	amulet83_du2: {id:'amulet83_du2',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:2}}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:90,parry:10,magicdefence:20,firemagicdefence:10,watermagicdefence:-10,hitpoints:66,strength:8},
		setlink: {name:'morningsun'}
	, upgrade: {
	amulet83_du2_1: {id:'amulet83_du2_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� ��������� ������ [10]',binding:'bop',baseitem:'amulet83_du2',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet83_du2:{id:'amulet83_du2',caption:'�������� ��������� ������',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:110,parry:12,magicdefence:30,firemagicdefence:20,watermagicdefence:-10,hitpoints:80,strength:8},
		setlink: {name:''}
	}}

	},
	amulet83_du2_1: {id:'amulet83_du2_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'�������� ��������� ������ [10]',binding:'bop',baseitem:'amulet83_du2',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet83_du2:{id:'amulet83_du2',caption:'�������� ��������� ������',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:110,parry:12,magicdefence:30,firemagicdefence:20,watermagicdefence:-10,hitpoints:80,strength:8},
		setlink: {name:''}
	},
	amulet86: {id:'amulet86',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ����������� �������',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:2},mater7:{id:'mater7',caption:'������ ��������� ����',count:4}}}},
		common: {weight:1,price:240,durability:50},
		required: {intellect:50,level:9,firemagicskill:7,wisdom:50},
		modify: {anticriticalhit:40,firemagicpower:5,intellect:5,firemagicdefence:30,defence:60,mana:120},
		setlink: {name:'inceneration'}
	},
	amulet87: {id:'amulet87',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ����������',requireditems:{shop:{exchanger:'shop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:2},mater8:{id:'mater8',caption:'����������',count:4}}}},
		common: {weight:1,price:240,durability:50},
		required: {intellect:50,level:9,earthmagicskill:7,wisdom:50},
		modify: {intellect:5,earthmagicskill:2,magicdefence:10,defence:35,earthmagicdefence:10,hitpoints:90,mana:120},
		setlink: {name:'gravitation'}
	},
	amulet88: {id:'amulet88',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������ ������',requireditems:{shop:{exchanger:'shop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:2},mater3:{id:'mater3',caption:'�������',count:4}}}},
		common: {weight:1,price:240,durability:50},
		required: {intellect:50,level:9,airmagicskill:7,wisdom:50},
		modify: {anticriticalhit:45,airmagicpower:5,intellect:7,defence:25,airmagicdefence:30,hitpoints:40,mana:120},
		setlink: {name:'chainlightning'}
	},
	amulet85: {id:'amulet85',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ����������',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:2},mater4:{id:'mater4',caption:'�������� �������',count:4}}}},
		common: {weight:1,price:240,durability:50},
		required: {intellect:50,level:9,watermagicskill:7,wisdom:50},
		modify: {anticriticalhit:35,watermagicpower:5,intellect:5,watermagicskill:2,magicdefence:30,defence:90,watermagicdefence:10},
		setlink: {name:'frosting'}
	},
	amulet97: {id:'amulet97',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {anticriticalhit:40,jumpaway:85,dexterity:4,magicdefence:50,defence:50,hitpoints:45},
		setlink: {name:'misdeed'}
	, upgrade: {
	amulet97_1: {id:'amulet97_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'amulet97',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet97:{id:'amulet97',caption:'������ ���������',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,angelsreputation:10000},
		modify: {anticriticalhit:50,jumpaway:110,dexterity:4,magicdefence:60,defence:60,hitpoints:61},
		setlink: {name:''}
	}}

	},
	amulet97_1: {id:'amulet97_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'amulet97',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet97:{id:'amulet97',caption:'������ ���������',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,angelsreputation:10000},
		modify: {anticriticalhit:50,jumpaway:110,dexterity:4,magicdefence:60,defence:60,hitpoints:61},
		setlink: {name:''}
	},
	amulet98: {id:'amulet98',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:2}}}},
		common: {weight:1,price:240,durability:50},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {anticriticalhit:50,antijumpaway:60,parry:4,magicdefence:30,defence:50,hitpoints:72,strength:1},
		setlink: {name:'scorpion'}
	, upgrade: {
	amulet98_1: {id:'amulet98_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'amulet98',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet98:{id:'amulet98',caption:'������ ���������',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:60,antijumpaway:70,parry:5,magicdefence:40,defence:60,hitpoints:84,strength:1},
		setlink: {name:''}
	}}
	},
	amulet98_1: {id:'amulet98_1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'amulet98',clist:{anvil2_ang:{sp_mat7:{id:'sp_mat7',caption:'�������� ��������',count:1},mater262:{id:'mater262',caption:'������� ������',count:1},amulet98:{id:'amulet98',caption:'������ ���������',count:1}}},
		common: {weight:1,price:288,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:60,antijumpaway:70,parry:5,magicdefence:40,defence:60,hitpoints:84,strength:1},
		setlink: {name:''}
	},
	amulet96: {id:'amulet96',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ����� �����',
		common: {weight:1,price:240,durability:50},
		required: {level:9,endurance:40,strength:40},
		modify: {magicdefence:30,defence:20,hitpoints:300}
	},
	amulet84: {id:'amulet84',category:'necklaces',slot:'w2',width:60,height:20,caption:'������� ������',
		common: {weight:1,price:290,durability:40},
		required: {dexterity:15,intuition:15,level:9,endurance:36,strength:35},
		modify: {magicdefence:80,defence:100,hitpoints:120}
	},
	aamulet2_hs3hg2: {id:'aamulet2_hs3hg2',category:'necklaces',slot:'w2',width:60,height:20,caption:'������� ����� �������',
		common: {weight:1,price:415,durability:100},
		required: {dexterity:20,intuition:20,level:10,endurance:35,strength:50},
		modify: {anticriticalhit:125,antijumpaway:125,intellect:4,swordskill:2,clubskill:2,knifeskill:2,axeskill:2,magicdefence:30,defence:50,hitpoints:120,strength:4}
	},


/*����*/
    amulet104_3 : { id: 'amulet104_3', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ��������� [10]',binding:'bop',
        common: {weight: 1, price: 314, durability: 50},
        required: {level: 10},
        modify: {anticriticalhit:520}
    },
    amulet105_3 : { id: 'amulet105_3', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ��������� [10]',binding:'bop',
        common: {weight: 1, price: 314, durability: 50},
        required: {level: 10},
        modify: {magicdefence:260}
    },
    amulet106_3 : { id: 'amulet106_3', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ���������� [10]',binding:'bop',
        common: {weight: 1, price: 314, durability: 50},
        required: {level: 10},
		modify: {headarmor1:43,headarmor2:127,headarmorm:42,headarmord:85,bodyarmor1:43,bodyarmor2:127,bodyarmorm:42,bodyarmord:85,waistarmor1:43,waistarmor2:127,waistarmorm:42,waistarmord:85,legarmor1:43,legarmor2:127,legarmorm:42,legarmord:85}
    },
    amulet107_3 : { id: 'amulet107_3', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ��������� [10]',binding:'bop',
        common: {weight: 1, price: 314, durability: 50},
        required: {level: 10},
        modify: {defence:260}
    },

/* 9� ���*/
    amulet104_2 : { id: 'amulet104_2', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ��������� [9]',binding:'bop',
        common: {weight: 1, price: 260, durability: 50},
        required: {level: 9},
        modify: {anticriticalhit:430}
    },
    amulet105_2 : { id: 'amulet105_2', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ��������� [9]',binding:'bop',
        common: {weight: 1, price: 260, durability: 50},
        required: {level: 9},
        modify: {magicdefence:215}
    },
    amulet106_2 : { id: 'amulet106_2', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ���������� [9]',binding:'bop',
        common: {weight: 1, price: 260, durability: 50},
        required: {level: 9},
		modify: {headarmor1:36,headarmor2:105,headarmorm:35,headarmord:70,bodyarmor1:36,bodyarmor2:105,bodyarmorm:35,bodyarmord:70,waistarmor1:36,waistarmor2:105,waistarmorm:35,waistarmord:70,legarmor1:36,legarmor2:105,legarmorm:35,legarmord:70}
    },
    amulet107_2 : { id: 'amulet107_2', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ��������� [9]',binding:'bop',
        common: {weight: 1, price: 260, durability: 50},
        required: {level: 9},
        modify: {defence:215}
    },

/* 8� ��� */
    amulet104_1 : { id: 'amulet104_1', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ��������� [8]',binding:'bop',
        common: {weight: 1, price: 212, durability: 50},
        required: {level: 8},
        modify: {anticriticalhit:350}
    },
    amulet105_1 : { id: 'amulet105_1', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ��������� [8]',binding:'bop',
        common: {weight: 1, price: 212, durability: 50},
        required: {level: 8},
        modify: {magicdefence:175}
    },
    amulet106_1 : { id: 'amulet106_1', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ���������� [8]',binding:'bop',
        common: {weight: 1, price: 212, durability: 50},
        required: {level: 8},
		modify: {headarmor1:28,headarmor2:82,headarmorm:27,headarmord:55,bodyarmor1:28,bodyarmor2:82,bodyarmorm:27,bodyarmord:55,waistarmor1:28,waistarmor2:82,waistarmorm:27,waistarmord:55,legarmor1:28,legarmor2:82,legarmorm:27,legarmord:55}
    },
    amulet107_1 : { id: 'amulet107_1', category: 'necklaces',slot:'w2',width:60,height:20,caption:'���: ��������� [8]',binding:'bop',
        common: {weight: 1, price: 212, durability: 50},
        required: {level: 8},
        modify: {defence:175}
    },

/*����*/




	
	kulon208: {id:'kulon208',category:'necklaces',slot:'w2',width:60,height:20,caption:'Smashing Amulet',imp1:true,binding:'boe',
		common: {weight:1,price:200,durability:50,eprice:3.99},
		required: {level:8},
		modify: {anticriticalhit:60,antijumpaway:30,jumpaway:40,magicdefence:40,defence:50,hitpoints:45,strength:4},
		setlink: {name:'smash'}
	},
	kulon209: {id:'kulon209',category:'necklaces',slot:'w2',width:60,height:20,caption:'Desert Amulet',imp1:true,binding:'boe',
		common: {weight:1,durability:50,eprice:3.99},
		required: {level:8},
		modify: {anticriticalhit:50,antijumpaway:50,parry:5,jumpaway:50,weaponskill:1,magicdefence:35,defence:35,hitpoints:33},
		setlink: {name:'wanderer'}
	},
	amulet95: {id:'amulet95',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet of Healing',imp1:true,binding:'boe',
		common: {weight:1,price:220,durability:50,eprice:44},
		required: {level:8,endurance:35,strength:35},
		modify: {magicdefence:24,defence:20,hitpoints:270}
	},
	amulet57: {id:'amulet57',category:'necklaces',slot:'w2',width:60,height:20,caption:'Amulet for artefacts/paladins',imp1:true,
		common: {weight:1,price:230,durability:50,eprice:46},
		required: {dexterity:10,intuition:10,level:8,endurance:35,strength:40},
		modify: {anticriticalhit:85,counterstroke:5,intellect:2,magicdefence:30,defence:25,hitpoints:66,strength:6}
	},
	aamulet1: {id:'aamulet1',category:'necklaces',slot:'w2',width:60,height:20,caption:'������ ������� ������',adjustment:true,artefact:true,
		common: {durability:500},
		modify: {hitpoints:99}
	},


	
	








	
	
	weddingring: {id:'weddingring',category:'rings',slot:'w6',width:20,height:20,caption:'����������� ������',
		common: {price:0,weight:1,durability:1}
	},
	ring127: {id:'ring127',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����',description:'������� �������� ����� �� 15 <img src="http://img.combats.com/i/misc/micro/hp.gif" width="8" height="8" />',
		common: {weight:1,price:1,durability:50,intermediatecast:'yes'},
		required: {level:6},
		magic: {name:'invoke_create_lesserbloodstone',caption:'�������� ����',description:'1 ��. �� ���'}
	},
	ring126: {id:'ring126',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',description:'� ��������� ��� ������� ������� �������� ����� �� 5 <img src="http://img.combats.com/i/misc/micro/hp.gif" width="8" height="8" />',requireditems:{baltar:{exchanger:'baltar', items: {mater32:{id:'mater32',caption:'�������� �����',count:30},ring127:{id:'ring127',caption:'������ �����',count:1}}}},
		common: {weight:1,price:1,durability:50,intermediatecast:'yes'},
		required: {level:7},
		magic: {name:'invoke_create_bloodstone',caption:'��������� �����',description:'6 ��. � �����'}
	, upgrade: {
	ring126_warrior: {id:'ring126_warrior',caption:'�������� ������ ������',clist:{fps_dem:{ring126:{id:'ring126',caption:'������ ������',count:1},mater_shop1:{id:'mater_shop1',caption:'�������� ����',count:1}}},
		modify: {power:10,hitpoints:36}
	},
	ring126_wizard: {id:'ring126_wizard',caption:'����������� ������ ������',clist:{fps_dem:{ring126:{id:'ring126',caption:'������ ������',count:1},mater_shop2:{id:'mater_shop2',caption:'�������� ������',count:1}}},
		modify: {magicpower:10,mana:36}
	}}

	},
	ring82: {id:'ring82',category:'rings',slot:'w6',width:20,height:20,caption:'����� ������ ����������',
		common: {weight:1,price:14,durability:30},
		required: {level:3,endurance:12,strength:12},
		modify: {anticriticalhit:10,antijumpaway:5,hitpoints:6}
	},
	ring83: {id:'ring83',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������',clist:{_:{mater2:{id:'mater2',caption:'������',count:5},mater11:{id:'mater11',caption:'���� ������ �����',count:2},mater14:{id:'mater14',caption:'������� �����',count:1},mater15:{id:'mater15',caption:'������� �������',count:2}}},
		common: {weight:1,price:16,durability:40},
		required: {level:2,endurance:10,strength:10},
		modify: {intuition:2}
	},
	ring85: {id:'ring85',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������',clist:{_:{mater3:{id:'mater3',caption:'�������',count:5},mater10:{id:'mater10',caption:'���� �������� ������',count:2},mater17:{id:'mater17',caption:'���� �������� ������',count:1},mater18:{id:'mater18',caption:'������������ ������',count:1},mater19:{id:'mater19',caption:'�������� ������',count:1}}},
		common: {weight:1,price:16,durability:40},
		required: {level:2,strength:10},
		modify: {dexterity:2}
	},
	ring100: {id:'ring100',category:'rings',slot:'w6',width:20,height:20,caption:'����� ������ �����������',
		common: {weight:1,price:16,durability:20},
		required: {dexterity:12,level:2,endurance:6,strength:6},
		modify: {anticriticalhit:5,parry:2}
	},
	ring63: {id:'ring63',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',
		common: {weight:1,price:17,durability:20},
		required: {level:2,endurance:10,strength:10},
		modify: {hitpoints:3,strength:2}
	},
	ring4: {id:'ring4',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������',old:true,
		common: {price:18,weight:1,durability:40},
		required: {strength:10,level:2},
		modify: {dexterity:2}
	},
	ring6: {id:'ring6',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������',old:true,
		common: {price:18,weight:1,durability:40},
		required: {strength:10,endurance:10,level:2},
		modify: {intuition:2}
	},
	ring3: {id:'ring3',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����',old:true,
		common: {price:20,weight:1,durability:40},
		required: {endurance:10,level:2},
		modify: {strength:3}
	},
	ring106: {id:'ring106',category:'rings',slot:'w6',width:20,height:20,caption:'��������� ������',clist:{_:{mater4:{id:'mater4',caption:'�������� �������',count:3},mater7:{id:'mater7',caption:'������ ��������� ����',count:4},mater8:{id:'mater8',caption:'����������',count:4},mater13:{id:'mater13',caption:'�������� ������ �������',count:3}}},
		common: {weight:1,price:20,durability:20},
		required: {level:3,endurance:12,strength:12},
		modify: {hitpoints:33}
	},
	ring64: {id:'ring64',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',
		common: {weight:1,price:20,durability:20},
		required: {level:3,endurance:15,strength:15},
		modify: {anticriticalhit:8,antijumpaway:8,criticalhit:10,jumpaway:10}
	},
	ring104: {id:'ring104',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����',clist:{_:{mater1:{id:'mater1',caption:'����� ��������� �����',count:4},mater5:{id:'mater5',caption:'������',count:4},mater9:{id:'mater9',caption:'������ �������� ������',count:3},mater16:{id:'mater16',caption:'��������� ������',count:2},mater19:{id:'mater19',caption:'�������� ������',count:1}}},
		common: {weight:1,price:23,durability:40},
		required: {level:3,endurance:10},
		modify: {strength:3}
	},
	ring1: {id:'ring1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������������',old:true,
		common: {price:30,weight:1,durability:50},
		required: {strength:10,endurance:10,level:2},
		modify: {hitpoints:6,anticriticalhit:5,jumpaway:10,dexterity:1,intuition:1}
	},
	ring61: {id:'ring61',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������� ������',description:'���������� ������������ ���������',
		common: {weight:1,price:42,durability:30},
		required: {level:4,endurance:15},
		modify: {dexterity:-1,intuition:-1,hitpoints:12,strength:5,headarmor1:3,headarmor2:3,headarmorm:3,headarmord:3,bodyarmor1:3,bodyarmor2:3,bodyarmorm:3,bodyarmord:3,waistarmor1:3,waistarmor2:3,waistarmorm:3,waistarmord:3,legarmor1:3,legarmor2:3,legarmorm:3,legarmord:3}
	},
	ring54: {id:'ring54',category:'rings',slot:'w6',width:20,height:20,caption:'�������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:1,price:30,durability:30},
		required: {level:4,endurance:15,strength:15},
		modify: {sabredefence:25,hitpoints:21}
	, upgrade: {
	ring54_olditem: {id:'ring54_olditem',old:true,
		common: {weight:1,price:30,durability:30},
		required: {level:4,endurance:15,strength:15},
		modify: {sabredefence:50,hitpoints:18}
	}}

	},
	ring108: {id:'ring108',category:'rings',slot:'w6',width:20,height:20,caption:'�������� ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:1,price:30,durability:30},
		required: {level:4,endurance:15,strength:15},
		modify: {anticriticalhit:5,shieldblock:2,jumpaway:-5,hitpoints:33}
	},
	ring81: {id:'ring81',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:1,price:30,durability:30},
		required: {level:4,endurance:20,strength:20},
		modify: {headarmor1:1,headarmor2:15,headarmorm:1,headarmord:15,bodyarmor1:1,bodyarmor2:15,bodyarmorm:1,bodyarmord:15,waistarmor1:1,waistarmor2:15,waistarmorm:1,waistarmord:15,legarmor1:1,legarmor2:15,legarmorm:1,legarmord:15}
	},
	ring123: {id:'ring123',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:6}}}},
		common: {weight:1,price:30,durability:50},
		required: {intellect:20,level:4},
		modify: {intellect:1,mana:35}
	},
	ring55: {id:'ring55',category:'rings',slot:'w6',width:20,height:20,caption:'��������� ������ �����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:7}}}},
		common: {weight:1,price:31,durability:30},
		required: {dexterity:10,intuition:10,level:4,endurance:10,strength:10},
		modify: {anticriticalhit:10,antijumpaway:5,jumpaway:15,dexterity:1,intuition:1}
	},
	ring101: {id:'ring101',category:'rings',slot:'w6',width:20,height:20,caption:'����� ������ ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:7}}}},
		common: {weight:1,price:31,durability:30},
		required: {dexterity:17,level:4,endurance:10,strength:10},
		modify: {anticriticalhit:10,parry:3,counterstroke:2}
	},
	ring69: {id:'ring69',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������',
		common: {weight:1,price:32,durability:30},
		required: {level:4,endurance:10,strength:10},
		modify: {anticriticalhit:5,antijumpaway:5,criticalhit:5,jumpaway:5,intellect:2,headarmor1:1,headarmor2:3,headarmorm:1,headarmord:3,bodyarmor1:1,bodyarmor2:3,bodyarmorm:1,bodyarmord:3,waistarmor1:1,waistarmor2:3,waistarmorm:1,waistarmord:3,legarmor1:1,legarmor2:3,legarmorm:1,legarmord:3}
	},
	ring7: {id:'ring7',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����',old:true,
		common: {price:32,weight:1,durability:50},
		required: {strength:15,endurance:15,level:4},
		modify: {criticalhit:5,anticriticalhit:5,jumpaway:5,antijumpaway:5,intellect:2,headarmor:3,bodyarmor:3,waistarmor:3,legarmor:3}
	},
	ring60: {id:'ring60',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:7}}}},
		common: {weight:1,price:33,durability:30},
		required: {intuition:12,level:4,endurance:10,strength:10},
		modify: {anticriticalhit:30,watermagicdefence:20}
	},
	ring130_2: {id:'ring130_2',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� [4]',
		common: {weight:1,price:46,durability:20},
		required: {dexterity:5,intuition:5,level:4,endurance:15,strength:15},
		modify: {criticalpower:1,anticriticalhit:5,antijumpaway:5,criticalhit:5,jumpaway:5,dexterity:1,intuition:1,defence:5,hitpoints:6,strength:1}
	},
	ring131_2: {id:'ring131_2',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� [4]',
		common: {weight:1,price:50,durability:20},
		required: {intellect:20,level:4},
		modify: {anticriticalhit:5,jumpaway:5,intellect:3,hitpoints:18,mana:20}
	},
	ring67: {id:'ring67',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:7}}}},
		common: {weight:1,price:38,durability:50},
		required: {level:5,endurance:15,strength:15},
		modify: {dexterity:5}
	},
	ring70: {id:'ring70',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:7}}}},
		common: {weight:1,price:38,durability:50},
		required: {level:5,endurance:15,strength:15},
		modify: {intuition:5}
	},
	ring58: {id:'ring58',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� �����',
		common: {weight:1,price:39,durability:50},
		required: {level:5,endurance:20,strength:20},
		modify: {intuition:1,firemagicdefence:66}
	},
	ring50: {id:'ring50',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:8}}}},
		common: {weight:1,price:40,durability:50},
		required: {intuition:25,level:5,endurance:15},
		modify: {intellect:5,hitpoints:3}
	},
	ring77: {id:'ring77',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������� �������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:8}}}},
		common: {weight:1,price:40,durability:30},
		required: {intuition:20,level:5,endurance:15,strength:15},
		modify: {criticalpower:6,criticalhit:25,headarmor1:1,headarmor2:3,headarmorm:1,headarmord:3,bodyarmor1:1,bodyarmor2:3,bodyarmorm:1,bodyarmord:3,waistarmor1:1,waistarmor2:3,waistarmorm:1,waistarmord:3,legarmor1:1,legarmor2:3,legarmorm:1,legarmord:3}
	},
	ring78: {id:'ring78',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:8}}}},
		common: {weight:1,price:40,durability:30},
		required: {level:5,endurance:15,strength:15},
		modify: {anticriticalhit:15,parry:5}
	},
	ring124: {id:'ring124',category:'rings',slot:'w6',width:20,height:20,caption:'������� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:8}}}},
		common: {weight:1,price:40,durability:50},
		required: {intellect:25,level:5},
		modify: {magicpower:1,intellect:1,mana:40}
	},
	ring62: {id:'ring62',category:'rings',slot:'w6',width:20,height:20,caption:'������ ���������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:8}}}},
		common: {weight:1,price:41,durability:30},
		required: {level:5,endurance:20,strength:20},
		modify: {anticriticalhit:5,shieldblock:7,hitpoints:12}
	},
	ring59: {id:'ring59',category:'rings',slot:'w6',width:20,height:20,caption:'������ ���� ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:8}}}},
		common: {weight:1,price:41,durability:40},
		required: {dexterity:10,intuition:10,level:5,endurance:10,strength:10},
		modify: {dexterity:1,intuition:1,intellect:1,hitpoints:18,strength:1}
	},
	ring66: {id:'ring66',category:'rings',slot:'w6',width:20,height:20,caption:'������� ������',magic1:'������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:1,price:45,durability:20},
		required: {level:4,airmagicskill:1,endurance:10,strength:10},
		modify: {jumpaway:25}
	},
	ring91: {id:'ring91',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� �������',magic1:'����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:1,price:45,durability:20},
		required: {level:4,endurance:10,strength:15},
		modify: {jumpaway:25}
	},
	ring73: {id:'ring73',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',magic1:'�����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:9}}}},
		common: {weight:1,price:45,durability:20},
		required: {level:4,watermagicskill:1,endurance:10,strength:10},
		modify: {anticriticalhit:25}
	},
	ring52: {id:'ring52',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:9}}}},
		common: {weight:1,price:49,durability:50},
		required: {intuition:10,level:6,endurance:15,strength:15},
		modify: {anticriticalhit:-5,antijumpaway:-5,criticalhit:-5,jumpaway:-5,intuition:4,intellect:4}
	},
	ring68: {id:'ring68',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:10}}}},
		common: {weight:1,price:50,durability:30},
		required: {dexterity:15,level:6,endurance:10,strength:15},
		modify: {dexterity:2,hitpoints:9,strength:4}
	},
	ring65: {id:'ring65',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:10}}}},
		common: {weight:1,price:50,durability:30},
		required: {level:6,endurance:20,strength:20},
		modify: {hitpoints:9,strength:6}
	},
	ring71: {id:'ring71',category:'rings',slot:'w6',width:20,height:20,caption:'������� ������ ��������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:10}}}},
		common: {weight:1,price:50,durability:30},
		required: {level:6,endurance:20,strength:20},
		modify: {defence:10,hitpoints:45,strength:2}
	, upgrade: {
	ring71_1: {id:'ring71_1',caption:'������� ������ �������� (��)',
		modify: {hitpoints:60}
	}}

	},
	ring86: {id:'ring86',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:10}}}},
		common: {weight:1,price:51,durability:30},
		required: {level:6,endurance:25,strength:25},
		modify: {anticriticalhit:20,antijumpaway:20,criticalhit:20,jumpaway:20,headarmor1:1,headarmor2:3,headarmorm:1,headarmord:3,bodyarmor1:1,bodyarmor2:3,bodyarmorm:1,bodyarmord:3,waistarmor1:1,waistarmor2:3,waistarmorm:1,waistarmord:3,legarmor1:1,legarmor2:3,legarmorm:1,legarmord:3}
	},
	ring105: {id:'ring105',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������',
		common: {weight:1,price:60,durability:30},
		required: {level:7,endurance:35,strength:35},
		modify: {anticriticalhit:10,defence:5,headarmor1:1,headarmor2:24,headarmorm:1,headarmord:24,bodyarmor1:1,bodyarmor2:24,bodyarmorm:1,bodyarmord:24,waistarmor1:1,waistarmor2:24,waistarmorm:1,waistarmord:24,legarmor1:1,legarmor2:24,legarmorm:1,legarmord:24}
	},
	ring87: {id:'ring87',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����������',requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:10}}}},
		common: {weight:1,price:52,durability:50},
		required: {level:6,endurance:25,strength:25},
		modify: {parry:2,shieldblock:1,magicdefence:2,defence:5}
	},
	ring2: {id:'ring2',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����',old:true,
		common: {price:52,weight:1,durability:30},
		required: {strength:25,endurance:25,level:5},
		modify: {criticalhit:15,anticriticalhit:15,jumpaway:15,antijumpaway:15,intellect:1,headarmor:3,bodyarmor:3,waistarmor:3,legarmor:3}
	},
	ring97: {id:'ring97',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����������',
		common: {weight:1,price:70,durability:50},
		required: {intellect:10,level:7,endurance:15,strength:15},
		modify: {magicdefence:50,hitpoints:12}
	, upgrade: {
	ring97_olditem: {id:'ring97_olditem',old:true,
		common: {weight:1,price:56,durability:50},
		required: {intellect:10,level:7,endurance:15,strength:15},
		modify: {firemagicdefence:30,watermagicdefence:30,airmagicdefence:30,earthmagicdefence:30,hitpoints:0}
	}}

	},
	ring79: {id:'ring79',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',
		common: {weight:1,price:60,durability:30},
		required: {level:7,endurance:27,strength:30},
		modify: {anticriticalhit:15,antijumpaway:15,intellect:1,defence:15,watermagicdefence:10,airmagicdefence:10,earthmagicdefence:10},
		setlink: {name:'forest',count:3}
	, upgrade: {
	ring79_olditem: {id:'ring79_olditem',old:true,
		common: {price:49,weight:1,durability:30},
		required: {level:6,endurance:20,strength:20},
		modify: {anticriticalhit:0,antijumpaway:0,defence:0,watermagicdefence:40,airmagicdefence:10,earthmagicdefence:40,intellect:1}
	}}

	},
	ring76: {id:'ring76',category:'rings',slot:'w6',width:20,height:20,caption:'������� ������ ������',
		common: {weight:1,price:60,durability:30},
		required: {dexterity:15,intuition:15,level:7,endurance:25,strength:25},
		modify: {anticriticalhit:25,antijumpaway:25,firemagicdefence:10,hitpoints:33}
	},
	ring51: {id:'ring51',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����',
		common: {weight:1,price:60,durability:50},
		required: {dexterity:35,level:7,endurance:15,strength:15},
		modify: {anticriticalhit:25,jumpaway:40,counterstroke:5,hitpoints:18}
	},
	ring95: {id:'ring95',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������',
		common: {weight:1,price:60,durability:30},
		required: {dexterity:15,intuition:15,level:7,endurance:27,strength:27},
		modify: {anticriticalhit:25,crushdefence:75}
	},
	ring205: {id:'ring205',category:'rings',slot:'w6',width:20,height:20,caption:'����� ������',
		common: {weight:1,price:60,durability:40},
		required: {dexterity:15,intuition:30,level:7,endurance:20,strength:20},
		modify: {criticalpower:8,antijumpaway:10,criticalhit:35,hitpoints:12}
	},
	ring99: {id:'ring99',category:'rings',slot:'w6',width:20,height:20,caption:'����� ������ �������',clist:{_:{mater6:{id:'mater6',caption:'�������� ������',count:5},mater15:{id:'mater15',caption:'������� �������',count:2},mater26:{id:'mater26',caption:'�������� ������������',count:2},mater22:{id:'mater22',caption:'�������� �������',count:1}}},
		common: {weight:1,price:61,durability:30},
		required: {dexterity:20,level:7,endurance:20,strength:20},
		modify: {parry:5,counterstroke:1,defence:25}
	},
	ring23f: {id:'ring23f',category:'rings',slot:'w6',width:20,height:20,caption:'����������� ������',
		common: {weight:1,price:62,durability:50},
		required: {level:4},
		modify: {hitpoints:100}
	},
	ring5: {id:'ring5',category:'rings',slot:'w6',width:20,height:20,caption:'������ ���',old:true,
		common: {price:71,weight:1,durability:10},
		required: {intuition:25,endurance:20,level:5},
		modify: {hitpoints:33,intellect:5}
	},
	ring93: {id:'ring93',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',
		common: {weight:1,price:78,durability:50},
		required: {dexterity:35,intuition:30,level:8},
		modify: {anticriticalhit:20,parry:2,jumpaway:45,counterstroke:5,dexterity:2,hitpoints:6},
		setlink: {name:'flash',count:3}
	, upgrade: {
	ring93_1: {id:'ring93_1',caption:'������ ������ (��)',
		modify: {anticriticalhit:20,parry:3,jumpaway:55,counterstroke:5,dexterity:2,hitpoints:6}
	},
	ring93_2: {id:'ring93_2',caption:'������ ������ (��)',
		required: {dexterity:25,intuition:15}
	}}

	},
	ring90: {id:'ring90',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������',
		common: {weight:1,price:79,durability:50},
		required: {dexterity:15,intuition:35,level:8,endurance:20,strength:20},
		modify: {criticalpower:10,antijumpaway:15,criticalhit:45,hitpoints:18},
		setlink: {name:'sunset',count:3}
	},
	ring88: {id:'ring88',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� ����',
		common: {weight:1,price:80,durability:50},
		required: {level:8,endurance:25,strength:25},
		modify: {anticriticalhit:35,antijumpaway:25,parry:2,firemagicdefence:10,defence:15,watermagicdefence:-10,hitpoints:18},
		setlink: {name:'firedown',count:3}
	},
	ring115: {id:'ring115',category:'rings',slot:'w6',width:20,height:20,caption:'������ ���������',
		common: {weight:1,price:80,durability:30},
		required: {intellect:10,level:8,endurance:25,strength:25},
		modify: {intellect:1,firemagicdefence:30,watermagicdefence:30,airmagicdefence:30,earthmagicdefence:30},
		
	},
	ring80: {id:'ring80',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� �����',
		common: {weight:1,price:82,durability:60},
		required: {level:8,endurance:40,strength:40},
		modify: {anticriticalhit:20,antijumpaway:10,defence:15,hitpoints:33,headarmor1:1,headarmor2:12,headarmorm:1,headarmord:12,bodyarmor1:1,bodyarmor2:12,bodyarmorm:1,bodyarmord:12,waistarmor1:1,waistarmor2:12,waistarmorm:1,waistarmord:12,legarmor1:1,legarmor2:12,legarmorm:1,legarmord:12},
		setlink: {name:'siege',count:3}
	, upgrade: {
	ring80_olditem: {id:'ring80_olditem',caption:'������ ��������� ��������',old:true,
		common: {price:79,weight:1,durability:60},
		required: {level:8,endurance:40,strength:40},
		modify: {anticriticalhit:15,antijumpaway:5,defence:0,hitpoints:45,earthmagicdefence:30,headarmor1:1,headarmor2:12,headarmorm:1,headarmord:12,bodyarmor1:1,bodyarmor2:12,bodyarmorm:1,bodyarmord:12,waistarmor1:1,waistarmor2:12,waistarmorm:1,waistarmord:12,legarmor1:1,legarmor2:12,legarmorm:1,legarmord:12}
	},
	ring80_mf: {id:'ring80_mf',caption:'������ �������� ����� (��)',
		modify: {strength:1}
	},
	ring80_mf2: {id:'ring80_mf2',caption:'������ �������� ����� (��)',
		required: {endurance:30,strength:30},
		modify: {hitpoints:66}
	},
	ring80_mf3: {id:'ring80_mf3',caption:'������ �������� ����� (��) ���� +5',
		modify: {strength:5}
	}}

	},
	ring57: {id:'ring57',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����',
		common: {weight:1,price:85,durability:50},
		required: {level:7,endurance:15,strength:15,wisdom:20},
		modify: {hitpoints:12,mana:125}
	},
	ring96: {id:'ring96',category:'rings',slot:'w6',width:20,height:20,caption:'������ ���������� ������',
		common: {weight:1,price:86,durability:50},
		required: {intellect:25,level:7,watermagicskill:5,endurance:15,strength:15,wisdom:30},
		modify: {intellect:3,watermagicskill:1,defence:10,mana:65}
	, upgrade: {
	ring96_olditem: {id:'ring96_olditem',old:true,
		required: {intellect:0,wisdom:20},
		modify: {intellect:5,defence:0}
	}}

	},
	ring92: {id:'ring92',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� �������',
		common: {weight:1,price:86,durability:50},
		required: {intellect:25,level:7,airmagicskill:5,endurance:15,strength:15,wisdom:30},
		modify: {airmagicpower:3,intellect:3,airmagicskill:1,hitpoints:12,mana:60}
	, upgrade: {
	ring92_olditem: {id:'ring92_olditem',old:true,
		required: {intellect:10,wisdom:10},
		modify: {airmagicpower:0,intellect:5,hitpoints:0,mana:5,intuition:5}
	}}

	},
	ring107: {id:'ring107',category:'rings',slot:'w6',width:20,height:20,caption:'������ ���������� ����',
		common: {weight:1,price:87,durability:50},
		required: {intellect:25,level:7,firemagicskill:5,endurance:15,strength:15,wisdom:30},
		modify: {firemagicpower:7,intellect:4,firemagicskill:1,mana:45}
	, upgrade: {
	ring107_olditem: {id:'ring107_olditem',old:true,
		required: {intellect:10,wisdom:10},
		modify: {firemagicpower:0,mana:30,intuition:4}
	}}

	},
	ring75: {id:'ring75',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������ ������',
		common: {weight:1,price:88,durability:50},
		required: {intellect:25,level:7,earthmagicskill:5,endurance:15,strength:15,wisdom:30},
		modify: {earthmagicskill:2,hitpoints:33,mana:80}
	, upgrade: {
	ring75_olditem: {id:'ring75_olditem',old:true,
		required: {intellect:0,wisdom:10}
	}}

	},
	ring118: {id:'ring118',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����',description:'���� ������� - ���� ������',
		common: {weight:1,price:90,durability:40},
		required: {dexterity:15,intuition:15,level:7,endurance:25,strength:20},
		modify: {anticriticalhit:30,antijumpaway:30,hitpoints:33},
		magic: {name:'nature_burn',caption:'���� ������',description:'1 ��. �� ���'}
	},
	ring125: {id:'ring125',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������',
		common: {weight:1,price:90,durability:50},
		required: {intellect:25,level:7,endurance:15,strength:15,wisdom:30},
		modify: {magicpower:3,intellect:2,magicskill:1,hitpoints:12,mana:50}
	},
	ring130_1: {id:'ring130_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� [7]',
		common: {weight:1,price:103,durability:20},
		required: {dexterity:10,intuition:10,level:7,endurance:25,strength:25},
		modify: {criticalpower:3,anticriticalhit:10,antijumpaway:10,criticalhit:10,counterstroke:1,jumpaway:10,dexterity:2,intuition:2,magicdefence:5,defence:10,hitpoints:12,strength:2}
	},
	ring131_1: {id:'ring131_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� [7]',
		common: {weight:1,price:101,durability:20},
		required: {intellect:30,wisdom:30,level:7},
		modify: {anticriticalhit:15,magicdefencereduce:2,intellect:6,mana:20}
	},
	ring110: {id:'ring110',category:'rings',slot:'w6',width:20,height:20,caption:'������ �����',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1}}}},
		common: {weight:1,price:100,durability:40},
		required: {dexterity:50,intuition:15,level:9,endurance:30,strength:30},
		modify: {anticriticalhit:20,parry:3,jumpaway:45,counterstroke:5,defence:15,hitpoints:18,strength:1},
		setlink: {name:'spider',count:3}
	, upgrade: {
	ring110_1: {id:'ring110_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����� [10]',binding:'bop',baseitem:'ring110',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring110:{id:'ring110',caption:'������ �����',count:1}},anvil1_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater12:{id:'mater12',caption:'�����',count:1},mater17:{id:'mater17',caption:'���� �������� ������',count:3},mater25:{id:'mater25',caption:'�������� ������ �������',count:1},ring110:{id:'ring110',caption:'������ �����',count:1}}},
		common: {weight:1,price:120,durability:40},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:20,parry:5,jumpaway:45,counterstroke:5,defence:15,hitpoints:30,strength:1},
		setlink: {name:'',count:3},setlinks:['','spider']
	}}

	},
	ring110_1: {id:'ring110_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����� [10]',binding:'bop',baseitem:'ring110',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring110:{id:'ring110',caption:'������ �����',count:1}},anvil1_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater12:{id:'mater12',caption:'�����',count:1},mater17:{id:'mater17',caption:'���� �������� ������',count:3},mater25:{id:'mater25',caption:'�������� ������ �������',count:1},ring110:{id:'ring110',caption:'������ �����',count:1}}},
		common: {weight:1,price:120,durability:40},
		required: {dexterity:60,intuition:15,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:20,parry:5,jumpaway:45,counterstroke:5,defence:15,hitpoints:30,strength:1},
		setlink: {name:'',count:3},setlinks:['','spider']
	},
	ring116: {id:'ring116',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� ����',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1}}}},
		common: {weight:1,price:100,durability:50},
		required: {dexterity:15,intuition:50,level:9,endurance:30,strength:30},
		modify: {criticalpower:10,antijumpaway:35,criticalhit:45,hitpoints:33},
		setlink: {name:'bloodmoon',count:3}
	, upgrade: {
	ring116_1: {id:'ring116_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� ���� [10]',binding:'bop',baseitem:'ring116',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring116:{id:'ring116',caption:'������ �������� ����',count:1}},anvil1_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater4:{id:'mater4',caption:'�������� �������',count:1},mater16:{id:'mater16',caption:'��������� ������',count:3},mater27:{id:'mater27',caption:'������ ���������� ������',count:1},ring116:{id:'ring116',caption:'������ �������� ����',count:1}}},
		common: {weight:1,price:120,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {criticalpower:13,antijumpaway:35,criticalhit:45,hitpoints:50},
		setlink: {name:'',count:3},setlinks:['','bloodmoon']
	}}

	},
	ring116_1: {id:'ring116_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� ���� [10]',binding:'bop',baseitem:'ring116',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring116:{id:'ring116',caption:'������ �������� ����',count:1}},anvil1_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater4:{id:'mater4',caption:'�������� �������',count:1},mater16:{id:'mater16',caption:'��������� ������',count:3},mater27:{id:'mater27',caption:'������ ���������� ������',count:1},ring116:{id:'ring116',caption:'������ �������� ����',count:1}}},
		common: {weight:1,price:120,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:35,strength:35,angelsreputation:10000},
		modify: {criticalpower:13,antijumpaway:35,criticalhit:45,hitpoints:50},
		setlink: {name:'',count:3},setlinks:['','bloodmoon']
	},
	ring117: {id:'ring117',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������� ������',requireditems:{shop:{exchanger:'shop', items: {mater25:{id:'mater25',caption:'�������� ������ �������',count:1}}}},
		common: {weight:1,price:100,durability:60},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:45},
		modify: {anticriticalhit:20,antijumpaway:10,defence:25,hitpoints:33,headarmor1:1,headarmor2:15,headarmorm:1,headarmord:15,bodyarmor1:1,bodyarmor2:15,bodyarmorm:1,bodyarmord:15,waistarmor1:1,waistarmor2:15,waistarmorm:1,waistarmord:15,legarmor1:1,legarmor2:15,legarmorm:1,legarmord:15},
		setlink: {name:'losttime',count:3}
	, upgrade: {
	ring117_1: {id:'ring117_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������� ������ [10]',binding:'bop',baseitem:'ring117',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring117:{id:'ring117',caption:'������ ������� ������',count:1}},anvil1_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater4:{id:'mater4',caption:'�������� �������',count:1},mater16:{id:'mater16',caption:'��������� ������',count:3},mater27:{id:'mater27',caption:'������ ���������� ������',count:1},ring117:{id:'ring117',caption:'������ ������� ������',count:1}}},
		common: {weight:1,price:120,durability:60},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:20,antijumpaway:10,defence:25,hitpoints:66,headarmor1:1,headarmor2:15,headarmorm:1,headarmord:15,bodyarmor1:1,bodyarmor2:15,bodyarmorm:1,bodyarmord:15,waistarmor1:1,waistarmor2:15,waistarmorm:1,waistarmord:15,legarmor1:1,legarmor2:15,legarmorm:1,legarmord:15},
		setlink: {name:'',count:3},setlinks:['','losttime']
	}}

	},
	ring117_1: {id:'ring117_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������� ������ [10]',binding:'bop',baseitem:'ring117',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring117:{id:'ring117',caption:'������ ������� ������',count:1}},anvil1_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater4:{id:'mater4',caption:'�������� �������',count:1},mater16:{id:'mater16',caption:'��������� ������',count:3},mater27:{id:'mater27',caption:'������ ���������� ������',count:1},ring117:{id:'ring117',caption:'������ ������� ������',count:1}}},
		common: {weight:1,price:120,durability:60},
		required: {dexterity:15,intuition:15,level:10,endurance:65,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:20,antijumpaway:10,defence:25,hitpoints:66,headarmor1:1,headarmor2:15,headarmorm:1,headarmord:15,bodyarmor1:1,bodyarmor2:15,bodyarmorm:1,bodyarmord:15,waistarmor1:1,waistarmor2:15,waistarmorm:1,waistarmord:15,legarmor1:1,legarmor2:15,legarmorm:1,legarmord:15},
		setlink: {name:'',count:3},setlinks:['','losttime']
	},
	ring119_du2: {id:'ring119_du2',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� ������',requireditems:{shop:{exchanger:'shop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:1}}}},
		common: {weight:1,price:100,durability:50},
		required: {dexterity:30,intuition:30,level:9,endurance:35,strength:35},
		modify: {anticriticalhit:40,antijumpaway:25,parry:3,hitpoints:33,strength:3},
		setlink: {name:'morningsun',count:3}
	, upgrade: {
	ring119_du2_1: {id:'ring119_du2_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� ������ [10]',binding:'bop',baseitem:'ring119_du2',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring119_du2:{id:'ring119_du2',caption:'������ ��������� ������',count:1}}},
		common: {weight:1,price:120,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:55,antijumpaway:35,parry:3,hitpoints:40,strength:3},
		setlink: {name:'',count:3}
	}}

	},
	ring119_du2_1: {id:'ring119_du2_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� ������ [10]',binding:'bop',baseitem:'ring119_du2',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring119_du2:{id:'ring119_du2',caption:'������ ��������� ������',count:1}}},
		common: {weight:1,price:120,durability:50},
		required: {dexterity:30,intuition:30,level:10,endurance:45,strength:45,angelsreputation:10000},
		modify: {anticriticalhit:55,antijumpaway:35,parry:3,hitpoints:40,strength:3},
		setlink: {name:'',count:3}
	},
	ring120_si8: {id:'ring120_si8',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� �������',magic1:'�������� ������',
		common: {weight:1,price:100,durability:50},
		required: {level:9,firemagicskill:3,endurance:25,strength:25},
		modify: {jumpaway:50}
	},
	ring121_si8: {id:'ring121_si8',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� �����',magic1:'������������',
		common: {weight:1,price:100,durability:50},
		required: {level:9,watermagicskill:3,endurance:25,strength:25},
		modify: {anticriticalhit:25,antijumpaway:25}
	},
	ring128: {id:'ring128',category:'rings',slot:'w6',width:20,height:20,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater29:{id:'mater29',caption:'�������� �����',count:1}}}},
		common: {weight:1,price:100,durability:50},
		required: {dexterity:50,intuition:40,level:9,endurance:30,strength:25},
		modify: {anticriticalhit:10,criticalhit:75,jumpaway:35,dexterity:2,hitpoints:18,strength:1},
		setlink: {name:'misdeed',count:3}
	, upgrade: {
	ring128_1: {id:'ring128_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'ring128',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring128:{id:'ring128',caption:'������ ���������',count:1}}},
		common: {weight:1,price:120,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,angelsreputation:10000},
		modify: {anticriticalhit:15,criticalhit:85,jumpaway:45,dexterity:2,hitpoints:28,strength:1},
		setlink: {name:'',count:3}
	}}

	},
	ring128_1: {id:'ring128_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'ring128',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring128:{id:'ring128',caption:'������ ���������',count:1}}},
		common: {weight:1,price:120,durability:50},
		required: {dexterity:60,intuition:45,level:10,endurance:35,strength:25,angelsreputation:10000},
		modify: {anticriticalhit:15,criticalhit:85,jumpaway:45,dexterity:2,hitpoints:28,strength:1},
		setlink: {name:'',count:3}
	},
	ring129: {id:'ring129',category:'rings',slot:'w6',width:20,height:20,caption:'������ ���������',requireditems:{shop:{exchanger:'shop', items: {mater30:{id:'mater30',caption:'����� ���',count:1}}}},
		common: {weight:1,price:100,durability:50},
		required: {dexterity:15,intuition:45,level:9,endurance:45,strength:35},
		modify: {anticriticalhit:10,antijumpaway:75,criticalhit:50,parry:1,hitpoints:18},
		setlink: {name:'scorpion',count:3}
	, upgrade: {
	ring129_1: {id:'ring129_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'ring129',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring129:{id:'ring129',caption:'������ ���������',count:1}}},
		common: {weight:1,price:120,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:15,antijumpaway:80,criticalhit:60,parry:1,hitpoints:31},
		setlink: {name:'',count:3}
	}}

	},
	ring129_1: {id:'ring129_1',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� [10]',binding:'bop',baseitem:'ring129',clist:{anvil2_ang:{sp_mat3:{id:'sp_mat3',caption:'�������� ������',count:1},mater261:{id:'mater261',caption:'������ �����',count:1},ring129:{id:'ring129',caption:'������ ���������',count:1}}},
		common: {weight:1,price:120,durability:50},
		required: {dexterity:15,intuition:60,level:10,endurance:50,strength:35,angelsreputation:10000},
		modify: {anticriticalhit:15,antijumpaway:80,criticalhit:60,parry:1,hitpoints:31},
		setlink: {name:'',count:3}
	},
	ring135: {id:'ring135',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� ����',binding:'bop',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1}}}},
		common: {weight:1,price:100,durability:50},
		required: {dexterity:15,intuition:15,level:9,endurance:50,strength:50},
		modify: {anticriticalhit:40,antijumpaway:40,strength:7}
	},
	ring136: {id:'ring136',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������ �������',
		common: {weight:1,price:120,durability:50},
		required: {level:8,endurance:15,strength:10},
		modify: {stats:7,magicdefence:30,hitpoints:50}
	},
	ring84: {id:'ring84',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������ ����',
		common: {weight:1,price:104,durability:50},
		required: {level:8,endurance:10,strength:10,wisdom:15},
		modify: {intellect:6,greymagicskill:1,hitpoints:33,mana:50}
	},
	ring109: {id:'ring109',category:'rings',slot:'w6',width:20,height:20,caption:'�������� ������',
		common: {weight:1,price:120,durability:50},
		required: {intellect:40,level:8,firemagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {intellect:6,firemagicskill:2,magicdefence:10,mana:70},
		setlink: {name:'fire',count:3}
	, upgrade: {
	ring109_olditem: {id:'ring109_olditem',old:true,
		common: {weight:1,price:120,durability:50},
		required: {intellect:40,level:8,firemagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {intuition:5,intellect:5,firemagicskill:2,magicdefence:0,mana:50}
	}}

	},
	ring111: {id:'ring111',category:'rings',slot:'w6',width:20,height:20,caption:'������ ���������� ����',
		common: {weight:1,price:120,durability:50},
		required: {intellect:40,level:8,airmagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {intellect:7,airmagicskill:2,mana:60,manaconsumption:1},
		setlink: {name:'twilightstorm',count:3}
	},
	ring113: {id:'ring113',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� ��������',
		common: {weight:1,price:120,durability:50},
		required: {intellect:40,level:8,watermagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {intellect:5,watermagicskill:2,magicdefence:20,defence:25,watermagicdefence:20}
	},
	ring114: {id:'ring114',category:'rings',slot:'w6',width:20,height:20,caption:'������ ��������� ������',
		common: {weight:1,price:120,durability:50},
		required: {intellect:40,level:8,earthmagicskill:5,endurance:15,strength:15,wisdom:40},
		modify: {intellect:3,earthmagicskill:2,hitpoints:33,mana:100},
		setlink: {name:'granitepower',count:3}
	},
	ring130: {id:'ring130',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� [9]',
		common: {weight:1,price:163,durability:20},
		required: {dexterity:15,intuition:15,level:9,endurance:30,strength:30},
		modify: {criticalpower:5,anticriticalhit:20,antijumpaway:20,criticalhit:20,counterstroke:1,jumpaway:20,dexterity:3,intuition:3,magicdefence:10,defence:10,hitpoints:18,strength:3}
	},
	ring131: {id:'ring131',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� [9]',
		common: {weight:1,price:167,durability:20},
		required: {intellect:75,wisdom:75,level:9},
		modify: {magicdefencereduce:5,intellect:9,mana:20}
	},
	ring119: {id:'ring119',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����������',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater4:{id:'mater4',caption:'�������� �������',count:5}}}},
		common: {weight:1,price:150,durability:50},
		required: {intellect:50,level:9,watermagicskill:7,wisdom:50},
		modify: {intellect:7,watermagicskill:2,magicdefence:30,defence:25,watermagicdefence:20},
		setlink: {name:'frosting',count:3}
	},
	ring120: {id:'ring120',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����������� �������',requireditems:{shop:{exchanger:'shop', items: {mater28:{id:'mater28',caption:'�������� �����',count:1},mater7:{id:'mater7',caption:'������ ��������� ����',count:5}}}},
		common: {weight:1,price:150,durability:50},
		required: {intellect:50,level:9,firemagicskill:7,wisdom:50},
		modify: {anticriticalhit:10,intellect:7,firemagicskill:2,magicdefence:20,mana:80},
		setlink: {name:'inceneration',count:3}
	},
	ring121: {id:'ring121',category:'rings',slot:'w6',width:20,height:20,caption:'������ ����������',requireditems:{shop:{exchanger:'shop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:1},mater8:{id:'mater8',caption:'����������',count:5}}}},
		common: {weight:1,price:150,durability:50},
		required: {intellect:50,level:9,earthmagicskill:7,wisdom:50},
		modify: {intellect:5,earthmagicskill:2,hitpoints:39,mana:120},
		setlink: {name:'gravitation',count:3}
	},
	ring122: {id:'ring122',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������ ������',requireditems:{shop:{exchanger:'shop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:1},mater3:{id:'mater3',caption:'�������',count:4}}}},
		common: {weight:1,price:150,durability:50},
		required: {intellect:50,level:9,airmagicskill:7,wisdom:50},
		modify: {intellect:9,airmagicskill:2,mana:90,manaconsumption:1},
		setlink: {name:'chainlightning',count:3}
	},

	ring141: {id:'ring141',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������ ������',
		common: {weight:1,price:120,durability:50},
		required: {intellect:40,level:8,darkmagicskill:3,wisdom:40},
		modify: {intellect:4,mana:45,darkmagicskill:1,darkmagicpower:3,hitpoints:75}
	},

	ring140: {id:'ring140',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������ ���������',
		common: {weight:1,price:120,durability:50},
		required: {intellect:40,level:8,lightmagicskill:3,wisdom:40},
		modify: {intellect:4,mana:80,lightmagicpower:2,hitpoints:27,manaconsumption:1}
	},

	ring137: {id:'ring137',category:'rings',slot:'w6',width:20,height:20,caption:'������ �������� ����������',
		common: {weight:1,price:162,durability:50},
		required: {intellect:50,level:9,darkmagicskill:3,wisdom:50},
		modify: {intellect:5,mana:50,darkmagicpower:4,hitpoints:96,darkmagicskill:1}
	},

	ring139: {id:'ring139',category:'rings',slot:'w6',width:20,height:20,caption:'������ ������� �������',
		common: {weight:1,price:160,durability:50},
		required: {intellect:50,level:9,lightmagicskill:3,wisdom:50},
		modify: {intellect:5,mana:80,lightmagicpower:3,lightmagicskill:1,hitpoints:30,manaconsumption:2}
	},

	
	
	
	
	
	



	

	

	aring13_snsfh4: {id:'aring13_snsfh4',category:'rings',slot:'w6',width:20,height:20,caption:'������� ��������',description:'��������� ��������',adjustment:true,artefact:true,binding:'bop',
		common: {weight:1,eprice:99.95,durability:250},
		required: {level:9},
		modify: {anticriticalhit:50,magicpower:25,power:25,hitpoints:200}
	},
	

 	ring2008: {id:'ring2008',category:'rings',slot:'w6',width:20,height:20,caption:'���������� ������ ������',
		common: {weight:1,price:57,durability:20},
		required: {level:4,endurance:10},
		modify: {stats:4}
	, upgrade: {
	ring2008_upgrade_7: {id:'ring2008_upgrade_7',level:7,
		common: {price:94,durability:30},
 	required: {level:7,endurance:10},
		modify: {stats:6}
	}}
	},






	
	ring214: {id:'ring214',category:'rings',slot:'w6',width:20,height:20,caption:'Smashing Ring',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:1.59},
		required: {level:8},
		modify: {anticriticalhit:20,antijumpaway:20,criticalhit:40,magicdefence:10,hitpoints:33,strength:2},
		setlink: {name:'smash',count:3}
	},
	ring215: {id:'ring215',category:'rings',slot:'w6',width:20,height:20,caption:'Desert Ring',imp1:true,binding:'boe',
		common: {weight:1,durability:30,eprice:1.59},
		required: {level:8},
		modify: {anticriticalhit:30,jumpaway:35,counterstroke:5,dexterity:1,magicdefence:20,hitpoints:24},
		setlink: {name:'wanderer',count:3}
	},
	ring_illusion1: {id:'ring_illusion1',category:'rings',slot:'w6',width:20,height:20,caption:'������������� ������',description:'������� ������'
	},
	ring_illusion2: {id:'ring_illusion2',category:'rings',slot:'w6',width:20,height:20,caption:'������� ������',description:'������� ������'
	},

	silence60: {id:'silence60',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� �������� �� 1 ���',description:'�������� ������',
		common: {duration:60}
	},
	fsleep: {id:'fsleep',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� ��������� ��������',alignment:'light'
	},
	haos: {id:'haos',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� �����',magic1:'����� (�������� ��������� � ����)',alignment:'light'
	},
	death: {id:'death',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� ������',magic1:'������ (���������� ���������)',alignment:'light'
	},
	cureelixir: {id:'cureelixir',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� ��������� �� ����������� � ���������'
	},
	paper100: {id:'paper100',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������',fixless:true,
		common: {weight:1,price:0.02,durability:1,symbols:100}
	},
	paper200: {id:'paper200',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������',fixless:true,
		common: {weight:1,price:0.03,durability:1,symbols:200}
	},
	paper500: {id:'paper500',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������',fixless:true,
		common: {weight:1,price:0.05,durability:1,symbols:500}
	},
	attack: {id:'attack',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'���������',fixless:true,
		common: {weight:1,price:4,durability:1,probability:70},
		required: {intellect:4,level:4,greymagicskill:4}
	},
	attackk: {id:'attackk',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� ���������',magic1:'�����������',
		common: {price:5,weight:1,durability:1,probability:70},
		required: {intellect:6,level:4}
	},
	attackb: {id:'attackb',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� ���������',fixless:true,
		common: {weight:1,price:8,durability:1,probability:70,timeout:'3 ���.'},
		required: {intellect:10,level:4,darkmagicskill:4}
	},
	attackt: {id:'attackt',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ ���������',magic1:'�����������',fixless:true,
		common: {weight:1,price:20,durability:1,probability:70,timeout:'1 �.  0 ���.'},
		required: {intellect:15,level:6,darkmagicskill:5}
	},
	chesnok: {id:'chesnok',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ (������ �� ��������)',magic1:'������ ��������',fixless:true,
		common: {weight:1,price:2,durability:20,probability:70},
		required: {level:1}
	},
	chesnok2: {id:'chesnok2',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ (������ �� ��������)',magic1:'������ ��������',
		common: {weight:1,price:3,durability:40,probability:80},
		required: {level:1}
	},
	cure_g1: {id:'cure_g1',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'���� ���������',description:'��������� �������� ������, ������� � ������� ������, � ����������� �� ���������� �������',fixless:true,
		common: {weight:1,price:12,durability:6,probability:50},
		required: {intellect:10,level:4,greymagicskill:3}
	},
	teleport: {id:'teleport',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������������ ����� ��������',fixless:true,
		common: {weight:1,price:30,durability:2,probability:70},
		required: {intellect:15,level:4,greymagicskill:5}
	},
	teleport_some: {id:'teleport_some',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������������� ����',fixless:true,
		common: {weight:1,price:10000,durability:20,probability:99}
	},
	sharpen_sword_1: {id:'sharpen_sword_1',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 1: ����',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:1,price:20,durability:1,probability:50},
		required: {intellect:4,level:4,swordskill:1,greymagicskill:1},
		modify: {maxdamage:1,mindamage:1} 
	},
	sharpen_sword_2: {id:'sharpen_sword_2',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 2: ����',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:24}}}},
		common: {weight:1,price:40,durability:1,probability:60},
		required: {intellect:6,level:4,swordskill:2,greymagicskill:2},
		modify: {maxdamage:2,mindamage:2} 
	},
	sharpen_sword_3: {id:'sharpen_sword_3',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 3: ����',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:48}}}},
		common: {weight:1,price:80,durability:1,probability:70},
		required: {intellect:8,level:4,swordskill:3,greymagicskill:3},
		modify: {maxdamage:3,mindamage:3} 
	},
	sharpen_sword_4: {id:'sharpen_sword_4',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 4: ����',fixless:true,
		common: {weight:1,price:160,durability:1,probability:80},
		required: {intellect:10,level:4,swordskill:4,greymagicskill:4},
		modify: {maxdamage:4,mindamage:4} 
	},
	sharpen_sword_5: {id:'sharpen_sword_5',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 5: ����',fixless:true,
		common: {weight:1,price:320,durability:1,probability:90},
		required: {intellect:12,level:4,swordskill:5,greymagicskill:5},
		modify: {maxdamage:5,mindamage:5} 
	},
	sharpen_knife_1: {id:'sharpen_knife_1',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 1: ���� � �������',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:1,price:20,durability:1,probability:50},
		required: {intellect:4,level:4,greymagicskill:1,knifeskill:1},
		modify: {maxdamage:1,mindamage:1} 
	},
	sharpen_knife_2: {id:'sharpen_knife_2',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 2: ���� � �������',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:24}}}},
		common: {weight:1,price:40,durability:1,probability:60},
		required: {intellect:6,level:4,greymagicskill:2,knifeskill:2},
		modify: {maxdamage:2,mindamage:2} 
	},
	sharpen_knife_3: {id:'sharpen_knife_3',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 3: ���� � �������',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:48}}}},
		common: {weight:1,price:80,durability:1,probability:70},
		required: {intellect:8,level:4,greymagicskill:3,knifeskill:3},
		modify: {maxdamage:3,mindamage:3} 
	},
	sharpen_knife_4: {id:'sharpen_knife_4',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 4: ���� � �������',fixless:true,
		common: {weight:1,price:160,durability:1,probability:80},
		required: {intellect:10,level:4,greymagicskill:4,knifeskill:4},
		modify: {maxdamage:4,mindamage:4} 
	},
	sharpen_knife_5: {id:'sharpen_knife_5',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 5: ���� � �������',fixless:true,
		common: {weight:1,price:320,durability:1,probability:90},
		required: {intellect:12,level:4,greymagicskill:5,knifeskill:5},
		modify: {maxdamage:5,mindamage:5} 
	},
	sharpen_axe_1: {id:'sharpen_axe_1',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 1: ������',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:1,price:20,durability:1,probability:50},
		required: {intellect:4,level:4,greymagicskill:1,axeskill:1},
		modify: {maxdamage:1,mindamage:1} 
	},
	sharpen_axe_2: {id:'sharpen_axe_2',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 2: ������',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:24}}}},
		common: {weight:1,price:40,durability:1,probability:60},
		required: {intellect:6,level:4,greymagicskill:2,axeskill:2},
		modify: {maxdamage:2,mindamage:2} 
	},
	sharpen_axe_3: {id:'sharpen_axe_3',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 3: ������',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:48}}}},
		common: {weight:1,price:80,durability:1,probability:70},
		required: {intellect:8,level:4,greymagicskill:3,axeskill:3},
		modify: {maxdamage:3,mindamage:3} 
	},
	sharpen_axe_4: {id:'sharpen_axe_4',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 4: ������',fixless:true,
		common: {weight:1,price:160,durability:1,probability:80},
		required: {intellect:10,level:4,greymagicskill:4,axeskill:4},
		modify: {maxdamage:4,mindamage:4} 
	},
	sharpen_axe_5: {id:'sharpen_axe_5',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 5: ������',fixless:true,
		common: {weight:1,price:320,durability:1,probability:90},
		required: {intellect:12,level:4,greymagicskill:5,axeskill:5},
		modify: {maxdamage:5,mindamage:5} 
	},
	sharpen_molot_1: {id:'sharpen_molot_1',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 1: ������, ������, ������',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl4_reward:{id:'mater_coin_lvl4_reward',caption:'�����',count:12}}}},
		common: {weight:1,price:20,durability:1,probability:50},
		required: {intellect:4,level:4,greymagicskill:1,clubskill:1},
		modify: {maxdamage:1,mindamage:1} 
	},
	sharpen_molot_2: {id:'sharpen_molot_2',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 2: ������, ������, ������',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl5_reward:{id:'mater_coin_lvl5_reward',caption:'���������� �����',count:24}}}},
		common: {weight:1,price:40,durability:1,probability:60},
		required: {intellect:6,level:4,greymagicskill:2,clubskill:2},
		modify: {maxdamage:2,mindamage:2} 
	},
	sharpen_molot_3: {id:'sharpen_molot_3',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 3: ������, ������, ������',fixless:true,requireditems:{s_luka:{exchanger:'s_luka', items: {mater_coin_lvl6_reward:{id:'mater_coin_lvl6_reward',caption:'������� �����',count:48}}}},
		common: {weight:1,price:80,durability:1,probability:70},
		required: {intellect:8,level:4,greymagicskill:3,clubskill:3},
		modify: {maxdamage:3,mindamage:3} 
	},
	sharpen_molot_4: {id:'sharpen_molot_4',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 4: ������, ������, ������',fixless:true,
		common: {weight:1,price:160,durability:1,probability:80},
		required: {intellect:10,level:4,greymagicskill:4,clubskill:4},
		modify: {maxdamage:4,mindamage:4} 
	},
	sharpen_molot_5: {id:'sharpen_molot_5',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 5: ������, ������, ������',fixless:true,
		common: {weight:1,price:320,durability:1,probability:90},
		required: {intellect:12,level:4,greymagicskill:5,clubskill:5},
		modify: {maxdamage:5,mindamage:5} 
	},
	sharpen_staff_1: {id:'sharpen_staff_1',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� �����: +1',fixless:true,
		common: {weight:1,price:20,durability:1,probability:50},
		required: {level:4,intellect:14,greymagicskill:1,staffskill:1},
		modify: {magicpower:2}
	},
	sharpen_staff_2: {id:'sharpen_staff_2',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� �����: +2',fixless:true,
		common: {weight:1,price:40,durability:1,probability:60},
		required: {level:4,intellect:26,greymagicskill:2,staffskill:2},
		modify: {magicpower:4}
	},
	sharpen_staff_3: {id:'sharpen_staff_3',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� �����: +3',fixless:true,
		common: {weight:1,price:80,durability:1,probability:70},
		required: {level:4,intellect:38,greymagicskill:3,staffskill:3},
		modify: {magicpower:6}
	},
	sharpen_staff_4: {id:'sharpen_staff_4',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� �����: +4',fixless:true,
		common: {weight:1,price:160,durability:1,probability:80},
		required: {level:4,intellect:50,greymagicskill:4,staffskill:4},
		modify: {magicpower:8}
	},
	sharpen_staff_5: {id:'sharpen_staff_5',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� �����: +5',fixless:true,
		common: {weight:1,price:320,durability:1,probability:90},
		required: {level:4,intellect:62,greymagicskill:5,staffskill:5},
		modify: {magicpower:10}
	},
	sharpen_all_7: {id:'sharpen_all_7',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 7: ������',description:'������ ����� ������� ������ � ����������',fixless:true,binding:'bop',
		common: {weight:1,price:1000,durability:1},
		required: {level:8,angelsreputation:10000},
		modify: {mindamage:7,maxdamage:7}
	},
	sharpen_all_10: {id:'sharpen_all_10',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �� 10: ������',description:'������� �� �������[?]',fixless:true,binding:'bop',
		common: {weight:1,price:1,durability:1},
		required: {level:4},
		modify: {mindamage:10,maxdamage:10}
	},
	hidden: {id:'hidden',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�����������',magic1:'�������',
		common: {weight:1,price:50,durability:1,probability:70},
		required: {intellect:20,level:7,greymagicskill:5,wisdom:5}
	},
	illusion: {id:'illusion',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������������',magic1:'�������',
		common: {price:40,weight:1,durability:10,probability:99,duration:60},
		required: {intellect:6,wisdom:8,level:7,greymagicskill:3}
	},
	undef: {id:'undef',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������������� ���������',magic1:'�������������',
		common: {price:5,weight:1,durability:3,probability:50},
		required: {intellect:2,level:4}
	},
	scanner: {id:'scanner',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������',magic1:'���������� ���',
		common: {price:1,weight:1,durability:7,probability:90},
		required: {intellect:4,level:4}
	},
	trap: {id:'trap',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������',description:'��������, �������� � �������, ������ ����� HP',magic1:'�������',
		common: {price:1,weight:1,durability:1,probability:80},
		required: {intellect:4,level:4}
	},
	chains: {id:'chains',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����',description:'(�� ���� ������ ���������� �� �������� 10 �����)',magic1:'��������� �����������',
		common: {price:10,weight:1,durability:1,probability:70},
		required: {intellect:6,level:4}
	},
	osinkol: {id:'osinkol',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� ���',fixless:true,
		common: {weight:1,price:14,durability:20,probability:70},
		required: {level:1,endurance:8}
	},
	build_in: {id:'build_in',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����������� �����',magic1:'����������� �����',
		common: {price:250,weight:1,durability:1,probability:80},
		required: {level:7,intellect:17,wisdom:3}
	},
	bloodyelement: {id:'bloodyelement',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ ��������� ����������',magic1:'������ ������',
		common: {price:30,weight:1,durability:1,probability:70},
		required: {level:7,intellect:17,wisdom:5}
	},
	box_lock: {id:'box_lock',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� ��� �������',fixless:true,
		common: {weight:1,price:1,durability:50,probability:99,duration:20160},
		required: {level:1}
	},
	travma: {id:'travma',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� ������������',description:'���� - �� 3-� ����',magic1:'������������'
	},
	downgrade: {id:'downgrade',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��� �����',
		common: {weight:1,price:300,durability:1,probability:99},
		required: {level:4}
	},
	open_present_val: {id:'open_present_val',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� ����������� ����������',
		common: {price:200,weight:1,durability:1,probability:70},
		required: {level:4,intellect:10}
	},
	shout: {id:'shout',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� �����',fixless:true,
		common: {weight:1,price:1,durability:100,probability:99,duration:60},
		required: {level:4}
	},


	spell_kissofkassandra1: {id:'spell_kissofkassandra1',slot:'w100',width:40,height:25,caption:'������� ���������'},
	spell_birthday: {id:'spell_starshine',width:40,height:25,caption:'������������� �����'},


	spell_luck: {id:'spell_luck',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�����',
		common: {weight:1,price:20,durability:2,probability:70,duration:60},
		required: {intellect:40,wisdom:40,level:8,lightmagicskill:4,mana:500}
	},
	spell_godstat_str: {id:'spell_godstat_str',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'���� ��������',fixless:true,
		common: {weight:1,price:10000,durability:20,probability:99,duration:120},
		required: {level:7}
	},
	spell_godstat_dex: {id:'spell_godstat_dex',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� ����',fixless:true,
		common: {weight:1,price:10000,durability:20,probability:99,duration:120},
		required: {level:7}
	},
	spell_godstat_inst: {id:'spell_godstat_inst',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������������',fixless:true,
		common: {weight:1,price:10000,durability:20,probability:99,duration:120},
		required: {level:7}
	},
	spell_godprotect10: {id:'spell_godprotect10',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������������ ������',fixless:true,
		common: {weight:1,price:1,durability:1,probability:99,duration:120},
		required: {level:7}
	},
	spell_godprotect: {id:'spell_godprotect',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ �� �����',fixless:true,
		common: {weight:1,price:1,durability:1,probability:99,duration:120},
		required: {level:7}
	},
	zma: {id:'zma',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ �� �����',fixless:true,
		common: {weight:1,price:1,durability:1,probability:99,duration:120},
		required: {level:7}
	},
	invoke_spell_godintel100: {id:'invoke_spell_godintel100',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� ���������',fixless:true,
		common: {weight:1,price:1,durability:15,probability:99,duration:120},
		required: {level:7},
  modify: {intellect:100,magicpower:20}
	},
	invoke_spell_godmana100: {id:'invoke_spell_godmana100',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'���������� ��������',fixless:true,
		common: {weight:1,price:1,durability:15,probability:99,duration:120},
		required: {level:7},
  modify: {mana:2000}
	},
	spell_starshine: {id:'spell_starshine',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� ������',fixless:true,
		common: {weight:1,eprice:9.95,durability:4,probability:99,duration:60},
		required: {level:2},
  modify: {strength:10,dexterity:10,intuition:10}
	},
	spell_startenacity: {id:'spell_startenacity',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� �������',fixless:true,
		common: {weight:1,eprice:9.95,durability:4,probability:99,duration:60},
		required: {level:2},
  modify: {hitpoints:300}
	},
	standart_effect: {id:'standart_effect',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������',fixless:true,
  modify: {hitpoints:120}
	},
	spell_starenergy: {id:'spell_starenergy',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� �������',fixless:true,
		common: {weight:1,eprice:9.95,durability:4,probability:99,duration:60},
		required: {level:2},
  modify: {magicpower:20,mana:150}
	},
invoke_plain_1s_str10: {id:'invoke_plain_1s_str10',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ ��� ������',fixless:true,
		required: {level:2},
  modify: {strength:10}
	},
invoke_plain_1s_dex10: {id:'invoke_plain_1s_dex10',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'Ƹ���� ��� ������',fixless:true,
		required: {level:2},
  modify: {dexterity:10}
	}, 
invoke_plain_1s_inst10: {id:'invoke_plain_1s_inst10',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� ��� ������',fixless:true,
		required: {level:2},
  modify: {intuition:10}
	}, 
invoke_plain_1s_intel10: {id:'invoke_plain_1s_intel10',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� ��� ������',fixless:true,
		required: {level:2},
  modify: {intellect:10}
	}, 
invoke_plain_1s_all5: {id:'invoke_plain_1s_all5',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� ��� ������',fixless:true,
		required: {level:2},
  modify: {strength:5,dexterity:5,intuition:5,intellect:5}
	},
invoke_plain_1s_spirit10: {id:'invoke_plain_1s_spirit10',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ ��� ������',fixless:true,
		required: {level:10},
  modify: {spirituality:10}
	}, 

	spell_stat_intel: {id:'spell_stat_intel',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������� �����',magic1:'��������',fixless:true,
		common: {weight:1,price:10,durability:5,probability:80,duration:120},
		required: {intellect:50,level:7,mana:1000}
	, upgrade: {
	spell_stat_intel_olditem: {id:'spell_stat_intel_olditem',old:true,
		common: {weight:1,price:10,durability:5,probability:80,duration:120},
		required: {intellect:10,level:7,greymagicskill:3,mana:500}
	}}

	},
	spell_powerHPup1: {id:'spell_powerHPup1',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� ����� +1',fixless:true,
		common: {weight:1,price:10,durability:5,probability:50,duration:120},
		required: {intellect:10,level:7,greymagicskill:3,mana:100}
	},
	spell_powerHPup2: {id:'spell_powerHPup2',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� ����� +2',fixless:true,
		common: {weight:1,price:15,durability:5,probability:50,duration:120},
		required: {intellect:15,level:7,greymagicskill:4,mana:200}
	},
	spell_powerHPup3: {id:'spell_powerHPup3',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� ����� +3',fixless:true,
		common: {weight:1,price:20,durability:5,probability:50,duration:120},
		required: {intellect:25,level:8,greymagicskill:5,mana:400}
	},
	spell_powerHPup4: {id:'spell_powerHPup4',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� ����� +4',fixless:true,
		common: {weight:1,price:25,durability:5,probability:50,duration:120},
		required: {intellect:40,level:9,greymagicskill:6,mana:800}
	},
	spell_powerHPup5: {id:'spell_powerHPup5',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� ����� +5',fixless:true,
		common: {weight:1,price:30,durability:5,probability:50,duration:120},
		required: {intellect:60,level:10,greymagicskill:8,mana:1600}
	},
	spell_powerHPdn1: {id:'spell_powerHPdn1',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� -1',fixless:true,
		common: {weight:1,price:5,durability:5,probability:50,duration:120},
		required: {intellect:10,level:7,darkmagicskill:2,mana:50}
	},
	spell_powerHPdn2: {id:'spell_powerHPdn2',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� -2',fixless:true,
		common: {weight:1,price:7.5,durability:5,probability:50,duration:120},
		required: {intellect:15,level:7,darkmagicskill:3,mana:100}
	},
	spell_powerHPdn3: {id:'spell_powerHPdn3',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� -3',fixless:true,
		common: {weight:1,price:10,durability:5,probability:50,duration:120},
		required: {intellect:25,level:8,darkmagicskill:4,mana:200}
	},
	spell_powerHPdn4: {id:'spell_powerHPdn4',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� -4',fixless:true,
		common: {weight:1,price:12.5,durability:5,probability:50,duration:120},
		required: {intellect:40,level:9,darkmagicskill:5,mana:400}
	},
	spell_powerHPdn5: {id:'spell_powerHPdn5',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� -5',fixless:true,
		common: {weight:1,price:15,durability:5,probability:50,duration:120},
		required: {intellect:60,level:10,darkmagicskill:5,mana:800}
	},
	spell_ritual001: {id:'spell_ritual001',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������',description:'������ � ��������'
	},
	jail: {id:'jail',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� � ���������',description:'����� ��������'
	},
	joke_system: {id:'joke_system',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� ����',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:3,probability:99}
	},
	joke_block: {id:'joke_block',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'���������� ����',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:3,probability:99,duration:360}
	},
	joke_name: {id:'joke_name',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ ��������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:3,probability:99,duration:360}
	},
	joke_items: {id:'joke_items',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ ���',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:3,probability:99,duration:360}
	},
	joke_stat: {id:'joke_stat',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ ���������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:3,probability:99,duration:360}
	},
	spell_curse: {id:'spell_curse',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ �����',magic1:'���������',fixless:true,clist:{_:{mater12:{id:'mater12',caption:'�����',count:1},mater16:{id:'mater16',caption:'��������� ������',count:1},mater17:{id:'mater17',caption:'���� �������� ������',count:1},mater18:{id:'mater18',caption:'������������ ������',count:1},mater28:{id:'mater28',caption:'�������� �����',count:1},mater29:{id:'mater29',caption:'�������� �����',count:1}}},
		common: {weight:1,price:1,durability:1,probability:70,duration:1440},
		required: {intellect:10,level:8}
	},
	spell_curseb: {id:'spell_curseb',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �����',magic1:'���������',fixless:true,clist:{_:{mater4:{id:'mater4',caption:'�������� �������',count:1},mater14:{id:'mater14',caption:'������� �����',count:1},mater27:{id:'mater27',caption:'������ ���������� ������',count:1},mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater30:{id:'mater30',caption:'����� ���',count:1},mater31:{id:'mater31',caption:'�������� ���������� �����',count:1},mater24:{id:'mater24',caption:'���������',count:1}}},
		common: {weight:1,price:1,durability:1,probability:70,duration:1440},
		required: {intellect:10,level:8}
	},

	d_blat_6: {id:'d_blat-6',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� �������',description:'��������� ������ � ���������� �� 6 ����� ������',fixless:true,
		common: {weight:1,price:1,durability:1,probability:99}
	},
	d_blat24: {id:'d_blat24',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'�������������',description:'����� ������ �� ���������� ��������� �� 24 ����',fixless:true,
		common: {weight:1,price:1,durability:1,probability:99}
	},
	pet_rename: {id:'pet_rename',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'����� �� ��������������',description:'��� ���� �������� ������ ������ ���������',fixless:true,
		common: {weight:1,price:30,durability:1,expirationdate:30,timeout:'90 ��.'},
		required: {level:4}
	},
	spell_curset: {id:'spell_curset',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� ������� ���������',magic1:'���������',fixless:true,
		common: {weight:1,price:1,durability:1,probability:70,duration:1440},
		required: {intellect:10,level:8}
	},
	spell_cursek: {id:'spell_cursek',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'��������� ��������� ���������',magic1:'���������',fixless:true,
		common: {weight:1,price:1,durability:1,probability:70,duration:1440},
		required: {intellect:10,level:8}
	},
	sealroom: {id:'sealroom',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������ �������',magic1:'������',fixless:true,
		common: {weight:1,price:1,durability:10,duration:120},
		required: {intellect:10,level:8}
	},
	spell_freedom30: {id:'spell_freedom30',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� (30 ����)',description:'����� ��������� �����. ���� ������ �� ����� ���� ����������� ����������, ����������, ��������� ��� VIP �����������.',imp1:true,fixless:true,
		common: {weight:1,eprice:500,durability:1,expirationdate:365}
	},
	invoke_snowball_start: {id:'invoke_snowball_start',category:'auxiliaryscrolls',slot:'w100',width:40,height:25,caption:'������� ������',description:'���������� � ������� �����'
	},


//�����������
	enhp_3_copower2: {id:'enhp_3_copower2',caption:'���������� ������: ���� �������� 2',description:'� ������������� ���� ������� ������ ���������� ���� �������� �������� ������������ ����������',magic1:'��������� ��������',fixless:true,binding:'bop',
		common: {weight:1,price:1,durability:1,probability:99}
	},
	enhp_3_manabuff1: {id:'enhp_3_manabuff1',caption:'���������� ������: ���������� ���� 1',description:'��� ������������� �� ����� ����������� ���������� ����',fixless:true,
		common: {weight:1,price:1,durability:1,probability:99},
		modify: {mana:10}
	},
	enhp_3_cointel3: {id:'enhp_3_cointel3',caption:'���������� ������: ���� ������� 3',description:'� ������������� ���� ������� ������ ���������� ���� �������� �������� ��������� ����������',magic1:'��������� �������',fixless:true,
		common: {weight:1,price:1,durability:1,probability:99}
	},
	enhp_5_dampen_all_1: {id:'enhp_5_dampen_all_1',caption:'���������� ����: ���� ��������� ������� 1',description:'������������ ���� ������� ���� ����� ���� �������� �������� �������������� ������������ ����������. ���� ����������� � ���������� ����� ������� ����� �����������.',magic1:'��������� �������',fixless:true,requireditems:{ks_cap:{exchanger:'ks_cap', items: {mater22:{id:'mater22',caption:'�������� �������',count:1},mater2:{id:'mater2',caption:'������',count:3}}}},
		common: {weight:1,price:50,durability:1,probability:99,expirationdate:30,capitalreputation:10000}
	},
	enhp_5_defend_all_1: {id:'enhp_5_defend_all_1',caption:'���������� ����: ���� ���� ������ 1',description:'������������ ���� ������� ���� ����� ���� ��������� 40% ����������� ��� �����. ���� ����������� � ���������� ����� ������� ����� �����������.',magic1:'���� ������',fixless:true,requireditems:{ks_ang:{exchanger:'ks_ang', items: {mater24:{id:'mater24',caption:'���������',count:1},mater2:{id:'mater2',caption:'������',count:3}}}},
		common: {weight:1,price:50,durability:1,expirationdate:30,angelsreputation:10000}
	},
	enhp_13_pm_revard: {id:'enhp_13_pm_revard',caption:'���������� ������: �������� +12',description:'��� ������������� �� ������, ����������� ������� �������� �� 12.',fixless:true,requireditems:{ks_sand:{exchanger:'ks_sand', items: {mater20:{id:'mater20',caption:'�������� ������� �����',count:1},mater7:{id:'mater7',caption:'������ ��������� ����',count:3}}}},
		common: {weight:1,price:50,durability:1,expirationdate:30,sandreputation:10000}
	},
	enhp_6_bloodlinew1: {id:'enhp_6_bloodlinew1',caption:'�������� ����',description:'���������� ������. ����� ������.',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:25}}}},
		common: {weight:1,price:1,durability:1},
		modify: {power:1,hitpoints:6}
	},
	enhp_6_bloodlinem1: {id:'enhp_6_bloodlinem1',caption:'�������� ����',description:'���������� ������. ����� ������.',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:25}}}},
		common: {weight:1,price:1,durability:1},
		modify: {magicpower:1,hitpoints:6}
	},
	enhp_6_bloodlinew2: {id:'enhp_6_bloodlinew2',caption:'�������� ���� [2]',description:'���������� ������. ����� ������.',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:50}}}},
		common: {weight:1,price:1,durability:1},
		modify: {power:2,hitpoints:12}
	},
	enhp_6_bloodlinem2: {id:'enhp_6_bloodlinem2',caption:'�������� ���� [2]',description:'���������� ������. ����� ������.',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:50}}}},
		common: {weight:1,price:1,durability:1},
		modify: {magicpower:2,hitpoints:12}
	},
	enhp_3_moder_4: {id:'enhp_3_moder_4',caption:'���������� ������: �����',description:'��� ������������� �� ������, ���� ���� ������� �������������� ���� ������ ����.',magic1:'����',fixless:true,binding:'bop',alignment:'light',
		common: {weight:1,price:50,durability:1}
	},
	enhp_11_moder_3: {id:'enhp_11_moder_3',caption:'���������� ��������: ����',description:'��� ������������� �� ��������, ����������� ��������� ����.',fixless:true,binding:'bop',alignment:'light',
		common: {weight:1,price:50,durability:1},
		modify: {magicpower:2,power:2}
	},
	enhp_3_moder_6: {id:'enhp_3_moder_6',caption:'���������� �����: ����',description:'��� ������������� �� ����� ����������� ��������� ������ ������ ����',fixless:true,binding:'bop',alignment:'light',
		common: {weight:1,price:50,durability:1,probability:99},
		modify: {magicpower:2}
	},
	enhp_4_moder_2: {id:'enhp_4_moder_2',caption:'���������� �����: �����',description:'��� ������������� �� �����, ����������� ������� ����� �� 33.',fixless:true,binding:'bop',alignment:'light',
		common: {weight:1,price:150,durability:1},
		modify: {hitpoints:33}
	},
	enhp_9_moder_1: {id:'enhp_9_moder_1',caption:'���������� ����: �������������� �����',description:'��� ������������� �� ����, ����������� ����, ��������, �������� � ��������� �� 1 � ������� ����� �� 6.',fixless:true,binding:'bop',alignment:'light',
		common: {weight:1,price:500,durability:1},
		modify: {dexterity:1,intuition:1,intellect:1,hitpoints:6,strength:1}
	},
	enhp_3_moder_5: {id:'enhp_3_moder_5',caption:'���������� ������: ���',description:'��� ������������� �� ������, ���� ���� ������� �������������� ���� ������ ����.',magic1:'�����������',fixless:true,binding:'bop',alignment:'dark',
		common: {weight:1,price:50,durability:1}
	},
	enhp_11_moder_3_1: {id:'enhp_11_moder_3_1',caption:'���������� ��������: ����',description:'��� ������������� �� ��������, ����������� ��������� ����.',fixless:true,binding:'bop',alignment:'dark',
		common: {weight:1,price:50,durability:1},
		modify: {magicpower:2,power:2}
	},
	enhp_3_moder_6_1: {id:'enhp_3_moder_6_1',caption:'���������� �����: ����',description:'��� ������������� �� ����� ����������� ��������� ������ ������ ����',fixless:true,binding:'bop',alignment:'dark',
		common: {weight:1,price:50,durability:1,probability:99},
		modify: {magicpower:2}
	},
	enhp_4_moder_2_1: {id:'enhp_4_moder_2_1',caption:'���������� �����: �����',description:'��� ������������� �� �����, ����������� ������� ����� �� 33.',fixless:true,binding:'bop',alignment:'dark',
		common: {weight:1,price:150,durability:1},
		modify: {hitpoints:33}
	},
	enhp_9_moder_1_1: {id:'enhp_9_moder_1_1',caption:'���������� ����: �������������� �����',description:'��� ������������� �� ����, ����������� ����, ��������, �������� � ��������� �� 1 � ������� ����� �� 6.',fixless:true,binding:'bop',alignment:'dark',
		common: {weight:1,price:500,durability:1},
		modify: {dexterity:1,intuition:1,intellect:1,hitpoints:6,strength:1}
	},
	enhp_4_solidarity_1: {id:'enhp_4_solidarity_1',caption:'������������',description:'��������� 10% �� �������� ����� � 10% �� �������� ����� ������ �� 5 ��������� �����<br>���� ������������: 1.25% ��� ��������� �����<br>���������� � ����� ������������ �����',
		required: {level:4}
	},
	enhp_4_solidarity_2: {id:'enhp_4_solidarity_2',caption:'������������',description:'��������� 20% �� �������� ����� � 20% �� �������� ����� ������ �� 5 ��������� �����<br>���� ������������: 1.25% ��� ��������� �����<br>���������� � ����� ������������ �����',
		required: {level:7}
	},
	enhp_3_lightning_1: {id:'enhp_3_lightning_1',caption:'���������� ������: ����� ������',description:'��������� �������� ������.',magic1:'����� ������',fixless:true,binding:'bop',requireditems:{shop:{exchanger:'shop', items: {mater14:{id:'mater14',caption:'������� �����',count:1}}}},
		common: {weight:1,price:20,durability:10,expirationdate:14,probability:99,duration:180},
		required: {level:7}
	},
	enhp_3_decay_1: {id:'enhp_3_decay_1',caption:'���������� ������: ����������',description:'��������� �������� ������.',magic1:'����������',fixless:true,binding:'bop',requireditems:{shop:{exchanger:'shop', items: {mater17:{id:'mater17',caption:'���� �������� ������',count:1}}}},
		common: {weight:1,price:20,durability:10,expirationdate:14,probability:99,duration:180},
		required: {level:7}
	},

//�������
	summon_pet_cat: {id:'summon_pet_cat',category:'summonscrolls',slot:'w100',width:40,height:25,caption:'�������� ����',description:'��������� ���� � ���������� ��������. ��. <a href=http://capitalcity.combats.com/encicl/20.html target=_blank class=TLink>������������</A>',magic1:'������',fixless:true,
		common: {weight:1,price:50,durability:1},
		required: {level:4}
	},
	summon_pet_owl: {id:'summon_pet_owl',category:'summonscrolls',slot:'w100',width:40,height:25,caption:'�������� ����',description:'��������� ���� � ���������� ��������. ��. <a href=http://capitalcity.combats.com/encicl/20.html target=_blank class=TLink>������������</A>',magic1:'������',fixless:true,
		common: {weight:1,price:50,durability:1},
		required: {level:4}
	},
	summon_pet_demon: {id:'summon_pet_demon',category:'summonscrolls',slot:'w100',width:40,height:25,caption:'�������� �������',description:'��������� ������� � ���������� ��������. ������ �������� ������ � Demons city. ��. <a href=http://capitalcity.combats.com/encicl/20.html target=_blank class=TLink>������������</A>',magic1:'������',fixless:true,
		common: {weight:1,price:50,durability:1}
	},
	summon_pet_wisp: {id:'summon_pet_wisp',category:'summonscrolls',slot:'w100',width:40,height:25,caption:'�������� ��������',description:'��������� �������� � ���������� ��������. ������ �������� ������ � Angels city. ��. <a href=http://capitalcity.combats.com/encicl/20.html target=_blank class=TLink>������������</A>',magic1:'������',fixless:true,
		common: {weight:1,price:75,durability:1},
		required: {level:7,wisdom:15}
	},
	summon_pet_dog: {id:'summon_pet_dog',category:'summonscrolls',slot:'w100',width:40,height:25,caption:'�������� ���',description:'��������� ��� � ���������� ��������. ������ �������� ������ � Angels city. ��. <a href=http://capitalcity.combats.com/encicl/20.html target=_blank class=TLink>������������</A>',magic1:'������',fixless:true,
		common: {weight:1,price:80,durability:1},
		required: {level:4}
	},
	summon_pet_pig: {id:'summon_pet_pig',category:'summonscrolls',slot:'w100',width:40,height:25,caption:'�������� �����',description:'��������� ����� � ���������� ��������. ������ �������� ������ � Angels city. ��. <a href=http://capitalcity.combats.com/encicl/20.html target=_blank class=TLink>������������</A>',magic1:'������',fixless:true,
		common: {weight:1,price:80,durability:1},
		required: {level:4}
	},
	magearmor: {id:'magearmor',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'����������� ���',fixless:true,
		common: {weight:1,price:10,durability:5,probability:70,timeout:'15 ���.'},
		required: {intellect:35,level:8,greymagicskill:3,mana:500}
	},
	sp_tacpts_HIT1: {id:'sp_tacpts_HIT1',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���: 1',magic1:'�������',fixless:true,clist:{_:{mater7:{id:'mater7',caption:'������ ��������� ����',count:3}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_HIT2: {id:'sp_tacpts_HIT2',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���: 2',magic1:'�������',fixless:true,clist:{_:{mater18:{id:'mater18',caption:'������������ ������',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_HIT3: {id:'sp_tacpts_HIT3',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���: 3',magic1:'�������',fixless:true,clist:{_:{mater30:{id:'mater30',caption:'����� ���',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_HIT4: {id:'sp_tacpts_HIT4',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���: 4',magic1:'�������',fixless:true,clist:{_:{mater22:{id:'mater22',caption:'�������� �������',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_HIT5: {id:'sp_tacpts_HIT5',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���: 5',magic1:'�������',fixless:true,clist:{_:{mater22:{id:'mater22',caption:'�������� �������',count:1},mater23:{id:'mater23',caption:'�������',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_KRT1: {id:'sp_tacpts_KRT1',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� �����: 1',magic1:'�������',fixless:true,clist:{_:{mater9:{id:'mater9',caption:'������ �������� ������',count:3}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_KRT2: {id:'sp_tacpts_KRT2',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� �����: 2',magic1:'�������',fixless:true,clist:{_:{mater16:{id:'mater16',caption:'��������� ������',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_KRT3: {id:'sp_tacpts_KRT3',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� �����: 3',magic1:'�������',fixless:true,clist:{_:{mater27:{id:'mater27',caption:'������ ���������� ������',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_KRT4: {id:'sp_tacpts_KRT4',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� �����: 4',magic1:'�������',fixless:true,clist:{_:{mater31:{id:'mater31',caption:'�������� ���������� �����',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_KRT5: {id:'sp_tacpts_KRT5',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� �����: 5',magic1:'�������',fixless:true,clist:{_:{mater31:{id:'mater31',caption:'�������� ���������� �����',count:1},mater23:{id:'mater23',caption:'�������',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_CNTR1: {id:'sp_tacpts_CNTR1',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 1',magic1:'�������',fixless:true,clist:{_:{mater10:{id:'mater10',caption:'���� �������� ������',count:3}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_CNTR2: {id:'sp_tacpts_CNTR2',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 2',magic1:'�������',fixless:true,clist:{_:{mater17:{id:'mater17',caption:'���� �������� ������',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_CNTR3: {id:'sp_tacpts_CNTR3',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 3',magic1:'�������',fixless:true,clist:{_:{mater28:{id:'mater28',caption:'�������� �����',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_CNTR4: {id:'sp_tacpts_CNTR4',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 4',magic1:'�������',fixless:true,clist:{_:{mater20:{id:'mater20',caption:'�������� ������� �����',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_CNTR5: {id:'sp_tacpts_CNTR5',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 5',magic1:'�������',fixless:true,clist:{_:{mater20:{id:'mater20',caption:'�������� ������� �����',count:1},mater23:{id:'mater23',caption:'�������',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_BLK1: {id:'sp_tacpts_BLK1',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 1',magic1:'�������',fixless:true,clist:{_:{mater11:{id:'mater11',caption:'���� ������ �����',count:3}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_BLK2: {id:'sp_tacpts_BLK2',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 2',magic1:'�������',fixless:true,clist:{_:{mater19:{id:'mater19',caption:'�������� ������',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_BLK3: {id:'sp_tacpts_BLK3',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 3',magic1:'�������',fixless:true,clist:{_:{mater29:{id:'mater29',caption:'�������� �����',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_BLK4: {id:'sp_tacpts_BLK4',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 4',magic1:'�������',fixless:true,clist:{_:{mater21:{id:'mater21',caption:'�������� �������',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_BLK5: {id:'sp_tacpts_BLK5',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ������: 5',magic1:'�������',fixless:true,clist:{_:{mater21:{id:'mater21',caption:'�������� �������',count:1},mater23:{id:'mater23',caption:'�������',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_PRY1: {id:'sp_tacpts_PRY1',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���������: 1',magic1:'�������',fixless:true,clist:{_:{mater8:{id:'mater8',caption:'����������',count:3}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_PRY2: {id:'sp_tacpts_PRY2',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���������: 2',magic1:'�������',fixless:true,clist:{_:{mater15:{id:'mater15',caption:'������� �������',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_PRY3: {id:'sp_tacpts_PRY3',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���������: 3',magic1:'�������',fixless:true,clist:{_:{mater26:{id:'mater26',caption:'�������� ������������',count:2}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_PRY4: {id:'sp_tacpts_PRY4',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���������: 4',magic1:'�������',fixless:true,clist:{_:{mater24:{id:'mater24',caption:'���������',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},
	sp_tacpts_PRY5: {id:'sp_tacpts_PRY5',category:'tacticalscrolls',slot:'w100',width:40,height:25,caption:'������� ���������: 5',magic1:'�������',fixless:true,clist:{_:{mater24:{id:'mater24',caption:'���������',count:1},mater23:{id:'mater23',caption:'�������',count:1}}},
		common: {weight:1,durability:1,timeout:'3 ���.'},
		required: {level:5}
	},

//������ � ��������

	mirror: {id:'mirror',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������������',fixless:true,
		common: {weight:1,price:20,durability:2,probability:50},
		required: {intellect:6,level:4,greymagicskill:3}
	},
	antimirror: {id:'antimirror',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'���������� �����',fixless:true,
		common: {weight:1,price:20,durability:2,probability:50},
		required: {intellect:3,level:4,greymagicskill:2}
	},
	cureHP15: {id:'cureHP15',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ������� 15HP',fixless:true,
		common: {weight:1,price:1,durability:1,probability:70},
		required: {intellect:1,level:4,greymagicskill:1}
	},
	cureHP30: {id:'cureHP30',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ������� 30HP',fixless:true,
		common: {weight:1,price:2,durability:1,probability:70},
		required: {intellect:3,level:4,greymagicskill:1}
	, upgrade: {
	cureHP30_2: {id:'cureHP30_2',caption:'�������������� ������� 30HP [������]',description:'���������� � ������ ����� ����� ������ 1 ��������� ������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:1}}}},
		common: {weight:1,price:0.01,durability:1,intermediatecast:'yes'},
		required: {level:7,intellect:1,greymagicskill:0}
	}}
	},
	cureHP45: {id:'cureHP45',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ������� 45HP',fixless:true,
		common: {weight:1,price:3,durability:1,probability:70},
		required: {intellect:5,level:4,greymagicskill:1}
	},
	cureHP60: {id:'cureHP60',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ������� 60HP',fixless:true,
		common: {weight:1,price:4,durability:1,probability:70},
		required: {intellect:8,level:4,greymagicskill:2}
	, upgrade: {
	cureHP60_2: {id:'cureHP60_2',caption:'�������������� ������� 60HP [������]',description:'���������� � ������ ����� ����� ������ 20 �������� �������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:4,durability:1,probability:70},
		required: {intellect:2,level:7,greymagicskill:0}
	}}
	},
	cureHP120: {id:'cureHP120',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ������� 120HP',magic1:'���������',fixless:true,
		common: {weight:1,price:20,durability:5,probability:70},
		required: {intellect:10,level:8,greymagicskill:3,capitalreputation:10000}
	, upgrade: {
	cureHP120_2: {id:'cureHP120_2',caption:'�������������� ������� 120HP [������]',description:'���������� � ������ ����� ����� ������ 50 �������� �������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:4}}}},
		common: {weight:1,price:0.03,durability:1,probability:70},
		required: {intellect:3,level:7,greymagicskill:0,capitalreputation:0}
	}}
	},
	cureHP600: {id:'cureHP600',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������� �������������� �������',fixless:true,
		common: {weight:1,price:40,durability:2,probability:70},
		required: {intellect:15,level:7,greymagicskill:5}
	},

	cureHP900_1: {id:'cureHP900_1',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ������� 900HP',fixless:true,
		common: {weight:1,eprice:'0.50/1.00/1.50/3/7/18/36/55/75',durability:'1/2/3/5/10/25/50/75/100',probability:99},
		required: {level:7}
	},
	cureHP1200_1: {id:'cureHP1200_1',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ������� 1200HP',fixless:true,
		common: {weight:1,eprice:'0.75/1.50/2.25/4.50/10.50/27/54/75/110',durability:'1/2/3/5/10/25/50/75/100',probability:99},
		required: {level:9}
	},
	cureHP1500_1: {id:'cureHP1500_1',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ������� 1500HP',fixless:true,
		common: {weight:1,eprice:'1/2/3/6/14/36/72/110/145',durability:'1/2/3/5/10/25/50/75/100',probability:99},
		required: {level:11}
	},
 	spell_luck_300_1: {id:'spell_luck_300_1',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'Precious Luck',description:'�����: +300',fixless:true,
		common: {weight:1,eprice:29.95,durability:1},
		required: {level:8},
  modify: {}
	},
 	spell_luck_300_100: {id:'spell_luck_300_100',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'Precious Luck',description:'�����: +300',fixless:true,
		common: {weight:1,eprice:1699.95,durability:100},
		required: {level:8}
	},

	note: {id:'note',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������� ������������',fixless:true,
		common: {weight:1,price:20,durability:10,probability:99},
		required: {intellect:5,level:6}
	},
	submission: {id:'submission',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'����������',magic1:'����������',fixless:true,alignment:'light',
		common: {weight:1,price:10,durability:2,probability:70},
		required: {intellect:3,level:5,lightmagicskill:2}
	},
	nature_burn: {id:'nature_burn',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'���� ������',fixless:true,
		common: {weight:1,price:3,durability:3,probability:70},
		required: {intellect:1,firemagicskill:1,watermagicskill:1,airmagicskill:1,earthmagicskill:1}
	},

	preservation: {id:'preservation',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������',fixless:true,
		common: {weight:1,price:49,durability:2,probability:70,timeout:'2 ���.'},
		required: {intellect:15,level:4,lightmagicskill:4}
	, upgrade: {
	preservation: {id:'preservation',caption:'�������� [1]',description:'�������� � ��������� �������� Angels City',
		common: {weight:1,price:30,durability:1,probability:70,timeout:'2 ���.',intermediatecast:'yes'},
		required: {intellect:5,level:8,lightmagicskill:0}
	}}
	},
	reanimationL: {id:'reanimationL',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�����������',fixless:true,
		common: {weight:1,price:49,durability:2,probability:70,timeout:'2 ���.'},
		required: {intellect:15,level:7,lightmagicskill:5}
	},
	preservationD: {id:'preservationD',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������� ������',fixless:true,
		common: {weight:1,price:49,durability:2,probability:70,timeout:'2 ���.'},
		required: {intellect:15,level:4,darkmagicskill:4}
	},
	reanimation: {id:'reanimation',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'���������� ������',fixless:true,
		common: {weight:1,price:49,durability:2,probability:70,timeout:'2 ���.'},
		required: {intellect:15,level:7,darkmagicskill:5}
	, upgrade: {
	reanimation_olditem: {id:'reanimation_olditem',caption:'������� ������� �������',old:true,
		required: {intellect:15,level:4,darkmagicskill:3}
	}}
	},
	closesphere: {id:'closesphere',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'����� ���������������',adjustment:true,artefact:true,
		common: {price:200,weight:1,durability:1,probability:30},
		required: {intellect:20,wisdom:3,level:7}
	},
	dispell: {id:'dispell',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'����������� �����',fixless:true,
		common: {weight:1,price:15,durability:1,probability:70},
		required: {intellect:30,level:7,greymagicskill:5,mana:200,wisdom:30}
	},
	retreat: {id:'retreat',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'����� �� ���',magic1:'�������',fixless:true,
		common: {weight:1,eprice:100,durability:1,probability:99},
		required: {level:7}
	},
	spell_death: {id:'spell_death',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ ������',description:'����� ���� ������������ �� ����� ��� ����� 10 ����� ����� ������ ��������, � �� ���� ���� � 10 �����.',fixless:true,
		common: {weight:1,price:1,durability:20,probability:99}
	},
	joke_battlelog: {id:'joke_battlelog',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�����',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:3,probability:99}
	},
	elementalcrit: {id:'elementalcrit',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ �������� �����',description:'��������� ��������� ���� ��� ������� ���������� ����� � ����������� ��������, �� �� ��������� 5 ���� ����.',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70},
		required: {intellect:40,level:7,greymagicskill:3,mana:500}
	, upgrade: {
	elementalcrit_2: {id:'elementalcrit_2',caption:'������ �������� ����� [������]',description:'���������� � ������ ����� ����� ������ 20 �������� �������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:0.02,durability:1},
		required: {intellect:3,level:7,mana:50,greymagicskill:0}
	}}
	},
	staff_enc8: {id:'staff_enc8',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ ����� [5]',fixless:true,
		common: {weight:1,price:10,durability:5,probability:70,intermediatecast:'yes'},
		required: {intellect:30,level:8,earthmagicskill:10,mana:150}
	},
	snowball1: {id:'snowball1',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������',description:'�������� ����� �����',fixless:true,
		common: {weight:1,price:0,durability:1,intermediatecast:'yes'},
		required: {level:2}
	},
	spell_seduct: {id:'spell_seduct',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'����������',description:'�����, ���������� � ����� ����������, ���������� ��������������',fixless:true
	},
	bot_magic_boost_art: {id:'bot_magic_boost_art',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'���� �����',description:'�����, ���������� � ��������� �����',fixless:true
	},
	cureMana50: {id:'cureMana50',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ���� 50��',fixless:true,
		common: {weight:1,price:2,durability:1,probability:70,intermediatecast:'yes'},
		required: {intellect:25,level:4,greymagicskill:1}
	, upgrade: {
	cureMana50_2: {id:'cureMana50_2',caption:'�������������� ���� 50�� [������]',description:'���������� � ������ ����� ����� ������ 1 ��������� ������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:1}}}},
		common: {weight:1,price:0.01,durability:1,intermediatecast:'yes'},
		required: {level:7,intellect:1}
	}}
	},
	cureMana100: {id:'cureMana100',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������������� ���� 100��',fixless:true,
		common: {weight:1,price:4,durability:1,probability:70,intermediatecast:'yes'},
		required: {intellect:35,level:4,greymagicskill:2}
	, upgrade: {
	cureMana100_2: {id:'cureMana100_2',caption:'�������������� ���� 100�� [������]',description:'���������� � ������ ����� ����� ������ 1 ��������� ������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:0.02,durability:1,intermediatecast:'yes'},
		required: {intellect:2,level:7,greymagicskill:0}
	}}
	},
	cureMana1000: {id:'cureMana1000',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������� �������������� ����',fixless:true,
		common: {weight:1,price:40,durability:2,probability:70},
		required: {intellect:50,level:7,greymagicskill:5}
	},

	invoke_create_lesserbloodstone: {id:'invoke_create_lesserbloodstone',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������� ����',description:'�������� � ������ �����',fixless:true
	},
	invoke_create_bloodstone: {id:'invoke_create_bloodstone',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������� �����',description:'�������� � ������ ������',fixless:true
	},
	spell_powerup10: {id:'spell_powerup10',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'����������',fixless:true,
		common: {weight:1,price:15,durability:4,probability:70,duration:60},
		required: {intellect:45,level:8,greymagicskill:5,wisdom:45}
	, upgrade: {
	spell_powerup10_2: {id:'spell_powerup10_2',description:'���������� � ������ ����� ����� ������ 20 �������� �������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:0.02,durability:1,duration:60},
		required: {intellect:2,level:7,greymagicskill:0,wisdom:0}
	}}
	},
	spell_powerup1: {id:'spell_powerup1',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'�������� ��������',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70,duration:60},
		required: {intellect:30,level:7,firemagicskill:5,wisdom:30}
	},
	spell_powerup3: {id:'spell_powerup3',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'���������� ��������',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70,duration:60},
		required: {intellect:30,level:7,airmagicskill:5,wisdom:30}
	},
	zma_spell: {id:'zma_spell',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'���������� ��������',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70,duration:60},
		required: {intellect:30,level:7,airmagicskill:5,wisdom:30}
	},
	spell_powerup2: {id:'spell_powerup2',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ ��������',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70,duration:60},
		required: {intellect:30,level:7,watermagicskill:5,wisdom:30}
	},
	spell_powerup4: {id:'spell_powerup4',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ ��������',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70,duration:60},
		required: {intellect:30,level:7,earthmagicskill:5,wisdom:30}
	},
	spell_protect10: {id:'spell_protect10',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ �� ������',fixless:true,
		common: {weight:1,price:15,durability:4,probability:70,duration:60},
		required: {intellect:9,level:7}
	},
	spell_protect1: {id:'spell_protect1',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ �� ����',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70,duration:60},
		required: {intellect:9,level:7}
	},
	spell_protect2: {id:'spell_protect2',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ �� ����',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70,duration:60},
		required: {intellect:9,level:7}
	},
	spell_protect3: {id:'spell_protect3',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ �� �������',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70,duration:60},
		required: {intellect:9,level:7}
	},
	spell_protect4: {id:'spell_protect4',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'������ �� �����',fixless:true,
		common: {weight:1,price:10,durability:4,probability:70,duration:60},
		required: {intellect:9,level:7}
	},
	spell_undamage10: {id:'spell_undamage10',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������',fixless:true,
		common: {weight:1,price:10,durability:10,probability:70,duration:60},
		required: {intellect:9,level:8}
	},
	spell_unprotect10: {id:'spell_unprotect10',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'���������� ������',fixless:true,
		common: {weight:1,price:10,durability:10,probability:70,duration:60},
		required: {intellect:9,level:8}
	, upgrade: {
	spell_unprotect10_2: {id:'spell_unprotect10_2',description:'���������� � ������ ����� ����� ������ 1 ��������� ������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:0.02,durability:4,duration:60,intermediatecast:'yes'},
		required: {intellect:2,level:7,darkmagicskill:0,mana:0,wisdom:0}
	}}
	},
	spell_unprotect: {id:'spell_unprotect',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'���������� �������',fixless:true,
		common: {weight:1,price:10,durability:10,probability:70,timeout:'1 �.  0 ���.',intermediatecast:'yes',duration:60},
		required: {intellect:40,level:8,darkmagicskill:5,mana:350,wisdom:40}
	, upgrade: {
	spell_unprotect_2: {id:'spell_unprotect_2',description:'���������� � ������ ����� ����� ������ 20 �������� �������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:2}}}},
		common: {weight:1,price:0.02,durability:4,duration:60,intermediatecast:'yes'},
		required: {intellect:2,level:7,darkmagicskill:0,mana:0,wisdom:0}
	}}
	},
	spell_ug_unp10c: {id:'spell_ug_unp10c',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������� ����������',magic1:'���������',fixless:true,clist:{_:{mater26:{id:'mater26',caption:'�������� ������������',count:1},mater28:{id:'mater28',caption:'�������� �����',count:1},mater24:{id:'mater24',caption:'���������',count:1}}},
		common: {weight:1,price:10,durability:1,duration:360},
		modify: {defence:-100}
	},
	spell_ug_undam1c: {id:'spell_ug_undam1c',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������� ���������� ����',magic1:'���������',fixless:true,clist:{_:{mater11:{id:'mater11',caption:'���� ������ �����',count:1},mater14:{id:'mater14',caption:'������� �����',count:1},mater17:{id:'mater17',caption:'���� �������� ������',count:1},mater18:{id:'mater18',caption:'������������ ������',count:1},mater29:{id:'mater29',caption:'�������� �����',count:1}}},
		common: {weight:1,price:10,durability:1,duration:360},
		modify: {firemagicpower:-20}
	},
	spell_ug_undam2c: {id:'spell_ug_undam2c',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������� ����������� ����',magic1:'���������',fixless:true,clist:{_:{mater10:{id:'mater10',caption:'���� �������� ������',count:1},mater16:{id:'mater16',caption:'��������� ������',count:1},mater18:{id:'mater18',caption:'������������ ������',count:1},mater19:{id:'mater19',caption:'�������� ������',count:1},mater27:{id:'mater27',caption:'������ ���������� ������',count:1}}},
		common: {weight:1,price:10,durability:1,duration:360},
		modify: {watermagicpower:-20}
	},
	spell_ug_undam3c: {id:'spell_ug_undam3c',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������� ���������� �����',magic1:'���������',fixless:true,clist:{_:{mater12:{id:'mater12',caption:'�����',count:1},mater15:{id:'mater15',caption:'������� �������',count:1},mater17:{id:'mater17',caption:'���� �������� ������',count:1},mater18:{id:'mater18',caption:'������������ ������',count:1},mater30:{id:'mater30',caption:'����� ���',count:1}}},
		common: {weight:1,price:10,durability:1,duration:360},
		modify: {airmagicpower:-20}
	},
	spell_ug_undam4c: {id:'spell_ug_undam4c',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������� ��������� �����',magic1:'���������',fixless:true,clist:{_:{mater25:{id:'mater25',caption:'�������� ������ �������',count:1},mater26:{id:'mater26',caption:'�������� ������������',count:1}}},
		common: {weight:1,price:10,durability:1,duration:360},
		modify: {earthmagicpower:-20}
	},
	spell_ug_unexprc: {id:'spell_ug_unexprc',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'��������� ������� ��������',magic1:'���������',fixless:true,clist:{_:{mater26:{id:'mater26',caption:'�������� ������������',count:1},mater28:{id:'mater28',caption:'�������� �����',count:1},mater24:{id:'mater24',caption:'���������',count:1}}},
		common: {weight:1,price:10,durability:1,duration:360},
		modify: {manaconsumption:-10}
	},
	dispell1: {id:'dispell1',category:'combatscrolls',slot:'w100',width:40,height:25,caption:'����� ���������',fixless:true,
		common: {weight:1,price:10,durability:1,probability:99}
	},










	abook1: {id:'abook1',category:'books',slot:'wbook',width:40,height:25,caption:'��������� ����� ������',description:'������ �������� ���� ����� ��������� ��������� �������� +1 <img width=8 height=8 src=http://img.combats.com/i/misc/micro/hit.gif> <img width=7 height=8 src=http://img.combats.com/i/misc/micro/krit.gif> <img width=8 height=8 src=http://img.combats.com/i/misc/micro/counter.gif> <img width=8 height=8 src=http://img.combats.com/i/misc/micro/block.gif> <img width=8 height=8 src=http://img.combats.com/i/misc/micro/parry.gif><br/>������ ���� ����� ����� �������������� ������������.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {abook1_reg:{id:'abook1_reg',caption:'��������� ���������',count:1}}}},
		common: {weight:1,price:15,pages:50,expirationdate:360,timeout:'3 ���.',intermediatecast:'yes'},
		modify: {intellect:1,hitpoints:10}
	},
	abook2: {id:'abook2',category:'books',slot:'wbook',width:40,height:25,caption:'���������� ����� ������',description:'�������� ���� ����� �������� �������� ��������� �� ���������� �����.<br/>������ ���� ����� ����� �������������� ������������.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {abook2_reg:{id:'abook2_reg',caption:'���������� ���������',count:1}}}},
		common: {weight:1,price:30,pages:75,expirationdate:360},
		modify: {intellect:2,hitpoints:20}
	},
	abook3: {id:'abook3',category:'books',slot:'wbook',width:40,height:25,caption:'������� ����� ������',description:'�������� ���� ����� ������ ������� ����� ���������� � �����.<br/>�� ������ ���������� �������, ������� ������� ��� �������� ���������<br/>������ ���� ����� ����� �������������� ������������.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {abook3_reg:{id:'abook3_reg',caption:'������� ���������',count:1}}}},
		common: {weight:1,price:100,pages:100,expirationdate:360,timeout:'3 �.  0 ���.',intermediatecast:'yes'},
		modify: {criticalpower:1,parry:1,shieldblock:1,magicdefencereduce:1,counterstroke:1,magicpower:1,power:1,intellect:3,hitpoints:30,piercearmor:1,manaconsumption:1}
	},
	booklearn_1: {id:'booklearn_1',category:'books',slot:'wbook',width:40,height:25,caption:'�������� ����� (�����)',description:'� ���������� �������� ������������ ���� ��������� ������� ������ ����������� ������',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {pet_food_cat20_6:{id:'pet_food_cat20_6',caption:'������ �������',count:5}}}},
		common: {weight:1,price:22.5,durability:1,maxitems:1},
		required: {intuition:25,level:6}
	},
	booklearn_2: {id:'booklearn_2',category:'books',slot:'wbook',width:40,height:25,caption:'������������� (�����)',description:'���������� �������� ��� ������������ �� �������� ������� ����� �������� �����������',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {knife63:{id:'knife63',caption:'��� ���������',count:1},sword53:{id:'sword53',caption:'��� �������',count:1}}}},
		common: {weight:1,price:15,durability:1,maxitems:1},
		required: {intuition:25,level:7}
	},
	booklearn_3: {id:'booklearn_3',category:'books',slot:'wbook',width:40,height:25,caption:'�������� (�����)',description:'� ���������� ��������������, ��� �������� ������� �������.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {dispell:{id:'dispell',caption:'����������� �����',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {level:7,endurance:25,strength:25}
	},
	booklearn_4: {id:'booklearn_4',category:'books',slot:'wbook',width:40,height:25,caption:'������ (�����)',description:'� ���������� ��������������, ��� �������� ��������� ��������� �������.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {cureHP60:{id:'cureHP60',caption:'�������������� ������� 60HP',count:2}}}},
		common: {weight:1,price:27,durability:1,maxitems:1},
		required: {level:7,endurance:30}
	},
	booklearn_5: {id:'booklearn_5',category:'books',slot:'wbook',width:40,height:25,caption:'������������ (�����)',description:'� ���������� ��������������, ��� ����� � ������� ��������� ����� ��������� ���� �� ����� ������.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {pot_base_200_allmag2:{id:'pot_base_200_allmag2',caption:'������� ����� ���������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {dexterity:30,level:7,endurance:20}
	},
	booklearn_6: {id:'booklearn_6',category:'books',slot:'wbook',width:40,height:25,caption:'���������� ������ (�����)',description:'� ���������� ��������������, ��� ��������� ������� ����� ��������� ���� �� ����� ������.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater21:{id:'mater21',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {level:7,endurance:25}
	},
	booklearn_7: {id:'booklearn_7',category:'books',slot:'wbook',width:40,height:25,caption:'��������� ����� (�����)',description:'� ���������� ��������������, �� ���������� ���� ������ �� �������� �����.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater31:{id:'mater31',caption:'�������� ���������� �����',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {level:7,strength:25}
	},
	booklearn_8: {id:'booklearn_8',category:'books',slot:'wbook',width:40,height:25,caption:'����� ����� (�����)',description:'����� ������������, ��� ����� ������� ������ �����.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater28:{id:'mater28',caption:'�������� �����',count:3}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intuition:25,level:7}
	},
	booklearn_9: {id:'booklearn_9',category:'books',slot:'wbook',width:40,height:25,caption:'������� ������ (�����)',description:'����� � ����������� ����� � �����.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater22:{id:'mater22',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {dexterity:25,level:7}
	},
	booklearn_10: {id:'booklearn_10',category:'books',slot:'wbook',width:40,height:25,caption:'��������� (�����)',description:'� ���������� ��������������, ��� ��������� �����, ���������� ���� ������.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater30:{id:'mater30',caption:'����� ���',count:3}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {level:7,endurance:25}
	},
	booklearn_spell1: {id:'booklearn_spell1',category:'books',slot:'wbook',width:40,height:25,caption:'�������� ���� (����������)',description:'� ���������� ��������������, ��� ������������ ����� ���� � ������� ����.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater23:{id:'mater23',caption:'�������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,firemagicskill:7}
	},
	booklearn_spell4: {id:'booklearn_spell4',category:'books',slot:'wbook',width:40,height:25,caption:'���� (����������)',description:'� ���������� ��������������, ��� ������ ����� ���� �������� ���� �� ����� .',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater21:{id:'mater21',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,watermagicskill:7}
	},
	booklearn_spell7: {id:'booklearn_spell7',category:'books',slot:'wbook',width:40,height:25,caption:'�������� ���� (����������)',description:'� ���������� ��������������, ��� �������� �������� ����� ��� ������ ����� �����.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater26:{id:'mater26',caption:'�������� ������������',count:3}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,earthmagicskill:7}
	},
	booklearn_spell2: {id:'booklearn_spell2',category:'books',slot:'wbook',width:40,height:25,caption:'������ ����� (����������)',description:'��� �������� ���� �� �����������? 10% ���������� ����� - ����� ��� ����?<br/>������ �� �������� ������� �� ������� ������ � ���� � �����!',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater22:{id:'mater22',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,lightmagicskill:4}
	},
	booklearn_spell3: {id:'booklearn_spell3',category:'books',slot:'wbook',width:40,height:25,caption:'���� �� ���� (����������)',description:'�������� ������: ������������ ������ �������� �����.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater24:{id:'mater24',caption:'���������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,darkmagicskill:4}
	},
	booklearn_spell5: {id:'booklearn_spell5',category:'books',slot:'wbook',width:40,height:25,caption:'����� ���������� (����������)',description:'�...������ ���� ����� ������� - ����� �����, ���������� � ���� ���<br/>������� ����������: <B>����� ����������</B>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:3}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,greymagicskill:4}
	},
	booklearn_spell10: {id:'booklearn_spell10',category:'books',slot:'wbook',width:40,height:25,caption:'�������� (����������)',description:'<i>���� ��������� �������� ���������� ������� +100 ��. �������� ����� ����. ���� ����� �� ��������� �������� ����.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:3}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,firemagicskill:7}
	},
	booklearn_spell13: {id:'booklearn_spell13',category:'books',slot:'wbook',width:40,height:25,caption:'������ ���� (����������)',description:'<i>�� ������� 10%HP, �� ���������������� 20% ����.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:30,level:7,firemagicskill:7}
	},
	booklearn_spell9: {id:'booklearn_spell9',category:'books',slot:'wbook',width:40,height:25,caption:'�������� ����� (����������)',description:'<i>������������ ������� ������ �������� <B>���������� �����</B> �� ����. <br>���� � ��� 4 ��������� ���� �������� 33% ����������� ����� <B>����������� �������</B> ������ ����</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,firemagicskill:7}
	},
	booklearn_spell8: {id:'booklearn_spell8',category:'books',slot:'wbook',width:40,height:25,caption:'�������� ������ (����������)',description:'<i>������������ ������� ������ �������� <B>���������� �����</B> �� ����, ���� �� ������� ����� ����� 33%. <br>���� �������� 125% ����������� ����� <B>����������� �������</B></i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,firemagicskill:7}
	},
	booklearn_spell14: {id:'booklearn_spell14',category:'books',slot:'wbook',width:40,height:25,caption:'���� ������� (����������)',description:'<i>������� ���� 5% ����� ������ ���� �� �� ������������� ������ �����. <br>� ��� +2% �� ������ ������� <B>���� ����</B>. <br>������������ ���� ���������� ���������. ����������  �� ������� ����������� ����.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:2}}}},
		common: {weight:1,price:25,durability:1,maxitems:1},
		required: {intellect:35,level:8,firemagicskill:8}
	},
	booklearn_spell12: {id:'booklearn_spell12',category:'books',slot:'wbook',width:40,height:25,caption:'������� ����� (����������)',description:'<i>���� ������� ����� ����� ���� 33%, �� ��� ������������� ������� ������� �������� �� ����������� ����� ����. <br>���� ��� �� ���.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:2}}}},
		common: {weight:1,price:25,durability:1,maxitems:1},
		required: {intellect:35,level:8,firemagicskill:8}
	},
	booklearn_spell11: {id:'booklearn_spell11',category:'books',slot:'wbook',width:40,height:25,caption:'�������� ��� (����������)',description:'<i>�� ��������� �� 50% ������ ����� 2 ����������� �������, ���������� ���� ��������������� ���� ����. <br>���� ����� �� ��������� �������� ����.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:2}}}},
		common: {weight:1,price:25,durability:1,maxitems:1},
		required: {intellect:35,level:8,firemagicskill:8}
	},
	booklearn_spell16: {id:'booklearn_spell16',category:'books',slot:'wbook',width:40,height:25,caption:'������ ���� (����������)',description:'<i>����� 2 ���� ���� ������ ����������� ������������ ������ ��� �������� ���� ������� �� 3 ����.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,watermagicskill:7}
	},
	booklearn_spell17: {id:'booklearn_spell17',category:'books',slot:'wbook',width:40,height:25,caption:'������ ���� (����������)',description:'<i>��� ������ 10% ����� �� 5 �����, �� ���� ���� �������� ������� �� 30%.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,watermagicskill:7}
	},
	booklearn_spell19: {id:'booklearn_spell19',category:'books',slot:'wbook',width:40,height:25,caption:'�����������: ������� (����������)',description:'<i>������� ������� ���� ������������ <B>����������</B> ���� ������ ����. <br>������� �������������� ����, ���� ������� ����� ���� ������ �������������</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,watermagicskill:7}
	},
	booklearn_spell21: {id:'booklearn_spell21',category:'books',slot:'wbook',width:40,height:25,caption:'������ ����� (����������)',description:'<i>������� ���� ������� ����</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,watermagicskill:7}
	},
	booklearn_spell15: {id:'booklearn_spell15',category:'books',slot:'wbook',width:40,height:25,caption:'�������������� (����������)',description:'<i>��������� ������� ���� ���� ������ ������ ���� ����, �� �� ����� �������������. ������� ���� � �������� ����.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:2}}}},
		common: {weight:1,price:25,durability:1,maxitems:1},
		required: {intellect:35,level:8,watermagicskill:8}
	},
	booklearn_spell18: {id:'booklearn_spell18',category:'books',slot:'wbook',width:40,height:25,caption:'���� ���� (����������)',description:'<i>�� ��� ���� ����������� ��. �������� ����� ���� �� 15. ����� ������ ������� ����� ������ ����, ��������������� ����</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:2}}}},
		common: {weight:1,price:25,durability:1,maxitems:1},
		required: {intellect:35,level:8,watermagicskill:8}
	},
	booklearn_spell20: {id:'booklearn_spell20',category:'books',slot:'wbook',width:40,height:25,caption:'������� �������� (����������)',description:'<i>��������� ������������� ������������, ������� ����, �� ������� ���� ���� ����������� 5 �����</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:2}}}},
		common: {weight:1,price:25,durability:1,maxitems:1},
		required: {intellect:35,level:8,watermagicskill:8}
	},
	booklearn_spell22: {id:'booklearn_spell22',category:'books',slot:'wbook',width:40,height:25,caption:'������� ������ (����������)',description:'<i>��� ������������� ������� ������� �������� �� ����������� ����� ����.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:2}}}},
		common: {weight:1,price:25,durability:1,maxitems:1},
		required: {intellect:35,level:8,watermagicskill:8}
	},
	booklearn_spell23: {id:'booklearn_spell23',category:'books',slot:'wbook',width:40,height:25,caption:'������� ���� (����������)',description:'<i>������� ���� ���������� ������ ����� ��� ����������.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:2}}}},
		common: {weight:1,price:25,durability:1,maxitems:1},
		required: {intellect:35,level:8,watermagicskill:8}
	},
	booklearn_spell24: {id:'booklearn_spell24',category:'books',slot:'wbook',width:40,height:25,caption:'�������������� (����������)',description:'<i>��������� ������� ������� �� ���� �� 10%. ����� ��������� �� ���� ���� �� 5 ���.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:3}}}},
		common: {weight:1,price:45,durability:1,maxitems:1},
		required: {intellect:75,level:9,watermagicskill:9}
	},
	booklearn_spell28: {id:'booklearn_spell28',category:'books',slot:'wbook',width:40,height:25,caption:'������ ������� (����������)',description:'<i>��� �������� 25 ��. �������� ����� ������� �� 4 ����.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:1}}}},
		common: {weight:1,price:20,durability:1,maxitems:1},
		required: {intellect:25,level:7,airmagicskill:7}
	},
	booklearn_spell29: {id:'booklearn_spell29',category:'books',slot:'wbook',width:40,height:25,caption:'�������� ������ (����������)',description:'<i>����� ��������� ����� �� ������ ����.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:2}}}},
		common: {weight:1,price:30,durability:1,maxitems:1},
		required: {intellect:60,level:8,airmagicskill:8}
	},
	booklearn_spell25: {id:'booklearn_spell25',category:'books',slot:'wbook',width:40,height:25,caption:'����� (����������)',description:'<i>��������� ������� ���������� ���� 1-79 ����� �������� ��� �������� �������������</i>',fixless:true,binding:'bop',
		common: {weight:1,price:50,durability:1,maxitems:1},
		required: {intellect:60,level:8,airmagicskill:8}
	},
	booklearn_spell27: {id:'booklearn_spell27',category:'books',slot:'wbook',width:40,height:25,caption:'��������� ��� (����������)',description:'<i>������� ��������� ����� ������ ����, ��������� ��������� 1-0 ��. �����.<br/>���� ����� �� ��������� �������� ����.<br/>����� �������� � ����������� <B>������� ����</B>.</i>',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:5}}}},
		common: {weight:1,price:10,durability:1,maxitems:1},
		required: {intellect:80,level:9,airmagicskill:9}
	},
	booklearn_slot7: {id:'booklearn_slot7',category:'books',slot:'wbook',width:40,height:25,caption:'������ ������ (��� 1)',description:'��������� +1 �������������� ���� ��� �������. ������ ��� ����� ���� ����������� ���� ���� ���.',fixless:true,binding:'bop',
		common: {weight:1,price:120,durability:1,maxitems:1},
		required: {level:7}
	},
	booklearn_slot8: {id:'booklearn_slot8',category:'books',slot:'wbook',width:40,height:25,caption:'������ ������ (��� 2)',description:'��������� +1 �������������� ���� ��� �������. <br>������ ��� ����� ���� ����������� ���� ���� ���. <br>��� �������� ��������� ������ ������� ����.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:15}}}},
		common: {weight:1,price:200,durability:1,maxitems:1},
		required: {level:8}
	},
	booklearn_slot9: {id:'booklearn_slot9',category:'books',slot:'wbook',width:40,height:25,caption:'������ ������ (��� 3)',description:'��������� +1 �������������� ���� ��� �������. <br>������ ��� ����� ���� ����������� ���� ���� ���. <br>��� �������� ��������� ������ ������� ����.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater27:{id:'mater27',caption:'������ ���������� ������',count:3},mater26:{id:'mater26',caption:'�������� ������������',count:3},mater28:{id:'mater28',caption:'�������� �����',count:3},mater29:{id:'mater29',caption:'�������� �����',count:3},mater25:{id:'mater25',caption:'�������� ������ �������',count:3},mater30:{id:'mater30',caption:'����� ���',count:3}}}},
		common: {weight:1,price:300,durability:1,maxitems:1},
		required: {level:9}
	},
	booklearn_slot10: {id:'booklearn_slot10',category:'books',slot:'wbook',width:40,height:25,caption:'������ ������ (��� 4)',description:'��������� +1 �������������� ���� ��� �������. <br>������ ��� ����� ���� ����������� ���� ���� ���. <br>��� �������� ��������� ������ �������� ����.',fixless:true,binding:'bop',requireditems:{bshop:{exchanger:'bshop', items: {mater24:{id:'mater24',caption:'���������',count:5},mater22:{id:'mater22',caption:'�������� �������',count:5},mater21:{id:'mater21',caption:'�������� �������',count:5},mater20:{id:'mater20',caption:'�������� ������� �����',count:5},mater31:{id:'mater31',caption:'�������� ���������� �����',count:5},mater23:{id:'mater23',caption:'�������',count:5}}}},
		common: {weight:1,price:500,durability:1,maxitems:1},
		required: {level:10}
	},
 	booklearn_slot11: {id:'booklearn_slot11',category:'books',slot:'wbook',width:40,height:25,caption:'������ ������ (��������� ���)',description:'��������� +2 �������������� ����� ��� �������. <br>������ ��� ����� ���� ����������� ���� ���� ���.',fixless:true,binding:'bop',
		common: {weight:1,eprice:3500,durability:1,maxitems:1},
		required: {level:4}
	},

	booklearn_slot21: {id:'booklearn_slot21',category:'books',slot:'wbook',width:40,height:25,caption:'��������� ������ (Capitalcity)',description:'��������� +1 �������������� ���� ��� �������. <br>������ ��� ����� ���� ����������� ���� ���� ���.',fixless:true,binding:'bop',
		common: {weight:1,price:150,durability:1},
		required: {level:8,capitalreputation:10000}
	},
	booklearn_slot22: {id:'booklearn_slot22',category:'books',slot:'wbook',width:40,height:25,caption:'��������� ������ (Angelscity)',description:'��������� +1 �������������� ���� ��� �������. <br>������ ��� ����� ���� ����������� ���� ���� ���.',fixless:true,binding:'bop',
		common: {weight:1,price:150,durability:1},
		required: {level:8,angelsreputation:10000}
	},
	booklearn_slot23: {id:'booklearn_slot23',category:'books',slot:'wbook',width:40,height:25,caption:'��������� ������ (Demonscity)',description:'��������� +1 �������������� ���� ��� �������. <br>������ ��� ����� ���� ����������� ���� ���� ���.',fixless:true,binding:'bop',
		common: {weight:1,price:150,durability:1},
		required: {level:8,demonsreputation:10000}
	},
	booklearn_slot27: {id:'booklearn_slot27',category:'books',slot:'wbook',width:40,height:25,caption:'��������� ������ (Sandcity)',description:'��������� +1 �������������� ���� ��� �������. <br>������ ��� ����� ���� ����������� ���� ���� ���.',fixless:true,binding:'bop',
		common: {weight:1,price:150,durability:1},
		required: {level:8,sandreputation:10000}
	},


//�������
	invoke_kar1_heal10: {id:'invoke_kar1_heal10',category:'carmanitems',slot:'w14',width:40,height:20,caption:'�������� �����',description:'��������������� 10% �� ���������� HP',
		common: {weight:1,price:2.5,durability:1,intermediatecast:'yes'},
		required: {level:4}
	},
	invoke_kar2_mana10: {id:'invoke_kar2_mana10',category:'carmanitems',slot:'w14',width:40,height:20,caption:'����� ����',description:'��������������� 100 ��. ����',
		common: {weight:1,price:2.5,durability:1,intermediatecast:'yes'},
		required: {level:4}
	},
	invoke_kar3_basil: {id:'invoke_kar3_basil',category:'carmanitems',slot:'w14',width:40,height:20,caption:'����� ���������',description:'����������� ������ �� ����� �� 200. ��������� ���� �����.',
		common: {weight:1,price:2.5,durability:1,expirationdate:14,intermediatecast:'yes'},
		required: {level:4},
  modify: {magicdefence:200}
	},
	invoke_kar3_potpg: {id:'invoke_kar3_potpg',category:'carmanitems',slot:'w14',width:40,height:20,caption:'����� ������ ��',description:'����������� ������ �� ����� �� 200. ��������� ���� �����.',
		common: {weight:1,price:2.5,durability:1,expirationdate:14,intermediatecast:'yes'},
		required: {level:4},
  modify: {defence:200}
	},
	invoke_kar3_lifew: {id:'invoke_kar3_lifew',category:'carmanitems',slot:'w14',width:40,height:20,caption:'����� ����',description:'��������������� 10HP ������ ���, � ������� ������ �����.',
		common: {weight:1,price:2.5,durability:1,expirationdate:14,intermediatecast:'yes'},
		required: {level:4}
	},
	invoke_kar3_dust: {id:'invoke_kar3_dust',category:'carmanitems',slot:'w14',width:40,height:20,caption:'������� ����',description:'����������� �� ������� �� 560. ��������� ���� �����.',
		common: {weight:1,price:2.5,durability:1,expirationdate:14,intermediatecast:'yes'},
		required: {level:4},
  modify: {jumpaway:560}
	},
	invoke_kar3_mush: {id:'invoke_kar3_mush',category:'carmanitems',slot:'w14',width:40,height:20,caption:'������� �������',description:'����������� �������� ����� � ����� �� 40, �� ��������� ������ �� ������ � �� ����� �� 60. ��������� 7 �����.',
		common: {weight:1,price:2.5,durability:1,expirationdate:14,intermediatecast:'yes'},
		required: {level:4},
  modify: {power:40,magicpower:40,defence:-60,magicdefence:-60}
	},
	invoke_1s_random: {id:'invoke_1s_random',category:'carmanitems',slot:'w14',width:40,height:20,caption:'�������� � ����������',description:'�������� ����� - 1 ���. ���� ��������� ��������, ����� ���� ��� �� ������ ����������, ��� � �� ���. <BR><b>��������� �����:</b><BR>� ���������� <b>"��������� �������!"</b> - ���������� �� ����� ���.<BR>� �������� <b>"������������� �����"</b> - ��������� ���������� ������, ��������� �������������� ����, �� ��������� �����.<BR>� �������� <b>"������ �������"</b> - ������� ������� ���� � ����� ��� ��� ���������� ��������� ���������� �����.<BR>� �������� <b>"�������� ����"</b> - ������� ����, ������ ����� ����������. ��������� 3 ����.<BR>� �������� <b>"����� ����������"</b> - ��������� ����<BR>� ����� <b>"��������� ���������!"</b> - �������� ����� (����: -10, ��������: -10, ��������: -10, ���������: -10).<BR>� ����� <b>"�������������"</b> - ���. ��. �����: +100. ��������� 3 �������.<BR>� ����� <b>"���������"</b> - �����. ��������� 1 ���.<BR>� ����� <b>"�������� ����"</b> - ��� ����.',
		common: {weight:1, durability:10} 
	},







	pot_cureHP100_20: {id:'pot_cureHP100_20',caption:'����� �����',description:'������ �������� ����� ����������������� 100 ������ ��������.',fixless:true,
		common: {weight:5,price:4,durability:10,expirationdate:30}
	},
	pot_cureHP250_20: {id:'pot_cureHP250_20',caption:'������� �����',description:'�������� ������� ����������������� 250 ������ ��������.',fixless:true,
		common: {weight:10,price:10,durability:10,expirationdate:30}
	},
	pot_curemana200_30: {id:'pot_curemana200_30',caption:'����� ����',description:'����� �������� ��������� ����� ����.',fixless:true,
		common: {weight:1,price:4,durability:2,expirationdate:30},
		required: {level:7}
	},
	pot_base_50_regeneration: {id:'pot_base_50_regeneration',caption:'������� ��������������',fixless:true,
		common: {weight:5,price:10,durability:10,expirationdate:15,duration:120},
		modify: {hpspeed:100}
	},
	pot_curemana500_20: {id:'pot_curemana500_20',caption:'������� ����',description:'������� ���� �������� ������������ ���� ������� � ������������, ��� �����.',fixless:true,
		common: {weight:1,price:8,durability:2,expirationdate:15},
		required: {level:7}
	},
	pot_base_50_mana_regen: {id:'pot_base_50_mana_regen',caption:'������� ������',fixless:true,
		common: {weight:5,price:20,durability:5,expirationdate:15,duration:120},
		modify: {manaspeed:100}
	},
	pot_base_50_fireproof: {id:'pot_base_50_fireproof',caption:'������� �������',fixless:true,
		common: {weight:5,price:5,durability:10,expirationdate:30,duration:180},
		required: {level:4},
		modify: {firemagicdefence:50}
	},
	ambrozija: {id:'ambrozija',caption:'�������� ����������� ������',fixless:true,
		common: {weight:5,price:5,durability:10,expirationdate:30,duration:180},
		required: {level:4},
		modify: {hitpoints: 50, anticriticalhit: 100, antijumpaway: 100,defence:50,magicdefence:50}
	},
	pot_base_50_airproof: {id:'pot_base_50_airproof',caption:'������� �����',fixless:true,
		common: {weight:5,price:5,durability:10,expirationdate:30,duration:180},
		required: {level:4},
		modify: {airmagicdefence:50}
	},
	pot_base_50_waterproof: {id:'pot_base_50_waterproof',caption:'������� �����',fixless:true,
		common: {weight:5,price:5,durability:10,expirationdate:30,duration:180},
		required: {level:4},
		modify: {watermagicdefence:50}
	},
	pot_base_50_earthproof: {id:'pot_base_50_earthproof',caption:'������� ������',fixless:true,
		common: {weight:5,price:5,durability:10,expirationdate:30,duration:180},
		required: {level:4},
		modify: {earthmagicdefence:50}
	},
	pot_base_50_magicproof: {id:'pot_base_50_magicproof',caption:'������� ������',fixless:true,
		common: {weight:5,price:20,durability:10,expirationdate:20,duration:120},
		required: {level:7},
		modify: {magicdefence:50}
	},
	pot_base_150_fireproof: {id:'pot_base_150_fireproof',caption:'������� ������',fixless:true,
		common: {weight:5,price:10,durability:10,expirationdate:20,duration:180},
		required: {level:4},
		modify: {firemagicdefence:75}
	},
	pot_base_150_airproof: {id:'pot_base_150_airproof',caption:'������� �������',fixless:true,
		common: {weight:5,price:10,durability:10,expirationdate:20,duration:180},
		required: {level:4},
		modify: {airmagicdefence:75}
	},
	pot_base_150_waterproof: {id:'pot_base_150_waterproof',caption:'������� �������',fixless:true,
		common: {weight:5,price:10,durability:10,expirationdate:20,duration:180},
		required: {level:6},
		modify: {watermagicdefence:75}
	},
	pot_base_150_earthproof: {id:'pot_base_150_earthproof',caption:'������� ����',fixless:true,
		common: {weight:5,price:10,durability:10,expirationdate:20,duration:180},
		required: {level:6},
		modify: {earthmagicdefence:75}
	},
	pot_base_50_rezproof: {id:'pot_base_50_rezproof',caption:'����� ���������� ������',fixless:true,
		common: {weight:5,price:5,durability:10,expirationdate:25,duration:180},
		required: {level:4},
		modify: {cutdefence:50}
	},
	pot_base_50_kolproof: {id:'pot_base_50_kolproof',caption:'����� ���������� ���',fixless:true,
		common: {weight:5,price:5,durability:10,expirationdate:25,duration:180},
		required: {level:4},
		modify: {thrustdefence:50}
	},
	pot_base_50_drobproof: {id:'pot_base_50_drobproof',caption:'����� ������� �������',fixless:true,
		common: {weight:5,price:5,durability:10,expirationdate:25,duration:180},
		required: {level:4},
		modify: {crushdefence:50}
	},
	pot_base_50_rubproof: {id:'pot_base_50_rubproof',caption:'����� ��������� �����',fixless:true,
		common: {weight:5,price:5,durability:10,expirationdate:25,duration:180},
		required: {level:4},
		modify: {sabredefence:50}
	},
	pot_base_50_str: {id:'pot_base_50_str',caption:'����� ����������',fixless:true,
		common: {weight:3,price:5,durability:5,expirationdate:15,duration:360},
		required: {level:4},
		modify: {strength:10}
	},
	pot_base_50_dex: {id:'pot_base_50_dex',caption:'����� ���������������',fixless:true,
		common: {weight:3,price:5,durability:5,expirationdate:15,duration:360},
		required: {level:4},
		modify: {dexterity:10}
	},
	pot_base_50_inst: {id:'pot_base_50_inst',caption:'����� ���������',fixless:true,
		common: {weight:3,price:5,durability:5,expirationdate:15,duration:360},
		required: {level:4},
		modify: {intuition:10}
	},
	pot_base_50_intel: {id:'pot_base_50_intel',caption:'����� ������',fixless:true,
		common: {weight:3,price:5,durability:5,expirationdate:15,duration:360},
		required: {level:4},
		modify: {intellect:10}
	},
	pot_base_50_damageproof: {id:'pot_base_50_damageproof',caption:'������� ������������',fixless:true,
		common: {weight:5,price:20,durability:10,expirationdate:15,duration:180},
		required: {level:4},
		modify: {defence:50}
	},

	pot_base_100_allmag1: {id:'pot_base_100_allmag1',caption:'����� ����� ���������',fixless:true,
		common: {weight:1,price:10,durability:2,expirationdate:15,duration:180},
		required: {level:4},
		modify: {firemagicdefence:50,watermagicdefence:50,airmagicdefence:50,earthmagicdefence:50}
	},
	pot_base_200_allmag2: {id:'pot_base_200_allmag2',caption:'������� ����� ���������',fixless:true,
		common: {weight:5,price:25,durability:5,expirationdate:15,duration:180},
		required: {level:7},
		modify: {magicdefence:50,firemagicdefence:75,watermagicdefence:75,airmagicdefence:75,earthmagicdefence:75}
	},
	pot_base_200_allmag3: {id:'pot_base_200_allmag3',caption:'������ ���������',fixless:true,
		common: {weight:3,price:30,durability:3,expirationdate:15,duration:180},
		required: {level:8},
		modify: {magicdefence:75,firemagicdefence:115,watermagicdefence:115,airmagicdefence:115,earthmagicdefence:115}
	},
	pot_base_200_alldmg2: {id:'pot_base_200_alldmg2',caption:'������� ����� ���������',fixless:true,
		common: {weight:5,price:25,durability:5,expirationdate:20,duration:180},
		required: {level:7},
		modify: {defence:50,thrustdefence:75,sabredefence:75,crushdefence:75,cutdefence:75}
	},
	pot_base_200_alldmg3: {id:'pot_base_200_alldmg3',caption:'������ ������������',fixless:true,
		common: {weight:3,price:30,durability:3,expirationdate:20,duration:180},
		required: {level:8},
		modify: {defence:75,thrustdefence:115,sabredefence:115,crushdefence:115,cutdefence:115}
	},
	pot_cureHP600_50: {id:'pot_cureHP600_50',caption:'������ ������ �����',description:'�������� ����� ����������������� 600 ������ ��������<br>���������� ����������, EmeraldsCity',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:30}
	},
	standart_curse: {id:'standart_curse',caption:'������ �����',description:'���������� ����������, EmeraldsCity',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:15,duration:180},
		required: {level:4},
		modify: {maxdamage:25}
	},
	pot_base_200_bot3: {id:'pot_base_200_bot3',caption:'�������� ��������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:30,duration:180},
		required: {level:4},
		modify: {strength:15}
	},
	pot_base_200_bot2: {id:'pot_base_200_bot2',caption:'�������� ����',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:30,duration:180},
		required: {level:4},
		modify: {dexterity:15}
	},
	pot_base_200_bot1: {id:'pot_base_200_bot1',caption:'�������� �����������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:30,duration:180},
		required: {level:4},
		modify: {intuition:15}
	},
	pot_base_200_bot4: {id:'pot_base_200_bot4',caption:'�������� ������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:30,duration:180},
		required: {level:4},
		modify: {intellect:10}
	},
	lovka20: {id:'lovka20',caption:'������� �������� ������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:30,duration:180},
		required: {level:8},
		modify: {dexterity:25,jumpaway:50}
		
	},
	inte20: {id:'inte20',caption:'������� �������� �������������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:30,duration:180},
		required: {level:8},
		modify: {dexterity:25,jumpaway:50}
		
	},
	sila20: {id:'sila20',caption:'������� �������� ����������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:30,duration:180},
		required: {level:8},
		modify: {dexterity:25,jumpaway:50}
		
	},
	intelekt20: {id:'intelekt20',caption:'������� �������� ������������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:30,duration:180},
		required: {level:8},
		modify: {dexterity:25,jumpaway:50}
		
	},
	pot_base_100_str: {id:'pot_base_100_str',caption:'�������� ���������� ����',description:'���������� ����, Emeralds city',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:15,duration:180},
		required: {level:4},
		modify: {strength:10,dexterity:1}
	},
	pot_base_100_dex: {id:'pot_base_100_dex',caption:'�������� ���������� ��������',description:'���������� ����������, EmeraldsCity',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:15,duration:180},
		required: {level:4},
		modify: {dexterity:10,intuition:3}
	},
	pot_anti_disease_5: {id:'pot_anti_disease_5',caption:'��������� [5]',description:'������� ��� �� ������ ��������',magic1:'���������',fixless:true,
		common: {price:1,durability:3}
	},
	pot_base_0_ny_ele: {id:'pot_base_0_ny_ele',caption:'������� ��������',fixless:true,
		common: {weight:5,price:10,durability:5,expirationdate:30,duration:360},
		modify: {dexterity:5,intuition:5,strength:5}
	},
	pot_base_0_ny1: {id:'pot_base_0_ny1',caption:'-��������-',fixless:true,
		common: {weight:1,price:50,durability:10,expirationdate:30,duration:60},
		modify: {power:15,defence:-50}
	},
	pot_base_0_ny2: {id:'pot_base_0_ny2',caption:'-����� �����-',fixless:true,
		common: {weight:1,price:50,durability:10,expirationdate:30,duration:60},
		modify: {power:-15,defence:50}
	},
	pot_base_0_ny3: {id:'pot_base_0_ny3',caption:'�������� ��������',fixless:true,
		common: {weight:1,price:50,durability:2,expirationdate:30,duration:60},
		modify: {hitpoints:300}
	, upgrade: {
	pot_base_0_ny3_old: {id:'pot_base_0_ny3_old',caption:'-���������� ���-',old:true,fixless:true,
		common: {weight:1,price:50,durability:2,expirationdate:30,duration:60},
		modify: {antijumpaway:-100,jumpaway:-100,strength:15,hitpoints:0}
	}}

	},
	pot_base_200_alldmg2_p1k: {id:'pot_base_200_alldmg2_p1k',caption:'����� �������� ���������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:14,duration:240},
		required: {level:8},
		modify: {defence:50,thrustdefence:100,sabredefence:100,crushdefence:100,cutdefence:100}
	},
	pot_base_200_allmag2_p1k: {id:'pot_base_200_allmag2_p1k',caption:'����� ������ �����',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:14,duration:240},
		required: {level:8},
		modify: {magicdefence:60,firemagicdefence:180,watermagicdefence:180,airmagicdefence:180,earthmagicdefence:180}
	},
	pot_base_1000_str: {id:'pot_base_1000_str',caption:'������� ��� �������',description:'���� ������� - ����� ����� ����� ��������.',fixless:true,
		common: {weight:5,price:1,durability:1,expirationdate:21,duration:360},
		required: {level:8},
		modify: {strength:12}
	},
	pot_base_1000_dex: {id:'pot_base_1000_dex',caption:'������ ��� �������',description:'����������� �������� � ������� �������... ������ �������� ������� ����� ��� ����.',fixless:true,
		common: {weight:5,price:1,durability:1,expirationdate:21,duration:360},
		required: {level:8},
		modify: {dexterity:12}
	},
	pot_base_1000_inst: {id:'pot_base_1000_inst',caption:'���������� ��� �������',description:'������ �������� � ������� ������� ��������� ����... ��� �����, �� ����(����?) �� ������ ������� �������?',fixless:true,
		common: {weight:5,price:1,durability:1,expirationdate:21,duration:360},
		required: {level:8},
		modify: {intuition:12}
	},
	pot_base_50_dex2: {id:'pot_base_50_dex2',caption:'������ ���������������',imp1:true,fixless:true,binding:'bop',
		common: {weight:3,price:25,durability:5,expirationdate:60,duration:360,eprice:5},
		required: {level:7},
		modify: {dexterity:15}
	, upgrade: {
	pot_base_50_dex2_2: {id:'pot_base_50_dex2_2',description:'���������� � ������ ����� ����� ������ 20 �������� �������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:3}}}},
		common: {weight:1,price:1,durability:1,expirationdate:15,duration:360,eprice:0.2},
		required: {level:7},
		modify: {dexterity:15}
	}}

	},
	pot_base_50_str2: {id:'pot_base_50_str2',caption:'������ ����������',imp1:true,fixless:true,binding:'bop',
		common: {weight:3,price:25,durability:5,expirationdate:60,duration:360,eprice:5},
		required: {level:7},
		modify: {strength:15}
	, upgrade: {
	pot_base_50_str2_2: {id:'pot_base_50_str2_2',description:'���������� � ������ ����� ����� ������ 20 �������� �������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:3}}}},
		common: {weight:1,price:1,durability:1,expirationdate:15,duration:360,eprice:0.2},
		required: {level:7},
		modify: {strength:15}
	}}

	},
	pot_base_50_inst2: {id:'pot_base_50_inst2',caption:'������ ���������',imp1:true,fixless:true,binding:'bop',
		common: {weight:3,price:25,durability:5,expirationdate:60,duration:360,eprice:5},
		required: {level:7},
		modify: {intuition:15}
	, upgrade: {
	pot_base_50_inst2_2: {id:'pot_base_50_inst2_2',description:'���������� � ������ ����� ����� ������ 20 �������� �������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:3}}}},
		common: {weight:1,price:1,durability:1,expirationdate:15,duration:360,eprice:0.2},
		required: {level:7},
		modify: {intuition:15}
	}}

	},
	pot_base_50_intel2: {id:'pot_base_50_intel2',caption:'������ ������',imp1:true,fixless:true,binding:'bop',
		common: {weight:3,price:25,durability:5,expirationdate:60,duration:360,eprice:5},
		required: {level:7},
		modify: {intellect:15}
	, upgrade: {
	pot_base_50_intel2_2: {id:'pot_base_50_intel2_2',description:'���������� � ������ ����� ����� ������ 20 �������� �������',requireditems:{baltar:{exchanger:'baltar', items: {mater33:{id:'mater33',caption:'�������� �����',count:3}}}},
		common: {weight:1,price:1,durability:1,expirationdate:15,duration:360,eprice:0.2},
		required: {level:7},
		modify: {intellect:15}
	}}

	},
	pot_base_200_bot_pm1: {id:'pot_base_200_bot_pm1',caption:'������� ���� �������',fixless:true,clist:{_:{pot_base_150_fireproof:{id:'pot_base_150_fireproof',caption:'������� ������',count:1},pot_base_150_airproof:{id:'pot_base_150_airproof',caption:'������� �������',count:1},pot_base_150_waterproof:{id:'pot_base_150_waterproof',caption:'������� �������',count:1},pot_base_150_earthproof:{id:'pot_base_150_earthproof',caption:'������� ����',count:1},mater_shop7:{id:'mater_shop7',caption:'�������� �������',count:5}}},
		common: {weight:1,durability:1,expirationdate:30,duration:180},
		required: {endurance:40},
		modify: {strength:20}
	},
	pot_base_200_bot_pm2: {id:'pot_base_200_bot_pm2',caption:'������ �������� ������',fixless:true,clist:{_:{pot_base_200_bot_pm1:{id:'pot_base_200_bot_pm1',caption:'������� ���� �������',count:10}}},
		common: {weight:1,durability:1,expirationdate:30,duration:180},
		required: {endurance:45},
		modify: {strength:25}
	},
	food_l41: {id:'food_l41',caption:'���� � �����',fixless:true,description:'���������� ������������ ���������',
		common: {weight:1,price:1,durability:4,expirationdate:3,duration:360},
		required: {level:4},
		modify: {hitpoints:30}
	},
	food_l61: {id:'food_l61',caption:'��������� � �����',fixless:true,description:'���������� ������������ ���������',
		common: {weight:1,price:2,durability:4,expirationdate:3,duration:360},
		required: {level:6},
		modify: {hitpoints:60}
	},
	food_l71: {id:'food_l71',caption:'��������',fixless:true,description:'���������� ������������ ���������',
		common: {weight:1,price:3,durability:4,expirationdate:3,duration:720},
		required: {level:7},
		modify: {hitpoints:75}
	},
	food_l8: {id:'food_l8',caption:'��������� -������� ������-',fixless:true,description:'���������� ������������ ���������',
		common: {weight:1,price:4,durability:4,expirationdate:3,duration:720},
		required: {level:8},
		modify: {hitpoints:90}
	},
	food_8m1: {id:'food_8m1',caption:'�������',fixless:true,
		common: {weight:1,price:12,durability:24,expirationdate:30,duration:720},
		required: {sex:'female',level:4},
		modify: {hitpoints:12}
	},
	food_8m2: {id:'food_8m2',caption:'�������',fixless:true,
		common: {weight:1,price:12,durability:24,expirationdate:45,duration:1440},
		required: {sex:'female',level:4},
		modify: {hitpoints:6}
	},
	food_8m1e: {id:'food_8m1e',caption:'�������',fixless:true,
		common: {weight:1,eprice:12,durability:24,expirationdate:60,duration:1440},
		required: {sex:'female',level:4},
		modify: {hitpoints:24,hpspeed:25}
	},
	pot_base_0_ny_ele3: {id:'pot_base_0_ny_ele3',caption:'���������� �������',description:'������� �� ������ ��������',fixless:true,
		common: {weight:1,price:20,durability:10,expirationdate:60,duration:120},
		modify: {hitpoints:50}
	},
	pot_base_0_ny_ele2: {id:'pot_base_0_ny_ele2',caption:'���������� ������',description:'������ �� �������� �������� � ������',fixless:true,
		common: {weight:1,price:20,durability:10,expirationdate:60,duration:120},
		modify: {hitpoints:50}
	},
	pot_base_0_ny_ele4: {id:'pot_base_0_ny_ele4',caption:'��������� -����������� ������-',description:'�������� ���.',fixless:true,
		common: {weight:1,price:25,durability:5,duration:3},
		modify: {power:100}
	},
	pot_cureHP10000_0: {id:'pot_cureHP10000_0',caption:'���������� �������',description:'��������� ��������������� HP',fixless:true,
		common: {weight:1,durability:10}
	},
	food_l5_eng: {id:'food_l5_eng',caption:'��������� -The Best Friend-',imp1:true,fixless:true,binding:'bop',
		common: {weight:1,price:5,durability:1,expirationdate:9,duration:360,eprice:1},
		required: {level:5},
		modify: {hitpoints:100}
	},
	pot_base_0_8m1: {id:'pot_base_0_8m1',caption:'������� ����� -�������-',description:'����������� ������',fixless:true,
		common: {weight:1,price:10,durability:1,expirationdate:3,duration:180},
		required: {sex:'female'},
		modify: {dexterity:10}
	},
	food_l11_e: {id:'food_l11_e',caption:'������� ����',description:'������� ����',fixless:true,
		common: {weight:1,eprice:1,durability:5,expirationdate:30,duration:360},
		required: {level:5},
		modify: {power:10}
	},
	food_l10_e: {id:'food_l10_e',caption:'������ �������',description:'������ �������',fixless:true,
		common: {weight:1,eprice:1,durability:5,expirationdate:30,duration:360},
		required: {level:5},
		modify: {magicpower:10}
	},
	pot_base_0_8m2: {id:'pot_base_0_8m2',caption:'������� -��-',fixless:true,
		common: {weight:1,price:5,durability:1,expirationdate:10,duration:180},
		required: {sex:'female'},
		modify: {hpspeed:100,manaspeed:100}
	},
	pot_base_0_2007_1: {id:'pot_base_0_2007_1',caption:'���������� �������',description:'��������',fixless:true,
		common: {weight:1,price:3,durability:1,expirationdate:15,duration:180},
		required: {level:2},
		modify: {parry:2}
	},
	pot_base_0_2007_6: {id:'pot_base_0_2007_6',caption:'�������',description:'��������',fixless:true,
		common: {weight:1,price:3,durability:1,expirationdate:15,duration:180},
		required: {level:2},
		modify: {intellect:2}
	},
	pot_base_0_2007_4: {id:'pot_base_0_2007_4',caption:'���������� �������',description:'��������',fixless:true,
		common: {weight:1,price:3,durability:1,expirationdate:15,duration:180},
		required: {level:2},
		modify: {magicdefence:10}
	},
	pot_base_0_2007_2: {id:'pot_base_0_2007_2',caption:'���������� �������',description:'��������',fixless:true,
		common: {weight:1,price:3,durability:1,expirationdate:15,duration:180},
		required: {level:2},
		modify: {anticriticalhit:20}
	},
	pot_base_0_2007_3: {id:'pot_base_0_2007_3',caption:'���������� �������',description:'��������',fixless:true,
		common: {weight:1,price:3,durability:1,expirationdate:15,duration:180},
		required: {level:2},
		modify: {power:2}
	},
	pot_base_0_2007_8: {id:'pot_base_0_2007_8',caption:'��������� ������',description:'��������',fixless:true,
		common: {weight:1,price:3,durability:1,expirationdate:15,duration:180},
		required: {level:2},
		modify: {strength:2}
	},
	pot_base_0_2007_7: {id:'pot_base_0_2007_7',caption:'�������',description:'��������',fixless:true,
		common: {weight:1,price:5,durability:1,expirationdate:15,duration:180},
		required: {level:2},
		modify: {hitpoints:30}
	},
	pot_base_0_2007_5: {id:'pot_base_0_2007_5',caption:'�������� ��������',description:'��������',fixless:true,
		common: {weight:1,price:5,durability:1,expirationdate:15,duration:180},
		required: {level:2},
		modify: {power:3}
	},
	pot_base_0_8m3: {id:'pot_base_0_8m3',caption:'������� ����� -�������-',description:'����������� ������',fixless:true,
		common: {weight:1,price:5,durability:1,expirationdate:3,duration:180},
		required: {level:2},
		modify: {intuition:3}
	},
	pet_food_cat20: {id:'pet_food_cat20',caption:'������� ��������',description:'��� ��� ����',fixless:true,
		common: {weight:1,price:0.5,durability:1,expirationdate:10}
	},
	pet_food_owl20: {id:'pet_food_owl20',caption:'���������',description:'��� ��� ����',fixless:true,
		common: {weight:1,price:0.5,durability:1,expirationdate:10}
	},
	pet_food_chrt20: {id:'pet_food_chrt20',caption:'�����',description:'��� ��� �������',fixless:true,
		common: {weight:1,price:0.5,durability:1}
	},
	pet_food_dog20: {id:'pet_food_dog20',caption:'������� ��������',description:'��� ��� ������',fixless:true,
		common: {weight:1,price:0.5,durability:1,expirationdate:10}
	},
	pet_food_cat20_2: {id:'pet_food_cat20_2',caption:'������',description:'��� ��� ���� ��� ����',fixless:true,
		common: {weight:1,price:0.7,durability:1,expirationdate:10},
		required: {level:2}
	},
	pet_food_dog20_2: {id:'pet_food_dog20_2',caption:'�����',description:'��� ��� ������',fixless:true,
		common: {weight:1,price:0.7,durability:1,expirationdate:10},
		required: {level:2}
	},
	pet_food_cat20_4: {id:'pet_food_cat20_4',caption:'��������',description:'��� ��� ���� ��� ������',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:10},
		required: {level:4}
	},
	pet_food_wisp20: {id:'pet_food_wisp20',caption:'���������� ����',description:'��������������� ���� ���������',fixless:true,
		common: {weight:1,price:1,durability:1}
	},
	pet_food_chrt20_3: {id:'pet_food_chrt20_3',caption:'����',description:'��� ��� �������',fixless:true,
		common: {weight:1,price:1,durability:1},
		required: {level:3}
	},
	pet_food_cat20_6: {id:'pet_food_cat20_6',caption:'������ �������',description:'��� ��� ���� ��� ������',fixless:true,
		common: {weight:1,price:1.5,durability:1},
		required: {level:6}
	},
	pet_food_owl20_4: {id:'pet_food_owl20_4',caption:'������� ����',description:'��� ��� ��� ���� ��� ����',fixless:true,
		common: {weight:1,price:1.5,durability:1,expirationdate:15},
		required: {level:4}
	},
	pet_food_owl20_6: {id:'pet_food_owl20_6',caption:'������� ���������',description:'��� ��� ���',fixless:true,
		common: {weight:1,price:1.5,durability:1,expirationdate:10},
		required: {level:6}
	},
	pet_food_cat20_8: {id:'pet_food_cat20_8',caption:'�������',description:'��� ��� ���� ��� ������',fixless:true,
		common: {weight:1,price:2,durability:1},
		required: {level:8}
	},
	pet_food_wisp20_2: {id:'pet_food_wisp20_2',caption:'������� ����',description:'��������������� ���� ���������',fixless:true,
		common: {weight:1,price:2,durability:1},
		required: {level:3}
	},
	pet_food_chrt20_6: {id:'pet_food_chrt20_6',caption:'������� ����',description:'��� ��� �������',fixless:true,
		common: {weight:1,price:2,durability:1},
		required: {level:6}
	},
	pet_food_owl20_8: {id:'pet_food_owl20_8',caption:'������ �����',description:'��� ��� ���� ��� ����',fixless:true,
		common: {weight:1,price:2.5,durability:1,expirationdate:15},
		required: {level:8}
	},
	pet_food_chrt20_8: {id:'pet_food_chrt20_8',caption:'�������� ����',description:'��� ��� �������',fixless:true,
		common: {weight:1,price:3,durability:1,expirationdate:5},
		required: {level:8}
	},
	pet_food_cat20_10: {id:'pet_food_cat20_10',caption:'����� �����',description:'��� ��� ���� ��� ����',fixless:true,
		common: {weight:1,price:4,durability:1},
		required: {level:10}
	},
	pet_food_wisp20_4: {id:'pet_food_wisp20_4',caption:'���������� ����',description:'��������������� ���� ���������',fixless:true,
		common: {weight:1,price:4,durability:1},
		required: {level:6}
	},
	pet_food_chrt20_10: {id:'pet_food_chrt20_10',caption:'������� �����',description:'��� ��� �������',fixless:true,
		common: {weight:1,price:4,durability:1,expirationdate:5},
		required: {level:10}
	},
	pet_food_dog20_10: {id:'pet_food_dog20_10',caption:'������������ ����',description:'��� ��� ������',fixless:true,
		common: {weight:1,price:4,durability:1,expirationdate:10},
		required: {level:10}
	},
	pet_food_wisp20_6: {id:'pet_food_wisp20_6',caption:'�������� ����',description:'��������������� ���� ���������',fixless:true,
		common: {weight:1,price:6,durability:1},
		required: {level:8}
	},
	pet_food_wisp20_8: {id:'pet_food_wisp20_8',caption:'�������� �����',description:'��������������� ���� ���������',fixless:true,
		common: {weight:1,price:8,durability:1},
		required: {level:10}
	},
	pet_food_pig20: {id:'pet_food_pig20',caption:'������',description:'��� ��� �����',fixless:true,
		common: {weight:1,price:0.5,durability:1}
	},
	pet_food_pig20_2: {id:'pet_food_pig20_2',caption:'������ ������',description:'��� ��� �����',fixless:true,
		common: {weight:1,price:0.7,durability:1,expirationdate:15},
		required: {level:2}
	},
	pet_food_pig20_4: {id:'pet_food_pig20_4',caption:'���������',description:'��� ��� ��� �����',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:15},
		required: {level:4}
	},
	pet_food_pig20_8: {id:'pet_food_pig20_8',caption:'�����',description:'��� ��� ����',fixless:true,
		common: {weight:1,price:2,durability:1},
		required: {level:8}
	},
	pet_food_pig20_10: {id:'pet_food_pig20_10',caption:'�������',description:'��� ��� �����',fixless:true,
		common: {weight:1,price:4,durability:1},
		required: {level:10}
	},
	fp_tulip1dsfg: {id:'fp_tulip1dsfg',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 1',fixless:true,
		common: {price:5.10,durability:1,expirationdate:3},
		properties: {mindamage:1,maxdamage:2,secondweapon:'yes'}
	},
	fp_tulip3vwet: {id:'fp_tulip3vwet',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 3',fixless:true,
		common: {price:15.10,durability:1,expirationdate:3},
		properties: {mindamage:1,maxdamage:3,secondweapon:'yes'}
	},
	fp_tulip5cvwe: {id:'fp_tulip5cvwe',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 5',fixless:true,
		common: {price:25.30,durability:1,expirationdate:3},
		properties: {mindamage:1,maxdamage:5,secondweapon:'yes'}
	},
	fp_tulip7cwefw: {id:'fp_tulip7cwefw',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 7',fixless:true,
		common: {price:35.50,durability:1,expirationdate:3},
		properties: {mindamage:1,maxdamage:7,secondweapon:'yes'}
	},
	fp_tulip9cwef: {id:'fp_tulip9cwef',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 9',fixless:true,
		common: {price:46,durability:1,expirationdate:3},
		modify: {jumpaway:1},
		properties: {mindamage:1,maxdamage:9,secondweapon:'yes'}
	},
	fp_tulip21fgkj: {id:'fp_tulip21fgkj',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 21',fixless:true,
		common: {price:110,durability:1,expirationdate:3},
		modify: {jumpaway:5},
		properties: {mindamage:1,maxdamage:21,secondweapon:'yes'}
	},
	fp_narcissus1dge3: {id:'fp_narcissus1dge3',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 1',fixless:true,
		common: {price:5.10,durability:1,expirationdate:5},
		properties: {mindamage:1,maxdamage:2,secondweapon:'yes'}
	},
	fp_narcissus3bv4sds: {id:'fp_narcissus3bv4sds',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 3',fixless:true,
		common: {price:15.10,durability:1,expirationdate:5},
		properties: {mindamage:1,maxdamage:3,secondweapon:'yes'}
	},
	fp_narcissus5vergwe: {id:'fp_narcissus5vergwe',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 5',fixless:true,
		common: {price:25.30,durability:1,expirationdate:5},
		properties: {mindamage:1,maxdamage:5,secondweapon:'yes'}
	},
	fp_narcissus7vsdegw: {id:'fp_narcissus7vsdegw',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 7',fixless:true,
		common: {price:35.50,durability:1,expirationdate:5},
		properties: {mindamage:1,maxdamage:7,secondweapon:'yes'}
	},
	fp_narcissus9vergt: {id:'fp_narcissus9vergt',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 9',fixless:true,
		common: {price:46,durability:1,expirationdate:5},
		properties: {mindamage:1,maxdamage:9,antijumpaway:2,secondweapon:'yes'}
	},
	fp_narcissus21gf4t: {id:'fp_narcissus21gf4t',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 21',fixless:true,
		common: {price:110,durability:1,expirationdate:5},
		properties: {mindamage:1,maxdamage:21,antijumpaway:5,secondweapon:'yes'}
	},
	fp_chrysanthemum3fsh: {id:'fp_chrysanthemum3fsh',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 3',fixless:true,
		common: {price:21.10,durability:1,expirationdate:3},
		properties: {mindamage:2,maxdamage:6,secondweapon:'yes'}
	},
	fp_chrysanthemum5sddsgf: {id:'fp_chrysanthemum5sddsgf',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 5',fixless:true,
		common: {price:35.30,durability:1,expirationdate:3},
		properties: {mindamage:2,maxdamage:8,secondweapon:'yes'}
	},
	fp_chrysanthemum7f34: {id:'fp_chrysanthemum7f34',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 7',fixless:true,
		common: {price:49.50,durability:1,expirationdate:3},
		properties: {mindamage:2,maxdamage:10,secondweapon:'yes'}
	},
	fp_chrysanthemum9g45t: {id:'fp_chrysanthemum9g45t',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 9',fixless:true,
		common: {price:64,durability:1,expirationdate:3},
		properties: {mindamage:2,maxdamage:12,criticalhit:5,secondweapon:'yes'}
	},
	fp_chrysanthemum21g4tg: {id:'fp_chrysanthemum21g4tg',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 21',fixless:true,
		common: {price:152,durability:1,expirationdate:3},
		properties: {mindamage:2,maxdamage:24,criticalhit:10,secondweapon:'yes'}
	},
	fp_b3sdfsd: {id:'fp_b3sdfsd',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 3',fixless:true,
		common: {price:30.10,durability:1,expirationdate:10},
		properties: {mindamage:3,maxdamage:7,secondweapon:'yes'}
	},
	fp_b5sds2: {id:'fp_b5sds2',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 5',fixless:true,
		common: {price:50.30,durability:1,expirationdate:10},
		properties: {mindamage:3,maxdamage:9,secondweapon:'yes'}
	},
	fp_b7dsfw: {id:'fp_b7dsfw',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 7',fixless:true,
		common: {price:70.50,durability:1,expirationdate:10},
		properties: {mindamage:3,maxdamage:11,secondweapon:'yes'}
	},
	fp_b9s3ga: {id:'fp_b9s3ga',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 9',fixless:true,
		common: {price:91,durability:1,expirationdate:10},
		modify: {jumpaway:10},
		properties: {mindamage:3,maxdamage:13,secondweapon:'yes'}
	},
	fp_b21sdff: {id:'fp_b21sdff',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� 21',fixless:true,
		common: {price:215,durability:1,expirationdate:10},
		modify: {jumpaway:10},
		properties: {mindamage:3,maxdamage:25,antijumpaway:10,secondweapon:'yes'}
	},
	fp_yrose3dfe: {id:'fp_yrose3dfe',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��� 3',fixless:true,
		common: {price:30.10,durability:1,expirationdate:7},
		properties: {mindamage:3,maxdamage:7,secondweapon:'yes'}
	},
	fp_yrose5dfs: {id:'fp_yrose5dfs',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��� 5',fixless:true,
		common: {price:50.30,durability:1,expirationdate:7},
		properties: {mindamage:3,maxdamage:9,secondweapon:'yes'}
	},
	fp_yrose7sd3: {id:'fp_yrose7sd3',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��� 7',fixless:true,
		common: {price:70.50,durability:1,expirationdate:7},
		properties: {mindamage:3,maxdamage:11,secondweapon:'yes'}
	},
	fp_yrose9dfw3: {id:'fp_yrose9dfw3',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��� 9',fixless:true,
		common: {price:91,durability:1,expirationdate:7},
		properties: {mindamage:3,maxdamage:13,criticalhit:5,secondweapon:'yes'}
	},
	fp_yrose21dfsew: {id:'fp_yrose21dfsew',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��� 21',fixless:true,
		common: {price:215,durability:1,expirationdate:7},
		modify: {anticriticalhit:10},
		properties: {mindamage:3,maxdamage:25,secondweapon:'yes'}
	},
	fp_wrose9vsergt: {id:'fp_wrose9vsergt',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ����� ��� 9',fixless:true,
		common: {durability:1,symbols:500,expirationdate:20},
		modify: {hitpoints:10,anticriticalhit:15,jumpaway:15,bodyarmor:5},
		properties: {mindamage:10,maxdamage:20,criticalhit:15,antijumpaway:15,secondweapon:'yes'}
	},
	fp_wrose21mkdefj: {id:'fp_wrose21mkdefj',category:'flowers',slot:'w10',width:60,height:60,caption:'����� ����� ��� 21',description:'����� ������������ ������ ����.',fixless:true,binding:'boe',
		common: {weight:1,price:200,eprice:200,durability:100,expirationdate:25},
 	required: {level:4},
		modify: {hitpoints:300,magicdefence:75,defence:75,headarmor1:22,headarmor2:22,headarmorf:22,headarmorm:1,headarmord:22,bodyarmor1:22,bodyarmor2:22,bodyarmorf:22,bodyarmorm:1,bodyarmord:22,waistarmor1:22,waistarmor2:22,waistarmorf:22,waistarmorm:1,waistarmord:22,legarmor1:22,legarmor2:22,legarmorf:22,legarmorm:1,legarmord:22} 
	},
	fp_black: {id:'fp_black',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������ ��� 24',fixless:true
	},
	fp_rose_1ejdi3: {id:'fp_rose_1ejdi3',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� ��� 1',fixless:true,
		common: {durability:1,weight:1},
		properties: {secondweapon:'yes'}
	},
	fp_rose_5eudmje: {id:'fp_rose_5eudmje',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� ��� 5',fixless:true,
		common: {durability:100,weight:1},
		modify: {hitpoints:18},
		properties: {mindamage:12,maxdamage:18,secondweapon:'yes'}
	},
	fp_rose_21dfioehjf: {id:'fp_rose_21dfioehjf',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� ��� 21',fixless:true,
		common: {durability:1,weight:1},
		properties: {secondweapon:'yes'}
	},
	fp_rose_25zzz: {id:'fp_rose_25zzz',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� ��� 25',fixless:true,
		common: {durability:10,weight:1,symbols:500},
		modify: {dexterity:1,hitpoints:5,headarmor:2,bodyarmor:2,waistarmor:2,legarmor:2},
		properties: {mindamage:5,maxdamage:10,secondweapon:'yes'}
	},
	fp_magnolia1vfe: {id:'fp_magnolia1vfe',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 1',fixless:true,
		common: {durability:10},
		properties: {mindamage:3,maxdamage:4,secondweapon:'yes'}
	},
	fp_magnolia3dg3f: {id:'fp_magnolia3dg3f',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 3',fixless:true,
		common: {durability:1},
		properties: {secondweapon:'yes'}
	},
	fp_magnolia5lojosd: {id:'fp_magnolia5lojosd',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 5',fixless:true,
		common: {weight:1,durability:10,expirationdate:7},
		properties: {mindamage:3,maxdamage:7,blockzones:'+',secondweapon:'yes'}
	},
	fp_magnolia7cvs9: {id:'fp_magnolia7cvs9',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 7',fixless:true,
		properties: {secondweapon:'yes'}
	},
	fp_magnolia9v34t: {id:'fp_magnolia9v34t',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 9',fixless:true,
		common: {durability:10},
		properties: {mindamage:3,maxdamage:15,secondweapon:'yes'}
	},
	fp_magnolia21gew3: {id:'fp_magnolia21gew3',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 21',fixless:true,
		common: {weight:1,price:1,durability:1,expirationdate:3},
		modify: {jumpaway:15},
		properties: {mindamage:3,maxdamage:25,secondweapon:'yes'}
	},
	fp_lotus_1fksdfkd: {id:'fp_lotus_1fksdfkd',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 1',fixless:true,
		common: {weight:1,durability:10},
		properties: {secondweapon:'yes'}
	},
	fp_lotus_3sdcfse: {id:'fp_lotus_3sdcfse',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 3',fixless:true,
		common: {weight:1,durability:10},
		modify: {hitpoints:18},
		properties: {secondweapon:'yes'}
	},
	fp_lotus_5sdsd: {id:'fp_lotus_5sdsd',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 5',fixless:true,
		common: {weight:1,durability:10},
		properties: {secondweapon:'yes'}
	},
	fp_lotus_7vsw: {id:'fp_lotus_7vsw',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 7',fixless:true,
		common: {weight:1,durability:10},
		modify: {hitpoints:42},
		properties: {secondweapon:'yes'}
	},
	fp_lotus_9verg: {id:'fp_lotus_9verg',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 9',fixless:true,
		common: {weight:1,durability:10},
		modify: {hitpoints:54},
		properties: {secondweapon:'yes'}
	},
	fp_lotus_21svs: {id:'fp_lotus_21svs',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 21',fixless:true,
		common: {weight:1,price:1,durability:10,expirationdate:15},
		modify: {hitpoints:126},
		properties: {secondweapon:'yes'}
	},
	fp_kantubaki1mmbey0: {id:'fp_kantubaki1mmbey0',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 1',fixless:true,
		common: {durability:10},
		properties: {mindamage:2,maxdamage:2,secondweapon:'yes'}
	},
	fp_kantubaki3ki3: {id:'fp_kantubaki3ki3',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 3',fixless:true,
		common: {durability:10},
		properties: {mindamage:4,maxdamage:4,secondweapon:'yes'}
	},
	fp_kantubaki5mxkde72: {id:'fp_kantubaki5mxkde72',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 5',fixless:true,
		common: {durability:10},
		properties: {secondweapon:'yes'}
	},
	fp_kantubaki7pp837: {id:'fp_kantubaki7pp837',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 7',fixless:true,
		common: {durability:10},
		properties: {secondweapon:'yes'}
	},
	fp_kantubaki9mjdfh: {id:'fp_kantubaki9mjdfh',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 9',fixless:true,
		common: {durability:10},
		properties: {secondweapon:'yes'}
	},
	fp_kantubaki21mcmk4: {id:'fp_kantubaki21mcmk4',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� 21',fixless:true,
		common: {weight:1,price:0,durability:1,expirationdate:15},
		modify: {firemagicdefence:40,firemagicskill:3},
		properties: {mindamage:15,maxdamage:15,secondweapon:'yes'}
	},
	fp_kikyou1fsdg: {id:'fp_kikyou1fsdg',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������������� 1',fixless:true,
		common: {weight:1,price:18,durability:10},
		modify: {anticriticalhit:10,airmagicskill:1},
		properties: {mindamage:3,maxdamage:5,blockzones:'+'}
	},
	fp_kikyou3ver4t: {id:'fp_kikyou3ver4t',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������������� 3',fixless:true,
		common: {weight:1,price:60,durability:20,probability:70},
		modify: {anticriticalhit:20,airmagicskill:2},
		properties: {mindamage:5,maxdamage:10,blockzones:'+'},
		magic: {name:'lighting_bolt50',caption:'������� ������',description:'1 ��. � �����'}
	},
	fp_kikyou5vert: {id:'fp_kikyou5vert',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������������� 5',fixless:true,
		common: {weight:1,price:300,durability:30,probability:70},
		modify: {anticriticalhit:30,airmagicskill:2,hitpoints:30},
		properties: {mindamage:10,maxdamage:15,blockzones:'+'},
		magic: {name:'lighting_bolt50',caption:'������� ������',description:'3 ��. � �����'}
	},
	fp_kikyou7bvert34: {id:'fp_kikyou7bvert34',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������������� 7',fixless:true,
		common: {weight:1,price:420,durability:40,probability:70},
		modify: {anticriticalhit:40,airmagicskill:3,hitpoints:30},
		properties: {mindamage:10,maxdamage:20,blockzones:'+'},
		magic: {name:'lighting_bolt50',caption:'������� ������',description:'5 ��. � �����'}
	},
	fp_kikyou9vfset: {id:'fp_kikyou9vfset',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������������� 9',fixless:true,
		common: {weight:1,price:540,durability:50,probability:70},
		modify: {anticriticalhit:50,airmagicskill:3,airmagicdefence:60,hitpoints:30},
		properties: {mindamage:10,maxdamage:20,blockzones:'+'},
		magic: {name:'lighting_bolt50',caption:'������� ������',description:'10 ��. � �����'}
	},
	fp_kikyou21bdljr: {id:'fp_kikyou21bdljr',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������������� 21',description:'����� ������������ ������ ������.',fixless:true,binding:'boe',
		common: {weight:1,price:300,eprice:300,durability:100},
  required: {level:4},
		modify: {hitpoints:150,mana:150,intellect:20,magicskill:3,lightmagicskill:3,darkmagicskill:3,greymagicskill:3,magicpower:33 },
		properties: {mindamage:1,maxdamage:10,twohandled:'yes',blockzones:'+'}
	},
 	fp_landish1mcgl2: {id:'fp_landish1mcgl2',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 1',fixless:true,
		common: {weight:1,price:1},
		properties: {secondweapon:'yes'},
		magic: {name:'cureHP15',caption:'�������������� ������� 15HP',description:'1 ��. � �����'}
	},
	fp_landish3sdfsdf: {id:'fp_landish3sdfsdf',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 3',fixless:true,
		common: {weight:1,price:1},
		properties: {secondweapon:'yes'},
		magic: {name:'cureHP30',caption:'�������������� ������� 30HP',description:'1 ��. � �����'}
	},
	fp_landish5asdf8: {id:'fp_landish5asdf8',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 5',fixless:true,
		common: {weight:1,price:1},
		properties: {secondweapon:'yes'},
		magic: {name:'cureHP60',caption:'�������������� ������� 60HP',description:'1 ��. � �����'}
	},
	fp_landish7dv9: {id:'fp_landish7dv9',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 7',fixless:true,
		common: {weight:1,price:1},
		properties: {secondweapon:'yes'},
		magic: {name:'cure1',caption:'������� ������ �����',description:'1 ��. � �����'}
	},
	fp_landish9sd5qx: {id:'fp_landish9sd5qx',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 9',fixless:true,
		common: {weight:1,price:1},
		properties: {secondweapon:'yes'},
		magic: {name:'cure2',caption:'������� ������� �����',description:'1 ��. � �����'}
	},
	fp_landish21d348j: {id:'fp_landish21d348j',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �������� 21',fixless:true,
		common: {weight:1,price:1,durability:10,probability:50,expirationdate:15},
		properties: {secondweapon:'yes'},
		magic: {name:'cure3',caption:'������� ������� �����',description:'1 ��. � �����'}
	},
	fp_lillyp1cnvf83: {id:'fp_lillyp1cnvf83',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ����� 1',fixless:true,
		common: {durability:10},
		properties: {secondweapon:'yes'}
	},
	fp_lillyp3xxa2d: {id:'fp_lillyp3xxa2d',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ����� 3',fixless:true,
		common: {durability:10,expirationdate:7},
		modify: {intuition:2},
		properties: {secondweapon:'yes'}
	},
	fp_lillyp5pfme96: {id:'fp_lillyp5pfme96',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ����� 5',fixless:true,
		common: {price:1,weight:1,durability:10,expirationdate:7},
		modify: {intuition:3},
		properties: {secondweapon:'yes'}
	},
	fp_lillyp7lgfdd: {id:'fp_lillyp7lgfdd',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ����� 7',fixless:true,
		common: {durability:10},
		properties: {secondweapon:'yes'}
	},
	fp_lillyp9dfo933: {id:'fp_lillyp9dfo933',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ����� 9',fixless:true,
		common: {weight:1,price:1,durability:10,expirationdate:7},
		modify: {intuition:5},
		properties: {secondweapon:'yes'}
	},
	fp_lillyp21mxx92: {id:'fp_lillyp21mxx92',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ����� 21',fixless:true,
		common: {weight:1,price:1,durability:10,expirationdate:15},
		modify: {intuition:10},
		properties: {secondweapon:'yes'}
	},
	fp_cosmos3sfsafs: {id:'fp_cosmos3sfsafs',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������ 3',fixless:true,
		common: {durability:10},
		properties: {secondweapon:'yes'}
	},
	fp_cosmos5sdfw3: {id:'fp_cosmos5sdfw3',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������ 5',fixless:true,
		common: {weight:1,durability:10,expirationdate:45},
		modify: {anticriticalhit:10},
		properties: {mindamage:5,maxdamage:7,blockzones:'+',secondweapon:'yes'}
	},
	fp_cosmos7sdfsd: {id:'fp_cosmos7sdfsd',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������ 7',fixless:true
	},
	fp_cosmos9vjwsu: {id:'fp_cosmos9vjwsu',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������ 9',fixless:true,
		common: {durability:10},
		properties: {secondweapon:'yes'}
	},
	fp_cosmos21sdf3j: {id:'fp_cosmos21sdf3j',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������ 21',fixless:true,
		common: {weight:1,durability:10},
		modify: {anticriticalhit:20},
		properties: {mindamage:5,maxdamage:20,secondweapon:'yes'}
	},
	fp_verba1: {id:'fp_verba1',category:'flowers',slot:'w3',width:60,height:60,caption:'������� �����',fixless:true,
		common: {weight:1,price:3,durability:10},
		properties: {mindamage:1,maxdamage:5,blockzones:'+'}
	},
	fp_verba11: {id:'fp_verba11',category:'flowers',slot:'w3',width:60,height:60,caption:'������� �����',fixless:true,
		common: {weight:1,price:9,durability:10},
		required: {level:4},
		properties: {mindamage:1,maxdamage:15,blockzones:'+'}
	},                                                             
	f_forget_me_not21_kjkjklk: {id:'f_forget-me-not21_kjkjklk',category:'flowers',slot:'w10',width:60,height:60,caption:'����� ��������� 21',description:'����� ������������ ������ ����.',fixless:true,binding:'boe',
		common: {weight:1,price:200,eprice:200,durability:100,expirationdate:25},
  required: {level:4},
		modify: {hitpoints:230,intuition:10,dexterity:10,strength:10,power:15},
    properties: {blockzones:'++',secondweapon:'no'}

	},
	fp_sunflover21dei: {id:'fp_sunflover21dei',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ����������� 21',fixless:true,
		common: {weight:1,price:1,durability:100,probability:50,expirationdate:5},
		modify: {jumpaway:150,anticriticalhit:150},
		properties: {mindamage:50,maxdamage:70,criticalhit:100,blockzones:'+'},
		magic: {name:'mirror',caption:'������������',description:'30 ��. � �����'}
	},
	fp_hanana21dfsd: {id:'fp_hanana21dfsd',category:'flowers',slot:'w3',width:60,height:60,caption:'��������� ����� 21',fixless:true,
		common: {weight:1,price:1,durability:100,symbols:500,expirationdate:30},
		modify: {dexterity:10,jumpaway:150,antijumpaway:50,knifeskill:5,clubskill:5,swordskill:5,axeskill:5,magicdefence:40},
		properties: {mindamage:30,maxdamage:40,secondweapon:'yes'}
	},
	fikus: {id:'fikus',category:'flowers',slot:'w3',width:60,height:60,caption:'�����',fixless:true,
		common: {weight:1,price:6,durability:10},
		modify: {dexterity:1,intuition:1,intellect:1,hitpoints:6,strength:1,maxdamage:10,mindamage:1},
		properties: {blockzones:'&#8212;'}
	},
	kaktus: {id:'kaktus',category:'flowers',slot:'w3',width:60,height:60,caption:'������',fixless:true,
		common: {weight:1,price:12,durability:50},
		required: {level:4},
		modify: {headarmor1:6,headarmor2:15,headarmorf:5,headarmorm:1,headarmord:10,bodyarmor1:6,bodyarmor2:15,bodyarmorf:5,bodyarmorm:1,bodyarmord:10,waistarmor1:6,waistarmor2:15,waistarmorf:5,waistarmorm:1,waistarmord:10,legarmor1:6,legarmor2:15,legarmorf:5,legarmorm:1,legarmord:10},
		properties: {mindamage:20,maxdamage:25,blockzones:'&#8212;'}
	},
	fp_mimoza: {id:'fp_mimoza',category:'flowers',slot:'w3',width:60,height:60,caption:'������ 7',fixless:true,
		common: {weight:1,price:21,durability:1,expirationdate:7},
		modify: {hitpoints:3,maxdamage:4,mindamage:2},
		properties: {blockzones:'+'}
	},
	fp_fire3: {id:'fp_fire3',category:'flowers',slot:'w3',width:60,height:60,caption:'�������� 3',fixless:true,
		common: {weight:1,durability:100,expirationdate:30},
		properties: {mindamage:1,maxdamage:7}
	},
	fp_fire7: {id:'fp_fire7',category:'flowers',slot:'w3',width:60,height:60,caption:'�������� 7',fixless:true,clist:{_:{fl_sem_fire1:{id:'fl_sem_fire1',caption:'������� ��������� 1',count:1},fl_sem_fire2:{id:'fl_sem_fire2',caption:'������� ��������� 2',count:1},fl_sem_fire3:{id:'fl_sem_fire3',caption:'������� ��������� 3',count:1},fl_sem_fire4:{id:'fl_sem_fire4',caption:'������� ��������� 4',count:1},fl_sem_fire5:{id:'fl_sem_fire5',caption:'������� ��������� 5',count:1},fl_sem_fire6:{id:'fl_sem_fire6',caption:'������� ��������� 6',count:1},fl_sem_fire7:{id:'fl_sem_fire7',caption:'������� ��������� 7',count:1}}}
	},
	fp_ice3: {id:'fp_ice3',category:'flowers',slot:'w3',width:60,height:60,caption:'��������� 3',fixless:true,
		common: {weight:1,durability:100,expirationdate:30},
		properties: {mindamage:1,maxdamage:7}
	},
	fp_ice7: {id:'fp_ice7',category:'flowers',slot:'w3',width:60,height:60,caption:'��������� 7',fixless:true,clist:{_:{fl_sem_ice1:{id:'fl_sem_ice1',caption:'������� ���������� 1',count:1},fl_sem_ice2:{id:'fl_sem_ice2',caption:'������� ���������� 2',count:1},fl_sem_ice3:{id:'fl_sem_ice3',caption:'������� ���������� 3',count:1},fl_sem_ice4:{id:'fl_sem_ice4',caption:'������� ���������� 4',count:1},fl_sem_ice5:{id:'fl_sem_ice5',caption:'������� ���������� 5',count:1},fl_sem_ice6:{id:'fl_sem_ice6',caption:'������� ���������� 6',count:1},fl_sem_ice7:{id:'fl_sem_ice7',caption:'������� ���������� 7',count:1}}}
	},
	realflower1: {id:'realflower1',category:'flowers',slot:'w3',width:60,height:60,caption:'��������� ����� -������ ��-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower10: {id:'realflower10',category:'flowers',slot:'w3',width:60,height:60,caption:'����� -�� ����������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower11: {id:'realflower11',category:'flowers',slot:'w3',width:60,height:60,caption:'����� -����������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower12: {id:'realflower12',category:'flowers',slot:'w3',width:60,height:60,caption:'����� -������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower13: {id:'realflower13',category:'flowers',slot:'w3',width:60,height:60,caption:'����� -������� � ��������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:75,manaspeed:75},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower14: {id:'realflower14',category:'flowers',slot:'w3',width:60,height:60,caption:'����� -���������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:75,manaspeed:75},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower15: {id:'realflower15',category:'flowers',slot:'w3',width:60,height:60,caption:'����� -����������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:75,manaspeed:75},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower16: {id:'realflower16',category:'flowers',slot:'w3',width:60,height:60,caption:'���������� -������� ������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower17: {id:'realflower17',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �7',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:30,manaspeed:30},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower18: {id:'realflower18',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �8',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:30,manaspeed:30},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower2: {id:'realflower2',category:'flowers',slot:'w3',width:60,height:60,caption:'������� �� 51 ��������',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:75,manaspeed:75},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower3: {id:'realflower3',category:'flowers',slot:'w3',width:60,height:60,caption:'��������� ����� -��������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower4: {id:'realflower4',category:'flowers',slot:'w3',width:60,height:60,caption:'������� �1 60x50 c�',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:30,manaspeed:30},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower5: {id:'realflower5',category:'flowers',slot:'w3',width:60,height:60,caption:'����� �1',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:30,manaspeed:30},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower6: {id:'realflower6',category:'flowers',slot:'w3',width:60,height:60,caption:'������� �2',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower7: {id:'realflower7',category:'flowers',slot:'w3',width:60,height:60,caption:'����� -��������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower8: {id:'realflower8',category:'flowers',slot:'w3',width:60,height:60,caption:'����� -�������� ������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	realflower9: {id:'realflower9',category:'flowers',slot:'w3',width:60,height:60,caption:'����� -������� ������-',fixless:true,
		common: {weight:1,price:1,durability:20,expirationdate:21},
		modify: {hpspeed:50,manaspeed:50},
		properties: {mindamage:1,maxdamage:5}
	},
	fp_rom7: {id:'fp_rom7',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ����� ������',fixless:true,
		common: {weight:1,price:0,durability:30,expirationdate:21,duration:120},
		required: {sex:'female'},
		magic: {name:'spell_kissofkassandra1',caption:'������� ���������',description:'1 ��. � �����'}
	},
	fp_glad7: {id:'fp_glad7',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ������� ������',fixless:true,
		common: {weight:1,price:0,durability:30,expirationdate:21,duration:120},
		required: {sex:'female'},
		magic: {name:'spell_kissofkassandra1',caption:'������� ���������',description:'1 ��. � �����'}
	},
	fp_pion7: {id:'fp_pion7',category:'flowers',slot:'w3',width:60,height:60,caption:'����� ��������� ������',fixless:true,
		common: {weight:1,price:0,durability:30,expirationdate:21,duration:120},
		required: {sex:'female'},
		magic: {name:'spell_kissofkassandra1',caption:'������� ���������',description:'1 ��. � �����'}
	},
	gnel1: {id:'gnel1',category:'firs',slot:'w3',width:60,height:60,caption:'�������� ���� � ���������',clist:{_:{elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:2},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:2},bengal1:{id:'bengal1',caption:'������� �����',count:1},svechka1:{id:'svechka1',caption:'���������� �����',count:1},ny06ball3:{id:'ny06ball3',caption:'����� ��� ����',count:1},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30,probability:50},
		properties: {mindamage:10,maxdamage:15}
	},
	gnel2: {id:'gnel2',category:'firs',slot:'w3',width:60,height:60,caption:'���� � ���������',clist:{_:{elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:3},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},bengal1:{id:'bengal1',caption:'������� �����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30,probability:50},
		properties: {mindamage:10,maxdamage:15}
	},
	gnel3: {id:'gnel3',category:'firs',slot:'w3',width:60,height:60,caption:'������ � ���������',clist:{_:{shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:6},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:5},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:3},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:1},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:1},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:1},ny06ball3:{id:'ny06ball3',caption:'����� ��� ����',count:1},ny06ball9:{id:'ny06ball9',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30,probability:50},
		properties: {mindamage:10,maxdamage:15}
	},
	nel1: {id:'nel1',category:'firs',slot:'w3',width:60,height:60,caption:'������� ���������� ����',clist:{_:{shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:4},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:4},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},ny06ball6:{id:'ny06ball6',caption:'����� ��� ����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},ny06ball9:{id:'ny06ball9',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30,probability:70},
		properties: {mindamage:10,maxdamage:15}
	},
	nel2: {id:'nel2',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ���������� ����',
		common: {weight:10,price:25,durability:100,expirationdate:30},
		properties: {mindamage:10,maxdamage:15}
	},
	nel3: {id:'nel3',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',clist:{_:{shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:3},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:2},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:2},svechka3:{id:'svechka3',caption:'���������� �����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},shar6_2005:{id:'shar6_2005',caption:'��������� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:5,expirationdate:30,probability:70},
		properties: {mindamage:10,maxdamage:15}
	},
	el1: {id:'el1',category:'firs',slot:'w3',width:60,height:60,caption:'�������� ���������� ����',clist:{_:{elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:4},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:3},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:3},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:2},ny06ball1:{id:'ny06ball1',caption:'����� ��� ����',count:2},ny06ball9:{id:'ny06ball9',caption:'����� ��� ����',count:2},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		properties: {mindamage:10,maxdamage:15}
	},
	el2: {id:'el2',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:6},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:3},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:2},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:2},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:2},ny06ball6:{id:'ny06ball6',caption:'����� ��� ����',count:1},ny06ball7:{id:'ny06ball7',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball5:{id:'ny06ball5',caption:'����� ��� ����',count:1},ny06ball11:{id:'ny06ball11',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		properties: {mindamage:10,maxdamage:15}
	},
	el3: {id:'el3',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',old:true,fixless:true,
		common: {weight:10}
	},
	elka_w1: {id:'elka_w1',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:2},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:1},ny06ball7:{id:'ny06ball7',caption:'����� ��� ����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},ny06ball1:{id:'ny06ball1',caption:'����� ��� ����',count:1},ny06ball5:{id:'ny06ball5',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:5,price:1,durability:100,expirationdate:30,probability:50},
		required: {level:1},
		modify: {jumpaway:85},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w2: {id:'elka_w2',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:4},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:3},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:3},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:1},bengal1:{id:'bengal1',caption:'������� �����',count:1},svechka1:{id:'svechka1',caption:'���������� �����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},ny06ball1:{id:'ny06ball1',caption:'����� ��� ����',count:1},ny06ball5:{id:'ny06ball5',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:5,price:1,durability:100,expirationdate:30,probability:50},
		required: {level:1},
		modify: {thrustpower:12},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w3: {id:'elka_w3',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:7},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:4},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:3},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:1},shar7_2005:{id:'shar7_2005',caption:'��������� ��� ����',count:1},ny06ball3:{id:'ny06ball3',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball12:{id:'ny06ball12',caption:'����� ��� ����',count:1}}},
		common: {weight:5,price:1,durability:100,expirationdate:30,probability:50},
		required: {level:1},
		modify: {criticalhit:60},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w4: {id:'elka_w4',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:4},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:3},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:2},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:2},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:1},ny06ball6:{id:'ny06ball6',caption:'����� ��� ����',count:1},svechka1:{id:'svechka1',caption:'���������� �����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},shar8_2005:{id:'shar8_2005',caption:'��������� ��� ����',count:1}}},
		common: {weight:5,price:1,durability:100,expirationdate:30,probability:50},
		required: {level:1},
		modify: {counterstroke:12},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w5: {id:'elka_w5',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:4},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:2},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:2},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},ny06ball1:{id:'ny06ball1',caption:'����� ��� ����',count:1},ny06ball3:{id:'ny06ball3',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball8:{id:'ny06ball8',caption:'����� ��� ����',count:1}}},
		common: {weight:5,price:1,durability:100,expirationdate:30,probability:50},
		required: {level:1},
		modify: {manaconsumption:3},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w6: {id:'elka_w6',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:4},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:2},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:2},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:2},ny06ball4:{id:'ny06ball4',caption:'����� ��� ����',count:1},ny06ball5:{id:'ny06ball5',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball8:{id:'ny06ball8',caption:'����� ��� ����',count:1},ny06ball11:{id:'ny06ball11',caption:'����� ��� ����',count:1}}},
		common: {weight:5,price:1,durability:100,expirationdate:30,probability:50},
		required: {level:1},
		modify: {magicdefence:30},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w7: {id:'elka_w7',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:4},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:1},ny06ball10:{id:'ny06ball10',caption:'����� ��� ����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:5,price:1,durability:100,expirationdate:30,probability:50},
		required: {level:1},
		modify: {defence:30},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w8: {id:'elka_w8',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ���� ����������',clist:{_:{shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:4},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:3},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:1},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:1},bengal1:{id:'bengal1',caption:'������� �����',count:1},ny06ball5:{id:'ny06ball5',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:5,price:1,durability:100,expirationdate:30,probability:50},
		required: {level:1},
		modify: {mana:60},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w9: {id:'elka_w9',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:3},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:2},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:2},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:2},shar7_2005:{id:'shar7_2005',caption:'��������� ��� ����',count:1},ny06ball4:{id:'ny06ball4',caption:'����� ��� ����',count:1},ny06ball10:{id:'ny06ball10',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:5,price:1,durability:100,expirationdate:30,probability:50},
		required: {level:1},
		modify: {power:6},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w10: {id:'elka_w10',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',old:true,fixless:true,
		common: {weight:5,price:1,durability:100,probability:50,expirationdate:30},
		required: {level:1},
		modify: {strength:1,dexterity:1,intuition:1,intellect:1,hitpoints:12},
		properties: {mindamage:1,maxdamage:5,blockzones:'+'}
	},
	elka_w11: {id:'elka_w11',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',old:true,fixless:true,
		common: {weight:10,price:1,durability:100},
		properties: {mindamage:10,maxdamage:15,blockzones:'+'}
	},
	elka_w12: {id:'elka_w12',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',clist:{_:{elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:4},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:2},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:2},ny06ball6:{id:'ny06ball6',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},shar8_2005:{id:'shar8_2005',caption:'��������� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {crushpower:12},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w13: {id:'elka_w13',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',clist:{_:{elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:4},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:3},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:3},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:2},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:2},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:1},bengal1:{id:'bengal1',caption:'������� �����',count:1},svechka1:{id:'svechka1',caption:'���������� �����',count:1},ny06ball1:{id:'ny06ball1',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {watermagicpower:12},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w14: {id:'elka_w14',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',clist:{_:{shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:4},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:2},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:1},ny06ball6:{id:'ny06ball6',caption:'����� ��� ����',count:1},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:1},bengal1:{id:'bengal1',caption:'������� �����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},ny06ball5:{id:'ny06ball5',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball12:{id:'ny06ball12',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {intellect:5},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w15: {id:'elka_w15',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',clist:{_:{elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:3},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:2},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:1},ny06ball10:{id:'ny06ball10',caption:'����� ��� ����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},ny06ball3:{id:'ny06ball3',caption:'����� ��� ����',count:1},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball8:{id:'ny06ball8',caption:'����� ��� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {firemagicpower:12},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w16: {id:'elka_w16',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',clist:{_:{elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:2},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:2},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:1},svechka3:{id:'svechka3',caption:'���������� �����',count:1},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:1},ny06ball4:{id:'ny06ball4',caption:'����� ��� ����',count:1},svechka1:{id:'svechka1',caption:'���������� �����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {sabrepower:12},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w17: {id:'elka_w17',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',clist:{_:{shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:3},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:3},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:2},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:2},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:1},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:1},svechka2:{id:'svechka2',caption:'���������� �����',count:1},ny06ball3:{id:'ny06ball3',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {intuition:5},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w18: {id:'elka_w18',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ������',old:true,fixless:true,
		common: {weight:10,price:1,durability:100},
		properties: {mindamage:10,maxdamage:15,blockzones:'+'}
	},
	elka_w19: {id:'elka_w19',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ���',clist:{_:{shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:3},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:3},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:2},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:2},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:1},ny06ball1:{id:'ny06ball1',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball12:{id:'ny06ball12',caption:'����� ��� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:20,price:1000,durability:100,expirationdate:30},
		modify: {hitpoints:100},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w20: {id:'elka_w20',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:4},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:3},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:1},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:1},ny06ball10:{id:'ny06ball10',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1},shar8_2005:{id:'shar8_2005',caption:'��������� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {strength:5},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w21: {id:'elka_w21',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:3},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:1},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:1},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:1},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:1},ny06ball4:{id:'ny06ball4',caption:'����� ��� ����',count:1},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:1},svechka1:{id:'svechka1',caption:'���������� �����',count:1},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {magicpower:6},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w22: {id:'elka_w22',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:4},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:2},ny06ball5:{id:'ny06ball5',caption:'����� ��� ����',count:2},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},shar8_2005:{id:'shar8_2005',caption:'��������� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {anticriticalhit:60},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w23: {id:'elka_w23',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:5},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:4},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:3},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:2},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:1},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:1},ny06ball3:{id:'ny06ball3',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball8:{id:'ny06ball8',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {airmagicpower:12},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w24: {id:'elka_w24',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:4},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:3},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:2},ny06ball7:{id:'ny06ball7',caption:'����� ��� ����',count:1},svechka1:{id:'svechka1',caption:'���������� �����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {parry:6},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w25: {id:'elka_w25',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:3},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:2},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},ny06ball1:{id:'ny06ball1',caption:'����� ��� ����',count:1},ny06ball5:{id:'ny06ball5',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball8:{id:'ny06ball8',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {earthmagicpower:12},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w26: {id:'elka_w26',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:2},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:1},ny06ball10:{id:'ny06ball10',caption:'����� ��� ����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},ny06ball5:{id:'ny06ball5',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {cutpower:12},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w27: {id:'elka_w27',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:3},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:2},shar4_2005:{id:'shar4_2005',caption:'����� ��� ����',count:2},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:1},svechka2:{id:'svechka2',caption:'���������� �����',count:1},ny06ball9:{id:'ny06ball9',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1},ny06ball2:{id:'ny06ball2',caption:'����� ��� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {dexterity:5},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w28: {id:'elka_w28',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:3},elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:2},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:2},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:1},ny06ball7:{id:'ny06ball7',caption:'����� ��� ����',count:1},svechka2:{id:'svechka2',caption:'���������� �����',count:1},ny06ball3:{id:'ny06ball3',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {antijumpaway:60},
		properties: {mindamage:30,maxdamage:50}
	},
	elka_w29: {id:'elka_w29',category:'firs',slot:'w3',width:60,height:60,caption:'���������� ����',clist:{_:{elka_vetv2:{id:'elka_vetv2',caption:'������ �����',count:3},shar2_2005:{id:'shar2_2005',caption:'����� ��� ����',count:3},shar5_2005:{id:'shar5_2005',caption:'����� ��� ����',count:2},shar3_2005:{id:'shar3_2005',caption:'����� ��� ����',count:1},svechka3:{id:'svechka3',caption:'���������� �����',count:1},svechka2:{id:'svechka2',caption:'���������� �����',count:1},ny06ball4:{id:'ny06ball4',caption:'����� ��� ����',count:1},elka_vetv1:{id:'elka_vetv1',caption:'�������� ������ �����',count:1},shar1_2005:{id:'shar1_2005',caption:'����� ��� ����',count:1},elka_base1:{id:'elka_base1',caption:'��������� ����',count:1}}},
		common: {weight:10,price:1,durability:100,expirationdate:30},
		modify: {hitpoints:60},
		properties: {mindamage:30,maxdamage:50}
	},
	f_tulip: {id:'f_tulip',caption:'�������',fixless:true,
		common: {weight:1,price:3,durability:1,expirationdate:3}
	},
	f_narcissus: {id:'f_narcissus',caption:'�������',fixless:true,
		common: {weight:1,price:3,durability:1,expirationdate:5}
	},
	f_yrose: {id:'f_yrose',caption:'������ ����',fixless:true,
		common: {weight:1,price:6,durability:1,expirationdate:7}
	},
	f_chrysanthemum: {id:'f_chrysanthemum',caption:'����������',fixless:true,
		common: {weight:1,price:4,durability:1,expirationdate:7}
	},
	f_kantubaki: {id:'f_kantubaki',caption:'�������',fixless:true,
		common: {weight:1,price:4,durability:1,expirationdate:5}
	},
	f_landish: {id:'f_landish',caption:'������',fixless:true,
		common: {price:8,weight:1,durability:1,expirationdate:3}
	},
	f_hydrangea: {id:'f_hydrangea',caption:'���������',fixless:true,
		common: {weight:1,price:6,durability:1,expirationdate:10}
	},
	f_lillyp: {id:'f_lillyp',caption:'�����',fixless:true,
		common: {weight:1,price:6,durability:1,expirationdate:7}
	},
	f_magnolia: {id:'f_magnolia',caption:'��������',fixless:true,
		common: {weight:1,price:6,durability:1,expirationdate:7}
	},
	f_lotus: {id:'f_lotus',caption:'�����',fixless:true,
		common: {weight:1,price:6,durability:1,expirationdate:5}
	},
	f_cosmos: {id:'f_cosmos',caption:'������',fixless:true,
		common: {weight:1,price:12,durability:1,expirationdate:15}
	},
	f_rose: {id:'f_rose',caption:'������� ����',fixless:true,
		common: {price:5,weight:1,durability:1,expirationdate:5}
	},
	f_bluebell: {id:'f_bluebell',caption:'�����������',fixless:true
	},
	f_forget_me_not: {id:'f_forget-me-not',caption:'���������',fixless:true
	},
	f_sunflower: {id:'f_sunflower',caption:'���������',fixless:true
	},




	f_rom: {id:'f_rom',caption:'����� ������',fixless:true,
		common: {weight:1,price:5,durability:1,expirationdate:7}
	},
	f_glad: {id:'f_glad',caption:'������� ������',fixless:true,
		common: {weight:1,price:5,durability:1,expirationdate:7}
	},
	f_pion: {id:'f_pion',caption:'��������� ������',fixless:true,
		common: {weight:1,price:5,durability:1,expirationdate:7}
	},


	strength: {id:'strength',caption:'����'
	},
	endurance: {id:'endurance',caption:'������������'
	},
	dexterity: {id:'dexterity',caption:'��������'
	},
	intuition: {id:'intuition',caption:'��������'
	},
	intellect: {id:'intellect',caption:'���������'
	},
	mindamage: {id:'mindamage',caption:'����������� ����'
	},
	maxdamage: {id:'maxdamage',caption:'������������ ����'
	},
	hitpoints: {id:'hitpoints',caption:'������� �����'
	},
	hpspeed: {id:'hpspeed',caption:'�������� ������������� �����'
	},
	mana: {id:'mana',caption:'������� ����'
	},
	manaspeed: {id:'manaspeed',caption:'�������� ������������� ����'
	},
	knifeskill: {id:'knifeskill',caption:'�������� ��������� � ���������'
	},
	axeskill: {id:'axeskill',caption:'�������� �������� � ��������'
	},
	clubskill: {id:'clubskill',caption:'�������� �������� � ��������'
	},
	swordskill: {id:'swordskill',caption:'�������� ������'
	},
	staffskill: {id:'staffskill',caption:'�������� ��������'
	},
	firemagicskill: {id:'firemagicskill',caption:'�������� ������ ����'
	},
	airmagicskill: {id:'airmagicskill',caption:'�������� ������ �������'
	},
	watermagicskill: {id:'watermagicskill',caption:'�������� ������ ����'
	},
	earthmagicskill: {id:'earthmagicskill',caption:'�������� ������ �����'
	},
	lightmagicskill: {id:'lightmagicskill',caption:'�������� ������ �����'
	},
	darkmagicskill: {id:'darkmagicskill',caption:'�������� ������ ����'
	},
	greymagicskill: {id:'greymagicskill',caption:'�������� ����� ������'
	},
	criticalhit: {id:'criticalhit',caption:'��. �����'
	},
	anticriticalhit: {id:'anticriticalhit',caption:'��. ������ �����'
	},
	criticalpower: {id:'criticalpower',caption:'��. ���� �����'
	},
	jumpaway: {id:'jumpaway',caption:'��. �������'
	},
	antijumpaway: {id:'antijumpaway',caption:'��. ������ �������'
	},
	piercearmor: {id:'piercearmor',caption:'��. ����� ������ �����'
	},
	parry: {id:'parry',caption:'��. �����������'
	},
	counterstroke: {id:'counterstroke',caption:'��. ����������'
	},
	shieldblock: {id:'shieldblock',caption:'��. ������������ �����'
	},
	power: {id:'power',caption:'��. �������� �����'
	},
	thrustpower: {id:'thrustpower',caption:'��. �������� �������� �����'
	},
	sabrepower: {id:'sabrepower',caption:'��. �������� �������� �����'
	},
	crushpower: {id:'crushpower',caption:'��. �������� ��������� �����'
	},
	cutpower: {id:'cutpower',caption:'��. �������� �������� �����'
	},
	headarmor: {id:'headarmor',caption:'����� ������'
	},
	legarmor: {id:'legarmor',caption:'����� ���'
	},
	bodyarmor: {id:'bodyarmor',caption:'����� �������'
	},
	waistarmor: {id:'waistarmor',caption:'����� �����'
	},
	defence: {id:'defence',caption:'������ �� �����'
	},
	thustdefence: {id:'thustdefence',caption:'������ �� �������� �����'
	},
	sabredefence: {id:'sabredefence',caption:'������ �� �������� �����'
	},
	crushdefence: {id:'crushdefence',caption:'������ �� ��������� �����'
	},
	cutdefence: {id:'cutdefence',caption:'������ �� �������� �����'
	},
	magicdefence: {id:'magicdefence',caption:'������ �� �����'
	},
	firemagicdefence: {id:'firemagicdefence',caption:'������ �� ����� ����'
	},
	airmagicdefence: {id:'airmagicdefence',caption:'������ �� ����� �������'
	},
	watermagicdefence: {id:'watermagicdefence',caption:'������ �� ����� ����'
	},
	earthmagicdefence: {id:'earthmagicdefence',caption:'������ �� ����� �����'
	},
	magicdefencereduce: {id:'magicdefencereduce',caption:'��������� ������ �� �����'
	},
	firemagicdefencereduce: {id:'firemagicdefencereduce',caption:'��������� ������ �� ����� ����'
	},
	airmagicdefencereduce: {id:'airmagicdefencereduce',caption:'��������� ������ �� ����� �������'
	},
	watermagicdefencereduce: {id:'watermagicdefencereduce',caption:'��������� ������ �� ����� ����'
	},
	earthmagicdefencereduce: {id:'earthmagicdefencereduce',caption:'��������� ������ �� ����� �����'
	},
	magicpower: {id:'magicpower',caption:'�������� ����� ������'
	},
	firemagicpower: {id:'firemagicpower',caption:'�������� ����� ����'
	},
	airmagicpower: {id:'airmagicpower',caption:'�������� ����� �������'
	},
	watermagicpower: {id:'watermagicpower',caption:'�������� ����� ����'
	},
	earthmagicpower: {id:'earthmagicpower',caption:'�������� ����� �����'
	},
	manaconsumption: {id:'manaconsumption',caption:'���������� ������� ����'
	},
	shop: {id:'shop',caption:'��������������� ��������',description:'��������������� �������� ������� ��'
	},
	bshop: {id:'bshop',caption:'������� �������',description:'������� ������� Capital City'
	},
	nyshop: {id:'nyshop',caption:'���������� ��������',description:'���������� �������� ������� ��'
	},
	baltar: {id:'baltar',caption:'������ �����',description:'������ ����� Devils City, ���� ����� �����'
	},
	ks_cap: {id:'ks_cap',caption:'��������� ������� Capital City',description:'��������� ������� Capital City, ���� ����� ������'
	},
	ks_ang: {id:'ks_ang',caption:'��������� ������� Angels City',description:'��������� ������� Angels City, ���� ����� ������'
	},
	ks_dem: {id:'ks_dem',caption:'��������� ������� Demons City',description:'��������� ������� Demons City, ���� ����� ���������'
	},
	ks_sand: {id:'ks_sand',caption:'��������� ������� Sand City',description:'��������� ������� Sand City, ���� ����� ������ ����'
	},
	luka: {id:'luka',caption:'����',description:'��������� �����, ����� � ������� � ���������� �� �� ������'
	},
	s_luka: {id:'s_luka',caption:'������� ����',description:'��������� � ����������� ����������� ���������� �� ����'
	},
	fps_dem: {id:'fps_dem',caption:'������ ���������� ����',description:'������ ���������� ���� ��������� � ���������� Demons City'
	},
	anvil1_ang: {id:'anvil1_ang',caption:'���������� [9]',description:'���������� ������� �������� � ������ Angels City, �������� � ��������� [9] ������'
	},
	anvil2_ang: {id:'anvil2_ang',caption:'���������� [10]',description:'���������� ������� �������� � ������ Angels City, �������� � ��������� [10] ������'
	},
	anvil_dem: {id:'anvil_dem',caption:'���������� [10]',description:'���������� ������� �������� � ���������� Demons City, �������� � ��������� [10] ������'
	},
	anvil_sand: {id:'anvil_sand',caption:'���������� [10]',description:'���������� ������� �������� � ������� ���� Sand City, �������� � ��������� [10] ������'
	}};
var categories = {
	sets:{id: 'sets', caption: 'sets', items: new Array()},
	strengthenings:{id: 'strengthenings', caption: 'strengthenings', items: new Array()},
	emptyitems:{id: 'emptyitems', caption: 'emptyitems', items: new Array(dressItems.w1,dressItems.w2,dressItems.w3,dressItems.w3_u,dressItems.w4,dressItems.w5,dressItems.w6,dressItems.w7,dressItems.w8,dressItems.w9,dressItems.wwreath,dressItems.w11,dressItems.w10,dressItems.w10_u,dressItems.w12,dressItems.w13,dressItems.w14,dressItems.w15,dressItems.w19,dressItems.wb,dressItems.wshirt,dressItems.wcape,dressItems.w100,dressItems.w101,dressItems.w102,dressItems.w103,dressItems.w104,dressItems.w105,dressItems.w106,dressItems.w107,dressItems.w108,dressItems.w109,dressItems.wbook,dressItems.w20_1)},
	knives:{id: 'knives',canRune: 'yes', caption: '������� � ����', slot: 'w3', items: new Array(dressItems.avengerdagger,dressItems.DaggerGoldScorpion,dressItems.DaggerNightdemon,dressItems.DaggerofSnake,dressItems.voinkingal2,dressItems.kastet2,dressItems.knife2,dressItems.kastet1,dressItems.knife1,dressItems.knife63,dressItems.knife59,dressItems.knife61,dressItems.knife4,dressItems.knife52,dressItems.knife3,dressItems.knife5,dressItems.knife69,dressItems.kastet3,dressItems.knife67,dressItems.kastet4,dressItems.knife64,dressItems.knife7,dressItems.knife2t,dressItems.knife6,dressItems.knife10,dressItems.knife54,dressItems.knife56,dressItems.knife58,dressItems.knife66,dressItems.knife62,dressItems.dagger70,dressItems.knife57,dressItems.knife68,dressItems.dagger71,dressItems.knife60,dressItems.knife55,dressItems.knife51,dressItems.knife70,dressItems.knife11,dressItems.knife53,dressItems.knife71,dressItems.knife72,dressItems.knife73,dressItems.knife74_du2,dressItems.knife76,dressItems.knife205,dressItems.knife206,dressItems.knife783,dressItems.aknife1)},
	axes:{id: 'axes', canRune: 'yes',caption: '������ � ������', slot: 'w3', items: new Array(dressItems.AxeSteelWarrior,dressItems.AxeSteelWolf,dressItems.AxeNightdemon,dressItems.axe19,dressItems.axe783,dressItems.axe50,dressItems.axe61,dressItems.axe1,dressItems.axe20,dressItems.axe2,dressItems.axe5,dressItems.axe11,dressItems.axe53,dressItems.axe2t,dressItems.axe3,dressItems.axe7,dressItems.axe77,dressItems.axe78,dressItems.axe56,dressItems.axe80,dressItems.axe6,dressItems.axe60,dressItems.axe84,dressItems.axe8,dressItems.axe63,dressItems.axe70,dressItems.axe79,dressItems.axe12,dressItems.axe4,dressItems.axe52,dressItems.axe67,dressItems.axe10,dressItems.axe9,dressItems.axe71,dressItems.axe57,dressItems.axe13,dressItems.axe15,dressItems.axe76,dressItems.axe58,dressItems.axe59,dressItems.axe68,dressItems.axe85,dressItems.axe72,dressItems.axe83,dressItems.axe69,dressItems.axe75,dressItems.axe73,dressItems.axe82,dressItems.axe87,dressItems.axe88,dressItems.axe89,dressItems.axe90_du2,dressItems.axe90,dressItems.aaxe2,dressItems.aaxe5,dressItems.axe210)},
	clubs:{id: 'clubs',canRune: 'yes', caption: '������ � ������', slot: 'w3', items: new Array(dressItems.HammerSteelTiger,dressItems.Macegoldenwarrior,dressItems.HammerofAztec,dressItems.dubina1,dressItems.dubina2,dressItems.dubina3,dressItems.dubina2t,dressItems.mace58,dressItems.hammer5,dressItems.hammer1,dressItems.mace51,dressItems.mace63,dressItems.mace52,dressItems.hammer3,dressItems.hammer60,dressItems.hammer50,dressItems.hammer65,dressItems.mace55,dressItems.hammer51,dressItems.mace60,dressItems.hammer52,dressItems.hammer53,dressItems.mace54,dressItems.hammer4,dressItems.mace53,dressItems.molot1,dressItems.mace56,dressItems.hammer59,dressItems.mace62,dressItems.mace59,dressItems.mace64,dressItems.hammer54,dressItems.mace57,dressItems.mace61,dressItems.hammer56,dressItems.hammer66,dressItems.hammer62,dressItems.hammer68,dressItems.hammer61,dressItems.hammer58,dressItems.hammer69,dressItems.mace66,dressItems.mace67,dressItems.mace68,dressItems.hammer72_du2,dressItems.hammer74,dressItems.hammer75,dressItems.hammer76,dressItems.hammer70,dressItems.hammer71,dressItems.hammer63,dressItems.amolot1,dressItems.dmposoh,dressItems.sposoh,dressItems.hammer204)},
	swords:{id: 'swords',canRune: 'yes', caption: '����', slot: 'w3', items: new Array(dressItems.avengersword,dressItems.Revengemech,dressItems.voinkingal,dressItems.SwordSteelWolf2,dressItems.SteelSwordWarrior,dressItems.sword97,dressItems.sword53,dressItems.sword2,dressItems.sword75,dressItems.sword78,dressItems.sword60,dressItems.sword2t,dressItems.sword63,dressItems.sword72,dressItems.sword7,dressItems.sword4,dressItems.sword85,dressItems.sword77,dressItems.sword99,dressItems.sword9,dressItems.sword61,dressItems.sword67,dressItems.sword62,dressItems.sword55,dressItems.sword54,dressItems.sword59,dressItems.sword11,dressItems.sword3,dressItems.sword13,dressItems.sword79,dressItems.sword81,dressItems.sword73,dressItems.sword50,dressItems.sword56,dressItems.sword87,dressItems.sword57,dressItems.sword8,dressItems.sword10,dressItems.sword96,dressItems.sword70,dressItems.sword71,dressItems.sword83,dressItems.sword69,dressItems.sword52,dressItems.sword66,dressItems.sword51,dressItems.sword92,dressItems.sword91,dressItems.sword58,dressItems.sword95,dressItems.sword82,dressItems.sword80,dressItems.sword94,dressItems.sword93,dressItems.sword86,dressItems.sword64,dressItems.sword102,dressItems.sword103,dressItems.sword104,dressItems.sword105_du2,dressItems.knife77,dressItems.sword105,dressItems.sword106,dressItems.sword76,dressItems.sword74,dressItems.sword89,dressItems.sword106_kki8,dressItems.sword100,dressItems.asword3,dressItems.asword4,dressItems.sword210)},
	crutches:{id: 'crutches', caption: '�������', slot: 'w3', items: new Array(dressItems.kostyl1,dressItems.kostyl2)},
	staffs:{id: 'staffs',canRune: 'yes', caption: '���������� ������', slot: 'w3', items: new Array(dressItems.StaffIcePower,dressItems.StaffofFirePower,dressItems.StaffofAirPower,dressItems.StaffoftheEarthPower,dressItems.StaffofAiry,dressItems.StaffFeary,dressItems.AiryStaffofSpirit,dressItems.StaffofEartnen,dressItems.staff1,dressItems.staff2,dressItems.staff49,dressItems.staff3,dressItems.staff50,dressItems.staff51,dressItems.staff52,dressItems.staff_chaos1,dressItems.staff800,dressItems.staff801,dressItems.staff802,dressItems.staff803)},
	legendaryweapon:{id: 'legendaryweapon', caption: '����������� ������', slot: 'w3', items: new Array(dressItems.apero1)},
	boots:{id: 'boots', canRune: 'yes', caption: '������ � �������', slot: 'w12', items: new Array(dressItems.avengerboots,dressItems.BootsIcePower,dressItems.BootsofFirePower,dressItems.BootsofAirPower,dressItems.BootsoftheEarthPower,dressItems.BootsofAiry,dressItems.BootsFeary,dressItems.IcyBootsofSpirit,dressItems.BootsofEartnen,dressItems.BootsSteelWolf,dressItems.BootsGoldScorpion,dressItems.BootsSteelTiger,dressItems.BootsNightdemon,dressItems.BootsGoldenWarrior,dressItems.BootsSteelWarrior,dressItems.BootsofSnake,dressItems.BootsofAztecs,dressItems.voinbotink,dressItems.boots783,dressItems.boots1,dressItems.boots2,dressItems.boots5,dressItems.boots9,dressItems.boots8,dressItems.boots13,dressItems.boots12,dressItems.boots7,dressItems.boots10,dressItems.boots3,dressItems.boots210,dressItems.boots11,dressItems.boots17,dressItems.boots15,dressItems.boots19,dressItems.boots211,dressItems.boots18,dressItems.boots209,dressItems.boots212,dressItems.boots28,dressItems.boots14,dressItems.boots16,dressItems.boots6,dressItems.boots4,dressItems.boots31,dressItems.boots21,dressItems.boots21_1,dressItems.boots22,dressItems.boots22_1,dressItems.boots23,dressItems.boots23_1,dressItems.boots24_du2,dressItems.boots25,dressItems.boots26,dressItems.boots27,dressItems.aboots2_dk2kd9,dressItems.dmboots,dressItems.sboots,dressItems.aboots1,dressItems.boots208,dressItems.boots213,dressItems.boots214,dressItems.boots215,dressItems.boots216,dressItems.boots217,dressItems.aboots100)},
	gauntlets:{id: 'gauntlets', canRune: 'yes', caption: '��������', slot: 'w11', items: new Array(dressItems.avengergloves,dressItems.GlovesIcePower,dressItems.GlovesofFirePower,dressItems.GlovesofAirPower,dressItems.GlovesoftheEarthPower,dressItems.GlovesofAiry,dressItems.GlovesFeary,dressItems.AiryGlovesofSpirit,dressItems.GlovesofEartnen,dressItems.GlovesSteelWolf,dressItems.GlovesGoldScorpion,dressItems.GlovesSteelTiger,dressItems.GlovesNightdemon,dressItems.GlovesGoldenWarrior,dressItems.GlovesSteelWarrior,dressItems.GlovesofSnake,dressItems.GlovesofAztec,dressItems.voinperchatk,dressItems.haoss4,dressItems.gloves783,dressItems.Gloves_chaos1,dressItems.naruchi2,dressItems.naruchi3,dressItems.naruchi4,dressItems.naruchi6,dressItems.naruchi50,dressItems.naruchi52,dressItems.naruchi69,dressItems.naruchi1,dressItems.naruchi62,dressItems.naruchi59,dressItems.naruchi60,dressItems.naruchi54,dressItems.naruchi5,dressItems.naruchi7,dressItems.naruchi9,dressItems.gloves1,dressItems.naruchi61,dressItems.naruchi70,dressItems.naruchi65,dressItems.naruchi58,dressItems.naruchi51,dressItems.naruchi57,dressItems.naruchi66,dressItems.naruchi71,dressItems.naruchi72,dressItems.naruchi64,dressItems.naruchi63,dressItems.naruchi68,dressItems.gloves2,dressItems.naruchi74,dressItems.naruchi55,dressItems.naruchi10,dressItems.naruchi53,dressItems.naruchi56,dressItems.naruchi67,dressItems.naruchi80,dressItems.naruchi90,dressItems.gloves206,dressItems.gloves3,dressItems.naruchi8,dressItems.naruchi78,dressItems.gloves204,dressItems.naruchi79,dressItems.naruchi83_du2,dressItems.naruchi85,dressItems.naruchi86,dressItems.naruchi77,dressItems.naruchi84,dressItems.dmnaruchi,dressItems.snaruchi,dressItems.gloves205,dressItems.gloves207,dressItems.gloves209,dressItems.gloves210,dressItems.gloves211,dressItems.gloves212,dressItems.gloves90)},
	shirts:{id: 'shirts',canRune: 'yes', caption: '������ � ��������', slot: 'wshirt', items: new Array(dressItems.roba1,dressItems.roba6,dressItems.roba5,dressItems.roba12,dressItems.roba13,dressItems.roba14,dressItems.roba_s1,dressItems.roba12_1,dressItems.roba12_2,dressItems.roba12_3,dressItems.roba12_4,dressItems.roba_s3,dressItems.roba_s5,dressItems.roba_s6)},
	capes:{id: 'capes',canRune: 'yes', caption: '����� � �������', slot: 'wcape', items: new Array(dressItems.santa1,dressItems.cloak2,dressItems.cloak2_1,dressItems.cloak2_2,dressItems.cloak2_3,dressItems.cloak2_4,dressItems.cloak23f1,dressItems.cloak23f2,dressItems.cloak201,dressItems.cloak202,dressItems.cloak203,dressItems.cloak204,dressItems.cloak205,dressItems.cloak206)},
	lightarmors:{id: 'lightarmors', canRune: 'yes', caption: '������ �����', slot: 'w4', items: new Array(dressItems.ArmorIcePower,dressItems.RobeofFirePower,dressItems.RobeofAirPower,dressItems.RobeoftheEarthPower,dressItems.ArmorofAiry,dressItems.ArmorFeary,dressItems.IcyRobeofSpirit,dressItems.ArmorofEartnen,dressItems.gilet1,dressItems.roba11,dressItems.roba2,dressItems.roba10,dressItems.roba7,dressItems.roba9,dressItems.roba17,dressItems.suit1,dressItems.roba18,dressItems.roba19,dressItems.roba50,dressItems.roba15,dressItems.roba52,dressItems.roba53,dressItems.roba51,dressItems.gilet200,dressItems.gilet201,dressItems.gilet202,dressItems.roba21,dressItems.roba200,dressItems.roba202,dressItems.roba203,dressItems.roba204,dressItems.roba205,dressItems.arobe1)},
	heavyarmors:{id: 'heavyarmors', canRune: 'yes', caption: '������� �����', slot: 'w4', items: new Array(dressItems.avengerarmor,dressItems.ArmorSteelWolf,dressItems.ArmorGoldScorpion,dressItems.ArmorSteelTiger,dressItems.ArmorNightdemon,dressItems.Armorgoldenwarrior,dressItems.ArmorSteelWarrior,dressItems.ArmorofSnake,dressItems.ArmorofAztec,dressItems.voinbron,dressItems.aarmordc,dressItems.armorl1,dressItems.armor2,dressItems.armor77,dressItems.armor80,dressItems.armor100,dressItems.armor4,dressItems.armor5,dressItems.armor66,dressItems.armor69,dressItems.armor101,dressItems.armor75,dressItems.armor61,dressItems.armor81,dressItems.armor63,dressItems.armor58,dressItems.armor52,dressItems.armor64,dressItems.armor3,dressItems.armor51,dressItems.armor83,dressItems.armor60,dressItems.armor82,dressItems.armor98,dressItems.armor59,dressItems.armor88,dressItems.armor86,dressItems.armor53,dressItems.armor56,dressItems.armor55,dressItems.armor102,dressItems.armor79,dressItems.armor8,dressItems.armor57,dressItems.armor6,dressItems.armor74,dressItems.armor73,dressItems.armor65,dressItems.armor76,dressItems.armor90,dressItems.armor54,dressItems.armor92,dressItems.armor70,dressItems.armor93,dressItems.armor67,dressItems.armor99,dressItems.armor85,dressItems.armor87,dressItems.armor89,dressItems.armor94,dressItems.armor103,dressItems.armor72,dressItems.armor68,dressItems.armor91,dressItems.armor97,dressItems.armor96,dressItems.armor78,dressItems.armor84,dressItems.armor105,dressItems.armor105_1,dressItems.armor106,dressItems.armor108,dressItems.armor106_1,dressItems.armor107,dressItems.armor107_1,dressItems.armor108_du1,dressItems.armor109,dressItems.armor109_ppwa,dressItems.aarmor1,dressItems.aarmor2,dressItems.aarmor3_1,dressItems.aarmor4,dressItems.dmarmor,dressItems.sarmor,dressItems.armor207,dressItems.armor208,dressItems.armor783,dressItems.armor113)},
	helmets:{id: 'helmets', canRune: 'yes', caption: '�����', slot: 'w9', items: new Array(dressItems.avengerhelmet,dressItems.HelmetIcePower,dressItems.HelmetofFirePower,dressItems.HelmetofAirPower,dressItems.HelmetoftheEarthPower,dressItems.HelmetofAiry,dressItems.HelmetFeary,dressItems.AiryHatofSpirit,dressItems.HelmetofEartnen,dressItems.HelmetSteelWolf,dressItems.HelmetGoldScorpion,dressItems.HelmetSteelTiger,dressItems.HelmetNightdemon,dressItems.Helmetgoldenwarrior,dressItems.Steelwarriorhelmet,dressItems.HelmetofSnake,dressItems.HelmetOfAztec,dressItems.voinshlem,dressItems.helmet783,dressItems.helmet2,dressItems.helmet7,dressItems.helmet1,dressItems.helmet3,dressItems.helmet27,dressItems.helmet42,dressItems.helmet31,dressItems.helmet71,dressItems.helmet53,dressItems.helmet29,dressItems.helmet46,dressItems.helmet22,dressItems.helmet40,dressItems.helmet57,dressItems.helmet25,dressItems.helmet4,dressItems.helmet6,dressItems.helmet23,dressItems.helmet21,dressItems.helmet69,dressItems.helmet26,dressItems.helmet36,dressItems.helmet5,dressItems.helmet76,dressItems.helmet61,dressItems.helmet8,dressItems.helmet34,dressItems.helmet52,dressItems.helmet32,dressItems.helmet30,dressItems.whelmet4,dressItems.helmet48,dressItems.helmet49,dressItems.helmet77,dressItems.helmet9,dressItems.helmet63,dressItems.helmet65,dressItems.helmet60,dressItems.helmet35,dressItems.helmet72,dressItems.helmet67,dressItems.helmet38,dressItems.helmet11,dressItems.helmet59,dressItems.helmet10,dressItems.helmet45,dressItems.helmet58,dressItems.whelmet5,dressItems.helmet50,dressItems.helmet39,dressItems.helmet75,dressItems.helmet70,dressItems.helmet51,dressItems.helmet43,dressItems.helmet66,dressItems.helmet64,dressItems.helmet33,dressItems.helmet28,dressItems.helmet24,dressItems.helmet47,dressItems.helmet73,dressItems.helmet68,dressItems.whelmet3,dressItems.helmet56,dressItems.whelmet6,dressItems.helmet74,dressItems.helmet62,dressItems.helmet54,dressItems.helmet44,dressItems.whelmet1,dressItems.whelmet2,dressItems.helmet37,dressItems.helmet79,dressItems.helmet80,dressItems.helmet82_du2,dressItems.helmet84,dressItems.helmet85,dressItems.helmet81,dressItems.helmet83,dressItems.helmet90,dressItems.helmet91,dressItems.ahelmet3_1,dressItems.ahelmet1,dressItems.shelmet,dressItems.helmet206,dressItems.helmet207,dressItems.helmet209,dressItems.helmet210,dressItems.helmet211,dressItems.helmet212,dressItems.helmet_illusion1,dressItems.helmet_illusion2,dressItems.ahelmet100)},
	wreaths:{id: 'wreaths', canRune: 'yes',caption: '�����', slot: 'wwreath', items: new Array(dressItems.mask1017,dressItems.dmhelmet,dressItems.venok1,dressItems.venok2,dressItems.venok3,dressItems.venok4,dressItems.venok5,dressItems.venok6,dressItems.venok7,dressItems.venok8,dressItems.venok9,dressItems.venok10,dressItems.venok11,dressItems.suven2007_36,dressItems.venok12,dressItems.venok13,dressItems.venok14,dressItems.venok15,dressItems.angel_game_armored_curse)},
	bracelets:{id: 'bracelets', canRune: 'yes', caption: '������ � ��������', slot: 'w13', items: new Array(dressItems.avengerbracers,dressItems.BracersIcePower,dressItems.BracersofFirePower,dressItems.BracersofAirPower,dressItems.BracersoftheEarthPower,dressItems.BracersofAiry,dressItems.BracersFeary,dressItems.AiryCuffsofSpirit,dressItems.BracersofEartnen,dressItems.BracersSteelWolf,dressItems.BracersGoldScorpion,dressItems.BracersSteelTiger,dressItems.BracersNightdemon,dressItems.Bracersgoldenwarrior,dressItems.BracersSteelWarrior,dressItems.BandsofSnake,dressItems.BandsofAztec,dressItems.voinnaruchi,dressItems.haoss2,dressItems.Bands_chaos,dressItems.braslet1,dressItems.braslet13,dressItems.braslet20,dressItems.braslet18,dressItems.braslet6,dressItems.braslet9,dressItems.braslet26,dressItems.braslet34_2,dressItems.braslet35_2,dressItems.naruchi81,dressItems.braslet28,dressItems.braslet11,dressItems.braslet10,dressItems.braslet23,dressItems.braslet8,dressItems.braslet3,dressItems.braslet16,dressItems.braslet5,dressItems.braslet21,dressItems.braslet2,dressItems.braslet12,dressItems.braslet29,dressItems.braslet19,dressItems.braslet22,dressItems.braslet35_1,dressItems.braslet34_1,dressItems.braslet7,dressItems.braslet14,dressItems.braslet4,dressItems.braslet15,dressItems.braslet17,dressItems.braslet30,dressItems.braslet40,dressItems.naruchi76,dressItems.naruchi76_1,dressItems.braslet24,dressItems.braslet24_1,dressItems.braslet25,dressItems.braslet25_1,dressItems.braslet26_du2,dressItems.braslet26_du2_1,dressItems.braslet27,dressItems.braslet27_1,dressItems.braslet31,dressItems.braslet31_1,dressItems.braslet32,dressItems.braslet32_1,dressItems.naruchi82,dressItems.braslet35,dressItems.braslet34,dressItems.naruchi207,dressItems.naruchi208,dressItems.braslet209,dressItems.braslet210,dressItems.braslet211,dressItems.braslet212,dressItems.naruchi_illusion1,dressItems.naruchi_illusion2,dressItems.braslet33_1,dressItems.naruchi783,dressItems.braslet33)},
	belts:{id: 'belts', canRune: 'yes', caption: '�����', slot: 'w5', items: new Array(dressItems.avengerbelt,dressItems.BeltIcePower,dressItems.BeltofFirePower,dressItems.BeltofAirPower,dressItems.BeltoftheEarthPower,dressItems.BeltofAiry,dressItems.BeltFeary,dressItems.IcyBeltofSpirit,dressItems.BeltofEartnen,dressItems.BeltSteelWolf,dressItems.BeltGoldScorpion,dressItems.BeltSteelTiger,dressItems.BeltNightdemon,dressItems.Beltgoldenwarrior,dressItems.BeltSteelWarrior,dressItems.BeltofSnake,dressItems.BeltofAztec,dressItems.voinpoyas,dressItems.haoss1,dressItems.Belt_chaos,dressItems.belt17,dressItems.belt783,dressItems.belt1,dressItems.belt16,dressItems.belt19,dressItems.belt15,dressItems.belt9,dressItems.belt5,dressItems.belt40,dressItems.belt31,dressItems.belt26,dressItems.belt3,dressItems.belt25,dressItems.belt20,dressItems.belt23,dressItems.belt41,dressItems.belt13,dressItems.belt8,dressItems.belt24,dressItems.belt14,dressItems.belt29,dressItems.belt46_2,dressItems.belt45_2,dressItems.belt2,dressItems.belt28,dressItems.belt18,dressItems.belt30,dressItems.belt42,dressItems.belt47,dressItems.belt32,dressItems.belt12,dressItems.belt45_1,dressItems.belt46_1,dressItems.belt22,dressItems.belt4,dressItems.belt21,dressItems.belt7,dressItems.belt33,dressItems.belt10,dressItems.belt6,dressItems.belt50,dressItems.belt51,dressItems.belt35,dressItems.belt35_1,dressItems.belt36,dressItems.belt36_1,dressItems.belt37,dressItems.belt37_1,dressItems.belt38_du2,dressItems.belt38_du2_1,dressItems.belt39,dressItems.belt39_1,dressItems.belt43,dressItems.belt43_1,dressItems.belt44,dressItems.belt44_1,dressItems.belt46,dressItems.belt45,dressItems.belt206,dressItems.belt207,dressItems.belt208,dressItems.belt209,dressItems.belt210,dressItems.belt211,dressItems.belt_illusion1,dressItems.belt_illusion2,dressItems.belt52)},
	pants:{id: 'pants', canRune: 'yes', caption: '������', slot: 'w19', items: new Array(dressItems.avengerleggings,dressItems.LeggingsIcePower,dressItems.LeggingsofFirePower,dressItems.LeggingsofAirPower,dressItems.LeggingsoftheEarthPower,dressItems.LeggingsofAiry,dressItems.LeggingsFeary,dressItems.IcyPantsofSpirit,dressItems.LeggingsofEartnen,dressItems.LeggingsSteelWolf,dressItems.LeggingsGoldScorpion,dressItems.LeggingsSteelTiger,dressItems.LeggingsNightdemon,dressItems.Leggingsgoldenwarrior,dressItems.LeggingsSteelWarrior,dressItems.LeggingsofSnake,dressItems.LeggingsofAztec,dressItems.voinponogi,dressItems.leg783,dressItems.leg1,dressItems.leg18,dressItems.leg32,dressItems.leg19,dressItems.leg21,dressItems.leg22,dressItems.leg34,dressItems.leg26,dressItems.leg23,dressItems.leg24,dressItems.leg25,dressItems.legs40,dressItems.leg11,dressItems.leg11_1,dressItems.leg12,dressItems.leg12_1,dressItems.leg13,dressItems.leg13_1,dressItems.leg14,dressItems.leg14_1,dressItems.leg15,dressItems.leg15_1,dressItems.leg16,dressItems.leg16_1,dressItems.leg17,dressItems.leg17_1,dressItems.leg27,dressItems.leg33,dressItems.legs41,dressItems.legs42,dressItems.legs43,dressItems.legs44,dressItems.aleg2,dressItems.aleg1)},
	shields:{id: 'shields', canRune: 'yes',caption: '����', slot: 'w10', items: new Array(dressItems.avengershield,dressItems.ShieldSteelWolf,dressItems.ShieldSteelTiger,dressItems.SteelShieldWarrior,dressItems.Shieldgoldenwarrior,dressItems.voinshit,dressItems.ShieldofAztecs,dressItems.ashielddc,dressItems.shield1,dressItems.shield4,dressItems.shield6,dressItems.trshield2,dressItems.shield5,dressItems.grshield2,dressItems.trshield1,dressItems.shield78,dressItems.grshield1,dressItems.shield12,dressItems.shield10,dressItems.shield19,dressItems.shield7,dressItems.shield3,dressItems.shield79,dressItems.shield13,dressItems.shield9,dressItems.shield11,dressItems.shield8,dressItems.shield15,dressItems.shield17,dressItems.shield20,dressItems.shield16,dressItems.shield77,dressItems.shield21,dressItems.shield80,dressItems.shield18,dressItems.shield14,dressItems.shield82,dressItems.shield82_1,dressItems.shield83,dressItems.shield83_1,dressItems.shield84,dressItems.shield84_1,dressItems.shield85_du2,dressItems.shield85,dressItems.shield86,dressItems.shield88,dressItems.ashield6_7dk29as,dressItems.ashield1,dressItems.ashield4,dressItems.shield209)},
	earrings:{id: 'earrings', canRune: 'yes', caption: '������', slot: 'w1', items: new Array(dressItems.avengerearrings,dressItems.EarringsIcePower,dressItems.EarringsofFirePower,dressItems.EarringsofAirPower,dressItems.EarringsoftheEarthPower,dressItems.EarringsofAiry,dressItems.EarringsFeary,dressItems.IcyEarringsofSpirit,dressItems.EarringsofEartnen,dressItems.EarthenEarringsofHaughtiness,dressItems.IcyEarringsofHaughtiness,dressItems.FieryEarringsofHaughtiness,dressItems.AiryEarringsofHaughtiness,dressItems.EarringsSteelWolf,dressItems.EarringsGoldScorpion,dressItems.EarringsSteelTiger,dressItems.EarringsNightdemon,dressItems.Earringsgoldenwarrior,dressItems.EarringsSteelWarrior,dressItems.EarringsofSnake,dressItems.EarringsofAztec,dressItems.voinsergi,dressItems.haoss3,dressItems.Earrings_chaos,dressItems.clip7,dressItems.earrings783,dressItems.clip6,dressItems.clip2,dressItems.clip5,dressItems.clip58,dressItems.clip8,dressItems.clip56,dressItems._1apr72,dressItems.clip1,dressItems.clip57,dressItems.clip53,dressItems.clip86,dressItems.clip11,dressItems.clip4,dressItems.clip63,dressItems.clip55,dressItems.clip54,dressItems.clip62,dressItems.clip10,dressItems.clip60,dressItems.clip87,dressItems.clip51,dressItems.clip66,dressItems.clip67,dressItems.clip70,dressItems.clip73,dressItems.clip74,dressItems.clip3,dressItems.clip52,dressItems.clip79,dressItems.clip64,dressItems.clip69,dressItems.clip75,dressItems.clip65,dressItems.clip68,dressItems.clip61,dressItems.clip88,dressItems.clip59,dressItems.clip76,dressItems.clip76_1,dressItems.clip80,dressItems.clip80_1,dressItems.clip81,dressItems.clip81_1,dressItems.clip82_du2,dressItems.clip82_du2_1,dressItems.clip89,dressItems.clip89_1,dressItems.clip90,dressItems.clip90_1,dressItems.clip91,dressItems.clip71,dressItems.ring112,dressItems.clip77,dressItems.clip78,dressItems.clip83,dressItems.clip84,dressItems.clip85,dressItems.clip82,dressItems.aclip1,dressItems.earrings210,dressItems.earrings211,dressItems.earrings_illusion1,dressItems.earrings_illusion2,dressItems.clip92,dressItems.clip93,dressItems.clip94,dressItems.clip95)},
	necklaces:{id: 'necklaces', canRune: 'yes', caption: '������� � ��������', slot: 'w2', items: new Array(dressItems.avengeramulet,dressItems.AmuletIcePower,dressItems.AmuletofFirePower,dressItems.AmuletofAirPower,dressItems.AmuletoftheEarthPower,dressItems.AmuletofAiry,dressItems.AmuletFeary,dressItems.IcyAmuletofSpirit,dressItems.AmuletofEartnen,dressItems.EarthenAmuletofHaughtiness,dressItems.IcyAmuletofHaughtiness,dressItems.FieryAmuletofHaughtiness,dressItems.AiryAmuletofHaughtiness,dressItems.NecklaceSteelWolf,dressItems.AmuletGoldScorpion,dressItems.AmuletSteelTiger,dressItems.AmuletNightdemon,dressItems.Necklacegoldenwarrior,dressItems.AmuletSteelWarrior,dressItems.AmuletofSnake,dressItems.AmuletofAztec,dressItems.voinamulet,dressItems.amulet4,dressItems.kulon783,dressItems.amulet6,dressItems.amulet2,dressItems.amulet5,dressItems.amulet70,dressItems.amulet69,dressItems.amulet1,dressItems.amulet8,dressItems.amulet66,dressItems.amulet62,dressItems.amulet53,dressItems.amulet90,dressItems.amulet63,dressItems.amulet67,dressItems.amulet7,dressItems.amulet9,dressItems.amulet56,dressItems.amulet54,dressItems.amulet65,dressItems.amulet99,dressItems.amulet100,dressItems.amulet60,dressItems.amulet3,dressItems.amulet82,dressItems.amulet55,dressItems.amulet91,dressItems.amulet58,dressItems.amulet59,dressItems.amulet73,dressItems.amulet92,dressItems.amulet94,dressItems.amulet52,dressItems.amulet50,dressItems.amulet61,dressItems.amulet71,dressItems.amulet76,dressItems.amulet77,dressItems.amulet78,dressItems.amulet79,dressItems.amulet68,dressItems.amulet51,dressItems.amulet74,dressItems.amulet64,dressItems.amulet75,dressItems.amulet75_1,dressItems.amulet80,dressItems.amulet80_1,dressItems.amulet81,dressItems.amulet81_1,dressItems.amulet83_du2,dressItems.amulet83_du2_1,dressItems.amulet86,dressItems.amulet87,dressItems.amulet88,dressItems.amulet85,dressItems.amulet97,dressItems.amulet97_1,dressItems.amulet98,dressItems.amulet98_1,dressItems.amulet96,dressItems.amulet84,dressItems.aamulet2_hs3hg2,dressItems.kulon208,dressItems.kulon209,dressItems.amulet95,dressItems.amulet57,dressItems.aamulet1,dressItems.aamulet10,dressItems.aamulet11,dressItems.amulet104,dressItems.amulet105,dressItems.amulet106,dressItems.amulet107,dressItems.amulet104_2,dressItems.amulet104_3,dressItems.amulet105_2,dressItems.amulet105_3,dressItems.amulet106_2,dressItems.amulet106_3,dressItems.amulet107_2,dressItems.amulet107_3,dressItems.amulet104_1,dressItems.amulet105_1,dressItems.amulet106_1,dressItems.amulet107_1)},
	rings:{id: 'rings', canRune: 'yes', caption: '������', slot: 'w6', items: new Array(dressItems.avengerking,dressItems.RingIcePower,dressItems.RingofFirePower,dressItems.RingofAirPower,dressItems.RingoftheEarthPower,dressItems.RingofAiry,dressItems.RingFeary,dressItems.IcyRingofSpirit,dressItems.RingofEartnen,dressItems.EarthenRingofHaughtiness,dressItems.IcyRingofHaughtiness,dressItems.FieryRingofHaughtiness,dressItems.AiryRingofHaughtiness,dressItems.RingSteelWolf,dressItems.RingGoldScorpion,dressItems.RingSteelTiger,dressItems.RingNightdemon,dressItems.Goldringwarrior,dressItems.RingofSteelWarrior,dressItems.RingofSnake,dressItems.RingofAztec,dressItems.voinkolco,dressItems.haoss6,dressItems.haoss5,dressItems.weddingring,dressItems.ring127,dressItems.ring783,dressItems.ring126,dressItems.ring82,dressItems.ring83,dressItems.ring85,dressItems.ring100,dressItems.ring63,dressItems.ring4,dressItems.ring6,dressItems.ring3,dressItems.ring106,dressItems.ring64,dressItems.ring104,dressItems.ring1,dressItems.ring61,dressItems.ring54,dressItems.ring108,dressItems.ring81,dressItems.ring123,dressItems.ring55,dressItems.ring101,dressItems.ring69,dressItems.ring7,dressItems.ring60,dressItems.ring130_2,dressItems.ring131_2,dressItems.ring67,dressItems.ring70,dressItems.ring58,dressItems.ring50,dressItems.ring77,dressItems.ring78,dressItems.ring124,dressItems.ring62,dressItems.ring59,dressItems.ring66,dressItems.ring91,dressItems.ring73,dressItems.ring52,dressItems.ring68,dressItems.ring65,dressItems.ring71,dressItems.ring86,dressItems.ring105,dressItems.ring87,dressItems.ring2,dressItems.ring97,dressItems.ring79,dressItems.ring76,dressItems.ring51,dressItems.ring95,dressItems.ring205,dressItems.ring99,dressItems.ring23f,dressItems.ring5,dressItems.ring93,dressItems.ring90,dressItems.ring88,dressItems.ring115,dressItems.ring80,dressItems.ring57,dressItems.ring96,dressItems.ring92,dressItems.ring107,dressItems.ring75,dressItems.ring118,dressItems.ring125,dressItems.ring130_1,dressItems.ring131_1,dressItems.ring110,dressItems.ring110_1,dressItems.ring116,dressItems.ring116_1,dressItems.ring117,dressItems.ring117_1,dressItems.ring119_du2,dressItems.ring119_du2_1,dressItems.ring120_si8,dressItems.ring121_si8,dressItems.ring128,dressItems.ring128_1,dressItems.ring129,dressItems.ring129_1,dressItems.ring135,dressItems.ring136,dressItems.ring84,dressItems.ring109,dressItems.ring111,dressItems.ring113,dressItems.ring114,dressItems.ring130,dressItems.ring131,dressItems.ring119,dressItems.ring120,dressItems.ring121,dressItems.ring122,dressItems.aring8,dressItems.aring12,dressItems.aring10,dressItems.aring11,dressItems.aring5,dressItems.aring13_snsfh4,dressItems.ring2008,dressItems.ring214,dressItems.ring215,dressItems.ring_illusion1,dressItems.ring_illusion2,dressItems.aring100,dressItems.ring137,dressItems.ring139,dressItems.ring140,dressItems.ring141)},
 combatscrolls:{id: 'combatscrolls', caption: '������ � �������� ��������', slot: 'w100', items: new Array(dressItems.spell_luck_300_1,dressItems.spell_luck_300_100,dressItems.mirror,dressItems.antimirror,dressItems.cureHP15,dressItems.cureHP30,dressItems.cureHP45,dressItems.cureHP60,dressItems.cureHP120,dressItems.cureHP600,dressItems.cureHP900_1,dressItems.cureHP1200_1,dressItems.cureHP1500_1,dressItems.note,dressItems.submission,dressItems.nature_burn,dressItems.preservation,dressItems.reanimationL,dressItems.reanimation,dressItems.preservationD,dressItems.closesphere,dressItems.dispell,dressItems.retreat,dressItems.spell_death,dressItems.joke_battlelog,dressItems.elementalcrit,dressItems.staff_enc8,dressItems.snowball1,dressItems.spell_seduct,dressItems.cureMana50,dressItems.spell_powerup10,dressItems.spell_powerup1,dressItems.spell_powerup2,dressItems.zma_spell,dressItems.spell_powerup3,dressItems.spell_powerup4,dressItems.spell_protect10,dressItems.spell_protect1,dressItems.spell_protect2,dressItems.spell_protect3,dressItems.spell_protect4,dressItems.spell_undamage10,dressItems.spell_unprotect10,dressItems.spell_unprotect,dressItems.spell_ug_unp10c, dressItems.spell_ug_undam1c,dressItems.spell_ug_undam2c,dressItems.spell_ug_undam3c,dressItems.spell_ug_undam4c,dressItems.spell_ug_unexprc,dressItems.dispell1,  dressItems.cureMana100,dressItems.cureMana1000,dressItems.invoke_create_lesserbloodstone,dressItems.invoke_create_bloodstone)},
	auxiliaryscrolls:{id: 'auxiliaryscrolls', caption: '����������� ��������', slot: 'w100', items: new Array (dressItems.silence60,dressItems.fsleep,dressItems.haos,dressItems.death,dressItems.cureelixir,dressItems.paper100,dressItems.paper200,dressItems.paper500,dressItems.attack,dressItems.attackk,dressItems.attackb,dressItems.attackt,dressItems.chesnok,dressItems.chesnok2,dressItems.cure_g1,dressItems.teleport,dressItems.teleport_some,dressItems.sharpen_sword_1,dressItems.sharpen_sword_2,dressItems.sharpen_sword_3,dressItems.sharpen_sword_4,dressItems.sharpen_sword_5,dressItems.sharpen_knife_1,dressItems.sharpen_knife_2,dressItems.sharpen_knife_3,dressItems.sharpen_knife_4,dressItems.sharpen_knife_5,dressItems.sharpen_axe_1,dressItems.sharpen_axe_2,dressItems.sharpen_axe_3,dressItems.sharpen_axe_4,dressItems.sharpen_axe_5,dressItems.sharpen_molot_1,dressItems.sharpen_molot_2,dressItems.sharpen_molot_3,dressItems.sharpen_molot_4,dressItems.sharpen_molot_5,dressItems.sharpen_staff_1,dressItems.sharpen_staff_2,dressItems.sharpen_staff_3,dressItems.sharpen_staff_4,dressItems.sharpen_staff_5,dressItems.sharpen_all_7,dressItems.sharpen_all_10,dressItems.hidden,dressItems.illusion,dressItems.undef,dressItems.scanner,dressItems.trap,dressItems.chains,dressItems.osinkol,dressItems.build_in,dressItems.bloodyelement,dressItems.box_lock,dressItems.travma,dressItems.downgrade,dressItems.open_present_val,dressItems.shout,dressItems.spell_luck,dressItems.spell_godstat_str,dressItems.spell_godstat_dex,dressItems.spell_godstat_inst,dressItems.spell_godprotect10,dressItems.zma,dressItems.spell_godprotect,dressItems.invoke_spell_godintel100,dressItems.invoke_spell_godmana100,dressItems.spell_starshine,dressItems.spell_startenacity,dressItems.spell_starenergy,dressItems.spell_stat_intel,dressItems.invoke_plain_1s_str10,dressItems.invoke_plain_1s_dex10,dressItems.invoke_plain_1s_inst10,dressItems.invoke_plain_1s_intel10,dressItems.invoke_plain_1s_all5,dressItems.invoke_plain_1s_spirit10,dressItems.spell_powerHPup1,dressItems.spell_powerHPup2,dressItems.spell_powerHPup3,dressItems.spell_powerHPup4,dressItems.spell_powerHPup5,dressItems.spell_powerHPdn1,dressItems.spell_powerHPdn2,dressItems.spell_powerHPdn3,dressItems.spell_powerHPdn4,dressItems.spell_powerHPdn5,dressItems.spell_ritual001,dressItems.jail,dressItems.joke_system,dressItems.joke_block,dressItems.joke_name,dressItems.joke_items,dressItems.joke_stat,dressItems.spell_curse,dressItems.spell_curseb,dressItems.d_blat_6,dressItems.d_blat24,dressItems.pet_rename,dressItems.spell_curset,dressItems.spell_cursek,dressItems.sealroom,dressItems.spell_freedom30,dressItems.invoke_snowball_start,dressItems.spell_kissofkassandra1)},
	summonscrolls:{id: 'summonscrolls', caption: '�������� �������', slot: 'w100', items: new Array(dressItems.summon_pet_cat,dressItems.summon_pet_owl,dressItems.summon_pet_demon,dressItems.summon_pet_wisp,dressItems.summon_pet_dog,dressItems.summon_pet_pig)},
	tacticalscrolls:{id: 'tacticalscrolls', caption: '�������� �������', slot: 'w100', items: new Array(dressItems.magearmor,dressItems.sp_tacpts_HIT1,dressItems.sp_tacpts_HIT2,dressItems.sp_tacpts_HIT3,dressItems.sp_tacpts_HIT4,dressItems.sp_tacpts_HIT5,dressItems.sp_tacpts_KRT1,dressItems.sp_tacpts_KRT2,dressItems.sp_tacpts_KRT3,dressItems.sp_tacpts_KRT4,dressItems.sp_tacpts_KRT5,dressItems.sp_tacpts_CNTR1,dressItems.sp_tacpts_CNTR2,dressItems.sp_tacpts_CNTR3,dressItems.sp_tacpts_CNTR4,dressItems.sp_tacpts_CNTR5,dressItems.sp_tacpts_BLK1,dressItems.sp_tacpts_BLK2,dressItems.sp_tacpts_BLK3,dressItems.sp_tacpts_BLK4,dressItems.sp_tacpts_BLK5,dressItems.sp_tacpts_PRY1,dressItems.sp_tacpts_PRY2,dressItems.sp_tacpts_PRY3,dressItems.sp_tacpts_PRY4,dressItems.sp_tacpts_PRY5)},
	enchantscrolls:{id: 'enchantscrolls', caption: '�������� ���������', items: new Array(dressItems.enhp_3_copower2,dressItems.enhp_3_manabuff1,dressItems.enhp_3_cointel3,dressItems.enhp_5_dampen_all_1,dressItems.enhp_5_defend_all_1,dressItems.enhp_13_pm_revard,dressItems.enhp_6_bloodlinew1,dressItems.enhp_6_bloodlinem1,dressItems.enhp_6_bloodlinew2,dressItems.enhp_6_bloodlinem2,dressItems.enhp_3_moder_4,dressItems.enhp_11_moder_3,dressItems.enhp_3_moder_6,dressItems.enhp_4_moder_2,dressItems.enhp_9_moder_1,dressItems.enhp_3_moder_5,dressItems.enhp_11_moder_3_1,dressItems.enhp_3_moder_6_1,dressItems.enhp_4_moder_2_1,dressItems.enhp_9_moder_1_1,dressItems.enhp_4_solidarity_1,dressItems.enhp_4_solidarity_2,dressItems.enhp_3_lightning_1,dressItems.enhp_3_decay_1)},
	books:{id: 'books', caption: '�����', slot: 'wbook', items: new Array(dressItems.abook1,dressItems.abook2,dressItems.abook3,dressItems.booklearn_1,dressItems.booklearn_2,dressItems.booklearn_3,dressItems.booklearn_4,dressItems.booklearn_5,dressItems.booklearn_6,dressItems.booklearn_7,dressItems.booklearn_8,dressItems.booklearn_9,dressItems.booklearn_10,dressItems.booklearn_spell1,dressItems.booklearn_spell4,dressItems.booklearn_spell7,dressItems.booklearn_spell2,dressItems.booklearn_spell3,dressItems.booklearn_spell5,dressItems.booklearn_spell10,dressItems.booklearn_spell13,dressItems.booklearn_spell9,dressItems.booklearn_spell8,dressItems.booklearn_spell14,dressItems.booklearn_spell12,dressItems.booklearn_spell11,dressItems.booklearn_spell16,dressItems.booklearn_spell17,dressItems.booklearn_spell19,dressItems.booklearn_spell21,dressItems.booklearn_spell15,dressItems.booklearn_spell18,dressItems.booklearn_spell20,dressItems.booklearn_spell22,dressItems.booklearn_spell23,dressItems.booklearn_spell24,dressItems.booklearn_spell28,dressItems.booklearn_spell29,dressItems.booklearn_spell25,dressItems.booklearn_spell27,dressItems.booklearn_slot7,dressItems.booklearn_slot8,dressItems.booklearn_slot9,dressItems.booklearn_slot10,dressItems.booklearn_slot11,dressItems.booklearn_slot21,dressItems.booklearn_slot22,dressItems.booklearn_slot23,dressItems.booklearn_slot27)},
	carmanitems:{id: 'carmanitems', caption: '������� :)', slot: 'w14', items: new Array(dressItems.invoke_kar1_heal10,dressItems.invoke_kar2_mana10,dressItems.invoke_kar3_basil,dressItems.invoke_kar3_potpg,dressItems.invoke_kar3_lifew,dressItems.invoke_kar3_dust,dressItems.invoke_kar3_mush,dressItems.invoke_1s_random)},
	potions:{id: 'potions', caption: '����� � ��������', items: new Array(dressItems.ambrozija,dressItems.pot_cureHP100_20,dressItems.pot_cureHP250_20,dressItems.pot_curemana200_30,dressItems.pot_base_50_regeneration,dressItems.pot_curemana500_20,dressItems.pot_base_50_mana_regen,dressItems.pot_base_50_fireproof,dressItems.pot_base_50_airproof,dressItems.pot_base_50_waterproof,dressItems.pot_base_50_earthproof,dressItems.pot_base_50_magicproof,dressItems.pot_base_150_fireproof,dressItems.pot_base_150_airproof,dressItems.pot_base_150_waterproof,dressItems.pot_base_150_earthproof,dressItems.pot_base_50_rezproof,dressItems.pot_base_50_kolproof,dressItems.pot_base_50_drobproof,dressItems.pot_base_50_rubproof,dressItems.pot_base_50_str,dressItems.pot_base_50_dex,dressItems.pot_base_50_inst,dressItems.pot_base_50_intel,dressItems.pot_base_50_damageproof,dressItems.pot_base_100_allmag1,dressItems.pot_base_200_allmag2,dressItems.pot_base_200_allmag3,dressItems.pot_base_200_alldmg2,dressItems.pot_base_200_alldmg3,dressItems.pot_cureHP600_50,dressItems.standart_curse,dressItems.pot_base_200_bot3,dressItems.pot_base_200_bot2,dressItems.pot_base_200_bot1,dressItems.lovka20,dressItems.pot_base_200_bot4,dressItems.pot_base_100_str,dressItems.pot_base_100_dex,dressItems.pot_anti_disease_5,dressItems.pot_base_0_ny_ele,dressItems.pot_base_0_ny1,dressItems.pot_base_0_ny2,dressItems.pot_base_0_ny3,dressItems.pot_base_200_alldmg2_p1k,dressItems.pot_base_200_allmag2_p1k,dressItems.pot_base_1000_str,dressItems.pot_base_1000_dex,dressItems.pot_base_1000_inst,dressItems.pot_base_50_dex2,dressItems.pot_base_50_str2,dressItems.pot_base_50_inst2,dressItems.pot_base_50_intel2,dressItems.pot_base_200_bot_pm1,dressItems.pot_base_200_bot_pm2)},
	foods:{id: 'foods', caption: '��������', items: new Array(dressItems.food_l41,dressItems.food_l61,dressItems.food_l71,dressItems.food_l8,dressItems.food_8m1,dressItems.food_8m2,dressItems.food_8m1e,dressItems.pot_base_0_ny_ele3,dressItems.pot_base_0_ny_ele2,dressItems.pot_base_0_ny_ele4,dressItems.pot_cureHP10000_0,dressItems.food_l5_eng,dressItems.pot_base_0_8m1,dressItems.food_l11_e,dressItems.food_l10_e,dressItems.pot_base_0_8m2,dressItems.pot_base_0_2007_1,dressItems.pot_base_0_2007_6,dressItems.pot_base_0_2007_4,dressItems.pot_base_0_2007_2,dressItems.pot_base_0_2007_3,dressItems.pot_base_0_2007_8,dressItems.pot_base_0_2007_7,dressItems.pot_base_0_2007_5,dressItems.pot_base_0_8m3)},
	petfoods:{id: 'petfoods', caption: '����', items: new Array(dressItems.pet_food_cat20,dressItems.pet_food_owl20,dressItems.pet_food_chrt20,dressItems.pet_food_dog20,dressItems.pet_food_cat20_2,dressItems.pet_food_dog20_2,dressItems.pet_food_cat20_4,dressItems.pet_food_wisp20,dressItems.pet_food_chrt20_3,dressItems.pet_food_cat20_6,dressItems.pet_food_owl20_4,dressItems.pet_food_owl20_6,dressItems.pet_food_cat20_8,dressItems.pet_food_wisp20_2,dressItems.pet_food_chrt20_6,dressItems.pet_food_owl20_8,dressItems.pet_food_chrt20_8,dressItems.pet_food_cat20_10,dressItems.pet_food_wisp20_4,dressItems.pet_food_chrt20_10,dressItems.pet_food_dog20_10,dressItems.pet_food_wisp20_6,dressItems.pet_food_wisp20_8,dressItems.pet_food_pig20,dressItems.pet_food_pig20_2,dressItems.pet_food_pig20_4,dressItems.pet_food_pig20_8,dressItems.pet_food_pig20_10)},
	flowers:{id: 'flowers', caption: '������', slot: 'w3', items: new Array(dressItems.fp_tulip1dsfg,dressItems.fp_tulip3vwet,dressItems.fp_tulip5cvwe,dressItems.fp_tulip7cwefw,dressItems.fp_tulip9cwef,dressItems.fp_tulip21fgkj,dressItems.fp_narcissus1dge3,dressItems.fp_narcissus3bv4sds,dressItems.fp_narcissus5vergwe,dressItems.fp_narcissus7vsdegw,dressItems.fp_narcissus9vergt,dressItems.fp_narcissus21gf4t,dressItems.fp_chrysanthemum3fsh,dressItems.fp_chrysanthemum5sddsgf,dressItems.fp_chrysanthemum7f34,dressItems.fp_chrysanthemum9g45t,dressItems.fp_chrysanthemum21g4tg,dressItems.fp_b3sdfsd,dressItems.fp_b5sds2,dressItems.fp_b7dsfw,dressItems.fp_b9s3ga,dressItems.fp_b21sdff,dressItems.fp_yrose3dfe,dressItems.fp_yrose5dfs,dressItems.fp_yrose7sd3,dressItems.fp_yrose9dfw3,dressItems.fp_yrose21dfsew,dressItems.fp_wrose9vsergt,dressItems.fp_wrose21mkdefj,dressItems.fp_black,dressItems.fp_rose_1ejdi3,dressItems.fp_rose_5eudmje,dressItems.fp_rose_21dfioehjf,dressItems.fp_rose_25zzz,dressItems.fp_magnolia1vfe,dressItems.fp_magnolia3dg3f,dressItems.fp_magnolia5lojosd,dressItems.fp_magnolia7cvs9,dressItems.fp_magnolia9v34t,dressItems.fp_magnolia21gew3,dressItems.fp_lotus_1fksdfkd,dressItems.fp_lotus_3sdcfse,dressItems.fp_lotus_5sdsd,dressItems.fp_lotus_7vsw,dressItems.fp_lotus_9verg,dressItems.fp_lotus_21svs,dressItems.fp_kantubaki1mmbey0,dressItems.fp_kantubaki3ki3,dressItems.fp_kantubaki5mxkde72,dressItems.fp_kantubaki7pp837,dressItems.fp_kantubaki9mjdfh,dressItems.fp_kantubaki21mcmk4,dressItems.fp_kikyou1fsdg,dressItems.fp_kikyou3ver4t,dressItems.fp_kikyou5vert,dressItems.fp_kikyou7bvert34,dressItems.fp_kikyou9vfset,dressItems.fp_kikyou21bdljr,dressItems.fp_landish1mcgl2,dressItems.fp_landish3sdfsdf,dressItems.fp_landish5asdf8,dressItems.fp_landish7dv9,dressItems.fp_landish9sd5qx,dressItems.fp_landish21d348j,dressItems.fp_lillyp1cnvf83,dressItems.fp_lillyp3xxa2d,dressItems.fp_lillyp5pfme96,dressItems.fp_lillyp7lgfdd,dressItems.fp_lillyp9dfo933,dressItems.fp_lillyp21mxx92,dressItems.fp_cosmos3sfsafs,dressItems.fp_cosmos5sdfw3,dressItems.fp_cosmos7sdfsd,dressItems.fp_cosmos9vjwsu,dressItems.fp_cosmos21sdf3j,dressItems.fp_verba1,dressItems.fp_verba11,dressItems.f_forget_me_not21_kjkjklk,dressItems.fp_sunflover21dei,dressItems.fp_hanana21dfsd,dressItems.fikus,dressItems.kaktus,dressItems.fp_mimoza,dressItems.fp_fire3,dressItems.fp_fire7,dressItems.fp_ice3,dressItems.fp_ice7,dressItems.realflower1,dressItems.realflower10,dressItems.realflower11,dressItems.realflower12,dressItems.realflower13,dressItems.realflower14,dressItems.realflower15,dressItems.realflower16,dressItems.realflower17,dressItems.realflower18,dressItems.realflower2,dressItems.realflower3,dressItems.realflower4,dressItems.realflower5,dressItems.realflower6,dressItems.realflower7,dressItems.realflower8,dressItems.realflower9,dressItems.fp_rom7,dressItems.fp_glad7,dressItems.fp_pion7)},
	firs:{id: 'firs', caption: '����', slot: 'w3', items: new Array(dressItems.gnel1,dressItems.gnel2,dressItems.gnel3,dressItems.nel1,dressItems.nel2,dressItems.nel3,dressItems.el1,dressItems.el2,dressItems.el3,dressItems.elka_w1,dressItems.elka_w2,dressItems.elka_w3,dressItems.elka_w4,dressItems.elka_w5,dressItems.elka_w6,dressItems.elka_w7,dressItems.elka_w8,dressItems.elka_w9,dressItems.elka_w10,dressItems.elka_w11,dressItems.elka_w12,dressItems.elka_w13,dressItems.elka_w14,dressItems.elka_w15,dressItems.elka_w16,dressItems.elka_w17,dressItems.elka_w18,dressItems.elka_w19,dressItems.elka_w20,dressItems.elka_w21,dressItems.elka_w22,dressItems.elka_w23,dressItems.elka_w24,dressItems.elka_w25,dressItems.elka_w26,dressItems.elka_w27,dressItems.elka_w28,dressItems.elka_w29)},
	design:{id: 'design', caption: '����� � ����������', items: new Array(dressItems.f_tulip,dressItems.f_narcissus,dressItems.f_yrose,dressItems.f_chrysanthemum,dressItems.f_kantubaki,dressItems.f_landish,dressItems.f_hydrangea,dressItems.f_lillyp,dressItems.f_magnolia,dressItems.f_lotus,dressItems.f_cosmos,dressItems.f_rose,dressItems.f_bluebell,dressItems.f_forget_me_not,dressItems.f_sunflower,dressItems.f_design1,dressItems.f_design2,dressItems.f_design3,dressItems.f_design4,dressItems.f_design5,dressItems.vase,dressItems.postcard,dressItems.f_faded_posy,dressItems.elka_vetv2,dressItems.elka_vetv1,dressItems.shar1_2005,dressItems.shar2_2005,dressItems.shar3_2005,dressItems.shar4_2005,dressItems.shar5_2005,dressItems.shar6_2005,dressItems.shar7_2005,dressItems.shar8_2005,dressItems.svechka1,dressItems.svechka2,dressItems.svechka3,dressItems.bengal1,dressItems.elka_base1,dressItems.ny06ball1,dressItems.ny06ball2,dressItems.ny06ball12,dressItems.ny06ball11,dressItems.ny06ball10,dressItems.ny06ball9,dressItems.ny06ball8,dressItems.ny06ball7,dressItems.ny06ball6,dressItems.ny06ball5,dressItems.ny06ball4,dressItems.ny06ball3,dressItems.fl_sem_fire1,dressItems.fl_sem_fire2,dressItems.fl_sem_fire3,dressItems.fl_sem_fire4,dressItems.fl_sem_fire5,dressItems.fl_sem_fire6,dressItems.fl_sem_fire7,dressItems.fl_sem_ice1,dressItems.fl_sem_ice2,dressItems.fl_sem_ice3,dressItems.fl_sem_ice4,dressItems.fl_sem_ice5,dressItems.fl_sem_ice6,dressItems.fl_sem_ice7,dressItems.f_rom,dressItems.f_glad,dressItems.f_pion)},
	filters:{id: 'filters', caption: 'filters', items: new Array()},
	darkclan:{id: 'darkclan', caption: 'darkclan', items: new Array()},
	exchangePoints:{id: 'exchangePoints', caption: 'exchangePoints', items: new Array()},
	statBonuses:{id: 'statBonuses', caption: 'statBonuses', items: new Array()},
	secondWeapons: {id: 'secondWeapons', caption: '������ ������', slot: 'w10', items: new Array(dressItems.avengerdagger,dressItems.SwordSteelWolf2,dressItems.AxeSteelWolf,dressItems.AxeSteelWarrior,dressItems.DaggerGoldScorpion,dressItems.HammerSteelTiger,dressItems.DaggerNightdemon,dressItems.AxeNightdemon,dressItems.Macegoldenwarrior,dressItems.SteelSwordWarrior,dressItems.DaggerofSnake,dressItems.HammerofAztec,dressItems.voinkingal2,dressItems.axe783,dressItems.knife783,dressItems.knife63,dressItems.knife59,dressItems.knife61,dressItems.knife52,dressItems.knife69,dressItems.knife67,dressItems.knife64,dressItems.knife54,dressItems.knife56,dressItems.knife58,dressItems.knife62,dressItems.dagger70,dressItems.knife57,dressItems.knife68,dressItems.dagger71,dressItems.knife60,dressItems.knife55,dressItems.knife51,dressItems.knife70,dressItems.knife11,dressItems.knife53,dressItems.knife71,dressItems.knife72,dressItems.knife73,dressItems.knife74_du2,dressItems.knife76,dressItems.knife205,dressItems.knife206,dressItems.aknife1,dressItems.axe19,dressItems.axe50,dressItems.axe1,dressItems.axe20,dressItems.axe11,dressItems.axe53,dressItems.axe77,dressItems.axe78,dressItems.axe80,dressItems.axe60,dressItems.axe84,dressItems.axe63,dressItems.axe79,dressItems.axe67,dressItems.axe59,dressItems.axe88,dressItems.axe90,dressItems.mace51,dressItems.sword97,dressItems.sword75,dressItems.sword60,dressItems.sword85,dressItems.sword54,dressItems.sword87,dressItems.sword83,dressItems.sword102,dressItems.knife77,dressItems.kostyl1,dressItems.kostyl2,dressItems.apero1)}
	};
var dressSets = {
	

	

	

	

	

	forest: {id: 'forest', caption: '�������� ������', count: 14,
		required: {level:7},details: {			forest13: {id: 'forest13',
		required: {minitemscount:13,maxitemscount:14},
		modify: {anticriticalhit:25,defence:30,antijumpaway:25,airmagicdefence:15,watermagicdefence:15,earthmagicdefence:15}
			}
	}},

	

	

	

	

	siege: {id: 'siege', caption: '�������� �������', count: 12,
		required: {level:8},details: {			siege10: {id: 'siege10',
		required: {minitemscount:10,maxitemscount:13},
		modify: {anticriticalhit:30,antijumpaway:30,hitpoints:60}
			},
			siege9: {id: 'siege9',
		required: {minitemscount:7,maxitemscount:9},
		modify: {anticriticalhit:30,antijumpaway:30}
			},
			siege6: {id: 'siege6',
		required: {minitemscount:4,maxitemscount:6},
		modify: {anticriticalhit:30}
			}
	}},

	firedown: {id: 'firedown', caption: '�������� �������� ����', count: 14,
		required: {level:8},details: {			firedwn12: {id: 'firedwn12',
		required: {minitemscount:12,maxitemscount:14},
		modify: {anticriticalhit:20,parry:5,hitpoints:50}
			},
			firedown11: {id: 'firedown11',
		required: {minitemscount:8,maxitemscount:11},
		modify: {anticriticalhit:20,parry:5}
			},
			firedown7: {id: 'firedown7',
		required: {minitemscount:4,maxitemscount:7},
		modify: {anticriticalhit:20}
			}
	}},

	sunset: {id: 'sunset', caption: '�������� ������', count: 13,
		required: {level:8},details: {			sunset12: {id: 'sunset12',
		required: {minitemscount:12,maxitemscount:13},
		modify: {criticalhit:25,anticriticalhit:20,antijumpaway:25,hitpoints:50}
			},
			sunset11: {id: 'sunset11',
		required: {minitemscount:8,maxitemscount:11},
		modify: {criticalhit:25,anticriticalhit:20,antijumpaway:25}
			},
			sunset7: {id: 'sunset7',
		required: {minitemscount:4,maxitemscount:7},
		modify: {criticalhit:25}
			}
	}},

	flash: {id: 'flash', caption: '�������� ������', count: 8,
		required: {level:8},details: {			flash8: {id: 'flash8',
		required: {itemscount:8},
		modify: {anticriticalhit:35,hitpoints:50,antijumpaway:35,weaponskill:1}
			},
			flash6: {id: 'flash6',
		required: {minitemscount:6,maxitemscount:7},
		modify: {anticriticalhit:35,hitpoints:50,antijumpaway:35}
			},
			flash4: {id: 'flash4',
		required: {minitemscount:4,maxitemscount:5},
		modify: {anticriticalhit:35,antijumpaway:35}
			},
			flash2: {id: 'flash2',
		required: {minitemscount:2,maxitemscount:3},
		modify: {antijumpaway:35}
			}
	}},

	fire: {id: 'fire', caption: '�������� ����', count: 5,
		required: {level:8},details: {			fire5: {id: 'fire5',
		required: {itemscount:5},
		modify: {manaconsumption:5,firemagicpower:10}
			}
	}},

	

	
	

	


	twilightstorm: {id: 'twilightstorm', caption: '�������� ���������� ����', count: 5,
		required: {level:8},details: {	twilightstorm5: {id: 'twilightstorm5',
		required: {itemscount:5},
		modify: {airmagicpower:10,manaconsumption:5}
			}
	}},

	

	granitepower: {id: 'granitepower', caption: '�������� ��������� ������', count: 5,
		required: {level:8},details: {			granitepower5: {id: 'granitepower5',
		required: {itemscount:5},
		modify: {earthmagicpower:10,manaconsumption:5}
			}
	}},

	

	wanderer: {id: 'wanderer', caption: '�������� Desert [8]', count: 14,
		required: {level:8},details: {			wanderer13: {id: 'wanderer13',
		required: {minitemscount:13,maxitemscount:14},
		modify: {weaponskill:1,hitpoints:33,magicdefence:20,defence:20}
			},
			wanderer9: {id: 'wanderer9',
		required: {minitemscount:9,maxitemscount:12},
		modify: {weaponskill:1,hitpoints:33,magicdefence:20}
			},
			wanderer5: {id: 'wanderer5',
		required: {minitemscount:5,maxitemscount:8},
		modify: {weaponskill:1,hitpoints:33}
			}
	}},

	GoldScorpion: {id: 'GoldScorpion', caption: '�������� GoldScorpion [11]', count: 14, 
		required: {level:11},details: {

		GoldScorpion13: {id: 'GoldScorpion13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {antijumpaway:65,jumpaway:85,counterstroke:5}
			},
		GoldScorpion11: {id: 'GoldScorpion11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {antijumpaway:60,jumpaway:75,counterstroke:4}
			},
		GoldScorpion8: {id: 'GoldScorpion8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {antijumpaway:40,jumpaway:65,counterstroke:4}
			},
		GoldScorpion5: {id: 'GoldScorpion5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:45,antijumpaway:55,jumpaway:45}
			}
	}},
	
	
	Snake: {id: 'Snake', caption: '�������� Snake [9]', count: 14, 
		required: {level:9},details: {

		Snake13: {id: 'Snake13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {antijumpaway:45,jumpaway:65,counterstroke:4}
			},
		Snake11: {id: 'Snake11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {antijumpaway:55,jumpaway:40,counterstroke:3}
			},
		Snake8: {id: 'Snake8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {antijumpaway:45,jumpaway:20,counterstroke:3}
			},
		Snake5: {id: 'Snake5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:25,antijumpaway:25,jumpaway:35}
			}
	}},
	
        Aztecs: {id: 'Aztecs', caption: '�������� Aztecs [8]', count: 14, 
		required: {level:8},details: {

		Aztecs13: {id: 'Aztecs13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {hitpoints:45,anticriticalhit:40,antijumpaway:65}
			},
		Aztecs11: {id: 'Aztecs11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {hitpoints:35,anticriticalhit:25,antijumpaway:40}
			},
		Aztecs8: {id: 'Aztecs8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {hitpoints:25,anticriticalhit:15,antijumpaway:25} 
    
			},
		Aztecs5: {id: 'Aztecs5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {anticriticalhit:10,antijumpaway:10}
			}
	}}, 
	
	
	SteelTiger: {id: 'SteelTiger', caption: '�������� SteelTiger [11]', count: 14, 
		required: {level:11},details: {

		SteelTiger13: {id: 'SteelTiger13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {antijumpaway:65,anticriticalhit:85,parry:6}
			},
		SteelTiger11: {id: 'SteelTiger11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {antijumpaway:60,anticriticalhit:75,parry:5}
			},
		SteelTiger8: {id: 'SteelTiger8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {antijumpaway:40,anticriticalhit:55,parry:4}
			},
		SteelTiger5: {id: 'SteelTiger5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:45,antijumpaway:45,anticriticalhit:55}
			}
	}},
	
	
		goldenwarrior: {id: 'goldenwarrior', caption: '�������� GoldenWarrior [9]', count: 14, 
		required: {level:9},details: {

		goldenwarrior13: {id: 'goldenwarrior13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {antijumpaway:45,anticriticalhit:65,parry:4}
			},
		goldenwarrior11: {id: 'goldenwarrior11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {antijumpaway:40,anticriticalhit:55,parry:3}
			},
		goldenwarrior8: {id: 'goldenwarrior8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {antijumpaway:20,anticriticalhit:45,parry:3}
			},
		goldenwarrior5: {id: 'goldenwarrior5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:25,antijumpaway:25,anticriticalhit:35}
			}
	}},
	
		Jaguar: {id: 'Jaguar', caption: '�������� Jaguar [8]', count: 14, 
		required: {level:8},details: {

		Jaguar13: {id: 'Jaguar13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {antijumpaway:15,criticalhit:40,jumpaway:65,thrustpower:15}
			},
		Jaguar11: {id: 'Jaguar11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {antijumpaway:10,criticalhit:25,jumpaway:40}
			},
		Jaguar8: {id: 'Jaguar8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {antijumpaway:5,criticalhit:15,jumpaway:25} 
    
			},
		Jaguar5: {id: 'Jaguar5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {criticalhit:10,jumpaway:10}
			}
	}}, 

	SteelWarrior: {id: 'SteelWarrior', caption: '�������� SteelWarrior [9]', count: 14, 
		required: {level:9},details: {

		SteelWarrior13: {id: 'SteelWarrior13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {antijumpaway:45,criticalhit:65,criticalpower:4}
			},
		SteelWarrior11: {id: 'SteelWarrior11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {antijumpaway:40,criticalhit:55,criticalpower:3}
			},
		SteelWarrior8: {id: 'SteelWarrior8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {antijumpaway:25,criticalhit:35,criticalpower:3}
			},
		SteelWarrior5: {id: 'SteelWarrior5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:25,antijumpaway:25,criticalhit:35}
			}
	}},
	
	SteelWolf: {id: 'SteelWolf', caption: '�������� SteelWolf [11]', count: 14, 
		required: {level:11},details: {

		SteelWolf13: {id: 'SteelWolf13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {criticalhit:85,antijumpaway:65,criticalpower:6}
			},
		SteelWolf11: {id: 'SteelWolf11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {criticalpower:5,criticalhit:75,antijumpaway:60}
			},
		SteelWolf8: {id: 'SteelWolf8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {criticalpower:4,criticalhit:65,antijumpaway:45}
			},
		SteelWolf5: {id: 'SteelWolf5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:45,criticalhit:55,antijumpaway:45}
			}
	}},
	NightDemon: {id: 'NightDemon', caption: '�������� NightDemon [11]', count: 14, 
		required: {level:11},details: {

		NightDemon13: {id: 'NightDemon13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {antijumpaway:20,criticalhit:65,jumpaway:85,thrustpower:20}
			},
		NightDemon11: {id: 'NightDemon11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {antijumpaway:10,criticalhit:60,jumpaway:75}
			},
		NightDemon8: {id: 'NightDemon8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {antijumpaway:10,criticalhit:40,jumpaway:65}
			},
		NightDemon5: {id: 'NightDemon5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:35,criticalhit:45,jumpaway:55}
			}
	}},

	Revenge: {id: 'Revenge', caption: '�������� Revenge [9]', count: 14, 
		required: {level:9},details: {

		Revenge13: {id: 'Revenge13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {antijumpaway:10,criticalhit:45,jumpaway:65,thrustpower:15}
			},
		Revenge11: {id: 'Revenge11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {antijumpaway:5,criticalhit:40,jumpaway:55}
			},
		Revenge8: {id: 'Revenge8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {antijumpaway:5,criticalhit:20,jumpaway:45}
			},
		Revenge5: {id: 'Revenge5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:25,criticalhit:25,jumpaway:35}
			}
	}},
FirePower: {id: 'FirePower', caption: '�������� FirePower [11]', count: 13, 
		required: {level:11},details: {

		FirePower12: {id: 'FirePower12',
		required: {minitemscount:11,maxitemscount:14},
		modify: {manaconsumption:5,firemagicpower:11,hitpoints:45,mana:65}
			},
		FirePower11: {id: 'FirePower11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {mana:45,firemagicpower:9,anticriticalhit:45}
			},
		FirePower8: {id: 'FirePower8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {manaconsumption:4,firemagicpower:8}
			},
		FirePower5: {id: 'FirePower5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:55,mana:35,firemagicpower:5}
			}
	}},
	
FieryofGolem: {id: 'FieryofGolem', caption: '�������� FieryofGolem [9]', count: 13, 
		required: {level:9},details: {

		FieryofGolem12: {id: 'FieryofGolem12',
		required: {minitemscount:11,maxitemscount:14},
		modify: {manaconsumption:3,firemagicpower:10,hitpoints:25,mana:45}
			},
		FieryofGolem11: {id: 'FieryofGolem11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {mana:35,firemagicpower:7,anticriticalhit:25}
			},
		FieryofGolem8: {id: 'FieryofGolem8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {manaconsumption:3,firemagicpower:7}
			},
		FieryofGolem5: {id: 'FieryofGolem5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:35,mana:25,firemagicpower:3}
			}
	}},
IcePower: {id: 'IcePower', caption: '�������� IcePower [11]', count: 13, 
		required: {level:11},details: {

		IcePower12: {id: 'IcePower12',
		required: {minitemscount:11,maxitemscount:14},
		modify: {magicdefence:55,watermagicpower:9,defence:65,hitpoints:55}
			},
		IcePower11: {id: 'IcePower11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {magicdefence:95,watermagicpower:8,anticriticalhit:25}
			},
		IcePower8: {id: 'IcePower8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {defence:75,watermagicpower:7}
			},
		IcePower5: {id: 'IcePower5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:45,mana:30,magicdefence:30}
			}
	}},
IcyofGolem: {id: 'IcyofGolem', caption: '�������� IcyofGolem [9]', count: 13, 
		required: {level:9},details: {

		IcyofGolem12: {id: 'IcyofGolem12',
		required: {minitemscount:11,maxitemscount:14},
		modify: {magicdefence:35,watermagicpower:7,defence:55,hitpoints:35}
			},
		IcyofGolem11: {id: 'IcyofGolem11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {magicdefence:85,watermagicpower:5,anticriticalhit:15}
			},
		IcyofGolem8: {id: 'IcyofGolem8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {defence:65,watermagicpower:5}
			},
		IcyofGolem5: {id: 'IcyofGolem5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:25,mana:35,magicdefence:25}
			}
	}},

EarthPower: {id: 'EarthPower', caption: '�������� EarthPower [11]', count: 13, 
		required: {level:11},details: {

		
		EarthPower11: {id: 'EarthPower11',
		required: {minitemscount:9,maxitemscount:14},
		modify: {hitpoints:70,mana:85,earthmagicpower:8,manaconsumption:5}
			},
		EarthPower8: {id: 'EarthPower8',
		required: {minitemscount:7,maxitemscount:8},
		modify: {mana:75,earthmagicpower:7}
			},
		EarthPower5: {id: 'EarthPower5',
		required: {minitemscount:5,maxitemscount:6},
		modify: {hitpoints:75,mana:45,anticriticalhit:20}
			}
	}},

EartnenofGolem: {id: 'EartnenofGolem', caption: '�������� EartnenofGolem [9]', count: 13, 
		required: {level:9},details: {

		
		EartnenofGolem11: {id: 'EartnenofGolem11',
		required: {minitemscount:9,maxitemscount:14},
		modify: {hitpoints:50,mana:75,earthmagicpower:7,manaconsumption:3}
			},
		EartnenofGolem8: {id: 'EartnenofGolem8',
		required: {minitemscount:7,maxitemscount:8},
		modify: {mana:65,earthmagicpower:5}
			},
		EartnenofGolem5: {id: 'EartnenofGolem5',
		required: {minitemscount:5,maxitemscount:6},
		modify: {hitpoints:55,mana:35,anticriticalhit:10}
			}
	}},

EarthenofHaughtiness: {id: 'EarthenofHaughtiness', caption: '�������� HaughtinessofEarthen [8]', count: 13, 
		required: {level:8},details: {

		
		EarthenofHaughtiness11: {id: 'EarthenofHaughtiness11',
		required: {minitemscount:9,maxitemscount:14},
		modify: {hitpoints:25,mana:25,magicskill:1,anticriticalhit:25,defence:25,magicdefence:25}
			},
		EarthenofHaughtiness8: {id: 'EarthenofHaughtiness8',
		required: {minitemscount:7,maxitemscount:8},
		modify: {hitpoints:25,mana:25,magicskill:1}
			},
		EarthenofHaughtiness5: {id: 'EarthenofHaughtiness5',
		required: {minitemscount:5,maxitemscount:6},
		modify: {hitpoints:25,mana:25}
			}
	}},

	IcyofHaughtiness: {id: 'IcyofHaughtiness', caption: '�������� HaughtinessofIcy [8]', count: 13, 
		required: {level:8},details: {

		
		IcyofHaughtiness11: {id: 'IcyofHaughtiness11',
		required: {minitemscount:9,maxitemscount:14},
		modify: {hitpoints:25,mana:25,magicskill:1,anticriticalhit:25,defence:25,magicdefence:25}
			},
		IcyofHaughtiness8: {id: 'IcyofHaughtiness8',
		required: {minitemscount:7,maxitemscount:8},
		modify: {hitpoints:25,mana:25,magicskill:1}
			},
		IcyofHaughtiness5: {id: 'IcyofHaughtiness5',
		required: {minitemscount:5,maxitemscount:6},
		modify: {hitpoints:25,mana:25}
			}
	}},
	
FieryofHaughtiness: {id: 'FieryofHaughtiness', caption: '�������� HaughtinessofFiery [8]', count: 13, 
		required: {level:8},details: {

		
		FieryofHaughtiness11: {id: 'FieryofHaughtiness11',
		required: {minitemscount:9,maxitemscount:14},
		modify: {hitpoints:25,mana:25,magicskill:1,anticriticalhit:25,defence:25,magicdefence:25}
			},
		FieryofHaughtiness8: {id: 'FieryofHaughtiness8',
		required: {minitemscount:7,maxitemscount:8},
		modify: {hitpoints:25,mana:25,magicskill:1}
			},
		FieryofHaughtiness5: {id: 'FieryofHaughtiness5',
		required: {minitemscount:5,maxitemscount:6},
		modify: {hitpoints:25,mana:25}
			}
	}},

AirPower: {id: 'AirPower', caption: '�������� AirPower [11]', count: 13, 
		required: {level:11},details: {

		
		AirPower11: {id: 'AirPower11',
		required: {minitemscount:12,maxitemscount:14},
		modify: {hitpoints:50,mana:65,manaconsumption:6,airmagicpower:7}
			},
		AirPower9: {id: 'AirPower9',
		required: {minitemscount:10,maxitemscount:11},
		modify: {anticriticalhit:45,mana:55,airmagicpower:8}
			},
		AirPower8: {id: 'AirPower8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {manaconsumption:6,airmagicpower:7}
			},	
		AirPower5: {id: 'AirPower5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:35,mana:45,manaconsumption:4}
			}
	}},

    AiryofGolem: {id: 'AiryofGolem', caption: '�������� AiryofGolem [9]', count: 13, 
		required: {level:9},details: {

		
		AiryofGolem11: {id: 'AiryofGolem11',
		required: {minitemscount:12,maxitemscount:14},
		modify: {hitpoints:40,mana:55,manaconsumption:5,airmagicpower:7}
			},
		AiryofGolem9: {id: 'AiryofGolem9',
		required: {minitemscount:10,maxitemscount:11},
		modify: {anticriticalhit:35,mana:45,airmagicpower:5}
		    },
		AiryofGolem8: {id: 'AiryofGolem8',
		required: {minitemscount:8,maxitemscount:9},
		modify: {manaconsumption:5,airmagicpower:5}
			},
		AiryofGolem5: {id: 'AiryofGolem5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {hitpoints:25,mana:35,manaconsumption:3}
			}
	}},

	AiryofHaughtiness: {id: 'AiryofHaughtiness', caption: '�������� HaughtinessofAiry [8]', count: 13, 
		required: {level:8},details: {

		
		AiryofHaughtiness11: {id: 'AiryofHaughtiness11',
		required: {minitemscount:9,maxitemscount:14},
		modify: {hitpoints:25,mana:25,magicskill:1,anticriticalhit:25,defence:25,magicdefence:25}
			},
		AiryofHaughtiness8: {id: 'AiryofHaughtiness8',
		required: {minitemscount:7,maxitemscount:8},
		modify: {hitpoints:25,mana:25,magicskill:1}
			},
		AiryofHaughtiness5: {id: 'AiryofHaughtiness5',
		required: {minitemscount:5,maxitemscount:6},
		modify: {hitpoints:25,mana:25}
			}
	}},
	
	smash: {id: 'smash', caption: '�������� Smashing [8]', count: 14, 
		required: {level:8},details: {

		smash13: {id: 'smash13',
		required: {minitemscount:13,maxitemscount:14},
		modify: {weaponskill:1,hitpoints:33,magicdefence:20,defence:20}
			},
		smash11: {id: 'smash11',
		required: {minitemscount:11,maxitemscount:12},
		modify: {weaponskill:1,hitpoints:33,magicdefence:20}
			},
		smash8: {id: 'smash8',
		required: {minitemscount:8,maxitemscount:10},
		modify: {weaponskill:1,hitpoints:33}
			},
		smash5: {id: 'smash5',
		required: {minitemscount:5,maxitemscount:7},
		modify: {weaponskill:1}
			}
	}},

	rashness: {id: 'rashness', caption: '�������� �������������', count: 7, noadjust: true,
		required: {level:8},details: {

	rashness3: {id: 'rashness3',
		required: {minitemscount:3,maxitemscount:4},
		modify: {intellect:4}
			},
	rashness5: {id: 'rashness5',
	required: {minitemscount:5,maxitemscount:6},
	modify: {intellect:4,magicskill:1}
			},
	rashness7: {id: 'rashness7',
	required: {minitemscount:7,maxitemscount:7},
	modify: {intellect:4,magicskill:1,magicdefencereduce:3}
			}
	}},

	spider: {id: 'spider', caption: '�������� �����', count: 14,
		required: {level:9},details: {
  spider13: {id: 'spider13',
		required: {minitemscount:13,maxitemscount:14},
		modify: {anticriticalhit:35,hitpoints:33,antijumpaway:25,parry:5,knifeskill:2,axeskill:2,clubskill:2,swordskill:2}
			},
			spider11: {id: 'spider11',
		required: {minitemscount:11,maxitemscount:12},
		modify: {anticriticalhit:35,antijumpaway:25,parry:5,knifeskill:1,axeskill:1,clubskill:1,swordskill:1}
			},
			spider9: {id: 'spider9',
		required: {minitemscount:9,maxitemscount:10},
		modify: {anticriticalhit:35,antijumpaway:25,parry:5}
			},
			spider5: {id: 'spider5',
		required: {minitemscount:5,maxitemscount:8},
		modify: {anticriticalhit:35}
			}
	}},



	bloodmoon: {id: 'bloodmoon', caption: '�������� �������� ����', count: 14,
		required: {level:9},details: {			bloodmoon13: {id: 'bloodmoon13',
		required: {minitemscount:13,maxitemscount:14},
		modify: {anticriticalhit:25,criticalhit:25,magicdefence:25,hitpoints:66,antijumpaway:35}
			},
			bloodmoon11: {id: 'bloodmoon11',
		required: {minitemscount:11,maxitemscount:12},
		modify: {anticriticalhit:25,criticalhit:25,hitpoints:66,antijumpaway:35}
			},
			bloodmoon9: {id: 'bloodmoon9',
		required: {minitemscount:9,maxitemscount:10},
		modify: {anticriticalhit:25,criticalhit:25,antijumpaway:35}
			},
			bloodmoon5: {id: 'bloodmoon5',
		required: {minitemscount:5,maxitemscount:8},
		modify: {antijumpaway:35}
			}
	}},



	losttime: {id: 'losttime', caption: '�������� ������� ������', count: 14,
		required: {level:9},details: {			losttime13: {id: 'losttime13',
		required: {minitemscount:13,maxitemscount:14},
		modify: {anticriticalhit:60,magicdefence:25,hitpoints:100,antijumpaway:60}
			},
			losttime11: {id: 'losttime11',
		required: {minitemscount:11,maxitemscount:12},
		modify: {anticriticalhit:60,hitpoints:50,antijumpaway:60}
			},
			losttime7: {id: 'losttime7',
		required: {minitemscount:7,maxitemscount:10},
		modify: {anticriticalhit:25,antijumpaway:25}
			}
	}},
	

	morningsun: {id: 'morningsun', caption: '�������� ��������� ������', count: 14,
		required: {level:9},details: {			morningsun13: {id: 'morningsun13',
		required: {minitemscount:13,maxitemscount:14},
		modify: {magicdefence:30,power:10,firemagicpower:25}
			},
			morningsun10: {id: 'morningsun10',
		required: {minitemscount:10,maxitemscount:12},
		modify: {power:10,firemagicpower:25}
			},
			morningsun7: {id: 'morningsun7',
		required: {minitemscount:7,maxitemscount:9},
		modify: {firemagicpower:10}
			}
	}},


avenger: {id: 'avenger', caption: '�������� �������� [10]', count: 14,
		required: {level:10},details: {			avenger13: {id: 'avenger13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {hitpoints:40,anticriticalhit:60,jumpaway:60,knifeskill:2}
			},
			avenger11: {id: 'avenger11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {hitpoints:40,anticriticalhit:60,jumpaway:60,knifeskill:2}
			},
			avenger9: {id: 'avenger9',
		required: {minitemscount:8,maxitemscount:9},
		modify: {hitpoints:40,anticriticalhit:60,jumpaway:60}
			},
			avenger7: {id: 'avenger7',
		required: {minitemscount:5,maxitemscount:7},
		modify: {jumpaway:60,hitpoints:40}
			}
	}},

	misdeed: {id: 'misdeed', caption: '�������� ���������', count: 14,
		required: {level:9},details: {			misdeed13: {id: 'misdeed13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {hitpoints:66,anticriticalhit:50,jumpaway:50,knifeskill:2}
			},
			misdeed11: {id: 'misdeed11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {hitpoints:66,anticriticalhit:50,jumpaway:50}
			},
			misdeed9: {id: 'misdeed9',
		required: {minitemscount:8,maxitemscount:9},
		modify: {anticriticalhit:50,jumpaway:50}
			},
			misdeed7: {id: 'misdeed7',
		required: {minitemscount:5,maxitemscount:7},
		modify: {jumpaway:50}
			}
	}},



	scorpion: {id: 'scorpion', caption: '�������� ���������', count: 14,
		required: {level:9},details: {			scorpion13: {id: 'scorpion13',
		required: {minitemscount:12,maxitemscount:14},
		modify: {hitpoints:54,anticriticalhit:50,magicdefence:25,criticalhit:50}
			},
			scorpion11: {id: 'scorpion11',
		required: {minitemscount:10,maxitemscount:11},
		modify: {hitpoints:54,anticriticalhit:50,magicdefence:25}
			},
			scorpion9: {id: 'scorpion9',
		required: {minitemscount:8,maxitemscount:9},
		modify: {anticriticalhit:50,magicdefence:25}
			},
			scorpion7: {id: 'scorpion7',
		required: {minitemscount:5,maxitemscount:7},
		modify: {magicdefence:25}
			}
	}},



	 



	 
	 		chaosenerggy: {id: 'chaosenerggy', caption: '������� ����� ���� (����� ���������)', count: 15, virtual: true,
		required: {level:11},details: {

	chaosenerggy4: {id: 'chaosenerggy4',
	required: {minitemscount:8,maxitemscount:9},
	modify: {criticalhit:30,jumpaway:30,anticriticalhit:50,power:7,hitpoints:50}
			},
	chaosenerggy7: {id: 'chaosenerggy7',
	required: {minitemscount:12,maxitemscount:15},
	modify: {criticalhit:70,jumpaway:70,power:10,antijumpaway:50,hitpoints:100,anticriticalhit:50}
			},
	chaosenerggy5: {id: 'chaosenerggy5',
	required: {minitemscount:10,maxitemscount:11},
	modify: {criticalhit:50,jumpaway:50,power:8,antijumpaway:50,hitpoints:70}
			},
	chaosenerggy2: {id: 'chaosenerggy2',
		required: {minitemscount:5,maxitemscount:7},
		modify: {criticalhit:50,jumpaway:50,power:5,hitpoints:50}
			}
	}},

		chaosenergy: {id: 'chaosenergy', caption: '������� ����� ��� (����� ���������)', count: 13, virtual: true,
		required: {level:11},details: {

	chaosenergy4: {id: 'chaosenergy4',
	required: {minitemscount:8,maxitemscount:9},
	modify: {manaconsumption:7,mana:85,hitpoints:70,magicpower:7}
			},
	chaosenergy7: {id: 'chaosenergy7',
	required: {minitemscount:12,maxitemscount:15},
	modify: {manaconsumption:10,mana:100,hitpoints:100,magicpower:10}
			},
	chaosenergy5: {id: 'chaosenergy5',
	required: {minitemscount:10,maxitemscount:11},
	modify: {manaconsumption:8,mana:90,hitpoints:70,magicpower:8}
			},
	chaosenergy2: {id: 'chaosenergy2',
		required: {minitemscount:5,maxitemscount:7},
		modify: {manaconsumption:5,mana:75,hitpoints:50,magicpower:5}
			}
	}},

	determination: {id: 'determination', caption: '�������� ���������', count: 8, noadjust: true,
		required: {level:9},details: {
	}},

	

	



 	
	


	

	

	chainlightning: {id: 'chainlightning', caption: '�������� ������ ������', count: 5, noadjust:true,
		required: {level:9},details: {			chainlightning5: {id: 'chainlightning5',
		required: {itemscount:5},
		modify: {airmagicpower:10,manaconsumption:5,mana:50}
			}
	}},
	inceneration: {id: 'inceneration', caption: '�������� �����������', count: 5, noadjust:true,
		required: {level:9},details: {			inceneration5: {id: 'inceneration5',
		required: {itemscount:5},
		modify: {manaconsumption:5,firemagicpower:15}
			}
	}},
	frosting: {id: 'frosting', caption: '�������� ����������', count: 5, noadjust:true,
		required: {level:9},details: {			frosting5: {id: 'frosting5',
		required: {itemscount:5},
		modify: {watermagicpower:10,magicdefence:24,manaconsumption:5}
			}
	}},

	gravitation: {id: 'gravitation', caption: '�������� ����������', count: 5, noadjust:true,
		required: {level:9},details: {  gravitation5: {id: 'gravitation5',
		required: {itemscount:5},
		modify: {earthmagicpower:10,manaconsumption:5,hitpoints:50}
	 }
 }}
 };

var dressStrengthenings = {
	strength25: {id: 'strength25', caption: '���������� ����', domain: 'ru',
		required: {strength:25},
		modify: {power:5}
	},
	strength50: {id: 'strength50', caption: '���������� ����', domain: 'ru',
		required: {strength:50},
		modify: {power:10}
	},
	strength75: {id: 'strength75', caption: '���������� ����', domain: 'ru',
		required: {strength:75},
		modify: {power:17}
	},
	strength100: {id: 'strength100', caption: '���������� ����', domain: 'ru',
		required: {strength:100},
		modify: {power:25}
	},
	strength125: {id: 'strength125', caption: '���������� ����', domain: 'ru',
		required: {strength:125},
		modify: {power:25,mindamage:10,maxdamage:10}
	},
	strength150: {id: 'strength150', caption: '���������� ����', domain: 'ru',
		required: {strength:150},
		modify: {power:30,mindamage:10,maxdamage:10}
	},
	dexterity25: {id: 'dexterity25', caption: '�������� ������', domain: 'ru',
		required: {dexterity:25},
		modify: {parry:5}
	},
	dexterity50: {id: 'dexterity50', caption: '�������� ������', domain: 'ru',
		required: {dexterity:50},
		modify: {parry:5,anticriticalhit:15,jumpaway:35}
	},
	dexterity75: {id: 'dexterity75', caption: '�������� ������', domain: 'ru',
		required: {dexterity:75},
		modify: {parry:15,anticriticalhit:15,jumpaway:35}
	},
	dexterity100: {id: 'dexterity100', caption: '�������� ������', domain: 'ru',
		required: {dexterity:100},
		modify: {parry:15,anticriticalhit:40,jumpaway:105}
	},
	dexterity125: {id: 'dexterity125', caption: '�������� ������', domain: 'ru',
		required: {dexterity:125},
		modify: {parry:15,anticriticalhit:40,jumpaway:105,absolutejumpaway:5}
	},
	intuition25: {id: 'intuition25', caption: '������������', domain: 'ru',
		required: {intuition:25},
		modify: {criticalpower:10}
	},
	intuition50: {id: 'intuition50', caption: '������������', domain: 'ru',
		required: {intuition:50},
		modify: {criticalhit:35,antijumpaway:15,criticalpower:10}
	},
	intuition75: {id: 'intuition75', caption: '������������', domain: 'ru',
		required: {intuition:75},
		modify: {criticalhit:35,antijumpaway:15,criticalpower:25}
	},
	intuition100: {id: 'intuition100', caption: '������������', domain: 'ru',
		required: {intuition:100},
		modify: {criticalhit:105,antijumpaway:45,criticalpower:25}
	},
	intuition125: {id: 'intuition125', caption: '������������', domain: 'ru',
		required: {intuition:125},
		modify: {criticalhit:105,antijumpaway:45,criticalpower:25,absolutecriticalhit:5}
	},
	endurance0: {id: 'endurance0', caption: '������������', domain: 'ru',
		required: {level:0},
		modify: {hitpoints:30}
	},
	endurance25: {id: 'endurance25', caption: '�������� ����', domain: 'ru',
		required: {endurance:25},
		modify: {hitpoints:50}
	},
	endurance50: {id: 'endurance50', caption: '�������� ����', domain: 'ru',
		required: {endurance:50},
		modify: {hitpoints:100}
	},
	endurance75: {id: 'endurance75', caption: '�������� ����', domain: 'ru',
		required: {endurance:75},
		modify: {hitpoints:175}
	},
	endurance100: {id: 'endurance100', caption: '�������� ����', domain: 'ru',
		required: {endurance:100},
		modify: {hitpoints:250}
	},
	endurance125: {id: 'endurance125', caption: '�������� ����', domain: 'ru',
		required: {endurance:125},
		modify: {hitpoints:250,defence:25}
	},
	intellect25: {id: 'intellect25', caption: '�����', domain: 'ru',
		required: {intellect:25},
		modify: {magicpower:5}
	},
	intellect50: {id: 'intellect50', caption: '�����', domain: 'ru',
		required: {intellect:50},
		modify: {magicpower:10}
	},
	intellect75: {id: 'intellect75', caption: '�����', domain: 'ru',
		required: {intellect:75},
		modify: {magicpower:17}
	},
	intellect100: {id: 'intellect100', caption: '�����', domain: 'ru',
		required: {intellect:100},
		modify: {magicpower:25}
	},
	intellect125: {id: 'intellect125', caption: '�����', domain: 'ru',
		required: {intellect:125},
		modify: {magicpower:35}
	},
	wisdom25: {id: 'wisdom25', caption: '���� ��������', domain: 'ru',
		required: {wisdom:25},
		modify: {mana:50}
	},
	wisdom50: {id: 'wisdom50', caption: '���� ��������', domain: 'ru',
		required: {wisdom:50},
		modify: {mana:100}
	},
	wisdom75: {id: 'wisdom75', caption: '���� ��������', domain: 'ru',
		required: {wisdom:75},
		modify: {manaspeed:375,mana:175}
	},
	wisdom100: {id: 'wisdom100', caption: '���� ��������', domain: 'ru',
		required: {wisdom:100},
		modify: {manaspeed:500,mana:250}
	},
	wisdom125: {id: 'wisdom125', caption: '���� ��������', domain: 'ru',
		required: {wisdom:125},
		modify: {manaspeed:500,mana:250,magicdefencereduce:3}
	},
	spirituality25: {id: 'spirituality25', caption: '�������� ������', domain: 'ru', description: '����� ����� ������ ���� ��� ����� "���������� ������"',
		required: {spirituality:25}
	},
	spirituality50: {id: 'spirituality50', caption: '���������', domain: 'ru', description: '������ ��� �� ��������� ��� ��������� ����� "��������"',
		required: {spirituality:50},
		magic: {name:'preservation',caption:'��������',description:'1 ��. �� ���'}
	},
	spirituality75: {id: 'spirituality75', caption: '���� ����', domain: 'ru', description: '����������� � �������� ������ ����� ������ ���� ����.',
		required: {spirituality:75},
		magic: {name:'preservation',caption:'��������',description:'1 ��. �� ���'}
	},
	spirituality100: {id: 'spirituality100', caption: '��������', domain: 'ru', description: '������ ������� ��� �� ���������� �������� ����������, ���������, �������� � ���� � ������� ���.',
		required: {spirituality:100},
		magic: {name:'preservation',caption:'��������',description:'1 ��. �� ���'}
	},
	strength50_com: {id: 'strength50_com', caption: 'Monstrous Strength', domain: 'com',
		required: {strength:50},
		modify: {power:10}
	},
	dexterity50_com: {id: 'dexterity50_com', caption: 'Lightning Speed', domain: 'com',
		required: {dexterity:50},
		modify: {parry:5,anticriticalhit:15,jumpaway:35}
	},
	intuition50_com: {id: 'intuition50_com', caption: 'Foreknowledge', domain: 'com',
		required: {intuition:50},
		modify: {criticalhit:35,antijumpaway:15,criticalpower:10}
	},
	endurance50_com: {id: 'endurance50_com', caption: 'Body of Steel', domain: 'com',
		required: {endurance:50},
		modify: {defence:10}
	}};
var dressMiners = {
	};
var dressExchangePoints = {
	shop: {id: 'shop', caption: '��������������� ��������', description: '��������������� �������� ������� ��'},
	bshop: {id: 'bshop', caption: '������� �������', description: '������� ������� Capital City'},
	nyshop: {id: 'nyshop', caption: '���������� ��������', description: '���������� �������� ������� ��'},
	baltar: {id: 'baltar', caption: '������ �����', description: '������ ����� Devils City, ���� ����� �����'},
	ks_cap: {id: 'ks_cap', caption: '��������� ������� Capital City', description: '��������� ������� Capital City, ���� ����� ������'},
	ks_ang: {id: 'ks_ang', caption: '��������� ������� Angels City', description: '��������� ������� Angels City, ���� ����� ������'},
	ks_dem: {id: 'ks_dem', caption: '��������� ������� Demons City', description: '��������� ������� Demons City, ���� ����� ���������'},
	ks_sand: {id: 'ks_sand', caption: '��������� ������� Sand City', description: '��������� ������� Sand City, ���� ����� ������ ����'},
	luka: {id: 'luka', caption: '����', description: '��������� �����, ����� � ������� � ���������� �� �� ������'},
	s_luka: {id: 's_luka', caption: '������� ����', description: '��������� � ����������� ����������� ���������� �� ����'},
	fps_dem: {id: 'fps_dem', caption: '������ ���������� ����', description: '������ ���������� ���� ��������� � ���������� Demons City'},
	anvil1_ang: {id: 'anvil1_ang', caption: '���������� [9]', description: '���������� ������� �������� � ������ Angels City, �������� � ��������� [9] ������'},
	anvil2_ang: {id: 'anvil2_ang', caption: '���������� [10]', description: '���������� ������� �������� � ������ Angels City, �������� � ��������� [10] ������'},
	anvil_dem: {id: 'anvil_dem', caption: '���������� [10]', description: '���������� ������� �������� � ���������� Demons City, �������� � ��������� [10] ������'},
	anvil_sand: {id: 'anvil_sand', caption: '���������� [10]', description: '���������� ������� �������� � ������� ���� Sand City, �������� � ��������� [10] ������'},
	anvil_devil: {id: 'anvil_devil', caption: '�������� �������', description: '�������� ������� ��������� � �������� ������ Devils City'}};


