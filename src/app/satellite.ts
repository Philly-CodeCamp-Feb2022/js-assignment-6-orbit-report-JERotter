export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }

	// TODO 3a: fix isSpaceDebris check
	isSpaceDebris(): boolean {
		if (this.type === "Space Debris") {
		 return true;
   		} 
	}
}
// //troubleshooting stuff
// let testJawn = new Satellite('fetchedSatellites[i].name', "Space Debris", "fetchedSatellites[i].launchDate", "fetchedSatellites[i].orbitType", false);
// console.log(testJawn.type);
// console.log(testJawn.isSpaceDebris());