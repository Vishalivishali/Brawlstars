
const Rarity = {
	Legendary: 5,
	Mythic: 4,
	Epic: 3,
	SuperRare: 2,
	Rare: 1,
};

const getMostTrophies = ({ state: { brawlers }}) =>
	brawlers.sort((a, b) => b.trophies - a.trophies);

const getLeastTrophies = ({ state: { brawlers }}) =>
	brawlers.sort((a, b) => a.trophies - b.trophies);

const getPowerLevel = ({ state: { brawlers }}) =>
	brawlers.sort((a, b) => a.powerLevel - b.powerLevel);

const getByRarity = ({ state: { brawlers }}) =>
	brawlers.sort((a, b) => Rarity[a.rarity] - Rarity[b.rarity]);

const getByRarityDescending = ({ state: { brawlers }}) =>
	brawlers.sort((a, b) => Rarity[b.rarity] - Rarity[a.rarity]);

const getSorting = {
	getMostTrophies,
	getLeastTrophies,
	getPowerLevel,
	getByRarity,
	getByRarityDescending,
};

export default getSorting;