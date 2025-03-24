//=============================================================================
// VisuStella MZ - Victory Aftermath
// VisuMZ_3_VictoryAftermath.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VictoryAftermath = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VictoryAftermath = VisuMZ.VictoryAftermath || {};
VisuMZ.VictoryAftermath.version = 1.19;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.19] [VictoryAftermath]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Victory_Aftermath_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Victory Aftermath plugin consolidates the rewards granted upon finishing
 * a battle successfully into one screen (or more if there are level ups).
 * This helps reduce the amount of button presses needed to display similar
 * information by default. The level up screens will also display parameter
 * changes and new skills acquired in addition to victory quotes.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Consolidates EXP, Gold, and Items acquired through battle rewards into one
 *   battle screen.
 * * EXP gauges for currently active battle party will be displayed on the same
 *   screen to indicate progress.
 * * Upon leveling up, individual screens can be shown (optionally) to display
 *   parameter changes, new skills acquired, and level up quotes.
 * * Plugin Commands can be used to clear/add new quotes at any time.
 * * Plugin Commands can be used by bypass certain parts of the Victory
 *   Aftermath segments or the entire thing completely.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * - VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * VisuMZ_0_CoreEngine
 *
 * - The EXP gauge colors will match the color settings found in the Core
 * Engine's Plugin Parameters instead of defaulting to specific colors.
 *
 * - The continue message will display any changed input keys designated by
 * the Core Engine's Plugin Parameters.
 *
 * ---
 *
 * VisuMZ_1_MainMenuCore
 *
 * - Upon leveling up, the Menu Image will show up (optional) as a bust during
 * the quote segment.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 *
 * <Level Up Quotes>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 * </Level Up Quotes>
 *
 * - Used for: Actor Notetags
 * - Description
 * - Replace 'text' with the text you'd want the actor to say when leveling up.
 * - The <New Quote> tag is used between the <Level Up Quotes> notetags to
 *   separate quotes.
 * - If an actor has multiple quotes (due to the <New Quote> notetag), then a
 *   random quote will be selected upon level up.
 * - If this notetag is not found inside an actor's notebox, a random level up
 *   quote will be selected from the Plugin Parameters => Level Up => Quotes =>
 *   Level Up Quotes plugin parameter.
 *
 * ---
 *
 * <New Skill Quotes>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 * </New Skill Quotes>
 *
 * - Used for: Actor Notetags
 * - Description
 * - Replace 'text' with the text you'd want the actor to say when leveling up
 *   in addition to learning a new skill upon leveling up.
 * - The <New Quote> tag is used between the <New Skill Quotes> notetags to
 *   separate quotes.
 * - If an actor has multiple quotes (due to the <New Quote> notetag), then a
 *   random quote will be selected upon level up and learning a new skill.
 * - If this notetag is not found inside an actor's notebox, a random new skill
 *   quote will be selected from the Plugin Parameters => Level Up => Quotes =>
 *   New Skill Quotes plugin parameter.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Add Level Up Quotes
 * - Add new entries target actor's level up quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to add quotes for.
 *
 *   New Quotes:
 *   - Add new entries to actor's level up quotes.
 *   - Text codes allowed. %1 - Actor's Name
 *
 * ---
 *
 * Actor: Add New Skill Quotes
 * - Add new entries target actor's new skill quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to add quotes for.
 *
 *   New Quotes:
 *   - Add new entries to actor's new skill quotes.
 *   - Text codes allowed. %1 - Actor's Name
 *
 * ---
 *
 * Actor: Clear Level Up Quotes
 * - Clear target actor's level up quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to clear quotes for.
 *
 * ---
 *
 * Actor: Clear New Skill Quotes
 * - Clear target actor's new skill quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to clear quotes for.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Bypass Victory Motion
 * - Bypass actors performing their victory motion?
 *
 *   Bypass?:
 *   - Bypass actors performing their victory motion?
 *
 * ---
 *
 * System: Bypass Victory Music
 * - Bypass playing the victory music?
 *
 *   Bypass?:
 *   - Bypass playing the victory music?
 *
 * ---
 *
 * System: Bypass Victory Phase
 * - Bypass the entire victory phase and all aspects about it?
 *
 *   Bypass?:
 *   - Bypass the entire victory phase and all aspects about it?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * The general settings Plugin Parameters control the overall settings found
 * within the main aspects of the Victory Aftermath sequence.
 *
 * ---
 *
 * General Settings
 * 
 *   Fade In Speed:
 *   - Fade in speed for the victory window.
 * 
 *   Hide Delay (MS):
 *   - Delay in milliseconds before hiding the UI Windows.
 * 
 *   Show Delay (MS):
 *   - Delay in milliseconds before showing the Victory Windows.
 * 
 *   Update Duration:
 *   - Duration in frames on updating actor EXP gauges.
 * 
 *   Auto Skip Auto Battle?:
 *   - Skip the Victory Aftermath sequence if the player has decided to use
 *     the party Auto Battle command?
 * 
 *   Mirror Contents?:
 *   - Mirror the positions of EXP, Gold, and Items?
 * 
 *   Show EXP Gauges?:
 *   - Show the EXP Gauges of the main party members for the first screen of
 *     the Victory Aftermath?
 *   - This is added for those with large parties and cannot fit everything
 *     into one screen for all party members and would prefer not showing any
 *     EXP Gauges at all instead.
 *
 * ---
 * 
 * Collapse Effect
 * 
 *   Normal Collapse Wait?:
 *   - Wait for the normal collapse effect to finish?
 * 
 *   Boss Collapse Wait?:
 *   - Wait for the boss collapse effect to finish?
 * 
 * ---
 * 
 * Victory Music
 * 
 *   Victory BGM:
 *   - Background music to play during the victory sequence.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Reward Strips Settings
 * ============================================================================
 *
 * Reward strip settings that appear in the first screen of the Victory
 * Aftermath. These are used to let you have control over what rewards are
 * displayed at the end of each battle and can be used to display custom data
 * from other plugins as well.
 *
 * ---
 *
 * Reward Strip
 * 
 *   Label:
 *   - This one doesn't have any use other than being a label to  quickly
 *     determine what this one is for.
 * 
 *   JS: Show:
 *   - Code used to determine if the reward strip is shown.
 * 
 *   JS: Text:
 *   - Code used to determine if the text displayed as the category.
 * 
 *   JS: Data:
 *   - Code used to determine what data should be displayed in the
 *     reward strip.
 *
 * ---
 * 
 * The default parameters for this will be updated from time to time as more
 * VisuStella MZ plugins are released to add in extra displayed resources that
 * the party can gain from battle.
 *
 * ============================================================================
 * Plugin Parameters: Level Up Settings
 * ============================================================================
 *
 * When actors level up, extra screens will be displayed in the Victory
 * Aftermath sequence. Alter these settings to best fit your game.
 *
 * ---
 *
 * General
 * 
 *   Enable?:
 *   - Enable the Level Up portion of the Victory Aftermath phase?
 * 
 *   Show Face?:
 *   - Show the actor's face?
 * 
 *   Show Param Change?:
 *   - Show an extra column for parameter value differences?
 * 
 *     Hide Level?:
 *     - Hide the level change in the parameter value differences?
 * 
 *   Shown Max Skills:
 *   - The maximum amount of skills that are displayed.
 *   - This is due to limited screen space.
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
 * Quotes
 * 
 *   Level Up Quotes:
 *   - A list of generic level up quotes for those who don't have the
 *     <Level Up Quote> notetags.
 *   - %1 - Actor Name
 * 
 *   New Skill Quotes:
 *   - A list of generic level up quotes for those who don't have the
 *     <New Skill Quote> notetags.
 *   - %1 - Actor Name
 *
 * ---
 *
 * VisuMZ_1_MainMenuCore
 * - The following Plugin Parameters require VisuMZ_1_MainMenuCore.
 * 
 *   Show Bust?:
 *   - Show the actor's menu image as a bust?
 * 
 *   Bust Position X:
 *   - Positon to center the actor's menu image bust.
 *   - You may use JavaScript code.
 * 
 *   Bust Position Y:
 *   - Positon to anchor the actor's menu image bust.
 *   - You may use JavaScript code.
 * 
 *   Bust Scale:
 *   - The amount to scale the actor's menu image bust.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * There's certain diction used in the Victory Aftermath plugin that's not set
 * anywhere else in the game. Change the settings to make it fit your game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Continue Format:
 *   - Text format for continue message.
 *   - %1 - OK key, %2 - Cancel key
 * 
 *   OK Button:
 *   - Text used to represent the OK button.
 *   - If VisuMZ_0_CoreEngine is present, ignore this.
 * 
 *   Cancel Button:
 *   - Text used to represent the Cancel button.
 *   - If VisuMZ_0_CoreEngine is present, ignore this.
 * 
 *   Level Format:
 *   - Text format for actor level.
 *   - %1 - Level
 * 
 *   Level Up:
 *   - Text format for reaching a level up.
 * 
 *   Sound Effect:
 *   - Sound effect played when a level up occurs.
 * 
 *     Volume:
 *     - Volume of the sound effect played.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played.
 * 
 *     Pan:
 *     - Pan of the sound effect played.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors
 *     from the Window Skin.
 * 
 *   New Skill Format:
 *   - Text format describing that a new skill has been learned.
 *   - %1 - Actor Name
 * 
 *   Reward Items:
 *   - Text displayed for items rewarded.
 * 
 *   Victory Title:
 *   - Text displayed at the top of the victory screen.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.19: December 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * ** The default Plugin Parameter for "Reward Strips" have been updated to
 *    contain compatibility for a future plugin.
 * 
 * Version 1.18: May 18, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.17: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: January 6, 2022
 * * Bug Fixes!
 * ** Fixed incorrect level change display text. Fix made by Olivia.
 * 
 * Version 1.15: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** Battle Core's post-battle common events should now load properly. This
 *     incompatibility is due to RPG Maker MZ 1.4.0's core scripts added in
 *     a common event queue clear. Update made by Olivia.
 * 
 * Version 1.14: December 9, 2021
 * * Feature Update!
 * ** Victory Aftermath gauges now automatically round to the nearest pixel
 *    rather than be on half pixels with specific resolutions. Update by Irina.
 * 
 * Version 1.13: September 23, 2021
 * * Bug Fixes!
 * ** Values for parameter differences should no longer be hidden or the same
 *    as the previous values. Fix made by Irina.
 * 
 * Version 1.12: August 27, 2021
 * * Bug Fixes!
 * ** X-Parameters and S-Parameters shown in the level up stat changes should
 *    now display the percentage signs properly. Fix made by Olivia.
 * 
 * Version 1.11: July 9, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.10: March 12, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia!
 * *** Plugin Parameters > General > Show EXP Gauges?
 * **** Show the EXP Gauges of the main party members for the first screen of
 *      the Victory Aftermath?
 * **** This is added for those with large parties and cannot fit everything
 *      into one screen for all party members and would prefer not showing any
 *      EXP Gauges at all instead.
 * 
 * Version 1.09: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu!
 * *** Plugin Parameters > Vocab > Level Up > Volume
 * *** Plugin Parameters > Vocab > Level Up > Pitch
 * *** Plugin Parameters > Vocab > Level Up > Pan
 * **** For the people who want more control over the level up sound effect.
 * 
 * Version 1.08: December 11, 2020
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Feature Updates!
 * ** The default Plugin Parameter for "Reward Strips" have been updated to
 *    contain compatibility for a future plugin.
 * 
 * Version 1.07: December 4, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Parameter added by Olivia:
 * ** Plugin Parameters > Level Up Settings > Hide Level?
 * *** Hide the level change in the parameter value differences when comparing
 *     the stat changes from the previous level to the next.
 * 
 * Version 1.06: November 29, 2020
 * * Bug Fixed!
 * ** The default reward strips Plugin Parameters data is now updated for the
 *    SP display costs to show the Skill Points data instead of Ability Points
 *    data. Fix made by Arisu.
 * 
 * Version 1.05: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New plugin parameter added by Arisu.
 * *** Plugin Parameters > Reward Strips
 * **** Reward strip settings that appear in the first screen of the Victory
 *      Aftermath. These are used to let you have control over what rewards are
 *      displayed at the end of each battle and can be used to display custom
 *      data from other plugins as well.
 * 
 * Version 1.04: October 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New plugin parameter added by Olivia.
 * *** Plugin Parameters > General > Mirror Contents?
 * **** Mirror the positions of EXP, Gold, and Items?
 * 
 * Version 1.03: October 18, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** BGM pitch plugin parameter is now uncapped.
 * * New Features!
 * ** New plugin parameters added by Yanfly.
 * *** Plugin Parameters > General > Collapse Effect > Normal Collapse Wait?
 * *** Plugin Parameters > General > Collapse Effect > Boss Collapse Wait?
 * **** These settings enable you to decide if you want the Victory Aftermath
 *      to wait until collapse effects are finished before continuing.
 * *** Plugin Parameters > General > Music > Volume
 * *** Plugin Parameters > General > Music > Pitch
 * *** Plugin Parameters > General > Music > Pan
 * **** Adjusts the volume, pitch, and pan of the victory music.
 * 
 * Version 1.02: September 13, 2020
 * * Feature Update!
 * ** Victory Aftermath windows now wait until all boss collapse effects are
 *    done before showing. Update added by Olivia.
 * * New Features!
 * ** New Plugin Parameter under General Settings: Auto Skip Auto Battle?
 * *** Skip the Victory Aftermath sequence if the player has decided to use the
 *     party Auto Battle command?
 * *** Feature added by Olivia
 * 
 * Version 1.01: September 6, 2020
 * * New Features!
 * ** New Plugin Parameters added in Level Up Settings for disabling
 *    the back rectangles and/or changing their colors.
 *
 * Version 1.00: August 26, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesLevelUpAdd
 * @text Actor: Add Level Up Quotes
 * @desc Add new entries target actor's level up quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to add quotes for.
 * @default 1
 *
 * @arg NewQuotes:arrayjson
 * @text New Quotes
 * @type note[]
 * @desc Add new entries to actor's level up quotes.
 * Text codes allowed. %1 - Actor's Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Text\\\"\""]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesNewSkillAdd
 * @text Actor: Add New Skill Quotes
 * @desc Add new entries target actor's new skill quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to add quotes for.
 * @default 1
 *
 * @arg NewQuotes:arrayjson
 * @text New Quotes
 * @type note[]
 * @desc Add new entries to actor's new skill quotes.
 * Text codes allowed. %1 - Actor's Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Text\\\"\""]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesLevelUpClear
 * @text Actor: Clear Level Up Quotes
 * @desc Clear target actor's level up quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to clear quotes for.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesNewSkillClear
 * @text Actor: Clear New Skill Quotes
 * @desc Clear target actor's new skill quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to clear quotes for.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryMotion
 * @text System: Bypass Victory Motion
 * @desc Bypass actors performing their victory motion?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass actors performing their victory motion?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryMusic
 * @text System: Bypass Victory Music
 * @desc Bypass playing the victory music?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass playing the victory music?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryPhase
 * @text System: Bypass Victory Phase
 * @desc Bypass the entire victory phase and all aspects about it?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass the entire victory phase and all aspects about it?
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
 * @param VictoryAftermath
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
 * @desc General settings pertaining to the Victory Aftermath phase.
 * @default {"General":"","FadeInSpeed:num":"8","HideDelayMS:num":"1500","ShowDelayMS:num":"2000","UpdateDuration:num":"180","AutoBattleAutoSkip:eval":"true","MirrorContents:eval":"false","Collapse":"","WaitRegularCollapse:eval":"true","WaitBossCollapse:eval":"true","Music":"","Bgm:str":"Ship3","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param Rewards:arraystruct
 * @text Reward Strips
 * @parent General:struct
 * @type struct<Rewards>[]
 * @desc Reward strip settings that appear in the first screen of the Victory Aftermath.
 * @default ["{\"Label\":\"EXP\",\"Show:func\":\"\\\"return true;\\\"\",\"Text:func\":\"\\\"return TextManager.exp;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.exp;\\\"\"}","{\"Label\":\"Gold\",\"Show:func\":\"\\\"return true;\\\"\",\"Text:func\":\"\\\"return TextManager.currencyUnit;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.gold;\\\"\"}","{\"Label\":\"AP (Skill Learn System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_SkillLearnSystem &&\\\\n    VisuMZ.SkillLearnSystem.Settings.AbilityPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.abilityPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.abilityPoints;\\\"\"}","{\"Label\":\"CP (Class Change System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    VisuMZ.ClassChangeSystem.Settings.ClassPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.classPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.classPoints;\\\"\"}","{\"Label\":\"JP (Class Change System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    VisuMZ.ClassChangeSystem.Settings.JobPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.jobPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.jobPoints;\\\"\"}","{\"Label\":\"SP (Skill Learn System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_SkillLearnSystem &&\\\\n    VisuMZ.SkillLearnSystem.Settings.SkillPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.skillPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.skillPoints;\\\"\"}","{\"Label\":\"Medal EXP (Equip Medal System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_EquipMedalSys &&\\\\n    VisuMZ.EquipMedalSys.Settings.General.ShowVictory &&\\\\n    BattleManager._rewards.equipMedalExp > 0;\\\"\",\"Text:func\":\"\\\"return TextManager.equipMedalExp;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.equipMedalExp;\\\"\"}"]
 *
 * @param LevelUp:struct
 * @text Level Up Settings
 * @type struct<LevelUp>
 * @desc Settings pertaining to the Level Up portion of the Victory Aftermath phase.
 * @default {"General":"","Enable:eval":"true","ShowFace:eval":"false","ShowParamDiff:eval":"true","HideLevelDiff:eval":"false","MaxSkills:num":"8","DelayBuffer:num":"200","DrawBackRect:eval":"true","BackRectColor:str":"19","Quotes":"","LevelUpQuotes:arrayjson":"[\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Alright! A level up!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Yes! I've leveled up!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Oh? I've leveled up!?\\\\n This is awesome!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Looks like I've become stronger!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I feel like I'm getting used to battle.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"The power! I can feel it!\\\\\\\"\\\"\"]","NewSkillQuotes:arrayjson":"[\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Looks like I've acquired a new skill!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"This new skill should come in handy.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"It seems I've learned something new!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I've acquired a new power!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"This should be useful for future battles.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I wonder what this new skill is like?\\\\\\\"\\\"\"]","MainMenuCore":"","ShowBust:eval":"true","BustPosX:str":"Graphics.width * 0.25","BustPosY:str":"Graphics.height","BustScale:num":"1.20"}
 *
 * @param Vocab:struct
 * @text Vocabulary
 * @type struct<Vocab>
 * @desc The vocabulary used for this plugin and related settings.
 * @default {"ContinueFmt:str":"Press %1 or %2 to continue","KeyOK:str":"OK","KeyCancel:str":"Cancel","LvFmt:str":"LV %1","LvUp:str":"LEVEL UP!","LvUpSfx:str":"Up4","LvUpVolume:num":"90","LvUpPitch:num":"100","LvUpPan:num":"0","LvUpColor:str":"17","NewSkill:str":"%1 has learned:","RewardItems:str":"Items Obtained","Victory:str":"Victory!"}
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
 * @param FadeInSpeed:num
 * @text Fade In Speed
 * @parent General
 * @desc Fade in speed for the victory window.
 * @default 8
 *
 * @param HideDelayMS:num
 * @text Hide Delay (MS)
 * @parent General
 * @desc Delay in milliseconds before hiding the UI Windows.
 * @default 1500
 *
 * @param ShowDelayMS:num
 * @text Show Delay (MS)
 * @parent General
 * @desc Delay in milliseconds before showing the Victory Windows.
 * @default 2000
 *
 * @param UpdateDuration:num
 * @text Update Duration
 * @parent General
 * @desc Duration in frames on updating actor EXP gauges.
 * @default 180
 *
 * @param AutoBattleAutoSkip:eval
 * @text Skip Auto Battle?
 * @parent General
 * @type boolean
 * @on Skip
 * @off Don't Skip
 * @desc Skip the Victory Aftermath sequence if the player has
 * decided to use the party Auto Battle command?
 * @default true
 *
 * @param MirrorContents:eval
 * @text Mirror Contents?
 * @parent General
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the positions of EXP, Gold, and Items?
 * @default false
 *
 * @param ShowExpGauges:eval
 * @text Show EXP Gauges?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the EXP Gauges of the main party members
 * for the first screen of the Victory Aftermath?
 * @default true
 * 
 * @param Collapse
 * @text Collapse Effect
 *
 * @param WaitRegularCollapse:eval
 * @text Normal Collapse Wait?
 * @parent Collapse
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for the normal collapse effect to finish?
 * @default true
 *
 * @param WaitBossCollapse:eval
 * @text Boss Collapse Wait?
 * @parent Collapse
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for the boss collapse effect to finish?
 * @default true
 * 
 * @param Music
 * @text Victory Music
 *
 * @param Bgm:str
 * @text Victory BGM
 * @parent Music
 * @type file
 * @dir audio/bgm/
 * @desc Background music to play during the victory sequence.
 * @default Ship3
 *
 * @param volume:num
 * @text Volume
 * @parent Music
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @parent Music
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @parent Music
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Rewards Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Rewards:
 *
 * @param Label
 * @desc This one doesn't have any use other than being a label to 
 * quickly determine what this one is for.
 * @default Untitled
 *
 * @param Show:func
 * @text JS: Show
 * @type note
 * @desc Code used to determine if the reward strip is shown.
 * @default "return true;"
 *
 * @param Text:func
 * @text JS: Text
 * @type note
 * @desc Code used to determine if the text displayed as the category.
 * @default "return 'Untitled';"
 *
 * @param Data:func
 * @text JS: Data
 * @type note
 * @desc Code used to determine what data should be displayed in the reward strip.
 * @default "return 0;"
 *
 */
/* ----------------------------------------------------------------------------
 * Level Up Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LevelUp:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the Level Up portion of the Victory Aftermath phase?
 * @default true
 *
 * @param ShowFace:eval
 * @text Show Face?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the actor's face?
 * @default false
 *
 * @param ShowParamDiff:eval
 * @text Show Param Change?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show an extra column for parameter value differences?
 * @default true
 *
 * @param HideLevelDiff:eval
 * @text Hide Level?
 * @parent ShowParamDiff:eval
 * @type boolean
 * @on Hide
 * @off Normal
 * @desc Hide the level change in the parameter value differences?
 * @default false
 *
 * @param MaxSkills:num
 * @text Shown Max Skills
 * @parent General
 * @desc The maximum amount of skills that are displayed.
 * This is due to limited screen space.
 * @default 8
 *
 * @param DelayBuffer:num
 * @text Delay Buffer
 * @parent General
 * @type number
 * @desc How many milliseconds to wait in between playing
 * each level up sound effect?
 * @default 200
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
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
 * @param Quotes
 *
 * @param LevelUpQuotes:arrayjson
 * @text Level Up Quotes
 * @parent Quotes
 * @type note[]
 * @desc A list of generic level up quotes for those who don't
 * have the <Level Up Quote> notetags. %1 - Actor Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Alright! A level up!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Yes! I've leveled up!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Oh? I've leveled up!?\\n This is awesome!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Looks like I've become stronger!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I feel like I'm getting used to battle.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"The power! I can feel it!\\\"\""]
 *
 * @param NewSkillQuotes:arrayjson
 * @text New Skill Quotes
 * @parent Quotes
 * @type note[]
 * @desc A list of generic level up quotes for those who don't
 * have the <New Skill Quote> notetags. %1 - Actor Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Looks like I've acquired a new skill!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"This new skill should come in handy.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"It seems I've learned something new!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I've acquired a new power!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"This should be useful for future battles.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I wonder what this new skill is like?\\\"\""]
 *
 * @param MainMenuCore
 * @text VisuMZ_1_MainMenuCore
 *
 * @param ShowBust:eval
 * @text Show Bust?
 * @parent MainMenuCore
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the actor's menu image as a bust?
 * @default true
 *
 * @param BustPosX:str
 * @text Bust Position X
 * @parent MainMenuCore
 * @desc Positon to center the actor's menu image bust.
 * You may use JavaScript code.
 * @default Graphics.width * 0.25
 *
 * @param BustPosY:str
 * @text Bust Position Y
 * @parent MainMenuCore
 * @desc Positon to anchor the actor's menu image bust.
 * You may use JavaScript code.
 * @default Graphics.height
 *
 * @param BustScale:num
 * @text Bust Scale
 * @parent MainMenuCore
 * @desc The amount to scale the actor's menu image bust.
 * @default 1.20
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param ContinueFmt:str
 * @text Continue Format
 * @desc Text format for continue message.
 * %1 - OK key, %2 - Cancel key
 * @default Press %1 or %2 to continue
 *
 * @param KeyOK:str
 * @text OK Button
 * @parent ContinueFmt:str
 * @desc Text used to represent the OK button.
 * If VisuMZ_0_CoreEngine is present, ignore this.
 * @default OK
 *
 * @param KeyCancel:str
 * @text Cancel Button
 * @parent ContinueFmt:str
 * @desc Text used to represent the Cancel button.
 * If VisuMZ_0_CoreEngine is present, ignore this.
 * @default Cancel
 *
 * @param LvFmt:str
 * @text Level Format
 * @desc Text format for actor level.
 * %1 - Level
 * @default LV %1
 *
 * @param LvUp:str
 * @text Level Up
 * @desc Text format for reaching a level up.
 * @default LEVEL UP!
 *
 * @param LvUpSfx:str
 * @text Sound Effect
 * @parent LvUp:str
 * @type file
 * @dir audio/se/
 * @desc Sound effect played when a level up occurs.
 * @default Up4
 *
 * @param LvUpVolume:num
 * @text Volume
 * @parent LvUpSfx:str
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param LvUpPitch:num
 * @text Pitch
 * @parent LvUpSfx:str
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param LvUpPan:num
 * @text Pan
 * @parent LvUpSfx:str
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param LvUpColor:str
 * @text Text Color
 * @parent LvUp:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param NewSkill:str
 * @text New Skill Format
 * @desc Text format describing that a new skill has been learned.
 * %1 - Actor Name
 * @default %1 has learned:
 *
 * @param RewardItems:str
 * @text Reward Items
 * @desc Text displayed for items rewarded.
 * @default Items Obtained
 *
 * @param Victory:str
 * @text Victory Title
 * @desc Text displayed at the top of the victory screen.
 * @default Victory!
 *
 */
//=============================================================================

const _0x3a9160=_0x4681;function _0x4681(_0x37a42c,_0x3f70a1){const _0x28ac00=_0x28ac();return _0x4681=function(_0x468147,_0x217134){_0x468147=_0x468147-0xe6;let _0x3f478d=_0x28ac00[_0x468147];return _0x3f478d;},_0x4681(_0x37a42c,_0x3f70a1);}(function(_0x188494,_0x370946){const _0x3ea376=_0x4681,_0x459498=_0x188494();while(!![]){try{const _0x111ae9=parseInt(_0x3ea376(0x19b))/0x1*(parseInt(_0x3ea376(0x168))/0x2)+-parseInt(_0x3ea376(0x265))/0x3*(-parseInt(_0x3ea376(0x2d6))/0x4)+-parseInt(_0x3ea376(0x178))/0x5*(-parseInt(_0x3ea376(0x127))/0x6)+parseInt(_0x3ea376(0xfa))/0x7*(-parseInt(_0x3ea376(0x298))/0x8)+parseInt(_0x3ea376(0x29a))/0x9*(parseInt(_0x3ea376(0x2c8))/0xa)+-parseInt(_0x3ea376(0xea))/0xb+-parseInt(_0x3ea376(0x199))/0xc;if(_0x111ae9===_0x370946)break;else _0x459498['push'](_0x459498['shift']());}catch(_0x19767f){_0x459498['push'](_0x459498['shift']());}}}(_0x28ac,0xcb24c));var label='VictoryAftermath',tier=tier||0x0,dependencies=[_0x3a9160(0x22a)],pluginData=$plugins['filter'](function(_0x2a486c){const _0x42f3e5=_0x3a9160;return _0x2a486c[_0x42f3e5(0x19c)]&&_0x2a486c['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x3a9160(0x15e)]=VisuMZ[label][_0x3a9160(0x15e)]||{},VisuMZ['ConvertParams']=function(_0x61b41c,_0x2d1daa){const _0x6e88ea=_0x3a9160;for(const _0x58ff87 in _0x2d1daa){if(_0x6e88ea(0x260)===_0x6e88ea(0x109))return _0x496640[_0x3cc6a4];else{if(_0x58ff87[_0x6e88ea(0x14c)](/(.*):(.*)/i)){const _0x15fdf3=String(RegExp['$1']),_0x3839d4=String(RegExp['$2'])['toUpperCase']()[_0x6e88ea(0x28a)]();let _0x5a0b11,_0x12cc8a,_0x51a772;switch(_0x3839d4){case _0x6e88ea(0x187):_0x5a0b11=_0x2d1daa[_0x58ff87]!==''?Number(_0x2d1daa[_0x58ff87]):0x0;break;case _0x6e88ea(0x25c):_0x12cc8a=_0x2d1daa[_0x58ff87]!==''?JSON[_0x6e88ea(0x1c3)](_0x2d1daa[_0x58ff87]):[],_0x5a0b11=_0x12cc8a[_0x6e88ea(0x25e)](_0x41c210=>Number(_0x41c210));break;case _0x6e88ea(0x22b):_0x5a0b11=_0x2d1daa[_0x58ff87]!==''?eval(_0x2d1daa[_0x58ff87]):null;break;case _0x6e88ea(0x23e):_0x12cc8a=_0x2d1daa[_0x58ff87]!==''?JSON[_0x6e88ea(0x1c3)](_0x2d1daa[_0x58ff87]):[],_0x5a0b11=_0x12cc8a['map'](_0x2fa2d8=>eval(_0x2fa2d8));break;case'JSON':_0x5a0b11=_0x2d1daa[_0x58ff87]!==''?JSON[_0x6e88ea(0x1c3)](_0x2d1daa[_0x58ff87]):'';break;case _0x6e88ea(0xf0):_0x12cc8a=_0x2d1daa[_0x58ff87]!==''?JSON[_0x6e88ea(0x1c3)](_0x2d1daa[_0x58ff87]):[],_0x5a0b11=_0x12cc8a['map'](_0x1edbb2=>JSON['parse'](_0x1edbb2));break;case _0x6e88ea(0x169):_0x5a0b11=_0x2d1daa[_0x58ff87]!==''?new Function(JSON[_0x6e88ea(0x1c3)](_0x2d1daa[_0x58ff87])):new Function('return\x200');break;case _0x6e88ea(0x1db):_0x12cc8a=_0x2d1daa[_0x58ff87]!==''?JSON[_0x6e88ea(0x1c3)](_0x2d1daa[_0x58ff87]):[],_0x5a0b11=_0x12cc8a[_0x6e88ea(0x25e)](_0x54ab80=>new Function(JSON['parse'](_0x54ab80)));break;case'STR':_0x5a0b11=_0x2d1daa[_0x58ff87]!==''?String(_0x2d1daa[_0x58ff87]):'';break;case _0x6e88ea(0xef):_0x12cc8a=_0x2d1daa[_0x58ff87]!==''?JSON[_0x6e88ea(0x1c3)](_0x2d1daa[_0x58ff87]):[],_0x5a0b11=_0x12cc8a[_0x6e88ea(0x25e)](_0x11fdb0=>String(_0x11fdb0));break;case _0x6e88ea(0x1a7):_0x51a772=_0x2d1daa[_0x58ff87]!==''?JSON[_0x6e88ea(0x1c3)](_0x2d1daa[_0x58ff87]):{},_0x5a0b11=VisuMZ[_0x6e88ea(0x288)]({},_0x51a772);break;case'ARRAYSTRUCT':_0x12cc8a=_0x2d1daa[_0x58ff87]!==''?JSON[_0x6e88ea(0x1c3)](_0x2d1daa[_0x58ff87]):[],_0x5a0b11=_0x12cc8a[_0x6e88ea(0x25e)](_0x478351=>VisuMZ[_0x6e88ea(0x288)]({},JSON[_0x6e88ea(0x1c3)](_0x478351)));break;default:continue;}_0x61b41c[_0x15fdf3]=_0x5a0b11;}}}return _0x61b41c;},(_0x82c6d3=>{const _0x5ab6f7=_0x3a9160,_0x3e32f4=_0x82c6d3[_0x5ab6f7(0x226)];for(const _0x3d08d6 of dependencies){if(_0x5ab6f7(0x132)===_0x5ab6f7(0x132)){if(!Imported[_0x3d08d6]){alert(_0x5ab6f7(0xf9)['format'](_0x3e32f4,_0x3d08d6)),SceneManager['exit']();break;}}else{if(_0x21ac2b[_0x5ab6f7(0x10e)]!==_0x32364a)return _0x2514a2[_0x5ab6f7(0x10e)];}}const _0x1408cd=_0x82c6d3[_0x5ab6f7(0x235)];if(_0x1408cd['match'](/\[Version[ ](.*?)\]/i)){const _0x543c77=Number(RegExp['$1']);if(_0x543c77!==VisuMZ[label]['version']){if('gTupp'===_0x5ab6f7(0x1ab))return _0x33ac65[_0x5ab6f7(0x277)](this[_0x5ab6f7(0x1f5)])[_0x5ab6f7(0x15c)](this[_0x5ab6f7(0x1f5)][_0x5ab6f7(0x226)]());else alert(_0x5ab6f7(0x208)[_0x5ab6f7(0x15c)](_0x3e32f4,_0x543c77)),SceneManager[_0x5ab6f7(0x252)]();}}if(_0x1408cd['match'](/\[Tier[ ](\d+)\]/i)){const _0x2ad56b=Number(RegExp['$1']);_0x2ad56b<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x3e32f4,_0x2ad56b,tier)),SceneManager[_0x5ab6f7(0x252)]()):tier=Math['max'](_0x2ad56b,tier);}VisuMZ[_0x5ab6f7(0x288)](VisuMZ[label]['Settings'],_0x82c6d3['parameters']);})(pluginData),PluginManager[_0x3a9160(0x181)](pluginData[_0x3a9160(0x226)],_0x3a9160(0x1af),_0x43f880=>{const _0x2d5806=_0x3a9160;VisuMZ['ConvertParams'](_0x43f880,_0x43f880);const _0x4e642e=$gameActors['actor'](_0x43f880[_0x2d5806(0x149)]),_0x1313fd=_0x43f880['NewQuotes'];if(_0x4e642e)while(_0x1313fd[_0x2d5806(0x275)]>0x0){if('NBgTm'!==_0x2d5806(0x26c)){const _0x36102d=this['lineHeight']()-0x2,_0x2a5e0b=_0x2e11d1[_0x2d5806(0x214)](_0x36102d/0x2),_0x41bda5=_0x2d5806(0x221),_0x47bab6=_0x4c6f2e[_0x2d5806(0x219)](),_0x5861dc=_0xa5f340-_0x36102d;!_0x4e290a[_0x2d5806(0x2c3)]&&(_0x2678a6[_0x2d5806(0x2c3)]=new _0x418481(_0x280e20,_0x36102d),_0x46fa3d[_0x2d5806(0x2c3)][_0x2d5806(0x1f1)]=this[_0x2d5806(0x2a5)](),_0x1c451e['victoryNameBitmap']['drawCircle'](_0x2a5e0b,_0x2a5e0b,_0x2a5e0b,_0x41bda5),_0x470306[_0x2d5806(0x2c3)][_0x2d5806(0x240)](_0x2a5e0b+_0x5861dc,_0x2a5e0b,_0x2a5e0b,_0x41bda5),_0x26d68b[_0x2d5806(0x2c3)][_0x2d5806(0x1a0)](_0x2a5e0b,0x0,_0x5861dc,_0x36102d),_0x43d711[_0x2d5806(0x2c3)][_0x2d5806(0x2c1)](_0x2a5e0b,0x0,_0x5861dc,_0x36102d,_0x41bda5)),this[_0x2d5806(0xf8)][_0x2d5806(0x26d)](_0x32a2d6[_0x2d5806(0x2c3)],0x0,0x0,_0x156d02,_0x36102d,_0x4a30c5,_0x2a8c23,_0x3b5ff5,_0x36102d);}else _0x4e642e[_0x2d5806(0x273)]()['push'](_0x1313fd[_0x2d5806(0x20a)]());}}),PluginManager['registerCommand'](pluginData['name'],_0x3a9160(0x296),_0x3fe503=>{const _0x543132=_0x3a9160;VisuMZ['ConvertParams'](_0x3fe503,_0x3fe503);const _0x229627=$gameActors[_0x543132(0x16e)](_0x3fe503[_0x543132(0x149)]),_0x16eb0a=_0x3fe503['NewQuotes'];if(_0x229627)while(_0x16eb0a[_0x543132(0x275)]>0x0){_0x229627[_0x543132(0x291)]()[_0x543132(0x16b)](_0x16eb0a['shift']());}}),PluginManager[_0x3a9160(0x181)](pluginData['name'],'ActorQuotesLevelUpClear',_0x1792ed=>{const _0x13c944=_0x3a9160;VisuMZ[_0x13c944(0x288)](_0x1792ed,_0x1792ed);const _0x42b5fb=$gameActors[_0x13c944(0x16e)](_0x1792ed[_0x13c944(0x149)]);if(_0x42b5fb)while(_0x42b5fb[_0x13c944(0x273)]()[_0x13c944(0x275)]>0x0){'mgbUe'!==_0x13c944(0x15d)?_0x42b5fb[_0x13c944(0x273)]()[_0x13c944(0x20a)]():_0x2d207d[_0x13c944(0x125)]=!![];}}),PluginManager[_0x3a9160(0x181)](pluginData[_0x3a9160(0x226)],_0x3a9160(0x224),_0x3e918b=>{const _0x3c0205=_0x3a9160;VisuMZ[_0x3c0205(0x288)](_0x3e918b,_0x3e918b);const _0x3f8bdf=$gameActors[_0x3c0205(0x16e)](_0x3e918b[_0x3c0205(0x149)]);if(_0x3f8bdf)while(_0x3f8bdf['newSkillQuotes']()[_0x3c0205(0x275)]>0x0){if('VNmhW'!==_0x3c0205(0x259))_0x3f8bdf[_0x3c0205(0x291)]()['shift']();else return _0x5f02f4[_0x3c0205(0x16d)][_0x3c0205(0x15e)][_0x3c0205(0x19f)][_0x3c0205(0x1ac)]['format'](_0x5892b7['earnedJobPoints'](),_0x1c7047[_0x3c0205(0x2be)],_0x242156[_0x3c0205(0x2b6)]);}}),PluginManager['registerCommand'](pluginData[_0x3a9160(0x226)],_0x3a9160(0x18e),_0x581227=>{const _0x3f6ee8=_0x3a9160;VisuMZ[_0x3f6ee8(0x288)](_0x581227,_0x581227),$gameSystem[_0x3f6ee8(0x2cf)]()[_0x3f6ee8(0x27f)]=_0x581227[_0x3f6ee8(0x2c0)];}),PluginManager['registerCommand'](pluginData[_0x3a9160(0x226)],_0x3a9160(0x104),_0x41cdef=>{const _0x4b1bc5=_0x3a9160;VisuMZ[_0x4b1bc5(0x288)](_0x41cdef,_0x41cdef),$gameSystem[_0x4b1bc5(0x2cf)]()[_0x4b1bc5(0x1a2)]=_0x41cdef[_0x4b1bc5(0x2c0)];}),PluginManager[_0x3a9160(0x181)](pluginData[_0x3a9160(0x226)],_0x3a9160(0x249),_0x254f09=>{const _0x32d46d=_0x3a9160;VisuMZ[_0x32d46d(0x288)](_0x254f09,_0x254f09),$gameSystem[_0x32d46d(0x2cf)]()['bypassVictoryPhase']=_0x254f09[_0x32d46d(0x2c0)];}),TextManager[_0x3a9160(0x20b)]=VisuMZ['VictoryAftermath'][_0x3a9160(0x15e)][_0x3a9160(0x14f)][_0x3a9160(0x1bf)],TextManager[_0x3a9160(0x1fd)]=VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x15e)][_0x3a9160(0x14f)][_0x3a9160(0x1be)],TextManager['victoryKeyCancel']=VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x15e)]['Vocab'][_0x3a9160(0x17d)],TextManager[_0x3a9160(0x1a3)]=VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x15e)][_0x3a9160(0x14f)][_0x3a9160(0x126)],TextManager['victoryDisplayLvUp']=VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x15e)][_0x3a9160(0x14f)]['LvUp'],TextManager[_0x3a9160(0x24c)]=VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x15e)][_0x3a9160(0x14f)]['RewardItems'],TextManager[_0x3a9160(0x20f)]=VisuMZ[_0x3a9160(0x191)]['Settings'][_0x3a9160(0x14f)][_0x3a9160(0x110)],TextManager['victoryNewSkillFmt']=VisuMZ['VictoryAftermath'][_0x3a9160(0x15e)][_0x3a9160(0x14f)][_0x3a9160(0x2a3)],TextManager['quoteLevelUp']=function(_0x32881f){const _0x109540=_0x3a9160,_0x3439d4=VisuMZ['VictoryAftermath']['Settings'][_0x109540(0x152)]['LevelUpQuotes'];if(!_0x32881f)return _0x3439d4[Math[_0x109540(0x115)](_0x3439d4[_0x109540(0x275)])];if(!_0x32881f[_0x109540(0x197)]())return _0x3439d4[Math[_0x109540(0x115)](_0x3439d4[_0x109540(0x275)])];const _0xc52bab=_0x32881f['levelUpQuotes']();if(_0xc52bab['length']>0x0)return _0xc52bab[Math['randomInt'](_0xc52bab[_0x109540(0x275)])];return _0x3439d4[Math['randomInt'](_0x3439d4['length'])];},TextManager[_0x3a9160(0x277)]=function(_0x9ef590){const _0x1d1d06=_0x3a9160,_0x344099=VisuMZ[_0x1d1d06(0x191)][_0x1d1d06(0x15e)][_0x1d1d06(0x152)][_0x1d1d06(0x1b3)];if(!_0x9ef590)return _0x344099[Math[_0x1d1d06(0x115)](_0x344099[_0x1d1d06(0x275)])];if(!_0x9ef590[_0x1d1d06(0x197)]())return _0x344099[Math[_0x1d1d06(0x115)](_0x344099['length'])];const _0x4b6466=_0x9ef590[_0x1d1d06(0x291)]();if(_0x4b6466['length']>0x0)return _0x4b6466[Math[_0x1d1d06(0x115)](_0x4b6466[_0x1d1d06(0x275)])];return _0x344099[Math['randomInt'](_0x344099[_0x1d1d06(0x275)])];},ColorManager[_0x3a9160(0x102)]=function(_0x3a3295,_0xc006ea){const _0x3c885d=_0x3a9160;return _0xc006ea=String(_0xc006ea),this['_colorCache']=this[_0x3c885d(0x2cc)]||{},_0xc006ea['match'](/#(.*)/i)?this[_0x3c885d(0x2cc)][_0x3a3295]=_0x3c885d(0x267)['format'](String(RegExp['$1'])):this[_0x3c885d(0x2cc)][_0x3a3295]=this[_0x3c885d(0x284)](Number(_0xc006ea)),this[_0x3c885d(0x2cc)][_0x3a3295];},ColorManager[_0x3a9160(0x21c)]=function(_0x8e5efe){const _0x3c3f55=_0x3a9160;_0x8e5efe=String(_0x8e5efe);if(_0x8e5efe[_0x3c3f55(0x14c)](/#(.*)/i)){if(_0x3c3f55(0x29c)===_0x3c3f55(0x22c)){const _0x1b529f=this['mirrorContents'](),_0xe42b1e=this[_0x3c3f55(0x239)](),_0x266a9f=_0x1b529f?0x64:_0x5834f1[_0x3c3f55(0x241)](this[_0x3c3f55(0x1c4)]/0x2+0x28),_0x3fed7d=_0x596b0f[_0x3c3f55(0x241)](_0xe42b1e*0x5),_0x1d6859=_0x1b0186[_0x3c3f55(0x241)](this['width']/0x2-0x8c),_0x2dbea=this[_0x3c3f55(0x1bd)]-_0x3fed7d-_0xe42b1e*0x2,_0x38acf3=new _0x315792(_0x266a9f,_0x3fed7d,_0x1d6859,_0x2dbea);this[_0x3c3f55(0x18d)]=new _0x420827(_0x38acf3,this),this['addChild'](this[_0x3c3f55(0x18d)]);}else return _0x3c3f55(0x267)['format'](String(RegExp['$1']));}else{if(_0x3c3f55(0x225)!==_0x3c3f55(0x225))_0x135552[_0x3c3f55(0x164)]['update']['call'](this),this['updateContentsOpacity']();else return this[_0x3c3f55(0x284)](Number(_0x8e5efe));}},ColorManager['victoryLevelUpColor']=function(){const _0x33d69b=_0x3a9160,_0x45fe6c='victory-level-up-color';this[_0x33d69b(0x2cc)]=this[_0x33d69b(0x2cc)]||{};if(this[_0x33d69b(0x2cc)][_0x45fe6c])return this[_0x33d69b(0x2cc)][_0x45fe6c];const _0x49f3ac=VisuMZ[_0x33d69b(0x191)]['Settings'][_0x33d69b(0x14f)]['LvUpColor'];return this[_0x33d69b(0x102)](_0x45fe6c,_0x49f3ac);},SoundManager['playVictoryLevelUpSFX']=function(){const _0xc97fe=_0x3a9160;if(this[_0xc97fe(0x205)])return;if(!this['_victoryLevelUpSFX']){if(_0xc97fe(0x1c9)==='chvml'){if(this['_victoryAftermathSettings']===_0x10020c)this['initVictoryAftermath']();return this[_0xc97fe(0x262)];}else{const _0x4c7421=VisuMZ[_0xc97fe(0x191)][_0xc97fe(0x15e)][_0xc97fe(0x14f)];this[_0xc97fe(0x156)]={'name':_0x4c7421[_0xc97fe(0x2d5)]||'','volume':_0x4c7421[_0xc97fe(0x12e)]??0x5a,'pitch':_0x4c7421[_0xc97fe(0xe7)]??0x64,'pan':_0x4c7421[_0xc97fe(0x21d)]??0x0};}}this['_victoryLevelUpSFX']['name']!==''&&(AudioManager['playSe'](this[_0xc97fe(0x156)]),this['_victoryLevelUpBuffer']=!![],setTimeout(this[_0xc97fe(0x2b4)]['bind'](this),0xc8));},SoundManager[_0x3a9160(0x2b4)]=function(){const _0x190268=_0x3a9160;this[_0x190268(0x205)]=![];},SoundManager[_0x3a9160(0x204)]=function(){const _0x5c33f3=_0x3a9160;if(!this[_0x5c33f3(0x103)]){if(_0x5c33f3(0xf6)!==_0x5c33f3(0xff)){const _0x10e217=VisuMZ['VictoryAftermath'][_0x5c33f3(0x15e)][_0x5c33f3(0x246)];if(_0x10e217['volume']===undefined)_0x10e217[_0x5c33f3(0x1d6)]=0x5a;if(_0x10e217[_0x5c33f3(0x1e7)]===undefined)_0x10e217['pitch']=0x64;if(_0x10e217['pan']===undefined)_0x10e217[_0x5c33f3(0x159)]=0x0;this['_victoryBgm']={'name':_0x10e217[_0x5c33f3(0x24b)]||'','volume':_0x10e217['volume']||0x0,'pitch':_0x10e217[_0x5c33f3(0x1e7)]||0x0,'pan':_0x10e217['pan']||0x0};}else{const _0x4dce0b=this[_0x5c33f3(0x239)]()-0x2,_0x3f3664=_0x3fc5ec[_0x5c33f3(0x214)](_0x4dce0b/0x2),_0x1b1e15=_0x5c33f3(0x221),_0x59beac=_0x1d35b3[_0x5c33f3(0x219)](),_0x31d267=0x50,_0xfd949d=_0x5376bb-_0x3f3664-_0x31d267;!_0x220251[_0x5c33f3(0x10c)]&&(_0x4642a5['victoryRewardBitmap']=new _0x54f58d(_0xb56867,_0x4dce0b),_0x344687[_0x5c33f3(0x10c)]['paintOpacity']=this[_0x5c33f3(0x2a5)](),_0x526e3['victoryRewardBitmap'][_0x5c33f3(0x240)](_0x3f3664,_0x3f3664,_0x3f3664,_0x1b1e15),_0x2ba53a[_0x5c33f3(0x10c)][_0x5c33f3(0x1a0)](_0x3f3664,0x0,_0x4dce0b,_0x4dce0b),_0x1460dd[_0x5c33f3(0x10c)][_0x5c33f3(0x2c1)](_0x3f3664,0x0,_0xfd949d,_0x4dce0b,_0x1b1e15),_0x580489[_0x5c33f3(0x10c)][_0x5c33f3(0x294)](_0x3f3664+_0xfd949d,0x0,_0x31d267,_0x4dce0b,_0x1b1e15,_0x59beac)),this['contents'][_0x5c33f3(0x26d)](_0x1f5c02[_0x5c33f3(0x10c)],0x0,0x0,_0x28fa92,_0x4dce0b,_0x1bf6ee,_0x2fc1a4,_0xa55836,_0x4dce0b);}}this[_0x5c33f3(0x103)]['name']!==''&&(_0x5c33f3(0x1de)!=='ZuzrJ'?AudioManager[_0x5c33f3(0x1c6)](this[_0x5c33f3(0x103)]):this['contentsOpacity']=this[_0x5c33f3(0x11b)][_0x5c33f3(0x2ca)]);},BattleManager[_0x3a9160(0x299)]=VisuMZ['VictoryAftermath'][_0x3a9160(0x15e)]['General'][_0x3a9160(0x2d4)]||0x1,VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x121)]=BattleManager[_0x3a9160(0x280)],BattleManager[_0x3a9160(0x280)]=function(){const _0x1e2ecd=_0x3a9160;VisuMZ[_0x1e2ecd(0x191)][_0x1e2ecd(0x121)][_0x1e2ecd(0x2aa)](this),this[_0x1e2ecd(0x1fa)]=![],this[_0x1e2ecd(0x12a)]=-0x1,this[_0x1e2ecd(0x116)]=![];},VisuMZ['VictoryAftermath'][_0x3a9160(0x1ca)]=BattleManager['isBusy'],BattleManager[_0x3a9160(0x15a)]=function(){const _0x275914=_0x3a9160;if(this[_0x275914(0x2b3)]()){if(_0x275914(0x179)===_0x275914(0x177))_0x47d57f(_0x275914(0x208)[_0x275914(0x15c)](_0x1f47e2,_0x584ca4)),_0x51816d[_0x275914(0x252)]();else return!![];}else return VisuMZ['VictoryAftermath'][_0x275914(0x1ca)][_0x275914(0x2aa)](this);},BattleManager['isVictoryPhase']=function(){const _0x54de16=_0x3a9160;return this['_phase']===_0x54de16(0x2c5)&&this[_0x54de16(0x1fa)];},BattleManager['processVictory']=function(){const _0x1b519b=_0x3a9160;this[_0x1b519b(0x1b9)]('BattleVictoryJS'),this['processVictoryAftermath'](),Imported['VisuMZ_3_BattleVoices']&&(_0x1b519b(0x247)!==_0x1b519b(0x247)?this[_0x1b519b(0x176)][_0x1b519b(0x2cb)](_0x58cba7[_0x1b519b(0x250)],_0x50ce71,_0x42712b,_0x1cb08c,_0x2d3aea,_0x1b519b(0x16c)):$gameParty['playBattleVoice'](_0x1b519b(0x2bd)));},BattleManager[_0x3a9160(0x1e6)]=function(){const _0x2c9347=_0x3a9160;this[_0x2c9347(0x154)](),this[_0x2c9347(0x276)](),this[_0x2c9347(0x11f)](),this[_0x2c9347(0x26a)]();},BattleManager[_0x3a9160(0x154)]=function(){const _0x44c919=_0x3a9160;$gameParty[_0x44c919(0x2ae)](),$gameParty[_0x44c919(0x198)]();},BattleManager[_0x3a9160(0x276)]=function(){const _0x7d1176=_0x3a9160;if(this['isBypassVictoryAftermathMusic']())return;this['playVictoryMe'](),SoundManager[_0x7d1176(0x204)]();},BattleManager[_0x3a9160(0x185)]=function(){const _0x565fe6=_0x3a9160;return $gameSystem[_0x565fe6(0x2cf)]()[_0x565fe6(0x1a2)]||$gameSystem[_0x565fe6(0x2cf)]()[_0x565fe6(0x18f)];},BattleManager[_0x3a9160(0x11f)]=function(){const _0x9c724d=_0x3a9160;this[_0x9c724d(0x1b8)](),this['makeRewards'](),this['gainRewards']();},BattleManager['makeTempActors']=function(){const _0x161104=_0x3a9160;this[_0x161104(0x289)]=$gameParty[_0x161104(0x237)]()[_0x161104(0x25e)](_0x35fc18=>_0x35fc18['makeVictoryCopy']()),this[_0x161104(0x18a)]=JsonEx[_0x161104(0xed)](this[_0x161104(0x289)]);},BattleManager[_0x3a9160(0x26a)]=function(){const _0x418d17=_0x3a9160;this[_0x418d17(0x1e8)](),this[_0x418d17(0x1cc)](0x0),this[_0x418d17(0x29f)](_0x418d17(0x110)),this[_0x418d17(0x1fa)]=!![],this[_0x418d17(0x130)]()?this[_0x418d17(0x1e1)]():'gxlbK'!==_0x418d17(0x207)?this[_0x418d17(0x136)]():(this[_0x418d17(0x154)](),this[_0x418d17(0x276)](),this['processVictoryAftermathRewards'](),this[_0x418d17(0x26a)]());},BattleManager['checkVictoryAftermathAutoBattleAutoSkip']=function(){const _0x19c212=_0x3a9160,_0x4e59c8=VisuMZ[_0x19c212(0x191)][_0x19c212(0x15e)][_0x19c212(0x246)];_0x4e59c8[_0x19c212(0x125)]===undefined&&('UZATw'!==_0x19c212(0x1e2)?(this[_0x19c212(0x1b8)](),this['makeRewards'](),this[_0x19c212(0xec)]()):_0x4e59c8['AutoBattleAutoSkip']=!![]);if(_0x4e59c8[_0x19c212(0x125)]===!![]){if(_0x19c212(0x2a8)!==_0x19c212(0x2a8))return _0x49a8ca['AbilityPoints'][_0x19c212(0x1ac)][_0x19c212(0x15c)](_0x15d0b9[_0x19c212(0x1d1)](),_0x1a15bf['abilityPointsAbbr'],_0x5926ce[_0x19c212(0xf5)]);else this[_0x19c212(0x116)]=this[_0x19c212(0x165)];}},BattleManager['isBypassVictoryAftermathPhase']=function(){const _0x21e179=_0x3a9160;if(this[_0x21e179(0x116)])return!![];return $gameSystem[_0x21e179(0x2cf)]()[_0x21e179(0x18f)];},BattleManager[_0x3a9160(0x1e1)]=function(){const _0x43b4a0=_0x3a9160,_0xf8c7f7=VisuMZ[_0x43b4a0(0x191)][_0x43b4a0(0x15e)][_0x43b4a0(0x246)],_0x552935=SceneManager[_0x43b4a0(0x263)];setTimeout(_0x552935['finishVictoryPhase'][_0x43b4a0(0x2ac)](_0x552935),_0xf8c7f7[_0x43b4a0(0x12d)]);},BattleManager['processVictoryAftermathTransition']=function(){const _0x2146df=_0x3a9160,_0x32ef28=VisuMZ[_0x2146df(0x191)][_0x2146df(0x15e)][_0x2146df(0x246)],_0x18ea66=SceneManager['_scene'];this[_0x2146df(0x113)]=this[_0x2146df(0x119)][_0x2146df(0x250)]/(BattleManager['_victoryUpdateDuration']||0x1),Window_StatusBase[_0x2146df(0x164)][_0x2146df(0x1c2)](),setTimeout(_0x18ea66[_0x2146df(0x14d)][_0x2146df(0x2ac)](_0x18ea66),_0x32ef28['HideDelayMS']),setTimeout(_0x18ea66['createVictoryAftermathWindows'][_0x2146df(0x2ac)](_0x18ea66),_0x32ef28['ShowDelayMS']);},BattleManager[_0x3a9160(0x278)]=function(){const _0x521e4d=_0x3a9160;for(;;){if(_0x521e4d(0x12f)!==_0x521e4d(0x12f))return this[_0x521e4d(0x245)]()[_0x521e4d(0x275)]>0x0?_0x209b9d[_0x521e4d(0x277)](this[_0x521e4d(0x1f5)])['format'](this[_0x521e4d(0x1f5)]['name']()):_0x3855d1['quoteLevelUp'](this['_actor'])[_0x521e4d(0x15c)](this['_actor'][_0x521e4d(0x226)]());else{this[_0x521e4d(0x12a)]++;if(this['_victoryActorIndex']>=$gameParty[_0x521e4d(0x23c)]())return null;const _0x3d03f1=$gameParty['battleMembers']()[this['_victoryActorIndex']],_0x1b6b30=this[_0x521e4d(0x18a)][this[_0x521e4d(0x12a)]];if(_0x3d03f1[_0x521e4d(0x29d)]!==_0x1b6b30[_0x521e4d(0x29d)])return _0x3d03f1;}}return null;},VisuMZ['VictoryAftermath']['Game_System_initialize']=Game_System[_0x3a9160(0x164)]['initialize'],Game_System['prototype']['initialize']=function(){const _0x1265f4=_0x3a9160;VisuMZ[_0x1265f4(0x191)]['Game_System_initialize']['call'](this),this[_0x1265f4(0x2ba)]();},Game_System[_0x3a9160(0x164)][_0x3a9160(0x2ba)]=function(){const _0x5e8b22=_0x3a9160;this[_0x5e8b22(0x262)]={'bypassVictoryMusic':![],'bypassVictoryPhase':![],'bypassVictoryMotion':![]};},Game_System[_0x3a9160(0x164)][_0x3a9160(0x2cf)]=function(){const _0x4e769c=_0x3a9160;if(this['_victoryAftermathSettings']===undefined)this[_0x4e769c(0x2ba)]();return this['_victoryAftermathSettings'];},VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x216)]=Game_Actor['prototype']['setup'],Game_Actor[_0x3a9160(0x164)][_0x3a9160(0x2c2)]=function(_0x22fc92){const _0x3d578b=_0x3a9160;VisuMZ[_0x3d578b(0x191)]['Game_Actor_setup'][_0x3d578b(0x2aa)](this,_0x22fc92),this[_0x3d578b(0x1f0)]();},Game_Actor[_0x3a9160(0x164)]['setupVictoryAftermathQuotes']=function(){const _0x53a6ad=_0x3a9160;this['_victoryAftermathLevelUpQuotes']=[],this[_0x53a6ad(0x105)]=[];const _0x272a75=this[_0x53a6ad(0x16e)]()['note'];if(_0x272a75[_0x53a6ad(0x14c)](/<LEVEL UP (?:QUOTE|QUOTES)>\s*([\s\S]*)\s*<\/LEVEL UP (?:QUOTE|QUOTES)>/i)){if(_0x53a6ad(0x2b7)===_0x53a6ad(0x2b7))this[_0x53a6ad(0x1ee)]=String(RegExp['$1'])[_0x53a6ad(0x172)](/<NEW QUOTE>[\r\n]+/i);else return _0x28c82c['VisuMZ_0_CoreEngine']?_0x4f48a7[_0x53a6ad(0x2af)][_0x53a6ad(0x15e)][_0x53a6ad(0x1fb)]['ExtDisplayedParams']:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];}_0x272a75[_0x53a6ad(0x14c)](/<NEW SKILL (?:QUOTE|QUOTES)>\s*([\s\S]*)\s*<\/NEW SKILL (?:QUOTE|QUOTES)>/i)&&(_0x53a6ad(0xf1)===_0x53a6ad(0x190)?this['_victoryAftermathSettings']={'bypassVictoryMusic':![],'bypassVictoryPhase':![],'bypassVictoryMotion':![]}:this[_0x53a6ad(0x105)]=String(RegExp['$1'])[_0x53a6ad(0x172)](/<NEW QUOTE>[\r\n]+/i));},Game_Actor['prototype']['levelUpQuotes']=function(){const _0xe23aa6=_0x3a9160;if(this['_victoryAftermathLevelUpQuotes']===undefined)this['setupVictoryAftermathQuotes']();return this[_0xe23aa6(0x1ee)];},Game_Actor['prototype'][_0x3a9160(0x291)]=function(){const _0x40fec7=_0x3a9160;if(this['_victoryAftermathNewSkillQuotes']===undefined)this[_0x40fec7(0x1f0)]();return this[_0x40fec7(0x105)];},Game_Actor[_0x3a9160(0x164)]['expRate']=function(){const _0xdf210e=_0x3a9160;if(this['isMaxLevel']())return 0x1;const _0xd56621=this['nextLevelExp']()-this[_0xdf210e(0x141)](),_0x5e5ea0=this['currentExp']()-this['currentLevelExp']();return(_0x5e5ea0/_0xd56621)['clamp'](0x0,0x1);},VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x13a)]=Game_Actor[_0x3a9160(0x164)]['shouldDisplayLevelUp'],Game_Actor[_0x3a9160(0x164)][_0x3a9160(0x228)]=function(){const _0x5791d2=_0x3a9160;return SceneManager['isSceneBattle']()?![]:VisuMZ['VictoryAftermath'][_0x5791d2(0x13a)][_0x5791d2(0x2aa)](this);},Game_Actor[_0x3a9160(0x164)][_0x3a9160(0x283)]=function(){const _0x631b83=_0x3a9160,_0x426553=JsonEx['makeDeepCopy'](this);return _0x426553[_0x631b83(0x25f)]=!![],_0x426553;},VisuMZ['VictoryAftermath'][_0x3a9160(0xe6)]=Game_Actor['prototype'][_0x3a9160(0x2c7)],Game_Actor[_0x3a9160(0x164)][_0x3a9160(0x2c7)]=function(){const _0x40e24f=_0x3a9160;if(this[_0x40e24f(0x25f)])return!![];else{if('DwVNB'!=='jUrkp')return VisuMZ[_0x40e24f(0x191)][_0x40e24f(0xe6)][_0x40e24f(0x2aa)](this);else{this[_0x40e24f(0x25b)]();const _0x499cb=this[_0x40e24f(0x245)]();if(_0x499cb[_0x40e24f(0x275)]<=0x0)return;const _0x14a045=_0x23316a[_0x40e24f(0x191)][_0x40e24f(0x15e)][_0x40e24f(0x152)][_0x40e24f(0x14a)];while(_0x499cb[_0x40e24f(0x275)]>_0x14a045){_0x499cb[_0x40e24f(0x24f)]();}this[_0x40e24f(0x2d7)](_0x499cb),this[_0x40e24f(0x1f8)](_0x499cb);}}},VisuMZ[_0x3a9160(0x191)]['Game_Actor_performVictory']=Game_Actor[_0x3a9160(0x164)][_0x3a9160(0x198)],Game_Actor[_0x3a9160(0x164)][_0x3a9160(0x198)]=function(){const _0x6246c9=_0x3a9160;this[_0x6246c9(0xf7)]()?this[_0x6246c9(0x1b4)](_0x6246c9(0x29e)):VisuMZ[_0x6246c9(0x191)][_0x6246c9(0x282)][_0x6246c9(0x2aa)](this);},Game_Actor[_0x3a9160(0x164)][_0x3a9160(0xf7)]=function(){const _0x9e7fbf=_0x3a9160;return $gameSystem[_0x9e7fbf(0x2cf)]()[_0x9e7fbf(0x27f)]||$gameSystem[_0x9e7fbf(0x2cf)]()['bypassVictoryPhase'];},Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0x14d)]=function(){const _0x26089b=_0x3a9160;if(this[_0x26089b(0x122)][_0x26089b(0x2ce)]()){if('ZZJlF'==='PKRFN')this[_0x26089b(0x176)][_0x26089b(0x175)](),this[_0x26089b(0x25b)](),this['drawActorName'](),this[_0x26089b(0x151)](),this['drawActorAdditionalRewards'](),this['drawExpGauge'](),this[_0x26089b(0x12b)]();else return setTimeout(this[_0x26089b(0x14d)][_0x26089b(0x2ac)](this),0x7d0);}if(!SceneManager[_0x26089b(0x1a1)]())return;this[_0x26089b(0x26f)](![]),this[_0x26089b(0x281)](),this[_0x26089b(0x21f)](),this[_0x26089b(0x188)]['y']=Graphics[_0x26089b(0x1bd)]*0xa;},Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0x2a2)]=function(){const _0x534240=_0x3a9160;if(this[_0x534240(0x122)]['isCollapsing']())return _0x534240(0x231)!==_0x534240(0x2b1)?setTimeout(this[_0x534240(0x2a2)][_0x534240(0x2ac)](this),0x7d0):_0x535065[_0x534240(0x163)](this[_0x534240(0x1f5)])[_0x534240(0x15c)](this[_0x534240(0x1f5)][_0x534240(0x226)]());this[_0x534240(0x182)]=[],this[_0x534240(0xe9)](),this[_0x534240(0x1ec)](),this[_0x534240(0xfb)]();},Scene_Battle[_0x3a9160(0x164)]['createVictorySteps']=function(){const _0x400b5d=_0x3a9160;this[_0x400b5d(0x2a4)]=[],this['createVictoryStepRewards'](),this[_0x400b5d(0x13b)]();},Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0x17b)]=function(){const _0x116fa0=_0x3a9160;this[_0x116fa0(0x2a4)][_0x116fa0(0x16b)](_0x116fa0(0x227));},Scene_Battle[_0x3a9160(0x164)]['createVictoryStepLevelUps']=function(){const _0x1b7b0e=_0x3a9160;if(!this[_0x1b7b0e(0x24d)]())return;for(const _0x596181 of $gameParty[_0x1b7b0e(0x237)]()){if(!_0x596181)continue;const _0x5e2109=BattleManager[_0x1b7b0e(0x289)][_0x596181[_0x1b7b0e(0x17f)]()];_0x596181[_0x1b7b0e(0x29d)]>_0x5e2109['level']&&this['onVictoryStepLevelUpMember'](_0x596181);}},Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0x201)]=function(_0x1eb990){const _0x227f7c=_0x3a9160;Imported[_0x227f7c(0x271)]&&Window_VictoryLevelUp[_0x227f7c(0x128)]&&('VXokD'!==_0x227f7c(0x2a7)?ImageManager['loadPicture'](_0x1eb990[_0x227f7c(0x15f)]()):(this[_0x227f7c(0x2c9)]=_0x207718,this[_0x227f7c(0x2ca)]=0x0)),this[_0x227f7c(0x2a4)][_0x227f7c(0x16b)](_0x227f7c(0x2a9));},Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0x24d)]=function(){const _0x35171d=_0x3a9160;return VisuMZ[_0x35171d(0x191)]['Settings'][_0x35171d(0x152)][_0x35171d(0x1c0)];},Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0xfb)]=function(){const _0xdce24f=_0x3a9160;this[_0xdce24f(0x21e)]=this[_0xdce24f(0x2a4)][_0xdce24f(0x20a)]()||'',this[_0xdce24f(0x28c)]();},Scene_Battle['prototype']['processVictoryStep']=function(){const _0x7e215e=_0x3a9160;switch(this[_0x7e215e(0x21e)][_0x7e215e(0x150)]()[_0x7e215e(0x28a)]()){case'rewards':this[_0x7e215e(0x1ea)](),this[_0x7e215e(0x1fc)][_0x7e215e(0x1f2)](BattleManager[_0x7e215e(0x299)]);break;case _0x7e215e(0x2a9):this[_0x7e215e(0x138)](),this[_0x7e215e(0x28e)](),this[_0x7e215e(0x1fc)][_0x7e215e(0x1f2)](0x0);break;default:this[_0x7e215e(0x1d7)]();break;}this['addChild'](this['_victoryContinueWindow']);},Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0x100)]=function(){const _0x439af6=_0x3a9160,_0xe28f2a=Window_Base[_0x439af6(0x164)][_0x439af6(0x239)](),_0x5ba55a=Math[_0x439af6(0x241)](Graphics[_0x439af6(0x1c4)]/0x2)-0x64,_0x1bbef9=Math['round'](Graphics[_0x439af6(0x1bd)]-_0xe28f2a*1.25),_0xcb356a=Math[_0x439af6(0x241)](Graphics[_0x439af6(0x1c4)]/0x2),_0x4a1860=_0xe28f2a;return new Rectangle(_0x5ba55a,_0x1bbef9,_0xcb356a,_0x4a1860);},Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0x131)]=function(){const _0x13d470=_0x3a9160,_0x36c397=0x0,_0x2539ea=0x0,_0x502ca7=Graphics[_0x13d470(0x1c4)],_0x58f0fe=Graphics[_0x13d470(0x1bd)];return new Rectangle(_0x36c397,_0x2539ea,_0x502ca7,_0x58f0fe);},Scene_Battle[_0x3a9160(0x164)]['createVictoryContinueMessageWindow']=function(){const _0x5f15aa=_0x3a9160;if(this[_0x5f15aa(0x1fc)])return;const _0x2696bf=this[_0x5f15aa(0x100)](),_0x241211=new Window_VictoryContinueMessage(_0x2696bf);this[_0x5f15aa(0x244)](_0x241211),this[_0x5f15aa(0x182)][_0x5f15aa(0x16b)](_0x241211),this[_0x5f15aa(0x1fc)]=_0x241211;},Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0x1ea)]=function(){const _0xe62c69=_0x3a9160;if(this['_victoryRewardsWindow'])return;const _0x47ab14=this[_0xe62c69(0x131)](),_0x2961ec=new Window_VictoryRewards(_0x47ab14);this[_0xe62c69(0x244)](_0x2961ec),this['_victoryWindows'][_0xe62c69(0x16b)](_0x2961ec),this[_0xe62c69(0xf3)]=_0x2961ec;},Scene_Battle['prototype'][_0x3a9160(0x138)]=function(){const _0x5242a4=_0x3a9160;if(this[_0x5242a4(0x2c4)])return;const _0x1be544=this['victoryFullScreenWindowRect'](),_0x1c372c=new Window_VictoryLevelUp(_0x1be544);this[_0x5242a4(0x244)](_0x1c372c),this['_victoryWindows']['push'](_0x1c372c),this[_0x5242a4(0x2c4)]=_0x1c372c;},Scene_Battle['prototype'][_0x3a9160(0x28e)]=function(){const _0x1fd44c=_0x3a9160,_0x433f76=BattleManager[_0x1fd44c(0x278)]();this[_0x1fd44c(0x2c4)][_0x1fd44c(0x153)](_0x433f76),Imported[_0x1fd44c(0x27c)]&&_0x433f76['playBattleVoice'](_0x1fd44c(0x184));},Scene_Battle['prototype'][_0x3a9160(0x1d7)]=function(){BattleManager['replayBgmAndBgs'](),BattleManager['_victoryPhase']=![];};Imported[_0x3a9160(0x270)]&&(VisuMZ['VictoryAftermath']['Scene_Battle_allowUpdateBattleAniSpeed']=Scene_Battle[_0x3a9160(0x164)][_0x3a9160(0x19a)],Scene_Battle['prototype'][_0x3a9160(0x19a)]=function(){const _0x327906=_0x3a9160;if(BattleManager['isVictoryPhase']())return![];return VisuMZ[_0x327906(0x191)][_0x327906(0x2d3)][_0x327906(0x2aa)](this);});;Scene_Battle[_0x3a9160(0x164)]['isVictoryContinueReady']=function(){const _0xd14a48=_0x3a9160;return this['_victoryContinueWindow']&&this[_0xd14a48(0x1fc)][_0xd14a48(0x11c)]();},VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x196)]=Scene_Battle['prototype'][_0x3a9160(0x2d8)],Scene_Battle['prototype']['update']=function(){const _0x4dbcd4=_0x3a9160;VisuMZ[_0x4dbcd4(0x191)]['Scene_Battle_update'][_0x4dbcd4(0x2aa)](this),this[_0x4dbcd4(0x111)]();},Scene_Battle['prototype'][_0x3a9160(0x111)]=function(){const _0xfb3557=_0x3a9160;if(!BattleManager[_0xfb3557(0x2b3)]())return;if(!this['isVictoryContinueReady']())return;(Input[_0xfb3557(0x253)]('ok')||Input[_0xfb3557(0x253)](_0xfb3557(0x147))||TouchInput[_0xfb3557(0x253)]())&&(Input['clear'](),TouchInput[_0xfb3557(0x175)](),this[_0xfb3557(0xfb)]());},Sprite_Enemy[_0x3a9160(0x164)]['isCollapsing']=function(){const _0xca7e13=_0x3a9160,_0x35db3b=VisuMZ[_0xca7e13(0x191)][_0xca7e13(0x15e)][_0xca7e13(0x246)];if(this[_0xca7e13(0x106)]===_0xca7e13(0x264)){if(_0xca7e13(0x1bc)!==_0xca7e13(0x2ad)){if(_0x35db3b[_0xca7e13(0x10e)]!==undefined){if(_0xca7e13(0x10a)!=='bLlfd')this['_index']=_0xd1946,this['_mainWindow']=_0x146a42,this[_0xca7e13(0x1f3)]=_0x2e913d,_0xe0257c[_0xca7e13(0x164)][_0xca7e13(0x236)][_0xca7e13(0x2aa)](this),this['initMembers'](),this[_0xca7e13(0x1c7)](),this[_0xca7e13(0x232)](),this['updateOpacity']();else return _0x35db3b[_0xca7e13(0x10e)];}}else{const _0x2e3b35=_0x5dfa5f[_0xca7e13(0x191)]['Settings'][_0xca7e13(0x246)];_0x2e3b35[_0xca7e13(0x125)]===_0x1da739&&(_0x2e3b35[_0xca7e13(0x125)]=!![]),_0x2e3b35[_0xca7e13(0x125)]===!![]&&(this[_0xca7e13(0x116)]=this[_0xca7e13(0x165)]);}}else{if(this[_0xca7e13(0x106)]==='bossCollapse'){if(_0x35db3b[_0xca7e13(0x1a6)]!==undefined)return'cVhUg'===_0xca7e13(0x193)?!![]:_0x35db3b['WaitBossCollapse'];}}return['collapse','bossCollapse']['includes']();},Sprite_Battler['prototype']['isCollapsing']=function(){return![];},Spriteset_Battle[_0x3a9160(0x164)]['isCollapsing']=function(){const _0x43150d=_0x3a9160;return this[_0x43150d(0x180)]()[_0x43150d(0x1e0)](_0x801b9e=>_0x801b9e[_0x43150d(0x2ce)]());};function Sprite_VictoryGauge(){this['initialize'](...arguments);}Sprite_VictoryGauge[_0x3a9160(0x164)]=Object[_0x3a9160(0x1dc)](Sprite['prototype']),Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x218)]=Sprite_VictoryGauge,Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x236)]=function(_0x12cf95,_0x4ae004,_0x1471c){const _0x2dfc16=_0x3a9160;this[_0x2dfc16(0x142)]=_0x12cf95,this[_0x2dfc16(0x11b)]=_0x4ae004,this[_0x2dfc16(0x1f3)]=_0x1471c,Sprite[_0x2dfc16(0x164)][_0x2dfc16(0x236)][_0x2dfc16(0x2aa)](this),this[_0x2dfc16(0x280)](),this[_0x2dfc16(0x1c7)](),this['refresh'](),this['updateOpacity']();},Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x280)]=function(){const _0x599f17=_0x3a9160;this[_0x599f17(0x1e9)]=BattleManager[_0x599f17(0x299)],this[_0x599f17(0x155)]=this[_0x599f17(0x16e)]()['level'],this['_showLevelUp']=![];},Sprite_VictoryGauge['prototype'][_0x3a9160(0x1c7)]=function(){const _0x2af775=_0x3a9160;this[_0x2af775(0x176)]=new Bitmap(this[_0x2af775(0x1f3)],this['lineHeight']()*0x2);},Sprite_VictoryGauge['prototype']['lineHeight']=function(){const _0x416850=_0x3a9160;return Window_Base[_0x416850(0x164)][_0x416850(0x239)]();},Sprite_VictoryGauge['prototype'][_0x3a9160(0x16e)]=function(){return BattleManager['_victoryTempActorsA'][this['_index']];},Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x2d8)]=function(){const _0x10d892=_0x3a9160;Sprite['prototype'][_0x10d892(0x2d8)]['call'](this),this[_0x10d892(0x171)](),this[_0x10d892(0xeb)]();},Sprite_VictoryGauge[_0x3a9160(0x164)]['updateExpGain']=function(){const _0x284423=_0x3a9160;if(this[_0x284423(0x1e9)]<=0x0)return;const _0x2bcf25=this['actor']();this['_duration']--;this[_0x284423(0x1dd)]()&&(this[_0x284423(0x1e9)]=0x0);if(this[_0x284423(0x1e9)]<=0x0){const _0x20f7a3=$gameActors[_0x284423(0x16e)](_0x2bcf25[_0x284423(0x1eb)]);_0x2bcf25[_0x284423(0x290)](_0x20f7a3['currentExp'](),![]);}else _0x2bcf25[_0x284423(0x135)](BattleManager[_0x284423(0x113)]);this[_0x284423(0x155)]!==_0x2bcf25[_0x284423(0x29d)]&&(this[_0x284423(0x155)]=_0x2bcf25[_0x284423(0x29d)],this[_0x284423(0x2a1)]=!![],SoundManager[_0x284423(0x1ae)]()),this['refresh']();},Game_Actor['prototype'][_0x3a9160(0x135)]=function(_0x422995){const _0x75bf9=_0x3a9160,_0x26bb38=this[_0x75bf9(0x192)]()+_0x422995*this[_0x75bf9(0x2b9)]();this[_0x75bf9(0x290)](_0x26bb38,this[_0x75bf9(0x228)]());},Sprite_VictoryGauge['prototype']['isFastForwarded']=function(){const _0x116f87=_0x3a9160;return SceneManager[_0x116f87(0x263)][_0x116f87(0x1e3)]();},Sprite_VictoryGauge[_0x3a9160(0x164)]['updateOpacity']=function(){const _0x52a265=_0x3a9160;this['opacity']=this[_0x52a265(0x11b)][_0x52a265(0x2ca)];},Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x232)]=function(){const _0x5be2df=_0x3a9160;this[_0x5be2df(0x176)][_0x5be2df(0x175)](),this[_0x5be2df(0x25b)](),this[_0x5be2df(0x266)](),this[_0x5be2df(0x151)](),this['drawActorAdditionalRewards'](),this[_0x5be2df(0x17c)](),this[_0x5be2df(0x12b)]();},Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x25b)]=function(){const _0x2da875=_0x3a9160;this[_0x2da875(0x176)][_0x2da875(0x274)]=$gameSystem[_0x2da875(0x2bf)](),this[_0x2da875(0x176)][_0x2da875(0x210)]=$gameSystem[_0x2da875(0x15b)](),this[_0x2da875(0x176)]['textColor']=ColorManager[_0x2da875(0x1bb)]();},Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x266)]=function(){const _0x4213fb=_0x3a9160;this[_0x4213fb(0x25b)]();const _0x2b3927=this[_0x4213fb(0x239)](),_0x1e4521=Math['round'](_0x2b3927/0x2),_0xe41976=0x0,_0x275555=this[_0x4213fb(0x176)][_0x4213fb(0x1c4)]-_0x2b3927,_0x33cacb=_0x4213fb(0x16c),_0x54204f=this[_0x4213fb(0x16e)]()['name']();this[_0x4213fb(0x176)][_0x4213fb(0x2cb)](_0x54204f,_0x1e4521,_0xe41976,_0x275555,_0x2b3927,_0x33cacb);},Sprite_VictoryGauge[_0x3a9160(0x164)]['drawActorLevel']=function(){const _0x5730ef=_0x3a9160;this[_0x5730ef(0x25b)]();const _0x49773e=this[_0x5730ef(0x239)](),_0x295f66=Math['round'](_0x49773e/0x2),_0x217dca=0x0,_0x2b392f=this[_0x5730ef(0x176)]['width']-_0x49773e,_0x4b0e88=this[_0x5730ef(0x137)]()===''?'right':_0x5730ef(0x22f),_0xd73528=TextManager['victoryDisplayLvFmt'][_0x5730ef(0x15c)](this[_0x5730ef(0x16e)]()['level']);this[_0x5730ef(0x2a1)]&&(this[_0x5730ef(0x176)][_0x5730ef(0x284)]=ColorManager[_0x5730ef(0x1d2)]()),this[_0x5730ef(0x176)][_0x5730ef(0x2cb)](_0xd73528,_0x295f66,_0x217dca,_0x2b392f,_0x49773e,_0x4b0e88);},Sprite_VictoryGauge['prototype'][_0x3a9160(0x137)]=function(){const _0x53bfec=_0x3a9160,_0x5204f0=$gameParty['members']()[this[_0x53bfec(0x142)]];if(!_0x5204f0)return'';if(Imported[_0x53bfec(0x1d5)]&&VisuMZ[_0x53bfec(0x16d)]['Settings'][_0x53bfec(0x19f)]['AftermathActorDisplay'])return VisuMZ['Template']['Settings']['JobPoints']['AftermathText'][_0x53bfec(0x15c)](_0x5204f0[_0x53bfec(0x26b)](),TextManager['jobPointsAbbr'],TextManager[_0x53bfec(0x2b6)]);if(Imported[_0x53bfec(0x28d)]){const _0x2fdeb2=VisuMZ['ClassChangeSystem'][_0x53bfec(0x15e)];if(_0x2fdeb2['ClassPoints']['AftermathActorDisplay'])return _0x2fdeb2[_0x53bfec(0x1b5)][_0x53bfec(0x1ac)][_0x53bfec(0x15c)](_0x5204f0[_0x53bfec(0x1d4)](),TextManager[_0x53bfec(0x1b0)],TextManager['classPointsFull']);if(_0x2fdeb2['JobPoints'][_0x53bfec(0x213)])return _0x53bfec(0x139)===_0x53bfec(0x139)?_0x2fdeb2[_0x53bfec(0x19f)][_0x53bfec(0x1ac)]['format'](_0x5204f0['earnedJobPoints'](),TextManager['jobPointsAbbr'],TextManager[_0x53bfec(0x2b6)]):0x1;}if(Imported[_0x53bfec(0x101)]){if(_0x53bfec(0x248)!==_0x53bfec(0x23d)){const _0x296031=VisuMZ[_0x53bfec(0x2b0)][_0x53bfec(0x15e)];if(_0x296031[_0x53bfec(0x1cb)]['AftermathActorDisplay'])return _0x296031[_0x53bfec(0x1cb)][_0x53bfec(0x1ac)][_0x53bfec(0x15c)](_0x5204f0[_0x53bfec(0x1d1)](),TextManager[_0x53bfec(0xfc)],TextManager[_0x53bfec(0xf5)]);if(_0x296031[_0x53bfec(0x134)][_0x53bfec(0x213)])return _0x296031[_0x53bfec(0x134)][_0x53bfec(0x1ac)][_0x53bfec(0x15c)](_0x5204f0[_0x53bfec(0x12c)](),TextManager[_0x53bfec(0x2d1)],TextManager[_0x53bfec(0x1ed)]);}else return _0x784bda[_0x53bfec(0x164)][_0x53bfec(0x239)]();}return'';},Sprite_VictoryGauge['prototype']['drawActorAdditionalRewards']=function(){const _0x4b787d=_0x3a9160;this['resetFontSettings']();const _0x555836=this[_0x4b787d(0x239)](),_0x577851=Math['round'](_0x555836/0x2),_0x82b014=0x0,_0x5d4f13=this[_0x4b787d(0x176)][_0x4b787d(0x1c4)]-_0x555836,_0x458638=_0x4b787d(0x24a);let _0x2abb96=this['getAdditionalRewardsText']();this[_0x4b787d(0x176)][_0x4b787d(0x2cb)](_0x2abb96,_0x577851,_0x82b014,_0x5d4f13,_0x555836,_0x458638);},Sprite_VictoryGauge['prototype'][_0x3a9160(0x17c)]=function(){const _0x47f960=_0x3a9160,_0x34325a=this['lineHeight'](),_0x52ba2e=this['bitmap'][_0x47f960(0x1c4)]-_0x34325a,_0x232ebb=Sprite_Gauge['prototype'][_0x47f960(0x11e)](),_0x360075=Math['round'](_0x34325a/0x2),_0x14927c=_0x34325a*0x2-_0x232ebb-0x2,_0x4636a2=Math[_0x47f960(0x214)]((_0x52ba2e-0x2)*this[_0x47f960(0x16e)]()[_0x47f960(0x10b)]()),_0x551ffe=_0x232ebb-0x2,_0x252b5a=this['gaugeBackColor'](),_0x186b93=this[_0x47f960(0x1da)](),_0x274109=this[_0x47f960(0x2b2)]();if(Imported[_0x47f960(0x195)]){if(_0x47f960(0x209)!=='AngdL'){const _0x1522dc=VisuMZ['VisualGaugeStyles'][_0x47f960(0x15e)][_0x47f960(0x2ab)]??_0x47f960(0x285);this[_0x47f960(0x176)][_0x47f960(0x13d)](_0x1522dc,_0x360075,_0x14927c,_0x52ba2e,_0x232ebb,this[_0x47f960(0x16e)]()['expRate'](),_0x252b5a,_0x186b93,_0x274109);}else this['_victoryStep']=this[_0x47f960(0x2a4)]['shift']()||'',this[_0x47f960(0x28c)]();}else _0x47f960(0x230)===_0x47f960(0x230)?(this['bitmap'][_0x47f960(0x2c1)](_0x360075,_0x14927c,_0x52ba2e,_0x232ebb,_0x252b5a),this[_0x47f960(0x176)][_0x47f960(0x294)](_0x360075+0x1,_0x14927c+0x1,_0x4636a2,_0x551ffe,_0x186b93,_0x274109)):this['_colorCache'][_0x3497d5]=_0x47f960(0x267)[_0x47f960(0x15c)](_0x4125bd(_0x16358a['$1']));},Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x1c1)]=function(){const _0x19ea78=_0x3a9160;return ColorManager[_0x19ea78(0x1c1)]();},Sprite_VictoryGauge['prototype']['gaugeColor1']=function(){const _0x4d3019=_0x3a9160;if(this['actor']()[_0x4d3019(0x1d3)]())return _0x4d3019(0x297)!==_0x4d3019(0x297)?[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7]:Imported[_0x4d3019(0xfe)]?ColorManager[_0x4d3019(0x1a9)]():ColorManager['textColor'](0xe);else{if(_0x4d3019(0x23a)!=='kcdVA')return Imported[_0x4d3019(0xfe)]?ColorManager[_0x4d3019(0x22d)]():ColorManager[_0x4d3019(0x284)](0x1e);else{if(this[_0x4d3019(0x1fc)])return;const _0x10e45d=this[_0x4d3019(0x100)](),_0x3275ea=new _0x5530eb(_0x10e45d);this[_0x4d3019(0x244)](_0x3275ea),this['_victoryWindows']['push'](_0x3275ea),this['_victoryContinueWindow']=_0x3275ea;}}},Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x2b2)]=function(){const _0x2b9783=_0x3a9160;return this['actor']()['isMaxLevel']()?Imported[_0x2b9783(0xfe)]?ColorManager[_0x2b9783(0x20d)]():ColorManager['textColor'](0x6):Imported[_0x2b9783(0xfe)]?ColorManager[_0x2b9783(0x222)]():ColorManager[_0x2b9783(0x284)](0x1f);},Sprite_VictoryGauge[_0x3a9160(0x164)][_0x3a9160(0x12b)]=function(){const _0x4ddcbe=_0x3a9160;this[_0x4ddcbe(0x25b)]();const _0x557931=this[_0x4ddcbe(0x239)](),_0x3c8112=_0x557931,_0x11107e=_0x557931;let _0x179298=this[_0x4ddcbe(0x176)][_0x4ddcbe(0x1c4)]-_0x557931*0x2;const _0x1c7a80=this['actor']();let _0x409919=Math['round'](_0x1c7a80[_0x4ddcbe(0x192)]()-_0x1c7a80[_0x4ddcbe(0x141)]()),_0x27ee95='/'+Math[_0x4ddcbe(0x241)](_0x1c7a80['nextLevelExp']()-_0x1c7a80[_0x4ddcbe(0x141)]());Imported['VisuMZ_0_CoreEngine']&&VisuMZ[_0x4ddcbe(0x2af)][_0x4ddcbe(0x15e)][_0x4ddcbe(0x1e5)][_0x4ddcbe(0x1df)]&&(_0x409919=VisuMZ[_0x4ddcbe(0x19e)](_0x409919),_0x27ee95=VisuMZ[_0x4ddcbe(0x19e)](_0x27ee95));if(this[_0x4ddcbe(0x2a1)]){if(_0x4ddcbe(0x19d)!=='dVSDV')return _0x406e66[_0x4ddcbe(0x191)]['Game_Actor_isBattleMember'][_0x4ddcbe(0x2aa)](this);else this[_0x4ddcbe(0x176)]['textColor']=ColorManager[_0x4ddcbe(0x143)](),this[_0x4ddcbe(0x176)][_0x4ddcbe(0x2cb)](TextManager[_0x4ddcbe(0x238)],_0x3c8112,_0x11107e,_0x179298,_0x557931,_0x4ddcbe(0x16c));}else this['bitmap'][_0x4ddcbe(0x2cb)](TextManager[_0x4ddcbe(0x250)],_0x3c8112,_0x11107e,_0x179298,_0x557931,_0x4ddcbe(0x16c));this['resetFontSettings']();if(_0x1c7a80['isMaxLevel']()){this[_0x4ddcbe(0x176)][_0x4ddcbe(0x2cb)](_0x4ddcbe(0x200),_0x3c8112,_0x11107e,_0x179298,_0x557931,_0x4ddcbe(0x24a));return;}this[_0x4ddcbe(0x176)][_0x4ddcbe(0x210)]-=0x8,this[_0x4ddcbe(0x176)][_0x4ddcbe(0x284)]=ColorManager['textColor'](0x8),this[_0x4ddcbe(0x176)][_0x4ddcbe(0x2cb)](_0x27ee95,_0x3c8112,_0x11107e,_0x179298,_0x557931,_0x4ddcbe(0x24a)),_0x179298-=this[_0x4ddcbe(0x176)][_0x4ddcbe(0x160)](_0x27ee95),this[_0x4ddcbe(0x25b)](),this[_0x4ddcbe(0x176)][_0x4ddcbe(0x2cb)](_0x409919,_0x3c8112,_0x11107e,_0x179298,_0x557931,'right');};function Window_VictoryContinueMessage(){const _0x4c6c52=_0x3a9160;this[_0x4c6c52(0x236)](...arguments);}Window_VictoryContinueMessage[_0x3a9160(0x164)]=Object[_0x3a9160(0x1dc)](Window_Base['prototype']),Window_VictoryContinueMessage[_0x3a9160(0x164)][_0x3a9160(0x218)]=Window_VictoryContinueMessage,Window_VictoryContinueMessage[_0x3a9160(0x164)][_0x3a9160(0x236)]=function(_0xc83835){const _0xa3df77=_0x3a9160;Window_Base[_0xa3df77(0x164)][_0xa3df77(0x236)][_0xa3df77(0x2aa)](this,_0xc83835),this[_0xa3df77(0x16a)](0x2),this[_0xa3df77(0x232)]();},Window_VictoryContinueMessage[_0x3a9160(0x164)][_0x3a9160(0x1f2)]=function(_0x264be3){const _0x45f4c5=_0x3a9160;this[_0x45f4c5(0x2c9)]=_0x264be3,this[_0x45f4c5(0x2ca)]=0x0;},Window_VictoryContinueMessage[_0x3a9160(0x164)]['updatePadding']=function(){const _0xe4241a=_0x3a9160;this[_0xe4241a(0x1f4)]=0x0;},Window_VictoryContinueMessage[_0x3a9160(0x164)]['update']=function(){const _0x234a9b=_0x3a9160;Window_Base[_0x234a9b(0x164)][_0x234a9b(0x2d8)][_0x234a9b(0x2aa)](this),this[_0x234a9b(0x295)]();},Window_VictoryContinueMessage[_0x3a9160(0x164)][_0x3a9160(0x295)]=function(){const _0x2530be=_0x3a9160;this['_delayDuration']>0x0&&this[_0x2530be(0x1dd)]()&&(this[_0x2530be(0x2c9)]=0x0,Input[_0x2530be(0x175)](),TouchInput[_0x2530be(0x175)]());if(this[_0x2530be(0x2c9)]-->0x0)return;this[_0x2530be(0x2ca)]+=Window_VictoryRewards['_opacitySpeed'];},Window_VictoryContinueMessage[_0x3a9160(0x164)][_0x3a9160(0x1dd)]=function(){const _0x4bc03c=_0x3a9160;return Input[_0x4bc03c(0x20c)]('ok')||Input[_0x4bc03c(0x20c)](_0x4bc03c(0x147))||TouchInput[_0x4bc03c(0x20c)]();},Window_VictoryContinueMessage[_0x3a9160(0x164)]['refresh']=function(){const _0x2f0cf0=_0x3a9160;this[_0x2f0cf0(0xf8)][_0x2f0cf0(0x175)]();const _0x3a7a64=TextManager[_0x2f0cf0(0x20b)];let _0x176d43=TextManager[_0x2f0cf0(0x1fd)],_0x1b3660=TextManager['victoryKeyCancel'];Imported[_0x2f0cf0(0xfe)]&&(_0x2f0cf0(0x1ff)===_0x2f0cf0(0x108)?_0x208803[_0x2f0cf0(0x191)][_0x2f0cf0(0x282)][_0x2f0cf0(0x2aa)](this):(_0x176d43=TextManager[_0x2f0cf0(0x183)]('ok'),_0x1b3660=TextManager[_0x2f0cf0(0x183)](_0x2f0cf0(0x147))));const _0x4a32ae=_0x3a7a64[_0x2f0cf0(0x15c)](_0x176d43,_0x1b3660),_0x26cacc=this[_0x2f0cf0(0x242)](_0x4a32ae)[_0x2f0cf0(0x1c4)],_0x10733a=Math[_0x2f0cf0(0x241)]((this['innerWidth']-_0x26cacc)/0x2);this['drawTextEx'](_0x4a32ae,_0x10733a,0x0,_0x26cacc);},Window_VictoryContinueMessage[_0x3a9160(0x164)][_0x3a9160(0x11c)]=function(){const _0x22859e=_0x3a9160;return this[_0x22859e(0x2c9)]<=0x0;};function Window_VictoryRewards(){const _0x3eda0a=_0x3a9160;this[_0x3eda0a(0x236)](...arguments);}Window_VictoryRewards[_0x3a9160(0x118)]=VisuMZ[_0x3a9160(0x191)]['Settings'][_0x3a9160(0x246)][_0x3a9160(0x27e)],Window_VictoryRewards['prototype']=Object[_0x3a9160(0x1dc)](Window_StatusBase['prototype']),Window_VictoryRewards['prototype'][_0x3a9160(0x218)]=Window_VictoryRewards,Window_VictoryRewards[_0x3a9160(0x164)][_0x3a9160(0x236)]=function(_0x1729b4){const _0xbd9e01=_0x3a9160;Window_StatusBase[_0xbd9e01(0x164)][_0xbd9e01(0x236)][_0xbd9e01(0x2aa)](this,_0x1729b4),this[_0xbd9e01(0x16a)](0x2),this['contentsOpacity']=0x0,this[_0xbd9e01(0x232)]();},Window_VictoryRewards[_0x3a9160(0x164)]['updatePadding']=function(){const _0x48487f=_0x3a9160;this[_0x48487f(0x1f4)]=0x0;},Window_VictoryRewards[_0x3a9160(0x164)][_0x3a9160(0x2d8)]=function(){const _0x455383=_0x3a9160;Window_StatusBase['prototype'][_0x455383(0x2d8)][_0x455383(0x2aa)](this),this[_0x455383(0x295)]();},Window_VictoryRewards['prototype']['updateContentsOpacity']=function(){const _0x4bdd11=_0x3a9160;if(SceneManager[_0x4bdd11(0x263)][_0x4bdd11(0x21e)]===_0x4bdd11(0x227))_0x4bdd11(0x120)===_0x4bdd11(0x120)?this['contentsOpacity']+=Window_VictoryRewards[_0x4bdd11(0x118)]:_0x39f7b4=_0x5af334[_0x4bdd11(0x29d)];else{if(_0x4bdd11(0x1f9)===_0x4bdd11(0x1f9))this['contentsOpacity']-=Window_VictoryRewards['_opacitySpeed'];else return _0x319b9c[_0x4bdd11(0x2cf)]()[_0x4bdd11(0x1a2)]||_0x4aca40['victoryAftermathSettings']()[_0x4bdd11(0x18f)];}},Window_VictoryRewards['prototype'][_0x3a9160(0x13e)]=function(){const _0x24ba44=_0x3a9160;return VisuMZ[_0x24ba44(0x191)][_0x24ba44(0x15e)][_0x24ba44(0x246)]['MirrorContents'];},Window_VictoryRewards['prototype'][_0x3a9160(0x232)]=function(){const _0x36e207=_0x3a9160;Window_StatusBase[_0x36e207(0x164)][_0x36e207(0x232)][_0x36e207(0x2aa)](this),this['contents']['clear'](),this[_0x36e207(0x25b)](),this[_0x36e207(0x1cd)](),this['drawRewards'](),this[_0x36e207(0x174)](),this['makeItemGainWindow'](),this[_0x36e207(0x215)]();},Window_VictoryRewards[_0x3a9160(0x164)][_0x3a9160(0x1cd)]=function(){const _0x33730a=_0x3a9160,_0x5e0978=this[_0x33730a(0x239)](),_0x5066bf=0x0,_0x52f51b=_0x5e0978*2.5,_0xf99b83=_0x33730a(0x212),_0x5dfeef='rgba(0,\x200,\x200,\x200.4)',_0x2ec371=ColorManager[_0x33730a(0x1bb)]();this[_0x33730a(0xf8)][_0x33730a(0x294)](_0x5066bf,_0x52f51b,this[_0x33730a(0x1c4)],this[_0x33730a(0x1bd)]-_0x52f51b-_0x5e0978*1.5,_0xf99b83,_0x5dfeef),this[_0x33730a(0xf8)][_0x33730a(0x2c1)](0x0,_0x52f51b-0x1,this[_0x33730a(0x1c4)],0x2,_0x2ec371),this[_0x33730a(0xf8)][_0x33730a(0x2c1)](0x0,this[_0x33730a(0x1bd)]-_0x5e0978*1.5-0x1,this['width'],0x2,_0x2ec371);const _0x11f0af=this[_0x33730a(0x13e)](),_0x5c2a71=_0x11f0af?Math[_0x33730a(0x241)](this[_0x33730a(0x1c4)]/0x2+0x28):0x64,_0x1f3866=_0x52f51b-_0x5e0978*0.75,_0x303b50=TextManager[_0x33730a(0x20f)];this[_0x33730a(0x2bc)](),this[_0x33730a(0x2bc)](),this[_0x33730a(0x2cb)](_0x303b50,_0x5c2a71,_0x1f3866,this[_0x33730a(0x1c4)]);},Window_VictoryRewards['_rewardSets']=VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x15e)]['Rewards'],Window_VictoryRewards[_0x3a9160(0x164)][_0x3a9160(0x1d8)]=function(){const _0x524ec7=_0x3a9160;this['resetFontSettings']();const _0x3b4105=this[_0x524ec7(0x13e)](),_0x51e7dd=this[_0x524ec7(0x239)](),_0xa4e553=Math[_0x524ec7(0x214)](_0x51e7dd/0x2),_0x4a95a2=_0x3b4105?Math[_0x524ec7(0x241)](this[_0x524ec7(0x1c4)]/0x2+0x28):0x64,_0x40b6a8=Math[_0x524ec7(0x241)](_0x51e7dd*3.5),_0x51bc47=Math[_0x524ec7(0x241)](this['width']/0x2-0x8c),_0x440d79=_0x51bc47-_0xa4e553-0x50;let _0x269573=_0x40b6a8;for(const _0x5bc643 of Window_VictoryRewards[_0x524ec7(0x186)]){if(!_0x5bc643[_0x524ec7(0x26e)]())continue;this[_0x524ec7(0x255)](_0x4a95a2,_0x269573,_0x51bc47),this[_0x524ec7(0xf2)](ColorManager[_0x524ec7(0x223)]()),this['drawText'](_0x5bc643['Text'](),_0x4a95a2+_0xa4e553,_0x269573,_0x440d79),this['changeTextColor'](ColorManager[_0x524ec7(0x1bb)]());const _0x5239f5=_0x5bc643[_0x524ec7(0x1f7)]();Imported[_0x524ec7(0x162)]&&_0x5bc643['Text']()===TextManager[_0x524ec7(0x1ce)]?'ZVboy'!==_0x524ec7(0x18c)?this['_actorSprite'][_0x524ec7(0x1ef)]=this['contentsOpacity']:this[_0x524ec7(0x1c8)](_0x5239f5,TextManager['currencyUnit'],_0x4a95a2+_0xa4e553,_0x269573,_0x440d79):this[_0x524ec7(0x2cb)](_0x5239f5,_0x4a95a2+_0xa4e553,_0x269573,_0x440d79,'right'),_0x269573+=_0x51e7dd;}},Window_VictoryRewards[_0x3a9160(0x164)][_0x3a9160(0x255)]=function(_0x50e71f,_0x595ab5,_0x3c3b5c){const _0x4a4cb6=_0x3a9160,_0x38a072=this['lineHeight']()-0x2,_0x3860d0=Math['floor'](_0x38a072/0x2),_0x2955d6=_0x4a4cb6(0x221),_0x30b864=ColorManager[_0x4a4cb6(0x219)](),_0x34a0b9=0x50,_0xc3029e=_0x3c3b5c-_0x3860d0-_0x34a0b9;!ImageManager[_0x4a4cb6(0x10c)]&&(ImageManager[_0x4a4cb6(0x10c)]=new Bitmap(_0x3c3b5c,_0x38a072),ImageManager[_0x4a4cb6(0x10c)][_0x4a4cb6(0x1f1)]=this[_0x4a4cb6(0x2a5)](),ImageManager[_0x4a4cb6(0x10c)]['drawCircle'](_0x3860d0,_0x3860d0,_0x3860d0,_0x2955d6),ImageManager[_0x4a4cb6(0x10c)][_0x4a4cb6(0x1a0)](_0x3860d0,0x0,_0x38a072,_0x38a072),ImageManager[_0x4a4cb6(0x10c)]['fillRect'](_0x3860d0,0x0,_0xc3029e,_0x38a072,_0x2955d6),ImageManager[_0x4a4cb6(0x10c)][_0x4a4cb6(0x294)](_0x3860d0+_0xc3029e,0x0,_0x34a0b9,_0x38a072,_0x2955d6,_0x30b864)),this[_0x4a4cb6(0xf8)][_0x4a4cb6(0x26d)](ImageManager[_0x4a4cb6(0x10c)],0x0,0x0,_0x3c3b5c,_0x38a072,_0x50e71f,_0x595ab5,_0x3c3b5c,_0x38a072);},Window_VictoryRewards[_0x3a9160(0x164)][_0x3a9160(0x174)]=function(){const _0x332281=_0x3a9160;this[_0x332281(0x25b)]();if(BattleManager[_0x332281(0x119)][_0x332281(0x292)][_0x332281(0x275)]<=0x0)return;const _0x42176e=this['mirrorContents'](),_0x224632=this[_0x332281(0x239)](),_0x5a1c1e=_0x42176e?0x8c:Math[_0x332281(0x241)](this[_0x332281(0x1c4)]/0x2+0x28),_0x364701=Math['round'](_0x224632*0x3),_0x227344=Math[_0x332281(0x241)](this[_0x332281(0x1c4)]/0x2-0x8c),_0xb2659a=TextManager[_0x332281(0x24c)],_0x26dfc8=ColorManager[_0x332281(0x1bb)]();this[_0x332281(0x2bc)](),this[_0x332281(0x2cb)](_0xb2659a,_0x5a1c1e,_0x364701,_0x227344,_0x332281(0x16c));const _0x3210fc=_0x42176e?0x64:Math[_0x332281(0x241)](this[_0x332281(0x1c4)]/0x2),_0x289e0c=_0x364701+_0x224632*1.5,_0x302d79=Math[_0x332281(0x241)](this['width']/0x2)-0x64;this[_0x332281(0xf8)][_0x332281(0x2c1)](_0x3210fc,_0x289e0c,_0x302d79,0x2,_0x26dfc8);},Window_VictoryRewards[_0x3a9160(0x164)][_0x3a9160(0x1cf)]=function(){const _0x14d72a=_0x3a9160,_0x46f46d=this[_0x14d72a(0x13e)](),_0x34bbaa=this[_0x14d72a(0x239)](),_0x596aae=_0x46f46d?0x64:Math['round'](this[_0x14d72a(0x1c4)]/0x2+0x28),_0x2bdd6d=Math[_0x14d72a(0x241)](_0x34bbaa*0x5),_0x272f23=Math[_0x14d72a(0x241)](this[_0x14d72a(0x1c4)]/0x2-0x8c),_0x387821=this[_0x14d72a(0x1bd)]-_0x2bdd6d-_0x34bbaa*0x2,_0x3d7df6=new Rectangle(_0x596aae,_0x2bdd6d,_0x272f23,_0x387821);this[_0x14d72a(0x18d)]=new Window_VictoryItem(_0x3d7df6,this),this[_0x14d72a(0x244)](this[_0x14d72a(0x18d)]);},Window_VictoryRewards[_0x3a9160(0x164)]['drawPartyExpGauges']=function(){const _0x3f0924=_0x3a9160;this[_0x3f0924(0x25b)]();const _0x40292c=this[_0x3f0924(0x13e)](),_0x32e763=this['lineHeight'](),_0x59239c=$gameParty[_0x3f0924(0x23c)](),_0x4bdd10=_0x40292c?Math[_0x3f0924(0x241)](this[_0x3f0924(0x1c4)]/0x2+0x28):0x64,_0x3ad760=this[_0x3f0924(0x1bd)]-1.5-_0x32e763*0x2*(_0x59239c+0x1),_0x35a406=Math[_0x3f0924(0x241)](this['width']/0x2-0x8c);let _0x113ae6=Math[_0x3f0924(0x241)](_0x3ad760);if(VisuMZ['VictoryAftermath'][_0x3f0924(0x15e)]['General'][_0x3f0924(0x229)]??!![]){if(_0x3f0924(0x133)!==_0x3f0924(0x1ba))for(let _0x20f76f=0x0;_0x20f76f<_0x59239c;_0x20f76f++){if(_0x3f0924(0x203)===_0x3f0924(0x29b)){if(_0x457054[_0x3f0924(0x2b3)]())return![];return _0x5abcc5[_0x3f0924(0x191)][_0x3f0924(0x2d3)][_0x3f0924(0x2aa)](this);}else{if(!$gameParty[_0x3f0924(0x24e)]()[_0x20f76f])continue;this[_0x3f0924(0x1fe)](_0x4bdd10,_0x113ae6,_0x35a406),this[_0x3f0924(0x23f)](_0x20f76f,_0x4bdd10,_0x113ae6,_0x35a406),_0x113ae6+=_0x32e763*0x2;}}else{const _0x1a5dd2=this['lineHeight'](),_0x55ee36=_0x2dda9a[_0x3f0924(0x144)],_0x117bb6=this['getQuoteWidth'](),_0x5e7eae=_0x1a5dd2*0x4,_0x5251a8=_0x48a715['round']((this[_0x3f0924(0x1c4)]-_0x117bb6)/0x2),_0xba00b=_0x5251a8+(_0x55ee36?_0x4942fe[_0x3f0924(0x117)]+0x14:0x0),_0x3e7fde=this[_0x3f0924(0x1bd)]-_0x1a5dd2*5.5;let _0x1c3126=this[_0x3f0924(0x28f)]();_0x55ee36&&this[_0x3f0924(0x129)](this[_0x3f0924(0x1f5)],_0x5251a8,_0x3e7fde,_0x1c87e9[_0x3f0924(0x117)],_0x30a3b2[_0x3f0924(0x2d2)]),this[_0x3f0924(0x1a5)](_0x1c3126,_0xba00b,_0x3e7fde,_0x117bb6-_0xba00b);}}},Window_VictoryRewards[_0x3a9160(0x164)][_0x3a9160(0x1fe)]=function(_0x16834f,_0xeda9ea,_0x4990db){const _0x5ef128=_0x3a9160,_0x1db3cb=this[_0x5ef128(0x239)]()-0x2,_0xb53c0b=Math['floor'](_0x1db3cb/0x2),_0x5d40b0=_0x5ef128(0x221),_0x215bf3=ColorManager[_0x5ef128(0x219)](),_0x469d16=_0x4990db-_0x1db3cb;!ImageManager['victoryNameBitmap']&&(ImageManager['victoryNameBitmap']=new Bitmap(_0x4990db,_0x1db3cb),ImageManager[_0x5ef128(0x2c3)][_0x5ef128(0x1f1)]=this['translucentOpacity'](),ImageManager['victoryNameBitmap'][_0x5ef128(0x240)](_0xb53c0b,_0xb53c0b,_0xb53c0b,_0x5d40b0),ImageManager[_0x5ef128(0x2c3)]['drawCircle'](_0xb53c0b+_0x469d16,_0xb53c0b,_0xb53c0b,_0x5d40b0),ImageManager[_0x5ef128(0x2c3)][_0x5ef128(0x1a0)](_0xb53c0b,0x0,_0x469d16,_0x1db3cb),ImageManager[_0x5ef128(0x2c3)]['fillRect'](_0xb53c0b,0x0,_0x469d16,_0x1db3cb,_0x5d40b0)),this[_0x5ef128(0xf8)]['blt'](ImageManager[_0x5ef128(0x2c3)],0x0,0x0,_0x4990db,_0x1db3cb,_0x16834f,_0xeda9ea,_0x4990db,_0x1db3cb);},Window_VictoryRewards[_0x3a9160(0x164)][_0x3a9160(0x23f)]=function(_0xc53471,_0x3d93d8,_0x25bcfa,_0x42626c){const _0x5b6513=_0x3a9160,_0x1f8fb6='actor%1-gauge'[_0x5b6513(0x15c)](_0xc53471),_0x4a6dee=this['createGaugeSprite'](_0x1f8fb6,_0xc53471,_0x42626c);_0x4a6dee['move'](_0x3d93d8,_0x25bcfa),_0x4a6dee[_0x5b6513(0x189)]();},Window_VictoryRewards[_0x3a9160(0x164)]['createGaugeSprite']=function(_0x191629,_0x2ba15a,_0x173759){const _0xb0d92b=_0x3a9160,_0xf62b5b=this[_0xb0d92b(0x123)];if(_0xf62b5b[_0x191629])return _0xf62b5b[_0x191629];else{const _0x16d2c1=new Sprite_VictoryGauge(_0x2ba15a,this,_0x173759);return _0xf62b5b[_0x191629]=_0x16d2c1,this[_0xb0d92b(0xee)](_0x16d2c1),_0x16d2c1;}};function Window_VictoryItem(){this['initialize'](...arguments);}function _0x28ac(){const _0x411259=['fLZhD','maxVisibleItems','resetFontSettings','ARRAYNUM','KGFAp','map','_victoryAftermathCopy','Uevrs','MirrorContents','_victoryAftermathSettings','_scene','collapse','1419681BjokDR','drawActorName','#%1','drawLevelUpQuote','YkkXi','prepareVictoryAftermathTransition','earnedJobPoints','NBgTm','blt','Show','setVisibleUI','VisuMZ_1_OptionsCore','VisuMZ_1_MainMenuCore','drawParamDiffValue','levelUpQuotes','fontFace','length','processVictoryAftermathMusic','quoteLevelSkill','nextVictoryLevelUpActor','BustPosX','indexOf','loadPicture','VisuMZ_3_BattleVoices','ShowBust','FadeInSpeed','bypassVictoryMotion','initMembers','closeCommandWindows','Game_Actor_performVictory','makeVictoryCopy','textColor','arrow','getVictoryAftermathBackColor','_actorSprite','ConvertParams','_victoryTempActorsA','trim','drawItemNumber','processVictoryStep','VisuMZ_2_ClassChangeSystem','setupVictoryLevelUpNextActor','getQuoteText','changeExp','newSkillQuotes','items','createSubWindow','gradientFillRect','updateContentsOpacity','ActorQuotesNewSkillAdd','oPKaT','264RORoEF','_victoryUpdateDuration','2094786TeHKYI','ymXZk','nhPKK','level','done','processPostBattleCommonEvents','drawItemDarkRect','_showLevelUp','createVictoryAftermathWindows','NewSkill','_victorySteps','translucentOpacity','drawItemName','qdXZm','HryPQ','levelups','call','battlerEXPStyle','bind','BhgJz','removeBattleStates','CoreEngine','SkillLearnSystem','dCGJd','gaugeColor2','isVictoryPhase','removeVictoryLevelUpBuffer','_subWindow','jobPointsFull','QsHvV','param','finalExpRate','initVictoryAftermath','VUmcz','makeFontBigger','BattleVictory','jobPointsAbbr','mainFontFace','Bypass','fillRect','setup','victoryNameBitmap','_victoryLevelUpWindow','battleEnd','QgeJl','isBattleMember','40DATjEJ','_delayDuration','contentsOpacity','drawText','_colorCache','BJIwX','isCollapsing','victoryAftermathSettings','paramValueFontSize','skillPointsAbbr','faceHeight','Scene_Battle_allowUpdateBattleAniSpeed','UpdateDuration','LvUpSfx','12wOqkrV','drawNewLearnedSkillsBackground','update','Game_Actor_isBattleMember','LvUpPitch','_data','createVictorySteps','957143dOCXkU','updateOpacity','gainRewards','makeDeepCopy','addInnerChild','ARRAYSTR','ARRAYJSON','CVOmy','changeTextColor','_victoryRewardsWindow','isWeapon','abilityPointsFull','fVLVc','isBypassVictoryAftermathMotion','contents','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','92309KiECai','updateVictorySteps','abilityPointsAbbr','sort','VisuMZ_0_CoreEngine','PmJZv','victoryContinueMessageWindowRect','VisuMZ_2_SkillLearnSystem','getColorDataFromPluginParameters','_victoryBgm','SystemBypassVictoryMusic','_victoryAftermathNewSkillQuotes','_effectType','zfMUG','FCScO','PMbQi','bLlfd','expRate','victoryRewardBitmap','spJpn','WaitRegularCollapse','skills','Victory','updateVictoryPhase','BackRectColor','_tempActorExpGain','ShowParamDiff','randomInt','_autoBattleVictorySkip','faceWidth','_opacitySpeed','_rewards','aAqFg','_mainWindow','isContinueReady','drawItemBackground','gaugeHeight','processVictoryAftermathRewards','jeujo','BattleManager_initMembers','_spriteset','_additionalSprites','drawParamChanges','AutoBattleAutoSkip','LvFmt','120wBAPaa','_showBust','drawActorFace','_victoryActorIndex','drawExpValues','earnedSkillPoints','ShowDelayMS','LvUpVolume','Ohkto','isBypassVictoryAftermathPhase','victoryFullScreenWindowRect','qjSBy','YrrhL','SkillPoints','gainTempExp','processVictoryAftermathTransition','getAdditionalRewardsText','createVictoryLevelUpWindow','jSJVo','Game_Actor_shouldDisplayLevelUp','createVictoryStepLevelUps','anchor','drawVisualStyleGauge','mirrorContents','UHadT','isEnabled','currentLevelExp','_index','victoryLevelUpColor','_showFace','activate','ItemsEquipsCore','cancel','BustScale','ActorID','MaxSkills','aMIMs','match','hideWindowsForVictoryAftermath','pEHTA','Vocab','toLowerCase','drawActorLevel','LevelUp','setActor','processVictoryAftermathParty','_currentlevel','_victoryLevelUpSFX','min','levelUp','pan','isBusy','mainFontSize','format','iMjon','Settings','getMenuImage','measureTextWidth','_drawParamDiff','VisuMZ_3_VisualGoldDisplay','quoteLevelUp','prototype','_autoBattle','pmidw','itemCount','2654pnsDtr','FUNC','setBackgroundType','push','left','Template','actor','evoNQ','yKULs','updateExpGain','split','victoryNewSkillFmt','drawItemGainTitle','clear','bitmap','wygUv','183185RgSlkD','vBfUC','actorParams','createVictoryStepRewards','drawExpGauge','KeyCancel','xxtnf','index','battlerSprites','registerCommand','_victoryWindows','getInputButtonString','BattleVictoryLevelUp','isBypassVictoryAftermathMusic','_rewardSets','NUM','_statusWindow','show','_victoryTempActorsB','ExtDisplayedParams','ZVboy','_itemGainWindow','SystemBypassVictoryMotion','bypassVictoryPhase','wmXmN','VictoryAftermath','currentExp','YjTQZ','MessageCore','VisuMZ_3_VisualGaugeStyles','Scene_Battle_update','isActor','performVictory','31944696HxLkSs','allowUpdateBattleAniSpeed','703TbJISO','status','dVSDV','GroupDigits','JobPoints','clearRect','isSceneBattle','bypassVictoryMusic','victoryDisplayLvFmt','drawParamBeforeValue','drawTextEx','WaitBossCollapse','STRUCT','BustPosY','maxLvGaugeColor1','filter','TqPmS','AftermathText','scale','playVictoryLevelUpSFX','ActorQuotesLevelUpAdd','classPointsAbbr','drawParamAfterValue','xgAOF','NewSkillQuotes','setActionState','ClassPoints','beforeActor','textWidth','makeTempActors','processBattleCoreJS','TsWFH','normalColor','xMHlG','height','KeyOK','ContinueFmt','Enable','gaugeBackColor','loadFaceImages','parse','width','drawParamName','playBgm','createBitmap','drawCurrencyValue','MlTka','BattleManager_isBusy','AbilityPoints','endBattle','drawBackgroundElements','currencyUnit','makeItemGainWindow','JwUEz','earnedAbilityPoints','powerUpColor','isMaxLevel','earnedClassPoints','VisuMZ_X_Template','volume','finishVictoryPhase','drawRewards','updatePadding','gaugeColor1','ARRAYFUNC','create','isFastForwarded','hLKRR','DigitGroupingStandardText','some','skipVictoryAftermathTransition','UZATw','isVictoryContinueReady','itemPadding','QoL','processVictoryAftermath','pitch','checkVictoryAftermathAutoBattleAutoSkip','_duration','createVictoryRewardsWindow','_actorId','createVictoryContinueMessageWindow','skillPointsFull','_victoryAftermathLevelUpQuotes','opacity','setupVictoryAftermathQuotes','paintOpacity','setDelayDuration','_fullWidth','padding','_actor','ShowFace','Data','drawNewLearnedSkillsList','HDjpd','_victoryPhase','Param','_victoryContinueWindow','victoryKeyOk','drawActorNameStrip','cTrxu','MAX\x20LEVEL','onVictoryStepLevelUpMember','createActorSprite','ZImdS','playVictoryBgm','_victoryLevelUpBuffer','paramValueByName','HynRK','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','aECdm','shift','victoryContinueFmt','isPressed','maxLvGaugeColor2','izoXI','victoryDisplayTitle','fontSize','itemHeight','rgba(0,\x200,\x200,\x200.8)','AftermathActorDisplay','floor','drawPartyExpGauges','Game_Actor_setup','XvJbE','constructor','dimColor2','afterActor','isArmor','getColor','LvUpPan','_victoryStep','hideSubInputWindows','isItem','rgba(0,\x200,\x200,\x201)','expGaugeColor2','systemColor','ActorQuotesNewSkillClear','mVLQS','name','rewards','shouldDisplayLevelUp','ShowExpGauges','VisuMZ_1_BattleCore','EVAL','LTXfO','expGaugeColor1','isShowNew','center','IkCWy','Huwzq','refresh','boxWidth','drawLevelMessage','description','initialize','battleMembers','victoryDisplayLvUp','lineHeight','SWvIX','drawNewLearnedSkills','maxBattleMembers','MdrhC','ARRAYEVAL','placeActorGauges','drawCircle','round','textSizeEx','DrawBackRect','addChild','findNewSkills','General','qMjAi','ouKzO','SystemBypassVictoryPhase','right','Bgm','victoryDisplayItem','isVictoryLevelUpPhaseEnabled','members','pop','exp','concat','exit','isRepeated','(+%1)','drawRewardStrip','paramchangeTextColor','rgba(0,\x200,\x200,\x200.4)','playBattleVoice'];_0x28ac=function(){return _0x411259;};return _0x28ac();}Window_VictoryItem[_0x3a9160(0x164)]=Object[_0x3a9160(0x1dc)](Window_ItemList['prototype']),Window_VictoryItem['prototype'][_0x3a9160(0x218)]=Window_VictoryItem,Window_VictoryItem['prototype'][_0x3a9160(0x236)]=function(_0x1ad348,_0x14b244){const _0x5dbee3=_0x3a9160;this['_mainWindow']=_0x14b244,Window_ItemList[_0x5dbee3(0x164)][_0x5dbee3(0x236)][_0x5dbee3(0x2aa)](this,_0x1ad348),this['setBackgroundType'](0x2),this[_0x5dbee3(0x232)](),this[_0x5dbee3(0x295)](),this[_0x5dbee3(0xe8)]['length']>this[_0x5dbee3(0x25a)]()&&('PHZYe'!=='PHZYe'?this['_victoryAftermathNewSkillQuotes']=_0x417fd9(_0x46f5b2['$1'])['split'](/<NEW QUOTE>[\r\n]+/i):(this[_0x5dbee3(0x145)](),this['select'](0x0)));},Window_VictoryItem[_0x3a9160(0x164)][_0x3a9160(0x211)]=function(){const _0x1d6e9a=_0x3a9160;return Window_Base[_0x1d6e9a(0x164)][_0x1d6e9a(0x211)]['call'](this);},Window_VictoryItem[_0x3a9160(0x164)][_0x3a9160(0x1d9)]=function(){const _0x617e73=_0x3a9160;this[_0x617e73(0x1f4)]=0x0;},Window_VictoryItem['prototype']['maxCols']=function(){return 0x1;},Window_VictoryItem[_0x3a9160(0x164)]['colSpacing']=function(){return 0x0;},Window_VictoryItem[_0x3a9160(0x164)][_0x3a9160(0x2d8)]=function(){const _0x2a1874=_0x3a9160;Window_ItemList[_0x2a1874(0x164)][_0x2a1874(0x2d8)][_0x2a1874(0x2aa)](this),this[_0x2a1874(0x295)]();},Window_VictoryItem[_0x3a9160(0x164)]['updateContentsOpacity']=function(){const _0x15151b=_0x3a9160;this[_0x15151b(0x2ca)]=this[_0x15151b(0x11b)][_0x15151b(0x2ca)];},Window_VictoryItem['prototype']['makeItemList']=function(){const _0x359181=_0x3a9160,_0x3ac130=BattleManager[_0x359181(0x119)][_0x359181(0x292)];_0x3ac130[_0x359181(0xfd)]((_0x1ba042,_0x54530b)=>_0x1ba042['id']-_0x54530b['id']);const _0x18e2f1=_0x3ac130[_0x359181(0x1aa)](_0x49e372=>DataManager[_0x359181(0x220)](_0x49e372)),_0x4b763d=_0x3ac130[_0x359181(0x1aa)](_0x83ff95=>DataManager[_0x359181(0xf4)](_0x83ff95)),_0x13bf13=_0x3ac130[_0x359181(0x1aa)](_0x42c796=>DataManager[_0x359181(0x21b)](_0x42c796));this[_0x359181(0xe8)]=_0x18e2f1[_0x359181(0x251)](_0x4b763d)[_0x359181(0x251)](_0x13bf13),this['_data']=this[_0x359181(0xe8)][_0x359181(0x1aa)]((_0x1e6375,_0x1a2c48,_0x120b91)=>_0x120b91[_0x359181(0x27a)](_0x1e6375)===_0x1a2c48);},Window_VictoryItem[_0x3a9160(0x164)][_0x3a9160(0x140)]=function(_0x307d5f){return!![];},Window_VictoryItem[_0x3a9160(0x164)][_0x3a9160(0x22e)]=function(){return![];},Window_VictoryItem[_0x3a9160(0x164)][_0x3a9160(0x167)]=function(_0x5ee80b){const _0x33996a=_0x3a9160;return BattleManager[_0x33996a(0x119)][_0x33996a(0x292)][_0x33996a(0x1aa)](_0x549edb=>_0x549edb===_0x5ee80b)[_0x33996a(0x275)];},Window_VictoryItem[_0x3a9160(0x164)][_0x3a9160(0x11d)]=function(_0x46d353){},Window_VictoryItem[_0x3a9160(0x164)][_0x3a9160(0x28b)]=function(_0x10c829,_0x4d5282,_0x54b15b,_0x22e3e9){const _0x54f130=_0x3a9160;let _0x598232='x%1';Imported['VisuMZ_1_ItemsEquipsCore']&&(_0x54f130(0x10d)!==_0x54f130(0x166)?_0x598232=VisuMZ['ItemsEquipsCore']['Settings']['ItemScene']['ItemQuantityFmt']:this['contentsOpacity']+=_0x16cb81[_0x54f130(0x118)]);let _0x5f70e0=_0x598232[_0x54f130(0x15c)](this[_0x54f130(0x167)](_0x10c829));this[_0x54f130(0x2cb)](_0x5f70e0,_0x4d5282,_0x54b15b,_0x22e3e9,_0x54f130(0x24a));};function Window_VictoryLevelUp(){const _0x183567=_0x3a9160;this[_0x183567(0x236)](...arguments);}Window_VictoryLevelUp['_opacitySpeed']=Window_VictoryRewards['_opacitySpeed'],Window_VictoryLevelUp[_0x3a9160(0x128)]=VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x15e)][_0x3a9160(0x152)][_0x3a9160(0x27d)],Window_VictoryLevelUp[_0x3a9160(0x164)]=Object[_0x3a9160(0x1dc)](Window_StatusBase[_0x3a9160(0x164)]),Window_VictoryLevelUp['prototype'][_0x3a9160(0x218)]=Window_VictoryLevelUp,Window_VictoryLevelUp[_0x3a9160(0x164)][_0x3a9160(0x236)]=function(_0x1959f2){const _0x203f1d=_0x3a9160;Window_StatusBase['prototype']['initialize'][_0x203f1d(0x2aa)](this,_0x1959f2),this[_0x203f1d(0x16a)](0x2),this[_0x203f1d(0x2ca)]=0x0,this['refresh'](),this[_0x203f1d(0x202)](),this[_0x203f1d(0x293)]();},Window_VictoryLevelUp[_0x3a9160(0x164)][_0x3a9160(0x1d9)]=function(){const _0x238100=_0x3a9160;this[_0x238100(0x1f4)]=0x0;},Window_VictoryLevelUp[_0x3a9160(0x164)][_0x3a9160(0x2d8)]=function(){const _0x1ac297=_0x3a9160;Window_StatusBase[_0x1ac297(0x164)][_0x1ac297(0x2d8)][_0x1ac297(0x2aa)](this),this[_0x1ac297(0x295)]();},Window_VictoryLevelUp[_0x3a9160(0x164)][_0x3a9160(0x295)]=function(){const _0x599240=_0x3a9160;SceneManager[_0x599240(0x263)][_0x599240(0x21e)]==='levelups'?_0x599240(0x2bb)==='QDPWR'?_0x449da3['loadPicture'](_0x5735ce[_0x599240(0x15f)]()):this[_0x599240(0x2ca)]+=Window_VictoryLevelUp[_0x599240(0x118)]:_0x599240(0x13f)===_0x599240(0x13f)?this['contentsOpacity']-=Window_VictoryLevelUp[_0x599240(0x118)]:(this[_0x599240(0x155)]=_0x50cbfb[_0x599240(0x29d)],this['_showLevelUp']=!![],_0x2abd67['playVictoryLevelUpSFX']());if(this['_actorSprite']){if('xMkDU'!==_0x599240(0x2cd))this['_actorSprite'][_0x599240(0x1ef)]=this[_0x599240(0x2ca)];else{const _0x470afb=this[_0x599240(0x239)](),_0x6e4251=_0x599240(0x212),_0x3979d7='rgba(0,\x200,\x200,\x200.4)',_0x39dd27=_0x325dcc[_0x599240(0x1bb)](),_0x373ec3=_0x382f91['_scene']['_victoryContinueWindow']['x'],_0x583dc4=_0x35e070[_0x599240(0x241)](this[_0x599240(0x1c4)]/0x2);this[_0x599240(0xf8)]['gradientFillRect'](_0x373ec3,0x0,_0x583dc4,this[_0x599240(0x1bd)],_0x3979d7,_0x6e4251,!![]),this[_0x599240(0xf8)]['fillRect'](_0x373ec3-0x1,0x0,0x2,this['height'],_0x39dd27),this[_0x599240(0xf8)][_0x599240(0x2c1)](_0x373ec3+_0x583dc4-0x1,0x0,0x2,this[_0x599240(0x1bd)],_0x39dd27);const _0x3d6a05=_0x470afb,_0x584190=_0x470afb*0x1;this[_0x599240(0xf8)][_0x599240(0x294)](0x0,_0x3d6a05,this['width'],_0x584190,_0x6e4251,_0x3979d7),this[_0x599240(0xf8)][_0x599240(0x2c1)](0x0,_0x3d6a05-0x1,this[_0x599240(0x1c4)],0x2,_0x39dd27),this['contents']['fillRect'](0x0,_0x3d6a05+_0x584190-0x1,this[_0x599240(0x1c4)],0x2,_0x39dd27);const _0x22e139=this['height']-_0x470afb*5.5,_0x3d6fd7=_0x470afb*0x4;this[_0x599240(0xf8)][_0x599240(0x294)](0x0,_0x22e139,this['width'],_0x3d6fd7,_0x6e4251,_0x3979d7),this[_0x599240(0xf8)][_0x599240(0x294)](0x0,_0x22e139,this[_0x599240(0x1c4)],_0x3d6fd7,_0x3979d7,_0x6e4251),this[_0x599240(0xf8)]['fillRect'](0x0,_0x22e139-0x2,this[_0x599240(0x1c4)],0x2,_0x39dd27),this[_0x599240(0xf8)][_0x599240(0x2c1)](0x0,_0x22e139+_0x3d6fd7,this[_0x599240(0x1c4)],0x2,_0x39dd27);}}},Window_VictoryLevelUp[_0x3a9160(0x164)][_0x3a9160(0x232)]=function(){const _0x4cd658=_0x3a9160;Window_StatusBase[_0x4cd658(0x164)][_0x4cd658(0x232)][_0x4cd658(0x2aa)](this),this['contents']['clear'](),this['resetFontSettings'](),this['drawBackgroundElements']();},Window_VictoryLevelUp[_0x3a9160(0x164)][_0x3a9160(0x1cd)]=function(){const _0x1486ed=_0x3a9160,_0x202887=this[_0x1486ed(0x239)](),_0x3af4ed='rgba(0,\x200,\x200,\x200.8)',_0x250e91=_0x1486ed(0x257),_0x23eb57=ColorManager[_0x1486ed(0x1bb)](),_0x12985c=SceneManager['_scene'][_0x1486ed(0x1fc)]['x'],_0x541ed3=Math['round'](this['width']/0x2);this[_0x1486ed(0xf8)][_0x1486ed(0x294)](_0x12985c,0x0,_0x541ed3,this['height'],_0x250e91,_0x3af4ed,!![]),this['contents']['fillRect'](_0x12985c-0x1,0x0,0x2,this['height'],_0x23eb57),this[_0x1486ed(0xf8)][_0x1486ed(0x2c1)](_0x12985c+_0x541ed3-0x1,0x0,0x2,this[_0x1486ed(0x1bd)],_0x23eb57);const _0x1a852b=_0x202887,_0x324fd8=_0x202887*0x1;this[_0x1486ed(0xf8)][_0x1486ed(0x294)](0x0,_0x1a852b,this[_0x1486ed(0x1c4)],_0x324fd8,_0x3af4ed,_0x250e91),this[_0x1486ed(0xf8)][_0x1486ed(0x2c1)](0x0,_0x1a852b-0x1,this['width'],0x2,_0x23eb57),this[_0x1486ed(0xf8)][_0x1486ed(0x2c1)](0x0,_0x1a852b+_0x324fd8-0x1,this['width'],0x2,_0x23eb57);const _0x17196c=this[_0x1486ed(0x1bd)]-_0x202887*5.5,_0x220e5e=_0x202887*0x4;this[_0x1486ed(0xf8)][_0x1486ed(0x294)](0x0,_0x17196c,this[_0x1486ed(0x1c4)],_0x220e5e,_0x3af4ed,_0x250e91),this[_0x1486ed(0xf8)][_0x1486ed(0x294)](0x0,_0x17196c,this[_0x1486ed(0x1c4)],_0x220e5e,_0x250e91,_0x3af4ed),this[_0x1486ed(0xf8)][_0x1486ed(0x2c1)](0x0,_0x17196c-0x2,this[_0x1486ed(0x1c4)],0x2,_0x23eb57),this['contents']['fillRect'](0x0,_0x17196c+_0x220e5e,this[_0x1486ed(0x1c4)],0x2,_0x23eb57);},Window_VictoryLevelUp[_0x3a9160(0x164)]['createActorSprite']=function(){const _0xd12325=_0x3a9160,_0x19ce11=VisuMZ['VictoryAftermath'][_0xd12325(0x15e)]['LevelUp'];this[_0xd12325(0x287)]=new Sprite(),this['_actorSprite'][_0xd12325(0x13c)]['x']=0.5,this[_0xd12325(0x287)][_0xd12325(0x13c)]['y']=0x1,this[_0xd12325(0x287)][_0xd12325(0x1ef)]=0x0,this['_actorSprite']['x']=Math['round'](eval(_0x19ce11[_0xd12325(0x279)])),this[_0xd12325(0x287)]['y']=Math['round'](eval(_0x19ce11[_0xd12325(0x1a8)])),this[_0xd12325(0x287)][_0xd12325(0x1ad)]['x']=_0x19ce11[_0xd12325(0x148)],this['_actorSprite'][_0xd12325(0x1ad)]['y']=_0x19ce11[_0xd12325(0x148)],this['addChildToBack'](this['_actorSprite']);},Window_VictoryLevelUp[_0x3a9160(0x164)][_0x3a9160(0x293)]=function(){const _0x377e33=_0x3a9160,_0x27f068=new Rectangle(0x0,0x0,this[_0x377e33(0x1c4)],this[_0x377e33(0x1bd)]);this[_0x377e33(0x2b5)]=new Window_VictoryLevelUpActor(_0x27f068,this),this[_0x377e33(0x244)](this[_0x377e33(0x2b5)]);},Window_VictoryLevelUp[_0x3a9160(0x164)][_0x3a9160(0x153)]=function(_0x1b6054){const _0x4f8987=_0x3a9160;Imported[_0x4f8987(0x271)]&&Window_VictoryLevelUp[_0x4f8987(0x128)]&&(this[_0x4f8987(0x287)][_0x4f8987(0x176)]=ImageManager[_0x4f8987(0x27b)](_0x1b6054[_0x4f8987(0x15f)]())),SoundManager[_0x4f8987(0x1ae)](),this[_0x4f8987(0x2b5)][_0x4f8987(0x153)](_0x1b6054);};function Window_VictoryLevelUpActor(){const _0x550e71=_0x3a9160;this[_0x550e71(0x236)](...arguments);}Window_VictoryLevelUpActor[_0x3a9160(0x118)]=Window_VictoryRewards[_0x3a9160(0x118)],Window_VictoryLevelUpActor[_0x3a9160(0x161)]=VisuMZ['VictoryAftermath'][_0x3a9160(0x15e)][_0x3a9160(0x152)][_0x3a9160(0x114)],Window_VictoryLevelUpActor[_0x3a9160(0x144)]=VisuMZ[_0x3a9160(0x191)][_0x3a9160(0x15e)][_0x3a9160(0x152)][_0x3a9160(0x1f6)],Window_VictoryLevelUpActor['prototype']=Object[_0x3a9160(0x1dc)](Window_StatusBase[_0x3a9160(0x164)]),Window_VictoryLevelUpActor['prototype'][_0x3a9160(0x218)]=Window_VictoryLevelUpActor,Window_VictoryLevelUpActor['prototype']['initialize']=function(_0x844c6a,_0x2704f1){const _0xeb0ebf=_0x3a9160;this[_0xeb0ebf(0x11b)]=_0x2704f1,Window_StatusBase[_0xeb0ebf(0x164)][_0xeb0ebf(0x236)][_0xeb0ebf(0x2aa)](this,_0x844c6a),this['setBackgroundType'](0x2),this['contentsOpacity']=0x0,this[_0xeb0ebf(0x1f5)]=null,this[_0xeb0ebf(0x232)]();},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x1d9)]=function(){const _0x944d36=_0x3a9160;this[_0x944d36(0x1f4)]=0x0;},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x2d8)]=function(){Window_StatusBase['prototype']['update']['call'](this),this['updateContentsOpacity']();},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x295)]=function(){const _0x532edd=_0x3a9160;this['contentsOpacity']=this[_0x532edd(0x11b)][_0x532edd(0x2ca)];},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x153)]=function(_0x5b6a9a){const _0x439773=_0x3a9160;this[_0x439773(0x1f5)]=_0x5b6a9a,this[_0x439773(0x232)]();},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x1b6)]=function(){const _0x1a9aa4=_0x3a9160,_0x528e80=this[_0x1a9aa4(0x1f5)][_0x1a9aa4(0x17f)]();return BattleManager['_victoryTempActorsB'][_0x528e80];},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x21a)]=function(){const _0x1ffe08=_0x3a9160,_0x5b7f93=this[_0x1ffe08(0x1f5)][_0x1ffe08(0x17f)]();return BattleManager[_0x1ffe08(0x289)][_0x5b7f93];},Window_VictoryLevelUpActor[_0x3a9160(0x164)]['refresh']=function(){const _0x245883=_0x3a9160;Window_StatusBase[_0x245883(0x164)][_0x245883(0x232)][_0x245883(0x2aa)](this),this[_0x245883(0xf8)][_0x245883(0x175)](),this[_0x245883(0x25b)]();if(!this[_0x245883(0x1f5)])return;this[_0x245883(0x234)](),this[_0x245883(0x124)](),this[_0x245883(0x23b)](),this[_0x245883(0x268)]();},Window_VictoryLevelUpActor[_0x3a9160(0x164)]['drawLevelMessage']=function(){const _0x2f1ece=_0x3a9160,_0x451173=this[_0x2f1ece(0x239)](),_0x5e6531=TextManager[_0x2f1ece(0x158)][_0x2f1ece(0x15c)](this[_0x2f1ece(0x1f5)][_0x2f1ece(0x226)](),TextManager['level'],this[_0x2f1ece(0x1f5)][_0x2f1ece(0x29d)]),_0xf468be=this[_0x2f1ece(0x242)](_0x5e6531)['width'],_0x428559=SceneManager[_0x2f1ece(0x263)][_0x2f1ece(0x1fc)]['x']+Math['round']((this[_0x2f1ece(0x1c4)]/0x2-_0xf468be)/0x2),_0x245450=_0x451173;this[_0x2f1ece(0x1a5)](_0x5e6531,_0x428559,_0x245450,_0xf468be);},Window_VictoryLevelUpActor['prototype']['drawItemDarkRect']=function(_0x2198c9,_0x445a78,_0x500b1a,_0x3476a1,_0x413802){const _0xd7ba23=_0x3a9160;if(VisuMZ[_0xd7ba23(0x191)]['Settings']['LevelUp'][_0xd7ba23(0x243)]===![])return;_0x413802=Math['max'](_0x413802||0x1,0x1);while(_0x413802--){_0x3476a1=_0x3476a1||this[_0xd7ba23(0x239)](),this[_0xd7ba23(0xf8)][_0xd7ba23(0x1f1)]=0xa0;const _0x388efa=ColorManager[_0xd7ba23(0x286)]();this['contents'][_0xd7ba23(0x2c1)](_0x2198c9+0x1,_0x445a78+0x1,_0x500b1a-0x2,_0x3476a1-0x2,_0x388efa),this['contents']['paintOpacity']=0xff;}},ColorManager[_0x3a9160(0x286)]=function(){const _0x14f557=_0x3a9160,_0x48f4ac=VisuMZ[_0x14f557(0x191)][_0x14f557(0x15e)][_0x14f557(0x152)];let _0x4a59b4=_0x48f4ac[_0x14f557(0x112)]!==undefined?_0x48f4ac[_0x14f557(0x112)]:0x13;return ColorManager[_0x14f557(0x21c)](_0x4a59b4);},Window_VictoryLevelUpActor[_0x3a9160(0x164)]['drawParamChanges']=function(){const _0x2ac0b1=_0x3a9160,_0x1158d9=this[_0x2ac0b1(0x239)](),_0x4c2aaf='→',_0x1af327=this[_0x2ac0b1(0x17a)](),_0x59bb1d=_0x1158d9*0x2,_0x4e1063=this['height']-_0x1158d9*5.5,_0x58e71a=this[_0x2ac0b1(0x1b7)](_0x4c2aaf)+this[_0x2ac0b1(0x1e4)]()*0x2,_0x5c1387=Window_VictoryLevelUpActor[_0x2ac0b1(0x161)]?0x4:0x3,_0x2a5b44=Math[_0x2ac0b1(0x241)]((this[_0x2ac0b1(0x1c4)]/0x2-_0x58e71a-this['itemPadding']()*0x2)/_0x5c1387),_0x5ae727=_0x4e1063-_0x59bb1d,_0x479d5d=VisuMZ[_0x2ac0b1(0x191)][_0x2ac0b1(0x15e)][_0x2ac0b1(0x152)]['HideLevelDiff'],_0x3678d2=SceneManager[_0x2ac0b1(0x263)][_0x2ac0b1(0x1fc)]['x']+this['itemPadding'](),_0x439701=_0x3678d2+_0x2a5b44,_0x5ef85f=_0x439701+_0x2a5b44,_0x54f12a=_0x5ef85f+_0x58e71a,_0x1016f0=_0x54f12a+_0x2a5b44;let _0xc26583=Math['round'](_0x59bb1d+(_0x5ae727-(_0x1af327[_0x2ac0b1(0x275)]+(_0x479d5d?0x0:0x1))*_0x1158d9)/0x2),_0x538bc9=0x2;if(!_0x479d5d){this['resetFontSettings']();if(VisuMZ[_0x2ac0b1(0x146)]){if('QpHdG'!=='JfPTH')this[_0x2ac0b1(0xf8)][_0x2ac0b1(0x210)]=Window_EquipStatus[_0x2ac0b1(0x164)]['paramValueFontSize']();else{const _0x49152f=_0x366bdf[_0x2ac0b1(0x278)]();this[_0x2ac0b1(0x2c4)][_0x2ac0b1(0x153)](_0x49152f),_0x39e8a3[_0x2ac0b1(0x27c)]&&_0x49152f[_0x2ac0b1(0x258)](_0x2ac0b1(0x184));}}this[_0x2ac0b1(0x2a0)](_0x3678d2,_0xc26583,_0x2a5b44,_0x1158d9,_0x538bc9),this[_0x2ac0b1(0x1c5)](_0x2ac0b1(0x29d),_0x3678d2,_0xc26583,_0x2a5b44),this[_0x2ac0b1(0x2a0)](_0x439701,_0xc26583,_0x2a5b44,_0x1158d9,_0x538bc9),this[_0x2ac0b1(0x1a4)](_0x2ac0b1(0x29d),_0x439701,_0xc26583,_0x2a5b44),this[_0x2ac0b1(0x2a0)](_0x5ef85f,_0xc26583,_0x58e71a,_0x1158d9,_0x538bc9),this[_0x2ac0b1(0xf2)](ColorManager[_0x2ac0b1(0x223)]()),this[_0x2ac0b1(0x2cb)](_0x4c2aaf,_0x5ef85f,_0xc26583,_0x58e71a,_0x2ac0b1(0x22f)),this[_0x2ac0b1(0x2a0)](_0x54f12a,_0xc26583,_0x2a5b44,_0x1158d9,_0x538bc9),this['drawParamAfterValue'](_0x2ac0b1(0x29d),_0x54f12a,_0xc26583,_0x2a5b44);if(Window_VictoryLevelUpActor[_0x2ac0b1(0x161)]){if(_0x2ac0b1(0x14b)!==_0x2ac0b1(0x217))this[_0x2ac0b1(0x2a0)](_0x1016f0,_0xc26583,_0x2a5b44,_0x1158d9,_0x538bc9),this[_0x2ac0b1(0x272)](_0x2ac0b1(0x29d),_0x1016f0,_0xc26583,_0x2a5b44);else{if(this[_0x2ac0b1(0x122)][_0x2ac0b1(0x2ce)]())return _0x24304e(this[_0x2ac0b1(0x14d)][_0x2ac0b1(0x2ac)](this),0x7d0);if(!_0x202eaf[_0x2ac0b1(0x1a1)]())return;this['setVisibleUI'](![]),this['closeCommandWindows'](),this[_0x2ac0b1(0x21f)](),this[_0x2ac0b1(0x188)]['y']=_0xa013b0[_0x2ac0b1(0x1bd)]*0xa;}}_0xc26583+=_0x1158d9,_0x538bc9=_0x538bc9===0x2?0x1:0x2;}for(const _0x126b2d of _0x1af327){this[_0x2ac0b1(0x25b)]();if(VisuMZ[_0x2ac0b1(0x146)]){if('aAqFg'!==_0x2ac0b1(0x11a)){if(this[_0x2ac0b1(0x116)])return!![];return _0x1d774e[_0x2ac0b1(0x2cf)]()['bypassVictoryPhase'];}else this['contents']['fontSize']=Window_EquipStatus[_0x2ac0b1(0x164)][_0x2ac0b1(0x2d0)]();}this[_0x2ac0b1(0x2a0)](_0x3678d2,_0xc26583,_0x2a5b44,_0x1158d9,_0x538bc9),this[_0x2ac0b1(0x1c5)](_0x126b2d,_0x3678d2,_0xc26583,_0x2a5b44),this[_0x2ac0b1(0x2a0)](_0x439701,_0xc26583,_0x2a5b44,_0x1158d9,_0x538bc9),this[_0x2ac0b1(0x1a4)](_0x126b2d,_0x439701,_0xc26583,_0x2a5b44),this[_0x2ac0b1(0x2a0)](_0x5ef85f,_0xc26583,_0x58e71a,_0x1158d9,_0x538bc9),this[_0x2ac0b1(0xf2)](ColorManager['systemColor']()),this[_0x2ac0b1(0x2cb)](_0x4c2aaf,_0x5ef85f,_0xc26583,_0x58e71a,_0x2ac0b1(0x22f)),this['drawItemDarkRect'](_0x54f12a,_0xc26583,_0x2a5b44,_0x1158d9,_0x538bc9),this[_0x2ac0b1(0x1b1)](_0x126b2d,_0x54f12a,_0xc26583,_0x2a5b44),Window_VictoryLevelUpActor[_0x2ac0b1(0x161)]&&('TXquN'!==_0x2ac0b1(0x25d)?(this['drawItemDarkRect'](_0x1016f0,_0xc26583,_0x2a5b44,_0x1158d9,_0x538bc9),this[_0x2ac0b1(0x272)](_0x126b2d,_0x1016f0,_0xc26583,_0x2a5b44)):(_0xc6aec1[_0x2ac0b1(0x164)][_0x2ac0b1(0x2d8)]['call'](this),this[_0x2ac0b1(0x295)]())),_0xc26583+=_0x1158d9,_0x538bc9=_0x538bc9===0x2?0x1:0x2;}},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x17a)]=function(){const _0x128a4f=_0x3a9160;return Imported[_0x128a4f(0xfe)]?VisuMZ[_0x128a4f(0x2af)]['Settings'][_0x128a4f(0x1fb)][_0x128a4f(0x18b)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x1c5)]=function(_0x171c79,_0x4c99e2,_0x45cbd8,_0x3d2b05){const _0x487ef1=_0x3a9160;this['changeTextColor'](ColorManager[_0x487ef1(0x223)]());let _0x524297='';_0x171c79===_0x487ef1(0x29d)?_0x524297=TextManager[_0x487ef1(0x29d)]:_0x524297=TextManager[_0x487ef1(0x2b8)](_0x171c79),this[_0x487ef1(0x2cb)](_0x524297,_0x4c99e2+this[_0x487ef1(0x1e4)](),_0x45cbd8,_0x3d2b05-this[_0x487ef1(0x1e4)]()*0x2);},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x1a4)]=function(_0x136e87,_0x47e9a7,_0x147fed,_0x2d9b87){const _0x3f9780=_0x3a9160,_0x9cb11e=this['beforeActor']();let _0x2bce14='';if(_0x136e87===_0x3f9780(0x29d)){if(_0x3f9780(0x2c6)===_0x3f9780(0x2c6))_0x2bce14=_0x9cb11e[_0x3f9780(0x29d)];else{if(!this[_0x3f9780(0x103)]){const _0x1467ce=_0x458ebe[_0x3f9780(0x191)]['Settings'][_0x3f9780(0x246)];if(_0x1467ce['volume']===_0x30857a)_0x1467ce['volume']=0x5a;if(_0x1467ce[_0x3f9780(0x1e7)]===_0x581c9a)_0x1467ce[_0x3f9780(0x1e7)]=0x64;if(_0x1467ce[_0x3f9780(0x159)]===_0x166480)_0x1467ce[_0x3f9780(0x159)]=0x0;this[_0x3f9780(0x103)]={'name':_0x1467ce[_0x3f9780(0x24b)]||'','volume':_0x1467ce[_0x3f9780(0x1d6)]||0x0,'pitch':_0x1467ce['pitch']||0x0,'pan':_0x1467ce[_0x3f9780(0x159)]||0x0};}this['_victoryBgm']['name']!==''&&_0x201a05[_0x3f9780(0x1c6)](this[_0x3f9780(0x103)]);}}else{if('MXAmW'===_0x3f9780(0x16f))return _0x33470a[_0x3f9780(0x191)][_0x3f9780(0x15e)][_0x3f9780(0x246)][_0x3f9780(0x261)];else _0x2bce14=Imported['VisuMZ_0_CoreEngine']?_0x9cb11e[_0x3f9780(0x206)](_0x136e87,!![]):_0x9cb11e[_0x3f9780(0x2b8)](_0x136e87);}this['changeTextColor'](ColorManager[_0x3f9780(0x1bb)]()),this['drawText'](_0x2bce14,_0x47e9a7+this[_0x3f9780(0x1e4)](),_0x147fed,_0x2d9b87-this[_0x3f9780(0x1e4)]()*0x2,_0x3f9780(0x24a));},Window_VictoryLevelUpActor[_0x3a9160(0x164)]['drawParamAfterValue']=function(_0x19369f,_0x39d3fc,_0x18f3eb,_0x4b9a5f){const _0x47caa2=_0x3a9160,_0x4936fa=this[_0x47caa2(0x1b6)](),_0x11e038=this[_0x47caa2(0x1f5)];let _0x395656=0x0,_0x2a8af3=0x0,_0x23c3b1='0';if(_0x19369f==='level')_0x395656=_0x4936fa[_0x47caa2(0x29d)],_0x2a8af3=_0x11e038[_0x47caa2(0x29d)],_0x23c3b1=_0x2a8af3;else{if(_0x47caa2(0x17e)!==_0x47caa2(0x17e)){if(this['_spriteset']['isCollapsing']())return _0x46d768(this[_0x47caa2(0x2a2)]['bind'](this),0x7d0);this[_0x47caa2(0x182)]=[],this[_0x47caa2(0xe9)](),this[_0x47caa2(0x1ec)](),this[_0x47caa2(0xfb)]();}else _0x395656=Imported[_0x47caa2(0xfe)]?_0x4936fa[_0x47caa2(0x206)](_0x19369f,![]):_0x4936fa[_0x47caa2(0x2b8)](_0x19369f),_0x2a8af3=Imported['VisuMZ_0_CoreEngine']?_0x11e038[_0x47caa2(0x206)](_0x19369f,![]):_0x11e038[_0x47caa2(0x2b8)](_0x19369f),_0x23c3b1=Imported[_0x47caa2(0xfe)]?_0x11e038[_0x47caa2(0x206)](_0x19369f,!![]):_0x2a8af3;}const _0x3dcc48=_0x2a8af3-_0x395656;this[_0x47caa2(0xf2)](ColorManager[_0x47caa2(0x256)](_0x3dcc48)),this[_0x47caa2(0x2cb)](_0x23c3b1,_0x39d3fc+this[_0x47caa2(0x1e4)](),_0x18f3eb,_0x4b9a5f-this[_0x47caa2(0x1e4)]()*0x2,_0x47caa2(0x24a));},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x272)]=function(_0x169e6e,_0x4699c9,_0x3b02f0,_0x4bba71){const _0x2ec43f=_0x3a9160,_0x55e98f=this['beforeActor'](),_0x450963=this[_0x2ec43f(0x1f5)];let _0x133223=0x0,_0x45dbbc=0x0;if(_0x169e6e===_0x2ec43f(0x29d))_0x2ec43f(0x1b2)!=='bgvoc'?(_0x133223=_0x55e98f[_0x2ec43f(0x29d)],_0x45dbbc=_0x450963[_0x2ec43f(0x29d)]):this[_0x2ec43f(0x236)](...arguments);else{if('cTInk'===_0x2ec43f(0x20e)){this[_0x2ec43f(0x25b)]();if(_0xc548a9['_rewards'][_0x2ec43f(0x292)][_0x2ec43f(0x275)]<=0x0)return;const _0x3f0c98=this[_0x2ec43f(0x13e)](),_0x1df19f=this[_0x2ec43f(0x239)](),_0x99675f=_0x3f0c98?0x8c:_0x56e4a6[_0x2ec43f(0x241)](this['width']/0x2+0x28),_0x47944b=_0x18c11b[_0x2ec43f(0x241)](_0x1df19f*0x3),_0xfe6565=_0x3bb649[_0x2ec43f(0x241)](this[_0x2ec43f(0x1c4)]/0x2-0x8c),_0x3ecf67=_0x21dc34[_0x2ec43f(0x24c)],_0x2b4455=_0x2dac44['normalColor']();this[_0x2ec43f(0x2bc)](),this[_0x2ec43f(0x2cb)](_0x3ecf67,_0x99675f,_0x47944b,_0xfe6565,_0x2ec43f(0x16c));const _0x2f9b9a=_0x3f0c98?0x64:_0x570cf1['round'](this[_0x2ec43f(0x1c4)]/0x2),_0x3c73f7=_0x47944b+_0x1df19f*1.5,_0x71dc25=_0x1677b7[_0x2ec43f(0x241)](this[_0x2ec43f(0x1c4)]/0x2)-0x64;this[_0x2ec43f(0xf8)][_0x2ec43f(0x2c1)](_0x2f9b9a,_0x3c73f7,_0x71dc25,0x2,_0x2b4455);}else _0x133223=Imported[_0x2ec43f(0xfe)]?_0x55e98f['paramValueByName'](_0x169e6e,![]):_0x55e98f['param'](_0x169e6e),_0x45dbbc=Imported[_0x2ec43f(0xfe)]?_0x450963[_0x2ec43f(0x206)](_0x169e6e,![]):_0x450963['param'](_0x169e6e);}const _0x675899=_0x45dbbc-_0x133223;let _0x5c9520=_0x675899;if(_0x133223%0x1!==0x0)_0x5c9520=Math['round'](_0x675899*0x64)+'%';_0x675899!==0x0&&(this[_0x2ec43f(0xf2)](ColorManager[_0x2ec43f(0x256)](_0x675899)),_0x5c9520=(_0x675899>=0x0?_0x2ec43f(0x254):'(%1)')[_0x2ec43f(0x15c)](_0x5c9520),this[_0x2ec43f(0x2cb)](_0x5c9520,_0x4699c9+this[_0x2ec43f(0x1e4)](),_0x3b02f0,_0x4bba71-this[_0x2ec43f(0x1e4)]()*0x2,_0x2ec43f(0x16c)));},Window_VictoryLevelUpActor[_0x3a9160(0x164)]['drawNewLearnedSkills']=function(){const _0x3b4562=_0x3a9160;this[_0x3b4562(0x25b)]();const _0x6cbde3=this[_0x3b4562(0x245)]();if(_0x6cbde3['length']<=0x0)return;const _0x1cd99e=VisuMZ['VictoryAftermath'][_0x3b4562(0x15e)][_0x3b4562(0x152)]['MaxSkills'];while(_0x6cbde3[_0x3b4562(0x275)]>_0x1cd99e){_0x6cbde3[_0x3b4562(0x24f)]();}this[_0x3b4562(0x2d7)](_0x6cbde3),this['drawNewLearnedSkillsList'](_0x6cbde3);},Window_VictoryLevelUpActor['prototype'][_0x3a9160(0x245)]=function(){const _0x522e17=_0x3a9160,_0x59c57b=this[_0x522e17(0x1b6)]()[_0x522e17(0x10f)]();return this[_0x522e17(0x1f5)][_0x522e17(0x245)](_0x59c57b);},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x2d7)]=function(_0x4d04bd){const _0x2bead8=_0x3a9160,_0x47a840=this['lineHeight'](),_0x21d862=_0x2bead8(0x212),_0x2dccc5=_0x2bead8(0x257),_0x172de1=ColorManager[_0x2bead8(0x1bb)](),_0x461757=Math[_0x2bead8(0x241)](this[_0x2bead8(0x1c4)]/0x2)-0x64-_0x47a840*0x2,_0x57b729=(_0x4d04bd['length']+0x1)*_0x47a840,_0x2dd50c=_0x47a840,_0x26e157=this[_0x2bead8(0x1bd)]-_0x47a840*6.5-_0x57b729;this['contents'][_0x2bead8(0x2c1)](_0x2dd50c-0x2,_0x26e157-0x2,_0x461757+0x4,_0x57b729+0x4,_0x172de1),this['contents']['clearRect'](_0x2dd50c,_0x26e157,_0x461757,_0x57b729),this[_0x2bead8(0xf8)][_0x2bead8(0x294)](_0x2dd50c,_0x26e157,_0x461757,_0x57b729,_0x21d862,_0x2dccc5);},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x1f8)]=function(_0x477fe2){const _0xe2d5af=_0x3a9160,_0x3a917f=this[_0xe2d5af(0x239)](),_0x36d133='rgba(0,\x200,\x200,\x200.8)',_0x56f0ab='rgba(0,\x200,\x200,\x200.4)',_0x535972=ColorManager[_0xe2d5af(0x1bb)](),_0xd3d0a6=Math[_0xe2d5af(0x241)](this[_0xe2d5af(0x1c4)]/0x2)-0x64-(_0x3a917f+this[_0xe2d5af(0x1e4)]())*0x2,_0x1c43c9=(_0x477fe2[_0xe2d5af(0x275)]+0x1)*_0x3a917f;let _0x39bd56=_0x3a917f+this[_0xe2d5af(0x1e4)](),_0xc676ba=this[_0xe2d5af(0x1bd)]-_0x3a917f*6.5-_0x1c43c9;const _0x3703b5=TextManager[_0xe2d5af(0x173)]['format'](this[_0xe2d5af(0x1f5)][_0xe2d5af(0x226)]()),_0x28b8d8=this['textSizeEx'](_0x3703b5)[_0xe2d5af(0x1c4)],_0x351509=Math['round'](_0x39bd56+(_0xd3d0a6-_0x28b8d8)/0x2);this[_0xe2d5af(0x1a5)](_0x3703b5,_0x351509,_0xc676ba,_0x28b8d8),_0xc676ba+=_0x3a917f,this[_0xe2d5af(0xf8)]['fillRect'](_0x39bd56,_0xc676ba-0x1,_0xd3d0a6,0x2,_0x535972);for(const _0x37db70 of _0x477fe2){if(_0xe2d5af(0x107)!=='HfAJX'){if(!_0x37db70)continue;this[_0xe2d5af(0x25b)](),this[_0xe2d5af(0x2a6)](_0x37db70,_0x39bd56+this[_0xe2d5af(0x1e4)](),_0xc676ba,_0xd3d0a6-this[_0xe2d5af(0x1e4)]()*0x2),_0xc676ba+=_0x3a917f;}else return 0x0;}},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x268)]=function(){const _0x1f0128=_0x3a9160,_0x81a6a6=this[_0x1f0128(0x239)](),_0x3f55c5=Window_VictoryLevelUpActor['_showFace'],_0x16de4a=this['getQuoteWidth'](),_0x2bacac=_0x81a6a6*0x4,_0x37645d=Math[_0x1f0128(0x241)]((this[_0x1f0128(0x1c4)]-_0x16de4a)/0x2),_0x17ca03=_0x37645d+(_0x3f55c5?ImageManager[_0x1f0128(0x117)]+0x14:0x0),_0xe25f63=this[_0x1f0128(0x1bd)]-_0x81a6a6*5.5;let _0x58d4c6=this[_0x1f0128(0x28f)]();_0x3f55c5&&(_0x1f0128(0x1d0)!==_0x1f0128(0x14e)?this['drawActorFace'](this[_0x1f0128(0x1f5)],_0x37645d,_0xe25f63,ImageManager['faceWidth'],ImageManager['faceHeight']):this[_0x1f0128(0x1e1)]()),this[_0x1f0128(0x1a5)](_0x58d4c6,_0x17ca03,_0xe25f63,_0x16de4a-_0x17ca03);},Window_VictoryLevelUpActor[_0x3a9160(0x164)]['getQuoteWidth']=function(){const _0x1dc4db=_0x3a9160;let _0x55451a=Graphics[_0x1dc4db(0x233)];if(Imported['VisuMZ_1_MessageCore']){if(_0x1dc4db(0x269)===_0x1dc4db(0x269))_0x55451a=Math[_0x1dc4db(0x157)](_0x55451a,VisuMZ[_0x1dc4db(0x194)][_0x1dc4db(0x15e)][_0x1dc4db(0x246)]['MessageWidth']);else return!![];}return _0x55451a-this[_0x1dc4db(0x1e4)]()*0x2;},Window_VictoryLevelUpActor[_0x3a9160(0x164)][_0x3a9160(0x28f)]=function(){const _0x3ba8f0=_0x3a9160;if(this[_0x3ba8f0(0x245)]()['length']>0x0){if(_0x3ba8f0(0x170)===_0x3ba8f0(0x170))return TextManager[_0x3ba8f0(0x277)](this[_0x3ba8f0(0x1f5)])[_0x3ba8f0(0x15c)](this['_actor']['name']());else _0x525d39['newSkillQuotes']()[_0x3ba8f0(0x16b)](_0x358530[_0x3ba8f0(0x20a)]());}else return TextManager[_0x3ba8f0(0x163)](this[_0x3ba8f0(0x1f5)])[_0x3ba8f0(0x15c)](this[_0x3ba8f0(0x1f5)][_0x3ba8f0(0x226)]());};