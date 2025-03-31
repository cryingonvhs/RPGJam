//=============================================================================
// VisuStella MZ - Class Change System
// VisuMZ_2_ClassChangeSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ClassChangeSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ClassChangeSystem = VisuMZ.ClassChangeSystem || {};
VisuMZ.ClassChangeSystem.version = 1.15;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.15] [ClassChangeSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Class_Change_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds the ability for your player to freely change the classes of
 * actors outside of battle from a menu. When changing into different classes,
 * players adjust the game's actors to a different playstyle with different
 * skills, equipment, and traits to make them behave differently.
 * 
 * Multiclassing is also possible. Actors can possess one class to many, from
 * two to ten to as many as you've set up in the Plugin Parameters. Adjust the
 * rulings for how multiclasses behave in your game. Let actors inherit a small
 * percentage of parameters from the multiclasses, skills, equipment access,
 * and more!
 *
 * Features include all (but not limited to) the following:
 * 
 * * A custom scene to let actors change their classes inside of.
 * * When class changing, determine if levels are maintained across all classes
 *   or if each class has their own levels to raise.
 * * Multiclasses allow actors to have more than one class at a time.
 * * Determine the rulings for each multiclass tier through the Plugin
 *   Parameters to gain control over how they influence your game.
 * * Restrict certain multiclass tiers from being able to change classes.
 * * Allow only some classes to be equippable to specific multiclass tiers.
 * * Unlock new classes automatically by reaching certain class levels or when
 *   certain resources have reached certain thresholds.
 * * These resources the new Class Points and Job Points.
 * * Class Points and Job Points are brand new resources added through this
 *   plugin which can be acquired through a variety a means ranging from
 *   participating in battle, defeating enemies, and/or leveling up.
 * * Also unlock classes through Plugin Commands!
 * * Actors can have class specific graphics depending on their primary class.
 *   Appearance changes range from faces, map sprites, battlers, and portraits
 *   used by other VisuStella MZ plugins.
 * * Play an animation on the actor inside the Class Change scene when changing
 *   classes.
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
 * Class Specific Graphics
 * 
 * If an actor has class specific graphics, they will overwrite the face
 * graphic, map character sprite graphic, battler graphic, and any portraits
 * that have been added through the VisuStella MZ plugins. The class specific
 * graphics will take priority over the default graphics.
 * 
 * ---
 * 
 * Change Actor Images Event Command
 * 
 * When changing an actor's graphics through the "Change Actor Images" event
 * command, these changes will take priority over the Class Specific Graphics.
 * If you want to remove these priority graphics, set the "Change Actor Images"
 * images to "(None)".
 * 
 * Keep in mind that this means you cannot make an "invisible" graphic through
 * the "(None)" selection anymore. Instead, you need to make a work around by
 * making a custom graphic image that is fully transparent.
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
 * VisuMZ_3_VictoryAftermath
 *
 * If VisuStella MZ's Victory Aftermath plugin is installed, the amount of
 * Job Points and Class Points earned can be visibly shown in the rewards
 * window.
 *
 * ---
 *
 * VisuMZ_1_BattleCore
 * 
 * VisuMZ_1_MainMenuCore
 *
 * If the Battle Core and/or the Main Menu Core is installed, the Class Change
 * System also gives access to notetags that alter their battle portraits
 * and/or menu portraits based on whatever class an actor is.
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
 * Core Engine VisuStella MZ
 * 
 * The Core Engine will determine if icons are displayed next to class names
 * for menus. If you do not wish to use them, then you will need to disable
 * them via the Plugin Parameters:
 * 
 *   Core Engine > Plugin Parameters > UI Settings > Text Code > Class Names
 * 
 * Then, set that value to false.
 * 
 * ---
 *
 * ============================================================================
 * Clarification
 * ============================================================================
 *
 * This section is to add clarification on some questions you may have
 * regarding the Class Change System.
 *
 * ---
 *
 * Q. Why do my actors have access to random skill(s) of x class(es)?
 * 
 * A. Are those classes a part of the classes that have already been unlocked?
 * Are the skills learned at level 1 for those classes? And are those classes
 * sharing a particular Skill Type? Then that's your answer.
 * 
 * When classes are unlocked, they are unlocked at level 1. When unlocked at
 * level 1, all of the skills at level 1 are also learned by that actor. And if
 * the classes all share a Skill Type, those skills will also become available
 * to that Skill Type.
 * 
 * If you don't want your classes to have access to all of the skills of the
 * same Skill Type, then give them different Skill Types unique to each class
 * and change the Skill Types of the skills taught for those classes to that
 * class's unique Skill Type.
 *
 * ---
 * 
 * Q. Why does the <Passive State: x> notetag from Skills and States Core apply
 * even if my actor does not have access to the parent skill?
 * 
 * A. Skills with the <Passive State: x> notetag only have a requirement of the
 * skills needing to be learned. It does not have a requirement of the skills
 * needing to be accessible through the Skill Types.
 * 
 * Even without the Class Change System, if you teach an actor a skill that
 * has a Skill Type the actor does not have access to, that actor will still
 * benefit from the <Passive State: x> notetag.
 * 
 * To make it apply only when a certain class is present, you will need to
 * utilize the Passive Condition notetags found in the Skills and States Core.
 * 
 * ---
 * 
 * Q. How do I get the data on which classes and multiclasses an actor has?
 * 
 * A. You would have to use the following code to acquire their data:
 * 
 *   actor.multiclasses()
 *   - This returns an array of all of the multiclasses an actor has.
 *   - This includes the actor's primary class.
 * 
 *   actor.multiclass(x)
 *   - This returns the class data (not ID) of whatever class the actor has
 *     in x multiclass slot.
 *   - An x value of 1 would yield the primary class.
 * 
 *   actor.multiclassId(x)
 *   - This returns the class ID (not data) of whatever class the actor has
 *     in x multiclass slot.
 *   - An x value of 1 would yield the primary class's ID.
 * 
 * ---
 * 
 * Q. How come my subclasses don't gain levels or EXP when I use event commands
 *    on my actors?
 * 
 * A. EXP Reward Rates for subclasses only apply to battle rewards. The event
 *    commands do not affect class settings in case the game dev wishes to fine
 *    tune the amount of EXP each class.
 * 
 * ---
 * 
 * Q. How come subclasses do not appear in the Skill Learn System?
 * 
 * A. That's because class-based resources and requirements are different
 *    depending on the primary class and how they're set up. To avoid
 *    conflicting with subclass resources and requirements, the Skill Learn
 *    System only makes it available for the primary class to learn skills from
 *    at a time. To learn skills from a subclass through the Skill Learn System
 *    the player would have to change to the subclass' class as the primary and
 *    then learn from it.
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
 * === Class Basics-Related Notetags ===
 * 
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Class Notetags
 * - Assigns an icon index for the class to 'x'.
 * - Replace 'x' with a number representing the index value on the IconSet
 *   image in the img/system/ folder for the icon you want to assign.
 * - If this notetag is not used, the icon index will default to the setting
 *   found in the Class Change System's Plugin Parameters.
 *
 * ---
 *
 * <Help Description>
 *  text
 *  text
 * </Help Description>
 *
 * - Used for: Class Notetags
 * - Assigns a help description to the class.
 * - Replace 'text' with text you want displayed when this class is selected
 *   in the Class Change scene's class list.
 * - If this notetag is not used, the help description will default to the
 *   setting found in the Class Change System's Plugin Parameters.
 *
 * ---
 *
 * <Class Change Animation: x>
 *
 * - Used for: Class Notetags
 * - Assigns an animation for the class when the actor changes to that class.
 * - Replace 'x' with a number representing the ID of the animation found in
 *   the database to play when the actor changes to that class.
 * - If this notetag is not used, the animation will default to the setting
 *   found in the Class Change System's Plugin Parameters.
 *
 * ---
 * 
 * <Class Change Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: Class Notetags
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   class's icon during for the Class Change scene.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of class changing, too.
 * - The size used for the image will vary based on your game's resolution.
 * 
 * ---
 * 
 * === Class Specific Graphics-Related Notetags ===
 * 
 * ---
 *
 * <Class id Face: filename, index>
 * 
 * <Class name Face: filename, index>
 *
 * - Used for: Actor Notetags
 * - Gives this actor a class specific face graphic.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 * - Replace 'filename' with the filename of the graphic found inside the
 *   img/faces/ folder. Do not include the file extension.
 * - Replace 'index' with the index of the graphic. Index values start at 0.
 * 
 * Examples: 
 * 
 *   <Class 1 Face: Actor2, 0>
 * 
 *   <Class Swordsman Face: Actor2, 0>
 *
 * ---
 *
 * <Class id Character: filename, index>
 * 
 * <Class name Character: filename, index>
 *
 * - Used for: Actor Notetags
 * - Gives this actor a class specific map character sprite graphic.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 * - Replace 'filename' with the filename of the graphic found inside the
 *   img/characters/ folder. Do not include the file extension.
 * - Replace 'index' with the index of the graphic. Index values start at 0.
 * 
 * Examples: 
 * 
 *   <Class 1 Character: Actor2, 0>
 * 
 *   <Class Swordsman Character: Actor2, 0>
 *
 * ---
 *
 * <Class id Battler: filename>
 * 
 * <Class name Battler: filename>
 *
 * - Used for: Actor Notetags
 * - Gives this actor a class specific sideview battler graphic.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 * - Replace 'filename' with the filename of the graphic found inside the
 *   img/sv_actors/ folder. Do not include the file extension.
 * 
 * Examples: 
 * 
 *   <Class 1 Battler: Actor2_1>
 * 
 *   <Class Swordsman Battler: Actor2_1>
 *
 * ---
 *
 * <Class id Menu Portrait: filename>
 * 
 * <Class name Menu Portrait: filename>
 *
 * - Used for: Actor Notetags
 * - Requires VisuMZ_1_MainMenuCore!
 * - Gives this actor a class specific menu portrait graphic.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 * - Replace 'filename' with the filename of the graphic found inside the
 *   img/pictures/ folder. Do not include the file extension.
 * 
 * Examples: 
 * 
 *   <Class 1 Menu Portrait: Actor2_1>
 * 
 *   <Class Swordsman Menu Portrait: Actor2_1>
 *
 * ---
 *
 * <Class id Battle Portrait: filename>
 * 
 * <Class name Battle Portrait: filename>
 *
 * - Used for: Actor Notetags
 * - Requires VisuMZ_1_BattleCore!
 * - Gives this actor a class specific battle portrait graphic.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 * - Replace 'filename' with the filename of the graphic found inside the
 *   img/pictures/ folder. Do not include the file extension.
 * 
 * Examples: 
 * 
 *   <Class 1 Battle Portrait: Actor2_1>
 * 
 *   <Class Swordsman Battle Portrait: Actor2_1>
 *
 * ---
 * 
 * === Class Unlocking-Related Notetags ===
 * 
 * ---
 *
 * <Unlocked Classes: id>
 * <Unlocked Classes: id, id, id>
 * 
 * <Unlocked Classes: name>
 * <Unlocked Classes: name, name, name>
 *
 * - Used for: Actor Notetags
 * - Allows this actor to start with certain classes unlocked. These classes
 *   are unlocked in addition to the ones found in the Plugin Parameters.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 * - Insert multiple data entries to unlock more classes.
 *
 * ---
 *
 * <Auto Unlock Requirements>
 *  Class id: Level x
 *  Class name: Level x
 * 
 *  Class id: x AP
 *  Class name: x AP
 * 
 *  Class id: x CP
 *  Class name: x CP
 * 
 *  Class id: x JP
 *  Class name: x JP
 * 
 *  Class id: x SP
 *  Class name: x SP
 * 
 *  AP: x
 *  CP: x
 *  JP: x
 *  SP: x
 * </Auto Unlock Requirements>
 *
 * - Used for: Class Notetags
 * - Have this class unlock automatically whenever all of the conditions have
 *   been met after a battle is over or upon entering the Class Change scene.
 * - Insert/delete any number of copies of the middle conditions as needed.
 * - For 'id' conditions, replace 'id' with a number representing class's ID.
 * - For 'name' conditions, replace 'name' with the class's name.
 * - For 'AP', 'CP', 'JP', 'SP' conditions that have class markers, they
 *   require that many of the resource as the 'x' value for that class.
 *   These are best used with resource types that are class specific.
 * - For 'AP', 'CP', 'JP', 'SP' conditions that have class markers, they
 *   require that many of the resource as the 'x' value for the current class.
 *   These are best used with resource types that are shared.
 * - 'AP' and 'SP' conditions require VisuMZ_2_SkillLearnSystem.
 * 
 * Examples:
 * 
 * <Auto Unlock Requirements>
 *  Class 4: Level 20
 *  Class 6: Level 15
 * </Auto Unlock Requirements>
 * 
 * <Auto Unlock Requirements>
 *  Class Knight: Level 20
 *  Class Spellblade: Level 15
 * </Auto Unlock Requirements>
 * 
 * <Auto Unlock Requirements>
 *  Class Knight: 200 JP
 *  Class Spellblade: 100 JP
 * </Auto Unlock Requirements>
 * 
 * <Auto Unlock Requirements>
 *  Class Knight: 200 JP
 *  CP: 500
 * </Auto Unlock Requirements>
 *
 * ---
 * 
 * === Category-Related Notetags ===
 * 
 * ---
 *
 * <Starting Multiclasses: x>
 *
 * - Used for: Actor Notetags
 * - Lets the actor start with 'x' amount of class slots to assign.
 * - Replace 'x' with a number value representing the number of slots the
 *   actor can assign classes to.
 * - If this notetag is not used, the slot values will default to the setting
 *   found in the Class Change System's Plugin Parameters.
 * - Slot values cannot go under 1 or exceed the maximum number of layers found
 *   in the "Multiclass Settings" Plugin Parameters.
 *
 * ---
 *
 * <Starting Tier x Class: id>
 * 
 * <Starting Tier x Class: name>
 *
 * - Used for: Actor Notetags
 * - If an actor has multiclass slots, determine which subclasses are assigned
 *   to them at the start.
 * - Replace 'x' with a number value representing the multiclass slot to assign
 *   to. '1' is the primary slot. '2' is the second slot.
 * - For 'id' conditions, replace 'id' with a number representing class's ID.
 * - For 'name' conditions, replace 'name' with the class's name.
 * - Insert multiple copies of this notetag to assign multiple classes to
 *   different slots.
 * 
 * Example:
 * 
 * <Starting Tier 2 Class: Sorcerer>
 * 
 * <Starting Tier 3 Class: Priest>
 *
 * ---
 *
 * <Restrict Class Change Tier: x>
 * <Restrict Class Change Tiers: x, x, x>
 *
 * - Used for: Actor Notetags
 * - This makes an actor unable to change the class found in any of the listed
 *   tier slots unless this effect is cancelled by Plugin Commands.
 * - Replace 'x' with a number representing the tier slot(s) to restrict.
 *
 * ---
 *
 * <Class Change Tier Only: x>
 * <Class Change Tiers Only: x, x, x>
 *
 * - Used for: Class Notetags
 * - This makes the specific class only assignable to specific class tiers.
 * - Replace 'x' with a number representing the tier slot(s) that this class
 *   can be assigned and equipped to.
 *
 * ---
 * 
 * === Class Points-Related Notetags ===
 * 
 * ---
 *
 * <Starting CP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Class Points the actor starts with in his/her
 *   starting class.
 * - Replace 'x' with a numeric value representing the amount of Class Points
 *   to start out with.
 *
 * ---
 *
 * <Class id Starting CP: x>
 * <Class name Starting CP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Class Points the actor starts with in a specific
 *   class if Class Points aren't shared across all classes.
 * - Replace 'x' with a numeric value representing the amount of Class Points
 *   to start out with.
 * - Replace 'id' with the ID of the class to set starting Class Points for.
 * - Replace 'name' with the name of the class to set starting Class Points
 *   for.
 *
 * ---
 *
 * <CP Gain: x>
 * <User CP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the user will acquire 'x' amount
 *   of Class Points.
 * - Replace 'x' with a number representing the amount of Class Points for the
 *   user to earn upon usage.
 * - This effect will trigger each time per "hit".
 * - This effect will take over the "Per Action Hit" Class Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Target CP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the target will acquire 'x' amount
 *   of Class Points.
 * - Replace 'x' with a number representing the amount of Class Points for the
 *   target to earn upon usage.
 * - This effect will trigger each time per "hit".
 *
 * ---
 *
 * <CP: x>
 *
 * - Used for: Enemy Notetags
 * - Determines the amount of Class Points the enemy will give the player's
 *   party upon being defeated.
 * - Replace 'x' with a number representing the amount of Class Points to grant
 *   the player's party each.
 * - This effect will take over the "Per Enemy" Class Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Class Points Rate: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Increases the amount of Class Points the affected battler will gain by a
 *   percentile value.
 * - Replace 'x' with a percentage number representing the amount of Class
 *   Points that will be acquired.
 * - This stacks multiplicatively with each other.
 * - This does not apply when Class Points are directly added, lost, or set.
 *
 * ---
 * 
 * === Job Points-Related Notetags ===
 * 
 * ---
 *
 * <Starting JP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Job Points the actor starts with in his/her
 *   starting class.
 * - Replace 'x' with a numeric value representing the amount of Job Points to
 *   start out with.
 *
 * ---
 *
 * <Class id Starting JP: x>
 * <Class name Starting JP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Job Points the actor starts with in a specific
 *   class if Job Points aren't shared across all classes.
 * - Replace 'x' with a numeric value representing the amount of Job Points to
 *   start out with.
 * - Replace 'id' with the ID of the class to set starting Job Points for.
 * - Replace 'name' with the name of the class to set starting Job Points for.
 *
 * ---
 *
 * <JP Gain: x>
 * <User JP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the user will acquire 'x' amount
 *   of Job Points.
 * - Replace 'x' with a number representing the amount of Job Points for the
 *   user to earn upon usage.
 * - This effect will trigger each time per "hit".
 * - This effect will take over the "Per Action Hit" Job Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Target JP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the target will acquire 'x' amount
 *   of Job Points.
 * - Replace 'x' with a number representing the amount of Job Points for the
 *   target to earn upon usage.
 * - This effect will trigger each time per "hit".
 *
 * ---
 *
 * <JP: x>
 *
 * - Used for: Enemy Notetags
 * - Determines the amount of Job Points the enemy will give the player's party
 *   upon being defeated.
 * - Replace 'x' with a number representing the amount of Job Points to grant
 *   the player's party each.
 * - This effect will take over the "Per Enemy" Job Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Job Points Rate: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Increases the amount of Job Points the affected battler will gain by a
 *   percentile value.
 * - Replace 'x' with a percentage number representing the amount of Job Points
 *   that will be acquired.
 * - This stacks multiplicatively with each other.
 * - This does not apply when Job Points are directly added, lost, or set.
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
 * === Unlock Class Plugin Commands ===
 * 
 * ---
 *
 * Unlock Class: Add For Actor(s)
 * - Unlock class(es) for target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to unlock class(es) for.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to be unlocked.
 *
 * ---
 *
 * Unlock Class: Add For Global
 * - Unlock class(es) for all party members.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to be unlocked.
 *
 * ---
 *
 * Unlock Class: Remove From Actor(s)
 * - Remove unlock class(es) for target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to remove an unlocked class(es) for.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to be removed from the unlocked status.
 *
 * ---
 *
 * Unlock Class: Remove From Global
 * - Remove unlock class(es) for all party members.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to be removed from the unlocked status.
 *
 * ---
 * 
 * === Change Restriction Plugin Commands ===
 * 
 * ---
 *
 * Change Restriction: Add Tier Restriction
 * - Add restrictions to prevent class changing specific tier(s) to
 *   target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to restrict class tier(s) for.
 *
 *   Tiers(s):
 *   - Select which class tier(s) to restrict changing for.
 *
 * ---
 *
 * Change Restriction: Remove Tier Restriction
 * - Remove restrictions to allow class changing specific tier(s) for
 *   target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to remove class tier(s) restrictions for.
 *
 *   Tiers(s):
 *   - Select which class tier(s) to remove restrictions for.
 *
 * ---
 * 
 * === Multiclass Plugin Commands ===
 * 
 * ---
 *
 * Multiclass: Change Actor(s) Multiclass
 * - Changes a specific multiclass for target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to change the multiclass limit to.
 *
 *   Tier:
 *   - Which multiclass tier to change for the target actor(s)?
 *
 *   Class ID:
 *   - Which class should go into this multiclass tier slot?
 *
 * ---
 *
 * Multiclass: Raise Limit for Actor(s)
 * - Raise the multiclass limit for target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to change the multiclass limit to.
 *
 *   Raise Limit By:
 *   - Raise the multiclass limit for target actor(s) by this much.
 *
 * ---
 *
 * Multiclass: Lower Limit for Actor(s)
 * - Lower the multiclass limit for target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to change the multiclass limit to.
 *
 *   Reduce Limit By:
 *   - Lower the multiclass limit for target actor(s) by this much.
 *
 * ---
 *
 * Multiclass: Set Limit for Actor(s)
 * - Set multiclass limit for target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to change the multiclass limit to.
 *
 *   Set Limit To:
 *   - Set multiclass limit for target actor(s) to this much.
 *
 * ---
 * 
 * === Class Points Plugin Commands ===
 * 
 * ---
 *
 * Class Points: Gain
 * - The target actor(s) gains Class Points.
 * - Gained amounts are affected by Class Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to gain Class Points for.
 *   - Use "0" for the current class.
 *
 *   Class Points:
 *   - Determine how many Class Points will be gained.
 *   - You may use code.
 *
 * ---
 *
 * Class Points: Add
 * - The target actor(s) receives Class Points.
 * - Received amounts are NOT affected by Class Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to receive Class Points for.
 *   - Use "0" for the current class.
 *
 *   Class Points:
 *   - Determine how many Class Points will be added.
 *   - You may use code.
 *
 * ---
 *
 * Class Points: Lose
 * - The target actor(s) loses Class Points.
 * - Lost amounts are NOT affected by Class Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to lose Class Points for.
 *   - Use "0" for the current class.
 *
 *   Class Points:
 *   - Determine how many Class Points will be lost.
 *   - You may use code.
 *
 * ---
 *
 * Class Points: Set
 * - Changes the exact Class Points for the target actor(s).
 * - Changed amounts are NOT affected by Class Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to change Class Points for.
 *   - Use "0" for the current class.
 *
 *   Class Points:
 *   - Determine how many Class Points will be set exactly to.
 *   - You may use code.
 *
 * ---
 * 
 * === Job Points Plugin Commands ===
 * 
 * ---
 *
 * Job Points: Gain
 * - The target actor(s) gains Job Points.
 * - Gained amounts are affected by Job Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to gain Job Points for.
 *   - Use "0" for the current class.
 *
 *   Job Points:
 *   - Determine how many Job Points will be gained.
 *   - You may use code.
 *
 * ---
 *
 * Job Points: Add
 * - The target actor(s) receives Job Points.
 * - Received amounts are NOT affected by Job Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to receive Job Points for.
 *   - Use "0" for the current class.
 *
 *   Job Points:
 *   - Determine how many Job Points will be added.
 *   - You may use code.
 *
 * ---
 *
 * Job Points: Lose
 * - The target actor(s) loses Job Points.
 * - Lost amounts are NOT affected by Job Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to lose Job Points for.
 *   - Use "0" for the current class.
 *
 *   Job Points:
 *   - Determine how many Job Points will be lost.
 *   - You may use code.
 *
 * ---
 *
 * Job Points: Set
 * - Changes the exact Job Points for the target actor(s).
 * - Changed amounts are NOT affected by Job Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to change Job Points for.
 *   - Use "0" for the current class.
 *
 *   Job Points:
 *   - Determine how many Job Points will be set exactly to.
 *   - You may use code.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Class Change in Menu?
 * - Enables/disables Class Change inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Class Change inside the main menu.
 *
 * ---
 *
 * System: Show Class Change in Menu?
 * - Shows/hides Class Change inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Class Change inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for Class Change System.
 *
 * ---
 *
 * Basics
 * 
 *   Default Help:
 *   - Default help description for all classes.
 *   - %1 - Class Name
 * 
 *   Default Icon:
 *   - Default icon used for all classes.
 * 
 *   Maintain Levels?:
 *   - Make each class have the same level or make each class have
 *     their own level?
 * 
 *   Change-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing classes with MaxHP/MaxMP values.
 *
 * ---
 *
 * Class Unlocking
 * 
 *   Always Unlocked:
 *   - Which classes are always unlocked and available?
 * 
 *   Starting Multiclasses:
 *   - How many classes can actors use at the start by default?
 *   - Use 1 for just the primary class.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_ClassChange.
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
 * Plugin Parameters: Class Change Sound Settings
 * ============================================================================
 *
 * Sound effect played when changing classes through Scene_ClassChange.
 *
 * ---
 *
 * Class Change Sound Settings
 * 
 *   Filename:
 *   - Filename of the sound effect played.
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
 * Plugin Parameters: Main Access Settings
 * ============================================================================
 *
 * Menu Access settings for Class Change.
 *
 * ---
 *
 * Main Menu Settings
 * 
 *   Command Name:
 *   - Name of the 'ClassChangeSystem' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'ClassChangeSystem' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'ClassChangeSystem' option to the Main Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Multiclass Settings
 * ============================================================================
 *
 * Multiclass settings for this plugin. Each tier allows you to have separate
 * settings. The order the tiers are inserted will represent the settings that
 * will be applied to those tiers when classes are assigned in those slots.
 * 
 * The majority of these settings do not apply to Tier 1 because Tier 1 is the
 * primary class. However, Tier 1 must exist in these Plugin Parameters to
 * provide settings for the Class Change scene.
 *
 * ---
 *
 * General
 * 
 *   Class Tier Name:
 *   - Name of this class tier.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Help Description:
 *   - Help description when this multiclass slot is picked.
 *
 * ---
 *
 * Base Parameter Bonuses
 * 
 *   MaxHP:
 *   MaxMP:
 *   ATK:
 *   DEF:
 *   MAT:
 *   MDF:
 *   AGI:
 *   LUK:
 *   - How little of this class tier's parameter should be added to base stats?
 *   - Does not apply to Tier 1.
 *
 * ---
 *
 * Reward Rates
 * 
 *   EXP:
 *   - How much EXP does a class in this tier earn?
 *   - Does not apply to Tier 1. Only for Battle Rewards.
 * 
 *   Resources:
 *   - Resource rate (ie. CP, JP) earned for this tier.
 *   - Does not apply to Tier 1. Only for Battle Rewards.
 *
 * ---
 *
 * Inherit Traits > Rates
 * 
 *   Element Rates?:
 *   - Inherit the element rates from this class tier?
 *   - Does not apply to Tier 1.
 * 
 *   Debuff Rates?:
 *   - Inherit the debuff rates from this class tier?
 *   - Does not apply to Tier 1.
 * 
 *   State Rates?:
 *   - Inherit the state rates from this class tier?
 *   - Does not apply to Tier 1.
 * 
 *   State Resistance?:
 *   - Inherit the state resistances from this class tier?
 *   - Does not apply to Tier 1.
 *
 * ---
 *
 * Inherit Traits > Param Rates
 * 
 *   Base-Param Rates?:
 *   - Inherit Base Parameter rates from this class tier?
 *   - Does not apply to Tier 1.
 * 
 *   X-Param Rates?:
 *   - Inherit X-Parameter rates from this class tier?
 *   - Does not apply to Tier 1.
 * 
 *   S-Param Rates?:
 *   - Inherit S-Parameter rates from this class tier?
 *   - Does not apply to Tier 1.
 *
 * ---
 *
 * Inherit Traits > Attack
 * 
 *   Attack Elements?:
 *   - Inherit the attack elements from this class tier?
 *   - Does not apply to Tier 1.
 * 
 *   Attack States?:
 *   - Inherit the attack states from this class tier?
 *   - Does not apply to Tier 1.
 *
 * ---
 *
 * Inherit Traits > Skills
 * 
 *   Added STypes?:
 *   - Inherit the added STypes from this class tier?
 *   - Does not apply to Tier 1.
 * 
 *   Added Skills?:
 *   - Inherit the added skills from this class tier?
 *   - Does not apply to Tier 1.
 *
 * ---
 *
 * Inherit Traits > Equipment
 * 
 *   Equippable Weapons?:
 *   - Inherit the equippable weapons from this class tier?
 *   - Does not apply to Tier 1.
 * 
 *   Equippable Armors?:
 *   - Inherit the equippable armors from this class tier?
 *   - Does not apply to Tier 1.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Window settings for Scene_ClassChange. These adjust the overall layout of
 * the scene as well as how some of the content inside of the windows look. Not
 * all aspects of the scene are fully customizable due to mechanical limits.
 *
 * ---
 *
 * Scene_ClassChange
 * 
 *   Recommended Layout?:
 *   - Use the recommended Menu Layout provided by this plugin?
 * 
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu
 *     scene layout?
 * 
 *   Displayed Resources:
 *   - Select which resources to display in Scene_Class's class lists.
 *   - Non-shared resources appear in the lists up to a limit of 2.
 * 
 *   Confirm Animation ID:
 *   - Play this animation when a class change has been made.
 * 
 *     Primary Offset X:
 *     Primary Offset Y:
 *     Subclass Offset X:
 *     Subclass Offset Y:
 *     - Adjust the offsets for the class change animation.
 * 
 *   Show Class Level?
 *   - Show the class level when displaying classes?
 *   - Used for the windows in the Class Change menu.
 *
 * ---
 *
 * Window_ClassStatus
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Param Font Size:
 *   - The font size used for parameter values.
 * 
 *   Show Menu Portraits?:
 *   - If Main Menu Core is installed, display the Menu Portraits instead of
 *     the actor's face in the status window?
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *   Back Rectangle Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 *   JS: Portrait Upper:
 *   - If Menu Portraits are available, this is code used to draw the upper
 *     data like this in the Status Window.
 * 
 *   JS: Face Upper:
 *   - If faces used used, this is code used to draw the upper data like this
 *     in the Status Window.
 * 
 *   JS: Parameter Lower:
 *   - Code to determine how parameters are drawn in the Status Window.
 *
 * ---
 *
 * Window_ClassTier
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   No Class Assigned:
 *   - Text used when no class is assigned to the slot.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing classes?
 * 
 *   Button Assist Text:
 *   - Text used for the Button Assist Window
 * 
 *   JS: Extra Data:
 *   - Code used to draw extra data if there is enough room.
 *   - This does not apply to basic class data and icons.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Window_ClassList
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Unassign Class:
 *   - Text used for an empty class slot.
 * 
 *     Help Description:
 *     - Help description for unassigning a class.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Class Points Settings
 * ============================================================================
 *
 * Class Points are an actor-only resource used as a currency for this plugin.
 * You can determine how they appear in-game, how they're earned, and what kind
 * of mechanics are involved with them. Class Points can also be used in other
 * VisuStella plugins.
 *
 * ---
 *
 * Mechanics
 * 
 *   Shared Class Points:
 *   - Do you want Class Points to be shared across all classes?
 *   - Or do you want all classes to have their own?
 * 
 *   Maximum:
 *   - What's the maximum amount of Class Points an actor can have?
 *   - Use 0 for unlimited Class Points.
 *
 * ---
 *
 * Visual
 * 
 *   Show In Menus?:
 *   - Do you wish to show Class Points in menus that allow them?
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Class Points?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Full Text:
 *   - The full text of how Class Points appears in-game.
 * 
 *   Abbreviated Text:
 *   - The abbreviation of how Class Points appears in-game.
 * 
 *   Menu Text Format:
 *   - What is the text format for it to be displayed in windows.
 *   - %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 *
 * ---
 *
 * Gain
 * 
 *   Per Action Hit:
 *   - How many Class Points should an actor gain per action?
 *   - You may use code.
 * 
 *   Per Level Up:
 *   - How many Class Points should an actor gain per level up?
 *   - You may use code.
 * 
 *   Per Enemy Defeated:
 *   - How many Class Points should an actor gain per enemy?
 *   - You may use code.
 * 
 *     Alive Actors?:
 *     - Do actors have to be alive to receive Class Points from
 *       defeated enemies?
 *
 * ---
 *
 * Victory
 * 
 *   Show During Victory?:
 *   - Show how much CP an actor has earned in battle during the victory phase?
 * 
 *   Victory Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * 
 *   Aftermath Display?:
 *   - Requires VisuMZ_3_VictoryAftermath. 
 *   - Show Class Points as the main acquired resource in the actor windows?
 * 
 *   Aftermath Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Earned, %2 - Abbr, %3 - Full Text
 *
 * ---
 * 
 * For those who wish to display how many Class Points an actor has for a
 * specific class, you can use the following JavaScript code inside of a
 * window object.
 * 
 *   this.drawClassPoints(value, x, y, width, align);
 *   - The 'value' variable refers to the number you wish to display.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 *   this.drawActorClassPoints(actor, classID, x, y, width, align);
 *   - The 'actor' variable references the actor to get data from.
 *   - The 'classID' variable is the class to get data from.
 *     - Use 0 if Class Points aren't shared or if you want the Class
 *       Points from the actor's current class.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Job Points Settings
 * ============================================================================
 *
 * Job Points are an actor-only resource used as a currency for this plugin.
 * You can determine how they appear in-game, how they're earned, and what kind
 * of mechanics are involved with them. Job Points can also be used in other
 * VisuStella plugins.
 *
 * ---
 *
 * Mechanics
 * 
 *   Shared Job Points:
 *   - Do you want Job Points to be shared across all classes?
 *   - Or do you want all classes to have their own?
 * 
 *   Maximum:
 *   - What's the maximum amount of Job Points an actor can have?
 *   - Use 0 for unlimited Job Points.
 *
 * ---
 *
 * Visual
 * 
 *   Show In Menus?:
 *   - Do you wish to show Job Points in menus that allow them?
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Job Points?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Full Text:
 *   - The full text of how Job Points appears in-game.
 * 
 *   Abbreviated Text:
 *   - The abbreviation of how Job Points appears in-game.
 * 
 *   Menu Text Format:
 *   - What is the text format for it to be displayed in windows.
 *   - %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 *
 * ---
 *
 * Gain
 * 
 *   Per Action Hit:
 *   - How many Job Points should an actor gain per action?
 *   - You may use code.
 * 
 *   Per Level Up:
 *   - How many Job Points should an actor gain per level up?
 *   - You may use code.
 * 
 *   Per Enemy Defeated:
 *   - How many Job Points should an actor gain per enemy?
 *   - You may use code.
 * 
 *     Alive Actors?:
 *     - Do actors have to be alive to receive Job Points from
 *       defeated enemies?
 *
 * ---
 *
 * Victory
 * 
 *   Show During Victory?:
 *   - Show how much JP an actor has earned in battle during the victory phase?
 * 
 *   Victory Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * 
 *   Aftermath Display?:
 *   - Requires VisuMZ_3_VictoryAftermath. 
 *   - Show Job Points as the main acquired resource in the actor windows?
 * 
 *   Aftermath Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Earned, %2 - Abbr, %3 - Full Text
 *
 * ---
 * 
 * For those who wish to display how many Job Points an actor has for a
 * specific class, you can use the following JavaScript code inside of a
 * window object.
 * 
 *   this.drawJobPoints(value, x, y, width, align);
 *   - The 'value' variable refers to the number you wish to display.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 *   this.drawActorJobPoints(actor, classID, x, y, width, align);
 *   - The 'actor' variable references the actor to get data from.
 *   - The 'classID' variable is the class to get data from.
 *     - Use 0 if Job Points aren't shared or if you want the Job
 *       Points from the actor's current class.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
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
 * Version 1.15: December 14, 2023
 * * Bug Fixes!
 * ** Fixed an incompatibility with the \Class[x] textcode from the VisuStella
 *    MZ message core. Fix made by Irina.
 * 
 * Version 1.14: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Window Settings > Show Class Level?
 * **** Show the class level when displaying classes?
 * **** Used for the windows in the Class Change menu.
 * 
 * Version 1.13: May 2, 2022
 * * Bug Fixes!
 * ** Fixed a bug where the element rate traits of subclasses did not apply.
 *    Fix made by Olivia.
 * 
 * Version 1.12: April 14, 2022
 * * Bug Fixes!
 * ** Fixed a problem with certain face index values not registering properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Added a better bitmap loading system for face graphics. Update by Irina.
 * 
 * Version 1.11: October 21, 2021
 * * Bug Fixes!
 * ** Fixed a problem with the <CP: x> notetags not working properly. Fix made
 *    by Irina.
 * 
 * Version 1.10: September 10, 2021
 * * Documentation Update!
 * ** VisuStella MZ Compatibility
 * *** Core Engine VisuStella MZ
 * **** The Core Engine will determine if icons are displayed next to class
 *      names for menus. If you do not wish to use them, then you will need to
 *      disable them via the Plugin Parameters:
 * **** Core Engine > Plugin Parameters > UI Settings > Text Code > Class Names
 * **** Then, set that value to false.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.09: September 3, 2021
 * * Documentation Update!
 * ** Added line "This does not apply to basic class data and icons." for
 *    JS: Extra Data. That JavaScript entry does not affect how class names
 *    are written out.
 * * Feature Update!
 * ** Those using \I[x] in class names will automatically have those converted
 *    into <Icon: x> notetags. Update made by Irina.
 * ** The \I[x] text code will be automatically removed from the tier selection
 *    since it's already in the form of a big icon. Update made by Irina.
 * 
 * Version 1.08: August 13, 2021
 * * Bug Fixes!
 * ** Fixed a bug that pertained to specific subclass traits clearing cache
 *    during a multi-hit attack and causing MaxHP/MaxMP inconsistencies. Fix
 *    made by Arisu.
 * 
 * Version 1.07: April 30, 2021
 * * Bug Fixes!
 * ** Multiclasses with Adjust HP/MP settings should now properly adjust
 *    without the Core Engine installed. Fix made by Arisu.
 * ** Those without Victory Aftermath should no longer experience crashes when
 *    gaining Class Points or Job Points after battle. Fix made by Olivia.
 * ** With the Maintained Levels setting enabled, all unlocked multiclasses
 *    will also acquire skills upon leveling up and not just when switching to
 *    the classes manually. Fix made by Olivia.
 * * Feature Update!
 * ** During battle, equipment types belonging multiclasses will not be
 *    unequipped to prevent odd happenings. Update change by Arisu.
 * 
 * Version 1.06: April 16, 2021
 * * Bug Fixes!
 * ** Map based character sprite changes should now be reflected instantly.
 *    Fix made by Olivia.
 * * Documentation Update!
 * ** Added two more entries to the Clarification section. Updated by Arisu.
 * 
 * Version 1.05: February 12, 2021
 * * Bug Fixes!
 * ** Param bonuses for subclasses are no longer based on the current level but
 *    instead, the level for the subclass. Fix made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: January 8, 2021
 * * Bug Fixes!
 * ** Leveling up should now automatically cache the current class level.
 *    Fix made by Irina.
 * 
 * Version 1.03: January 1, 2021
 * * Bug Fixes!
 * ** General Settings should now have default values when added. If you are
 *    still getting an error when starting a new game, please open up the
 *    General Settings in the Plugin Parameters and hit OK. Fix made by Yanfly.
 * 
 * Version 1.02: December 25, 2020
 * * Bug Fixes!
 * ** Added a refresh after setting up new actors to recalculate any cached
 *    parameter values, skills, and passive states. Fix made by Yanfly.
 * ** Equipment duplication glitch should no longer occur.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly.
 * *** <Class Picture: filename> and <Picture: filename>
 * **** Uses a picture from your project's /img/pictures/ folder instead of the
 *      class icon for the Class Change scene.
 * ** New Plugin Parameters added by Yanfly.
 * *** Window Settings > Scene_ClassChange > Confirm Animation ID > Offset X
 * *** Window Settings > Scene_ClassChange > Confirm Animation ID > Offset Y
 * **** Offsets have been added to let you adjust where the animation occurs
 *      for primary and subclass changing.
 * 
 * Version 1.01: December 18, 2020
 * * Bug Fixes!
 * ** Class specific character graphics no longer default to index 0 when no
 *    index is found or declared by notetags. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added "Clarification" section to the documentation to explain some things
 *    that users might not understand correctly.
 * * Feature Update!
 * ** The button assist text for the "SHIFT" removal is now offset towards the
 *    left a bit for more room. Update made by Yanfly.
 *
 * Version 1.00 Official Release Date: January 11, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassUnlockForActor
 * @text Unlock Class: Add For Actor(s)
 * @desc Unlock class(es) for target actor(s).
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to unlock class(es) for.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to be unlocked.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassUnlockForGlobal
 * @text Unlock Class: Add For Global
 * @desc Unlock class(es) for all party members.
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to be unlocked.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassUnlockRemoveActor
 * @text Unlock Class: Remove From Actor(s)
 * @desc Remove unlock class(es) for target actor(s).
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to remove an unlocked class(es) for.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to be removed from the unlocked status.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassUnlockRemoveGlobal
 * @text Unlock Class: Remove From Global
 * @desc Remove unlock class(es) for all party members.
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to be removed from the unlocked status.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassChangeAddRestrictTier
 * @text Change Restriction: Add Tier Restriction
 * @desc Add restrictions to prevent class changing specific tier(s)
 * to target actor(s).
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to restrict class tier(s) for.
 * @default ["1"]
 *
 * @arg Tiers:arraynum
 * @text Tiers(s)
 * @type number[]
 * @desc Select which class tier(s) to restrict changing for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassChangeRemoveRestrictTier
 * @text Change Restriction: Remove Tier Restriction
 * @desc Remove restrictions to allow class changing specific tier(s)
 * for target actor(s).
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to remove class tier(s) restrictions for.
 * @default ["1"]
 *
 * @arg Tiers:arraynum
 * @text Tiers(s)
 * @type number[]
 * @desc Select which class tier(s) to remove restrictions for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MulticlassChangeActorClass
 * @text Multiclass: Change Actor(s) Multiclass
 * @desc Changes a specific multiclass for target actor(s).
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to change the multiclass limit to.
 * @default ["1"]
 *
 * @arg Tier:num
 * @text Tier
 * @type number
 * @min 1
 * @desc Which multiclass tier to change for the target actor(s)?
 * @default 2
 *
 * @arg ClassID:num
 * @text Class ID
 * @type class
 * @desc Which class should go into this multiclass tier slot?
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MulticlassRaiseLimit
 * @text Multiclass: Raise Limit for Actor(s)
 * @desc Raise the multiclass limit for target actor(s).
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to change the multiclass limit to.
 * @default ["1"]
 *
 * @arg Limit:num
 * @text Raise Limit By
 * @type number
 * @min 1
 * @desc Raise the multiclass limit for target actor(s) by this much.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MulticlassLowerLimit
 * @text Multiclass: Lower Limit for Actor(s)
 * @desc Lower the multiclass limit for target actor(s).
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to change the multiclass limit to.
 * @default ["1"]
 *
 * @arg Limit:num
 * @text Reduce Limit By
 * @type number
 * @min 1
 * @desc Lower the multiclass limit for target actor(s) by this much.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MulticlassSetLimit
 * @text Multiclass: Set Limit for Actor(s)
 * @desc Set multiclass limit for target actor(s).
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to change the multiclass limit to.
 * @default ["1"]
 *
 * @arg Limit:num
 * @text Set Limit To
 * @type number
 * @min 1
 * @desc Set multiclass limit for target actor(s) to this much.
 * @default 2
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassPointsGain
 * @text Class Points: Gain
 * @desc The target actor(s) gains Class Points.
 * Gained amounts are affected by Class Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to gain Class Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Class Points
 * @desc Determine how many Class Points will be gained.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassPointsAdd
 * @text Class Points: Add
 * @desc The target actor(s) receives Class Points.
 * Received amounts are NOT affected by Class Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to receive Class Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Class Points
 * @desc Determine how many Class Points will be added.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassPointsLose
 * @text Class Points: Lose
 * @desc The target actor(s) loses Class Points.
 * Lost amounts are NOT affected by Class Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to lose Class Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Class Points
 * @desc Determine how many Class Points will be lost.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClassPointsSet
 * @text Class Points: Set
 * @desc Changes the exact Class Points for the target actor(s).
 * Changed amounts are NOT affected by Class Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to change Class Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Class Points
 * @desc Determine how many Class Points will be set exactly to.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command JobPointsGain
 * @text Job Points: Gain
 * @desc The target actor(s) gains Job Points.
 * Gained amounts are affected by Job Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to gain Job Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Job Points
 * @desc Determine how many Job Points will be gained.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command JobPointsAdd
 * @text Job Points: Add
 * @desc The target actor(s) receives Job Points.
 * Received amounts are NOT affected by Job Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to receive Job Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Job Points
 * @desc Determine how many Job Points will be added.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command JobPointsLose
 * @text Job Points: Lose
 * @desc The target actor(s) loses Job Points.
 * Lost amounts are NOT affected by Job Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to lose Job Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Job Points
 * @desc Determine how many Job Points will be lost.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command JobPointsSet
 * @text Job Points: Set
 * @desc Changes the exact Job Points for the target actor(s).
 * Changed amounts are NOT affected by Job Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to change Job Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Job Points
 * @desc Determine how many Job Points will be set exactly to.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableClassChangeSystemMenu
 * @text System: Enable Class Change in Menu?
 * @desc Enables/disables Class Change inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Class Change inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowClassChangeSystemMenu
 * @text System: Show Class Change in Menu?
 * @desc Shows/hides Class Change inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Class Change inside the main menu.
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
 * @param ClassChangeSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param ClassChange
 * @text Class Change
 *
 * @param General:struct
 * @text General Settings
 * @parent ClassChange
 * @type struct<General>
 * @desc General settings for Class Change System.
 * @default {"Basics":"","HelpDescription:json":"\"The %1 class.\"","Icon:num":"96","MaintainLevels:eval":"false","ChangeAdjusHpMp:eval":"true","Unlock":"","AlwaysUnlocked:arraynum":"[\"1\",\"2\",\"3\",\"4\"]","StartingMulticlasses:num":"2"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @parent ClassChange
 * @type struct<BgSettings>
 * @desc Background settings for Scene_ClassChange.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param ChangeClassSound:struct
 * @text Change Class Sound
 * @parent ClassChange
 * @type struct<Sound>
 * @desc Sound effect played when changing classes through Scene_ClassChange.
 * @default {"name:str":"Equip2","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param MainMenu:struct
 * @text Menu Access Settings
 * @parent ClassChange
 * @type struct<MenuAccess>
 * @desc Menu Access settings for Class Change.
 * @default {"Name:str":"Class","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true"}
 *
 * @param Multiclass:arraystruct
 * @text Multiclass Settings
 * @parent ClassChange
 * @type struct<Multiclass>[]
 * @desc Multiclass settings for this plugin. Each tier allows you to have separate settings.
 * @default ["{\"Name:str\":\"Primary\",\"TextColor:str\":\"6\",\"HelpDescription:json\":\"\\\"Units gain all the benefits of its primary class.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"1.00\",\"paramRate1:num\":\"1.00\",\"paramRate2:num\":\"1.00\",\"paramRate3:num\":\"1.00\",\"paramRate4:num\":\"1.00\",\"paramRate5:num\":\"1.00\",\"paramRate6:num\":\"1.00\",\"paramRate7:num\":\"1.00\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"true\",\"DebuffRates:eval\":\"true\",\"StateRates:eval\":\"true\",\"StateResistance:eval\":\"true\",\"Param\":\"\",\"ParamRates:eval\":\"true\",\"XParamRates:eval\":\"true\",\"SParamRates:eval\":\"true\",\"Attack\":\"\",\"AttackElements:eval\":\"true\",\"AttackStates:eval\":\"true\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}","{\"Name:str\":\"Subclass\",\"TextColor:str\":\"4\",\"HelpDescription:json\":\"\\\"Assign a class to this slot.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"0.10\",\"paramRate1:num\":\"0.10\",\"paramRate2:num\":\"0.10\",\"paramRate3:num\":\"0.10\",\"paramRate4:num\":\"0.10\",\"paramRate5:num\":\"0.10\",\"paramRate6:num\":\"0.10\",\"paramRate7:num\":\"0.10\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"false\",\"DebuffRates:eval\":\"false\",\"StateRates:eval\":\"false\",\"StateResistance:eval\":\"false\",\"Param\":\"\",\"ParamRates:eval\":\"false\",\"XParamRates:eval\":\"false\",\"SParamRates:eval\":\"false\",\"Attack\":\"\",\"AttackElements:eval\":\"false\",\"AttackStates:eval\":\"false\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}","{\"Name:str\":\"3rd Class\",\"TextColor:str\":\"4\",\"HelpDescription:json\":\"\\\"Assign a class to this slot.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"0.10\",\"paramRate1:num\":\"0.10\",\"paramRate2:num\":\"0.10\",\"paramRate3:num\":\"0.10\",\"paramRate4:num\":\"0.10\",\"paramRate5:num\":\"0.10\",\"paramRate6:num\":\"0.10\",\"paramRate7:num\":\"0.10\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"false\",\"DebuffRates:eval\":\"false\",\"StateRates:eval\":\"false\",\"StateResistance:eval\":\"false\",\"Param\":\"\",\"ParamRates:eval\":\"false\",\"XParamRates:eval\":\"false\",\"SParamRates:eval\":\"false\",\"Attack\":\"\",\"AttackElements:eval\":\"false\",\"AttackStates:eval\":\"false\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}","{\"Name:str\":\"4th Class\",\"TextColor:str\":\"4\",\"HelpDescription:json\":\"\\\"Assign a class to this slot.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"0.10\",\"paramRate1:num\":\"0.10\",\"paramRate2:num\":\"0.10\",\"paramRate3:num\":\"0.10\",\"paramRate4:num\":\"0.10\",\"paramRate5:num\":\"0.10\",\"paramRate6:num\":\"0.10\",\"paramRate7:num\":\"0.10\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"false\",\"DebuffRates:eval\":\"false\",\"StateRates:eval\":\"false\",\"StateResistance:eval\":\"false\",\"Param\":\"\",\"ParamRates:eval\":\"false\",\"XParamRates:eval\":\"false\",\"SParamRates:eval\":\"false\",\"Attack\":\"\",\"AttackElements:eval\":\"false\",\"AttackStates:eval\":\"false\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}","{\"Name:str\":\"5th Class\",\"TextColor:str\":\"4\",\"HelpDescription:json\":\"\\\"Assign a class to this slot.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"0.10\",\"paramRate1:num\":\"0.10\",\"paramRate2:num\":\"0.10\",\"paramRate3:num\":\"0.10\",\"paramRate4:num\":\"0.10\",\"paramRate5:num\":\"0.10\",\"paramRate6:num\":\"0.10\",\"paramRate7:num\":\"0.10\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"false\",\"DebuffRates:eval\":\"false\",\"StateRates:eval\":\"false\",\"StateResistance:eval\":\"false\",\"Param\":\"\",\"ParamRates:eval\":\"false\",\"XParamRates:eval\":\"false\",\"SParamRates:eval\":\"false\",\"Attack\":\"\",\"AttackElements:eval\":\"false\",\"AttackStates:eval\":\"false\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}","{\"Name:str\":\"6th Class\",\"TextColor:str\":\"4\",\"HelpDescription:json\":\"\\\"Assign a class to this slot.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"0.10\",\"paramRate1:num\":\"0.10\",\"paramRate2:num\":\"0.10\",\"paramRate3:num\":\"0.10\",\"paramRate4:num\":\"0.10\",\"paramRate5:num\":\"0.10\",\"paramRate6:num\":\"0.10\",\"paramRate7:num\":\"0.10\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"false\",\"DebuffRates:eval\":\"false\",\"StateRates:eval\":\"false\",\"StateResistance:eval\":\"false\",\"Param\":\"\",\"ParamRates:eval\":\"false\",\"XParamRates:eval\":\"false\",\"SParamRates:eval\":\"false\",\"Attack\":\"\",\"AttackElements:eval\":\"false\",\"AttackStates:eval\":\"false\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}","{\"Name:str\":\"7th Class\",\"TextColor:str\":\"4\",\"HelpDescription:json\":\"\\\"Assign a class to this slot.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"0.10\",\"paramRate1:num\":\"0.10\",\"paramRate2:num\":\"0.10\",\"paramRate3:num\":\"0.10\",\"paramRate4:num\":\"0.10\",\"paramRate5:num\":\"0.10\",\"paramRate6:num\":\"0.10\",\"paramRate7:num\":\"0.10\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"false\",\"DebuffRates:eval\":\"false\",\"StateRates:eval\":\"false\",\"StateResistance:eval\":\"false\",\"Param\":\"\",\"ParamRates:eval\":\"false\",\"XParamRates:eval\":\"false\",\"SParamRates:eval\":\"false\",\"Attack\":\"\",\"AttackElements:eval\":\"false\",\"AttackStates:eval\":\"false\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}","{\"Name:str\":\"8th Class\",\"TextColor:str\":\"4\",\"HelpDescription:json\":\"\\\"Assign a class to this slot.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"0.10\",\"paramRate1:num\":\"0.10\",\"paramRate2:num\":\"0.10\",\"paramRate3:num\":\"0.10\",\"paramRate4:num\":\"0.10\",\"paramRate5:num\":\"0.10\",\"paramRate6:num\":\"0.10\",\"paramRate7:num\":\"0.10\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"false\",\"DebuffRates:eval\":\"false\",\"StateRates:eval\":\"false\",\"StateResistance:eval\":\"false\",\"Param\":\"\",\"ParamRates:eval\":\"false\",\"XParamRates:eval\":\"false\",\"SParamRates:eval\":\"false\",\"Attack\":\"\",\"AttackElements:eval\":\"false\",\"AttackStates:eval\":\"false\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}","{\"Name:str\":\"9th Class\",\"TextColor:str\":\"4\",\"HelpDescription:json\":\"\\\"Assign a class to this slot.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"0.10\",\"paramRate1:num\":\"0.10\",\"paramRate2:num\":\"0.10\",\"paramRate3:num\":\"0.10\",\"paramRate4:num\":\"0.10\",\"paramRate5:num\":\"0.10\",\"paramRate6:num\":\"0.10\",\"paramRate7:num\":\"0.10\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"false\",\"DebuffRates:eval\":\"false\",\"StateRates:eval\":\"false\",\"StateResistance:eval\":\"false\",\"Param\":\"\",\"ParamRates:eval\":\"false\",\"XParamRates:eval\":\"false\",\"SParamRates:eval\":\"false\",\"Attack\":\"\",\"AttackElements:eval\":\"false\",\"AttackStates:eval\":\"false\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}","{\"Name:str\":\"10th Class\",\"TextColor:str\":\"4\",\"HelpDescription:json\":\"\\\"Assign a class to this slot.\\\"\",\"BaseParameters\":\"\",\"paramRate0:num\":\"0.10\",\"paramRate1:num\":\"0.10\",\"paramRate2:num\":\"0.10\",\"paramRate3:num\":\"0.10\",\"paramRate4:num\":\"0.10\",\"paramRate5:num\":\"0.10\",\"paramRate6:num\":\"0.10\",\"paramRate7:num\":\"0.10\",\"Rewards\":\"\",\"expRate:num\":\"0.25\",\"resourceRate:num\":\"0.25\",\"Traits\":\"\",\"Rates\":\"\",\"ElementRates:eval\":\"false\",\"DebuffRates:eval\":\"false\",\"StateRates:eval\":\"false\",\"StateResistance:eval\":\"false\",\"Param\":\"\",\"ParamRates:eval\":\"false\",\"XParamRates:eval\":\"false\",\"SParamRates:eval\":\"false\",\"Attack\":\"\",\"AttackElements:eval\":\"false\",\"AttackStates:eval\":\"false\",\"Skills\":\"\",\"AddedStypes:eval\":\"true\",\"AddedSkills:eval\":\"true\",\"Equip\":\"\",\"EquipWeapons:eval\":\"true\",\"EquipArmors:eval\":\"true\"}"]
 *
 * @param Window:struct
 * @text Window Settings
 * @parent ClassChange
 * @type struct<Window>
 * @desc Window settings for Scene_ClassChange.
 * @default {"Scene":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/right","DisplayedResources:arraystr":"[\"AP\",\"CP\",\"JP\",\"SP\"]","ConfirmAnimationID:num":"120","ConfirmAniPrimaryOffsetX:num":"0","ConfirmAniPrimaryOffsetY:num":"0","ConfirmAniSubclassOffsetX:num":"0","ConfirmAniSubclassOffsetY:num":"0","Window_ClassStatus":"","Window_ClassStatus_BgType:num":"0","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawBackRect:eval":"true","BackRectColor:str":"19","Window_ClassStatus_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2);\\nconst wh = this.mainAreaHeight();\\nconst wx = this.isRightInputMode() ? 0 : ww;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth / 2;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorLevel(this._actor, x1, lineHeight * 1);\\nthis.placeBasicGauges(this._actor, x1, lineHeight * 2);\\nthis.drawActorResources(x2, lineHeight * 0, this.innerWidth / 2);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.floor((limitHeight - ImageManager.faceHeight) / 2);\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.floor((limitHeight - dataHeight) / 2);\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorResources(x, dataY + this.lineHeight() * 1, ImageManager.faceWidth);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Reset\\n    this.resetFontSettings();\\n\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","Window_ClassTier":"","Window_ClassTier_BgType:num":"0","VocabNoClassAssigned:str":"No Class Assigned","ShiftShortcutKey:eval":"true","ShiftButtonAssistText:str":"Unassign","Window_ClassTier_ExtraJS:func":"\"// Declare Arguments\\nconst classID = arguments[0];\\nconst tier = arguments[1];\\nconst settings = arguments[2];\\nconst rect = arguments[3];\\nconst targetClass = $dataClasses[classID];\\nconst wordWrap = Imported.VisuMZ_1_MessageCore;\\nconst removeIcons = true;\\nconst fontSize = 22;\\n\\n// Create Coordinates\\nlet x = rect.x + (this.itemPadding() * 4);\\nlet y = rect.y + (this.lineHeight() * 3.25);\\nlet width = rect.width - (this.itemPadding() * 8);\\n\\n// Skill Type Access\\nif (settings.AddedStypes && ((y + this.lineHeight()) <= (rect.y + rect.height))) {\\n    let stypes = targetClass.traits.\\n        filter(trait => trait.code === Game_BattlerBase.TRAIT_STYPE_ADD).\\n        map(trait => $dataSystem.skillTypes[trait.dataId]).\\n        join(', ');\\n    let text = '\\\\\\\\C[16]%1:\\\\\\\\C[0] \\\\\\\\FS[%3]%2'.format(TextManager.skill, stypes, fontSize || 22);\\n    if (removeIcons) text = text.replace(/\\\\\\\\I\\\\[(\\\\d+)\\\\]/gi, '');\\n    if (wordWrap) text = '<WordWrap>' + text;\\n    this.drawTextEx(text, x, y, width);\\n    y += this.lineHeight();\\n}\\n\\n// Weapon Access\\nif (settings.EquipWeapons && ((y + this.lineHeight()) <= (rect.y + rect.height))) {\\n    let stypes = targetClass.traits.\\n        filter(trait => trait.code === Game_BattlerBase.TRAIT_EQUIP_WTYPE).\\n        map(trait => $dataSystem.weaponTypes[trait.dataId]).\\n        join(', ');\\n    let text = '\\\\\\\\C[16]%1:\\\\\\\\C[0] \\\\\\\\FS[%3]%2'.format(TextManager.weapon, stypes, fontSize || 22);\\n    if (removeIcons) text = text.replace(/\\\\\\\\I\\\\[(\\\\d+)\\\\]/gi, '');\\n    if (wordWrap) text = '<WordWrap>' + text;\\n    this.drawTextEx(text, x, y, width);\\n    y += this.lineHeight();\\n}\"","Window_ClassTier_RectJS:func":"\"const ww = Graphics.boxWidth - this._statusWindow.width;\\nconst wh = this.mainAreaHeight();\\nconst wx = this.isRightInputMode() ? ww : 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ClassList":"","Window_ClassList_BgType:num":"0","VocabUnassignClass:str":"Unassign Class","UnassignHelpDescription:json":"\"Remove any classes for this slot.\"","Window_ClassList_RectJS:func":"\"const ww = Graphics.boxWidth - this._statusWindow.width;\\nconst wh = this.mainAreaHeight();\\nconst wx = this.isRightInputMode() ? ww : 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 * 
 * @param Resources
 *
 * @param ClassPoints:struct
 * @text Class Points Settings
 * @parent Resources
 * @type struct<ClassPoints>
 * @desc Settings for Class Points and how they work in-game.
 * @default {"Mechanics":"","SharedResource:eval":"true","MaxResource:num":"0","Visual":"","ShowInMenus:eval":"true","Icon:num":"87","Vocabulary":"","FullText:str":"Class Points","AbbrText:str":"CP","TextFmt:str":"%1 \\c[5]%2\\c[0]%3","Gain":"","PerAction:str":"0","PerLevelUp:str":"100","PerEnemy:str":"0","AliveActors:eval":"true","Victory":"","ShowVictory:eval":"false","VictoryText:str":"%1 gains %2 %3!","AftermathActorDisplay:eval":"false","AftermathText:str":"+%1 %2"}
 *
 * @param JobPoints:struct
 * @text Job Points Settings
 * @parent Resources
 * @type struct<JobPoints>
 * @desc Settings for Job Points and how they work in-game.
 * @default {"Mechanics":"","SharedResource:eval":"false","MaxResource:num":"0","Visual":"","ShowInMenus:eval":"true","Icon:num":"188","Vocabulary":"","FullText:str":"Job Points","AbbrText:str":"JP","TextFmt:str":"%1 \\c[5]%2\\c[0]%3","Gain":"","PerAction:str":"10 + Math.randomInt(10)","PerLevelUp:str":"0","PerEnemy:str":"50 + Math.randomInt(50)","AliveActors:eval":"true","Victory":"","ShowVictory:eval":"true","VictoryText:str":"%1 gains %2 %3!","AftermathActorDisplay:eval":"true","AftermathText:str":"+%1 %2"}
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
 * @param Basics
 *
 * @param HelpDescription:json
 * @text Default Help
 * @parent Basics
 * @type note
 * @desc Default help description for all classes.
 * %1 - Class Name
 * @default "The %1 class."
 *
 * @param Icon:num
 * @text Default Icon
 * @parent Basics
 * @desc Default icon used for all classes.
 * @default 96
 *
 * @param MaintainLevels:eval
 * @text Maintain Levels?
 * @parent Basics
 * @type boolean
 * @on Each Class Same Level
 * @off Each Class Separate
 * @desc Make each class have the same level or
 * make each class have their own level?
 * @default false
 *
 * @param ChangeAdjusHpMp:eval
 * @text Change-Adjust HP/MP
 * @parent Basics
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing classes with MaxHP/MaxMP values.
 * @default true
 * 
 * @param Unlock
 * @text Class Unlocking
 *
 * @param AlwaysUnlocked:arraynum
 * @text Always Unlocked
 * @parent Unlock
 * @type class[]
 * @desc Which classes are always unlocked and available?
 * @default ["1","2","3","4"]
 *
 * @param StartingMulticlasses:num
 * @text Starting Multiclasses
 * @parent Unlock
 * @type number
 * @min 1
 * @desc How many classes can actors use at the start by default?
 * Use 1 for just the primary class.
 * @default 2
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
 * Menu Access Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuAccess:
 *
 * @param Name:str
 * @text Command Name
 * @parent Options
 * @desc Name of the 'Template' option in the Main Menu.
 * @default Class
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Template' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Template' option to the Main Menu by default?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Multiclass Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Multiclass:
 *
 * @param Name:str
 * @text Class Tier Name
 * @desc Name of this class tier.
 * @default Untitled
 * 
 * @param TextColor:str
 * @text Text Color
 * @parent Name:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param HelpDescription:json
 * @text Help Description
 * @parent Name:str
 * @type note
 * @desc Help description when this multiclass slot is picked.
 * @default "Assign a class to this slot."
 * 
 * @param BaseParameters
 * @text Base Parameter Bonuses
 * 
 * @param paramRate0:num
 * @text MaxHP
 * @parent BaseParameters
 * @desc How little of this class tier's MaxHP should be added
 * to base stats? Does not apply to Tier 1.
 * @default 0.10
 * 
 * @param paramRate1:num
 * @text MaxMP
 * @parent BaseParameters
 * @desc How little of this class tier's MaxMP should be added
 * to base stats? Does not apply to Tier 1.
 * @default 0.10
 * 
 * @param paramRate2:num
 * @text ATK
 * @parent BaseParameters
 * @desc How little of this class tier's ATK should be added
 * to base stats? Does not apply to Tier 1.
 * @default 0.10
 * 
 * @param paramRate3:num
 * @text DEF
 * @parent BaseParameters
 * @desc How little of this class tier's DEF should be added
 * to base stats? Does not apply to Tier 1.
 * @default 0.10
 * 
 * @param paramRate4:num
 * @text MAT
 * @parent BaseParameters
 * @desc How little of this class tier's MAT should be added
 * to base stats? Does not apply to Tier 1.
 * @default 0.10
 * 
 * @param paramRate5:num
 * @text MDF
 * @parent BaseParameters
 * @desc How little of this class tier's MDF should be added
 * to base stats? Does not apply to Tier 1.
 * @default 0.10
 * 
 * @param paramRate6:num
 * @text AGI
 * @parent BaseParameters
 * @desc How little of this class tier's AGI should be added
 * to base stats? Does not apply to Tier 1.
 * @default 0.10
 * 
 * @param paramRate7:num
 * @text LUK
 * @parent BaseParameters
 * @desc How little of this class tier's LUK should be added
 * to base stats? Does not apply to Tier 1.
 * @default 0.10
 * 
 * @param Rewards
 * @text Reward Rates
 * 
 * @param expRate:num
 * @text EXP
 * @parent Rewards
 * @desc How much EXP does a class in this tier earn?
 * Does not apply to Tier 1. Only for Battle Rewards.
 * @default 0.25
 * 
 * @param resourceRate:num
 * @text Resources
 * @parent Rewards
 * @desc Resource rate (ie. CP, JP) earned for this tier.
 * Does not apply to Tier 1. Only for Battle Rewards.
 * @default 0.25
 * 
 * @param Traits
 * @text Inherit Traits
 * 
 * @param Rates
 * @parent Traits
 *
 * @param ElementRates:eval
 * @text Element Rates?
 * @parent Rates
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the element rates from this class tier?
 * Does not apply to Tier 1.
 * @default false
 *
 * @param DebuffRates:eval
 * @text Debuff Rates?
 * @parent Rates
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the debuff rates from this class tier?
 * Does not apply to Tier 1.
 * @default false
 *
 * @param StateRates:eval
 * @text State Rates?
 * @parent Rates
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the state rates from this class tier?
 * Does not apply to Tier 1.
 * @default false
 *
 * @param StateResistance:eval
 * @text State Resistance?
 * @parent Rates
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the state resistances from this class tier?
 * Does not apply to Tier 1.
 * @default false
 * 
 * @param Param
 * @text Param Rates
 * @parent Traits
 *
 * @param ParamRates:eval
 * @text Base-Param Rates?
 * @parent Param
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit Base Parameter rates from this class tier?
 * Does not apply to Tier 1.
 * @default false
 *
 * @param XParamRates:eval
 * @text X-Param Rates?
 * @parent Param
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit X-Parameter rates from this class tier?
 * Does not apply to Tier 1.
 * @default false
 *
 * @param SParamRates:eval
 * @text S-Param Rates?
 * @parent Param
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit S-Parameter rates from this class tier?
 * Does not apply to Tier 1.
 * @default false
 * 
 * @param Attack
 * @parent Traits
 *
 * @param AttackElements:eval
 * @text Attack Elements?
 * @parent Attack
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the attack elements from this class tier?
 * Does not apply to Tier 1.
 * @default false
 *
 * @param AttackStates:eval
 * @text Attack States?
 * @parent Attack
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the attack states from this class tier?
 * Does not apply to Tier 1.
 * @default false
 * 
 * @param Skills
 * @parent Traits
 *
 * @param AddedStypes:eval
 * @text Added STypes?
 * @parent Skills
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the added STypes from this class tier?
 * Does not apply to Tier 1.
 * @default true
 *
 * @param AddedSkills:eval
 * @text Added Skills?
 * @parent Skills
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the added skills from this class tier?
 * Does not apply to Tier 1.
 * @default true
 * 
 * @param Equip
 * @text Equipment
 * @parent Traits
 *
 * @param EquipWeapons:eval
 * @text Equippable Weapons?
 * @parent Equip
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the equippable weapons from this class tier?
 * Does not apply to Tier 1.
 * @default true
 *
 * @param EquipArmors:eval
 * @text Equippable Armors?
 * @parent Equip
 * @type boolean
 * @on Inherit
 * @off Don't
 * @desc Inherit the equippable armors from this class tier?
 * Does not apply to Tier 1.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Equip2
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @max 100
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 * 
 * @param Scene
 * @text Scene_ClassChange
 *
 * @param EnableLayout:eval
 * @text Recommended Layout?
 * @parent Scene
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the recommended Menu Layout provided by this plugin?
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent Scene
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 * 
 * @param DisplayedResources:arraystr
 * @text Displayed Resources
 * @parent Scene
 * @type select[]
 * @option AP - Ability Points (Requires VisuMZ_2_SkillLearnSystem)
 * @value AP
 * @option CP - Class Points
 * @value CP
 * @option JP - Job Points
 * @value JP
 * @option SP - Skill Points (Requires VisuMZ_2_SkillLearnSystem)
 * @value SP
 * @desc Select which resources to display in Scene_Class's class
 * lists. Non-shared (limit: 2) resources appear in the lists.
 * @default ["AP","CP","JP","SP"]
 *
 * @param ConfirmAnimationID:num
 * @text Confirm Animation ID
 * @parent Scene
 * @type animation
 * @desc Play this animation when a class change has been made.
 * @default 120
 *
 * @param ConfirmAniPrimaryOffsetX:num
 * @text Primary Offset X
 * @parent ConfirmAnimationID:num
 * @desc Adjust the offset X of primary class animations.
 * Negative for left. Positive for right.
 * @default 0
 *
 * @param ConfirmAniPrimaryOffsetY:num
 * @text Primary Offset Y
 * @parent ConfirmAnimationID:num
 * @desc Adjust the offset Y of primary class animations.
 * Negative for up. Positive for down.
 * @default 0
 *
 * @param ConfirmAniSubclassOffsetX:num
 * @text Subclass Offset X
 * @parent ConfirmAnimationID:num
 * @desc Adjust the offset X of subclass animations.
 * Negative for left. Positive for right.
 * @default 0
 *
 * @param ConfirmAniSubclassOffsetY:num
 * @text Subclass Offset Y
 * @parent ConfirmAnimationID:num
 * @desc Adjust the offset Y of subclass animations.
 * Negative for up. Positive for down.
 * @default 0
 *
 * @param ShowClassLevel:eval
 * @text Show Class Level?
 * @parent Scene
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the class level when displaying classes?
 * Used for the windows in the Class Change menu.
 * @default true
 *
 * @param Window_ClassStatus
 *
 * @param Window_ClassStatus_BgType:num
 * @text Background Type
 * @parent Window_ClassStatus
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
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent Window_ClassStatus
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent Window_ClassStatus
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent Window_ClassStatus
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
 * @param Window_ClassStatus_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ClassStatus
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2);\nconst wh = this.mainAreaHeight();\nconst wx = this.isRightInputMode() ? 0 : ww;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent Window_ClassStatus
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth / 2;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorLevel(this._actor, x1, lineHeight * 1);\nthis.placeBasicGauges(this._actor, x1, lineHeight * 2);\nthis.drawActorResources(x2, lineHeight * 0, this.innerWidth / 2);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent Window_ClassStatus
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.floor((limitHeight - ImageManager.faceHeight) / 2);\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.floor((limitHeight - dataHeight) / 2);\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorResources(x, dataY + this.lineHeight() * 1, ImageManager.faceWidth);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent Window_ClassStatus
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Reset\n    this.resetFontSettings();\n\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param Window_ClassTier
 *
 * @param Window_ClassTier_BgType:num
 * @text Background Type
 * @parent Window_ClassTier
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
 * @param VocabNoClassAssigned:str
 * @text No Class Assigned
 * @parent Window_ClassTier
 * @desc Text used when no class is assigned to the slot.
 * @default No Class Assigned
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent Window_ClassTier
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing classes?
 * @default true
 *
 * @param ShiftButtonAssistText:str
 * @text Button Assist Text
 * @parent ShiftShortcutKey:eval
 * @desc Text used for the Button Assist Window
 * @default Unassign
 *
 * @param Window_ClassTier_ExtraJS:func
 * @text JS: Extra Data
 * @parent Window_ClassTier
 * @type note
 * @desc Code used to draw extra data if there is enough room.
 * This does not apply to basic class data and icons.
 * @default "// Declare Arguments\nconst classID = arguments[0];\nconst tier = arguments[1];\nconst settings = arguments[2];\nconst rect = arguments[3];\nconst targetClass = $dataClasses[classID];\nconst wordWrap = Imported.VisuMZ_1_MessageCore;\nconst removeIcons = true;\nconst fontSize = 22;\n\n// Create Coordinates\nlet x = rect.x + (this.itemPadding() * 4);\nlet y = rect.y + (this.lineHeight() * 3.25);\nlet width = rect.width - (this.itemPadding() * 8);\n\n// Skill Type Access\nif (settings.AddedStypes && ((y + this.lineHeight()) <= (rect.y + rect.height))) {\n    let stypes = targetClass.traits.\n        filter(trait => trait.code === Game_BattlerBase.TRAIT_STYPE_ADD).\n        map(trait => $dataSystem.skillTypes[trait.dataId]).\n        join(', ');\n    let text = '\\\\C[16]%1:\\\\C[0] \\\\FS[%3]%2'.format(TextManager.skill, stypes, fontSize || 22);\n    if (removeIcons) text = text.replace(/\\\\I\\[(\\d+)\\]/gi, '');\n    if (wordWrap) text = '<WordWrap>' + text;\n    this.drawTextEx(text, x, y, width);\n    y += this.lineHeight();\n}\n\n// Weapon Access\nif (settings.EquipWeapons && ((y + this.lineHeight()) <= (rect.y + rect.height))) {\n    let stypes = targetClass.traits.\n        filter(trait => trait.code === Game_BattlerBase.TRAIT_EQUIP_WTYPE).\n        map(trait => $dataSystem.weaponTypes[trait.dataId]).\n        join(', ');\n    let text = '\\\\C[16]%1:\\\\C[0] \\\\FS[%3]%2'.format(TextManager.weapon, stypes, fontSize || 22);\n    if (removeIcons) text = text.replace(/\\\\I\\[(\\d+)\\]/gi, '');\n    if (wordWrap) text = '<WordWrap>' + text;\n    this.drawTextEx(text, x, y, width);\n    y += this.lineHeight();\n}"
 *
 * @param Window_ClassTier_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ClassTier
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this._statusWindow.width;\nconst wh = this.mainAreaHeight();\nconst wx = this.isRightInputMode() ? ww : 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ClassList
 *
 * @param Window_ClassList_BgType:num
 * @text Background Type
 * @parent Window_ClassList
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
 * @param VocabUnassignClass:str
 * @text Unassign Class
 * @parent Window_ClassList
 * @desc Text used for an empty class slot.
 * @default Unassign Class
 *
 * @param UnassignHelpDescription:json
 * @text Help Description
 * @parent VocabUnassignClass:str
 * @type note
 * @desc Help description for unassigning a class.
 * @default "Remove any classes for this slot."
 *
 * @param Window_ClassList_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ClassList
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this._statusWindow.width;\nconst wh = this.mainAreaHeight();\nconst wx = this.isRightInputMode() ? ww : 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Class Points Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ClassPoints:
 *
 * @param Mechanics
 *
 * @param SharedResource:eval
 * @text Shared Class Points
 * @parent Mechanics
 * @type boolean
 * @on Shared Across Classes
 * @off Classes Separate
 * @desc Do you want Class Points to be shared across all classes?
 * Or do you want all classes to have their own?
 * @default false
 *
 * @param MaxResource:num
 * @text Maximum
 * @parent Mechanics
 * @type number
 * @desc What's the maximum amount of Class Points an actor can have?
 * Use 0 for unlimited Class Points.
 * @default 0
 *
 * @param Visual
 *
 * @param ShowInMenus:eval
 * @text Show In Menus?
 * @parent Visual
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Do you wish to show Class Points in menus that allow them?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @parent Visual
 * @desc What is the icon you want to use to represent Class Points?
 * @default 87
 *
 * @param Vocabulary
 *
 * @param FullText:str
 * @text Full Text
 * @parent Vocabulary
 * @desc The full text of how Class Points appears in-game.
 * @default Class Points
 *
 * @param AbbrText:str
 * @text Abbreviated Text
 * @parent Vocabulary
 * @desc The abbreviation of how Class Points appears in-game.
 * @default CP
 *
 * @param TextFmt:str
 * @text Menu Text Format
 * @parent Vocabulary
 * @desc What is the text format for it to be displayed in windows.
 * %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 * @default %1 \c[5]%2\c[0]%3
 *
 * @param Gain
 *
 * @param PerAction:str
 * @text Per Action Hit
 * @parent Gain
 * @desc How many Class Points should an actor gain per action?
 * You may use code.
 * @default 0
 *
 * @param PerLevelUp:str
 * @text Per Level Up
 * @parent Gain
 * @desc How many Class Points should an actor gain per level up?
 * You may use code.
 * @default 100
 *
 * @param PerEnemy:str
 * @text Per Enemy Defeated
 * @parent Gain
 * @desc How many Class Points should an actor gain per enemy?
 * You may use code.
 * @default 0
 *
 * @param AliveActors:eval
 * @text Alive Actors?
 * @parent PerEnemy:str
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Do actors have to be alive to receive Class Points from
 * defeated enemies?
 * @default true
 *
 * @param Victory
 *
 * @param ShowVictory:eval
 * @text Show During Victory?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how much CP an actor has earned in battle during the
 * victory phase?
 * @default true
 *
 * @param VictoryText:str
 * @text Victory Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * @default %1 gains %2 %3!
 *
 * @param AftermathActorDisplay:eval
 * @text Aftermath Display?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Requires VisuMZ_3_VictoryAftermath. Show Class Points as
 * the main acquired resource in the actor windows?
 * @default true
 *
 * @param AftermathText:str
 * @text Aftermath Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Earned, %2 - Abbr, %3 - Full Text
 * @default +%1 %2
 *
 */
/* ----------------------------------------------------------------------------
 * Job Points Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~JobPoints:
 *
 * @param Mechanics
 *
 * @param SharedResource:eval
 * @text Shared Job Points
 * @parent Mechanics
 * @type boolean
 * @on Shared Across Classes
 * @off Classes Separate
 * @desc Do you want Job Points to be shared across all classes?
 * Or do you want all classes to have their own?
 * @default false
 *
 * @param MaxResource:num
 * @text Maximum
 * @parent Mechanics
 * @type number
 * @desc What's the maximum amount of Job Points an actor can have?
 * Use 0 for unlimited Job Points.
 * @default 0
 *
 * @param Visual
 *
 * @param ShowInMenus:eval
 * @text Show In Menus?
 * @parent Visual
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Do you wish to show Job Points in menus that allow them?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @parent Visual
 * @desc What is the icon you want to use to represent Job Points?
 * @default 188
 *
 * @param Vocabulary
 *
 * @param FullText:str
 * @text Full Text
 * @parent Vocabulary
 * @desc The full text of how Job Points appears in-game.
 * @default Job Points
 *
 * @param AbbrText:str
 * @text Abbreviated Text
 * @parent Vocabulary
 * @desc The abbreviation of how Job Points appears in-game.
 * @default JP
 *
 * @param TextFmt:str
 * @text Menu Text Format
 * @parent Vocabulary
 * @desc What is the text format for it to be displayed in windows.
 * %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 * @default %1 \c[5]%2\c[0]%3
 *
 * @param Gain
 *
 * @param PerAction:str
 * @text Per Action Hit
 * @parent Gain
 * @desc How many Job Points should an actor gain per action?
 * You may use code.
 * @default 10 + Math.randomInt(10)
 *
 * @param PerLevelUp:str
 * @text Per Level Up
 * @parent Gain
 * @desc How many Job Points should an actor gain per level up?
 * You may use code.
 * @default 0
 *
 * @param PerEnemy:str
 * @text Per Enemy Defeated
 * @parent Gain
 * @desc How many Job Points should an actor gain per enemy?
 * You may use code.
 * @default 50 + Math.randomInt(50)
 *
 * @param AliveActors:eval
 * @text Alive Actors?
 * @parent PerEnemy:str
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Do actors have to be alive to receive Job Points from
 * defeated enemies?
 * @default true
 *
 * @param Victory
 *
 * @param ShowVictory:eval
 * @text Show During Victory?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how much JP an actor has earned in battle during the
 * victory phase?
 * @default true
 *
 * @param VictoryText:str
 * @text Victory Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * @default %1 gains %2 %3!
 *
 * @param AftermathActorDisplay:eval
 * @text Aftermath Display?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Requires VisuMZ_3_VictoryAftermath. Show Job Points as
 * the main acquired resource in the actor windows?
 * @default true
 *
 * @param AftermathText:str
 * @text Aftermath Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Earned, %2 - Abbr, %3 - Full Text
 * @default +%1 %2
 *
 */
//=============================================================================

const _0x559e70=_0x3343;(function(_0x227cb6,_0x18c318){const _0x4650fe=_0x3343,_0x632098=_0x227cb6();while(!![]){try{const _0x1b5e73=parseInt(_0x4650fe(0x3b2))/0x1*(-parseInt(_0x4650fe(0x418))/0x2)+parseInt(_0x4650fe(0x470))/0x3+-parseInt(_0x4650fe(0x343))/0x4+-parseInt(_0x4650fe(0x3d4))/0x5+parseInt(_0x4650fe(0x254))/0x6*(-parseInt(_0x4650fe(0x45c))/0x7)+-parseInt(_0x4650fe(0x50a))/0x8*(parseInt(_0x4650fe(0x357))/0x9)+parseInt(_0x4650fe(0x262))/0xa;if(_0x1b5e73===_0x18c318)break;else _0x632098['push'](_0x632098['shift']());}catch(_0x5750a4){_0x632098['push'](_0x632098['shift']());}}}(_0x238b,0x8c8c7));var label='ClassChangeSystem',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x559e70(0x513)](function(_0x3b1373){const _0x4ab8d9=_0x559e70;return _0x3b1373[_0x4ab8d9(0x2a5)]&&_0x3b1373[_0x4ab8d9(0x450)][_0x4ab8d9(0x2df)]('['+label+']');})[0x0];function _0x238b(){const _0x5f4657=['drawActorJobPoints','sbdKZ','classDescription','checkForNewUnlockedClasses','sDvcR','releaseUnequippableItems','removeUnlockedClass','onMulticlassOk','BattleManager_gainExp','drawActorClassPoints','naturalUnlockClass','ATpbG','getActorClassFaceIndex','drawPicture','multiclass','Window_ClassList_BgType','center','Window_ClassTier_BgType','gainStartingClassPoints','actorClassCharacterName','VCUZI','Game_BattlerBase_stateRate','bNfzI','addChild','ClassCharaName','SystemEnableClassChangeSystemMenu','StartingClassPoints','Game_Actor_setBattlerImage','qygxc','GOsOS','JobPointsAdd','SyCGd','setJobPoints','_ClassChangeSystem_MainMenu','gaiFh','onDatabaseLoaded','MaintainLevels','ConfirmAniPrimaryOffsetY','Lasnh','_context','ChangeAdjusHpMp','setup','attackElements','wbrEi','JHBZr','jobPoints','Skill-%1-%2','IbfTc','optExtraExp','Game_Actor_traitObjects','params','ShowMainMenu','subject','3PvmdjH','currentClass','applyItemUserEffect','QTmlG','isClassChangeTierRestricted','woMyw','paramRate%1','dataId','round','dimColor2','parameters','General','BlHRf','battlerName','startClassChangeAnimation','maxLevel','YXFMX','initClassChangeUnlocks','_rewards','ClassPointsSet','BgSettings','OqnCt','_classChangeTierRestrictions','armorTypes','VictoryText','EnemyClassPoints','debuffRate','log','deselect','pagedown','drawGauge','setMainMenuClassChangeSystemEnabled','DisplayedResources','Weapon-%1-%2','3217595WGtEsb','adjustSprite','NUM','level','Eifgw','playBuzzerSound','IWOrn','multiclassId','bind','Icon','SkillPoints','gainMulticlassRewardPoints','enabled','ParseActorNotetags','classLevelUp','sERZQ','padding','mIcDS','StartClassJobPoints','ClassChangeAnimation','NHPbU','SystemShowClassChangeSystemMenu','constructor','oqXxA','getMulticlasses','TargetGainClassPoints','PIXdn','jobPointsTotal','Game_BattlerBase_xparam','Window_ClassTier_ExtraJS','shift','Game_Actor_setMenuImage','Game_Actor_tradeItemWithParty','Game_Actor_changeClass','registerCommand','uYMVn','UserGainJobPoints','Game_Actor_setBattlePortrait','Window_ClassStatus_BgType','AttackStates','tradeItemWithParty','drawTextEx','getClassChangeAnimationID','drawUpdatedParamName','isEnabled','multiclasses','pop','_multiclassTiers','classPointsFmt','jfHCv','currentExt','LbOmK','GAWnI','bsJER','_priorityBattlePortrait','pageup','drawItem','UserGainClassPoints','TextColor','popScene','JJgDB','setTempActor','trim','xparam','AHxiW','setClassPoints','contents','iTVeu','621632bcGVVt','addJobPoints','ZRTvQ','onClassListCancel','Actors','CLASS_CHANGE_ADJUST_HP_MP','initialize','ClassPoints','VybUj','clear','isWordWrapEnabled','Game_BattlerBase_addedSkills','item','update','getMenuImage','innerWidth','classLevel','dlVkb','refresh','GzdQH','RPoqo','iwfHJ','isActor','qNyrm','drawActorSkillPoints','tXDPb','(%1)','checkMulticlasses','mainAreaHeight','QWFqO','ClassPointsRate','TextCodeClassNames','allMembers','xtIHL','Class','jobPointsIcon','ext','addMulticlassTiers','Game_Battler_gainSilentTp','EzRzK','gainRewardsClassPoints','Game_Actor_equips','isBottomHelpMode','_cache','drawUpdatedBeforeParamValue','getActorUnlockedClasses','OtLzk','needsPageButtons','_priorityCharacterName','ParamArrow','WOKZG','updatedLayoutStyle','map','_exp','dMzUD','oNHLO','description','onBattleStart','cxoWk','add','innerHeight','processCursorMove','unlockClass','checkShiftRemoveShortcut','setupClassChangeSystem','Armor-%1-%2','paramBaseForClass','mjpSt','300769qRaUJU','exp','getSkillPoints','_priorityCharacterIndex','learnings','push','Scene_Boot_onDatabaseLoaded','updateHelp','refreshNoMenuImage','loseClassPoints','left','isRightInputMode','flfdh','statusWindowRect','visibleResources','StartingMulticlasses','ClassPointsGain','anWOL','param','Ipyco','1704630eRaOMH','ParamValueFontSize','classListWindowRect','playOkSound','setHandler','_multiclasses','YNmTc','classChangeMenuCommand','yxmGk','actorParams','TRAIT_EQUIP_ATYPE','sort','setBackgroundType','createHelpWindow','VisuMZ_2_ClassChangeSystem','endBattle','getClassPoints','loadPicture','drawItemActorMenuImage','PerEnemy','HelpDescription','faceName','buttonAssistOffset3','createClassTierWindow','fOTVf','oldOd','ACtRA','gainClassPointsForMulticlasses','expGaugeColor1','process_VisuMZ_ClassChangeSystem','forceSelect','_backSprite2','initClassChangeSystem','JobPointsRate','previousActor','_backSprite1','LayoutStyle','dimColor1','FullText','BattleManager_makeRewards','RYpCV','getMulticlassAtTier','isRecommendedLayout','_priorityBattlerName','loseMulticlassTiers','lZrgV','_windowLayer','fBQSj','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Game_BattlerBase_attackStates','JobPointsGain','bitmap','_highestTier','hideAdditionalSprites','initMulticlass','paramBase','initClassChangeSystemMainMenu','itemRectWithPadding','BLXoE','sparam','BattleCore','classChange_multiclass_ShiftHelp','JcYaX','createAnimationDummySprite','actorClassFaceName','gyuOE','ZyEgg','getActorClassMenuPortrait','registerActorClassImages','iconIndex','jCUXW','characterIndex','GBHeB','saPfh','drawBigItemIcon','attackStatesRate','ARRAYNUM','ClassBattlePortrait','fBgGq','ShowVictory','resetTextColor','isMainMenuClassChangeSystemVisible','createBackground','stateRate','_priorityMenuImage','LBeDQ','Game_Actor_characterName','arePageButtonsEnabled','drawParamText','wAezU','ParseAllNotetags','StartingJobPoints','from','wsJAV','isBattleMember','CLASS_CHANGE_SHOW_CLASS_LEVEL','classChange_multiclass_remove','initClassChangeRestrictions','levelUpGainJobPoints','isMainMenuCoreMenuImageOptionAvailable','Parse_Notetags_Basic','RegExp','drawUpdatedAfterParamValue','textSizeEx','addCommand','isEquipWtypeOk','applyClassPoints','drawParameterList','drawText','clamp','changeMulticlass','setTier','_classTierWindow','mJaAa','min','ConvertParams','jobPointsAbbr','smoothSelect','EquipWeapons','drawBigItemImage','LfcSN','elementRate','imageSmoothingEnabled','nIKUb','setActor','skill','traitObjects','deactivate','NrzMd','KvIqW','resetFontSettings','traits','Game_BattlerBase_attackStatesRate','Actor-%1-Class-%2','updateClassLearnedSkills','paintOpacity','TiNhV','classChange_multiclass_noClass','_classChangeTier','_classId','loadTitle2','setMulticlassTiers','DrawPortraitJS','show','skillId','getJobPoints','classPointsFull','MulticlassChangeActorClass','tier','mhpNx','makeRewardsClassPoints','JobPointsSet','Classes','SParamRates','2186264vaZwQx','StateResistance','itemHeight','initClassLevels','\x5cC[16]%1:\x5cC[0]\x20\x5cFS[%3]%2','equips','setMenuImage','ARRAYEVAL','createJS','filter','frames','Window_MenuCommand_addOriginalCommands','concat','actorClassCharacterIndex','DPinA','skillTypes','ExtDisplayedParams','setHelpWindow','wBjYe','Game_BattlerBase_elementRate','callUpdateHelp','JobPointsLose','State-%1-%2','maintainLevels','changeTextColor','drawActorResources','Xvwtz','Game_Actor_faceIndex','_tier','_priorityFaceName','format','resourceRate','loseJobPoints','QDJiC','Settings','applyJobPoints','Show','index','join','oQjZU','jSKTq','_classPoints','buttonAssistSlotWindowShift','actor','playClassChange','UgfQk','setBattlePortrait','expParams','Parse_ClassIcons','xGEhD','Window_ClassStatus_RectJS','gainSilentTp','ClassUnlockRemoveActor','splice','drawUpdatedParamValueDiff','antiEquipsCacheClear_BattleCore_ClassChangeSystem','getClassChangeBackColor2','pow','classChange_multiclass_remove_help','getActorClassCharacterName','(+%1)','ClassChangeRemoveRestrictTier','VisuMZ_1_BattleCore','JSON','getClassIdWithName','mwzLy','toUpperCase','gainStartingJobPoints','gainRewardsJobPoints','StartClassClassPoints','TUOTL','createClassChangeAnimation','currentSymbol','MvpcD','OYGIH','prepareRefreshItemsEquipsCoreLayout','removeChild','isShiftRemoveShortcutEnabled','systemColor','ClassFaceName','EnableLayout','Umpme','VisuMZ_2_SkillLearnSystem','highestMulticlassTier','ClassChangeSystem','KZEZU','MAX_SAFE_INTEGER','drawClassExpGauge','addClassPoints','kikTl','SALvG','classPointsTotal','_buttonAssistWindow','ZpHAR','ParamRates','getUnlockedClasses','AlwaysUnlocked','Game_Battler_onBattleStart','iconWidth','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','mpltP','addLoadListener','uiMenuStyle','XNSpb','QXcGd','BgFilename2','indexOf','Game_BattlerBase_addedSkillTypes','iYbfA','Name','changeClass','isSceneBattle','jjUqi','uiHelpPosition','boxWidth','classPointsAbbr','_commandWindow','changePaintOpacity','rightArrowWidth','mNdYa','loadTitle1','currentClassLevelExp','sBvnO','MaxResource','applyDatabaseAutoColor','UvXOj','rNeji','Game_Actor_characterIndex','_tp','isAlive','Limit','TargetGainJobPoints','classPointsVisible','onClassListOk','Tier','mhp','isAutoColorAffected','code','Multiclass','playStaticSe','BackRectColor','LtiPn','Game_BattlerBase_stateResistSet','_unlockedClasses','exit','Game_Actor_setCharacterImage','floor','ElementRates','EquipArmors','BgFilename1','FOcLg','totalMulticlass','_statusWindow','AOBmM','mYAbz','weapon','textColor','loadFace','XUrVv','enemy','iOjsz','Game_BattlerBase_isEquipWtypeOk','Game_BattlerBase_isEquipAtypeOk','aQzRZ','ARRAYSTRUCT','classPoints','isPlaytest','uiInputPosition','getActorClassBattlerName','_subject','wTOEh','Game_Actor_faceName','max','paramRate','SkillLearnSystem','_classLevel','actorClassBattlePortrait','hkqge','Job','recoverAll','ShiftButtonAssistText','getInputButtonString','PUzFM','AddedStypes','finalExpRate','attackStates','72XrxDKI','ISCRG','makeRewards','refreshActorPortrait','earnedClassPoints','TAFMM','levelUp','Window','mGNtV','displayRewardsClassPoints','drawClassPoints','drawClassLevel','ClassPointsAdd','BattleManager_endBattle','29868150XiLzXA','drawJobPoints','classIcon','Scene_Menu_createCommandWindow','drawActorFace','_multiclassCheck','functionName','MenuPortraits','actorClassFaceIndex','Class-%1-%2','#%1','xEbzl','TierOnlyClass','Window_ClassTier_RectJS','paramchangeTextColor','levelUpGainClassPoints','paramValueByName','CTYBQ','_updateClassLearnedSkills','battleMembers','Game_Actor_paramBase','isClassExpGaugeDrawn','VisuMZ_0_CoreEngine','setFaceImage','call','phrTQ','LvExpGauge','getActorClassFaceName','jqqKH','iaHWM','_helpWindow','active','_priorityFaceIndex','actorId','Game_Actor_levelUp','AbbrText','weaponTypes','applyItemClassChangeSystemUserEffect','niSVE','length','match','getActorClassCharacterIndex','process_VisuMZ_ClassChangeSystem_Notetags','GDaNj','<WordWrap>','Scene_Menu_onPersonalOk','mChhe','createClassListWindow','createCommandWindow','isPlaying','nextActor','MulticlassLowerLimit','JobPoints','MhqHe','classAdjustHpMp','ARRAYSTR','DrawIcons','expForClassLevel','wLLSL','gainJobPoints','OJdhf','checkForAutoClassUnlocks','PerLevelUp','drawExtraContents','name','ARRAYFUNC','drawItemDarkRect','status','jobPointsFmt','ConfirmAnimationID','_animations','deadMembers','Game_Actor_setup','lineHeight','MBAUT','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20value\x20=\x200;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20value;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','STR','addOriginalCommands','blt','forceRemoveClassChangeAnimations','szJRn','findMulticlassTier','VisuMZ_1_MainMenuCore','commandPersonal','ClassPointsLose','scaleSprite','mEbTs','gainJobPointsForMulticlasses','apply','Tiers','ClassChangeAddRestrictTier','levelUpGainAbilityPoints','ConfirmAniSubclassOffsetX','paramValueFontSize','AvhGl','ChangeClassSound','armor','mainAreaTop','PerAction','AkoKh','wZrRI','classTierWindowRect','actorClassBattlerName','isMainMenuClassChangeSystemEnabled','version','levelUpGainSkillPoints','UOAeY','width','actorClassMenuPortrait','Game_System_initialize','isClassAutoUnlockRequirementsMet','changeClassExp','Game_Actor_getMenuImage','replace','mmp','onActorChange','_tempActor','isEquipAtypeOk','remove','nextClassLevelExp','gainClassPoints','prototype','WIaLB','applyClassChangeSystemUserEffect','isClassChangeCommandEnabled','includes','addClassChangeSystemCommandAutomatically','buttonAssistKey3','getActorClassBattlePortrait','ZzuHm','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','changeExp','addedSkillTypes','_earnedClassPoints','_actor','setHp','gradientFillRect','isUseSkillsStatesCoreUpdatedLayout','getAbilityPoints','maxLvGaugeColor1','Window_Base_databaseObjectName','classPointsIcon','setBattlerImage','height','PYXmH','prepareDrawActorFace','setText','TextFmt','parse','_scene','createKeyJS','classPointsRate','_targets','earnedJobPoints','StartingClassTier','RestrictClassChangeTier','create','AliveActors','test','Param','split','rkuBz','pHNOh','determineActiveWindow','jobPointsFull','UASFQ','none','\x5cI[%1]','note','cancel','faceIndex','addedSkills','zKGAI','UnassignHelpDescription','JDijx','ParseClassNotetags','\x5cI[%1]%2','graphicType','Game_BattlerBase_debuffRate','addWindow','TRAIT_EQUIP_WTYPE','characterName','mOWrF','ARRAYJSON','isMVAnimation','VocabUnassignClass','isClassChangeCommandVisible','onMenuImageLoad','qcgaL','_ClassChangeSystem_preventLevelUpGain','StateRates','drawClassResources','ConfirmAniSubclassOffsetY','activate','classChange','refreshActor','getBackgroundOpacity','Game_BattlerBase_sparam','_classListWindow','members','SharedResource','ShiftShortcutKey','reduce','makeDeepCopy','drawFadedItemBackground','dFRDm','DebuffRates','makeCommandList','_wordWrap','gainMulticlassExp','kCyan','canShiftRemoveClass','_earnedJobPoints','Points','processShiftRemoveShortcut','maxTp','getColor','AbilityPoints','ActorUnlockedClasses','initClassPoints','jobPointsRate','setMp','refreshCursor','loadSystem','Rsjtk','2457936YsoMJH','CoreEngine','shown','cXcvf','iconHeight','removeClassChangeTierRestriction','inBattle','Game_Party_initialize','cdfPu','ZPPpL','MbhBO','_classIDs','clearParamPlus','initJobPoints','getBattlePortraitFilename','jobPointsVisible','itemPadding','chrfc','hpRate','displayRewards','9JEgJwc','gJNpR','makeRewardsJobPoints','ClassMenuPortrait','MjbjD','displayRewardsJobPoints','applyMulticlassObjects','updateStatusWindow','ZMvmo','right','jkhbh','addClassChangeSystemCommand','updateClassLevel','highestTier','databaseObjectName','centerSprite','FUNC','Game_Actor_setFaceImage','addClassChangeTierRestriction','Game_BattlerBase_paramRate','ClassBattlerName','Actor-%1-%2','getClassChangeTiersOnly','ShowClassLevel','_list','JGxdK','Window_ClassList_RectJS','setMainMenuClassChangeSystemVisible','Game_Actor_getBattlePortraitFilename','updateClassChangeAnimations','classExpRate','hide','rxwQJ','Enable','MainMenu','VisuMZ_1_MessageCore','newPage','_jobPoints'];_0x238b=function(){return _0x5f4657;};return _0x238b();}VisuMZ[label][_0x559e70(0x52c)]=VisuMZ[label][_0x559e70(0x52c)]||{},VisuMZ[_0x559e70(0x4e3)]=function(_0x3ba3d4,_0x35ecfd){const _0x5c26b1=_0x559e70;for(const _0x1ec0c9 in _0x35ecfd){if(_0x1ec0c9['match'](/(.*):(.*)/i)){const _0x216352=String(RegExp['$1']),_0x39c7ae=String(RegExp['$2'])[_0x5c26b1(0x1dc)]()[_0x5c26b1(0x412)]();let _0x30743c,_0x446840,_0x2f47f2;switch(_0x39c7ae){case _0x5c26b1(0x3d6):_0x30743c=_0x35ecfd[_0x1ec0c9]!==''?Number(_0x35ecfd[_0x1ec0c9]):0x0;break;case _0x5c26b1(0x4bc):_0x446840=_0x35ecfd[_0x1ec0c9]!==''?JSON[_0x5c26b1(0x2f6)](_0x35ecfd[_0x1ec0c9]):[],_0x30743c=_0x446840[_0x5c26b1(0x44c)](_0x25c142=>Number(_0x25c142));break;case'EVAL':_0x30743c=_0x35ecfd[_0x1ec0c9]!==''?eval(_0x35ecfd[_0x1ec0c9]):null;break;case _0x5c26b1(0x511):_0x446840=_0x35ecfd[_0x1ec0c9]!==''?JSON['parse'](_0x35ecfd[_0x1ec0c9]):[],_0x30743c=_0x446840[_0x5c26b1(0x44c)](_0x2e2f3f=>eval(_0x2e2f3f));break;case _0x5c26b1(0x1d9):_0x30743c=_0x35ecfd[_0x1ec0c9]!==''?JSON[_0x5c26b1(0x2f6)](_0x35ecfd[_0x1ec0c9]):'';break;case _0x5c26b1(0x319):_0x446840=_0x35ecfd[_0x1ec0c9]!==''?JSON[_0x5c26b1(0x2f6)](_0x35ecfd[_0x1ec0c9]):[],_0x30743c=_0x446840['map'](_0x33c9c9=>JSON[_0x5c26b1(0x2f6)](_0x33c9c9));break;case _0x5c26b1(0x367):_0x30743c=_0x35ecfd[_0x1ec0c9]!==''?new Function(JSON[_0x5c26b1(0x2f6)](_0x35ecfd[_0x1ec0c9])):new Function('return\x200');break;case _0x5c26b1(0x2a3):_0x446840=_0x35ecfd[_0x1ec0c9]!==''?JSON[_0x5c26b1(0x2f6)](_0x35ecfd[_0x1ec0c9]):[],_0x30743c=_0x446840[_0x5c26b1(0x44c)](_0xab994=>new Function(JSON[_0x5c26b1(0x2f6)](_0xab994)));break;case _0x5c26b1(0x2ae):_0x30743c=_0x35ecfd[_0x1ec0c9]!==''?String(_0x35ecfd[_0x1ec0c9]):'';break;case _0x5c26b1(0x299):_0x446840=_0x35ecfd[_0x1ec0c9]!==''?JSON[_0x5c26b1(0x2f6)](_0x35ecfd[_0x1ec0c9]):[],_0x30743c=_0x446840[_0x5c26b1(0x44c)](_0x55781a=>String(_0x55781a));break;case'STRUCT':_0x2f47f2=_0x35ecfd[_0x1ec0c9]!==''?JSON[_0x5c26b1(0x2f6)](_0x35ecfd[_0x1ec0c9]):{},_0x30743c=VisuMZ[_0x5c26b1(0x4e3)]({},_0x2f47f2);break;case _0x5c26b1(0x23e):_0x446840=_0x35ecfd[_0x1ec0c9]!==''?JSON[_0x5c26b1(0x2f6)](_0x35ecfd[_0x1ec0c9]):[],_0x30743c=_0x446840['map'](_0x237176=>VisuMZ['ConvertParams']({},JSON['parse'](_0x237176)));break;default:continue;}_0x3ba3d4[_0x216352]=_0x30743c;}}return _0x3ba3d4;},(_0x49fe20=>{const _0x39e74d=_0x559e70,_0x50f269=_0x49fe20[_0x39e74d(0x2a2)];for(const _0x285e93 of dependencies){if(_0x39e74d(0x23d)!=='iXjXo'){if(!Imported[_0x285e93]){alert(_0x39e74d(0x4a0)[_0x39e74d(0x528)](_0x50f269,_0x285e93)),SceneManager[_0x39e74d(0x22a)]();break;}}else{_0x29fa35=_0x4bd68b||'left';const _0x26af9d='\x5cI[%1]'['format'](_0x2a527e[_0x39e74d(0x43b)]),_0x2883be=_0x2b3cc0[_0x39e74d(0x2a6)],_0x11ff72=_0x2883be['format'](_0x4e4da6,_0x2d5670[_0x39e74d(0x4e4)],_0x26af9d,_0x5c6979[_0x39e74d(0x306)]),_0x20950d=this['textSizeEx'](_0x11ff72)[_0x39e74d(0x2cd)];if(_0x35c55a===_0x39e74d(0x466))_0x31db00+=0x0;else _0x3e5b35===_0x39e74d(0x38d)?_0x697769+=_0x816607[_0x39e74d(0x3ba)]((_0x5fff4f-_0x20950d)/0x2):_0x4ebc29+=_0x952a5e-_0x20950d;this[_0x39e74d(0x3fd)](_0x11ff72,_0x4269c6,_0x7a279c);}}const _0x3f1e7e=_0x49fe20[_0x39e74d(0x450)];if(_0x3f1e7e[_0x39e74d(0x28a)](/\[Version[ ](.*?)\]/i)){const _0x925145=Number(RegExp['$1']);if(_0x925145!==VisuMZ[label][_0x39e74d(0x2ca)]){if(_0x39e74d(0x214)!=='HcYYu')alert(_0x39e74d(0x1fd)['format'](_0x50f269,_0x925145)),SceneManager[_0x39e74d(0x22a)]();else{if(this[_0x39e74d(0x229)]===_0x3d9079)this[_0x39e74d(0x3c3)]();return this[_0x39e74d(0x229)];}}}if(_0x3f1e7e[_0x39e74d(0x28a)](/\[Tier[ ](\d+)\]/i)){const _0x527cdd=Number(RegExp['$1']);if(_0x527cdd<tier)alert(_0x39e74d(0x2e4)[_0x39e74d(0x528)](_0x50f269,_0x527cdd,tier)),SceneManager[_0x39e74d(0x22a)]();else{if(_0x39e74d(0x42f)==='xywBn'){if(this[_0x39e74d(0x42e)]())this['_multiclassCheck']='SParamRates';let _0x335a6f=_0x10f6ac[_0x39e74d(0x1ee)][_0x39e74d(0x327)][_0x39e74d(0x27a)](this,_0x305900);if(this[_0x39e74d(0x42e)]())this[_0x39e74d(0x267)]=_0x428bee;return _0x335a6f;}else tier=Math['max'](_0x527cdd,tier);}}VisuMZ['ConvertParams'](VisuMZ[label][_0x39e74d(0x52c)],_0x49fe20[_0x39e74d(0x3bc)]);})(pluginData),PluginManager[_0x559e70(0x3f6)](pluginData['name'],'ClassUnlockForActor',_0x3613a7=>{const _0x105dc2=_0x559e70;VisuMZ[_0x105dc2(0x4e3)](_0x3613a7,_0x3613a7);const _0x1d60a5=_0x3613a7['Actors'][_0x105dc2(0x44c)](_0x22f45b=>$gameActors[_0x105dc2(0x535)](_0x22f45b)),_0x80c8b1=_0x3613a7[_0x105dc2(0x508)];for(const _0x4272f4 of _0x1d60a5){if(!_0x4272f4)continue;for(const _0x2aeab3 of _0x80c8b1){_0x4272f4[_0x105dc2(0x456)](_0x2aeab3);}}}),PluginManager[_0x559e70(0x3f6)](pluginData[_0x559e70(0x2a2)],'ClassUnlockForGlobal',_0x5c70c6=>{const _0x193c0b=_0x559e70;VisuMZ[_0x193c0b(0x4e3)](_0x5c70c6,_0x5c70c6);const _0xb40e46=_0x5c70c6[_0x193c0b(0x508)];for(const _0x13fd4c of _0xb40e46){$gameParty['unlockClass'](_0x13fd4c);}}),PluginManager[_0x559e70(0x3f6)](pluginData[_0x559e70(0x2a2)],_0x559e70(0x53e),_0x513ed4=>{const _0x1ef4ce=_0x559e70;VisuMZ[_0x1ef4ce(0x4e3)](_0x513ed4,_0x513ed4);const _0x2309e6=_0x513ed4['Actors']['map'](_0x29cde7=>$gameActors[_0x1ef4ce(0x535)](_0x29cde7)),_0x58edf1=_0x513ed4[_0x1ef4ce(0x508)];for(const _0x535ffa of _0x2309e6){if(_0x1ef4ce(0x361)==='jkhbh'){if(!_0x535ffa)continue;for(const _0x361d12 of _0x58edf1){_0x1ef4ce(0x34b)!==_0x1ef4ce(0x531)?_0x535ffa[_0x1ef4ce(0x383)](_0x361d12):_0x3b11b3[_0x1ef4ce(0x383)](_0x2588be);}}else _0x1e223c[_0x1ef4ce(0x1ee)][_0x1ef4ce(0x497)]['call'](this),this[_0x1ef4ce(0x506)](),this[_0x1ef4ce(0x440)](),this[_0x1ef4ce(0x359)](),this[_0x1ef4ce(0x1de)]();}}),PluginManager[_0x559e70(0x3f6)](pluginData['name'],'ClassUnlockRemoveGlobal',_0x443847=>{const _0x50e27a=_0x559e70;VisuMZ[_0x50e27a(0x4e3)](_0x443847,_0x443847);const _0xd3b4c9=_0x443847[_0x50e27a(0x508)];for(const _0x410238 of _0xd3b4c9){_0x50e27a(0x20a)!==_0x50e27a(0x20a)?(_0x50938d['ClassChangeSystem']['Game_System_initialize'][_0x50e27a(0x27a)](this),this[_0x50e27a(0x4a8)]()):$gameParty['removeUnlockedClass'](_0x410238);}}),PluginManager[_0x559e70(0x3f6)](pluginData[_0x559e70(0x2a2)],_0x559e70(0x2bc),_0x3d49d6=>{const _0x5cc36c=_0x559e70;VisuMZ[_0x5cc36c(0x4e3)](_0x3d49d6,_0x3d49d6);const _0x4c68aa=_0x3d49d6[_0x5cc36c(0x41c)][_0x5cc36c(0x44c)](_0x12848b=>$gameActors[_0x5cc36c(0x535)](_0x12848b)),_0x1950b3=_0x3d49d6[_0x5cc36c(0x2bb)];for(const _0x3d7acc of _0x4c68aa){if(!_0x3d7acc)continue;for(const _0x41becc of _0x1950b3){_0x3d7acc[_0x5cc36c(0x369)](_0x41becc);}}}),PluginManager['registerCommand'](pluginData[_0x559e70(0x2a2)],_0x559e70(0x1d7),_0x2d4b43=>{const _0x252a0a=_0x559e70;VisuMZ[_0x252a0a(0x4e3)](_0x2d4b43,_0x2d4b43);const _0x408b18=_0x2d4b43[_0x252a0a(0x41c)][_0x252a0a(0x44c)](_0x13f9d1=>$gameActors[_0x252a0a(0x535)](_0x13f9d1)),_0x5f01d6=_0x2d4b43[_0x252a0a(0x2bb)];for(const _0x4ec953 of _0x408b18){if(!_0x4ec953)continue;for(const _0xbfd155 of _0x5f01d6){_0x4ec953[_0x252a0a(0x348)](_0xbfd155);}}}),PluginManager['registerCommand'](pluginData[_0x559e70(0x2a2)],_0x559e70(0x503),_0x4663cf=>{const _0x2a574c=_0x559e70;VisuMZ[_0x2a574c(0x4e3)](_0x4663cf,_0x4663cf);const _0x13babb=_0x4663cf[_0x2a574c(0x41c)][_0x2a574c(0x44c)](_0x505143=>$gameActors[_0x2a574c(0x535)](_0x505143)),_0x570ec7=_0x4663cf[_0x2a574c(0x220)],_0x5b902d=_0x4663cf['ClassID'];for(const _0x2a2b9a of _0x13babb){if(!_0x2a2b9a)continue;_0x2a2b9a['changeMulticlass'](_0x5b902d,_0x570ec7);}}),PluginManager[_0x559e70(0x3f6)](pluginData[_0x559e70(0x2a2)],'MulticlassRaiseLimit',_0x416032=>{const _0x1c693a=_0x559e70;VisuMZ['ConvertParams'](_0x416032,_0x416032);const _0x4461bd=_0x416032[_0x1c693a(0x41c)][_0x1c693a(0x44c)](_0x1af156=>$gameActors[_0x1c693a(0x535)](_0x1af156)),_0x9b5c5c=_0x416032[_0x1c693a(0x21c)];for(const _0x3bad1e of _0x4461bd){if(_0x1c693a(0x3a3)===_0x1c693a(0x3a3)){if(!_0x3bad1e)continue;_0x3bad1e[_0x1c693a(0x43d)](_0x9b5c5c);}else this[_0x1c693a(0x41e)](...arguments);}}),PluginManager[_0x559e70(0x3f6)](pluginData[_0x559e70(0x2a2)],_0x559e70(0x295),_0x42bcdb=>{const _0x27575c=_0x559e70;VisuMZ[_0x27575c(0x4e3)](_0x42bcdb,_0x42bcdb);const _0x43ca3=_0x42bcdb['Actors'][_0x27575c(0x44c)](_0xfa6e3c=>$gameActors[_0x27575c(0x535)](_0xfa6e3c)),_0x563946=_0x42bcdb[_0x27575c(0x21c)];for(const _0x59b44c of _0x43ca3){if(!_0x59b44c)continue;_0x59b44c['loseMulticlassTiers'](_0x563946);}}),PluginManager['registerCommand'](pluginData['name'],'MulticlassSetLimit',_0x1162b8=>{const _0x513a8a=_0x559e70;VisuMZ[_0x513a8a(0x4e3)](_0x1162b8,_0x1162b8);const _0x5d967e=_0x1162b8[_0x513a8a(0x41c)][_0x513a8a(0x44c)](_0x57fd16=>$gameActors[_0x513a8a(0x535)](_0x57fd16)),_0x3b8e00=_0x1162b8[_0x513a8a(0x21c)];for(const _0x3e60f4 of _0x5d967e){if(!_0x3e60f4)continue;_0x3e60f4[_0x513a8a(0x4fd)](_0x3b8e00);}}),PluginManager[_0x559e70(0x3f6)](pluginData[_0x559e70(0x2a2)],_0x559e70(0x46c),_0x33b3e3=>{const _0x26ec6e=_0x559e70;VisuMZ['ConvertParams'](_0x33b3e3,_0x33b3e3);const _0x2fdd4c=_0x33b3e3[_0x26ec6e(0x41c)][_0x26ec6e(0x44c)](_0x227c1f=>$gameActors['actor'](_0x227c1f)),_0x532e83=_0x33b3e3[_0x26ec6e(0x508)],_0x56066f=_0x33b3e3[_0x26ec6e(0x337)];for(const _0x477192 of _0x2fdd4c){if(_0x26ec6e(0x420)==='VybUj'){if(!_0x477192)continue;for(const _0x5e3c6f of _0x532e83){_0x477192['gainClassPoints'](_0x56066f,_0x5e3c6f);}}else{const _0x479efc=this[_0x26ec6e(0x210)]();this[_0x26ec6e(0x522)](_0x3b9767[_0x26ec6e(0x1e8)]());if(_0x3e5314['VisuMZ_0_CoreEngine']){const _0x67f57f=_0x59cd55['CoreEngine'][_0x26ec6e(0x52c)]['UI'][_0x26ec6e(0x449)];this['drawText'](_0x67f57f,_0x3e018a,_0x242186,_0x479efc,'center');}else this['drawText']('→',_0x5d1b43,_0x2748f8,_0x479efc,'center');}}}),PluginManager['registerCommand'](pluginData[_0x559e70(0x2a2)],_0x559e70(0x260),_0x207a70=>{const _0x3c9ca8=_0x559e70;VisuMZ['ConvertParams'](_0x207a70,_0x207a70);const _0xb6acc4=_0x207a70[_0x3c9ca8(0x41c)][_0x3c9ca8(0x44c)](_0x367e56=>$gameActors['actor'](_0x367e56)),_0x5d3c73=_0x207a70['Classes'],_0x164d4c=_0x207a70[_0x3c9ca8(0x337)];for(const _0x35371f of _0xb6acc4){if(!_0x35371f)continue;for(const _0x23653c of _0x5d3c73){_0x3c9ca8(0x39a)!=='MAGqo'?_0x35371f['addClassPoints'](_0x164d4c,_0x23653c):(this[_0x3c9ca8(0x271)](_0x2de62f),this['levelUpGainJobPoints'](_0x16967f),_0x437e88['VisuMZ_2_SkillLearnSystem']&&(this['levelUpGainAbilityPoints'](_0x4a221c),this[_0x3c9ca8(0x2cb)](_0x360d3e)));}}}),PluginManager[_0x559e70(0x3f6)](pluginData[_0x559e70(0x2a2)],_0x559e70(0x2b6),_0x140ff6=>{const _0x467a41=_0x559e70;VisuMZ[_0x467a41(0x4e3)](_0x140ff6,_0x140ff6);const _0x4c847c=_0x140ff6[_0x467a41(0x41c)][_0x467a41(0x44c)](_0x2c8950=>$gameActors[_0x467a41(0x535)](_0x2c8950)),_0x2c531b=_0x140ff6['Classes'],_0x38c07e=_0x140ff6[_0x467a41(0x337)];for(const _0x328ceb of _0x4c847c){if(_0x467a41(0x227)!=='oGfNl'){if(!_0x328ceb)continue;for(const _0xc6b573 of _0x2c531b){_0x328ceb[_0x467a41(0x465)](_0x38c07e,_0xc6b573);}}else{if(!_0x487c2b[_0x467a41(0x4cf)])return;if(!_0x2d5c9b[_0x37d778])return;this[_0x467a41(0x277)]()&&this['drawClassExpGauge'](_0x18d468,_0xab1e67,_0x440fd5,_0x423b2f),this[_0x467a41(0x522)](_0x643803[_0x467a41(0x1e8)]()),this[_0x467a41(0x4dc)](_0x177cfe['levelA'],_0x3b425f,_0x548fbc,0x30),this['resetTextColor'](),this[_0x467a41(0x4dc)](_0x2a0e9e[_0x467a41(0x428)](_0x40ab37),_0x7b9dca+0x54,_0x3a961a,0x24,_0x467a41(0x360));}}}),PluginManager['registerCommand'](pluginData[_0x559e70(0x2a2)],_0x559e70(0x3c5),_0xc69faa=>{const _0x50eb74=_0x559e70;VisuMZ[_0x50eb74(0x4e3)](_0xc69faa,_0xc69faa);const _0xf57fca=_0xc69faa[_0x50eb74(0x41c)][_0x50eb74(0x44c)](_0x312101=>$gameActors[_0x50eb74(0x535)](_0x312101)),_0x1aac25=_0xc69faa[_0x50eb74(0x508)],_0x3a094b=_0xc69faa[_0x50eb74(0x337)];for(const _0x597ec3 of _0xf57fca){if(!_0x597ec3)continue;for(const _0x1c8410 of _0x1aac25){if('YNZFp'==='YNZFp')_0x597ec3[_0x50eb74(0x415)](_0x3a094b,_0x1c8410);else{this[_0x50eb74(0x37c)]===_0x3c1b0e&&this[_0x50eb74(0x350)]();const _0x3df71c=_0x5dd939['ClassChangeSystem'][_0x50eb74(0x52c)][_0x50eb74(0x296)];return _0x3df71c[_0x50eb74(0x32a)]?_0x235729=0x0:_0x5d8797=_0x45ab9c||this['currentClass']()['id'],this[_0x50eb74(0x37c)][_0x20d356]=this[_0x50eb74(0x37c)][_0x22117e]||0x0,_0x27c8ee[_0x50eb74(0x3ba)](this[_0x50eb74(0x37c)][_0x18c64e]);}}}}),PluginManager['registerCommand'](pluginData[_0x559e70(0x2a2)],_0x559e70(0x4a2),_0x474a56=>{const _0x142eaa=_0x559e70;VisuMZ[_0x142eaa(0x4e3)](_0x474a56,_0x474a56);const _0x8df621=_0x474a56[_0x142eaa(0x41c)]['map'](_0x4fc3b5=>$gameActors['actor'](_0x4fc3b5)),_0x51dcc7=_0x474a56[_0x142eaa(0x508)],_0x321c83=_0x474a56['Points'];for(const _0x2b9eda of _0x8df621){if(_0x142eaa(0x3eb)!==_0x142eaa(0x3eb))this['unlockClass'](_0x2dc319);else{if(!_0x2b9eda)continue;for(const _0x2978cf of _0x51dcc7){_0x2b9eda['gainJobPoints'](_0x321c83,_0x2978cf);}}}}),PluginManager['registerCommand'](pluginData[_0x559e70(0x2a2)],_0x559e70(0x39b),_0x2b44bc=>{const _0x1b9e38=_0x559e70;VisuMZ[_0x1b9e38(0x4e3)](_0x2b44bc,_0x2b44bc);const _0x23d47b=_0x2b44bc[_0x1b9e38(0x41c)]['map'](_0x369e57=>$gameActors[_0x1b9e38(0x535)](_0x369e57)),_0x236e86=_0x2b44bc['Classes'],_0x36f9eb=_0x2b44bc[_0x1b9e38(0x337)];for(const _0x277c48 of _0x23d47b){if(!_0x277c48)continue;for(const _0x427b33 of _0x236e86){_0x277c48['addJobPoints'](_0x36f9eb,_0x427b33);}}}),PluginManager[_0x559e70(0x3f6)](pluginData['name'],_0x559e70(0x51f),_0x3f86b2=>{const _0x20d3ec=_0x559e70;VisuMZ[_0x20d3ec(0x4e3)](_0x3f86b2,_0x3f86b2);const _0x52e709=_0x3f86b2[_0x20d3ec(0x41c)][_0x20d3ec(0x44c)](_0x3d9ba4=>$gameActors[_0x20d3ec(0x535)](_0x3d9ba4)),_0x27d2de=_0x3f86b2[_0x20d3ec(0x508)],_0xe1a98b=_0x3f86b2[_0x20d3ec(0x337)];for(const _0x1e529a of _0x52e709){if(!_0x1e529a)continue;for(const _0x4cd7b3 of _0x27d2de){if(_0x20d3ec(0x32f)!=='dFRDm')return this[_0x20d3ec(0x236)](_0x126c6e(_0x1fe994));else _0x1e529a[_0x20d3ec(0x52a)](_0xe1a98b,_0x4cd7b3);}}}),PluginManager[_0x559e70(0x3f6)](pluginData[_0x559e70(0x2a2)],_0x559e70(0x507),_0x348f84=>{const _0xa62f68=_0x559e70;VisuMZ['ConvertParams'](_0x348f84,_0x348f84);const _0x541499=_0x348f84[_0xa62f68(0x41c)][_0xa62f68(0x44c)](_0x45ff9a=>$gameActors[_0xa62f68(0x535)](_0x45ff9a)),_0x509f5e=_0x348f84['Classes'],_0x4de755=_0x348f84['Points'];for(const _0x449bd5 of _0x541499){if(!_0x449bd5)continue;for(const _0x33e100 of _0x509f5e){_0x449bd5[_0xa62f68(0x39d)](_0x4de755,_0x33e100);}}}),PluginManager['registerCommand'](pluginData['name'],_0x559e70(0x396),_0x4f8da8=>{const _0xcd6e10=_0x559e70;VisuMZ['ConvertParams'](_0x4f8da8,_0x4f8da8),$gameSystem['setMainMenuClassChangeSystemEnabled'](_0x4f8da8[_0xcd6e10(0x378)]);}),PluginManager[_0x559e70(0x3f6)](pluginData['name'],_0x559e70(0x3e9),_0xe9a368=>{const _0x221188=_0x559e70;VisuMZ['ConvertParams'](_0xe9a368,_0xe9a368),$gameSystem[_0x221188(0x372)](_0xe9a368[_0x221188(0x52e)]);}),VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x268)]=function(){const _0x4da503=_0x559e70;try{}catch(_0x15e040){if($gameTemp[_0x4da503(0x240)]())console[_0x4da503(0x3cd)](_0x15e040);}},VisuMZ['ClassChangeSystem'][_0x559e70(0x462)]=Scene_Boot[_0x559e70(0x2db)][_0x559e70(0x3a0)],Scene_Boot[_0x559e70(0x2db)][_0x559e70(0x3a0)]=function(){const _0x5e6545=_0x559e70;VisuMZ[_0x5e6545(0x1ee)][_0x5e6545(0x462)][_0x5e6545(0x27a)](this),this['process_VisuMZ_ClassChangeSystem']();},Scene_Boot[_0x559e70(0x2db)][_0x559e70(0x48d)]=function(){const _0x4b89c9=_0x559e70;this[_0x4b89c9(0x28c)]();},VisuMZ[_0x559e70(0x1ee)]['RegExp']={'StartingClassPoints':/<STARTING (?:CLASS POINTS|CP):[ ](.*)>/i,'StartClassClassPoints':/<CLASS (.*) STARTING (?:CLASS POINTS|CP):[ ](.*)>/gi,'UserGainClassPoints':/<(?:CLASS POINTS|CP|USER CLASS POINTS|USER CP) GAIN:[ ](.*)>/i,'TargetGainClassPoints':/<TARGET (?:CLASS POINTS|CP) GAIN:[ ](.*)>/i,'EnemyClassPoints':/<(?:CLASS POINTS|CP):[ ](.*)>/i,'ClassPointsRate':/<(?:CLASS POINTS|CP) RATE:[ ](\d+)([%％])>/i,'StartingJobPoints':/<STARTING (?:JOB POINTS|JP):[ ](.*)>/i,'StartClassJobPoints':/<CLASS (.*) STARTING (?:JOB POINTS|JP):[ ](.*)>/gi,'UserGainJobPoints':/<(?:JOB POINTS|JP|USER JOB POINTS|USER JP) GAIN:[ ](.*)>/i,'TargetGainJobPoints':/<TARGET (?:JOB POINTS|JP) GAIN:[ ](.*)>/i,'EnemyJobPoints':/<(?:JOB POINTS|JP):[ ](.*)>/i,'JobPointsRate':/<(?:JOB POINTS|JP) RATE:[ ](\d+)([%％])>/i,'ClassDescription':/<(?:HELP|DESCRIPTION|HELP DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|DESCRIPTION|HELP DESCRIPTION)>/i,'ClassIcon':/<(?:ICON|ICON INDEX):[ ](\d+)>/i,'classPicture':/<(?:CLASS|CLASS CHANGE) (?:PICTURE|FILENAME):[ ](.*)>/i,'bigPicture':/<PICTURE:[ ](.*)>/i,'ClassFaceName':/<(.*)[ ]FACE:[ ](.*),[ ](\d+)>/gi,'ClassCharaName':/<(.*)[ ](?:CHARACTER|CHARA|SPRITE):[ ](.*),[ ](\d+)>/gi,'ClassBattlerName':/<(.*)[ ](?:BATTLER|SV_ACTOR|SV ACTOR|SVACTOR):[ ](.*)>/gi,'ClassMenuPortrait':/<(.*)[ ]MENU (?:PORTRAIT|IMAGE):[ ](.*)>/gi,'ClassBattlePortrait':/<(.*)[ ]BATTLE (?:PORTRAIT|IMAGE):[ ](.*)>/gi,'ActorUnlockedClasses':/<(?:UNLOCK|UNLOCKED) (?:CLASS|CLASSES):[ ](.*)>/gi,'AutoUnlockRequirements':/<(?:AUTO|AUTOMATIC) UNLOCK REQUIREMENTS>\s*([\s\S]*)\s*<\/(?:AUTO|AUTOMATIC) UNLOCK REQUIREMENTS>/i,'StartingMulticlasses':/<STARTING MULTICLASSES:[ ](\d+)>/i,'StartingClassTier':/<STARTING TIER[ ](\d+)[ ]CLASS:[ ](.*)>/gi,'RestrictClassChangeTier':/<RESTRICT CLASS CHANGE (?:TIER|TIERS):[ ](.*)>/gi,'TierOnlyClass':/<CLASS CHANGE (?:TIER|TIERS) ONLY:[ ](.*)>/gi,'ClassChangeAnimation':/<CLASS CHANGE ANIMATION:[ ](\d+)>/i},Scene_Boot[_0x559e70(0x2db)][_0x559e70(0x28c)]=function(){const _0x51ee89=_0x559e70;if(VisuMZ[_0x51ee89(0x4ca)])return;for(const _0x2d542f of $dataActors){if(!_0x2d542f)continue;ImageManager[_0x51ee89(0x4b4)](_0x2d542f);}for(const _0x146028 of $dataClasses){if(!_0x146028)continue;VisuMZ[_0x51ee89(0x1ee)]['Parse_Notetags_Basic'](_0x146028);}},VisuMZ[_0x559e70(0x1ee)]['JS']={},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x512)]=function(_0x28b1c3,_0x18f5b5,_0x1d9a12){const _0x2013f7=_0x559e70,_0x54257e=_0x28b1c3['note'];if(_0x54257e['match'](_0x1d9a12)){if(_0x2013f7(0x2c0)===_0x2013f7(0x2c0)){const _0x2e218e=String(RegExp['$1']),_0xe06d4e=_0x2013f7(0x2ad)[_0x2013f7(0x528)](_0x2e218e),_0x4a869c=VisuMZ[_0x2013f7(0x1ee)][_0x2013f7(0x2f8)](_0x28b1c3,_0x18f5b5);VisuMZ[_0x2013f7(0x1ee)]['JS'][_0x4a869c]=new Function(_0xe06d4e);}else{if(this[_0x2013f7(0x527)]!==_0x1b6e5e)return this[_0x2013f7(0x527)];return _0x5ad28d[_0x2013f7(0x27d)](this)||_0x3ece1e[_0x2013f7(0x1ee)][_0x2013f7(0x245)][_0x2013f7(0x27a)](this);}}},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x2f8)]=function(_0x50fb9b,_0x35acd6){const _0x283d1e=_0x559e70;let _0x2293fd='';if($dataActors[_0x283d1e(0x2df)](_0x50fb9b))_0x2293fd=_0x283d1e(0x36c)[_0x283d1e(0x528)](_0x50fb9b['id'],_0x35acd6);if($dataClasses[_0x283d1e(0x2df)](_0x50fb9b))_0x2293fd=_0x283d1e(0x26b)['format'](_0x50fb9b['id'],_0x35acd6);if($dataSkills[_0x283d1e(0x2df)](_0x50fb9b))_0x2293fd=_0x283d1e(0x3ab)[_0x283d1e(0x528)](_0x50fb9b['id'],_0x35acd6);if($dataItems[_0x283d1e(0x2df)](_0x50fb9b))_0x2293fd='Item-%1-%2'[_0x283d1e(0x528)](_0x50fb9b['id'],_0x35acd6);if($dataWeapons['includes'](_0x50fb9b))_0x2293fd=_0x283d1e(0x3d3)['format'](_0x50fb9b['id'],_0x35acd6);if($dataArmors[_0x283d1e(0x2df)](_0x50fb9b))_0x2293fd=_0x283d1e(0x459)[_0x283d1e(0x528)](_0x50fb9b['id'],_0x35acd6);if($dataEnemies[_0x283d1e(0x2df)](_0x50fb9b))_0x2293fd='Enemy-%1-%2'[_0x283d1e(0x528)](_0x50fb9b['id'],_0x35acd6);if($dataStates[_0x283d1e(0x2df)](_0x50fb9b))_0x2293fd=_0x283d1e(0x520)[_0x283d1e(0x528)](_0x50fb9b['id'],_0x35acd6);return _0x2293fd;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x3e1)]=VisuMZ[_0x559e70(0x3e1)],VisuMZ[_0x559e70(0x3e1)]=function(_0x2c9ae6){const _0x2f606f=_0x559e70;VisuMZ[_0x2f606f(0x1ee)][_0x2f606f(0x3e1)][_0x2f606f(0x27a)](this,_0x2c9ae6),ImageManager[_0x2f606f(0x4b4)](_0x2c9ae6);},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x311)]=VisuMZ[_0x559e70(0x311)],VisuMZ['ParseClassNotetags']=function(_0x25c4a2){const _0x189069=_0x559e70;VisuMZ[_0x189069(0x1ee)][_0x189069(0x311)][_0x189069(0x27a)](this,_0x25c4a2),VisuMZ[_0x189069(0x1ee)][_0x189069(0x4d4)](_0x25c4a2),VisuMZ[_0x189069(0x1ee)][_0x189069(0x53a)](_0x25c4a2);},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x4d4)]=function(_0x5f3919){const _0x3c0415=_0x559e70;_0x5f3919[_0x3c0415(0x4b5)]=ImageManager[_0x3c0415(0x264)]||0x0,_0x5f3919['description']=TextManager[_0x3c0415(0x37f)][_0x3c0415(0x528)](_0x5f3919['name']||'');const _0x3fcfe7=VisuMZ['ClassChangeSystem']['RegExp'],_0x13ba64=_0x5f3919[_0x3c0415(0x30a)];_0x13ba64[_0x3c0415(0x28a)](_0x3fcfe7['ClassIcon'])&&(_0x5f3919[_0x3c0415(0x4b5)]=Number(RegExp['$1'])),_0x13ba64[_0x3c0415(0x28a)](_0x3fcfe7['ClassDescription'])&&(_0x5f3919[_0x3c0415(0x450)]=String(RegExp['$1']));},VisuMZ['ClassChangeSystem']['Parse_ClassIcons']=function(_0x595932){const _0x1aa78c=_0x559e70;_0x595932[_0x1aa78c(0x2a2)][_0x1aa78c(0x28a)](/\\I\[(\d+)\]/i)&&(_0x595932[_0x1aa78c(0x4b5)]=Number(RegExp['$1']));if(Imported[_0x1aa78c(0x278)]){if(VisuMZ[_0x1aa78c(0x344)][_0x1aa78c(0x52c)]['UI'][_0x1aa78c(0x437)]){const _0x2713e7=_0x1aa78c(0x312);_0x595932[_0x1aa78c(0x2a2)]=_0x2713e7[_0x1aa78c(0x528)](_0x595932[_0x1aa78c(0x4b5)],_0x595932[_0x1aa78c(0x2a2)]);}else _0x595932[_0x1aa78c(0x2a2)]=_0x595932[_0x1aa78c(0x2a2)][_0x1aa78c(0x2d3)](/\x1bI\[(\d+)\]/gi,''),_0x595932[_0x1aa78c(0x2a2)]=_0x595932[_0x1aa78c(0x2a2)][_0x1aa78c(0x2d3)](/\\I\[(\d+)\]/gi,'');}},DataManager[_0x559e70(0x445)]=function(_0x20838a){const _0x1ceb52=_0x559e70;if(!_0x20838a)return[];let _0x421729=[];return _0x421729=_0x421729['concat'](_0x20838a[_0x1ceb52(0x3ec)]()[_0x1ceb52(0x44c)](_0x317328=>_0x317328['id'])),_0x421729=_0x421729[_0x1ceb52(0x516)](_0x20838a[_0x1ceb52(0x1f9)]()),_0x421729=_0x421729[_0x1ceb52(0x516)]($gameParty[_0x1ceb52(0x1f9)]()),_0x421729=_0x421729[_0x1ceb52(0x516)](VisuMZ['ClassChangeSystem'][_0x1ceb52(0x52c)][_0x1ceb52(0x3bd)][_0x1ceb52(0x1fa)]),_0x421729=_0x421729[_0x1ceb52(0x513)]((_0x33b707,_0x3f28d9,_0x3f0451)=>_0x3f0451[_0x1ceb52(0x204)](_0x33b707)===_0x3f28d9),_0x421729[_0x1ceb52(0x47b)](function(_0x5ddaef,_0x1c163b){return _0x5ddaef-_0x1c163b;}),_0x421729[_0x1ceb52(0x44c)](_0x717164=>$dataClasses[_0x717164])[_0x1ceb52(0x2d8)](null);},DataManager[_0x559e70(0x380)]=function(_0x1a7d3c){const _0x37b6a5=_0x559e70,_0x2e5ec2=[],_0x34bb4c=DataManager[_0x37b6a5(0x445)](_0x1a7d3c);for(const _0x3768d6 of $dataClasses){if(_0x37b6a5(0x217)==='RgTIS')this['highestTier']()>0x1?(this[_0x37b6a5(0x4e0)][_0x37b6a5(0x4ff)](),this[_0x37b6a5(0x4e0)][_0x37b6a5(0x323)](),this['_classListWindow']['hide'](),this[_0x37b6a5(0x328)][_0x37b6a5(0x4ef)](),this['_statusWindow'][_0x37b6a5(0x411)](null)):this['popScene']();else{if(!_0x3768d6)continue;if(_0x34bb4c[_0x37b6a5(0x2df)](_0x3768d6))continue;this[_0x37b6a5(0x2d0)](_0x1a7d3c,_0x3768d6)&&(_0x37b6a5(0x53b)===_0x37b6a5(0x4c5)?_0x17bb0e[_0x37b6a5(0x333)](_0x2dcdbb):_0x2e5ec2[_0x37b6a5(0x461)](_0x3768d6['id']));}}return _0x2e5ec2;},DataManager[_0x559e70(0x2d0)]=function(_0x32aa95,_0x337547){const _0x52b550=_0x559e70;if(!_0x32aa95)return![];if(!_0x337547)return![];const _0xc50a06=VisuMZ[_0x52b550(0x1ee)][_0x52b550(0x4d5)],_0x5a7f3c=_0x337547[_0x52b550(0x30a)];if(_0x5a7f3c[_0x52b550(0x28a)](_0xc50a06['AutoUnlockRequirements'])){const _0xf5aacb=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x560e48 of _0xf5aacb){let _0x5b5120=0x0;if(_0x560e48[_0x52b550(0x28a)](/(.*):[ ](.*)/i)){const _0x2d13ad=String(RegExp['$1']),_0x5c4218=String(RegExp['$2']);if(_0x2d13ad[_0x52b550(0x28a)](/CLASS[ ](\d+)/i))_0x5b5120=Number(RegExp['$1']);else{if(_0x2d13ad[_0x52b550(0x28a)](/CLASS[ ](.*)/i))_0x5b5120=this[_0x52b550(0x1da)](RegExp['$1']);else{if(_0x2d13ad['match'](/\b(?:AP|CP|JP|SP)\b/i)){if('oNHLO'===_0x52b550(0x44f)){const _0x11c01e=_0x2d13ad[_0x52b550(0x1dc)]()[_0x52b550(0x412)](),_0x1cc74d=Number(_0x5c4218)||0x0;if(Imported['VisuMZ_2_SkillLearnSystem']){if(_0x52b550(0x3ac)!==_0x52b550(0x52b)){if(_0x11c01e==='AP'){if('fOTVf'===_0x52b550(0x488)){const _0x416686=_0x32aa95[_0x52b550(0x2ec)]();if(_0x416686<_0x1cc74d)return![];}else this[_0x52b550(0x35e)]();}else{if(_0x11c01e==='SP'){const _0x507162=_0x32aa95['getSkillPoints']();if(_0x507162<_0x1cc74d)return![];}}}else this['_multiclasses'][_0x1c7c0c]=_0x5264e0[_0x52b550(0x1da)](_0x76ede7);}if(Imported[_0x52b550(0x47e)]){if(_0x11c01e==='CP'){if(_0x52b550(0x3d8)!=='sOfwK'){const _0x43e5f0=_0x32aa95[_0x52b550(0x480)]();if(_0x43e5f0<_0x1cc74d)return![];}else{if(this['_unlockedClasses']===_0x4349d7)this['initClassChangeUnlocks']();return this[_0x52b550(0x229)];}}else{if(_0x11c01e==='JP'){if(_0x52b550(0x4f0)===_0x52b550(0x4f0)){const _0x4bc32b=_0x32aa95['getJobPoints']();if(_0x4bc32b<_0x1cc74d)return![];}else _0x4b3a55=_0x4b596b(_0x412b42['$1']);}}}}else{const _0x46b6b2=_0x6545cf[_0x52b550(0x1ee)]['Settings'][_0x52b550(0x25b)];if(_0x46b6b2['Window_ClassList_RectJS'])return _0x46b6b2[_0x52b550(0x371)][_0x52b550(0x27a)](this);const _0xd22c14=_0x48bce3[_0x52b550(0x20c)]-this['_statusWindow'][_0x52b550(0x2cd)],_0x3f2191=this[_0x52b550(0x434)](),_0x87d1cc=this[_0x52b550(0x467)]()?_0xd22c14:0x0,_0x3f9721=this[_0x52b550(0x2c3)]();return new _0x3b2edb(_0x87d1cc,_0x3f9721,_0xd22c14,_0x3f2191);}}}}if(_0x5c4218['match'](/LEVEL[ ](\d+)/i)){const _0x23891a=Number(RegExp['$1']);if(_0x32aa95[_0x52b550(0x428)](_0x5b5120)<_0x23891a)return![];}else{if(_0x5c4218['match'](/(\d+)[ ]CP/i)){if(_0x52b550(0x202)!==_0x52b550(0x202)){_0x1eecea!==''?this['_priorityBattlePortrait']=_0x15b45d:this[_0x52b550(0x40a)]=_0x1f36a1;if(_0x2f7c59[_0x52b550(0x209)]()&&_0x549ab8[_0x52b550(0x275)]()[_0x52b550(0x2df)](this)){const _0x4a1e88=_0x340246[_0x52b550(0x2f7)][_0x52b550(0x232)];if(_0x4a1e88)_0x4a1e88[_0x52b550(0x257)](this);}}else{const _0x2e356d=Number(RegExp['$1']);if(_0x32aa95[_0x52b550(0x480)](_0x5b5120)<_0x2e356d)return![];}}else{if(_0x5c4218[_0x52b550(0x28a)](/(\d+)[ ]JP/i)){if(_0x52b550(0x410)==='JJgDB'){const _0x56fb12=Number(RegExp['$1']);if(_0x32aa95[_0x52b550(0x501)](_0x5b5120)<_0x56fb12)return![];}else this[_0x52b550(0x2e7)]=this[_0x52b550(0x480)](),this['_earnedJobPoints']=this['getJobPoints']();}else{if(_0x5c4218[_0x52b550(0x28a)](/(\d+)[ ]AP/i)){if(!Imported[_0x52b550(0x1ec)])continue;const _0xe3446f=Number(RegExp['$1']);if(_0x32aa95[_0x52b550(0x2ec)](_0x5b5120)<_0xe3446f)return![];}else{if(_0x5c4218['match'](/(\d+)[ ]SP/i)){const _0x30eb6a=Number(RegExp['$1']);if(_0x32aa95[_0x52b550(0x45e)](_0x5b5120)<_0x30eb6a)return![];}}}}}}}return!![];}return![];},DataManager[_0x559e70(0x36d)]=function(_0x71a21e){const _0x269595=_0x559e70;if(!_0x71a21e)return[];const _0x2adf95=VisuMZ[_0x269595(0x1ee)][_0x269595(0x4d5)],_0x2085d5=_0x71a21e[_0x269595(0x30a)];let _0x4621f0=[];const _0x432c8f=_0x2085d5[_0x269595(0x28a)](_0x2adf95[_0x269595(0x26e)]);if(_0x432c8f){if(_0x269595(0x233)==='FQItt')this[_0x269595(0x443)]&&this[_0x269595(0x42e)]()&&_0x53b1de[_0x269595(0x349)]()?this[_0x269595(0x21a)]=(this[_0x269595(0x21a)]+_0x116b3e)['clamp'](0x0,this[_0x269595(0x339)]()):_0x3c0acd[_0x269595(0x1ee)][_0x269595(0x43e)][_0x269595(0x27a)](this,_0x2f05dc);else{for(const _0x5c938b of _0x432c8f){if(_0x269595(0x2b8)===_0x269595(0x2b8)){if(!_0x5c938b)continue;_0x5c938b[_0x269595(0x28a)](_0x2adf95['TierOnlyClass']);const _0x4ed54c=String(RegExp['$1'])[_0x269595(0x302)](',')['map'](_0x434c6f=>Number(_0x434c6f))['remove'](null)[_0x269595(0x2d8)](undefined)[_0x269595(0x2d8)](NaN);_0x4621f0=_0x4621f0[_0x269595(0x516)](_0x4ed54c);}else{const _0xa11c34=_0x403ae9[_0x269595(0x1ee)][_0x269595(0x52c)][_0x269595(0x224)][_0x269595(0x289)];return _0x4d35be['from']({'length':_0xa11c34},(_0x333f80,_0x5d6b7a)=>_0x5d6b7a+0x1);}}return _0x4621f0;}}else{const _0x1771d7=VisuMZ[_0x269595(0x1ee)][_0x269595(0x52c)]['Multiclass']['length'];return Array[_0x269595(0x4cc)]({'length':_0x1771d7},(_0x5024ec,_0x38bfb5)=>_0x38bfb5+0x1);}},DataManager[_0x559e70(0x1da)]=function(_0x1bc7ae){const _0x2640ff=_0x559e70;_0x1bc7ae=_0x1bc7ae['toUpperCase']()[_0x2640ff(0x412)](),this['_classIDs']=this['_classIDs']||{};if(this[_0x2640ff(0x34e)][_0x1bc7ae])return this[_0x2640ff(0x34e)][_0x1bc7ae];for(const _0x12a82f of $dataClasses){if('xvwAR'===_0x2640ff(0x238)){const _0x49bc90=_0x2624dd[_0x2640ff(0x30a)];if(_0x49bc90[_0x2640ff(0x28a)](_0x51bd65)){const _0xaac30d=_0x25467a(_0x21123f['$1']),_0x3384f6=_0x2640ff(0x2ad)[_0x2640ff(0x528)](_0xaac30d),_0x55d713=_0x34306d['ClassChangeSystem'][_0x2640ff(0x2f8)](_0x2b41ce,_0x22363a);_0x225dbe[_0x2640ff(0x1ee)]['JS'][_0x55d713]=new _0x405681(_0x3384f6);}}else{if(!_0x12a82f)continue;let _0x5a2cda=_0x12a82f[_0x2640ff(0x2a2)];_0x5a2cda=_0x5a2cda[_0x2640ff(0x2d3)](/\x1I\[(\d+)\]/gi,''),_0x5a2cda=_0x5a2cda[_0x2640ff(0x2d3)](/\\I\[(\d+)\]/gi,''),this[_0x2640ff(0x34e)][_0x5a2cda['toUpperCase']()['trim']()]=_0x12a82f['id'];}}return this[_0x2640ff(0x34e)][_0x1bc7ae]||0x0;},ImageManager[_0x559e70(0x2ef)]=VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x52c)][_0x559e70(0x41f)][_0x559e70(0x3dd)],ImageManager['jobPointsIcon']=VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x52c)]['JobPoints'][_0x559e70(0x3dd)],ImageManager[_0x559e70(0x264)]=VisuMZ['ClassChangeSystem']['Settings']['General']['Icon'],ImageManager[_0x559e70(0x4b0)]={},ImageManager['actorClassFaceIndex']={},ImageManager[_0x559e70(0x390)]={},ImageManager[_0x559e70(0x517)]={},ImageManager[_0x559e70(0x2c8)]={},ImageManager['actorClassMenuPortrait']={},ImageManager[_0x559e70(0x24a)]={},ImageManager[_0x559e70(0x4b4)]=function(_0x11168f){const _0x1f82bd=_0x559e70;if(!_0x11168f)return;const _0x4e3c26=VisuMZ[_0x1f82bd(0x1ee)]['RegExp'],_0x4bd5d6=_0x11168f[_0x1f82bd(0x30a)],_0x463101=_0x11168f['id'],_0x39d3e6=_0x4bd5d6['match'](_0x4e3c26[_0x1f82bd(0x1e9)]);if(_0x39d3e6)for(const _0x50b6e6 of _0x39d3e6){if(_0x1f82bd(0x218)===_0x1f82bd(0x34c))_0x47755e+=0x0;else{if(!_0x50b6e6)continue;_0x50b6e6['match'](_0x4e3c26['ClassFaceName']);const _0x390b75=String(RegExp['$1']),_0x46c56c=String(RegExp['$2'])[_0x1f82bd(0x412)](),_0x3a76ea=Number(RegExp['$3']);let _0x4ea7e2=0x0;if(_0x390b75[_0x1f82bd(0x28a)](/CLASS[ ](\d+)/i))_0x1f82bd(0x290)!=='mChhe'?(this['_priorityCharacterName']=_0x31564c,this[_0x1f82bd(0x45f)]=_0x2add62):_0x4ea7e2=Number(RegExp['$1']);else _0x390b75[_0x1f82bd(0x28a)](/CLASS[ ](.*)/i)?_0x1f82bd(0x4b8)===_0x1f82bd(0x41a)?_0x320fc3+=_0xdbb8cf['round']((_0x5804e2-_0x455465)/0x2):_0x4ea7e2=DataManager[_0x1f82bd(0x1da)](RegExp['$1']):_0x4ea7e2=DataManager[_0x1f82bd(0x1da)](_0x390b75);if(_0x4ea7e2>0x0){const _0x470f91='Actor-%1-Class-%2'[_0x1f82bd(0x528)](_0x463101,_0x4ea7e2);ImageManager[_0x1f82bd(0x4b0)][_0x470f91]=_0x46c56c,ImageManager[_0x1f82bd(0x26a)][_0x470f91]=_0x3a76ea;}}}const _0x265772=_0x4bd5d6['match'](_0x4e3c26[_0x1f82bd(0x395)]);if(_0x265772)for(const _0x3e5321 of _0x265772){if(_0x1f82bd(0x201)===_0x1f82bd(0x201)){if(!_0x3e5321)continue;_0x3e5321[_0x1f82bd(0x28a)](_0x4e3c26[_0x1f82bd(0x395)]);const _0x4c3d04=String(RegExp['$1']),_0x22505d=String(RegExp['$2'])['trim'](),_0x5a501d=Number(RegExp['$3']);let _0x1f7ee2=0x0;if(_0x4c3d04[_0x1f82bd(0x28a)](/CLASS[ ](\d+)/i))'MGJve'!==_0x1f82bd(0x3a8)?_0x1f7ee2=Number(RegExp['$1']):(_0x5b781c=this['_actor'][_0x1f82bd(0x272)](_0x49fffe,![]),_0x31201f=this[_0x1f82bd(0x2d6)][_0x1f82bd(0x272)](_0x277478,![]),_0x29b8e0=this['_tempActor'][_0x1f82bd(0x272)](_0x441a98,!![]));else _0x4c3d04[_0x1f82bd(0x28a)](/CLASS[ ](.*)/i)?_0x1f7ee2=DataManager[_0x1f82bd(0x1da)](RegExp['$1']):_0x1f7ee2=DataManager[_0x1f82bd(0x1da)](_0x4c3d04);if(_0x1f7ee2>0x0){const _0x4e3e1c=_0x1f82bd(0x4f5)[_0x1f82bd(0x528)](_0x463101,_0x1f7ee2);ImageManager[_0x1f82bd(0x390)][_0x4e3e1c]=_0x22505d,ImageManager[_0x1f82bd(0x517)][_0x4e3e1c]=_0x5a501d;}}else _0x2d5999=this[_0x1f82bd(0x2e8)]['param'](_0x4dfa61),_0x3b36eb=this['_tempActor']['param'](_0x228025),_0x14bf04=_0x222933%0x1!==0x0||_0x2c2bd8%0x1!==0x0;}const _0x4ae36f=_0x4bd5d6[_0x1f82bd(0x28a)](_0x4e3c26[_0x1f82bd(0x36b)]);if(_0x4ae36f)for(const _0x3d08f3 of _0x4ae36f){if(!_0x3d08f3)continue;_0x3d08f3['match'](_0x4e3c26[_0x1f82bd(0x36b)]);const _0x1654bf=String(RegExp['$1']),_0x25bece=String(RegExp['$2'])['trim']();let _0x448355=0x0;if(_0x1654bf['match'](/CLASS[ ](\d+)/i))_0x448355=Number(RegExp['$1']);else{if(_0x1654bf[_0x1f82bd(0x28a)](/CLASS[ ](.*)/i)){if(_0x1f82bd(0x244)===_0x1f82bd(0x244))_0x448355=DataManager[_0x1f82bd(0x1da)](RegExp['$1']);else{if(_0x2cb0b0[_0x1f82bd(0x200)]&&_0x502318[_0x1f82bd(0x20b)]!==_0x1cebd6)return _0x235c2['uiHelpPosition'];else{if(this['isUseSkillsStatesCoreUpdatedLayout']())return this[_0x1f82bd(0x44b)]()['match'](/LOWER/i);else _0x453c98['prototype'][_0x1f82bd(0x467)]['call'](this);}}}else _0x448355=DataManager[_0x1f82bd(0x1da)](_0x1654bf);}if(_0x448355>0x0){if(_0x1f82bd(0x381)!=='sEmWl'){const _0xde8cde='Actor-%1-Class-%2'[_0x1f82bd(0x528)](_0x463101,_0x448355);ImageManager[_0x1f82bd(0x2c8)][_0xde8cde]=_0x25bece;}else this['popScene']();}}const _0x30cd1d=_0x4bd5d6[_0x1f82bd(0x28a)](_0x4e3c26['ClassMenuPortrait']);if(_0x30cd1d){if(_0x1f82bd(0x48a)!==_0x1f82bd(0x1f7))for(const _0x20f108 of _0x30cd1d){if(_0x1f82bd(0x3c7)===_0x1f82bd(0x4b9))_0x406871?_0x328b58[_0x1f82bd(0x4de)](_0x24014d['id'],this[_0x1f82bd(0x526)]):_0x2faf9c['changeMulticlass'](0x0,this[_0x1f82bd(0x526)]);else{if(!_0x20f108)continue;_0x20f108[_0x1f82bd(0x28a)](_0x4e3c26[_0x1f82bd(0x35a)]);const _0x2f3fe3=String(RegExp['$1']),_0xe66f8f=String(RegExp['$2'])[_0x1f82bd(0x412)]();let _0x121058=0x0;if(_0x2f3fe3[_0x1f82bd(0x28a)](/CLASS[ ](\d+)/i))_0x121058=Number(RegExp['$1']);else{if(_0x2f3fe3[_0x1f82bd(0x28a)](/CLASS[ ](.*)/i)){if(_0x1f82bd(0x3a9)!==_0x1f82bd(0x3a9)){const _0x519849=_0x1f82bd(0x312);_0x2854d3[_0x1f82bd(0x2a2)]=_0x519849['format'](_0x15ef59[_0x1f82bd(0x4b5)],_0x816318['name']);}else _0x121058=DataManager[_0x1f82bd(0x1da)](RegExp['$1']);}else{if(_0x1f82bd(0x4e8)!==_0x1f82bd(0x4e8))return _0x5181f2[_0x1f82bd(0x2a5)]&&_0x5d34d0[_0x1f82bd(0x450)][_0x1f82bd(0x2df)]('['+_0x3f19f4+']');else _0x121058=DataManager[_0x1f82bd(0x1da)](_0x2f3fe3);}}if(_0x121058>0x0){const _0x53ef3a='Actor-%1-Class-%2'['format'](_0x463101,_0x121058);ImageManager['actorClassMenuPortrait'][_0x53ef3a]=_0xe66f8f;}}}else{_0x22613c[_0x1f82bd(0x4b5)]=_0x588832[_0x1f82bd(0x264)]||0x0,_0x1bbffd[_0x1f82bd(0x450)]=_0x1ca731['classDescription'][_0x1f82bd(0x528)](_0xf24e00[_0x1f82bd(0x2a2)]||'');const _0x50cb91=_0x12d249[_0x1f82bd(0x1ee)][_0x1f82bd(0x4d5)],_0x8ccec8=_0x209419[_0x1f82bd(0x30a)];_0x8ccec8[_0x1f82bd(0x28a)](_0x50cb91['ClassIcon'])&&(_0x5f19bb[_0x1f82bd(0x4b5)]=_0x405f40(_0x5d143b['$1'])),_0x8ccec8['match'](_0x50cb91['ClassDescription'])&&(_0x48c91f[_0x1f82bd(0x450)]=_0x4ac60e(_0x5e3bf6['$1']));}}const _0x5b30be=_0x4bd5d6[_0x1f82bd(0x28a)](_0x4e3c26[_0x1f82bd(0x4bd)]);if(_0x5b30be){if(_0x1f82bd(0x4f8)===_0x1f82bd(0x4f8))for(const _0x48e99f of _0x5b30be){if('iCpAk'!=='iCpAk')_0x3f9285[_0x1f82bd(0x2db)]['processCursorMove'][_0x1f82bd(0x27a)](this),this[_0x1f82bd(0x457)]();else{if(!_0x48e99f)continue;_0x48e99f[_0x1f82bd(0x28a)](_0x4e3c26['ClassBattlePortrait']);const _0x354a49=String(RegExp['$1']),_0xd6fd95=String(RegExp['$2'])[_0x1f82bd(0x412)]();let _0x9c9269=0x0;if(_0x354a49[_0x1f82bd(0x28a)](/CLASS[ ](\d+)/i))_0x9c9269=Number(RegExp['$1']);else{if(_0x354a49['match'](/CLASS[ ](.*)/i))'wGouy'==='wJWuw'?this[_0x1f82bd(0x21a)]=(this[_0x1f82bd(0x21a)]+_0x47cea0)[_0x1f82bd(0x4dd)](0x0,this['maxTp']()):_0x9c9269=DataManager[_0x1f82bd(0x1da)](RegExp['$1']);else{if('sYaIs'!=='sYaIs'){if(this['_priorityFaceIndex']!==_0x3eff56)return this[_0x1f82bd(0x282)];const _0x1cc5b2=_0x1648b5[_0x1f82bd(0x389)](this);if(_0x1cc5b2!==_0x1dd98e)return _0x1cc5b2;return _0xc1fc40[_0x1f82bd(0x1ee)][_0x1f82bd(0x525)][_0x1f82bd(0x27a)](this);}else _0x9c9269=DataManager[_0x1f82bd(0x1da)](_0x354a49);}}if(_0x9c9269>0x0){if(_0x1f82bd(0x27e)==='jqqKH'){const _0x3b890d=_0x1f82bd(0x4f5)[_0x1f82bd(0x528)](_0x463101,_0x9c9269);ImageManager['actorClassBattlePortrait'][_0x3b890d]=_0xd6fd95;}else _0x41803f=_0x527ef9(_0x27f3a5);}}}else{this[_0x1f82bd(0x4a5)](),this[_0x1f82bd(0x4f2)]();if(this[_0x1f82bd(0x2e8)])this['_actor'][_0x1f82bd(0x42a)]();this[_0x1f82bd(0x1e5)]();}}},ImageManager['getActorClassFaceName']=function(_0x362b54){const _0x42ac06=_0x559e70;if(!_0x362b54)return'';const _0x10d04c=_0x42ac06(0x4f5)[_0x42ac06(0x528)](_0x362b54[_0x42ac06(0x283)](),_0x362b54[_0x42ac06(0x3b3)]()['id']);return ImageManager[_0x42ac06(0x4b0)][_0x10d04c]??'';},ImageManager[_0x559e70(0x389)]=function(_0x23a333){const _0x2426d1=_0x559e70;if(!_0x23a333)return undefined;const _0x301de4='Actor-%1-Class-%2'[_0x2426d1(0x528)](_0x23a333[_0x2426d1(0x283)](),_0x23a333[_0x2426d1(0x3b3)]()['id']);return ImageManager['actorClassFaceIndex'][_0x301de4]??undefined;},ImageManager[_0x559e70(0x1d5)]=function(_0x1b2561){const _0x3e1a92=_0x559e70;if(!_0x1b2561)return'';const _0x575b20=_0x3e1a92(0x4f5)[_0x3e1a92(0x528)](_0x1b2561['actorId'](),_0x1b2561[_0x3e1a92(0x3b3)]()['id']);return ImageManager[_0x3e1a92(0x390)][_0x575b20]??'';},ImageManager[_0x559e70(0x28b)]=function(_0x37ff7f){const _0x18e1b3=_0x559e70;if(!_0x37ff7f)return undefined;const _0x192822='Actor-%1-Class-%2'[_0x18e1b3(0x528)](_0x37ff7f[_0x18e1b3(0x283)](),_0x37ff7f[_0x18e1b3(0x3b3)]()['id']);return ImageManager[_0x18e1b3(0x517)][_0x192822]??undefined;},ImageManager[_0x559e70(0x242)]=function(_0x4cc84a){const _0x4ac080=_0x559e70;if(!_0x4cc84a)return'';const _0xb8d136=_0x4ac080(0x4f5)[_0x4ac080(0x528)](_0x4cc84a[_0x4ac080(0x283)](),_0x4cc84a['currentClass']()['id']);return ImageManager['actorClassBattlerName'][_0xb8d136]??'';},ImageManager[_0x559e70(0x4b3)]=function(_0x529c63){const _0xcc36ae=_0x559e70;if(!_0x529c63)return'';const _0x183a2c=_0xcc36ae(0x4f5)[_0xcc36ae(0x528)](_0x529c63[_0xcc36ae(0x283)](),_0x529c63['currentClass']()['id']);return ImageManager[_0xcc36ae(0x2ce)][_0x183a2c]??'';},ImageManager[_0x559e70(0x2e2)]=function(_0x29995b){const _0x1062f3=_0x559e70;if(!_0x29995b)return'';const _0x176808=_0x1062f3(0x4f5)[_0x1062f3(0x528)](_0x29995b['actorId'](),_0x29995b[_0x1062f3(0x3b3)]()['id']);return ImageManager['actorClassBattlePortrait'][_0x176808]??'';},SoundManager[_0x559e70(0x536)]=function(_0x12bb53){const _0x2b040b=_0x559e70;AudioManager[_0x2b040b(0x225)](VisuMZ[_0x2b040b(0x1ee)][_0x2b040b(0x52c)][_0x2b040b(0x2c1)]);},TextManager[_0x559e70(0x477)]=VisuMZ[_0x559e70(0x1ee)]['Settings'][_0x559e70(0x379)][_0x559e70(0x207)],TextManager['classPointsFull']=VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x52c)][_0x559e70(0x41f)]['FullText'],TextManager['classPointsAbbr']=VisuMZ[_0x559e70(0x1ee)]['Settings'][_0x559e70(0x41f)][_0x559e70(0x285)],TextManager[_0x559e70(0x404)]=VisuMZ[_0x559e70(0x1ee)]['Settings'][_0x559e70(0x41f)][_0x559e70(0x2f5)],TextManager['jobPointsFull']=VisuMZ[_0x559e70(0x1ee)]['Settings'][_0x559e70(0x296)][_0x559e70(0x496)],TextManager[_0x559e70(0x4e4)]=VisuMZ[_0x559e70(0x1ee)]['Settings'][_0x559e70(0x296)]['AbbrText'],TextManager[_0x559e70(0x2a6)]=VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x52c)][_0x559e70(0x296)][_0x559e70(0x2f5)],TextManager[_0x559e70(0x37f)]=VisuMZ['ClassChangeSystem'][_0x559e70(0x52c)][_0x559e70(0x3bd)][_0x559e70(0x484)],TextManager[_0x559e70(0x4f9)]=VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x52c)][_0x559e70(0x25b)]['VocabNoClassAssigned'],TextManager[_0x559e70(0x4ad)]=VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x52c)][_0x559e70(0x25b)][_0x559e70(0x24e)],TextManager[_0x559e70(0x4d0)]=VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x52c)][_0x559e70(0x25b)][_0x559e70(0x31b)],TextManager[_0x559e70(0x1d4)]=VisuMZ['ClassChangeSystem'][_0x559e70(0x52c)][_0x559e70(0x25b)][_0x559e70(0x30f)],ColorManager[_0x559e70(0x33a)]=function(_0x5b770d){const _0x15b2f9=_0x559e70;return _0x5b770d=String(_0x5b770d),_0x5b770d['match'](/#(.*)/i)?_0x15b2f9(0x26c)[_0x15b2f9(0x528)](String(RegExp['$1'])):this[_0x15b2f9(0x236)](Number(_0x5b770d));},VisuMZ['ClassChangeSystem'][_0x559e70(0x497)]=BattleManager[_0x559e70(0x256)],BattleManager['makeRewards']=function(){const _0x3bd55c=_0x559e70;VisuMZ['ClassChangeSystem']['BattleManager_makeRewards'][_0x3bd55c(0x27a)](this),this[_0x3bd55c(0x506)](),this[_0x3bd55c(0x440)](),this[_0x3bd55c(0x359)](),this['gainRewardsJobPoints']();},VisuMZ[_0x559e70(0x1ee)]['BattleManager_displayRewards']=BattleManager[_0x559e70(0x356)],BattleManager[_0x559e70(0x356)]=function(){const _0x449c4d=_0x559e70;VisuMZ[_0x449c4d(0x1ee)]['BattleManager_displayRewards']['call'](this),this[_0x449c4d(0x25d)](),this['displayRewardsJobPoints']();},VisuMZ['ClassChangeSystem']['BattleManager_gainExp']=BattleManager['gainExp'],BattleManager['gainExp']=function(){const _0x237520=_0x559e70;VisuMZ[_0x237520(0x1ee)][_0x237520(0x385)][_0x237520(0x27a)](this);const _0x1ba4c7=this[_0x237520(0x3c4)][_0x237520(0x45d)];for(const _0x55aadd of $gameParty[_0x237520(0x438)]()){_0x237520(0x1fe)==='mpltP'?_0x55aadd[_0x237520(0x333)](_0x1ba4c7):(_0x56673e['prototype'][_0x237520(0x425)][_0x237520(0x27a)](this),this[_0x237520(0x374)]());}},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x261)]=BattleManager[_0x559e70(0x47f)],BattleManager[_0x559e70(0x47f)]=function(_0x245dd1){const _0x18bbc7=_0x559e70;VisuMZ[_0x18bbc7(0x1ee)][_0x18bbc7(0x261)][_0x18bbc7(0x27a)](this,_0x245dd1);for(const _0x4c3466 of $gameParty['allMembers']()){_0x4c3466[_0x18bbc7(0x29f)]();}},BattleManager[_0x559e70(0x506)]=function(){const _0x4b6227=_0x559e70;this[_0x4b6227(0x3c4)]['classPoints']=$gameTroop[_0x4b6227(0x1f5)]();},BattleManager[_0x559e70(0x25d)]=function(){const _0x4f2d14=_0x559e70;if(!this['classPointsVisible']())return;$gameMessage[_0x4f2d14(0x37b)]();const _0x1162ef=$gameParty[_0x4f2d14(0x329)](),_0x26b55f=VisuMZ['ClassChangeSystem'][_0x4f2d14(0x52c)]['ClassPoints'],_0xcffa18=_0x26b55f[_0x4f2d14(0x3ca)];for(const _0x325a9f of _0x1162ef){if(_0x4f2d14(0x42b)!=='cUFRA'){if(!_0x325a9f)continue;const _0x46e3ee=_0xcffa18[_0x4f2d14(0x528)](_0x325a9f[_0x4f2d14(0x2a2)](),_0x325a9f['earnedClassPoints'](),TextManager[_0x4f2d14(0x20d)],TextManager[_0x4f2d14(0x404)]);$gameMessage[_0x4f2d14(0x453)]('\x5c.'+_0x46e3ee);}else this['_actor']=_0x56b269,this['refresh']();}},BattleManager[_0x559e70(0x440)]=function(){const _0x4a4c4b=_0x559e70;this['_rewards']['classPoints']=this[_0x4a4c4b(0x3c4)][_0x4a4c4b(0x23f)]||0x0;let _0x174ee1=$gameParty[_0x4a4c4b(0x438)]();VisuMZ[_0x4a4c4b(0x1ee)]['Settings'][_0x4a4c4b(0x41f)][_0x4a4c4b(0x2ff)]&&(_0x174ee1=_0x174ee1[_0x4a4c4b(0x513)](_0x32218a=>_0x32218a[_0x4a4c4b(0x21b)]()));for(const _0x42bfa3 of _0x174ee1){if('YUXhM'==='OHKgT')return this[_0x4a4c4b(0x44b)]()['match'](/LOWER/i);else{if(!_0x42bfa3)continue;if(!$dataSystem[_0x4a4c4b(0x3ad)]&&!_0x42bfa3[_0x4a4c4b(0x4ce)]())continue;_0x42bfa3[_0x4a4c4b(0x2da)](this['_rewards'][_0x4a4c4b(0x23f)]),_0x42bfa3[_0x4a4c4b(0x48b)](this[_0x4a4c4b(0x3c4)][_0x4a4c4b(0x23f)]);}}},BattleManager[_0x559e70(0x21e)]=function(){const _0x16d4db=_0x559e70;return VisuMZ[_0x16d4db(0x1ee)][_0x16d4db(0x52c)][_0x16d4db(0x41f)]['ShowVictory'];},BattleManager[_0x559e70(0x359)]=function(){const _0x574452=_0x559e70;this[_0x574452(0x3c4)][_0x574452(0x3aa)]=$gameTroop['jobPointsTotal']();},BattleManager[_0x559e70(0x35c)]=function(){const _0x51c4b9=_0x559e70;if(!this[_0x51c4b9(0x352)]())return;$gameMessage['newPage']();const _0x5e5373=$gameParty['members'](),_0x1ae8f9=VisuMZ[_0x51c4b9(0x1ee)]['Settings']['JobPoints'],_0x418e3e=_0x1ae8f9[_0x51c4b9(0x3ca)];for(const _0x3b21b7 of _0x5e5373){if(_0x51c4b9(0x498)===_0x51c4b9(0x2f2)){const _0x5bc1b1='Actor-%1-Class-%2'[_0x51c4b9(0x528)](_0x41a354,_0x553fb6);_0x474834[_0x51c4b9(0x390)][_0x5bc1b1]=_0x5be120,_0xe5d8a4[_0x51c4b9(0x517)][_0x5bc1b1]=_0x4c391e;}else{if(!_0x3b21b7)continue;const _0x5d93e9=_0x418e3e[_0x51c4b9(0x528)](_0x3b21b7[_0x51c4b9(0x2a2)](),_0x3b21b7[_0x51c4b9(0x2fb)](),TextManager['jobPointsAbbr'],TextManager[_0x51c4b9(0x2a6)]);$gameMessage[_0x51c4b9(0x453)]('\x5c.'+_0x5d93e9);}}},BattleManager['gainRewardsJobPoints']=function(){const _0xe72dbe=_0x559e70;this[_0xe72dbe(0x3c4)]['jobPoints']=this[_0xe72dbe(0x3c4)][_0xe72dbe(0x3aa)]||0x0;let _0x575654=$gameParty[_0xe72dbe(0x438)]();VisuMZ[_0xe72dbe(0x1ee)][_0xe72dbe(0x52c)]['JobPoints'][_0xe72dbe(0x2ff)]&&(_0x575654=_0x575654[_0xe72dbe(0x513)](_0x18b070=>_0x18b070['isAlive']()));for(const _0x4e8173 of _0x575654){if(!_0x4e8173)continue;if(!$dataSystem[_0xe72dbe(0x3ad)]&&!_0x4e8173['isBattleMember']())continue;_0x4e8173[_0xe72dbe(0x29d)](this['_rewards'][_0xe72dbe(0x3aa)]),_0x4e8173[_0xe72dbe(0x2b9)](this[_0xe72dbe(0x3c4)]['jobPoints']);}},BattleManager[_0x559e70(0x352)]=function(){const _0x277436=_0x559e70;return VisuMZ['ClassChangeSystem'][_0x277436(0x52c)][_0x277436(0x296)][_0x277436(0x4bf)];},VisuMZ['ClassChangeSystem'][_0x559e70(0x2cf)]=Game_System['prototype'][_0x559e70(0x41e)],Game_System[_0x559e70(0x2db)]['initialize']=function(){const _0x18e603=_0x559e70;VisuMZ['ClassChangeSystem'][_0x18e603(0x2cf)][_0x18e603(0x27a)](this),this['initClassChangeSystemMainMenu']();},Game_System[_0x559e70(0x2db)][_0x559e70(0x4a8)]=function(){const _0x1bc1b4=_0x559e70;this['_ClassChangeSystem_MainMenu']={'shown':VisuMZ['ClassChangeSystem'][_0x1bc1b4(0x52c)][_0x1bc1b4(0x379)][_0x1bc1b4(0x3b0)],'enabled':VisuMZ['ClassChangeSystem'][_0x1bc1b4(0x52c)]['MainMenu']['EnableMainMenu']};},Game_System[_0x559e70(0x2db)][_0x559e70(0x4c1)]=function(){const _0x52c288=_0x559e70;if(this[_0x52c288(0x39e)]===undefined)this['initClassChangeSystem']();return this[_0x52c288(0x39e)][_0x52c288(0x345)];},Game_System['prototype'][_0x559e70(0x372)]=function(_0x5bf66f){const _0x2b1987=_0x559e70;if(this[_0x2b1987(0x39e)]===undefined)this[_0x2b1987(0x490)]();this[_0x2b1987(0x39e)][_0x2b1987(0x345)]=_0x5bf66f;},Game_System[_0x559e70(0x2db)]['isMainMenuClassChangeSystemEnabled']=function(){const _0x39fbc2=_0x559e70;if(this[_0x39fbc2(0x39e)]===undefined)this[_0x39fbc2(0x490)]();return this[_0x39fbc2(0x39e)][_0x39fbc2(0x3e0)];},Game_System['prototype'][_0x559e70(0x3d1)]=function(_0x3e3e61){const _0x318936=_0x559e70;if(this['_ClassChangeSystem_MainMenu']===undefined)this[_0x318936(0x490)]();this[_0x318936(0x39e)][_0x318936(0x3e0)]=_0x3e3e61;},VisuMZ[_0x559e70(0x1ee)]['Game_Action_applyItemUserEffect']=Game_Action[_0x559e70(0x2db)][_0x559e70(0x3b4)],Game_Action[_0x559e70(0x2db)][_0x559e70(0x3b4)]=function(_0x491d2c){const _0x22c6d0=_0x559e70;VisuMZ[_0x22c6d0(0x1ee)]['Game_Action_applyItemUserEffect'][_0x22c6d0(0x27a)](this,_0x491d2c),this[_0x22c6d0(0x2dd)](_0x491d2c);},Game_Action[_0x559e70(0x2db)][_0x559e70(0x2dd)]=function(_0x159c75){const _0x3ca556=_0x559e70;if(this[_0x3ca556(0x424)]())this[_0x3ca556(0x287)](_0x159c75);},Game_Action[_0x559e70(0x2db)][_0x559e70(0x287)]=function(_0x2157d8){const _0xc0d279=_0x559e70,_0x4dc5a7=VisuMZ[_0xc0d279(0x1ee)][_0xc0d279(0x4d5)],_0x49a0b2=this[_0xc0d279(0x424)]()['note'];if($gameParty['inBattle']()){if(this[_0xc0d279(0x3b1)]()[_0xc0d279(0x42e)]()&&_0x49a0b2[_0xc0d279(0x28a)](_0x4dc5a7[_0xc0d279(0x40d)])){if(_0xc0d279(0x1e4)!=='OYGIH')_0x21e503=_0x5a1dad[_0xc0d279(0x1da)](_0x53468c);else{const _0x36966b=eval(RegExp['$1']);this[_0xc0d279(0x3b1)]()['gainClassPoints'](_0x36966b);}}else this[_0xc0d279(0x4da)]();if(_0x2157d8['isActor']()&&_0x49a0b2[_0xc0d279(0x28a)](_0x4dc5a7[_0xc0d279(0x3ed)])){const _0x64b324=eval(RegExp['$1']);_0x2157d8[_0xc0d279(0x2da)](_0x64b324);}}if($gameParty['inBattle']()){if(this[_0xc0d279(0x3b1)]()[_0xc0d279(0x42e)]()&&_0x49a0b2[_0xc0d279(0x28a)](_0x4dc5a7[_0xc0d279(0x3f8)])){const _0x2bbc9a=eval(RegExp['$1']);this['subject']()['gainJobPoints'](_0x2bbc9a);}else this[_0xc0d279(0x52d)]();if(_0x2157d8[_0xc0d279(0x42e)]()&&_0x49a0b2['match'](_0x4dc5a7[_0xc0d279(0x21d)])){if(_0xc0d279(0x489)===_0xc0d279(0x489)){const _0x4b1cf7=eval(RegExp['$1']);_0x2157d8[_0xc0d279(0x29d)](_0x4b1cf7);}else this[_0xc0d279(0x526)]=0x1,_0x142e55[_0xc0d279(0x2db)][_0xc0d279(0x41e)]['call'](this,_0x5977a4);}}if(_0x49a0b2[_0xc0d279(0x28a)](/<NOTETAG>/i)){}},Game_Action['prototype'][_0x559e70(0x4da)]=function(){const _0x1d1eb1=_0x559e70;if(!$gameParty['inBattle']())return;if(!this['subject']()[_0x1d1eb1(0x42e)]())return;const _0xe0a97c=VisuMZ[_0x1d1eb1(0x1ee)]['Settings'][_0x1d1eb1(0x41f)];let _0x1350e1=0x0;try{_0x1350e1=eval(_0xe0a97c[_0x1d1eb1(0x2c4)]);}catch(_0x251f92){if($gameTemp['isPlaytest']())console[_0x1d1eb1(0x3cd)](_0x251f92);}this[_0x1d1eb1(0x3b1)]()['gainClassPoints'](_0x1350e1);},Game_Action[_0x559e70(0x2db)]['applyJobPoints']=function(){const _0x298771=_0x559e70;if(!$gameParty[_0x298771(0x349)]())return;if(!this[_0x298771(0x3b1)]()[_0x298771(0x42e)]())return;const _0x409493=VisuMZ[_0x298771(0x1ee)][_0x298771(0x52c)][_0x298771(0x296)];let _0x4f485e=0x0;try{_0x4f485e=eval(_0x409493[_0x298771(0x2c4)]);}catch(_0x27ef10){if($gameTemp['isPlaytest']())console[_0x298771(0x3cd)](_0x27ef10);}this[_0x298771(0x3b1)]()[_0x298771(0x29d)](_0x4f485e);},VisuMZ['ClassChangeSystem'][_0x559e70(0x43e)]=Game_Battler[_0x559e70(0x2db)]['gainSilentTp'],Game_Battler[_0x559e70(0x2db)][_0x559e70(0x53d)]=function(_0x4d577c){const _0x28c7d1=_0x559e70;this[_0x28c7d1(0x443)]&&this['isActor']()&&$gameParty[_0x28c7d1(0x349)]()?this['_tp']=(this['_tp']+_0x4d577c)[_0x28c7d1(0x4dd)](0x0,this[_0x28c7d1(0x339)]()):VisuMZ[_0x28c7d1(0x1ee)]['Game_Battler_gainSilentTp'][_0x28c7d1(0x27a)](this,_0x4d577c);},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x441)]=Game_Actor[_0x559e70(0x2db)]['equips'],Game_Actor['prototype'][_0x559e70(0x50f)]=function(){const _0x27d7e8=_0x559e70;if(VisuMZ[_0x27d7e8(0x1ee)][_0x27d7e8(0x1d1)](this)){if(_0x27d7e8(0x2ac)===_0x27d7e8(0x43f))this[_0x27d7e8(0x232)]=_0x1e0443,this['callUpdateHelp']();else return VisuMZ[_0x27d7e8(0x4ac)][_0x27d7e8(0x441)]['call'](this);}else{if(_0x27d7e8(0x25c)==='LKxEk'){if(_0x2c7342['inBattle']())return;_0x12a807[_0x27d7e8(0x1ee)]['Game_Actor_releaseUnequippableItems'][_0x27d7e8(0x27a)](this,_0x4db46c);}else return VisuMZ[_0x27d7e8(0x1ee)][_0x27d7e8(0x441)][_0x27d7e8(0x27a)](this);}},VisuMZ['ClassChangeSystem'][_0x559e70(0x1d1)]=function(_0x2c4753){const _0xfe9cea=_0x559e70;return Imported[_0xfe9cea(0x1d8)]&&_0x2c4753[_0xfe9cea(0x42e)]()&&_0x2c4753[_0xfe9cea(0x267)]!==undefined&&_0x2c4753===BattleManager[_0xfe9cea(0x243)]&&$gameParty['inBattle']();},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x1fb)]=Game_Battler[_0x559e70(0x2db)][_0x559e70(0x451)],Game_Battler[_0x559e70(0x2db)][_0x559e70(0x451)]=function(_0x1cef93){const _0x5dc387=_0x559e70;VisuMZ[_0x5dc387(0x1ee)][_0x5dc387(0x1fb)][_0x5dc387(0x27a)](this,_0x1cef93),this[_0x5dc387(0x42e)]()&&(this[_0x5dc387(0x2e7)]=this['getClassPoints'](),this[_0x5dc387(0x336)]=this[_0x5dc387(0x501)]());},Game_Actor[_0x559e70(0x41d)]=VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x52c)][_0x559e70(0x3bd)][_0x559e70(0x3a5)],VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x2aa)]=Game_Actor['prototype'][_0x559e70(0x3a6)],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x3a6)]=function(_0x1b8c80){const _0x14f6f8=_0x559e70;VisuMZ[_0x14f6f8(0x1ee)][_0x14f6f8(0x2aa)]['call'](this,_0x1b8c80),this[_0x14f6f8(0x33d)](),this['gainStartingClassPoints'](),this[_0x14f6f8(0x350)](),this[_0x14f6f8(0x1dd)](),this[_0x14f6f8(0x458)]();},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x458)]=function(){const _0x24abb2=_0x559e70;this[_0x24abb2(0x3c3)](),this[_0x24abb2(0x4a6)](),this[_0x24abb2(0x50d)](),this[_0x24abb2(0x4d1)](),this[_0x24abb2(0x4f6)](),this[_0x24abb2(0x42a)](),this[_0x24abb2(0x34f)](),this[_0x24abb2(0x24d)]();},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x3f5)]=Game_Actor['prototype'][_0x559e70(0x208)],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x208)]=function(_0x4cfc58,_0x3cf976){const _0x3276e0=_0x559e70;_0x3cf976=this['maintainLevels']();_0x3cf976&&(this[_0x3276e0(0x44d)]=this[_0x3276e0(0x44d)]||{},this[_0x3276e0(0x44d)][_0x4cfc58]=this['_exp'][this[_0x3276e0(0x4fb)]]||0x0,_0x3cf976=![]);this['_ClassChangeSystem_preventLevelUpGain']=!![];const _0x3aa670=JsonEx[_0x3276e0(0x32d)](this);_0x3aa670['_tempActor']=!![],VisuMZ[_0x3276e0(0x1ee)][_0x3276e0(0x3f5)][_0x3276e0(0x27a)](this,_0x4cfc58,_0x3cf976),this['classAdjustHpMp'](_0x3aa670),this[_0x3276e0(0x433)](),this[_0x3276e0(0x387)](_0x4cfc58),this[_0x3276e0(0x31f)]=undefined;if($gamePlayer)$gamePlayer[_0x3276e0(0x42a)]();},VisuMZ[_0x559e70(0x1ee)]['Game_Actor_tradeItemWithParty']=Game_Actor[_0x559e70(0x2db)]['tradeItemWithParty'],Game_Actor['prototype'][_0x559e70(0x3fc)]=function(_0x4bc4d7,_0x1f9e66){const _0x5810e5=_0x559e70;if(this[_0x5810e5(0x2d6)])return![];return VisuMZ[_0x5810e5(0x1ee)][_0x5810e5(0x3f4)]['call'](this,_0x4bc4d7,_0x1f9e66);},VisuMZ['ClassChangeSystem']['Game_Actor_releaseUnequippableItems']=Game_Actor['prototype'][_0x559e70(0x382)],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x382)]=function(_0x45b4ef){const _0x529480=_0x559e70;if($gameParty[_0x529480(0x349)]())return;VisuMZ[_0x529480(0x1ee)]['Game_Actor_releaseUnequippableItems'][_0x529480(0x27a)](this,_0x45b4ef);},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x284)]=Game_Actor[_0x559e70(0x2db)]['levelUp'],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x25a)]=function(){const _0x5ef397=_0x559e70;VisuMZ[_0x5ef397(0x1ee)]['Game_Actor_levelUp'][_0x5ef397(0x27a)](this);const _0x25d2e4=this[_0x5ef397(0x3b3)]()['id'];this[_0x5ef397(0x271)](_0x25d2e4),this[_0x5ef397(0x4d2)](_0x25d2e4),this[_0x5ef397(0x249)]=this[_0x5ef397(0x249)]||{},this[_0x5ef397(0x249)][_0x25d2e4]=this[_0x5ef397(0x3d7)],this[_0x5ef397(0x521)]()&&this[_0x5ef397(0x4f6)]();},Game_Actor['prototype'][_0x559e70(0x298)]=function(_0x5554bb){const _0x34a3cc=_0x559e70;if(!Game_Actor['CLASS_CHANGE_ADJUST_HP_MP'])return;const _0x42f571=Math[_0x34a3cc(0x3ba)](_0x5554bb[_0x34a3cc(0x355)]()*this[_0x34a3cc(0x221)]),_0x272fbd=Math['round'](_0x5554bb['mpRate']()*this[_0x34a3cc(0x2d4)]);if(this['hp']>0x0)this[_0x34a3cc(0x2e9)](_0x42f571);if(this['mp']>0x0)this[_0x34a3cc(0x33f)](_0x272fbd);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x33d)]=function(){const _0x11de4f=_0x559e70;this[_0x11de4f(0x533)]={};},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x38f)]=function(){const _0x1ca304=_0x559e70,_0x3ee8a5=VisuMZ[_0x1ca304(0x1ee)][_0x1ca304(0x4d5)],_0x586411=this[_0x1ca304(0x535)]()[_0x1ca304(0x30a)];if(_0x586411['match'](_0x3ee8a5[_0x1ca304(0x397)])){const _0x23bfb5=eval(RegExp['$1']);this['gainClassPoints'](_0x23bfb5);}const _0x405bc6=VisuMZ[_0x1ca304(0x1ee)][_0x1ca304(0x52c)][_0x1ca304(0x41f)];if(!_0x405bc6[_0x1ca304(0x32a)])return;const _0x5c7d33=_0x586411[_0x1ca304(0x28a)](_0x3ee8a5[_0x1ca304(0x1df)]);if(_0x5c7d33)for(const _0x3e57f6 of _0x5c7d33){if(!_0x3e57f6)continue;_0x3e57f6[_0x1ca304(0x28a)](_0x3ee8a5[_0x1ca304(0x1df)]);const _0x2d3035=String(RegExp['$1']),_0x8fbdf4=eval(RegExp['$2']),_0x20c237=/^\d+$/[_0x1ca304(0x300)](_0x2d3035);let _0x26aaba=0x0;if(_0x20c237){if(_0x1ca304(0x23a)!==_0x1ca304(0x23a)){const _0x68b096=this[_0x1ca304(0x4e0)][_0x1ca304(0x406)]();this['_classListWindow'][_0x1ca304(0x4df)](_0x68b096),this['_classListWindow'][_0x1ca304(0x4ff)](),this[_0x1ca304(0x328)][_0x1ca304(0x323)](),this[_0x1ca304(0x328)]['forceSelect'](0x0),this[_0x1ca304(0x4e0)][_0x1ca304(0x376)](),this['_classTierWindow'][_0x1ca304(0x4ef)](),this['forceRemoveClassChangeAnimations']();}else _0x26aaba=Number(_0x2d3035);}else _0x26aaba=DataManager[_0x1ca304(0x1da)](_0x2d3035);this['gainClassPoints'](_0x8fbdf4,_0x26aaba);}},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x480)]=function(_0x41847c){const _0x4c56ba=_0x559e70;this[_0x4c56ba(0x533)]===undefined&&this['initClassPoints']();const _0x2b8f00=VisuMZ[_0x4c56ba(0x1ee)]['Settings'][_0x4c56ba(0x41f)];return _0x2b8f00[_0x4c56ba(0x32a)]?_0x41847c=0x0:_0x41847c=_0x41847c||this[_0x4c56ba(0x3b3)]()['id'],this['_classPoints'][_0x41847c]=this[_0x4c56ba(0x533)][_0x41847c]||0x0,Math[_0x4c56ba(0x3ba)](this['_classPoints'][_0x41847c]);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x415)]=function(_0xb5ba3e,_0x2b1186){const _0x380a61=_0x559e70;this[_0x380a61(0x533)]===undefined&&(_0x380a61(0x537)===_0x380a61(0x537)?this[_0x380a61(0x33d)]():_0x3c6d13=_0x305a64(_0x52d53b['$1']));const _0x3e5d13=VisuMZ[_0x380a61(0x1ee)][_0x380a61(0x52c)][_0x380a61(0x41f)];if(_0x3e5d13[_0x380a61(0x32a)]){if(_0x380a61(0x452)!==_0x380a61(0x452))return![];else _0x2b1186=0x0;}else _0x2b1186=_0x2b1186||this[_0x380a61(0x3b3)]()['id'];this[_0x380a61(0x533)][_0x2b1186]=this[_0x380a61(0x533)][_0x2b1186]||0x0,this[_0x380a61(0x533)][_0x2b1186]=Math[_0x380a61(0x3ba)](_0xb5ba3e||0x0);const _0x20e161=_0x3e5d13[_0x380a61(0x215)]||Number[_0x380a61(0x1f0)];this[_0x380a61(0x533)][_0x2b1186]=this[_0x380a61(0x533)][_0x2b1186]['clamp'](0x0,_0x20e161);},Game_Actor['prototype'][_0x559e70(0x2da)]=function(_0x3dda8c,_0x5df1e0){const _0x3a71d6=_0x559e70;_0x3dda8c>0x0&&(_0x3dda8c*=this[_0x3a71d6(0x2f9)]()),this['addClassPoints'](_0x3dda8c,_0x5df1e0);},Game_Actor[_0x559e70(0x2db)]['gainClassPointsForMulticlasses']=function(_0x556930){const _0x4a1e97=_0x559e70;if(!Imported[_0x4a1e97(0x47e)])return;if(_0x556930>0x0){if('OUzxu'===_0x4a1e97(0x2e3)){const _0x1224b7=this['allMembers']();return _0x1c982a[_0x4a1e97(0x246)](...this[_0x4a1e97(0x329)]()[_0x4a1e97(0x44c)](_0x3a3155=>_0x3a3155['totalMulticlass']()));}else _0x556930*=this[_0x4a1e97(0x2f9)]();}this[_0x4a1e97(0x3df)](_0x556930,_0x4a1e97(0x43a));},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x1f2)]=function(_0x3542e3,_0x30b936){const _0x24c69a=_0x559e70,_0x45208d=VisuMZ[_0x24c69a(0x1ee)][_0x24c69a(0x52c)][_0x24c69a(0x41f)];if(_0x45208d[_0x24c69a(0x32a)]){if(_0x24c69a(0x27f)!==_0x24c69a(0x4be))_0x30b936=0x0;else return!![];}else{if(_0x24c69a(0x4aa)!==_0x24c69a(0x49d))_0x30b936=_0x30b936||this[_0x24c69a(0x3b3)]()['id'];else{if(!this[_0x24c69a(0x2e8)])return;const _0x5524fc=this['itemRectWithPadding'](_0xee58a7),_0x4c59e4=this[_0x24c69a(0x526)],_0x26cf73=this[_0x24c69a(0x36f)][_0x738e42]['ext'],_0x105a95=_0x26cf73?_0x26cf73['id']:0x0,_0xb3ac1b=_0x83749d['ClassChangeSystem'][_0x24c69a(0x52c)][_0x24c69a(0x224)];if(!_0xb3ac1b)return;const _0xa82a0f=_0xb3ac1b[_0x4c59e4-0x1];if(!_0xa82a0f)return;let _0x15ee08=_0x5524fc['x'],_0x53cbfc=_0x5524fc['y'],_0x203625=_0x5524fc[_0x24c69a(0x2cd)]-this[_0x24c69a(0x353)]()*0x2,_0x1262c7=_0x5524fc[_0x24c69a(0x2f1)],_0x5bd335=_0x3e386c['min'](_0x203625,_0x1262c7,this['lineHeight']()*0x3);_0x5bd335=_0x44dd66[_0x24c69a(0x22c)](_0x5bd335/_0x1f2c48[_0x24c69a(0x1fc)])*_0x324f63['iconWidth'],_0x15ee08+=_0x5bd335+this[_0x24c69a(0x353)]()*0x4,this[_0x24c69a(0x4f2)](),this['resetTextColor'](),this['drawFadedItemBackground'](_0x5524fc),this[_0x24c69a(0x20f)](this[_0x24c69a(0x400)](_0x26cf73));if(!_0x26cf73){this[_0x24c69a(0x20f)](![]);const _0x3f3a59=_0x922f18[_0x24c69a(0x3ba)](_0x5524fc['y']+this[_0x24c69a(0x2ab)]()+(_0x5524fc[_0x24c69a(0x2f1)]-this[_0x24c69a(0x2ab)]()*0x2)/0x2);this[_0x24c69a(0x4dc)](_0x431a9e[_0x24c69a(0x4d0)],_0x5524fc['x'],_0x3f3a59,_0x5524fc[_0x24c69a(0x2cd)],_0x24c69a(0x38d));return;}this[_0x24c69a(0x4e7)](_0x4b5994,_0x26cf73,_0x5524fc);const _0x2947b5=this['_actor'][_0x24c69a(0x2b3)](_0x105a95);if(_0x2947b5>0x0){const _0x3e84e6=_0xb3ac1b[_0x2947b5-0x1];_0x3e84e6&&(this[_0x24c69a(0x522)](_0x3a1878['getColor'](_0x3e84e6['TextColor'])),this['drawText'](_0x3e84e6[_0x24c69a(0x207)],_0x5524fc['x'],_0x5524fc['y'],_0x5524fc[_0x24c69a(0x2cd)],_0x24c69a(0x38d)),this[_0x24c69a(0x4c0)]());}this[_0x24c69a(0x20f)](this[_0x24c69a(0x400)](_0x26cf73)),_0x53cbfc+=this[_0x24c69a(0x2ab)]();let _0x19ce16=_0x26cf73[_0x24c69a(0x2a2)];_0x19ce16=_0x19ce16['replace'](/\x1I\[(\d+)\]/gi,''),_0x19ce16=_0x19ce16[_0x24c69a(0x2d3)](/\\I\[(\d+)\]/gi,''),this['drawText'](_0x19ce16,_0x15ee08,_0x53cbfc,_0x5524fc[_0x24c69a(0x2cd)]-_0x15ee08),_0x53cbfc+=this['lineHeight'](),this[_0x24c69a(0x25f)](this[_0x24c69a(0x2e8)],_0x105a95,_0x15ee08,_0x53cbfc-0x4),_0x53cbfc+=this[_0x24c69a(0x2ab)](),this[_0x24c69a(0x321)](_0x105a95,_0x5524fc);}}_0x3542e3+=this[_0x24c69a(0x480)](_0x30b936),this[_0x24c69a(0x415)](_0x3542e3,_0x30b936);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x465)]=function(_0x14982e,_0x4c1d){const _0x3c4bcf=_0x559e70;this[_0x3c4bcf(0x1f2)](-_0x14982e,_0x4c1d);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x2f9)]=function(){const _0x5acd8e=_0x559e70;return this[_0x5acd8e(0x4ee)]()[_0x5acd8e(0x32c)]((_0x5618e4,_0x2e5146)=>{const _0x428fca=_0x5acd8e;if(_0x428fca(0x2dc)===_0x428fca(0x259)){_0x504e81=this[_0x428fca(0x521)]();_0x4596c4&&(this[_0x428fca(0x44d)]=this[_0x428fca(0x44d)]||{},this['_exp'][_0x297092]=this['_exp'][this[_0x428fca(0x4fb)]]||0x0,_0x15bd98=![]);this['_ClassChangeSystem_preventLevelUpGain']=!![];const _0x2af68c=_0x18e433[_0x428fca(0x32d)](this);_0x2af68c[_0x428fca(0x2d6)]=!![],_0x20def2[_0x428fca(0x1ee)]['Game_Actor_changeClass'][_0x428fca(0x27a)](this,_0x5e2656,_0x27ebad),this[_0x428fca(0x298)](_0x2af68c),this[_0x428fca(0x433)](),this[_0x428fca(0x387)](_0x34ca5a),this[_0x428fca(0x31f)]=_0x28cec7;if(_0x55949b)_0x2d4203['refresh']();}else return _0x2e5146&&_0x2e5146[_0x428fca(0x30a)][_0x428fca(0x28a)](VisuMZ['ClassChangeSystem'][_0x428fca(0x4d5)][_0x428fca(0x436)])?_0x5618e4*(Number(RegExp['$1'])*0.01):_0x5618e4;},0x1);},Game_Actor['prototype']['levelUpGainClassPoints']=function(_0x315c24){const _0x81d1ae=_0x559e70;if(this[_0x81d1ae(0x31f)])return;const _0x556aad=VisuMZ[_0x81d1ae(0x1ee)]['Settings'][_0x81d1ae(0x41f)];let _0x2fc564=0x0;try{'wyaAz'==='wyaAz'?_0x2fc564=eval(_0x556aad['PerLevelUp']):(_0x5a052d=!![],this['_multiclasses'][_0x81d1ae(0x402)]());}catch(_0x43a0c6){if(_0x81d1ae(0x476)!==_0x81d1ae(0x4c9)){if($gameTemp[_0x81d1ae(0x240)]())console['log'](_0x43a0c6);}else _0x53c4a6[_0x81d1ae(0x456)](_0x4faeb8);}this[_0x81d1ae(0x2da)](_0x2fc564,_0x315c24);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x258)]=function(){const _0x5ab2d5=_0x559e70;return this[_0x5ab2d5(0x2e7)]=this[_0x5ab2d5(0x2e7)]||0x0,this['getClassPoints']()-this[_0x5ab2d5(0x2e7)];},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x350)]=function(){const _0x149f3e=_0x559e70;this[_0x149f3e(0x37c)]={};},Game_Actor[_0x559e70(0x2db)]['gainStartingJobPoints']=function(){const _0x2dd963=_0x559e70,_0x10aec0=VisuMZ['ClassChangeSystem']['RegExp'],_0x2aad18=this['actor']()[_0x2dd963(0x30a)];if(_0x2aad18[_0x2dd963(0x28a)](_0x10aec0[_0x2dd963(0x4cb)])){const _0x4df529=eval(RegExp['$1']);this[_0x2dd963(0x29d)](_0x4df529);}const _0x112e51=VisuMZ[_0x2dd963(0x1ee)][_0x2dd963(0x52c)][_0x2dd963(0x296)];if(!_0x112e51[_0x2dd963(0x32a)])return;const _0x3e962d=_0x2aad18[_0x2dd963(0x28a)](_0x10aec0[_0x2dd963(0x3e6)]);if(_0x3e962d)for(const _0x5c910a of _0x3e962d){if(!_0x5c910a)continue;_0x5c910a[_0x2dd963(0x28a)](_0x10aec0[_0x2dd963(0x3e6)]);const _0x38386e=String(RegExp['$1']),_0x3bf984=eval(RegExp['$2']),_0x122057=/^\d+$/[_0x2dd963(0x300)](_0x38386e);let _0x1807ec=0x0;_0x122057?'mwzLy'===_0x2dd963(0x1db)?_0x1807ec=Number(_0x38386e):this[_0x2dd963(0x335)](this['index']())?(this[_0x2dd963(0x338)](),this[_0x2dd963(0x463)]()):this['playBuzzerSound']():_0x1807ec=DataManager['getClassIdWithName'](_0x38386e),this['gainJobPoints'](_0x3bf984,_0x1807ec);}},Game_Actor[_0x559e70(0x2db)]['getJobPoints']=function(_0x5e69b1){const _0x47c4e0=_0x559e70;this['_jobPoints']===undefined&&(_0x47c4e0(0x409)!==_0x47c4e0(0x409)?_0x3637a5=this[_0x47c4e0(0x1da)](_0x46f989['$1']):this[_0x47c4e0(0x350)]());const _0x507166=VisuMZ[_0x47c4e0(0x1ee)][_0x47c4e0(0x52c)][_0x47c4e0(0x296)];return _0x507166[_0x47c4e0(0x32a)]?_0x47c4e0(0x46d)!==_0x47c4e0(0x46d)?this[_0x47c4e0(0x20e)][_0x47c4e0(0x1e2)]()===_0x47c4e0(0x1ee)?_0x265737[_0x47c4e0(0x461)](_0x18005c):_0x9f96ae[_0x47c4e0(0x1ee)][_0x47c4e0(0x28f)][_0x47c4e0(0x27a)](this):_0x5e69b1=0x0:_0x47c4e0(0x377)===_0x47c4e0(0x4b2)?(this[_0x47c4e0(0x416)][_0x47c4e0(0x2ea)](_0x4a0163['x'],_0x43697a['y'],_0x3c6238,_0x298b56,_0x154f04,_0x5e8e45),this[_0x47c4e0(0x416)][_0x47c4e0(0x2ea)](_0x1c55c3['x']+_0x4a85e3,_0x102a4a['y'],_0x30ebc4,_0xf497e9,_0x2bc3e9,_0x9b02e1)):_0x5e69b1=_0x5e69b1||this['currentClass']()['id'],this[_0x47c4e0(0x37c)][_0x5e69b1]=this['_jobPoints'][_0x5e69b1]||0x0,Math['round'](this[_0x47c4e0(0x37c)][_0x5e69b1]);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x39d)]=function(_0x5c745a,_0x4bdb2e){const _0x102c75=_0x559e70;this['_jobPoints']===undefined&&this[_0x102c75(0x350)]();const _0x28c549=VisuMZ[_0x102c75(0x1ee)]['Settings'][_0x102c75(0x296)];_0x28c549['SharedResource']?_0x4bdb2e=0x0:_0x4bdb2e=_0x4bdb2e||this['currentClass']()['id'];this[_0x102c75(0x37c)][_0x4bdb2e]=this['_jobPoints'][_0x4bdb2e]||0x0,this[_0x102c75(0x37c)][_0x4bdb2e]=Math[_0x102c75(0x3ba)](_0x5c745a||0x0);const _0x1695e9=_0x28c549[_0x102c75(0x215)]||Number[_0x102c75(0x1f0)];this[_0x102c75(0x37c)][_0x4bdb2e]=this[_0x102c75(0x37c)][_0x4bdb2e][_0x102c75(0x4dd)](0x0,_0x1695e9);},Game_Actor['prototype'][_0x559e70(0x29d)]=function(_0x5c5f14,_0x496625){const _0x29883f=_0x559e70;_0x5c5f14>0x0&&(_0x29883f(0x206)===_0x29883f(0x354)?this[_0x29883f(0x52d)]():_0x5c5f14*=this['jobPointsRate']()),this[_0x29883f(0x419)](_0x5c5f14,_0x496625);},Game_Actor['prototype'][_0x559e70(0x2b9)]=function(_0xfe0386){const _0x133535=_0x559e70;if(!Imported[_0x133535(0x47e)])return;_0xfe0386>0x0&&(_0xfe0386*=this[_0x133535(0x33e)]()),this[_0x133535(0x3df)](_0xfe0386,_0x133535(0x24c));},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x419)]=function(_0x54a9fc,_0x1258d5){const _0x11b72e=_0x559e70,_0x12b2a1=VisuMZ[_0x11b72e(0x1ee)]['Settings'][_0x11b72e(0x296)];if(_0x12b2a1[_0x11b72e(0x32a)])_0x1258d5=0x0;else{if('ROJUu'!=='DclZc')_0x1258d5=_0x1258d5||this[_0x11b72e(0x3b3)]()['id'];else{const _0x4a3e8e=_0x4dd3a4(_0x586264['$1']);if(_0x39f15f[_0x11b72e(0x45e)](_0x43cbd1)<_0x4a3e8e)return![];}}_0x54a9fc+=this[_0x11b72e(0x501)](_0x1258d5),this[_0x11b72e(0x39d)](_0x54a9fc,_0x1258d5);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x52a)]=function(_0x1809eb,_0x5de3c7){const _0x1b24f8=_0x559e70;this[_0x1b24f8(0x419)](-_0x1809eb,_0x5de3c7);},Game_Actor['prototype'][_0x559e70(0x33e)]=function(){return this['traitObjects']()['reduce']((_0x23f8ec,_0x56b4be)=>{const _0x22cc19=_0x3343;if(_0x22cc19(0x30e)!==_0x22cc19(0x4ae)){if(_0x56b4be&&_0x56b4be[_0x22cc19(0x30a)][_0x22cc19(0x28a)](VisuMZ['ClassChangeSystem'][_0x22cc19(0x4d5)][_0x22cc19(0x491)]))return _0x23f8ec*(Number(RegExp['$1'])*0.01);else{if('jSKTq'===_0x22cc19(0x532))return _0x23f8ec;else{let _0x45eb27=_0x5bdc5c[_0x22cc19(0x2db)][_0x22cc19(0x50c)][_0x22cc19(0x27a)](this);if(this[_0x22cc19(0x2e8)]){const _0x36cb1a=this[_0x22cc19(0x2e8)][_0x22cc19(0x231)]()||0x1;_0x45eb27=_0xbf844e[_0x22cc19(0x246)](_0x45eb27,this[_0x22cc19(0x454)]/_0x36cb1a);}return _0x45eb27;}}}else{_0x476147[_0x22cc19(0x278)]?(_0x1a96e9=this['_actor'][_0x22cc19(0x272)](_0x5f14c0,![]),_0x20cf86=this['_tempActor'][_0x22cc19(0x272)](_0x189f3e,![]),_0x9c4ada=_0x4a409f(this[_0x22cc19(0x2e8)][_0x22cc19(0x272)](_0x496e40,!![]))['match'](/([%％])/i)):(_0x3ebc7f=this['_actor'][_0x22cc19(0x46e)](_0x53ef74),_0x461dfa=this[_0x22cc19(0x2d6)][_0x22cc19(0x46e)](_0x90f0cc),_0x284999=_0x1036d2%0x1!==0x0||_0x36f974%0x1!==0x0);const _0x4b4cc3=_0x8698b,_0x1d45d0=_0x3b0cd8,_0xe918ed=_0x1d45d0-_0x4b4cc3;let _0x31d73c=_0xe918ed;if(_0x4f66b8)_0x31d73c=_0x2a5fc1[_0x22cc19(0x3ba)](_0xe918ed*0x64)+'%';_0xe918ed!==0x0&&(this[_0x22cc19(0x522)](_0x35e7d3['paramchangeTextColor'](_0xe918ed)),_0x31d73c=(_0xe918ed>0x0?_0x22cc19(0x1d6):_0x22cc19(0x432))[_0x22cc19(0x528)](_0x31d73c),this[_0x22cc19(0x4dc)](_0x31d73c,_0xa87419+_0x5bcd19,_0xfc7485,_0x51acaa,'left'));}},0x1);},Game_Actor['prototype'][_0x559e70(0x4d2)]=function(_0xd8f99a){const _0x1a3e32=_0x559e70;if(this[_0x1a3e32(0x31f)])return;const _0x19c9a4=VisuMZ[_0x1a3e32(0x1ee)][_0x1a3e32(0x52c)][_0x1a3e32(0x296)];let _0x6192a1=0x0;try{if(_0x1a3e32(0x39c)==='SyCGd')_0x6192a1=eval(_0x19c9a4[_0x1a3e32(0x2a0)]);else return _0x292d24*(_0x5d23ff(_0x2bfea0['$1'])*0.01);}catch(_0x2c214c){if(_0x1a3e32(0x3b7)===_0x1a3e32(0x3b7)){if($gameTemp['isPlaytest']())console['log'](_0x2c214c);}else _0x2f109d=_0x25b1e8||this[_0x1a3e32(0x3b3)]()['id'];}this[_0x1a3e32(0x29d)](_0x6192a1,_0xd8f99a);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x2fb)]=function(){const _0x1d78db=_0x559e70;return this[_0x1d78db(0x336)]=this[_0x1d78db(0x336)]||0x0,this['getJobPoints']()-this['_earnedJobPoints'];},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x368)]=Game_Actor['prototype'][_0x559e70(0x279)],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x279)]=function(_0x5622b2,_0x2a04eb){const _0x2a6ce5=_0x559e70;_0x5622b2!==''?(this[_0x2a6ce5(0x527)]=_0x5622b2,this[_0x2a6ce5(0x282)]=_0x2a04eb):(this[_0x2a6ce5(0x527)]=undefined,this[_0x2a6ce5(0x282)]=undefined);},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x245)]=Game_Actor['prototype'][_0x559e70(0x485)],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x485)]=function(){const _0x5cd216=_0x559e70;if(this['_priorityFaceName']!==undefined)return _0x5cd216(0x1eb)!=='Umpme'?_0x2fe32e(_0x484293[_0x5cd216(0x483)]):this['_priorityFaceName'];return ImageManager['getActorClassFaceName'](this)||VisuMZ['ClassChangeSystem'][_0x5cd216(0x245)][_0x5cd216(0x27a)](this);},VisuMZ['ClassChangeSystem'][_0x559e70(0x525)]=Game_Actor[_0x559e70(0x2db)][_0x559e70(0x30c)],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x30c)]=function(){const _0xf43748=_0x559e70;if(this[_0xf43748(0x282)]!==undefined){if(_0xf43748(0x1e0)===_0xf43748(0x1e0))return this[_0xf43748(0x282)];else _0x1b333e[_0xf43748(0x1ee)][_0xf43748(0x311)]['call'](this,_0xc24734),_0x3968f5[_0xf43748(0x1ee)][_0xf43748(0x4d4)](_0x2d8554),_0x5556e2[_0xf43748(0x1ee)][_0xf43748(0x53a)](_0x4d5394);}const _0x2c67ae=ImageManager[_0xf43748(0x389)](this);if(_0x2c67ae!==undefined)return _0x2c67ae;return VisuMZ['ClassChangeSystem']['Game_Actor_faceIndex'][_0xf43748(0x27a)](this);},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x22b)]=Game_Actor[_0x559e70(0x2db)]['setCharacterImage'],Game_Actor[_0x559e70(0x2db)]['setCharacterImage']=function(_0x5b782c,_0x4f2397){const _0x352a4f=_0x559e70;_0x5b782c!==''?'xYnDg'!==_0x352a4f(0x211)?(this['_priorityCharacterName']=_0x5b782c,this['_priorityCharacterIndex']=_0x4f2397):_0xfbc76c=_0x3a7729(_0x137dbc[_0x352a4f(0x2a0)]):(this[_0x352a4f(0x448)]=undefined,this['_priorityCharacterIndex']=undefined);},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x4c6)]=Game_Actor[_0x559e70(0x2db)]['characterName'],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x317)]=function(){const _0x161363=_0x559e70;if(this['_priorityCharacterName']!==undefined)return this['_priorityCharacterName'];return ImageManager['getActorClassCharacterName'](this)||VisuMZ['ClassChangeSystem']['Game_Actor_characterName'][_0x161363(0x27a)](this);},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x219)]=Game_Actor[_0x559e70(0x2db)][_0x559e70(0x4b7)],Game_Actor[_0x559e70(0x2db)]['characterIndex']=function(){const _0x573bce=_0x559e70;if(this[_0x573bce(0x45f)]!==undefined){if(_0x573bce(0x3be)!==_0x573bce(0x3be))_0x19a77a!==''?(this['_priorityFaceName']=_0x2e2833,this[_0x573bce(0x282)]=_0xf34999):(this[_0x573bce(0x527)]=_0x187fe2,this[_0x573bce(0x282)]=_0x3f123d);else return this[_0x573bce(0x45f)];}const _0x4cab0e=ImageManager[_0x573bce(0x28b)](this);if(_0x4cab0e!==undefined)return _0x4cab0e;return VisuMZ['ClassChangeSystem']['Game_Actor_characterIndex']['call'](this);},VisuMZ['ClassChangeSystem'][_0x559e70(0x398)]=Game_Actor[_0x559e70(0x2db)][_0x559e70(0x2f0)],Game_Actor[_0x559e70(0x2db)]['setBattlerImage']=function(_0x40dd9d){const _0x1c4aba=_0x559e70;_0x40dd9d!==''?_0x1c4aba(0x39f)===_0x1c4aba(0x29e)?_0x570038[_0x1c4aba(0x4de)](_0x33b9c5['id'],this[_0x1c4aba(0x526)]):this[_0x1c4aba(0x49b)]=_0x40dd9d:_0x1c4aba(0x346)!==_0x1c4aba(0x346)?this[_0x1c4aba(0x4c4)]=_0x2d8d2d:this[_0x1c4aba(0x49b)]=undefined;},VisuMZ['ClassChangeSystem']['Game_Actor_battlerName']=Game_Actor[_0x559e70(0x2db)][_0x559e70(0x3bf)],Game_Actor[_0x559e70(0x2db)]['battlerName']=function(){const _0x4fc443=_0x559e70;if(this[_0x4fc443(0x49b)]!==undefined)return this[_0x4fc443(0x49b)];return ImageManager[_0x4fc443(0x242)](this)||VisuMZ[_0x4fc443(0x1ee)]['Game_Actor_battlerName'][_0x4fc443(0x27a)](this);;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x3f3)]=Game_Actor['prototype'][_0x559e70(0x510)],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x510)]=function(_0x136c78){const _0x260c5f=_0x559e70;_0x136c78!==''?this[_0x260c5f(0x4c4)]=_0x136c78:this['_priorityMenuImage']=undefined;},VisuMZ['ClassChangeSystem'][_0x559e70(0x2d2)]=Game_Actor[_0x559e70(0x2db)][_0x559e70(0x426)],Game_Actor[_0x559e70(0x2db)]['getMenuImage']=function(){const _0x4b2a12=_0x559e70;if(this[_0x4b2a12(0x4c4)]!==undefined){if(_0x4b2a12(0x358)==='aHAbN'){if(this[_0x4b2a12(0x45f)]!==_0x59b75d)return this[_0x4b2a12(0x45f)];const _0xf8caf3=_0x42cd8b[_0x4b2a12(0x28b)](this);if(_0xf8caf3!==_0x241c3b)return _0xf8caf3;return _0x32e085[_0x4b2a12(0x1ee)][_0x4b2a12(0x219)][_0x4b2a12(0x27a)](this);}else return this[_0x4b2a12(0x4c4)];}return ImageManager['getActorClassMenuPortrait'](this)||VisuMZ[_0x4b2a12(0x1ee)]['Game_Actor_getMenuImage']['call'](this);;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x3f9)]=Game_Actor[_0x559e70(0x2db)]['setBattlePortrait'],Game_Actor[_0x559e70(0x2db)][_0x559e70(0x538)]=function(_0x529793){const _0x267847=_0x559e70;if(_0x529793!==''){if(_0x267847(0x35f)==='ZMvmo')this[_0x267847(0x40a)]=_0x529793;else{if(!_0x17966b[_0x267847(0x47e)])return;_0x383362>0x0&&(_0x21f851*=this['jobPointsRate']()),this[_0x267847(0x3df)](_0x251601,_0x267847(0x24c));}}else{if(_0x267847(0x230)!=='ZkDmB')this[_0x267847(0x40a)]=undefined;else return _0x425ec0(_0xe82a73[_0x267847(0x483)]);}if(SceneManager['isSceneBattle']()&&$gameParty['battleMembers']()['includes'](this)){const _0x4bfa6e=SceneManager[_0x267847(0x2f7)][_0x267847(0x232)];if(_0x4bfa6e)_0x4bfa6e[_0x267847(0x257)](this);}},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x373)]=Game_Actor[_0x559e70(0x2db)][_0x559e70(0x351)],Game_Actor[_0x559e70(0x2db)]['getBattlePortraitFilename']=function(){const _0x3e0c5b=_0x559e70;if(this[_0x3e0c5b(0x40a)]!==undefined)return this['_priorityBattlePortrait'];return ImageManager['getActorClassBattlePortrait'](this)||VisuMZ[_0x3e0c5b(0x1ee)][_0x3e0c5b(0x373)]['call'](this);;},Game_Actor['prototype']['initClassChangeUnlocks']=function(){const _0x4e0ba9=_0x559e70;this[_0x4e0ba9(0x229)]=[this['currentClass']()['id']];const _0x28565d=VisuMZ[_0x4e0ba9(0x1ee)]['RegExp'],_0x21e3e7=this['actor']()['note'],_0x10f62b=_0x21e3e7[_0x4e0ba9(0x28a)](_0x28565d[_0x4e0ba9(0x33c)]);if(_0x10f62b)for(const _0x1dacb1 of _0x10f62b){if(_0x4e0ba9(0x4b1)!=='ZIzZp'){if(!_0x1dacb1)continue;_0x1dacb1[_0x4e0ba9(0x28a)](_0x28565d[_0x4e0ba9(0x33c)]);const _0x416061=String(RegExp['$1'])[_0x4e0ba9(0x302)](',');for(let _0x3389c1 of _0x416061){_0x3389c1=(String(_0x3389c1)||'')[_0x4e0ba9(0x412)]();const _0x4b5d4f=/^\d+$/[_0x4e0ba9(0x300)](_0x3389c1);if(_0x4b5d4f)this[_0x4e0ba9(0x229)][_0x4e0ba9(0x461)](Number(_0x3389c1));else{if('pHNOh'!==_0x4e0ba9(0x304)){if(this['_multiclassTiers']===_0x566c9f)this[_0x4e0ba9(0x4a6)]();return this['_multiclassTiers']=this[_0x4e0ba9(0x403)]['clamp'](0x1,_0x56700a[_0x4e0ba9(0x1ee)][_0x4e0ba9(0x52c)]['Multiclass'][_0x4e0ba9(0x289)]||0x1),this[_0x4e0ba9(0x403)];}else this[_0x4e0ba9(0x229)]['push'](DataManager[_0x4e0ba9(0x1da)](_0x3389c1));}}}else{_0x5c18b7=_0x2ad496||0x1,this['changePaintOpacity'](![]);const _0x4b9784=_0x1a5a58[_0x4e0ba9(0x495)](),_0x4338bd=_0x4c6ebe[_0x4e0ba9(0x3bb)](),_0x568fa6=_0x52c7c1[_0x4e0ba9(0x2cd)]/0x2,_0x387cc8=this[_0x4e0ba9(0x2ab)]();while(_0x48b9e4--){this['contents'][_0x4e0ba9(0x2ea)](_0xb026b5['x'],_0x2a00db['y'],_0x568fa6,_0x387cc8,_0x4338bd,_0x4b9784),this[_0x4e0ba9(0x416)][_0x4e0ba9(0x2ea)](_0x2bd0e7['x']+_0x568fa6,_0x4fdb2c['y'],_0x568fa6,_0x387cc8,_0x4b9784,_0x4338bd);}this['changePaintOpacity'](!![]);}}},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x1f9)]=function(){const _0x5070f2=_0x559e70;if(this[_0x5070f2(0x229)]===undefined)this['initClassChangeUnlocks']();return this[_0x5070f2(0x229)];},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x456)]=function(_0x445cee){const _0x55c902=_0x559e70;if(this[_0x55c902(0x229)]===undefined)this[_0x55c902(0x3c3)]();if(this['_unlockedClasses'][_0x55c902(0x2df)](_0x445cee))return;this[_0x55c902(0x229)]['push'](_0x445cee),this['_unlockedClasses']['remove'](0x0),this[_0x55c902(0x229)][_0x55c902(0x47b)](function(_0x37290c,_0x5240a0){return _0x37290c-_0x5240a0;});},Game_Actor[_0x559e70(0x2db)]['removeUnlockedClass']=function(_0x2fda9a){const _0x34703e=_0x559e70;if(this[_0x34703e(0x229)]===undefined)this[_0x34703e(0x3c3)]();if(!this[_0x34703e(0x229)][_0x34703e(0x2df)](_0x2fda9a))return;this['_unlockedClasses'][_0x34703e(0x2d8)](_0x2fda9a)[_0x34703e(0x2d8)](null),this['_unlockedClasses'][_0x34703e(0x47b)](function(_0x4d689c,_0x287a56){return _0x4d689c-_0x287a56;});},Game_Actor['prototype'][_0x559e70(0x387)]=function(_0x2a6bf7){const _0x135674=_0x559e70;this[_0x135674(0x456)](_0x2a6bf7);},Game_Actor['prototype'][_0x559e70(0x4a6)]=function(){const _0xdb8af6=_0x559e70;this[_0xdb8af6(0x403)]=VisuMZ[_0xdb8af6(0x1ee)][_0xdb8af6(0x52c)][_0xdb8af6(0x3bd)][_0xdb8af6(0x46b)],this['_multiclasses']=[this[_0xdb8af6(0x4fb)]];const _0x5390b4=this[_0xdb8af6(0x535)]()[_0xdb8af6(0x30a)],_0x1a993a=VisuMZ[_0xdb8af6(0x1ee)][_0xdb8af6(0x4d5)];_0x5390b4[_0xdb8af6(0x28a)](_0x1a993a['StartingMulticlasses'])&&(this[_0xdb8af6(0x403)]=Number(RegExp['$1']));const _0x495bdb=_0x5390b4[_0xdb8af6(0x28a)](_0x1a993a[_0xdb8af6(0x2fc)]);if(_0x495bdb)for(const _0x119add of _0x495bdb){if('DDuil'!=='DDuil')_0x1b754f[_0xdb8af6(0x461)](_0x2dea31['id']);else{if(!_0x119add)continue;_0x119add[_0xdb8af6(0x28a)](_0x1a993a[_0xdb8af6(0x2fc)]);const _0x45fcd8=Number(RegExp['$1'])-0x1;if(_0x45fcd8+0x1>this['_multiclassTiers'])continue;let _0x3d3947=(String(RegExp['$2'])||'')['trim']();const _0x41d34a=/^\d+$/['test'](_0x3d3947);_0x41d34a?this[_0xdb8af6(0x475)][_0x45fcd8]=Number(_0x3d3947):_0xdb8af6(0x446)!==_0xdb8af6(0x446)?_0x3b1d8c[_0xdb8af6(0x2db)][_0xdb8af6(0x467)]['call'](this):this[_0xdb8af6(0x475)][_0x45fcd8]=DataManager[_0xdb8af6(0x1da)](_0x3d3947);}}this[_0xdb8af6(0x433)](),this[_0xdb8af6(0x403)]=this[_0xdb8af6(0x403)][_0xdb8af6(0x4dd)](0x1,VisuMZ[_0xdb8af6(0x1ee)]['Settings'][_0xdb8af6(0x224)][_0xdb8af6(0x289)]||0x1);for(const _0x1da0f9 of this[_0xdb8af6(0x475)]){this[_0xdb8af6(0x456)](_0x1da0f9);}},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x3ec)]=function(){const _0x511650=_0x559e70;if(this[_0x511650(0x475)]===undefined)this[_0x511650(0x4a6)]();return this[_0x511650(0x475)][0x0]=this[_0x511650(0x4fb)],this[_0x511650(0x475)][_0x511650(0x513)](_0x5c0be2=>!!$dataClasses[_0x5c0be2])['map'](_0x453c99=>$dataClasses[_0x453c99]);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x401)]=function(){const _0x230140=_0x559e70;return this[_0x230140(0x3ec)]();},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x499)]=function(_0x5de41e){const _0x3df2b2=_0x559e70;if(this['_multiclasses']===undefined)this[_0x3df2b2(0x4a6)]();return _0x5de41e-=0x1,$dataClasses[this['_multiclasses'][_0x5de41e]]||null;},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x38b)]=function(_0x2960a5){const _0xb4519=_0x559e70;return this[_0xb4519(0x499)](_0x2960a5);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x3db)]=function(_0x3dd85b){const _0x1f9e73=this['getMulticlassAtTier'](_0x3dd85b);return _0x1f9e73?_0x1f9e73['id']:0x0;},Game_Actor[_0x559e70(0x2db)]['totalMulticlass']=function(){const _0xa7c9c8=_0x559e70;if(this['_multiclassTiers']===undefined)this[_0xa7c9c8(0x4a6)]();return this[_0xa7c9c8(0x403)]=this[_0xa7c9c8(0x403)][_0xa7c9c8(0x4dd)](0x1,VisuMZ[_0xa7c9c8(0x1ee)][_0xa7c9c8(0x52c)]['Multiclass'][_0xa7c9c8(0x289)]||0x1),this[_0xa7c9c8(0x403)];},Game_Actor[_0x559e70(0x2db)]['setMulticlassTiers']=function(_0x187ddb){const _0x56d186=_0x559e70;if(this[_0x56d186(0x403)]===undefined)this[_0x56d186(0x4a6)]();this[_0x56d186(0x403)]=_0x187ddb[_0x56d186(0x4dd)](0x1,VisuMZ[_0x56d186(0x1ee)]['Settings']['Multiclass'][_0x56d186(0x289)]||0x1);},Game_Actor['prototype'][_0x559e70(0x43d)]=function(_0x4dbe1e){const _0x476f2d=_0x559e70;_0x4dbe1e+=this['totalMulticlass'](),this[_0x476f2d(0x4fd)](_0x4dbe1e);},Game_Actor['prototype'][_0x559e70(0x49c)]=function(_0x55e1d2){const _0x20faba=_0x559e70;_0x55e1d2=this[_0x20faba(0x231)]()-_0x55e1d2,this[_0x20faba(0x4fd)](_0x55e1d2);},Game_Actor['prototype'][_0x559e70(0x433)]=function(){const _0x3f24f2=_0x559e70;if(this[_0x3f24f2(0x475)]===undefined)this[_0x3f24f2(0x4a6)]();let _0x3a8ddf=![];const _0xbf8973=this[_0x3f24f2(0x231)]();while(this[_0x3f24f2(0x475)][_0x3f24f2(0x289)]>_0xbf8973){'VCUZI'!==_0x3f24f2(0x391)?_0x5a0e95=_0x57f28d['getClassIdWithName'](_0x267d80['$1']):(_0x3a8ddf=!![],this['_multiclasses']['pop']());}this[_0x3f24f2(0x475)][0x0]=this['currentClass']()['id'];const _0x389613=this['_multiclasses'][_0x3f24f2(0x289)];for(let _0x2ba199=0x1;_0x2ba199<_0x389613;_0x2ba199++){_0x3f24f2(0x370)!==_0x3f24f2(0x255)?this[_0x3f24f2(0x475)][_0x2ba199]===this[_0x3f24f2(0x3b3)]()['id']&&(this[_0x3f24f2(0x475)][_0x2ba199]=0x0,_0x3a8ddf=!![]):this['_classListWindow'][_0x3f24f2(0x4e5)](_0x4fec15);}if(_0x3a8ddf)this[_0x3f24f2(0x42a)]();},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x51d)]=Game_BattlerBase['prototype'][_0x559e70(0x4e9)],Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x4e9)]=function(_0x30f1ea){const _0x430e77=_0x559e70;if(this['isActor']())this[_0x430e77(0x267)]=_0x430e77(0x22d);let _0x997ab2=VisuMZ[_0x430e77(0x1ee)][_0x430e77(0x51d)][_0x430e77(0x27a)](this,_0x30f1ea);if(this[_0x430e77(0x42e)]())this[_0x430e77(0x267)]=undefined;return _0x997ab2;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x314)]=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x3cc)],Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x3cc)]=function(_0x34bedf){const _0x314aea=_0x559e70;if(this[_0x314aea(0x42e)]())this['_multiclassCheck']=_0x314aea(0x330);let _0x4ec2f5=VisuMZ['ClassChangeSystem']['Game_BattlerBase_debuffRate']['call'](this,_0x34bedf);if(this[_0x314aea(0x42e)]())this[_0x314aea(0x267)]=undefined;return _0x4ec2f5;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x392)]=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x4c3)],Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x4c3)]=function(_0x551602){const _0x4d6c90=_0x559e70;if(this['isActor']())this[_0x4d6c90(0x267)]=_0x4d6c90(0x320);let _0x4351d2=VisuMZ['ClassChangeSystem'][_0x4d6c90(0x392)][_0x4d6c90(0x27a)](this,_0x551602);if(this['isActor']())this[_0x4d6c90(0x267)]=undefined;return _0x4351d2;},VisuMZ['ClassChangeSystem'][_0x559e70(0x228)]=Game_BattlerBase[_0x559e70(0x2db)]['stateResistSet'],Game_BattlerBase[_0x559e70(0x2db)]['stateResistSet']=function(){const _0x5a5422=_0x559e70;if(this[_0x5a5422(0x42e)]())this[_0x5a5422(0x267)]=_0x5a5422(0x50b);let _0xbec9f1=VisuMZ['ClassChangeSystem'][_0x5a5422(0x228)][_0x5a5422(0x27a)](this);if(this[_0x5a5422(0x42e)]())this[_0x5a5422(0x267)]=undefined;return _0xbec9f1;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x36a)]=Game_BattlerBase['prototype'][_0x559e70(0x247)],Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x247)]=function(_0x5ac07d){const _0x36b785=_0x559e70;if(this[_0x36b785(0x42e)]())this[_0x36b785(0x267)]=_0x36b785(0x1f8);let _0x436bd1=VisuMZ['ClassChangeSystem'][_0x36b785(0x36a)][_0x36b785(0x27a)](this,_0x5ac07d);if(this[_0x36b785(0x42e)]())this[_0x36b785(0x267)]=undefined;return _0x436bd1;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x3f0)]=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x413)],Game_BattlerBase['prototype'][_0x559e70(0x413)]=function(_0x3868ff){const _0x11a4c8=_0x559e70;if(this[_0x11a4c8(0x42e)]())this['_multiclassCheck']='XParamRates';let _0x3ca0e7=VisuMZ[_0x11a4c8(0x1ee)]['Game_BattlerBase_xparam'][_0x11a4c8(0x27a)](this,_0x3868ff);if(this[_0x11a4c8(0x42e)]())this['_multiclassCheck']=undefined;return _0x3ca0e7;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x327)]=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x4ab)],Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x4ab)]=function(_0x1f26d2){const _0x24c9c5=_0x559e70;if(this['isActor']())this[_0x24c9c5(0x267)]=_0x24c9c5(0x509);let _0x3167f2=VisuMZ['ClassChangeSystem'][_0x24c9c5(0x327)][_0x24c9c5(0x27a)](this,_0x1f26d2);if(this[_0x24c9c5(0x42e)]())this[_0x24c9c5(0x267)]=undefined;return _0x3167f2;},VisuMZ[_0x559e70(0x1ee)]['Game_BattlerBase_attackElements']=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x3a7)],Game_BattlerBase['prototype'][_0x559e70(0x3a7)]=function(){const _0x3e7710=_0x559e70;if(this[_0x3e7710(0x42e)]())this[_0x3e7710(0x267)]='AttackElements';let _0x11a532=VisuMZ[_0x3e7710(0x1ee)]['Game_BattlerBase_attackElements'][_0x3e7710(0x27a)](this);if(this[_0x3e7710(0x42e)]())this['_multiclassCheck']=undefined;return _0x11a532;},VisuMZ['ClassChangeSystem']['Game_BattlerBase_attackStates']=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x253)],Game_BattlerBase['prototype'][_0x559e70(0x253)]=function(){const _0x385173=_0x559e70;if(this['isActor']())this[_0x385173(0x267)]=_0x385173(0x3fb);let _0x3c357f=VisuMZ['ClassChangeSystem'][_0x385173(0x4a1)]['call'](this);if(this[_0x385173(0x42e)]())this[_0x385173(0x267)]=undefined;return _0x3c357f;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x4f4)]=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x4bb)],Game_BattlerBase[_0x559e70(0x2db)]['attackStatesRate']=function(_0x53f37a){const _0x57555b=_0x559e70;if(this['isActor']())this[_0x57555b(0x267)]=_0x57555b(0x3fb);let _0x5a1583=VisuMZ[_0x57555b(0x1ee)][_0x57555b(0x4f4)][_0x57555b(0x27a)](this,_0x53f37a);if(this[_0x57555b(0x42e)]())this[_0x57555b(0x267)]=undefined;return _0x5a1583;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x205)]=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x2e6)],Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x2e6)]=function(){const _0x4cb211=_0x559e70;if(this[_0x4cb211(0x42e)]())this[_0x4cb211(0x267)]=_0x4cb211(0x251);let _0x170cc0=VisuMZ[_0x4cb211(0x1ee)][_0x4cb211(0x205)]['call'](this);if(this[_0x4cb211(0x42e)]())this[_0x4cb211(0x267)]=undefined;return _0x170cc0;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x423)]=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x30d)],Game_BattlerBase['prototype'][_0x559e70(0x30d)]=function(){const _0x3f3d58=_0x559e70;if(this[_0x3f3d58(0x42e)]())this[_0x3f3d58(0x267)]='AddedSkills';let _0x423621=VisuMZ['ClassChangeSystem'][_0x3f3d58(0x423)]['call'](this);if(this[_0x3f3d58(0x42e)]())this[_0x3f3d58(0x267)]=undefined;return _0x423621;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x23b)]=Game_BattlerBase[_0x559e70(0x2db)]['isEquipWtypeOk'],Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x4d9)]=function(_0x58cbf4){const _0x543c97=_0x559e70;if(this[_0x543c97(0x42e)]())this['_multiclassCheck']=_0x543c97(0x4e6);let _0x413b8c=VisuMZ['ClassChangeSystem']['Game_BattlerBase_isEquipWtypeOk'][_0x543c97(0x27a)](this,_0x58cbf4);if(this['isActor']())this[_0x543c97(0x267)]=undefined;return _0x413b8c;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x23c)]=Game_BattlerBase[_0x559e70(0x2db)][_0x559e70(0x2d7)],Game_BattlerBase[_0x559e70(0x2db)]['isEquipAtypeOk']=function(_0x24ebe3){const _0x27929d=_0x559e70;if(this[_0x27929d(0x42e)]())this['_multiclassCheck']='EquipArmors';let _0x1952e=VisuMZ[_0x27929d(0x1ee)]['Game_BattlerBase_isEquipAtypeOk'][_0x27929d(0x27a)](this,_0x24ebe3);if(this[_0x27929d(0x42e)]())this['_multiclassCheck']=undefined;return _0x1952e;},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x3ae)]=Game_Actor['prototype'][_0x559e70(0x4ee)],Game_Actor['prototype'][_0x559e70(0x4ee)]=function(){const _0x579870=_0x559e70;let _0x208993=VisuMZ[_0x579870(0x1ee)][_0x579870(0x3ae)][_0x579870(0x27a)](this);if(this[_0x579870(0x267)]){if(_0x579870(0x2c5)!==_0x579870(0x334))_0x208993=this[_0x579870(0x35d)](_0x208993);else{if(this[_0x579870(0x280)]){if(this[_0x579870(0x406)]()){const _0x4a89d3=_0x561342['ClassChangeSystem']['Settings'][_0x579870(0x224)];if(!_0x4a89d3)return;const _0x36b324=_0x4a89d3[this['currentExt']()-0x1];if(!_0x36b324)return;this[_0x579870(0x280)][_0x579870(0x2f4)](_0x36b324[_0x579870(0x484)]);}else this['_helpWindow'][_0x579870(0x2f4)]('');}}}return _0x208993;},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x35d)]=function(_0x2503a2){const _0x166860=_0x559e70;if(this[_0x166860(0x475)]===undefined)this[_0x166860(0x4a6)]();const _0x24b9a9=this[_0x166860(0x267)];let _0x585313=_0x2503a2[_0x166860(0x204)](this[_0x166860(0x3b3)]());const _0x22eaa1=VisuMZ[_0x166860(0x1ee)][_0x166860(0x52c)]['Multiclass'],_0x17fb88=_0x22eaa1[_0x166860(0x289)];for(let _0x3cd449=0x1;_0x3cd449<_0x17fb88;_0x3cd449++){if(_0x166860(0x42d)===_0x166860(0x3c2)){if(!_0x1eb1a8)return _0x447181;const _0x32eb6c=_0x166860(0x4f5)[_0x166860(0x528)](_0x42f448['actorId'](),_0x3e6e26['currentClass']()['id']);return _0x115eb0[_0x166860(0x517)][_0x32eb6c]??_0x558fb7;}else{let _0x4192d7=$dataClasses[this[_0x166860(0x475)][_0x3cd449]||0x0];if(!_0x4192d7)continue;if(_0x4192d7===this[_0x166860(0x3b3)]())continue;const _0x5e0b9d=_0x22eaa1[_0x3cd449];if(!_0x5e0b9d)continue;_0x5e0b9d[this['_multiclassCheck']]&&_0x2503a2['splice'](++_0x585313,0x0,_0x4192d7);}}return _0x2503a2;},Game_Actor[_0x559e70(0x2db)]['gainMulticlassRewardPoints']=function(_0x263bdb,_0x1482c8){const _0x55a10a=_0x559e70;if(_0x263bdb<=0x0)return;if(!_0x1482c8)return;if(!$dataSystem[_0x55a10a(0x3ad)]&&!this[_0x55a10a(0x4ce)]())return;this[_0x55a10a(0x3ec)]();const _0xb084a=VisuMZ[_0x55a10a(0x1ee)][_0x55a10a(0x52c)][_0x55a10a(0x224)],_0x4641d5=_0xb084a[_0x55a10a(0x289)];for(let _0x58c70f=0x1;_0x58c70f<_0x4641d5;_0x58c70f++){let _0xdb1cec=$dataClasses[this['_multiclasses'][_0x58c70f]||0x0];if(!_0xdb1cec)continue;if(_0xdb1cec===this[_0x55a10a(0x3b3)]())continue;const _0x11a442=_0xb084a[_0x58c70f];if(!_0x11a442)continue;if(this['gain%1Points'[_0x55a10a(0x528)](_0x1482c8)]){const _0x10fcee=_0x11a442[_0x55a10a(0x529)],_0x32011a=_0x10fcee*_0x263bdb;this['gain%1Points'[_0x55a10a(0x528)](_0x1482c8)](_0x32011a,this['_multiclasses'][_0x58c70f]);}}},Game_Actor['prototype'][_0x559e70(0x333)]=function(_0x191cfb){const _0x3f1e3e=_0x559e70;if(!_0x191cfb)return;if(this[_0x3f1e3e(0x521)]())return;this[_0x3f1e3e(0x3ec)]();const _0xaa86b0=VisuMZ[_0x3f1e3e(0x1ee)][_0x3f1e3e(0x52c)][_0x3f1e3e(0x224)],_0x59c017=_0xaa86b0[_0x3f1e3e(0x289)];for(let _0x4087a7=0x1;_0x4087a7<_0x59c017;_0x4087a7++){if('niSVE'!==_0x3f1e3e(0x288)){const _0x5600ef=_0x4bba99(_0x21ea59['$1']);_0x1653e8[_0x3f1e3e(0x2da)](_0x5600ef);}else{let _0x4bd575=$dataClasses[this[_0x3f1e3e(0x475)][_0x4087a7]||0x0];if(!_0x4bd575)continue;if(_0x4bd575===this['currentClass']())continue;const _0x1bfc57=_0xaa86b0[_0x4087a7];if(!_0x1bfc57)continue;const _0x4da93f=_0x1bfc57['expRate'],_0x3f328b=Math[_0x3f1e3e(0x3ba)](_0x191cfb*_0x4da93f*this[_0x3f1e3e(0x252)]()),_0x3ad39a=this['_multiclasses'][_0x4087a7];this[_0x3f1e3e(0x44d)][_0x3ad39a]=this['_exp'][_0x3ad39a]||0x0;const _0x95a133=this['_exp'][_0x3ad39a]+_0x3f328b;this[_0x3f1e3e(0x2d1)](_0x95a133,_0x3ad39a);}}},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x4de)]=function(_0x4efe9b,_0x22998b){const _0x8c3652=_0x559e70;if(this['_multiclasses']===undefined)this[_0x8c3652(0x4a6)]();_0x22998b-=0x1;if(_0x4efe9b<=0x0&&_0x22998b<=0x0)return;this[_0x8c3652(0x456)](_0x4efe9b);const _0x228795=this['_multiclasses'][_0x8c3652(0x289)];for(let _0x2bab4a=0x0;_0x2bab4a<_0x228795;_0x2bab4a++){this[_0x8c3652(0x475)][_0x2bab4a]===_0x4efe9b&&(this['_multiclasses'][_0x2bab4a]=0x0);}this[_0x8c3652(0x475)][0x0]=this[_0x8c3652(0x3b3)]()['id'];if(_0x22998b<=0x0){this[_0x8c3652(0x208)](_0x4efe9b);return;}const _0x1db873=JsonEx['makeDeepCopy'](this);_0x1db873['_tempActor']=!![],this[_0x8c3652(0x475)][_0x22998b]=_0x4efe9b,this[_0x8c3652(0x433)](),this[_0x8c3652(0x42a)](),this['classAdjustHpMp'](_0x1db873),this[_0x8c3652(0x433)]();},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x2b3)]=function(_0x2955c2){const _0xcd58dc=_0x559e70;if(this[_0xcd58dc(0x475)]===undefined)this[_0xcd58dc(0x4a6)]();return this['_multiclasses'][0x0]=this[_0xcd58dc(0x3b3)]()['id'],this[_0xcd58dc(0x475)]['indexOf'](_0x2955c2)+0x1;},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x50d)]=function(){const _0x96ca10=_0x559e70;this['_classLevel']={},this['_classLevel'][this[_0x96ca10(0x3b3)]()['id']]=this[_0x96ca10(0x3d7)];},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x521)]=function(){const _0x1c1875=_0x559e70;return VisuMZ[_0x1c1875(0x1ee)][_0x1c1875(0x52c)]['General'][_0x1c1875(0x3a1)];},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x428)]=function(_0x45bb33){const _0x3b844b=_0x559e70;if(this[_0x3b844b(0x521)]())return this[_0x3b844b(0x3d7)];return this[_0x3b844b(0x363)](_0x45bb33),this[_0x3b844b(0x249)][_0x45bb33];},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x2d1)]=function(_0x38569d,_0x47550e){const _0x40852c=_0x559e70;if(this[_0x40852c(0x521)]())return this[_0x40852c(0x2e5)](_0x38569d);this[_0x40852c(0x44d)][_0x47550e]=Math[_0x40852c(0x246)](_0x38569d,0x0),this[_0x40852c(0x363)](_0x47550e);if(_0x47550e===this[_0x40852c(0x3b3)]()['id'])this[_0x40852c(0x42a)]();},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x363)]=function(_0x1d2f03){const _0x580877=_0x559e70;if(this['maintainLevels']())return;this['_exp'][_0x1d2f03]=this['_exp'][_0x1d2f03]||0x0,this[_0x580877(0x249)]=this[_0x580877(0x249)]||{},this[_0x580877(0x249)][_0x1d2f03]=this[_0x580877(0x249)][_0x1d2f03]||0x1;while(!(this['_classLevel'][_0x1d2f03]>=this[_0x580877(0x3c1)]())&&this[_0x580877(0x44d)][_0x1d2f03]>=this[_0x580877(0x2d9)](_0x1d2f03,this['_classLevel'][_0x1d2f03])){this[_0x580877(0x249)][_0x1d2f03]+=0x1,this[_0x580877(0x3e2)](_0x1d2f03);}while(this[_0x580877(0x44d)][_0x1d2f03]<this[_0x580877(0x213)](_0x1d2f03,this[_0x580877(0x249)][_0x1d2f03])){'AiSMW'===_0x580877(0x3e3)?_0x46ff88!==''?this['_priorityBattlerName']=_0x247e34:this['_priorityBattlerName']=_0x130d0e:this[_0x580877(0x249)][_0x1d2f03]-=0x1;}this[_0x580877(0x4f6)]();},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x29b)]=function(_0x2a7251,_0x77a412){const _0x1cacb1=_0x559e70,_0x48e818=$dataClasses[_0x2a7251],_0x5b3c44=_0x48e818['expParams'][0x0],_0x2fe2bf=_0x48e818[_0x1cacb1(0x539)][0x1],_0x46fb66=_0x48e818['expParams'][0x2],_0x5f2d2f=_0x48e818[_0x1cacb1(0x539)][0x3];return Math[_0x1cacb1(0x3ba)](_0x5b3c44*Math[_0x1cacb1(0x1d3)](_0x77a412-0x1,0.9+_0x46fb66/0xfa)*_0x77a412*(_0x77a412+0x1)/(0x6+Math[_0x1cacb1(0x1d3)](_0x77a412,0x2)/0x32/_0x5f2d2f)+(_0x77a412-0x1)*_0x2fe2bf);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x2d9)]=function(_0x1b15eb,_0x34d059){const _0x58bc99=_0x559e70;return this[_0x58bc99(0x29b)](_0x1b15eb,_0x34d059+0x1);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x213)]=function(_0x531448,_0x59f746){const _0x298bc6=_0x559e70;return this[_0x298bc6(0x29b)](_0x531448,_0x59f746);},Game_Actor['prototype'][_0x559e70(0x3e2)]=function(_0x6694d8){const _0x49e679=_0x559e70;this[_0x49e679(0x271)](_0x6694d8),this[_0x49e679(0x4d2)](_0x6694d8),Imported[_0x49e679(0x1ec)]&&(this[_0x49e679(0x2bd)](_0x6694d8),this[_0x49e679(0x2cb)](_0x6694d8));},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x4f6)]=function(){const _0x4ffb05=_0x559e70;if(this[_0x4ffb05(0x274)])return;this['_updateClassLearnedSkills']=!![];const _0x11961d=DataManager[_0x4ffb05(0x445)](this);for(const _0x19922d of _0x11961d){if(!_0x19922d)continue;const _0x2875c2=_0x19922d[_0x4ffb05(0x460)];if(!_0x2875c2)continue;for(const _0x1c55d8 of _0x2875c2){if(this['isLearnedSkill'](_0x1c55d8['skillId']))continue;if(this[_0x4ffb05(0x428)](_0x19922d['id'])>=_0x1c55d8[_0x4ffb05(0x3d7)]){const _0x4ca49f=this[_0x4ffb05(0x443)]||{};this['learnSkill'](_0x1c55d8[_0x4ffb05(0x500)]),this[_0x4ffb05(0x443)]=_0x4ca49f;}}}this[_0x4ffb05(0x274)]=![];},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x276)]=Game_Actor[_0x559e70(0x2db)][_0x559e70(0x4a7)],Game_Actor['prototype'][_0x559e70(0x4a7)]=function(_0x4d29fe){const _0x2c1525=_0x559e70;let _0x2a7554=VisuMZ[_0x2c1525(0x1ee)]['Game_Actor_paramBase'][_0x2c1525(0x27a)](this,_0x4d29fe);this[_0x2c1525(0x3ec)]();const _0x5d363a=VisuMZ[_0x2c1525(0x1ee)][_0x2c1525(0x52c)][_0x2c1525(0x224)],_0x53d1d2=_0x2c1525(0x3b8)[_0x2c1525(0x528)](_0x4d29fe),_0x2112db=_0x5d363a[_0x2c1525(0x289)];for(let _0x5e4f1d=0x1;_0x5e4f1d<_0x2112db;_0x5e4f1d++){if(_0x2c1525(0x4eb)!=='nIKUb'){if(_0x3fd707==='AP'){const _0x3a686f=_0x17a28f['getAbilityPoints']();if(_0x3a686f<_0x11b4c3)return![];}else{if(_0x51baca==='SP'){const _0x5a705b=_0x755957[_0x2c1525(0x45e)]();if(_0x5a705b<_0x5bbd17)return![];}}}else{let _0x4835e2=$dataClasses[this[_0x2c1525(0x475)][_0x5e4f1d]||0x0];if(!_0x4835e2)continue;if(_0x4835e2===this[_0x2c1525(0x3b3)]())continue;const _0x4fe71a=_0x5d363a[_0x5e4f1d];if(!_0x4fe71a)continue;const _0x2cf956=_0x4fe71a[_0x53d1d2];_0x2a7554+=_0x2cf956*this[_0x2c1525(0x45a)](this['_multiclasses'][_0x5e4f1d],_0x4d29fe);}}return _0x2a7554;},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x45a)]=function(_0x388904,_0x556bf2){const _0xbec3f5=_0x559e70,_0x1141c3=$dataClasses[_0x388904],_0x11c383=this[_0xbec3f5(0x428)](_0x388904);if(_0x11c383>0x63){if('MvpcD'!==_0xbec3f5(0x1e3))return _0x32202c[_0xbec3f5(0x278)]&&_0x17d4cd[_0xbec3f5(0x344)]['Settings']['Param']['DrawIcons'];else{const _0xfba586=_0x1141c3[_0xbec3f5(0x3af)][_0x556bf2][0x63],_0x1236c9=_0x1141c3[_0xbec3f5(0x3af)][_0x556bf2][0x62];return _0xfba586+(_0xfba586-_0x1236c9)*(_0x11c383-0x63);}}else return _0x1141c3[_0xbec3f5(0x3af)][_0x556bf2][_0x11c383];},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x375)]=function(_0x2ec53e){const _0x2fc724=_0x559e70;if(this['_classLevel'][_0x2ec53e]>=this['maxLevel']())return 0x1;const _0x97d192=this[_0x2fc724(0x428)](_0x2ec53e),_0x8404ba=this[_0x2fc724(0x2d9)](_0x2ec53e,_0x97d192)-this[_0x2fc724(0x213)](_0x2ec53e,_0x97d192);this[_0x2fc724(0x44d)][_0x2ec53e]=this[_0x2fc724(0x44d)][_0x2ec53e]||0x0;const _0x2487cb=this['_exp'][_0x2ec53e]-this['currentClassLevelExp'](_0x2ec53e,_0x97d192);return(_0x2487cb/_0x8404ba)[_0x2fc724(0x4dd)](0x0,0x1);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x29f)]=function(){const _0x4c94ad=_0x559e70;for(;;){if('bNfzI'===_0x4c94ad(0x393)){const _0x30dac2=DataManager['checkForNewUnlockedClasses'](this);if(_0x30dac2['length']>0x0)for(const _0xba0c31 of _0x30dac2){this['unlockClass'](_0xba0c31);}else break;}else{if(this[_0x4c94ad(0x229)]===_0x2f5946)this[_0x4c94ad(0x3c3)]();if(this['_unlockedClasses'][_0x4c94ad(0x2df)](_0x1e7ebf))return;this[_0x4c94ad(0x229)][_0x4c94ad(0x461)](_0x69671d),this[_0x4c94ad(0x229)]['remove'](0x0),this['_unlockedClasses']['sort'](function(_0x53aefd,_0x4c1987){return _0x53aefd-_0x4c1987;});}}},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x4d1)]=function(){const _0x687b83=_0x559e70;let _0x1d9521=[];const _0x5b4b4e=VisuMZ[_0x687b83(0x1ee)]['RegExp'],_0x432df9=this['actor']()[_0x687b83(0x30a)],_0x4591fa=_0x432df9[_0x687b83(0x28a)](_0x5b4b4e[_0x687b83(0x2fd)]);if(_0x4591fa)for(const _0x398b2 of _0x4591fa){if(_0x687b83(0x3ee)!==_0x687b83(0x3ee))return this[_0x687b83(0x44b)]()[_0x687b83(0x28a)](/RIGHT/i);else{if(!_0x398b2)continue;_0x398b2[_0x687b83(0x28a)](_0x5b4b4e['RestrictClassChangeTier']);const _0x190aa2=String(RegExp['$1'])[_0x687b83(0x302)](',')[_0x687b83(0x44c)](_0x504132=>Number(_0x504132));_0x1d9521=_0x1d9521[_0x687b83(0x516)](_0x190aa2);}}_0x1d9521=_0x1d9521[_0x687b83(0x513)]((_0x2bc095,_0x5739d3,_0x2fee7e)=>_0x2fee7e[_0x687b83(0x204)](_0x2bc095)===_0x5739d3),_0x1d9521[_0x687b83(0x2d8)](null)[_0x687b83(0x2d8)](undefined),_0x1d9521[_0x687b83(0x47b)]((_0xe154fa,_0x4fa1f8)=>_0xe154fa-_0x4fa1f8),this[_0x687b83(0x3c8)]=_0x1d9521;},Game_Actor[_0x559e70(0x2db)]['isClassChangeTierRestricted']=function(_0xbd7a2e){const _0x4f6e5f=_0x559e70;return this['_classChangeTierRestrictions']===undefined&&(_0x4f6e5f(0x3b5)!==_0x4f6e5f(0x3b5)?this['_unlockedClasses']['push'](_0x58ca5f(_0x401254)):this['initClassChangeRestrictions']()),this[_0x4f6e5f(0x3c8)][_0x4f6e5f(0x2df)](_0xbd7a2e);},Game_Actor[_0x559e70(0x2db)][_0x559e70(0x369)]=function(_0xf9ef19){const _0x57cd36=_0x559e70;this[_0x57cd36(0x3c8)]===undefined&&(_0x57cd36(0x2cc)===_0x57cd36(0x2cc)?this[_0x57cd36(0x4d1)]():this[_0x57cd36(0x40a)]=_0x86b9d2);if(this[_0x57cd36(0x3c8)][_0x57cd36(0x2df)](_0xf9ef19))return;this[_0x57cd36(0x3c8)][_0x57cd36(0x461)](_0xf9ef19),this['_classChangeTierRestrictions']['sort']((_0x519faa,_0x2e59d6)=>_0x519faa-_0x2e59d6);},Game_Actor[_0x559e70(0x2db)]['removeClassChangeTierRestriction']=function(_0x1921b8){const _0x4eaa19=_0x559e70;this[_0x4eaa19(0x3c8)]===undefined&&this[_0x4eaa19(0x4d1)]();if(!this[_0x4eaa19(0x3c8)][_0x4eaa19(0x2df)](_0x1921b8))return;this['_classChangeTierRestrictions'][_0x4eaa19(0x2d8)](_0x1921b8),this[_0x4eaa19(0x3c8)][_0x4eaa19(0x47b)]((_0x38085c,_0x255dad)=>_0x38085c-_0x255dad);},Game_Enemy[_0x559e70(0x2db)][_0x559e70(0x23f)]=function(){const _0x5dc521=_0x559e70,_0x20beee=VisuMZ[_0x5dc521(0x1ee)][_0x5dc521(0x52c)][_0x5dc521(0x41f)],_0x556f5c=VisuMZ['ClassChangeSystem'][_0x5dc521(0x4d5)],_0x353b9c=this[_0x5dc521(0x239)]()['note'];if(_0x353b9c['match'](_0x556f5c[_0x5dc521(0x3cb)])){if(_0x5dc521(0x478)!==_0x5dc521(0x478))_0x398ec0=_0x29b5a7[_0x5dc521(0x513)](_0x275a6e=>_0x275a6e[_0x5dc521(0x21b)]());else try{if(_0x5dc521(0x417)===_0x5dc521(0x303))_0x349776*=this['classPointsRate']();else return eval(RegExp['$1']);}catch(_0x3ae304){if($gameTemp['isPlaytest']())console[_0x5dc521(0x3cd)](_0x3ae304);return 0x0;}}try{return eval(_0x20beee[_0x5dc521(0x483)]);}catch(_0x4bbf29){if($gameTemp[_0x5dc521(0x240)]())console['log'](_0x4bbf29);return 0x0;}},Game_Enemy[_0x559e70(0x2db)]['jobPoints']=function(){const _0x273a89=_0x559e70,_0x4154dc=VisuMZ[_0x273a89(0x1ee)][_0x273a89(0x52c)]['JobPoints'],_0x1b1469=VisuMZ[_0x273a89(0x1ee)][_0x273a89(0x4d5)],_0x4e300b=this[_0x273a89(0x239)]()[_0x273a89(0x30a)];if(_0x4e300b[_0x273a89(0x28a)](_0x1b1469['EnemyJobPoints'])){if(_0x273a89(0x29c)!==_0x273a89(0x29c))return this['traitObjects']()['reduce']((_0x2d08c4,_0x298994)=>{const _0x6d2a09=_0x273a89;return _0x298994&&_0x298994[_0x6d2a09(0x30a)][_0x6d2a09(0x28a)](_0x178cd8['ClassChangeSystem'][_0x6d2a09(0x4d5)]['ClassPointsRate'])?_0x2d08c4*(_0x3d9432(_0xe41110['$1'])*0.01):_0x2d08c4;},0x1);else try{if('WOKZG'!==_0x273a89(0x44a))_0x32ed52['checkForAutoClassUnlocks']();else return eval(RegExp['$1']);}catch(_0x2b158b){if($gameTemp[_0x273a89(0x240)]())console['log'](_0x2b158b);return 0x0;}}try{return eval(_0x4154dc[_0x273a89(0x483)]);}catch(_0x397ea8){if($gameTemp[_0x273a89(0x240)]())console[_0x273a89(0x3cd)](_0x397ea8);return 0x0;}},VisuMZ['ClassChangeSystem'][_0x559e70(0x34a)]=Game_Party['prototype']['initialize'],Game_Party[_0x559e70(0x2db)][_0x559e70(0x41e)]=function(){const _0xa236b0=_0x559e70;VisuMZ['ClassChangeSystem'][_0xa236b0(0x34a)][_0xa236b0(0x27a)](this),this[_0xa236b0(0x3c3)]();},Game_Party[_0x559e70(0x2db)][_0x559e70(0x3c3)]=function(){const _0x565a33=_0x559e70;this[_0x565a33(0x229)]=[];},Game_Party['prototype']['getUnlockedClasses']=function(){const _0x5bea60=_0x559e70;if(this[_0x5bea60(0x229)]===undefined)this[_0x5bea60(0x3c3)]();return this['_unlockedClasses'];},Game_Party[_0x559e70(0x2db)]['unlockClass']=function(_0x5c3257){const _0x214eb0=_0x559e70;for(const _0x56ab17 of this[_0x214eb0(0x438)]()){if(!_0x56ab17)continue;_0x56ab17[_0x214eb0(0x456)](_0x5c3257);}if(this['_unlockedClasses']===undefined)this[_0x214eb0(0x3c3)]();if(this[_0x214eb0(0x229)][_0x214eb0(0x2df)](_0x5c3257))return;this['_unlockedClasses'][_0x214eb0(0x461)](_0x5c3257),this['_unlockedClasses'][_0x214eb0(0x47b)](function(_0x15916e,_0x383557){const _0x163ab6=_0x214eb0;if(_0x163ab6(0x3e5)!==_0x163ab6(0x1ef))return _0x15916e-_0x383557;else{_0x37f144[_0x163ab6(0x4e3)](_0xc1c0f8,_0x1c9c90);const _0x2695e0=_0x1a63ec[_0x163ab6(0x508)];for(const _0x31f3fd of _0x2695e0){_0x38a9ad[_0x163ab6(0x383)](_0x31f3fd);}}});},Game_Party[_0x559e70(0x2db)][_0x559e70(0x383)]=function(_0x47c741){const _0x58e7fa=_0x559e70;for(const _0x2b15d5 of this[_0x58e7fa(0x438)]()){if(!_0x2b15d5)continue;_0x2b15d5[_0x58e7fa(0x383)](_0x47c741);}if(this[_0x58e7fa(0x229)]===undefined)this[_0x58e7fa(0x3c3)]();if(!this[_0x58e7fa(0x229)][_0x58e7fa(0x2df)](_0x47c741))return;this[_0x58e7fa(0x229)][_0x58e7fa(0x2d8)](_0x47c741)[_0x58e7fa(0x2d8)](null),this[_0x58e7fa(0x229)][_0x58e7fa(0x47b)](function(_0x82a307,_0x4eb7c2){return _0x82a307-_0x4eb7c2;});},Game_Party[_0x559e70(0x2db)][_0x559e70(0x1ed)]=function(){const _0x3d51c3=_0x559e70,_0x2386f5=this['allMembers']();return Math[_0x3d51c3(0x246)](...this[_0x3d51c3(0x329)]()[_0x3d51c3(0x44c)](_0x17140d=>_0x17140d[_0x3d51c3(0x231)]()));},Game_Troop[_0x559e70(0x2db)]['classPointsTotal']=function(){const _0x18be7f=_0x559e70;return this['deadMembers']()[_0x18be7f(0x32c)]((_0x22d9af,_0x5aef62)=>_0x22d9af+_0x5aef62[_0x18be7f(0x23f)](),0x0);},Game_Troop[_0x559e70(0x2db)][_0x559e70(0x3ef)]=function(){const _0x2133e8=_0x559e70;return this[_0x2133e8(0x2a9)]()[_0x2133e8(0x32c)]((_0x1345f5,_0x309a6d)=>_0x1345f5+_0x309a6d[_0x2133e8(0x3aa)](),0x0);},VisuMZ['ClassChangeSystem']['Scene_Menu_createCommandWindow']=Scene_Menu[_0x559e70(0x2db)]['createCommandWindow'],Scene_Menu[_0x559e70(0x2db)][_0x559e70(0x292)]=function(){const _0x13bf2e=_0x559e70;VisuMZ[_0x13bf2e(0x1ee)][_0x13bf2e(0x265)][_0x13bf2e(0x27a)](this);const _0x679954=this[_0x13bf2e(0x20e)];_0x679954[_0x13bf2e(0x474)](_0x13bf2e(0x1ee),this['commandPersonal'][_0x13bf2e(0x3dc)](this));},VisuMZ[_0x559e70(0x1ee)]['Scene_Menu_onPersonalOk']=Scene_Menu[_0x559e70(0x2db)]['onPersonalOk'],Scene_Menu['prototype']['onPersonalOk']=function(){const _0x5f3226=_0x559e70;this[_0x5f3226(0x20e)]['currentSymbol']()==='ClassChangeSystem'?SceneManager[_0x5f3226(0x461)](Scene_ClassChange):VisuMZ['ClassChangeSystem']['Scene_Menu_onPersonalOk']['call'](this);};function Scene_ClassChange(){const _0x2e2d01=_0x559e70;this[_0x2e2d01(0x41e)](...arguments);}Scene_ClassChange[_0x559e70(0x2db)]=Object['create'](Scene_MenuBase['prototype']),Scene_ClassChange[_0x559e70(0x2db)]['constructor']=Scene_ClassChange,Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x41e)]=function(){const _0x5e6f06=_0x559e70;Scene_MenuBase[_0x5e6f06(0x2db)][_0x5e6f06(0x41e)][_0x5e6f06(0x27a)](this),this[_0x5e6f06(0x2a8)]=this[_0x5e6f06(0x2a8)]||[];},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x447)]=function(){return!![];},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x4c7)]=function(){const _0x5eca85=_0x559e70;if(this['highestTier']()>0x1)return this[_0x5eca85(0x4e0)]&&this[_0x5eca85(0x4e0)][_0x5eca85(0x281)];else{if(_0x5eca85(0x388)===_0x5eca85(0x388))return this[_0x5eca85(0x328)]&&this[_0x5eca85(0x328)][_0x5eca85(0x281)];else this[_0x5eca85(0x4f6)]();}},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x425)]=function(){const _0x3de870=_0x559e70;Scene_MenuBase[_0x3de870(0x2db)][_0x3de870(0x425)][_0x3de870(0x27a)](this),this[_0x3de870(0x374)]();},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x49a)]=function(){return!![];},Scene_ClassChange['prototype'][_0x559e70(0x442)]=function(){const _0x2c2d77=_0x559e70;if(ConfigManager['uiMenuStyle']&&ConfigManager['uiHelpPosition']!==undefined)return ConfigManager[_0x2c2d77(0x20b)];else{if(this[_0x2c2d77(0x2eb)]())return this[_0x2c2d77(0x44b)]()['match'](/LOWER/i);else _0x2c2d77(0x3f7)===_0x2c2d77(0x44e)?_0xd81b06=_0x37ff59[_0x2c2d77(0x1da)](_0x59b095):Scene_MenuBase['prototype']['isRightInputMode'][_0x2c2d77(0x27a)](this);}},Scene_ClassChange['prototype'][_0x559e70(0x467)]=function(){const _0x165c0b=_0x559e70;if(ConfigManager[_0x165c0b(0x200)]&&ConfigManager[_0x165c0b(0x241)]!==undefined)return ConfigManager[_0x165c0b(0x241)];else{if(this['isUseSkillsStatesCoreUpdatedLayout']())return this[_0x165c0b(0x44b)]()[_0x165c0b(0x28a)](/RIGHT/i);else Scene_MenuBase['prototype'][_0x165c0b(0x467)][_0x165c0b(0x27a)](this);}},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x44b)]=function(){const _0x2476f0=_0x559e70;return VisuMZ[_0x2476f0(0x1ee)]['Settings']['Window'][_0x2476f0(0x494)];},Scene_ClassChange['prototype'][_0x559e70(0x2eb)]=function(){const _0x36ab1c=_0x559e70;return VisuMZ[_0x36ab1c(0x1ee)][_0x36ab1c(0x52c)][_0x36ab1c(0x25b)][_0x36ab1c(0x1ea)];},Scene_ClassChange[_0x559e70(0x2db)]['create']=function(){const _0x594c84=_0x559e70;Scene_MenuBase[_0x594c84(0x2db)]['create'][_0x594c84(0x27a)](this),this[_0x594c84(0x47d)](),this['createStatusWindow'](),this['createClassTierWindow'](),this[_0x594c84(0x291)](),this[_0x594c84(0x305)](),this['refreshActor']();},Scene_ClassChange['prototype']['createStatusWindow']=function(){const _0x4fd8d0=_0x559e70,_0x2dc16e=this[_0x4fd8d0(0x469)]();this['_statusWindow']=new Window_ClassStatus(_0x2dc16e),this[_0x4fd8d0(0x315)](this[_0x4fd8d0(0x232)]),this[_0x4fd8d0(0x232)]['setBackgroundType'](VisuMZ['ClassChangeSystem']['Settings'][_0x4fd8d0(0x25b)][_0x4fd8d0(0x3fa)]);},Scene_ClassChange['prototype']['statusWindowRect']=function(){const _0x306dea=_0x559e70,_0x32718a=VisuMZ['ClassChangeSystem']['Settings'][_0x306dea(0x25b)];if(_0x32718a[_0x306dea(0x53c)]){if(_0x306dea(0x431)!==_0x306dea(0x431))this[_0x306dea(0x419)](-_0x5f4fbe,_0x2b7b7e);else return _0x32718a[_0x306dea(0x53c)][_0x306dea(0x27a)](this);}const _0x46a6a4=Math['floor'](Graphics[_0x306dea(0x20c)]/0x2),_0x3be808=this[_0x306dea(0x434)](),_0x489cad=this['isRightInputMode']()?0x0:_0x46a6a4,_0x2c57a9=this[_0x306dea(0x2c3)]();return new Rectangle(_0x489cad,_0x2c57a9,_0x46a6a4,_0x3be808);},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x487)]=function(){const _0x5714df=_0x559e70,_0x188c3c=this['classTierWindowRect'](),_0x3a3039=new Window_ClassTier(_0x188c3c);_0x3a3039[_0x5714df(0x51b)](this[_0x5714df(0x280)]),_0x3a3039[_0x5714df(0x47c)](VisuMZ[_0x5714df(0x1ee)]['Settings'][_0x5714df(0x25b)][_0x5714df(0x38e)]),this[_0x5714df(0x315)](_0x3a3039),this['_classTierWindow']=_0x3a3039,_0x3a3039[_0x5714df(0x474)](_0x5714df(0x30b),this[_0x5714df(0x40f)][_0x5714df(0x3dc)](this)),this[_0x5714df(0x364)]()>0x1&&(_0x3a3039[_0x5714df(0x474)](_0x5714df(0x3cf),this[_0x5714df(0x294)][_0x5714df(0x3dc)](this)),_0x3a3039[_0x5714df(0x474)](_0x5714df(0x40b),this[_0x5714df(0x492)][_0x5714df(0x3dc)](this))),_0x3a3039[_0x5714df(0x474)](_0x5714df(0x504),this[_0x5714df(0x384)]['bind'](this));},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x2c7)]=function(){const _0xcf38eb=_0x559e70,_0x5997db=VisuMZ[_0xcf38eb(0x1ee)][_0xcf38eb(0x52c)][_0xcf38eb(0x25b)];if(_0x5997db[_0xcf38eb(0x26f)])return _0x5997db[_0xcf38eb(0x26f)][_0xcf38eb(0x27a)](this);const _0xbba4a2=Graphics[_0xcf38eb(0x20c)]-this['_statusWindow'][_0xcf38eb(0x2cd)],_0x1e0cc7=this[_0xcf38eb(0x434)](),_0x350743=this[_0xcf38eb(0x467)]()?_0xbba4a2:0x0,_0xdb042=this[_0xcf38eb(0x2c3)]();return new Rectangle(_0x350743,_0xdb042,_0xbba4a2,_0x1e0cc7);},Scene_ClassChange['prototype']['createClassListWindow']=function(){const _0x2e10cf=_0x559e70,_0x226eab=this[_0x2e10cf(0x472)](),_0x401225=new Window_ClassList(_0x226eab);_0x401225['setHelpWindow'](this[_0x2e10cf(0x280)]),_0x401225['setStatusWindow'](this['_statusWindow']),_0x401225['setBackgroundType'](VisuMZ[_0x2e10cf(0x1ee)][_0x2e10cf(0x52c)][_0x2e10cf(0x25b)][_0x2e10cf(0x38c)]),this[_0x2e10cf(0x315)](_0x401225),this[_0x2e10cf(0x328)]=_0x401225,_0x401225[_0x2e10cf(0x474)](_0x2e10cf(0x30b),this[_0x2e10cf(0x41b)][_0x2e10cf(0x3dc)](this)),this[_0x2e10cf(0x364)]()<=0x1&&(_0x401225[_0x2e10cf(0x474)]('pagedown',this[_0x2e10cf(0x294)][_0x2e10cf(0x3dc)](this)),_0x401225[_0x2e10cf(0x474)](_0x2e10cf(0x40b),this[_0x2e10cf(0x492)]['bind'](this))),_0x401225[_0x2e10cf(0x474)](_0x2e10cf(0x324),this[_0x2e10cf(0x21f)][_0x2e10cf(0x3dc)](this));},Scene_ClassChange['prototype'][_0x559e70(0x472)]=function(){const _0x664f0a=_0x559e70,_0x16c602=VisuMZ[_0x664f0a(0x1ee)][_0x664f0a(0x52c)][_0x664f0a(0x25b)];if(_0x16c602[_0x664f0a(0x371)])return _0x16c602[_0x664f0a(0x371)][_0x664f0a(0x27a)](this);const _0x3d37b2=Graphics['boxWidth']-this[_0x664f0a(0x232)][_0x664f0a(0x2cd)],_0x519f2d=this['mainAreaHeight'](),_0xc640cc=this[_0x664f0a(0x467)]()?_0x3d37b2:0x0,_0x24ec67=this[_0x664f0a(0x2c3)]();return new Rectangle(_0xc640cc,_0x24ec67,_0x3d37b2,_0x519f2d);},Scene_ClassChange['prototype']['highestTier']=function(){const _0x118040=_0x559e70;if(this[_0x118040(0x4a4)]!==undefined)return this['_highestTier'];return this['_highestTier']=$gameParty[_0x118040(0x1ed)](),this[_0x118040(0x4a4)];},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x305)]=function(){const _0x5637fd=_0x559e70;if(this[_0x5637fd(0x364)]()>0x1)this[_0x5637fd(0x4e0)]['forceSelect'](0x0),this['_classTierWindow'][_0x5637fd(0x4ff)](),this['_classTierWindow']['activate'](),this[_0x5637fd(0x328)][_0x5637fd(0x376)](),this[_0x5637fd(0x328)][_0x5637fd(0x4ef)]();else{if(_0x5637fd(0x1f3)===_0x5637fd(0x1f3))this[_0x5637fd(0x328)][_0x5637fd(0x48e)](0x0),this[_0x5637fd(0x328)][_0x5637fd(0x4df)](0x1),this['_classListWindow']['show'](),this[_0x5637fd(0x328)]['activate'](),this[_0x5637fd(0x4e0)]['hide'](),this[_0x5637fd(0x4e0)][_0x5637fd(0x4ef)]();else{if(!_0x38253a[_0x5637fd(0x349)]())return;if(!this[_0x5637fd(0x3b1)]()[_0x5637fd(0x42e)]())return;const _0x2c9abb=_0xfc0af7[_0x5637fd(0x1ee)][_0x5637fd(0x52c)][_0x5637fd(0x296)];let _0x133769=0x0;try{_0x133769=_0xbbf3ab(_0x2c9abb[_0x5637fd(0x2c4)]);}catch(_0x1b448d){if(_0x1ef22f[_0x5637fd(0x240)]())_0x1540aa[_0x5637fd(0x3cd)](_0x1b448d);}this[_0x5637fd(0x3b1)]()[_0x5637fd(0x29d)](_0x133769);}}},Scene_ClassChange['prototype'][_0x559e70(0x325)]=function(){const _0x329220=_0x559e70,_0x921807=this['actor']();_0x921807['checkForAutoClassUnlocks'](),this['_statusWindow'][_0x329220(0x4ec)](_0x921807),this[_0x329220(0x4e0)][_0x329220(0x4ec)](_0x921807),this['_classListWindow'][_0x329220(0x4ec)](_0x921807);},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x2d5)]=function(){const _0x3e6ab4=_0x559e70;Scene_MenuBase[_0x3e6ab4(0x2db)]['onActorChange']['call'](this),this['refreshActor'](),this[_0x3e6ab4(0x305)]();},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x384)]=function(){const _0x432344=_0x559e70,_0x538642=this[_0x432344(0x4e0)][_0x432344(0x406)]();this[_0x432344(0x328)][_0x432344(0x4df)](_0x538642),this[_0x432344(0x328)][_0x432344(0x4ff)](),this['_classListWindow'][_0x432344(0x323)](),this['_classListWindow'][_0x432344(0x48e)](0x0),this['_classTierWindow']['hide'](),this[_0x432344(0x4e0)]['deactivate'](),this[_0x432344(0x2b1)]();},Scene_ClassChange[_0x559e70(0x2db)]['onClassListCancel']=function(){const _0x37ecf7=_0x559e70;this[_0x37ecf7(0x364)]()>0x1?(this[_0x37ecf7(0x4e0)][_0x37ecf7(0x4ff)](),this['_classTierWindow'][_0x37ecf7(0x323)](),this[_0x37ecf7(0x328)][_0x37ecf7(0x376)](),this[_0x37ecf7(0x328)]['deactivate'](),this[_0x37ecf7(0x232)]['setTempActor'](null)):_0x37ecf7(0x399)!=='qygxc'?_0x44ea58[_0x37ecf7(0x52a)](_0x5eb4a1,_0x324aa7):this[_0x37ecf7(0x40f)]();},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x21f)]=function(){const _0x54282f=_0x559e70,_0x12d14f=this[_0x54282f(0x328)][_0x54282f(0x526)],_0xfa1bed=this['_classListWindow'][_0x54282f(0x406)](),_0x2ca4df=this['_classListWindow'][_0x54282f(0x52f)](),_0x1094b5=_0xfa1bed?_0xfa1bed['id']:0x0;this[_0x54282f(0x2e8)][_0x54282f(0x4de)](_0x1094b5,_0x12d14f),this['_classTierWindow'][_0x54282f(0x42a)](),this[_0x54282f(0x328)]['refresh'](),this[_0x54282f(0x232)][_0x54282f(0x411)](null),this[_0x54282f(0x3c0)](_0x1094b5,_0x12d14f),this[_0x54282f(0x305)]();if(this[_0x54282f(0x4e0)][_0x54282f(0x281)])this['_classTierWindow'][_0x54282f(0x4e5)](_0x12d14f-0x1);else this[_0x54282f(0x328)]['active']&&this[_0x54282f(0x328)][_0x54282f(0x4e5)](_0x2ca4df);},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x3c0)]=function(_0x792b29,_0x358ec2){const _0x351900=_0x559e70,_0x15c3a6=this[_0x351900(0x4af)](_0x358ec2);this[_0x351900(0x1e1)](_0x792b29,_0x358ec2,_0x15c3a6);},Scene_ClassChange[_0x559e70(0x2db)]['createAnimationDummySprite']=function(_0x212315){const _0x333af6=_0x559e70,_0x591dd7=new Sprite(),_0x379902=VisuMZ['ClassChangeSystem']['Settings'][_0x333af6(0x25b)];if(_0x212315<=0x1){const _0x9eb4e2=this['_statusWindow'];_0x591dd7['x']=_0x9eb4e2['x']+Math['round'](_0x9eb4e2[_0x333af6(0x2cd)]/0x2),_0x591dd7['y']=_0x9eb4e2['y']+Math[_0x333af6(0x3ba)](_0x9eb4e2[_0x333af6(0x2f1)]/0x2),_0x591dd7['x']+=_0x379902['ConfirmAniPrimaryOffsetX']||0x0,_0x591dd7['y']+=_0x379902[_0x333af6(0x3a2)]||0x0;}else{const _0x53cc5b=this[_0x333af6(0x4e0)],_0x45e0b4=_0x53cc5b['itemRect'](_0x53cc5b[_0x333af6(0x52f)]()),_0x2d9429=_0x53cc5b[_0x333af6(0x3e4)]||0x0;_0x591dd7['x']=_0x53cc5b['x']+_0x45e0b4['x']+Math[_0x333af6(0x3ba)](_0x45e0b4['width']/0x2)+_0x2d9429,_0x591dd7['y']=_0x53cc5b['y']+_0x45e0b4['y']+Math[_0x333af6(0x3ba)](_0x45e0b4[_0x333af6(0x2f1)]/0x2)+_0x2d9429,_0x591dd7['x']+=_0x379902[_0x333af6(0x2be)]||0x0,_0x591dd7['y']+=_0x379902[_0x333af6(0x322)]||0x0;}return _0x591dd7['x']+=this[_0x333af6(0x49e)]['x'],_0x591dd7['y']+=this[_0x333af6(0x49e)]['y'],_0x591dd7;},Scene_ClassChange['prototype'][_0x559e70(0x1e1)]=function(_0x5a95de,_0x136704,_0xc38122){const _0x44c3ef=_0x559e70,_0x879dfc=this[_0x44c3ef(0x3fe)](_0x5a95de),_0x5937ad=$dataAnimations[_0x879dfc];if(!_0x5937ad)return;const _0x15d3a9=this[_0x44c3ef(0x31a)](_0x5937ad),_0x35b620=new(_0x15d3a9?Sprite_AnimationMV:Sprite_Animation)(),_0xcd923e=[_0xc38122],_0x2bb465=0x0;_0x35b620[_0x44c3ef(0x3a6)](_0xcd923e,_0x5937ad,![],_0x2bb465,null),_0x35b620[_0x44c3ef(0x4fa)]=_0x136704,this[_0x44c3ef(0x394)](_0xc38122),this['addChild'](_0x35b620),this['_animations'][_0x44c3ef(0x461)](_0x35b620);},Scene_ClassChange[_0x559e70(0x2db)]['getClassChangeAnimationID']=function(_0x3d80fa){const _0x41fd40=_0x559e70,_0x486bf0=$dataClasses[_0x3d80fa];if(_0x486bf0){const _0x1bf828=VisuMZ[_0x41fd40(0x1ee)][_0x41fd40(0x4d5)],_0x2b4d8e=_0x486bf0[_0x41fd40(0x30a)];if(_0x2b4d8e[_0x41fd40(0x28a)](_0x1bf828[_0x41fd40(0x3e7)]))return Number(RegExp['$1']);}return VisuMZ[_0x41fd40(0x1ee)][_0x41fd40(0x52c)][_0x41fd40(0x25b)][_0x41fd40(0x2a7)];},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x31a)]=function(_0x43a89a){const _0x110915=_0x559e70;return!!_0x43a89a[_0x110915(0x514)];},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x374)]=function(){const _0x235a88=_0x559e70,_0x36093b=[];for(const _0x157c5c of this['_animations']){if('LbOmK'!==_0x235a88(0x407))_0x2e57c0=_0x46f5ca||this[_0x235a88(0x3b3)]()['id'];else{if(!_0x157c5c)continue;if(_0x157c5c[_0x235a88(0x293)]())continue;_0x36093b['push'](_0x157c5c);}}for(const _0x3a178f of _0x36093b){if(!_0x3a178f)continue;for(const _0x5c00d8 of _0x3a178f[_0x235a88(0x2fa)]){this['removeChild'](_0x5c00d8);}this['_animations'][_0x235a88(0x2d8)](_0x3a178f),this[_0x235a88(0x1e6)](_0x3a178f);};},Scene_ClassChange[_0x559e70(0x2db)]['forceRemoveClassChangeAnimations']=function(){const _0x48ff3d=_0x559e70,_0x55b608=[];for(const _0x2c8f35 of this[_0x48ff3d(0x2a8)]){if(_0x48ff3d(0x24b)===_0x48ff3d(0x24b)){if(!_0x2c8f35)continue;if(_0x2c8f35[_0x48ff3d(0x4fa)]<=0x1)continue;_0x55b608[_0x48ff3d(0x461)](_0x2c8f35);}else{_0x16f509[_0x48ff3d(0x1ee)]['Scene_Menu_createCommandWindow'][_0x48ff3d(0x27a)](this);const _0x1a02ef=this[_0x48ff3d(0x20e)];_0x1a02ef[_0x48ff3d(0x474)](_0x48ff3d(0x1ee),this[_0x48ff3d(0x2b5)][_0x48ff3d(0x3dc)](this));}}for(const _0x1709f5 of _0x55b608){if(_0x48ff3d(0x273)!=='CTYBQ')this['_rewards'][_0x48ff3d(0x3aa)]=_0x4a510b['jobPointsTotal']();else{if(!_0x1709f5)continue;for(const _0x3f1593 of _0x1709f5['_targets']){_0x48ff3d(0x234)!==_0x48ff3d(0x234)?_0x56ae42=_0x40fc59(_0x9fa767['$1']):this['removeChild'](_0x3f1593);}this[_0x48ff3d(0x2a8)]['remove'](_0x1709f5),this[_0x48ff3d(0x1e6)](_0x1709f5);}};},Scene_ClassChange['prototype']['buttonAssistSlotWindowShift']=function(){const _0x253af2=_0x559e70;if(!this[_0x253af2(0x4e0)])return![];if(!this[_0x253af2(0x4e0)]['active'])return![];return this[_0x253af2(0x4e0)][_0x253af2(0x1e7)]();},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x2e1)]=function(){const _0x3ae54e=_0x559e70;if(this[_0x3ae54e(0x534)]())return TextManager[_0x3ae54e(0x24f)]('shift');return Scene_MenuBase['prototype'][_0x3ae54e(0x2e1)][_0x3ae54e(0x27a)](this);},Scene_ClassChange[_0x559e70(0x2db)]['buttonAssistText3']=function(){const _0x233eef=_0x559e70;if(this['buttonAssistSlotWindowShift']()){if(_0x233eef(0x27b)!==_0x233eef(0x46f))return TextManager['classChange_multiclass_ShiftHelp'];else{if(this[_0x233eef(0x521)]())return this[_0x233eef(0x2e5)](_0xf41393);this[_0x233eef(0x44d)][_0x4d0d7a]=_0x1ab477[_0x233eef(0x246)](_0x2af4a0,0x0),this[_0x233eef(0x363)](_0x321307);if(_0x286ce6===this[_0x233eef(0x3b3)]()['id'])this['refresh']();}}return Scene_MenuBase[_0x233eef(0x2db)]['buttonAssistText3'][_0x233eef(0x27a)](this);},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x486)]=function(){const _0x5a6d1c=_0x559e70;if(this[_0x5a6d1c(0x534)]())return this[_0x5a6d1c(0x1f6)]['width']/0x5/-0x3;return Scene_MenuBase[_0x5a6d1c(0x2db)][_0x5a6d1c(0x486)][_0x5a6d1c(0x27a)](this);},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x4c2)]=function(){const _0x5066a9=_0x559e70;Scene_MenuBase[_0x5066a9(0x2db)][_0x5066a9(0x4c2)][_0x5066a9(0x27a)](this),this['setBackgroundOpacity'](this[_0x5066a9(0x326)]()),this['createCustomBackgroundImages']();},Scene_ClassChange[_0x559e70(0x2db)][_0x559e70(0x326)]=function(){const _0x2025d3=_0x559e70;return VisuMZ[_0x2025d3(0x1ee)][_0x2025d3(0x52c)]['BgSettings']['SnapshotOpacity'];},Scene_ClassChange['prototype']['createCustomBackgroundImages']=function(){const _0x45298e=_0x559e70,_0x21abd9=VisuMZ[_0x45298e(0x1ee)][_0x45298e(0x52c)][_0x45298e(0x3c6)];_0x21abd9&&(_0x21abd9[_0x45298e(0x22f)]!==''||_0x21abd9[_0x45298e(0x203)]!=='')&&(this['_backSprite1']=new Sprite(ImageManager[_0x45298e(0x212)](_0x21abd9[_0x45298e(0x22f)]||'')),this[_0x45298e(0x48f)]=new Sprite(ImageManager[_0x45298e(0x4fc)](_0x21abd9[_0x45298e(0x203)]||'')),this['addChild'](this[_0x45298e(0x493)]),this[_0x45298e(0x394)](this['_backSprite2']),this[_0x45298e(0x493)][_0x45298e(0x4a3)]['addLoadListener'](this[_0x45298e(0x3d5)][_0x45298e(0x3dc)](this,this['_backSprite1'])),this[_0x45298e(0x48f)][_0x45298e(0x4a3)][_0x45298e(0x1ff)](this['adjustSprite'][_0x45298e(0x3dc)](this,this[_0x45298e(0x48f)])));},Scene_ClassChange['prototype'][_0x559e70(0x3d5)]=function(_0x3cb5c2){const _0x1ae774=_0x559e70;this[_0x1ae774(0x2b7)](_0x3cb5c2),this[_0x1ae774(0x366)](_0x3cb5c2);},Window_Base['CLASS_CHANGE_SHOW_CLASS_LEVEL']=VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x52c)][_0x559e70(0x25b)][_0x559e70(0x36e)]??!![],Window_Base[_0x559e70(0x2db)][_0x559e70(0x25e)]=function(_0x75bad7,_0x640a74,_0x1d69e6,_0x47caa8,_0x521046){const _0x281ff2=_0x559e70;_0x521046=_0x521046||'left';const _0x18d705=_0x281ff2(0x309)[_0x281ff2(0x528)](ImageManager['classPointsIcon']),_0x1b2403=TextManager[_0x281ff2(0x404)],_0x3beac2=_0x1b2403[_0x281ff2(0x528)](_0x75bad7,TextManager[_0x281ff2(0x20d)],_0x18d705,TextManager[_0x281ff2(0x502)]),_0x293973=this['textSizeEx'](_0x3beac2)[_0x281ff2(0x2cd)];if(_0x521046===_0x281ff2(0x466)){if('mOWrF'!==_0x281ff2(0x318)){const _0x126a96='Actor-%1-Class-%2'[_0x281ff2(0x528)](_0x396d7e,_0xbd59af);_0x3c6b41[_0x281ff2(0x2c8)][_0x126a96]=_0x33a5e4;}else _0x640a74+=0x0;}else{if(_0x521046===_0x281ff2(0x38d)){if(_0x281ff2(0x3da)===_0x281ff2(0x3da))_0x640a74+=Math[_0x281ff2(0x3ba)]((_0x47caa8-_0x293973)/0x2);else{const _0x2dbe51=this[_0x281ff2(0x3fe)](_0x5a64ae),_0x4aac7b=_0x1fd195[_0x2dbe51];if(!_0x4aac7b)return;const _0x4677a6=this[_0x281ff2(0x31a)](_0x4aac7b),_0x144a99=new(_0x4677a6?_0x375367:_0x135e56)(),_0x2a4d6d=[_0x1b6f7f],_0xf891d3=0x0;_0x144a99[_0x281ff2(0x3a6)](_0x2a4d6d,_0x4aac7b,![],_0xf891d3,null),_0x144a99[_0x281ff2(0x4fa)]=_0x2ecf4c,this['addChild'](_0x587789),this[_0x281ff2(0x394)](_0x144a99),this[_0x281ff2(0x2a8)]['push'](_0x144a99);}}else{if(_0x281ff2(0x2b2)!==_0x281ff2(0x35b))_0x640a74+=_0x47caa8-_0x293973;else{if(this[_0x281ff2(0x3b1)]()['isActor']()&&_0x26a1e3['match'](_0x101fbe[_0x281ff2(0x3f8)])){const _0x20e02b=_0xa25372(_0x45ea6b['$1']);this[_0x281ff2(0x3b1)]()[_0x281ff2(0x29d)](_0x20e02b);}else this[_0x281ff2(0x52d)]();if(_0x12979d[_0x281ff2(0x42e)]()&&_0x5134d4[_0x281ff2(0x28a)](_0x497b6a[_0x281ff2(0x21d)])){const _0x1ed2aa=_0xe6ba01(_0x16123c['$1']);_0x462a6b[_0x281ff2(0x29d)](_0x1ed2aa);}}}}this['drawTextEx'](_0x3beac2,_0x640a74,_0x1d69e6);},Window_Base[_0x559e70(0x2db)][_0x559e70(0x386)]=function(_0x304740,_0xd07be3,_0x5a3d34,_0x21a8c6,_0x4051ad,_0x4b394a){const _0x109426=_0x559e70,_0x21d7f6=_0x304740['getClassPoints'](_0xd07be3);this[_0x109426(0x25e)](_0x21d7f6,_0x5a3d34,_0x21a8c6,_0x4051ad,_0x4b394a);},Window_Base[_0x559e70(0x2db)][_0x559e70(0x263)]=function(_0x2bbb91,_0x4ed1f8,_0x5a2f3a,_0x27db62,_0x47cd0c){const _0x44bab9=_0x559e70;_0x47cd0c=_0x47cd0c||_0x44bab9(0x466);const _0x57e998='\x5cI[%1]'[_0x44bab9(0x528)](ImageManager['jobPointsIcon']),_0x1d62fe=TextManager[_0x44bab9(0x2a6)],_0x100cce=_0x1d62fe[_0x44bab9(0x528)](_0x2bbb91,TextManager['jobPointsAbbr'],_0x57e998,TextManager[_0x44bab9(0x306)]),_0x18f69c=this[_0x44bab9(0x4d7)](_0x100cce)[_0x44bab9(0x2cd)];if(_0x47cd0c===_0x44bab9(0x466))_0x44bab9(0x414)!==_0x44bab9(0x414)?this[_0x44bab9(0x4da)]():_0x4ed1f8+=0x0;else _0x47cd0c===_0x44bab9(0x38d)?_0x4ed1f8+=Math['round']((_0x27db62-_0x18f69c)/0x2):'vOzgi'!==_0x44bab9(0x1f4)?_0x4ed1f8+=_0x27db62-_0x18f69c:_0x5129bd['removeUnlockedClass'](_0x27c6d5);this[_0x44bab9(0x3fd)](_0x100cce,_0x4ed1f8,_0x5a2f3a);},Window_Base['prototype']['drawActorJobPoints']=function(_0xecb491,_0x59e870,_0x86a2e2,_0x4351f0,_0x514ac7,_0x3224fd){const _0x30f817=_0x559e70,_0x3951ee=_0xecb491['getJobPoints'](_0x59e870);this[_0x30f817(0x263)](_0x3951ee,_0x86a2e2,_0x4351f0,_0x514ac7,_0x3224fd);},VisuMZ[_0x559e70(0x1ee)][_0x559e70(0x2ee)]=Window_Base[_0x559e70(0x2db)][_0x559e70(0x365)],Window_Base[_0x559e70(0x2db)][_0x559e70(0x365)]=function(_0x4222f2,_0x22c3ff,_0x2ba49e){const _0x457659=_0x559e70;if(_0x4222f2===$dataClasses){const _0x588b8a=_0x4222f2[_0x22c3ff];let _0x485cbb='';if(_0x588b8a&&_0x2ba49e&&_0x588b8a[_0x457659(0x4b5)]){if(_0x457659(0x342)==='slYgz')return this[_0x457659(0x49b)];else{const _0x21b6ef='\x1bi[%1]%2';let _0x1d6c9d=_0x588b8a[_0x457659(0x2a2)];_0x1d6c9d=_0x1d6c9d[_0x457659(0x2d3)](/\\I\[(\d+)\]/gi,''),_0x485cbb=_0x21b6ef[_0x457659(0x528)](_0x588b8a[_0x457659(0x4b5)],_0x1d6c9d);}}else{if(_0x588b8a){let _0x205742=_0x588b8a[_0x457659(0x2a2)];_0x205742=_0x205742['replace'](/\\I\[(\d+)\]/gi,''),_0x485cbb=_0x205742;}else _0x485cbb='';}if(this[_0x457659(0x222)]()){if(_0x457659(0x518)===_0x457659(0x518))_0x485cbb=this[_0x457659(0x216)](_0x485cbb,_0x4222f2);else{_0x15d0a4['ConvertParams'](_0x37eb3f,_0x4da8d5);const _0x4b1c27=_0x144bee['Classes'];for(const _0x33d695 of _0x4b1c27){_0x4be1a8[_0x457659(0x456)](_0x33d695);}}}return _0x485cbb;}return VisuMZ[_0x457659(0x1ee)]['Window_Base_databaseObjectName'][_0x457659(0x27a)](this,_0x4222f2,_0x22c3ff,_0x2ba49e);},Window_Base[_0x559e70(0x2db)]['drawClassLevel']=function(_0x2060cf,_0x258e16,_0x48842e,_0x635fe6){const _0x1f8310=_0x559e70;if(!Window_Base[_0x1f8310(0x4cf)])return;if(!$dataClasses[_0x258e16])return;this[_0x1f8310(0x277)]()&&this[_0x1f8310(0x1f1)](_0x2060cf,_0x258e16,_0x48842e,_0x635fe6),this[_0x1f8310(0x522)](ColorManager[_0x1f8310(0x1e8)]()),this[_0x1f8310(0x4dc)](TextManager['levelA'],_0x48842e,_0x635fe6,0x30),this[_0x1f8310(0x4c0)](),this[_0x1f8310(0x4dc)](_0x2060cf[_0x1f8310(0x428)](_0x258e16),_0x48842e+0x54,_0x635fe6,0x24,'right');},Window_Base['prototype']['isClassExpGaugeDrawn']=function(){const _0xbb5d28=_0x559e70;return Imported['VisuMZ_0_CoreEngine']&&VisuMZ[_0xbb5d28(0x344)][_0xbb5d28(0x52c)]['UI'][_0xbb5d28(0x27c)];},Window_Base[_0x559e70(0x2db)][_0x559e70(0x1f1)]=function(_0xacabb3,_0x4fe926,_0x261529,_0x3bcb13){const _0x242fbd=_0x559e70;if(!_0xacabb3)return;if(!_0xacabb3[_0x242fbd(0x42e)]())return;const _0x18a2a3=0x80,_0x28a0c5=_0xacabb3[_0x242fbd(0x375)](_0x4fe926);let _0x2f397f=ColorManager[_0x242fbd(0x48c)](),_0x203124=ColorManager['expGaugeColor2']();_0x28a0c5>=0x1&&('KErgl'!=='bhrRR'?(_0x2f397f=ColorManager[_0x242fbd(0x2ed)](),_0x203124=ColorManager['maxLvGaugeColor2']()):this['initJobPoints']()),this[_0x242fbd(0x3d0)](_0x261529,_0x3bcb13,_0x18a2a3,_0x28a0c5,_0x2f397f,_0x203124);},VisuMZ['ClassChangeSystem'][_0x559e70(0x515)]=Window_MenuCommand[_0x559e70(0x2db)][_0x559e70(0x2af)],Window_MenuCommand[_0x559e70(0x2db)][_0x559e70(0x2af)]=function(){const _0x4606cc=_0x559e70;VisuMZ[_0x4606cc(0x1ee)][_0x4606cc(0x515)]['call'](this),this['addClassChangeSystemCommand']();},Window_MenuCommand[_0x559e70(0x2db)][_0x559e70(0x362)]=function(){const _0x47d0a9=_0x559e70;if(!this[_0x47d0a9(0x2e0)]())return;if(!this[_0x47d0a9(0x31c)]())return;const _0x1cde73=TextManager[_0x47d0a9(0x477)],_0x5ce5fd=this[_0x47d0a9(0x2de)]();this[_0x47d0a9(0x4d8)](_0x1cde73,'ClassChangeSystem',_0x5ce5fd);},Window_MenuCommand[_0x559e70(0x2db)][_0x559e70(0x2e0)]=function(){const _0x3ac3b5=_0x559e70;return Imported[_0x3ac3b5(0x2b4)]?![]:!![];},Window_MenuCommand['prototype']['isClassChangeCommandVisible']=function(){return $gameSystem['isMainMenuClassChangeSystemVisible']();},Window_MenuCommand[_0x559e70(0x2db)]['isClassChangeCommandEnabled']=function(){const _0x1ed9b5=_0x559e70;return $gameSystem[_0x1ed9b5(0x2c9)]();};function _0x3343(_0x12b0ae,_0x3be22e){const _0x238b49=_0x238b();return _0x3343=function(_0x334394,_0x5be56e){_0x334394=_0x334394-0x1cf;let _0x334fac=_0x238b49[_0x334394];return _0x334fac;},_0x3343(_0x12b0ae,_0x3be22e);}function Window_ClassStatus(){this['initialize'](...arguments);}Window_ClassStatus[_0x559e70(0x2db)]=Object[_0x559e70(0x2fe)](Window_StatusBase[_0x559e70(0x2db)]),Window_ClassStatus[_0x559e70(0x2db)]['constructor']=Window_ClassStatus,Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x41e)]=function(_0x2a3fd6){const _0xf4f46=_0x559e70;Window_StatusBase['prototype']['initialize'][_0xf4f46(0x27a)](this,_0x2a3fd6),this[_0xf4f46(0x2e8)]=null,this[_0xf4f46(0x2d6)]=null,this[_0xf4f46(0x42a)]();},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x4ec)]=function(_0x254b70){const _0x2c62de=_0x559e70;this[_0x2c62de(0x2e8)]!==_0x254b70&&(this['_actor']=_0x254b70,this[_0x2c62de(0x42a)]());},Window_ClassStatus[_0x559e70(0x2db)]['colSpacing']=function(){return 0x0;},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x411)]=function(_0x56f984){const _0x43812f=_0x559e70;this[_0x43812f(0x2d6)]!==_0x56f984&&(this[_0x43812f(0x2d6)]=_0x56f984,this['refresh']());},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x42a)]=function(){const _0x1d0759=_0x559e70;this[_0x1d0759(0x4a5)](),this[_0x1d0759(0x4f2)]();if(this[_0x1d0759(0x2e8)])this[_0x1d0759(0x2e8)]['refresh']();this[_0x1d0759(0x1e5)]();},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x1e5)]=function(){const _0x5da72f=_0x559e70;this[_0x5da72f(0x416)][_0x5da72f(0x421)]();if(!this[_0x5da72f(0x2e8)])return;if(this[_0x5da72f(0x4d3)]()){if('MvlYg'==='VIxRi')return _0xe232e0(_0x68d2c8['$1']);else{const _0x5e6ba8=ImageManager[_0x5da72f(0x481)](this[_0x5da72f(0x2e8)][_0x5da72f(0x426)]());_0x5e6ba8[_0x5da72f(0x1ff)](this[_0x5da72f(0x31d)][_0x5da72f(0x3dc)](this));}}else this['refreshNoMenuImage']();},Window_ClassStatus['prototype']['isMainMenuCoreMenuImageOptionAvailable']=function(){const _0x2e2ca1=_0x559e70;return Imported['VisuMZ_1_MainMenuCore']&&this[_0x2e2ca1(0x2e8)]['getMenuImage']()!==''&&VisuMZ[_0x2e2ca1(0x1ee)]['Settings']['Window'][_0x2e2ca1(0x269)];},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x31d)]=function(){const _0x217925=_0x559e70;VisuMZ[_0x217925(0x1ee)]['Settings']['Window'][_0x217925(0x4fe)][_0x217925(0x27a)](this),this['drawParameterList']();},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x482)]=function(_0x1be771,_0xfbf196,_0x4824ee,_0x3dc2cb,_0x2f3d1a){const _0x3f8e95=_0x559e70,_0x540697=ImageManager[_0x3f8e95(0x481)](_0x1be771[_0x3f8e95(0x426)]()),_0x521492=this[_0x3f8e95(0x427)]-_0x540697[_0x3f8e95(0x2cd)];_0xfbf196+=_0x521492/0x2;if(_0x521492<0x0)_0x3dc2cb-=_0x521492;Window_StatusBase[_0x3f8e95(0x2db)][_0x3f8e95(0x482)][_0x3f8e95(0x27a)](this,_0x1be771,_0xfbf196,_0x4824ee,_0x3dc2cb,_0x2f3d1a);},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x464)]=function(){const _0x3b7cd4=_0x559e70;VisuMZ[_0x3b7cd4(0x1ee)]['Settings'][_0x3b7cd4(0x25b)]['DrawFaceJS'][_0x3b7cd4(0x27a)](this),this[_0x3b7cd4(0x4db)]();},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x4db)]=function(){const _0x45354d=_0x559e70;this[_0x45354d(0x4f2)](),VisuMZ[_0x45354d(0x1ee)]['Settings'][_0x45354d(0x25b)]['DrawParamJS'][_0x45354d(0x27a)](this);},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x479)]=function(){const _0x24ee41=_0x559e70;return Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x24ee41(0x344)]['Settings'][_0x24ee41(0x301)][_0x24ee41(0x51a)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_ClassStatus['prototype'][_0x559e70(0x2bf)]=function(){const _0x437b69=_0x559e70;return VisuMZ[_0x437b69(0x1ee)][_0x437b69(0x52c)][_0x437b69(0x25b)][_0x437b69(0x471)];},Window_ClassStatus[_0x559e70(0x2db)]['isUseParamNamesWithIcons']=function(){const _0x2052fd=_0x559e70;return Imported[_0x2052fd(0x278)]&&VisuMZ[_0x2052fd(0x344)][_0x2052fd(0x52c)][_0x2052fd(0x301)][_0x2052fd(0x29a)];},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x266)]=function(_0x7c8fe8,_0x925c35,_0x4e44f8,_0x1a0579,_0x11761c){const _0x1b05c0=_0x559e70;if(Imported[_0x1b05c0(0x2b4)])switch(this[_0x1b05c0(0x313)]()){case _0x1b05c0(0x308):break;case'sprite':this['drawItemActorSprite'](_0x7c8fe8,_0x925c35,_0x4e44f8,_0x1a0579,_0x11761c);break;case'svbattler':this['drawItemActorSvBattler'](_0x7c8fe8,_0x925c35,_0x4e44f8,_0x1a0579,_0x11761c);break;default:this[_0x1b05c0(0x2f3)](_0x7c8fe8,_0x925c35,_0x4e44f8,_0x1a0579,_0x11761c);break;}else _0x1b05c0(0x524)==='Xvwtz'?this[_0x1b05c0(0x2f3)](_0x7c8fe8,_0x925c35,_0x4e44f8,_0x1a0579,_0x11761c):_0x14c2ed[_0x1b05c0(0x1cf)](++_0x541ffc,0x0,_0x54ec48);},Window_ClassStatus['prototype'][_0x559e70(0x2f3)]=function(_0x58c20a,_0x41617b,_0xaa22a5,_0x286cbf,_0x19e6ba){const _0x26f680=_0x559e70,_0x2ae670=ImageManager[_0x26f680(0x237)](_0x58c20a['faceName']());_0x2ae670[_0x26f680(0x1ff)](Window_StatusBase['prototype']['drawActorFace'][_0x26f680(0x3dc)](this,_0x58c20a,_0x41617b,_0xaa22a5,_0x286cbf,_0x19e6ba));},Window_ClassStatus['prototype']['drawRightArrow']=function(_0x5b40a0,_0x179347){const _0x2ecca2=_0x559e70,_0x1d715a=this[_0x2ecca2(0x210)]();this[_0x2ecca2(0x522)](ColorManager['systemColor']());if(Imported[_0x2ecca2(0x278)]){const _0x115621=VisuMZ[_0x2ecca2(0x344)][_0x2ecca2(0x52c)]['UI'][_0x2ecca2(0x449)];this[_0x2ecca2(0x4dc)](_0x115621,_0x5b40a0,_0x179347,_0x1d715a,_0x2ecca2(0x38d));}else this[_0x2ecca2(0x4dc)]('→',_0x5b40a0,_0x179347,_0x1d715a,_0x2ecca2(0x38d));},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x210)]=function(){return 0x20;},Window_ClassStatus['prototype'][_0x559e70(0x3ff)]=function(_0x5ef706,_0x2a3444,_0x158714,_0x74d7d6){const _0x3e167f=_0x559e70,_0x5225ce=this[_0x3e167f(0x353)]();if(Imported[_0x3e167f(0x278)])this[_0x3e167f(0x4c8)](_0x2a3444+_0x5225ce,_0x158714,_0x74d7d6,_0x5ef706,![]);else{if(_0x3e167f(0x4f1)==='IScUr'){if(this[_0x3e167f(0x40a)]!==_0x139279)return this[_0x3e167f(0x40a)];return _0x58b591['getActorClassBattlePortrait'](this)||_0x27afc7['ClassChangeSystem'][_0x3e167f(0x373)][_0x3e167f(0x27a)](this);;}else this[_0x3e167f(0x522)](ColorManager['systemColor']()),this[_0x3e167f(0x4dc)](TextManager[_0x3e167f(0x46e)](_0x5ef706),_0x2a3444+_0x5225ce,_0x158714,_0x74d7d6),this[_0x3e167f(0x4c0)]();}},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x444)]=function(_0x2f32fa,_0x43a2c3,_0x179fc5,_0x14ae5e){const _0x568baa=_0x559e70,_0xfc3d0a=this[_0x568baa(0x353)]();let _0x26342e=0x0;if(Imported[_0x568baa(0x278)])_0x26342e=this[_0x568baa(0x2e8)][_0x568baa(0x272)](_0x2f32fa,!![]);else{if(_0x568baa(0x26d)!==_0x568baa(0x505))_0x26342e=this['_actor'][_0x568baa(0x46e)](_0x2f32fa);else return this['_priorityFaceIndex'];}const _0x1ddf91=_0x26342e;this['drawText'](_0x26342e,_0x43a2c3,_0x179fc5,_0x14ae5e-_0xfc3d0a,_0x568baa(0x360)),this[_0x568baa(0x4c0)]();},Window_ClassStatus['prototype'][_0x559e70(0x4d6)]=function(_0x45abd3,_0x1109a6,_0x1584e8,_0x1e1283){const _0x4edd97=_0x559e70,_0x3f1726=this['itemPadding']();let _0x2f5e3c=0x0,_0x258432=0x0,_0x4697d0='';if(this[_0x4edd97(0x2d6)]){Imported[_0x4edd97(0x278)]?(_0x2f5e3c=this['_actor'][_0x4edd97(0x272)](_0x45abd3,![]),_0x258432=this['_tempActor']['paramValueByName'](_0x45abd3,![]),_0x4697d0=this['_tempActor']['paramValueByName'](_0x45abd3,!![])):(_0x2f5e3c=this['_actor'][_0x4edd97(0x46e)](_0x45abd3),_0x258432=this[_0x4edd97(0x2d6)][_0x4edd97(0x46e)](_0x45abd3),_0x4697d0=this[_0x4edd97(0x2d6)][_0x4edd97(0x46e)](_0x45abd3));const _0x37e18e=_0x2f5e3c,_0x59f06b=_0x258432;diffValue=_0x59f06b-_0x37e18e,this[_0x4edd97(0x522)](ColorManager['paramchangeTextColor'](diffValue)),this[_0x4edd97(0x4dc)](_0x4697d0,_0x1109a6,_0x1584e8,_0x1e1283-_0x3f1726,_0x4edd97(0x360));}this[_0x4edd97(0x4c0)]();},Window_ClassStatus[_0x559e70(0x2db)][_0x559e70(0x1d0)]=function(_0x58798c,_0x4b665c,_0x5b5e53,_0x287fca){const _0x23b50c=_0x559e70,_0x8b51bb=this[_0x23b50c(0x353)]();let _0x4f6f7e=0x0,_0x472cf0=0x0,_0x1e8b0e=![];if(this[_0x23b50c(0x2d6)]){if(Imported[_0x23b50c(0x278)]){if(_0x23b50c(0x3e8)===_0x23b50c(0x435)){if(!_0x1848fb)return'';const _0x4d1fa4='Actor-%1-Class-%2'[_0x23b50c(0x528)](_0x45c6c7[_0x23b50c(0x283)](),_0x50f1dd[_0x23b50c(0x3b3)]()['id']);return _0x1d6ed8['actorClassMenuPortrait'][_0x4d1fa4]??'';}else _0x4f6f7e=this[_0x23b50c(0x2e8)][_0x23b50c(0x272)](_0x58798c,![]),_0x472cf0=this[_0x23b50c(0x2d6)][_0x23b50c(0x272)](_0x58798c,![]),_0x1e8b0e=String(this[_0x23b50c(0x2e8)][_0x23b50c(0x272)](_0x58798c,!![]))[_0x23b50c(0x28a)](/([%％])/i);}else _0x4f6f7e=this[_0x23b50c(0x2e8)]['param'](_0x58798c),_0x472cf0=this[_0x23b50c(0x2d6)][_0x23b50c(0x46e)](_0x58798c),_0x1e8b0e=_0x4f6f7e%0x1!==0x0||_0x472cf0%0x1!==0x0;const _0x402693=_0x4f6f7e,_0x35deb6=_0x472cf0,_0x1bc835=_0x35deb6-_0x402693;let _0x21b3e2=_0x1bc835;if(_0x1e8b0e)_0x21b3e2=Math[_0x23b50c(0x3ba)](_0x1bc835*0x64)+'%';if(_0x1bc835!==0x0){if('VhAsS'===_0x23b50c(0x45b)){const _0xbe19a=this[_0x23b50c(0x4e0)],_0x25c4ab=_0xbe19a['itemRect'](_0xbe19a[_0x23b50c(0x52f)]()),_0x13619b=_0xbe19a[_0x23b50c(0x3e4)]||0x0;_0x35a515['x']=_0xbe19a['x']+_0x25c4ab['x']+_0x4a0844['round'](_0x25c4ab[_0x23b50c(0x2cd)]/0x2)+_0x13619b,_0x25fb13['y']=_0xbe19a['y']+_0x25c4ab['y']+_0x2dcc3f[_0x23b50c(0x3ba)](_0x25c4ab['height']/0x2)+_0x13619b,_0x51c237['x']+=_0x48478d['ConfirmAniSubclassOffsetX']||0x0,_0x71ec43['y']+=_0x571272[_0x23b50c(0x322)]||0x0;}else this['changeTextColor'](ColorManager[_0x23b50c(0x270)](_0x1bc835)),_0x21b3e2=(_0x1bc835>0x0?_0x23b50c(0x1d6):'(%1)')['format'](_0x21b3e2),this[_0x23b50c(0x4dc)](_0x21b3e2,_0x4b665c+_0x8b51bb,_0x5b5e53,_0x287fca,_0x23b50c(0x466));}}this[_0x23b50c(0x4c0)]();},Window_ClassStatus['prototype'][_0x559e70(0x2a4)]=function(_0x207154,_0x5c9c75,_0x252bdb,_0x575684,_0x439253){const _0x4a427f=_0x559e70;if(VisuMZ[_0x4a427f(0x1ee)]['Settings'][_0x4a427f(0x25b)]['DrawBackRect']===![])return;_0x439253=Math[_0x4a427f(0x246)](_0x439253||0x1,0x1);while(_0x439253--){_0x575684=_0x575684||this[_0x4a427f(0x2ab)](),this[_0x4a427f(0x416)][_0x4a427f(0x4f7)]=0xa0;const _0x51dbc3=ColorManager[_0x4a427f(0x1d2)]();this[_0x4a427f(0x416)]['fillRect'](_0x207154+0x1,_0x5c9c75+0x1,_0x252bdb-0x2,_0x575684-0x2,_0x51dbc3),this[_0x4a427f(0x416)][_0x4a427f(0x4f7)]=0xff;}},ColorManager[_0x559e70(0x1d2)]=function(){const _0x27488e=_0x559e70,_0x81b5e=VisuMZ[_0x27488e(0x1ee)][_0x27488e(0x52c)][_0x27488e(0x25b)];let _0x4115e4=_0x81b5e[_0x27488e(0x226)]!==undefined?_0x81b5e[_0x27488e(0x226)]:0x13;return ColorManager['getColor'](_0x4115e4);},Window_ClassStatus['prototype'][_0x559e70(0x523)]=function(_0x34ec54,_0xb0883b,_0x2a01d7){const _0x2122e1=_0x559e70,_0x42af23=VisuMZ[_0x2122e1(0x1ee)][_0x2122e1(0x52c)][_0x2122e1(0x25b)][_0x2122e1(0x3d2)],_0x3af1a9=this['_actor'][_0x2122e1(0x3b3)]()['id'];for(const _0x5aa612 of _0x42af23){switch(_0x5aa612[_0x2122e1(0x1dc)]()['trim']()){case'AP':if(!Imported[_0x2122e1(0x1ec)])continue;this['drawActorAbilityPoints'](this['_actor'],_0x3af1a9,_0x34ec54,_0xb0883b,_0x2a01d7,_0x2122e1(0x360)),_0xb0883b+=this[_0x2122e1(0x2ab)]();break;case'CP':if(!Imported[_0x2122e1(0x47e)])continue;this[_0x2122e1(0x386)](this[_0x2122e1(0x2e8)],_0x3af1a9,_0x34ec54,_0xb0883b,_0x2a01d7,_0x2122e1(0x360)),_0xb0883b+=this[_0x2122e1(0x2ab)]();break;case'JP':if(!Imported[_0x2122e1(0x47e)])continue;this[_0x2122e1(0x37d)](this[_0x2122e1(0x2e8)],_0x3af1a9,_0x34ec54,_0xb0883b,_0x2a01d7,_0x2122e1(0x360)),_0xb0883b+=this[_0x2122e1(0x2ab)]();break;case'SP':if(!Imported[_0x2122e1(0x1ec)])continue;this[_0x2122e1(0x430)](this[_0x2122e1(0x2e8)],_0x3af1a9,_0x34ec54,_0xb0883b,_0x2a01d7,'right'),_0xb0883b+=this[_0x2122e1(0x2ab)]();break;}}};function Window_ClassCommand(){const _0x267991=_0x559e70;this[_0x267991(0x41e)](...arguments);}Window_ClassCommand[_0x559e70(0x2db)]=Object['create'](Window_Command[_0x559e70(0x2db)]),Window_ClassCommand['prototype'][_0x559e70(0x3ea)]=Window_ClassCommand,Window_ClassCommand[_0x559e70(0x2db)][_0x559e70(0x41e)]=function(_0x22db95){const _0x11cf38=_0x559e70;Window_Command['prototype'][_0x11cf38(0x41e)][_0x11cf38(0x27a)](this,_0x22db95),this[_0x11cf38(0x3ce)](),this[_0x11cf38(0x4ef)]();},Window_ClassCommand[_0x559e70(0x2db)][_0x559e70(0x50c)]=function(){return this['lineHeight']()*0x3+0x8;},Window_ClassCommand[_0x559e70(0x2db)][_0x559e70(0x4ec)]=function(_0x366e82){const _0x5f12a0=_0x559e70;this['_actor']!==_0x366e82&&(_0x5f12a0(0x28d)!=='hSxZO'?(this[_0x5f12a0(0x2e8)]=_0x366e82,this['refresh']()):_0x34c8b9*=this[_0x5f12a0(0x33e)]());},Window_ClassCommand[_0x559e70(0x2db)]['refresh']=function(){const _0x53200b=_0x559e70;Window_Command['prototype'][_0x53200b(0x42a)][_0x53200b(0x27a)](this),this[_0x53200b(0x340)]();if(this[_0x53200b(0x281)])this[_0x53200b(0x463)]();},Window_ClassCommand['prototype'][_0x559e70(0x32e)]=function(_0x170035,_0xeb52f3){const _0x8ec2d6=_0x559e70;_0xeb52f3=_0xeb52f3||0x1,this[_0x8ec2d6(0x20f)](![]);const _0x1210a2=ColorManager[_0x8ec2d6(0x495)](),_0x572118=ColorManager['dimColor2'](),_0x5bb695=_0x170035[_0x8ec2d6(0x2cd)]/0x2,_0x29b9d6=this['lineHeight']();while(_0xeb52f3--){this['contents'][_0x8ec2d6(0x2ea)](_0x170035['x'],_0x170035['y'],_0x5bb695,_0x29b9d6,_0x572118,_0x1210a2),this['contents'][_0x8ec2d6(0x2ea)](_0x170035['x']+_0x5bb695,_0x170035['y'],_0x5bb695,_0x29b9d6,_0x1210a2,_0x572118);}this[_0x8ec2d6(0x20f)](!![]);},Window_ClassCommand['prototype'][_0x559e70(0x4e7)]=function(_0x2b4c7c,_0x49000c,_0x54027f){const _0x1138ba=_0x559e70;if(!_0x49000c)return;const _0x662a73=VisuMZ[_0x1138ba(0x1ee)][_0x1138ba(0x4d5)],_0x5d852b=_0x49000c[_0x1138ba(0x30a)];let _0x11e205='';if(_0x5d852b[_0x1138ba(0x28a)](_0x662a73['classPicture']))_0x11e205=String(RegExp['$1']);else _0x5d852b[_0x1138ba(0x28a)](_0x662a73['bigPicture'])&&(_0x11e205=String(RegExp['$1']));if(_0x11e205){const _0x21d6e9=ImageManager[_0x1138ba(0x481)](_0x11e205);_0x21d6e9['addLoadListener'](this[_0x1138ba(0x38a)][_0x1138ba(0x3dc)](this,_0x2b4c7c,_0x21d6e9));}else _0x1138ba(0x468)===_0x1138ba(0x468)?this[_0x1138ba(0x4ba)](_0x49000c,_0x54027f):this[_0x1138ba(0x280)]['setText']('');},Window_ClassCommand[_0x559e70(0x2db)][_0x559e70(0x38a)]=function(_0x20153b,_0x5b30e7){const _0x1e3073=_0x559e70,_0x16b330=this[_0x1e3073(0x4a9)](_0x20153b);let _0x84b0cb=_0x16b330['x']+this[_0x1e3073(0x353)](),_0x3fd091=_0x16b330['y']+0x4,_0x891c9e=_0x16b330[_0x1e3073(0x2cd)]-this[_0x1e3073(0x353)]()*0x2,_0x17e154=Math[_0x1e3073(0x4e2)](this['lineHeight']()*0x3,_0x16b330[_0x1e3073(0x2f1)])-0x4,_0x248b25=Math[_0x1e3073(0x4e2)](_0x891c9e,_0x17e154);const _0x473ac0=_0x248b25/_0x5b30e7['width'],_0x150b20=_0x248b25/_0x5b30e7['height'],_0x2ee2a7=Math[_0x1e3073(0x4e2)](_0x473ac0,_0x150b20,0x1);let _0x3d1ca6=Math['round'](_0x5b30e7[_0x1e3073(0x2cd)]*_0x2ee2a7),_0x10aeda=Math[_0x1e3073(0x3ba)](_0x5b30e7[_0x1e3073(0x2f1)]*_0x2ee2a7);_0x84b0cb+=Math[_0x1e3073(0x3ba)]((_0x248b25-_0x3d1ca6)/0x2),_0x3fd091+=Math[_0x1e3073(0x3ba)]((_0x248b25-_0x10aeda)/0x2);const _0xb3bd6d=_0x5b30e7['width'],_0x413881=_0x5b30e7['height'];this['contents'][_0x1e3073(0x3a4)]['imageSmoothingEnabled']=!![],this[_0x1e3073(0x416)][_0x1e3073(0x2b0)](_0x5b30e7,0x0,0x0,_0xb3bd6d,_0x413881,_0x84b0cb,_0x3fd091,_0x3d1ca6,_0x10aeda),this['contents'][_0x1e3073(0x3a4)][_0x1e3073(0x4ea)]=!![];},Window_ClassCommand[_0x559e70(0x2db)]['drawBigItemIcon']=function(_0x46df32,_0x54f5a8){const _0x7f7e19=_0x559e70;if(!_0x46df32)return;const _0x46ad17=_0x46df32[_0x7f7e19(0x4b5)];let _0x3c814a=_0x54f5a8['x']+this[_0x7f7e19(0x353)](),_0x5cb756=_0x54f5a8['y']+0x4,_0x247121=_0x54f5a8['width']-this['itemPadding']()*0x2,_0x3b72f0=Math['min'](this[_0x7f7e19(0x2ab)]()*0x3,_0x54f5a8[_0x7f7e19(0x2f1)]),_0x523a18=Math[_0x7f7e19(0x4e2)](_0x247121,_0x3b72f0);_0x523a18=Math['floor'](_0x523a18/ImageManager[_0x7f7e19(0x1fc)])*ImageManager[_0x7f7e19(0x1fc)],_0x5cb756+=(_0x3b72f0-_0x523a18)/0x2;const _0x14cf9d=ImageManager[_0x7f7e19(0x341)]('IconSet'),_0x328c58=ImageManager['iconWidth'],_0x5d0fcd=ImageManager[_0x7f7e19(0x347)],_0x9340e=_0x46ad17%0x10*_0x328c58,_0x1b34c3=Math[_0x7f7e19(0x22c)](_0x46ad17/0x10)*_0x5d0fcd;this['contents']['_context'][_0x7f7e19(0x4ea)]=![],this[_0x7f7e19(0x416)][_0x7f7e19(0x2b0)](_0x14cf9d,_0x9340e,_0x1b34c3,_0x328c58,_0x5d0fcd,_0x3c814a,_0x5cb756,_0x523a18,_0x523a18),this[_0x7f7e19(0x416)][_0x7f7e19(0x3a4)][_0x7f7e19(0x4ea)]=!![];},Window_ClassCommand['prototype']['visibleResources']=function(){const _0x516fca=_0x559e70;return VisuMZ[_0x516fca(0x1ee)][_0x516fca(0x52c)][_0x516fca(0x25b)][_0x516fca(0x3d2)]||[];},Window_ClassCommand[_0x559e70(0x2db)][_0x559e70(0x321)]=function(_0x2690ca,_0x51406e){const _0x2c46a9=_0x559e70,_0x3e8e4b=this[_0x2c46a9(0x46a)]();let _0x3783f3=_0x51406e['y']+this['lineHeight'](),_0x3fdb62=0x0;const _0x533e2f=_0x51406e[_0x2c46a9(0x2cd)]-this[_0x2c46a9(0x353)]()*0x2;for(const _0x120970 of _0x3e8e4b){if('gxcZO'===_0x2c46a9(0x4b6))this['_multiclasses'][_0x14c23f]===this['currentClass']()['id']&&(this['_multiclasses'][_0x52bcba]=0x0,_0x284db2=!![]);else{if(_0x3fdb62>=0x2)return;switch(_0x120970){case'AP':if(!Imported[_0x2c46a9(0x1ec)])continue;let _0x54b310=VisuMZ[_0x2c46a9(0x248)][_0x2c46a9(0x52c)][_0x2c46a9(0x33b)];if(!_0x54b310)continue;if(_0x54b310[_0x2c46a9(0x32a)])continue;this['drawActorAbilityPoints'](this[_0x2c46a9(0x2e8)],_0x2690ca,_0x51406e['x'],_0x3783f3,_0x533e2f,_0x2c46a9(0x360)),_0x3783f3+=this[_0x2c46a9(0x2ab)](),_0x3fdb62++;break;case'CP':if(!Imported[_0x2c46a9(0x47e)])continue;let _0x111ea6=VisuMZ['ClassChangeSystem'][_0x2c46a9(0x52c)][_0x2c46a9(0x41f)];if(!_0x111ea6)continue;if(_0x111ea6['SharedResource'])continue;this[_0x2c46a9(0x386)](this[_0x2c46a9(0x2e8)],_0x2690ca,_0x51406e['x'],_0x3783f3,_0x533e2f,_0x2c46a9(0x360)),_0x3783f3+=this[_0x2c46a9(0x2ab)](),_0x3fdb62++;break;case'JP':if(!Imported[_0x2c46a9(0x47e)])continue;let _0x59b036=VisuMZ[_0x2c46a9(0x1ee)][_0x2c46a9(0x52c)][_0x2c46a9(0x296)];if(!_0x59b036)continue;if(_0x59b036[_0x2c46a9(0x32a)])continue;this['drawActorJobPoints'](this['_actor'],_0x2690ca,_0x51406e['x'],_0x3783f3,_0x533e2f,_0x2c46a9(0x360)),_0x3783f3+=this[_0x2c46a9(0x2ab)](),_0x3fdb62++;break;case'SP':if(!Imported['VisuMZ_2_SkillLearnSystem'])continue;let _0x3b840f=VisuMZ[_0x2c46a9(0x248)]['Settings'][_0x2c46a9(0x3de)];if(!_0x3b840f)continue;if(_0x3b840f['SharedResource'])continue;this[_0x2c46a9(0x430)](this[_0x2c46a9(0x2e8)],_0x2690ca,_0x51406e['x'],_0x3783f3,_0x533e2f,'right'),_0x3783f3+=this[_0x2c46a9(0x2ab)](),_0x3fdb62++;break;}}}};function Window_ClassTier(){const _0x4fc50d=_0x559e70;this[_0x4fc50d(0x41e)](...arguments);}Window_ClassTier['prototype']=Object['create'](Window_ClassCommand[_0x559e70(0x2db)]),Window_ClassTier['prototype'][_0x559e70(0x3ea)]=Window_ClassTier,Window_ClassTier[_0x559e70(0x2db)]['initialize']=function(_0x44c766){const _0x1d71a2=_0x559e70;Window_ClassCommand[_0x1d71a2(0x2db)][_0x1d71a2(0x41e)]['call'](this,_0x44c766);},Window_ClassTier[_0x559e70(0x2db)][_0x559e70(0x422)]=function(){const _0x1948f1=_0x559e70;return this[_0x1948f1(0x332)];},Window_ClassTier[_0x559e70(0x2db)][_0x559e70(0x50c)]=function(){const _0x1a8644=_0x559e70;let _0x5ebb53=Window_ClassCommand[_0x1a8644(0x2db)]['itemHeight'][_0x1a8644(0x27a)](this);if(this['_actor']){const _0x1a5f15=this[_0x1a8644(0x2e8)][_0x1a8644(0x231)]()||0x1;_0x5ebb53=Math[_0x1a8644(0x246)](_0x5ebb53,this[_0x1a8644(0x454)]/_0x1a5f15);}return _0x5ebb53;},Window_ClassTier['prototype'][_0x559e70(0x463)]=function(){const _0x1cec99=_0x559e70;if(this[_0x1cec99(0x280)]){if(this[_0x1cec99(0x406)]()){const _0x146576=VisuMZ[_0x1cec99(0x1ee)][_0x1cec99(0x52c)][_0x1cec99(0x224)];if(!_0x146576)return;const _0x104672=_0x146576[this[_0x1cec99(0x406)]()-0x1];if(!_0x104672)return;this['_helpWindow'][_0x1cec99(0x2f4)](_0x104672['HelpDescription']);}else _0x1cec99(0x37e)!==_0x1cec99(0x37e)?this[_0x1cec99(0x456)](_0x5e8518):this[_0x1cec99(0x280)][_0x1cec99(0x2f4)]('');}},Window_ClassTier[_0x559e70(0x2db)]['makeCommandList']=function(){const _0x5b33f3=_0x559e70;if(!this['_actor'])return;const _0x2eb67f=this[_0x5b33f3(0x2e8)][_0x5b33f3(0x231)](),_0x28a804=VisuMZ['ClassChangeSystem'][_0x5b33f3(0x52c)][_0x5b33f3(0x224)];for(let _0x1bb4ac=0x0;_0x1bb4ac<_0x2eb67f;_0x1bb4ac++){const _0x3322fc=_0x28a804[_0x1bb4ac];if(!_0x3322fc)continue;const _0x35083=_0x3322fc[_0x5b33f3(0x207)],_0x3a0f8a=_0x1bb4ac+0x1,_0x3a6569=this[_0x5b33f3(0x400)](_0x3a0f8a);this[_0x5b33f3(0x4d8)](_0x35083,_0x5b33f3(0x504),_0x3a6569,_0x3a0f8a);}},Window_ClassTier['prototype']['isEnabled']=function(_0x42eb4d){const _0x209a01=_0x559e70;if(this[_0x209a01(0x2e8)][_0x209a01(0x3b6)](_0x42eb4d))return![];return _0x42eb4d>0x0;},Window_ClassTier['prototype'][_0x559e70(0x40c)]=function(_0x51e324){const _0x2d9b20=_0x559e70;if(!this['_actor'])return;const _0x442aa2=this[_0x2d9b20(0x4a9)](_0x51e324),_0x29d871=this[_0x2d9b20(0x36f)][_0x51e324]['ext']||0x1,_0x39dfee=this[_0x2d9b20(0x2e8)][_0x2d9b20(0x499)](_0x29d871),_0x6e234b=_0x39dfee?_0x39dfee['id']:0x0,_0x67f7a=VisuMZ[_0x2d9b20(0x1ee)][_0x2d9b20(0x52c)][_0x2d9b20(0x224)];if(!_0x67f7a)return;const _0x214c5a=_0x67f7a[_0x29d871-0x1];if(!_0x214c5a)return;let _0x4d8b9d=_0x442aa2['x'],_0x1c76e3=_0x442aa2['y'],_0x5adbfa=_0x442aa2[_0x2d9b20(0x2cd)]-this['itemPadding']()*0x2,_0x323afb=_0x442aa2['height'],_0x33a669=Math[_0x2d9b20(0x4e2)](_0x5adbfa,_0x323afb,this[_0x2d9b20(0x2ab)]()*0x3);_0x33a669=Math[_0x2d9b20(0x22c)](_0x33a669/ImageManager['iconWidth'])*ImageManager[_0x2d9b20(0x1fc)],_0x4d8b9d+=_0x33a669+this[_0x2d9b20(0x353)]()*0x4,this[_0x2d9b20(0x4f2)](),this[_0x2d9b20(0x4c0)](),this[_0x2d9b20(0x32e)](_0x442aa2),this[_0x2d9b20(0x20f)](this[_0x2d9b20(0x400)](_0x29d871)),this['drawBigItemImage'](_0x51e324,_0x39dfee,_0x442aa2),this[_0x2d9b20(0x522)](ColorManager[_0x2d9b20(0x33a)](_0x214c5a[_0x2d9b20(0x40e)])),this[_0x2d9b20(0x4dc)](_0x214c5a['Name'],_0x442aa2['x'],_0x442aa2['y'],_0x442aa2[_0x2d9b20(0x2cd)],'center'),this[_0x2d9b20(0x4c0)]();if(!_0x39dfee){this['changePaintOpacity'](![]);const _0x8e2e9b=Math[_0x2d9b20(0x3ba)](_0x442aa2['y']+this['lineHeight']()+(_0x442aa2[_0x2d9b20(0x2f1)]-this['lineHeight']()*0x2)/0x2);this[_0x2d9b20(0x4dc)](TextManager[_0x2d9b20(0x4f9)],_0x442aa2['x'],_0x8e2e9b,_0x442aa2[_0x2d9b20(0x2cd)],'center');return;}_0x1c76e3+=this['lineHeight']();let _0x465886=_0x39dfee[_0x2d9b20(0x2a2)];_0x465886=_0x465886['replace'](/\x1I\[(\d+)\]/gi,''),_0x465886=_0x465886['replace'](/\\I\[(\d+)\]/gi,''),this[_0x2d9b20(0x4dc)](_0x465886,_0x4d8b9d,_0x1c76e3,_0x442aa2[_0x2d9b20(0x2cd)]-_0x4d8b9d),_0x1c76e3+=this[_0x2d9b20(0x2ab)](),this[_0x2d9b20(0x25f)](this[_0x2d9b20(0x2e8)],_0x6e234b,_0x4d8b9d,_0x1c76e3-0x4),_0x1c76e3+=this[_0x2d9b20(0x2ab)](),this[_0x2d9b20(0x321)](_0x6e234b,_0x442aa2),this[_0x2d9b20(0x2a1)](_0x6e234b,_0x29d871,_0x214c5a,_0x442aa2);},Window_ClassTier[_0x559e70(0x2db)][_0x559e70(0x2a1)]=function(){const _0x456fd2=_0x559e70,_0x1371d9=VisuMZ[_0x456fd2(0x1ee)][_0x456fd2(0x52c)][_0x456fd2(0x25b)][_0x456fd2(0x3f1)];if(_0x1371d9){_0x1371d9[_0x456fd2(0x2ba)](this,arguments);return;}const _0x3c7e8c=arguments[0x0],_0x12766c=arguments[0x1],_0x18ef2e=arguments[0x2],_0x52ddd6=arguments[0x3],_0x5312d7=$dataClasses[_0x3c7e8c],_0x2d459b=Imported[_0x456fd2(0x37a)],_0x5d9496=!![],_0x491ebe=0x16;let _0x4bb18a=_0x52ddd6['x']+this[_0x456fd2(0x353)]()*0x4,_0x30899a=_0x52ddd6['y']+this[_0x456fd2(0x2ab)]()*3.25,_0x30de75=_0x52ddd6[_0x456fd2(0x2cd)]-this[_0x456fd2(0x353)]()*0x8;if(_0x18ef2e[_0x456fd2(0x251)]&&_0x30899a+this[_0x456fd2(0x2ab)]()<=_0x52ddd6['y']+_0x52ddd6[_0x456fd2(0x2f1)]){let _0x24bfdb=_0x5312d7[_0x456fd2(0x4f3)][_0x456fd2(0x513)](_0x16a948=>_0x16a948[_0x456fd2(0x223)]===Game_BattlerBase['TRAIT_STYPE_ADD'])['map'](_0x451ea7=>$dataSystem[_0x456fd2(0x519)][_0x451ea7[_0x456fd2(0x3b9)]])['join'](',\x20'),_0x3475b9='\x5cC[16]%1:\x5cC[0]\x20\x5cFS[%3]%2'['format'](TextManager[_0x456fd2(0x4ed)],_0x24bfdb,_0x491ebe||0x16);if(_0x5d9496)_0x3475b9=_0x3475b9[_0x456fd2(0x2d3)](/\\I\[(\d+)\]/gi,'');if(_0x2d459b)_0x3475b9='<WordWrap>'+_0x3475b9;this['drawTextEx'](_0x3475b9,_0x4bb18a,_0x30899a,_0x30de75),_0x30899a+=this[_0x456fd2(0x2ab)]();}if(_0x18ef2e[_0x456fd2(0x4e6)]&&_0x30899a+this[_0x456fd2(0x2ab)]()<=_0x52ddd6['y']+_0x52ddd6[_0x456fd2(0x2f1)]){if(_0x456fd2(0x42c)!==_0x456fd2(0x42c)){if(!this[_0x456fd2(0x281)])return![];if(!_0x239d76[_0x456fd2(0x1ee)][_0x456fd2(0x52c)]['Window'][_0x456fd2(0x32b)])return![];return!![];}else{let _0x4f13f6=_0x5312d7['traits']['filter'](_0x35bf58=>_0x35bf58[_0x456fd2(0x223)]===Game_BattlerBase[_0x456fd2(0x316)])[_0x456fd2(0x44c)](_0x46b984=>$dataSystem[_0x456fd2(0x286)][_0x46b984[_0x456fd2(0x3b9)]])['join'](',\x20'),_0x250c76='\x5cC[16]%1:\x5cC[0]\x20\x5cFS[%3]%2'[_0x456fd2(0x528)](TextManager[_0x456fd2(0x235)],_0x4f13f6,_0x491ebe||0x16);if(_0x5d9496)_0x250c76=_0x250c76[_0x456fd2(0x2d3)](/\\I\[(\d+)\]/gi,'');if(_0x2d459b)_0x250c76='<WordWrap>'+_0x250c76;this[_0x456fd2(0x3fd)](_0x250c76,_0x4bb18a,_0x30899a,_0x30de75),_0x30899a+=this[_0x456fd2(0x2ab)]();}}if(_0x18ef2e[_0x456fd2(0x22e)]&&_0x30899a+this[_0x456fd2(0x2ab)]()<=_0x52ddd6['y']+_0x52ddd6[_0x456fd2(0x2f1)]){if('RoWXQ'!=='RndzT'){let _0x3e1a0c=_0x5312d7['traits'][_0x456fd2(0x513)](_0x447cb3=>_0x447cb3[_0x456fd2(0x223)]===Game_BattlerBase[_0x456fd2(0x47a)])[_0x456fd2(0x44c)](_0x235a0b=>$dataSystem[_0x456fd2(0x3c9)][_0x235a0b[_0x456fd2(0x3b9)]])[_0x456fd2(0x530)](',\x20'),_0x1ebb81=_0x456fd2(0x50e)[_0x456fd2(0x528)](TextManager[_0x456fd2(0x2c2)],_0x3e1a0c,_0x491ebe||0x16);if(_0x5d9496)_0x1ebb81=_0x1ebb81[_0x456fd2(0x2d3)](/\\I\[(\d+)\]/gi,'');if(_0x2d459b)_0x1ebb81=_0x456fd2(0x28e)+_0x1ebb81;this[_0x456fd2(0x3fd)](_0x1ebb81,_0x4bb18a,_0x30899a,_0x30de75),_0x30899a+=this[_0x456fd2(0x2ab)]();}else{if(_0x5a1448['isPlaytest']())_0x2095f1[_0x456fd2(0x3cd)](_0x2b0b01);}}},Window_ClassTier[_0x559e70(0x2db)][_0x559e70(0x455)]=function(){const _0x48b1c8=_0x559e70;Window_ClassCommand['prototype'][_0x48b1c8(0x455)]['call'](this),this[_0x48b1c8(0x457)]();},Window_ClassTier[_0x559e70(0x2db)][_0x559e70(0x457)]=function(){const _0xecd115=_0x559e70;if(!this[_0xecd115(0x1e7)]())return;if(!this[_0xecd115(0x2e8)])return;if(Input['isTriggered'](_0xecd115(0x3f2))){if(_0xecd115(0x439)!==_0xecd115(0x34d)){if(this[_0xecd115(0x2e8)]){if(_0xecd115(0x408)==='ZjqDb')this[_0xecd115(0x1f2)](-_0x42a055,_0x169934);else{if(this[_0xecd115(0x335)](this[_0xecd115(0x52f)]())){if('dlVkb'===_0xecd115(0x429))this['processShiftRemoveShortcut'](),this[_0xecd115(0x463)]();else return this[_0xecd115(0x4ee)]()[_0xecd115(0x32c)]((_0x522f9e,_0x170c9a)=>{const _0x36e670=_0xecd115;return _0x170c9a&&_0x170c9a[_0x36e670(0x30a)][_0x36e670(0x28a)](_0x1fecdd['ClassChangeSystem'][_0x36e670(0x4d5)][_0x36e670(0x491)])?_0x522f9e*(_0x1cc780(_0x21ca39['$1'])*0.01):_0x522f9e;},0x1);}else this[_0xecd115(0x3d9)]();}}}else{const _0x2d8ff7=this[_0xecd115(0x2c7)](),_0x1c4f38=new _0x316d07(_0x2d8ff7);_0x1c4f38[_0xecd115(0x51b)](this[_0xecd115(0x280)]),_0x1c4f38[_0xecd115(0x47c)](_0x1ddbc0[_0xecd115(0x1ee)][_0xecd115(0x52c)][_0xecd115(0x25b)][_0xecd115(0x38e)]),this['addWindow'](_0x1c4f38),this[_0xecd115(0x4e0)]=_0x1c4f38,_0x1c4f38[_0xecd115(0x474)](_0xecd115(0x30b),this[_0xecd115(0x40f)][_0xecd115(0x3dc)](this)),this[_0xecd115(0x364)]()>0x1&&(_0x1c4f38[_0xecd115(0x474)]('pagedown',this['nextActor']['bind'](this)),_0x1c4f38[_0xecd115(0x474)](_0xecd115(0x40b),this[_0xecd115(0x492)]['bind'](this))),_0x1c4f38[_0xecd115(0x474)](_0xecd115(0x504),this['onMulticlassOk'][_0xecd115(0x3dc)](this));}}},Window_ClassTier[_0x559e70(0x2db)]['isShiftRemoveShortcutEnabled']=function(){const _0x3dc0fb=_0x559e70;if(!this['active'])return![];if(!VisuMZ[_0x3dc0fb(0x1ee)][_0x3dc0fb(0x52c)][_0x3dc0fb(0x25b)][_0x3dc0fb(0x32b)])return![];return!![];},Window_ClassTier[_0x559e70(0x2db)][_0x559e70(0x335)]=function(_0xe8d1a5){const _0x2f5e82=_0x559e70;if(!this[_0x2f5e82(0x2e8)])return;const _0x33c5ef=this[_0x2f5e82(0x52f)]()+0x1;if(_0x33c5ef<=0x1)return![];if(this[_0x2f5e82(0x2e8)][_0x2f5e82(0x3b6)](_0x33c5ef)){if(_0x2f5e82(0x405)==='aqpNY'){const _0x3f3922=this[_0x2f5e82(0x2e8)][_0x2f5e82(0x2b3)](_0x5128dd['id']);if(_0x3f3922>0x0&&this[_0x2f5e82(0x2e8)][_0x2f5e82(0x3b6)](_0x3f3922))return![];const _0x20573f=_0xfdb507[_0x2f5e82(0x36d)](_0x4fb7d5);if(!_0x20573f[_0x2f5e82(0x2df)](this[_0x2f5e82(0x526)]))return![];}else return![];}if(!this[_0x2f5e82(0x2e8)][_0x2f5e82(0x499)](_0x33c5ef)){if('CcluO'===_0x2f5e82(0x310)){_0x2eac06[_0x2f5e82(0x278)]?(_0x26084e=this['_actor']['paramValueByName'](_0x101f59,![]),_0x417ed4=this[_0x2f5e82(0x2d6)][_0x2f5e82(0x272)](_0x5d380f,![]),_0x3b70d5=this['_tempActor'][_0x2f5e82(0x272)](_0x4552be,!![])):(_0x3184ee=this[_0x2f5e82(0x2e8)][_0x2f5e82(0x46e)](_0x583906),_0xf7beef=this['_tempActor'][_0x2f5e82(0x46e)](_0x421396),_0x560482=this[_0x2f5e82(0x2d6)]['param'](_0x422edf));const _0x116b80=_0x2c36e0,_0x20bc85=_0x5d46f1;_0x5e5b03=_0x20bc85-_0x116b80,this[_0x2f5e82(0x522)](_0x5e39ae[_0x2f5e82(0x270)](_0x447b68)),this[_0x2f5e82(0x4dc)](_0x4ced80,_0x3ef3ed,_0x4c58cc,_0x3c797d-_0x2f9b48,'right');}else return![];}return!![];;},Window_ClassTier['prototype'][_0x559e70(0x338)]=function(){const _0x5d06bd=_0x559e70;SoundManager[_0x5d06bd(0x536)](),this[_0x5d06bd(0x2e8)][_0x5d06bd(0x4de)](0x0,this[_0x5d06bd(0x52f)]()+0x1),this['refresh'](),SceneManager[_0x5d06bd(0x2f7)][_0x5d06bd(0x232)][_0x5d06bd(0x42a)]();};function Window_ClassList(){const _0x41ce15=_0x559e70;this[_0x41ce15(0x41e)](...arguments);}Window_ClassList['prototype']=Object['create'](Window_ClassCommand[_0x559e70(0x2db)]),Window_ClassList['prototype'][_0x559e70(0x3ea)]=Window_ClassList,Window_ClassList[_0x559e70(0x2db)][_0x559e70(0x41e)]=function(_0x2f677f){const _0x5584ef=_0x559e70;this[_0x5584ef(0x526)]=0x1,Window_ClassCommand[_0x5584ef(0x2db)]['initialize']['call'](this,_0x2f677f);},Window_ClassList['prototype'][_0x559e70(0x473)]=function(){const _0x487398=_0x559e70;SoundManager[_0x487398(0x536)]();},Window_ClassList[_0x559e70(0x2db)]['setStatusWindow']=function(_0x3a111f){const _0x2d1313=_0x559e70;this[_0x2d1313(0x232)]=_0x3a111f,this[_0x2d1313(0x51e)]();},Window_ClassList[_0x559e70(0x2db)][_0x559e70(0x463)]=function(){const _0x2dd8ff=_0x559e70;this['_helpWindow']&&(this[_0x2dd8ff(0x406)]()?this[_0x2dd8ff(0x280)]['setItem'](this[_0x2dd8ff(0x406)]()):'wZrRI'!==_0x2dd8ff(0x2c6)?(this[_0x2dd8ff(0x44d)]=this[_0x2dd8ff(0x44d)]||{},this[_0x2dd8ff(0x44d)][_0x2334f4]=this[_0x2dd8ff(0x44d)][this[_0x2dd8ff(0x4fb)]]||0x0,_0xf5bb2=![]):this[_0x2dd8ff(0x280)][_0x2dd8ff(0x2f4)](TextManager[_0x2dd8ff(0x1d4)])),this[_0x2dd8ff(0x2e8)]&&this[_0x2dd8ff(0x232)]&&this['updateStatusWindow']();},Window_ClassList[_0x559e70(0x2db)][_0x559e70(0x35e)]=function(){const _0xb5194f=_0x559e70,_0x451383=this[_0xb5194f(0x406)](),_0x17effa=JsonEx['makeDeepCopy'](this[_0xb5194f(0x2e8)]);_0x17effa[_0xb5194f(0x2d6)]=!![];if(_0x451383!==this[_0xb5194f(0x2e8)]['currentClass']()){if(_0xb5194f(0x51c)!==_0xb5194f(0x4cd))_0x451383?_0x17effa[_0xb5194f(0x4de)](_0x451383['id'],this[_0xb5194f(0x526)]):_0xb5194f(0x31e)==='fJUmb'?_0x3284df=_0x1384e9[_0xb5194f(0x1da)](_0xd3b07['$1']):_0x17effa['changeMulticlass'](0x0,this['_tier']);else{if(this[_0xb5194f(0x42e)]())this[_0xb5194f(0x267)]='DebuffRates';let _0x270c45=_0x22e7b5[_0xb5194f(0x1ee)]['Game_BattlerBase_debuffRate'][_0xb5194f(0x27a)](this,_0x1213e1);if(this['isActor']())this[_0xb5194f(0x267)]=_0x499885;return _0x270c45;}}this[_0xb5194f(0x232)][_0xb5194f(0x411)](_0x17effa);},Window_ClassList[_0x559e70(0x2db)][_0x559e70(0x4df)]=function(_0x2e7d45){const _0x59b700=_0x559e70;this['_tier']!==_0x2e7d45&&(_0x59b700(0x250)!==_0x59b700(0x307)?(this['_tier']=_0x2e7d45,this[_0x59b700(0x42a)]()):this[_0x59b700(0x4d8)]('',_0x59b700(0x324),!![],null));},Window_ClassList[_0x559e70(0x2db)][_0x559e70(0x331)]=function(){const _0x785b55=_0x559e70;if(!this[_0x785b55(0x2e8)])return;if(this[_0x785b55(0x526)]<=0x0)return;const _0x30ff04=DataManager['getActorUnlockedClasses'](this[_0x785b55(0x2e8)]);for(const _0x1c9436 of _0x30ff04){if(!_0x1c9436)continue;let _0xe21a1e=_0x1c9436[_0x785b55(0x2a2)];_0xe21a1e=_0xe21a1e[_0x785b55(0x2d3)](/\x1I\[(\d+)\]/gi,''),_0xe21a1e=_0xe21a1e[_0x785b55(0x2d3)](/\\I\[(\d+)\]/gi,'');const _0x3b7bec=this[_0x785b55(0x400)](_0x1c9436);this[_0x785b55(0x4d8)](_0xe21a1e,_0x785b55(0x324),_0x3b7bec,_0x1c9436);}if(this['_tier']>0x1){if(_0x785b55(0x4e1)===_0x785b55(0x4e1))this['addCommand']('',_0x785b55(0x324),!![],null);else{const _0x490087=this['_actor']['totalMulticlass']()||0x1;_0x54076d=_0x238840[_0x785b55(0x246)](_0x592828,this['innerHeight']/_0x490087);}}},Window_ClassList['prototype'][_0x559e70(0x400)]=function(_0x3a50bd){const _0x2c8234=_0x559e70;if(this[_0x2c8234(0x2e8)][_0x2c8234(0x3b6)](this[_0x2c8234(0x526)]))return![];if(this[_0x2c8234(0x526)]>0x1&&_0x3a50bd===this[_0x2c8234(0x2e8)]['currentClass']())return![];if(_0x3a50bd){if(_0x2c8234(0x49f)!==_0x2c8234(0x49f)){_0x5705ac=_0x4e9db1||_0x2c8234(0x466);const _0x13ed9d=_0x2c8234(0x309)[_0x2c8234(0x528)](_0x11d3bf[_0x2c8234(0x2ef)]),_0xa045cb=_0x4f18e8[_0x2c8234(0x404)],_0x27c146=_0xa045cb[_0x2c8234(0x528)](_0x1f1ce8,_0x2867df[_0x2c8234(0x20d)],_0x13ed9d,_0x191a28['classPointsFull']),_0x220e0d=this[_0x2c8234(0x4d7)](_0x27c146)[_0x2c8234(0x2cd)];if(_0x312766===_0x2c8234(0x466))_0x24f21a+=0x0;else _0x2009a1===_0x2c8234(0x38d)?_0x10c4eb+=_0x18a5fc[_0x2c8234(0x3ba)]((_0x4a56ad-_0x220e0d)/0x2):_0x4146b2+=_0x4c88f3-_0x220e0d;this[_0x2c8234(0x3fd)](_0x27c146,_0x262fa3,_0x208e2a);}else{const _0x505d58=this[_0x2c8234(0x2e8)][_0x2c8234(0x2b3)](_0x3a50bd['id']);if(_0x505d58>0x0&&this['_actor'][_0x2c8234(0x3b6)](_0x505d58))return![];const _0x23f999=DataManager[_0x2c8234(0x36d)](_0x3a50bd);if(!_0x23f999[_0x2c8234(0x2df)](this['_tier']))return![];}}return this[_0x2c8234(0x526)]>0x0;},Window_ClassList[_0x559e70(0x2db)][_0x559e70(0x40c)]=function(_0x13ca82){const _0xa740d1=_0x559e70;if(!this[_0xa740d1(0x2e8)])return;const _0x4c3b0c=this[_0xa740d1(0x4a9)](_0x13ca82),_0x297ee5=this[_0xa740d1(0x526)],_0xc0c6c0=this[_0xa740d1(0x36f)][_0x13ca82][_0xa740d1(0x43c)],_0x287684=_0xc0c6c0?_0xc0c6c0['id']:0x0,_0x18ba13=VisuMZ[_0xa740d1(0x1ee)][_0xa740d1(0x52c)][_0xa740d1(0x224)];if(!_0x18ba13)return;const _0x271609=_0x18ba13[_0x297ee5-0x1];if(!_0x271609)return;let _0xd66d05=_0x4c3b0c['x'],_0x4a08d1=_0x4c3b0c['y'],_0x2b575f=_0x4c3b0c[_0xa740d1(0x2cd)]-this[_0xa740d1(0x353)]()*0x2,_0x4e7d4a=_0x4c3b0c[_0xa740d1(0x2f1)],_0x5782b4=Math['min'](_0x2b575f,_0x4e7d4a,this[_0xa740d1(0x2ab)]()*0x3);_0x5782b4=Math[_0xa740d1(0x22c)](_0x5782b4/ImageManager[_0xa740d1(0x1fc)])*ImageManager[_0xa740d1(0x1fc)],_0xd66d05+=_0x5782b4+this['itemPadding']()*0x4,this[_0xa740d1(0x4f2)](),this[_0xa740d1(0x4c0)](),this[_0xa740d1(0x32e)](_0x4c3b0c),this[_0xa740d1(0x20f)](this['isEnabled'](_0xc0c6c0));if(!_0xc0c6c0){if('MhqHe'===_0xa740d1(0x297)){this[_0xa740d1(0x20f)](![]);const _0xf6b029=Math[_0xa740d1(0x3ba)](_0x4c3b0c['y']+this['lineHeight']()+(_0x4c3b0c[_0xa740d1(0x2f1)]-this[_0xa740d1(0x2ab)]()*0x2)/0x2);this[_0xa740d1(0x4dc)](TextManager['classChange_multiclass_remove'],_0x4c3b0c['x'],_0xf6b029,_0x4c3b0c[_0xa740d1(0x2cd)],_0xa740d1(0x38d));return;}else this[_0xa740d1(0x41e)](...arguments);}this['drawBigItemImage'](_0x13ca82,_0xc0c6c0,_0x4c3b0c);const _0x1bb03e=this['_actor'][_0xa740d1(0x2b3)](_0x287684);if(_0x1bb03e>0x0){const _0x37299e=_0x18ba13[_0x1bb03e-0x1];_0x37299e&&(this[_0xa740d1(0x522)](ColorManager[_0xa740d1(0x33a)](_0x37299e[_0xa740d1(0x40e)])),this[_0xa740d1(0x4dc)](_0x37299e[_0xa740d1(0x207)],_0x4c3b0c['x'],_0x4c3b0c['y'],_0x4c3b0c[_0xa740d1(0x2cd)],_0xa740d1(0x38d)),this[_0xa740d1(0x4c0)]());}this[_0xa740d1(0x20f)](this[_0xa740d1(0x400)](_0xc0c6c0)),_0x4a08d1+=this[_0xa740d1(0x2ab)]();let _0x15b94d=_0xc0c6c0[_0xa740d1(0x2a2)];_0x15b94d=_0x15b94d['replace'](/\x1I\[(\d+)\]/gi,''),_0x15b94d=_0x15b94d[_0xa740d1(0x2d3)](/\\I\[(\d+)\]/gi,''),this[_0xa740d1(0x4dc)](_0x15b94d,_0xd66d05,_0x4a08d1,_0x4c3b0c['width']-_0xd66d05),_0x4a08d1+=this[_0xa740d1(0x2ab)](),this[_0xa740d1(0x25f)](this[_0xa740d1(0x2e8)],_0x287684,_0xd66d05,_0x4a08d1-0x4),_0x4a08d1+=this[_0xa740d1(0x2ab)](),this[_0xa740d1(0x321)](_0x287684,_0x4c3b0c);};