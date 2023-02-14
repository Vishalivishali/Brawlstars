/* eslint-disable max-len */

const Rarity = {
	Legendary: 5,
	Mythic: 4,
	Epic: 3,
	SuperRare: 2,
	Rare: 1,
};

const milliSeconds = 1000;

const getUpdatedPowerUp = (context) => {
	const { setState } = context;

	return setInterval(() => setState((state) => ({ ...state, powerUp: !state.powerUp }), milliSeconds));
};

const getMostTrophies = ({ state: { characters }}) =>
	characters.sort((a, b) => b.trophies - a.trophies);

const getLeastTrophies = ({ state: { characters }}) =>
	characters.sort((a, b) => a.trophies - b.trophies);

const getPowerLevel = ({ state: { characters }}) =>
	characters.sort((a, b) => a.powerLevel - b.powerLevel);

const getByRarity = ({ state: { characters }}) =>
	characters.sort((a, b) => Rarity[b.rarity] - Rarity[a.rarity]);

const getByRarityDescending = ({ state: { characters }}) =>
	characters.sort((a, b) => Rarity[a.rarity] - Rarity[b.rarity]);

const getClosestRank = ({ state: { characters }, config: { rankTrophies }}) =>
	characters.sort((a, b) => (rankTrophies[a.rank] - a.trophies)
	- (rankTrophies[b.rank] - b.trophies));

const getSorting = {
	getUpdatedPowerUp,
	getMostTrophies,
	getLeastTrophies,
	getPowerLevel,
	getByRarity,
	getByRarityDescending,
	getClosestRank,
};

export default getSorting;
