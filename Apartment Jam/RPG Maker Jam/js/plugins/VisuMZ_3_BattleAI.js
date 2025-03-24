//=============================================================================
// VisuStella MZ - Battle A.I.
// VisuMZ_3_BattleAI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_BattleAI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleAI = VisuMZ.BattleAI || {};
VisuMZ.BattleAI.version = 1.24;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.24] [BattleAI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_AI_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This Battle A.I. plugin changes up how enemies and any Auto Battle actors
 * behave by implementing many new key components to their decision making
 * process in battle. These new compotents are: A.I. Styles, A.I. Levels, 
 * Rating Variance, A.I. Conditions, and Influencing TGR Weight.
 *
 * With these new key components put together, you can transform RPG Maker MZ's
 * highly primitive A.I. into something more intelligent. Auto Battle actors
 * can also base their A.I. patterns off an enemy's A.I. in order to behave in
 * more desirable ways during battle as well.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Different A.I. Styles to allow for various ways to setup enemy A.I.
 * * Set A.I. Levels for enemies and Auto Battle actors.
 * * A.I. Levels can be set on a global scale or individual scale.
 * * Set rating variance levels to prioritize actions or randomize them.
 * * These include notetags to change them on a per individual basis.
 * * Create action conditions to make certain skills usable by the A.I. under
 *   specific circumstances.
 * * Action conditions are split between 'ALL' and 'ANY' types which require
 *   either all conditions to be met or at least one condition to be met.
 * * A large selection of condition notetags to use to help customize the best
 *   case situations on when to use a skill and which target to pick.
 * * Default condition settings can be made in the Plugin Parameters to make an
 *   entire database of skills become conditional for A.I. usage.
 * * Influence TGR weight to make certain targets more desirable for specific
 *   types of actions.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Auto Battle A.I. for Actors
 *
 * - With this plugin, there is an option to let certain classes reference
 * specific enemy A.I. patterns to decide which skills to use during battle.
 * If the reference option is not used, the actor will use default Auto Battle
 * evaluations to determine which skills to use instead.
 *
 * ---
 * 
 * A.I. Styles
 * 
 * - There are currently four different A.I. Styles. Actors and enemies can
 * default to a different one globally, or changed individually using notetags.
 * Read more about them in the A.I. Styles section.
 * 
 * ---
 *
 * A.I. Levels
 *
 * - Enemies and actors can be given different A.I. Levels. The higher one's
 * A.I. Level, the more they are to follow conditions. With Level 100 A.I.
 * Level, an A.I. will never disobey a condition. On the other hand, lower
 * A.I. Levels may possibly ignore certain conditions and act as if they are
 * fulfilled.
 *
 * ---
 *
 * A.I. Rating Variance
 *
 * - In the RPG Maker database editor, when deciding an enemy's Action Patterns
 * you can decide on the action's "rating". The rating is a value from 1 to 9
 * where 9 gets the highest priority and 1 gets the lowest. RPG Maker, by
 * default, will sometimes dip the rating a few levels lower to allow lower
 * ratings and bypass the priority system.
 *
 * - This plugin allows you to set the variance level through Plugin Parameters
 * on a global scale or notetags on an individual basis to allow for larger,
 * smaller, or no variance on ratings at all.
 *
 * ---
 *
 * A.I. Conditions for Skill Usage
 *
 * - Enemies and any actors that use Auto Battle A.I. with a reference can only
 * use certain skills as long as specific conditions have been met. These
 * conditions are split between 'ALL' condition sets and 'ANY' condition sets.
 *
 * - 'ALL' condition sets require all of the set's conditions to be met in
 * order for the skill to be used by the A.I.
 *
 * - 'ANY' condition sets require at least one of the set's conditions to be
 * met in order for the skill to be used by the A.I.
 *
 * - A variety of conditions can be inserted into each condition set to make
 * for some very specific usage conditions. These will also help filter out
 * which targets to pick from, too.
 *
 * ---
 *
 * TGR Weight on A.I. Target Selection
 *
 * - TGR is a special parameter in RPG Maker MZ that represents "Target Rate".
 * The higher one's TGR, the more likely they are to become the target of an
 * attack. This plugin allows various things to influence the TGR weight to
 * make certain targets more likely to be targets for attack.
 *
 * - Elemental influence rates on the TGR weight mean that if a target receives
 * more damage from an elemental attack, the TGR weight becomes higher for that
 * skill when determining a target. The higher the elemental damage received,
 * the more the TGR weight shifts upward.
 *
 * - Evasion and Magic Evasion rates do the opposite. The higher a potential
 * target's evasion and magic evasion rate is (for physical and magical skills)
 * the lower the TGR weight becomes for that potential target.
 *
 * - By default Plugin Parameter settings, TGR weight shifting requires the
 * enemy troop to have "knowledge" on the party's element rates, evasion, and
 * magic evasion properties. Enemy troops would have to hit actors with element
 * based attacks to learn the actor's resistance levels, physical attacks to
 * learn the actor's evasion, and magical attacks to learn the actor's magic
 * evasion levels.
 *
 * ---
 *
 * ============================================================================
 * A.I. Styles
 * ============================================================================
 * 
 * There are currently four different A.I. Styles. These determine how the
 * A.I. acts and behaves. You can change the A.I. Style used globally through
 * the Plugin Parameters or individually for classes and enemies through the
 * usage of notetags.
 * 
 * Read below to understand each style and its rules:
 * 
 * ---
 * 
 * Classic Style
 * 
 * "Classic" style is the traditional and default RPG Maker MZ A.I. style.
 * It puts emphasis on the Rating system, where skills with higher ratings are
 * given more priority than skills with lower ratings within variance.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions with higher Ratings.
 * - Rating variance will be determined by Plugin Parameters and/or notetags.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - After applying Ratings, Rating Variances, and A.I. Conditions, if there
 *   are still multiple actions to choose from, pick from the remaining actions
 *   randomly.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Gambit Style
 * 
 * - "Gambit" style is the style from Yanfly Engine Plugin's Battle A.I. Core.
 * It goes down the list of skills and uses them in order as long as they meet
 * the Action Pattern conditions and A.I. conditions. Ratings will be ignored.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions located higher on the list.
 * - Actions towards the bottom of the list will have lower priority.
 * - Ratings and Rating Variance has no bearing on whether or not an action
 *   will be picked.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Casual Style
 * 
 * - "Casual" style takes a lighter approach to A.I. It ignores the Ratings
 * system and doesn't care about the order of actions either. Instead, the
 * only thing this A.I. Style cares about are the A.I. Conditions. All valid
 * actions after that are randomly picked from.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Random Style
 * 
 * - "Random" style simply does not care about ratings or order. It only cares
 * if the skill's can be used (can pay for the cost) and Action Pattern
 * conditions. It does not care about A.I. Conditions, Ratings, or Order.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions are ignored.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
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
 * === General A.I. Settings Notetags ===
 *
 * These notetags set the general A.I. related settings for enemies and any
 * actors that use A.I. (requires Auto Battle and has a reference A.I.).
 *
 * ---
 * 
 * <AI Style: x>
 * 
 * - Used for: Class, Enemy Notetags
 * - Replace 'x' with 'Classic', 'Gambit', 'Casual', or 'Random' without the
 *   quotes. Example: <AI Style: Gambit>
 * - Determines the A.I. style used. Refer to the A.I. Styles section on the
 *   various types of styles.
 * - For actors, place this inside the associated class's notebox instead.
 * - For actors, this does not apply if there is no referenced enemy A.I. list.
 * - Setup the reference enemy through either the Plugin Parameters or by using
 *   the <Reference AI: Enemy id> notetag found below.
 * 
 * ---
 *
 * <AI Level: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Designates the unit's A.I. level if A.I. is to be used.
 * - Replace 'x' with a number from 0 to 100.
 * - Units with higher A.I. Levels will be more strict about conditions.
 * - Units with lower A.I. Levels will be more lax about conditions.
 *
 * ---
 *
 * <AI Rating Variance: x>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the variance amount when determining A.I. actions by rating.
 * - Replace 'x' with a number between 0 and 9.
 * - 0 for no variance.
 * - Lower numbers for less variance.
 * - Higher numbers for more variance.
 *
 * ---
 *
 * <Reference AI: Enemy id>
 * <Reference AI: name>
 *
 * - Used for: Class Notetags
 * - Causes any actor using this class that has the Auto Battle trait to use
 *   a specific enemy's attack pattern (ratings, conditions, etc.) to determine
 *   which skill to use in battle.
 * - Replace 'id' with a number representing the enemy's ID to reference.
 * - Replace 'name' with the name the enemy to reference.
 * - Actors are only able to use skills they would normally have access to.
 *   - Actors need to have LEARNED the skill.
 *   - Actors need to be able to access the skill's SKILL TYPE.
 *   - Actors need to have the RESOURCES to pay for the skill.
 * - If you cannot figure out why an auto battle actor cannot use a specific
 *   skill, turn OFF auto battle and see if you can use the skill normally.
 *
 * ---
 *
 * <No Reference AI>
 *
 * - Used for: Class Notetags
 * - Prevents the class from using any enemies as their reference A.I. pattern
 *   (including the one set in the Plugin Parameters).
 *
 * ---
 *
 * === Skill A.I. Condition Notetags ===
 *
 * Insert these notetags into the noteboxes of skills that you'd like to give
 * custom A.I. conditions for. The 'All' version of the notetags require every
 * condition to be met while the 'Any' version of the notetags require only one
 * of the conditions to be met. 
 *
 * If both are used together, then the 'All' conditions must be completely
 * fulfilled while the 'Any' conditions need only one to be fulfilled.
 *
 * ---
 *
 * <All AI Conditions>
 *  condition
 *  condition
 *  condition
 * </All AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - All conditions must be met in order for this to become a valid skill for
 *   the AI to use.
 * - This can be used together with <Any AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'All' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <Any AI Conditions>
 *  condition
 *  condition
 *  condition
 * </Any AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - As long as one condition is met, this becomes a valid skill for the AI
 *   to use. If none of them are met, this skill becomes invalid for AI use.
 * - This can be used together with <All AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'Any' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <No AI Conditions>
 * 
 * - Used for: Skill
 * - Removes any default 'All' and 'Any' conditions for this skill.
 * 
 * ---
 *
 * -=-=- Condition List -=-=-
 *
 * Replace 'condition' in the notetags in the above section with any of the
 * following to make conditions. These conditions are also used in the Plugin
 * Parameters for the default conditions, too.
 *
 * ---
 *
 * x >= y
 * x > y
 * x === y
 * x !== y
 * x < y
 * x <= y
 *
 * - Replace 'x' and 'y' with any of the following:
 *
 * - A numeric value representing a hard number.
 * - '50%' or any other percentile number to represent a rate.
 * - '0.5' or any other float number to represent a rate.
 *
 * - 'Variable x' (replace 'x' with a number) for variable x's current value.
 *
 * - 'HP%', 'MP%', 'TP%' for HP, MP, and TP rates respectively.
 * - 'MaxHP', 'MaxMP', 'MaxTP' for the potential target's respective values.
 * - 'Level' for the potential target's level. Requires VisuMZ_0_CoreEngine for
 *   this to affect enemies.
 * - 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK' for the potential target's total
 *   parameter value.
 *
 * - 'param Buff Stacks' for the potential target's current Buff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 * - 'param Debuff Stacks' for the potential target's current Debuff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * - 'param Buff Turns' for potential target's current buff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that buff.
 * - 'param Debuff Turns' for potential target's current debuff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that debuff.
 *
 * - 'State id Turns' or 'State name Turns' for potential target's current turn
 *   duration on that particular state.
 *   - Replace 'id' with a number representing the ID of the state.
 *   - Replace 'name' with the state's name.
 *   - Returns 0 if the potential target is not affected by that state.
 *   - Returns the max safe number value if the potential target is has that
 *     state as a passive state.
 *
 * - 'Element id Rate', 'Element name Rate', 'name Element Rate'
 *   - Returns a (float) value of the potential target's element's rate.
 *   - Replace 'id' with the ID of the element whose rate is to be checked.
 *   - Replace 'name' with the name of the element whose rate is to be checked.
 *     - Ignore any text codes in the element name.
 *
 * - 'Team Alive Members'
 *   - Returns a number value indicating how many alive members there are on
 *     the potential target's team.
 *
 * - 'Team Dead Members'
 *   - Returns a number value indicating how many dead members there are on
 *     the potential target's team.
 * 
 * - When no keyword matches are found, the comparison value will be
 *   interpreted as JavaScript code. If the JavaScript code fails, it will
 *   default to a 0 value.
 * 
 *   *NOTE* JavaScript cannot be used without comparison operators to reduce
 *   error. This means if you want to check if a switch is on or not, don't
 *   simply use "$gameSwitches.value(42)" as it does not have any comparison
 *   operators. Instead, use "$gameSwitches.value(42) === true" to check.
 *
 *   *NOTE* To make any of these conditions base off of the user instead, add
 *   the word 'user' before the condition as such:
 *
 *   user hp% >= 0.50
 *   user atk buff stacks === 2
 *   user team alive members < 3
 *
 * ---
 *
 * Always
 *
 * - Going to be valid no matter what.
 *
 * ---
 *
 * x% Chance
 * 
 * - Replace 'x' with a number value representing the percent chance this skill
 *   would pass as valid.
 *
 * ---
 *
 * Switch x On
 * Switch x Off
 *
 * - Replace 'x' with the ID of the switch to check as ON/OFF.
 *
 * ---
 *
 * User is Actor
 * User is Enemy
 * Target is Actor
 * Target is Enemy
 *
 * - Requires the user or potential target to be an actor/enemy.
 *
 * ---
 *
 * User Has State id
 * User Has State name
 * Target Has State id
 * Target Has State name
 *
 * - Replace 'id' with the ID of the state the user or potential target needs
 *   to have.
 * - Replace 'name' with the name of the state the target needs to have.
 *
 * ---
 *
 * User Not State id
 * User Not State name
 * Target Not State id
 * Target Not State name
 *
 * - Replace 'id' with the ID of the state the user or potential target
 *   cannot have.
 * - Replace 'name' with the name of the state the target cannot have.
 *
 * ---
 *
 * User Has param Buff 
 * User Has param Debuff 
 * Target Has param Buff 
 * Target Has param Debuff 
 *
 * - Requires user or potential target to have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Has param Max Buff 
 * User Has param Max Debuff
 * Target Has param Max Buff 
 * Target Has param Max Debuff
 *
 * - Requires potential user or target to have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Buff 
 * User Not param Debuff 
 * Target Not param Buff 
 * Target Not param Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Max Buff 
 * User Not param Max Debuff 
 * Target Not param Max Buff 
 * Target Not param Max Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * === A.I. => TGR Weight Notetags ===
 *
 * You can set how much influence on TGR weights actors and enemies will place
 * when determining valid targets for their actions.
 *
 * ---
 *
 * <AI Element Rate Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the element rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI Element Rate Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in element rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI EVA Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the EVA rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI EVA Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in EVA rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI MEV Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the MEV rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI MEV Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in MEV rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 * 
 * === Specific A.I. Targeting Notetags ===
 * 
 * Specific A.I. targeting means the user will ignore any TGR influences when
 * it comes to pick out of a group of valid candidates to come down to one
 * target. This only affects skills where the user must select a specific
 * target, meaning it will ignore the effects of random and AoE scopes.
 * 
 * ---
 *
 * <AI Target: type>
 *
 * - Used for: Skill Notetags
 * - Bypasses TGR influence in favor of picking a specific target out of a
 *   group of valid targets (does not pick from outside the valid target group)
 *   for a skill target.
 * - Replace 'type' with any of the following:
 * 
 *   ----------------------------   -------------------------------------------
 *   Type                           Description
 *   ----------------------------   -------------------------------------------
 *   User                           Always picks the user if available
 *   First                          Always picks the first valid candidate
 *   Last                           Always picks the last valid candidate
 *   ----------------------------   -------------------------------------------
 *   Highest Level                  Picks candidate with highest level
 *   ----------------------------   -------------------------------------------
 *   Highest MaxHP                  Picks candidate with highest MaxHP
 *   Highest HP                     Picks candidate with highest current HP
 *   Highest HP%                    Picks candidate with highest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxMP                  Picks candidate with highest MaxMP
 *   Highest MP                     Picks candidate with highest current MP
 *   Highest MP%                    Picks candidate with highest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxTP                  Picks candidate with highest MaxTP
 *   Highest TP                     Picks candidate with highest current TP
 *   Highest TP%                    Picks candidate with highest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest ATK                    Picks candidate with highest ATK parameter
 *   Highest DEF                    Picks candidate with highest DEF parameter
 *   Highest MAT                    Picks candidate with highest MAT parameter
 *   Highest MDF                    Picks candidate with highest MDF parameter
 *   Highest AGI                    Picks candidate with highest AGI parameter
 *   Highest LUK                    Picks candidate with highest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Highest HIT                    Picks candidate with highest HIT parameter
 *   Highest EVA                    Picks candidate with highest EVA parameter
 *   Highest CRI                    Picks candidate with highest CRI parameter
 *   Highest CEV                    Picks candidate with highest CEV parameter
 *   Highest MEV                    Picks candidate with highest MEV parameter
 *   Highest MRF                    Picks candidate with highest MRF parameter
 *   Highest CNT                    Picks candidate with highest CNT parameter
 *   Highest HRG                    Picks candidate with highest HRG parameter
 *   Highest MRG                    Picks candidate with highest MRG parameter
 *   Highest TRG                    Picks candidate with highest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Highest TGR                    Picks candidate with highest TGR parameter
 *   Highest GRD                    Picks candidate with highest GRD parameter
 *   Highest REC                    Picks candidate with highest REC parameter
 *   Highest PHA                    Picks candidate with highest PHA parameter
 *   Highest MCR                    Picks candidate with highest MCR parameter
 *   Highest TCR                    Picks candidate with highest TCR parameter
 *   Highest PDR                    Picks candidate with highest PDR parameter
 *   Highest MDR                    Picks candidate with highest MDR parameter
 *   Highest FDR                    Picks candidate with highest FDR parameter
 *   Highest EXR                    Picks candidate with highest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Highest State Count            Picks candidate with most states (any)
 *   Highest Positive State Count   Picks candidate with most positive states
 *   Highest Negative State Count   Picks candidate with most negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 *   Lowest Level                   Picks candidate with lowest level
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxHP                   Picks candidate with lowest MaxHP
 *   Lowest HP                      Picks candidate with lowest current HP
 *   Lowest HP%                     Picks candidate with lowest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxMP                   Picks candidate with lowest MaxMP
 *   Lowest MP                      Picks candidate with lowest current MP
 *   Lowest MP%                     Picks candidate with lowest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxTP                   Picks candidate with lowest MaxTP
 *   Lowest TP                      Picks candidate with lowest current TP
 *   Lowest TP%                     Picks candidate with lowest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest ATK                     Picks candidate with lowest ATK parameter
 *   Lowest DEF                     Picks candidate with lowest DEF parameter
 *   Lowest MAT                     Picks candidate with lowest MAT parameter
 *   Lowest MDF                     Picks candidate with lowest MDF parameter
 *   Lowest AGI                     Picks candidate with lowest AGI parameter
 *   Lowest LUK                     Picks candidate with lowest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest HIT                     Picks candidate with lowest HIT parameter
 *   Lowest EVA                     Picks candidate with lowest EVA parameter
 *   Lowest CRI                     Picks candidate with lowest CRI parameter
 *   Lowest CEV                     Picks candidate with lowest CEV parameter
 *   Lowest MEV                     Picks candidate with lowest MEV parameter
 *   Lowest MRF                     Picks candidate with lowest MRF parameter
 *   Lowest CNT                     Picks candidate with lowest CNT parameter
 *   Lowest HRG                     Picks candidate with lowest HRG parameter
 *   Lowest MRG                     Picks candidate with lowest MRG parameter
 *   Lowest TRG                     Picks candidate with lowest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest TGR                     Picks candidate with lowest TGR parameter
 *   Lowest GRD                     Picks candidate with lowest GRD parameter
 *   Lowest REC                     Picks candidate with lowest REC parameter
 *   Lowest PHA                     Picks candidate with lowest PHA parameter
 *   Lowest MCR                     Picks candidate with lowest MCR parameter
 *   Lowest TCR                     Picks candidate with lowest TCR parameter
 *   Lowest PDR                     Picks candidate with lowest PDR parameter
 *   Lowest MDR                     Picks candidate with lowest MDR parameter
 *   Lowest FDR                     Picks candidate with lowest FDR parameter
 *   Lowest EXR                     Picks candidate with lowest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest State Count             Picks candidate with least states (any)
 *   Lowest Positive State Count    Picks candidate with least positive states
 *   Lowest Negative State Count    Picks candidate with least negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 * 
 * ---
 *
 * ============================================================================
 * Regarding $gameTroop.turnCount() for A.I. Conditions
 * ============================================================================
 * 
 * ---
 * 
 * Short Answer:
 *
 * Battle A.I. conditions do NOT support the conditions $gameTroop.turnCount()
 * or user.turnCount() or target.turnCount() for A.I. Conditions.
 * 
 * Instead, use RPG Maker MZ's built-in action editor's turn requirement to
 * make do with the same effect.
 *
 * ---
 * 
 * Long Answer:
 * 
 * The turnCount() functions are not valid for A.I. Conditions and disabled due
 * to all the problems they cause. The reason being is because actions are
 * determined before the turn count increases. This is how RPG Maker MZ handles
 * it by default.
 * 
 * The reason why this does not work is due to the following code found in
 * RPG Maker MZ's core scripts:
 * 
 *   Game_Battler.prototype.turnCount = function() {
 *       if (BattleManager.isTpb()) {
 *           return this._tpbTurnCount;
 *       } else {
 *           return $gameTroop.turnCount() + 1;
 *       }
 *   };
 * 
 * What that means the turn count will always be off by 1. So upon determining
 * the action initially, the match would come off as correct. However, as the
 * turn actually starts and reaches the enemy or actor's turn, the turn count
 * check would read differently and return incorrect information, causing the
 * battler to forfeit their actions.
 * 
 * This facet of RPG Maker MZ can be updated and changed, but it is better that
 * it doesn't in order to maintain compatibility with the rest of the plugins
 * available that utilize the turn counter.
 * 
 * The work around to this problem is, instead, to use the enemy database tab's
 * action editor and apply a Turn Condition to match the required turn instead.
 * You know, the thing with Skill and Rating, where you select which skill for
 * the enemy to use instead.
 * 
 * HOWEVER!
 * 
 * If you are willing to use an "Experimental" feature, aka one that is not
 * heavily tested and may potentially result in unintended side effects, go to:
 * 
 *  Plugin Parameters > A.I. General Settings > Experimental > On-The-Spot A.I.
 * 
 * And set that to "true" without the quotes. This will forcefully remove the
 * +1 towards the count and forcefully make enemies re-evaluate actions upon
 * the start of the string of their actions. This comes with some side effects
 * that will potentially give A.I. advantages or disadvantages depending on the
 * battle system type. Action Speed becomes something that can be abused as it
 * is normally something that is determined based on the queued actions. A.I.
 * can pick a high speed weak action and then switch it for a slow speed strong
 * action. There is no proper fix to this due to how on-the-spot A.I. works as
 * it is ill-fitted for speed-relative battle systems. You have been warned.
 * 
 * In the event that this Plugin Parameter IS enabled, then using the turnCount
 * JavaScript code should work again due to the normalization of how the turn
 * property is calculated.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. General Settings
 * ============================================================================
 *
 * These settings determine the global settings for general Battle A.I. usage.
 *
 * ---
 * 
 * A.I. Style
 * 
 *   Actor Style:
 *   - Which A.I. style do you want for referenced actors to use?
 *   - This does not apply to non-referenced actors.
 * 
 *   Enemy Style:
 *   - Which A.I. style do you want for enemies to use?
 * 
 *   Refer to the A.I. Styles list for a list of valid styles.
 * 
 * ---
 *
 * A.I. Level
 * 
 *   Actor A.I. Level:
 *   - Default A.I. level used for actor A.I.
 *   - Levels: 0-100. Higher is stricter.
 * 
 *   Enemy A.I. Level:
 *   - Default A.I. level used for enemy A.I.
 *   - Levels: 0-100. Higher is stricter.
 *
 * ---
 *
 * A.I. Ratings
 * 
 *   Actor Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 * 
 *   Enemy Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 *
 * ---
 *
 * Reference
 * 
 *   Actor => AI Reference:
 *   - Which enemy A.I. should the actor reference by default?
 *   - Use 0 for no references.
 *
 * ---
 *
 * Knowledge
 * 
 *   Learn Knowledge:
 *   - Requires enemies/actors to test the knowledge of the opponents before
 *     using specific conditions.
 * 
 *   Unknown Element Rate:
 *   - What should A.I. treat unknown element rates as?
 *
 * ---
 * 
 * Experimental
 * 
 *   On-The-Spot A.I.:
 *   - A.I. enemies/actors determine actions on the spot when it's their turn.
 * 
 *     No Idle Chant:
 *     - Requires On-The-Spot A.I. enabled.
 *     - For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. Default Conditions
 * ============================================================================
 *
 * You can set certain conditions to be used as defaults for all skills that
 * lack the <All AI Conditions> and <Any AI Conditions>. If either of those
 * notetags exist, none of these defaults will be used for those skills. These
 * settings will allow you to set both 'All' and 'Any' conditions for defaults.
 *
 * ---
 *
 * Enable?
 * 
 *   All Conditions:
 *   - Create default 'ALL' conditions for all skills without any AI notetags?
 * 
 *   Any Conditions:
 *   - Create default 'ANY' conditions for all skills without any AI notetags?
 *
 * ---
 *
 * HP Damage
 * MP Damage
 * HP Recover
 * MP Recover
 * HP Drain
 * MP Drain
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *
 * ---
 *
 * Add State
 * Remove State
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * Add Buff
 * Remove Buff
 * Add Debuff
 * Remove Debuff
 * 
 *   All Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie param's).
 * 
 *   Any Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. => TGR Weight Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to set whether or not you'd like for 
 * weight influence when deciding targets for actions and how much to influence
 * the TGR weight by.
 *
 * ---
 *
 * Weight
 * 
 *   Element Rate => TGR:
 *   - Makes all A.I. consider elemental rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence elemental rates have on
 *       TGR weight.
 * 
 *   EVA Rate => TGR:
 *   - Makes all A.I. consider EVA rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence EVA rates have on
 *       TGR weight.
 * 
 *   MEV Rate => TGR:
 *   - Makes all A.I. consider MEV rates when considering TGR weight
 *     by default?
 * 
 *   Influence Rate:
 *   - This determines the default level of influence MEV rates have on
 *     TGR weight.
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
 * Version 1.24: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause an infinite loop with certain battle systems
 *    under on the spot AI setting. Fix made by Olivia.
 * 
 * Version 1.23: January 18, 2024
 * * Compatibility Update!
 * ** Updated better compatibility with Battle System - STB and Auto Skill
 *    Triggers to prevent infinite loops. Update made by Olivia.
 * 
 * Version 1.22: December 14, 2023
 * * Compatibility Update!
 * ** Updated better compatibility for the new Battle System FTB, ETB, and PTB
 *    updates. Update made by Olivia.
 * 
 * Version 1.21: April 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented enemies from using skills that had the
 *    <Target: x Random Any> notetag. Fix made by Irina.
 * 
 * Version 1.20: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.74
 *    new features.
 * 
 * Version 1.19: January 20, 2023
 * * Bug Fixes!
 * ** On-The-Spot A.I. no longer overwrites Forced Actions. Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.73
 *    new features.
 * 
 * Version 1.18: May 19, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** General Settings > Experimental > On-The-Spot A.I. > No Idle Chant
 * **** Requires On-The-Spot A.I. enabled.
 * **** For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * Version 1.17: May 12, 2022
 * * Feature Update!
 * ** Better RNG calculation when using the x% Chance conditional. Update made
 *    by Arisu.
 * 
 * Version 1.16: February 24, 2022
 * * Feature Update!
 * ** Randomization between zero variance A.I. is now better.
 * ** A.I. will no longer keep unusable skills in a skill queue and replace
 *    them with new ones.
 * 
 * Version 1.15: December 2, 2021
 * * Compatibility Update!
 * ** AI for skills and items should now work if their scope is
 *    <Target: All Allies But User>. Update made by Irina.
 * 
 * Version 1.14: October 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Notetag section "Condition List" updated with the following:
 * *** *NOTE* JavaScript cannot be used without comparison operators to reduce
 *     error. This means if you want to check if a switch is on or not, don't
 *     simply use "$gameSwitches.value(42)" as it does not have any comparison
 *     operators. Instead, use "$gameSwitches.value(42) === true" to check.
 * ** Updated section "Regarding $gameTroop.turnCount() for A.I. Conditions"
 * * New Experimental Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** A.I. General Settings > Experimental > On-The-Spot A.I.
 * **** A.I. enemies/actors determine actions on the spot when it's their turn.
 * **** Functions akin to YEP's Battle A.I. Core where enemies determine new
 *      actions on the spot. Doing so will forcefully change the way the Turn
 *      Count is handled for Game_Battler to not utilize the +1.
 * **** This will forcefully remove the +1 towards the count and forcefully
 *      make enemies re-evaluate actions upon the start of the string of their
 *      actions. This comes with some side effects that will potentially give
 *      A.I. advantages or disadvantages depending on the battle system type.
 *      Action Speed becomes something that can be abused as it is normally
 *      something that is determined based on the queued actions. A.I. can pick
 *      a high speed weak action and then switch it for a slow speed strong
 *      action. There is no proper fix to this due to how on-the-spot A.I.
 *      works as it is ill-fitted for speed-relative battle systems. You have
 *      been warned.
 * **** In the event that this Plugin Parameter IS enabled, then using the
 *      turnCount JavaScript code should work again due to the normalization of
 *      how the turn property is calculated.
 * * Optimization Update!
 * ** Updated last version's newest change to be more optimized and occur upon
 *    each iteration of a new subject being determined to account for better
 *    check timing. Update made by Yanfly.
 * 
 * Version 1.13: October 13, 2021
 * * Feature Update!
 * ** A.I. Battlers with no currently determined actions, upon the start of the
 *    time frame for what would be their action, will have one more chance of
 *    determining a new action to use as to not waste their turns.
 * ** This does NOT mean that the A.I. Battlers will adjust their actions for
 *    one with a higher rating. The readjustment will only occur if there are
 *    no actions determined for that instance and only a one time window upon
 *    the start of the time frame for what would be their action.
 * ** Update made by Arisu.
 * 
 * Version 1.12: October 7, 2021
 * * Documentation Update!
 * ** Added section "Regarding $gameTroop.turnCount() for A.I. Conditions".
 * * Feature Update!
 * ** Any A.I. Conditions found with "turnCount()" will be automatically
 *    disabled in order to reduce confusion. This is due to how turnCount()
 *    functions do not accurately depict the current Turn Count depending on
 *    when the function runs. Update made by Olivia.
 * 
 * Version 1.11: September 30, 2021
 * * Bug Fixes!
 * ** Patched up a rare occurance of predetermined actions still having
 *    priority despite having no valid targets. Fix made by Olivia.
 * 
 * Version 1.10: September 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Olivia.
 * 
 * Version 1.09: July 9, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Arisu.
 * 
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Cached randomization seeds should no longer conflict with certain scope
 *    types. Update made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: January 22, 2021
 * * Bug Fixes!
 * ** <AI Target: x> notetags should no longer crashes. Fix made by Irina.
 * 
 * Version 1.06: January 8, 2021
 * * Feature Update!
 * ** For those using classic mode with a variance level of 0, action lists
 *    will be better shuffled to provide more variation between selected
 *    skills. Update made by Irina.
 * 
 * Version 1.05: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly!
 * *** <AI Target: type>
 * **** Bypasses TGR influence in favor of picking a specific target out of a
 *      group of valid targets (does not pick from outside the valid target
 *      group) for a skill target. Read documentation to see targeting types.
 * 
 * Version 1.04: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for notetag <Reference AI: Enemy id>
 * *** - Actors are only able to use skills they would normally have access to.
 *       - Actors need to have LEARNED the skill.
 *       - Actors need to be able to access the skill's SKILL TYPE.
 *       - Actors need to have the RESOURCES to pay for the skill.
 *     - If you cannot figure out why an auto battle actor cannot use a
 *       specific skill, turn OFF auto battle and see if you can use the skill
 *       normally.
 * 
 * Version 1.03: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.02: November 1, 2020
 * * Bug Fixes!
 * ** Charmed battlers will no longer vanish when attack one another. Fix made
 *    by Yanfly.
 * 
 * Version 1.01: October 18, 2020
 * * Bug Fixes!
 * ** <All AI Conditiosn> and <Any AI Conditions> notetags are now fixed and
 *    should work properly. Fix made by Yanfly.
 *
 * Version 1.00: September 30, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param BattleAI
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
 * @text A.I. General Settings
 * @type struct<General>
 * @desc General settings pertaining to A.I.
 * @default {"AIStyle":"","ActorStyleAI:str":"classic","EnemyStyleAI:str":"classic","AILevel":"","ActorAILevel:num":"100","EnemyAILevel:num":"100","AIRating":"","ActorRatingVariance:num":"1","EnemyRatingVariance:num":"3","Reference":"","ActorAIReference:num":"0","Knowledge":"","LearnKnowledge:eval":"true","UnknownElementRate:num":"1.00"}
 *
 * @param Default:struct
 * @text A.I. Default Conditions
 * @type struct<Default>
 * @desc Give certain types of skills default conditions.
 * @default {"Enable?":"","EnableAllCon:eval":"true","EnableAnyCon:eval":"true","HpDamage":"","HpDamageAll:json":"\"\"","HpDamageAny:json":"\"Always\"","MpDamage":"","MpDamageAll:json":"\"Target MP > 0\"","MpDamageAny:json":"\"\"","HpRecover":"","HpRecoverAll:json":"\"\"","HpRecoverAny:json":"\"Target HP < Target MaxHP\"","MpRecover":"","MpRecoverAll:json":"\"\"","MpRecoverAny:json":"\"Target MP < Target MaxMP\"","HpDrain":"","HpDrainAll:json":"\"\"","HpDrainAny:json":"\"User HP < User MaxHP\"","MpDrain":"","MpDrainAll:json":"\"Target MP > 0\"","MpDrainAny:json":"\"\"","AddState":"","AddStateAll:json":"\"\"","AddStateAny:json":"\"Target Not State %1\\nTarget State %1 Turns <= 1\"","RemoveState":"","RemoveStateAll:json":"\"\"","RemoveStateAny:json":"\"Target Has State %1\"","AddBuff":"","AddBuffAll:json":"\"\"","AddBuffAny:json":"\"Target Not %1 Max Buff\\nTarget %1 Buff Turns <= 1\"","RemoveBuff":"","RemoveBuffAll:json":"\"\"","RemoveBuffAny:json":"\"Target Has %1 Buff\"","AddDebuff":"","AddDebuffAll:json":"\"\"","AddDebuffAny:json":"\"Target Not %1 Max Debuff\\nTarget %1 Debuff Turns <= 1\"","RemoveDebuff":"","RemoveDebuffAll:json":"\"\"","RemoveDebuffAny:json":"\"Target Has %1 Debuff\""}
 *
 * @param Weight:struct
 * @text A.I. => TGR Weight
 * @type struct<Weight>
 * @desc How do certain properties translate to TGR weight?
 * @default {"ElementTgr:eval":"true","ElementTgrRate:num":"1.25","EvaTgr:eval":"true","EvaTgrRate:num":"1.50","MevTgr:eval":"true","MevTgrRate:num":"2.00"}
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
 * A.I. General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param AIStyle
 * @text A.I. Style
 *
 * @param ActorStyleAI:str
 * @text Actor Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for referenced actors to use?
 * This does not apply to non-referenced actors.
 * @default classic
 *
 * @param EnemyStyleAI:str
 * @text Enemy Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for enemies to use?
 * @default classic
 *
 * @param AILevel
 * @text A.I. Level
 *
 * @param ActorAILevel:num
 * @text Actor A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for actor A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param EnemyAILevel:num
 * @text Enemy A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for enemy A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param AIRating
 * @text A.I. Ratings
 *
 * @param ActorRatingVariance:num
 * @text Actor Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 1
 *
 * @param EnemyRatingVariance:num
 * @text Enemy Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 3
 *
 * @param Reference
 *
 * @param ActorAIReference:num
 * @text Actor => AI Reference
 * @parent Reference
 * @type enemy
 * @desc Which enemy A.I. should the actor reference by default?
 * Use 0 for no references.
 * @default 0
 *
 * @param Knowledge
 *
 * @param LearnKnowledge:eval
 * @text Learn Knowledge
 * @parent Knowledge
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Requires enemies/actors to test the knowledge of
 * the opponents before using specific conditions.
 * @default true
 *
 * @param UnknownElementRate:num
 * @text Unknown Element Rate
 * @parent LearnKnowledge:eval
 * @desc What should A.I. treat unknown element rates as?
 * @default 1.00
 * 
 * @param Experimental
 * 
 * @param OnSpotAI:eval
 * @text On-The-Spot A.I.
 * @parent Experimental
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc A.I. enemies/actors determine actions on the
 * spot when it's their turn.
 * @default false
 * 
 * @param SpotRemoveMotions:eval
 * @text No Idle Chant
 * @parent OnSpotAI:eval
 * @type boolean
 * @on Remove Idle Chanting
 * @off Allow Idle Chanting
 * @desc Requires On-The-Spot A.I. enabled. For A.I. Battlers,
 * disables idle chant motions due to inconsistency.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. Default Conditions
 * ----------------------------------------------------------------------------
 */
/*~struct~Default:
 *
 * @param Enable?
 *
 * @param EnableAllCon:eval
 * @text All Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ALL' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param EnableAnyCon:eval
 * @text Any Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ANY' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param HpDamage
 * @text HP Damage
 * 
 * @param HpDamageAll:json
 * @text All Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ALL' conditions used for HP damage skills.
 * @default ""
 * 
 * @param HpDamageAny:json
 * @text Any Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ANY' conditions used for HP damage skills.
 * @default "Always"
 *
 * @param MpDamage
 * @text MP Damage
 * 
 * @param MpDamageAll:json
 * @text All Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ALL' conditions used for MP damage skills.
 * @default "Target MP > 0"
 *
 * @param MpDamageAny:json
 * @text Any Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ANY' conditions used for MP damage skills.
 * @default ""
 *
 * @param HpRecover
 * @text HP Recover
 * 
 * @param HpRecoverAll:json
 * @text All Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ALL' conditions used for HP recovery skills.
 * @default ""
 *
 * @param HpRecoverAny:json
 * @text Any Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ANY' conditions used for HP recovery skills.
 * @default "Target HP < Target MaxHP"
 *
 * @param MpRecover
 * @text MP Recover
 * 
 * @param MpRecoverAll:json
 * @text All Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ALL' conditions used for MP recovery skills.
 * @default ""
 *
 * @param MpRecoverAny:json
 * @text Any Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ANY' conditions used for MP recovery skills.
 * @default "Target MP < Target MaxMP"
 *
 * @param HpDrain
 * @text HP Drain
 * 
 * @param HpDrainAll:json
 * @text All Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ALL' conditions used for HP drain skills.
 * @default ""
 *
 * @param HpDrainAny:json
 * @text Any Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ANY' conditions used for HP drain skills.
 * @default "User HP < User MaxHP"
 *
 * @param MpDrain
 * @text MP Drain
 * 
 * @param MpDrainAll:json
 * @text All Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ALL' conditions used for MP drain skills.
 * @default "Target MP > 0"
 *
 * @param MpDrainAny:json
 * @text Any Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ANY' conditions used for MP drain skills.
 * @default ""
 *
 * @param AddState
 * @text Add State
 * 
 * @param AddStateAll:json
 * @text All Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ALL' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddStateAny:json
 * @text Any Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ANY' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not State %1\nTarget State %1 Turns <= 1"
 *
 * @param RemoveState
 * @text Remove State
 * 
 * @param RemoveStateAll:json
 * @text All Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ALL' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveStateAny:json
 * @text Any Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ANY' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has State %1"
 *
 * @param AddBuff
 * @text Add Buff
 * 
 * @param AddBuffAll:json
 * @text All Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ALL' conditions used for adding buffs.
 * %1 - Dynamic values (ie param names).
 * @default ""
 *
 * @param AddBuffAny:json
 * @text Any Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ANY' conditions used for adding buffs.
 * %1 - Dynamic values (ie param's).
 * @default "Target Not %1 Max Buff\nTarget %1 Buff Turns <= 1"
 *
 * @param RemoveBuff
 * @text Remove Buff
 * 
 * @param RemoveBuffAll:json
 * @text All Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ALL' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveBuffAny:json
 * @text Any Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ANY' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Buff"
 *
 * @param AddDebuff
 * @text Add Debuff
 * 
 * @param AddDebuffAll:json
 * @text All Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ALL' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddDebuffAny:json
 * @text Any Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ANY' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not %1 Max Debuff\nTarget %1 Debuff Turns <= 1"
 *
 * @param RemoveDebuff
 * @text Remove Debuff
 * 
 * @param RemoveDebuffAll:json
 * @text All Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ALL' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveDebuffAny:json
 * @text Any Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ANY' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Debuff"
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. => TGR Weight Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Weight:
 *
 * @param ElementTgr:eval
 * @text Element Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider elemental rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param ElementTgrRate:num
 * @text Influence Rate
 * @parent ElementTgr:eval
 * @desc This determines the default level of influence elemental
 * rates have on TGR weight.
 * @default 1.25
 *
 * @param EvaTgr:eval
 * @text EVA Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider EVA rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param EvaTgrRate:num
 * @text Influence Rate
 * @parent EvaTgr:eval
 * @desc This determines the default level of influence EVA
 * rates have on TGR weight.
 * @default 1.50
 *
 * @param MevTgr:eval
 * @text MEV Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider MEV rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param MevTgrRate:num
 * @text Influence Rate
 * @parent MevTgr:eval
 * @desc This determines the default level of influence MEV
 * rates have on TGR weight.
 * @default 2.00
 *
 */
//=============================================================================

//=============================================================================
// Setup Plugin Parameters
//=============================================================================

var label = 'BattleAI';
var tier = tier || 0;
var dependencies = ['VisuMZ_1_BattleCore'];
var pluginData = $plugins.filter(function(p) { return p.status && p.description.includes('['+label+']') })[0];
VisuMZ[label].Settings = VisuMZ[label].Settings || {};

VisuMZ.ConvertParams = function(obj, data) {
    for (const key in data) {
        if (key.match(/(.*):(.*)/i)) {
            // Key and Type
            const objKey = String(RegExp.$1);
            const objType = String(RegExp.$2).toUpperCase().trim();

            // Parse Data
            let value; let arr; let newData;
            switch (objType) {
                case 'NUM':
                    value = data[key] !== '' ? Number(data[key]) : 0;
                    break;
                case 'ARRAYNUM':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => Number(i));
                    break;
                case 'EVAL':
                    value = data[key] !== '' ? eval(data[key]) : null;
                    break;
                case 'ARRAYEVAL':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => eval(i));
                    break;
                case 'JSON':
                    value = data[key] !== '' ? JSON.parse(data[key]) : '';
                    break;
                case 'ARRAYJSON':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => JSON.parse(i));
                    break;
                case 'FUNC':
                    value = data[key] !== '' ? new Function(JSON.parse(data[key])) : new Function('return 0');
                    break;
                case 'ARRAYFUNC':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => new Function(JSON.parse(i)));
                    break;
                case 'STR':
                    value = data[key] !== '' ? String(data[key]) : '';
                    break;
                case 'ARRAYSTR':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => String(i));
                    break;
                case 'STRUCT':
                    newData = data[key] !== '' ? JSON.parse(data[key]) : {};
                    value = VisuMZ.ConvertParams({}, newData);
                    break;
                case 'ARRAYSTRUCT':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => VisuMZ.ConvertParams({}, JSON.parse(i)));
                    break;
                default:
                    continue;
            }

            // Set Value
            obj[objKey] = value;
        }
    }
    return obj;
};

((pluginData) => {
    const name = pluginData.name;
    // Dependency Check
    for (const dependency of dependencies) {
        if (!Imported[dependency]) {
            alert('%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.'.format(name, dependency));
            SceneManager.exit();
            break;
        }
    }
    // Description Check
    const desc = pluginData.description;
    // Version Check
    if (desc.match(/\[Version[ ](.*?)\]/i)) {
        const descVersion = Number(RegExp.$1);
        if (descVersion !== VisuMZ[label].version) {
            alert('%1\'s version does not match plugin\'s. Please update it in the Plugin Manager.'.format(name, descVersion));
            SceneManager.exit();
        }
    }
    // Tier Order Check
    if (desc.match(/\[Tier[ ](\d+)\]/i)) {
        const descTier = Number(RegExp.$1);
        if (descTier < tier) {
            alert('%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.'.format(name, descTier, tier));
            SceneManager.exit();
        } else {
            tier = Math.max(descTier, tier);
        }
    }
    // Convert Plugin Parameters
    VisuMZ.ConvertParams(VisuMZ[label].Settings, pluginData.parameters);

})(pluginData);

//-----------------------------------------------------------------------------
// AIManager
//
// The static class that manages the battle AI for actions.

function AIManager() {
    throw new Error("This is a static class");
}

AIManager._regexp = {
    noCondition: /<NO AI (?:TARGETS|CONDITION|CONDITIONS)>/i,

    allCondition: /<ALL AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ALL AI (?:TARGETS|CONDITION|CONDITIONS)>/i,
    anyCondition: /<ANY AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ANY AI (?:TARGETS|CONDITION|CONDITIONS)>/i,

    bypassElementTgr: /<(?:NO|BYPASS) AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE>/i,
    bypassEvaTgr: /<(?:NO|BYPASS) AI (?:EVA|EVASION) INFLUENCE>/i,
    bypassMevTgr: /<(?:NO|BYPASS) AI (?:MEV|MAGIC EVASION) INFLUENCE>/i,

    aiElementTgr: /<AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE: (.*)>/i,
    aiEvaTgr: /<AI (?:EVA|EVASION) INFLUENCE: (.*)>/i,
    aiMevTgr: /<AI (?:MEV|MAGIC EVASION) INFLUENCE: (.*)>/i,

    aiLevel: /<AI LEVEL: (\d+)>/i,
    aiRatingVariance: /<AI RATING VARIANCE: (\d+)>/i,

    aiTarget: /<AI (?:TARGET|TARGETS):[ ](.*)>/i,

    aiStyle: /<AI STYLE:[ ](.*)>/i,
};

AIManager.isConditionalAI = function(skill) {
    if (!skill) return false;
    return this.getAllConditions(skill).length > 0 || this.getAnyConditions(skill).length > 0;
};

AIManager.getAllConditions = function(skill) {
    if (skill.note.match(AIManager._regexp.noCondition)) {
        return [];
    } else if (skill.note.match(AIManager._regexp.allCondition)) {
        return String(RegExp.$1).split(/[\r\n]+/).remove('');
    } else {
        return this.getDefaultAllConditions(skill);
    }
};

AIManager.getAnyConditions = function(skill) {
    if (skill.note.match(AIManager._regexp.noCondition)) {
        return [];
    } else if (skill.note.match(AIManager._regexp.anyCondition)) {
        return String(RegExp.$1).split(/[\r\n]+/).remove('');
    } else {
        return this.getDefaultAnyConditions(skill);
    }
};

AIManager.getDefaultAllConditions = function(skill) {
    if (!VisuMZ.BattleAI.Settings.Default.EnableAllCon) return [];
    if (skill.note.match(AIManager._regexp.anyCondition)) return [];
    return this.makeDefaultConditions(skill, 'All');
};

AIManager.getDefaultAnyConditions = function(skill) {
    if (!VisuMZ.BattleAI.Settings.Default.EnableAnyCon) return [];
    if (skill.note.match(AIManager._regexp.allCondition)) return [];
    return this.makeDefaultConditions(skill, 'Any');
};

AIManager.makeDefaultConditions = function(skill, sub) {
    if (!skill) return [];

    // Declare Constants
    const settings = VisuMZ.BattleAI.Settings.Default;
    const params = ['MAXHP','MAXMP','ATK','DEF','MAT','MDF','AGI','LUK'];
    const damageType = skill.damage.type;
    const effects = skill.effects;

    // Create conditions
    let conditions = [];
    let keyName = '';
    let text = '';

    // Damage conditions
    switch (damageType) {
        case 1: // HP Damage
            keyName = 'HpDamage%1'.format(sub);
            text = settings[keyName];
            conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
            break;
        case 2: // MP Damage
            keyName = 'MpDamage%1'.format(sub);
            text = settings[keyName];
            conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
            break;
        case 3: // HP Recovery
            keyName = 'HpRecover%1'.format(sub);
            text = settings[keyName];
            conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
            break;
        case 4: // MP Recovery
            keyName = 'MpRecover%1'.format(sub);
            text = settings[keyName];
            conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
            break;
        case 5: // HP Drain
            keyName = 'HpDrain%1'.format(sub);
            text = settings[keyName];
            conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
            break;
        case 6: // MP Drain
            keyName = 'MpDrain%1'.format(sub);
            text = settings[keyName];
            conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
            break;
    }

    // Effect Conditions
    for (const effect of effects) {
        if (!effect) continue;
        switch (effect.code) {
            // HP/MP
            case Game_Action.EFFECT_RECOVER_HP:
                if (effect.value1 > 0 || effect.value2 > 0) {
                    keyName = 'HpRecover%1'.format(sub);
                    text = settings[keyName];
                    conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                } else if (effect.value1 < 0 || effect.value2 < 0) {
                    keyName = 'HpDamage%1'.format(sub);
                    text = settings[keyName];
                    conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                }
                break;
            case Game_Action.EFFECT_RECOVER_MP:
                if (effect.value1 > 0 || effect.value2 > 0) {
                    keyName = 'MpRecover%1'.format(sub);
                    text = settings[keyName];
                    conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                } else if (effect.value1 < 0 || effect.value2 < 0) {
                    keyName = 'MpDamage%1'.format(sub);
                    text = settings[keyName];
                    conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                }
                break;

            // States
            case Game_Action.EFFECT_ADD_STATE:
                if (effect.dataId === 0) continue;
                keyName = 'AddState%1'.format(sub);
                text = settings[keyName].format(effect.dataId);
                conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                break;
            case Game_Action.EFFECT_REMOVE_STATE:
                keyName = 'RemoveState%1'.format(sub);
                text = settings[keyName].format(effect.dataId);
                conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                break;

            // Buffs/Debuffs
            case Game_Action.EFFECT_ADD_BUFF:
                keyName = 'AddBuff%1'.format(sub);
                text = settings[keyName].format(params[effect.dataId]);
                conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                break;
            case Game_Action.EFFECT_ADD_DEBUFF:
                keyName = 'AddDebuff%1'.format(sub);
                text = settings[keyName].format(params[effect.dataId]);
                conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                break;
            case Game_Action.EFFECT_REMOVE_BUFF:
                keyName = 'RemoveBuff%1'.format(sub);
                text = settings[keyName].format(params[effect.dataId]);
                conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                break;
            case Game_Action.EFFECT_REMOVE_DEBUFF:
                keyName = 'RemoveDebuff%1'.format(sub);
                text = settings[keyName].format(params[effect.dataId]);
                conditions = conditions.concat(text.split(/[\r\n]+/).remove(''));
                break;
        }
    }

    // Return Conditions
    return conditions;
};

AIManager.forceValidTargets = function(subject, skill) {
    this._forceValidTargets = this.makeValidTargets(subject, skill);
};

AIManager.clearForcedTargets = function() {
    this._forceValidTargets = [];
};

AIManager.forcedTargets = function() {
    this._forceValidTargets = this._forceValidTargets || [];
    return this._forceValidTargets;
};

AIManager.hasForcedTargets = function() {
    return this.forcedTargets().length > 0;
};

AIManager.hasValidTargets = function(subject, skill) {
    if (!subject) return false;
    if (!skill) return false;
    if (!DataManager.isSkill(skill)) return;

    if (this.isConditionalAI(skill)) {
        return this.makeValidTargets(subject, skill).length >= 1;
    } else {
        return true;
    }
};

AIManager.makeValidTargets = function(subject, skill) {
    let validTargets = [];

    if (this.isConditionalAI(skill)) {
        const allCons = this.getAllConditions(skill);
        const anyCons = this.getAnyConditions(skill);
        const action = new Game_Action(subject);

        action.setSkill(skill.id);
        let checkMembers = AIManager.checkSkillTargets(subject, action); // v1.15 updated by Irina
        
        this._rngChance = Math.random(); // v1.17 added by Arisu
        validTargets = checkMembers.filter(target => this.doesTargetMeetAIConditions(subject, target, skill, allCons, anyCons));
    }

    return validTargets;
};

// v1.15 added by Irina
AIManager.checkSkillTargets = function(subject, action) {
    let checkMembers = [];

    // Original
    if (Imported.VisuMZ_2_AggroControlSystem && action.isAggroAffected()) {
        const unit = action.isForOpponent() ? subject.opponentsUnit() : subject.friendsUnit();
        checkMembers = [unit.highestTgrMember()];
    } else if (action.isForEveryone()) {
        checkMembers = $gameParty.aliveMembers().concat($gameTroop.aliveMembers());

    // v1.19 added by Irina
    } else if (action.isForAnyone && action.isForAnyone()) {
        const scope = action.item().scope;
        if (action.isForAnyoneFocusOpponents()) {
            checkMembers = subject.opponentsUnit().aliveMembers();
        } else if (action.isForAnyoneFocusFriends()) {
            checkMembers = subject.friendsUnit().aliveMembers();
        }

    // Original
    } else if (action.isForOpponent()) {
        checkMembers = subject.opponentsUnit().aliveMembers();
    } else if (action.isForDeadFriend()) {
        checkMembers = subject.friendsUnit().deadMembers();
    } else if (action.isForFriend() && !action.isForDeadFriend()) { // v1.15 updated by Irina
        checkMembers = subject.friendsUnit().aliveMembers();
    }

    // v1.20 added by Olivia
    if (action.isForNotUser && action.isForNotUser()) {
        checkMembers.remove(subject);
    }

    return checkMembers;
};

AIManager.doesTargetMeetAIConditions = function(subject, target, skill, allCons, anyCons) {
    return this.doesTargetMeetAllConditions(subject, target, skill, allCons) &&
        this.doesTargetMeetAnyConditions(subject, target, skill, anyCons);
};

AIManager.doesTargetMeetAllConditions = function(subject, target, skill, conditions) {
    // Return Check
    if (conditions.length <= 0) return true;

    // Check Conditions
    for (const line of conditions) {
        if (!line) continue;
        if (line.length <= 0) continue;
        if (!this.passesAILevel(subject)) return true;
        if (!this.doesTargetMeetCondition(subject, target, skill, line)) return false;
    }

    // Return Final
    return true;
};

AIManager.doesTargetMeetAnyConditions = function(subject, target, skill, conditions) {
    // Return Check
    if (conditions.length <= 0) return true;

    // Check Conditions
    for (const line of conditions) {
        if (!line) continue;
        if (line.length <= 0) continue;
        if (!this.passesAILevel(subject)) return true;
        if (this.doesTargetMeetCondition(subject, target, skill, line)) return true;
    }

    // Return Final
    return false;
};

AIManager.passesAILevel = function(subject) {
    // Declare Constants
    const aiLevel = subject.aiLevel();
    return Math.randomInt(100) < aiLevel;
};

AIManager.doesTargetMeetCondition = function(subject, target, skill, line) {
    const params = ['MAXHP','MAXMP','ATK','DEF','MAT','MDF','AGI','LUK'];

    if (line.toUpperCase().trim() === 'ALWAYS') return true;

    // Declare Constants
    // v1.01 added by Yanfly
    const user = subject;

    // v1.12 turnCount() check
    if (!VisuMZ.BattleAI.Settings.General.OnSpotAI) {
        if (line.match(/turnCount\(\)/i)) {
            if ($gameTemp.isPlaytest() && !this._alertTurnCount) {
                let text = 'The following line is not supported by Battle A.I.:\n\n';
                text += line + '\n\n';
                text += 'The reason is due to the turnCount() function.\n';
                text += 'For more information, view the help file.';
                alert(text);
                this._alertTurnCount = true;
            }
            return false;
        }
    }

    // x >= y
    if (line.match(/(.*) (\>=|\>|===|!==|\<|\<=) (.*)/i)) {
        const data = [String(RegExp.$1), String(RegExp.$2), String(RegExp.$3)];
        const value1 = this.determineLineValue(subject, target, skill, data[0]);
        const operator = data[1];
        const value2 = this.determineLineValue(subject, target, skill, data[2]);
        window['user'] = window['a'] = window['b'] = undefined;
        const code = '%1 %2 %3'.format(value1, operator, value2);
        try {
            return eval(code);
        } catch (e) {
            if ($gameTemp.isPlaytest()) {
                console.log('AI Manager condition cannot be met: %1'.format(line));
                console.log(e);
            }
            return true;
        }

    // Chance
    } else if (line.match(/(\d+\.?\d*)([%％]) CHANCE/i)) {
        const chance = Number(RegExp.$1) * 0.01;
        return this._rngChance < chance; // v1.17 added by Arisu

    // Switch On/Off
    } else if (line.match(/SWITCH (\d+) (ON|OFF|TRUE|FALSE)/i)) {
        const switchId = Number(RegExp.$1);
        const valueStr = String(RegExp.$2).toLowerCase();
        const value = valueStr.match(/ON|TRUE/i);
        return $gameSwitches.value(switchId) === value;

    // Is Actor/Enemy
    } else if (line.match(/(.*) IS ACTOR/i)) {
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        return owner.isActor();
    } else if (line.match(/(.*) IS ENEMY/i)) {
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        return owner.isEnemy();

    // Has State
    } else if (line.match(/(.*) HAS STATE (\d+)/i)) {
        const state = $dataStates[Number(RegExp.$2)];
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        return owner.states().includes(state);
    } else if (line.match(/(.*) HAS STATE (.*)/i)) {
        const state = $dataStates[DataManager.getStateIdWithName(RegExp.$2)];
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        return owner.states().includes(state);

    // Not State
    } else if (line.match(/(.*) NOT STATE (\d+)/i)) {
        const state = $dataStates[Number(RegExp.$2)];
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        return !owner.states().includes(state);
    } else if (line.match(/(.*) NOT STATE (.*)/i)) {
        const state = $dataStates[DataManager.getStateIdWithName(RegExp.$2)];
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        return !owner.states().includes(state);

    // Has Buff/Debuff
    } else if (line.match(/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)) {
        const paramId = params.indexOf(String(RegExp.$2).toUpperCase().trim());
        const buffType = String(RegExp.$3).toLowerCase().trim();
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        const methodName = 'is%1Affected'.format(buffType.charAt(0).toUpperCase() + buffType.slice(1));
        return owner[methodName](paramId);

    // Has Max Buff/Debuff
    } else if (line.match(/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)) {
        const paramId = params.indexOf(String(RegExp.$2).toUpperCase().trim());
        const buffType = String(RegExp.$3).toLowerCase().trim();
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        const methodName = 'isMax%1Affected'.format(buffType.charAt(0).toUpperCase() + buffType.slice(1));
        return owner[methodName](paramId);

    // Not Buff
    } else if (line.match(/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)) {
        const paramId = params.indexOf(String(RegExp.$2).toUpperCase().trim());
        const buffType = String(RegExp.$3).toLowerCase().trim();
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        const methodName = 'is%1Affected'.format(buffType.charAt(0).toUpperCase() + buffType.slice(1));
        return !owner[methodName](paramId);

    // Not Max Buff
    } else if (line.match(/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)) {
        const paramId = params.indexOf(String(RegExp.$2).toUpperCase().trim());
        const buffType = String(RegExp.$3).toLowerCase().trim();
        const owner = String(RegExp.$1).match(/(?:USER|SUBJECT)/i) ? user : target;
        const methodName = 'isMax%1Affected'.format(buffType.charAt(0).toUpperCase() + buffType.slice(1));
        return !owner[methodName](paramId);

    }
    return true;
};

AIManager.determineLineValue = function(subject, target, skill, str) {
    // Declare Constants
    const params = ['MAXHP','MAXMP','ATK','DEF','MAT','MDF','AGI','LUK'];
    window['user'] = subject;
    window['a'] = user;
    window['b'] = target;
    const rawText = str;
    const opponentsUnit = user.opponentsUnit();

    // Set Variables
    let owner = str.match(/(?:USER|SUBJECT)/i) ? user : target;

    // Replace Text/Numbers
    str = str.replace(/\b(\d+)([%％])/gi, (_, p1) => Number(p1) * 0.01);

    // Variable
    if (str.match(/(?:VAR|VARIABLE) (\d+)/i)) {
        return $gameVariables.value(Number(RegExp.$1));
    }

    // Team Alive Members
    if (str.match(/TEAM ALIVE MEMBERS/i)) {
        return owner.friendsUnit().aliveMembers().length;
    }

    // Team Dead Members
    if (str.match(/TEAM DEAD MEMBERS/i)) {
        return owner.friendsUnit().deadMembers().length;
    }

    // Element Rate
    if (str.match(/ELEMENT (\d+) RATE/i)) {
        const elementId = Number(RegExp.$1);
        return this.elementKnowledgeRate(subject, target, owner, elementId);
    } else if (str.match(/ELEMENT (.*) RATE/i)) {
        const elementId = DataManager.getElementIdWithName(String(RegExp.$1));
        return this.elementKnowledgeRate(subject, target, owner, elementId);
    } else if (str.match(/(.*) ELEMENT RATE/i)) {
        const elementId = DataManager.getElementIdWithName(String(RegExp.$1));
        return this.elementKnowledgeRate(subject, target, owner, elementId);
    }

    // Buff/Debuff Level
    if (str.match(/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:LEVEL|STACK|STACKS)/i)) {
        const paramId = params.indexOf(String(RegExp.$1).toUpperCase().trim());
        const buffType = String(RegExp.$2).toLowerCase().trim();
        return owner.buff(paramId) * (buffType === 'buff' ? 1 : -1);
    }

    // Buff/Debuff Turns
    if (str.match(/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:TURN|TURNS)/i)) {
        const paramId = params.indexOf(String(RegExp.$1).toUpperCase().trim());
        const buffType = String(RegExp.$2).toLowerCase().trim();
        if (buffType === 'buff' && owner.isBuffAffected(paramId)) {
            return owner._buffTurns[paramId];
        } else if (buffType === 'debuff' && owner.isDebuffAffected(paramId)) {
            return owner._buffTurns[paramId];
        }
        return 0;
    }

    // State Turns
    if (str.match(/STATE (\d+) (?:TURN|TURNS)/i)) {
        const stateId = Number(RegExp.$1);
        if (owner.isStateAffected(stateId)) {
            const state = $dataStates[stateId];
            if (state && state.autoRemovalTiming === 0) {
                return Number.MAX_SAFE_INTEGER;
            } else {
                return owner._stateTurns[stateId] || 0;
            }
        } else if (owner.states().includes($dataStates[stateId])) {
            return Number.MAX_SAFE_INTEGER;
        } else {
            return 0;
        }
    } else if (str.match(/STATE (.*) (?:TURN|TURNS)/i)) {
        const stateId = DataManager.getStateIdWithName(RegExp.$1);
        if (owner.isStateAffected(stateId)) {
            const state = $dataStates[stateId];
            if (state && state.autoRemovalTiming === 0) {
                return Number.MAX_SAFE_INTEGER;
            } else {
                return owner._stateTurns[stateId] || 0;
            }
        } else if (owner.states().includes($dataStates[stateId])) {
            return Number.MAX_SAFE_INTEGER;
        } else {
            return 0;
        }
    }

    // HP, MP, TP
    if (str.match(/\bHP([%％])/i)) {
        return owner.hpRate();
    } else if (str.match(/\bMP([%％])/i)) {
        return owner.mpRate();
    } else if (str.match(/\bTP([%％])/i)) {
        return owner.tpRate();
    } else if (str.match(/\b(?:MAXHP|MAX HP|MHP)\b/i)) {
        return owner.mhp;
    } else if (str.match(/\b(?:MAXMP|MAX MP|MMP)\b/i)) {
        return owner.mmp;
    } else if (str.match(/\b(?:MAXTP|MAX TP|MTP)\b/i)) {
        return owner.maxTp();
    }

    // Param Values
    if (str.match(/\b(LEVEL|HP|MP|TP|ATK|DEF|MAT|MDF|AGI|LUK)\b/i)) {
        return owner[String(RegExp.$1).toLowerCase().trim()];
    }

    // Otherwise
    try {
        return eval(str);
    } catch (e) {
        if ($gameTemp.isPlaytest()) {
            console.log('AI Manager could not determine this value: %1'.format(rawText));
            console.log(e);
        }
        return 0;
    }
};

AIManager.elementKnowledgeRate = function(subject, target, owner, elementId) {
    if (subject.isActor() === owner.isActor()) {
        return owner.elementRate(elementId);
    } else if (owner.opponentsUnit().hasElementAIKnowledge(elementId, owner)) {
        return owner.elementRate(elementId);
    } else {
        return VisuMZ.BattleAI.Settings.General.UnknownElementRate;
    }
};

// v1.05 added by Yanfly
AIManager.filterForcedTargeting = function(subject, skill) {
    // Return Check
    if (!skill) return;
    if (!skill.note.match(AIManager._regexp.aiTarget)) return;

    // Create Target Filter
    const filterType = String(RegExp.$1).toUpperCase().trim();
    let target = this.createFilterTarget(subject, filterType);

    // Apply Target
    if (target) {
        this._forceValidTargets = [target];
    }
};

AIManager.createFilterTarget = function(subject, filterType) {
    // Declare Constants
    const params = ['MAXHP','MAXMP','ATK','DEF','MAT','MDF','AGI','LUK'];
    const xparams = ['HIT','EVA','CRI','CEV','MEV','MRF','CNT','HRG','MRG','TRG'];
    const sparams = ['TGR','GRD','REC','PHA','MCR','TCR','PDR','MDR','FDR','EXR'];

    // Set Target Variable
    let target = null;

    // Filter: Basic
    if (filterType === 'USER') {
        if (this._forceValidTargets.includes(subject)) {
            return subject;
        }
    } else if (filterType === 'FIRST') {
        return this._forceValidTargets[0];

    } else if (filterType === 'LAST') {
        return this._forceValidTargets[this._forceValidTargets.length - 1];

    // Filter Highest or Lowest
    } else if (filterType.match(/(HIGHEST|LOWEST)[ ](.*)/i)) {
        const highest = String(RegExp.$1).toUpperCase().trim() === 'HIGHEST'; // v1.10 fixed by Olivia
        const lowest = !highest;
        const param = String(RegExp.$2).toUpperCase().trim();

        // Basic Params
        if (params.includes(param)) {
            const index = params.indexOf(param);
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.param(index) > target.param(index)) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.param(index) < target.param(index)) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // X Basic Params
        if (xparams.includes(param)) {
            const index = xparams.indexOf(param);
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.xparam(index) > target.xparam(index)) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.xparam(index) < target.xparam(index)) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // S Basic Params
        if (sparams.includes(param)) {
            const index = sparams.indexOf(param);
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.sparam(index) > target.sparam(index)) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.sparam(index) < target.sparam(index)) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // HP
        if (param === 'HP') {
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.hp > target.hp) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.hp < target.hp) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // HP%
        if (param === 'HP%') {
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.hpRate() > target.hpRate()) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.hpRate() < target.hpRate()) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // MP
        if (param === 'MP') {
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.mp > target.mp) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.mp < target.mp) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // MP%
        if (param === 'MP%') {
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.mpRate() > target.mpRate()) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.mpRate() < target.mpRate()) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // TP
        if (param === 'TP') {
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.tp > target.tp) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.tp < target.tp) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // TP%
        if (param === 'TP%') {
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.tpRate() > target.tpRate()) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.tpRate() < target.tpRate()) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // MaxTP
        if (param === 'MAXTP') {
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.maxTp() > target.maxTp()) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.maxTp() < target.maxTp()) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // LEVEL
        if (param === 'LEVEL') {
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && (candidate.level || 0) > (target.level || 0)) target = candidate; // v1.10 fixed by Olivia
                if (lowest && (candidate.level || 0) < (target.level || 0)) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // STATE COUNT
        if (param === 'STATE COUNT' && Imported.VisuMZ_1_SkillsStatesCore) {
            target = this._forceValidTargets[0];
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.states().length > target.states().length) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.states().length < target.states().length) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // POSITIVE COUNT
        if (param === 'POSITIVE STATE COUNT' && Imported.VisuMZ_1_SkillsStatesCore) {
            target = this._forceValidTargets[0];
            const category = 'POSITIVE';
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.statesByCategory(category).length > target.statesByCategory(category).length) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.statesByCategory(category).length < target.statesByCategory(category).length) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
        // NEGATIVE COUNT
        if (param === 'NEGATIVE STATE COUNT' && Imported.VisuMZ_1_SkillsStatesCore) {
            target = this._forceValidTargets[0];
            const category = 'NEGATIVE';
            for (const candidate of this._forceValidTargets) {
                if (highest && candidate.statesByCategory(category).length > target.statesByCategory(category).length) target = candidate; // v1.10 fixed by Olivia
                if (lowest && candidate.statesByCategory(category).length < target.statesByCategory(category).length) target = candidate; // v1.10 fixed by Olivia
            }
            return target;
        }
    }

    // Return Target
    return null;
};

//-----------------------------------------------------------------------------
// DataManager
//
// The static class that manages the database and game objects.

DataManager.getElementIdWithName = function(text) {
    text = text.toUpperCase().trim();
    this._elementIDs = this._elementIDs || {};
    if (this._elementIDs[text]) return this._elementIDs[text];
    let id = 1;
    for (const obj of $dataSystem.elements) {
        if (!obj) continue;
        let name = obj.toUpperCase();
        name = name.replace(/\x1I\[(\d+)\]/gi, '');
        name = name.replace(/\\I\[(\d+)\]/gi, '');
        this._elementIDs[name] = id;
        id++;
    }
    return this._elementIDs[text] || 0;
};

DataManager.getStateIdWithName = function(text) {
    text = text.toUpperCase().trim();
    this._stateIDs = this._stateIDs || {};
    if (this._stateIDs[text]) return this._stateIDs[text];
    for (const obj of $dataStates) {
        if (!obj) continue;
        this._stateIDs[obj.name.toUpperCase().trim()] = obj.id;
    }
    return this._stateIDs[text] || 0;
};

//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages battle progress.

// v1.13 added by Arisu
// v1.14 disabled by Yanfly
/*
VisuMZ.BattleAI.BattleManager_processTurn = BattleManager.processTurn;
BattleManager.processTurn = function() {
    const subject = this._subject;
    if (subject.isDetermineActionByAI() && !subject._processNewAI) {
        subject._processNewAI = true;
        const action = subject.currentAction();
        if (!action) subject.makeActions();
    }
    
    VisuMZ.BattleAI.BattleManager_processTurn.call(this);
};
*/

// v1.14 added by Yanfly
VisuMZ.BattleAI.BattleManager_getNextSubject = BattleManager.getNextSubject;
BattleManager.getNextSubject = function() {
    const subject = VisuMZ.BattleAI.BattleManager_getNextSubject.call(this);

    if (subject && subject.isDetermineActionByAI()) {
        const action = subject.currentAction();
        
        if (!action || (action && !action.item())) {
            subject.makeActions();

        } else if (VisuMZ.BattleAI.Settings.General.OnSpotAI) {
            if (action && action._forceAction) return subject; // v1.19 added by Arisu
            subject.makeActions();

            // v1.23 added by Olivia
            if (Imported.VisuMZ_2_BattleSystemSTB && this.isSTB()) {
                subject._onSpotMadeActionsDeterminedByAI = true;
            }
        }
    }

    return subject;
};

VisuMZ.BattleAI.BattleManager_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    this.determineActionByAIisStillValid();
    if (this._subject.currentAction()) {
        VisuMZ.BattleAI.BattleManager_startAction.call(this);
    } else {
        this.endAction(); // v1.11 added by Olivia
    }
};

// v1.16 added by Irina
VisuMZ.BattleAI.BattleManager_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
    this.determineActionByAIisStillValid();
    VisuMZ.BattleAI.BattleManager_endAction.call(this);
};

BattleManager.determineActionByAIisStillValid = function() {
    this.determineTargetActionByAIisStillValid(this._subject); // v1.13 added by Arisu
};

// v1.13 added by Arisu
BattleManager.determineTargetActionByAIisStillValid = function(target) {
    if (!target) return;

    // Original
    if (target.aiStyle() === 'random') return;
    if (!target.isDetermineActionByAI()) return;

    // Original
    const action = target.currentAction();
    if (!action) return;
    if (action._forceAction) return;
    const skill = action.item();

    // Compatibility Target
    // v1.03 added by Olivia
    if (target._bypassAiValidCheck) return;

    // Return Check
    if (AIManager.hasValidTargets(target, skill) && target.canUse(skill)) return;

    // Select New Action
    target.determineNewValidAIAction();
};

//-----------------------------------------------------------------------------
// Game_Temp
//
// The game object class for temporary data that is not included in save data.

VisuMZ.BattleAI.Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
    VisuMZ.BattleAI.Game_Temp_initialize.call(this);
    this.clearAiTgrInfluence();
};

Game_Temp.prototype.clearAiTgrInfluence = function() {
    this._aiTgrInfluence = {
        action: null,

        elementInfluence: false,
        elementInfluenceRate: 0,
        elementIds: [],

        evaInfluenceRate: 0,
        mevInfluenceRate: 0,
    };
};

Game_Temp.prototype.aiTgrInfluence = function() {
    if (this._aiTgrInfluence === undefined) this.clearAiTgrInfluence();
    return this._aiTgrInfluence;
};

Game_Temp.prototype.setAiTgrInfluences = function(user, action) {
    // Clear Influences
    this.clearAiTgrInfluence();
    const data = this.aiTgrInfluence();

    // Set Action
    data.action = action;

    // Element Rates
    if (user.doesAIApplyElementalTgrInfluence()) {
        data.elementInfluence = true;
        data.elementInfluenceRate = user.aiApplyElementalTgrInfluenceRate();
        data.elementIds = [];

        if (Imported.VisuMZ_1_ElementStatusCore) {
            data.elementIds = data.elementIds.concat(action.elements());
        } else if (action.item().damage.elementId < 0) {
            data.elementIds = data.elementIds.concat(user.attackElements());
        } else {
            data.elementIds.push(action.item().damage.elementId);
        }
    }

    if (action.isPhysical() && user.doesAIApplyEvaTgrInfluence()) {
        data.evaInfluenceRate = user.aiApplyEvaTgrInfluenceRate();
    }

    if (action.isMagical() && user.doesAIApplyMevTgrInfluence()) {
        data.mevInfluenceRate = user.aiApplyMevTgrInfluenceRate();
    }
};

//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.

VisuMZ.BattleAI.Game_Action_makeTargets = Game_Action.prototype.makeTargets;
Game_Action.prototype.makeTargets = function() {
    // Apply Forced Targeting
    if (this.isSkill() && this.subject().isDetermineActionByAI()) {
        AIManager.forceValidTargets(this.subject(), this.item());
        // v1.05 added by Yanfly
        if (this.needsSelection()) {
            AIManager.filterForcedTargeting(this.subject(), this.item());
        }
    }

    // Original
    $gameTemp.setAiTgrInfluences(this.subject(), this);
    const targets = VisuMZ.BattleAI.Game_Action_makeTargets.call(this);
    $gameTemp.clearAiTgrInfluence();
    AIManager.clearForcedTargets();

    // Return targets
    return targets;
};

VisuMZ.BattleAI.Game_Action_itemTargetCandidates = Game_Action.prototype.itemTargetCandidates;
Game_Action.prototype.itemTargetCandidates = function() {
    const user = this.subject();
    const skill = this.item();
    let members = VisuMZ.BattleAI.Game_Action_itemTargetCandidates.call(this);

    if (user.isDetermineActionByAI() && AIManager.hasValidTargets(user, skill)) {
        let validTargets = AIManager.makeValidTargets(user, skill);
        members = members.filter(member => validTargets.includes(member));
    }

    return members;
};

VisuMZ.BattleAI.Game_Action_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
    VisuMZ.BattleAI.Game_Action_apply.call(this, target);
    this.applyBattleAI(target);
};

Game_Action.prototype.applyBattleAI = function(target) {
    if (!target) return;
    if (this.subject().isActor() === target.isActor()) return;

    let elements = [];

    if (Imported.VisuMZ_1_ElementStatusCore) {
        elements = this.elements();
    } else if (this.item().damage.elementId < 0) {
        elements = this.subject().attackElements();
    } else {
        elements = [this.item().damage.elementId];
    }

    target.addAIKnowledge(elements, this.isPhysical(), this.isMagical());
};

// v1.21 added by Irina
VisuMZ.BattleAI.Game_Action_isForOpponentBattleCore = Game_Action.prototype.isForOpponentBattleCore;
Game_Action.prototype.isForOpponentBattleCore = function() {
    const scope = this.item().scope;
    if (scope.match(/ANY/i)) return true;
    return VisuMZ.BattleAI.Game_Action_isForOpponentBattleCore.call(this);
};

//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.

VisuMZ.BattleAI.Game_BattlerBase_sparam = Game_BattlerBase.prototype.sparam;
Game_BattlerBase.prototype.sparam = function(sparamId) {
    let value = VisuMZ.BattleAI.Game_BattlerBase_sparam.call(this, sparamId);

    // TGR Stat
    if (sparamId === 0) {
        value *= this.applyBattleAiTgrInfluences();
    }

    return value;
};

Game_BattlerBase.prototype.applyBattleAiTgrInfluences = function() {
    // Declare constants
    const data = $gameTemp.aiTgrInfluence();
    const unit = this.opponentsUnit();

    // Return Checks
    if (Imported.VisuMZ_4_AggroControl) {
        if (data.action && data.action.isAggroAffected()) return 1;
    }

    // Set Rate
    let rate = 1;

    // Calculate Element Rate
    if (data.elementInfluence) {
        for (const elementId of data.elementIds) {
            if (unit.hasElementAIKnowledge(elementId, this)) {
                rate *= (this.elementRate(elementId) * data.elementInfluenceRate);
            }
        }
    }

    // Calculate Evasion Rate
    if (unit.hasXParamAIKnowledge('eva', this)) {
        rate *= 1 - (this.eva * data.evaInfluenceRate);
    }

    // Calculate Magic Evasion Rate
    if (unit.hasXParamAIKnowledge('mev', this)) {
        rate *= 1 - (this.mev * data.mevInfluenceRate);
    }

    // Return Finalized Rate
    return rate.clamp(0.001, 1000);
};

Game_BattlerBase.prototype.aiStyle = function() {
    return 'classic';
};

//-----------------------------------------------------------------------------
// Game_Battler
//
// The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
// and actions.

// v1.23 added by Olivia
VisuMZ.BattleAI.Game_BattlerBase_die = Game_BattlerBase.prototype.die;
Game_BattlerBase.prototype.die = function() {
    this._onSpotMadeActionsDeterminedByAI = false;
    VisuMZ.BattleAI.Game_BattlerBase_die.call(this);
};

// v1.23 added by Olivia
VisuMZ.BattleAI.Game_BattlerBase_revive = Game_BattlerBase.prototype.revive;
Game_BattlerBase.prototype.revive = function() {
    this._onSpotMadeActionsDeterminedByAI = false;
    VisuMZ.BattleAI.Game_BattlerBase_revive.call(this);
};

// v1.23 added by Olivia
VisuMZ.BattleAI.Game_Battler_onBattleStart = Game_Battler.prototype.onBattleStart;
Game_Battler.prototype.onBattleStart = function(advantageous) {
    this._onSpotMadeActionsDeterminedByAI = false;
    VisuMZ.BattleAI.Game_Battler_onBattleStart.call(this, advantageous);
};

// v1.23 added by Olivia
VisuMZ.BattleAI.Game_Battler_onBattleEnd = Game_Battler.prototype.onBattleEnd;
Game_Battler.prototype.onBattleEnd = function() {
    this._onSpotMadeActionsDeterminedByAI = false;
    VisuMZ.BattleAI.Game_Battler_onBattleEnd.call(this);
};

// v1.23 added by Olivia
VisuMZ.BattleAI.Game_Battler_onAllActionsEnd = Game_Battler.prototype.onAllActionsEnd;
Game_Battler.prototype.onAllActionsEnd = function() {
    this._onSpotMadeActionsDeterminedByAI = false;
    VisuMZ.BattleAI.Game_Battler_onAllActionsEnd.call(this);
};

// v1.23 added by Olivia
VisuMZ.BattleAI.Game_Battler_makeActions = Game_Battler.prototype.makeActions;
Game_Battler.prototype.makeActions = function() {
    if (this._onSpotMadeActionsDeterminedByAI) return;
    VisuMZ.BattleAI.Game_Battler_makeActions.call(this);
};

// v1.18 added by Arisu
VisuMZ.BattleAI.Game_Battler_isChanting = Game_Battler.prototype.isChanting;
Game_Battler.prototype.isChanting = function() {
    if (this.isDetermineActionByAI()) {
        const settings = VisuMZ.BattleAI.Settings.General;
        if (settings.OnSpotAI && settings.SpotRemoveMotions) return false;
    }
    return VisuMZ.BattleAI.Game_Battler_isChanting.call(this);
};

Game_Battler.prototype.isDetermineActionByAI = function() {
    // v1.02 added by Yanfly
    if (this.isConfused()) return false;

    // Original
    return true;
};

Game_Battler.prototype.determineNewValidAIAction = function() {
};

Game_Battler.prototype.doesAIApplyElementalTgrInfluence = function() {
    if (this.isActor() || this.isEnemy()) {
        const note = this.isActor() ? this.actor().note : this.enemy().note;

        if (note.match(AIManager._regexp.bypassElementTgr)) {
            return false;
        } else if (note.match(AIManager._regexp.aiElementTgr)) {
            return this.aiApplyElementalTgrInfluenceRate() > 0;
        }

    }
    return VisuMZ.BattleAI.Settings.Weight.ElementTgr;
};

Game_Battler.prototype.aiApplyElementalTgrInfluenceRate = function() {
    if (this.isActor() || this.isEnemy()) {
        const note = this.isActor() ? this.actor().note : this.enemy().note;

        if (note.match(AIManager._regexp.aiElementTgr)) {
            return eval(RegExp.$1);
        }

    }
    return VisuMZ.BattleAI.Settings.Weight.ElementTgrRate;
};

Game_Battler.prototype.doesAIApplyEvaTgrInfluence = function() {
    if (this.isActor() || this.isEnemy()) {
        const note = this.isActor() ? this.actor().note : this.enemy().note;

        if (note.match(AIManager._regexp.bypassEvaTgr)) {
            return false;
        } else if (note.match(AIManager._regexp.aiEvaTgr)) {
            return this.aiApplyEvaTgrInfluenceRate() > 0;
        }

    }
    return VisuMZ.BattleAI.Settings.Weight.EvaTgr;
};

Game_Battler.prototype.aiApplyEvaTgrInfluenceRate = function() {
    if (this.isActor() || this.isEnemy()) {
        const note = this.isActor() ? this.actor().note : this.enemy().note;

        if (note.match(AIManager._regexp.aiEvaTgr)) {
            return eval(RegExp.$1);
        }

    }
    return VisuMZ.BattleAI.Settings.Weight.EvaTgrRate;
};

Game_Battler.prototype.doesAIApplyMevTgrInfluence = function() {
    if (this.isActor() || this.isEnemy()) {
        const note = this.isActor() ? this.actor().note : this.enemy().note;

        if (note.match(AIManager._regexp.bypassMevTgr)) {
            return false;
        } else if (note.match(AIManager._regexp.aiMevTgr)) {
            return this.aiApplyMevTgrInfluenceRate() > 0;
        }

    }
    return VisuMZ.BattleAI.Settings.Weight.EvaTgr;
};

Game_Battler.prototype.aiApplyMevTgrInfluenceRate = function() {
    if (this.isActor() || this.isEnemy()) {
        const note = this.isActor() ? this.actor().note : this.enemy().note;

        if (note.match(AIManager._regexp.aiMevTgr)) {
            return eval(RegExp.$1);
        }

    }
    return VisuMZ.BattleAI.Settings.Weight.EvaTgrRate;
};

Game_Battler.prototype.aiLevel = function() {
    const settings = VisuMZ.BattleAI.Settings.General;

    if (this.isActor() || this.isEnemy()) {
        const note = this.isActor() ? this.actor().note : this.enemy().note;

        if (note.match(AIManager._regexp.aiLevel)) {
            return Number(RegExp.$1).clamp(0, 100);
        } else if (this.isActor()) {
            return settings.ActorAILevel;
        } else if (this.isEnemy()) {
            return settings.EnemyAILevel;
        }
    }

    return settings.EnemyAILevel;
};

Game_Battler.prototype.addAIKnowledge = function(elements, eva, mev) {
    const unit = this.opponentsUnit();

    if (elements && elements.length > 0) {
        for (const elementId of elements) {
            unit.addElementAIKnowledge(elementId, this);
        }
    }
    if (eva) {
        unit.addXParamAIKnowledge('evaRates', this);
    }
    if (mev) {
        unit.addXParamAIKnowledge('mevRates', this);
    }
};

Game_Battler.prototype.hasXParamAIKnowledge = function(type) {
    const unit = this.opponentsUnit();
    return unit.hasXParamAIKnowledge(type, this);
};

Game_Battler.prototype.aiRatingVariance = function() {
    const settings = VisuMZ.BattleAI.Settings.General;

    if (this.isActor() || this.isEnemy()) {
        const note = this.isActor() ? this.actor().note : this.enemy().note;

        if (note.match(AIManager._regexp.aiRatingVariance)) {
            return Number(RegExp.$1).clamp(0, 9);
        } else if (this.isActor()) {
            return settings.ActorRatingVariance.clamp(0, 9);
        } else if (this.isEnemy()) {
            return settings.EnemyRatingVariance.clamp(0, 9);
        }
    }

    return settings.EnemyRatingVariance.clamp(0, 9);
};

// v1.14 added by Yanfly
VisuMZ.BattleAI.Game_Battler_turnCount = Game_Battler.prototype.turnCount;
Game_Battler.prototype.turnCount = function() {
    if (BattleManager.isTpb()) {
        return VisuMZ.BattleAI.Game_Battler_turnCount.call(this);
    }
    if (VisuMZ.BattleAI.Settings.General.OnSpotAI) {
        // Compatibility Update
        // v1.22 added by Olivia
        if (this.checkTeamBasedTurnCountAI()) {
            return VisuMZ.BattleAI.Game_Battler_turnCount.call(this); // v1.24 added by Olivia
        }

        return $gameTroop.turnCount();
    } else {
        return VisuMZ.BattleAI.Game_Battler_turnCount.call(this);
    }
};

// v1.22 added by Olivia
Game_Battler.prototype.checkTeamBasedTurnCountAI = function() {
    if (Imported.VisuMZ_2_BattleSystemFTB && BattleManager.isFTB()) {
        if (VisuMZ.BattleSystemFTB.version < 1.11) {
            let text = '';
            text += 'VisuMZ_2_BattleSystemFTB needs to be updated ';
            text += 'in order for VisuMZ_3_BattleAI to work.';
            alert(text);
            SceneManager.exit();
        }
        return true;

    } else if (Imported.VisuMZ_2_BattleSystemETB && BattleManager.isFTB()) {
        if (VisuMZ.BattleSystemETB.version < 1.08) {
            let text = '';
            text += 'VisuMZ_2_BattleSystemETB needs to be updated ';
            text += 'in order for VisuMZ_3_BattleAI to work.';
            alert(text);
            SceneManager.exit();
        }
        return true;

    } else if (Imported.VisuMZ_2_BattleSystemPTB && BattleManager.isFTB()) {
        if (VisuMZ.BattleSystemPTB.version < 1.08) {
            let text = '';
            text += 'VisuMZ_2_BattleSystemPTB needs to be updated ';
            text += 'in order for VisuMZ_3_BattleAI to work.';
            alert(text);
            SceneManager.exit();
        }
        return true;
    }
    return false;
};

//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.

Game_Actor.prototype.isDetermineActionByAI = function() {
    // v1.02 added by Yanfly
    if (this.isConfused()) return false;
    // Original
    return this.isAutoBattle() && this.referenceEnemyForAI();
};

Game_Actor.prototype.referenceEnemyForAI = function() {
    const note = this.currentClass().note;

    if (note.match(/<NO REFERENCE AI>/i)) {
        return null;
    } else if (note.match(/<REFERENCE AI: ENEMY (\d+)>/i)) {
        return $dataEnemies[Number(RegExp.$1)];
    } else if (note.match(/<REFERENCE AI: (.*)>/i)) {
        return $dataEnemies[DataManager.getEnemyIdWithName(String(RegExp.$1))];
    }

    return $dataEnemies[VisuMZ.BattleAI.Settings.General.ActorAIReference];
};

Game_Actor.prototype.aiStyle = function() {
    const note = this.currentClass().note;
    if (note.match(AIManager._regexp.aiStyle)) {
        return String(RegExp.$1).toLowerCase().trim();
    }
    return VisuMZ.BattleAI.Settings.General.ActorStyleAI;
};

Game_Actor.prototype.determineNewValidAIAction = function() {
    Game_Battler.prototype.determineNewValidAIAction.call(this);
    this.makeAutoBattleActions();
};

VisuMZ.BattleAI.Game_Actor_makeAutoBattleActions = Game_Actor.prototype.makeAutoBattleActions;
Game_Actor.prototype.makeAutoBattleActions = function() {
    if (this.isDetermineActionByAI()) {
        this.makeAutoBattleActionsWithEnemyAI();
    } else {
        VisuMZ.BattleAI.Game_Actor_makeAutoBattleActions.call(this);
    }
};

Game_Actor.prototype.makeAutoBattleActionsWithEnemyAI = function() {
    if (this.numActions() > 0) {

        const usableSkills = this.usableSkills();
        if (this.canAttack()) usableSkills.push($dataSkills[this.attackSkillId()]);
        if (this.canGuard()) usableSkills.push($dataSkills[this.guardSkillId()]);

        const enemy = this.referenceEnemyForAI();
        const actions = JsonEx.makeDeepCopy(enemy.actions);
        for (const action of actions) {
            if (action.skillId === 1) action.skillId = this.attackSkillId();
            if (action.skillId === 2) action.skillId = this.guardSkillId();
        }

        const actionList = actions.filter(a =>
            this.isActionValid(a) && usableSkills.includes($dataSkills[a.skillId])
        );

        if (actionList.length > 0) {
            this.selectAllActions(actionList);
            return;
        }

    }
    VisuMZ.BattleAI.Game_Actor_makeAutoBattleActions.call(this);
};

Game_Actor.prototype.meetsCondition = function(action) {
    return Game_Enemy.prototype.meetsCondition.call(this, action);
};

Game_Actor.prototype.meetsTurnCondition = function(param1, param2) {
    return Game_Enemy.prototype.meetsTurnCondition.call(this, param1, param2);
};

Game_Actor.prototype.meetsHpCondition = function(param1, param2) {
    return Game_Enemy.prototype.meetsHpCondition.call(this, param1, param2);
};

Game_Actor.prototype.meetsMpCondition = function(param1, param2) {
    return Game_Enemy.prototype.meetsMpCondition.call(this, param1, param2);
};

Game_Actor.prototype.meetsStateCondition = function(param) {
    return Game_Enemy.prototype.meetsStateCondition.call(this, param);
};

Game_Actor.prototype.meetsPartyLevelCondition = function(param) {
    return Game_Enemy.prototype.meetsPartyLevelCondition.call(this, param);
};

Game_Actor.prototype.meetsSwitchCondition = function(param) {
    return Game_Enemy.prototype.meetsSwitchCondition.call(this, param);
};

//-----------------------------------------------------------------------------
// Game_Enemy
//
// The game object class for an enemy.

Game_Enemy.prototype.aiStyle = function() {
    const note = this.enemy().note;
    if (note.match(AIManager._regexp.aiStyle)) {
        return String(RegExp.$1).toLowerCase().trim();
    }
    return VisuMZ.BattleAI.Settings.General.EnemyStyleAI;
};

VisuMZ.BattleAI.Game_Enemy_isActionValid = Game_Enemy.prototype.isActionValid;
Game_Enemy.prototype.isActionValid = function(action) {
    // Return Check
    if (!VisuMZ.BattleAI.Game_Enemy_isActionValid.call(this, action)) return false;

    // Return Random
    if (this.aiStyle() === 'random') return true;

    // Return A.I. Conditions
    return AIManager.hasValidTargets(this, $dataSkills[action.skillId]);
};

// Actor Version
Game_Actor.prototype.isActionValid = function(action) {
    return Game_Enemy.prototype.isActionValid.call(this, action);
};

// Overwrite
Game_Enemy.prototype.selectAction = function(actionList, ratingZero) {
    const sum = actionList.reduce((r, a) => r + a.rating - ratingZero, 0);
    if (sum >= 0) {
        let value = Math.randomInt(sum);
        for (const action of actionList) {
            value -= action.rating - ratingZero;
            if (value <= 0) {
                return action;
            }
        }
    } else {
        return null;
    }
};

// Actor Version
Game_Actor.prototype.selectAction = function(actionList, ratingZero) {
    return Game_Enemy.prototype.selectAction.call(this, actionList, ratingZero);
};

// Overwrite
Game_Enemy.prototype.selectAllActions = function(actionList) {
    const style = String(this.aiStyle()).toLowerCase().trim();
    if (['random','casual'].includes(style)) {
        this.selectAllActionsRandom(actionList);
    } else if (style === 'gambit') {
        this.selectAllActionsGambit(actionList);
    } else {
        this.selectAllActionsClassic(actionList);
    }
};

// Actor Version
Game_Actor.prototype.selectAllActions = function(actionList) {
    Game_Enemy.prototype.selectAllActions.call(this, actionList);
};

Game_Battler.prototype.selectAllActionsClassic = function(actionList) {
    const ratingMax = Math.max(...actionList.map(a => a.rating));
    const ratingZero = ratingMax - this.aiRatingVariance();
    const numActions = this.numActions();

    actionList = actionList.filter(a => a.rating >= ratingZero);

    // v1.16 updated by Irina
    for (let i = 0; i < numActions; i++) {
        // v1.06 added by Irina
        actionList = VisuMZ.BattleAI.ShuffleArray(actionList);

        // v1.16 updated by Irina
        const action = this.selectAction(actionList, ratingZero);

        // Set Action
        this.action(i).setEnemyAction(action);
    }

    // Debug check left by Irina
    // console.log('actions: ', numActions, this._actions.map(action => action.item().name));
};

VisuMZ.BattleAI.ShuffleArray = function(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
};

Game_Battler.prototype.selectAllActionsGambit = function(actionList) {
    for (let i = 0; i < this.numActions(); i++) {
        const action = actionList[0];
        this.action(i).setEnemyAction(action);
    }
};

Game_Battler.prototype.selectAllActionsRandom = function(actionList) {
    for (let i = 0; i < this.numActions(); i++) {
        const action = actionList[Math.randomInt(actionList.length)];
        this.action(i).setEnemyAction(action);
    }
};

// Determine New Valid Action
Game_Enemy.prototype.determineNewValidAIAction = function() {
    Game_Battler.prototype.determineNewValidAIAction.call(this);
    if (this.numActions() > 0) {
        const actionList = this.enemy().actions.filter(a =>
            this.isActionValid(a)
        );
        // v1.11 added by Olivia
        if (actionList.length > 0) {
            this.selectAllActions(actionList);
        } else {
            this.clearActions();
        }
    }
};

//-----------------------------------------------------------------------------
// Game_Unit
//
// The superclass of Game_Party and Game_Troop.

VisuMZ.BattleAI.Game_Unit_initialize = Game_Unit.prototype.initialize;
Game_Unit.prototype.initialize = function() {
    VisuMZ.BattleAI.Game_Unit_initialize.call(this);
    this.initBattleAI();
};

Game_Unit.prototype.initBattleAI = function() {
    this._applyAIForcedTargetFilters = false;
    this.clearAIKnowledge();
};

VisuMZ.BattleAI.Game_Unit_aliveMembers = Game_Unit.prototype.aliveMembers;
Game_Unit.prototype.aliveMembers = function() {
    let members = VisuMZ.BattleAI.Game_Unit_aliveMembers.call(this);

    if (this._applyAIForcedTargetFilters) {
        const forcedTargets = AIManager.forcedTargets();
        members = members.filter(member => forcedTargets.includes(member));
    }

    return members;
};

VisuMZ.BattleAI.Game_Unit_randomTarget = Game_Unit.prototype.randomTarget;
Game_Unit.prototype.randomTarget = function() {
    if (AIManager.hasForcedTargets()) {
        this._applyAIForcedTargetFilters = true;
    }

    const target = VisuMZ.BattleAI.Game_Unit_randomTarget.call(this);

    this._applyAIForcedTargetFilters = false;

    return target;
};

Game_Unit.prototype.clearAIKnowledge = function() {
    this._aiKnowledge = {
        evaRates: [],
        mevRates: [],
        elementRates: {},
    }
};

Game_Unit.prototype.aiKnowledge = function() {
    if (this._aiKnowledge === undefined) this.clearAIKnowledge();
    return this._aiKnowledge;
};

Game_Unit.prototype.addXParamAIKnowledge = function(key, target) {
    this.aiKnowledge()[key] = this.aiKnowledge()[key] || [];

    const value = target.isActor() ? target.actorId() : target.enemyId();

    if (!this.aiKnowledge()[key].includes(value)) {
        this.aiKnowledge()[key].push(value);
    }
};

Game_Unit.prototype.hasXParamAIKnowledge = function(type, target) {
    if (!VisuMZ.BattleAI.Settings.General.LearnKnowledge) return true;

    const key = type.match(/EVA/i) ? 'evaRates' : 'mevRates';
    this.aiKnowledge()[key] = this.aiKnowledge()[key] || [];

    const value = target.isActor() ? target.actorId() : target.enemyId();

    return this.aiKnowledge()[key].includes(value);
};

Game_Unit.prototype.addElementAIKnowledge = function(elementId, target) {
    this.aiKnowledge().elementRates = this.aiKnowledge().elementRates || {};
    const rates = this.aiKnowledge().elementRates;
    rates[elementId] = rates[elementId] || [];

    const value = target.isActor() ? target.actorId() : target.enemyId();

    if (!rates[elementId].includes(value)) {
        rates[elementId].push(value);
    }
};

Game_Unit.prototype.hasElementAIKnowledge = function(elementId, target) {
    if (!VisuMZ.BattleAI.Settings.General.LearnKnowledge) return true;

    this.aiKnowledge().elementRates = this.aiKnowledge().elementRates || {};
    const rates = this.aiKnowledge().elementRates;
    rates[elementId] = rates[elementId] || [];

    const value = target.isActor() ? target.actorId() : target.enemyId();

    return rates[elementId].includes(value);
};

//-----------------------------------------------------------------------------
// Game_Troop
//
// The game object class for a troop and the battle-related data.

VisuMZ.BattleAI.Game_Troop_setup = Game_Troop.prototype.setup;
Game_Troop.prototype.setup = function(troopId) {
    VisuMZ.BattleAI.Game_Troop_setup.call(this, troopId);
    this.clearAIKnowledge();
};

//=============================================================================
// End of File
//=============================================================================