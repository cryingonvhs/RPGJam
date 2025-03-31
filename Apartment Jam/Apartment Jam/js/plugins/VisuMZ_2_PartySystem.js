//=============================================================================
// VisuStella MZ - Party System
// VisuMZ_2_PartySystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_PartySystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PartySystem = VisuMZ.PartySystem || {};
VisuMZ.PartySystem.version = 1.29;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.29] [PartySystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Party_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ only gives game projects the ability to switch party members
 * within the main menu and nothing more. There's no inherent functionality to
 * lock party members, make party members required, and/or give players the
 * ability to switch party members mid-battle.
 *
 * This plugin will add in all of those functions as well as a dedicated scene
 * for switching party members. Party switching will allow party members to be
 * removed, swapped, and sorted. Through the usage of Plugin Commands, party
 * members can also be locked and/or required for party presence.
 *
 * Those using the VisuStella MZ Battle Core will also have access to features
 * in this plugin that aren't available otherwise. These features give players
 * the functionality to switch out the whole party lineup mid-battle and/or
 * individual party member switching.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Custom scene dedicated to party management.
 * * Change the maximum number of party members that can participate in battle.
 * * Plugin Commands to lock party members.
 * * Plugin Commands to make certain party members required.
 * * Added functionality with Battle Core to switch party members mid-battle.
 * * This comes in the form of changing either the whole party at once.
 * * Or switching individual members out one at a time.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Main Menu Formation Command
 *
 * - This command is now changed to send the player to Scene_Party for the
 * player to have a dedicated scene for changing the party.
 *
 * ---
 *
 * Battle Members Array
 *
 * - Previously, the battle members are decided by which actors are lined up
 * first in the party roster. This has been changed to give players the freedom
 * to have a party size less than the maximum. This change is made by changing
 * the way the battle members are determined by using a new array. However, any
 * and all functions utilize the $gameParty.battleMembers() function will still
 * behave as normal.
 *
 * ---
 *
 * Formation Change OK Function
 *
 * - RPG Maker MZ did not do anything with the Game_Actor.isFormationChangeOk
 * function so this plugin overwrote it completely to allow for the new
 * lock and require features to work.
 *
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_1_BattleCore
 *
 * - If the VisuStella MZ Battle Core plugin is present, players are able to 
 * access party switching functionality mid-battle at will. This can be in the
 * form of switching out the entire active party roster at once or individually
 * for each actor.
 *
 * - Switching Entire Rosters: This can be done by going into this plugin's
 * Plugin Parameters => General => Party Command Window => Add Party Command.
 * If the Party Command Window is accessible, the player will be able to see
 * the option between 'Auto Battle' and 'Options'.
 *
 * - Individual Member Switching: This requires going to VisuMZ_1_BattleCore's
 * Plugin Parameters => Actor Command Window => Battle Commands => Command List
 * and add in the "party" option. The "party" option can also be added to the
 * <Battle Commands> notetag.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_BattleSystemOTB
 * 
 * With Battle System - OTB, the player cannot change entire parties at once
 * from the Party Command Window. The feature will be unaccessible while
 * Order Turn Battle is in play. However, the player can still change party
 * members through the Actor Command Window by having actors replace other
 * actors. Party changing is also available through battle events, Common
 * Events, and script calls.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemSTB
 * 
 * With Battle System - STB, the player cannot change entire parties at once
 * from the Party Command Window. The feature will be unaccessible while
 * Standard Turn Battle is in play. However, the player can still change party
 * members through the Actor Command Window by having actors replace other
 * actors. Party changing is also available through battle events, Common
 * Events, and script calls.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Party Plugin Commands ===
 * 
 * ---
 *
 * Party: Call Party Scene
 * - Calls the party changing scene.
 *
 * ---
 *
 * Party: Change Max Battle Members
 * - Changes the number of max battle members possible.
 * - Cannot be use mid-battle.
 *
 *   Max Members:
 *   - Changes the number of max battle members possible.
 *   - Use 0 for the game's default number.
 *
 * ---
 *
 * Party: Lock/Unlock Member(s)
 * - Allows you to lock/unlock a party member.
 * - Locked actors cannot change their party position.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to lock/unlock.
 *   - Locked actors cannot change their party position.
 *
 *   Lock?:
 *   - Lock the selected actor(s)?
 *
 * ---
 * 
 * Party: Move Actor(s) to Active
 * - Map Only.
 * - Moves an actor to the active party if there is room.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the active party if there is room.
 * 
 * ---
 * 
 * Party: Move Actor(s) to Reserve
 * - Map Only.
 * - Moves an actor to the reserve party.
 * - Must be 1 actor left.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the reserve party.
 * 
 * ---
 * 
 * Party: Move Party Index to Reserve
 * - Map only.
 * - Moves an actor in a specific party index to reserve.
 * - Must be 1 actor left.
 * 
 *   Index:
 *   - Type in which index to move.
 *   - Index values start at 0.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * Party: Move Random Reserve to Active
 * - Map only.
 * - Moves a random actor from the reserve party to active.
 * - Must be enough space in active party.
 * 
 * ---
 *
 * Party: Require Member(s)
 * - Allows you to require/free a party member.
 * - Required actors must be in the party to exit the scene.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to require/free.
 *   - Required actors must be in the party to exit the scene.
 *
 *   Require?:
 *   - Make the selected actor(s) required?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These Plugin Parameters control the overall behaviors pertaining to the
 * Party System added with this plugin. These behaviors range from the maximum
 * number of members that can participate in battle to the availability of the
 * party switching mechanics.
 *
 * ---
 *
 * General
 * 
 *   Max Battle Members:
 *   - Maximum number of battle members.
 *
 * ---
 *
 * Party Scene
 * 
 *   Add Remove Command:
 *   - Add the 'Remove' command to the party scene?
 * 
 *   Locked Member Icon:
 *   - Icon used for a locked party member.
 * 
 *   Required Member Icon:
 *   - Icon used for a required party member.
 *
 * ---
 *
 * Party Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Party Command:
 *   - Add the 'Party' command to the Party Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 *
 * ---
 *
 * Actor Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Switch Command:
 *   - Add the 'Switch' command to the Actor Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 * 
 *   Switch Out Animation?:
 *   - Show the sprites switching out when using individual party
 *     member switching?
 * 
 *   TPB: Immediate Action:
 *   - Allow actors to immediate act upon switching in for TPB battle systems?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These Plugin Parameters control the text that you see in-game related to the
 * Party System plugin.
 *
 * ---
 *
 * General
 * 
 *   Active Party:
 *   - Vocabulary used to represent the Active Party.
 * 
 *   Reserve Party:
 *   - Vocabulary used to represent the Reserve Party.
 * 
 *   Status:
 *   - Vocabulary used to represent the Status Window.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Party Scene > Windows
 * 
 *   Empty:
 *   - For the party and status windows when no actor is selected.
 * 
 *   Remove:
 *   - For the remove option.
 *
 * ---
 *
 * Party Scene > Button Assist
 * 
 *   Swap Positions:
 *   - Button assist text for the page up/down commands.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Remove:
 *   - Button assist text for the removal command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Sort:
 *   - Button assist text for the sort command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap In:
 *   - Button assist text for swapping in actors.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap Out:
 *   - Button assist text for swapping out actors.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Battle Scene
 * 
 *   Party Command:
 *   - Command text for entering Party Scene.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Formation:
 *   - Help text for Formation command.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Queue Message:
 *   - Message to say the Party Scene is queued.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Switch Command:
 *   - Command text for switching out members.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Switch:
 *   - Help text for Switch command.
 *   - Requires VisuMZ_1_BattleCore!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_Party.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * If you don't like the locations of the windows in Scene_Party, change them
 * up with these Plugin Parameters, provided that you have an understanding of
 * JavaScript code.
 *
 * ---
 *
 * Active Party Label
 * Active Party Window
 * Reserve Party Label
 * Reserve Party Window
 * Status Label
 * Status Window
 * Battle Switch Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Columns:
 *   - Available only for the Reserve Party Window.
 *   - How many columns do you want there to be for the window?
 * 
 *   Actor Graphic:
 *   - Available only for Active Party Window and Reserve Party Window.
 *   - Choose how the actor graphics appear in the specific windows.
 *     - Face
 *     - Map Sprite
 *     - Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * 
 *     Map Sprite:
 *     Sideview Battler:
 * 
 *       Offset X:
 *       Offset Y:
 *       - If showing map sprites, offset the x or y coordinates.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.29: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where party changes with PTB did not register correctly.
 *    Fix made by Olivia.
 * 
 * Version 1.28: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: February 16, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * Feature Update!
 * ** When holding the "up" keyboard button with the reserve window active, the
 *    return to the active party window will no longer happen unless the "up"
 *    key is released and then pressed again. Update made by Olivia.
 * 
 * Version 1.26: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.25: July 28, 2022
 * * Bug Fixes!
 * ** Changing party members via actor command with a less than max battle size
 *    after removing a middle member midway through battle will no longer cause
 *    weird results when switching. Fix made by Arisu.
 * ** Party members that were switched out during battle animations with active
 *    TPB/ATB will no longer cause damage popup crashes when switched back in a
 *    follow up battle. Fix made by Arisu.
 * 
 * Version 1.24: March 24, 2022
 * * Compatibility Update!
 * ** Compatibility update with Skills & States Core Passive Conditions
 *    involving the party leader. Update made by Arisu.
 * 
 * Version 1.23: January 13, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: July 16, 2021
 * * Feature Update!
 * ** Added a fail safe that prevents on-battle start events from triggering
 *    when adding party members outside of battle under evented circumstances
 *    that function as a bridge between event and battle. Fix by Irina.
 * 
 * Version 1.21: July 9, 2021
 * * Bug Fixes!
 * ** When using TPB-based battle systems, adding actors to the main party
 *    would not enable them to move. This should be fixed. Fix made by Irina.
 * 
 * Version 1.20: July 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.19: June 18, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.18: April 16, 2021
 * * Documentation Update!
 * ** Fixed typo. Fix made by Arisu.
 * 
 * Version 1.17: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_2_BattleSystemOTB plugin.
 * 
 * Version 1.16: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.15: March 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Gneral > Battle Scene > Battle Party Icon
 * **** For some reason, we never had a setting that lets you change the party
 *      icon. Well, now there is!
 * 
 * Version 1.14: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Party Index to Reserve
 * **** Moves an actor in a specific party index to reserve.
 *      Map only. Must be 1 actor left. You may use code.
 * *** Party: Move Random Reserve to Active
 * **** Moves a random actor from the reserve party to active.
 *      Map only. Must be enough space in active party.
 * 
 * Version 1.13: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Actor(s) to Active
 * **** Map only. Moves an actor to the active party if there is room.
 * *** Party: Move Actor(s) to Reserve
 * **** Map only. Moves an actor to the reserve party.
 * 
 * Version 1.12: January 15, 2021
 * * Bug Fixes!
 * ** For battle testing, if the number of battle test members exceeds the
 *    maximum battle member slots, trim them until they match. Fix by Olivia.
 * 
 * Version 1.11: January 1, 2021
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.10: December 25, 2020
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.09: December 18, 2020
 * * Bug Fixes!
 * ** Removing party members in the active party by event command will now be
 *    properly removed from the party. Fix made by Yanfly.
 * 
 * Version 1.08: December 4, 2020
 * * Bug Fixes!
 * ** With TPB battle systems, after switching out party members, the battle
 *    system will no longer carry over any previous active battle members in
 *    the command window. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: November 22, 2020
 * * Bug Fixes!
 * ** With Active TPB, switching out a party member mid-action is no longer
 *    possible to prevent bugs. Intead, there party switching action will be
 *    queued and take effect after the action has been completed. Fix made by
 *    Yanfly.
 * * Compatibility Update!
 * ** Game_Party.swapOrder function now works with this plugin. However, keep
 *    in mind that due to how this party system plugin allows you have empty
 *    slots in the active battle party, this function will fill in the empty
 *    slots upon usage. Update made by Yanfly.
 *
 * Version 1.06: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin Command "Party: Change Max Battle Members" now works again.
 *    Fix made by Arisu.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Bug Fixes!
 * ** Adding party members during battle through the party window command will
 *    no longer cause crashes after they input an action. Fix made by Yanfly.
 * 
 * Version 1.02: October 4, 2020
 * * Bug Fixes!
 * ** Adding party members during test play should now work again.
 *    Fix made by Irina.
 * ** Changing party members mid-battle through the actor command should now
 *    refresh the party followers afterwards. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Arisu!
 * *** General > Party Command Window > TPB: Immediate Action
 * **** Allow actors to immediate act upon switching in for TPB battle systems?
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** When switching actors with states, buffs, and/or debuffs already applied,
 *    the state icons found in the status window will now switch over properly,
 *    too. Fix made by Arisu.
 *
 * Version 1.00: September 7, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallPartyScene
 * @text Party: Call Party Scene
 * @desc Calls the party changing scene.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeMaxBattleMembers
 * @text Party: Change Max Battle Members
 * @desc Changes the number of max battle members possible.
 * Cannot be use mid-battle.
 *
 * @arg Value:eval
 * @text Max Members
 * @desc Changes the number of max battle members possible.
 * Use 0 for the game's default number.
 * @default 4
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LockPartyMembers
 * @text Party: Lock/Unlock Member(s)
 * @desc Allows you to lock/unlock a party member.
 * Locked actors cannot change their party position.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to lock/unlock.
 * Locked actors cannot change their party position.
 * @default ["1"]
 * 
 * @arg Lock:eval
 * @text Lock?
 * @type boolean
 * @on Lock
 * @off Unlock
 * @desc Lock the selected actor(s)?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToActive
 * @text Party: Move Actor(s) to Active
 * @desc Moves an actor to the active party if there is room.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the active party if there is room.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToReserve
 * @text Party: Move Actor(s) to Reserve
 * @desc Moves an actor to the reserve party. Must be 1 actor left.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the reserve party.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MovePartyIndexToReserve
 * @text Party: Move Party Index to Reserve
 * @desc Moves an actor in a specific party index to reserve.
 * Map only. Must be 1 actor left.
 *
 * @arg Index:eval
 * @text Party Index
 * @desc Type in which index to move. Index values start at 0.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveRandomToActive
 * @text Party: Move Random Reserve to Active
 * @desc Moves a random actor from the reserve party to active.
 * Map only. Must be enough space in active party.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RequirePartyMembers
 * @text Party: Require Member(s)
 * @desc Allows you to require/free a party member.
 * Required actors must be in the party to exit the scene.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to require/free.
 * Required actors must be in the party to exit the scene.
 * @default ["1"]
 * 
 * @arg Require:eval
 * @text Require?
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Make the selected actor(s) required?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param PartySystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings pertaining to Party-related mechanics.
 * @default {"General":"","MaxBattleMembers:num":"4","PartyScene":"","AddRemoveCmd:eval":"true","LockIcon:num":"195","RequireIcon:num":"87","DrawBackRect:eval":"true","BackRectColor:str":"19","PartyCmdWin":"","PartyCmdWinAddParty:eval":"false","PartyCmdCooldown:num":"1","tpbImmediateAction:eval":"true","ActorCmdWin":"","ActorCmdWinAddParty:eval":"true","ActorCmdCooldown:num":"1","SwitchOutAnimation:eval":"true"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"General":"","ActiveParty:str":"Active Party","ReserveParty:str":"Reserve Party","Status:str":"Status","PartyScene":"","Windows":"","Empty:str":"- Empty -","Remove:str":"Remove","ButtonAssist":"","AssistSwapPosition:str":"Quick Swap","AssistRemove:str":"Remove","AssistSort:str":"Sort","AssistSwapIn:str":"Swap In","AssistSwapOut:str":"Swap Out","BattleScene":"","BattlePartyCmd:str":"Party","BattleHelpFormation:json":"\"Change up your party formation.\"","QueuePartyScene:str":"%1 Menu queued after action is complete.","BattleSwitchOut:str":"Switch","BattleHelpSwitch:json":"\"Switch out this party member with another.\""}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Party.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you control how the windows appear in Scene_Party.
 * @default {"ActivePartyLabel":"","ActivePartyLabelBgType:num":"0","ActivePartyLabelRect:func":"\"const wx = 0;\\nconst wy = this.mainAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ActivePartyWindow":"","ActivePartyWindowBgType:num":"0","ActivePartyGraphic:str":"face","ActivePartyMapSprite":"","ActiveSpriteOffsetX:num":"0","ActiveSpriteOffsetY:num":"4","ActivePartySvBattler":"","ActiveBattlerOffsetX:num":"0","ActiveBattlerOffsetY:num":"4","ActivePartyWindowRect:func":"\"const wx = 0;\\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\\nconst ww = Graphics.boxWidth;\\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyLabel":"","ReservePartyLabelBgType:num":"0","ReservePartyLabelRect:func":"\"const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyWindow":"","ReservePartyWindowBgType:num":"0","ReserveItemThickness:num":"2","ReservePartyGraphic:str":"face","ReservePartyMapSprite":"","ReserveSpriteOffsetX:num":"24","ReserveSpriteOffsetY:num":"4","ReservePartySvBattler":"","ReserveBattlerOffsetX:num":"48","ReserveBattlerOffsetY:num":"4","ReservePartyWindowRect:func":"\"const ww = this._reservePartyLabel.width;\\nconst wx = this._reservePartyLabel.x;\\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusLabel":"","StatusLabelBgType:num":"0","StatusLabelRect:func":"\"const ww = Graphics.boxWidth - this._reservePartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusWindow":"","StatusWindowBgType:num":"0","StatusWindowDraw:func":"\"// Draw Empty\\nif (!this._actor) {\\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\\n    this.changeTextColor(ColorManager.systemColor());\\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\\n    return;\\n}\\n\\n// Draw Face and Simple Status\\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\\n\\n// Declare Constants\\nconst lineHeight = this.lineHeight();\\nconst params = this.actorParams();\\nconst paramWidth = Math.round(this.innerWidth / 2);\\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\\nconst baseX = 0;\\nlet x = 0;\\nlet y = ImageManager.faceHeight + lineHeight / 2;\\n\\n// Draw Parameters\\nfor (const param of params) {\\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\\n    this.drawParamName(param, x, y, paramWidth);\\n    this.drawParamValue(param, x, y, paramWidth);\\n\\n    if (x === baseX) {\\n        x += paramWidth;\\n    } else {\\n        x = baseX;\\n        y += lineHeight;\\n    }\\n}\"","StatusWindowRect:func":"\"const ww = this._statusPartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._reservePartyWindow.y;\\nconst wh = this._reservePartyWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","BattleSwitchWindow":"","BattleSwitchWindowBgType:num":"0","BattleSwitchWindowRect:func":"\"const padding = $gameSystem.windowPadding() * 2;\\nlet ww = 516 + padding;\\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param General
 *
 * @param MaxBattleMembers:num
 * @text Max Battle Members
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of battle members.
 * @default 4
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyIcon:num
 * @text Battle Party Icon
 * @parent BattleScene
 * @desc Icon used for changing party members.
 * @default 75
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param AddRemoveCmd:eval
 * @text Add Remove Command
 * @parent PartyScene
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Remove' command to the party scene?
 * @default true
 *
 * @param LockIcon:num
 * @text Locked Member Icon
 * @parent PartyScene
 * @desc Icon used for a locked party member.
 * @default 195
 *
 * @param RequireIcon:num
 * @text Required Member Icon
 * @parent PartyScene
 * @desc Icon used for a required party member.
 * @default 87
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent PartyScene
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param PartyCmdWin
 * @text Party Command Window
 *
 * @param PartyCmdWinAddParty:eval
 * @text Add Party Command
 * @parent PartyCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Party' command to the Party Command Window?
 * @default false
 *
 * @param PartyCmdCooldown:num
 * @text Command Cooldown
 * @parent PartyCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param ActorCmdWin
 * @text Actor Command Window
 *
 * @param ActorCmdWinAddParty:eval
 * @text Add Switch Command
 * @parent ActorCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Switch' command to the Actor Command Window?
 * @default true
 *
 * @param ActorCmdCooldown:num
 * @text Command Cooldown
 * @parent ActorCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param SwitchOutAnimation:eval
 * @text Switch Out Animation?
 * @parent ActorCmdWin
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Show the sprites switching out when using individual party member switching?
 * @default true
 *
 * @param tpbImmediateAction:eval
 * @text TPB: Immediate Action
 * @parent ActorCmdWin
 * @type boolean
 * @on Immediate Action
 * @off Empty Gauge
 * @desc Allow actors to immediate act upon switching in for TPB battle systems?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param General
 *
 * @param ActiveParty:str
 * @text Active Party
 * @parent General
 * @desc Vocabulary used to represent the Active Party.
 * @default Active Party
 *
 * @param ReserveParty:str
 * @text Reserve Party
 * @parent General
 * @desc Vocabulary used to represent the Reserve Party.
 * @default Reserve Party
 *
 * @param Status:str
 * @text Status
 * @parent General
 * @desc Vocabulary used to represent the Status Window.
 * @default Status
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param Windows
 * @parent PartyScene
 *
 * @param Empty:str
 * @text Empty
 * @parent Windows
 * @desc For the party and status windows when no actor is selected.
 * @default - Empty -
 *
 * @param Remove:str
 * @text Remove
 * @parent Windows
 * @desc For the remove option.
 * @default Remove
 *
 * @param ButtonAssist
 * @text Button Assist
 * @parent PartyScene
 *
 * @param AssistSwapPosition:str
 * @text Swap Positions
 * @parent ButtonAssist
 * @desc Button assist text for the page up/down commands.
 * Requires VisuMZ_0_CoreEngine!
 * @default Quick Swap
 *
 * @param AssistRemove:str
 * @text Remove
 * @parent ButtonAssist
 * @desc Button assist text for the removal command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Remove
 *
 * @param AssistSort:str
 * @text Sort
 * @parent ButtonAssist
 * @desc Button assist text for the sort command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Sort
 *
 * @param AssistSwapIn:str
 * @text Swap In
 * @parent ButtonAssist
 * @desc Button assist text for swapping in actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap In
 *
 * @param AssistSwapOut:str
 * @text Swap Out
 * @parent ButtonAssist
 * @desc Button assist text for swapping out actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap Out
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyCmd:str
 * @text Party Command
 * @parent BattleScene
 * @desc Command text for entering Party Scene.
 * Requires VisuMZ_1_BattleCore!
 * @default Party
 *
 * @param BattleHelpFormation:json
 * @text Help: Formation
 * @parent BattlePartyCmd:str
 * @type note
 * @desc Help text for Formation command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Change up your party formation."
 *
 * @param QueuePartyScene:str
 * @text Queue Message
 * @parent BattlePartyCmd:str
 * @desc Message to say the Party Scene is queued.
 * Requires VisuMZ_1_BattleCore!
 * @default %1 Menu queued after action is complete.
 *
 * @param BattleSwitchOut:str
 * @text Switch Command
 * @parent BattleScene
 * @desc Command text for switching out members.
 * Requires VisuMZ_1_BattleCore!
 * @default Switch
 *
 * @param BattleHelpSwitch:json
 * @text Help: Switch
 * @parent BattleSwitchOut:str
 * @type note
 * @desc Help text for Switch command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Switch out this party member with another."
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param ActivePartyLabel
 * @text Active Party Label
 *
 * @param ActivePartyLabelBgType:num
 * @text Background Type
 * @parent ActivePartyLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActivePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.mainAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ActivePartyWindow
 * @text Active Party Window
 *
 * @param ActivePartyWindowBgType:num
 * @text Background Type
 * @parent ActivePartyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActivePartyGraphic:str
 * @text Actor Graphic
 * @parent ActivePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the active party menu.
 * @default face
 *
 * @param ActivePartyMapSprite
 * @text Map Sprite
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveSpriteOffsetX:num
 * @text Offset X
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveSpriteOffsetY:num
 * @text Offset Y
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartySvBattler
 * @text Sideview Battler
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveBattlerOffsetX:num
 * @text Offset X
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveBattlerOffsetY:num
 * @text Offset Y
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\nconst ww = Graphics.boxWidth;\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyLabel
 * @text Reserve Party Label
 *
 * @param ReservePartyLabelBgType:num
 * @text Background Type
 * @parent ReservePartyLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ReservePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyWindow
 * @text Reserve Party Window
 *
 * @param ReservePartyWindowBgType:num
 * @text Background Type
 * @parent ReservePartyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ReserveCol:num
 * @text Columns
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many columns do you want there to be for the window?
 * @default 1
 *
 * @param ReserveItemThickness:num
 * @text Row Thickness
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many rows thick do you want selectable items to be?
 * @default 2
 *
 * @param ReservePartyGraphic:str
 * @text Actor Graphic
 * @parent ReservePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the reserve party menu.
 * @default face
 *
 * @param ReservePartyMapSprite
 * @text Map Sprite
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveSpriteOffsetX:num
 * @text Offset X
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from left.
 * @default 24
 *
 * @param ReserveSpriteOffsetY:num
 * @text Offset Y
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartySvBattler
 * @text Sideview Battler
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveBattlerOffsetX:num
 * @text Offset X
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from left.
 * @default 48
 *
 * @param ReserveBattlerOffsetY:num
 * @text Offset Y
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._reservePartyLabel.width;\nconst wx = this._reservePartyLabel.x;\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusLabel
 * @text Status Label
 *
 * @param StatusLabelBgType:num
 * @text Background Type
 * @parent StatusLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusLabelRect:func
 * @text JS: X, Y, W, H
 * @parent StatusLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this._reservePartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusWindowBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusWindowDraw:func
 * @text JS: Draw Data
 * @parent StatusWindow
 * @type note
 * @desc Code used to draw the display data in the Status Window.
 * @default "// Draw Empty\nif (!this._actor) {\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\n    this.changeTextColor(ColorManager.systemColor());\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\n    return;\n}\n\n// Draw Face and Simple Status\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\n\n// Declare Constants\nconst lineHeight = this.lineHeight();\nconst params = this.actorParams();\nconst paramWidth = Math.round(this.innerWidth / 2);\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\nconst baseX = 0;\nlet x = 0;\nlet y = ImageManager.faceHeight + lineHeight / 2;\n\n// Draw Parameters\nfor (const param of params) {\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\n    this.drawParamName(param, x, y, paramWidth);\n    this.drawParamValue(param, x, y, paramWidth);\n\n    if (x === baseX) {\n        x += paramWidth;\n    } else {\n        x = baseX;\n        y += lineHeight;\n    }\n}"
 *
 * @param StatusWindowRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._statusPartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._reservePartyWindow.y;\nconst wh = this._reservePartyWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param BattleSwitchWindow
 * @text Battle Switch Window
 *
 * @param BattleSwitchWindowBgType:num
 * @text Background Type
 * @parent BattleSwitchWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BattleSwitchWindowRect:func
 * @text JS: X, Y, W, H
 * @parent BattleSwitchWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Does not apply to Border Battle Layout style.
 * @default "const padding = $gameSystem.windowPadding() * 2;\nlet ww = 516 + padding;\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x56678c=_0x366c;(function(_0x78f22c,_0x536b36){const _0x13500f=_0x366c,_0x479538=_0x78f22c();while(!![]){try{const _0x590dc0=parseInt(_0x13500f(0x181))/0x1*(parseInt(_0x13500f(0x224))/0x2)+parseInt(_0x13500f(0x17c))/0x3*(-parseInt(_0x13500f(0x2a7))/0x4)+-parseInt(_0x13500f(0x222))/0x5*(-parseInt(_0x13500f(0x1d0))/0x6)+parseInt(_0x13500f(0x365))/0x7+-parseInt(_0x13500f(0x318))/0x8*(parseInt(_0x13500f(0x2c3))/0x9)+-parseInt(_0x13500f(0x217))/0xa+-parseInt(_0x13500f(0x191))/0xb*(-parseInt(_0x13500f(0x358))/0xc);if(_0x590dc0===_0x536b36)break;else _0x479538['push'](_0x479538['shift']());}catch(_0xf201f5){_0x479538['push'](_0x479538['shift']());}}}(_0x45da,0x71aea));var label=_0x56678c(0x22c),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x56678c(0x319)](function(_0x42ce5f){const _0x374db3=_0x56678c;return _0x42ce5f[_0x374db3(0x324)]&&_0x42ce5f[_0x374db3(0x31b)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x56678c(0x196)]=VisuMZ[label][_0x56678c(0x196)]||{},VisuMZ[_0x56678c(0x176)]=function(_0x10e85c,_0x5801a6){const _0x4c7610=_0x56678c;for(const _0x4ce1e5 in _0x5801a6){if(_0x4c7610(0x1b7)!==_0x4c7610(0x18f)){if(_0x4ce1e5[_0x4c7610(0x1c0)](/(.*):(.*)/i)){const _0x2a8a3d=String(RegExp['$1']),_0x3b90b6=String(RegExp['$2'])[_0x4c7610(0x317)]()[_0x4c7610(0x30e)]();let _0x136de3,_0x5860a5,_0x2b0b96;switch(_0x3b90b6){case _0x4c7610(0x2c5):_0x136de3=_0x5801a6[_0x4ce1e5]!==''?Number(_0x5801a6[_0x4ce1e5]):0x0;break;case _0x4c7610(0x172):_0x5860a5=_0x5801a6[_0x4ce1e5]!==''?JSON[_0x4c7610(0x212)](_0x5801a6[_0x4ce1e5]):[],_0x136de3=_0x5860a5[_0x4c7610(0x1bd)](_0x3cd0b4=>Number(_0x3cd0b4));break;case'EVAL':_0x136de3=_0x5801a6[_0x4ce1e5]!==''?eval(_0x5801a6[_0x4ce1e5]):null;break;case _0x4c7610(0x167):_0x5860a5=_0x5801a6[_0x4ce1e5]!==''?JSON[_0x4c7610(0x212)](_0x5801a6[_0x4ce1e5]):[],_0x136de3=_0x5860a5[_0x4c7610(0x1bd)](_0x2a690c=>eval(_0x2a690c));break;case _0x4c7610(0x1eb):_0x136de3=_0x5801a6[_0x4ce1e5]!==''?JSON['parse'](_0x5801a6[_0x4ce1e5]):'';break;case'ARRAYJSON':_0x5860a5=_0x5801a6[_0x4ce1e5]!==''?JSON[_0x4c7610(0x212)](_0x5801a6[_0x4ce1e5]):[],_0x136de3=_0x5860a5[_0x4c7610(0x1bd)](_0x42101d=>JSON['parse'](_0x42101d));break;case _0x4c7610(0x301):_0x136de3=_0x5801a6[_0x4ce1e5]!==''?new Function(JSON[_0x4c7610(0x212)](_0x5801a6[_0x4ce1e5])):new Function(_0x4c7610(0x316));break;case'ARRAYFUNC':_0x5860a5=_0x5801a6[_0x4ce1e5]!==''?JSON['parse'](_0x5801a6[_0x4ce1e5]):[],_0x136de3=_0x5860a5['map'](_0x30b1dd=>new Function(JSON['parse'](_0x30b1dd)));break;case'STR':_0x136de3=_0x5801a6[_0x4ce1e5]!==''?String(_0x5801a6[_0x4ce1e5]):'';break;case _0x4c7610(0x390):_0x5860a5=_0x5801a6[_0x4ce1e5]!==''?JSON[_0x4c7610(0x212)](_0x5801a6[_0x4ce1e5]):[],_0x136de3=_0x5860a5[_0x4c7610(0x1bd)](_0x511cd1=>String(_0x511cd1));break;case _0x4c7610(0x34b):_0x2b0b96=_0x5801a6[_0x4ce1e5]!==''?JSON[_0x4c7610(0x212)](_0x5801a6[_0x4ce1e5]):{},_0x136de3=VisuMZ[_0x4c7610(0x176)]({},_0x2b0b96);break;case'ARRAYSTRUCT':_0x5860a5=_0x5801a6[_0x4ce1e5]!==''?JSON[_0x4c7610(0x212)](_0x5801a6[_0x4ce1e5]):[],_0x136de3=_0x5860a5[_0x4c7610(0x1bd)](_0x2b4a45=>VisuMZ['ConvertParams']({},JSON[_0x4c7610(0x212)](_0x2b4a45)));break;default:continue;}_0x10e85c[_0x2a8a3d]=_0x136de3;}}else return _0x177b67['assistSwapPositions'];}return _0x10e85c;},(_0x3e03d5=>{const _0x53e7d5=_0x56678c,_0x1cbb6c=_0x3e03d5[_0x53e7d5(0x1c2)];for(const _0x312a12 of dependencies){if(!Imported[_0x312a12]){alert(_0x53e7d5(0x253)[_0x53e7d5(0x1fb)](_0x1cbb6c,_0x312a12)),SceneManager[_0x53e7d5(0x26f)]();break;}}const _0x32c5c0=_0x3e03d5[_0x53e7d5(0x31b)];if(_0x32c5c0[_0x53e7d5(0x1c0)](/\[Version[ ](.*?)\]/i)){const _0x30c271=Number(RegExp['$1']);_0x30c271!==VisuMZ[label][_0x53e7d5(0x2b2)]&&('qaVtB'!==_0x53e7d5(0x1b3)?(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x1cbb6c,_0x30c271)),SceneManager['exit']()):(this[_0x53e7d5(0x1d4)][_0x53e7d5(0x209)](),this[_0x53e7d5(0x2d4)]['refresh']()));}if(_0x32c5c0['match'](/\[Tier[ ](\d+)\]/i)){const _0x1a714d=Number(RegExp['$1']);if(_0x1a714d<tier){if(_0x53e7d5(0x298)===_0x53e7d5(0x298))alert(_0x53e7d5(0x1ed)[_0x53e7d5(0x1fb)](_0x1cbb6c,_0x1a714d,tier)),SceneManager['exit']();else return _0x5ee533['PartySystem'][_0x53e7d5(0x196)][_0x53e7d5(0x2f3)][_0x53e7d5(0x2cf)][_0x53e7d5(0x215)](this);}else'aCyVm'!==_0x53e7d5(0x286)?tier=Math[_0x53e7d5(0x359)](_0x1a714d,tier):this[_0x53e7d5(0x33a)]();}VisuMZ[_0x53e7d5(0x176)](VisuMZ[label][_0x53e7d5(0x196)],_0x3e03d5[_0x53e7d5(0x1ce)]);})(pluginData),PluginManager[_0x56678c(0x21f)](pluginData[_0x56678c(0x1c2)],_0x56678c(0x2f5),_0x30f53b=>{const _0x3a25e7=_0x56678c;SceneManager[_0x3a25e7(0x34d)](Scene_Party);}),PluginManager[_0x56678c(0x21f)](pluginData[_0x56678c(0x1c2)],_0x56678c(0x220),_0x56d351=>{const _0x5b497a=_0x56678c;if($gameParty[_0x5b497a(0x278)]())return;VisuMZ['ConvertParams'](_0x56d351,_0x56d351);const _0x3e6364=_0x56d351[_0x5b497a(0x37d)];$gameParty[_0x5b497a(0x335)](_0x3e6364);}),PluginManager[_0x56678c(0x21f)](pluginData[_0x56678c(0x1c2)],_0x56678c(0x2fa),_0x285744=>{const _0x8d5ba4=_0x56678c;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x8d5ba4(0x176)](_0x285744,_0x285744);const _0x4800cf=_0x285744['Actors'];for(const _0x542956 of _0x4800cf){$gameParty['addActorToBattleMembers'](_0x542956);}$gamePlayer[_0x8d5ba4(0x209)]();}),PluginManager[_0x56678c(0x21f)](pluginData[_0x56678c(0x1c2)],_0x56678c(0x168),_0x4ad2ac=>{const _0x365601=_0x56678c;if(!SceneManager[_0x365601(0x2f9)]())return;VisuMZ[_0x365601(0x176)](_0x4ad2ac,_0x4ad2ac);const _0x1bb30f=_0x4ad2ac['Actors'];for(const _0x1a3ca8 of _0x1bb30f){if($gameParty[_0x365601(0x2ee)]()['length']<=0x1)break;$gameParty[_0x365601(0x218)](_0x1a3ca8);}$gamePlayer[_0x365601(0x209)]();}),PluginManager[_0x56678c(0x21f)](pluginData['name'],_0x56678c(0x20f),_0x2f77de=>{const _0x419de6=_0x56678c;if(!SceneManager[_0x419de6(0x2f9)]())return;if($gameParty['battleMembers']()[_0x419de6(0x2be)]<=0x1)return;if(!$gameParty[_0x419de6(0x2d9)])return;if($gameParty[_0x419de6(0x2d9)][_0x419de6(0x2be)]<=0x0)return;VisuMZ[_0x419de6(0x176)](_0x2f77de,_0x2f77de);const _0x2e7bd2=_0x2f77de[_0x419de6(0x34c)],_0x31343f=$gameParty['_battleMembers'][_0x2e7bd2];$gameParty[_0x419de6(0x218)](_0x31343f),$gamePlayer[_0x419de6(0x209)]();}),PluginManager[_0x56678c(0x21f)](pluginData[_0x56678c(0x1c2)],'MoveRandomToActive',_0x36dadc=>{const _0x34f107=_0x56678c;if(!SceneManager[_0x34f107(0x2f9)]())return;if($gameParty['battleMembers']()['length']>=$gameParty['maxBattleMembers']())return;if($gameParty[_0x34f107(0x228)]()[_0x34f107(0x2be)]<=0x0)return;const _0x4efe7e=$gameParty[_0x34f107(0x228)](),_0x215b72=_0x4efe7e[Math['floor'](Math[_0x34f107(0x337)]()*_0x4efe7e[_0x34f107(0x2be)])],_0x18bbc6=_0x215b72['actorId']();$gameParty['addActorToBattleMembers'](_0x18bbc6),$gamePlayer[_0x34f107(0x209)]();}),PluginManager[_0x56678c(0x21f)](pluginData['name'],_0x56678c(0x2c1),_0x357e91=>{const _0x55fa1b=_0x56678c;VisuMZ['ConvertParams'](_0x357e91,_0x357e91);const _0xfb366c=_0x357e91[_0x55fa1b(0x2a8)][_0x55fa1b(0x1bd)](_0x3da726=>$gameActors[_0x55fa1b(0x169)](_0x3da726))[_0x55fa1b(0x375)](null),_0x405445=_0x357e91[_0x55fa1b(0x303)];for(const _0x1ea500 of _0xfb366c){if('iSDjI'==='iSDjI'){if(!_0x1ea500)continue;_0x1ea500[_0x55fa1b(0x256)](_0x405445);}else{if(_0x42b1b8[_0x55fa1b(0x361)](_0x3945bd))return!![];return _0x9f20e4[_0x55fa1b(0x22c)][_0x55fa1b(0x305)][_0x55fa1b(0x215)](this);}}}),PluginManager[_0x56678c(0x21f)](pluginData['name'],_0x56678c(0x1c6),_0x5997d8=>{const _0x5d654a=_0x56678c;VisuMZ['ConvertParams'](_0x5997d8,_0x5997d8);const _0x363ad3=_0x5997d8[_0x5d654a(0x2a8)][_0x5d654a(0x1bd)](_0x239284=>$gameActors[_0x5d654a(0x169)](_0x239284))[_0x5d654a(0x375)](null),_0x5f2082=_0x5997d8['Require'];for(const _0x3f9a2b of _0x363ad3){if(!_0x3f9a2b)continue;_0x3f9a2b[_0x5d654a(0x2b9)](_0x5f2082);}}),ImageManager[_0x56678c(0x19a)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x2f7)][_0x56678c(0x2d5)],ImageManager[_0x56678c(0x2d2)]=VisuMZ[_0x56678c(0x22c)]['Settings'][_0x56678c(0x2f7)][_0x56678c(0x22a)],TextManager[_0x56678c(0x1b9)]=VisuMZ['PartySystem'][_0x56678c(0x196)]['Vocab'][_0x56678c(0x249)],TextManager[_0x56678c(0x2ab)]=VisuMZ['PartySystem'][_0x56678c(0x196)]['Vocab'][_0x56678c(0x240)],TextManager[_0x56678c(0x1d1)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x38d)][_0x56678c(0x2ba)],TextManager[_0x56678c(0x236)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x38d)][_0x56678c(0x1b6)],TextManager['removePartyMember']=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)]['Vocab'][_0x56678c(0x31f)],TextManager[_0x56678c(0x36a)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x38d)]['AssistSwapPosition'],TextManager['assistRemovePartyMember']=VisuMZ['PartySystem'][_0x56678c(0x196)]['Vocab']['AssistRemove'],TextManager[_0x56678c(0x394)]=VisuMZ['PartySystem'][_0x56678c(0x196)][_0x56678c(0x38d)][_0x56678c(0x208)],TextManager[_0x56678c(0x1af)]=VisuMZ[_0x56678c(0x22c)]['Settings'][_0x56678c(0x38d)]['AssistSwapIn'],TextManager[_0x56678c(0x1aa)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x38d)]['AssistSwapOut'],ColorManager[_0x56678c(0x25f)]=function(_0x156bc7){const _0x2bbedc=_0x56678c;_0x156bc7=String(_0x156bc7);if(_0x156bc7[_0x2bbedc(0x1c0)](/#(.*)/i)){if(_0x2bbedc(0x2db)!==_0x2bbedc(0x32d))return _0x2bbedc(0x320)[_0x2bbedc(0x1fb)](String(RegExp['$1']));else this[_0x2bbedc(0x2b7)]()&&this[_0x2bbedc(0x18a)]();}else return this[_0x2bbedc(0x310)](Number(_0x156bc7));},SceneManager['isSceneParty']=function(){const _0xbf0c3e=_0x56678c;return this[_0xbf0c3e(0x297)]&&this['_scene']['constructor']===Scene_Party;},SceneManager['isSceneMap']=function(){const _0xd3b20d=_0x56678c;return this[_0xd3b20d(0x297)]&&this[_0xd3b20d(0x297)][_0xd3b20d(0x395)]===Scene_Map;},VisuMZ[_0x56678c(0x22c)][_0x56678c(0x205)]=BattleManager[_0x56678c(0x349)],BattleManager['setup']=function(_0x54434f,_0x4c790f,_0x23e30f){const _0x189e2a=_0x56678c;VisuMZ[_0x189e2a(0x22c)][_0x189e2a(0x205)][_0x189e2a(0x215)](this,_0x54434f,_0x4c790f,_0x23e30f),$gameParty[_0x189e2a(0x26a)]();},BattleManager[_0x56678c(0x2e9)]=function(_0x33b951,_0x5e533c){const _0x12cbd9=_0x56678c;if(_0x33b951===_0x5e533c)return;if(!_0x33b951)return;if(!_0x5e533c)return;if(this['_target']===_0x33b951)this['_target']=_0x5e533c;while(this['_targets'][_0x12cbd9(0x24d)](_0x33b951)){const _0x39b272=this[_0x12cbd9(0x2bd)]['indexOf'](_0x33b951);this[_0x12cbd9(0x2bd)][_0x39b272]=_0x5e533c;}},VisuMZ[_0x56678c(0x22c)][_0x56678c(0x237)]=Game_Battler[_0x56678c(0x1a9)][_0x56678c(0x2d0)],Game_Battler[_0x56678c(0x1a9)]['onBattleStart']=function(_0x1bf573){const _0xb01925=_0x56678c;VisuMZ[_0xb01925(0x22c)]['Game_Battler_onBattleStart'][_0xb01925(0x215)](this,_0x1bf573);if(this['isActor']())this['clearPartySwitchCommandCooldown']();this['clearDamagePopup']();},VisuMZ[_0x56678c(0x22c)][_0x56678c(0x36b)]=Game_Battler[_0x56678c(0x1a9)]['regenerateAll'],Game_Battler['prototype']['regenerateAll']=function(){const _0x3e17ba=_0x56678c;VisuMZ['PartySystem']['Game_Battler_regenerateAll'][_0x3e17ba(0x215)](this);if(this[_0x3e17ba(0x279)]()&&$gameParty[_0x3e17ba(0x278)]())this['updateBattlePartySwitchCooldown']();},VisuMZ[_0x56678c(0x22c)]['Game_Actor_setup']=Game_Actor[_0x56678c(0x1a9)][_0x56678c(0x349)],Game_Actor[_0x56678c(0x1a9)][_0x56678c(0x349)]=function(_0x340eb1){const _0x45a151=_0x56678c;VisuMZ[_0x45a151(0x22c)][_0x45a151(0x226)][_0x45a151(0x215)](this,_0x340eb1),this['initPartySystem'](),this['clearPartySwitchCommandCooldown']();},Game_Actor[_0x56678c(0x1a9)]['initPartySystem']=function(){const _0x2bbedf=_0x56678c;this[_0x2bbedf(0x162)]=![],this[_0x2bbedf(0x2d7)]=![];},Game_Actor['prototype'][_0x56678c(0x2ef)]=function(){const _0x115d44=_0x56678c;if(this[_0x115d44(0x162)]===undefined)this[_0x115d44(0x35e)]();return!this[_0x115d44(0x162)];},Game_Actor['prototype'][_0x56678c(0x256)]=function(_0x2d21aa){const _0x3708cf=_0x56678c;if(this[_0x3708cf(0x162)]===undefined)this[_0x3708cf(0x35e)]();this[_0x3708cf(0x162)]=_0x2d21aa;},Game_Actor[_0x56678c(0x1a9)][_0x56678c(0x1c5)]=function(){const _0x5b4cc9=_0x56678c;if(this[_0x5b4cc9(0x2d7)]===undefined)this[_0x5b4cc9(0x35e)]();return this[_0x5b4cc9(0x2d7)];},Game_Actor[_0x56678c(0x1a9)][_0x56678c(0x2b9)]=function(_0x192667){const _0x1897c9=_0x56678c;if(this['_partyRequired']===undefined)this[_0x1897c9(0x35e)]();this[_0x1897c9(0x2d7)]=_0x192667;},Game_Actor[_0x56678c(0x1a9)][_0x56678c(0x1b4)]=function(){const _0x10bb27=_0x56678c;this[_0x10bb27(0x20c)]=0x0;},Game_Actor[_0x56678c(0x1a9)][_0x56678c(0x2eb)]=function(){const _0xdd3dae=_0x56678c;if(this['_partySwitchBattleCommandCooldown']===undefined)this[_0xdd3dae(0x1b4)]();if(!this[_0xdd3dae(0x2ef)]())return![];if(this[_0xdd3dae(0x1c5)]())return![];return this['_partySwitchBattleCommandCooldown']<=0x0;},Game_Actor[_0x56678c(0x1a9)]['battlePartySwitchCooldown']=function(){const _0x2e67d6=_0x56678c;if(this[_0x2e67d6(0x20c)]===undefined)this[_0x2e67d6(0x1b4)]();return this[_0x2e67d6(0x20c)];},Game_Actor[_0x56678c(0x1a9)][_0x56678c(0x2d6)]=function(_0x2e4c45){const _0x4365fb=_0x56678c;if(this['_partySwitchBattleCommandCooldown']===undefined)this[_0x4365fb(0x1b4)]();this[_0x4365fb(0x20c)]=_0x2e4c45||0x0;},Game_Actor['prototype'][_0x56678c(0x346)]=function(){const _0x1474bf=_0x56678c;if(this[_0x1474bf(0x20c)]===undefined)this[_0x1474bf(0x1b4)]();const _0x42ba27=VisuMZ[_0x1474bf(0x22c)]['Settings'][_0x1474bf(0x2f7)]['ActorCmdCooldown'];this[_0x1474bf(0x2d6)](_0x42ba27);},Game_Actor[_0x56678c(0x1a9)][_0x56678c(0x338)]=function(){const _0x4fecc9=_0x56678c;if(this[_0x4fecc9(0x20c)]===undefined)this[_0x4fecc9(0x1b4)]();this[_0x4fecc9(0x20c)]--;},Game_Actor[_0x56678c(0x1a9)][_0x56678c(0x2bc)]=function(_0xc180ad){const _0x343f32=_0x56678c;Imported[_0x343f32(0x210)]&&BattleManager['isCTB']()&&(_0x343f32(0x171)===_0x343f32(0x20b)?this['_battleMaxSize']=0x0:BattleManager[_0x343f32(0x284)]());Imported[_0x343f32(0x294)]&&BattleManager[_0x343f32(0x1bf)]()&&(BattleManager[_0x343f32(0x250)](),BattleManager[_0x343f32(0x211)]=this,BattleManager[_0x343f32(0x371)]=this);if(Imported[_0x343f32(0x393)]&&BattleManager[_0x343f32(0x257)]()){if(_0x343f32(0x199)!==_0x343f32(0x272)){BattleManager[_0x343f32(0x211)]=undefined,BattleManager[_0x343f32(0x371)]=this;const _0x2de2ec=BattleManager[_0x343f32(0x36d)][_0x343f32(0x2a3)](_0xc180ad);BattleManager[_0x343f32(0x36d)][_0x2de2ec]=this,BattleManager[_0x343f32(0x2c6)]();}else{if(!this[_0x343f32(0x277)])return![];return _0x371fe4[_0x343f32(0x22c)][_0x343f32(0x196)]['General'][_0x343f32(0x1e2)];}}Imported[_0x343f32(0x282)]&&BattleManager[_0x343f32(0x244)]()&&('tVvwm'==='rZagl'?this[_0x343f32(0x31e)]=0x0:(BattleManager[_0x343f32(0x211)]=this,BattleManager[_0x343f32(0x371)]=this));Imported['VisuMZ_2_BattleSystemPTB']&&BattleManager['isPTB']()&&(BattleManager['_subject']=this,BattleManager['_currentActor']=this);if(Imported[_0x343f32(0x23b)]&&BattleManager['isOTB']()){if(_0x343f32(0x32c)===_0x343f32(0x274))return _0x1d3fad['PartySystem'][_0x343f32(0x196)]['Window'][_0x343f32(0x309)][_0x343f32(0x215)](this);else{BattleManager['_subject']=this,BattleManager[_0x343f32(0x371)]=this;for(let _0x4ae506=0x0;_0x4ae506<BattleManager[_0x343f32(0x36d)][_0x343f32(0x2be)];_0x4ae506++){if(_0x343f32(0x2c9)===_0x343f32(0x383)){const _0x44aa6f=this[_0x343f32(0x169)](_0x619b96),_0x532ceb=this[_0x343f32(0x1e8)](_0x449028),_0x11c14f=_0x532ceb['x']+_0x33921c[_0x343f32(0x2e6)]+0x24,_0x1e76e=_0x11c14f+0xb4;this[_0x343f32(0x2a2)](this[_0x343f32(0x15b)](_0x44aa6f)),this[_0x343f32(0x258)](_0x44aa6f,_0x11c14f,_0x532ceb['y']),this[_0x343f32(0x1a7)](_0x44aa6f,_0x11c14f,_0x532ceb['y']+this[_0x343f32(0x378)]()),this[_0x343f32(0x32a)](_0x44aa6f,_0x1e76e,_0x532ceb['y']),this[_0x343f32(0x2a2)](!![]);}else{const _0x25c9a3=BattleManager['_actionBattlers'][_0x4ae506];if(_0x25c9a3===_0xc180ad){if(_0x343f32(0x328)!==_0x343f32(0x328)){const _0x1ab445=this['actor'](_0x584dfb),_0x5f08f5=this['actor'](_0x532a8c);if(!_0x1ab445?.[_0x343f32(0x2ef)]()||!_0x5f08f5?.['isFormationChangeOk']())return;else{if(!_0x1ab445||!_0x5f08f5)return;}const _0xc05a07=_0x2e14a4[_0x343f32(0x276)],_0x1bcbcf=_0xc05a07[_0x343f32(0x2a3)](_0x1ab445[_0x343f32(0x389)]()),_0x37d5=_0xc05a07[_0x343f32(0x2a3)](_0x5f08f5[_0x343f32(0x389)]());_0xc05a07[_0x1bcbcf]=_0x5f08f5?_0x5f08f5[_0x343f32(0x389)]():0x0,_0xc05a07[_0x37d5]=_0x1ab445?_0x1ab445[_0x343f32(0x389)]():0x0,this[_0x343f32(0x209)](),this['playCursorSound'](),this[_0x343f32(0x373)](_0x441f8c);}else BattleManager['_actionBattlers'][_0x4ae506]=this;}}}for(let _0x1505ed=0x0;_0x1505ed<BattleManager[_0x343f32(0x16e)][_0x343f32(0x2be)];_0x1505ed++){const _0x599225=BattleManager[_0x343f32(0x16e)][_0x1505ed];_0x599225===_0xc180ad&&(_0x343f32(0x1b0)===_0x343f32(0x1f5)?(_0x5177e2[_0x343f32(0x1a9)]['processCursorMove'][_0x343f32(0x215)](this),this[_0x343f32(0x314)]()):BattleManager['_otb_actionBattlersNext'][_0x1505ed]=this);}}}if(Imported[_0x343f32(0x1e7)]&&BattleManager[_0x343f32(0x339)]()){if(_0x343f32(0x1cf)===_0x343f32(0x29e))this[_0x343f32(0x2cc)][_0x343f32(0x24e)](),this['_actorCommandWindow'][_0x343f32(0x255)]();else{const _0x29f965=_0xc180ad[_0x343f32(0x219)](),_0x3943a7=_0xc180ad[_0x343f32(0x1ec)]();this[_0x343f32(0x206)](_0x29f965,_0x3943a7);}}},VisuMZ[_0x56678c(0x22c)][_0x56678c(0x330)]=Game_Unit['prototype'][_0x56678c(0x278)],Game_Unit[_0x56678c(0x1a9)]['inBattle']=function(){const _0x59098e=_0x56678c;if(SceneManager[_0x59098e(0x372)]())return![];return VisuMZ[_0x59098e(0x22c)]['Game_Unit_inBattle']['call'](this);},Game_Party[_0x56678c(0x230)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x2f7)][_0x56678c(0x388)],VisuMZ[_0x56678c(0x22c)][_0x56678c(0x1cb)]=Game_Party['prototype'][_0x56678c(0x260)],Game_Party[_0x56678c(0x1a9)][_0x56678c(0x260)]=function(){const _0x1a9c34=_0x56678c;VisuMZ[_0x1a9c34(0x22c)]['Game_Party_initialize'][_0x1a9c34(0x215)](this),this[_0x1a9c34(0x26a)](),this[_0x1a9c34(0x344)](),this[_0x1a9c34(0x364)]();},Game_Party['prototype'][_0x56678c(0x26a)]=function(){const _0x493271=_0x56678c;this[_0x493271(0x31e)]=0x0;},Game_Party['prototype'][_0x56678c(0x2eb)]=function(){const _0x2cfb7e=_0x56678c;if(this[_0x2cfb7e(0x31e)]===undefined)this[_0x2cfb7e(0x26a)]();return this[_0x2cfb7e(0x31e)]<=0x0;},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x2a9)]=function(){const _0x4b3eb4=_0x56678c;if(this['_partySystemBattleCommandCooldown']===undefined)this[_0x4b3eb4(0x26a)]();return this['_partySystemBattleCommandCooldown'];},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x2d6)]=function(_0x25146a){const _0xf2ca8a=_0x56678c;if(this[_0xf2ca8a(0x31e)]===undefined)this['clearPartyBattleCommandCooldown']();this[_0xf2ca8a(0x31e)]=_0x25146a;},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x346)]=function(){const _0x917079=_0x56678c;if(this['_partySystemBattleCommandCooldown']===undefined)this[_0x917079(0x26a)]();this[_0x917079(0x31e)]=VisuMZ['PartySystem']['Settings'][_0x917079(0x2f7)]['PartyCmdCooldown']||0x0;},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x338)]=function(){const _0x222c73=_0x56678c;if(this[_0x222c73(0x31e)]===undefined)this[_0x222c73(0x26a)]();this[_0x222c73(0x31e)]--;},Game_Party['prototype'][_0x56678c(0x344)]=function(){this['_battleMaxSize']=0x0;},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x335)]=function(_0x159b0b){const _0x160096=_0x56678c;this[_0x160096(0x19e)]=_0x159b0b,this[_0x160096(0x364)](!![]),$gamePlayer&&$gamePlayer[_0x160096(0x1f1)]()&&$gamePlayer[_0x160096(0x1f1)]()['changeMaxBattleMembers']();},Game_Followers['prototype']['changeMaxBattleMembers']=function(){const _0x30e19d=_0x56678c;if(!SceneManager[_0x30e19d(0x2f9)]())return;this['setup']();const _0x29bb60=$gameMap[_0x30e19d(0x323)](),_0x84771b=$gamePlayer['x'],_0x5d0a0d=$gamePlayer['y'],_0x28a464=$gamePlayer[_0x30e19d(0x2b4)]();$gameTemp[_0x30e19d(0x2d3)]=!![],$gamePlayer[_0x30e19d(0x2af)](_0x29bb60,_0x84771b,_0x5d0a0d,_0x28a464,0x2),setTimeout(this[_0x30e19d(0x15e)]['bind'](this),0x7d0);},Game_Followers[_0x56678c(0x1a9)][_0x56678c(0x15e)]=function(){const _0x52c641=_0x56678c;$gameTemp[_0x52c641(0x2d3)]=![];},VisuMZ[_0x56678c(0x22c)]['Scene_Base_isAutosaveEnabled']=Scene_Base['prototype'][_0x56678c(0x1ab)],Scene_Base[_0x56678c(0x1a9)][_0x56678c(0x1ab)]=function(){const _0x7bb893=_0x56678c;if($gameTemp[_0x7bb893(0x2d3)])return![];return VisuMZ[_0x7bb893(0x22c)]['Scene_Base_isAutosaveEnabled']['call'](this);},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x198)]=function(){const _0x3d7166=_0x56678c;if(this['_battleMaxSize']===undefined)this[_0x3d7166(0x364)]();let _0x4b21cf=this[_0x3d7166(0x19e)]||Game_Party[_0x3d7166(0x230)];return Imported[_0x3d7166(0x1e7)]&&BattleManager[_0x3d7166(0x352)]()&&(_0x4b21cf=_0x4b21cf[_0x3d7166(0x2c7)](0x1,0x14)),_0x4b21cf;},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x321)]=function(){const _0x40c6db=_0x56678c;if(this[_0x40c6db(0x19e)]===undefined)this[_0x40c6db(0x364)]();if(!this[_0x40c6db(0x2d9)])this[_0x40c6db(0x364)]();while(this['_battleMembers'][_0x40c6db(0x2be)]<this[_0x40c6db(0x19e)]){this['_battleMembers'][_0x40c6db(0x34d)](0x0);}},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x364)]=function(_0x53db64){const _0x47bf69=_0x56678c;!_0x53db64&&(this[_0x47bf69(0x19e)]=Game_Party[_0x47bf69(0x230)]);this[_0x47bf69(0x2d9)]=this[_0x47bf69(0x276)]['slice'](0x0,this['_battleMaxSize']);while(this[_0x47bf69(0x2d9)][_0x47bf69(0x2be)]<this['_battleMaxSize']){if(_0x47bf69(0x23d)!==_0x47bf69(0x1a4))this['_battleMembers']['push'](0x0);else{if(this[_0x47bf69(0x1d4)]&&this['_activePartyWindow'][_0x47bf69(0x1ae)])return _0x5f18c2['assistSwapOutPartyMember'];else return this[_0x47bf69(0x2d4)]&&this[_0x47bf69(0x2d4)][_0x47bf69(0x1ae)]?_0x2244ab[_0x47bf69(0x1af)]:_0x112a61[_0x47bf69(0x1a9)][_0x47bf69(0x19d)][_0x47bf69(0x215)](this);}}if($gamePlayer)$gamePlayer[_0x47bf69(0x209)]();},Game_Party['prototype'][_0x56678c(0x2ee)]=function(){const _0xd43a20=_0x56678c;if(Imported[_0xd43a20(0x1e7)]&&SceneManager['isSceneGridTactics']())return this[_0xd43a20(0x290)](!![]);return this[_0xd43a20(0x290)]()['filter'](_0x3d5b0a=>!!_0x3d5b0a);},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x290)]=function(_0x285ae3){const _0x7f1ec=_0x56678c;this[_0x7f1ec(0x321)]();const _0x4a366f=this[_0x7f1ec(0x2d9)][_0x7f1ec(0x1bd)](_0x1769ce=>$gameActors[_0x7f1ec(0x169)](_0x1769ce));if(_0x285ae3)return _0x4a366f;return SceneManager[_0x7f1ec(0x372)]()?_0x4a366f:_0x4a366f['filter'](_0x472b85=>_0x472b85&&_0x472b85[_0x7f1ec(0x170)]());},Game_Party[_0x56678c(0x1a9)]['reserveMembers']=function(){const _0x4c5afb=_0x56678c,_0x15f1ae=this[_0x4c5afb(0x2ee)]();return this[_0x4c5afb(0x1f7)]()['filter'](_0xa6e01d=>!_0x15f1ae['includes'](_0xa6e01d));},VisuMZ['PartySystem'][_0x56678c(0x185)]=Game_Party[_0x56678c(0x1a9)][_0x56678c(0x2c0)],Game_Party[_0x56678c(0x1a9)][_0x56678c(0x2c0)]=function(){const _0x468f59=_0x56678c;VisuMZ['PartySystem'][_0x468f59(0x185)][_0x468f59(0x215)](this),this[_0x468f59(0x364)]();},VisuMZ[_0x56678c(0x22c)]['Game_Party_setupBattleTest']=Game_Party[_0x56678c(0x1a9)][_0x56678c(0x247)],Game_Party[_0x56678c(0x1a9)][_0x56678c(0x247)]=function(){const _0x3b7dba=_0x56678c;VisuMZ['PartySystem'][_0x3b7dba(0x163)][_0x3b7dba(0x215)](this),this[_0x3b7dba(0x1f0)]();},Game_Party['prototype'][_0x56678c(0x1d6)]=function(){const _0x939e90=_0x56678c;this[_0x939e90(0x19e)]=Game_Party[_0x939e90(0x230)],this[_0x939e90(0x2d9)]=[],this['_actors']=[];for(const _0x427a0d of $dataSystem['testBattlers']){const _0x2fca38=$gameActors[_0x939e90(0x169)](_0x427a0d[_0x939e90(0x389)]);if(!_0x2fca38)continue;_0x2fca38[_0x939e90(0x2c2)](_0x427a0d[_0x939e90(0x32f)],![]),_0x2fca38[_0x939e90(0x1be)](_0x427a0d[_0x939e90(0x173)]),_0x2fca38[_0x939e90(0x1dd)](),this[_0x939e90(0x2d9)][_0x939e90(0x34d)](_0x427a0d[_0x939e90(0x389)]),this['_actors'][_0x939e90(0x34d)](_0x427a0d['actorId']);}this[_0x939e90(0x2d9)][_0x939e90(0x375)](0x0);while(this[_0x939e90(0x2d9)][_0x939e90(0x2be)]<this[_0x939e90(0x19e)]){if(_0x939e90(0x37e)==='pjHZI')this[_0x939e90(0x2d9)][_0x939e90(0x34d)](0x0);else{const _0x18bcfc=this['skillItemWindowRectBorderStyle'](),_0x428120=_0x31a394['windowPadding']()*0x2;return _0x18bcfc[_0x939e90(0x22f)]=0x204+_0x428120,_0x18bcfc;}}while(this[_0x939e90(0x2d9)]['length']>this[_0x939e90(0x198)]()){if(_0x939e90(0x2c4)===_0x939e90(0x350)){const _0x1b927a=_0x411ddd(_0x5377d8['$1']);_0x1b927a!==_0x3fa163[_0x3e15fa][_0x939e90(0x2b2)]&&(_0x74492b(_0x939e90(0x165)[_0x939e90(0x1fb)](_0x3b1914,_0x1b927a)),_0x1c46b5['exit']());}else this[_0x939e90(0x2d9)][_0x939e90(0x2fb)]();}if($gamePlayer)$gamePlayer['refresh']();},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x1f0)]=function(){const _0x2a9611=_0x56678c,_0x56c062=this[_0x2a9611(0x2ee)]();for(let _0x31f418=0x1;_0x31f418<$dataActors[_0x2a9611(0x2be)];_0x31f418++){if(_0x2a9611(0x28f)!==_0x2a9611(0x267)){const _0x3b69a9=$gameActors[_0x2a9611(0x169)](_0x31f418);if(!_0x3b69a9)continue;if(_0x3b69a9[_0x2a9611(0x1c2)]()[_0x2a9611(0x2be)]<=0x0)continue;if(_0x3b69a9['name']()['match'](/-----/i))continue;if(_0x56c062[_0x2a9611(0x24d)](_0x3b69a9))continue;this[_0x2a9611(0x276)][_0x2a9611(0x34d)](_0x3b69a9[_0x2a9611(0x389)]());}else _0x2f2676['PartySystem'][_0x2a9611(0x163)][_0x2a9611(0x215)](this),this[_0x2a9611(0x1f0)]();}},VisuMZ[_0x56678c(0x22c)][_0x56678c(0x2b6)]=Game_Party[_0x56678c(0x1a9)][_0x56678c(0x327)],Game_Party['prototype'][_0x56678c(0x327)]=function(_0x4d1568){const _0x50bd09=_0x56678c;VisuMZ[_0x50bd09(0x22c)][_0x50bd09(0x2b6)]['call'](this,_0x4d1568),this[_0x50bd09(0x343)](_0x4d1568),SceneManager['isSceneBattle']()&&(Imported[_0x50bd09(0x23b)]&&BattleManager[_0x50bd09(0x1ad)]()&&(BattleManager[_0x50bd09(0x37c)](),BattleManager[_0x50bd09(0x1b2)]($gameActors[_0x50bd09(0x169)](_0x4d1568))));},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x343)]=function(_0x21042c){const _0x41aeed=_0x56678c;this['checkInitBattleMembers']();if(this[_0x41aeed(0x2d9)][_0x41aeed(0x24d)](_0x21042c))return;if(!this[_0x41aeed(0x276)][_0x41aeed(0x24d)](_0x21042c))return;if(!this[_0x41aeed(0x2d9)][_0x41aeed(0x24d)](0x0))return;const _0x59cc41=$gameActors[_0x41aeed(0x169)](_0x21042c);if(!_0x59cc41)return;const _0x254a12=this['_battleMembers'][_0x41aeed(0x2a3)](0x0);if(_0x254a12<0x0)return;this[_0x41aeed(0x2d9)][_0x254a12]=_0x21042c,SceneManager['isSceneBattle']()&&(_0x41aeed(0x203)==='aWjaN'?(_0x59cc41[_0x41aeed(0x2d0)](),_0x59cc41[_0x41aeed(0x2e7)]()):this[_0x41aeed(0x160)]=0x0),this[_0x41aeed(0x27b)]();},Game_Party['prototype'][_0x56678c(0x30a)]=function(_0x4bb702,_0x13ce03){const _0x1d5717=_0x56678c;this['checkInitBattleMembers']();if(this[_0x1d5717(0x2d9)]['includes'](_0x4bb702))return;if(!this[_0x1d5717(0x2d9)][_0x1d5717(0x24d)](0x0))return;const _0x3021f=$gameActors[_0x1d5717(0x169)](_0x4bb702);if(!_0x3021f)return;this[_0x1d5717(0x2d9)][_0x13ce03]=_0x4bb702,_0x3021f[_0x1d5717(0x2e7)](),this[_0x1d5717(0x27b)]();},VisuMZ[_0x56678c(0x22c)][_0x56678c(0x1ea)]=Game_Party[_0x56678c(0x1a9)][_0x56678c(0x16a)],Game_Party[_0x56678c(0x1a9)]['removeActor']=function(_0x24d34b){const _0x5efdfb=_0x56678c;this[_0x5efdfb(0x218)](_0x24d34b),VisuMZ[_0x5efdfb(0x22c)][_0x5efdfb(0x1ea)]['call'](this,_0x24d34b);},Game_Party[_0x56678c(0x1a9)]['removeActorFromBattleMembers']=function(_0x1ca6c3){const _0x1ff862=_0x56678c;this['checkInitBattleMembers']();if(!this[_0x1ff862(0x2d9)][_0x1ff862(0x24d)](_0x1ca6c3))return;if(_0x1ca6c3<=0x0)return;const _0x5e53e7=this[_0x1ff862(0x2d9)][_0x1ff862(0x2a3)](_0x1ca6c3);this[_0x1ff862(0x2d9)][_0x5e53e7]=0x0,this['_actors']['remove'](_0x1ca6c3),this[_0x1ff862(0x276)]['push'](_0x1ca6c3),this[_0x1ff862(0x27b)]();},Game_Party[_0x56678c(0x1a9)]['partyChangeRefresh']=function(){const _0x179b1e=_0x56678c;this['rearrangePartyActors'](),$gamePlayer['refresh'](),$gameMap[_0x179b1e(0x360)]();},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x28a)]=function(){const _0x28e820=_0x56678c;this[_0x28e820(0x321)]();const _0x160158=this[_0x28e820(0x2ee)]()[_0x28e820(0x188)](this[_0x28e820(0x228)]());this[_0x28e820(0x276)]=_0x160158[_0x28e820(0x1bd)](_0x24b22f=>_0x24b22f?_0x24b22f[_0x28e820(0x389)]():0x0)['remove'](0x0);},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x26c)]=function(){const _0x46aa80=_0x56678c;this[_0x46aa80(0x276)][_0x46aa80(0x2d1)]((_0x2be94f,_0x5f04a3)=>_0x2be94f-_0x5f04a3),this[_0x46aa80(0x28a)](),this[_0x46aa80(0x27b)]();},Game_Party['prototype'][_0x56678c(0x238)]=function(){const _0x910bd9=_0x56678c;for(const _0x4793bc of this[_0x910bd9(0x228)]()){if(!_0x4793bc)continue;if(_0x4793bc['isRequiredInParty']())return!![];}return![];},VisuMZ[_0x56678c(0x22c)]['Game_Party_swapOrder']=Game_Party[_0x56678c(0x1a9)][_0x56678c(0x1e4)],Game_Party['prototype'][_0x56678c(0x1e4)]=function(_0x3a2182,_0x102b31){const _0x340712=_0x56678c;VisuMZ['PartySystem'][_0x340712(0x336)][_0x340712(0x215)](this,_0x3a2182,_0x102b31),this['swapOrderPartySystemPlugin'](_0x3a2182,_0x102b31);},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x241)]=function(_0x393a63,_0x578ccb){const _0x2c5b19=_0x56678c;this[_0x2c5b19(0x2d9)]=[];for(let _0x1417d0=0x0;_0x1417d0<this[_0x2c5b19(0x276)][_0x2c5b19(0x2be)];_0x1417d0++){if(this[_0x2c5b19(0x2d9)][_0x2c5b19(0x2be)]>=this[_0x2c5b19(0x198)]()){if(_0x2c5b19(0x1b8)!==_0x2c5b19(0x1b8))return _0x185507[_0x2c5b19(0x22c)][_0x2c5b19(0x196)][_0x2c5b19(0x2f3)][_0x2c5b19(0x331)]||0x1;else break;}this[_0x2c5b19(0x2d9)][_0x1417d0]=this['_actors'][_0x1417d0];}$gamePlayer[_0x2c5b19(0x209)]();},VisuMZ[_0x56678c(0x22c)][_0x56678c(0x1b1)]=Game_Troop['prototype'][_0x56678c(0x380)],Game_Troop['prototype'][_0x56678c(0x380)]=function(){const _0x380137=_0x56678c;VisuMZ[_0x380137(0x22c)][_0x380137(0x1b1)][_0x380137(0x215)](this),$gameParty[_0x380137(0x338)]();},Scene_Menu['prototype'][_0x56678c(0x19c)]=function(){const _0xe51d94=_0x56678c;SceneManager[_0xe51d94(0x34d)](Scene_Party);};function Scene_Party(){const _0x174105=_0x56678c;this[_0x174105(0x260)](...arguments);}Scene_Party['prototype']=Object[_0x56678c(0x391)](Scene_MenuBase[_0x56678c(0x1a9)]),Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x395)]=Scene_Party,Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x260)]=function(){const _0x23fe31=_0x56678c;this[_0x23fe31(0x269)](),Scene_MenuBase[_0x23fe31(0x1a9)][_0x23fe31(0x260)][_0x23fe31(0x215)](this);},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x382)]=function(){const _0x316852=_0x56678c;if(ConfigManager[_0x316852(0x1c1)]&&ConfigManager[_0x316852(0x300)]!==undefined)return ConfigManager[_0x316852(0x300)];else{if(ConfigManager['uiMenuStyle']===![]){if(_0x316852(0x1cd)===_0x316852(0x27e))_0x5149ff[_0x316852(0x1a9)][_0x316852(0x260)][_0x316852(0x215)](this,_0x25988d),this[_0x316852(0x367)](_0x4cb500[_0x316852(0x22c)]['Settings'][_0x316852(0x2f3)][_0x316852(0x1a2)]),this[_0x316852(0x2ac)]=0x0;else return![];}else return Scene_MenuBase[_0x316852(0x1a9)][_0x316852(0x382)][_0x316852(0x215)](this);}},Scene_Party['prototype'][_0x56678c(0x23c)]=function(){return 0x0;},Scene_Party['prototype'][_0x56678c(0x23f)]=function(){return!![];},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x22d)]=function(){const _0x3363b3=_0x56678c;Scene_MenuBase['prototype'][_0x3363b3(0x22d)][_0x3363b3(0x215)](this),this[_0x3363b3(0x2b5)]['_clickHandler']=undefined,this[_0x3363b3(0x38a)]['_clickHandler']=undefined;},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x269)]=function(){const _0x1f72fa=_0x56678c;for(const _0x1d6703 of $gameParty[_0x1f72fa(0x275)]()){ImageManager[_0x1f72fa(0x1d8)](_0x1d6703[_0x1f72fa(0x293)]()),ImageManager[_0x1f72fa(0x387)](_0x1d6703[_0x1f72fa(0x340)]()),ImageManager['loadSvActor'](_0x1d6703[_0x1f72fa(0x39b)]());}},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x391)]=function(){const _0x53ae5e=_0x56678c;Scene_MenuBase[_0x53ae5e(0x1a9)][_0x53ae5e(0x391)][_0x53ae5e(0x215)](this),this[_0x53ae5e(0x161)](),this[_0x53ae5e(0x1a8)](),this[_0x53ae5e(0x246)](),this[_0x53ae5e(0x193)](),this[_0x53ae5e(0x235)](),this[_0x53ae5e(0x24f)]();},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x161)]=function(){const _0x384474=_0x56678c,_0x1aedc3=this['activePartyLabelRect']();this[_0x384474(0x1c3)]=new Window_PartyLabel(_0x1aedc3,TextManager['activeParty']),this[_0x384474(0x1c3)][_0x384474(0x367)](VisuMZ['PartySystem']['Settings'][_0x384474(0x2f3)][_0x384474(0x23a)]),this[_0x384474(0x30c)](this['_activePartyLabel']);},Scene_Party['prototype']['activePartyLabelRect']=function(){const _0x9a1d90=_0x56678c;return VisuMZ[_0x9a1d90(0x22c)]['Settings'][_0x9a1d90(0x2f3)]['ActivePartyLabelRect']['call'](this);},Scene_Party['prototype'][_0x56678c(0x1a8)]=function(){const _0x64b422=_0x56678c,_0x5887bf=this[_0x64b422(0x273)]();this[_0x64b422(0x1d4)]=new Window_PartyActive(_0x5887bf),this[_0x64b422(0x1d4)]['setBackgroundType'](VisuMZ[_0x64b422(0x22c)]['Settings']['Window'][_0x64b422(0x15a)]),this[_0x64b422(0x1d4)]['setHandler']('ok',this['onActiveOk']['bind'](this)),this[_0x64b422(0x1d4)][_0x64b422(0x225)]('cancel',this[_0x64b422(0x194)][_0x64b422(0x242)](this)),this[_0x64b422(0x30c)](this[_0x64b422(0x1d4)]);},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x273)]=function(){const _0x29078e=_0x56678c;return VisuMZ[_0x29078e(0x22c)][_0x29078e(0x196)][_0x29078e(0x2f3)][_0x29078e(0x39c)][_0x29078e(0x215)](this);},Scene_Party['prototype'][_0x56678c(0x2f8)]=function(){const _0x5dd583=_0x56678c;this[_0x5dd583(0x2d4)][_0x5dd583(0x255)](),this['_reservePartyWindow'][_0x5dd583(0x2e2)]();},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x246)]=function(){const _0x28169d=_0x56678c,_0x2fb97a=this[_0x28169d(0x1ee)]();this['_reservePartyLabel']=new Window_PartyLabel(_0x2fb97a,TextManager['reserveParty']),this['_reservePartyLabel'][_0x28169d(0x367)](VisuMZ['PartySystem']['Settings'][_0x28169d(0x2f3)][_0x28169d(0x386)]),this[_0x28169d(0x30c)](this[_0x28169d(0x37f)]);},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x1ee)]=function(){const _0xf8576c=_0x56678c;return VisuMZ[_0xf8576c(0x22c)][_0xf8576c(0x196)][_0xf8576c(0x2f3)][_0xf8576c(0x25b)][_0xf8576c(0x215)](this);},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x193)]=function(){const _0x161ec4=_0x56678c,_0x596a33=this['reservePartyWindowRect']();this[_0x161ec4(0x2d4)]=new Window_PartyReserve(_0x596a33),this[_0x161ec4(0x2d4)]['setBackgroundType'](VisuMZ[_0x161ec4(0x22c)][_0x161ec4(0x196)][_0x161ec4(0x2f3)]['ReservePartyWindowBgType']),this['_reservePartyWindow'][_0x161ec4(0x225)]('ok',this[_0x161ec4(0x1a5)][_0x161ec4(0x242)](this)),this[_0x161ec4(0x2d4)][_0x161ec4(0x225)]('cancel',this[_0x161ec4(0x27a)][_0x161ec4(0x242)](this)),this[_0x161ec4(0x30c)](this['_reservePartyWindow']);},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x2b8)]=function(){const _0x2abd6f=_0x56678c;return VisuMZ[_0x2abd6f(0x22c)][_0x2abd6f(0x196)][_0x2abd6f(0x2f3)][_0x2abd6f(0x309)][_0x2abd6f(0x215)](this);},Scene_Party['prototype']['onReserveOk']=function(){const _0x31f24c=_0x56678c,_0x796645=this[_0x31f24c(0x2d4)]['pendingIndex'](),_0x1b3789=this[_0x31f24c(0x1d4)][_0x31f24c(0x19f)]();if(_0x796645<0x0){if(_0x1b3789)$gameParty[_0x31f24c(0x218)](_0x1b3789[_0x31f24c(0x389)]());}else{const _0x26f6b1=this[_0x31f24c(0x2d4)][_0x31f24c(0x19f)]()[_0x31f24c(0x389)](),_0x5a7b8f=this[_0x31f24c(0x1d4)][_0x31f24c(0x1f8)]();if(_0x1b3789)$gameParty[_0x31f24c(0x218)](_0x1b3789[_0x31f24c(0x389)]());$gameParty[_0x31f24c(0x30a)](_0x26f6b1,_0x5a7b8f);}this[_0x31f24c(0x2e5)](),this[_0x31f24c(0x27a)]();},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x2e5)]=function(){const _0x51aa24=_0x56678c;this['_activePartyWindow']['refresh'](),this[_0x51aa24(0x2d4)]['refresh']();},Scene_Party['prototype'][_0x56678c(0x27a)]=function(){const _0x719498=_0x56678c;this[_0x719498(0x2d4)]['deactivate'](),this['_reservePartyWindow']['deselect'](),this[_0x719498(0x1d4)][_0x719498(0x255)]();},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x235)]=function(){const _0x53945e=_0x56678c,_0x46e38f=this['statusLabelRect']();this['_statusPartyLabel']=new Window_PartyLabel(_0x46e38f,TextManager[_0x53945e(0x1d1)]),this[_0x53945e(0x2ad)]['setBackgroundType'](VisuMZ[_0x53945e(0x22c)][_0x53945e(0x196)][_0x53945e(0x2f3)][_0x53945e(0x2a5)]),this[_0x53945e(0x30c)](this[_0x53945e(0x2ad)]);},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x2f1)]=function(){const _0x18001c=_0x56678c;return VisuMZ[_0x18001c(0x22c)][_0x18001c(0x196)][_0x18001c(0x2f3)][_0x18001c(0x399)][_0x18001c(0x215)](this);},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x24f)]=function(){const _0x4a7a8=_0x56678c,_0x56dd9f=this[_0x4a7a8(0x38b)]();this[_0x4a7a8(0x2e0)]=new Window_PartyStatus(_0x56dd9f),this[_0x4a7a8(0x2e0)][_0x4a7a8(0x367)](VisuMZ[_0x4a7a8(0x22c)][_0x4a7a8(0x196)]['Window'][_0x4a7a8(0x17d)]),this[_0x4a7a8(0x30c)](this['_statusPartyWindow']),this['_reservePartyWindow']['setStatusWindow'](this[_0x4a7a8(0x2e0)]),this['_activePartyWindow'][_0x4a7a8(0x35a)](this['_statusPartyWindow']);},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x38b)]=function(){const _0xd029af=_0x56678c;return VisuMZ[_0xd029af(0x22c)][_0xd029af(0x196)][_0xd029af(0x2f3)][_0xd029af(0x2cb)]['call'](this);},Scene_Party[_0x56678c(0x1a9)]['buttonAssistKey3']=function(){const _0x1f9f6e=_0x56678c;return TextManager[_0x1f9f6e(0x1c8)](_0x1f9f6e(0x2e4));},Scene_Party['prototype'][_0x56678c(0x166)]=function(){const _0x5d763b=_0x56678c;return TextManager[_0x5d763b(0x36a)];},Scene_Party[_0x56678c(0x1a9)]['buttonAssistText3']=function(){const _0x2ff5f0=_0x56678c,_0x51f8df=this[_0x2ff5f0(0x1d4)],_0x5e380b=this['_reservePartyWindow'];if(_0x51f8df&&_0x51f8df['active']&&_0x51f8df[_0x2ff5f0(0x19f)]()&&_0x51f8df[_0x2ff5f0(0x207)]())return TextManager[_0x2ff5f0(0x265)];else{if(_0x5e380b&&_0x5e380b['active']&&$gameParty[_0x2ff5f0(0x228)]()[_0x2ff5f0(0x2be)]>0x0){if('hSkar'===_0x2ff5f0(0x376))return TextManager[_0x2ff5f0(0x394)];else{_0x33d7f3=_0x5486c0||this['lineHeight'](),this[_0x2ff5f0(0x1d5)][_0x2ff5f0(0x179)]=0xa0;const _0x3733b1=_0x2e82cc[_0x2ff5f0(0x16d)]();this['contents'][_0x2ff5f0(0x2c8)](_0x22cafa+0x1,_0x407e40+0x1,_0xda09b-0x2,_0x9270d4-0x2,_0x3733b1),this['contents'][_0x2ff5f0(0x179)]=0xff;}}else{if('UBsnl'!==_0x2ff5f0(0x158))this[_0x2ff5f0(0x197)]=this[_0x2ff5f0(0x197)]||0x0,this['_partySwitchDuration']--,this[_0x2ff5f0(0x197)]<=0x0&&this['startSwitchInAnimation'](this[_0x2ff5f0(0x1d9)]);else return'';}}},Scene_Party['prototype'][_0x56678c(0x19d)]=function(){const _0x57173f=_0x56678c;if(this[_0x57173f(0x1d4)]&&this[_0x57173f(0x1d4)][_0x57173f(0x1ae)]){if(_0x57173f(0x2b0)!==_0x57173f(0x183))return TextManager[_0x57173f(0x1aa)];else _0x33b841['addActorToBattleMembers'](_0x2eb2e0);}else return this[_0x57173f(0x2d4)]&&this[_0x57173f(0x2d4)][_0x57173f(0x1ae)]?TextManager[_0x57173f(0x1af)]:_0x57173f(0x239)===_0x57173f(0x239)?Scene_MenuBase['prototype'][_0x57173f(0x19d)][_0x57173f(0x215)](this):_0x5ec0fc[_0x57173f(0x1dc)]();},Scene_Party['prototype']['createBackground']=function(){const _0x41652a=_0x56678c;Scene_MenuBase[_0x41652a(0x1a9)][_0x41652a(0x2fe)][_0x41652a(0x215)](this),this['setBackgroundOpacity'](this['getBackgroundOpacity']()),this['createCustomBackgroundImages']();},Scene_Party[_0x56678c(0x1a9)][_0x56678c(0x38f)]=function(){const _0x5b6978=_0x56678c;return VisuMZ[_0x5b6978(0x22c)][_0x5b6978(0x196)][_0x5b6978(0x187)][_0x5b6978(0x355)];},Scene_Party['prototype']['createCustomBackgroundImages']=function(){const _0x4aaa06=_0x56678c,_0x2b02cb={'BgFilename1':VisuMZ[_0x4aaa06(0x22c)][_0x4aaa06(0x196)][_0x4aaa06(0x187)][_0x4aaa06(0x341)],'BgFilename2':VisuMZ['PartySystem'][_0x4aaa06(0x196)]['BgSettings'][_0x4aaa06(0x2fd)]};_0x2b02cb&&(_0x2b02cb[_0x4aaa06(0x341)]!==''||_0x2b02cb[_0x4aaa06(0x2fd)]!=='')&&(this[_0x4aaa06(0x262)]=new Sprite(ImageManager[_0x4aaa06(0x2ce)](_0x2b02cb[_0x4aaa06(0x341)])),this['_backSprite2']=new Sprite(ImageManager['loadTitle2'](_0x2b02cb['BgFilename2'])),this[_0x4aaa06(0x252)](this[_0x4aaa06(0x262)]),this['addChild'](this[_0x4aaa06(0x296)]),this[_0x4aaa06(0x262)][_0x4aaa06(0x15f)][_0x4aaa06(0x29a)](this[_0x4aaa06(0x2de)][_0x4aaa06(0x242)](this,this[_0x4aaa06(0x262)])),this['_backSprite2'][_0x4aaa06(0x15f)][_0x4aaa06(0x29a)](this['adjustSprite']['bind'](this,this[_0x4aaa06(0x296)])));},Scene_Party['prototype'][_0x56678c(0x2de)]=function(_0x5197f4){this['scaleSprite'](_0x5197f4),this['centerSprite'](_0x5197f4);},Scene_Party['prototype'][_0x56678c(0x16b)]=function(){const _0x4e9992=_0x56678c;Scene_MenuBase[_0x4e9992(0x1a9)]['terminate']['call'](this),$gameParty[_0x4e9992(0x27b)]();},Window_StatusBase[_0x56678c(0x1a9)][_0x56678c(0x21d)]=function(_0x35dd69,_0x362919,_0x11ed7e,_0x5180e6){const _0xeaece2=_0x56678c;if(!_0x35dd69)return;if(_0x5180e6){if(_0xeaece2(0x1cc)!==_0xeaece2(0x2dd))this['drawActorPartyIconsVert'](_0x35dd69,_0x362919,_0x11ed7e);else return _0x264078['uiInputPosition'];}else this[_0xeaece2(0x397)](_0x35dd69,_0x362919,_0x11ed7e);},Window_StatusBase[_0x56678c(0x1a9)][_0x56678c(0x397)]=function(_0x19a25c,_0x1df7e0,_0x248c68){const _0x2032df=_0x56678c;_0x248c68+=Math['round']((this[_0x2032df(0x378)]()-ImageManager[_0x2032df(0x333)])/0x2);if(!_0x19a25c[_0x2032df(0x2ef)]()){if('NEbFQ'!==_0x2032df(0x356)){let _0xb77141=this['battleMembers']();return _0xb77141[0x0];}else this['drawIcon'](ImageManager[_0x2032df(0x19a)],_0x1df7e0,_0x248c68),_0x1df7e0+=ImageManager['iconWidth']+0x4;}if(_0x19a25c[_0x2032df(0x1c5)]()){if(_0x2032df(0x1e3)==='hrrJB')return[0x2,0x3,0x4,0x5,0x6,0x7];else this[_0x2032df(0x329)](ImageManager['requiredPartyMemberIcon'],_0x1df7e0,_0x248c68),_0x1df7e0+=ImageManager[_0x2032df(0x2a1)]+0x4;}},Window_StatusBase[_0x56678c(0x1a9)]['drawActorPartyIconsVert']=function(_0x46b1a4,_0x180cd5,_0x187783){const _0x5293ff=_0x56678c;let _0x29ac5c=0x0;if(!_0x46b1a4[_0x5293ff(0x2ef)]())_0x29ac5c+=0x1;if(_0x46b1a4[_0x5293ff(0x1c5)]())_0x29ac5c+=0x1;if(_0x29ac5c<=0x1){if(_0x5293ff(0x325)===_0x5293ff(0x33c))_0x1c66ab[_0x5293ff(0x22c)]['Game_Troop_increaseTurn'][_0x5293ff(0x215)](this),_0xb29c60[_0x5293ff(0x338)]();else return this[_0x5293ff(0x397)](_0x46b1a4,_0x180cd5,_0x187783);}_0x187783+=Math['round']((this['lineHeight']()-ImageManager[_0x5293ff(0x333)])/0x2),_0x187783-=Math[_0x5293ff(0x164)](this[_0x5293ff(0x378)]()/0x2),this[_0x5293ff(0x329)](ImageManager['lockPartyMemberIcon'],_0x180cd5,_0x187783),_0x187783+=this['lineHeight'](),this[_0x5293ff(0x329)](ImageManager[_0x5293ff(0x2d2)],_0x180cd5,_0x187783);};function Window_PartyLabel(){const _0x31d8d2=_0x56678c;this[_0x31d8d2(0x260)](...arguments);}Window_PartyLabel[_0x56678c(0x1a9)]=Object[_0x56678c(0x391)](Window_Base['prototype']),Window_PartyLabel[_0x56678c(0x1a9)][_0x56678c(0x395)]=Window_PartyLabel,Window_PartyLabel[_0x56678c(0x1a9)][_0x56678c(0x260)]=function(_0x5a4bdb,_0x274c0f){const _0x334a15=_0x56678c;Window_Base[_0x334a15(0x1a9)][_0x334a15(0x260)]['call'](this,_0x5a4bdb),this[_0x334a15(0x177)](_0x274c0f);},Window_PartyLabel[_0x56678c(0x1a9)][_0x56678c(0x1f4)]=function(){this['padding']=0x0;},Window_PartyLabel[_0x56678c(0x1a9)][_0x56678c(0x177)]=function(_0x225c82){const _0x228142=_0x56678c;this[_0x228142(0x1d5)]['clear'](),this['drawText'](_0x225c82,0x0,0x0,this[_0x228142(0x18b)],_0x228142(0x28b));};function _0x366c(_0x2581a2,_0x214728){const _0x45da5e=_0x45da();return _0x366c=function(_0x366cd4,_0x5cb361){_0x366cd4=_0x366cd4-0x158;let _0x1834bd=_0x45da5e[_0x366cd4];return _0x1834bd;},_0x366c(_0x2581a2,_0x214728);}function Window_PartyActive(){const _0x1d8c1e=_0x56678c;this[_0x1d8c1e(0x260)](...arguments);}Window_PartyActive[_0x56678c(0x1a9)]=Object[_0x56678c(0x391)](Window_StatusBase[_0x56678c(0x1a9)]),Window_PartyActive['prototype'][_0x56678c(0x395)]=Window_PartyActive,Window_PartyActive[_0x56678c(0x1a0)]=VisuMZ['PartySystem'][_0x56678c(0x196)]['Window'][_0x56678c(0x22e)],Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x260)]=function(_0x34eace){const _0x593221=_0x56678c;Window_StatusBase[_0x593221(0x1a9)][_0x593221(0x260)][_0x593221(0x215)](this,_0x34eace),this['refresh'](),this['activate'](),this[_0x593221(0x373)](0x0);},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x25d)]=function(){const _0x4129e5=_0x56678c;return VisuMZ[_0x4129e5(0x22c)][_0x4129e5(0x196)]['General']['AddRemoveCmd'];},Window_PartyActive[_0x56678c(0x1a9)]['maxItems']=function(){const _0x21e828=_0x56678c;return $gameParty[_0x21e828(0x198)]();},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x251)]=function(){const _0x41e44e=_0x56678c;return $gameParty[_0x41e44e(0x198)]();},Window_PartyActive['prototype']['itemHeight']=function(){return this['innerHeight'];},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x169)]=function(_0xbaee08){const _0x251714=_0x56678c;return $gameParty[_0x251714(0x290)]()[_0xbaee08];},Window_PartyActive[_0x56678c(0x1a9)]['currentActor']=function(){const _0x487c5f=_0x56678c;return this[_0x487c5f(0x169)](this[_0x487c5f(0x1f8)]());},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x17a)]=function(){const _0x150638=_0x56678c,_0x268619=this['actor'](this[_0x150638(0x1f8)]());return _0x268619?_0x268619[_0x150638(0x2ef)]():!![];},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x311)]=function(){const _0x26a06c=_0x56678c;if($gameParty['members']()[_0x26a06c(0x2be)]<=0x0)return!![];if($gameParty['anyRequiredPartyMembersInReserve']())return![];return $gameParty[_0x26a06c(0x2ee)]()[_0x26a06c(0x2be)]>0x0;},Window_PartyActive[_0x56678c(0x1a9)]['processCursorMove']=function(){const _0x199b72=_0x56678c;Window_StatusBase[_0x199b72(0x1a9)][_0x199b72(0x204)][_0x199b72(0x215)](this),this[_0x199b72(0x2ca)]();},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x377)]=function(_0x36fda8){const _0x50b18f=_0x56678c;this[_0x50b18f(0x2b7)]()&&this[_0x50b18f(0x18a)]();},Window_PartyActive['prototype'][_0x56678c(0x1c4)]=function(){const _0x4098d0=_0x56678c,_0x6d197f=this[_0x4098d0(0x1f8)](),_0x14b22c=_0x6d197f+0x1>=this[_0x4098d0(0x326)]()?0x0:_0x6d197f+0x1;this[_0x4098d0(0x27f)](_0x6d197f,_0x14b22c);},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x22b)]=function(){const _0x5dab49=_0x56678c,_0x24a477=this[_0x5dab49(0x1f8)](),_0xc9b967=_0x24a477-0x1<0x0?this[_0x5dab49(0x326)]()-0x1:_0x24a477-0x1;this[_0x5dab49(0x27f)](_0x24a477,_0xc9b967);},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x27f)]=function(_0x346d1f,_0x49c1aa){const _0x1cab96=_0x56678c,_0x1ccacb=this[_0x1cab96(0x169)](_0x346d1f),_0x1d2faa=this[_0x1cab96(0x169)](_0x49c1aa);if(_0x1ccacb&&!_0x1ccacb[_0x1cab96(0x2ef)]())return;if(_0x1d2faa&&!_0x1d2faa[_0x1cab96(0x2ef)]())return;const _0x4a4331=$gameParty[_0x1cab96(0x2d9)];_0x4a4331[_0x346d1f]=_0x1d2faa?_0x1d2faa[_0x1cab96(0x389)]():0x0,_0x4a4331[_0x49c1aa]=_0x1ccacb?_0x1ccacb[_0x1cab96(0x389)]():0x0,this[_0x1cab96(0x209)](),this['playCursorSound'](),this[_0x1cab96(0x373)](_0x49c1aa);},Window_PartyActive['prototype'][_0x56678c(0x2ca)]=function(){const _0x5a617c=_0x56678c;if(!this[_0x5a617c(0x207)]())return;if(Input[_0x5a617c(0x289)](_0x5a617c(0x2e4))){if(_0x5a617c(0x362)!=='arjMa')return _0x40ecb6[_0x5a617c(0x198)]();else{const _0x5bfdf2=this[_0x5a617c(0x19f)]();this['processShiftRemoveShortcut']();}}},Window_PartyActive['prototype'][_0x56678c(0x1f2)]=function(){const _0x974c2e=_0x56678c;SoundManager[_0x974c2e(0x182)]();const _0x53090d=this['currentActor']();$gameParty[_0x974c2e(0x218)](_0x53090d['actorId']()),this['callUpdateHelp'](),SceneManager[_0x974c2e(0x297)][_0x974c2e(0x2e5)]();},Window_PartyActive['prototype'][_0x56678c(0x207)]=function(){const _0x3a64a4=_0x56678c;if(!this[_0x3a64a4(0x25d)]())return![];const _0x43f544=this['currentActor']();return this['active']&&_0x43f544&&_0x43f544[_0x3a64a4(0x2ef)]();},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x287)]=function(_0x40f705){const _0x5741cf=_0x56678c,_0x20fbec=this[_0x5741cf(0x169)](_0x40f705);if(!_0x20fbec)return this[_0x5741cf(0x353)](_0x40f705);this['resetFontSettings']();const _0x1fb31e=this['itemRect'](_0x40f705);this[_0x5741cf(0x292)](_0x40f705);const _0x1e6dbc=_0x1fb31e['y']+_0x1fb31e[_0x5741cf(0x30d)]-this['lineHeight']();this[_0x5741cf(0x31a)](_0x1fb31e['x'],_0x1e6dbc,_0x1fb31e[_0x5741cf(0x22f)],0x2),this[_0x5741cf(0x21d)](_0x20fbec,_0x1fb31e['x']+0x2,_0x1fb31e['y']),this[_0x5741cf(0x258)](_0x20fbec,_0x1fb31e['x'],_0x1e6dbc,_0x1fb31e[_0x5741cf(0x22f)]);},Window_PartyActive['prototype'][_0x56678c(0x353)]=function(_0x3dc1fd){const _0x24c5fa=_0x56678c;this['resetFontSettings']();const _0x468497=this['itemRect'](_0x3dc1fd);this['drawItemDarkRect'](_0x468497['x'],_0x468497['y'],_0x468497[_0x24c5fa(0x22f)],_0x468497[_0x24c5fa(0x30d)]);const _0x57122f=_0x468497['y']+Math['round']((_0x468497['height']-this[_0x24c5fa(0x378)]())/0x2);this[_0x24c5fa(0x299)](ColorManager['systemColor']()),this[_0x24c5fa(0x33d)](TextManager[_0x24c5fa(0x236)],_0x468497['x'],_0x57122f,_0x468497[_0x24c5fa(0x22f)],_0x24c5fa(0x28b));},Window_PartyActive[_0x56678c(0x1a9)]['drawItemDarkRect']=function(_0x52c458,_0x535b34,_0x52151e,_0x52d197,_0x2d69fc){const _0xf19e89=_0x56678c;_0x2d69fc=Math[_0xf19e89(0x359)](_0x2d69fc||0x1,0x1);while(_0x2d69fc--){_0x52d197=_0x52d197||this[_0xf19e89(0x378)](),this[_0xf19e89(0x1d5)][_0xf19e89(0x179)]=0xa0;const _0x57d04b=ColorManager[_0xf19e89(0x16d)]();this[_0xf19e89(0x1d5)]['fillRect'](_0x52c458+0x1,_0x535b34+0x1,_0x52151e-0x2,_0x52d197-0x2,_0x57d04b),this['contents'][_0xf19e89(0x179)]=0xff;}},Window_PartyActive['prototype'][_0x56678c(0x292)]=function(_0x33c4f4){const _0xaf060e=_0x56678c;switch(Window_PartyActive[_0xaf060e(0x1a0)][_0xaf060e(0x263)]()['trim']()){case'face':this[_0xaf060e(0x2cd)](_0x33c4f4);break;case _0xaf060e(0x18e):this[_0xaf060e(0x288)](_0x33c4f4);break;case _0xaf060e(0x32e):Imported[_0xaf060e(0x291)]&&this['drawItemImageSvActor'](_0x33c4f4);break;};},Window_PartyActive['prototype']['drawItemImageFace']=function(_0x56f2e8){const _0x2935d7=_0x56678c,_0x3a08ed=this[_0x2935d7(0x169)](_0x56f2e8),_0x2c6d26=this[_0x2935d7(0x1e6)](_0x56f2e8),_0x49d117=Math[_0x2935d7(0x192)](ImageManager['faceWidth'],_0x2c6d26[_0x2935d7(0x22f)]-0x2),_0x52836e=_0x2c6d26['height']-0x2;this['changePaintOpacity'](_0x3a08ed[_0x2935d7(0x2ef)]());const _0x272b8a=Math[_0x2935d7(0x164)](_0x2c6d26['x']+(_0x2c6d26['width']-_0x49d117)/0x2);this[_0x2935d7(0x232)](_0x3a08ed,_0x272b8a,_0x2c6d26['y']+0x1,_0x49d117,_0x52836e),this[_0x2935d7(0x2a2)](!![]);},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x288)]=function(_0x10f24f){const _0x2705c6=_0x56678c,_0x58f000=this[_0x2705c6(0x169)](_0x10f24f),_0x2e298f=this['itemRect'](_0x10f24f),_0x2208fc=VisuMZ[_0x2705c6(0x22c)][_0x2705c6(0x196)][_0x2705c6(0x2f3)],_0x597d35=_0x2e298f['x']+Math['round'](_0x2e298f[_0x2705c6(0x22f)]/0x2)+_0x2208fc[_0x2705c6(0x184)],_0x7be56e=_0x2e298f['y']+_0x2e298f['height']-this['lineHeight']()-_0x2208fc[_0x2705c6(0x243)];this['drawActorCharacter'](_0x58f000,_0x597d35,_0x7be56e);},Window_PartyActive[_0x56678c(0x1a9)]['drawItemImageSvActor']=function(_0x5c0b33){const _0x26a1e8=_0x56678c,_0xe6c774=this['actor'](_0x5c0b33),_0x1e7d59=_0xe6c774[_0x26a1e8(0x39b)](),_0x5f420a=this['itemRect'](_0x5c0b33),_0x28c2d2=VisuMZ['PartySystem'][_0x26a1e8(0x196)][_0x26a1e8(0x2f3)],_0x1297d7=_0x5f420a['x']+Math['round'](_0x5f420a[_0x26a1e8(0x22f)]/0x2)+_0x28c2d2[_0x26a1e8(0x2a0)],_0x4b7494=_0x5f420a['y']+_0x5f420a[_0x26a1e8(0x30d)]-this[_0x26a1e8(0x378)]()-_0x28c2d2[_0x26a1e8(0x304)];this['drawSvActor'](_0x1e7d59,_0x1297d7,_0x4b7494);},Window_PartyActive[_0x56678c(0x1a9)]['drawDarkRect']=function(_0x2a60d6,_0x3b3a5d,_0x124718,_0x4f298c){const _0x12d04b=_0x56678c,_0x53c06a=ColorManager[_0x12d04b(0x29c)](),_0xf18cc5=ColorManager[_0x12d04b(0x34e)](),_0x42dcca=_0x124718/0x2,_0x347807=this['lineHeight']();while(_0x4f298c--){this[_0x12d04b(0x1d5)]['gradientFillRect'](_0x2a60d6,_0x3b3a5d,_0x42dcca,_0x347807,_0xf18cc5,_0x53c06a),this[_0x12d04b(0x1d5)][_0x12d04b(0x30b)](_0x2a60d6+_0x42dcca,_0x3b3a5d,_0x42dcca,_0x347807,_0x53c06a,_0xf18cc5);}},Window_PartyActive['prototype'][_0x56678c(0x258)]=function(_0x822b17,_0x2ff1b1,_0x5058bd,_0x2d8b61){const _0x1b29db=_0x56678c;_0x2d8b61=_0x2d8b61||0xa8,this[_0x1b29db(0x299)](ColorManager[_0x1b29db(0x35c)](_0x822b17)),this[_0x1b29db(0x33d)](_0x822b17[_0x1b29db(0x1c2)](),_0x2ff1b1,_0x5058bd,_0x2d8b61,_0x1b29db(0x28b));},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x35a)]=function(_0x2df972){const _0x29d31a=_0x56678c;this[_0x29d31a(0x29b)]=_0x2df972,this['callUpdateHelp']();},Window_PartyActive[_0x56678c(0x1a9)][_0x56678c(0x34f)]=function(){const _0x9d2b0b=_0x56678c;if(this[_0x9d2b0b(0x29b)])this[_0x9d2b0b(0x29b)][_0x9d2b0b(0x26b)](this[_0x9d2b0b(0x169)](this[_0x9d2b0b(0x1f8)]()));};function Window_PartyReserve(){const _0x365061=_0x56678c;this[_0x365061(0x260)](...arguments);}Window_PartyReserve[_0x56678c(0x1a9)]=Object[_0x56678c(0x391)](Window_StatusBase[_0x56678c(0x1a9)]),Window_PartyReserve['prototype'][_0x56678c(0x395)]=Window_PartyReserve,Window_PartyReserve[_0x56678c(0x1a0)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x2f3)][_0x56678c(0x26d)],Window_PartyReserve[_0x56678c(0x195)]=VisuMZ['PartySystem'][_0x56678c(0x196)][_0x56678c(0x2f3)][_0x56678c(0x200)],Window_PartyReserve['prototype'][_0x56678c(0x260)]=function(_0x4946c5){const _0x2700ef=_0x56678c;Window_StatusBase['prototype'][_0x2700ef(0x260)][_0x2700ef(0x215)](this,_0x4946c5),this[_0x2700ef(0x19b)]=0x0,this[_0x2700ef(0x209)]();},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x251)]=function(){const _0x870992=_0x56678c;return VisuMZ[_0x870992(0x22c)]['Settings']['Window'][_0x870992(0x331)]||0x1;},Window_PartyReserve['prototype'][_0x56678c(0x29f)]=function(){const _0x42cb29=_0x56678c;return this['lineHeight']()*Window_PartyReserve[_0x42cb29(0x195)]+0x6;},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x25d)]=function(){const _0x318d18=_0x56678c;return VisuMZ['PartySystem']['Settings'][_0x318d18(0x2f7)][_0x318d18(0x201)];},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x326)]=function(){const _0x539586=_0x56678c;let _0x26074f=$gameParty['reserveMembers']()[_0x539586(0x2be)];if(this[_0x539586(0x25d)]())_0x26074f++;return _0x26074f;},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x169)]=function(_0x496fae){const _0x458dbc=_0x56678c;return $gameParty[_0x458dbc(0x228)]()[_0x496fae];},Window_PartyReserve['prototype'][_0x56678c(0x19f)]=function(){const _0x57b5ea=_0x56678c;return this['actor'](this[_0x57b5ea(0x1f8)]());},Window_PartyReserve['prototype'][_0x56678c(0x2e1)]=function(){SoundManager['playEquip']();},Window_PartyReserve[_0x56678c(0x1a9)]['isCurrentItemEnabled']=function(){const _0x250f59=_0x56678c,_0x46c0d8=this[_0x250f59(0x169)](this[_0x250f59(0x1f8)]());return _0x46c0d8?_0x46c0d8[_0x250f59(0x2ef)]():!![];},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x204)]=function(){const _0x1c6521=_0x56678c;Window_StatusBase[_0x1c6521(0x1a9)][_0x1c6521(0x204)][_0x1c6521(0x215)](this),this[_0x1c6521(0x314)]();},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x28e)]=function(_0x122b58){const _0x25bbda=_0x56678c;if(this[_0x25bbda(0x1f8)]()<=0x0&&Input[_0x25bbda(0x289)]('up'))this[_0x25bbda(0x24b)]();else{if(_0x25bbda(0x2dc)===_0x25bbda(0x2dc))Window_StatusBase['prototype'][_0x25bbda(0x28e)][_0x25bbda(0x215)](this,_0x122b58);else return![];}},Window_PartyReserve[_0x56678c(0x1a9)]['cursorPagedown']=function(){const _0x47d7b1=_0x56678c,_0x18e90c=this['index'](),_0x26eed8=_0x18e90c+0x1>=this[_0x47d7b1(0x326)]()-0x1?0x0:_0x18e90c+0x1;this[_0x47d7b1(0x27f)](_0x18e90c,_0x26eed8);},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x22b)]=function(){const _0x1d4516=_0x56678c,_0x481ede=this[_0x1d4516(0x1f8)](),_0x433c5a=_0x481ede-0x1<0x0?this['maxItems']()-0x2:_0x481ede-0x1;this[_0x1d4516(0x27f)](_0x481ede,_0x433c5a);},Window_PartyReserve[_0x56678c(0x1a9)]['quickSwap']=function(_0x41fda8,_0x41188a){const _0x9ed46a=_0x56678c,_0x4f8ccb=this[_0x9ed46a(0x169)](_0x41fda8),_0x27d013=this[_0x9ed46a(0x169)](_0x41188a);if(!_0x4f8ccb?.[_0x9ed46a(0x2ef)]()||!_0x27d013?.[_0x9ed46a(0x2ef)]())return;else{if(!_0x4f8ccb||!_0x27d013)return;}const _0x5a2646=$gameParty[_0x9ed46a(0x276)],_0xe89268=_0x5a2646[_0x9ed46a(0x2a3)](_0x4f8ccb[_0x9ed46a(0x389)]()),_0x1faca5=_0x5a2646['indexOf'](_0x27d013[_0x9ed46a(0x389)]());_0x5a2646[_0xe89268]=_0x27d013?_0x27d013[_0x9ed46a(0x389)]():0x0,_0x5a2646[_0x1faca5]=_0x4f8ccb?_0x4f8ccb[_0x9ed46a(0x389)]():0x0,this['refresh'](),this[_0x9ed46a(0x1da)](),this['smoothSelect'](_0x41188a);},Window_PartyReserve[_0x56678c(0x1a9)]['checkShiftSortShortcut']=function(){const _0x3831de=_0x56678c;if(!this[_0x3831de(0x1d7)]())return;Input[_0x3831de(0x289)](_0x3831de(0x2e4))&&this['processShiftSortShortcut']();},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x363)]=function(){const _0x548432=_0x56678c;SoundManager['playEquip'](),$gameParty[_0x548432(0x26c)](),this['smoothSelect'](0x0),SceneManager['_scene'][_0x548432(0x2e5)]();},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x1d7)]=function(){const _0x11aad8=_0x56678c;return this[_0x11aad8(0x1ae)];},Window_PartyReserve[_0x56678c(0x1a9)]['pendingIndex']=function(){const _0x37917b=_0x56678c,_0x2a9668=this[_0x37917b(0x19f)]();return _0x2a9668?_0x2a9668['index']():-0x1;},Window_PartyReserve['prototype']['select']=function(_0x5668ad){const _0x4a1f49=_0x56678c;Window_StatusBase[_0x4a1f49(0x1a9)][_0x4a1f49(0x24c)]['call'](this,_0x5668ad);if(_0x5668ad>=0x0)this[_0x4a1f49(0x19b)]=_0x5668ad;},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x2e2)]=function(){const _0xa0a1cb=_0x56678c;this[_0xa0a1cb(0x19b)]=Math[_0xa0a1cb(0x192)](this[_0xa0a1cb(0x19b)],this[_0xa0a1cb(0x326)]()-0x1),this[_0xa0a1cb(0x373)](this['_lastIndex']),this[_0xa0a1cb(0x159)](!![]),this['cursorVisible']=!![];},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x287)]=function(_0x2d3fe6){const _0x4eb309=_0x56678c,_0x48d570=this[_0x4eb309(0x169)](_0x2d3fe6);if(!_0x48d570)return this['drawRemoveCommand'](_0x2d3fe6);const _0x21c918=this['itemLineRect'](_0x2d3fe6);this[_0x4eb309(0x292)](_0x2d3fe6);const _0x5561ec=0xa8,_0x3dbe43=Window_PartyReserve[_0x4eb309(0x195)]===0x1,_0x28244c=ImageManager[_0x4eb309(0x2a1)]*(_0x3dbe43?0x2:0x1),_0x31dddd=this[_0x4eb309(0x268)]()+this[_0x4eb309(0x37b)](),_0x63fdab=_0x21c918[_0x4eb309(0x22f)]-_0x5561ec,_0x1aa44b=_0x21c918['x']+_0x28244c+Math[_0x4eb309(0x192)](_0x31dddd,_0x63fdab),_0x454d32=_0x3dbe43?![]:!![];this[_0x4eb309(0x2a2)](_0x48d570[_0x4eb309(0x2ef)]()),this[_0x4eb309(0x21d)](_0x48d570,_0x21c918['x'],_0x21c918['y'],_0x454d32),this[_0x4eb309(0x258)](_0x48d570,_0x1aa44b,_0x21c918['y'],_0x5561ec),this[_0x4eb309(0x2a2)](!![]);},Window_PartyReserve['prototype'][_0x56678c(0x268)]=function(){const _0x52d9e4=_0x56678c,_0x5f279d=VisuMZ[_0x52d9e4(0x22c)][_0x52d9e4(0x196)][_0x52d9e4(0x2f3)];switch(Window_PartyReserve[_0x52d9e4(0x1a0)][_0x52d9e4(0x263)]()['trim']()){case _0x52d9e4(0x36c):return ImageManager[_0x52d9e4(0x2e6)];case _0x52d9e4(0x18e):return _0x5f279d[_0x52d9e4(0x2fc)]*0x2;case _0x52d9e4(0x32e):return _0x5f279d[_0x52d9e4(0x2f0)]*0x2;};},Window_PartyReserve[_0x56678c(0x1a9)]['drawRemoveCommand']=function(_0x3a55ab){const _0x5654c3=_0x56678c,_0x435e16=this[_0x5654c3(0x21b)](_0x3a55ab);this[_0x5654c3(0x2a2)](!![]);const _0x497778=TextManager[_0x5654c3(0x1a1)];this['drawText'](_0x497778,_0x435e16['x'],_0x435e16['y'],_0x435e16[_0x5654c3(0x22f)],_0x5654c3(0x28b));},Window_PartyReserve['prototype'][_0x56678c(0x292)]=function(_0x41a370){const _0x782a8a=_0x56678c;switch(Window_PartyReserve[_0x782a8a(0x1a0)][_0x782a8a(0x263)]()[_0x782a8a(0x30e)]()){case _0x782a8a(0x36c):this[_0x782a8a(0x2cd)](_0x41a370);break;case _0x782a8a(0x18e):this[_0x782a8a(0x288)](_0x41a370);break;case _0x782a8a(0x32e):Imported['VisuMZ_1_MainMenuCore']&&this['drawItemImageSvActor'](_0x41a370);break;};},Window_PartyReserve['prototype'][_0x56678c(0x2cd)]=function(_0x41a9e5){const _0x2e8a89=_0x56678c,_0x44f3ca=this[_0x2e8a89(0x169)](_0x41a9e5),_0x539291=this[_0x2e8a89(0x1e6)](_0x41a9e5),_0x555749=Window_PartyReserve[_0x2e8a89(0x195)]===0x1;_0x539291['x']+=ImageManager[_0x2e8a89(0x2a1)]*(_0x555749?0x2:0x1);const _0x52610f=ImageManager['faceWidth'],_0x41b25d=_0x539291[_0x2e8a89(0x30d)]-0x2;this[_0x2e8a89(0x2a2)](_0x44f3ca[_0x2e8a89(0x2ef)]()),this[_0x2e8a89(0x232)](_0x44f3ca,_0x539291['x']+0x1,_0x539291['y']+0x1,_0x52610f,_0x41b25d),this[_0x2e8a89(0x2a2)](!![]);},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x288)]=function(_0xd4dd57){const _0x3c104d=_0x56678c,_0x599a12=this[_0x3c104d(0x169)](_0xd4dd57),_0x357d4a=this['itemRect'](_0xd4dd57),_0x474918=Window_PartyReserve[_0x3c104d(0x195)]===0x1;_0x357d4a['x']+=ImageManager[_0x3c104d(0x2a1)]*(_0x474918?0x2:0x1);const _0x16e6cc=VisuMZ[_0x3c104d(0x22c)][_0x3c104d(0x196)][_0x3c104d(0x2f3)],_0x3bd741=_0x357d4a['x']+_0x16e6cc[_0x3c104d(0x2fc)]+this[_0x3c104d(0x37b)](),_0x2fb590=_0x357d4a['y']+_0x357d4a[_0x3c104d(0x30d)]-_0x16e6cc[_0x3c104d(0x1ac)];this[_0x3c104d(0x2f4)](_0x599a12,_0x3bd741,_0x2fb590);},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x26e)]=function(_0x4cd4c6){const _0x2538c3=_0x56678c,_0x52e2a9=this[_0x2538c3(0x169)](_0x4cd4c6),_0x325540=_0x52e2a9[_0x2538c3(0x39b)](),_0xd375fd=this[_0x2538c3(0x1e6)](_0x4cd4c6),_0x1b73b3=Window_PartyReserve[_0x2538c3(0x195)]===0x1;_0xd375fd['x']+=ImageManager[_0x2538c3(0x2a1)]*(_0x1b73b3?0x2:0x1);const _0x174264=VisuMZ[_0x2538c3(0x22c)][_0x2538c3(0x196)]['Window'],_0x3f5fe3=_0xd375fd['x']+_0x174264[_0x2538c3(0x2f0)]+this[_0x2538c3(0x37b)](),_0x38c754=_0xd375fd['y']+_0xd375fd[_0x2538c3(0x30d)]-_0x174264[_0x2538c3(0x27c)];this[_0x2538c3(0x213)](_0x325540,_0x3f5fe3,_0x38c754);},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x35a)]=function(_0x36e4a6){const _0x5a7c3b=_0x56678c;this['_statusWindow']=_0x36e4a6,this[_0x5a7c3b(0x34f)]();},Window_PartyReserve[_0x56678c(0x1a9)][_0x56678c(0x34f)]=function(){const _0x845b0b=_0x56678c;this[_0x845b0b(0x29b)]&&('TNDFo'===_0x845b0b(0x334)?this[_0x845b0b(0x25c)]()?(this[_0x845b0b(0x1e1)]=!![],this[_0x845b0b(0x33e)]['addText'](_0x1729d5[_0x845b0b(0x1e5)][_0x845b0b(0x1fb)](_0x4249a6['formation']))):this[_0x845b0b(0x33a)]():this[_0x845b0b(0x29b)][_0x845b0b(0x26b)](this[_0x845b0b(0x169)](this['index']())));};function Window_PartyStatus(){const _0x163e26=_0x56678c;this[_0x163e26(0x260)](...arguments);}Window_PartyStatus['prototype']=Object[_0x56678c(0x391)](Window_StatusBase[_0x56678c(0x1a9)]),Window_PartyStatus[_0x56678c(0x1a9)][_0x56678c(0x395)]=Window_PartyStatus,Window_PartyStatus[_0x56678c(0x1a9)][_0x56678c(0x260)]=function(_0x337940){const _0x27bb8c=_0x56678c;this[_0x27bb8c(0x277)]=null,Window_StatusBase[_0x27bb8c(0x1a9)][_0x27bb8c(0x260)][_0x27bb8c(0x215)](this,_0x337940);},Window_PartyStatus[_0x56678c(0x1a9)][_0x56678c(0x221)]=function(_0x47faa9,_0x41c437,_0x25aeb7,_0x1c1b90,_0x2325a6){const _0x3640cb=_0x56678c;if(VisuMZ[_0x3640cb(0x22c)][_0x3640cb(0x196)][_0x3640cb(0x2f7)][_0x3640cb(0x366)]===![])return;_0x2325a6=Math[_0x3640cb(0x359)](_0x2325a6||0x1,0x1);while(_0x2325a6--){if(_0x3640cb(0x368)!==_0x3640cb(0x368)){_0x34dfee[_0x3640cb(0x22c)]['Game_Battler_regenerateAll'][_0x3640cb(0x215)](this);if(this[_0x3640cb(0x279)]()&&_0x4c5391[_0x3640cb(0x278)]())this[_0x3640cb(0x338)]();}else{_0x1c1b90=_0x1c1b90||this['lineHeight'](),this['contents']['paintOpacity']=0xa0;const _0x3e60d9=ColorManager[_0x3640cb(0x31c)]();this[_0x3640cb(0x1d5)]['fillRect'](_0x47faa9+0x1,_0x41c437+0x1,_0x25aeb7-0x2,_0x1c1b90-0x2,_0x3e60d9),this[_0x3640cb(0x1d5)][_0x3640cb(0x179)]=0xff;}}},ColorManager[_0x56678c(0x31c)]=function(){const _0x14ab89=_0x56678c,_0x3cbf8b=VisuMZ[_0x14ab89(0x22c)][_0x14ab89(0x196)][_0x14ab89(0x2f7)];let _0x36ecbe=_0x3cbf8b['BackRectColor']!==undefined?_0x3cbf8b[_0x14ab89(0x36f)]:0x13;return ColorManager[_0x14ab89(0x25f)](_0x36ecbe);},Window_PartyStatus[_0x56678c(0x1a9)][_0x56678c(0x26b)]=function(_0x5d3971){const _0x5453c9=_0x56678c;if(this[_0x5453c9(0x277)]===_0x5d3971)return;this[_0x5453c9(0x277)]=_0x5d3971;if(_0x5d3971){if(_0x5453c9(0x2f2)!==_0x5453c9(0x1ef)){const _0x15c299=ImageManager[_0x5453c9(0x1d8)](_0x5d3971[_0x5453c9(0x293)]());_0x15c299['addLoadListener'](this['refresh'][_0x5453c9(0x242)](this));}else _0x35e3af=_0x4bebdd[_0x5453c9(0x359)](_0x4ad6af,_0x4a0442);}else this[_0x5453c9(0x209)]();},Window_PartyStatus[_0x56678c(0x1a9)]['refresh']=function(){const _0x19bebe=_0x56678c;Window_StatusBase[_0x19bebe(0x1a9)][_0x19bebe(0x209)][_0x19bebe(0x215)](this),this[_0x19bebe(0x1d5)][_0x19bebe(0x1d3)](),this['resetFontSettings'](),VisuMZ[_0x19bebe(0x22c)][_0x19bebe(0x196)]['Window'][_0x19bebe(0x35d)]['call'](this);},Window_PartyStatus[_0x56678c(0x1a9)]['refreshOG']=function(){const _0x264390=_0x56678c;if(!this[_0x264390(0x277)]){this[_0x264390(0x221)](0x0,0x0,this[_0x264390(0x18b)],this[_0x264390(0x190)]);const _0x4a0a61=Math['round']((this['innerHeight']-this[_0x264390(0x378)]())/0x2);this[_0x264390(0x299)](ColorManager['systemColor']()),this[_0x264390(0x33d)](TextManager[_0x264390(0x236)],0x0,_0x4a0a61,this['innerWidth'],'center');return;}this[_0x264390(0x232)](this[_0x264390(0x277)],0x1,0x0,ImageManager[_0x264390(0x2e6)],ImageManager[_0x264390(0x315)]),this[_0x264390(0x1c7)](this[_0x264390(0x277)],ImageManager[_0x264390(0x2e6)]+0x24,0x0);const _0x44ff6f=this['lineHeight'](),_0x474962=this[_0x264390(0x1fc)](),_0x2f4e45=Math[_0x264390(0x164)](this[_0x264390(0x18b)]/0x2),_0x38e481=Math[_0x264390(0x24a)](_0x474962[_0x264390(0x2be)]/0x2)*_0x44ff6f,_0x5eff04=0x0;let _0x20ca30=0x0,_0x39075f=ImageManager[_0x264390(0x315)]+_0x44ff6f/0x2;for(const _0x2d062c of _0x474962){if(_0x264390(0x2d8)!=='POoDS'){this[_0x264390(0x221)](_0x20ca30,_0x39075f,_0x2f4e45,_0x44ff6f),this[_0x264390(0x15d)](_0x2d062c,_0x20ca30,_0x39075f,_0x2f4e45),this[_0x264390(0x39a)](_0x2d062c,_0x20ca30,_0x39075f,_0x2f4e45);if(_0x20ca30===_0x5eff04){if(_0x264390(0x295)!=='fhgRw')_0x20ca30+=_0x2f4e45;else{_0x4a4a47[_0x264390(0x254)]()&&!_0x444168[_0x264390(0x370)]&&(_0x9537d4[_0x264390(0x25a)](_0x264390(0x1f6)),_0x5a146a['_battleSystemIncompatibilityError']=!![]);return;}}else _0x20ca30=_0x5eff04,_0x39075f+=_0x44ff6f;}else return this[_0x264390(0x310)](_0x2f88cf(_0x17c97f));}},Window_PartyStatus[_0x56678c(0x1a9)][_0x56678c(0x1fc)]=function(){const _0x42be85=_0x56678c;return Imported[_0x42be85(0x15c)]?VisuMZ[_0x42be85(0x28c)][_0x42be85(0x196)][_0x42be85(0x384)]['DisplayedParams']:[0x2,0x3,0x4,0x5,0x6,0x7];},Window_PartyStatus['prototype'][_0x56678c(0x15d)]=function(_0x50e0a7,_0x15d6ca,_0x588eda,_0x226450){const _0x43ed9a=_0x56678c,_0xf064e1=this[_0x43ed9a(0x37b)]();_0x226450-=_0xf064e1*0x2;if(Imported[_0x43ed9a(0x15c)])this[_0x43ed9a(0x261)](_0x15d6ca+_0xf064e1,_0x588eda,_0x226450,_0x50e0a7,![]);else{if(_0x43ed9a(0x1c9)===_0x43ed9a(0x2f6)){if(this[_0x43ed9a(0x20c)]===_0x310f40)this['clearPartySwitchCommandCooldown']();return this[_0x43ed9a(0x20c)];}else{const _0x47e62c=TextManager[_0x43ed9a(0x37a)](_0x50e0a7);this[_0x43ed9a(0x299)](ColorManager[_0x43ed9a(0x307)]()),this['drawText'](_0x47e62c,_0x15d6ca+_0xf064e1,_0x588eda,_0x226450);}}},Window_PartyStatus[_0x56678c(0x1a9)]['drawParamValue']=function(_0x16577e,_0xcf5475,_0x4961a0,_0x387985){const _0x56b33f=_0x56678c;this[_0x56b33f(0x1fd)]();const _0x19d616=this[_0x56b33f(0x37b)](),_0x5baac7=this[_0x56b33f(0x2bb)](_0x16577e);this[_0x56b33f(0x33d)](_0x5baac7,_0xcf5475+_0x19d616,_0x4961a0,_0x387985-_0x19d616*0x2,_0x56b33f(0x1db));},Window_PartyStatus[_0x56678c(0x1a9)][_0x56678c(0x2bb)]=function(_0x3018aa){const _0x49be2f=_0x56678c,_0x5d77b1=this[_0x49be2f(0x277)];if(Imported[_0x49be2f(0x15c)]){if(_0x49be2f(0x175)==='ubfHZ')return _0x5d77b1[_0x49be2f(0x231)](_0x3018aa,!![]);else return;}else return _0x5d77b1[_0x49be2f(0x37a)](_0x3018aa);};function Window_PartyBattleSwitch(){const _0x3f4200=_0x56678c;this[_0x3f4200(0x260)](...arguments);}Window_PartyBattleSwitch[_0x56678c(0x1a9)]=Object[_0x56678c(0x391)](Window_StatusBase[_0x56678c(0x1a9)]),Window_PartyBattleSwitch[_0x56678c(0x1a9)][_0x56678c(0x395)]=Window_PartyBattleSwitch,Window_PartyBattleSwitch['prototype'][_0x56678c(0x260)]=function(_0xe45cd4){const _0xcc3b9a=_0x56678c;Window_StatusBase[_0xcc3b9a(0x1a9)][_0xcc3b9a(0x260)][_0xcc3b9a(0x215)](this,_0xe45cd4),this[_0xcc3b9a(0x367)](VisuMZ['PartySystem'][_0xcc3b9a(0x196)][_0xcc3b9a(0x2f3)]['BattleSwitchWindowBgType']),this['openness']=0x0;},Window_PartyBattleSwitch['prototype'][_0x56678c(0x23e)]=function(){const _0x334b5a=_0x56678c;for(const _0x22e786 of $gameParty[_0x334b5a(0x1f7)]()){ImageManager[_0x334b5a(0x1d8)](_0x22e786[_0x334b5a(0x293)]());}},Window_PartyBattleSwitch[_0x56678c(0x1a9)][_0x56678c(0x251)]=function(){return 0x1;},Window_PartyBattleSwitch['prototype']['actor']=function(_0x52b584){const _0x4f4db9=_0x56678c;return $gameParty[_0x4f4db9(0x228)]()[_0x52b584];},Window_PartyBattleSwitch['prototype'][_0x56678c(0x19f)]=function(){const _0x4dd8a2=_0x56678c;return this[_0x4dd8a2(0x169)](this['index']());},Window_PartyBattleSwitch['prototype']['itemHeight']=function(){const _0x40f31f=_0x56678c;return this[_0x40f31f(0x378)]()*0x2+0x8;},Window_PartyBattleSwitch[_0x56678c(0x1a9)]['maxItems']=function(){const _0x565c26=_0x56678c;return $gameParty[_0x565c26(0x228)]()[_0x565c26(0x2be)];},Window_PartyBattleSwitch[_0x56678c(0x1a9)][_0x56678c(0x255)]=function(){const _0x3b37eb=_0x56678c;Window_StatusBase[_0x3b37eb(0x1a9)]['activate'][_0x3b37eb(0x215)](this),this[_0x3b37eb(0x374)](),this[_0x3b37eb(0x209)](),this[_0x3b37eb(0x373)](0x0);},Window_PartyBattleSwitch[_0x56678c(0x1a9)][_0x56678c(0x24e)]=function(){const _0x2c2301=_0x56678c;Window_StatusBase['prototype'][_0x2c2301(0x24e)][_0x2c2301(0x215)](this),this['close']();},Window_PartyBattleSwitch['prototype'][_0x56678c(0x17a)]=function(){return this['isEnabled'](this['currentActor']());},Window_PartyBattleSwitch[_0x56678c(0x1a9)][_0x56678c(0x15b)]=function(_0x181425){const _0x1c5c6c=_0x56678c;if(!_0x181425)return![];return _0x181425[_0x1c5c6c(0x2ef)]()&&_0x181425['isAlive']();},Window_PartyBattleSwitch['prototype']['drawItem']=function(_0x78af12){const _0x27116b=_0x56678c,_0x2ea140=this['actor'](_0x78af12);if(!_0x2ea140)return;const _0x5c7902=ImageManager['loadFace'](_0x2ea140[_0x27116b(0x293)]());_0x5c7902['addLoadListener'](this[_0x27116b(0x281)][_0x27116b(0x242)](this,_0x78af12));},Window_PartyBattleSwitch[_0x56678c(0x1a9)]['processDrawItem']=function(_0x2aee50){const _0x194880=_0x56678c;this[_0x194880(0x292)](_0x2aee50),this['drawItemStatus'](_0x2aee50);},Window_PartyBattleSwitch['prototype'][_0x56678c(0x292)]=function(_0x4cd72f){const _0x2f2307=_0x56678c,_0x36b973=this[_0x2f2307(0x169)](_0x4cd72f),_0x19e17c=this['itemRect'](_0x4cd72f);this['changePaintOpacity'](this[_0x2f2307(0x15b)](_0x36b973)),this[_0x2f2307(0x232)](_0x36b973,_0x19e17c['x']+0x1,_0x19e17c['y']+0x1,ImageManager[_0x2f2307(0x2e6)],_0x19e17c[_0x2f2307(0x30d)]-0x2),this[_0x2f2307(0x2a2)](!![]);},Window_PartyBattleSwitch['prototype'][_0x56678c(0x189)]=function(_0x5ca24d){const _0xd78b95=_0x56678c,_0x45e5fd=this[_0xd78b95(0x169)](_0x5ca24d),_0x2f4304=this[_0xd78b95(0x1e8)](_0x5ca24d),_0x291c1b=_0x2f4304['x']+ImageManager[_0xd78b95(0x2e6)]+0x24,_0x13841b=_0x291c1b+0xb4;this[_0xd78b95(0x2a2)](this['isEnabled'](_0x45e5fd)),this[_0xd78b95(0x258)](_0x45e5fd,_0x291c1b,_0x2f4304['y']),this[_0xd78b95(0x1a7)](_0x45e5fd,_0x291c1b,_0x2f4304['y']+this[_0xd78b95(0x378)]()),this[_0xd78b95(0x32a)](_0x45e5fd,_0x13841b,_0x2f4304['y']),this[_0xd78b95(0x2a2)](!![]);};function _0x45da(){const _0x490d05=['QkQsC','Scene_Battle_updateBattleProcess','version','VisuMZ_1_BattleCore','direction','_pageupButton','Game_Party_addActor','isOkEnabled','reservePartyWindowRect','setPartyRequirement','Status','getParamValue','onBattlePartySwitch','_targets','length','findSymbol','setupStartingMembers','LockPartyMembers','changeLevel','81wnrSlY','wVZTo','NUM','sortActionOrdersBTB','clamp','fillRect','geuoU','checkShiftRemoveShortcut','StatusWindowRect','_partyMemberSwitchWindow','drawItemImageFace','loadTitle1','ActivePartyLabelRect','onBattleStart','sort','requiredPartyMemberIcon','_bypassAutoSavePartySystem','_reservePartyWindow','LockIcon','setBattlePartySwitchCooldown','_partyRequired','sVEIz','_battleMembers','battlePartyChangeIcon','XmUJm','uzjHJ','xtcJj','adjustSprite','isPreviousSceneBattleTransitionable','_statusPartyWindow','playOkSound','reselect','isFormationEnabled','shift','refreshAllWindows','faceWidth','makeActions','isTimeActive','updateTargetsForPartySwitch','VisuMZ_2_BattleSystemETB','canSwitchPartyInBattle','onPartySwitchCancel','updatePartySwitch','battleMembers','isFormationChangeOk','ReserveBattlerOffsetX','statusLabelRect','IWVxO','Window','drawActorCharacter','CallPartyScene','cRvmZ','General','onActiveOk','isSceneMap','MoveActorsToActive','pop','ReserveSpriteOffsetX','BgFilename2','createBackground','BattleSwitchOut','uiInputPosition','FUNC','BattlePartyCmd','Lock','ActiveBattlerOffsetY','SceneManager_isPreviousSceneBattleTransitionable','createActorCommandWindow','systemColor','startOpacity','ReservePartyWindowRect','addActorToBattleMembersAtIndex','gradientFillRect','addWindow','height','trim','postPartySwitchMenuTurnBased','textColor','isCancelEnabled','_callPartyMemberSwitch','BattleHelpFormation','checkShiftSortShortcut','faceHeight','return\x200','toUpperCase','491296TeHvqW','filter','drawDarkRect','description','getPartySystemBackColor','makeActionOrders','_partySystemBattleCommandCooldown','Remove','#%1','checkInitBattleMembers','TmxDU','mapId','status','DBWZf','maxItems','addActor','EHXYb','drawIcon','placeBasicGauges','addFormationCommand','VekKM','kQVcf','svbattler','level','Game_Unit_inBattle','ReserveCol','createPartyCommandWindowBattleCore','iconHeight','otxZo','changeMaxBattleMembers','Game_Party_swapOrder','random','updateBattlePartySwitchCooldown','isUsingGridSystem','callFormation','visible','IXwrc','drawText','_logWindow','nVhFG','characterName','BgFilename1','Scene_Battle_createActorCommandWindow','addActorToBattleMembers','initMaxBattleMembers','addCommand','applyBattlePartySwitchCooldown','isPTB','_tpbChargeTime','setup','chgQO','STRUCT','Index','push','dimColor2','callUpdateHelp','UqSXZ','addCustomCommands','isUsingBattleGridTactics','drawItemEmpty','BattleSwitchWindowRect','SnapshotOpacity','NEbFQ','isPartyCommandAdded','99024cUEoOf','max','setStatusWindow','isFormationCommandAdded','hpColor','StatusWindowDraw','initPartySystem','tSQrn','requestRefresh','isPreviousScene','arjMa','processShiftSortShortcut','initBattleMembers','3774729bIHCiP','DrawBackRect','setBackgroundType','PYaeT','isShowPartySwitchOutAnimation','assistSwapPositions','Game_Battler_regenerateAll','face','_actionBattlers','isPartyCommandEnabled','BackRectColor','_battleSystemIncompatibilityError','_currentActor','isSceneParty','smoothSelect','open','remove','hSkar','cursorDown','lineHeight','_inputting','param','itemPadding','removeActionBattlersOTB','Value','pjHZI','_reservePartyLabel','increaseTurn','onPartySwitchOk','isRightInputMode','wxeXN','Param','partySwitchWindowRect','ReservePartyLabelBgType','loadCharacter','MaxBattleMembers','actorId','_pagedownButton','statusWindowRect','Scene_Battle_isTimeActive','Vocab','battler','getBackgroundOpacity','ARRAYSTR','create','pWmVs','VisuMZ_2_BattleSystemBTB','assistSortPartyMembers','constructor','_tpbSceneChangeCacheActor','drawActorPartyIconsHorz','Scene_Base_isAutosaveEnabled','StatusLabelRect','drawParamValue','battlerName','ActivePartyWindowRect','isNextSceneBattleTransitionable','UBsnl','ensureCursorVisible','ActivePartyWindowBgType','isEnabled','VisuMZ_0_CoreEngine','drawParamName','clearBypassAutoSave','bitmap','padding','createActivePartyLabel','_partyLocked','Game_Party_setupBattleTest','round','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','buttonAssistText1','ARRAYEVAL','MoveActorsToReserve','actor','removeActor','terminate','commandStyle','gaugeBackColor','_otb_actionBattlersNext','SceneManager_isNextSceneBattleTransitionable','isAppeared','IYeaB','ARRAYNUM','equips','clearTpbChargeTime','ubfHZ','ConvertParams','setText','_actorCommandWindow','paintOpacity','isCurrentItemEnabled','Scene_Battle_isAnyInputWindowActive','3QtCGFY','StatusWindowBgType','startSwitchInAnimation','_list','jsoTs','1tgODMX','playEquip','TvZSY','ActiveSpriteOffsetX','Game_Party_setupStartingMembers','splice','BgSettings','concat','drawItemStatus','processOk','innerWidth','_tpbState','removePartyCommand','sprite','KyYRV','innerHeight','352iLlDyu','min','createReservePartyWindow','popScene','_rowThickness','Settings','_partySwitchDuration','maxBattleMembers','pgxFu','lockPartyMemberIcon','_lastIndex','commandFormation','buttonAssistText4','_battleMaxSize','currentActor','_actorGraphic','removePartyMember','BattleSwitchWindowBgType','_partyCommandWindow','Qsltu','onReserveOk','createAllWindows','drawActorClass','createActivePartyWindow','prototype','assistSwapOutPartyMember','isAutosaveEnabled','ReserveSpriteOffsetY','isOTB','active','assistSwapInPartyMember','MyNEi','Game_Troop_increaseTurn','otbReturnBattlerToTurnOrders','VzZCO','clearPartySwitchCommandCooldown','isTpb','Empty','xPKSV','FYNYs','activeParty','fOxfd','isSceneBattle','updateHelp','map','initEquips','isSTB','match','uiMenuStyle','name','_activePartyLabel','cursorPagedown','isRequiredInParty','RequirePartyMembers','drawActorSimpleStatus','getInputButtonString','CiDXJ','commandPartyMemberSwitch','Game_Party_initialize','TEtwY','RwZbo','parameters','WOlIT','927672PANqSY','statusParty','battlePartySwitchCmd','clear','_activePartyWindow','contents','setupBattleTestMembers','isShiftShortcutEnabled','loadFace','_partySwitchTargetActor','playCursorSound','right','isActiveTpb','recoverAll','_helpWindow','isAnyInputWindowActive','oqUii','_callSceneParty','ActorCmdWinAddParty','ZNPoG','swapOrder','ActiveTpbFormationMessage','itemRect','VisuMZ_2_BattleGridSystem','itemRectWithPadding','preparePartySwitchMember','Game_Party_removeActor','JSON','gridFlank','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','reservePartyLabelRect','ifeXT','addNonBattleTestMembers','followers','processShiftRemoveShortcut','BattlePartyIcon','updatePadding','cLjeh','WARNING:\x20Party\x20Change\x20command\x20is\x20unavailable\x20for\x20Window_PartyCommand\x20for\x20this\x20Battle\x20System','allMembers','index','partySwitchWindowRectBorder','isFormationCommandEnabled','format','actorParams','resetFontSettings','battleLayoutStyle','update','ReserveItemThickness','AddRemoveCmd','PartyCmdWinAddParty','aWjaN','processCursorMove','BattleManager_setup','gridMoveTo','isShiftRemoveShortcutEnabled','AssistSort','refresh','battlePartyChangeCmd','BoLos','_partySwitchBattleCommandCooldown','currentSymbol','postPartySwitchMenuTpb','MovePartyIndexToReserve','VisuMZ_2_BattleSystemCTB','_subject','parse','drawSvActor','Scene_Battle_createAllWindows','call','GeUae','9248360sZHUAA','removeActorFromBattleMembers','gridRank','_windowLayer','itemLineRect','teamBasedFirstAvailableMember','drawActorPartyIcons','tpbImmediateAction','registerCommand','ChangeMaxBattleMembers','drawItemDarkRect','10lSHLVM','SwitchOutAnimation','1754834xTTFpA','setHandler','Game_Actor_setup','\x5cI[%1]%2','reserveMembers','processPartySwitchMember','RequireIcon','cursorPageup','PartySystem','createPageButtons','ActivePartyGraphic','width','defaultMaxBattleMembers','paramValueByName','drawActorFace','actor%1-stateIcon','switchStateIconActor','createStatusLabel','emptyPartyMember','Game_Battler_onBattleStart','anyRequiredPartyMembersInReserve','dVSwl','ActivePartyLabelBgType','VisuMZ_2_BattleSystemOTB','helpAreaHeight','oRqkO','loadFaceImages','needsPageButtons','ReserveParty','swapOrderPartySystemPlugin','bind','ActiveSpriteOffsetY','isFTB','VisuMZ_2_BattleSystemPTB','createReservePartyLabel','setupBattleTest','_partySystemSwitchOut','ActiveParty','ceil','processCancel','select','includes','deactivate','createStatusWindow','updateTurnOrderSTB','maxCols','addChild','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','isPlaytest','activate','setPartyLock','isBTB','drawActorName','Scene_Battle_createPartyCommandWindowBattleCore','log','ReservePartyLabelRect','isQueueFormationMenu','addRemoveCommand','cancel','getColor','initialize','drawParamText','_backSprite1','toLowerCase','QueuePartyScene','assistRemovePartyMember','WyYVz','FyiTt','nameStartPosition','loadPartyImages','clearPartyBattleCommandCooldown','setActor','sortActors','ReservePartyGraphic','drawItemImageSvActor','exit','close','formation','Kvpxb','activePartyWindowRect','mjQxm','members','_actors','_actor','inBattle','isActor','onReserveCancel','partyChangeRefresh','ReserveBattlerOffsetY','battlePartySwitchCmdHelp','uANJo','quickSwap','addText','processDrawItem','VisuMZ_2_BattleSystemFTB','callPartyMemberSwitch','updateTurnOrderCTB','updateBattleProcess','uwuuq','drawItem','drawItemImageSprite','isTriggered','rearrangePartyActors','center','CoreEngine','Window_PartyCommand_updateHelp','cursorUp','yjgKU','rawBattleMembers','VisuMZ_1_MainMenuCore','drawItemImage','faceName','VisuMZ_2_BattleSystemSTB','NrnHC','_backSprite2','_scene','EXYAU','changeTextColor','addLoadListener','_statusWindow','dimColor1','addPartyCommand','KkwjA','itemHeight','ActiveBattlerOffsetX','iconWidth','changePaintOpacity','indexOf','yXYHM','StatusLabelBgType','setBattler','187064kYdTwz','Actors','battlePartySwitchCooldown','startSwitchOutAnimation','reserveParty','openness','_statusPartyLabel','selectActor','reserveTransfer'];_0x45da=function(){return _0x490d05;};return _0x45da();}Imported[_0x56678c(0x2b3)]&&(ImageManager[_0x56678c(0x2da)]=VisuMZ['PartySystem'][_0x56678c(0x196)][_0x56678c(0x2f7)][_0x56678c(0x1f3)]??0x4b,TextManager['battlePartyChangeCmd']=VisuMZ['PartySystem']['Settings'][_0x56678c(0x38d)][_0x56678c(0x302)],TextManager['battlePartyChangeCmdHelp']=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x38d)][_0x56678c(0x313)],TextManager[_0x56678c(0x1d2)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x38d)][_0x56678c(0x2ff)],TextManager[_0x56678c(0x27d)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x38d)]['BattleHelpSwitch'],TextManager[_0x56678c(0x1e5)]=VisuMZ[_0x56678c(0x22c)][_0x56678c(0x196)][_0x56678c(0x38d)][_0x56678c(0x264)],VisuMZ[_0x56678c(0x22c)][_0x56678c(0x305)]=SceneManager[_0x56678c(0x2df)],SceneManager[_0x56678c(0x2df)]=function(){const _0x5171b9=_0x56678c;if(SceneManager[_0x5171b9(0x361)](Scene_Party))return!![];return VisuMZ[_0x5171b9(0x22c)]['SceneManager_isPreviousSceneBattleTransitionable'][_0x5171b9(0x215)](this);},VisuMZ['PartySystem'][_0x56678c(0x16f)]=SceneManager[_0x56678c(0x39d)],SceneManager[_0x56678c(0x39d)]=function(){const _0x51d938=_0x56678c;if(SceneManager['isNextScene'](Scene_Party))return!![];return VisuMZ['PartySystem'][_0x51d938(0x16f)][_0x51d938(0x215)](this);},SceneManager[_0x56678c(0x2f9)]=function(){const _0x3c109e=_0x56678c;return this[_0x3c109e(0x297)]&&this[_0x3c109e(0x297)][_0x3c109e(0x395)]===Scene_Map;},VisuMZ['PartySystem']['Scene_Battle_createAllWindows']=Scene_Battle[_0x56678c(0x1a9)]['createAllWindows'],Scene_Battle['prototype'][_0x56678c(0x1a6)]=function(){const _0x25ac9=_0x56678c;VisuMZ['PartySystem'][_0x25ac9(0x214)]['call'](this),this['createPartySwitchWindow'](),this[_0x25ac9(0x20e)](),this[_0x25ac9(0x30f)]();},Scene_Battle[_0x56678c(0x1a9)]['createPartySwitchWindow']=function(){const _0x14fd7c=_0x56678c,_0x1e74a3=this[_0x14fd7c(0x385)]();this['_partyMemberSwitchWindow']=new Window_PartyBattleSwitch(_0x1e74a3),this[_0x14fd7c(0x30c)](this[_0x14fd7c(0x2cc)]),this[_0x14fd7c(0x2cc)][_0x14fd7c(0x225)]('ok',this[_0x14fd7c(0x381)][_0x14fd7c(0x242)](this)),this[_0x14fd7c(0x2cc)][_0x14fd7c(0x225)](_0x14fd7c(0x25e),this[_0x14fd7c(0x2ec)][_0x14fd7c(0x242)](this));},Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x385)]=function(){const _0x5a5b96=_0x56678c,_0x3ae376=this[_0x5a5b96(0x1fe)]();return _0x3ae376==='border'?this[_0x5a5b96(0x1f9)]():this['partySwitchWindowRectStandard']();},Scene_Battle[_0x56678c(0x1a9)]['partySwitchWindowRectStandard']=function(){const _0x5ca7f9=_0x56678c;return VisuMZ[_0x5ca7f9(0x22c)][_0x5ca7f9(0x196)]['Window'][_0x5ca7f9(0x354)]['call'](this);},Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x1f9)]=function(){const _0x5161fd=this['skillItemWindowRectBorderStyle'](),_0x49a738=$gameSystem['windowPadding']()*0x2;return _0x5161fd['width']=0x204+_0x49a738,_0x5161fd;},VisuMZ['PartySystem'][_0x56678c(0x17b)]=Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x1df)],Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x1df)]=function(){const _0x4b8f1c=_0x56678c;if(this[_0x4b8f1c(0x2cc)]&&this['_partyMemberSwitchWindow'][_0x4b8f1c(0x1ae)])return!![];if(this[_0x4b8f1c(0x248)])return!![];if(this['_callPartyMemberSwitch'])return!![];if(this[_0x4b8f1c(0x1e1)])return!![];return VisuMZ['PartySystem'][_0x4b8f1c(0x17b)][_0x4b8f1c(0x215)](this);},VisuMZ[_0x56678c(0x22c)][_0x56678c(0x259)]=Scene_Battle[_0x56678c(0x1a9)]['createPartyCommandWindowBattleCore'],Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x332)]=function(){const _0x120480=_0x56678c;VisuMZ[_0x120480(0x22c)][_0x120480(0x259)]['call'](this),this[_0x120480(0x1a3)][_0x120480(0x225)](_0x120480(0x271),this[_0x120480(0x19c)][_0x120480(0x242)](this));},Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x19c)]=function(){const _0x3be0db=_0x56678c;this[_0x3be0db(0x25c)]()?(this[_0x3be0db(0x1e1)]=!![],this[_0x3be0db(0x33e)]['addText'](TextManager['ActiveTpbFormationMessage']['format'](TextManager['formation']))):this[_0x3be0db(0x33a)]();},Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x25c)]=function(){const _0x4e2ea8=_0x56678c;return BattleManager[_0x4e2ea8(0x1dc)]();},Scene_Battle['prototype'][_0x56678c(0x33a)]=function(){const _0x303250=_0x56678c;this[_0x303250(0x1e1)]=![],this['_spriteset'][_0x303250(0x1ff)](),this[_0x303250(0x21a)][_0x303250(0x33b)]=![],SceneManager['snapForBackground'](),SceneManager[_0x303250(0x34d)](Scene_Party),$gameParty[_0x303250(0x346)]();if(BattleManager['isTpb']()){if(_0x303250(0x322)===_0x303250(0x322))BattleManager[_0x303250(0x396)]=BattleManager[_0x303250(0x169)]();else{if(!this[_0x303250(0x25d)]())return![];const _0x5b99a4=this['currentActor']();return this[_0x303250(0x1ae)]&&_0x5b99a4&&_0x5b99a4[_0x303250(0x2ef)]();}}},VisuMZ['PartySystem'][_0x56678c(0x2b1)]=Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x285)],Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x285)]=function(){const _0x491fbd=_0x56678c;VisuMZ[_0x491fbd(0x22c)][_0x491fbd(0x2b1)][_0x491fbd(0x215)](this);if(this[_0x491fbd(0x1e1)]&&!BattleManager[_0x491fbd(0x211)]){if(_0x491fbd(0x180)===_0x491fbd(0x2a4)){if(!_0x5d0bab[_0x491fbd(0x2f9)]())return;this[_0x491fbd(0x349)]();const _0x4eb451=_0x267ae1[_0x491fbd(0x323)](),_0x41309a=_0x1fa9d2['x'],_0x396f9e=_0x2bf538['y'],_0x29c0c8=_0x15f049[_0x491fbd(0x2b4)]();_0x281a71['_bypassAutoSavePartySystem']=!![],_0x3a6c25[_0x491fbd(0x2af)](_0x4eb451,_0x41309a,_0x396f9e,_0x29c0c8,0x2),_0x3c4abe(this[_0x491fbd(0x15e)][_0x491fbd(0x242)](this),0x7d0);}else this[_0x491fbd(0x33a)]();}this[_0x491fbd(0x312)]&&!BattleManager[_0x491fbd(0x211)]&&this[_0x491fbd(0x283)]();},VisuMZ['PartySystem'][_0x56678c(0x38c)]=Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x2e8)],Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x2e8)]=function(){const _0x56b3fe=_0x56678c;if(BattleManager[_0x56b3fe(0x1dc)]()){if(this['_partyMemberSwitchWindow']&&this['_partyMemberSwitchWindow'][_0x56b3fe(0x1ae)])return![];}return VisuMZ['PartySystem'][_0x56b3fe(0x38c)][_0x56b3fe(0x215)](this);},VisuMZ['PartySystem'][_0x56678c(0x342)]=Scene_Battle[_0x56678c(0x1a9)]['createActorCommandWindow'],Scene_Battle['prototype'][_0x56678c(0x306)]=function(){const _0x50a2d7=_0x56678c;VisuMZ[_0x50a2d7(0x22c)][_0x50a2d7(0x342)][_0x50a2d7(0x215)](this),this['_actorCommandWindow'][_0x50a2d7(0x225)](_0x50a2d7(0x271),this['commandPartyMemberSwitch'][_0x50a2d7(0x242)](this));},Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x1ca)]=function(){const _0x20c11d=_0x56678c;if(this['isQueueFormationMenu']()){if('qCmwU'===_0x20c11d(0x392)){const _0x47ba39=this[_0x20c11d(0x169)](_0x18fe1e),_0x252ffa=this[_0x20c11d(0x169)](_0x53ce4e);if(_0x47ba39&&!_0x47ba39['isFormationChangeOk']())return;if(_0x252ffa&&!_0x252ffa['isFormationChangeOk']())return;const _0x5eef79=_0xc440cd[_0x20c11d(0x2d9)];_0x5eef79[_0x29f3fe]=_0x252ffa?_0x252ffa['actorId']():0x0,_0x5eef79[_0x47aa53]=_0x47ba39?_0x47ba39[_0x20c11d(0x389)]():0x0,this[_0x20c11d(0x209)](),this[_0x20c11d(0x1da)](),this[_0x20c11d(0x373)](_0x5ac1b6);}else this[_0x20c11d(0x312)]=!![],this[_0x20c11d(0x33e)][_0x20c11d(0x280)](TextManager[_0x20c11d(0x1e5)][_0x20c11d(0x1fb)](TextManager[_0x20c11d(0x271)]));}else this[_0x20c11d(0x283)]();},Scene_Battle[_0x56678c(0x1a9)][_0x56678c(0x283)]=function(){const _0x6ef499=_0x56678c;this['_callPartyMemberSwitch']=![],this['_logWindow'][_0x6ef499(0x1d3)](),BattleManager[_0x6ef499(0x169)]()&&this['_partyMemberSwitchWindow']['activate']();},Scene_Battle['prototype'][_0x56678c(0x381)]=function(){const _0x4ebe15=_0x56678c,_0x7618fc=this[_0x4ebe15(0x2cc)][_0x4ebe15(0x19f)]();_0x7618fc?this[_0x4ebe15(0x1e9)](_0x7618fc):(this[_0x4ebe15(0x2cc)][_0x4ebe15(0x24e)](),this['_actorCommandWindow'][_0x4ebe15(0x255)]());},Scene_Battle['prototype'][_0x56678c(0x1e9)]=function(_0x2a5ad6){const _0x52b93e=_0x56678c,_0x578c15=BattleManager[_0x52b93e(0x169)](),_0x261d71=_0x578c15[_0x52b93e(0x38e)]();this[_0x52b93e(0x2cc)][_0x52b93e(0x24e)]();if(this[_0x52b93e(0x369)]()&&_0x261d71){if(_0x52b93e(0x1e0)===_0x52b93e(0x216))return _0x4f5da6[_0x52b93e(0x22c)]['Settings'][_0x52b93e(0x2f3)][_0x52b93e(0x25b)][_0x52b93e(0x215)](this);else this[_0x52b93e(0x248)]=!![],_0x261d71[_0x52b93e(0x2aa)](_0x2a5ad6);}else this[_0x52b93e(0x229)](_0x2a5ad6);},Scene_Battle['prototype']['isShowPartySwitchOutAnimation']=function(){const _0x4a26c6=_0x56678c;return VisuMZ[_0x4a26c6(0x22c)][_0x4a26c6(0x196)][_0x4a26c6(0x2f7)][_0x4a26c6(0x223)];},Scene_Battle[_0x56678c(0x1a9)]['processPartySwitchMember']=function(_0x1abebe){const _0x4f827b=_0x56678c;this[_0x4f827b(0x248)]=![];const _0x46f08e=BattleManager[_0x4f827b(0x169)](),_0x1b1abd=_0x46f08e[_0x4f827b(0x38e)](),_0x49b024=$gameParty[_0x4f827b(0x2d9)][_0x4f827b(0x2a3)](_0x46f08e[_0x4f827b(0x389)]());$gameParty['_battleMembers'][_0x49b024]=_0x1abebe[_0x4f827b(0x389)](),$gameParty['partyChangeRefresh']();if(this['isImmediateTpb']())_0x1abebe[_0x4f827b(0x348)]=_0x46f08e[_0x4f827b(0x348)],_0x1abebe[_0x4f827b(0x18c)]='charged';else BattleManager['isTpb']()&&_0x1abebe[_0x4f827b(0x174)]();BattleManager[_0x4f827b(0x371)]=_0x1abebe,BattleManager['updateTargetsForPartySwitch'](_0x46f08e,_0x1abebe),_0x1abebe[_0x4f827b(0x346)](),_0x1abebe[_0x4f827b(0x2e7)](),_0x1abebe[_0x4f827b(0x2bc)](_0x46f08e),_0x1b1abd&&_0x1b1abd[_0x4f827b(0x2a6)](_0x1abebe),this[_0x4f827b(0x29b)][_0x4f827b(0x234)](_0x46f08e,_0x1abebe),this[_0x4f827b(0x29b)]['refresh'](),this[_0x4f827b(0x178)][_0x4f827b(0x349)](_0x1abebe),this[_0x4f827b(0x178)]['smoothSelect'](0x0),this[_0x4f827b(0x178)]['activate'](),this[_0x4f827b(0x178)]['_debug']=!![];},Scene_Battle['prototype']['isImmediateTpb']=function(){const _0x14cbbf=_0x56678c;if(!BattleManager[_0x14cbbf(0x1b5)]())return![];const _0x87852a=VisuMZ[_0x14cbbf(0x22c)][_0x14cbbf(0x196)]['General'];return _0x87852a[_0x14cbbf(0x21e)]===undefined&&(_0x87852a[_0x14cbbf(0x21e)]=!![]),_0x87852a[_0x14cbbf(0x21e)];},Window_StatusBase[_0x56678c(0x1a9)][_0x56678c(0x234)]=function(_0x285797,_0x821054){const _0xc18d3d=_0x56678c,_0x387bdb=_0xc18d3d(0x233)[_0xc18d3d(0x1fb)](_0x285797[_0xc18d3d(0x389)]()),_0x4d1597=this['createInnerSprite'](_0x387bdb,Sprite_StateIcon);_0x4d1597[_0xc18d3d(0x349)](_0x821054);},Scene_Battle['prototype']['onPartySwitchCancel']=function(){const _0x1494f7=_0x56678c;this[_0x1494f7(0x2cc)]['deactivate'](),this[_0x1494f7(0x178)][_0x1494f7(0x255)](),this[_0x1494f7(0x178)]['refresh']();},Scene_Battle['prototype'][_0x56678c(0x20e)]=function(){const _0x45f3d6=_0x56678c;if(!BattleManager[_0x45f3d6(0x1b5)]())return;if(!SceneManager['isPreviousScene'](Scene_Party))return;this[_0x45f3d6(0x1a3)][_0x45f3d6(0x24e)](),this[_0x45f3d6(0x1a3)][_0x45f3d6(0x270)](),this[_0x45f3d6(0x178)][_0x45f3d6(0x24e)](),this[_0x45f3d6(0x178)][_0x45f3d6(0x270)](),BattleManager[_0x45f3d6(0x371)]=null,BattleManager['_inputting']=![];},Scene_Battle[_0x56678c(0x1a9)]['postPartySwitchMenuTurnBased']=function(){const _0x3b630f=_0x56678c;if(BattleManager['isTpb']())return;if(!SceneManager[_0x3b630f(0x361)](Scene_Party))return;console[_0x3b630f(0x25a)](BattleManager[_0x3b630f(0x169)]());Imported[_0x3b630f(0x393)]&&BattleManager[_0x3b630f(0x257)]()&&BattleManager[_0x3b630f(0x31d)]();Imported[_0x3b630f(0x282)]&&BattleManager['isFTB']()&&(BattleManager[_0x3b630f(0x371)]=$gameParty[_0x3b630f(0x21c)](),BattleManager[_0x3b630f(0x211)]=BattleManager[_0x3b630f(0x169)](),BattleManager[_0x3b630f(0x379)]=!![],this[_0x3b630f(0x178)][_0x3b630f(0x349)](BattleManager[_0x3b630f(0x169)]()),this['_statusWindow'][_0x3b630f(0x2ae)](BattleManager['actor']()));Imported[_0x3b630f(0x2ea)]&&BattleManager['isETB']()&&(BattleManager[_0x3b630f(0x371)]=$gameParty['teamBasedFirstAvailableMember'](),BattleManager[_0x3b630f(0x211)]=BattleManager[_0x3b630f(0x169)](),BattleManager['_inputting']=!![],this[_0x3b630f(0x178)]['setup'](BattleManager[_0x3b630f(0x169)]()),this[_0x3b630f(0x29b)]['selectActor'](BattleManager[_0x3b630f(0x169)]()));if(Imported[_0x3b630f(0x245)]&&BattleManager[_0x3b630f(0x347)]()){if('KfdxK'===_0x3b630f(0x34a)){const _0x572a2d=this[_0x3b630f(0x21b)](_0x7bd4f4);this[_0x3b630f(0x2a2)](!![]);const _0x479d7e=_0x30086a[_0x3b630f(0x1a1)];this[_0x3b630f(0x33d)](_0x479d7e,_0x572a2d['x'],_0x572a2d['y'],_0x572a2d[_0x3b630f(0x22f)],_0x3b630f(0x28b));}else BattleManager[_0x3b630f(0x371)]=$gameParty[_0x3b630f(0x21c)](),BattleManager[_0x3b630f(0x211)]=BattleManager[_0x3b630f(0x169)](),BattleManager[_0x3b630f(0x379)]=!![],this[_0x3b630f(0x178)][_0x3b630f(0x349)](BattleManager[_0x3b630f(0x169)]()),this['_statusWindow'][_0x3b630f(0x2ae)](BattleManager['actor']());}},Game_Party[_0x56678c(0x1a9)][_0x56678c(0x21c)]=function(){const _0x17b1ea=_0x56678c;let _0xb6f4e7=this[_0x17b1ea(0x2ee)]();return _0xb6f4e7[0x0];},Sprite_Actor[_0x56678c(0x197)]=0xc,Sprite_Actor[_0x56678c(0x1a9)]['startSwitchOutAnimation']=function(_0x11c112){const _0x13288e=_0x56678c;this[_0x13288e(0x1d9)]=_0x11c112;const _0x3f4299=Sprite_Actor[_0x13288e(0x197)];this['startMove'](0x12c,0x0,_0x3f4299),this[_0x13288e(0x308)](0x0,_0x3f4299),this['_partySwitchDuration']=_0x3f4299;},Sprite_Actor[_0x56678c(0x1a9)][_0x56678c(0x17e)]=function(_0x2d6314){const _0x183fa7=_0x56678c;if(SceneManager[_0x183fa7(0x1bb)]()){SceneManager['_scene'][_0x183fa7(0x229)](_0x2d6314);const _0x5a869e=Sprite_Actor[_0x183fa7(0x197)];this['stepForward'](),this[_0x183fa7(0x308)](0xff,_0x5a869e);}this[_0x183fa7(0x1d9)]=null;},VisuMZ[_0x56678c(0x22c)]['Sprite_Actor_update']=Sprite_Actor[_0x56678c(0x1a9)][_0x56678c(0x1ff)],Sprite_Actor[_0x56678c(0x1a9)][_0x56678c(0x1ff)]=function(){const _0x260f15=_0x56678c;VisuMZ[_0x260f15(0x22c)]['Sprite_Actor_update']['call'](this);if(this[_0x260f15(0x197)])this[_0x260f15(0x2ed)]();},Sprite_Actor[_0x56678c(0x1a9)][_0x56678c(0x2ed)]=function(){const _0x55cc58=_0x56678c;this[_0x55cc58(0x197)]=this[_0x55cc58(0x197)]||0x0,this[_0x55cc58(0x197)]--,this['_partySwitchDuration']<=0x0&&(_0x55cc58(0x33f)===_0x55cc58(0x33f)?this[_0x55cc58(0x17e)](this[_0x55cc58(0x1d9)]):(_0x56289e(_0x55cc58(0x165)['format'](_0x40de43,_0x1a2312)),_0xb7289e[_0x55cc58(0x26f)]()));},Window_PartyCommand[_0x56678c(0x1a9)][_0x56678c(0x351)]=function(){const _0x40a812=_0x56678c;this[_0x40a812(0x32b)]();},Window_PartyCommand['prototype']['addFormationCommand']=function(){const _0x3f42ed=_0x56678c;if(!this[_0x3f42ed(0x35b)]())return;if(this['hasBattleSystemIncompatibilities']()){$gameTemp[_0x3f42ed(0x254)]()&&!BattleManager['_battleSystemIncompatibilityError']&&(console[_0x3f42ed(0x25a)](_0x3f42ed(0x1f6)),BattleManager[_0x3f42ed(0x370)]=!![]);return;}const _0x5bdb6a=this[_0x3f42ed(0x16c)](),_0x5540b6=ImageManager[_0x3f42ed(0x2da)],_0x57d8d1=_0x5bdb6a==='text'?TextManager[_0x3f42ed(0x20a)]:_0x3f42ed(0x227)[_0x3f42ed(0x1fb)](_0x5540b6,TextManager[_0x3f42ed(0x20a)]),_0x2efc65=this[_0x3f42ed(0x1fa)]();this[_0x3f42ed(0x345)](_0x57d8d1,'formation',_0x2efc65);},Window_PartyCommand[_0x56678c(0x1a9)]['isFormationCommandAdded']=function(){const _0x3c6785=_0x56678c;if(Imported[_0x3c6785(0x23b)]&&BattleManager['isOTB']())return![];if(Imported['VisuMZ_2_BattleSystemSTB']&&BattleManager[_0x3c6785(0x1bf)]())return![];if(Imported['VisuMZ_2_BattleGridSystem']&&BattleManager[_0x3c6785(0x339)]())return![];return VisuMZ[_0x3c6785(0x22c)][_0x3c6785(0x196)][_0x3c6785(0x2f7)][_0x3c6785(0x202)];},Window_PartyCommand[_0x56678c(0x1a9)]['hasBattleSystemIncompatibilities']=function(){return![];},Window_PartyCommand[_0x56678c(0x1a9)][_0x56678c(0x1fa)]=function(){const _0x4e5fb2=_0x56678c;if($gameParty[_0x4e5fb2(0x1f7)]()[_0x4e5fb2(0x2be)]<=0x1)return![];if(!$gameParty[_0x4e5fb2(0x2eb)]())return![];return $gameSystem[_0x4e5fb2(0x2e3)]();},VisuMZ['PartySystem'][_0x56678c(0x196)][_0x56678c(0x28d)]=Window_PartyCommand[_0x56678c(0x1a9)][_0x56678c(0x1bc)],Window_PartyCommand[_0x56678c(0x1a9)][_0x56678c(0x1bc)]=function(){const _0x35929d=_0x56678c,_0x548533=this['currentSymbol']();switch(_0x548533){case _0x35929d(0x271):this[_0x35929d(0x1de)][_0x35929d(0x177)](TextManager['battlePartyChangeCmdHelp']);break;default:VisuMZ[_0x35929d(0x22c)][_0x35929d(0x196)][_0x35929d(0x28d)][_0x35929d(0x215)](this);break;}},Window_ActorCommand[_0x56678c(0x1a9)][_0x56678c(0x29d)]=function(){const _0x4774fd=_0x56678c;if(!this[_0x4774fd(0x357)]())return;if(this[_0x4774fd(0x2bf)](_0x4774fd(0x271))>=0x0){if(_0x4774fd(0x266)===_0x4774fd(0x266))this[_0x4774fd(0x18d)]();else{if(_0x55d522[_0x4774fd(0x2d3)])return![];return _0x5b2fc8['PartySystem'][_0x4774fd(0x398)][_0x4774fd(0x215)](this);}}const _0x1a9071=this[_0x4774fd(0x16c)](),_0x1757d9=ImageManager[_0x4774fd(0x2da)],_0x287f10=_0x1a9071==='text'?TextManager['battlePartySwitchCmd']:'\x5cI[%1]%2'[_0x4774fd(0x1fb)](_0x1757d9,TextManager[_0x4774fd(0x20a)]),_0x26f040=this[_0x4774fd(0x36e)]();this[_0x4774fd(0x345)](_0x287f10,_0x4774fd(0x271),_0x26f040);},Window_ActorCommand[_0x56678c(0x1a9)]['isPartyCommandAdded']=function(){const _0xa65105=_0x56678c;if(!this[_0xa65105(0x277)])return![];return VisuMZ[_0xa65105(0x22c)][_0xa65105(0x196)]['General'][_0xa65105(0x1e2)];},Window_ActorCommand[_0x56678c(0x1a9)][_0x56678c(0x36e)]=function(){const _0x514291=_0x56678c;if($gameParty[_0x514291(0x1f7)]()[_0x514291(0x2be)]<=0x1)return![];if(!this[_0x514291(0x277)])return![];if(!this[_0x514291(0x277)][_0x514291(0x2eb)]())return![];return this[_0x514291(0x277)][_0x514291(0x2ef)]();},VisuMZ['PartySystem'][_0x56678c(0x196)]['Window_ActorCommand_updateHelp']=Window_ActorCommand[_0x56678c(0x1a9)][_0x56678c(0x1bc)],Window_ActorCommand['prototype']['updateHelp']=function(){const _0x59c616=_0x56678c,_0x528ffc=this[_0x59c616(0x20d)]();if(!_0x528ffc)return;switch(_0x528ffc[_0x59c616(0x263)]()){case _0x59c616(0x271):this['_helpWindow'][_0x59c616(0x177)](TextManager[_0x59c616(0x27d)]);break;default:VisuMZ[_0x59c616(0x22c)][_0x59c616(0x196)]['Window_ActorCommand_updateHelp'][_0x59c616(0x215)](this);break;}},Window_ActorCommand['prototype'][_0x56678c(0x18d)]=function(){const _0x36c176=_0x56678c;while(this[_0x36c176(0x2bf)](_0x36c176(0x271))>=0x0){if(_0x36c176(0x1ba)===_0x36c176(0x35f)){if(this[_0x36c176(0x19e)]===_0x2af475)this[_0x36c176(0x364)]();if(!this[_0x36c176(0x2d9)])this[_0x36c176(0x364)]();while(this[_0x36c176(0x2d9)]['length']<this[_0x36c176(0x19e)]){this[_0x36c176(0x2d9)]['push'](0x0);}}else{const _0x37e63c=this[_0x36c176(0x2bf)](_0x36c176(0x271));this[_0x36c176(0x17f)][_0x36c176(0x186)](_0x37e63c,0x1);}}});;