//=============================================================================
// VisuStella MZ - Aggro Control System
// VisuMZ_2_AggroControlSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_AggroControlSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AggroControlSystem = VisuMZ.AggroControlSystem || {};
VisuMZ.AggroControlSystem.version = 1.18;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.18] [AggroControlSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Aggro_Control_System_VisuStella_MZ
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * A common mechanic found in many RPG's nowadays is the ability to steer the
 * way enemies target party members. This can be in the form of provocations, 
 * taunts, and aggro.
 *
 * Provocations come in the form of states, where when a unit applies a provoke
 * state on a target, the target must attack the provoker when using single
 * target skills. This plugin provides support for multiple provocations and
 * such provocations will be given focus based on the state's priority value.
 *
 * Taunts are a third way to steer an opponent to focus on a party member. The
 * taunt effects can be split up into global, physical, magical, or certain hit
 * only taunts and these can be applied to almost any trait object.
 *
 * Aggro is a numeric value that determines the likelihood and/or priority
 * level of how often a target party member is to be attacked by an enemy unit.
 * The higher the aggro value, the more likely the chances of being targeted.
 * A option can be turned on (or through notetags) to set enemies to always
 * target the party member with the highest aggro.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Three different ways to influencing which targets enemies should attack:
 *   Provoke, taunt, and aggro.
 * * Provoke and taunt effects work both ways for actors and enemies.
 * * Aggro effects accumulate through battle and can be manipulated through
 *   notetag values, Plugin Commands, and/or Plugin Parameters.
 * * Provoked battlers can have provoke lines displayed to indicate which
 *   unit has provoked them.
 * * Taunting units can have animations played on them repeatedly to quickly
 *   relay information to the player about their taunt properties.
 * * Gauges that can be displayed over the heads of actor sprites to display
 *   how much aggro that actor holds in comparison to the other actors.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_0_CoreEngine
 * VisuMZ_1_BattleCore
 *
 * - Provoke Priority Lines and Taunt animations become available if these
 *   plugins are installed.
 *
 * ---
 *
 * ============================================================================
 * How Aggro, Provoke, and Taunts Work
 * ============================================================================
 *
 * This section will explain how aggro, provoke, and taunts work.
 *
 * ---
 *
 * Provoke
 *
 * - Provocations come in the form of states, where when a unit applies a
 * provoke state on a target, the target must attack the provoker when using
 * single target skills. This plugin provides support for multiple provocations
 * and such provocations will be given focus based on the state's database
 * priority value.
 *
 * - The provoke will last only as long as the duration of the state itself. If
 * the state's duration is refreshed by reapplying the Provoke state, then the
 * provoker of that state will then switch over to the one applying the newly
 * added state.
 *
 * - When an actor selects a target for an action and the actor is provoked by
 * an enemy on the other team, the player's choice selection becomes limited to
 * only the provoker.
 *
 * - Provoke can be bypassed through the <Bypass Provoke> notetag.
 *
 * ---
 *
 * Taunts
 *
 * - Taunts are a third way to steer an opponent to focus on a party member.
 * The taunt effects can be split up into global, physical, magical, or certain
 * hit only taunts and these can be applied to almost any trait object.
 *
 * - When an actor selects a target and the enemy team has a taunting unit,
 * the player's choice selection becomes limited to only the targets with the
 * associated taunt type.
 *
 * - Taunts can be bypassed through the <Bypass Taunt> notetag.
 *
 * ---
 *
 * Aggro
 *
 * - Aggro is a numeric value that determines the likelihood and/or priority
 * level of how often a target party member is to be attacked by an enemy unit.
 * The higher the aggro value, the more likely the chances of being targeted.
 * A option can be turned on (or through notetags) to set enemies to always
 * target the party member with the highest aggro.
 *
 * - Skills and items can raise its user's aggro value through notetags and/or
 * how much damage they've dealt or healed. Skills and items can also change a
 * target's aggro value through notetags, too.
 *
 * - Through the Plugin Parameters, you can set Aggro to automatically raised
 * based on how much damage or healing dealt by a user.
 *
 * - Some enemies can be bypass forced aggro target through the <Bypass Aggro>
 * notetag while other enemies can be forced to target the highest aggro target
 * through the <Target Highest Aggro> notetag;
 *
 * ---
 *
 * Priorities
 *
 * - Priority will be given in the order of provokes, taunts, and then aggro.
 * This means if an enemy is provoked, the opposing side has a taunt, and there
 * is a member with high aggro, then the enemy will always attack the provoker
 * first before targeting a taunting unit before targeting the unit with high
 * aggro values.
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
 * === Provoke-Related Notetags ===
 *
 * The following notetags enable you to utilize the Provoke effects added by
 * this plugin. Provoked targets can only attack the provoking unit for single
 * target actions.
 *
 * ---
 *
 * <Provoke>
 *
 * - Used for: State Notetags
 * - Causes the state affected unit to be able to only attack the caster of the
 *   provoke state for single target actions.
 * - If multiple provoke states are applied, then the provoker is the one who
 *   applied the highest priority provoke state.
 *
 * ---
 *
 * <Bypass Provoke>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Makes the affected unit to ignore any and all provoke effects applied by
 *   any provoke states, allowing them to target foes as if they are unaffected
 *   by provoke states altogether.
 *
 * ---
 * 
 * <Bypass Provoke>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass provoke effects applied by any provoke states,
 *   allowing this action to target foes as if the user is unaffected by any
 *   provoke effects altogether.
 * 
 * ---
 * 
 * <Provoke Height Origin: x%>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the provoke height origin point to x% of the sprite's height.
 * - This is the landing point for the provoke trails.
 * - Replace 'x' with a number presenting what rate of the sprite's height to
 *   set as the provoke height origin point.
 * 
 * ---
 *
 * === Taunt-Related Notetags ===
 *
 * ---
 *
 * <Taunt>
 * <All Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the taunting unit to become the target of the opposing team's
 *   single target actions for physical, magical, and certain hit actions.
 * - If multiple taunters exist, then the opposing team can select between any
 *   of the taunters for targets.
 *
 * ---
 *
 * <Physical Taunt>
 * <Magical Taunt>
 * <Certain Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the taunting unit to become the target of the opposing team's
 *   single target actions for physical, magical, and certain hit actions
 *   respectively.
 * - Add/remove any combination of the above to cause the affected unit to
 *   become the target of those types of actions.
 * - If multiple taunters exist, then the opposing team can select between any
 *   of the taunters for targets.
 *
 * ---
 *
 * <Bypass Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The affected unit will ignore any and all taunt effects created by the
 *   opposing team, allowing them to use single target actions as if no
 *   taunters exist on the opposing team.
 *
 * ---
 * 
 * <Bypass Taunt>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass taunt effects created by the opposing team,
 *   allowing the user to use single target actions as if no taunters exist on
 *   the opposing team.
 * 
 * ---
 *
 * === Aggro-Related Notetags ===
 *
 * ---
 *
 * <User Aggro: +x>
 * <User Aggro: -x>
 *
 * - Used for: Skill, Item
 * - Upon using this action, raise the user's battle aggro value by 'x'.
 * - Replace 'x' with the amount of battle aggro to increase/decrease by.
 * - This effect will only apply once per usage regardless of the number of
 *   successful hits landed by the action.
 *
 * ---
 *
 * <Target Aggro: +x>
 * <Target Aggro: -x>
 *
 * - Used for: Skill, Item
 * - Upon using this action, raise the target's battle aggro value by 'x'.
 * - Replace 'x' with the amount of battle aggro to increase/decrease by.
 * - This effect will apply multiple times based on the number of successful
 *   hits landed by the action.
 *
 * ---
 *
 * <Aggro: +x>
 * <Aggro: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected unit to passively have increased/decreased aggro
 *   values independent of the amount of aggro it earns in battle.
 * - Replace 'x' with the amount of aggro this object increases/decreases by.
 *
 * ---
 *
 * <Aggro Multiplier: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected unit to increase the amount of perceived aggro it has
 *   by the aggro multiplier.
 * - Replace 'x' with a number representing the percentage to increase/decrease
 *   the perceived aggro by.
 * - If multiple of these traits exist across different trait objects, the
 *   effects are increased multiplicatively.
 *
 * ---
 *
 * <Bypass Highest Aggro>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - If used on skills or items, the action will decide targets by aggro weight
 *   instead of always picking the highest aggro unit(s).
 * - If used on trait objects, the affected unit will decide targets by aggro
 *   weight instead of always picking the highest aggro unit(s).
 * - This is used for enemy A.I. or Actor auto battle A.I.
 *
 * ---
 * 
 * <Bypass Highest Aggro>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass highest aggro effects and instead focuses on
 *   targets by aggro weight instead.
 * - This is used for enemy A.I. or Actor auto battle A.I.
 * 
 * ---
 *
 * <Target Highest Aggro>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - If used on skills or items, the action will always decide its targets by
 *   the highest aggro value.
 * - If used on trait objects, the affected unit will always decide on targets
 *   by the highest aggro value.
 * - If the <Bypass Highest Aggro> notetag exists, this effect is ignored.
 * - This is used for enemy A.I. or Actor auto battle A.I.
 *
 * ---
 *
 * === JavaScript Notetags: Aggro-Related ===
 *
 * ---
 *
 * <JS User Aggro>
 *  code
 *  code
 *  value = code
 * </JS User Aggro>
 *
 * - Used for: Skill, Item
 * - Replace 'code' with JavaScript code to determine the final 'value' to
 *   change the user's battle aggro to upon using this skill.
 * - The 'user' variable represents the one using the skill/item.
 * - The 'target' variable represents the one receiving the skill/item hit.
 * - This effect will only apply once per usage regardless of the number of
 *   successful hits landed by the action.
 *
 * ---
 *
 * <JS Target Aggro>
 *  code
 *  code
 *  value = code
 * </JS Target Aggro>
 *
 * - Used for: Skill, Item
 * - Replace 'code' with JavaScript code to determine the final 'value' to
 *   change target's battle aggro to upon using this skill.
 * - The 'user' variable represents the one using the skill/item.
 * - The 'target' variable represents the one receiving the skill/item hit.
 * - This effect will apply multiple times based on the number of successful
 *   hits landed by the action.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Aggro
 * - Changes target actor's aggro value.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Change Aggro By:
 *   - Change aggro by this amount.
 *   - Use negative numbers to reduce aggro.
 *
 * ---
 *
 * Actor: Set Aggro
 * - Set target actor's aggro value.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Set Aggro To:
 *   - Sets target's aggro to this amount.
 *   - Aggro must be at least a value of 1.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Aggro
 * - Changes target enemy's aggro value.
 *
 *   Enemy Index:
 *   - Select which Enemy Index to affect.
 *
 *   Change Aggro By:
 *   - Change aggro by this amount.
 *   - Use negative numbers to reduce aggro.
 *
 * ---
 *
 * Enemy: Set Aggro
 * - Set target enemy's aggro value.
 *
 *   Enemy Index:
 *   - Select which Enemy Index to affect.
 *
 *   Set Aggro To:
 *   - Sets target's aggro to this amount.
 *   - Aggro must be at least a value of 1.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Provoke Settings
 * ============================================================================
 *
 * The Provoke Settings Plugin Parameters adjust the visual aspects related to
 * the provoke effect. These settings will require VisuMZ_1_BattleCore to be
 * installed in order for them to work due to dependencies. 
 *
 * ---
 *
 * VisuMZ_1_BattleCore
 * 
 *   Show Priority Lines?:
 *   - Show priority target lines for this plugin?
 *   - Requires VisuMZ_1_BattleCore.
 *
 * ---
 *
 * Line Settings
 * 
 *   Arc Height:
 *   - How tall should the line arc in pixels?
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Height Origin:
 *   - The rate from the battler's sprite base to determine where the line
 *     starts from.
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Opacity:
 *   - The highest possible opacity for active provoke lines.
 * 
 *   Opacity Speed:
 *   - The speed at which opacity fluctuates for the line sprite.
 * 
 *   Parts:
 *   - The number of joint parts to split up the sprite as.
 * 
 *   Parts Size:
 *   - The number in pixels for the diameter of each part.
 *
 * ---
 * 
 * Options
 * 
 *   Add Provoke Option?
 *   - Add the 'Show Provoke Origin' option to the Options menu?
 * 
 *   Adjust Window Height
 *   - Automatically adjust the options window height?
 * 
 *   Option Name
 *   - Command name of the option.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Taunt Settings
 * ============================================================================
 *
 * Battlers with specific taunt types can have animations playing on them over
 * and over to relay information to the player. These settings require you to
 * have both VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore installed in your
 * project's plugin list in order to use.
 *
 * ---
 *
 * VisuMZ_0_CoreEngine & VisuMZ_1_BattleCore
 * 
 *   Show Animations?:
 *   - Show animations for each of the taunt effects?
 *   - Requires VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore.
 *
 * ---
 *
 * Animation ID's
 * 
 *   Physical Taunt:
 *   - The animation ID used for physical taunts.
 *   - Use 0 or 'None' to bypass this type.
 * 
 *   Magical Taunt:
 *   - The animation ID used for magical taunts.
 *   - Use 0 or 'None' to bypass this type.
 * 
 *   Certain Hit Taunt:
 *   - The animation ID used for certain hit taunts.
 *   - Use 0 or 'None' to bypass this type.
 *
 * ---
 *
 * Animation Settings
 * 
 *   Cycle Time:
 *   - The amount of frames to wait before each animation cycle.
 *   - WARNING: Lower numbers can jeopardize game performance.
 * 
 *   Mirror Actor Ani?:
 *   - Mirror animations played on actors?
 * 
 *   Mute Animation SFX?:
 *   - Mute sounds played by animations?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Aggro Settings
 * ============================================================================
 *
 * This lets you adjust the settings for this plugin's Aggro mechanics. Most of
 * these settings focus on the visual gauge display of the Aggro gauge, but you
 * can also change up the settings for how aggro is utilized.
 *
 * ---
 *
 * General
 * 
 *   Priority: Highest TGR:
 *   - When enemies target actors for an single target attack, always target
 *     the highest members or make it weighted?
 *
 *   Aggro Per Damage:
 *   - The amount of aggro generated per point of HP damage dealt to an enemy.
 *
 *   Aggro Per Heal:
 *   - The amount of aggro generated per point of HP recovered to an ally.
 *
 * ---
 *
 * Gauge
 * 
 *   Visible Battler Gauge:
 *   - Display an aggro gauge over an SV actor's head to show current aggro
 *     level compared to other party members.
 * 
 *   Visible Status Gauge:
 *   - Display an aggro gauge in the Battle Status Window to show the current
 *     aggro level compared to others.
 * 
 *   Gauge Color 1:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Width:
 *   - Width in pixels you want the gauge to be.
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Where do you want the Aggro Gauge sprite's anchor X/Y to be?
 *   - Use values between 0 and 1 to be safe.
 * 
 *   Scale:
 *   - How large/small do you want the Aggro Gauge to be scaled?
 * 
 *   Battler Gauge
 * 
 *     Offset X:
 *     Offset Y:
 *     - How many pixels to offset the Aggro Gauge's X/Y by?
 * 
 *   Battle Status Gauge
 * 
 *     Offset X:
 *     Offset Y:
 *     - How many pixels to offset the Aggro Gauge's X/Y by?
 *
 * ---
 * 
 * Options
 * 
 *   Add Provoke Option?
 *   - Add the 'Show Aggro Gauge' option to the Options menu?
 * 
 *   Adjust Window Height
 *   - Automatically adjust the options window height?
 * 
 *   Option Name
 *   - Command name of the option.
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
 * Version 1.18: March 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.17: August 17, 2023
 * * Compatibility Update!
 * ** When enemies use skills with VisuStella MZ Battle A.I. installed, aggro
 *    settings will no longer automatically target "highest aggro targets" if
 *    there are <AI Targets: x> notetags.
 * 
 * Version 1.16: July 13, 2023
 * * Bug Fixes!
 * ** Fixed an issue with non-weighted aggro selected actions that will cause
 *    actors (instead of just enemies) to also target highest TGR enemies.
 *    Fix made by Irina.
 * 
 * Version 1.15: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused <All Taunt> to not work properly.
 *    Fix made by Irina.
 * 
 * Version 1.14: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause cached battlers from a previous save file to
 *    not load up properly when actions are used for highest aggro actors.
 *    Fix made by Irina.
 * 
 * Version 1.13: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a problem that would cause a crash when exiting the Options menu in
 *    battle when used with specific battle systems. Fix made by Irina.
 * 
 * Version 1.12: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.73
 *    new features.
 * 
 * Version 1.11: November 17, 2022
 * * Bug Fixes!
 * ** <JS User Aggro> and <JS Target Aggro> should now work properly.
 *    Fix made by Arisu.
 * 
 * Version 1.10: August 25, 2022
 * * Documentation Update!
 * ** Added note to the <Provoke> notetag:
 * *** States with <Provoke> on them will automatically remove themselves if
 *     the provoker dies. Update made by Arisu.
 * * Feature Update!
 * ** States with <Provoke> on them will automatically remove themselves if the
 *    provoker dies. Update made by Arisu.
 * 
 * Version 1.09: June 2, 2022
 * * Bug Fixes!
 * ** Filename has been shortened from VisuMZ_2_AggroControlSystem.js to
 *    VisuMZ_2_AggroControlSys.js due to deployment reasons. For some mobile
 *    devices, keeping the name as long as VisuMZ_2_AggroControlSystem.js
 *    causes problems, but VisuMZ_2_AggroControlSys.js is fine. Take note of
 *    this while you are updating.
 * ** 'user' and 'target' now works properly with the JS notetags.
 *    Fix made by Irina.
 * 
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Highest and lowest TGR members are now cached on an action by action
 *    basis for reduce needed computations. Update made by Irina.
 * 
 * Version 1.07: April 9, 2021
 * * Bug Fixes!
 * ** Provoke effect now takes into consideration when Provoke is applied by
 *    a weapon effect that comes off a counter attack from an actor. Fix made
 *    by Olivia.
 * 
 * Version 1.06: March 12, 2021
 * * Bug Fixes!
 * ** Subsequent battles or changing scenes should no longer clear the custom
 *    rendered bitmap used for the provoke trail. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for the Skill and Item versions of the following
 *    notetags into the help file and wiki:
 * *** <Bypass Provoke>
 * *** <Bypass Taunt>
 * *** <Bypass Highest Aggro>
 * 
 * Version 1.05: March 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Aggro Settings > Battle Status Gauge
 * **** These settings allow you to offset the Aggro Gauge in the Battle Status
 *      Window from its original position.
 * 
 * Version 1.04: February 26, 2021
 * * Bug Fixes!
 * ** Fixed positioning of gauge for List Style battle layouts without faces.
 *    Fix made by Olivia.
 * 
 * Version 1.03: February 5, 2021
 * * Feature Update!
 * ** Aggro is now cleared at the end of each battle in addition to the start
 *    of each battle. Update made by Olivia.
 *
 * Version 1.02: November 1, 2020
 * * Compatibility Update!
 * ** Plugin is made more compatible with other plugins.
 * 
 * Version 1.01: October 4, 2020
 * * Bug Fixes!
 * ** Provoke lines should now be placed correctly if the UI area is smaller
 *    than the resolution area.
 * ** The Plugin Commands should no longer cause crashes. Fix made by Irina.
 *
 * Version 1.00: September 28, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeAggro
 * @text Actor: Change Aggro
 * @desc Changes target actor's aggro value.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Aggro:num
 * @text Change Aggro By
 * @desc Change aggro by this amount.
 * Use negative numbers to reduce aggro.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorSetAggro
 * @text Actor: Set Aggro
 * @desc Set target actor's aggro value.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Aggro:num
 * @text Set Aggro To
 * @desc Sets target's aggro to this amount.
 * Aggro must be at least a value of 1.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyChangeAggro
 * @text Enemy: Change Aggro
 * @desc Changes target enemy's aggro value.
 *
 * @arg EnemyIndex:num
 * @text Enemy Index
 * @type actor
 * @desc Select which Enemy Index to affect.
 * @default 0
 *
 * @arg Aggro:num
 * @text Change Aggro By
 * @desc Change aggro by this amount.
 * Use negative numbers to reduce aggro.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemySetAggro
 * @text Enemy: Set Aggro
 * @desc Set target enemy's aggro value.
 *
 * @arg EnemyIndex:num
 * @text Enemy Index
 * @type actor
 * @desc Select which Enemy Index to affect.
 * @default 0
 *
 * @arg Aggro:num
 * @text Set Aggro To
 * @desc Sets target's aggro to this amount.
 * Aggro must be at least a value of 1.
 * @default 1
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
 * @param AggroControl
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Provoke:struct
 * @text Provoke Settings
 * @type struct<Provoke>
 * @desc Settings related to the Provoke mechanic.
 * These settings require VisuMZ_1_BattleCore.
 * @default {"VisuMZ_1_BattleCore":"","ShowLines:eval":"true","LineSettings":"","ArcHeight:num":"125","BlendMode:num":"1","HeightOrigin:num":"0.8","LineColor:str":"#ff0000","Opacity:num":"255","OpacitySpeed:num":"4","Parts:num":"256","PartsSize:num":"5","Options":"","AddOption:eval":"true","AdjustOptionsRect:eval":"true","OptionName:str":"Show Provoke Origin"}
 *
 * @param Taunt:struct
 * @text Taunt Settings
 * @type struct<Taunt>
 * @desc Settings related to the Taunt mechanic.
 * @default {"Dependency":"VisuMZ_1_BattleCore","ShowAnimation:eval":"true","AnimationID":"","AniPhysical:num":"1","AniMagical:num":"2","AniCertain:num":"3","AnimationSettings":"","CycleTime:num":"60","MirrorActorAni:eval":"true","MuteAnimations:eval":"true"}
 *
 * @param Aggro:struct
 * @text Aggro Settings
 * @type struct<Aggro>
 * @desc Settings related to the Aggro mechanic.
 * @default {"General":"","PriorityHighest:eval":"true","AggroPerDmg:num":"0.1","AggroPerHeal:num":"0.5","Gauge":"","VisibleGauge:eval":"false","StatusGauge:eval":"true","GaugeColor1:str":"#959595","GaugeColor2:str":"#ffffff","AnchorX:num":"0.5","AnchorY:num":"1.0","Scale:num":"0.5","OffsetX:num":"+0","OffsetY:num":"+2","Options":"","AddOption:eval":"true","AdjustOptionsRect:eval":"true","OptionName:str":"Show Aggro Gauge"}
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
 * Provoke Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Provoke:
 *
 * @param VisuMZ_1_BattleCore
 *
 * @param ShowLines:eval
 * @text Show Priority Lines?
 * @parent VisuMZ_1_BattleCore
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show priority target lines for this plugin?
 * Requires VisuMZ_1_BattleCore.
 * @default true
 *
 * @param LineSettings
 * @text Line Settings
 *
 * @param ArcHeight:num
 * @text Arc Height
 * @parent LineSettings
 * @type number
 * @desc How tall should the line arc in pixels?
 * @default 125
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent LineSettings
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @param HeightOrigin:num
 * @text Height Origin
 * @parent LineSettings
 * @desc The rate from the battler's sprite base to determine where the line starts from.
 * @default 0.8
 *
 * @param LineColor:str
 * @text Line Color
 * @parent LineSettings
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ff0000
 *
 * @param Opacity:num
 * @text Opacity
 * @parent LineSettings
 * @type number
 * @min 1
 * @max 255
 * @desc The highest possible opacity for active provoke lines.
 * @default 255
 *
 * @param OpacitySpeed:num
 * @text Opacity Speed
 * @parent Opacity:num
 * @type number
 * @min 1
 * @desc The speed at which opacity fluctuates for the line sprite.
 * @default 4
 *
 * @param Parts:num
 * @text Parts
 * @parent LineSettings
 * @type number
 * @min 1
 * @desc The number of joint parts to split up the sprite as.
 * @default 256
 *
 * @param PartsSize:num
 * @text Parts Size
 * @parent Parts:num
 * @type number
 * @min 1
 * @desc The number in pixels for the diameter of each part.
 * @default 5
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Provoke Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show Provoke Origin' option to the Options menu?
 * @default true
 *
 * @param AdjustOptionsRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionName:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show Provoke Origin
 *
 */
/* ----------------------------------------------------------------------------
 * Taunt Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Taunt:
 *
 * @param Dependency
 * @text VisuMZ_0_CoreEngine
 * @default VisuMZ_1_BattleCore
 *
 * @param ShowAnimation:eval
 * @text Show Animations?
 * @parent Dependency
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show animations for each of the taunt effects?
 * Requires VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore.
 * @default true
 *
 * @param AnimationID
 * @text Animation ID's
 *
 * @param AniPhysical:num
 * @text Physical Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for physical taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 13
 *
 * @param AniMagical:num
 * @text Magical Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for magical taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 14
 *
 * @param AniCertain:num
 * @text Certain Hit Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for certain hit taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 15
 *
 * @param AnimationSettings
 * @text Animation Settings
 *
 * @param CycleTime:num
 * @text Cycle Time
 * @parent AnimationSettings
 * @type number
 * @min 1
 * @desc The amount of frames to wait before each animation cycle.
 * WARNING: Lower numbers can jeopardize game performance.
 * @default 60
 *
 * @param MirrorActorAni:eval
 * @text Mirror Actor Ani?
 * @parent AnimationSettings
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations played on actors?
 * @default true
 *
 * @param MuteAnimations:eval
 * @text Mute Animation SFX?
 * @parent AnimationSettings
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute sounds played by animations?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Aggro Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Aggro:
 *
 * @param General
 *
 * @param PriorityHighest:eval
 * @text Priority: Highest TGR
 * @parent General
 * @type boolean
 * @on Always
 * @off Weighted
 * @desc When enemies target actors for an single target attack,
 * always target the highest members or make it weighted?
 * @default true
 *
 * @param AggroPerDmg:num
 * @text Aggro Per Damage
 * @parent General
 * @desc The amount of aggro generated per point of HP damage dealt to an enemy.
 * @default 0.1
 *
 * @param AggroPerHeal:num
 * @text Aggro Per Heal
 * @parent General
 * @desc The amount of aggro generated per point of HP recovered to an ally.
 * @default 0.5
 *
 * @param Gauge
 *
 * @param VisibleGauge:eval
 * @text Visible Battler Gauge
 * @parent Gauge
 * @type boolean
 * @on Visible
 * @off None
 * @desc Display an aggro gauge over an SV actor's head to show
 * current aggro level compared to other party members.
 * @default false
 *
 * @param StatusGauge:eval
 * @text Visible Status Gauge
 * @parent Gauge
 * @type boolean
 * @on Visible
 * @off None
 * @desc Display an aggro gauge in the Battle Status Window
 * to show the current aggro level compared to others.
 * @default true
 *
 * @param GaugeColor1:str
 * @text Gauge Color 1
 * @parent Gauge
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #959595
 *
 * @param GaugeColor2:str
 * @text Gauge Color 2
 * @parent Gauge
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Gauge
 * @desc Where do you want the Aggro Gauge sprite's anchor X to be?
 * Use values between 0 and 1 to be safe.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Gauge
 * @desc Where do you want the Aggro Gauge sprite's anchor Y to be?
 * Use values between 0 and 1 to be safe.
 * @default 1.0
 *
 * @param Scale:num
 * @text Scale
 * @parent Gauge
 * @desc How large/small do you want the Aggro Gauge to be scaled?
 * @default 0.5
 * 
 * @param BattlerGauge
 * @text Battler Gauge
 * @parent Gauge
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent BattlerGauge
 * @desc How many pixels to offset the Aggro Gauge's X by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent BattlerGauge
 * @desc How many pixels to offset the Aggro Gauge's Y by?
 * Negative goes up. Positive goes down.
 * @default +2
 * 
 * @param BattleStatus
 * @text Battle Status Gauge
 * @parent Gauge
 *
 * @param BattleStatusOffsetX:num
 * @text Offset X
 * @parent BattleStatus
 * @desc How many pixels to offset the Aggro Gauge's X by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param BattleStatusOffsetY:num
 * @text Offset Y
 * @parent BattleStatus
 * @desc How many pixels to offset the Aggro Gauge's Y by?
 * Negative goes up. Positive goes down.
 * @default +0
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show Aggro Gauge' option to the Options menu?
 * @default true
 *
 * @param AdjustOptionsRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionName:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show Aggro Gauge
 *
 */
//=============================================================================

function _0x14aa(){const _0x570a33=['reduce','GaugeColor2','_certainHitTauntAnimation','_menuAggroType','IFxAY','width','nHNuz','magicalTauntMembers','highestTgrMember','PhLyc','provokeOrigin','physicalTauntMembers','endBattle','1659452jGkXSX','_tauntAnimationCycle','ArcHeight','HITTYPE_MAGICAL','bypassProvoke','maxSprites','gaugeHeight','_lowestTgrMember','_statusWindow','removeDeadProvokerStates','setAggro','Aggro','map','ConvertParams','fqJEc','aggroGaugeColor1','indexOf','name','round','AniMagical','tauntTargetsForAlive','%1Taunt','bitmapHeight','isEnemy','Window_Options_addGeneralOptions','stateHasProvoke','createStateSprite','OmYFD','itemRectWithPadding','placeGauge','aggro','CVIqL','tgr','removeState','updateSubPositions','log','vNyTf','battleLayoutStyle','return\x200','isAggroGaugeShown','AniCertain','anchor','isForAnyone','Game_Action_applyItemUserEffect','Sprite_Battler_setBattler','applyGlobal','currentMaxValueAggroControl','ConfigManager_makeData','aggro-gauge-color-1','ARRAYNUM','_customModified','exit','4316155iUBlVR','AddOption','updateTauntAnimations','tgrSumFromGroup','getColorDataFromPluginParameters','_homeX','BattleStatusOffsetY','getBattlerKeyTargets','_colorCache','itemRect','ARRAYSTRUCT','vnaii','isBypassProvoke','Battle\x20Enemy\x20%1','arcHeight','PFQLe','jdhRj','shift','setBattler','qSrGh','gaugeColor1','targetsForAlive','ShowAnimation','Sprite_Battler_update','getColor','actorId','bJsRY','VisuMZ_3_BattleAI','createProvokeSprite','isAggroAffected','applyProvokeEffect','VisuMZ_1_BattleCore','isStateAffected','EnemySetAggro','inBattle','isActor','YsnCa','provoker','matchTauntType','updateOpacity','vLGxy','JlOSC','gZcxx','refresh','applyTauntFilters','blendMode','battler','_targetIndex','ActorChangeAggro','_enemies','MJmbO','OptionName','_damageContainer','EnemyIndex','_sprites','placeActorName','isTauntAffected','BattleManager_invokeCounterAttack','9292616uSIcqo','AggroPerHeal','pAoda','push','boxHeight','gainAggro','AdjustOptionsRect','aggroGaugeY','BattleCore','_provokeSprite','padding','note','constructor','AniPhysical','Game_Action_applyGlobal','Scene_Options_maxCommands','Sprite_Battler_initMembers','registerCommand','_checkingAggroTarget','MirrorActorAni','parse','11lnqdEi','UaMDd','makeData','aggroGaugeX','_homeY','battleUIOffsetY','applySubjectAggro','nameX','dnEKE','list','textColor','getTauntMembers','Game_Battler_onBattleStart','_animationCycleTime','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','BattleManager_invokeMagicReflection','Window_StatusBase_placeActorName','1495455sCmYGN','_counterAttackingTarget','Settings','AggroPerDmg','OffsetX','SsDmF','updateChildrenOpacity','alwaysTargetHighestAggro','qGhSY','prototype','updateBattlerPositions','Uetvd','scope','PSNvD','bitmap','OpacitySpeed','onBattleStart','EnemyChangeAggro','trim','clearTgrCache','LineColor','isAlive','BattleLayout','addGeneralOptions','isDead','filter','bypassTaunt','createBattleField','initialize','magical','ksMgF','aggroGaugeColor2','Game_BattlerBase_refresh','afwEn','members','ActorID','selectAllActors','addAggroControlSystemCommands','kuvKb','getSpecificBattlerKeyTarget','user','Sprite_Gauge_currentValue','gmQlx','ShowFacesListStyle','zzlbv','some','_battleField','Sprite_Gauge_currentMaxValue','optDisplayTp','aggroMultiplier','RBAET','_mirrorActorTauntAnimations','aggro-gauge-color-2','length','friendsUnit','HmxFR','setHandler','jXfbl','CBbcs','isShowPriorityLines','canSingleOrMultipleSelect','bitmapWidth','executeHpDamageAggroControl','_muteTauntAnimations','ARRAYSTR','_spriteset','match','isProvokeAffected','status','description','isNotEnemySelectAction','provokeBitmap','subject','executeHpDamage','CKsCJ','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Battle\x20Actor\x20%1','eaXFN','opacity','createBattleFieldAggroControl','_tauntAnimationTimer','Game_Battler_addState','nzxlm','STRUCT','maxCommands','Window_BattleEnemy_refresh','createAggroGauge','leftwardAnimation','max','onBattleEnd','time','ALtnx','battleUIOffsetX','MKLeO','pow','updateOpacityAggroControl','drawValue','baseAggro','provokeLineColor','applyItemUserEffectAggroControl','Sprite_Actor_createStateSprite','initMembers','HnWnf','isAggroType','yuqAX','_targetY','updateAggroControl','physical','createChildSprites','OffsetY','Sprite_Battler_initialize','Spriteset_Battle_createBattleField','startNewTauntAnimation','index','enemy','JSON','convertStringToBattleTarget','currentValue','VisuMZ_2_BattleSystemATB','provokeHeightOrigin','actor%1-gauge-aggro','ozNjv','min','_statusType','partsSize','Game_Action_targetsForAlive','certainHitTaunt','isSideView','_opacitySpeed','aTcMP','item','randomTauntTarget','76916IHDvjW','getNextTauntAnimation','ConfigManager_applyData','PartsSize','HITTYPE_CERTAIN','HITTYPE_PHYSICAL','scale','5992385ZvBISt','ojqKk','STR','_cache','setFrame','addAggroControlSystemAggroCommand','_magicalTauntAnimation','YHuDx','isTpb','VisuMZ_0_CoreEngine','actor','BlendMode','Provoke','AggroControlSystem','_aggro','Game_Action_getSpecificBattlerKeyTarget','gaugeX','_provokeContainer','aliveMembers','certainHitTauntMembers','applyProvokeFilters','_provokeBitmap','randomInt','random','initTauntAnimations','_battler','makeProvokeTarget','isSceneBattle','ShowLines','isMagical','JPINZ','pagedown','efSpf','clearAggro','showVisualAtbGauge','XThXY','BattleManager_endBattle','FUNC','aiTarget','taunting','concat','ARRAYJSON','_highestTgrMember','target','sortEnemies','setup','isPlaytest','gaugeColor2','_provoker','update','powgE','tgrMax','VisibleGauge','isAggroGaugeVisible','visible','addState','magicalTaunt','_mainSprite','isBypassTaunt','invokeCounterAttack','Sprite_Gauge_update','isAtbGaugeVisible','Game_BattlerBase_initMembers','qopHK','Game_Action_executeHpDamage','addAggroControlSystemProvokeCommand','Game_BattlerBase_sparam','endAction','opponentsUnit','initAggroControl','maxOpacity','NUM','isCertainHit','version','ezJUQ','tgrMin','applyData','1836600qEHORb','parentContainer','checkCacheKey','MuteAnimations','kqdYE','CycleTime','_scene','toUpperCase','isBypassHighestAggro','Sprite_Gauge_gaugeRate','Opacity','isTargetHighestTGR','format','invokeMagicReflection','drawAggroGauge','BattleManager_endAction','HeightOrigin','currentMaxValue','hitType','Sprite_Gauge_gaugeX','value','_regexp','lsiUw','battleAggro','gaugeRate','UIPJM','includes','Sprite_Gauge_gaugeColor1','Spriteset_Battle_update','call','physicalTaunt','isPhysical','GaugeColor1','addChild','createInnerSprite','inputtingAction','bypassHighestAggro','StatusGauge','Sprite_Actor_update','Taunt','iconWidth','sparam','currentValueAggroControl','clearProvokers','wTpDK','_%1TauntAnimation','addCommand','boxWidth','Sprite_Gauge_gaugeColor2','faceWidth','#%1','convertBattleTargetToString','randomTarget','findTgrMember','traitObjects','_aggroGaugeSprite','applyItemUserEffect','aggroGauge','certainHit','AnchorY','mnNYg','Game_Battler_onBattleEnd','needsSelection','bind','_targetX','zEhrV','updateAggroGaugeSprite','Game_Unit_onBattleStart','Sprite_Gauge_drawValue','create','height'];_0x14aa=function(){return _0x570a33;};return _0x14aa();}const _0x36bcab=_0x4950;(function(_0x51cf32,_0x22b631){const _0x2bc9ef=_0x4950,_0x24ac86=_0x51cf32();while(!![]){try{const _0x5137c9=-parseInt(_0x2bc9ef(0x26f))/0x1*(parseInt(_0x2bc9ef(0x144))/0x2)+parseInt(_0x2bc9ef(0x280))/0x3+parseInt(_0x2bc9ef(0x1ec))/0x4+parseInt(_0x2bc9ef(0x220))/0x5+-parseInt(_0x2bc9ef(0x198))/0x6+parseInt(_0x2bc9ef(0x14b))/0x7+-parseInt(_0x2bc9ef(0x25a))/0x8;if(_0x5137c9===_0x22b631)break;else _0x24ac86['push'](_0x24ac86['shift']());}catch(_0x491fda){_0x24ac86['push'](_0x24ac86['shift']());}}}(_0x14aa,0xb521f));var label=_0x36bcab(0x158),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x36bcab(0x299)](function(_0x7f4abb){const _0x402ed9=_0x36bcab;return _0x7f4abb[_0x402ed9(0x2c4)]&&_0x7f4abb[_0x402ed9(0x2c5)]['includes']('['+label+']');})[0x0];function _0x4950(_0x473e9b,_0x3c874d){const _0x14aa59=_0x14aa();return _0x4950=function(_0x495043,_0x538cdf){_0x495043=_0x495043-0x13f;let _0x558149=_0x14aa59[_0x495043];return _0x558149;},_0x4950(_0x473e9b,_0x3c874d);}VisuMZ[label][_0x36bcab(0x282)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x36bcab(0x1f9)]=function(_0x26becb,_0x219939){const _0x3691e4=_0x36bcab;for(const _0x55d297 in _0x219939){if(_0x55d297[_0x3691e4(0x2c2)](/(.*):(.*)/i)){if(_0x3691e4(0x2f9)===_0x3691e4(0x2f9)){const _0x2f432f=String(RegExp['$1']),_0x5aa20b=String(RegExp['$2'])[_0x3691e4(0x19f)]()[_0x3691e4(0x292)]();let _0xc86dd9,_0x225075,_0xeccaa9;switch(_0x5aa20b){case _0x3691e4(0x192):_0xc86dd9=_0x219939[_0x55d297]!==''?Number(_0x219939[_0x55d297]):0x0;break;case _0x3691e4(0x21d):_0x225075=_0x219939[_0x55d297]!==''?JSON['parse'](_0x219939[_0x55d297]):[],_0xc86dd9=_0x225075[_0x3691e4(0x1f8)](_0x42e60d=>Number(_0x42e60d));break;case'EVAL':_0xc86dd9=_0x219939[_0x55d297]!==''?eval(_0x219939[_0x55d297]):null;break;case'ARRAYEVAL':_0x225075=_0x219939[_0x55d297]!==''?JSON['parse'](_0x219939[_0x55d297]):[],_0xc86dd9=_0x225075[_0x3691e4(0x1f8)](_0x39917e=>eval(_0x39917e));break;case _0x3691e4(0x2f3):_0xc86dd9=_0x219939[_0x55d297]!==''?JSON[_0x3691e4(0x26e)](_0x219939[_0x55d297]):'';break;case _0x3691e4(0x174):_0x225075=_0x219939[_0x55d297]!==''?JSON[_0x3691e4(0x26e)](_0x219939[_0x55d297]):[],_0xc86dd9=_0x225075[_0x3691e4(0x1f8)](_0x1465a8=>JSON['parse'](_0x1465a8));break;case _0x3691e4(0x170):_0xc86dd9=_0x219939[_0x55d297]!==''?new Function(JSON[_0x3691e4(0x26e)](_0x219939[_0x55d297])):new Function(_0x3691e4(0x212));break;case'ARRAYFUNC':_0x225075=_0x219939[_0x55d297]!==''?JSON['parse'](_0x219939[_0x55d297]):[],_0xc86dd9=_0x225075[_0x3691e4(0x1f8)](_0x2a667b=>new Function(JSON[_0x3691e4(0x26e)](_0x2a667b)));break;case _0x3691e4(0x14d):_0xc86dd9=_0x219939[_0x55d297]!==''?String(_0x219939[_0x55d297]):'';break;case _0x3691e4(0x2c0):_0x225075=_0x219939[_0x55d297]!==''?JSON[_0x3691e4(0x26e)](_0x219939[_0x55d297]):[],_0xc86dd9=_0x225075[_0x3691e4(0x1f8)](_0x5c4574=>String(_0x5c4574));break;case _0x3691e4(0x2d3):_0xeccaa9=_0x219939[_0x55d297]!==''?JSON[_0x3691e4(0x26e)](_0x219939[_0x55d297]):{},_0xc86dd9=VisuMZ['ConvertParams']({},_0xeccaa9);break;case _0x3691e4(0x22a):_0x225075=_0x219939[_0x55d297]!==''?JSON[_0x3691e4(0x26e)](_0x219939[_0x55d297]):[],_0xc86dd9=_0x225075[_0x3691e4(0x1f8)](_0xad1df6=>VisuMZ[_0x3691e4(0x1f9)]({},JSON[_0x3691e4(0x26e)](_0xad1df6)));break;default:continue;}_0x26becb[_0x2f432f]=_0xc86dd9;}else return this[_0x3691e4(0x184)][_0x3691e4(0x266)]===_0x46ed4b;}}return _0x26becb;},(_0x5effe6=>{const _0x1eb097=_0x36bcab,_0x1b43bb=_0x5effe6['name'];for(const _0x49125a of dependencies){if(_0x1eb097(0x28b)!==_0x1eb097(0x169)){if(!Imported[_0x49125a]){if(_0x1eb097(0x23a)==='pwrex'){if(!this[_0x1eb097(0x2e7)]())return;if(!_0x1004f8[_0x1eb097(0x23f)])return;const _0x490797=this[_0x1eb097(0x164)][_0x1eb097(0x24e)]();if(this[_0x1eb097(0x1e2)])this[_0x1eb097(0x2ce)]=0xff;else _0x490797&&_0x490797[_0x1eb097(0x2ce)]>0x0?this['opacity']=0xff:this['opacity']=0x0;}else{alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x1b43bb,_0x49125a)),SceneManager[_0x1eb097(0x21f)]();break;}}}else this['opacity']=0xff;}const _0x2f5468=_0x5effe6[_0x1eb097(0x2c5)];if(_0x2f5468[_0x1eb097(0x2c2)](/\[Version[ ](.*?)\]/i)){if('vhPid'===_0x1eb097(0x16e))return _0x37380f=_0x38c633(_0x1dfc77),this[_0x1eb097(0x228)]=this[_0x1eb097(0x228)]||{},_0x660bf3['match'](/#(.*)/i)?this['_colorCache'][_0x4765ac]=_0x1eb097(0x1ca)['format'](_0xde192f(_0x421d54['$1'])):this['_colorCache'][_0x3a5a7a]=this[_0x1eb097(0x279)](_0x2f8f5c(_0x5d4bc4)),this[_0x1eb097(0x228)][_0x3cfda0];else{const _0x3cfcfc=Number(RegExp['$1']);_0x3cfcfc!==VisuMZ[label][_0x1eb097(0x194)]&&(alert(_0x1eb097(0x2cb)[_0x1eb097(0x1a4)](_0x1b43bb,_0x3cfcfc)),SceneManager[_0x1eb097(0x21f)]());}}if(_0x2f5468[_0x1eb097(0x2c2)](/\[Tier[ ](\d+)\]/i)){if(_0x1eb097(0x22b)==='vnaii'){const _0x4e7f94=Number(RegExp['$1']);if(_0x4e7f94<tier){if(_0x1eb097(0x1c4)===_0x1eb097(0x277)){const _0x4da93f=_0x1eb097(0x2b4);this['_colorCache']=this[_0x1eb097(0x228)]||{};if(this[_0x1eb097(0x228)][_0x4da93f])return this[_0x1eb097(0x228)][_0x4da93f];const _0x2e83cd=_0x34ef19['AggroControlSystem']['Settings'][_0x1eb097(0x1f7)][_0x1eb097(0x1e0)];return this[_0x1eb097(0x224)](_0x4da93f,_0x2e83cd);}else alert(_0x1eb097(0x27d)[_0x1eb097(0x1a4)](_0x1b43bb,_0x4e7f94,tier)),SceneManager['exit']();}else tier=Math[_0x1eb097(0x2d8)](_0x4e7f94,tier);}else return _0x385418[_0x1eb097(0x1fb)]();}VisuMZ[_0x1eb097(0x1f9)](VisuMZ[label][_0x1eb097(0x282)],_0x5effe6['parameters']);})(pluginData),PluginManager[_0x36bcab(0x26b)](pluginData[_0x36bcab(0x1fd)],_0x36bcab(0x250),_0x4e0111=>{const _0x285aa6=_0x36bcab;if(!$gameParty['inBattle']())return;VisuMZ['ConvertParams'](_0x4e0111,_0x4e0111);const _0x4f2699=$gameActors[_0x285aa6(0x155)](_0x4e0111[_0x285aa6(0x2a3)]),_0x5947de=_0x4e0111['Aggro'];if(_0x4f2699)_0x4f2699['gainAggro'](_0x5947de);}),PluginManager[_0x36bcab(0x26b)](pluginData[_0x36bcab(0x1fd)],'ActorSetAggro',_0x366893=>{const _0x1a2306=_0x36bcab;if(!$gameParty[_0x1a2306(0x242)]())return;VisuMZ[_0x1a2306(0x1f9)](_0x366893,_0x366893);const _0x32bda1=$gameActors[_0x1a2306(0x155)](_0x366893[_0x1a2306(0x2a3)]),_0x318034=_0x366893['Aggro'];if(_0x32bda1)_0x32bda1[_0x1a2306(0x1f6)](_0x318034);}),PluginManager[_0x36bcab(0x26b)](pluginData['name'],_0x36bcab(0x291),_0x281125=>{const _0x500e74=_0x36bcab;if(!$gameParty['inBattle']())return;VisuMZ['ConvertParams'](_0x281125,_0x281125);const _0x1251d3=$gameTroop[_0x500e74(0x2a2)]()[_0x281125[_0x500e74(0x255)]],_0x19d929=_0x281125[_0x500e74(0x1f7)];if(_0x1251d3)_0x1251d3[_0x500e74(0x25f)](_0x19d929);}),PluginManager['registerCommand'](pluginData[_0x36bcab(0x1fd)],_0x36bcab(0x241),_0x3708dd=>{const _0x51cd96=_0x36bcab;if(!$gameParty[_0x51cd96(0x242)]())return;VisuMZ[_0x51cd96(0x1f9)](_0x3708dd,_0x3708dd);const _0x3e3eaa=$gameTroop[_0x51cd96(0x2a2)]()[_0x3708dd[_0x51cd96(0x255)]],_0x26091c=_0x3708dd['Aggro'];if(_0x3e3eaa)_0x3e3eaa[_0x51cd96(0x1f6)](_0x26091c);}),DataManager['stateHasProvoke']=function(_0x280300){const _0x33e136=_0x36bcab;if(!_0x280300)return![];return _0x280300[_0x33e136(0x265)][_0x33e136(0x2c2)](/<PROVOKE>/i);},DataManager[_0x36bcab(0x22c)]=function(_0x63dca){const _0x18f35f=_0x36bcab;if(!_0x63dca)return![];return _0x63dca[_0x18f35f(0x265)][_0x18f35f(0x2c2)](/<BYPASS PROVOKE>/i);},DataManager[_0x36bcab(0x185)]=function(_0x3ffaf1){const _0xdde28b=_0x36bcab;if(!_0x3ffaf1)return![];return _0x3ffaf1[_0xdde28b(0x265)][_0xdde28b(0x2c2)](/<BYPASS TAUNT>/i);},DataManager[_0x36bcab(0x1a0)]=function(_0x82572d){const _0x7d136a=_0x36bcab;if(!_0x82572d)return![];return _0x82572d[_0x7d136a(0x265)][_0x7d136a(0x2c2)](/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);},DataManager[_0x36bcab(0x287)]=function(_0x7f58fd){const _0x493eba=_0x36bcab;if(!_0x7f58fd)return![];return _0x7f58fd[_0x493eba(0x265)]['match'](/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);},ImageManager[_0x36bcab(0x2c7)]=function(){const _0x46ff3a=_0x36bcab;if(this['_provokeBitmap'])return this[_0x46ff3a(0x160)];return this[_0x46ff3a(0x160)]=new Bitmap(0x64,0x64),this[_0x46ff3a(0x160)]['drawCircle'](0x32,0x32,0x32,ColorManager[_0x46ff3a(0x2e2)]()),this[_0x46ff3a(0x160)][_0x46ff3a(0x21e)]=![],this[_0x46ff3a(0x160)];},ConfigManager['aggroGauge']=!![],ConfigManager['provokeOrigin']=!![],VisuMZ['AggroControlSystem'][_0x36bcab(0x21b)]=ConfigManager[_0x36bcab(0x271)],ConfigManager[_0x36bcab(0x271)]=function(){const _0x32ef71=_0x36bcab,_0x453104=VisuMZ[_0x32ef71(0x158)][_0x32ef71(0x21b)][_0x32ef71(0x1b5)](this);return _0x453104[_0x32ef71(0x1d1)]=this[_0x32ef71(0x1d1)],_0x453104['provokeOrigin']=this[_0x32ef71(0x1e9)],_0x453104;},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x146)]=ConfigManager[_0x36bcab(0x197)],ConfigManager['applyData']=function(_0x5523d8){const _0x37b1b1=_0x36bcab;VisuMZ[_0x37b1b1(0x158)][_0x37b1b1(0x146)][_0x37b1b1(0x1b5)](this,_0x5523d8);if(_0x37b1b1(0x1d1)in _0x5523d8){if(_0x37b1b1(0x270)!==_0x37b1b1(0x270)){const _0x2ff113=_0xecc1bd['map'](_0x25cdcb=>_0x25cdcb[_0x37b1b1(0x20c)]),_0x33bca2=_0x457a29?_0x3bb312[_0x37b1b1(0x2d8)](..._0x2ff113):_0x35736c[_0x37b1b1(0x2fa)](..._0x2ff113),_0x4f1b92=_0x223a93[_0x37b1b1(0x299)](_0xdd5a0f=>_0xdd5a0f[_0x37b1b1(0x20c)]===_0x33bca2);return _0x4f1b92[_0x4290dd[_0x37b1b1(0x161)](_0x4f1b92[_0x37b1b1(0x2b5)])]||this['randomTarget']();}else this[_0x37b1b1(0x1d1)]=_0x5523d8['aggroGauge'];}else this['aggroGauge']=!![];_0x37b1b1(0x1e9)in _0x5523d8?this[_0x37b1b1(0x1e9)]=_0x5523d8[_0x37b1b1(0x1e9)]:this[_0x37b1b1(0x1e9)]=!![];},TextManager[_0x36bcab(0x1d1)]=VisuMZ[_0x36bcab(0x158)]['Settings']['Aggro'][_0x36bcab(0x253)],TextManager[_0x36bcab(0x1e9)]=VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x282)][_0x36bcab(0x157)][_0x36bcab(0x253)],ColorManager[_0x36bcab(0x224)]=function(_0x22aa9f,_0x18e592){const _0x3709fd=_0x36bcab;return _0x18e592=String(_0x18e592),this[_0x3709fd(0x228)]=this['_colorCache']||{},_0x18e592[_0x3709fd(0x2c2)](/#(.*)/i)?this[_0x3709fd(0x228)][_0x22aa9f]=_0x3709fd(0x1ca)[_0x3709fd(0x1a4)](String(RegExp['$1'])):this[_0x3709fd(0x228)][_0x22aa9f]=this['textColor'](Number(_0x18e592)),this[_0x3709fd(0x228)][_0x22aa9f];},ColorManager[_0x36bcab(0x238)]=function(_0x3866a2){const _0x14a344=_0x36bcab;_0x3866a2=String(_0x3866a2);if(_0x3866a2[_0x14a344(0x2c2)](/#(.*)/i)){if(_0x14a344(0x244)!=='QMfbJ')return'#%1'[_0x14a344(0x1a4)](String(RegExp['$1']));else _0x268294['AggroControlSystem'][_0x14a344(0x268)][_0x14a344(0x1b5)](this),this['applySubjectAggro']();}else return this[_0x14a344(0x279)](Number(_0x3866a2));},ColorManager['provokeLineColor']=function(){const _0xcc5128=_0x36bcab,_0x1452c5='provoke-line-color';this[_0xcc5128(0x228)]=this['_colorCache']||{};if(this[_0xcc5128(0x228)][_0x1452c5])return this[_0xcc5128(0x228)][_0x1452c5];const _0x863348=VisuMZ['AggroControlSystem'][_0xcc5128(0x282)][_0xcc5128(0x157)][_0xcc5128(0x294)];return this[_0xcc5128(0x224)](_0x1452c5,_0x863348);},ColorManager[_0x36bcab(0x1fb)]=function(){const _0x34bf1b=_0x36bcab,_0x137a88=_0x34bf1b(0x21c);this[_0x34bf1b(0x228)]=this['_colorCache']||{};if(this['_colorCache'][_0x137a88])return this[_0x34bf1b(0x228)][_0x137a88];const _0x22df5c=VisuMZ[_0x34bf1b(0x158)][_0x34bf1b(0x282)][_0x34bf1b(0x1f7)][_0x34bf1b(0x1b8)];return this['getColorDataFromPluginParameters'](_0x137a88,_0x22df5c);},ColorManager[_0x36bcab(0x29f)]=function(){const _0x529445=_0x36bcab,_0x18e212=_0x529445(0x2b4);this[_0x529445(0x228)]=this[_0x529445(0x228)]||{};if(this[_0x529445(0x228)][_0x18e212])return this[_0x529445(0x228)][_0x18e212];const _0x16bad7=VisuMZ[_0x529445(0x158)][_0x529445(0x282)][_0x529445(0x1f7)]['GaugeColor2'];return this[_0x529445(0x224)](_0x18e212,_0x16bad7);},SceneManager[_0x36bcab(0x166)]=function(){const _0x185ef=_0x36bcab;return this[_0x185ef(0x19e)]&&this[_0x185ef(0x19e)][_0x185ef(0x266)]===Scene_Battle;},BattleManager[_0x36bcab(0x1cb)]=function(_0x3de75e){const _0x27895b=_0x36bcab;let _0x2c12c2=this['_subject'];this['_counterAttackingTarget']&&(_0x2c12c2=this['_counterAttackingTarget']);if(!_0x2c12c2)return _0x27895b(0x285)!=='kyLxv'?null:this[_0x27895b(0x15d)]()[_0x27895b(0x299)](_0x5dfc75=>_0x5dfc75&&_0x5dfc75['certainHitTaunt']());if(_0x2c12c2[_0x27895b(0x243)]()&&_0x3de75e[_0x27895b(0x203)]())return _0x27895b(0x2cc)[_0x27895b(0x1a4)](_0x2c12c2[_0x27895b(0x239)]());else{if(_0x2c12c2[_0x27895b(0x203)]()&&_0x3de75e['isActor']())return _0x27895b(0x22d)[_0x27895b(0x1a4)](_0x2c12c2['index']());}return null;},BattleManager[_0x36bcab(0x2f4)]=function(_0x55f664){const _0x399814=_0x36bcab;if(!_0x55f664)return null;if(_0x55f664[_0x399814(0x2c2)](/BATTLE ACTOR (\d+)/i))return $gameActors['actor'](Number(RegExp['$1']));else{if(_0x55f664[_0x399814(0x2c2)](/BATTLE ENEMY (\d+)/i))return $gameTroop[_0x399814(0x2a2)]()[Number(RegExp['$1'])];}return null;},BattleManager['isTargetHighestTGR']=function(){const _0x24cb37=_0x36bcab;return VisuMZ[_0x24cb37(0x158)][_0x24cb37(0x282)][_0x24cb37(0x1f7)]['PriorityHighest'];},VisuMZ['AggroControlSystem'][_0x36bcab(0x15a)]=Game_Action[_0x36bcab(0x289)]['getSpecificBattlerKeyTarget'],Game_Action[_0x36bcab(0x289)][_0x36bcab(0x2a7)]=function(){const _0x130471=_0x36bcab;let _0x4a4fb1=VisuMZ[_0x130471(0x158)][_0x130471(0x15a)][_0x130471(0x1b5)](this);if(this[_0x130471(0x26c)])return _0x4a4fb1;this[_0x130471(0x26c)]=!![];if(_0x4a4fb1&&_0x4a4fb1[_0x130471(0x243)]()!==this['subject']()['isActor']()){this[_0x130471(0x24f)]=-0x1;if(this[_0x130471(0x2c3)]())_0x4a4fb1=this[_0x130471(0x2c8)]()[_0x130471(0x245)]();else{if(this[_0x130471(0x258)]()){this[_0x130471(0x26c)]=![];const _0x5e4351=this[_0x130471(0x142)]()[_0x130471(0x1aa)],_0xfb38f9=this[_0x130471(0x18f)]()[_0x130471(0x27a)](_0x5e4351);if(!_0xfb38f9[_0x130471(0x1b2)](_0x4a4fb1)){if(_0x130471(0x230)!==_0x130471(0x230))return this[_0x130471(0x2e7)]()?this[_0x130471(0x1c2)]():_0x2c5c2a[_0x130471(0x158)][_0x130471(0x2a9)]['call'](this);else _0x4a4fb1=_0xfb38f9[Math[_0x130471(0x161)](_0xfb38f9[_0x130471(0x2b5)])];}}else{if(this[_0x130471(0x23d)]()){if('cgiba'==='PhzDM')return _0x204b51[_0x130471(0x158)][_0x130471(0x2fd)][_0x130471(0x1b5)](this,_0x3c2ad9);else this[_0x130471(0x26c)]=![],_0x4a4fb1=this[_0x130471(0x18f)]()['highestTgrMember']();}}}}return this[_0x130471(0x26c)]=![],_0x4a4fb1;},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x2fd)]=Game_Action[_0x36bcab(0x289)][_0x36bcab(0x235)],Game_Action[_0x36bcab(0x289)]['targetsForAlive']=function(_0x3e71eb){const _0x1c6b72=_0x36bcab;if(this[_0x1c6b72(0x2c3)]())return this[_0x1c6b72(0x165)]();else{if(this[_0x1c6b72(0x258)]()){if(_0x1c6b72(0x1e3)==='IFxAY')return this[_0x1c6b72(0x200)](_0x3e71eb);else _0x2ab5ca['AggroControlSystem']['Game_Battler_addState'][_0x1c6b72(0x1b5)](this,_0x15f5cb),this[_0x1c6b72(0x23e)](_0x16f1ed);}else return this[_0x1c6b72(0x23d)]()?_0x1c6b72(0x22f)==='DdZKE'?_0x12f99c['AggroControlSystem'][_0x1c6b72(0x1ab)][_0x1c6b72(0x1b5)](this):(_0x3e71eb['clearTgrCache'](),[_0x3e71eb['highestTgrMember']()]):VisuMZ[_0x1c6b72(0x158)][_0x1c6b72(0x2fd)]['call'](this,_0x3e71eb);}},Game_Action[_0x36bcab(0x289)][_0x36bcab(0x2c6)]=function(){const _0x202c2a=_0x36bcab;if(this[_0x202c2a(0x216)]&&this[_0x202c2a(0x216)]()&&this[_0x202c2a(0x1d6)]()){if('WQLPk'!==_0x202c2a(0x249)){const _0x1e91f2=this[_0x202c2a(0x227)]();return _0x1e91f2['length']>=0x1&&_0x1e91f2[0x0]&&_0x1e91f2[0x0][_0x202c2a(0x243)]()===this[_0x202c2a(0x2c8)]()[_0x202c2a(0x243)]();}else{const _0x19b2cd=_0x5bf629[_0x202c2a(0x25b)];this['subject']()['gainAggro'](_0x19b2cd*_0x51c8d3['abs'](_0x1b3ab9));}}else{if('oIPOL'!=='oIPOL')this[_0x202c2a(0x150)]();else{if(this[_0x202c2a(0x142)]()[_0x202c2a(0x28c)]!==0x1)return!![];}}return![];},Game_Action[_0x36bcab(0x289)][_0x36bcab(0x2c3)]=function(){const _0xfb62f0=_0x36bcab;if(!$gameParty['inBattle']())return![];if(!this[_0xfb62f0(0x142)]())return![];if(this[_0xfb62f0(0x2c6)]())return![];if(!this[_0xfb62f0(0x1d6)]())return![];if(DataManager[_0xfb62f0(0x22c)](this[_0xfb62f0(0x142)]()))return![];if(this[_0xfb62f0(0x2c8)]()[_0xfb62f0(0x1f0)]())return![];if(!this[_0xfb62f0(0x2c8)]()['isProvokeAffected']())return![];const _0xef2cdf=this['subject']()[_0xfb62f0(0x245)]();if(_0xef2cdf[_0xfb62f0(0x298)]())return![];return!![];},Game_Action[_0x36bcab(0x289)][_0x36bcab(0x165)]=function(){const _0x33dcd0=_0x36bcab;return[this[_0x33dcd0(0x2c8)]()[_0x33dcd0(0x245)]()];},Game_Action[_0x36bcab(0x289)][_0x36bcab(0x258)]=function(){const _0x5a0edb=_0x36bcab;if(!$gameParty[_0x5a0edb(0x242)]())return![];if(!this[_0x5a0edb(0x142)]())return![];if(this[_0x5a0edb(0x2c6)]())return![];if(!this[_0x5a0edb(0x1d6)]())return![];if(DataManager[_0x5a0edb(0x185)](this[_0x5a0edb(0x142)]()))return![];if(this[_0x5a0edb(0x2c8)]()[_0x5a0edb(0x29a)]())return![];const _0x513854=this['opponentsUnit']();let _0x3cd997=![];if(this[_0x5a0edb(0x1b7)]()&&_0x513854[_0x5a0edb(0x1ea)]()[_0x5a0edb(0x2b5)]>0x0)_0x3cd997=!![];if(this[_0x5a0edb(0x168)]()&&_0x513854[_0x5a0edb(0x1e6)]()['length']>0x0)_0x3cd997=!![];if(this[_0x5a0edb(0x193)]()&&_0x513854['certainHitTauntMembers']()['length']>0x0)_0x3cd997=!![];return _0x3cd997;},Game_Action[_0x36bcab(0x289)][_0x36bcab(0x200)]=function(_0x56f283){const _0x32a9de=_0x36bcab;if(this[_0x32a9de(0x24f)]<0x0)return[_0x56f283['randomTauntTarget'](this[_0x32a9de(0x142)]()[_0x32a9de(0x1aa)])];else{if('qjnSD'!==_0x32a9de(0x233)){const _0x303159=_0x56f283['smoothTarget'](this[_0x32a9de(0x24f)]);return _0x303159['matchTauntType'](this[_0x32a9de(0x142)]()['hitType'])?[_0x303159]:[_0x56f283[_0x32a9de(0x143)]()];}else _0x563b3b=!![],this[_0x32a9de(0x225)]+=_0x2cef3b['_scene'][_0x32a9de(0x1f4)]['x'],this[_0x32a9de(0x273)]+=_0xb1429f['_scene'][_0x32a9de(0x1f4)]['y'];}},Game_Action[_0x36bcab(0x289)][_0x36bcab(0x23d)]=function(){const _0x4faa23=_0x36bcab;if(!$gameParty[_0x4faa23(0x242)]())return![];if(this[_0x4faa23(0x2c6)]())return![];if(this['_targetIndex']>=0x0)return![];if(Imported[_0x4faa23(0x23b)]&&this[_0x4faa23(0x2c8)]()[_0x4faa23(0x203)]()){if(_0x4faa23(0x2e8)===_0x4faa23(0x2b2))return _0x4faa23(0x22d)[_0x4faa23(0x1a4)](_0x3b97b9['index']());else{const _0x17ce0f=this[_0x4faa23(0x142)]()[_0x4faa23(0x265)]||'',_0x12430f=AIManager[_0x4faa23(0x1ad)];if(_0x17ce0f[_0x4faa23(0x2c2)](_0x12430f[_0x4faa23(0x171)]))return![];}}if(DataManager['isBypassHighestAggro'](this['item']()))return![];if(this[_0x4faa23(0x2c8)]()[_0x4faa23(0x1bc)]())return![];if(DataManager[_0x4faa23(0x287)](this[_0x4faa23(0x142)]()))return!![];if(this[_0x4faa23(0x2c8)]()[_0x4faa23(0x287)]())return!![];if(this[_0x4faa23(0x2c8)]()[_0x4faa23(0x243)]())return![];return BattleManager[_0x4faa23(0x1a3)]();},VisuMZ[_0x36bcab(0x158)]['Game_Action_applyGlobal']=Game_Action['prototype'][_0x36bcab(0x219)],Game_Action[_0x36bcab(0x289)]['applyGlobal']=function(){const _0x1c115e=_0x36bcab;VisuMZ[_0x1c115e(0x158)][_0x1c115e(0x268)]['call'](this),this['applySubjectAggro']();},Game_Action[_0x36bcab(0x289)][_0x36bcab(0x275)]=function(){const _0x802ca9=_0x36bcab,_0x571056=this[_0x802ca9(0x142)]()['note'];if(_0x571056[_0x802ca9(0x2c2)](/<(?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT): ([\+\-]\d+)>/i)){const _0x172d0c=Number(RegExp['$1']);this['subject']()[_0x802ca9(0x25f)](_0x172d0c);}if(_0x571056[_0x802ca9(0x2c2)](/<JS (?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT)>\s*([\s\S]*)\s*<\/JS (?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT)>/i)){if(_0x802ca9(0x14c)!==_0x802ca9(0x14c))return _0x22f4ea['clearTgrCache'](),[_0x3e6962[_0x802ca9(0x1e7)]()];else{const _0x550ba4=String(RegExp['$1']);window[_0x802ca9(0x2a8)]=this[_0x802ca9(0x2c8)](),window['item']=this[_0x802ca9(0x142)](),window['a']=this['subject'](),window['b']=a,window[_0x802ca9(0x1ac)]=user['battleAggro']();try{eval(_0x550ba4);}catch(_0x48e618){if($gameTemp[_0x802ca9(0x179)]())console[_0x802ca9(0x20f)](_0x48e618);}user['setAggro'](window[_0x802ca9(0x1ac)]),window[_0x802ca9(0x2a8)]=undefined,window[_0x802ca9(0x176)]=undefined,window[_0x802ca9(0x142)]=undefined,window['a']=undefined,window['b']=undefined,window[_0x802ca9(0x1ac)]=undefined;}}},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x217)]=Game_Action[_0x36bcab(0x289)][_0x36bcab(0x1d0)],Game_Action['prototype'][_0x36bcab(0x1d0)]=function(_0x19ae2e){const _0x6607df=_0x36bcab;VisuMZ['AggroControlSystem'][_0x6607df(0x217)][_0x6607df(0x1b5)](this,_0x19ae2e),this[_0x6607df(0x2e3)](_0x19ae2e);},Game_Action[_0x36bcab(0x289)][_0x36bcab(0x2e3)]=function(_0x5710fd){const _0x48c25e=_0x36bcab;if(!this[_0x48c25e(0x142)]())return;if(!SceneManager[_0x48c25e(0x166)]())return;const _0x9e39f7=this[_0x48c25e(0x142)]()['note'];if(_0x9e39f7['match'](/<TARGET (?:AGGRO|ENMITY|THREAT): ([\+\-]\d+)>/i)){const _0x57016c=Number(RegExp['$1']);_0x5710fd[_0x48c25e(0x25f)](_0x57016c);}if(_0x9e39f7[_0x48c25e(0x2c2)](/<JS TARGET (?:AGGRO|ENMITY|THREAT)>\s*([\s\S]*)\s*<\/JS TARGET (?:AGGRO|ENMITY|THREAT)>/i)){const _0x40798c=String(RegExp['$1']);window[_0x48c25e(0x2a8)]=this[_0x48c25e(0x2c8)](),window[_0x48c25e(0x176)]=_0x5710fd,window[_0x48c25e(0x142)]=this[_0x48c25e(0x142)](),window['a']=this[_0x48c25e(0x2c8)](),window['b']=_0x5710fd,window['value']=_0x5710fd[_0x48c25e(0x1af)]();try{eval(_0x40798c);}catch(_0x2184c3){if($gameTemp['isPlaytest']())console[_0x48c25e(0x20f)](_0x2184c3);}_0x5710fd[_0x48c25e(0x1f6)](window['value']),window[_0x48c25e(0x2a8)]=undefined,window['target']=undefined,window[_0x48c25e(0x142)]=undefined,window['a']=undefined,window['b']=undefined,window['value']=undefined;}},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x18b)]=Game_Action[_0x36bcab(0x289)][_0x36bcab(0x2c9)],Game_Action[_0x36bcab(0x289)][_0x36bcab(0x2c9)]=function(_0x53bc60,_0x47dbc0){const _0x186b8a=_0x36bcab;VisuMZ[_0x186b8a(0x158)]['Game_Action_executeHpDamage'][_0x186b8a(0x1b5)](this,_0x53bc60,_0x47dbc0),this[_0x186b8a(0x2be)](_0x53bc60,_0x47dbc0);},Game_Action['prototype'][_0x36bcab(0x2be)]=function(_0x5c8852,_0x17ca7e){const _0x328548=_0x36bcab,_0xe11608=VisuMZ[_0x328548(0x158)]['Settings'][_0x328548(0x1f7)];if(_0x17ca7e>0x0&&_0x5c8852['isActor']()!==this['subject']()[_0x328548(0x243)]()){if(_0x328548(0x1fa)!==_0x328548(0x1fa)){if(!_0x425253[_0x328548(0x242)]())return;_0x54f243[_0x328548(0x1f9)](_0x42a7d5,_0x26ee8e);const _0x14bdc0=_0x16ae31[_0x328548(0x155)](_0x174375[_0x328548(0x2a3)]),_0x284982=_0x115c0a[_0x328548(0x1f7)];if(_0x14bdc0)_0x14bdc0[_0x328548(0x1f6)](_0x284982);}else{const _0x32b981=_0xe11608[_0x328548(0x283)];this[_0x328548(0x2c8)]()['gainAggro'](_0x32b981*_0x17ca7e);}}if(_0x17ca7e<0x0&&_0x5c8852[_0x328548(0x243)]()===this[_0x328548(0x2c8)]()['isActor']()){const _0x307276=_0xe11608[_0x328548(0x25b)];this[_0x328548(0x2c8)]()[_0x328548(0x25f)](_0x307276*Math['abs'](_0x17ca7e));}},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x189)]=Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x2e5)],Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x2e5)]=function(){const _0x5ac7f5=_0x36bcab;this[_0x5ac7f5(0x14e)]={},VisuMZ[_0x5ac7f5(0x158)][_0x5ac7f5(0x189)][_0x5ac7f5(0x1b5)](this),this[_0x5ac7f5(0x190)]();},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x190)]=function(){const _0xa65ac3=_0x36bcab;this[_0xa65ac3(0x1c3)](),this[_0xa65ac3(0x16c)]();},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x1c3)]=function(){const _0x58c09a=_0x36bcab;this[_0x58c09a(0x17b)]={};},VisuMZ['AggroControlSystem'][_0x36bcab(0x2a0)]=Game_BattlerBase['prototype']['refresh'],Game_BattlerBase['prototype'][_0x36bcab(0x24b)]=function(){const _0x523c94=_0x36bcab;this['_cache']={},VisuMZ['AggroControlSystem']['Game_BattlerBase_refresh']['call'](this),this[_0x523c94(0x1f5)]();},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x19a)]=function(_0x3fbbba){const _0x171976=_0x36bcab;return this[_0x171976(0x14e)]=this[_0x171976(0x14e)]||{},this['_cache'][_0x3fbbba]!==undefined;},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x245)]=function(){const _0x3e56df=_0x36bcab;for(const _0x48eb27 of this['states']()){if(DataManager[_0x3e56df(0x205)](_0x48eb27)){if(this[_0x3e56df(0x17b)]===undefined)this['clearProvokers']();const _0x4426ac=this[_0x3e56df(0x17b)][_0x48eb27['id']],_0x3a4c2a=BattleManager[_0x3e56df(0x2f4)](_0x4426ac);if(_0x3a4c2a&&_0x3a4c2a[_0x3e56df(0x295)]())return _0x3a4c2a;}}return null;},Game_BattlerBase[_0x36bcab(0x289)]['isProvokeAffected']=function(){const _0x26c47a=_0x36bcab;return!!this[_0x26c47a(0x245)]();},Game_BattlerBase[_0x36bcab(0x289)]['bypassProvoke']=function(){const _0x2c9ff1=_0x36bcab;return this[_0x2c9ff1(0x1ce)]()['some'](_0x16b7ec=>_0x16b7ec&&_0x16b7ec['note']['match'](/<BYPASS PROVOKE>/i));},Game_BattlerBase['prototype'][_0x36bcab(0x2f7)]=function(){const _0xd5bc31=_0x36bcab;let _0x24652c=_0xd5bc31(0x2f7);if(this[_0xd5bc31(0x19a)](_0x24652c))return this[_0xd5bc31(0x14e)][_0x24652c];return this[_0xd5bc31(0x14e)][_0x24652c]=this['createProvokeHeightOrigin'](),this[_0xd5bc31(0x14e)][_0x24652c];},Game_BattlerBase[_0x36bcab(0x289)]['createProvokeHeightOrigin']=function(){const _0x4f8ae5=_0x36bcab,_0x27b76d=this[_0x4f8ae5(0x243)]()?this[_0x4f8ae5(0x155)]()['note']:this['isEnemy']()?this[_0x4f8ae5(0x2f2)]()[_0x4f8ae5(0x265)]:'';if(_0x27b76d[_0x4f8ae5(0x2c2)](/<PROVOKE HEIGHT ORIGIN: (\d+)([%％])>/i))return Number(RegExp['$1'])*0.01;return VisuMZ['AggroControlSystem'][_0x4f8ae5(0x282)][_0x4f8ae5(0x157)][_0x4f8ae5(0x1a8)];},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x1f5)]=function(){const _0x37cbc2=_0x36bcab;for(const _0xfb0cf1 of this['states']()){if(_0x37cbc2(0x288)!=='Gawzc'){if(DataManager[_0x37cbc2(0x205)](_0xfb0cf1)){if(this['_provoker']===undefined)this[_0x37cbc2(0x1c3)]();const _0x4624d3=this[_0x37cbc2(0x17b)][_0xfb0cf1['id']],_0x41b114=BattleManager['convertStringToBattleTarget'](_0x4624d3);if(_0x41b114&&_0x41b114[_0x37cbc2(0x298)]()){if(_0x37cbc2(0x1d4)!==_0x37cbc2(0x2e6))this[_0x37cbc2(0x20d)](_0xfb0cf1['id']);else return _0x805020;}}}else{if(!_0x46d175[_0x37cbc2(0x153)]())return![];if(_0x1a02d9[_0x37cbc2(0x2f6)])return this[_0x37cbc2(0x16d)](_0x37cbc2(0x2da));return!![];}}},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x246)]=function(_0x39b2fb){const _0x242acd=_0x36bcab;switch(_0x39b2fb){case Game_Action[_0x242acd(0x149)]:return this[_0x242acd(0x1b6)]();break;case Game_Action[_0x242acd(0x1ef)]:return this[_0x242acd(0x183)]();break;case Game_Action[_0x242acd(0x148)]:return this['certainHitTaunt']();break;}},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x172)]=function(){const _0x551f36=_0x36bcab;return this[_0x551f36(0x1b6)]()||this[_0x551f36(0x183)]()||this[_0x551f36(0x2fe)]();},Game_BattlerBase['prototype']['physicalTaunt']=function(){const _0xe40f2d=_0x36bcab;return this[_0xe40f2d(0x1ce)]()[_0xe40f2d(0x2ad)](_0x5325f6=>_0x5325f6&&_0x5325f6[_0xe40f2d(0x265)][_0xe40f2d(0x2c2)](/<(?:TAUNT|PHYSICAL TAUNT|ALL TAUNT)>/i));},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x183)]=function(){const _0x3a98b9=_0x36bcab;return this[_0x3a98b9(0x1ce)]()[_0x3a98b9(0x2ad)](_0x5a1174=>_0x5a1174&&_0x5a1174[_0x3a98b9(0x265)]['match'](/<(?:TAUNT|MAGICAL TAUNT|ALL TAUNT)>/i));},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x2fe)]=function(){const _0x3d59d3=_0x36bcab;return this['traitObjects']()[_0x3d59d3(0x2ad)](_0x2bc611=>_0x2bc611&&_0x2bc611[_0x3d59d3(0x265)]['match'](/<(?:TAUNT|CERTAIN TAUNT|CERTAIN HIT TAUNT|ALL TAUNT)>/i));},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x29a)]=function(){const _0x2311bb=_0x36bcab;return this['traitObjects']()[_0x2311bb(0x2ad)](_0x2f4846=>_0x2f4846&&_0x2f4846['note']['match'](/<BYPASS TAUNT>/i));},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x16c)]=function(){const _0x52c049=_0x36bcab;this[_0x52c049(0x159)]=0x1;},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x18d)]=Game_BattlerBase[_0x36bcab(0x289)]['sparam'],Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x1c1)]=function(_0x48bb89){const _0xc49abf=_0x36bcab;let _0x2c9f8d=VisuMZ[_0xc49abf(0x158)]['Game_BattlerBase_sparam'][_0xc49abf(0x1b5)](this,_0x48bb89);if(_0x48bb89===0x0){if(_0xc49abf(0x210)==='VAiRn'){const _0x564846=this['tgrMin'](),_0x2764a3=this[_0xc49abf(0x15d)]()[_0xc49abf(0x299)](_0x458bca=>_0x458bca[_0xc49abf(0x20c)]===_0x564846);this[_0xc49abf(0x1f3)]=_0x2764a3[_0x58579b[_0xc49abf(0x161)](_0x2764a3[_0xc49abf(0x2b5)])]||this[_0xc49abf(0x1cc)]();}else{if(this['_aggro']===undefined)this[_0xc49abf(0x16c)]();_0x2c9f8d*=this['aggro']();}}return _0x2c9f8d;},Game_BattlerBase['prototype'][_0x36bcab(0x1f6)]=function(_0x23dea2){const _0x35d000=_0x36bcab;if(this[_0x35d000(0x159)]===undefined)this['clearAggro']();this['_aggro']=Math[_0x35d000(0x2d8)](0x1,Math['round'](this[_0x35d000(0x159)]));},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x25f)]=function(_0x450a74){const _0x34d544=_0x36bcab;if(this[_0x34d544(0x159)]===undefined)this[_0x34d544(0x16c)]();this[_0x34d544(0x159)]=Math['max'](0x1,this[_0x34d544(0x159)]+Math['round'](_0x450a74));},Game_BattlerBase[_0x36bcab(0x289)]['loseAggro']=function(_0x5f82e3){const _0xa0cae3=_0x36bcab;this[_0xa0cae3(0x25f)](-_0x5f82e3);},Game_BattlerBase[_0x36bcab(0x289)]['aggro']=function(){const _0x37bb3e=_0x36bcab;if(this[_0x37bb3e(0x298)]())return 0x0;return this[_0x37bb3e(0x2e1)]()*this[_0x37bb3e(0x2b1)]();},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x1af)]=function(){const _0x957989=_0x36bcab;if(this[_0x957989(0x159)]===undefined){if('tmbUM'!==_0x957989(0x2db))this['clearAggro']();else{const _0x4820b3=this[_0x957989(0x227)]();return _0x4820b3[_0x957989(0x2b5)]>=0x1&&_0x4820b3[0x0]&&_0x4820b3[0x0][_0x957989(0x243)]()===this[_0x957989(0x2c8)]()[_0x957989(0x243)]();}}return this['_aggro'];},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x2e1)]=function(){const _0x57d48=_0x36bcab;return this[_0x57d48(0x1ce)]()[_0x57d48(0x1df)]((_0x1b68ad,_0x2909b9)=>{const _0x1b9319=_0x57d48;if(_0x2909b9&&_0x2909b9['note'][_0x1b9319(0x2c2)](/<(?:AGGRO|ENMITY|THREAT): ([\+\-]\d+)>/i)){if(_0x1b9319(0x207)!==_0x1b9319(0x207)){if(!_0x201a06[_0x1b9319(0x242)]())return;_0x110b6a[_0x1b9319(0x1f9)](_0xb61080,_0x3b54c5);const _0xc368f3=_0x15a717[_0x1b9319(0x2a2)]()[_0x494d28[_0x1b9319(0x255)]],_0x19cb46=_0x546da4[_0x1b9319(0x1f7)];if(_0xc368f3)_0xc368f3[_0x1b9319(0x25f)](_0x19cb46);}else return _0x1b68ad+Number(RegExp['$1'])/0x64;}else return _0x1b68ad;},this[_0x57d48(0x1af)]());},Game_BattlerBase['prototype'][_0x36bcab(0x2b1)]=function(){const _0x9b9f64=_0x36bcab;return this[_0x9b9f64(0x1ce)]()['reduce']((_0x2c632f,_0x110451)=>{const _0x1db5cd=_0x9b9f64;if(_0x1db5cd(0x2ac)===_0x1db5cd(0x2ac))return _0x110451&&_0x110451[_0x1db5cd(0x265)][_0x1db5cd(0x2c2)](/<(?:AGGRO|ENMITY|THREAT) MULTIPLIER: (\d+)%>/i)?_0x2c632f+Number(RegExp['$1'])/0x64:_0x2c632f;else _0x46d53c=_0x34f989['x']+_0x4eb5e6[_0x1db5cd(0x1c9)]+0x8;},0x1);},Game_BattlerBase[_0x36bcab(0x289)][_0x36bcab(0x1bc)]=function(){const _0xd8d8e7=_0x36bcab;return this['traitObjects']()[_0xd8d8e7(0x2ad)](_0x18a5e4=>_0x18a5e4&&_0x18a5e4[_0xd8d8e7(0x265)][_0xd8d8e7(0x2c2)](/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));},Game_BattlerBase['prototype']['alwaysTargetHighestAggro']=function(){const _0x5a09f2=_0x36bcab;return this['traitObjects']()[_0x5a09f2(0x2ad)](_0x247c1d=>_0x247c1d&&_0x247c1d[_0x5a09f2(0x265)][_0x5a09f2(0x2c2)](/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));},VisuMZ['AggroControlSystem'][_0x36bcab(0x27b)]=Game_Battler[_0x36bcab(0x289)][_0x36bcab(0x290)],Game_Battler['prototype'][_0x36bcab(0x290)]=function(_0x421682){const _0x1893b9=_0x36bcab;VisuMZ[_0x1893b9(0x158)][_0x1893b9(0x27b)][_0x1893b9(0x1b5)](this,_0x421682),this['clearAggro']();},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x1d5)]=Game_Battler['prototype'][_0x36bcab(0x2d9)],Game_Battler[_0x36bcab(0x289)][_0x36bcab(0x2d9)]=function(){const _0x126fb7=_0x36bcab;VisuMZ[_0x126fb7(0x158)]['Game_Battler_onBattleEnd'][_0x126fb7(0x1b5)](this),this['clearAggro']();},VisuMZ[_0x36bcab(0x158)]['Game_Battler_addState']=Game_Battler[_0x36bcab(0x289)][_0x36bcab(0x182)],Game_Battler[_0x36bcab(0x289)][_0x36bcab(0x182)]=function(_0x27306b){const _0x158abb=_0x36bcab;VisuMZ[_0x158abb(0x158)][_0x158abb(0x2d1)]['call'](this,_0x27306b),this[_0x158abb(0x23e)](_0x27306b);},Game_Battler[_0x36bcab(0x289)]['applyProvokeEffect']=function(_0x74dd1b){const _0xad6b60=_0x36bcab;if(this[_0xad6b60(0x240)](_0x74dd1b)){if(this[_0xad6b60(0x17b)]===undefined)this[_0xad6b60(0x1c3)]();const _0x2090e5=BattleManager['convertBattleTargetToString'](this);this[_0xad6b60(0x17b)][_0x74dd1b]=_0x2090e5,!this[_0xad6b60(0x17b)][_0x74dd1b]&&delete this['_provoker'][_0x74dd1b];}},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x259)]=BattleManager[_0x36bcab(0x186)],BattleManager[_0x36bcab(0x186)]=function(_0x5dc66c,_0x452347){const _0x16d359=_0x36bcab;this[_0x16d359(0x281)]=_0x452347,VisuMZ[_0x16d359(0x158)][_0x16d359(0x259)]['call'](this,_0x5dc66c,_0x452347),this[_0x16d359(0x281)]=undefined;},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x27e)]=BattleManager[_0x36bcab(0x1a5)],BattleManager[_0x36bcab(0x1a5)]=function(_0x106ab7,_0xad4f7c){const _0x518dbe=_0x36bcab;this['_counterAttackingTarget']=_0xad4f7c,VisuMZ[_0x518dbe(0x158)][_0x518dbe(0x27e)]['call'](this,_0x106ab7,_0xad4f7c),this[_0x518dbe(0x281)]=undefined;},VisuMZ[_0x36bcab(0x158)]['Game_Unit_onBattleStart']=Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x290)],Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x290)]=function(_0x5ed8f3){const _0x3f8e0f=_0x36bcab;this[_0x3f8e0f(0x293)](),VisuMZ[_0x3f8e0f(0x158)][_0x3f8e0f(0x1db)]['call'](this,_0x5ed8f3);},Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x1ea)]=function(){const _0x28b4ac=_0x36bcab;return this['aliveMembers']()[_0x28b4ac(0x299)](_0x4bc840=>_0x4bc840&&_0x4bc840[_0x28b4ac(0x1b6)]());},Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x1e6)]=function(){const _0x296f0f=_0x36bcab;return this['aliveMembers']()['filter'](_0x3e2a7e=>_0x3e2a7e&&_0x3e2a7e[_0x296f0f(0x183)]());},Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x15e)]=function(){const _0x50c060=_0x36bcab;return this[_0x50c060(0x15d)]()[_0x50c060(0x299)](_0x4ca47b=>_0x4ca47b&&_0x4ca47b['certainHitTaunt']());},Game_Unit[_0x36bcab(0x289)]['getTauntMembers']=function(_0x9e6b5e){const _0x1ac36e=_0x36bcab;switch(_0x9e6b5e){case Game_Action['HITTYPE_PHYSICAL']:return this[_0x1ac36e(0x1ea)]();break;case Game_Action['HITTYPE_MAGICAL']:return this[_0x1ac36e(0x1e6)]();break;case Game_Action[_0x1ac36e(0x148)]:return this[_0x1ac36e(0x15e)]();break;}return[];},Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x143)]=function(_0x5b31ea){const _0x27251f=_0x36bcab;let _0x11dd09=[];switch(_0x5b31ea){case Game_Action[_0x27251f(0x149)]:_0x11dd09=this[_0x27251f(0x1ea)]();break;case Game_Action[_0x27251f(0x1ef)]:_0x11dd09=this[_0x27251f(0x1e6)]();break;case Game_Action[_0x27251f(0x148)]:_0x11dd09=this[_0x27251f(0x15e)]();break;}let _0x598182=Math[_0x27251f(0x162)]()*this[_0x27251f(0x223)](_0x11dd09),_0xd6f81c=null;if(BattleManager['isTargetHighestTGR']()){const _0x436966=!![];return this[_0x27251f(0x1cd)](_0x11dd09,_0x436966);}else{for(const _0x12a0ed of _0x11dd09){_0x598182-=_0x12a0ed[_0x27251f(0x20c)];if(_0x598182<=0x0&&!_0xd6f81c){if(_0x27251f(0x2cd)!==_0x27251f(0x248))_0xd6f81c=_0x12a0ed;else{if(!_0xbf6048['inBattle']())return;_0x50d13b['ConvertParams'](_0x35a41a,_0x32f549);const _0x483b61=_0x60f551['actor'](_0x3829a3[_0x27251f(0x2a3)]),_0x318006=_0x3c83f6[_0x27251f(0x1f7)];if(_0x483b61)_0x483b61[_0x27251f(0x25f)](_0x318006);}}}return _0xd6f81c||this[_0x27251f(0x1cc)]();}},Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x223)]=function(_0x4311e0){const _0x1c7d2e=_0x36bcab;return _0x4311e0[_0x1c7d2e(0x1df)]((_0x20713d,_0x49a15e)=>_0x20713d+_0x49a15e[_0x1c7d2e(0x20c)],0x0);},Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x17e)]=function(){const _0x5ea9ce=_0x36bcab,_0x131307=this[_0x5ea9ce(0x15d)]()['map'](_0x3d6c63=>_0x3d6c63[_0x5ea9ce(0x20c)]);return Math[_0x5ea9ce(0x2d8)](..._0x131307);},Game_Unit[_0x36bcab(0x289)]['tgrMin']=function(){const _0x567503=_0x36bcab,_0x5196a4=this[_0x567503(0x15d)]()[_0x567503(0x1f8)](_0x3e23ae=>_0x3e23ae[_0x567503(0x20c)]);return Math[_0x567503(0x2fa)](..._0x5196a4);},Game_Unit['prototype'][_0x36bcab(0x293)]=function(){const _0x229c2c=_0x36bcab;this[_0x229c2c(0x175)]=undefined,this[_0x229c2c(0x1f3)]=undefined;},Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x1e7)]=function(){const _0x4f08a7=_0x36bcab;if(!this[_0x4f08a7(0x175)]){const _0x198fdf=this[_0x4f08a7(0x17e)](),_0x1051c1=this[_0x4f08a7(0x15d)]()[_0x4f08a7(0x299)](_0x1564c8=>_0x1564c8[_0x4f08a7(0x20c)]===_0x198fdf);this[_0x4f08a7(0x175)]=_0x1051c1[Math['randomInt'](_0x1051c1[_0x4f08a7(0x2b5)])]||this[_0x4f08a7(0x1cc)]();}return this[_0x4f08a7(0x175)];},Game_Unit['prototype']['lowestTgrMember']=function(){const _0x5abf78=_0x36bcab;if(!this[_0x5abf78(0x1f3)]){if(_0x5abf78(0x195)!==_0x5abf78(0x195)){const _0x38dff5=_0x5e3081[_0x5abf78(0x283)];this[_0x5abf78(0x2c8)]()['gainAggro'](_0x38dff5*_0x326123);}else{const _0x571d8a=this['tgrMin'](),_0x249cff=this[_0x5abf78(0x15d)]()[_0x5abf78(0x299)](_0xee94c0=>_0xee94c0[_0x5abf78(0x20c)]===_0x571d8a);this[_0x5abf78(0x1f3)]=_0x249cff[Math[_0x5abf78(0x161)](_0x249cff[_0x5abf78(0x2b5)])]||this['randomTarget']();}}return this[_0x5abf78(0x1f3)];},VisuMZ['AggroControlSystem'][_0x36bcab(0x1a7)]=BattleManager[_0x36bcab(0x18e)],BattleManager[_0x36bcab(0x18e)]=function(){const _0x1cedf0=_0x36bcab;VisuMZ[_0x1cedf0(0x158)][_0x1cedf0(0x1a7)]['call'](this),$gameParty[_0x1cedf0(0x293)](),$gameTroop['clearTgrCache']();},VisuMZ['AggroControlSystem'][_0x36bcab(0x16f)]=BattleManager['endBattle'],BattleManager[_0x36bcab(0x1eb)]=function(_0x54a268){const _0x54412d=_0x36bcab;VisuMZ[_0x54412d(0x158)][_0x54412d(0x16f)][_0x54412d(0x1b5)](this,_0x54a268),$gameParty['clearTgrCache'](),$gameTroop[_0x54412d(0x293)]();},Game_Unit[_0x36bcab(0x289)][_0x36bcab(0x1cd)]=function(_0x52357c,_0xddb611){const _0x615108=_0x36bcab,_0x3bb63a=_0x52357c[_0x615108(0x1f8)](_0x376ee7=>_0x376ee7[_0x615108(0x20c)]),_0x41e197=_0xddb611?Math[_0x615108(0x2d8)](..._0x3bb63a):Math[_0x615108(0x2fa)](..._0x3bb63a),_0x2f0d08=_0x52357c['filter'](_0x3d6caf=>_0x3d6caf[_0x615108(0x20c)]===_0x41e197);return _0x2f0d08[Math[_0x615108(0x161)](_0x2f0d08['length'])]||this[_0x615108(0x1cc)]();},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x269)]=Scene_Options[_0x36bcab(0x289)][_0x36bcab(0x2d4)],Scene_Options[_0x36bcab(0x289)][_0x36bcab(0x2d4)]=function(){const _0x82db7c=_0x36bcab;let _0x13b69a=VisuMZ['AggroControlSystem'][_0x82db7c(0x269)][_0x82db7c(0x1b5)](this);const _0xb744df=VisuMZ['AggroControlSystem'][_0x82db7c(0x282)];if(_0xb744df['Provoke'][_0x82db7c(0x221)]&&_0xb744df[_0x82db7c(0x157)][_0x82db7c(0x260)])_0x13b69a++;if(_0xb744df[_0x82db7c(0x1f7)]['AddOption']&&_0xb744df[_0x82db7c(0x1f7)][_0x82db7c(0x260)])_0x13b69a++;return _0x13b69a;},Sprite_Battler['_animationCycleTime']=VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x282)][_0x36bcab(0x1bf)]['CycleTime'],Sprite_Battler['_physicalTauntAnimation']=VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x282)][_0x36bcab(0x1bf)][_0x36bcab(0x267)],Sprite_Battler[_0x36bcab(0x151)]=VisuMZ['AggroControlSystem'][_0x36bcab(0x282)]['Taunt'][_0x36bcab(0x1ff)],Sprite_Battler[_0x36bcab(0x1e1)]=VisuMZ[_0x36bcab(0x158)]['Settings']['Taunt'][_0x36bcab(0x214)],Sprite_Battler[_0x36bcab(0x2b3)]=VisuMZ['AggroControlSystem']['Settings'][_0x36bcab(0x1bf)][_0x36bcab(0x26d)],Sprite_Battler[_0x36bcab(0x2bf)]=VisuMZ[_0x36bcab(0x158)]['Settings'][_0x36bcab(0x1bf)][_0x36bcab(0x19b)],VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x2ee)]=Sprite_Battler['prototype'][_0x36bcab(0x29c)],Sprite_Battler[_0x36bcab(0x289)][_0x36bcab(0x29c)]=function(_0x45ef68){const _0x4e7318=_0x36bcab;VisuMZ[_0x4e7318(0x158)][_0x4e7318(0x2ee)]['call'](this,_0x45ef68),this[_0x4e7318(0x2bb)]()&&setTimeout(this['createProvokeSprite'][_0x4e7318(0x1d7)](this),0x3e8);},VisuMZ['AggroControlSystem']['Sprite_Battler_initMembers']=Sprite_Battler['prototype'][_0x36bcab(0x2e5)],Sprite_Battler[_0x36bcab(0x289)][_0x36bcab(0x2e5)]=function(){const _0x76894e=_0x36bcab;VisuMZ[_0x76894e(0x158)][_0x76894e(0x26a)][_0x76894e(0x1b5)](this),this[_0x76894e(0x163)]();},Sprite_Battler[_0x36bcab(0x289)][_0x36bcab(0x163)]=function(){const _0x4417ee=_0x36bcab;this['_tauntAnimationTimer']=VisuMZ[_0x4417ee(0x158)][_0x4417ee(0x282)][_0x4417ee(0x1bf)][_0x4417ee(0x19d)],this[_0x4417ee(0x1ed)]=[_0x4417ee(0x2eb),_0x4417ee(0x29d),_0x4417ee(0x1d2)];},Sprite_Battler[_0x36bcab(0x289)][_0x36bcab(0x2bb)]=function(){const _0x1b0178=_0x36bcab;if(!Imported['VisuMZ_1_BattleCore'])return![];if(![Sprite_Actor,Sprite_Enemy]['includes'](this[_0x1b0178(0x266)]))return![];return ConfigManager['provokeOrigin']&&VisuMZ['AggroControlSystem'][_0x1b0178(0x282)]['Provoke'][_0x1b0178(0x167)];},Sprite_Battler[_0x36bcab(0x289)][_0x36bcab(0x23c)]=function(){const _0x374f67=_0x36bcab;if(!SceneManager[_0x374f67(0x166)]())return;this['_provokeSprite']=new Sprite_ProvokeTrail(this),this[_0x374f67(0x263)][_0x374f67(0x199)]()['addChild'](this[_0x374f67(0x263)]);},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x218)]=Sprite_Battler[_0x36bcab(0x289)][_0x36bcab(0x232)],Sprite_Battler['prototype']['setBattler']=function(_0x347bc9){const _0x3661a8=_0x36bcab;VisuMZ['AggroControlSystem'][_0x3661a8(0x218)][_0x3661a8(0x1b5)](this,_0x347bc9);if(this[_0x3661a8(0x1cf)])this['_aggroGaugeSprite'][_0x3661a8(0x164)]=_0x347bc9;},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x237)]=Sprite_Battler[_0x36bcab(0x289)][_0x36bcab(0x17c)],Sprite_Battler[_0x36bcab(0x289)][_0x36bcab(0x17c)]=function(){const _0x120a0e=_0x36bcab;VisuMZ['AggroControlSystem'][_0x120a0e(0x237)][_0x120a0e(0x1b5)](this),this[_0x120a0e(0x222)]();},Sprite_Battler[_0x36bcab(0x289)]['updateTauntAnimations']=function(){const _0x45779b=_0x36bcab;if(!Imported[_0x45779b(0x154)])return;if(!Imported[_0x45779b(0x23f)])return;if(!VisuMZ['AggroControlSystem'][_0x45779b(0x282)][_0x45779b(0x1bf)][_0x45779b(0x236)])return;if(!this[_0x45779b(0x164)])return;this[_0x45779b(0x2d0)]--,this[_0x45779b(0x2d0)]<=0x0&&this[_0x45779b(0x2f0)]();},Sprite_Battler[_0x36bcab(0x289)][_0x36bcab(0x2f0)]=function(){const _0x12ee87=_0x36bcab;this[_0x12ee87(0x2d0)]=Sprite_Battler[_0x12ee87(0x27c)];if(!this[_0x12ee87(0x164)])return;if(!this[_0x12ee87(0x164)]['taunting']())return;const _0x13f41c=[this[_0x12ee87(0x164)]],_0x543fcd=this['getNextTauntAnimation'](),_0x57f7f8=this[_0x12ee87(0x164)]['isActor']()&&Sprite_Battler[_0x12ee87(0x2b3)],_0x22f273=Sprite_Battler[_0x12ee87(0x2bf)];$gameTemp['requestFauxAnimation'](_0x13f41c,_0x543fcd,_0x57f7f8,_0x22f273);},Sprite_Battler['prototype'][_0x36bcab(0x145)]=function(){const _0x3c41f9=_0x36bcab;let _0x501733=this[_0x3c41f9(0x1ed)][_0x3c41f9(0x2b5)];while(_0x501733){if(_0x3c41f9(0x141)!==_0x3c41f9(0x2a1)){const _0x27991a=this['_tauntAnimationCycle'][_0x3c41f9(0x231)]();this[_0x3c41f9(0x1ed)][_0x3c41f9(0x25d)](_0x27991a);const _0x5b820b=_0x3c41f9(0x201)[_0x3c41f9(0x1a4)](_0x27991a);if(this['_battler'][_0x5b820b]()){const _0x54dc41=_0x3c41f9(0x1c5)[_0x3c41f9(0x1a4)](_0x27991a),_0x578bb9=Sprite_Battler[_0x54dc41];if(_0x578bb9)return _0x578bb9;}_0x501733--;}else{if(_0x245e4a[_0x3c41f9(0x179)]())_0x4fe08d[_0x3c41f9(0x20f)](_0x5d3617);}}return Sprite_Battler[_0x3c41f9(0x1e1)];},VisuMZ[_0x36bcab(0x158)]['Sprite_Actor_createStateSprite']=Sprite_Actor['prototype'][_0x36bcab(0x206)],Sprite_Actor['prototype'][_0x36bcab(0x206)]=function(){const _0x25662f=_0x36bcab;VisuMZ[_0x25662f(0x158)][_0x25662f(0x2e4)][_0x25662f(0x1b5)](this),this[_0x25662f(0x2d6)]();},Sprite_Actor[_0x36bcab(0x289)][_0x36bcab(0x2d6)]=function(){const _0x21034a=_0x36bcab;if(this[_0x21034a(0x266)]!==Sprite_Actor)return;if(!this[_0x21034a(0x180)]())return;if(!SceneManager[_0x21034a(0x166)]())return;const _0x59f02f=VisuMZ['AggroControlSystem'][_0x21034a(0x282)][_0x21034a(0x1f7)],_0x176345=new Sprite_Gauge();_0x176345[_0x21034a(0x215)]['x']=_0x59f02f['AnchorX'],_0x176345[_0x21034a(0x215)]['y']=_0x59f02f[_0x21034a(0x1d3)];const _0x37dc27=Sprite_Gauge[_0x21034a(0x289)][_0x21034a(0x2bd)]();_0x176345[_0x21034a(0x14a)]['x']=_0x176345[_0x21034a(0x14a)]['y']=_0x59f02f['Scale'],this['_aggroGaugeSprite']=_0x176345,this[_0x21034a(0x1b9)](_0x176345);},Sprite_Actor[_0x36bcab(0x289)][_0x36bcab(0x180)]=function(){const _0x25dfec=_0x36bcab;if(Imported['VisuMZ_1_BattleCore']&&this[_0x25dfec(0x266)]===Sprite_SvEnemy)return![];return ConfigManager[_0x25dfec(0x1d1)]&&VisuMZ[_0x25dfec(0x158)]['Settings'][_0x25dfec(0x1f7)][_0x25dfec(0x17f)];},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x1be)]=Sprite_Actor['prototype']['update'],Sprite_Actor[_0x36bcab(0x289)][_0x36bcab(0x17c)]=function(){const _0x306159=_0x36bcab;VisuMZ['AggroControlSystem'][_0x306159(0x1be)]['call'](this),this[_0x306159(0x1da)]();},Sprite_Actor[_0x36bcab(0x289)][_0x36bcab(0x1da)]=function(){const _0xcdcfb3=_0x36bcab;if(!this[_0xcdcfb3(0x164)])return;if(!this[_0xcdcfb3(0x1cf)])return;const _0x57bb0f=VisuMZ[_0xcdcfb3(0x158)][_0xcdcfb3(0x282)][_0xcdcfb3(0x1f7)],_0x28e1a9=this[_0xcdcfb3(0x1cf)];let _0x52a936=_0x57bb0f[_0xcdcfb3(0x284)];this[_0xcdcfb3(0x164)][_0xcdcfb3(0x2dc)]&&(_0x52a936+=this['_battler']['battleUIOffsetX']());let _0x4a7985=_0x57bb0f[_0xcdcfb3(0x2ed)];this[_0xcdcfb3(0x164)]['battleUIOffsetY']&&(_0x4a7985+=this[_0xcdcfb3(0x164)][_0xcdcfb3(0x274)]());_0x28e1a9['x']=_0x52a936,_0x28e1a9['y']=-this[_0xcdcfb3(0x1de)]+_0x4a7985;this[_0xcdcfb3(0x164)]&&_0x28e1a9[_0xcdcfb3(0x2fb)]!==_0xcdcfb3(0x20a)&&(_0x28e1a9[_0xcdcfb3(0x181)]=!![],_0x28e1a9[_0xcdcfb3(0x178)](this['_battler'],_0xcdcfb3(0x20a)));if(this['scale']['x']<0x0){if(_0xcdcfb3(0x152)==='zPICM'){if(!_0x5df428)return![];return _0x6a8c1d['note']['match'](/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);}else _0x28e1a9[_0xcdcfb3(0x14a)]['x']=-Math['abs'](_0x28e1a9[_0xcdcfb3(0x14a)]['x']);}},Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x2e7)]=function(){const _0x325728=_0x36bcab;return this[_0x325728(0x164)]&&this['_statusType']===_0x325728(0x20a);},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x1ab)]=Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x15b)],Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x15b)]=function(){const _0x25c575=_0x36bcab;if(this['isAggroType']()){if(_0x25c575(0x20b)!=='XaENQ')return 0x0;else _0x48ecc1=_0x4df3c8['round'](_0x276cca['x']+(_0x3f08b4[_0x25c575(0x1e4)]-0x80)/0x2);}else return _0x25c575(0x2dd)!==_0x25c575(0x2dd)?0x0:VisuMZ[_0x25c575(0x158)][_0x25c575(0x1ab)][_0x25c575(0x1b5)](this);},VisuMZ['AggroControlSystem'][_0x36bcab(0x1a1)]=Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x1b0)],Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x1b0)]=function(){const _0x3e5779=_0x36bcab;let _0x497595=VisuMZ[_0x3e5779(0x158)][_0x3e5779(0x1a1)][_0x3e5779(0x1b5)](this);if(this[_0x3e5779(0x2e7)]()&&this[_0x3e5779(0x164)]){if(_0x3e5779(0x29e)==='ksMgF'){if(this[_0x3e5779(0x164)][_0x3e5779(0x298)]())return 0x0;if(this[_0x3e5779(0x164)]['isAlive']()&&this[_0x3e5779(0x164)][_0x3e5779(0x2b6)]()['aliveMembers']()[_0x3e5779(0x2b5)]===0x1)return 0x1;}else this[_0x3e5779(0x2ce)]=0xff;}return _0x497595['clamp'](0x0,0x1);},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x2a9)]=Sprite_Gauge['prototype'][_0x36bcab(0x2f5)],Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x2f5)]=function(){const _0x5e9158=_0x36bcab;if(this[_0x5e9158(0x2e7)]())return _0x5e9158(0x2aa)!==_0x5e9158(0x2aa)?_0x2fc58d[_0x5e9158(0x155)](_0x25ca83(_0x71d87['$1'])):this['currentValueAggroControl']();else{if(_0x5e9158(0x2b7)===_0x5e9158(0x2b7))return VisuMZ['AggroControlSystem'][_0x5e9158(0x2a9)][_0x5e9158(0x1b5)](this);else _0xaba805[_0x5e9158(0x23f)]&&this['sortEnemies'](),_0x49bfd6[_0x5e9158(0x289)][_0x5e9158(0x24b)][_0x5e9158(0x1b5)](this);}},Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x1c2)]=function(){const _0x59acea=_0x36bcab,_0x233a6d=this[_0x59acea(0x164)]['friendsUnit'](),_0x465a08=this['_battler'][_0x59acea(0x20c)]-_0x233a6d[_0x59acea(0x196)](),_0x59efe2=_0x233a6d[_0x59acea(0x17e)]()-_0x233a6d[_0x59acea(0x196)]();if(_0x465a08>=_0x59efe2)return 0x64;return _0x465a08/Math[_0x59acea(0x2d8)](_0x59efe2,0x1)*0x64;},VisuMZ['AggroControlSystem']['Sprite_Gauge_currentMaxValue']=Sprite_Gauge['prototype']['currentMaxValue'],Sprite_Gauge['prototype'][_0x36bcab(0x1a9)]=function(){const _0x4f1918=_0x36bcab;if(this[_0x4f1918(0x2e7)]())return this[_0x4f1918(0x21a)]();else{if(_0x4f1918(0x252)!==_0x4f1918(0x19c))return VisuMZ['AggroControlSystem'][_0x4f1918(0x2af)][_0x4f1918(0x1b5)](this);else{const _0x385214=this[_0x4f1918(0x164)][_0x4f1918(0x2b6)](),_0xd30c57=this[_0x4f1918(0x164)]['tgr']-_0x385214[_0x4f1918(0x196)](),_0x156ada=_0x385214['tgrMax']()-_0x385214[_0x4f1918(0x196)]();if(_0xd30c57>=_0x156ada)return 0x64;return _0xd30c57/_0x2cd909['max'](_0x156ada,0x1)*0x64;}}},Sprite_Gauge['prototype'][_0x36bcab(0x21a)]=function(){return 0x64;},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x1b3)]=Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x234)],Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x234)]=function(){const _0x50c7ac=_0x36bcab;return this['isAggroType']()?ColorManager[_0x50c7ac(0x1fb)]():VisuMZ[_0x50c7ac(0x158)][_0x50c7ac(0x1b3)][_0x50c7ac(0x1b5)](this);},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x1c8)]=Sprite_Gauge[_0x36bcab(0x289)]['gaugeColor2'],Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x17a)]=function(){const _0x9c9709=_0x36bcab;return this[_0x9c9709(0x2e7)]()?ColorManager[_0x9c9709(0x29f)]():VisuMZ[_0x9c9709(0x158)]['Sprite_Gauge_gaugeColor2'][_0x9c9709(0x1b5)](this);},VisuMZ['AggroControlSystem'][_0x36bcab(0x187)]=Sprite_Gauge['prototype'][_0x36bcab(0x17c)],Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x17c)]=function(){const _0x2ee84f=_0x36bcab;VisuMZ[_0x2ee84f(0x158)][_0x2ee84f(0x187)][_0x2ee84f(0x1b5)](this),this[_0x2ee84f(0x2df)]();},Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x2df)]=function(){const _0x165f9e=_0x36bcab;if(!this[_0x165f9e(0x2e7)]())return;if(!Imported[_0x165f9e(0x23f)])return;const _0x38d1ba=this['_battler'][_0x165f9e(0x24e)]();if(this[_0x165f9e(0x1e2)])this[_0x165f9e(0x2ce)]=0xff;else _0x38d1ba&&_0x38d1ba[_0x165f9e(0x2ce)]>0x0?this['opacity']=0xff:'PhLyc'===_0x165f9e(0x1e8)?this[_0x165f9e(0x2ce)]=0x0:_0x5b4daa(_0x595941);},VisuMZ[_0x36bcab(0x158)]['Sprite_Gauge_drawValue']=Sprite_Gauge[_0x36bcab(0x289)][_0x36bcab(0x2e0)],Sprite_Gauge['prototype']['drawValue']=function(){const _0x3a31fb=_0x36bcab;if(this['isAggroType']())return;VisuMZ[_0x3a31fb(0x158)][_0x3a31fb(0x1dc)]['call'](this);};function Sprite_ProvokeTrail(){const _0x21ae69=_0x36bcab;this[_0x21ae69(0x29c)](...arguments);}Sprite_ProvokeTrail['prototype']=Object[_0x36bcab(0x1dd)](Sprite[_0x36bcab(0x289)]),Sprite_ProvokeTrail[_0x36bcab(0x289)][_0x36bcab(0x266)]=Sprite_ProvokeTrail,Sprite_ProvokeTrail[_0x36bcab(0x289)][_0x36bcab(0x29c)]=function(_0x5434bf){const _0x25c654=_0x36bcab;this[_0x25c654(0x184)]=_0x5434bf,Sprite[_0x25c654(0x289)][_0x25c654(0x29c)][_0x25c654(0x1b5)](this),this['initMembers'](),this[_0x25c654(0x2ec)]();},Sprite_ProvokeTrail['prototype'][_0x36bcab(0x2e5)]=function(){const _0x1182dc=_0x36bcab,_0x12d539=VisuMZ[_0x1182dc(0x158)][_0x1182dc(0x282)][_0x1182dc(0x157)];this['anchor']['x']=0.5,this[_0x1182dc(0x215)]['y']=0.5,this['_homeX']=0x0,this[_0x1182dc(0x273)]=0x0,this[_0x1182dc(0x1d8)]=0x0,this[_0x1182dc(0x2e9)]=0x0,this[_0x1182dc(0x2ce)]=0x0,this[_0x1182dc(0x140)]=_0x12d539[_0x1182dc(0x28f)],this[_0x1182dc(0x24d)]=_0x12d539[_0x1182dc(0x156)];},Sprite_ProvokeTrail['prototype']['maxSprites']=function(){const _0x1b6109=_0x36bcab;return VisuMZ['AggroControlSystem'][_0x1b6109(0x282)][_0x1b6109(0x157)]['Parts'];},Sprite_ProvokeTrail[_0x36bcab(0x289)][_0x36bcab(0x2fc)]=function(){const _0x117b3f=_0x36bcab;return VisuMZ[_0x117b3f(0x158)][_0x117b3f(0x282)]['Provoke'][_0x117b3f(0x147)]/0x64;},Sprite_ProvokeTrail[_0x36bcab(0x289)]['createChildSprites']=function(){const _0xa8127c=_0x36bcab;this[_0xa8127c(0x256)]=[];let _0x2f49a8=0x0;for(let _0x2d70c5=0x0;_0x2d70c5<=this[_0xa8127c(0x1f1)]();_0x2d70c5++){const _0x38b85a=new Sprite();_0x38b85a[_0xa8127c(0x28e)]=ImageManager[_0xa8127c(0x2c7)](),_0x38b85a[_0xa8127c(0x215)]['x']=0.5,_0x38b85a[_0xa8127c(0x215)]['y']=0.5,_0x38b85a['scale']['x']=_0x38b85a[_0xa8127c(0x14a)]['y']=this[_0xa8127c(0x2fc)](),_0x38b85a['opacity']=_0x2f49a8,_0x38b85a[_0xa8127c(0x24d)]=this[_0xa8127c(0x24d)],this['addChild'](_0x38b85a),this['_sprites'][_0xa8127c(0x25d)](_0x38b85a),_0x2f49a8+=this['_opacitySpeed'];if(_0x2f49a8>=0xff)_0x2f49a8=0x0;}},Sprite_ProvokeTrail[_0x36bcab(0x289)]['leftwardAnimation']=function(){const _0x4e5b09=_0x36bcab;return this[_0x4e5b09(0x184)][_0x4e5b09(0x266)]===Sprite_Actor;},Sprite_ProvokeTrail[_0x36bcab(0x289)][_0x36bcab(0x199)]=function(){const _0x1c05c3=_0x36bcab;return SceneManager[_0x1c05c3(0x19e)][_0x1c05c3(0x2c1)]['_provokeContainer'];},Sprite_ProvokeTrail['prototype'][_0x36bcab(0x17c)]=function(){const _0xa16b30=_0x36bcab;Sprite[_0xa16b30(0x289)][_0xa16b30(0x17c)][_0xa16b30(0x1b5)](this),this[_0xa16b30(0x28a)](),this[_0xa16b30(0x20e)](),this[_0xa16b30(0x247)](),this[_0xa16b30(0x286)]();},Sprite_ProvokeTrail[_0x36bcab(0x289)]['heightOrigin']=function(){const _0xfadd7f=_0x36bcab;return VisuMZ[_0xfadd7f(0x158)]['Settings']['Provoke'][_0xfadd7f(0x1a8)];},Sprite_ProvokeTrail['prototype'][_0x36bcab(0x28a)]=function(){const _0x16e0be=_0x36bcab;if(!this[_0x16e0be(0x184)][_0x16e0be(0x164)])return;if(!this['_mainSprite'][_0x16e0be(0x164)][_0x16e0be(0x245)]())return;const _0x12e0f5=this[_0x16e0be(0x184)][_0x16e0be(0x164)][_0x16e0be(0x245)]()[_0x16e0be(0x24e)]();if(!_0x12e0f5)return;const _0x1ac2d6=this[_0x16e0be(0x184)][_0x16e0be(0x164)][_0x16e0be(0x2f7)](),_0x206f27=this[_0x16e0be(0x184)][_0x16e0be(0x164)][_0x16e0be(0x245)]()[_0x16e0be(0x2f7)]();this['_homeX']=this[_0x16e0be(0x184)]['x'],this[_0x16e0be(0x273)]=this[_0x16e0be(0x184)]['y']-this[_0x16e0be(0x184)]['height']*_0x1ac2d6,this[_0x16e0be(0x1d8)]=_0x12e0f5['x'],this[_0x16e0be(0x2e9)]=_0x12e0f5['y']-_0x12e0f5[_0x16e0be(0x1de)]*_0x206f27,this[_0x16e0be(0x225)]+=Math['round']((Graphics[_0x16e0be(0x1e4)]-Graphics[_0x16e0be(0x1c7)])/0x2),this[_0x16e0be(0x273)]+=Math[_0x16e0be(0x1fe)]((Graphics[_0x16e0be(0x1de)]-Graphics[_0x16e0be(0x25e)])/0x2),this[_0x16e0be(0x1d8)]+=Math['round']((Graphics[_0x16e0be(0x1e4)]-Graphics[_0x16e0be(0x1c7)])/0x2),this[_0x16e0be(0x2e9)]+=Math[_0x16e0be(0x1fe)]((Graphics[_0x16e0be(0x1de)]-Graphics['boxHeight'])/0x2);if(!$gameSystem[_0x16e0be(0x13f)]()){if(_0x12e0f5[_0x16e0be(0x164)][_0x16e0be(0x243)]())_0x16e0be(0x24a)===_0x16e0be(0x1b1)?(_0x421c7a[_0x16e0be(0x158)][_0x16e0be(0x18b)]['call'](this,_0x8be47d,_0x5ce9c2),this[_0x16e0be(0x2be)](_0xeeb123,_0x247131)):(visible=!![],this[_0x16e0be(0x1d8)]+=SceneManager[_0x16e0be(0x19e)]['_statusWindow']['x'],this[_0x16e0be(0x2e9)]+=SceneManager[_0x16e0be(0x19e)][_0x16e0be(0x1f4)]['y']);else _0x12e0f5[_0x16e0be(0x164)][_0x16e0be(0x203)]()&&(visible=!![],this[_0x16e0be(0x225)]+=SceneManager[_0x16e0be(0x19e)][_0x16e0be(0x1f4)]['x'],this[_0x16e0be(0x273)]+=SceneManager[_0x16e0be(0x19e)]['_statusWindow']['y']);}},Sprite_ProvokeTrail[_0x36bcab(0x289)][_0x36bcab(0x22e)]=function(){const _0x1b795f=_0x36bcab;return VisuMZ[_0x1b795f(0x158)][_0x1b795f(0x282)][_0x1b795f(0x157)][_0x1b795f(0x1ee)];},Sprite_ProvokeTrail['prototype']['updateSubPositions']=function(){const _0x32623a=_0x36bcab;if(!this[_0x32623a(0x184)][_0x32623a(0x164)])return;if(!this[_0x32623a(0x184)][_0x32623a(0x164)]['provoker']())return;if(!this[_0x32623a(0x256)])return;if(this['_sprites']['length']<=0x0)return;const _0x1c4dc8=(this[_0x32623a(0x1d8)]-this['_homeX'])/this[_0x32623a(0x1f1)](),_0x181094=(this['_targetY']-this[_0x32623a(0x273)])/this['maxSprites']();for(let _0x1ecfa8=0x0;_0x1ecfa8<=this[_0x32623a(0x1f1)]();_0x1ecfa8++){const _0x460a61=this[_0x32623a(0x256)][_0x1ecfa8];if(!_0x460a61)continue;_0x460a61['x']=this[_0x32623a(0x225)]+_0x1c4dc8*_0x1ecfa8;const _0x55c47a=this[_0x32623a(0x1f1)]()-_0x1ecfa8,_0x437aae=this[_0x32623a(0x1f1)]()/0x2,_0x3f5c34=this[_0x32623a(0x22e)](),_0x596d4c=-_0x3f5c34/Math[_0x32623a(0x2de)](_0x437aae,0x2),_0x1310a1=_0x596d4c*Math[_0x32623a(0x2de)](_0x55c47a-_0x437aae,0x2)+_0x3f5c34;_0x460a61['y']=this[_0x32623a(0x273)]+_0x181094*_0x1ecfa8-_0x1310a1;}},Sprite_ProvokeTrail[_0x36bcab(0x289)][_0x36bcab(0x191)]=function(){const _0x2c852f=_0x36bcab;return VisuMZ[_0x2c852f(0x158)][_0x2c852f(0x282)][_0x2c852f(0x157)][_0x2c852f(0x1a2)];},Sprite_ProvokeTrail[_0x36bcab(0x289)][_0x36bcab(0x247)]=function(){const _0x1cc3ff=_0x36bcab,_0x578044=this['_mainSprite'][_0x1cc3ff(0x164)];if(!_0x578044)this['opacity']=0x0;else _0x578044[_0x1cc3ff(0x295)]()&&_0x578044['provoker']()?this[_0x1cc3ff(0x2ce)]=0xff:this['opacity']=0x0;},Sprite_ProvokeTrail[_0x36bcab(0x289)]['updateChildrenOpacity']=function(){const _0x32d569=_0x36bcab;if(!this[_0x32d569(0x184)][_0x32d569(0x164)])return;if(!this[_0x32d569(0x184)][_0x32d569(0x164)][_0x32d569(0x245)]())return;if(!this['_sprites'])return;if(this[_0x32d569(0x256)][_0x32d569(0x2b5)]<=0x0)return;for(let _0x5be828=0x0;_0x5be828<=this[_0x32d569(0x1f1)]();_0x5be828++){if(_0x32d569(0x18a)!==_0x32d569(0x2a6)){const _0x3ac808=this[_0x32d569(0x256)][this[_0x32d569(0x2d7)]()?this[_0x32d569(0x1f1)]()-_0x5be828:_0x5be828];if(!_0x3ac808)continue;_0x3ac808[_0x32d569(0x2ce)]-=this['_opacitySpeed'];if(_0x3ac808[_0x32d569(0x2ce)]<=0x0)_0x3ac808[_0x32d569(0x2ce)]=0xff;}else this[_0x32d569(0x1d1)]=_0x3dc3c1[_0x32d569(0x1d1)];}},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x2ef)]=Spriteset_Battle['prototype'][_0x36bcab(0x29b)],Spriteset_Battle[_0x36bcab(0x289)][_0x36bcab(0x29b)]=function(){const _0x22be7e=_0x36bcab;VisuMZ[_0x22be7e(0x158)][_0x22be7e(0x2ef)][_0x22be7e(0x1b5)](this),this['createBattleFieldAggroControl']();},Spriteset_Battle[_0x36bcab(0x289)][_0x36bcab(0x2cf)]=function(){const _0x5e1c9e=_0x36bcab;if(!Imported[_0x5e1c9e(0x23f)])return;const _0x57814c=this['_battleField']['x'],_0x391d8a=this[_0x5e1c9e(0x2ae)]['y'],_0x4b6338=this['_battleField'][_0x5e1c9e(0x1e4)],_0x219782=this[_0x5e1c9e(0x2ae)][_0x5e1c9e(0x1de)];this[_0x5e1c9e(0x15c)]=new Sprite(),this[_0x5e1c9e(0x15c)][_0x5e1c9e(0x14f)](0x0,0x0,_0x4b6338,_0x219782),this[_0x5e1c9e(0x15c)]['x']=_0x57814c,this['_provokeContainer']['y']=_0x391d8a;if(Imported[_0x5e1c9e(0x23f)]){const _0xeff5b1=this['children'][_0x5e1c9e(0x1fc)](this[_0x5e1c9e(0x254)]);this['addChildAt'](this[_0x5e1c9e(0x15c)],_0xeff5b1);}else{if(_0x5e1c9e(0x28d)!=='MhKLk')this[_0x5e1c9e(0x1b9)](this[_0x5e1c9e(0x15c)]);else{const _0x39029e=_0x5e1c9e(0x21c);this[_0x5e1c9e(0x228)]=this['_colorCache']||{};if(this[_0x5e1c9e(0x228)][_0x39029e])return this[_0x5e1c9e(0x228)][_0x39029e];const _0x174224=_0x13da3e[_0x5e1c9e(0x158)][_0x5e1c9e(0x282)][_0x5e1c9e(0x1f7)][_0x5e1c9e(0x1b8)];return this[_0x5e1c9e(0x224)](_0x39029e,_0x174224);}}},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x1b4)]=Spriteset_Battle[_0x36bcab(0x289)][_0x36bcab(0x17c)],Spriteset_Battle[_0x36bcab(0x289)][_0x36bcab(0x17c)]=function(){const _0x2998cb=_0x36bcab;VisuMZ['AggroControlSystem'][_0x2998cb(0x1b4)][_0x2998cb(0x1b5)](this),this['updateAggroControl']();},Spriteset_Battle[_0x36bcab(0x289)][_0x36bcab(0x2ea)]=function(){const _0x4cd329=_0x36bcab;if(!this[_0x4cd329(0x15c)])return;if(!this[_0x4cd329(0x254)])return;this[_0x4cd329(0x15c)]['x']=this[_0x4cd329(0x254)]['x'],this[_0x4cd329(0x15c)]['y']=this[_0x4cd329(0x254)]['y'];},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x2d5)]=Window_BattleEnemy['prototype'][_0x36bcab(0x24b)],Window_BattleEnemy[_0x36bcab(0x289)]['refresh']=function(){const _0x49bf6a=_0x36bcab;if(this['applyProvokeFilters']())Imported['VisuMZ_1_BattleCore']&&this[_0x49bf6a(0x177)](),Window_Selectable[_0x49bf6a(0x289)]['refresh'][_0x49bf6a(0x1b5)](this);else{if(this['applyTauntFilters']()){if(_0x49bf6a(0x17d)!==_0x49bf6a(0x17d)){if(!_0x81a1df)return![];return _0x1490be[_0x49bf6a(0x265)][_0x49bf6a(0x2c2)](/<PROVOKE>/i);}else Imported[_0x49bf6a(0x23f)]&&this[_0x49bf6a(0x177)](),Window_Selectable[_0x49bf6a(0x289)][_0x49bf6a(0x24b)][_0x49bf6a(0x1b5)](this);}else{if('rAzsl'!==_0x49bf6a(0x1d9))VisuMZ[_0x49bf6a(0x158)][_0x49bf6a(0x2d5)]['call'](this);else return _0x583a7a(_0x50a497['$1'])*0.01;}}},Window_BattleEnemy['prototype'][_0x36bcab(0x15f)]=function(){const _0x7ba855=_0x36bcab,_0x496c25=BattleManager['inputtingAction'](),_0x312d03=BattleManager[_0x7ba855(0x155)]();if(!_0x496c25)return![];if(!_0x312d03)return![];if(DataManager[_0x7ba855(0x22c)](_0x496c25[_0x7ba855(0x142)]()))return![];if(_0x312d03['bypassProvoke']())return![];if(!_0x496c25['isProvokeAffected']())return![];if(_0x312d03[_0x7ba855(0x2c3)]()){this['_enemies']=[_0x312d03[_0x7ba855(0x245)]()];if(_0x496c25['isForAnyone']&&_0x496c25[_0x7ba855(0x216)]()){if(_0x7ba855(0x2d2)!==_0x7ba855(0x2ca)){const _0x497419=$gameParty[_0x7ba855(0x15d)]();this['_enemies']=this[_0x7ba855(0x251)]['concat'](_0x497419),_0x496c25[_0x7ba855(0x2bc)]&&_0x496c25[_0x7ba855(0x2bc)]()&&_0x497419[_0x7ba855(0x2b5)]>0x1&&(_0x7ba855(0x1ae)!==_0x7ba855(0x2ba)?this[_0x7ba855(0x2b8)]('pagedown',this[_0x7ba855(0x2a4)][_0x7ba855(0x1d7)](this)):(_0x1a888c[_0x7ba855(0x158)][_0x7ba855(0x1a7)][_0x7ba855(0x1b5)](this),_0x49f761[_0x7ba855(0x293)](),_0xd3eee7[_0x7ba855(0x293)]()));}else{const _0x5c6701=_0x2e6f43(_0x361924['$1']);_0x3d26ca[_0x7ba855(0x2a8)]=this[_0x7ba855(0x2c8)](),_0x364db9[_0x7ba855(0x176)]=_0x4a12ec,_0x53415b[_0x7ba855(0x142)]=this['item'](),_0x3e03a2['a']=this['subject'](),_0x1a4c1a['b']=_0x46aec1,_0x2f96c9[_0x7ba855(0x1ac)]=_0x187ff1[_0x7ba855(0x1af)]();try{_0x59bbef(_0x5c6701);}catch(_0x5aba6f){if(_0x2701cf[_0x7ba855(0x179)]())_0x537747['log'](_0x5aba6f);}_0x48eeb1[_0x7ba855(0x1f6)](_0x4d04c8[_0x7ba855(0x1ac)]),_0x3c18b0[_0x7ba855(0x2a8)]=_0x3869b6,_0x11c970['target']=_0x5c3bc8,_0xaec2d2['item']=_0x23e4cc,_0x4230f9['a']=_0x220bed,_0x5be5fb['b']=_0x38edbd,_0x29ab1d['value']=_0x23aa82;}}return!![];}else return![];},Window_BattleEnemy[_0x36bcab(0x289)][_0x36bcab(0x24c)]=function(){const _0x4487e=_0x36bcab,_0x397bed=BattleManager[_0x4487e(0x1bb)](),_0x49306b=BattleManager['actor'](),_0x3ba80d=$gameTroop;if(!_0x397bed)return![];if(!_0x49306b)return![];if(!_0x397bed[_0x4487e(0x142)]())return![];if(DataManager[_0x4487e(0x185)](_0x397bed[_0x4487e(0x142)]()))return![];if(_0x49306b['bypassTaunt']())return![];if(!_0x397bed['isTauntAffected']())return![];if(_0x397bed[_0x4487e(0x1b7)]()&&_0x3ba80d[_0x4487e(0x1ea)]()['length']>0x0)this[_0x4487e(0x251)]=_0x3ba80d[_0x4487e(0x1ea)]();else{if(_0x397bed[_0x4487e(0x168)]()&&_0x3ba80d[_0x4487e(0x1e6)]()[_0x4487e(0x2b5)]>0x0)this['_enemies']=_0x3ba80d[_0x4487e(0x1e6)]();else{if(_0x397bed[_0x4487e(0x193)]()&&_0x3ba80d[_0x4487e(0x15e)]()[_0x4487e(0x2b5)]>0x0)this['_enemies']=_0x3ba80d['certainHitTauntMembers']();else return![];}}if(_0x397bed[_0x4487e(0x216)]&&_0x397bed[_0x4487e(0x216)]()){const _0x8c5cee=$gameParty['aliveMembers']();this[_0x4487e(0x251)]=this[_0x4487e(0x251)]['concat'](_0x8c5cee),_0x397bed[_0x4487e(0x2bc)]&&_0x397bed[_0x4487e(0x2bc)]()&&_0x8c5cee[_0x4487e(0x2b5)]>0x1&&this[_0x4487e(0x2b8)](_0x4487e(0x16a),this[_0x4487e(0x2a4)]['bind'](this));}return!![];},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x204)]=Window_Options[_0x36bcab(0x289)][_0x36bcab(0x297)],Window_Options[_0x36bcab(0x289)][_0x36bcab(0x297)]=function(){const _0x547c29=_0x36bcab;VisuMZ['AggroControlSystem'][_0x547c29(0x204)][_0x547c29(0x1b5)](this),this[_0x547c29(0x2a5)]();},Window_Options[_0x36bcab(0x289)][_0x36bcab(0x2a5)]=function(){const _0x57c0ee=_0x36bcab;VisuMZ['AggroControlSystem']['Settings'][_0x57c0ee(0x157)][_0x57c0ee(0x221)]&&this['addAggroControlSystemProvokeCommand'](),VisuMZ[_0x57c0ee(0x158)][_0x57c0ee(0x282)][_0x57c0ee(0x1f7)]['AddOption']&&this[_0x57c0ee(0x150)]();},Window_Options['prototype'][_0x36bcab(0x18c)]=function(){const _0x561014=_0x36bcab,_0x502587=TextManager['provokeOrigin'],_0x4c88fe=_0x561014(0x1e9);this[_0x561014(0x1c6)](_0x502587,_0x4c88fe);},Window_Options['prototype'][_0x36bcab(0x150)]=function(){const _0x512f67=_0x36bcab,_0x360283=TextManager[_0x512f67(0x1d1)],_0x1128eb=_0x512f67(0x1d1);this[_0x512f67(0x1c6)](_0x360283,_0x1128eb);},VisuMZ[_0x36bcab(0x158)][_0x36bcab(0x27f)]=Window_StatusBase[_0x36bcab(0x289)][_0x36bcab(0x257)],Window_StatusBase[_0x36bcab(0x289)][_0x36bcab(0x257)]=function(_0x549610,_0x5cf5c4,_0x42228e){const _0x3537ef=_0x36bcab;if(this[_0x3537ef(0x213)]())this[_0x3537ef(0x1a6)](_0x549610[_0x3537ef(0x2f1)]());VisuMZ['AggroControlSystem'][_0x3537ef(0x27f)][_0x3537ef(0x1b5)](this,_0x549610,_0x5cf5c4,_0x42228e);},Window_StatusBase[_0x36bcab(0x289)][_0x36bcab(0x213)]=function(){const _0x378ba3=_0x36bcab;if(![Window_BattleActor,Window_BattleStatus][_0x378ba3(0x1b2)](this[_0x378ba3(0x266)]))return![];if(!SceneManager[_0x378ba3(0x166)]())return![];return ConfigManager[_0x378ba3(0x1d1)]&&VisuMZ['AggroControlSystem']['Settings'][_0x378ba3(0x1f7)][_0x378ba3(0x1bd)];},Window_StatusBase[_0x36bcab(0x289)]['placeAggroGauge']=function(_0x248338,_0x1a42d1,_0x17edc8){const _0x2ad305=_0x36bcab;this[_0x2ad305(0x209)](_0x248338,_0x2ad305(0x20a),_0x1a42d1,_0x17edc8);},Window_BattleStatus[_0x36bcab(0x289)][_0x36bcab(0x1a6)]=function(_0x32ef3d){const _0x559d87=_0x36bcab,_0x5b0034=this[_0x559d87(0x155)](_0x32ef3d),_0x140ab1=this[_0x559d87(0x272)](_0x32ef3d),_0x3809d2=this[_0x559d87(0x261)](_0x32ef3d),_0x4787d7=_0x559d87(0x2f8)[_0x559d87(0x1a4)](_0x5b0034[_0x559d87(0x239)]()),_0x5b37bd=this[_0x559d87(0x1ba)](_0x4787d7,Sprite_Gauge),_0x516869=VisuMZ[_0x559d87(0x158)][_0x559d87(0x282)][_0x559d87(0x1f7)];_0x5b37bd['x']=_0x140ab1+(_0x516869['BattleStatusOffsetX']||0x0),_0x5b37bd['y']=_0x3809d2+(_0x516869[_0x559d87(0x226)]||0x0),_0x5b37bd[_0x559d87(0x1e2)]=!![],_0x5b37bd[_0x559d87(0x178)](_0x5b0034,'aggro'),_0x5b37bd[_0x559d87(0x181)]=!![];},Window_BattleStatus[_0x36bcab(0x289)][_0x36bcab(0x272)]=function(_0x2c44a0){const _0x36b1e4=_0x36bcab;let _0x3f9dc4=this[_0x36b1e4(0x208)](_0x2c44a0),_0x31e64f=this[_0x36b1e4(0x276)](_0x3f9dc4);if(Imported[_0x36b1e4(0x23f)]){let _0x5539be=this['itemRect'](_0x2c44a0);if(this['battleLayoutStyle']()==='list'){if('VWpdn'===_0x36b1e4(0x16b))_0x2bf1b6[_0x36b1e4(0x14a)]['x']=-_0x23ba42['abs'](_0x538e89[_0x36b1e4(0x14a)]['x']);else{const _0x2616cf=$dataSystem[_0x36b1e4(0x2b0)]?0x4:0x3,_0x49d238=_0x2616cf*0x80+(_0x2616cf-0x1)*0x8+0x4,_0x40f67f=this[_0x36b1e4(0x155)](_0x2c44a0);let _0x50d1e4=_0x5539be['x']+this[_0x36b1e4(0x264)];if(VisuMZ[_0x36b1e4(0x262)][_0x36b1e4(0x282)][_0x36b1e4(0x296)][_0x36b1e4(0x2ab)]){if(_0x36b1e4(0x1e5)===_0x36b1e4(0x25c)){const _0x145276=_0x1a757f['aliveMembers']();this[_0x36b1e4(0x251)]=this[_0x36b1e4(0x251)][_0x36b1e4(0x173)](_0x145276),_0x136420[_0x36b1e4(0x2bc)]&&_0x3b038b[_0x36b1e4(0x2bc)]()&&_0x145276[_0x36b1e4(0x2b5)]>0x1&&this[_0x36b1e4(0x2b8)](_0x36b1e4(0x16a),this[_0x36b1e4(0x2a4)]['bind'](this));}else _0x50d1e4=_0x5539be['x']+ImageManager[_0x36b1e4(0x1c9)]+0x8;}else _0x36b1e4(0x2b9)===_0x36b1e4(0x2b9)?_0x50d1e4+=ImageManager[_0x36b1e4(0x1c0)]:this[_0x36b1e4(0x251)]=_0x462e0a[_0x36b1e4(0x1ea)]();_0x31e64f=Math['round'](Math[_0x36b1e4(0x2fa)](_0x5539be['x']+_0x5539be['width']-_0x49d238,_0x50d1e4)),_0x31e64f-=0x4;}}else _0x31e64f=Math['round'](_0x5539be['x']+(_0x5539be[_0x36b1e4(0x1e4)]-0x80)/0x2);}return _0x31e64f;},Window_BattleStatus[_0x36bcab(0x289)][_0x36bcab(0x261)]=function(_0x442766){const _0x4e0aca=_0x36bcab,_0x5d6dc5=this[_0x4e0aca(0x229)](_0x442766);let _0x4816f2=this['nameY'](_0x5d6dc5);if(Imported[_0x4e0aca(0x23f)]){if(this[_0x4e0aca(0x211)]()===_0x4e0aca(0x278)){let _0x5881ab=this['itemRect'](_0x442766);_0x4816f2=Math[_0x4e0aca(0x1fe)](_0x5881ab['y']+(_0x5881ab[_0x4e0aca(0x1de)]-Sprite_Name[_0x4e0aca(0x289)][_0x4e0aca(0x202)]())/0x2);}}if(this['isAtbGaugeVisible']())_0x4816f2-=Sprite_Gauge['prototype'][_0x4e0aca(0x1f2)]()-0x1;return _0x4816f2;},Window_BattleStatus[_0x36bcab(0x289)][_0x36bcab(0x188)]=function(){const _0x640ea4=_0x36bcab;if(!BattleManager[_0x640ea4(0x153)]())return![];if(Imported['VisuMZ_2_BattleSystemATB'])return this[_0x640ea4(0x16d)](_0x640ea4(0x2da));return!![];};