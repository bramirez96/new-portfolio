// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

/**
 * This class should handle everything. It should build maps from JSON and store the
 * World objects in state. It should process input and output from the Console and
 * use the player input to dispatch actions to the various game objects. It should
 * handle saving and loading of game data to persist across sessions (eventually).
 *
 * In this refactor, I'll be moving huge amounts of code from the Player, Room, Item,
 * and Feature classes onto this GameController class, in an attempt at utilizing OOP
 * best practices, as the current Python version has some glaring issues built into
 * its core as a result of the original article I followed for the architecture.
 *
 * TODO we need to export a singleton from this module, not a class. The singleton needs
 *  to be globally-accessible from every class in the game, providing a way to read game
 *  state from all the various levels without passing containers around so much.
 */
export default class GameController {}