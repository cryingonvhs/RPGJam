//=============================================================================
// VisuStella MZ - Skill Learn System
// VisuMZ_2_SkillLearnSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_SkillLearnSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillLearnSystem = VisuMZ.SkillLearnSystem || {};
VisuMZ.SkillLearnSystem.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.13] [SkillLearnSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skill_Learn_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin lets your game's actors have an alternative way of learning
 * skills aside from leveling up. Instead, they can learn skills through the
 * in-game skill menu, where they can trade gold, items, or the brand new
 * resources made available by this plugin: Ability Points and/or Skill Points.
 * 
 * Ability Points and Skill Points are new resources provided by this plugin
 * that can be acquired in a variety of ways, of which, you can set through its
 * mechanical settings in the Plugin Parameters. These can be through leveling
 * up, performing actions, and/or defeating enemies.
 * 
 * When learning skills through this plugin's in-game system, skills can have
 * a variety of costs and requirements. These requirements can come in the form
 * of needing to be at a certain level, having specific skills learned, and/or
 * having certain switches on.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actors can now learn new skills from the in-game skill menu under the
 *   new "Learn" command.
 * * In this new menu, actors can spend various resources to learn new skills.
 * * These resources can be Ability Points, Skill Points, items, and more.
 * * Ability Points and Skill Points are brand new resources added through this
 *   plugin which can be acquired through a variety a means ranging from
 *   participating in battle, defeating enemies, and/or leveling up.
 * * Learnable skills may have requirements that need to be first met even if
 *   the actor has the available resources.
 * * Skill learning requirements can include levels, having other skills
 *   learned, and/or enabled switches.
 * * Play animations upon learning a new skill inside the menu.
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
 * Battle Test
 *
 * When doing a battle test through the database, all of an actor's learnable
 * skills through the Skill Learn System's notetags will become available for
 * the test battle to reduce the need to manually add them.
 *
 * ---
 *
 * VisuMZ_3_VictoryAftermath
 *
 * If VisuStella MZ's Victory Aftermath plugin is installed, the amount of
 * Skill Points and Ability Points earned can be visibly shown in the rewards
 * window.
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
 * === Ability Points-Related Notetags ===
 * 
 * ---
 *
 * <Starting AP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Ability Points the actor starts with in his/her
 *   starting class.
 * - Replace 'x' with a numeric value representing the amount of Ability Points
 *   to start out with.
 *
 * ---
 *
 * <Class id Starting AP: x>
 * <Class name Starting AP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Ability Points the actor starts with in a
 *   specific class if Ability Points aren't shared across all classes.
 * - Replace 'x' with a numeric value representing the amount of Ability Points
 *   to start out with.
 * - Replace 'id' with the ID of the class to set starting Ability Points for.
 * - Replace 'name' with the name of the class to set starting Ability
 *   Points for.
 *
 * ---
 *
 * <AP Gain: x>
 * <User AP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the user will acquire 'x' amount
 *   of Ability Points.
 * - Replace 'x' with a number representing the amount of Ability Points for
 *   the user to earn upon usage.
 * - This effect will trigger each time per "hit".
 * - This effect will take over the "Per Action Hit" Ability Points gain from
 *   the Plugin Parameters.
 *
 * ---
 *
 * <Target AP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the target will acquire 'x' amount
 *   of Ability Points.
 * - Replace 'x' with a number representing the amount of Ability Points for
 *   the target to earn upon usage.
 * - This effect will trigger each time per "hit".
 *
 * ---
 *
 * <AP: x>
 *
 * - Used for: Enemy Notetags
 * - Determines the amount of Ability Points the enemy will give the player's
 *   party upon being defeated.
 * - Replace 'x' with a number representing the amount of Ability Points to
 *   grant the player's party each.
 * - This effect will take over the "Per Enemy" Ability Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <AP Rate: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Increases the amount of Ability Points the affected battler will gain by a
 *   percentile value.
 * - Replace 'x' with a percentage number representing the amount of Ability
 *   Points that will be acquired.
 * - This stacks multiplicatively with each other.
 * - This does not apply when Ability Points are directly added, lost, or set.
 *
 * ---
 * 
 * === Skill Points-Related Notetags ===
 * 
 * ---
 *
 * <Starting SP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Skill Points the actor starts with in his/her
 *   starting class.
 * - Replace 'x' with a numeric value representing the amount of Skill Points
 *   to start out with.
 *
 * ---
 *
 * <Class id Starting SP: x>
 * <Class name Starting SP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Skill Points the actor starts with in a specific
 *   class if Skill Points aren't shared across all classes.
 * - Replace 'x' with a numeric value representing the amount of Skill Points
 *   to start out with.
 * - Replace 'id' with the ID of the class to set starting Skill Points for.
 * - Replace 'name' with the name of the class to set starting Skill
 *   Points for.
 *
 * ---
 *
 * <SP Gain: x>
 * <User SP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the user will acquire 'x' amount
 *   of Skill Points.
 * - Replace 'x' with a number representing the amount of Skill Points for the
 *   user to earn upon usage.
 * - This effect will trigger each time per "hit".
 * - This effect will take over the "Per Action Hit" Skill Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Target SP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the target will acquire 'x' amount
 *   of Skill Points.
 * - Replace 'x' with a number representing the amount of Skill Points for the
 *   target to earn upon usage.
 * - This effect will trigger each time per "hit".
 *
 * ---
 *
 * <SP: x>
 *
 * - Used for: Enemy Notetags
 * - Determines the amount of Skill Points the enemy will give the player's
 *   party upon being defeated.
 * - Replace 'x' with a number representing the amount of Skill Points to grant
 *   the player's party each.
 * - This effect will take over the "Per Enemy" Skill Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <SP Rate: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Increases the amount of Skill Points the affected battler will gain by a
 *   percentile value.
 * - Replace 'x' with a percentage number representing the amount of Skill
 *   Points that will be acquired.
 * - This stacks multiplicatively with each other.
 * - This does not apply when Skill Points are directly added, lost, or set.
 *
 * ---
 * 
 * === Learnable Skills-Related Notetags ===
 * 
 * ---
 *
 * <Learn Skill: id>
 * <Learn Skills: id, id, id>
 * 
 * <Learn Skill: name>
 * <Learn Skills: name, name, name>
 *
 * - Used for: Class Notetags
 * - Determines what skills the class can learn through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the skill that can be
 *   learned through the Skill Learn System menu.
 * - Replace 'name' with the name of the skill that can be learned through the
 *   Skill Learn System menu.
 * - Multiple entries are permited.
 *
 * ---
 *
 * <Learn Skills>
 *  id
 *  id
 *  id
 *  name
 *  name
 *  name
 * </Learn Skills>
 *
 * - Used for: Class
 * - Determines what skills the class can learn through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the skill that can be
 *   learned through the Skill Learn System menu.
 * - Replace 'name' with the name of the skill that can be learned through the
 *   Skill Learn System menu.
 * - Multiple middle entries are permited.
 *
 * ---
 * 
 * === Skill Learn Cost-Related Notetags ===
 * 
 * ---
 *
 * <Learn AP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the Ability Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Ability Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Ability Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn CP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Determines the Class Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn JP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Determines the Job Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn SP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the Skill Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn Item id Cost: x>
 * <Learn Item name Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the items needed to be consumed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the item needed to be 
 *   consumed.
 * - Replace 'name' with the name of the item needed to be consumed.
 * - Replace 'x' with a number representing the amount of the item needed
 *   to learn this skill.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Weapon id Cost: x>
 * <Learn Weapon name Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the weapons needed to be consumed for an actor to learn the
 *   skill through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the weapon needed to be 
 *   consumed.
 * - Replace 'name' with the name of the weapon needed to be consumed.
 * - Replace 'x' with a number representing the amount of the weapon needed
 *   to learn this skill.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Armor id Cost: x>
 * <Learn Armor name Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the armors needed to be consumed for an actor to learn the
 *   skill through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the armor needed to be 
 *   consumed.
 * - Replace 'name' with the name of the armor needed to be consumed.
 * - Replace 'x' with a number representing the amount of the armor needed
 *   to learn this skill.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Gold Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the gold cost needed for an actor to learn the skill through
 *   the Skill Learn System.
 * - Replace 'x' with a number representing the amount of gold needed to learn
 *   this skill.
 * - If this notetag is not used, then the gold cost will default to the value
 *   found in the settings.
 *
 * ---
 *
 * <Learn Skill Costs>
 *  AP: x
 * 
 *  SP: x
 * 
 *  Item id: x
 *  Item name: x
 * 
 *  Weapon id: x
 *  Weapon name: x
 * 
 *  Armor id: x
 *  Armor name: x
 *  
 *  Gold: x
 * </Learn Skill Costs>
 *
 * - Used for: Skill Notetags
 * - Determines a group of resources needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'id' with the ID's of items, weapons, armors to be consumed.
 * - Replace 'name' with the names of items, weapons, armors to be consumed.
 * - Replace 'x' with the quantities of the designated resource to be consumed.
 * - Insert multiple entries of items, weapons, and armors inside the notetags
 *   to add more resource entries.
 *
 * ---
 * 
 * === JavaScript Notetags: Skill Costs ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * create dynamic Ability Point and Skill Point costs.
 * 
 * ---
 *
 * <JS Learn AP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn AP Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Ability Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Ability
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn AP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 *
 * <JS Learn CP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn CP Cost>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Class Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Skill
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn CP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 *
 * <JS Learn JP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn JP Cost>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Job Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Skill
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn JP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 *
 * <JS Learn SP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn SP Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Skill Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Skill
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn SP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 * 
 * === Show Condition-Related Notetags ===
 * 
 * ---
 *
 * <Learn Show Level: x>
 *
 * - Used for: Skill Notetags
 * - Actors must be at least the required level in order for the skill to even
 *   appear visibly in the Skill Learn System menu.
 * - Replace 'x' with a number representing the required level for the actor
 *   in order for the skill to visibly appear.
 *
 * ---
 *
 * <Learn Show Skill: id>
 * <Learn Show Skill: name>
 * 
 * <Learn Show All Skills: id, id, id>
 * <Learn Show All Skills: name, name, name>
 * 
 * <Learn Show Any Skills: id, id, id>
 * <Learn Show Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - The actor must have already learned the above skills in order for the
 *   learnable skill to appear visibly in the Skill Learn System menu.
 * - Replace 'id' with a number representing the ID of the skill required to be
 *   known by the actor in order to appear visibly in the menu.
 * - Replace 'name' with the name of the skill required to be known by the
 *   actor in order to appear visibly in the menu.
 * - The 'All' notetag variant requires all of the listed skills to be known
 *   before the learnable skill will appear visibly in the menu.
 * - The 'Any' notetag variant requires any of the listed skills to be known
 *   before the learnable skill will appear visibly in the menu.
 *
 * ---
 *
 * <Learn Show Switch: x>
 * 
 * <Learn Show All Switches: x, x, x>
 * 
 * <Learn Show Any Switches: x, x, x>
 *
 * - Used for: Skill Notetags
 * - The switches must be in the ON position in order for the learnable skill
 *   to appear visibly in the Skill Learn System menu.
 * - Replace 'x' with a number representing the ID of the switch required to be
 *   in the ON position in order to appear visibly in the menu.
 * - The 'All' notetag variant requires all of the switches to be in the ON
 *   position before the learnable skill will appear visibly in the menu.
 * - The 'Any' notetag variant requires any of the switches to be in the ON
 *   position before the learnable skill will appear visibly in the menu.
 *
 * ---
 * 
 * === JavaScript Notetags: Show Conditions ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * create dynamic determined show conditions.
 * 
 * ---
 *
 * <JS Learn Show>
 *  code
 *  code
 *  visible = code;
 * </JS Learn Show>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to determine if the skill will be
 *   visibly shown in the Skill Learn System menu.
 * - The 'visible' variable must result in a 'true' or 'false' value to
 *   determine if the skill will be visible.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - Any other show conditions must be met, too.
 *
 * ---
 *
 * <JS Learn Show List Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Show List Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is shown in the Skill Learn System skill list.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 *
 * <JS Learn Show Detail Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Show Detail Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is selected and the Detailed Skill Learn System
 *   resource cost window is opened.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 * 
 * === Require Condition-Related Notetags ===
 * 
 * ---
 *
 * <Learn Require Level: x>
 *
 * - Used for: Skill Notetags
 * - Actors must be at least the required level in order for the skill to be
 *   enabled in the Skill Learn System menu.
 * - Replace 'x' with a number representing the required level for the actor
 *   in order for the skill to visibly appear.
 *
 * ---
 *
 * <Learn Require Skill: id>
 * <Learn Require Skill: name>
 * 
 * <Learn Require All Skills: id, id, id>
 * <Learn Require All Skills: name, name, name>
 * 
 * <Learn Require Any Skills: id, id, id>
 * <Learn Require Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - The actor must have already learned the above skills in order for the
 *   learnable skill to be enabled in the Skill Learn System menu.
 * - Replace 'id' with a number representing the ID of the skill required to be
 *   known by the actor in order to be enabled in the menu.
 * - Replace 'name' with the name of the skill required to be known by the
 *   actor in order to be enabled in the menu.
 * - The 'All' notetag variant requires all of the listed skills to be known
 *   before the learnable skill will be enabled in the menu.
 * - The 'Any' notetag variant requires any of the listed skills to be known
 *   before the learnable skill will be enabled in the menu.
 *
 * ---
 *
 * <Learn Require Switch: x>
 * 
 * <Learn Require All Switches: x, x, x>
 * 
 * <Learn Require Any Switches: x, x, x>
 *
 * - Used for: Skill Notetags
 * - The switches must be in the ON position in order for the learnable skill
 *   to be enabled in the Skill Learn System menu.
 * - Replace 'x' with a number representing the ID of the switch required to be
 *   in the ON position in order to be enabled in the menu.
 * - The 'All' notetag variant requires all of the switches to be in the ON
 *   position before the learnable skill will be enabled in the menu.
 * - The 'Any' notetag variant requires any of the switches to be in the ON
 *   position before the learnable skill will be enabled in the menu.
 *
 * ---
 * 
 * === JavaScript Notetags: Requirement Conditions ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * create dynamic determined learning requirement conditions.
 * 
 * ---
 *
 * <JS Learn Requirements>
 *  code
 *  code
 *  enabled = code;
 * </JS Learn Requirements>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to determine if the skill will be
 *   enabled for learning in the Skill Learn System menu.
 * - The 'enabled' variable must result in a 'true' or 'false' value to
 *   determine if the skill will be enabled.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - Any other requirement conditions must be met, too.
 *
 * ---
 *
 * <JS Learn Requirements List Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Requirements List Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is shown in the Skill Learn System skill list
 *   as long as the requirements have to be met.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 *
 * <JS Learn Requirements Detail Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Requirements Detail Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is selected and the Detailed Skill Learn System
 *   resource cost window is opened as long as the requirements have to be met.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 * 
 * === Animation-Related Notetags ===
 * 
 * ---
 *
 * <Learn Skill Animation: id>
 * <Learn Skill Animation: id, id, id>
 * 
 * - Used for: Skill Notetags
 * - Plays the animation(s) when this skill is learned through the Skill Learn
 *   System's menu.
 * - This will override the default animation settings found in the plugin
 *   parameters and use the unique one set through notetags instead.
 * - Replace 'id' with the ID of the animation you wish to play.
 * - If multiple ID's are found, then each animation will play one by one in
 *   the order they are listed.
 *
 * ---
 * 
 * <Learn Skill Fade Speed: x>
 * 
 * - Used for: Skill Notetags
 * - This determines the speed at which the skill's icon fades in during the
 *   skill learning animation.
 * - Replace 'x' with a number value to determine how fast the icon fades in.
 * - Use lower numbers for slower fade speeds and higher numbers for faster
 *   fade speeds.
 * 
 * ---
 * 
 * <Learn Skill Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: Skill Notetags
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   skill's icon during learning instead.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of learning skills, too.
 * - The size used for the image will vary based on your game's resolution.
 * 
 * ---
 * 
 * === JavaScript Notetags: On Learning Conditions ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * produce special effects when the skill is learned.
 * 
 * ---
 *
 * <JS On Learn Skill>
 *  code
 *  code
 *  code
 * </JS On Learn Skill>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to perform the desired actions when
 *   the skill is learned.
 * - This will apply to any time the skill is learned by an actor, even if it
 *   is through natural leveling or through the Skill Learn System menu.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
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
 * === Ability Points Plugin Commands ===
 * 
 * ---
 *
 * Ability Points: Gain
 * - The target actor(s) gains Ability Points.
 * - Gained amounts are affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to gain Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be gained.
 *   - You may use code.
 *
 * ---
 *
 * Ability Points: Add
 * - The target actor(s) receives Ability Points.
 * - Received amounts are NOT affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to receive Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be added.
 *   - You may use code.
 *
 * ---
 *
 * Ability Points: Lose
 * - The target actor(s) loses Ability Points.
 * - Lost amounts are NOT affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to lose Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be lost.
 *   - You may use code.
 *
 * ---
 *
 * Ability Points: Set
 * - Changes the exact Ability Points for the target actor(s).
 * - Changed amounts are NOT affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to change Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be set exactly to.
 *   - You may use code.
 *
 * ---
 * 
 * === Skill Points Plugin Commands ===
 * 
 * ---
 *
 * Skill Points: Gain
 * - The target actor(s) gains Skill Points.
 * - Gained amounts are affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to gain Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be gained.
 *   - You may use code.
 *
 * ---
 *
 * Skill Points: Add
 * - The target actor(s) receives Skill Points.
 * - Received amounts are NOT affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to receive Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be added.
 *   - You may use code.
 *
 * ---
 *
 * Skill Points: Lose
 * - The target actor(s) loses Skill Points.
 * - Lost amounts are NOT affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to lose Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be lost.
 *   - You may use code.
 *
 * ---
 *
 * Skill Points: Set
 * - Changes the exact Skill Points for the target actor(s).
 * - Changed amounts are NOT affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to change Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be set exactly to.
 *   - You may use code.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Show Skill Learn in Skill Menu?
 * - Shows/hides Skill Learn inside the skill menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Skill Learn inside the skill menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Skill Learn System. These determine the settings
 * that are used for the Skill Learn System menu's main screen.
 *
 * ---
 *
 * Visual
 * 
 *   Displayed Costs:
 *   - Select which cost types to display in the skill entry.
 *   - This also determines the order they are displayed.
 *     - AP - Ability Points
 *     - SP - Skill Points
 *     - Item - Item Costs
 *     - Weapon - Weapon Costs
 *     - Armor - Armor Costs
 *     - Gold - Gold Costs
 * 
 *   JS: Draw Status:
 *   - JavaScript code used to draw in Window_SkillStatus when the Skill Learn
 *     System is active.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Learned Text:
 *   - This is the text that appears if the skill has been learned.
 *   - You may use text codes.
 * 
 *   Requirements
 * 
 *     Requirement Header:
 *     - Header for requirements.
 *     - %1 - Requirements (all of them)
 * 
 *     Separation Format:
 *     - This determines how the requirements are separated.
 *     - %1 - Previous Requirement, %2 - Second Requirement
 * 
 *     Level Format:
 *     - This how level is displayed.
 *     - %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * 
 *     Skill Format:
 *     - This how required skills are displayed.
 *     - %1 - Icon, %2 - Skill Name
 * 
 *     Switch Format:
 *     - This how required switches are displayed.
 *     - %1 - Switch Name
 * 
 *   Costs
 * 
 *     Separation Format:
 *     - This determines how the costs are separated from one another.
 *     - %1 - Previous Cost, %2 - Second Cost
 * 
 *     Item Format:
 *     - Determine how items are displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Item Name
 * 
 *     Weapon Format:
 *     - Determine how weapons are displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Weapon Name
 * 
 *     Armor Format:
 *     - Determine how armors are displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Armor Name
 * 
 *     Gold Format:
 *     - Determine how gold is displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Currency Vocabulary
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Access Settings
 * ============================================================================
 *
 * Menu Access settings for Skill Learn System. The Skill Learn System is
 * accessible normally through the in-game Skill menu.
 *
 * ---
 *
 * Main Access Settings
 * 
 *   Command Name:
 *   - Name of the 'Skill Learn' option in the Menu.
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Skill Learn?
 * 
 *   Show in Menu?:
 *   - Add the 'Skill Learn' option to the Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Animation Settings
 * ============================================================================
 *
 * Animation settings for the Skill Learn System. By default, an animation will
 * be played upon learning a skill through the Skill Learn System's menu in
 * order to provide player feedback about learning the said skill.
 *
 * ---
 *
 * General
 * 
 *   Show Animations?:
 *   - Show animations when learning a skill?
 * 
 *   Show Windows?:
 *   - Show windows during a skill learn animation?
 * 
 *   Default Animations:
 *   - Default animation(s) do you want to play when learning.
 *
 * ---
 *
 * Skill Sprite
 * 
 *   Scale:
 *   - How big do you want the skill sprite to be on screen?
 * 
 *   Fade Speed:
 *   - How fast do you want the icon to fade in?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Settings for the sound effect played when learning a new skill through the
 * Skill Learn System.
 *
 * ---
 *
 * Settings
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
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Window settings for the Skill Learn System. There are two new windows added
 * into the Skill menu through this plugin: the Detail Window and the Confirm
 * Window.
 * 
 * The Detail Window will list the required costs of learning a skill in detail
 * in case the icons provided are not clear enough to show what's needed.
 * 
 * The Confirm Window is a window that appears towards the bottom to let the
 * player make a confirmation before deciding to learn the skill.
 *
 * ---
 *
 * Detail Window
 * 
 *   Requirements
 * 
 *     Requirement Title:
 *     - Text used when drawing the learning requirements.
 *     - %1 - Skill Icon, %2 - Skill Name
 * 
 *     Requirement Met:
 *     - This how met requirements look.
 *     - %1 - Requirement Text
 * 
 *     Requirement Not Met:
 *     - This how met requirements look.
 *     - %1 - Requirement Text
 * 
 *     Requirement Level:
 *     - This how level is displayed.
 *     - %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * 
 *     Requirement Skill:
 *     - This how required skills are displayed.
 *     - %1 - Icon, %2 - Skill Name
 * 
 *     Requirement Switch:
 *     - This how required switches are displayed.
 *     - %1 - Switch Name
 * 
 *   Costs
 * 
 *     Cost Title:
 *     - Text used when drawing the learning costs.
 *     - %1 - Skill Icon, %2 - Skill Name
 * 
 *     Cost Name:
 *     - Text used to label the resource being consumed.
 * 
 *     Cost Quantity:
 *     - Text used to label the cost of the resource.
 * 
 *     Cost of Owned:
 *     - Text used to label the amount of the resource in possession.
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Confirm Window
 * 
 *   Confirm Text:
 *   - Text used for the Confirm command.
 *   - Text codes can be used.
 * 
 *   Cancel Text:
 *   - Text used for the Cancel command.
 *   - Text codes can be used.
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Ability Points Settings
 * ============================================================================
 *
 * Ability Points are an actor-only resource used as a currency for this
 * plugin. You can determine how they appear in-game, how they're earned, and
 * what kind of mechanics are involved with them. Ability Points can also be 
 * used in other VisuStella plugins.
 *
 * ---
 *
 * Mechanics
 * 
 *   Shared Ability Points:
 *   - Do you want Ability Points to be shared across all classes?
 *   - Or do you want all classes to have their own?
 * 
 *   Maximum:
 *   - What's the maximum amount of Ability Points an actor can have?
 *   - Use 0 for unlimited Ability Points.
 *
 * ---
 *
 * Visual
 * 
 *   Show In Menus?:
 *   - Do you wish to show Ability Points in menus that allow them?
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Ability Points?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Full Text:
 *   - The full text of how Ability Points appears in-game.
 * 
 *   Abbreviated Text:
 *   - The abbreviation of how Ability Points appears in-game.
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
 *   - How many Ability Points should an actor gain per action?
 *   - You may use code.
 * 
 *   Per Level Up:
 *   - How many Ability Points should an actor gain per level up?
 *   - You may use code.
 * 
 *   Per Enemy Defeated:
 *   - How many Ability Points should an actor gain per enemy?
 *   - You may use code.
 * 
 *     Alive Actors?:
 *     - Do actors have to be alive to receive Ability Points from
 *       defeated enemies?
 *
 * ---
 *
 * Victory
 * 
 *   Show During Victory?:
 *   - Show how much AP an actor has earned in battle during the victory phase?
 * 
 *   Victory Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * 
 *   Aftermath Display?:
 *   - Requires VisuMZ_3_VictoryAftermath. 
 *   - Show Ability Points as the main acquired resource in the actor windows?
 * 
 *   Aftermath Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Earned, %2 - Abbr, %3 - Full Text
 *
 * ---
 * 
 * For those who wish to display how many Ability Points an actor has for a
 * specific class, you can use the following JavaScript code inside of a
 * window object.
 * 
 *   this.drawAbilityPoints(value, x, y, width, align);
 *   - The 'value' variable refers to the number you wish to display.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 *   this.drawActorAbilityPoints(actor, classID, x, y, width, align);
 *   - The 'actor' variable references the actor to get data from.
 *   - The 'classID' variable is the class to get data from.
 *     - Use 0 if Ability Points aren't shared or if you want the Ability
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
 * Plugin Parameters: Skill Points Settings
 * ============================================================================
 *
 * Skill Points are an actor-only resource used as a currency for this plugin.
 * You can determine how they appear in-game, how they're earned, and what kind
 * of mechanics are involved with them. Skill Points can also be used in other
 * VisuStella plugins.
 *
 * ---
 *
 * Mechanics
 * 
 *   Shared Skill Points:
 *   - Do you want Skill Points to be shared across all classes?
 *   - Or do you want all classes to have their own?
 * 
 *   Maximum:
 *   - What's the maximum amount of Skill Points an actor can have?
 *   - Use 0 for unlimited Skill Points.
 *
 * ---
 *
 * Visual
 * 
 *   Show In Menus?:
 *   - Do you wish to show Skill Points in menus that allow them?
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Skill Points?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Full Text:
 *   - The full text of how Skill Points appears in-game.
 * 
 *   Abbreviated Text:
 *   - The abbreviation of how Skill Points appears in-game.
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
 *   - How many Skill Points should an actor gain per action?
 *   - You may use code.
 * 
 *   Per Level Up:
 *   - How many Skill Points should an actor gain per level up?
 *   - You may use code.
 * 
 *   Per Enemy Defeated:
 *   - How many Skill Points should an actor gain per enemy?
 *   - You may use code.
 * 
 *     Alive Actors?:
 *     - Do actors have to be alive to receive Skill Points from
 *       defeated enemies?
 *
 * ---
 *
 * Victory
 * 
 *   Show During Victory?:
 *   - Show how much SP an actor has earned in battle during the victory phase?
 * 
 *   Victory Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * 
 *   Aftermath Display?:
 *   - Requires VisuMZ_3_VictoryAftermath. 
 *   - Show Skill Points as the main acquired resource in the actor windows?
 * 
 *   Aftermath Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Earned, %2 - Abbr, %3 - Full Text
 *
 * ---
 * 
 * For those who wish to display how many Skill Points an actor has for a
 * specific class, you can use the following JavaScript code inside of a
 * window object.
 * 
 *   this.drawSkillPoints(value, x, y, width, align);
 *   - The 'value' variable refers to the number you wish to display.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 *   this.drawActorSkillPoints(actor, classID, x, y, width, align);
 *   - The 'actor' variable references the actor to get data from.
 *   - The 'classID' variable is the class to get data from.
 *     - Use 0 if Skill Points aren't shared or if you want the Skill
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
 * Version 1.13: March 14, 2024
 * * Compatibility Update!
 * ** Fixed a problem where the learn passive notetags from the Equip Passive
 *    System plugin could be blocked by other plugins. Fix made by Irina.
 * 
 * Version 1.12: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.11: May 18, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: December 15, 2022
 * * Bug Fixes!
 * ** Fixed a visual listing bug effect when 'CP' and 'JP' are listed under
 *    costs but the VisuMZ Class Change System plugin isn't present. Fix made
 *    by Olivia.
 * 
 * Version 1.09: June 9, 2022
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: March 24, 2022
 * * Documentation Update!
 * ** Fixed a typo for missing a "/" in the <Learn Skills> group notetag.
 * 
 * Version 1.07: February 10, 2022
 * * Bug Fixes!
 * ** Costs for CP and JP will have better fail safes to not automatically
 *    reduce to 0 under specific conditions when learning skills. Fix by Arisu.
 * 
 * Version 1.06: July 9, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly.
 * *** <Learn Skill Picture: filename> and <Picture: filename>
 * **** Uses a picture from your project's /img/pictures/ folder instead of the
 *      skill's icon during learning instead.
 * 
 * Version 1.04: December 18, 2020
 * * Bug Fixes!
 * ** Notetags that utilize multiple numeric ID's instead of skill names should
 *    now be working properly. Fix made by Yanfly.
 * 
 * Version 1.03: December 11, 2020
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** The Plugin Parameter for "Displayed Costs" have been updated to contain
 *    compatibility for a future plugin.
 * ** The Plugin Parameter for "JS: Draw Status" has been updated to contain
 *    compatibility for a future plugin.
 * *** To quickly acquire the new changes for the above Plugin Parameters,
 *     delete the "General" settings from the main Plugin Parameters page, then
 *     open them up again. These settings will be defaulted to the new
 *     additions added for the plugin. Warning! Old settings will be lost.
 * * New Features!
 * ** Added <Learn CP Cost: x>, <Learn JP Cost: x>, <JS Learn CP Cost>,
 *    <JS Learn JP Cost> notetags. Added by Arisu.
 * 
 * Version 1.02: November 29, 2020
 * * Bug Fixes!
 * ** The plugin should no longer be dependent on Skills & States Core. Fix
 *    made by Arisu.
 * 
 * Version 1.01: November 22, 2020
 * * Bug Fixes!
 * ** Game no longer crashes when displaying AP/SP rewards for those without
 *    the Victory Aftermath plugin. Fix made by Yanfly.
 *
 * Version 1.00: November 30, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsGain
 * @text Ability Points: Gain
 * @desc The target actor(s) gains Ability Points.
 * Gained amounts are affected by Ability Point bonus rates.
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
 * @desc Select which Class ID(s) to gain Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be gained.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsAdd
 * @text Ability Points: Add
 * @desc The target actor(s) receives Ability Points.
 * Received amounts are NOT affected by Ability Point bonus rates.
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
 * @desc Select which Class ID(s) to receive Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be added.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsLose
 * @text Ability Points: Lose
 * @desc The target actor(s) loses Ability Points.
 * Lost amounts are NOT affected by Ability Point bonus rates.
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
 * @desc Select which Class ID(s) to lose Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be lost.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsSet
 * @text Ability Points: Set
 * @desc Changes the exact Ability Points for the target actor(s).
 * Changed amounts are NOT affected by Ability Point bonus rates.
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
 * @desc Select which Class ID(s) to change Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be set exactly to.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsGain
 * @text Skill Points: Gain
 * @desc The target actor(s) gains Skill Points.
 * Gained amounts are affected by Skill Point bonus rates.
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
 * @desc Select which Class ID(s) to gain Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be gained.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsAdd
 * @text Skill Points: Add
 * @desc The target actor(s) receives Skill Points.
 * Received amounts are NOT affected by Skill Point bonus rates.
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
 * @desc Select which Class ID(s) to receive Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be added.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsLose
 * @text Skill Points: Lose
 * @desc The target actor(s) loses Skill Points.
 * Lost amounts are NOT affected by Skill Point bonus rates.
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
 * @desc Select which Class ID(s) to lose Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be lost.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsSet
 * @text Skill Points: Set
 * @desc Changes the exact Skill Points for the target actor(s).
 * Changed amounts are NOT affected by Skill Point bonus rates.
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
 * @desc Select which Class ID(s) to change Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be set exactly to.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowSkillLearnSystemMenu
 * @text System: Show Skill Learn in Skill Menu?
 * @desc Shows/hides Skill Learn inside the skill menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Skill Learn inside the skill menu.
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
 * @param SkillLearnSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Scene_SkillLearn
 *
 * @param General:struct
 * @text General Settings
 * @parent Scene_SkillLearn
 * @type struct<General>
 * @desc General settings for the Skill Learn System.
 * @default {"Visual":"","DisplayedCosts:arraystr":"[\"AP\",\"SP\",\"Item\",\"Weapon\",\"Armor\",\"Gold\"]","StatusWindowDrawJS:func":"\"// Draw Face\\nconst fx = this.colSpacing() / 2;\\nconst fh = this.innerHeight;\\nconst fy = fh / 2 - this.lineHeight() * 1.5;\\nthis.drawActorFace(this._actor, fx + 1, 0, 144, fh);\\nthis.drawActorSimpleStatus(this._actor, fx + 180, fy);\\n\\n// Return if Window Size is Too Small\\nlet sx = (this.colSpacing() / 2) + 180 + 180 + 180;\\nlet sw = this.innerWidth - sx - 2;\\nif (sw < 300) return;\\n\\n// Draw Costs\\n// Compatibility Target\\nconst costs = this.getSkillLearnDisplayedCosts();\\nconst maxEntries = Math.floor(this.innerHeight / this.lineHeight());\\nconst maxCol = Math.ceil(costs.length / maxEntries);\\nlet cx = sx;\\nlet cy = Math.max(Math.round((this.innerHeight - (this.lineHeight() * Math.ceil(costs.length / maxCol))) / 2), 0);\\nconst by = cy;\\nlet cw = (this.innerWidth - cx - (this.itemPadding() * 2 * maxCol)) / maxCol;\\nif (maxCol === 1) {\\n    cw = Math.min(ImageManager.faceWidth, cw);\\n    cx += Math.round((this.innerWidth - cx - (this.itemPadding() * 2) - cw) / 2);\\n}\\nfor (const cost of costs) {\\n    switch (cost) {\\n\\n        case 'AP':\\n            this.drawActorAbilityPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            break;\\n\\n        case 'CP':\\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\\n                this.drawActorClassPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            }\\n            break;\\n\\n        case 'JP':\\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\\n                this.drawActorJobPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            }\\n            break;\\n\\n        case 'SP':\\n            this.drawActorSkillPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            break;\\n\\n        case 'Gold':\\n            this.drawCurrencyValue($gameParty.gold(), TextManager.currencyUnit, cx, cy, cw);\\n            break;\\n\\n        default:\\n            continue;\\n    }\\n    cy += this.lineHeight();\\n    if (cy + this.lineHeight() > this.innerHeight) {\\n        cy = by;\\n        cx += cw + (this.itemPadding() * 2);\\n    }\\n}\"","Vocabulary":"","Learned:str":"Learned","Requirements":"","RequireFmt:str":"Requires %1","ReqSeparateFmt:str":"%1, %2","ReqLevelFmt:str":"\\C[16]%3\\C[0]%1","ReqSkillFmt:str":"%1\\C[16]%2\\C[0]","ReqSwitchFmt:str":"\\C[16]%1\\C[0]","Costs":"","SeparationFmt:str":"%1  %2","ItemFmt:str":"×%1%2","WeaponFmt:str":"×%1%2","ArmorFmt:str":"×%1%2","GoldFmt:str":"×%1%2"}
 *
 * @param MenuAccess:struct
 * @text Menu Access Settings
 * @parent Scene_SkillLearn
 * @type struct<MenuAccess>
 * @desc Menu Access settings for Skill Learn System.
 * @default {"Name:str":"Learn","Icon:num":"87","ShowMenu:eval":"true"}
 *
 * @param Animation:struct
 * @text Animation Settings
 * @parent Scene_SkillLearn
 * @type struct<Animation>
 * @desc Animation settings for the Skill Learn System.
 * @default {"General":"","ShowAnimations:eval":"true","ShowWindows:eval":"true","Animations:arraynum":"[\"40\",\"48\"]","Sprite":"","Scale:num":"8.0","FadeSpeed:num":"4"}
 *
 * @param Sound:struct
 * @text Learn Sound Effect
 * @parent Scene_SkillLearn
 * @type struct<Sound>
 * @desc Settings for the sound effect played when learning a new skill through the Skill Learn System.
 * @default {"name:str":"Skill3","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param Window:struct
 * @text Window Settings
 * @parent Scene_SkillLearn
 * @type struct<Window>
 * @desc Window settings for the Skill Learn System.
 * @default {"DetailWindow":"","Requirements":"","RequirementTitle:str":"\\C[16]%1%2 Requirements\\C[0]","ReqMetFmt:str":"\\C[24]✔ %1\\C[0]","ReqNotMetFmt:str":"\\C[0]✘ %1\\C[0]","ReqLevelFmt:str":"\\I[87]%2 %1 Reached","ReqSkillFmt:str":"%1%2 Learned","ReqSwitchFmt:str":"\\I[160]%1","Costs":"","LearningTitle:str":"\\C[16]Learning\\C[0] %1%2","IngredientName:str":"\\C[16]Resource\\C[0]","IngredientCost:str":"\\C[16]Cost\\C[0]","IngredientOwned:str":"\\C[16]Owned\\C[0]","DetailWindow_BgType:num":"0","DetailWindow_RectJS:func":"\"const skillWindowRect = this.itemWindowRect();\\nconst wx = skillWindowRect.x;\\nconst wy = skillWindowRect.y;\\nconst ww = skillWindowRect.width;\\nconst wh = skillWindowRect.height - this.calcWindowHeight(2, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ConfirmWindow":"","ConfirmCmd:str":"\\I[164]Learn","CancelCmd:str":"\\I[168]Cancel","ConfirmWindow_BgType:num":"0","ConfirmWindow_RectJS:func":"\"const skillWindowRect = this.itemWindowRect();\\nconst ww = skillWindowRect.width;\\nconst wh = this.calcWindowHeight(2, false);\\nconst wx = skillWindowRect.x;\\nconst wy = skillWindowRect.y + skillWindowRect.height - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 * 
 * @param Resources
 *
 * @param AbilityPoints:struct
 * @text Ability Points Settings
 * @parent Resources
 * @type struct<AbilityPoints>
 * @desc Settings for Ability Points and how they work in-game.
 * @default {"Mechanics":"","SharedResource:eval":"true","DefaultCost:num":"0","MaxResource:num":"0","Visual":"","ShowInMenus:eval":"true","Icon:num":"78","Vocabulary":"","FullText:str":"Ability Points","AbbrText:str":"AP","TextFmt:str":"%1 \\c[5]%2\\c[0]%3","Gain":"","PerAction:str":"10 + Math.randomInt(5)","PerLevelUp:str":"0","PerEnemy:str":"50 + Math.randomInt(10)","AliveActors:eval":"true","Victory":"","ShowVictory:eval":"true","VictoryText:str":"%1 gains %2 %3!","AftermathActorDisplay:eval":"true","AftermathText:str":"+%1 %2"}
 *
 * @param SkillPoints:struct
 * @text Skill Points Settings
 * @parent Resources
 * @type struct<SkillPoints>
 * @desc Settings for Skill Points and how they work in-game.
 * @default {"Mechanics":"","SharedResource:eval":"false","DefaultCost:num":"1","MaxResource:num":"0","Visual":"","ShowInMenus:eval":"true","Icon:num":"79","Vocabulary":"","FullText:str":"Skill Points","AbbrText:str":"SP","TextFmt:str":"%1 \\c[5]%2\\c[0]%3","Gain":"","PerAction:str":"0","PerLevelUp:str":"100","PerEnemy:str":"0","AliveActors:eval":"true","Victory":"","ShowVictory:eval":"false","VictoryText:str":"%1 gains %2 %3!","AftermathActorDisplay:eval":"false","AftermathText:str":"+%1 %2"}
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
 * @param Visual
 * 
 * @param DisplayedCosts:arraystr
 * @text Displayed Costs
 * @parent Visual
 * @type select[]
 * @option AP - Ability Points
 * @value AP
 * @option CP - Class Points (Requires VisuMZ_2_ClassChangeSystem)
 * @value CP
 * @option JP - Job Points (Requires VisuMZ_2_ClassChangeSystem)
 * @value JP
 * @option SP - Skill Points
 * @value SP
 * @option Item - Item Costs
 * @value Item
 * @option Weapon - Weapon Costs
 * @value Weapon
 * @option Armor - Armor Costs
 * @value Armor
 * @option Gold - Gold Costs
 * @value Gold
 * @desc Select which cost types to display in the skill entry.
 * This also determines the order they are displayed.
 * @default ["AP","SP","Item","Weapon","Armor","Gold"]
 *
 * @param StatusWindowDrawJS:func
 * @text JS: Draw Status
 * @parent Visual
 * @type note
 * @desc JavaScript code used to draw in Window_SkillStatus when the Skill Learn System is active.
 * @default "// Draw Face\nconst fx = this.colSpacing() / 2;\nconst fh = this.innerHeight;\nconst fy = fh / 2 - this.lineHeight() * 1.5;\nthis.drawActorFace(this._actor, fx + 1, 0, 144, fh);\nthis.drawActorSimpleStatus(this._actor, fx + 180, fy);\n\n// Return if Window Size is Too Small\nlet sx = (this.colSpacing() / 2) + 180 + 180 + 180;\nlet sw = this.innerWidth - sx - 2;\nif (sw < 300) return;\n\n// Draw Costs\n// Compatibility Target\nconst costs = this.getSkillLearnDisplayedCosts();\nconst maxEntries = Math.floor(this.innerHeight / this.lineHeight());\nconst maxCol = Math.ceil(costs.length / maxEntries);\nlet cx = sx;\nlet cy = Math.max(Math.round((this.innerHeight - (this.lineHeight() * Math.ceil(costs.length / maxCol))) / 2), 0);\nconst by = cy;\nlet cw = (this.innerWidth - cx - (this.itemPadding() * 2 * maxCol)) / maxCol;\nif (maxCol === 1) {\n    cw = Math.min(ImageManager.faceWidth, cw);\n    cx += Math.round((this.innerWidth - cx - (this.itemPadding() * 2) - cw) / 2);\n}\nfor (const cost of costs) {\n    switch (cost) {\n\n        case 'AP':\n            this.drawActorAbilityPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            break;\n\n        case 'CP':\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\n                this.drawActorClassPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            }\n            break;\n\n        case 'JP':\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\n                this.drawActorJobPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            }\n            break;\n\n        case 'SP':\n            this.drawActorSkillPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            break;\n\n        case 'Gold':\n            this.drawCurrencyValue($gameParty.gold(), TextManager.currencyUnit, cx, cy, cw);\n            break;\n\n        default:\n            continue;\n    }\n    cy += this.lineHeight();\n    if (cy + this.lineHeight() > this.innerHeight) {\n        cy = by;\n        cx += cw + (this.itemPadding() * 2);\n    }\n}"
 *
 * @param Vocabulary
 *
 * @param Learned:str
 * @text Learned Text
 * @parent Vocabulary
 * @desc This is the text that appears if the skill has been
 * learned. You may use text codes.
 * @default Learned
 *
 * @param Requirements
 * @parent Vocabulary
 *
 * @param RequireFmt:str
 * @text Requirement Header
 * @parent Requirements
 * @desc Header for requirements.
 * %1 - Requirements (all of them)
 * @default Requires %1
 *
 * @param ReqSeparateFmt:str
 * @text Separation Format
 * @parent Requirements
 * @desc This determines how the requirements are separated.
 * %1 - Previous Requirement, %2 - Second Requirement
 * @default %1, %2
 *
 * @param ReqLevelFmt:str
 * @text Level Format
 * @parent Requirements
 * @desc This how level is displayed.
 * %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * @default \C[16]%3\C[0]%1
 *
 * @param ReqSkillFmt:str
 * @text Skill Format
 * @parent Requirements
 * @desc This how required skills are displayed.
 * %1 - Icon, %2 - Skill Name
 * @default %1\C[16]%2\C[0]
 *
 * @param ReqSwitchFmt:str
 * @text Switch Format
 * @parent Requirements
 * @desc This how required switches are displayed.
 * %1 - Switch Name
 * @default \C[16]%1\C[0]
 *
 * @param Costs
 * @parent Vocabulary
 *
 * @param SeparationFmt:str
 * @text Separation Format
 * @parent Costs
 * @desc This determines how the costs are separated from one another.
 * %1 - Previous Cost, %2 - Second Cost
 * @default %1  %2
 *
 * @param ItemFmt:str
 * @text Item Format
 * @parent Costs
 * @desc Determine how items are displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Item Name
 * @default ×%1%2
 *
 * @param WeaponFmt:str
 * @text Weapon Format
 * @parent Costs
 * @desc Determine how weapons are displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Weapon Name
 * @default ×%1%2
 *
 * @param ArmorFmt:str
 * @text Armor Format
 * @parent Costs
 * @desc Determine how armors are displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Armor Name
 * @default ×%1%2
 *
 * @param GoldFmt:str
 * @text Gold Format
 * @parent Costs
 * @desc Determine how gold is displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Currency Vocabulary
 * @default ×%1%2
 *
 */
/* ----------------------------------------------------------------------------
 * MenuAccess Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuAccess:
 *
 * @param Name:str
 * @text Command Name
 * @desc Name of the 'Skill Learn' option in the Menu.
 * @default Learn
 *
 * @param Icon:num
 * @text Icon
 * @desc What is the icon you want to use to represent Skill Learn?
 * @default 87
 *
 * @param ShowMenu:eval
 * @text Show in Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Skill Learn' option to the Menu by default?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Animation Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Animation:
 *
 * @param General
 *
 * @param ShowAnimations:eval
 * @text Show Animations?
 * @parent General
 * @type boolean
 * @on Show
 * @off Skip
 * @desc Show animations when learning a skill?
 * @default true
 *
 * @param ShowWindows:eval
 * @text Show Windows?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show windows during a skill learn animation?
 * @default false
 *
 * @param Animations:arraynum
 * @text Default Animations
 * @parent General
 * @type animation[]
 * @desc Default animation(s) do you want to play when learning.
 * @default ["40","48"]
 *
 * @param Sprite
 * @text Skill Sprite
 *
 * @param Scale:num
 * @text Scale
 * @parent Sprite
 * @desc How big do you want the skill sprite to be on screen?
 * @default 8.0
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent Sprite
 * @type number
 * @min 1
 * @desc How fast do you want the icon to fade in?
 * @default 4
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
 * @default Skill3
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
 * @param DetailWindow
 * @text Detail Window
 * 
 * @param Requirements
 * @parent DetailWindow
 *
 * @param RequirementTitle:str
 * @text Requirement Title
 * @parent Requirements
 * @desc Text used when drawing the learning requirements.
 * %1 - Skill Icon, %2 - Skill Name
 * @default \C[16]%1%2 Requirements\C[0]
 *
 * @param ReqMetFmt:str
 * @text Requirement Met
 * @parent Requirements
 * @desc This how met requirements look.
 * %1 - Requirement Text
 * @default \C[24]✔ %1\C[0]
 *
 * @param ReqNotMetFmt:str
 * @text Requirement Not Met
 * @parent Requirements
 * @desc This how met requirements look.
 * %1 - Requirement Text
 * @default \C[0]✘ %1\C[0]
 *
 * @param ReqLevelFmt:str
 * @text Requirement Level
 * @parent Requirements
 * @desc This how level is displayed.
 * %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * @default \I[87]%2 %1 Reached
 *
 * @param ReqSkillFmt:str
 * @text Requirement Skill
 * @parent Requirements
 * @desc This how required skills are displayed.
 * %1 - Icon, %2 - Skill Name
 * @default %1%2 Learned
 *
 * @param ReqSwitchFmt:str
 * @text Requirement Switch
 * @parent Requirements
 * @desc This how required switches are displayed.
 * %1 - Switch Name
 * @default \I[160]%1
 * 
 * @param Costs
 * @parent DetailWindow
 *
 * @param LearningTitle:str
 * @text Cost Title
 * @parent Costs
 * @desc Text used when drawing the learning costs.
 * %1 - Skill Icon, %2 - Skill Name
 * @default \C[16]Learning\C[0] %1%2
 *
 * @param IngredientName:str
 * @text Cost Name
 * @parent Costs
 * @desc Text used to label the resource being consumed.
 * @default \C[16]Resource\C[0]
 *
 * @param IngredientCost:str
 * @text Cost Quantity
 * @parent Costs
 * @desc Text used to label the cost of the resource.
 * @default \C[16]Cost\C[0]
 *
 * @param IngredientOwned:str
 * @text Cost of Owned
 * @parent Costs
 * @desc Text used to label the amount of the resource in possession.
 * @default \C[16]Owned\C[0]
 *
 * @param DetailWindow_BgType:num
 * @text Background Type
 * @parent DetailWindow
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
 * @param DetailWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent DetailWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const skillWindowRect = this.itemWindowRect();\nconst wx = skillWindowRect.x;\nconst wy = skillWindowRect.y;\nconst ww = skillWindowRect.width;\nconst wh = skillWindowRect.height - this.calcWindowHeight(2, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ConfirmWindow
 * @text Confirm Window
 *
 * @param ConfirmCmd:str
 * @text Confirm Text
 * @parent ConfirmWindow
 * @desc Text used for the Confirm command.
 * Text codes can be used.
 * @default \I[164]Learn
 *
 * @param CancelCmd:str
 * @text Cancel Text
 * @parent ConfirmWindow
 * @desc Text used for the Cancel command.
 * Text codes can be used.
 * @default \I[168]Cancel
 *
 * @param ConfirmWindow_BgType:num
 * @text Background Type
 * @parent ConfirmWindow
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
 * @param ConfirmWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ConfirmWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const skillWindowRect = this.itemWindowRect();\nconst ww = skillWindowRect.width;\nconst wh = this.calcWindowHeight(2, false);\nconst wx = skillWindowRect.x;\nconst wy = skillWindowRect.y + skillWindowRect.height - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Ability Points Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AbilityPoints:
 *
 * @param Mechanics
 *
 * @param SharedResource:eval
 * @text Shared Ability Points
 * @parent Mechanics
 * @type boolean
 * @on Shared Across Classes
 * @off Classes Separate
 * @desc Do you want Ability Points to be shared across all classes?
 * Or do you want all classes to have their own?
 * @default true
 *
 * @param DefaultCost:num
 * @text Default Cost
 * @parent Mechanics
 * @type number
 * @desc What's the default AP cost of a skill when trying to learn
 * it through the Skill Learn System?
 * @default 0
 *
 * @param MaxResource:num
 * @text Maximum
 * @parent Mechanics
 * @type number
 * @desc What's the maximum amount of Ability Points an actor can have?
 * Use 0 for unlimited Ability Points.
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
 * @desc Do you wish to show Ability Points in menus that allow them?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @parent Visual
 * @desc What is the icon you want to use to represent Ability Points?
 * @default 78
 *
 * @param Vocabulary
 *
 * @param FullText:str
 * @text Full Text
 * @parent Vocabulary
 * @desc The full text of how Ability Points appears in-game.
 * @default Ability Points
 *
 * @param AbbrText:str
 * @text Abbreviated Text
 * @parent Vocabulary
 * @desc The abbreviation of how Ability Points appears in-game.
 * @default AP
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
 * @desc How many Ability Points should an actor gain per action?
 * You may use code.
 * @default 10 + Math.randomInt(5)
 *
 * @param PerLevelUp:str
 * @text Per Level Up
 * @parent Gain
 * @desc How many Ability Points should an actor gain per level up?
 * You may use code.
 * @default 0
 *
 * @param PerEnemy:str
 * @text Per Enemy Defeated
 * @parent Gain
 * @desc How many Ability Points should an actor gain per enemy?
 * You may use code.
 * @default 50 + Math.randomInt(10)
 *
 * @param AliveActors:eval
 * @text Alive Actors?
 * @parent PerEnemy:str
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Do actors have to be alive to receive Ability Points from
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
 * @desc Show how much AP an actor has earned in battle during the
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
 * @desc Requires VisuMZ_3_VictoryAftermath. Show Ability Points as
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
 * Skill Points Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillPoints:
 *
 * @param Mechanics
 *
 * @param SharedResource:eval
 * @text Shared Skill Points
 * @parent Mechanics
 * @type boolean
 * @on Shared Across Classes
 * @off Classes Separate
 * @desc Do you want Skill Points to be shared across all classes?
 * Or do you want all classes to have their own?
 * @default false
 *
 * @param DefaultCost:num
 * @text Default Cost
 * @parent Mechanics
 * @type number
 * @desc What's the default SP cost of a skill when trying to learn
 * it through the Skill Learn System?
 * @default 1
 *
 * @param MaxResource:num
 * @text Maximum
 * @parent Mechanics
 * @type number
 * @desc What's the maximum amount of Skill Points an actor can have?
 * Use 0 for unlimited Skill Points.
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
 * @desc Do you wish to show Skill Points in menus that allow them?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @parent Visual
 * @desc What is the icon you want to use to represent Skill Points?
 * @default 79
 *
 * @param Vocabulary
 *
 * @param FullText:str
 * @text Full Text
 * @parent Vocabulary
 * @desc The full text of how Skill Points appears in-game.
 * @default Skill Points
 *
 * @param AbbrText:str
 * @text Abbreviated Text
 * @parent Vocabulary
 * @desc The abbreviation of how Skill Points appears in-game.
 * @default SP
 *
 * @param TextFmt:str
 * @text Menu Text Format
 * @parent Vocabulary
 * @desc What is the text format for it to be displayed in windows.
 * %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 * @default %1 \c[4]%2\c[0]%3
 *
 * @param Gain
 *
 * @param PerAction:str
 * @text Per Action Hit
 * @parent Gain
 * @desc How many Skill Points should an actor gain per action?
 * You may use code.
 * @default 0
 *
 * @param PerLevelUp:str
 * @text Per Level Up
 * @parent Gain
 * @desc How many Skill Points should an actor gain per level up?
 * You may use code.
 * @default 100
 *
 * @param PerEnemy:str
 * @text Per Enemy Defeated
 * @parent Gain
 * @desc How many Skill Points should an actor gain per enemy?
 * You may use code.
 * @default 0
 *
 * @param AliveActors:eval
 * @text Alive Actors?
 * @parent PerEnemy:str
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Do actors have to be alive to receive Skill Points from
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
 * @desc Show how much SP an actor has earned in battle during the
 * victory phase?
 * @default false
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
 * @desc Requires VisuMZ_3_VictoryAftermath. Show Skill Points as
 * the main acquired resource in the actor windows?
 * @default false
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

const _0x58a4c3=_0x1b31;(function(_0x1c7968,_0x3c8552){const _0x4045c1=_0x1b31,_0x5f3710=_0x1c7968();while(!![]){try{const _0x12994e=parseInt(_0x4045c1(0x1f6))/0x1+-parseInt(_0x4045c1(0x1f7))/0x2*(parseInt(_0x4045c1(0x2e5))/0x3)+parseInt(_0x4045c1(0xfb))/0x4*(-parseInt(_0x4045c1(0x216))/0x5)+-parseInt(_0x4045c1(0x1f3))/0x6+-parseInt(_0x4045c1(0x26c))/0x7*(parseInt(_0x4045c1(0x1fe))/0x8)+-parseInt(_0x4045c1(0xc9))/0x9*(parseInt(_0x4045c1(0x227))/0xa)+parseInt(_0x4045c1(0x2ba))/0xb*(parseInt(_0x4045c1(0xd1))/0xc);if(_0x12994e===_0x3c8552)break;else _0x5f3710['push'](_0x5f3710['shift']());}catch(_0x5d2b51){_0x5f3710['push'](_0x5f3710['shift']());}}}(_0xe498,0x65dcf));var label=_0x58a4c3(0x1df),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x58a4c3(0x346)](function(_0x361921){const _0x3eb019=_0x58a4c3;return _0x361921[_0x3eb019(0x215)]&&_0x361921['description'][_0x3eb019(0x18e)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x58a4c3(0x1c0)]||{},VisuMZ['ConvertParams']=function(_0xa839a,_0x5db62f){const _0x3d3bfb=_0x58a4c3;for(const _0x37eea2 in _0x5db62f){if(_0x37eea2[_0x3d3bfb(0x1e8)](/(.*):(.*)/i)){if(_0x3d3bfb(0x35b)===_0x3d3bfb(0x1be))return _0x1b72e3=_0x57cccc[_0x3d3bfb(0x32c)],_0x29e815[_0x3d3bfb(0x25e)](_0x11a6a2,_0xcc1df8[_0x3d3bfb(0x106)],'\x5cI[%1]'[_0x3d3bfb(0x25e)](_0x224a6[_0x3d3bfb(0x1ce)]),_0x52a9b0[_0x3d3bfb(0x25a)]);else{const _0x1a9be4=String(RegExp['$1']),_0x2667ac=String(RegExp['$2'])[_0x3d3bfb(0x235)]()[_0x3d3bfb(0x2c3)]();let _0x961f3d,_0x8c1b46,_0x1806fb;switch(_0x2667ac){case _0x3d3bfb(0x33f):_0x961f3d=_0x5db62f[_0x37eea2]!==''?Number(_0x5db62f[_0x37eea2]):0x0;break;case _0x3d3bfb(0xb6):_0x8c1b46=_0x5db62f[_0x37eea2]!==''?JSON[_0x3d3bfb(0x165)](_0x5db62f[_0x37eea2]):[],_0x961f3d=_0x8c1b46[_0x3d3bfb(0x15f)](_0xe3107a=>Number(_0xe3107a));break;case _0x3d3bfb(0x2e2):_0x961f3d=_0x5db62f[_0x37eea2]!==''?eval(_0x5db62f[_0x37eea2]):null;break;case _0x3d3bfb(0x307):_0x8c1b46=_0x5db62f[_0x37eea2]!==''?JSON[_0x3d3bfb(0x165)](_0x5db62f[_0x37eea2]):[],_0x961f3d=_0x8c1b46[_0x3d3bfb(0x15f)](_0x5ec2f1=>eval(_0x5ec2f1));break;case _0x3d3bfb(0xa9):_0x961f3d=_0x5db62f[_0x37eea2]!==''?JSON[_0x3d3bfb(0x165)](_0x5db62f[_0x37eea2]):'';break;case _0x3d3bfb(0xfd):_0x8c1b46=_0x5db62f[_0x37eea2]!==''?JSON[_0x3d3bfb(0x165)](_0x5db62f[_0x37eea2]):[],_0x961f3d=_0x8c1b46[_0x3d3bfb(0x15f)](_0x3d3171=>JSON[_0x3d3bfb(0x165)](_0x3d3171));break;case _0x3d3bfb(0x159):_0x961f3d=_0x5db62f[_0x37eea2]!==''?new Function(JSON[_0x3d3bfb(0x165)](_0x5db62f[_0x37eea2])):new Function(_0x3d3bfb(0x29b));break;case _0x3d3bfb(0x11e):_0x8c1b46=_0x5db62f[_0x37eea2]!==''?JSON[_0x3d3bfb(0x165)](_0x5db62f[_0x37eea2]):[],_0x961f3d=_0x8c1b46[_0x3d3bfb(0x15f)](_0x1a494c=>new Function(JSON[_0x3d3bfb(0x165)](_0x1a494c)));break;case _0x3d3bfb(0x195):_0x961f3d=_0x5db62f[_0x37eea2]!==''?String(_0x5db62f[_0x37eea2]):'';break;case'ARRAYSTR':_0x8c1b46=_0x5db62f[_0x37eea2]!==''?JSON[_0x3d3bfb(0x165)](_0x5db62f[_0x37eea2]):[],_0x961f3d=_0x8c1b46['map'](_0x2c728c=>String(_0x2c728c));break;case'STRUCT':_0x1806fb=_0x5db62f[_0x37eea2]!==''?JSON['parse'](_0x5db62f[_0x37eea2]):{},_0x961f3d=VisuMZ[_0x3d3bfb(0x1eb)]({},_0x1806fb);break;case _0x3d3bfb(0x20d):_0x8c1b46=_0x5db62f[_0x37eea2]!==''?JSON[_0x3d3bfb(0x165)](_0x5db62f[_0x37eea2]):[],_0x961f3d=_0x8c1b46[_0x3d3bfb(0x15f)](_0x5c374a=>VisuMZ[_0x3d3bfb(0x1eb)]({},JSON[_0x3d3bfb(0x165)](_0x5c374a)));break;default:continue;}_0xa839a[_0x1a9be4]=_0x961f3d;}}}return _0xa839a;},(_0x1e10c0=>{const _0x2b8f47=_0x58a4c3,_0x2c76d6=_0x1e10c0['name'];for(const _0x4c7477 of dependencies){if(!Imported[_0x4c7477]){if(_0x2b8f47(0x1fd)!==_0x2b8f47(0x1fd)){if(_0x1bfa39['isReleased']())return!![];if(_0x50b92a[_0x2b8f47(0x1e9)]('ok'))return!![];if(_0x50fef4[_0x2b8f47(0x1e9)](_0x2b8f47(0xa3)))return!![];if(this['_skillLearnIconSprite'][_0x2b8f47(0x2ed)]<0xff)return![];if(this[_0x2b8f47(0x122)])return![];return this[_0x2b8f47(0x9b)]--<=0x0;}else{alert(_0x2b8f47(0xd5)[_0x2b8f47(0x25e)](_0x2c76d6,_0x4c7477)),SceneManager[_0x2b8f47(0x103)]();break;}}}const _0xf3c4df=_0x1e10c0[_0x2b8f47(0x23a)];if(_0xf3c4df[_0x2b8f47(0x1e8)](/\[Version[ ](.*?)\]/i)){if('KPGIX'!==_0x2b8f47(0x17d)){const _0x5286d8=Number(RegExp['$1']);_0x5286d8!==VisuMZ[label][_0x2b8f47(0xb4)]&&(alert(_0x2b8f47(0xb0)[_0x2b8f47(0x25e)](_0x2c76d6,_0x5286d8)),SceneManager[_0x2b8f47(0x103)]());}else _0x23fd82['SkillLearnSystem']['Window_SkillType_makeCommandList'][_0x2b8f47(0x1ca)](this),this[_0x2b8f47(0x2c7)]();}if(_0xf3c4df[_0x2b8f47(0x1e8)](/\[Tier[ ](\d+)\]/i)){const _0x67bc59=Number(RegExp['$1']);_0x67bc59<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x2c76d6,_0x67bc59,tier)),SceneManager[_0x2b8f47(0x103)]()):_0x2b8f47(0x14f)===_0x2b8f47(0x14f)?tier=Math['max'](_0x67bc59,tier):_0x35307e=0x0;}VisuMZ[_0x2b8f47(0x1eb)](VisuMZ[label][_0x2b8f47(0x1c0)],_0x1e10c0['parameters']);})(pluginData),PluginManager['registerCommand'](pluginData[_0x58a4c3(0x196)],_0x58a4c3(0x277),_0x6e9c30=>{const _0x3814cd=_0x58a4c3;VisuMZ['ConvertParams'](_0x6e9c30,_0x6e9c30);const _0x45d829=_0x6e9c30[_0x3814cd(0xc0)][_0x3814cd(0x15f)](_0x592e93=>$gameActors[_0x3814cd(0xda)](_0x592e93)),_0x41a758=_0x6e9c30[_0x3814cd(0x28d)],_0x9f4704=_0x6e9c30[_0x3814cd(0x1b7)];for(const _0x19e4d2 of _0x45d829){if(_0x3814cd(0x2f5)===_0x3814cd(0x130))_0x5c45dc=_0x64520b(_0x3eebbb);else{if(!_0x19e4d2)continue;for(const _0x374982 of _0x41a758){_0x19e4d2[_0x3814cd(0x109)](_0x9f4704,_0x374982);}}}}),PluginManager[_0x58a4c3(0xd7)](pluginData['name'],_0x58a4c3(0xcb),_0x541999=>{const _0x23bbf0=_0x58a4c3;VisuMZ[_0x23bbf0(0x1eb)](_0x541999,_0x541999);const _0x41a4fc=_0x541999[_0x23bbf0(0xc0)][_0x23bbf0(0x15f)](_0x4767e7=>$gameActors['actor'](_0x4767e7)),_0x22514b=_0x541999[_0x23bbf0(0x28d)],_0x47839e=_0x541999[_0x23bbf0(0x1b7)];for(const _0x377385 of _0x41a4fc){if(!_0x377385)continue;for(const _0x34d2bb of _0x22514b){if(_0x23bbf0(0x2c2)===_0x23bbf0(0x2c2))_0x377385[_0x23bbf0(0x147)](_0x47839e,_0x34d2bb);else{const _0x398929=this[_0x23bbf0(0x197)](_0x24ba2c)[_0x23bbf0(0x13a)],_0x275500=_0x1f2a9e+_0x2193ef[_0x23bbf0(0x2a4)](_0x2f420a-_0x398929);this[_0x23bbf0(0xd6)](_0x16c993,_0x275500,_0x134d19);}}}}),PluginManager['registerCommand'](pluginData[_0x58a4c3(0x196)],_0x58a4c3(0x1aa),_0x2d2570=>{const _0x1581c5=_0x58a4c3;VisuMZ[_0x1581c5(0x1eb)](_0x2d2570,_0x2d2570);const _0x395066=_0x2d2570[_0x1581c5(0xc0)][_0x1581c5(0x15f)](_0x33ebd0=>$gameActors['actor'](_0x33ebd0)),_0x125271=_0x2d2570['Classes'],_0x52d368=_0x2d2570[_0x1581c5(0x1b7)];for(const _0x157f2c of _0x395066){if(!_0x157f2c)continue;for(const _0xd150ee of _0x125271){_0x157f2c[_0x1581c5(0x183)](_0x52d368,_0xd150ee);}}}),PluginManager[_0x58a4c3(0xd7)](pluginData['name'],_0x58a4c3(0x27a),_0x4d7079=>{const _0x29c421=_0x58a4c3;VisuMZ[_0x29c421(0x1eb)](_0x4d7079,_0x4d7079);const _0x475cc3=_0x4d7079[_0x29c421(0xc0)][_0x29c421(0x15f)](_0x820985=>$gameActors[_0x29c421(0xda)](_0x820985)),_0x4a66a1=_0x4d7079['Classes'],_0x3d93bc=_0x4d7079[_0x29c421(0x1b7)];for(const _0x5b1fd0 of _0x475cc3){if(!_0x5b1fd0)continue;for(const _0x1494dd of _0x4a66a1){_0x5b1fd0[_0x29c421(0x239)](_0x3d93bc,_0x1494dd);}}}),PluginManager[_0x58a4c3(0xd7)](pluginData['name'],_0x58a4c3(0x1d0),_0x2927e0=>{const _0xd6cfe1=_0x58a4c3;VisuMZ['ConvertParams'](_0x2927e0,_0x2927e0);const _0x1e32d7=_0x2927e0[_0xd6cfe1(0xc0)][_0xd6cfe1(0x15f)](_0x2b1934=>$gameActors[_0xd6cfe1(0xda)](_0x2b1934)),_0xbe88d9=_0x2927e0['Classes'],_0x53ede5=_0x2927e0[_0xd6cfe1(0x1b7)];for(const _0x44496a of _0x1e32d7){if(!_0x44496a)continue;for(const _0x46c912 of _0xbe88d9){if('wNgMY'!==_0xd6cfe1(0xdc)){const _0x2d579e=_0x23f544(_0x3c0d6a['$1']),_0x532ff4=_0xd6cfe1(0x18f)[_0xd6cfe1(0x25e)](_0x2d579e),_0xe2f5db=_0x26b345[_0xd6cfe1(0x1df)][_0xd6cfe1(0x1a3)](_0x19ad05,_0x50089a);_0x1f709d[_0xd6cfe1(0x1df)]['JS'][_0xe2f5db]=new _0x238f58(_0x532ff4);}else _0x44496a[_0xd6cfe1(0x338)](_0x53ede5,_0x46c912);}}}),PluginManager[_0x58a4c3(0xd7)](pluginData[_0x58a4c3(0x196)],'SkillPointsAdd',_0xcd74a5=>{const _0x4e4e72=_0x58a4c3;VisuMZ[_0x4e4e72(0x1eb)](_0xcd74a5,_0xcd74a5);const _0x1fcb40=_0xcd74a5[_0x4e4e72(0xc0)][_0x4e4e72(0x15f)](_0x405c47=>$gameActors[_0x4e4e72(0xda)](_0x405c47)),_0x53952e=_0xcd74a5[_0x4e4e72(0x28d)],_0x2b5473=_0xcd74a5[_0x4e4e72(0x1b7)];for(const _0x181be9 of _0x1fcb40){if(!_0x181be9)continue;for(const _0x29c451 of _0x53952e){if(_0x4e4e72(0x351)===_0x4e4e72(0x256)){this[_0x4e4e72(0x206)]===_0x5a0f52&&this[_0x4e4e72(0x240)]();const _0xffd15a=_0x3ec71e[_0x4e4e72(0x1df)][_0x4e4e72(0x1c0)][_0x4e4e72(0x129)];_0xffd15a[_0x4e4e72(0x95)]?_0x9a7f2e=0x0:_0xba32ee=_0x273880||this[_0x4e4e72(0x15c)]()['id'];this[_0x4e4e72(0x206)][_0x16ff08]=this['_skillPoints'][_0x4c0cfb]||0x0,this[_0x4e4e72(0x206)][_0x391777]=_0x53fcf7[_0x4e4e72(0x2a4)](_0x157304||0x0);const _0x21098c=_0xffd15a['MaxResource']||_0x8c1cc7[_0x4e4e72(0x229)];this[_0x4e4e72(0x206)][_0x2702fa]=this['_skillPoints'][_0x2ccac9]['clamp'](0x0,_0x21098c);}else _0x181be9['addSkillPoints'](_0x2b5473,_0x29c451);}}}),PluginManager[_0x58a4c3(0xd7)](pluginData[_0x58a4c3(0x196)],_0x58a4c3(0x34a),_0x14ef1c=>{const _0x41480f=_0x58a4c3;VisuMZ[_0x41480f(0x1eb)](_0x14ef1c,_0x14ef1c);const _0x14d428=_0x14ef1c[_0x41480f(0xc0)][_0x41480f(0x15f)](_0xd3c21d=>$gameActors['actor'](_0xd3c21d)),_0x25a738=_0x14ef1c[_0x41480f(0x28d)],_0x2b084b=_0x14ef1c[_0x41480f(0x1b7)];for(const _0x2d3e66 of _0x14d428){if(!_0x2d3e66)continue;for(const _0x1a283f of _0x25a738){_0x2d3e66[_0x41480f(0xd2)](_0x2b084b,_0x1a283f);}}}),PluginManager['registerCommand'](pluginData[_0x58a4c3(0x196)],_0x58a4c3(0x237),_0x3db83f=>{const _0x16eeba=_0x58a4c3;VisuMZ[_0x16eeba(0x1eb)](_0x3db83f,_0x3db83f);const _0x28d868=_0x3db83f[_0x16eeba(0xc0)][_0x16eeba(0x15f)](_0x4e8b1a=>$gameActors['actor'](_0x4e8b1a)),_0x16d34d=_0x3db83f[_0x16eeba(0x28d)],_0x2042a6=_0x3db83f[_0x16eeba(0x1b7)];for(const _0x1442e6 of _0x28d868){if(!_0x1442e6)continue;for(const _0x106d14 of _0x16d34d){_0x1442e6['setSkillPoints'](_0x2042a6,_0x106d14);}}}),PluginManager[_0x58a4c3(0xd7)](pluginData[_0x58a4c3(0x196)],'SystemShowSkillLearnSystemMenu',_0x22f4c1=>{const _0x53d2a7=_0x58a4c3;VisuMZ[_0x53d2a7(0x1eb)](_0x22f4c1,_0x22f4c1),$gameSystem['setSkillLearnSystemMenuAccess'](_0x22f4c1[_0x53d2a7(0x32b)]);}),VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1d7)]=Scene_Boot[_0x58a4c3(0x33d)][_0x58a4c3(0x1b0)],Scene_Boot[_0x58a4c3(0x33d)]['onDatabaseLoaded']=function(){const _0x14369d=_0x58a4c3;VisuMZ[_0x14369d(0x1df)][_0x14369d(0x1d7)][_0x14369d(0x1ca)](this),this[_0x14369d(0x35d)]();},Scene_Boot['prototype'][_0x58a4c3(0x35d)]=function(){const _0x25be1b=_0x58a4c3;if(VisuMZ[_0x25be1b(0x11a)])return;this[_0x25be1b(0x263)]();},VisuMZ['SkillLearnSystem'][_0x58a4c3(0x29d)]={'StartingAbilityPoints':/<STARTING (?:ABILITY POINTS|AP):[ ](.*)>/i,'StartClassAbilityPoints':/<CLASS (.*) STARTING (?:ABILITY POINTS|AP):[ ](.*)>/gi,'UserGainAbilityPoints':/<(?:ABILITY POINTS|AP|USER ABILITY POINTS|USER AP) GAIN:[ ](.*)>/i,'TargetGainAbilityPoints':/<TARGET (?:ABILITY POINTS|AP) GAIN:[ ](.*)>/i,'EnemyAbilityPoints':/<(?:ABILITY POINTS|AP):[ ](.*)>/i,'AbilityPointsRate':/<(?:ABILITY POINTS|AP) RATE:[ ](\d+)([%％])>/i,'StartingSkillPoints':/<STARTING (?:SKILL POINTS|SP):[ ](.*)>/i,'StartClassSkillPoints':/<CLASS (.*) STARTING (?:SKILL POINTS|SP):[ ](.*)>/gi,'UserGainSkillPoints':/<(?:SKILL POINTS|SP|USER SKILL POINTS|USER SP) GAIN:[ ](.*)>/i,'TargetGainSkillPoints':/<TARGET (?:SKILL POINTS|SP) GAIN:[ ](.*)>/i,'EnemySkillPoints':/<(?:SKILL POINTS|SP):[ ](.*)>/i,'SkillPointsRate':/<(?:SKILL POINTS|SP) RATE:[ ](\d+)([%％])>/i,'LearnSkillA':/<LEARN SKILL(?:|S):[ ](.*)>/gi,'LearnSkillB':/<LEARN SKILL(?:|S)>\s*([\s\S]*)\s*<\/LEARN SKILL(?:|S)>/i,'LearnSkillPassiveA':/<LEARN (?:SKILL |)PASSIVE(?:|S):[ ](.*)>/gi,'LearnSkillPassiveB':/<LEARN (?:SKILL |)PASSIVE(?:|S)>\s*([\s\S]*)\s*<\/LEARN (?:SKILL |)PASSIVE(?:|S)>/i,'LearnApCost':/<LEARN (?:ABILITY POINTS|AP) COST:[ ](\d+)>/i,'LearnCpCost':/<LEARN (?:CLASS POINTS|CP) COST:[ ](\d+)>/i,'LearnJpCost':/<LEARN (?:JOB POINTS|JP) COST:[ ](\d+)>/i,'LearnSpCost':/<LEARN (?:SKILL POINTS|SP) COST:[ ](\d+)>/i,'LearnItemCost':/<LEARN ITEM (.*) COST:[ ](\d+)>/gi,'LearnWeaponCost':/<LEARN WEAPON (.*) COST:[ ](\d+)>/gi,'LearnArmorCost':/<LEARN ARMOR (.*) COST:[ ](\d+)>/gi,'LearnGoldCost':/<LEARN GOLD COST:[ ](\d+)>/i,'LearnCostBatch':/<LEARN SKILL (?:COST|COSTS)>\s*([\s\S]*)\s*<\/LEARN SKILL (?:COST|COSTS)>/i,'LearnShowLevel':/<LEARN SHOW LEVEL:[ ](\d+)>/i,'LearnShowSkillsAll':/<LEARN SHOW (?:SKILL|SKILLS|ALL SKILL|ALL SKILLS):[ ](.*)>/i,'LearnShowSkillsAny':/<LEARN SHOW ANY (?:SKILL|SKILLS):[ ](.*)>/i,'LearnShowSwitchesAll':/<LEARN SHOW (?:SWITCH|SWITCHES|ALL SWITCH|ALL SWITCHES):[ ](.*)>/i,'LearnShowSwitchesAny':/<LEARN SHOW ANY (?:SWITCH|SWITCHES):[ ](.*)>/i,'LearnReqLevel':/<LEARN REQUIRE LEVEL:[ ](\d+)>/i,'LearnReqSkillsAll':/<LEARN REQUIRE (?:SKILL|SKILLS|ALL SKILL|ALL SKILLS):[ ](.*)>/i,'LearnReqSkillsAny':/<LEARN REQUIRE ANY (?:SKILL|SKILLS):[ ](.*)>/i,'LearnReqSwitchesAll':/<LEARN REQUIRE (?:SWITCH|SWITCHES|ALL SWITCH|ALL SWITCHES):[ ](.*)>/i,'LearnReqSwitchesAny':/<LEARN REQUIRE ANY (?:SWITCH|SWITCHES):[ ](.*)>/i,'animationIDs':/<LEARN SKILL (?:ANIMATION|ANIMATIONS|ANI):[ ](.*)>/i,'opacitySpeed':/<LEARN SKILL FADE SPEED:[ ](\d+)>/i,'learnPicture':/<LEARN SKILL (?:PICTURE|FILENAME):[ ](.*)>/i,'bigPicture':/<PICTURE:[ ](.*)>/i,'jsLearnApCost':/<JS LEARN (?:ABILITY POINTS|AP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:ABILITY POINTS|AP) COST>/i,'jsLearnCpCost':/<JS LEARN (?:CLASS POINTS|CP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:CLASS POINTS|CP) COST>/i,'jsLearnJpCost':/<JS LEARN (?:JOB POINTS|JP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:JOB POINTS|JP) COST>/i,'jsLearnSpCost':/<JS LEARN (?:SKILL POINTS|SP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:SKILL POINTS|SP) COST>/i,'jsLearnShow':/<JS LEARN (?:SHOW|VISIBLE)>\s*([\s\S]*)\s*<\/JS LEARN (?:SHOW|VISIBLE)>/i,'jsLearnShowListTxt':/<JS LEARN (?:SHOW|VISIBLE) LIST TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:SHOW|VISIBLE) LIST TEXT>/i,'jsLearnShowDetailTxt':/<JS LEARN (?:SHOW|VISIBLE) DETAIL TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:SHOW|VISIBLE) DETAIL TEXT>/i,'jsLearnReq':/<JS LEARN (?:REQUIREMENT|REQUIREMENTS)>\s*([\s\S]*)\s*<\/JS LEARN (?:REQUIREMENT|REQUIREMENTS)>/i,'jsLearnReqListTxt':/<JS LEARN (?:REQUIREMENT|REQUIREMENTS) LIST TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:REQUIREMENT|REQUIREMENTS) LIST TEXT>/i,'jsLearnReqDetailTxt':/<JS LEARN (?:REQUIREMENT|REQUIREMENTS) DETAIL TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:REQUIREMENT|REQUIREMENTS) DETAIL TEXT>/i,'jsOnLearn':/<JS ON LEARN SKILL>\s*([\s\S]*)\s*<\/JS ON LEARN SKILL>/i},VisuMZ[_0x58a4c3(0x1df)]['JS']={},Scene_Boot[_0x58a4c3(0x33d)][_0x58a4c3(0x263)]=function(){const _0xe942b6=_0x58a4c3,_0x1c6d8a=$dataActors['concat']($dataSkills);for(const _0x1dab98 of _0x1c6d8a){if(!_0x1dab98)continue;VisuMZ[_0xe942b6(0x1df)][_0xe942b6(0x213)](_0x1dab98);}},VisuMZ['SkillLearnSystem']['ParseSkillNotetags']=VisuMZ[_0x58a4c3(0x93)],VisuMZ[_0x58a4c3(0x93)]=function(_0x27edd4){const _0x654100=_0x58a4c3;VisuMZ['SkillLearnSystem'][_0x654100(0x93)][_0x654100(0x1ca)](this,_0x27edd4),VisuMZ[_0x654100(0x1df)]['Parse_Notetags_CreateJS'](_0x27edd4);},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x213)]=function(_0x1c2dad){const _0x530910=_0x58a4c3,_0x4f6f6b=VisuMZ[_0x530910(0x1df)][_0x530910(0x29d)];VisuMZ[_0x530910(0x1df)][_0x530910(0xc6)](_0x1c2dad,'jsLearnApCost',_0x4f6f6b[_0x530910(0x2ee)]),VisuMZ['SkillLearnSystem'][_0x530910(0xc6)](_0x1c2dad,'jsLearnCpCost',_0x4f6f6b[_0x530910(0x2e8)]),VisuMZ['SkillLearnSystem']['createCostJS'](_0x1c2dad,_0x530910(0x14b),_0x4f6f6b[_0x530910(0x14b)]),VisuMZ[_0x530910(0x1df)][_0x530910(0xc6)](_0x1c2dad,'jsLearnSpCost',_0x4f6f6b[_0x530910(0x2d4)]),VisuMZ[_0x530910(0x1df)][_0x530910(0x2fc)](_0x1c2dad,_0x530910(0x30a),_0x4f6f6b['jsLearnShow']),VisuMZ[_0x530910(0x1df)]['createConditionJS'](_0x1c2dad,_0x530910(0x2d6),_0x4f6f6b[_0x530910(0x2d6)]),VisuMZ[_0x530910(0x1df)][_0x530910(0x326)](_0x1c2dad,_0x530910(0x301),_0x4f6f6b[_0x530910(0x301)]),VisuMZ['SkillLearnSystem']['createTextJS'](_0x1c2dad,_0x530910(0x2b6),_0x4f6f6b[_0x530910(0x2b6)]),VisuMZ[_0x530910(0x1df)][_0x530910(0x326)](_0x1c2dad,_0x530910(0x2d0),_0x4f6f6b[_0x530910(0x2d0)]),VisuMZ[_0x530910(0x1df)]['createTextJS'](_0x1c2dad,_0x530910(0x9c),_0x4f6f6b['jsLearnReqDetailTxt']),VisuMZ['SkillLearnSystem']['createActionJS'](_0x1c2dad,'jsOnLearn',_0x4f6f6b[_0x530910(0x1bc)]);},VisuMZ['SkillLearnSystem']['createCostJS']=function(_0x40aa94,_0x462058,_0xfba5cd){const _0x3b268b=_0x58a4c3,_0x43991e=_0x40aa94[_0x3b268b(0x144)];if(_0x43991e[_0x3b268b(0x1e8)](_0xfba5cd)){const _0xa1ab52=String(RegExp['$1']),_0x3edf81=_0x3b268b(0x279)['format'](_0xa1ab52),_0x379138=VisuMZ[_0x3b268b(0x1df)][_0x3b268b(0x1a3)](_0x40aa94,_0x462058);VisuMZ[_0x3b268b(0x1df)]['JS'][_0x379138]=new Function(_0x3edf81);}},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x2fc)]=function(_0x3f4e52,_0x4cc4e2,_0x3d648f){const _0x38baae=_0x58a4c3,_0x391e48=_0x3f4e52[_0x38baae(0x144)];if(_0x391e48[_0x38baae(0x1e8)](_0x3d648f)){const _0x92ec28=String(RegExp['$1']),_0x3c54ff='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Visible\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x38baae(0x25e)](_0x92ec28),_0x5c8d29=VisuMZ['SkillLearnSystem'][_0x38baae(0x1a3)](_0x3f4e52,_0x4cc4e2);VisuMZ['SkillLearnSystem']['JS'][_0x5c8d29]=new Function(_0x3c54ff);}},VisuMZ['SkillLearnSystem'][_0x58a4c3(0x1fc)]=function(_0x2f8fec,_0x249e81,_0x41ac22){const _0xac78e1=_0x58a4c3,_0x2c1da5=_0x2f8fec[_0xac78e1(0x144)];if(_0x2c1da5['match'](_0x41ac22)){if('HkjWW'===_0xac78e1(0x94)){const _0x54f502=String(RegExp['$1']),_0x4cf690=_0xac78e1(0x18f)[_0xac78e1(0x25e)](_0x54f502),_0x2ad3e3=VisuMZ[_0xac78e1(0x1df)][_0xac78e1(0x1a3)](_0x2f8fec,_0x249e81);VisuMZ[_0xac78e1(0x1df)]['JS'][_0x2ad3e3]=new Function(_0x4cf690);}else _0x6e5885=_0x53e1ff[_0xac78e1(0x321)][_0xac78e1(0x25e)](_0x3dfed6[_0xac78e1(0x14c)][_0x1e956a]||''),_0x4312f5[_0xac78e1(0xaa)]>0x0&&(_0x12ff27!==''?_0x1e9826=_0x24dd7c[_0xac78e1(0x25e)](_0x4dfa46,_0x1cec25):_0x58e73c=_0x11a4d7);}},VisuMZ[_0x58a4c3(0x1df)]['createTextJS']=function(_0x2bf5bb,_0x352f72,_0x1f739d){const _0x21a10f=_0x58a4c3,_0xf5c33b=_0x2bf5bb['note'];if(_0xf5c33b['match'](_0x1f739d)){if(_0x21a10f(0xc8)===_0x21a10f(0xc8)){const _0xa63986=String(RegExp['$1']),_0x1ef833=_0x21a10f(0xaf)[_0x21a10f(0x25e)](_0xa63986),_0x35c83e=VisuMZ[_0x21a10f(0x1df)]['createKeyJS'](_0x2bf5bb,_0x352f72);VisuMZ[_0x21a10f(0x1df)]['JS'][_0x35c83e]=new Function(_0x1ef833);}else{const _0x206697=_0x2bea20[_0x21a10f(0x255)][_0x21a10f(0x25e)]('\x5cI[%1]'[_0x21a10f(0x25e)](_0xce22b5['iconIndex']),_0x3c969d['name']),_0x559a94=_0x42d597[_0x21a10f(0x209)](_0xe992f3)?_0x4089e2:_0x20cc06;_0x3e9861+=_0x559a94[_0x21a10f(0x25e)](_0x206697)+'\x0a';}}},VisuMZ['SkillLearnSystem']['createActionJS']=function(_0x2deafb,_0x90c408,_0x172e4d){const _0x2ec632=_0x58a4c3,_0x525e54=_0x2deafb[_0x2ec632(0x144)];if(_0x525e54['match'](_0x172e4d)){if(_0x2ec632(0xf2)==='HyEHE')_0x50b9a1['push'](_0x270d2f);else{const _0x3cee1d=String(RegExp['$1']),_0x32402a=_0x2ec632(0x26f)[_0x2ec632(0x25e)](_0x3cee1d),_0x2c101e=VisuMZ[_0x2ec632(0x1df)][_0x2ec632(0x1a3)](_0x2deafb,_0x90c408);VisuMZ[_0x2ec632(0x1df)]['JS'][_0x2c101e]=new Function(_0x32402a);}}},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1a3)]=function(_0x53721b,_0x49435d){const _0x169c08=_0x58a4c3;if(VisuMZ[_0x169c08(0x1a3)])return VisuMZ[_0x169c08(0x1a3)](_0x53721b,_0x49435d);let _0x3f1d00='';if($dataActors[_0x169c08(0x18e)](_0x53721b))_0x3f1d00=_0x169c08(0x1f5)[_0x169c08(0x25e)](_0x53721b['id'],_0x49435d);if($dataClasses[_0x169c08(0x18e)](_0x53721b))_0x3f1d00='Class-%1-%2'['format'](_0x53721b['id'],_0x49435d);if($dataSkills[_0x169c08(0x18e)](_0x53721b))_0x3f1d00='Skill-%1-%2'[_0x169c08(0x25e)](_0x53721b['id'],_0x49435d);if($dataItems[_0x169c08(0x18e)](_0x53721b))_0x3f1d00=_0x169c08(0x2b4)['format'](_0x53721b['id'],_0x49435d);if($dataWeapons[_0x169c08(0x18e)](_0x53721b))_0x3f1d00=_0x169c08(0xcc)['format'](_0x53721b['id'],_0x49435d);if($dataArmors[_0x169c08(0x18e)](_0x53721b))_0x3f1d00=_0x169c08(0x184)[_0x169c08(0x25e)](_0x53721b['id'],_0x49435d);if($dataEnemies[_0x169c08(0x18e)](_0x53721b))_0x3f1d00='Enemy-%1-%2'[_0x169c08(0x25e)](_0x53721b['id'],_0x49435d);if($dataStates['includes'](_0x53721b))_0x3f1d00='State-%1-%2'['format'](_0x53721b['id'],_0x49435d);return _0x3f1d00;},DataManager['isState']=function(_0x17cc76){const _0x15ff12=_0x58a4c3;if(!_0x17cc76)return![];return _0x17cc76[_0x15ff12(0x291)]!==undefined&&_0x17cc76['maxTurns']!==undefined;},DataManager['getClassIdWithName']=function(_0x1e5ddc){const _0x45c399=_0x58a4c3;_0x1e5ddc=_0x1e5ddc[_0x45c399(0x235)]()[_0x45c399(0x2c3)](),this[_0x45c399(0x30f)]=this['_classIDs']||{};if(this[_0x45c399(0x30f)][_0x1e5ddc])return this[_0x45c399(0x30f)][_0x1e5ddc];for(const _0x1b72f1 of $dataClasses){if('PpWtB'===_0x45c399(0x309)){if(!_0x1b72f1)continue;let _0x48d767=_0x1b72f1[_0x45c399(0x196)];_0x48d767=_0x48d767[_0x45c399(0x2d8)](/\x1I\[(\d+)\]/gi,''),_0x48d767=_0x48d767['replace'](/\\I\[(\d+)\]/gi,''),this[_0x45c399(0x30f)][_0x48d767[_0x45c399(0x235)]()[_0x45c399(0x2c3)]()]=_0x1b72f1['id'];}else _0x284bb0+=_0x179e8a-_0x34089c;}return this[_0x45c399(0x30f)][_0x1e5ddc]||0x0;},DataManager['getSkillIdWithName']=function(_0x3d7914){const _0x252f38=_0x58a4c3;_0x3d7914=_0x3d7914[_0x252f38(0x235)]()['trim'](),this[_0x252f38(0x2df)]=this[_0x252f38(0x2df)]||{};if(this[_0x252f38(0x2df)][_0x3d7914])return this[_0x252f38(0x2df)][_0x3d7914];for(const _0x59e947 of $dataSkills){if(!_0x59e947)continue;this[_0x252f38(0x2df)][_0x59e947['name']['toUpperCase']()[_0x252f38(0x2c3)]()]=_0x59e947['id'];}return this['_skillIDs'][_0x3d7914]||0x0;},DataManager[_0x58a4c3(0x352)]=function(_0xe7b5f4){const _0x9ae2c5=_0x58a4c3;_0xe7b5f4=_0xe7b5f4[_0x9ae2c5(0x235)]()[_0x9ae2c5(0x2c3)](),this[_0x9ae2c5(0x2f0)]=this[_0x9ae2c5(0x2f0)]||{};if(this[_0x9ae2c5(0x2f0)][_0xe7b5f4])return this[_0x9ae2c5(0x2f0)][_0xe7b5f4];for(const _0x3b845c of $dataItems){if(!_0x3b845c)continue;this[_0x9ae2c5(0x2f0)][_0x3b845c['name'][_0x9ae2c5(0x235)]()['trim']()]=_0x3b845c['id'];}return this['_itemIDs'][_0xe7b5f4]||0x0;},DataManager[_0x58a4c3(0x19b)]=function(_0x5dcffa){const _0x1eb65d=_0x58a4c3;_0x5dcffa=_0x5dcffa[_0x1eb65d(0x235)]()[_0x1eb65d(0x2c3)](),this['_weaponIDs']=this[_0x1eb65d(0xe5)]||{};if(this[_0x1eb65d(0xe5)][_0x5dcffa])return this[_0x1eb65d(0xe5)][_0x5dcffa];for(const _0x2237eb of $dataWeapons){if(!_0x2237eb)continue;this[_0x1eb65d(0xe5)][_0x2237eb[_0x1eb65d(0x196)][_0x1eb65d(0x235)]()[_0x1eb65d(0x2c3)]()]=_0x2237eb['id'];}return this[_0x1eb65d(0xe5)][_0x5dcffa]||0x0;},DataManager[_0x58a4c3(0x1d4)]=function(_0x4b3a46){const _0x1d55c0=_0x58a4c3;_0x4b3a46=_0x4b3a46[_0x1d55c0(0x235)]()['trim'](),this[_0x1d55c0(0x1a8)]=this[_0x1d55c0(0x1a8)]||{};if(this['_armorIDs'][_0x4b3a46])return this[_0x1d55c0(0x1a8)][_0x4b3a46];for(const _0x5801f9 of $dataArmors){if(!_0x5801f9)continue;this['_armorIDs'][_0x5801f9[_0x1d55c0(0x196)][_0x1d55c0(0x235)]()[_0x1d55c0(0x2c3)]()]=_0x5801f9['id'];}return this[_0x1d55c0(0x1a8)][_0x4b3a46]||0x0;},DataManager[_0x58a4c3(0x330)]=function(_0x185e37){const _0x49a864=_0x58a4c3;if(!$dataClasses[_0x185e37])return[];const _0x217391=[],_0x28e7d0=$dataClasses[_0x185e37][_0x49a864(0x144)],_0x34c7b1=VisuMZ[_0x49a864(0x1df)][_0x49a864(0x29d)],_0x3a0465=_0x28e7d0[_0x49a864(0x1e8)](_0x34c7b1['LearnSkillA']);if(_0x3a0465)for(const _0x2a9280 of _0x3a0465){if(!_0x2a9280)continue;_0x2a9280[_0x49a864(0x1e8)](_0x34c7b1[_0x49a864(0x289)]);const _0x408a74=String(RegExp['$1'])[_0x49a864(0x22c)](',')[_0x49a864(0x15f)](_0x4ad122=>_0x4ad122[_0x49a864(0x2c3)]());;for(let _0xf126a9 of _0x408a74){_0xf126a9=(String(_0xf126a9)||'')[_0x49a864(0x2c3)]();const _0x2e252c=/^\d+$/['test'](_0xf126a9);if(_0x2e252c){if(_0x49a864(0x262)==='KoBZQ'){const _0x54fc39=_0x36582f[_0x49a864(0x1bb)];if(!_0x54fc39)return;const _0x5c32c5=_0x54fc39['_statusWindow'];if(_0x5c32c5)_0x5c32c5['refresh']();}else _0x217391[_0x49a864(0x21a)](Number(_0xf126a9));}else{if(_0x49a864(0x1a9)!==_0x49a864(0x1a9))return _0x5390c9(_0x1f4752[_0x49a864(0x35c)]);else _0x217391[_0x49a864(0x21a)](DataManager['getSkillIdWithName'](_0xf126a9));}}}const _0xd2fbd6=_0x28e7d0[_0x49a864(0x1e8)](_0x34c7b1[_0x49a864(0x2d3)]);if(_0xd2fbd6){if(_0x49a864(0x19d)!==_0x49a864(0x121))for(const _0x209619 of _0xd2fbd6){if(!_0x209619)continue;_0x209619['match'](_0x34c7b1['LearnSkillB']);const _0xf25112=String(RegExp['$1'])[_0x49a864(0x22c)](/[\r\n]+/);for(let _0x32de8b of _0xf25112){if(_0x49a864(0x138)!==_0x49a864(0x2e9)){_0x32de8b=(String(_0x32de8b)||'')[_0x49a864(0x2c3)]();const _0x122a5b=/^\d+$/[_0x49a864(0x2a5)](_0x32de8b);_0x122a5b?_0x217391[_0x49a864(0x21a)](Number(_0x32de8b)):_0x217391[_0x49a864(0x21a)](DataManager[_0x49a864(0x21b)](_0x32de8b));}else _0x5d851c[_0x49a864(0x155)](_0x4b1a3f,_0x47a6a1);}}else _0x5e51df=_0x31aa25;}return _0x217391[_0x49a864(0x247)]((_0x29cf16,_0x4b39e8)=>_0x29cf16-_0x4b39e8)[_0x49a864(0x346)]((_0x539d85,_0x452fb1,_0x1f5a58)=>_0x1f5a58['indexOf'](_0x539d85)===_0x452fb1);},DataManager[_0x58a4c3(0x1e0)]=function(_0x100e8b){const _0x2d8763=_0x58a4c3;if(!_0x100e8b)return 0x0;if(!DataManager[_0x2d8763(0x2a6)](_0x100e8b)&&!DataManager[_0x2d8763(0x2db)](_0x100e8b))return 0x0;const _0x1da9f5=VisuMZ[_0x2d8763(0x1df)]['RegExp'],_0x39cf3e=_0x100e8b[_0x2d8763(0x144)];if(_0x39cf3e['match'](_0x1da9f5['LearnApCost']))return _0x2d8763(0x297)==='SApUn'?Number(RegExp['$1']):this[_0x2d8763(0x2f9)]==='skillLearn';if(_0x39cf3e['match'](_0x1da9f5[_0x2d8763(0x163)])){if(_0x2d8763(0x20b)!==_0x2d8763(0x2dd)){const _0x28b786=String(RegExp['$1'])[_0x2d8763(0x22c)](/[\r\n]+/);for(const _0x4e79ac of _0x28b786){if(_0x4e79ac[_0x2d8763(0x1e8)](/(?:ABILITY POINTS|AP):[ ](\d+)/gi))return Number(RegExp['$1']);}}else _0x3a9d68[_0x2d8763(0x1df)][_0x2d8763(0x217)][_0x2d8763(0x1ca)](this);}const _0x4b4a7b=VisuMZ[_0x2d8763(0x1df)][_0x2d8763(0x1a3)](_0x100e8b,_0x2d8763(0x2ee));if(VisuMZ[_0x2d8763(0x1df)]['JS'][_0x4b4a7b]){const _0x5981d3=SceneManager[_0x2d8763(0x1bb)]['user']();return VisuMZ[_0x2d8763(0x1df)]['JS'][_0x4b4a7b][_0x2d8763(0x1ca)](this,_0x5981d3,_0x100e8b);}return VisuMZ[_0x2d8763(0x1df)][_0x2d8763(0x1c0)][_0x2d8763(0x278)][_0x2d8763(0x308)]||0x0;},DataManager[_0x58a4c3(0x325)]=function(_0x32c763){const _0x1b5557=_0x58a4c3;if(!_0x32c763)return 0x0;if(!DataManager[_0x1b5557(0x2a6)](_0x32c763)&&!DataManager[_0x1b5557(0x2db)](_0x32c763))return 0x0;const _0xca56d3=VisuMZ[_0x1b5557(0x1df)][_0x1b5557(0x29d)],_0x2695d5=_0x32c763[_0x1b5557(0x144)];if(_0x2695d5[_0x1b5557(0x1e8)](_0xca56d3[_0x1b5557(0x341)]))return Number(RegExp['$1']);if(_0x2695d5[_0x1b5557(0x1e8)](_0xca56d3[_0x1b5557(0x163)])){const _0x2e7e54=String(RegExp['$1'])[_0x1b5557(0x22c)](/[\r\n]+/);for(const _0x1e2d30 of _0x2e7e54){if(_0x1e2d30['match'](/(?:CLASS POINTS|CP):[ ](\d+)/gi))return Number(RegExp['$1']);}}const _0xc9230b=VisuMZ[_0x1b5557(0x1df)][_0x1b5557(0x1a3)](_0x32c763,_0x1b5557(0x2e8));if(VisuMZ[_0x1b5557(0x1df)]['JS'][_0xc9230b]){const _0x1a1578=SceneManager['_scene'][_0x1b5557(0x218)]();return VisuMZ['SkillLearnSystem']['JS'][_0xc9230b][_0x1b5557(0x1ca)](this,_0x1a1578,_0x32c763)||0x0;}return VisuMZ[_0x1b5557(0x149)][_0x1b5557(0x1c0)][_0x1b5557(0x2fd)][_0x1b5557(0x308)]||0x0;},DataManager[_0x58a4c3(0x151)]=function(_0x2a58e6){const _0x3e02e8=_0x58a4c3;if(!_0x2a58e6)return 0x0;if(!DataManager[_0x3e02e8(0x2a6)](_0x2a58e6)&&!DataManager[_0x3e02e8(0x2db)](_0x2a58e6))return 0x0;const _0x24ac31=VisuMZ[_0x3e02e8(0x1df)][_0x3e02e8(0x29d)],_0x270690=_0x2a58e6['note'];if(_0x270690[_0x3e02e8(0x1e8)](_0x24ac31[_0x3e02e8(0x2b2)])){if(_0x3e02e8(0x30c)===_0x3e02e8(0x30c))return Number(RegExp['$1']);else{const _0x5cff6e=_0x54dc75[_0x3e02e8(0x1bb)][_0x3e02e8(0x218)]();return _0x401aae['SkillLearnSystem']['JS'][_0x5cf842][_0x3e02e8(0x1ca)](this,_0x5cff6e,_0xed465a);}}if(_0x270690[_0x3e02e8(0x1e8)](_0x24ac31[_0x3e02e8(0x163)])){const _0x877a28=String(RegExp['$1'])[_0x3e02e8(0x22c)](/[\r\n]+/);for(const _0x15b8f4 of _0x877a28){if(_0x15b8f4[_0x3e02e8(0x1e8)](/(?:JOB POINTS|JP):[ ](\d+)/gi)){if(_0x3e02e8(0xce)==='PlorR')_0x2e8d2e[_0x3e02e8(0x21a)](_0xb1cecc(_0x199bd5));else return Number(RegExp['$1']);}}}const _0xaa23fc=VisuMZ[_0x3e02e8(0x1df)][_0x3e02e8(0x1a3)](_0x2a58e6,'jsLearnJpCost');if(VisuMZ[_0x3e02e8(0x1df)]['JS'][_0xaa23fc]){const _0xe472da=SceneManager[_0x3e02e8(0x1bb)][_0x3e02e8(0x218)]();return VisuMZ[_0x3e02e8(0x1df)]['JS'][_0xaa23fc]['call'](this,_0xe472da,_0x2a58e6);}return VisuMZ[_0x3e02e8(0x149)][_0x3e02e8(0x1c0)]['JobPoints'][_0x3e02e8(0x308)]||0x0;},DataManager[_0x58a4c3(0x312)]=function(_0x20e19f){const _0x2e088d=_0x58a4c3;if(!_0x20e19f)return 0x0;if(!DataManager['isSkill'](_0x20e19f)&&!DataManager[_0x2e088d(0x2db)](_0x20e19f))return 0x0;const _0x10dcf4=VisuMZ[_0x2e088d(0x1df)][_0x2e088d(0x29d)],_0x5e0910=_0x20e19f[_0x2e088d(0x144)];if(_0x5e0910[_0x2e088d(0x1e8)](_0x10dcf4[_0x2e088d(0x1bf)])){if(_0x2e088d(0xa2)===_0x2e088d(0x1dc))_0x326c44['push'](_0x14333e);else return Number(RegExp['$1']);}if(_0x5e0910[_0x2e088d(0x1e8)](_0x10dcf4[_0x2e088d(0x163)])){if(_0x2e088d(0x34d)===_0x2e088d(0x176)){let _0x28c6c6=0x0;const _0x5d07ac=/^\d+$/[_0x2e088d(0x2a5)](_0x4b2af5);_0x5d07ac?_0x28c6c6=_0x426a36(_0x217045):_0x28c6c6=_0x5b639f['getSkillIdWithName'](_0x32458c);if(!this['isLearnedSkill'](_0x28c6c6))return![];}else{const _0x199418=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0xb3ac66 of _0x199418){if(_0x2e088d(0x136)===_0x2e088d(0x136)){if(_0xb3ac66[_0x2e088d(0x1e8)](/(?:SKILL POINTS|SP):[ ](\d+)/gi)){if('piOWM'!==_0x2e088d(0x282))_0x45ee70(_0x2e088d(0x280)[_0x2e088d(0x25e)](_0x52aa91,_0x4d5fa9,_0x33676d)),_0x5d3164[_0x2e088d(0x103)]();else return Number(RegExp['$1']);}}else _0x1eac7e['SkillLearnSystem'][_0x2e088d(0x1d7)]['call'](this),this[_0x2e088d(0x35d)]();}}}const _0x1b701d=VisuMZ[_0x2e088d(0x1df)][_0x2e088d(0x1a3)](_0x20e19f,'jsLearnSpCost');if(VisuMZ[_0x2e088d(0x1df)]['JS'][_0x1b701d]){const _0x4ea8b7=SceneManager[_0x2e088d(0x1bb)][_0x2e088d(0x218)]();return VisuMZ['SkillLearnSystem']['JS'][_0x1b701d][_0x2e088d(0x1ca)](this,_0x4ea8b7,_0x20e19f);}return VisuMZ[_0x2e088d(0x1df)][_0x2e088d(0x1c0)][_0x2e088d(0x129)][_0x2e088d(0x308)]||0x0;},DataManager[_0x58a4c3(0x20a)]=function(_0x12e4df){const _0x54187c=_0x58a4c3;if(!_0x12e4df)return[];if(!DataManager[_0x54187c(0x2a6)](_0x12e4df)&&!DataManager['isState'](_0x12e4df))return[];const _0x14ec34=VisuMZ[_0x54187c(0x1df)][_0x54187c(0x29d)],_0x38870c=_0x12e4df[_0x54187c(0x144)],_0x2fdce3=[],_0x194276=_0x38870c['match'](_0x14ec34[_0x54187c(0x31d)]);if(_0x194276)for(const _0x251294 of _0x194276){if(_0x54187c(0x2a2)===_0x54187c(0x2a2)){if(!_0x251294)continue;_0x251294[_0x54187c(0x1e8)](_0x14ec34[_0x54187c(0x31d)]);const _0x4587b7=String(RegExp['$1']),_0x1f699b={'id':0x0,'quantity':Number(RegExp['$2'])},_0x2d65a8=/^\d+$/[_0x54187c(0x2a5)](_0x4587b7);_0x2d65a8?_0x1f699b['id']=Number(_0x4587b7):_0x54187c(0x298)==='kVONP'?_0x1f699b['id']=DataManager['getItemIdWithName'](_0x4587b7):(this[_0x54187c(0xeb)]=_0x4f8c66[_0x54187c(0x1df)][_0x54187c(0x1c0)][_0x54187c(0x31e)][_0x54187c(0x1b8)]||0x1,this[_0x54187c(0x233)]()['note'][_0x54187c(0x1e8)](_0xe7c4b6[_0x54187c(0x1df)]['RegExp'][_0x54187c(0x24b)])&&(this['_skillLearnIconSpriteOpacitySpeed']=_0xd3b5f9['max'](_0x37a575(_0x5010e0['$1']),0x1)),this[_0x54187c(0x1d1)][_0x54187c(0x2ed)]=0x0),_0x1f699b['id']>0x0&&(_0x54187c(0x334)!==_0x54187c(0xbc)?_0x2fdce3[_0x54187c(0x21a)](_0x1f699b):_0x5bf6c4=0x0);}else return _0x891392=_0x3cf378[_0x54187c(0x2e0)],_0xa94169[_0x54187c(0x25e)](_0x479f10,_0x3e356c[_0x54187c(0x32e)],_0x54187c(0x2a8)[_0x54187c(0x25e)](_0x3a8d2f[_0x54187c(0x203)]),_0x10e56b[_0x54187c(0x110)]);}if(_0x38870c[_0x54187c(0x1e8)](_0x14ec34['LearnCostBatch'])){const _0x1c2c89=String(RegExp['$1'])[_0x54187c(0x22c)](/[\r\n]+/);for(const _0xff301d of _0x1c2c89){if(_0xff301d['match'](/ITEM[ ](.*):[ ](\d+)/gi)){if(_0x54187c(0x14e)!==_0x54187c(0x14e))_0x268644['SkillLearnSystem']['Game_System_initialize'][_0x54187c(0x1ca)](this),this[_0x54187c(0x120)]();else{const _0x41eae0=String(RegExp['$1']),_0x504061={'id':0x0,'quantity':Number(RegExp['$2'])},_0x101879=/^\d+$/[_0x54187c(0x2a5)](_0x41eae0);_0x101879?_0x54187c(0xe8)!==_0x54187c(0x226)?_0x504061['id']=Number(_0x41eae0):(this['_earnedAbilityPoints']=this[_0x54187c(0x96)](),this[_0x54187c(0x359)]=this['getSkillPoints']()):_0x504061['id']=DataManager[_0x54187c(0x352)](_0x41eae0),_0x504061['id']>0x0&&(_0x54187c(0x310)!=='AQgAd'?(this[_0x54187c(0x1d1)]=new _0x726b52(),this['addChild'](this[_0x54187c(0x1d1)]),this['setSkillLearnSkillSpriteBitmap'](),this[_0x54187c(0xfa)](),this[_0x54187c(0x230)](),this[_0x54187c(0x191)](),this[_0x54187c(0x204)](),this[_0x54187c(0x1a0)](this[_0x54187c(0x2f3)][_0x54187c(0x274)]())):_0x2fdce3[_0x54187c(0x21a)](_0x504061));}}}}return _0x2fdce3;},DataManager[_0x58a4c3(0x358)]=function(_0x19b7e7){const _0x1cbd86=_0x58a4c3;if(!_0x19b7e7)return[];if(!DataManager['isSkill'](_0x19b7e7)&&!DataManager[_0x1cbd86(0x2db)](_0x19b7e7))return[];const _0x4fb298=VisuMZ['SkillLearnSystem']['RegExp'],_0x274b2e=_0x19b7e7[_0x1cbd86(0x144)],_0x5b0841=[],_0x156e7c=_0x274b2e[_0x1cbd86(0x1e8)](_0x4fb298[_0x1cbd86(0xb5)]);if(_0x156e7c)for(const _0x6c9e9 of _0x156e7c){if(_0x1cbd86(0x1d8)===_0x1cbd86(0x2ec)){const _0xbfd321=_0x3c85af['_scene']['user']();return _0xefa41d[_0x1cbd86(0x1df)]['JS'][_0x5ca08d][_0x1cbd86(0x1ca)](this,_0xbfd321,_0x19208b);}else{if(!_0x6c9e9)continue;_0x6c9e9[_0x1cbd86(0x1e8)](_0x4fb298[_0x1cbd86(0xb5)]);const _0x4116c9=String(RegExp['$1']),_0x1955c3={'id':0x0,'quantity':Number(RegExp['$2'])},_0x10712b=/^\d+$/[_0x1cbd86(0x2a5)](_0x4116c9);_0x10712b?_0x1955c3['id']=Number(_0x4116c9):_0x1955c3['id']=DataManager[_0x1cbd86(0x19b)](_0x4116c9),_0x1955c3['id']>0x0&&_0x5b0841[_0x1cbd86(0x21a)](_0x1955c3);}}if(_0x274b2e['match'](_0x4fb298[_0x1cbd86(0x163)])){const _0x1fa758=String(RegExp['$1'])[_0x1cbd86(0x22c)](/[\r\n]+/);for(const _0x3f066e of _0x1fa758){if(_0x3f066e['match'](/WEAPON[ ](.*):[ ](\d+)/gi)){const _0x4a555f=String(RegExp['$1']),_0x1fac93={'id':0x0,'quantity':Number(RegExp['$2'])},_0x480d92=/^\d+$/[_0x1cbd86(0x2a5)](_0x4a555f);if(_0x480d92)_0x1fac93['id']=Number(_0x4a555f);else{if(_0x1cbd86(0x128)===_0x1cbd86(0x128))_0x1fac93['id']=DataManager['getWeaponIdWithName'](_0x4a555f);else{if(!this[_0x1cbd86(0x122)])return;this[_0x1cbd86(0x16d)](this['_skillLearnAnimationSprite']),this[_0x1cbd86(0x122)][_0x1cbd86(0x2fa)](),this[_0x1cbd86(0x122)]=_0x25c062;}}_0x1fac93['id']>0x0&&_0x5b0841[_0x1cbd86(0x21a)](_0x1fac93);}}}return _0x5b0841;},DataManager[_0x58a4c3(0x2ef)]=function(_0x44e802){const _0xbb2ec1=_0x58a4c3;if(!_0x44e802)return[];if(!DataManager[_0xbb2ec1(0x2a6)](_0x44e802)&&!DataManager[_0xbb2ec1(0x2db)](_0x44e802))return[];const _0x19b63d=VisuMZ[_0xbb2ec1(0x1df)][_0xbb2ec1(0x29d)],_0x113dbe=_0x44e802[_0xbb2ec1(0x144)],_0x5ee5a3=[],_0x1cec24=_0x113dbe[_0xbb2ec1(0x1e8)](_0x19b63d[_0xbb2ec1(0x107)]);if(_0x1cec24){if(_0xbb2ec1(0x355)===_0xbb2ec1(0x285))this[_0xbb2ec1(0xb2)][_0xbb2ec1(0x2c9)]=_0x2a593e[_0xbb2ec1(0x180)](_0xbb2ec1(0x2e3)),this[_0xbb2ec1(0xb2)][_0xbb2ec1(0x2c9)][_0xbb2ec1(0x16e)]=![];else for(const _0x52d7fb of _0x1cec24){if(!_0x52d7fb)continue;_0x52d7fb[_0xbb2ec1(0x1e8)](_0x19b63d[_0xbb2ec1(0x107)]);const _0x5940dd=String(RegExp['$1']),_0x469c0e={'id':0x0,'quantity':Number(RegExp['$2'])},_0x464aa3=/^\d+$/['test'](_0x5940dd);_0x464aa3?_0xbb2ec1(0x1de)!=='RUxvM'?(this[_0xbb2ec1(0x2f3)]=[],this[_0xbb2ec1(0x233)]()['note']['match'](_0x25346f[_0xbb2ec1(0x1df)]['RegExp'][_0xbb2ec1(0x231)])?this['_skillLearnAnimationIDs']=_0x288785['$1'][_0xbb2ec1(0x22c)](',')[_0xbb2ec1(0x15f)](_0x3e0c8d=>_0x2b2817(_0x3e0c8d)):this['_skillLearnAnimationIDs']=this[_0xbb2ec1(0x2f3)][_0xbb2ec1(0x13d)](_0x1f6618['SkillLearnSystem'][_0xbb2ec1(0x1c0)][_0xbb2ec1(0x31e)][_0xbb2ec1(0x1a2)])):_0x469c0e['id']=Number(_0x5940dd):_0x469c0e['id']=DataManager['getArmorIdWithName'](_0x5940dd),_0x469c0e['id']>0x0&&_0x5ee5a3[_0xbb2ec1(0x21a)](_0x469c0e);}}if(_0x113dbe['match'](_0x19b63d[_0xbb2ec1(0x163)])){const _0x41994e=String(RegExp['$1'])[_0xbb2ec1(0x22c)](/[\r\n]+/);for(const _0x34c4d4 of _0x41994e){if(_0x34c4d4['match'](/ARMOR[ ](.*):[ ](\d+)/gi)){const _0xc0509b=String(RegExp['$1']),_0x4c329c={'id':0x0,'quantity':Number(RegExp['$2'])},_0x189adf=/^\d+$/[_0xbb2ec1(0x2a5)](_0xc0509b);_0x189adf?_0x4c329c['id']=Number(_0xc0509b):_0x4c329c['id']=DataManager[_0xbb2ec1(0x1d4)](_0xc0509b),_0x4c329c['id']>0x0&&('kwMZv'===_0xbb2ec1(0x24f)?this['_skillLearnAnimationIDs']=this[_0xbb2ec1(0x2f3)][_0xbb2ec1(0x13d)](_0x2fc4e9['SkillLearnSystem'][_0xbb2ec1(0x1c0)]['Animation'][_0xbb2ec1(0x1a2)]):_0x5ee5a3[_0xbb2ec1(0x21a)](_0x4c329c));}}}return _0x5ee5a3;},DataManager[_0x58a4c3(0xab)]=function(_0x1591d9){const _0x111f3f=_0x58a4c3;if(!_0x1591d9)return 0x0;if(!DataManager['isSkill'](_0x1591d9)&&!DataManager['isState'](_0x1591d9))return 0x0;const _0x240f6e=VisuMZ[_0x111f3f(0x1df)][_0x111f3f(0x29d)],_0x33fcc4=_0x1591d9['note'];if(_0x33fcc4[_0x111f3f(0x1e8)](_0x240f6e[_0x111f3f(0x178)]))return Number(RegExp['$1']);if(_0x33fcc4['match'](_0x240f6e[_0x111f3f(0x163)])){const _0x4d1fbf=String(RegExp['$1'])[_0x111f3f(0x22c)](/[\r\n]+/);for(const _0x275aac of _0x4d1fbf){if('ShKhZ'===_0x111f3f(0x350)){const _0x1142c1=_0x443fd5['note'];if(_0x1142c1['match'](_0x4fe092)){const _0x745c53=_0xc2c11f(_0x5af30a['$1']),_0x1a15a8=_0x111f3f(0x279)[_0x111f3f(0x25e)](_0x745c53),_0xdeea87=_0x38f625[_0x111f3f(0x1df)][_0x111f3f(0x1a3)](_0x3fc652,_0x773170);_0x4fa872['SkillLearnSystem']['JS'][_0xdeea87]=new _0x53ff72(_0x1a15a8);}}else{if(_0x275aac[_0x111f3f(0x1e8)](/GOLD:[ ](\d+)/gi)){if(_0x111f3f(0xf0)===_0x111f3f(0x319))_0xada265[_0x111f3f(0x1df)][_0x111f3f(0x13f)][_0x111f3f(0x1ca)](this),this[_0x111f3f(0x261)](),this['gainRewardsAbilityPoints'](),this[_0x111f3f(0x33e)](),this[_0x111f3f(0xdb)]();else return Number(RegExp['$1']);}}}}return 0x0;},TextManager[_0x58a4c3(0xdd)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)]['MenuAccess'][_0x58a4c3(0x185)],ImageManager['abilityPointsIcon']=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x278)][_0x58a4c3(0x185)],ImageManager[_0x58a4c3(0x214)]=VisuMZ[_0x58a4c3(0x1df)]['Settings'][_0x58a4c3(0x129)]['Icon'],SoundManager['playSkillLearn']=function(){const _0x66ef06=_0x58a4c3;AudioManager[_0x66ef06(0x2a7)](VisuMZ['SkillLearnSystem'][_0x66ef06(0x1c0)][_0x66ef06(0x1b9)]);},TextManager[_0x58a4c3(0x1b5)]=VisuMZ['SkillLearnSystem'][_0x58a4c3(0x1c0)][_0x58a4c3(0x1ae)][_0x58a4c3(0x1a5)],TextManager['skillLearnReqHeaderFmt']=VisuMZ['SkillLearnSystem'][_0x58a4c3(0x1c0)][_0x58a4c3(0x1ae)][_0x58a4c3(0x17b)],TextManager['skillLearnReqSeparatorFmt']=VisuMZ['SkillLearnSystem'][_0x58a4c3(0x1c0)]['General'][_0x58a4c3(0x2d7)],TextManager['skillLearnReqLevelFmt']=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)]['General'][_0x58a4c3(0x27e)],TextManager['skillLearnReqSkillFmt']=VisuMZ[_0x58a4c3(0x1df)]['Settings'][_0x58a4c3(0x1ae)][_0x58a4c3(0x267)],TextManager[_0x58a4c3(0x321)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x1ae)]['ReqSwitchFmt'],TextManager['skillLearnSeparationFmt']=VisuMZ['SkillLearnSystem'][_0x58a4c3(0x1c0)][_0x58a4c3(0x1ae)]['SeparationFmt'],TextManager['skillLearnItemFmt']=VisuMZ[_0x58a4c3(0x1df)]['Settings'][_0x58a4c3(0x1ae)][_0x58a4c3(0xba)],TextManager[_0x58a4c3(0x150)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x1ae)][_0x58a4c3(0x2cd)],TextManager[_0x58a4c3(0xe6)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x1ae)][_0x58a4c3(0x102)],TextManager[_0x58a4c3(0x10d)]=VisuMZ['SkillLearnSystem'][_0x58a4c3(0x1c0)][_0x58a4c3(0x1ae)][_0x58a4c3(0xed)],TextManager[_0x58a4c3(0x28e)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x281)][_0x58a4c3(0x336)],TextManager['skillLearnReqTitle']=VisuMZ['SkillLearnSystem'][_0x58a4c3(0x1c0)][_0x58a4c3(0x23b)][_0x58a4c3(0x12e)],TextManager[_0x58a4c3(0x333)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x23b)][_0x58a4c3(0x19a)],TextManager[_0x58a4c3(0x1e2)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x23b)][_0x58a4c3(0x2ac)],TextManager[_0x58a4c3(0x294)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)]['Window'][_0x58a4c3(0x27e)],TextManager[_0x58a4c3(0x255)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x23b)]['ReqSkillFmt'],TextManager[_0x58a4c3(0x12b)]=VisuMZ[_0x58a4c3(0x1df)]['Settings'][_0x58a4c3(0x23b)][_0x58a4c3(0x160)],TextManager[_0x58a4c3(0x315)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x23b)][_0x58a4c3(0x271)],TextManager[_0x58a4c3(0x2fe)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x23b)][_0x58a4c3(0x177)],TextManager[_0x58a4c3(0x26a)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x23b)][_0x58a4c3(0xc3)],TextManager[_0x58a4c3(0x245)]=VisuMZ[_0x58a4c3(0x1df)]['Settings'][_0x58a4c3(0x23b)][_0x58a4c3(0x296)],TextManager[_0x58a4c3(0x20c)]=VisuMZ[_0x58a4c3(0x1df)]['Settings'][_0x58a4c3(0x23b)]['ConfirmCmd'],TextManager['skillLearnCancelCmd']=VisuMZ['SkillLearnSystem'][_0x58a4c3(0x1c0)][_0x58a4c3(0x23b)]['CancelCmd'],TextManager[_0x58a4c3(0x304)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)][_0x58a4c3(0x278)][_0x58a4c3(0x10a)],TextManager[_0x58a4c3(0x24c)]=VisuMZ['SkillLearnSystem']['Settings']['AbilityPoints'][_0x58a4c3(0x171)],TextManager[_0x58a4c3(0x1cf)]=VisuMZ[_0x58a4c3(0x1df)]['Settings']['AbilityPoints'][_0x58a4c3(0x142)],TextManager['skillPointsFull']=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)]['SkillPoints']['FullText'],TextManager['skillPointsAbbr']=VisuMZ[_0x58a4c3(0x1df)]['Settings'][_0x58a4c3(0x129)][_0x58a4c3(0x171)],TextManager[_0x58a4c3(0x182)]=VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1c0)]['SkillPoints'][_0x58a4c3(0x142)],VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x13f)]=BattleManager[_0x58a4c3(0x33a)],BattleManager['makeRewards']=function(){const _0x5477a5=_0x58a4c3;VisuMZ[_0x5477a5(0x1df)][_0x5477a5(0x13f)]['call'](this),this[_0x5477a5(0x261)](),this[_0x5477a5(0x97)](),this[_0x5477a5(0x33e)](),this[_0x5477a5(0xdb)]();},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x1af)]=BattleManager[_0x58a4c3(0x210)],BattleManager['displayRewards']=function(){const _0x14ee85=_0x58a4c3;VisuMZ[_0x14ee85(0x1df)][_0x14ee85(0x1af)]['call'](this),this['displayRewardsAbilityPoints'](),this[_0x14ee85(0x18b)]();},BattleManager[_0x58a4c3(0x261)]=function(){const _0x4d3231=_0x58a4c3;this[_0x4d3231(0x1db)][_0x4d3231(0x275)]=$gameTroop[_0x4d3231(0x222)]();},BattleManager['displayRewardsAbilityPoints']=function(){const _0x364b61=_0x58a4c3;if(!this[_0x364b61(0x2ab)]())return;$gameMessage[_0x364b61(0x244)]();const _0x409e88=$gameParty[_0x364b61(0x173)](),_0x52a65e=VisuMZ[_0x364b61(0x1df)]['Settings']['AbilityPoints'],_0x5a3286=_0x52a65e[_0x364b61(0x14a)];for(const _0x1be805 of _0x409e88){if(_0x364b61(0x1ab)==='fRrqz'){const _0x5409a3=_0x4b796b[_0x364b61(0x1bb)][_0x364b61(0x233)](),_0x339186=_0x1f5bb2[_0x364b61(0x1bb)]['user']();return _0x339186&&!_0x339186['meetRequirementsForSkillLearnSystem'](_0x5409a3);}else{if(!_0x1be805)continue;const _0x4e566d=_0x5a3286['format'](_0x1be805[_0x364b61(0x196)](),_0x1be805[_0x364b61(0x223)](),TextManager[_0x364b61(0x24c)],TextManager['abilityPointsFmt']);$gameMessage[_0x364b61(0x316)]('\x5c.'+_0x4e566d);}}},BattleManager[_0x58a4c3(0x97)]=function(){const _0x1533da=_0x58a4c3;this[_0x1533da(0x1db)]['abilityPoints']=this[_0x1533da(0x1db)]['abilityPoints']||0x0;let _0x17b34c=$gameParty[_0x1533da(0x13e)]();VisuMZ['SkillLearnSystem']['Settings'][_0x1533da(0x278)][_0x1533da(0xa4)]&&(_0x17b34c=_0x17b34c[_0x1533da(0x346)](_0x208284=>_0x208284[_0x1533da(0x329)]()));for(const _0x21d7fe of _0x17b34c){if(!_0x21d7fe)continue;if(!$dataSystem[_0x1533da(0x337)]&&!_0x21d7fe[_0x1533da(0x190)]())continue;_0x21d7fe[_0x1533da(0x109)](this['_rewards'][_0x1533da(0x275)]),_0x21d7fe[_0x1533da(0x260)](this[_0x1533da(0x1db)][_0x1533da(0x275)]);}},BattleManager[_0x58a4c3(0x2ab)]=function(){const _0xed9d01=_0x58a4c3;return VisuMZ[_0xed9d01(0x1df)][_0xed9d01(0x1c0)][_0xed9d01(0x278)][_0xed9d01(0xc1)];},BattleManager[_0x58a4c3(0x33e)]=function(){const _0x1e832b=_0x58a4c3;this['_rewards'][_0x1e832b(0x12a)]=$gameTroop[_0x1e832b(0x232)]();},BattleManager[_0x58a4c3(0x18b)]=function(){const _0x2b51b0=_0x58a4c3;if(!this[_0x2b51b0(0xcf)]())return;$gameMessage[_0x2b51b0(0x244)]();const _0x3348c2=$gameParty[_0x2b51b0(0x173)](),_0x352b60=VisuMZ[_0x2b51b0(0x1df)][_0x2b51b0(0x1c0)]['SkillPoints'],_0x2d4249=_0x352b60[_0x2b51b0(0x14a)];for(const _0x5dcba9 of _0x3348c2){if(!_0x5dcba9)continue;const _0xe62f90=_0x2d4249[_0x2b51b0(0x25e)](_0x5dcba9[_0x2b51b0(0x196)](),_0x5dcba9[_0x2b51b0(0xe0)](),TextManager[_0x2b51b0(0x92)],TextManager[_0x2b51b0(0x182)]);$gameMessage['add']('\x5c.'+_0xe62f90);}},BattleManager[_0x58a4c3(0xdb)]=function(){const _0x14b8ee=_0x58a4c3;this['_rewards'][_0x14b8ee(0x12a)]=this[_0x14b8ee(0x1db)][_0x14b8ee(0x12a)]||0x0;let _0x538b7b=$gameParty['allMembers']();VisuMZ[_0x14b8ee(0x1df)][_0x14b8ee(0x1c0)][_0x14b8ee(0x129)][_0x14b8ee(0xa4)]&&(_0x538b7b=_0x538b7b['filter'](_0x14590b=>_0x14590b[_0x14b8ee(0x329)]()));for(const _0x1c6260 of _0x538b7b){if(!_0x1c6260)continue;if(!$dataSystem[_0x14b8ee(0x337)]&&!_0x1c6260[_0x14b8ee(0x190)]())continue;_0x1c6260[_0x14b8ee(0x338)](this[_0x14b8ee(0x1db)][_0x14b8ee(0x12a)]),_0x1c6260[_0x14b8ee(0x186)](this[_0x14b8ee(0x1db)][_0x14b8ee(0x12a)]);}},BattleManager['skillPointsVisible']=function(){const _0x15d089=_0x58a4c3;return VisuMZ[_0x15d089(0x1df)][_0x15d089(0x1c0)][_0x15d089(0x129)][_0x15d089(0xc1)];},VisuMZ[_0x58a4c3(0x1df)]['Game_System_initialize']=Game_System[_0x58a4c3(0x33d)][_0x58a4c3(0x1ba)],Game_System[_0x58a4c3(0x33d)][_0x58a4c3(0x1ba)]=function(){const _0x1398a8=_0x58a4c3;VisuMZ['SkillLearnSystem'][_0x1398a8(0x19f)]['call'](this),this[_0x1398a8(0x120)]();},Game_System[_0x58a4c3(0x33d)][_0x58a4c3(0x120)]=function(){const _0xa01da1=_0x58a4c3;this[_0xa01da1(0x2ce)]=VisuMZ[_0xa01da1(0x1df)][_0xa01da1(0x1c0)][_0xa01da1(0x281)][_0xa01da1(0x2cc)];},Game_System[_0x58a4c3(0x33d)]['isSkillLearnSystemMenuAccess']=function(){const _0x12dd02=_0x58a4c3;if(this[_0x12dd02(0x2ce)]===undefined){if(_0x12dd02(0x32d)!=='IPwLJ')return _0x20dd5a;else this[_0x12dd02(0x120)]();}return this['_SkillLearnSystem_MenuAccess'];},Game_System[_0x58a4c3(0x33d)][_0x58a4c3(0x2f2)]=function(_0xdfc85a){const _0x5b2e17=_0x58a4c3;if(this[_0x5b2e17(0x2ce)]===undefined){if(_0x5b2e17(0x13b)===_0x5b2e17(0x249)){let _0x1dc386=0x0;const _0x35612d=/^\d+$/['test'](_0x53d8a7);_0x35612d?_0x1dc386=_0xf55684(_0xa3ab61):_0x1dc386=_0x4e747b['getSkillIdWithName'](_0xa5fcf5);const _0x496333=_0x5ddb7d[_0x1dc386];if(_0x496333){const _0x548129=_0x2b023a[_0x5b2e17(0x255)]['format'](_0x5b2e17(0x2a8)['format'](_0x496333[_0x5b2e17(0xdf)]),_0x496333['name']),_0x294e02=_0x2d46b4[_0x5b2e17(0x209)](_0x1dc386)?_0x5675fc:_0x2fc2b3;_0x1940ef+=_0x294e02[_0x5b2e17(0x25e)](_0x548129)+'\x0a';}}else this['initSkillLearnSystemMenuAccess']();}this[_0x5b2e17(0x2ce)]=_0xdfc85a;},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x339)]=Game_Action[_0x58a4c3(0x33d)][_0x58a4c3(0x146)],Game_Action['prototype']['applyItemUserEffect']=function(_0x41a562){const _0x33aaf6=_0x58a4c3;VisuMZ[_0x33aaf6(0x1df)]['Game_Action_applyItemUserEffect'][_0x33aaf6(0x1ca)](this,_0x41a562),this['applySkillLearnSystemUserEffect'](_0x41a562);},Game_Action[_0x58a4c3(0x33d)][_0x58a4c3(0x1fb)]=function(_0x1b00c1){const _0x378ea=_0x58a4c3;if(this['item']())this[_0x378ea(0x157)](_0x1b00c1);},Game_Action[_0x58a4c3(0x33d)][_0x58a4c3(0x157)]=function(_0x3f3262){const _0x4898fc=_0x58a4c3,_0x2b5355=VisuMZ[_0x4898fc(0x1df)]['RegExp'],_0xc251c4=this[_0x4898fc(0x233)]()[_0x4898fc(0x144)];if($gameParty['inBattle']()){if(this[_0x4898fc(0x2f4)]()[_0x4898fc(0x300)]()&&_0xc251c4[_0x4898fc(0x1e8)](_0x2b5355[_0x4898fc(0xf3)])){const _0x16ffdc=eval(RegExp['$1']);this['subject']()[_0x4898fc(0x109)](_0x16ffdc);}else this[_0x4898fc(0x208)]();if(_0x3f3262[_0x4898fc(0x300)]()&&_0xc251c4[_0x4898fc(0x1e8)](_0x2b5355[_0x4898fc(0x2f8)])){if(_0x4898fc(0x125)!==_0x4898fc(0x1e5)){const _0x2d8ca6=eval(RegExp['$1']);_0x3f3262[_0x4898fc(0x109)](_0x2d8ca6);}else _0x4fa7f7[_0x4898fc(0x1df)][_0x4898fc(0xa0)][_0x4898fc(0x1ca)](this),this[_0x4898fc(0xa5)](this['currentClass']()['id']),this['levelUpGainSkillPoints'](this['currentClass']()['id']);}}if($gameParty[_0x4898fc(0x2eb)]()){if(_0x4898fc(0xf9)!=='OMtek'){if(this['subject']()[_0x4898fc(0x300)]()&&_0xc251c4[_0x4898fc(0x1e8)](_0x2b5355[_0x4898fc(0x172)])){if(_0x4898fc(0x126)===_0x4898fc(0x1f0)){const _0x422f12=this[_0x4898fc(0x29e)]();this[_0x4898fc(0x2cb)]=new _0x5f51f5(_0x422f12),this[_0x4898fc(0x101)](this[_0x4898fc(0x2cb)]),this[_0x4898fc(0x2cb)][_0x4898fc(0x162)]();const _0x44a3e3=_0x464aab[_0x4898fc(0x1df)][_0x4898fc(0x1c0)][_0x4898fc(0x23b)]['DetailWindow_BgType'];this[_0x4898fc(0x2cb)][_0x4898fc(0x22a)](_0x44a3e3);}else{const _0x2d763a=eval(RegExp['$1']);this['subject']()[_0x4898fc(0x338)](_0x2d763a);}}else this['applySkillPoints']();if(_0x3f3262['isActor']()&&_0xc251c4['match'](_0x2b5355[_0x4898fc(0xb9)])){const _0x3a1224=eval(RegExp['$1']);_0x3f3262[_0x4898fc(0x338)](_0x3a1224);}}else _0x1adf14=_0x2deb5b||this[_0x4898fc(0x15c)]()['id'];}if(_0xc251c4[_0x4898fc(0x1e8)](/<NOTETAG>/i)){}},Game_Action[_0x58a4c3(0x33d)][_0x58a4c3(0x208)]=function(){const _0x3db2d8=_0x58a4c3;if(!$gameParty[_0x3db2d8(0x2eb)]())return;if(!this[_0x3db2d8(0x2f4)]()[_0x3db2d8(0x300)]())return;const _0x173d83=VisuMZ[_0x3db2d8(0x1df)]['Settings'][_0x3db2d8(0x278)];let _0x1dd600=0x0;try{_0x1dd600=eval(_0x173d83['PerAction']);}catch(_0x98fd1c){if($gameTemp[_0x3db2d8(0x253)]())console[_0x3db2d8(0x202)](_0x98fd1c);}this[_0x3db2d8(0x2f4)]()['gainAbilityPoints'](_0x1dd600);},Game_Action[_0x58a4c3(0x33d)]['applySkillPoints']=function(){const _0xf984e2=_0x58a4c3;if(!$gameParty[_0xf984e2(0x2eb)]())return;if(!this[_0xf984e2(0x2f4)]()[_0xf984e2(0x300)]())return;const _0x27bc69=VisuMZ[_0xf984e2(0x1df)][_0xf984e2(0x1c0)][_0xf984e2(0x129)];let _0x5d280a=0x0;try{if('gkiBD'!==_0xf984e2(0x137))_0x5d280a=eval(_0x27bc69[_0xf984e2(0x31f)]);else return!!_0x56a315[_0xf984e2(0x135)];}catch(_0x27ec03){if($gameTemp[_0xf984e2(0x253)]())console[_0xf984e2(0x202)](_0x27ec03);}this[_0xf984e2(0x2f4)]()[_0xf984e2(0x338)](_0x5d280a);},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x30e)]=Game_Battler['prototype'][_0x58a4c3(0xbb)],Game_Battler['prototype'][_0x58a4c3(0xbb)]=function(_0x43cf2a){const _0x967c84=_0x58a4c3;VisuMZ['SkillLearnSystem']['Game_Battler_onBattleStart'][_0x967c84(0x1ca)](this,_0x43cf2a),this[_0x967c84(0x300)]()&&(this[_0x967c84(0x167)]=this['getAbilityPoints'](),this[_0x967c84(0x359)]=this[_0x967c84(0x2bd)]());},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x254)]=Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x17a)],Game_Actor['prototype']['setup']=function(_0x486702){const _0x4ff5ca=_0x58a4c3;VisuMZ[_0x4ff5ca(0x1df)][_0x4ff5ca(0x254)][_0x4ff5ca(0x1ca)](this,_0x486702),this['initAbilityPoints'](),this['gainStartingAbilityPoints'](),this[_0x4ff5ca(0x240)](),this[_0x4ff5ca(0x2d9)]();},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x32a)]=Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x2d2)],Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x2d2)]=function(_0x1ede44,_0x3775ba){const _0x4dff80=_0x58a4c3;this['_SkillLearnSystem_preventLevelUpGain']=!![],VisuMZ[_0x4dff80(0x1df)][_0x4dff80(0x32a)][_0x4dff80(0x1ca)](this,_0x1ede44,_0x3775ba),this[_0x4dff80(0x2b8)]=undefined;},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0xa0)]=Game_Actor[_0x58a4c3(0x33d)]['levelUp'],Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x1f9)]=function(){const _0x5cafeb=_0x58a4c3;VisuMZ[_0x5cafeb(0x1df)]['Game_Actor_levelUp'][_0x5cafeb(0x1ca)](this),this[_0x5cafeb(0xa5)](this[_0x5cafeb(0x15c)]()['id']),this['levelUpGainSkillPoints'](this['currentClass']()['id']);},Game_Actor[_0x58a4c3(0x33d)]['initAbilityPoints']=function(){const _0x32fca8=_0x58a4c3;this[_0x32fca8(0x299)]={};},Game_Actor[_0x58a4c3(0x33d)]['gainStartingAbilityPoints']=function(){const _0x560cd1=_0x58a4c3,_0x1b1009=VisuMZ['SkillLearnSystem'][_0x560cd1(0x29d)],_0x172df4=this[_0x560cd1(0xda)]()[_0x560cd1(0x144)];if(_0x172df4[_0x560cd1(0x1e8)](_0x1b1009['StartingAbilityPoints'])){if('HfxQd'===_0x560cd1(0x158))return![];else{const _0x5237b2=eval(RegExp['$1']);this[_0x560cd1(0x109)](_0x5237b2);}}const _0x1d0151=VisuMZ[_0x560cd1(0x1df)][_0x560cd1(0x1c0)][_0x560cd1(0x278)];if(!_0x1d0151[_0x560cd1(0x95)])return;const _0x700275=_0x172df4[_0x560cd1(0x1e8)](_0x1b1009[_0x560cd1(0x353)]);if(_0x700275)for(const _0x2928b6 of _0x700275){if(_0x560cd1(0x118)!==_0x560cd1(0xb1)){if(!_0x2928b6)continue;_0x2928b6[_0x560cd1(0x1e8)](_0x1b1009[_0x560cd1(0x353)]);const _0x27c3d8=String(RegExp['$1']),_0x114300=eval(RegExp['$2']),_0x4cd9db=/^\d+$/[_0x560cd1(0x2a5)](_0x27c3d8);let _0x1be017=0x0;if(_0x4cd9db){if(_0x560cd1(0x140)!==_0x560cd1(0x140)){const _0xc835cc=_0x4a2af5(_0x3c959d['$1']);_0xc835cc!==_0x176936[_0x1401b9][_0x560cd1(0xb4)]&&(_0x55ba5b(_0x560cd1(0xb0)[_0x560cd1(0x25e)](_0x1729db,_0xc835cc)),_0x3fe097[_0x560cd1(0x103)]());}else _0x1be017=Number(_0x27c3d8);}else{if(_0x560cd1(0x1c9)==='EArOh'){if(_0x557fef[_0x560cd1(0x1df)][_0x560cd1(0x1c0)][_0x560cd1(0x23b)]['ConfirmWindow_RectJS'])return _0x32740c['SkillLearnSystem'][_0x560cd1(0x1c0)]['Window'][_0x560cd1(0x2be)][_0x560cd1(0x1ca)](this);const _0x1e5a03=this[_0x560cd1(0x241)](),_0x1e6d1a=_0x1e5a03[_0x560cd1(0x13a)],_0x46deff=this[_0x560cd1(0x131)](0x2,![]),_0x280f57=_0x1e5a03['x'],_0x2ac38e=_0x1e5a03['y']+_0x1e5a03[_0x560cd1(0x132)]-_0x46deff;return new _0x22a358(_0x280f57,_0x2ac38e,_0x1e6d1a,_0x46deff);}else _0x1be017=DataManager['getClassIdWithName'](_0x27c3d8);}this[_0x560cd1(0x109)](_0x114300,_0x1be017);}else this['_SkillLearnSystem_MenuAccess']=_0x45a171[_0x560cd1(0x1df)][_0x560cd1(0x1c0)][_0x560cd1(0x281)][_0x560cd1(0x2cc)];}},Game_Actor['prototype']['getAbilityPoints']=function(_0x440a1a){const _0x54240c=_0x58a4c3;this['_abilityPoints']===undefined&&this[_0x54240c(0x257)]();const _0xa2b095=VisuMZ[_0x54240c(0x1df)][_0x54240c(0x1c0)][_0x54240c(0x278)];return _0xa2b095[_0x54240c(0x95)]?_0x440a1a=0x0:_0x440a1a=_0x440a1a||this[_0x54240c(0x15c)]()['id'],this[_0x54240c(0x299)][_0x440a1a]=this['_abilityPoints'][_0x440a1a]||0x0,Math[_0x54240c(0x2a4)](this[_0x54240c(0x299)][_0x440a1a]);},Game_Actor['prototype']['setAbilityPoints']=function(_0x312123,_0x539450){const _0xd2db07=_0x58a4c3;this[_0xd2db07(0x299)]===undefined&&this[_0xd2db07(0x257)]();const _0x3e4120=VisuMZ[_0xd2db07(0x1df)][_0xd2db07(0x1c0)][_0xd2db07(0x278)];if(_0x3e4120['SharedResource']){if(_0xd2db07(0x242)===_0xd2db07(0xc5)){const _0x1feef3=_0x4fd21d(_0x3013b6['$1']);_0x5d6e51=_0x104d00[_0xd2db07(0x332)][_0xd2db07(0x25e)](_0x1feef3,_0x352475[_0xd2db07(0x32f)],_0x3048bd[_0xd2db07(0x28f)]),_0x538b98[_0xd2db07(0xaa)]>0x0&&(_0x3dfcac!==''?_0x1ee8b6=_0x378c04['format'](_0xc28698,_0x30cf0c):_0x3b4061=_0x4b378b);}else _0x539450=0x0;}else _0xd2db07(0x1c1)!==_0xd2db07(0x1c1)?this[_0xd2db07(0x2bf)](this[_0xd2db07(0x20f)],this[_0xd2db07(0x20f)][_0xd2db07(0x15c)]()['id'],_0x4a5b31,_0x203123,_0x32caec,_0xd2db07(0xae)):_0x539450=_0x539450||this[_0xd2db07(0x15c)]()['id'];this[_0xd2db07(0x299)][_0x539450]=this[_0xd2db07(0x299)][_0x539450]||0x0,this['_abilityPoints'][_0x539450]=Math[_0xd2db07(0x2a4)](_0x312123||0x0);const _0x2be868=_0x3e4120[_0xd2db07(0xf4)]||Number[_0xd2db07(0x229)];this['_abilityPoints'][_0x539450]=this['_abilityPoints'][_0x539450][_0xd2db07(0xd9)](0x0,_0x2be868);},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x109)]=function(_0x2beca5,_0x22bee0){const _0x2b4d2f=_0x58a4c3;if(_0x2beca5>0x0){if(_0x2b4d2f(0x2e1)==='ZeFyx')_0x2beca5*=this[_0x2b4d2f(0x1b6)]();else{const _0x3fe7da=_0x599bd2[_0x2b4d2f(0x330)](this[_0x2b4d2f(0x20f)][_0x2b4d2f(0x15c)]()['id']);this['_data']=_0x3fe7da[_0x2b4d2f(0x15f)](_0x3d6f28=>_0x1d9391[_0x3d6f28])[_0x2b4d2f(0x346)](_0x9aa075=>this[_0x2b4d2f(0x18e)](_0x9aa075)),_0xfffc94[_0x2b4d2f(0x225)]&&this[_0x2b4d2f(0x9a)]();}}this[_0x2b4d2f(0x147)](_0x2beca5,_0x22bee0);},Game_Actor['prototype'][_0x58a4c3(0x260)]=function(_0x2beea6){const _0x22a9e1=_0x58a4c3;if(!Imported[_0x22a9e1(0x1c8)])return;_0x2beea6>0x0&&(_0x2beea6*=this[_0x22a9e1(0x1b6)]()),this[_0x22a9e1(0x207)](_0x2beea6,'Ability');},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x147)]=function(_0x5f349f,_0x3f65a6){const _0x531aa2=_0x58a4c3,_0xba10da=VisuMZ['SkillLearnSystem'][_0x531aa2(0x1c0)][_0x531aa2(0x278)];if(_0xba10da[_0x531aa2(0x95)])_0x3f65a6=0x0;else{if(_0x531aa2(0x31a)!==_0x531aa2(0x34c))_0x3f65a6=_0x3f65a6||this['currentClass']()['id'];else return this[_0x531aa2(0x2bb)](_0x32c469);}_0x5f349f+=this[_0x531aa2(0x96)](_0x3f65a6),this[_0x531aa2(0x239)](_0x5f349f,_0x3f65a6);},Game_Actor[_0x58a4c3(0x33d)]['loseAbilityPoints']=function(_0x3c8990,_0x163ecf){this['addAbilityPoints'](-_0x3c8990,_0x163ecf);},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x1b6)]=function(){const _0x513bc7=_0x58a4c3;return this[_0x513bc7(0x1da)]()['reduce']((_0x164d38,_0x142fdc)=>{const _0x2fdd35=_0x513bc7;if(_0x142fdc&&_0x142fdc[_0x2fdd35(0x144)][_0x2fdd35(0x1e8)](VisuMZ[_0x2fdd35(0x1df)][_0x2fdd35(0x29d)][_0x2fdd35(0x1f1)]))return _0x164d38*(Number(RegExp['$1'])*0.01);else{if(_0x2fdd35(0x169)!==_0x2fdd35(0x23e))return _0x164d38;else _0x12f4e3[_0x2fdd35(0x2a7)](_0x180e60[_0x2fdd35(0x1df)]['Settings']['Sound']);}},0x1);},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0xa5)]=function(_0x3e64ca){const _0x3e1c58=_0x58a4c3;if(this['_SkillLearnSystem_preventLevelUpGain'])return;const _0x45f39b=VisuMZ[_0x3e1c58(0x1df)][_0x3e1c58(0x1c0)][_0x3e1c58(0x278)];let _0x47c96c=0x0;try{_0x47c96c=eval(_0x45f39b['PerLevelUp']);}catch(_0x4322e6){if($gameTemp[_0x3e1c58(0x253)]())console[_0x3e1c58(0x202)](_0x4322e6);}this[_0x3e1c58(0x109)](_0x47c96c,_0x3e64ca);},Game_Actor['prototype']['earnedAbilityPoints']=function(){const _0x316c20=_0x58a4c3;return this[_0x316c20(0x167)]=this[_0x316c20(0x167)]||0x0,this['getAbilityPoints']()-this['_earnedAbilityPoints'];},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x240)]=function(){const _0x46c3b4=_0x58a4c3;this[_0x46c3b4(0x206)]={};},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x2d9)]=function(){const _0x30ba69=_0x58a4c3,_0x33b9f3=VisuMZ[_0x30ba69(0x1df)]['RegExp'],_0x57506d=this[_0x30ba69(0xda)]()[_0x30ba69(0x144)];if(_0x57506d[_0x30ba69(0x1e8)](_0x33b9f3[_0x30ba69(0x34f)])){const _0xab9b2b=eval(RegExp['$1']);this[_0x30ba69(0x338)](_0xab9b2b);}const _0x9d54d5=VisuMZ[_0x30ba69(0x1df)][_0x30ba69(0x1c0)][_0x30ba69(0x129)];if(!_0x9d54d5['SharedResource'])return;const _0x9fffbe=_0x57506d[_0x30ba69(0x1e8)](_0x33b9f3[_0x30ba69(0x168)]);if(_0x9fffbe){if(_0x30ba69(0x1ff)===_0x30ba69(0x1ff))for(const _0x24c001 of _0x9fffbe){if('gZvpi'!==_0x30ba69(0xd0))_0x496335!==''?_0x1bfc03=_0x50f49a[_0x30ba69(0x25e)](_0x134c83,_0x2dc5e3):_0x3ee43e=_0x1afa18;else{if(!_0x24c001)continue;_0x24c001[_0x30ba69(0x1e8)](_0x33b9f3[_0x30ba69(0x168)]);const _0x557730=String(RegExp['$1']),_0x4ed2f8=eval(RegExp['$2']),_0x2f5fe4=/^\d+$/[_0x30ba69(0x2a5)](_0x557730);let _0xdf1a51=0x0;_0x2f5fe4?_0xdf1a51=Number(_0x557730):_0x30ba69(0x314)==='heJtw'?_0x38c012=_0x138bd4||this['currentClass']()['id']:_0xdf1a51=DataManager[_0x30ba69(0x15e)](_0x557730),this['gainSkillPoints'](_0x4ed2f8,_0xdf1a51);}}else{if(_0x5c2d10[_0x30ba69(0x1e8)](/(?:JOB POINTS|JP):[ ](\d+)/gi))return _0x5c88a3(_0x4d12c8['$1']);}}},Game_Actor[_0x58a4c3(0x33d)]['getSkillPoints']=function(_0x584d6b){const _0x3832cb=_0x58a4c3;if(this['_skillPoints']===undefined){if('GVZSy'!=='KBlJS')this[_0x3832cb(0x240)]();else{if(this[_0x3832cb(0x2f4)]()[_0x3832cb(0x300)]()&&_0x79fefd[_0x3832cb(0x1e8)](_0x3261a5['UserGainSkillPoints'])){const _0x1a9fa8=_0x395489(_0x2a29f8['$1']);this[_0x3832cb(0x2f4)]()[_0x3832cb(0x338)](_0x1a9fa8);}else this[_0x3832cb(0x26e)]();if(_0x2360bc[_0x3832cb(0x300)]()&&_0x41cff6['match'](_0x59acf2[_0x3832cb(0xb9)])){const _0x2d4c12=_0x167746(_0x5c9e91['$1']);_0x140f9a[_0x3832cb(0x338)](_0x2d4c12);}}}const _0x17e4d5=VisuMZ['SkillLearnSystem'][_0x3832cb(0x1c0)][_0x3832cb(0x129)];if(_0x17e4d5['SharedResource'])_0x584d6b=0x0;else{if('UTcAN'===_0x3832cb(0x27f))_0x584d6b=_0x584d6b||this[_0x3832cb(0x15c)]()['id'];else{if(!_0x335a32['inBattle']())return;if(!this['subject']()[_0x3832cb(0x300)]())return;const _0x5a1499=_0x43f0a5[_0x3832cb(0x1df)]['Settings'][_0x3832cb(0x278)];let _0x36f5a4=0x0;try{_0x36f5a4=_0x53f724(_0x5a1499[_0x3832cb(0x31f)]);}catch(_0x3a8178){if(_0x319a03[_0x3832cb(0x253)]())_0x331efe[_0x3832cb(0x202)](_0x3a8178);}this[_0x3832cb(0x2f4)]()['gainAbilityPoints'](_0x36f5a4);}}return this[_0x3832cb(0x206)][_0x584d6b]=this[_0x3832cb(0x206)][_0x584d6b]||0x0,Math[_0x3832cb(0x2a4)](this[_0x3832cb(0x206)][_0x584d6b]);},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x143)]=function(_0x387f62,_0x3e2c30){const _0x4aaec9=_0x58a4c3;this[_0x4aaec9(0x206)]===undefined&&this['initSkillPoints']();const _0x535a7d=VisuMZ[_0x4aaec9(0x1df)]['Settings']['SkillPoints'];_0x535a7d[_0x4aaec9(0x95)]?'dFbTm'===_0x4aaec9(0x14d)?_0x3e2c30=0x0:_0x505b06=_0x4d54f6[_0x4aaec9(0xd3)](_0x281796,_0x68f5ba):'IGONt'===_0x4aaec9(0x269)?_0x3e2c30=_0x3e2c30||this[_0x4aaec9(0x15c)]()['id']:_0xc4ba6d[_0x4aaec9(0x183)](_0x4e7f6e,_0x2aba16);this[_0x4aaec9(0x206)][_0x3e2c30]=this['_skillPoints'][_0x3e2c30]||0x0,this[_0x4aaec9(0x206)][_0x3e2c30]=Math[_0x4aaec9(0x2a4)](_0x387f62||0x0);const _0x22cae5=_0x535a7d[_0x4aaec9(0xf4)]||Number[_0x4aaec9(0x229)];this[_0x4aaec9(0x206)][_0x3e2c30]=this[_0x4aaec9(0x206)][_0x3e2c30][_0x4aaec9(0xd9)](0x0,_0x22cae5);},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x338)]=function(_0x2fcc8d,_0x37e4c8){const _0x5a4228=_0x58a4c3;_0x2fcc8d>0x0&&(_0x5a4228(0xcd)!=='XhNQh'?_0x2fcc8d*=this[_0x5a4228(0x2bc)]():_0x3cb65a=_0x29b517(_0x4a0aa6)),this[_0x5a4228(0x155)](_0x2fcc8d,_0x37e4c8);},Game_Actor['prototype'][_0x58a4c3(0x186)]=function(_0x1f7977){const _0x59078f=_0x58a4c3;if(!Imported['VisuMZ_2_ClassChangeSystem'])return;_0x1f7977>0x0&&(_0x1f7977*=this[_0x59078f(0x2bc)]()),this[_0x59078f(0x207)](_0x1f7977,_0x59078f(0x22f));},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x155)]=function(_0x3743a9,_0x429690){const _0x4c2a93=_0x58a4c3,_0x25a12f=VisuMZ['SkillLearnSystem'][_0x4c2a93(0x1c0)]['SkillPoints'];_0x25a12f[_0x4c2a93(0x95)]?_0x429690=0x0:_0x429690=_0x429690||this[_0x4c2a93(0x15c)]()['id'],_0x3743a9+=this['getSkillPoints'](_0x429690),this[_0x4c2a93(0x143)](_0x3743a9,_0x429690);},Game_Actor[_0x58a4c3(0x33d)]['loseSkillPoints']=function(_0x5e8fb6,_0x4d7850){const _0xd4f02d=_0x58a4c3;this[_0xd4f02d(0x155)](-_0x5e8fb6,_0x4d7850);},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x2bc)]=function(){const _0x1232c5=_0x58a4c3;return this['traitObjects']()[_0x1232c5(0x2e6)]((_0x5d1570,_0x130dc0)=>{const _0x219e8f=_0x1232c5;if('TMEiW'!==_0x219e8f(0x21e))this[_0x219e8f(0x2cf)]=_0x164c7b(_0x176844['$1']);else{if(_0x130dc0&&_0x130dc0[_0x219e8f(0x144)]['match'](VisuMZ['SkillLearnSystem']['RegExp']['SkillPointsRate'])){if(_0x219e8f(0x243)===_0x219e8f(0x15d)){const _0x305946=_0x5a5dc0(_0x541dc5['$1']),_0xd0186d={'id':0x0,'quantity':_0x3824f3(_0x4297d5['$2'])},_0xd85aa5=/^\d+$/[_0x219e8f(0x2a5)](_0x305946);_0xd85aa5?_0xd0186d['id']=_0x391922(_0x305946):_0xd0186d['id']=_0x50b365[_0x219e8f(0x19b)](_0x305946),_0xd0186d['id']>0x0&&_0x3f593c['push'](_0xd0186d);}else return _0x5d1570*(Number(RegExp['$1'])*0.01);}else return _0x5d1570;}},0x1);},Game_Actor[_0x58a4c3(0x33d)]['levelUpGainSkillPoints']=function(_0x4424c1){const _0x56db0d=_0x58a4c3;if(this[_0x56db0d(0x2b8)])return;const _0x5d85b6=VisuMZ['SkillLearnSystem'][_0x56db0d(0x1c0)][_0x56db0d(0x129)];let _0x416e2e=0x0;try{if(_0x56db0d(0x220)===_0x56db0d(0x23c)){const _0x3083f2=_0x53e0fc(_0x28a248['$1'])['split'](',')[_0x56db0d(0x15f)](_0x2553e5=>_0x2553e5[_0x56db0d(0x2c3)]());for(const _0x38ae17 of _0x3083f2){let _0x33f604=0x0;const _0x418691=/^\d+$/[_0x56db0d(0x2a5)](_0x38ae17);_0x418691?_0x33f604=_0x4ee0cf(_0x38ae17):_0x33f604=_0x146de2[_0x56db0d(0x21b)](_0x38ae17);if(!this['isLearnedSkill'](_0x33f604))return![];}}else _0x416e2e=eval(_0x5d85b6[_0x56db0d(0xe2)]);}catch(_0xc2eb5a){if('CtNoT'===_0x56db0d(0xd4))this[_0x56db0d(0x2b8)]=!![],_0x7cd53b[_0x56db0d(0x1df)]['Game_Actor_changeClass'][_0x56db0d(0x1ca)](this,_0x1805a2,_0x5b0969),this[_0x56db0d(0x2b8)]=_0x134c31;else{if($gameTemp[_0x56db0d(0x253)]())console[_0x56db0d(0x202)](_0xc2eb5a);}}this[_0x56db0d(0x338)](_0x416e2e,_0x4424c1);},Game_Actor['prototype'][_0x58a4c3(0xe0)]=function(){const _0x5726c7=_0x58a4c3;return this[_0x5726c7(0x359)]=this['_earnedSkillPoints']||0x0,this[_0x5726c7(0x2bd)]()-this['_earnedSkillPoints'];},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x250)]=function(_0x2c2a3d){const _0x337993=_0x58a4c3;if(!_0x2c2a3d)return![];const _0x1213b7=VisuMZ[_0x337993(0x1df)][_0x337993(0x1a3)](_0x2c2a3d,_0x337993(0x2d6));if(VisuMZ[_0x337993(0x1df)]['JS'][_0x1213b7]){if(!VisuMZ['SkillLearnSystem']['JS'][_0x1213b7][_0x337993(0x1ca)](this,this,_0x2c2a3d))return![];}const _0x457945=VisuMZ[_0x337993(0x1df)][_0x337993(0x29d)],_0x58ec9b=_0x2c2a3d[_0x337993(0x144)];if(_0x58ec9b[_0x337993(0x1e8)](_0x457945[_0x337993(0x234)])){const _0x32a7a3=Number(RegExp['$1']);if(_0x32a7a3>this['level'])return![];}if(_0x58ec9b[_0x337993(0x1e8)](_0x457945[_0x337993(0x320)])){const _0x5a1eff=String(RegExp['$1'])['split'](',')[_0x337993(0x15f)](_0x1075b3=>_0x1075b3['trim']());for(const _0x3d66fe of _0x5a1eff){let _0x5dedb2=0x0;const _0x1e6067=/^\d+$/['test'](_0x3d66fe);if(_0x1e6067){if(_0x337993(0x25b)==='CueNW')_0x5dedb2=Number(_0x3d66fe);else{const _0x1d18f1=_0x428863(_0x1fcbbb['$1'])[_0x337993(0x22c)](',')[_0x337993(0x15f)](_0x5260b7=>_0x2f6ac9(_0x5260b7));for(const _0x16ed3c of _0x1d18f1){if(!_0x5c5274[_0x337993(0x189)](_0x16ed3c))return![];}}}else _0x337993(0x27c)===_0x337993(0x27c)?_0x5dedb2=DataManager['getSkillIdWithName'](_0x3d66fe):this[_0x337993(0x2c0)]();if(!this[_0x337993(0x209)](_0x5dedb2))return![];}}if(_0x58ec9b['match'](_0x457945[_0x337993(0xbe)])){const _0x4202cb=String(RegExp['$1'])[_0x337993(0x22c)](',')[_0x337993(0x15f)](_0x1b45fb=>_0x1b45fb[_0x337993(0x2c3)]());let _0x2d6e53=![];for(const _0x3410da of _0x4202cb){let _0x5eda3a=0x0;const _0x3cfa2e=/^\d+$/[_0x337993(0x2a5)](_0x3410da);if(_0x3cfa2e){if(_0x337993(0x1cc)!==_0x337993(0x283))_0x5eda3a=Number(_0x3410da);else return _0x5eec31(_0x4b06c4[_0x337993(0x35c)]);}else _0x5eda3a=DataManager[_0x337993(0x21b)](_0x3410da);if(this[_0x337993(0x209)](_0x5eda3a)){_0x2d6e53=!![];break;}}if(!_0x2d6e53)return![];}if(_0x58ec9b[_0x337993(0x1e8)](_0x457945[_0x337993(0x24d)])){if(_0x337993(0x293)===_0x337993(0x293)){const _0x49352d=String(RegExp['$1'])['split'](',')['map'](_0x8ed42=>Number(_0x8ed42));for(const _0x3cac0c of _0x49352d){if(!$gameSwitches['value'](_0x3cac0c))return![];}}else _0x173e29['id']=_0x3f17fe(_0x22e2ee);}if(_0x58ec9b['match'](_0x457945['LearnReqSwitchesAny'])){const _0x16af36=String(RegExp['$1'])[_0x337993(0x22c)](',')[_0x337993(0x15f)](_0x139ff4=>Number(_0x139ff4));let _0x5d74c3=![];for(const _0x2d817b of _0x16af36){if($gameSwitches[_0x337993(0x189)](_0x2d817b)){_0x5d74c3=!![];break;}}if(!_0x5d74c3)return![];}return!![];},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x2da)]=function(_0x854a2b){const _0x258319=_0x58a4c3;if(!_0x854a2b)return![];const _0x1b9f54=DataManager[_0x258319(0x1e0)](_0x854a2b);if(_0x1b9f54>this[_0x258319(0x96)]())return![];const _0x3cbfd7=DataManager['getSkillLearnSkillPointCost'](_0x854a2b);if(_0x3cbfd7>this[_0x258319(0x2bd)]())return![];const _0x23e0a6=DataManager['getSkillLearnGoldCost'](_0x854a2b);if(_0x23e0a6>$gameParty[_0x258319(0xc7)]())return![];if(Imported[_0x258319(0x1c8)]){if(_0x258319(0x2b5)===_0x258319(0x2a3))this['learnSkill'](_0x1e25da['id']);else{const _0x1ac959=DataManager['getSkillLearnClassPointCost'](_0x854a2b);if(_0x1ac959>this[_0x258319(0x2ff)]())return![];const _0x5ef350=DataManager[_0x258319(0x151)](_0x854a2b);if(_0x5ef350>this[_0x258319(0xf6)]())return![];}}const _0x3e8041=DataManager['getSkillLearnItemCost'](_0x854a2b);for(const _0x51014e of _0x3e8041){if(!_0x51014e)continue;const _0x1ea568=$dataItems[_0x51014e['id']];if(_0x1ea568&&_0x51014e[_0x258319(0xe9)]>$gameParty[_0x258319(0x17c)](_0x1ea568))return![];}const _0x386b24=DataManager[_0x258319(0x358)](_0x854a2b);for(const _0x456608 of _0x386b24){if(!_0x456608)continue;const _0x481499=$dataWeapons[_0x456608['id']];if(_0x481499&&_0x456608[_0x258319(0xe9)]>$gameParty[_0x258319(0x17c)](_0x481499))return![];}const _0x47ab0f=DataManager[_0x258319(0x2ef)](_0x854a2b);for(const _0x251b50 of _0x47ab0f){if(!_0x251b50)continue;const _0x3cf394=$dataArmors[_0x251b50['id']];if(_0x3cf394&&_0x251b50[_0x258319(0xe9)]>$gameParty[_0x258319(0x17c)](_0x3cf394))return![];}return!![];},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x18a)]=function(_0x38c023){const _0x30279b=_0x58a4c3;if(!_0x38c023)return;const _0x4a1762=DataManager['getSkillLearnAbilityPointCost'](_0x38c023);this[_0x30279b(0x183)](_0x4a1762);const _0x4802cc=DataManager[_0x30279b(0x312)](_0x38c023);this[_0x30279b(0xd2)](_0x4802cc);const _0x4cd2f7=DataManager[_0x30279b(0xab)](_0x38c023);$gameParty[_0x30279b(0x24a)](_0x4cd2f7);if(Imported[_0x30279b(0x1c8)]){if(_0x30279b(0x16f)!==_0x30279b(0x30b)){const _0x518380=DataManager[_0x30279b(0x325)](_0x38c023);this[_0x30279b(0x105)](_0x518380);const _0xcf243a=DataManager[_0x30279b(0x151)](_0x38c023);this[_0x30279b(0x1e1)](_0xcf243a);}else return this['traitObjects']()[_0x30279b(0x2e6)]((_0x2546b2,_0x22474c)=>{const _0x130cb2=_0x30279b;return _0x22474c&&_0x22474c['note'][_0x130cb2(0x1e8)](_0x1cfc02[_0x130cb2(0x1df)][_0x130cb2(0x29d)][_0x130cb2(0x1f1)])?_0x2546b2*(_0x320089(_0x407f17['$1'])*0.01):_0x2546b2;},0x1);}const _0x44fa86=DataManager[_0x30279b(0x20a)](_0x38c023);for(const _0x6387b1 of _0x44fa86){if(_0x30279b(0x116)===_0x30279b(0x116)){if(!_0x6387b1)continue;const _0x1e7b46=$dataItems[_0x6387b1['id']],_0xd069d5=_0x6387b1[_0x30279b(0xe9)];$gameParty[_0x30279b(0x13c)](_0x1e7b46,_0xd069d5);}else{const _0x3503e4=_0x14486e[_0x30279b(0x144)];if(_0x3503e4[_0x30279b(0x1e8)](_0x37876a)){const _0x520277=_0x2eec10(_0x2be55['$1']),_0x59bd4a='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Visible\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x30279b(0x25e)](_0x520277),_0x56cc53=_0x593705['SkillLearnSystem'][_0x30279b(0x1a3)](_0x4202e4,_0x19e717);_0x223513['SkillLearnSystem']['JS'][_0x56cc53]=new _0x113df5(_0x59bd4a);}}}const _0xeb14ec=DataManager[_0x30279b(0x358)](_0x38c023);for(const _0x1ccf3c of _0xeb14ec){if(_0x30279b(0x174)===_0x30279b(0x174)){if(!_0x1ccf3c)continue;const _0x4d18d0=$dataWeapons[_0x1ccf3c['id']],_0x2218fe=_0x1ccf3c['quantity'];$gameParty['loseItem'](_0x4d18d0,_0x2218fe);}else _0xdd9df3=0x0;}const _0xd6006c=DataManager[_0x30279b(0x2ef)](_0x38c023);for(const _0x5ad039 of _0xd6006c){if(!_0x5ad039)continue;const _0x16b3a6=$dataArmors[_0x5ad039['id']],_0x238292=_0x5ad039['quantity'];$gameParty[_0x30279b(0x13c)](_0x16b3a6,_0x238292);}if(DataManager[_0x30279b(0x2a6)](_0x38c023))this[_0x30279b(0xf7)](_0x38c023['id']);else DataManager[_0x30279b(0x2db)](_0x38c023)&&Imported[_0x30279b(0x225)]&&this[_0x30279b(0x2e4)](_0x38c023,!![]);this[_0x30279b(0x2de)]();},VisuMZ['SkillLearnSystem']['Game_Actor_learnSkill']=Game_Actor['prototype'][_0x58a4c3(0xf7)],Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0xf7)]=function(_0x1b761f){const _0x53a2c6=_0x58a4c3,_0x243388=!this[_0x53a2c6(0x209)](_0x1b761f);VisuMZ[_0x53a2c6(0x1df)][_0x53a2c6(0x20e)][_0x53a2c6(0x1ca)](this,_0x1b761f);if(_0x243388&&this[_0x53a2c6(0x209)](_0x1b761f)){if(_0x53a2c6(0x2af)!==_0x53a2c6(0x317)){const _0x25e2ec=$dataSkills[_0x1b761f],_0x517bcd=VisuMZ['SkillLearnSystem'][_0x53a2c6(0x1a3)](_0x25e2ec,_0x53a2c6(0x1bc));if(VisuMZ[_0x53a2c6(0x1df)]['JS'][_0x517bcd]){if(_0x53a2c6(0x302)!=='IdiSm'){let _0x2b8fc1=_0x31c9fc['skillLearnCmd'];if(_0x2b8fc1['match'](/\\I\[(\d+)\]/i))return _0x2b8fc1;if(!_0x3b4b4c[_0x53a2c6(0x12d)])return _0x2b8fc1;if(this['commandStyle']()===_0x53a2c6(0x357))return _0x2b8fc1;const _0x108eda=_0x41cc13[_0x53a2c6(0xdd)];return _0x53a2c6(0x104)['format'](_0x108eda,_0x2b8fc1);}else VisuMZ[_0x53a2c6(0x1df)]['JS'][_0x517bcd]['call'](this,this,_0x25e2ec);}}else{if(_0x36f644[_0x53a2c6(0x1e8)](/GOLD:[ ](\d+)/gi))return _0x28dde2(_0x47d641['$1']);}}},Game_Actor[_0x58a4c3(0x33d)][_0x58a4c3(0x236)]=function(){const _0x204ec5=_0x58a4c3,_0xedc8fe=DataManager[_0x204ec5(0x330)](this[_0x204ec5(0x15c)]()['id']);for(const _0x322230 of _0xedc8fe){const _0x3fdf43=$dataSkills[_0x322230];if(!_0x3fdf43)continue;if(_0x3fdf43[_0x204ec5(0x196)][_0x204ec5(0x2c3)]()==='')continue;if(_0x3fdf43[_0x204ec5(0x196)]['match'](/-----/i))continue;this[_0x204ec5(0xf7)](_0x322230);}},Game_Enemy[_0x58a4c3(0x33d)]['abilityPoints']=function(){const _0xcc3d79=_0x58a4c3,_0x16e88c=VisuMZ['SkillLearnSystem'][_0xcc3d79(0x1c0)][_0xcc3d79(0x278)],_0x181d41=VisuMZ[_0xcc3d79(0x1df)][_0xcc3d79(0x29d)],_0x5c4dcb=this['enemy']()[_0xcc3d79(0x144)];if(_0x5c4dcb[_0xcc3d79(0x1e8)](_0x181d41[_0xcc3d79(0x124)])){if('nMjTY'===_0xcc3d79(0x2f1))_0x293d01=_0x34917f;else try{return eval(RegExp['$1']);}catch(_0x26dedb){if($gameTemp[_0xcc3d79(0x253)]())console[_0xcc3d79(0x202)](_0x26dedb);return 0x0;}}try{if(_0xcc3d79(0x16a)!=='Ltbed')return eval(_0x16e88c[_0xcc3d79(0x35c)]);else{const _0x1f8af7=_0x2ee46d[_0xcc3d79(0x14c)][_0x42968f],_0x1363ee=_0x47a0fd[_0xcc3d79(0x189)](_0x245778)?_0x709558:_0x3cfc11;_0x4cb63a+=_0x1363ee[_0xcc3d79(0x25e)](_0x1f8af7)+'\x0a';}}catch(_0x400831){if(_0xcc3d79(0x100)!==_0xcc3d79(0x100))return _0xbb8f79[_0xcc3d79(0x1b5)];else{if($gameTemp[_0xcc3d79(0x253)]())console[_0xcc3d79(0x202)](_0x400831);return 0x0;}}},Game_Enemy['prototype']['skillPoints']=function(){const _0x4161f1=_0x58a4c3,_0x56d40e=VisuMZ[_0x4161f1(0x1df)][_0x4161f1(0x1c0)][_0x4161f1(0x129)],_0x3b4b2e=VisuMZ['SkillLearnSystem'][_0x4161f1(0x29d)],_0x2a901d=this['enemy']()['note'];if(_0x2a901d['match'](_0x3b4b2e[_0x4161f1(0x35a)]))try{if(_0x4161f1(0x1ef)==='IIVPv')return eval(RegExp['$1']);else{const _0x15bb29=_0x49c3d4(_0x350beb['$1'])[_0x4161f1(0x22c)](/[\r\n]+/);for(const _0x1b346a of _0x15bb29){if(_0x1b346a[_0x4161f1(0x1e8)](/(?:ABILITY POINTS|AP):[ ](\d+)/gi))return _0x1fbef6(_0x5f0ee6['$1']);}}}catch(_0x31c2cb){if(_0x4161f1(0x248)!==_0x4161f1(0x248))try{return _0x25a707(_0xf1ad20['$1']);}catch(_0x5e404b){if(_0x2ec44a[_0x4161f1(0x253)]())_0x3f2ef8[_0x4161f1(0x202)](_0x5e404b);return 0x0;}else{if($gameTemp[_0x4161f1(0x253)]())console[_0x4161f1(0x202)](_0x31c2cb);return 0x0;}}try{if(_0x4161f1(0x276)===_0x4161f1(0x276))return eval(_0x56d40e[_0x4161f1(0x35c)]);else this[_0x4161f1(0x2cf)]=_0x132636(_0x31c222['$1']);}catch(_0x2baf5f){if($gameTemp[_0x4161f1(0x253)]())console[_0x4161f1(0x202)](_0x2baf5f);return 0x0;}},VisuMZ[_0x58a4c3(0x1df)]['Game_Party_setupBattleTestMembers']=Game_Party[_0x58a4c3(0x33d)][_0x58a4c3(0x2a1)],Game_Party[_0x58a4c3(0x33d)][_0x58a4c3(0x2a1)]=function(){const _0x27e84f=_0x58a4c3;VisuMZ[_0x27e84f(0x1df)]['Game_Party_setupBattleTestMembers']['call'](this),this[_0x27e84f(0x10e)]();},Game_Party[_0x58a4c3(0x33d)][_0x58a4c3(0x10e)]=function(){const _0xbb97ad=_0x58a4c3;for(const _0x141962 of this['allMembers']()){if(!_0x141962)continue;_0x141962[_0xbb97ad(0x236)]();}},Game_Troop['prototype'][_0x58a4c3(0x222)]=function(){const _0x552b1c=_0x58a4c3;return this[_0x552b1c(0xee)]()[_0x552b1c(0x2e6)]((_0x292c67,_0x4f2bef)=>_0x292c67+_0x4f2bef[_0x552b1c(0x275)](),0x0);},Game_Troop[_0x58a4c3(0x33d)][_0x58a4c3(0x232)]=function(){const _0x40f130=_0x58a4c3;return this[_0x40f130(0xee)]()[_0x40f130(0x2e6)]((_0x286f56,_0x33b014)=>_0x286f56+_0x33b014[_0x40f130(0x12a)](),0x0);},VisuMZ['SkillLearnSystem']['Scene_Skill_create']=Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x1d9)],Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x1d9)]=function(){const _0x2caa7e=_0x58a4c3;VisuMZ[_0x2caa7e(0x1df)]['Scene_Skill_create'][_0x2caa7e(0x1ca)](this),this[_0x2caa7e(0xca)]();},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0xca)]=function(){const _0x597fa8=_0x58a4c3;this[_0x597fa8(0x305)](),this['createSkillLearnConfirmWindow']();},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x305)]=function(){const _0xe4dfee=_0x58a4c3,_0x4b457a=this[_0xe4dfee(0x29e)]();this[_0xe4dfee(0x2cb)]=new Window_SkillLearnIngredients(_0x4b457a),this[_0xe4dfee(0x101)](this[_0xe4dfee(0x2cb)]),this['_skillLearnIngredientsWindow']['hide']();const _0x32ed44=VisuMZ[_0xe4dfee(0x1df)]['Settings']['Window']['DetailWindow_BgType'];this[_0xe4dfee(0x2cb)][_0xe4dfee(0x22a)](_0x32ed44);},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x29e)]=function(){const _0xf23089=_0x58a4c3;if(VisuMZ[_0xf23089(0x1df)][_0xf23089(0x1c0)][_0xf23089(0x23b)]['DetailWindow_RectJS'])return _0xf23089(0x198)==='pXxDQ'?_0xff33ca&&_0x465d4d[_0xf23089(0x144)][_0xf23089(0x1e8)](_0x2f1f90['SkillLearnSystem'][_0xf23089(0x29d)][_0xf23089(0x1f1)])?_0x532437*(_0x4b156a(_0x55ccf8['$1'])*0.01):_0xcbd477:VisuMZ[_0xf23089(0x1df)][_0xf23089(0x1c0)][_0xf23089(0x23b)][_0xf23089(0x306)]['call'](this);const _0xf2f4d9=this[_0xf23089(0x241)](),_0x30a487=_0xf2f4d9['x'],_0x530bf8=_0xf2f4d9['y'],_0x4d55a5=_0xf2f4d9[_0xf23089(0x13a)],_0x1ae0b9=_0xf2f4d9[_0xf23089(0x132)]-this[_0xf23089(0x131)](0x2,![]);return new Rectangle(_0x30a487,_0x530bf8,_0x4d55a5,_0x1ae0b9);},Scene_Skill['prototype']['createSkillLearnConfirmWindow']=function(){const _0x113c76=_0x58a4c3,_0x44b0be=this[_0x113c76(0x112)]();this[_0x113c76(0xa7)]=new Window_SkillLearnConfirm(_0x44b0be),this['addWindow'](this[_0x113c76(0xa7)]),this[_0x113c76(0xa7)]['setHandler']('ok',this[_0x113c76(0x21d)][_0x113c76(0x1d3)](this)),this['_skillLearnConfirmWindow']['setHandler'](_0x113c76(0xa3),this['onSkillLearnConfirmCancel'][_0x113c76(0x1d3)](this)),this[_0x113c76(0xa7)]['hide']();const _0x38548f=VisuMZ[_0x113c76(0x1df)][_0x113c76(0x1c0)][_0x113c76(0x23b)]['ConfirmWindow_BgType'];this[_0x113c76(0xa7)][_0x113c76(0x22a)](_0x38548f);},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x112)]=function(){const _0x1bfe38=_0x58a4c3;if(VisuMZ[_0x1bfe38(0x1df)][_0x1bfe38(0x1c0)][_0x1bfe38(0x23b)][_0x1bfe38(0x2be)])return _0x1bfe38(0x331)!==_0x1bfe38(0x1ad)?VisuMZ['SkillLearnSystem'][_0x1bfe38(0x1c0)]['Window'][_0x1bfe38(0x2be)][_0x1bfe38(0x1ca)](this):(this['_earnedSkillPoints']=this[_0x1bfe38(0x359)]||0x0,this[_0x1bfe38(0x2bd)]()-this[_0x1bfe38(0x359)]);const _0x43ca28=this[_0x1bfe38(0x241)](),_0xc33144=_0x43ca28['width'],_0x14dbb1=this[_0x1bfe38(0x131)](0x2,![]),_0x365eea=_0x43ca28['x'],_0x7d0504=_0x43ca28['y']+_0x43ca28[_0x1bfe38(0x132)]-_0x14dbb1;return new Rectangle(_0x365eea,_0x7d0504,_0xc33144,_0x14dbb1);},VisuMZ['SkillLearnSystem'][_0x58a4c3(0x153)]=Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x246)],Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x246)]=function(){const _0x28fe26=_0x58a4c3;this[_0x28fe26(0x26d)]['isSkillLearnMode']()?this['onSkillLearnItemOk']():VisuMZ[_0x28fe26(0x1df)][_0x28fe26(0x153)][_0x28fe26(0x1ca)](this);},Scene_Skill[_0x58a4c3(0x33d)]['onSkillLearnItemOk']=function(){const _0x10e649=_0x58a4c3;this[_0x10e649(0x26d)][_0x10e649(0x162)](),this[_0x10e649(0x2cb)][_0x10e649(0x292)](),this[_0x10e649(0x2cb)][_0x10e649(0x2de)](),this[_0x10e649(0xa7)][_0x10e649(0x292)](),this[_0x10e649(0xa7)][_0x10e649(0x2de)](),this[_0x10e649(0xa7)]['activate'](),this['_skillLearnConfirmWindow'][_0x10e649(0x33b)](0x0);},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x21d)]=function(){const _0x246532=_0x58a4c3;if(VisuMZ['SkillLearnSystem'][_0x246532(0x1c0)]['Animation']['ShowAnimations']){if(_0x246532(0xc2)==='IwUNG'){const _0x4aeefe=_0xa997f4(_0x3a6339['$1']),_0x530707=_0x4625d7[_0x246532(0x294)]['format'](_0x4aeefe,_0xa7970c['level'],_0x3d3e69[_0x246532(0x28f)]),_0x7cbf56=_0x592da1[_0x246532(0x32f)]>=_0x4aeefe?_0x1693c2:_0x1bfc17;_0xe301d7+=_0x7cbf56[_0x246532(0x25e)](_0x530707)+'\x0a';}else this['startSkillLearnAnimation']();}else{if(_0x246532(0xfe)!==_0x246532(0x34e))this[_0x246532(0x270)]();else{const _0x8f60ed=_0x4c8b0f(_0x1f515e['$1']),_0x58f894='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20cost\x20=\x200;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Cost\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20cost;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x246532(0x25e)](_0x8f60ed),_0x4a013b=_0x115afe[_0x246532(0x1df)][_0x246532(0x1a3)](_0x11d0a6,_0x2d8506);_0x15222e['SkillLearnSystem']['JS'][_0x4a013b]=new _0x36d667(_0x58f894);}}},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x23d)]=function(){const _0x5e9ffb=_0x58a4c3;this[_0x5e9ffb(0x26d)][_0x5e9ffb(0x292)](),this[_0x5e9ffb(0x26d)]['activate'](),this[_0x5e9ffb(0x2cb)][_0x5e9ffb(0x162)](),this['_skillLearnConfirmWindow'][_0x5e9ffb(0x162)]();},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x270)]=function(){const _0xa13847=_0x58a4c3;this[_0xa13847(0x31c)][_0xa13847(0x1b3)]=!![],this[_0xa13847(0x27d)]=![],SoundManager[_0xa13847(0x290)](),this[_0xa13847(0x218)]()[_0xa13847(0x18a)](this[_0xa13847(0x233)]()),this['onSkillLearnConfirmCancel'](),this[_0xa13847(0x26d)][_0xa13847(0x2de)](),this[_0xa13847(0x1ed)][_0xa13847(0x2de)]();},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x133)]=Scene_Skill[_0x58a4c3(0x33d)]['update'],Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x19c)]=function(){const _0x5aa1f5=_0x58a4c3;VisuMZ['SkillLearnSystem'][_0x5aa1f5(0x133)]['call'](this),this[_0x5aa1f5(0x286)]();},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0xe3)]=function(){const _0x33e13c=_0x58a4c3;this[_0x33e13c(0x27d)]=!![],this[_0x33e13c(0x9b)]=0x14,this[_0x33e13c(0x31c)][_0x33e13c(0x1b3)]=VisuMZ['SkillLearnSystem']['Settings']['Animation'][_0x33e13c(0xac)]||![],this['createSkillLearnSkillSprite']();},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x188)]=function(){const _0x1d2871=_0x58a4c3;this['_skillLearnIconSprite']=new Sprite(),this['addChild'](this['_skillLearnIconSprite']),this[_0x1d2871(0x265)](),this[_0x1d2871(0xfa)](),this[_0x1d2871(0x230)](),this['setSkillLearnSkillSpriteOpacity'](),this['createSkillLearnAnimationIDs'](),this[_0x1d2871(0x1a0)](this[_0x1d2871(0x2f3)][_0x1d2871(0x274)]());},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x265)]=function(){const _0x3e7050=_0x58a4c3,_0x3c50a2=VisuMZ[_0x3e7050(0x1df)][_0x3e7050(0x29d)],_0x1e2cd1=this[_0x3e7050(0x233)]()['note'];this[_0x3e7050(0x2cf)]='';if(_0x1e2cd1[_0x3e7050(0x1e8)](_0x3c50a2[_0x3e7050(0x327)])){if(_0x3e7050(0x2b3)===_0x3e7050(0x2a9))return this[_0x3e7050(0x1da)]()[_0x3e7050(0x2e6)]((_0x5ff667,_0x3d0a01)=>{const _0x139210=_0x3e7050;return _0x3d0a01&&_0x3d0a01[_0x139210(0x144)][_0x139210(0x1e8)](_0x33c66d[_0x139210(0x1df)][_0x139210(0x29d)][_0x139210(0x17e)])?_0x5ff667*(_0x12c9d6(_0x31e11b['$1'])*0.01):_0x5ff667;},0x1);else this[_0x3e7050(0x2cf)]=String(RegExp['$1']);}else _0x1e2cd1[_0x3e7050(0x1e8)](_0x3c50a2['bigPicture'])&&(_0x3e7050(0x29f)!=='qBBct'?_0x16e638=_0x59e0ac(_0x5d95cb):this[_0x3e7050(0x2cf)]=String(RegExp['$1']));this[_0x3e7050(0xb2)]=new Sprite();if(this[_0x3e7050(0x2cf)]){if(_0x3e7050(0x345)!==_0x3e7050(0x345))return _0x252ab7(_0x3af14a['$1']);else this['_skillLearnBitmapSprite']['bitmap']=ImageManager[_0x3e7050(0x303)](this[_0x3e7050(0x2cf)]);}else this[_0x3e7050(0xb2)][_0x3e7050(0x2c9)]=ImageManager[_0x3e7050(0x180)]('IconSet'),this[_0x3e7050(0xb2)][_0x3e7050(0x2c9)]['smooth']=![];this[_0x3e7050(0xb2)]['anchor']['x']=0.5,this[_0x3e7050(0xb2)][_0x3e7050(0x161)]['y']=0.5;if(!this[_0x3e7050(0x2cf)]){const _0x4b07ce=VisuMZ[_0x3e7050(0x1df)][_0x3e7050(0x1c0)][_0x3e7050(0x31e)]['Scale']||0x8;this[_0x3e7050(0xb2)][_0x3e7050(0x98)]['x']=_0x4b07ce,this[_0x3e7050(0xb2)]['scale']['y']=_0x4b07ce;}this['_skillLearnIconSprite'][_0x3e7050(0xad)](this[_0x3e7050(0xb2)]);},Scene_Skill['prototype'][_0x58a4c3(0xfa)]=function(){const _0x451b74=_0x58a4c3;if(this['_learnPicture'])return;const _0x52ba0e=this[_0x451b74(0x233)](),_0x204ce6=_0x52ba0e[_0x451b74(0xdf)],_0x4e00e0=ImageManager['iconWidth'],_0x4081dc=ImageManager[_0x451b74(0x139)],_0x141607=_0x204ce6%0x10*_0x4e00e0,_0x44c314=Math[_0x451b74(0x1e7)](_0x204ce6/0x10)*_0x4081dc;this[_0x451b74(0xb2)][_0x451b74(0x17f)](_0x141607,_0x44c314,_0x4e00e0,_0x4081dc);},Scene_Skill['prototype']['setSkillLearnSkillSpritePosition']=function(){const _0x2f74d2=_0x58a4c3;this[_0x2f74d2(0x1d1)]['x']=Math[_0x2f74d2(0x2a4)](Graphics[_0x2f74d2(0x13a)]/0x2);const _0x2c34ab=Math[_0x2f74d2(0x2a4)](ImageManager[_0x2f74d2(0x139)]*this['_skillLearnIconSprite']['scale']['y']);this[_0x2f74d2(0x1d1)]['y']=Math[_0x2f74d2(0x2a4)]((Graphics[_0x2f74d2(0x132)]+_0x2c34ab)/0x2);},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x191)]=function(){const _0x5c7be8=_0x58a4c3;this[_0x5c7be8(0xeb)]=VisuMZ[_0x5c7be8(0x1df)]['Settings']['Animation'][_0x5c7be8(0x1b8)]||0x1,this[_0x5c7be8(0x233)]()[_0x5c7be8(0x144)][_0x5c7be8(0x1e8)](VisuMZ['SkillLearnSystem']['RegExp'][_0x5c7be8(0x24b)])&&(this[_0x5c7be8(0xeb)]=Math[_0x5c7be8(0xd3)](Number(RegExp['$1']),0x1)),this['_skillLearnIconSprite']['opacity']=0x0;},Scene_Skill[_0x58a4c3(0x33d)]['createSkillLearnAnimationIDs']=function(){const _0x424640=_0x58a4c3;this[_0x424640(0x2f3)]=[],this['item']()[_0x424640(0x144)][_0x424640(0x1e8)](VisuMZ[_0x424640(0x1df)][_0x424640(0x29d)][_0x424640(0x231)])?this['_skillLearnAnimationIDs']=RegExp['$1']['split'](',')[_0x424640(0x15f)](_0x2f04f=>Number(_0x2f04f)):this[_0x424640(0x2f3)]=this[_0x424640(0x2f3)][_0x424640(0x13d)](VisuMZ[_0x424640(0x1df)][_0x424640(0x1c0)][_0x424640(0x31e)][_0x424640(0x1a2)]);},Scene_Skill[_0x58a4c3(0x33d)]['createSkillLearnAnimation']=function(_0x19e4be){const _0xb63262=_0x58a4c3,_0x1e29a0=$dataAnimations[_0x19e4be];if(!_0x1e29a0)return;const _0x257355=this[_0xb63262(0x1cb)](_0x1e29a0);this[_0xb63262(0x122)]=new(_0x257355?Sprite_AnimationMV:Sprite_Animation)();const _0x3edee9=[this[_0xb63262(0x1d1)]],_0x28aad0=0x0;this[_0xb63262(0x122)]['setup'](_0x3edee9,_0x1e29a0,![],_0x28aad0,null),this['addChild'](this['_skillLearnAnimationSprite']);},Scene_Skill['prototype'][_0x58a4c3(0x1cb)]=function(_0x41fc29){const _0x113a9e=_0x58a4c3;return!!_0x41fc29[_0x113a9e(0x135)];},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x286)]=function(){const _0x2428e1=_0x58a4c3;if(!this[_0x2428e1(0x27d)])return;this['updateSkillLearnSpriteOpacity'](),this['updateSkillLearnAnimationSprite']();if(this[_0x2428e1(0x1c4)]()){if(_0x2428e1(0x2b1)!==_0x2428e1(0x170))this['processFinishSkillLearnAnimation']();else return this['_earnedAbilityPoints']=this[_0x2428e1(0x167)]||0x0,this['getAbilityPoints']()-this[_0x2428e1(0x167)];}},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x2f6)]=function(){const _0x427228=_0x58a4c3;this[_0x427228(0x1d1)][_0x427228(0x2ed)]+=this[_0x427228(0xeb)];},Scene_Skill[_0x58a4c3(0x33d)]['updateSkillLearnAnimationSprite']=function(){const _0x24b269=_0x58a4c3;if(!this[_0x24b269(0x122)])return;if(this[_0x24b269(0x122)][_0x24b269(0x11b)]())return;this[_0x24b269(0x199)](),this[_0x24b269(0x1a0)](this[_0x24b269(0x2f3)][_0x24b269(0x274)]());},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x199)]=function(){const _0x440eab=_0x58a4c3;if(!this[_0x440eab(0x122)])return;this[_0x440eab(0x16d)](this[_0x440eab(0x122)]),this[_0x440eab(0x122)][_0x440eab(0x2fa)](),this['_skillLearnAnimationSprite']=undefined;},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0xec)]=function(){const _0x32f16d=_0x58a4c3;if(!this[_0x32f16d(0x1d1)])return;this[_0x32f16d(0x16d)](this['_skillLearnIconSprite']),this['_skillLearnIconSprite'][_0x32f16d(0x2fa)](),this[_0x32f16d(0x1d1)]=undefined;},Scene_Skill[_0x58a4c3(0x33d)]['isFinishedSkillLearnAnimating']=function(){const _0x312cfe=_0x58a4c3;if(TouchInput[_0x312cfe(0x2f7)]())return!![];if(Input[_0x312cfe(0x1e9)]('ok'))return!![];if(Input[_0x312cfe(0x1e9)]('cancel'))return!![];if(this[_0x312cfe(0x1d1)][_0x312cfe(0x2ed)]<0xff)return![];if(this[_0x312cfe(0x122)])return![];return this['_skillLearnAnimationWait']--<=0x0;},Scene_Skill[_0x58a4c3(0x33d)][_0x58a4c3(0x2c0)]=function(){const _0x37a27a=_0x58a4c3;this['destroySkillLearnAnimationSprite'](),this[_0x37a27a(0xec)](),this[_0x37a27a(0x270)](),TouchInput[_0x37a27a(0x19e)](),Input[_0x37a27a(0x19e)]();},Window_Base[_0x58a4c3(0x33d)][_0x58a4c3(0xbf)]=function(_0x2f7eeb,_0x1357ce,_0x3e6f78,_0x700858,_0x41dc99){const _0x194ef2=_0x58a4c3;_0x41dc99=_0x41dc99||'left';const _0x184445=_0x194ef2(0x2a8)[_0x194ef2(0x25e)](ImageManager['abilityPointsIcon']),_0x22c1ed=TextManager[_0x194ef2(0x1cf)],_0x5b28bd=_0x22c1ed[_0x194ef2(0x25e)](_0x2f7eeb,TextManager[_0x194ef2(0x24c)],_0x184445,TextManager[_0x194ef2(0x304)]),_0x1633fa=this[_0x194ef2(0x197)](_0x5b28bd)['width'];if(_0x41dc99==='left')_0x1357ce+=0x0;else _0x41dc99===_0x194ef2(0x34b)?_0x1357ce+=Math[_0x194ef2(0x2a4)]((_0x700858-_0x1633fa)/0x2):_0x1357ce+=_0x700858-_0x1633fa;this[_0x194ef2(0xd6)](_0x5b28bd,_0x1357ce,_0x3e6f78);},Window_Base[_0x58a4c3(0x33d)][_0x58a4c3(0x141)]=function(_0x11ee86,_0x3e7e62,_0x4f0d4e,_0x33d34e,_0xb8442a,_0xe9b570){const _0x5ce49e=_0x58a4c3,_0x2acb54=_0x11ee86[_0x5ce49e(0x96)](_0x3e7e62);this[_0x5ce49e(0xbf)](_0x2acb54,_0x4f0d4e,_0x33d34e,_0xb8442a,_0xe9b570);},Window_Base[_0x58a4c3(0x33d)][_0x58a4c3(0x2a0)]=function(_0x39d45b,_0x495158,_0x1a0e74,_0x29b8eb,_0x410009){const _0x51433c=_0x58a4c3;_0x410009=_0x410009||_0x51433c(0x1c5);const _0x50dee3='\x5cI[%1]'['format'](ImageManager[_0x51433c(0x214)]),_0x297859=TextManager[_0x51433c(0x182)],_0x432bbf=_0x297859[_0x51433c(0x25e)](_0x39d45b,TextManager['skillPointsAbbr'],_0x50dee3,TextManager[_0x51433c(0x1f2)]),_0x4e29d0=this[_0x51433c(0x197)](_0x432bbf)[_0x51433c(0x13a)];if(_0x410009===_0x51433c(0x1c5))_0x495158+=0x0;else _0x410009===_0x51433c(0x34b)?_0x495158+=Math[_0x51433c(0x2a4)]((_0x29b8eb-_0x4e29d0)/0x2):_0x51433c(0x181)!==_0x51433c(0x205)?_0x495158+=_0x29b8eb-_0x4e29d0:_0x3c1e7f=_0x5ace18[_0x51433c(0x15e)](_0x52fe03);this[_0x51433c(0xd6)](_0x432bbf,_0x495158,_0x1a0e74);},Window_Base[_0x58a4c3(0x33d)]['drawActorSkillPoints']=function(_0x21eb1d,_0x33c182,_0x24393a,_0x248477,_0xbdec96,_0x5bd042){const _0x110d35=_0x58a4c3,_0xbfb11c=_0x21eb1d[_0x110d35(0x2bd)](_0x33c182);this['drawSkillPoints'](_0xbfb11c,_0x24393a,_0x248477,_0xbdec96,_0x5bd042);},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0xff)]=Window_SkillType['prototype'][_0x58a4c3(0x268)],Window_SkillType[_0x58a4c3(0x33d)][_0x58a4c3(0x268)]=function(){const _0x133be0=_0x58a4c3;VisuMZ[_0x133be0(0x1df)][_0x133be0(0xff)]['call'](this),this[_0x133be0(0x2c7)]();},Window_SkillType[_0x58a4c3(0x33d)][_0x58a4c3(0x2c7)]=function(){const _0x5c056b=_0x58a4c3;if(!$gameSystem[_0x5c056b(0x18d)]())return;if(!this[_0x5c056b(0x20f)])return;let _0x32d8e0=this['skillLearnSystemCommandName']();const _0x4759b4=this[_0x5c056b(0x20f)][_0x5c056b(0x343)]()[0x0];this[_0x5c056b(0x2b9)](_0x32d8e0,_0x5c056b(0x117),!![],_0x5c056b(0x115));},Window_SkillType[_0x58a4c3(0x33d)]['skillLearnSystemCommandName']=function(){const _0x25d758=_0x58a4c3;let _0x199792=TextManager[_0x25d758(0x28e)];if(_0x199792[_0x25d758(0x1e8)](/\\I\[(\d+)\]/i))return _0x199792;if(!Imported['VisuMZ_1_SkillsStatesCore'])return _0x199792;if(this[_0x25d758(0x288)]()==='text')return _0x199792;const _0x1ca981=TextManager[_0x25d758(0xdd)];return'\x5cI[%1]%2'['format'](_0x1ca981,_0x199792);},VisuMZ[_0x58a4c3(0x1df)]['Window_SkillStatus_refresh']=Window_SkillStatus['prototype'][_0x58a4c3(0x2de)],Window_SkillStatus[_0x58a4c3(0x33d)][_0x58a4c3(0x2de)]=function(){const _0x5aa142=_0x58a4c3;this[_0x5aa142(0x29a)]();if(this[_0x5aa142(0x26b)]()){if(_0x5aa142(0xe4)===_0x5aa142(0xe4))this[_0x5aa142(0x2c5)]();else{const _0x28026f=_0x191e4b(_0x1f12c2['$1']),_0x3e76c3=_0x5aa142(0x356)[_0x5aa142(0x25e)](_0x28026f),_0x17573d=_0x4fc6d3[_0x5aa142(0x1df)][_0x5aa142(0x1a3)](_0x185f81,_0x52cee2);_0x44d381['SkillLearnSystem']['JS'][_0x17573d]=new _0x238c77(_0x3e76c3);}}else VisuMZ[_0x5aa142(0x1df)][_0x5aa142(0x217)]['call'](this);},Window_SkillStatus[_0x58a4c3(0x33d)][_0x58a4c3(0x26b)]=function(){const _0x49694a=_0x58a4c3,_0x57d24e=SceneManager[_0x49694a(0x1bb)];if(!_0x57d24e)return![];const _0x2efac0=_0x57d24e[_0x49694a(0x26d)];if(!_0x2efac0)return![];return _0x2efac0[_0x49694a(0x26b)]&&_0x2efac0[_0x49694a(0x26b)]();},Window_SkillStatus['prototype'][_0x58a4c3(0x2c5)]=function(){const _0x24583d=_0x58a4c3;if(!this[_0x24583d(0x20f)])return;Window_StatusBase[_0x24583d(0x33d)][_0x24583d(0x2de)][_0x24583d(0x1ca)](this);if(VisuMZ['SkillLearnSystem'][_0x24583d(0x1c0)]['General'][_0x24583d(0x9f)]){VisuMZ['SkillLearnSystem']['Settings'][_0x24583d(0x1ae)][_0x24583d(0x9f)]['call'](this);return;}const _0x533a51=this[_0x24583d(0x192)]()/0x2,_0x5b296a=this[_0x24583d(0x1b2)],_0x46230d=_0x5b296a/0x2-this[_0x24583d(0x9d)]()*1.5;this[_0x24583d(0x134)](this[_0x24583d(0x20f)],_0x533a51+0x1,0x0,0x90,_0x5b296a),this[_0x24583d(0x179)](this[_0x24583d(0x20f)],_0x533a51+0xb4,_0x46230d);let _0x12b145=this[_0x24583d(0x192)]()/0x2+0xb4+0xb4+0xb4,_0xd25145=this[_0x24583d(0x164)]-_0x12b145-0x2;if(_0xd25145<0x12c)return;const _0x262e96=this[_0x24583d(0x349)](),_0x3ca803=Math[_0x24583d(0x1e7)](this['innerHeight']/this[_0x24583d(0x9d)]()),_0x18ad1f=Math['ceil'](_0x262e96[_0x24583d(0xaa)]/_0x3ca803);let _0x1aadd7=_0x12b145,_0x4774af=Math[_0x24583d(0xd3)](Math['round']((this[_0x24583d(0x1b2)]-this[_0x24583d(0x9d)]()*Math[_0x24583d(0x211)](_0x262e96['length']/_0x18ad1f))/0x2),0x0);const _0x1c8251=_0x4774af;let _0x5d331f=(this['innerWidth']-_0x1aadd7-this[_0x24583d(0x344)]()*0x2*_0x18ad1f)/_0x18ad1f;_0x18ad1f===0x1&&('nuJkk'===_0x24583d(0xf5)?(_0x5d331f=Math['min'](ImageManager[_0x24583d(0x224)],_0x5d331f),_0x1aadd7+=Math['round']((this['innerWidth']-_0x1aadd7-this['itemPadding']()*0x2-_0x5d331f)/0x2)):this[_0x24583d(0x2c5)]());for(const _0x1183c1 of _0x262e96){switch(_0x1183c1){case'AP':this[_0x24583d(0x141)](this[_0x24583d(0x20f)],this[_0x24583d(0x20f)][_0x24583d(0x15c)]()['id'],_0x1aadd7,_0x4774af,_0x5d331f,_0x24583d(0xae));break;case'CP':Imported[_0x24583d(0x1c8)]&&this[_0x24583d(0x2bf)](this['_actor'],this[_0x24583d(0x20f)][_0x24583d(0x15c)]()['id'],_0x1aadd7,_0x4774af,_0x5d331f,_0x24583d(0xae));break;case'JP':Imported[_0x24583d(0x1c8)]&&('FsXki'==='ELlgE'?this['finishSkillLearnAnimation']():this[_0x24583d(0x152)](this[_0x24583d(0x20f)],this['_actor'][_0x24583d(0x15c)]()['id'],_0x1aadd7,_0x4774af,_0x5d331f,_0x24583d(0xae)));break;case'SP':this['drawActorSkillPoints'](this[_0x24583d(0x20f)],this[_0x24583d(0x20f)][_0x24583d(0x15c)]()['id'],_0x1aadd7,_0x4774af,_0x5d331f,_0x24583d(0xae));break;case _0x24583d(0x16b):this['drawCurrencyValue']($gameParty[_0x24583d(0xc7)](),TextManager[_0x24583d(0x28b)],_0x1aadd7,_0x4774af,_0x5d331f);break;default:continue;}_0x4774af+=this[_0x24583d(0x9d)]();if(_0x4774af+this[_0x24583d(0x9d)]()>this[_0x24583d(0x1b2)]){if('qRqEn'!==_0x24583d(0x2b0))_0x4774af=_0x1c8251,_0x1aadd7+=_0x5d331f+this['itemPadding']()*0x2;else{const _0x55977c=_0x225ebe['getSkillPoints'](_0x54770a);this[_0x24583d(0x2a0)](_0x55977c,_0x18d717,_0x2ac639,_0xe67868,_0x2cf593);}}}},Window_SkillStatus[_0x58a4c3(0x33d)][_0x58a4c3(0x349)]=function(){const _0x568d96=_0x58a4c3,_0x23f6fe=JsonEx[_0x568d96(0x12c)](VisuMZ[_0x568d96(0x1df)]['Settings'][_0x568d96(0x1ae)][_0x568d96(0xb3)]);return!Imported[_0x568d96(0x1c8)]&&(_0x568d96(0x221)===_0x568d96(0x99)?_0x514a08=_0x485358(_0x5ce719):(_0x23f6fe[_0x568d96(0x228)]('CP'),_0x23f6fe[_0x568d96(0x228)]('JP'))),_0x23f6fe[_0x568d96(0x228)]('Item')['remove'](_0x568d96(0x15a))[_0x568d96(0x228)](_0x568d96(0x22e));},Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x26b)]=function(){const _0x35bb32=_0x58a4c3;return this[_0x35bb32(0x2f9)]===_0x35bb32(0x115);},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x28c)]=Window_SkillList['prototype']['setStypeId'],Window_SkillList['prototype'][_0x58a4c3(0x187)]=function(_0x2e3bac){const _0x31f4c0=_0x58a4c3,_0x1d3741=this['isSkillLearnMode']();VisuMZ['SkillLearnSystem'][_0x31f4c0(0x28c)][_0x31f4c0(0x1ca)](this,_0x2e3bac);if(_0x1d3741!==this[_0x31f4c0(0x26b)]()){if('uFiyW'!==_0x31f4c0(0x111)){const _0x4a2862=_0x4627fa(_0xde23e1['$1']),_0x25d04a={'id':0x0,'quantity':_0x175c41(_0x3850e7['$2'])},_0x51bb77=/^\d+$/['test'](_0x4a2862);_0x51bb77?_0x25d04a['id']=_0x78c17c(_0x4a2862):_0x25d04a['id']=_0x1f4460[_0x31f4c0(0x1d4)](_0x4a2862),_0x25d04a['id']>0x0&&_0xae977a['push'](_0x25d04a);}else{const _0x20a565=SceneManager[_0x31f4c0(0x1bb)];if(!_0x20a565)return;const _0x34c868=_0x20a565[_0x31f4c0(0x1ed)];if(_0x34c868)_0x34c868[_0x31f4c0(0x2de)]();}}},VisuMZ[_0x58a4c3(0x1df)]['Window_SkillList_maxCols']=Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x219)],Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x219)]=function(){const _0x59fba1=_0x58a4c3;return this[_0x59fba1(0x26b)]()?0x1:VisuMZ['SkillLearnSystem'][_0x59fba1(0x340)][_0x59fba1(0x1ca)](this);},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x2d5)]=Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0xa6)],Window_SkillList[_0x58a4c3(0x33d)]['makeItemList']=function(){const _0x1ee42b=_0x58a4c3;this['_actor']&&this[_0x1ee42b(0x26b)]()?this[_0x1ee42b(0x25d)]():VisuMZ[_0x1ee42b(0x1df)]['Window_SkillList_makeItemList']['call'](this);},Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x25d)]=function(){const _0x5e4b48=_0x58a4c3,_0x266de9=DataManager[_0x5e4b48(0x330)](this[_0x5e4b48(0x20f)][_0x5e4b48(0x15c)]()['id']);this[_0x5e4b48(0x2ad)]=_0x266de9[_0x5e4b48(0x15f)](_0x1f2554=>$dataSkills[_0x1f2554])[_0x5e4b48(0x346)](_0x5aa487=>this[_0x5e4b48(0x18e)](_0x5aa487)),Imported[_0x5e4b48(0x225)]&&this['makeSkillLearnPassivesList']();},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x11d)]=Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x18e)],Window_SkillList[_0x58a4c3(0x33d)]['includes']=function(_0x4e039c){const _0x5d35e1=_0x58a4c3;return this['isSkillLearnMode']()?'BwFHD'!==_0x5d35e1(0x1e6)?_0x3fe1a4[_0x5d35e1(0x1df)][_0x5d35e1(0x108)]['call'](this,_0x52a4fd):this['skillLearnIncludes'](_0x4e039c):VisuMZ[_0x5d35e1(0x1df)][_0x5d35e1(0x11d)][_0x5d35e1(0x1ca)](this,_0x4e039c);},Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x2bb)]=function(_0x3c1d52){const _0x32c16a=_0x58a4c3;if(!_0x3c1d52)return![];if(_0x3c1d52[_0x32c16a(0x196)][_0x32c16a(0xaa)]<=0x0)return![];if(_0x3c1d52[_0x32c16a(0x196)][_0x32c16a(0x1e8)](/-----/i))return![];const _0x590a49=VisuMZ[_0x32c16a(0x1df)][_0x32c16a(0x1a3)](_0x3c1d52,_0x32c16a(0x30a));if(VisuMZ[_0x32c16a(0x1df)]['JS'][_0x590a49]){if(_0x32c16a(0x2c4)!==_0x32c16a(0x2c4)){if(this['_SkillLearnSystem_preventLevelUpGain'])return;const _0x584d07=_0xc432d4['SkillLearnSystem'][_0x32c16a(0x1c0)]['SkillPoints'];let _0x51e870=0x0;try{_0x51e870=_0x166145(_0x584d07[_0x32c16a(0xe2)]);}catch(_0x4d55c3){if(_0x5ba2e9[_0x32c16a(0x253)]())_0x415ab8[_0x32c16a(0x202)](_0x4d55c3);}this[_0x32c16a(0x338)](_0x51e870,_0x512a6b);}else{if(!VisuMZ[_0x32c16a(0x1df)]['JS'][_0x590a49][_0x32c16a(0x1ca)](this,this[_0x32c16a(0x20f)],_0x3c1d52))return![];}}const _0x59f691=VisuMZ[_0x32c16a(0x1df)][_0x32c16a(0x29d)],_0x45bfcc=_0x3c1d52[_0x32c16a(0x144)];if(_0x45bfcc['match'](_0x59f691[_0x32c16a(0x10b)])){if('blCJw'!==_0x32c16a(0xf1))_0x798b0['push'](_0x2d62b0);else{const _0x50b40e=Number(RegExp['$1']);if(_0x50b40e>this['_actor']['level'])return![];}}if(_0x45bfcc[_0x32c16a(0x1e8)](_0x59f691[_0x32c16a(0x1ac)])){const _0x10d971=String(RegExp['$1'])[_0x32c16a(0x22c)](',')['map'](_0x3d439e=>_0x3d439e[_0x32c16a(0x2c3)]());;for(const _0x5e8e27 of _0x10d971){let _0x1a645b=0x0;const _0x1603d4=/^\d+$/[_0x32c16a(0x2a5)](_0x5e8e27);_0x1603d4?_0x1a645b=Number(_0x5e8e27):_0x1a645b=DataManager['getSkillIdWithName'](_0x5e8e27);if(!this[_0x32c16a(0x20f)][_0x32c16a(0x209)](_0x1a645b))return![];}}if(_0x45bfcc[_0x32c16a(0x1e8)](_0x59f691[_0x32c16a(0x2dc)])){if(_0x32c16a(0x1f8)===_0x32c16a(0x264))_0x3a8c6c[_0x32c16a(0x1df)][_0x32c16a(0x1c0)][_0x32c16a(0x31e)][_0x32c16a(0x273)]?this['startSkillLearnAnimation']():this[_0x32c16a(0x270)]();else{const _0x478e23=String(RegExp['$1'])[_0x32c16a(0x22c)](',')[_0x32c16a(0x15f)](_0x13cdeb=>_0x13cdeb[_0x32c16a(0x2c3)]());;let _0x3be199=![];for(const _0x1285a2 of _0x478e23){let _0x7d7158=0x0;const _0x5d1363=/^\d+$/[_0x32c16a(0x2a5)](_0x1285a2);if(_0x5d1363){if('chsbE'===_0x32c16a(0x323)){let _0x55fe95=0x0;const _0x190af3=/^\d+$/['test'](_0x1131be);_0x190af3?_0x55fe95=_0x500150(_0x39eddb):_0x55fe95=_0x187a2f[_0x32c16a(0x21b)](_0x469ca4);if(!this[_0x32c16a(0x20f)][_0x32c16a(0x209)](_0x55fe95))return![];}else _0x7d7158=Number(_0x1285a2);}else _0x7d7158=DataManager[_0x32c16a(0x21b)](_0x1285a2);if(this[_0x32c16a(0x20f)][_0x32c16a(0x209)](_0x7d7158)){if(_0x32c16a(0x145)===_0x32c16a(0x145)){_0x3be199=!![];break;}else return this['isSkillLearnMode']()?0x1:_0xbf1324[_0x32c16a(0x1df)][_0x32c16a(0x340)][_0x32c16a(0x1ca)](this);}}if(!_0x3be199)return![];}}if(_0x45bfcc[_0x32c16a(0x1e8)](_0x59f691[_0x32c16a(0x23f)])){const _0x437ee4=String(RegExp['$1'])[_0x32c16a(0x22c)](',')['map'](_0xb9a514=>Number(_0xb9a514));for(const _0x463027 of _0x437ee4){if(_0x32c16a(0x1fa)!==_0x32c16a(0x1dd)){if(!$gameSwitches['value'](_0x463027))return![];}else{const _0x2b9c4f=_0x482453[_0x32c16a(0x96)](_0x2d45b4);this[_0x32c16a(0xbf)](_0x2b9c4f,_0x5b4d28,_0x2552ca,_0x182f79,_0x4f170c);}}}if(_0x45bfcc[_0x32c16a(0x1e8)](_0x59f691[_0x32c16a(0x318)])){const _0x718b74=String(RegExp['$1'])['split'](',')[_0x32c16a(0x15f)](_0x17e169=>Number(_0x17e169));let _0x2225f3=![];for(const _0x23c288 of _0x718b74){if($gameSwitches[_0x32c16a(0x189)](_0x23c288)){_0x2225f3=!![];break;}}if(!_0x2225f3)return![];}return _0x3c1d52;},VisuMZ[_0x58a4c3(0x1df)]['Window_SkillList_isEnabled']=Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x2ca)],Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x2ca)]=function(_0x2efbca){const _0x30d978=_0x58a4c3;if(this[_0x30d978(0x20f)]&&this['isSkillLearnMode']())return'psJeF'!==_0x30d978(0xd8)?this[_0x30d978(0x113)](_0x2efbca):this[_0x30d978(0x113)](_0x252cba);else{if(_0x30d978(0x1d5)!=='oqcFl'){const _0x242097=_0x4e9c7d[_0x2a8616];_0xea7f88=_0x5713e4[_0x30d978(0x354)]['format'](_0x30d978(0x2a8)['format'](_0x242097[_0x30d978(0xdf)]),_0x242097[_0x30d978(0x196)]),_0x998f57[_0x30d978(0xaa)]>0x0&&(_0x522c9c!==''?_0x55df5d=_0x368350[_0x30d978(0x25e)](_0x224266,_0x307d37):_0x498a61=_0x5889ae);}else return VisuMZ['SkillLearnSystem'][_0x30d978(0x108)][_0x30d978(0x1ca)](this,_0x2efbca);}},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x258)]=Window_SkillList[_0x58a4c3(0x33d)]['drawItem'],Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x193)]=function(_0x5170a2){const _0x3c738a=_0x58a4c3;this[_0x3c738a(0x15b)]=this[_0x3c738a(0x26b)](),VisuMZ[_0x3c738a(0x1df)][_0x3c738a(0x258)]['call'](this,_0x5170a2),this['_skillLearnSystem_drawItemMode']=![];},Window_SkillList[_0x58a4c3(0x33d)]['isSkillLearnEnabled']=function(_0x1aee75){const _0x1dadc7=_0x58a4c3;if(!_0x1aee75)return![];if(_0x1aee75['name']['length']<=0x0)return![];if(_0x1aee75[_0x1dadc7(0x196)][_0x1dadc7(0x1e8)](/-----/i))return![];if(this[_0x1dadc7(0x20f)][_0x1dadc7(0x209)](_0x1aee75['id']))return![];if(Imported[_0x1dadc7(0x225)]&&DataManager[_0x1dadc7(0x2db)](_0x1aee75)){if(this[_0x1dadc7(0x20f)][_0x1dadc7(0x10c)](_0x1aee75))return![];}if(this[_0x1dadc7(0x15b)]){if(!this[_0x1dadc7(0x20f)][_0x1dadc7(0x250)](_0x1aee75))return![];return this[_0x1dadc7(0x20f)][_0x1dadc7(0x2da)](_0x1aee75);}return!![];},VisuMZ[_0x58a4c3(0x1df)][_0x58a4c3(0x22b)]=Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x1d6)],Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x1d6)]=function(_0x19ad34,_0x3de30e,_0x3e6ade,_0xf6950e){const _0xbbbebc=_0x58a4c3;if(this[_0xbbbebc(0x26b)]()){if('IsyGg'!==_0xbbbebc(0x156))_0x35e160=0x0;else{if(this[_0xbbbebc(0x2ea)](_0x19ad34))this['drawSkillLearnRequirements'](_0x19ad34,_0x3de30e,_0x3e6ade,_0xf6950e);else{if(_0xbbbebc(0xf8)!==_0xbbbebc(0x2fb))this['drawSkillLearnCost'](_0x19ad34,_0x3de30e,_0x3e6ade,_0xf6950e);else{if(_0x5007b7[_0xbbbebc(0x1e8)](/(?:SKILL POINTS|SP):[ ](\d+)/gi))return _0x286cce(_0x7fe339['$1']);}}}}else VisuMZ[_0xbbbebc(0x1df)]['Window_SkillList_drawSkillCost']['call'](this,_0x19ad34,_0x3de30e,_0x3e6ade,_0xf6950e);},Window_SkillList[_0x58a4c3(0x33d)]['shouldDrawSkillLearnRequirements']=function(_0x3d0501){const _0x29efb0=_0x58a4c3;return this[_0x29efb0(0x20f)]&&!this[_0x29efb0(0x20f)][_0x29efb0(0x250)](_0x3d0501);},Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x212)]=function(_0x357aed,_0x1cb236,_0x26eed8,_0x4af1e7){const _0x9fd33c=_0x58a4c3,_0x3dda91=this[_0x9fd33c(0x114)](_0x357aed),_0x410d6b=this[_0x9fd33c(0x197)](_0x3dda91)['width'];_0x1cb236+=_0x4af1e7-_0x410d6b,this[_0x9fd33c(0xd6)](_0x3dda91,_0x1cb236,_0x26eed8);},Window_SkillList[_0x58a4c3(0x33d)]['getSkillLearnRequirementText']=function(_0x342547){const _0x33f84=_0x58a4c3,_0xe9ba74=VisuMZ[_0x33f84(0x1df)][_0x33f84(0x1c0)][_0x33f84(0x1ae)],_0x5a1351=TextManager[_0x33f84(0x29c)],_0x19c766=VisuMZ[_0x33f84(0x1df)][_0x33f84(0x29d)],_0x327124=_0x342547[_0x33f84(0x144)];let _0xe8f939='',_0x65e00e='';const _0x214e42=[_0x33f84(0x175),_0x33f84(0x148),_0x33f84(0x31b),_0x33f84(0x11f)];for(const _0x401066 of _0x214e42){switch(_0x401066){case'LEVEL':if(_0x327124[_0x33f84(0x1e8)](_0x19c766[_0x33f84(0x234)])){const _0x877651=Number(RegExp['$1']);_0x65e00e=TextManager[_0x33f84(0x332)][_0x33f84(0x25e)](_0x877651,TextManager['level'],TextManager['levelA']);if(_0x65e00e[_0x33f84(0xaa)]>0x0){if(_0x33f84(0x200)!=='kapYB'){const _0x29d434=_0x1302d5[_0x33f84(0x12c)](_0x3f5d7a[_0x33f84(0x1df)][_0x33f84(0x1c0)][_0x33f84(0x1ae)][_0x33f84(0xb3)]);return _0x29d434[_0x33f84(0x21a)](_0x33f84(0x33c)),_0x29d434;}else _0xe8f939!==''?_0xe8f939=_0x5a1351[_0x33f84(0x25e)](_0xe8f939,_0x65e00e):_0xe8f939=_0x65e00e;}}break;case _0x33f84(0x148):if(_0x327124[_0x33f84(0x1e8)](_0x19c766[_0x33f84(0x320)])){if(_0x33f84(0x25f)!==_0x33f84(0x25f))_0x37c002=_0x4cdde4;else{const _0x245883=String(RegExp['$1'])[_0x33f84(0x22c)](',')['map'](_0x1f5f37=>_0x1f5f37['trim']());;for(const _0x4fd782 of _0x245883){if('nLGDI'===_0x33f84(0x1e4)){let _0x931f6b=0x0;const _0x51a76f=/^\d+$/['test'](_0x4fd782);_0x51a76f?_0x33f84(0x22d)!==_0x33f84(0x1a4)?_0x931f6b=Number(_0x4fd782):_0x133314=_0x3ce559:_0x931f6b=DataManager[_0x33f84(0x21b)](_0x4fd782);if($dataSkills[_0x931f6b]){const _0x11b671=$dataSkills[_0x931f6b];_0x65e00e=TextManager[_0x33f84(0x354)][_0x33f84(0x25e)](_0x33f84(0x2a8)[_0x33f84(0x25e)](_0x11b671[_0x33f84(0xdf)]),_0x11b671[_0x33f84(0x196)]),_0x65e00e[_0x33f84(0xaa)]>0x0&&('vgnCD'==='vgnCD'?_0xe8f939!==''?_0xe8f939=_0x5a1351[_0x33f84(0x25e)](_0xe8f939,_0x65e00e):_0xe8f939=_0x65e00e:this[_0x33f84(0x1db)][_0x33f84(0x275)]=_0x1abed6[_0x33f84(0x222)]());}}else _0x20832d=_0x86103b||this['currentClass']()['id'];}}}if(_0x327124['match'](_0x19c766[_0x33f84(0xbe)])){const _0x44a66f=String(RegExp['$1'])[_0x33f84(0x22c)](',')[_0x33f84(0x15f)](_0x5247a9=>_0x5247a9[_0x33f84(0x2c3)]());;for(const _0x3db837 of _0x44a66f){if('XuENX'==='gkLHx')_0x144059=_0x481556(_0x31dd03);else{let _0x283c52=0x0;const _0x4f154d=/^\d+$/[_0x33f84(0x2a5)](_0x3db837);_0x4f154d?_0x283c52=Number(_0x3db837):_0x283c52=DataManager[_0x33f84(0x21b)](_0x3db837);if($dataSkills[_0x283c52]){const _0x53c160=$dataSkills[_0x283c52];_0x65e00e=TextManager['skillLearnReqSkillFmt'][_0x33f84(0x25e)]('\x5cI[%1]'[_0x33f84(0x25e)](_0x53c160[_0x33f84(0xdf)]),_0x53c160['name']),_0x65e00e[_0x33f84(0xaa)]>0x0&&(_0x33f84(0x287)==='GChVb'?_0xe8f939!==''?_0xe8f939=_0x5a1351['format'](_0xe8f939,_0x65e00e):_0xe8f939=_0x65e00e:this[_0x33f84(0x26e)]());}}}}break;case _0x33f84(0x31b):if(_0x327124[_0x33f84(0x1e8)](_0x19c766[_0x33f84(0x24d)])){const _0x2441c=String(RegExp['$1'])[_0x33f84(0x22c)](',')[_0x33f84(0x15f)](_0x218fa1=>_0x218fa1[_0x33f84(0x2c3)]());;for(const _0x5d6b0e of _0x2441c){if(_0x33f84(0x342)===_0x33f84(0x342)){if($dataSystem['switches'][_0x5d6b0e]){if('QSrDm'!=='QSrDm')this[_0x33f84(0x2c8)][_0x33f84(0x19e)](),this[_0x33f84(0x29a)](),this[_0x33f84(0x1ec)]()?this[_0x33f84(0x27b)]():this['drawIngredients']();else{_0x65e00e=TextManager[_0x33f84(0x321)]['format']($dataSystem['switches'][_0x5d6b0e]||'');if(_0x65e00e['length']>0x0){if(_0xe8f939!==''){if(_0x33f84(0x238)!==_0x33f84(0x2b7))_0xe8f939=_0x5a1351['format'](_0xe8f939,_0x65e00e);else{const _0x2f3e30=this['isSkillLearnMode']();_0x419c4a['SkillLearnSystem'][_0x33f84(0x28c)]['call'](this,_0x1191a7);if(_0x2f3e30!==this[_0x33f84(0x26b)]()){const _0x5c09fb=_0x5ce4f5[_0x33f84(0x1bb)];if(!_0x5c09fb)return;const _0x570226=_0x5c09fb[_0x33f84(0x1ed)];if(_0x570226)_0x570226[_0x33f84(0x2de)]();}}}else _0xe8f939=_0x65e00e;}}}}else this[_0x33f84(0x20f)]&&this[_0x33f84(0x26b)]()?this[_0x33f84(0x25d)]():_0x5393bc[_0x33f84(0x1df)][_0x33f84(0x2d5)][_0x33f84(0x1ca)](this);}}if(_0x327124[_0x33f84(0x1e8)](_0x19c766[_0x33f84(0x295)])){const _0x47badf=String(RegExp['$1'])[_0x33f84(0x22c)](',')[_0x33f84(0x15f)](_0x52d83c=>_0x52d83c[_0x33f84(0x2c3)]());;for(const _0x3e150c of _0x47badf){if($dataSystem[_0x33f84(0x14c)][_0x3e150c]){if('WfPbT'==='woOYF'){const _0x2e5947=_0x3a653b(_0x2f060a['$1']);if(_0x2e5947>this[_0x33f84(0x32f)])return![];}else _0x65e00e=TextManager[_0x33f84(0x321)][_0x33f84(0x25e)]($dataSystem['switches'][_0x3e150c]||''),_0x65e00e[_0x33f84(0xaa)]>0x0&&(_0xe8f939!==''?_0xe8f939=_0x5a1351['format'](_0xe8f939,_0x65e00e):_0xe8f939=_0x65e00e);}}}break;case _0x33f84(0x11f):const _0x31348b=VisuMZ[_0x33f84(0x1df)][_0x33f84(0x1a3)](_0x342547,_0x33f84(0x2d0));VisuMZ['SkillLearnSystem']['JS'][_0x31348b]&&(_0x65e00e=VisuMZ[_0x33f84(0x1df)]['JS'][_0x31348b][_0x33f84(0x1ca)](this,this[_0x33f84(0x20f)],_0x342547),_0x65e00e[_0x33f84(0xaa)]>0x0&&(_0xe8f939!==''?_0xe8f939=_0x5a1351[_0x33f84(0x25e)](_0xe8f939,_0x65e00e):_0xe8f939=_0x65e00e));break;}}return _0xe8f939=TextManager[_0x33f84(0x251)]['format'](_0xe8f939),_0xe8f939[_0x33f84(0x2c3)]();},Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x12f)]=function(_0x2af34b,_0x35908c,_0x361ca3,_0x34b2f7){const _0x228e65=_0x58a4c3,_0x3cb980=this[_0x228e65(0x1f4)](_0x2af34b),_0x49c7de=this[_0x228e65(0x197)](_0x3cb980)[_0x228e65(0x13a)];_0x35908c+=_0x34b2f7-_0x49c7de,this[_0x228e65(0xd6)](_0x3cb980,_0x35908c,_0x361ca3);},Window_SkillList['prototype'][_0x58a4c3(0x1f4)]=function(_0x503125){const _0x3d6727=_0x58a4c3;if(this['_actor']&&this['_actor'][_0x3d6727(0x209)](_0x503125['id']))return TextManager[_0x3d6727(0x1b5)];const _0x7cc2e=VisuMZ['SkillLearnSystem'][_0x3d6727(0x1c0)][_0x3d6727(0x1ae)],_0x16dd51=TextManager[_0x3d6727(0xfc)];let _0x48fc42='';const _0x396184=JsonEx['makeDeepCopy'](_0x7cc2e[_0x3d6727(0xb3)]);_0x396184[_0x3d6727(0x21a)](_0x3d6727(0x33c));for(const _0x5a6537 of _0x396184){if(_0x3d6727(0x21c)!==_0x3d6727(0xde)){if(!_0x5a6537)continue;const _0x4a9e8e=this['createSkillLearnCostText'](_0x503125,_0x5a6537)[_0x3d6727(0x2c3)]();if(_0x4a9e8e[_0x3d6727(0xaa)]>0x0){if(_0x48fc42!==''){if(_0x3d6727(0x2e7)==='nXGKq'){if(_0xf5283f[_0x3d6727(0x253)]())_0x44e90b['log'](_0x414b8a);}else _0x48fc42=_0x16dd51['format'](_0x48fc42,_0x4a9e8e);}else _0x3d6727(0x30d)!==_0x3d6727(0x30d)?_0x126452=_0x583f57:_0x48fc42=_0x4a9e8e;}}else{const _0x3365e8=_0x81af0b(_0x579833['$1']),_0x43c00f={'id':0x0,'quantity':_0x1a0e0a(_0x528411['$2'])},_0x4f1782=/^\d+$/[_0x3d6727(0x2a5)](_0x3365e8);_0x4f1782?_0x43c00f['id']=_0x301280(_0x3365e8):_0x43c00f['id']=_0x13dd12[_0x3d6727(0x352)](_0x3365e8),_0x43c00f['id']>0x0&&_0x56d5ab[_0x3d6727(0x21a)](_0x43c00f);}}return _0x48fc42[_0x3d6727(0x2c3)]();},Window_SkillList[_0x58a4c3(0x33d)][_0x58a4c3(0x166)]=function(_0x2cc11e,_0x3240ff){const _0x280199=_0x58a4c3;let _0x2ee4ac=0x0,_0x418bed='',_0x1bef3d='';switch(_0x3240ff[_0x280199(0x235)]()[_0x280199(0x2c3)]()){case'AP':_0x2ee4ac=DataManager[_0x280199(0x1e0)](_0x2cc11e);if(_0x2ee4ac>0x0)return _0x418bed=TextManager[_0x280199(0x1cf)],_0x418bed[_0x280199(0x25e)](_0x2ee4ac,TextManager[_0x280199(0x24c)],_0x280199(0x2a8)[_0x280199(0x25e)](ImageManager[_0x280199(0xa1)]),TextManager[_0x280199(0x304)]);break;case'SP':_0x2ee4ac=DataManager['getSkillLearnSkillPointCost'](_0x2cc11e);if(_0x2ee4ac>0x0){if('ozoeO'===_0x280199(0x25c)){if(_0x1443bc[_0x280199(0x253)]())_0x4b7cc7[_0x280199(0x202)](_0x2152c0);}else return _0x418bed=TextManager[_0x280199(0x182)],_0x418bed[_0x280199(0x25e)](_0x2ee4ac,TextManager['skillPointsAbbr'],_0x280199(0x2a8)[_0x280199(0x25e)](ImageManager[_0x280199(0x214)]),TextManager['skillPointsFull']);}break;case _0x280199(0xea):_0x2ee4ac=DataManager[_0x280199(0x20a)](_0x2cc11e),_0x418bed=TextManager[_0x280199(0x1cd)];for(const _0x245608 of _0x2ee4ac){if(!_0x245608)continue;const _0x2cb1a3=$dataItems[_0x245608['id']];if(!_0x2cb1a3)continue;const _0x486e41=_0x418bed[_0x280199(0x25e)](_0x245608[_0x280199(0xe9)],_0x280199(0x2a8)[_0x280199(0x25e)](_0x2cb1a3[_0x280199(0xdf)]),_0x2cb1a3[_0x280199(0x196)]);_0x1bef3d!==''?_0x1bef3d=TextManager[_0x280199(0xfc)][_0x280199(0x25e)](_0x1bef3d,_0x486e41):_0x1bef3d=_0x486e41;}return _0x1bef3d;case _0x280199(0x201):_0x2ee4ac=DataManager[_0x280199(0x358)](_0x2cc11e),_0x418bed=TextManager[_0x280199(0x150)];for(const _0x254c3d of _0x2ee4ac){if(_0x280199(0x2aa)!==_0x280199(0x2aa)){const _0x3fd1f0=_0x1c7562(_0x32f706['$1']);_0x66fcb1['gainSkillPoints'](_0x3fd1f0);}else{if(!_0x254c3d)continue;const _0x3662c8=$dataWeapons[_0x254c3d['id']];if(!_0x3662c8)continue;const _0x11ba0d=_0x418bed[_0x280199(0x25e)](_0x254c3d['quantity'],_0x280199(0x2a8)[_0x280199(0x25e)](_0x3662c8[_0x280199(0xdf)]),_0x3662c8[_0x280199(0x196)]);_0x1bef3d!==''?'OXlgl'!==_0x280199(0x272)?_0x1bef3d=TextManager['skillLearnSeparationFmt'][_0x280199(0x25e)](_0x1bef3d,_0x11ba0d):_0x526612[_0x280199(0x21a)](_0x8a285d[_0x280199(0x21b)](_0x37908a)):_0x280199(0xb7)===_0x280199(0x1ea)?_0x1affa5=_0x129440[_0x280199(0x21b)](_0x59484c):_0x1bef3d=_0x11ba0d;}}return _0x1bef3d;case _0x280199(0x1e3):_0x2ee4ac=DataManager['getSkillLearnArmorCost'](_0x2cc11e),_0x418bed=TextManager['skillLearnArmorFmt'];for(const _0x468753 of _0x2ee4ac){if('EulBn'!==_0x280199(0x9e)){if(!_0x468753)continue;const _0x57071b=$dataArmors[_0x468753['id']];if(!_0x57071b)continue;const _0x117d0f=_0x418bed[_0x280199(0x25e)](_0x468753[_0x280199(0xe9)],_0x280199(0x2a8)['format'](_0x57071b[_0x280199(0xdf)]),_0x57071b[_0x280199(0x196)]);if(_0x1bef3d!=='')_0x280199(0x18c)===_0x280199(0xef)?_0xeb038c['id']=_0x59f142['getItemIdWithName'](_0x4828b6):_0x1bef3d=TextManager[_0x280199(0xfc)][_0x280199(0x25e)](_0x1bef3d,_0x117d0f);else{if(_0x280199(0x21f)!==_0x280199(0x1c2))_0x1bef3d=_0x117d0f;else{const _0x44a011=_0x2ff1a3(_0x5c41cc['$1'])[_0x280199(0x22c)](',')[_0x280199(0x15f)](_0x456e5d=>_0x3a8fbd(_0x456e5d));for(const _0x2ce3c9 of _0x44a011){if(!_0x40cc6f[_0x280199(0x189)](_0x2ce3c9))return![];}}}}else _0x47cf70+=_0x9689cd[_0x280199(0x2a4)]((_0x67d6af-_0x198882)/0x2);}return _0x1bef3d;case _0x280199(0x2d1):_0x2ee4ac=DataManager[_0x280199(0xab)](_0x2cc11e);if(_0x2ee4ac>0x0){if(_0x280199(0x322)===_0x280199(0x1c3))try{return _0x343789(_0x404cff['$1']);}catch(_0x438cad){if(_0x5b3176[_0x280199(0x253)]())_0x376649['log'](_0x438cad);return 0x0;}else return _0x418bed=TextManager[_0x280199(0x10d)],_0x418bed['format'](_0x2ee4ac,Imported[_0x280199(0xbd)]?_0x280199(0x2a8)[_0x280199(0x25e)](VisuMZ['CoreEngine'][_0x280199(0x1c0)][_0x280199(0x16b)][_0x280199(0x311)]):TextManager[_0x280199(0x28b)],TextManager[_0x280199(0x28b)]);}break;case'CUSTOM':const _0x164f1e=VisuMZ[_0x280199(0x1df)]['createKeyJS'](_0x2cc11e,_0x280199(0x301));if(VisuMZ[_0x280199(0x1df)]['JS'][_0x164f1e])return VisuMZ[_0x280199(0x1df)]['JS'][_0x164f1e][_0x280199(0x1ca)](this,this['_actor'],_0x2cc11e);break;case'CP':if(Imported[_0x280199(0x1c8)]){_0x2ee4ac=DataManager[_0x280199(0x325)](_0x2cc11e);if(_0x2ee4ac>0x0)return _0x280199(0x1a6)!==_0x280199(0x1a7)?(_0x418bed=TextManager[_0x280199(0x32c)],_0x418bed[_0x280199(0x25e)](_0x2ee4ac,TextManager[_0x280199(0x106)],_0x280199(0x2a8)[_0x280199(0x25e)](ImageManager[_0x280199(0x1ce)]),TextManager[_0x280199(0x25a)])):_0x404fc8(_0x13a8a4['$1']);break;}case'JP':if(Imported['VisuMZ_2_ClassChangeSystem']){_0x2ee4ac=DataManager['getSkillLearnJobPointCost'](_0x2cc11e);if(_0x2ee4ac>0x0){if(_0x280199(0x194)===_0x280199(0x1ee))_0x2d6f1b=_0x1dc5df[_0x280199(0x346)](_0x4be6b0=>_0x4be6b0[_0x280199(0x329)]());else return _0x418bed=TextManager['jobPointsFmt'],_0x418bed[_0x280199(0x25e)](_0x2ee4ac,TextManager[_0x280199(0x32e)],_0x280199(0x2a8)['format'](ImageManager[_0x280199(0x203)]),TextManager[_0x280199(0x110)]);}break;}}return'';},Window_ActorCommand[_0x58a4c3(0x33d)]['isSkillLearnMode']=function(){return![];};function Window_SkillLearnIngredients(){this['initialize'](...arguments);}function _0xe498(){const _0xe2c3c3=['skillPointsIcon','status','93785mzPmmN','Window_SkillStatus_refresh','user','maxCols','push','getSkillIdWithName','srRsV','onSkillLearnConfirmOk','TMEiW','NIqLl','RFEBm','DQpCA','abilityPointsTotal','earnedAbilityPoints','faceWidth','VisuMZ_2_EquipPassiveSys','ZeFoy','1198570SAMURC','remove','MAX_SAFE_INTEGER','setBackgroundType','Window_SkillList_drawSkillCost','split','nIyQG','Armor','Skill','setSkillLearnSkillSpritePosition','animationIDs','skillPointsTotal','item','LearnReqLevel','toUpperCase','onLoadBattleTestSkillLearnSystem','SkillPointsSet','ILcsk','setAbilityPoints','description','Window','litot','onSkillLearnConfirmCancel','SZjxh','LearnShowSwitchesAll','initSkillPoints','itemWindowRect','UVcvI','uTGyt','newPage','skillLearningOwned','onItemOk','sort','QbAmF','BVCDD','loseGold','opacitySpeed','abilityPointsAbbr','LearnReqSwitchesAll','DelqR','bppaI','meetRequirementsForSkillLearnSystem','skillLearnReqHeaderFmt','skillLearnCancelCmd','isPlaytest','Game_Actor_setup','skillLearnReqListSkill','xAyCD','initAbilityPoints','Window_SkillList_drawItem','CoreEngine','classPointsFull','CueNW','ZloNM','makeSkillLearnList','format','iAIKu','gainAbilityPointsForMulticlasses','makeRewardsAbilityPoints','qddxp','process_VisuMZ_SkillLearnSystem_JS','JwMcQ','setSkillLearnSkillSpriteBitmap','resetTextColor','ReqSkillFmt','makeCommandList','IGONt','skillLearningCost','isSkillLearnMode','809907vwIzOG','_itemWindow','applySkillPoints','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20','finishSkillLearnAnimation','LearningTitle','bDsfu','ShowAnimations','shift','abilityPoints','Rfmvx','AbilityPointsGain','AbilityPoints','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20cost\x20=\x200;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Cost\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20cost;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','AbilityPointsSet','drawRequirements','RnQTg','_skillLearnAnimationPlaying','ReqLevelFmt','UTcAN','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','MenuAccess','piOWM','dpDFt','MobXh','oVACa','updateSkillLearnAnimation','GChVb','commandStyle','LearnSkillA','skillLearnReqTitle','currencyUnit','Window_SkillList_setStypeId','Classes','skillLearnCmd','levelA','playSkillLearn','autoRemovalTiming','show','mfLxs','skillLearnReqListLevel','LearnReqSwitchesAny','IngredientOwned','SApUn','kVONP','_abilityPoints','resetFontSettings','return\x200','skillLearnReqSeparatorFmt','RegExp','skillLearnIngredientsWindowRect','qBBct','drawSkillPoints','setupBattleTestMembers','nFIzz','Wwaxu','round','test','isSkill','playStaticSe','\x5cI[%1]','JjWnW','etGRd','abilityPointsVisible','ReqNotMetFmt','_data','GekUz','JgQgB','tfqCU','dsDek','LearnJpCost','jhQUQ','Item-%1-%2','bYCIp','jsLearnShowDetailTxt','KYaGC','_SkillLearnSystem_preventLevelUpGain','addCommand','18798527KKTYli','skillLearnIncludes','skillPointsRate','getSkillPoints','ConfirmWindow_RectJS','drawActorClassPoints','processFinishSkillLearnAnimation','RMpMQ','eVHkC','trim','ztuDi','refreshSkillLearnSystem','drawTextExRightAlign','addSkillLearnSystemCommand','contents','bitmap','isEnabled','_skillLearnIngredientsWindow','ShowMenu','WeaponFmt','_SkillLearnSystem_MenuAccess','_learnPicture','jsLearnReqListTxt','GOLD','changeClass','LearnSkillB','jsLearnSpCost','Window_SkillList_makeItemList','jsLearnReq','ReqSeparateFmt','replace','gainStartingSkillPoints','canPayForSkillLearnSystem','isState','LearnShowSkillsAny','EFSwK','refresh','_skillIDs','jobPointsFmt','ZeFyx','EVAL','IconSet','learnEquippedPassive','3gLAbSW','reduce','Nqewd','jsLearnCpCost','XByLD','shouldDrawSkillLearnRequirements','inBattle','vDiSa','opacity','jsLearnApCost','getSkillLearnArmorCost','_itemIDs','VbeoZ','setSkillLearnSystemMenuAccess','_skillLearnAnimationIDs','subject','cGBuN','updateSkillLearnSpriteOpacity','isReleased','TargetGainAbilityPoints','_stypeId','destroy','NHxba','createVisibleJS','ClassPoints','skillLearningName','getClassPoints','isActor','jsLearnShowListTxt','IdiSm','loadPicture','abilityPointsFull','createSkillLearnIngredientsWindow','DetailWindow_RectJS','ARRAYEVAL','DefaultCost','PpWtB','jsLearnShow','QeTEx','IrCuj','WSbet','Game_Battler_onBattleStart','_classIDs','AQgAd','GoldIcon','getSkillLearnSkillPointCost','hAuBI','Exqlz','skillLearningTitle','add','eGOKb','LearnShowSwitchesAny','oGIre','DcRrM','SWITCHES','_windowLayer','LearnItemCost','Animation','PerAction','LearnReqSkillsAll','skillLearnReqSwitchFmt','jwkGy','jrCyw','aqntu','getSkillLearnClassPointCost','createTextJS','learnPicture','getEquipPassiveIcon','isAlive','Game_Actor_changeClass','Show','classPointsFmt','IPwLJ','jobPointsAbbr','level','getSkillLearnSkillsFromClass','hakhD','skillLearnReqLevelFmt','skillLearnReqMet','iWjeP','vUDtN','Name','optExtraExp','gainSkillPoints','Game_Action_applyItemUserEffect','makeRewards','select','Custom','prototype','makeRewardsSkillPoints','NUM','Window_SkillList_maxCols','LearnCpCost','VNjJu','skillTypes','itemPadding','twTaM','filter','changePaintOpacity','drawIngredients','getSkillLearnDisplayedCosts','SkillPointsLose','center','AUYQl','LAccs','BnlNh','StartingSkillPoints','fFhHB','JPQWv','getItemIdWithName','StartClassAbilityPoints','skillLearnReqSkillFmt','WLGYc','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Visible\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','text','getSkillLearnWeaponCost','_earnedSkillPoints','EnemySkillPoints','ytmgx','PerEnemy','process_VisuMZ_SkillLearnSystem_Notetags','getEquipPassiveName','skillPointsAbbr','ParseSkillNotetags','HkjWW','SharedResource','getAbilityPoints','gainRewardsAbilityPoints','scale','VuvfB','makeSkillLearnPassivesList','_skillLearnAnimationWait','jsLearnReqDetailTxt','lineHeight','dXiJr','StatusWindowDrawJS','Game_Actor_levelUp','abilityPointsIcon','ZPrOa','cancel','AliveActors','levelUpGainAbilityPoints','makeItemList','_skillLearnConfirmWindow','createActionJS','JSON','length','getSkillLearnGoldCost','ShowWindows','addChild','right','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20text\x20=\x20\x27\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Text\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20text;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','cwfwf','_skillLearnBitmapSprite','DisplayedCosts','version','LearnWeaponCost','ARRAYNUM','LaKgF','kHfbe','TargetGainSkillPoints','ItemFmt','onBattleStart','ebBta','VisuMZ_0_CoreEngine','LearnReqSkillsAny','drawAbilityPoints','Actors','ShowVictory','gBHuY','IngredientCost','XjRzc','WNSEZ','createCostJS','gold','xnqhZ','36mXQWyS','createSkillLearnSystemWindows','AbilityPointsAdd','Weapon-%1-%2','BCYRk','bzYtE','skillPointsVisible','gZvpi','12tVQCgS','loseSkillPoints','max','ikXub','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','drawTextEx','registerCommand','SNqBh','clamp','actor','gainRewardsSkillPoints','wNgMY','skillLearnIcon','vnppR','iconIndex','earnedSkillPoints','drawCurrencyValue','PerLevelUp','startSkillLearnAnimation','lfUGl','_weaponIDs','skillLearnArmorFmt','playOkSound','XuqWs','quantity','ITEM','_skillLearnIconSpriteOpacitySpeed','destroySkillLearnSprite','GoldFmt','deadMembers','utOir','poaJC','blCJw','wfCzA','UserGainAbilityPoints','MaxResource','nuJkk','getJobPoints','learnSkill','MyJjh','NTuOs','setSkillLearnSkillSpriteFrame','104defSmj','skillLearnSeparationFmt','ARRAYJSON','RXqes','Window_SkillType_makeCommandList','WxGHm','addWindow','ArmorFmt','exit','\x5cI[%1]%2','loseClassPoints','classPointsAbbr','LearnArmorCost','Window_SkillList_isEnabled','gainAbilityPoints','FullText','LearnShowLevel','isLearnedEquippedPassive','skillLearnGoldFmt','setupBattleTestMembersSkillLearnSystem','ALoqx','jobPointsFull','uFiyW','skillLearnConfirmWindow','isSkillLearnEnabled','getSkillLearnRequirementText','skillLearn','cjGgf','skill','pgfvo','%1%2','ParseAllNotetags','isPlaying','drawClassPoints','Window_SkillList_includes','ARRAYFUNC','CUSTOM','initSkillLearnSystemMenuAccess','QdMVM','_skillLearnAnimationSprite','drawItemName','EnemyAbilityPoints','pnLXn','dJxok','bmfnt','pxNfp','SkillPoints','skillPoints','skillLearnReqListSwitch','makeDeepCopy','VisuMZ_1_SkillsStatesCore','RequirementTitle','drawSkillLearnCost','YktGl','calcWindowHeight','height','Scene_Skill_update','drawActorFace','frames','ydbyo','XIBrC','wqnAV','iconHeight','width','dDGnr','loseItem','concat','allMembers','BattleManager_makeRewards','mrVfG','drawActorAbilityPoints','TextFmt','setSkillPoints','note','pLueS','applyItemUserEffect','addAbilityPoints','SKILLS','ClassChangeSystem','VictoryText','jsLearnJpCost','switches','dFbTm','vOStg','LRxaI','skillLearnWeaponFmt','getSkillLearnJobPointCost','drawActorJobPoints','Scene_Skill_onItemOk','commandName','addSkillPoints','IsyGg','applyItemSkillLearnSystemUserEffect','DtPIl','FUNC','Weapon','_skillLearnSystem_drawItemMode','currentClass','rmVuj','getClassIdWithName','map','ReqSwitchFmt','anchor','hide','LearnCostBatch','innerWidth','parse','createSkillLearnCostText','_earnedAbilityPoints','StartClassSkillPoints','wwPdx','oyMGq','Gold','isConfirmEnabled','removeChild','smooth','WEsbA','pZBxp','AbbrText','UserGainSkillPoints','members','scWot','LEVEL','fjiYi','IngredientName','LearnGoldCost','drawActorSimpleStatus','setup','RequireFmt','numItems','JUAbZ','SkillPointsRate','setFrame','loadSystem','sVVXs','skillPointsFmt','loseAbilityPoints','Armor-%1-%2','Icon','gainSkillPointsForMulticlasses','setStypeId','createSkillLearnSkillSprite','value','processPayForSkillLearnSystem','displayRewardsSkillPoints','hvJOn','isSkillLearnSystemMenuAccess','includes','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Condition\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','isBattleMember','setSkillLearnSkillSpriteOpacity','colSpacing','drawItem','VsPKL','STR','name','textSizeEx','cVkIp','destroySkillLearnAnimationSprite','ReqMetFmt','getWeaponIdWithName','update','DGGja','clear','Game_System_initialize','createSkillLearnAnimation','ZPNXC','Animations','createKeyJS','qlSEU','Learned','PfZzo','yyEnW','_armorIDs','XbohK','AbilityPointsLose','jfcfe','LearnShowSkillsAll','CntLc','General','BattleManager_displayRewards','onDatabaseLoaded','gcFAy','innerHeight','visible','itemHeight','skillLearnAlreadyLearned','abilityPointsRate','Points','FadeSpeed','Sound','initialize','_scene','jsOnLearn','drawJobPoints','jgVoC','LearnSpCost','Settings','jHXti','JfnEv','FuEED','isFinishedSkillLearnAnimating','left','isCommandEnabled','drawTextExCenterAlign','VisuMZ_2_ClassChangeSystem','injmS','call','isMVAnimation','pOVqR','skillLearnItemFmt','classPointsIcon','abilityPointsFmt','SkillPointsGain','_skillLearnIconSprite','Gglnq','bind','getArmorIdWithName','oqcFl','drawSkillCost','Scene_Boot_onDatabaseLoaded','DQWHE','create','traitObjects','_rewards','XJQrf','YwQki','RUxvM','SkillLearnSystem','getSkillLearnAbilityPointCost','loseJobPoints','skillLearnReqNotMet','ARMOR','nLGDI','PaPay','BwFHD','floor','match','isTriggered','GmTqP','ConvertParams','shouldDrawRequirements','_statusWindow','EvsqB','IIVPv','fwpEH','AbilityPointsRate','skillPointsFull','1505904okQeNs','getSkillLearnCostText','Actor-%1-%2','737522Sbojxg','928102axiWAK','FpcHY','levelUp','UPEYa','applySkillLearnSystemUserEffect','createConditionJS','hWkTV','24WGmoyr','jtCGe','kapYB','WEAPON','log','jobPointsIcon','createSkillLearnAnimationIDs','iengv','_skillPoints','gainMulticlassRewardPoints','applyAbilityPoints','isLearnedSkill','getSkillLearnItemCost','QwEBJ','skillLearnConfirmCmd','ARRAYSTRUCT','Game_Actor_learnSkill','_actor','displayRewards','ceil','drawSkillLearnRequirements','Parse_Notetags_CreateJS'];_0xe498=function(){return _0xe2c3c3;};return _0xe498();}Window_SkillLearnIngredients[_0x58a4c3(0x33d)]=Object[_0x58a4c3(0x1d9)](Window_Base['prototype']),Window_SkillLearnIngredients[_0x58a4c3(0x33d)]['constructor']=Window_SkillLearnIngredients,Window_SkillLearnIngredients[_0x58a4c3(0x33d)][_0x58a4c3(0x1ba)]=function(_0x91f6c3){const _0x37b475=_0x58a4c3;Window_Base[_0x37b475(0x33d)][_0x37b475(0x1ba)]['call'](this,_0x91f6c3);},Window_SkillLearnIngredients[_0x58a4c3(0x33d)]['refresh']=function(){const _0x1bf728=_0x58a4c3;this['contents'][_0x1bf728(0x19e)](),this[_0x1bf728(0x29a)]();if(this[_0x1bf728(0x1ec)]()){if(_0x1bf728(0x127)!==_0x1bf728(0x127))return 0x2;else this[_0x1bf728(0x27b)]();}else{if('WuNYn'===_0x1bf728(0x335)){if(_0xb8ca75[_0x1bf728(0x253)]())_0xf609d2[_0x1bf728(0x202)](_0x494b8d);return 0x0;}else this[_0x1bf728(0x348)]();}},Window_SkillLearnIngredients[_0x58a4c3(0x33d)]['drawTextExCenterAlign']=function(_0x20ecee,_0x34dfae,_0x449dd8,_0x4b3b31){const _0x4e7514=_0x58a4c3,_0x9680b6=this['textSizeEx'](_0x20ecee)['width'],_0x596dfc=_0x34dfae+Math[_0x4e7514(0x2a4)]((_0x4b3b31-_0x9680b6)/0x2);this[_0x4e7514(0xd6)](_0x20ecee,_0x596dfc,_0x449dd8);},Window_SkillLearnIngredients[_0x58a4c3(0x33d)][_0x58a4c3(0x2c6)]=function(_0x1da17b,_0xce29ed,_0x4fc154,_0x278ef3){const _0x33b8a1=_0x58a4c3,_0x1ce8ae=this['textSizeEx'](_0x1da17b)[_0x33b8a1(0x13a)],_0x15b8a4=_0xce29ed+Math['round'](_0x278ef3-_0x1ce8ae);this[_0x33b8a1(0xd6)](_0x1da17b,_0x15b8a4,_0x4fc154);},Window_SkillLearnIngredients[_0x58a4c3(0x33d)][_0x58a4c3(0x1ec)]=function(){const _0x130332=_0x58a4c3,_0xf5e3dd=SceneManager['_scene'][_0x130332(0x233)](),_0x295f22=SceneManager[_0x130332(0x1bb)][_0x130332(0x218)]();return _0x295f22&&!_0x295f22[_0x130332(0x250)](_0xf5e3dd);},Window_SkillLearnIngredients[_0x58a4c3(0x33d)][_0x58a4c3(0x27b)]=function(){const _0x58748d=_0x58a4c3,_0x2b3eab=SceneManager[_0x58748d(0x1bb)][_0x58748d(0x233)](),_0x2208c4=VisuMZ[_0x58748d(0x1df)][_0x58748d(0x29d)],_0x5a6b95=_0x2b3eab[_0x58748d(0x144)],_0xe7d601=SceneManager['_scene'][_0x58748d(0x218)](),_0x397fdf=this[_0x58748d(0x9d)](),_0xf47b4d=TextManager[_0x58748d(0x333)],_0x28dc46=TextManager[_0x58748d(0x1e2)];let _0x29dcc8=0x0,_0x149553=0x0;const _0xbcbd37=_0x58748d(0x2a8)[_0x58748d(0x25e)](_0x2b3eab[_0x58748d(0xdf)]),_0x109a8=TextManager[_0x58748d(0x28a)]['format'](_0xbcbd37,_0x2b3eab['name']);this[_0x58748d(0x1c7)](_0x109a8,_0x29dcc8,_0x149553,this['innerWidth']),_0x149553+=Math[_0x58748d(0x2a4)](_0x397fdf*1.5);let _0x1a10b3='';if(_0x5a6b95['match'](_0x2208c4['LearnReqLevel'])){if(_0x58748d(0x284)==='RLLNQ')_0x5e0bd9['SkillLearnSystem'][_0x58748d(0x93)][_0x58748d(0x1ca)](this,_0x477cd2),_0x3b715e[_0x58748d(0x1df)]['Parse_Notetags_CreateJS'](_0x9ba345);else{const _0x55fd7c=Number(RegExp['$1']),_0x5914b2=TextManager[_0x58748d(0x294)][_0x58748d(0x25e)](_0x55fd7c,TextManager[_0x58748d(0x32f)],TextManager[_0x58748d(0x28f)]),_0x221d83=_0xe7d601[_0x58748d(0x32f)]>=_0x55fd7c?_0xf47b4d:_0x28dc46;_0x1a10b3+=_0x221d83[_0x58748d(0x25e)](_0x5914b2)+'\x0a';}}if(_0x5a6b95[_0x58748d(0x1e8)](_0x2208c4[_0x58748d(0x320)])){if('lvVIl'===_0x58748d(0x2ae)){if(_0x3c938f[_0x58748d(0x1df)][_0x58748d(0x1c0)][_0x58748d(0x23b)][_0x58748d(0x306)])return _0x482853['SkillLearnSystem'][_0x58748d(0x1c0)][_0x58748d(0x23b)][_0x58748d(0x306)]['call'](this);const _0x145af5=this[_0x58748d(0x241)](),_0x392bd8=_0x145af5['x'],_0x459840=_0x145af5['y'],_0x46ca01=_0x145af5['width'],_0x283ef9=_0x145af5[_0x58748d(0x132)]-this[_0x58748d(0x131)](0x2,![]);return new _0x3764f2(_0x392bd8,_0x459840,_0x46ca01,_0x283ef9);}else{const _0x4f38c=String(RegExp['$1'])[_0x58748d(0x22c)](',')[_0x58748d(0x15f)](_0x38b845=>_0x38b845[_0x58748d(0x2c3)]());;for(const _0x42d06 of _0x4f38c){let _0x4a6e8f=0x0;const _0x4d1482=/^\d+$/[_0x58748d(0x2a5)](_0x42d06);if(_0x4d1482){if(_0x58748d(0x24e)===_0x58748d(0x2c1)){this[_0x58748d(0x299)]===_0x2d7b1f&&this['initAbilityPoints']();const _0x3aef2c=_0x3fb672[_0x58748d(0x1df)][_0x58748d(0x1c0)][_0x58748d(0x278)];return _0x3aef2c[_0x58748d(0x95)]?_0x2beff3=0x0:_0x18c627=_0xf8c07f||this[_0x58748d(0x15c)]()['id'],this[_0x58748d(0x299)][_0x428d13]=this[_0x58748d(0x299)][_0x5f06b1]||0x0,_0x352c62[_0x58748d(0x2a4)](this['_abilityPoints'][_0x250d79]);}else _0x4a6e8f=Number(_0x42d06);}else'XjRzc'!==_0x58748d(0xc4)?_0x1e0c37=_0x306796:_0x4a6e8f=DataManager[_0x58748d(0x21b)](_0x42d06);const _0x19da91=$dataSkills[_0x4a6e8f];if(_0x19da91){if('kPVge'!==_0x58748d(0x313)){const _0x3b5019=TextManager[_0x58748d(0x255)][_0x58748d(0x25e)](_0x58748d(0x2a8)[_0x58748d(0x25e)](_0x19da91[_0x58748d(0xdf)]),_0x19da91[_0x58748d(0x196)]),_0x24ec7f=_0xe7d601[_0x58748d(0x209)](_0x4a6e8f)?_0xf47b4d:_0x28dc46;_0x1a10b3+=_0x24ec7f[_0x58748d(0x25e)](_0x3b5019)+'\x0a';}else return _0x2d4dd4(_0x52ffad['$1']);}}}}if(_0x5a6b95[_0x58748d(0x1e8)](_0x2208c4['LearnReqSkillsAny'])){const _0x5c5677=String(RegExp['$1'])[_0x58748d(0x22c)](',')[_0x58748d(0x15f)](_0xa9b741=>_0xa9b741[_0x58748d(0x2c3)]());;for(const _0x316f9b of _0x5c5677){let _0x33b3d4=0x0;const _0xbbe6b4=/^\d+$/[_0x58748d(0x2a5)](_0x316f9b);_0xbbe6b4?_0x33b3d4=Number(_0x316f9b):_0x33b3d4=DataManager[_0x58748d(0x21b)](_0x316f9b);const _0x3d569e=$dataSkills[_0x33b3d4];if(_0x3d569e){const _0x42ee5c=TextManager[_0x58748d(0x255)][_0x58748d(0x25e)](_0x58748d(0x2a8)[_0x58748d(0x25e)](_0x3d569e[_0x58748d(0xdf)]),_0x3d569e[_0x58748d(0x196)]),_0x2d54fb=_0xe7d601[_0x58748d(0x209)](_0x33b3d4)?_0xf47b4d:_0x28dc46;_0x1a10b3+=_0x2d54fb['format'](_0x42ee5c)+'\x0a';}}}if(_0x5a6b95[_0x58748d(0x1e8)](_0x2208c4['LearnReqSwitchesAll'])){const _0x2a3f17=String(RegExp['$1'])['split'](',')[_0x58748d(0x15f)](_0x2b33c6=>Number(_0x2b33c6));for(const _0x4727ff of _0x2a3f17){const _0x147a34=$dataSystem[_0x58748d(0x14c)][_0x4727ff],_0x87890f=$gameSwitches[_0x58748d(0x189)](_0x4727ff)?_0xf47b4d:_0x28dc46;_0x1a10b3+=_0x87890f['format'](_0x147a34)+'\x0a';}}if(_0x5a6b95[_0x58748d(0x1e8)](_0x2208c4[_0x58748d(0x295)])){const _0x2981f1=String(RegExp['$1'])[_0x58748d(0x22c)](',')[_0x58748d(0x15f)](_0x4521aa=>Number(_0x4521aa));for(const _0xb52664 of _0x2981f1){if('Gglnq'===_0x58748d(0x1d2)){const _0x469ea3=$dataSystem[_0x58748d(0x14c)][_0xb52664],_0x4a9a77=$gameSwitches[_0x58748d(0x189)](_0xb52664)?_0xf47b4d:_0x28dc46;_0x1a10b3+=_0x4a9a77[_0x58748d(0x25e)](_0x469ea3)+'\x0a';}else{const _0x1af2b1=_0x409532[_0x58748d(0x1df)]['RegExp'];_0x5a66c5[_0x58748d(0x1df)][_0x58748d(0xc6)](_0x5c3f6a,_0x58748d(0x2ee),_0x1af2b1[_0x58748d(0x2ee)]),_0x3ad926['SkillLearnSystem'][_0x58748d(0xc6)](_0x287370,_0x58748d(0x2e8),_0x1af2b1[_0x58748d(0x2e8)]),_0x544e77['SkillLearnSystem'][_0x58748d(0xc6)](_0xf7bf08,_0x58748d(0x14b),_0x1af2b1[_0x58748d(0x14b)]),_0x48743d['SkillLearnSystem'][_0x58748d(0xc6)](_0x442241,_0x58748d(0x2d4),_0x1af2b1[_0x58748d(0x2d4)]),_0x53216e[_0x58748d(0x1df)][_0x58748d(0x2fc)](_0x5c24d4,_0x58748d(0x30a),_0x1af2b1[_0x58748d(0x30a)]),_0x2d6af6[_0x58748d(0x1df)][_0x58748d(0x1fc)](_0x53bfe4,_0x58748d(0x2d6),_0x1af2b1[_0x58748d(0x2d6)]),_0x25e528[_0x58748d(0x1df)][_0x58748d(0x326)](_0x23a3f5,_0x58748d(0x301),_0x1af2b1['jsLearnShowListTxt']),_0x5db7aa[_0x58748d(0x1df)][_0x58748d(0x326)](_0x48e6d8,_0x58748d(0x2b6),_0x1af2b1[_0x58748d(0x2b6)]),_0x2d48d4['SkillLearnSystem']['createTextJS'](_0xf329db,_0x58748d(0x2d0),_0x1af2b1[_0x58748d(0x2d0)]),_0x3c0fde[_0x58748d(0x1df)][_0x58748d(0x326)](_0x259d77,_0x58748d(0x9c),_0x1af2b1[_0x58748d(0x9c)]),_0x199db1[_0x58748d(0x1df)][_0x58748d(0xa8)](_0x1a6174,'jsOnLearn',_0x1af2b1[_0x58748d(0x1bc)]);}}}const _0x23448c=VisuMZ[_0x58748d(0x1df)][_0x58748d(0x1a3)](_0x2b3eab,'jsLearnReqDetailTxt');if(VisuMZ[_0x58748d(0x1df)]['JS'][_0x23448c]){const _0x5c6cf5=VisuMZ['SkillLearnSystem']['JS'][_0x23448c]['call'](this,_0xe7d601,_0x2b3eab);_0x1a10b3+=_0x5c6cf5+'\x0a';}this[_0x58748d(0x1c7)](_0x1a10b3,_0x29dcc8,_0x149553,this[_0x58748d(0x164)]);},Window_SkillLearnIngredients[_0x58a4c3(0x33d)][_0x58a4c3(0x348)]=function(){const _0x266328=_0x58a4c3,_0x3ee40f=SceneManager[_0x266328(0x1bb)][_0x266328(0x233)](),_0x180484=SceneManager[_0x266328(0x1bb)]['user'](),_0x201fae=this[_0x266328(0x349)]();let _0x4bb845=0x0,_0x4a1442=0x0;const _0x252f03=this[_0x266328(0x9d)](),_0x392936=Math[_0x266328(0x2a4)](this[_0x266328(0x164)]/0x2),_0x42946b=Math[_0x266328(0x2a4)](this[_0x266328(0x164)]/0x4),_0x1d9aea=0x0,_0x224312=_0x392936,_0x288f9b=_0x392936+_0x42946b;let _0x13079e=_0x266328(0x2a8)[_0x266328(0x25e)](_0x3ee40f['iconIndex']),_0x2a42c9=_0x3ee40f['name'];Imported[_0x266328(0x225)]&&DataManager[_0x266328(0x2db)](_0x3ee40f)&&(_0x13079e=_0x266328(0x2a8)[_0x266328(0x25e)](DataManager[_0x266328(0x328)](_0x3ee40f)),_0x2a42c9=DataManager[_0x266328(0x35e)](_0x3ee40f));let _0x245d50=TextManager[_0x266328(0x315)][_0x266328(0x25e)](_0x13079e,_0x2a42c9);this[_0x266328(0x1c7)](_0x245d50,_0x4bb845,_0x4a1442,this[_0x266328(0x164)]),_0x4a1442+=_0x252f03,this['drawTextExCenterAlign'](TextManager[_0x266328(0x2fe)],_0x1d9aea,_0x4a1442,_0x392936),this[_0x266328(0x1c7)](TextManager[_0x266328(0x26a)],_0x224312,_0x4a1442,_0x42946b),this[_0x266328(0x1c7)](TextManager[_0x266328(0x245)],_0x288f9b,_0x4a1442,_0x42946b),_0x4a1442+=_0x252f03;const _0x24edfd=_0x1d9aea+this[_0x266328(0x344)]();for(const _0xb240bc of _0x201fae){if('OuODm'!==_0x266328(0x1b1)){this[_0x266328(0x29a)]();let _0x3a29ac='',_0x4fce2d=0x0,_0x44c292=0x0,_0x5afff0='';switch(_0xb240bc[_0x266328(0x235)]()[_0x266328(0x2c3)]()){case'AP':_0x4fce2d=DataManager[_0x266328(0x1e0)](_0x3ee40f);if(_0x4fce2d<=0x0)continue;this['drawAbilityPoints'](_0x4fce2d,_0x224312,_0x4a1442,_0x42946b,_0x266328(0xae)),_0x3a29ac=_0x266328(0x104)[_0x266328(0x25e)](ImageManager[_0x266328(0xa1)],TextManager[_0x266328(0x304)]),this[_0x266328(0xd6)](_0x3a29ac,_0x24edfd,_0x4a1442),_0x44c292=_0x180484[_0x266328(0x96)](),this[_0x266328(0xbf)](_0x44c292,_0x288f9b,_0x4a1442,_0x42946b-this['itemPadding'](),_0x266328(0xae));break;case'SP':_0x4fce2d=DataManager[_0x266328(0x312)](_0x3ee40f);if(_0x4fce2d<=0x0)continue;this[_0x266328(0x2a0)](_0x4fce2d,_0x224312,_0x4a1442,_0x42946b,'right'),_0x3a29ac=_0x266328(0x104)[_0x266328(0x25e)](ImageManager[_0x266328(0x214)],TextManager[_0x266328(0x1f2)]),this[_0x266328(0xd6)](_0x3a29ac,_0x24edfd,_0x4a1442),_0x44c292=_0x180484['getSkillPoints'](),this[_0x266328(0x2a0)](_0x44c292,_0x288f9b,_0x4a1442,_0x42946b-this['itemPadding'](),_0x266328(0xae));break;case _0x266328(0x2d1):_0x4fce2d=DataManager[_0x266328(0xab)](_0x3ee40f);if(_0x4fce2d<=0x0)continue;this[_0x266328(0xe1)](_0x4fce2d,TextManager[_0x266328(0x28b)],_0x224312,_0x4a1442,_0x42946b);const _0x5331ec=Imported[_0x266328(0xbd)]?_0x266328(0x2a8)['format'](VisuMZ[_0x266328(0x259)]['Settings'][_0x266328(0x16b)][_0x266328(0x311)]):TextManager[_0x266328(0x28b)];_0x3a29ac=_0x266328(0x119)[_0x266328(0x25e)](_0x5331ec,TextManager['currencyUnit']),this[_0x266328(0xd6)](_0x3a29ac,_0x24edfd,_0x4a1442),_0x44c292=$gameParty[_0x266328(0xc7)](),this[_0x266328(0xe1)](_0x44c292,TextManager['currencyUnit'],_0x288f9b,_0x4a1442,_0x42946b-this[_0x266328(0x344)]());break;case'ITEM':const _0x4a9bb8=DataManager[_0x266328(0x20a)](_0x3ee40f);if(_0x4a9bb8[_0x266328(0xaa)]<=0x0)continue;for(const _0x29e975 of _0x4a9bb8){if(!_0x29e975)continue;const _0xd517d2=$dataItems[_0x29e975['id']];_0x5afff0=TextManager[_0x266328(0x1cd)],this[_0x266328(0x123)](_0xd517d2,_0x24edfd,_0x4a1442,_0x392936-_0x24edfd),_0x3a29ac=_0x5afff0[_0x266328(0x25e)](_0x29e975[_0x266328(0xe9)],_0x266328(0x2a8)[_0x266328(0x25e)](_0xd517d2[_0x266328(0xdf)]),_0xd517d2['name']),this[_0x266328(0x2c6)](_0x3a29ac,_0x224312,_0x4a1442,_0x42946b),_0x3a29ac=_0x5afff0[_0x266328(0x25e)]($gameParty[_0x266328(0x17c)](_0xd517d2),_0x266328(0x2a8)[_0x266328(0x25e)](_0xd517d2[_0x266328(0xdf)]),_0xd517d2[_0x266328(0x196)]),this[_0x266328(0x2c6)](_0x3a29ac,_0x288f9b,_0x4a1442,_0x42946b-this[_0x266328(0x344)]()),_0x4a1442+=_0x252f03;if(_0x4a1442+_0x252f03>this[_0x266328(0x1b2)])return;}continue;break;case _0x266328(0x201):const _0x4c7dfd=DataManager[_0x266328(0x358)](_0x3ee40f);if(_0x4c7dfd[_0x266328(0xaa)]<=0x0)continue;for(const _0x5a5a3d of _0x4c7dfd){if(!_0x5a5a3d)continue;const _0x336871=$dataWeapons[_0x5a5a3d['id']];_0x5afff0=TextManager[_0x266328(0x150)],this[_0x266328(0x123)](_0x336871,_0x24edfd,_0x4a1442,_0x392936-_0x24edfd),_0x3a29ac=_0x5afff0[_0x266328(0x25e)](_0x5a5a3d[_0x266328(0xe9)],_0x266328(0x2a8)[_0x266328(0x25e)](_0x336871['iconIndex']),_0x336871[_0x266328(0x196)]),this['drawTextExRightAlign'](_0x3a29ac,_0x224312,_0x4a1442,_0x42946b),_0x3a29ac=_0x5afff0[_0x266328(0x25e)]($gameParty[_0x266328(0x17c)](_0x336871),_0x266328(0x2a8)[_0x266328(0x25e)](_0x336871['iconIndex']),_0x336871['name']),this[_0x266328(0x2c6)](_0x3a29ac,_0x288f9b,_0x4a1442,_0x42946b-this[_0x266328(0x344)]()),_0x4a1442+=_0x252f03;if(_0x4a1442+_0x252f03>this['innerHeight'])return;}continue;break;case _0x266328(0x1e3):const _0x1cbc89=DataManager[_0x266328(0x2ef)](_0x3ee40f);if(_0x1cbc89['length']<=0x0)continue;for(const _0x3a7597 of _0x1cbc89){if(!_0x3a7597)continue;const _0x4f0034=$dataArmors[_0x3a7597['id']];_0x5afff0=TextManager[_0x266328(0xe6)],this[_0x266328(0x123)](_0x4f0034,_0x24edfd,_0x4a1442,_0x392936-_0x24edfd),_0x3a29ac=_0x5afff0['format'](_0x3a7597['quantity'],_0x266328(0x2a8)['format'](_0x4f0034[_0x266328(0xdf)]),_0x4f0034[_0x266328(0x196)]),this[_0x266328(0x2c6)](_0x3a29ac,_0x224312,_0x4a1442,_0x42946b),_0x3a29ac=_0x5afff0[_0x266328(0x25e)]($gameParty['numItems'](_0x4f0034),_0x266328(0x2a8)[_0x266328(0x25e)](_0x4f0034[_0x266328(0xdf)]),_0x4f0034[_0x266328(0x196)]),this['drawTextExRightAlign'](_0x3a29ac,_0x288f9b,_0x4a1442,_0x42946b-this[_0x266328(0x344)]()),_0x4a1442+=_0x252f03;if(_0x4a1442+_0x252f03>this[_0x266328(0x1b2)])return;}continue;break;case _0x266328(0x11f):const _0x3ef57a=VisuMZ[_0x266328(0x1df)]['createKeyJS'](_0x3ee40f,_0x266328(0x2b6));if(VisuMZ[_0x266328(0x1df)]['JS'][_0x3ef57a])_0x266328(0x324)===_0x266328(0x324)?(_0x3a29ac=VisuMZ['SkillLearnSystem']['JS'][_0x3ef57a]['call'](this,_0x180484,_0x3ee40f),this[_0x266328(0xd6)](_0x3a29ac,_0x24edfd,_0x4a1442)):_0x2821db[_0x266328(0x21a)](_0x1d06fe[_0x266328(0x21b)](_0x308033));else{if(_0x266328(0x1a1)===_0x266328(0x1a1))continue;else{const _0x394f5e=_0x5e1983['SkillLearnSystem']['JS'][_0x38ca6e][_0x266328(0x1ca)](this,_0x32aee3,_0x1766dd);_0x141f58+=_0x394f5e+'\x0a';}}break;case'CP':if(Imported[_0x266328(0x1c8)]){_0x4fce2d=DataManager[_0x266328(0x325)](_0x3ee40f)||0x0;if(_0x4fce2d<=0x0)continue;this[_0x266328(0x11c)](_0x4fce2d,_0x224312,_0x4a1442,_0x42946b,_0x266328(0xae)),_0x3a29ac=_0x266328(0x104)[_0x266328(0x25e)](ImageManager[_0x266328(0x1ce)],TextManager[_0x266328(0x25a)]),this[_0x266328(0xd6)](_0x3a29ac,_0x24edfd,_0x4a1442),_0x44c292=_0x180484['getClassPoints'](),this['drawClassPoints'](_0x44c292,_0x288f9b,_0x4a1442,_0x42946b-this[_0x266328(0x344)](),_0x266328(0xae));}else continue;break;case'JP':if(Imported[_0x266328(0x1c8)]){if(_0x266328(0xb8)==='kHfbe'){_0x4fce2d=DataManager[_0x266328(0x151)](_0x3ee40f)||0x0;if(_0x4fce2d<=0x0)continue;this[_0x266328(0x1bd)](_0x4fce2d,_0x224312,_0x4a1442,_0x42946b,'right'),_0x3a29ac=_0x266328(0x104)[_0x266328(0x25e)](ImageManager[_0x266328(0x203)],TextManager[_0x266328(0x110)]),this[_0x266328(0xd6)](_0x3a29ac,_0x24edfd,_0x4a1442),_0x44c292=_0x180484['getJobPoints'](),this['drawJobPoints'](_0x44c292,_0x288f9b,_0x4a1442,_0x42946b-this[_0x266328(0x344)](),_0x266328(0xae));}else{if(this[_0x266328(0x20f)][_0x266328(0x10c)](_0x401b5a))return![];}}else{if('ALoqx'===_0x266328(0x10f))continue;else{const _0x5f34a4=_0x437dd0[_0xa805fc];if(!_0x5f34a4)return;const _0x45f598=this['isMVAnimation'](_0x5f34a4);this[_0x266328(0x122)]=new(_0x45f598?_0x50b11e:_0x358603)();const _0x25ee26=[this[_0x266328(0x1d1)]],_0x12a190=0x0;this['_skillLearnAnimationSprite'][_0x266328(0x17a)](_0x25ee26,_0x5f34a4,![],_0x12a190,null),this[_0x266328(0xad)](this[_0x266328(0x122)]);}}break;default:continue;}_0x4a1442+=_0x252f03;if(_0x4a1442+_0x252f03>this[_0x266328(0x1b2)])return;}else _0x27ff6f=_0x76df17[_0x266328(0x321)][_0x266328(0x25e)](_0x5cbb20[_0x266328(0x14c)][_0xe372a]||''),_0x21003f['length']>0x0&&(_0x2890dd!==''?_0x31ee57=_0x588900[_0x266328(0x25e)](_0xa77461,_0x529e1e):_0x508cde=_0x18c133);}},Window_SkillLearnIngredients[_0x58a4c3(0x33d)][_0x58a4c3(0x349)]=function(){const _0x3a08d6=_0x58a4c3,_0x1caa1a=JsonEx[_0x3a08d6(0x12c)](VisuMZ['SkillLearnSystem']['Settings'][_0x3a08d6(0x1ae)][_0x3a08d6(0xb3)]);return _0x1caa1a['push'](_0x3a08d6(0x33c)),_0x1caa1a;},Window_SkillLearnIngredients[_0x58a4c3(0x33d)]['showVisualGoldDisplay']=function(){return![];};function _0x1b31(_0x49f9f5,_0x1192f4){const _0xe4982f=_0xe498();return _0x1b31=function(_0x1b31ca,_0x4a4c92){_0x1b31ca=_0x1b31ca-0x92;let _0x3c4d56=_0xe4982f[_0x1b31ca];return _0x3c4d56;},_0x1b31(_0x49f9f5,_0x1192f4);}function Window_SkillLearnConfirm(){this['initialize'](...arguments);}Window_SkillLearnConfirm[_0x58a4c3(0x33d)]=Object['create'](Window_HorzCommand[_0x58a4c3(0x33d)]),Window_SkillLearnConfirm[_0x58a4c3(0x33d)]['constructor']=Window_SkillLearnConfirm,Window_SkillLearnConfirm[_0x58a4c3(0x33d)][_0x58a4c3(0x1ba)]=function(_0x5c888c){const _0x95fb3=_0x58a4c3;Window_HorzCommand[_0x95fb3(0x33d)][_0x95fb3(0x1ba)][_0x95fb3(0x1ca)](this,_0x5c888c);},Window_SkillLearnConfirm[_0x58a4c3(0x33d)][_0x58a4c3(0x219)]=function(){return 0x2;},Window_SkillLearnConfirm['prototype'][_0x58a4c3(0x1b4)]=function(){return this['innerHeight'];},Window_SkillLearnConfirm[_0x58a4c3(0x33d)][_0x58a4c3(0x268)]=function(){const _0xbc662a=_0x58a4c3;this[_0xbc662a(0x2b9)](TextManager['skillLearnConfirmCmd'],'ok',this[_0xbc662a(0x16c)]()),this[_0xbc662a(0x2b9)](TextManager[_0xbc662a(0x252)],_0xbc662a(0xa3));},Window_SkillLearnConfirm[_0x58a4c3(0x33d)][_0x58a4c3(0x16c)]=function(){const _0x19010b=_0x58a4c3,_0x104de0=SceneManager['_scene'];if(!_0x104de0)return![];const _0x49fa22=_0x104de0[_0x19010b(0x218)]();if(!_0x49fa22)return![];const _0x28b725=_0x104de0[_0x19010b(0x233)]();if(!_0x28b725)return![];if(!_0x49fa22['meetRequirementsForSkillLearnSystem'](_0x28b725))return![];return _0x49fa22['canPayForSkillLearnSystem'](_0x28b725);},Window_SkillLearnConfirm[_0x58a4c3(0x33d)]['drawItem']=function(_0x409ebd){const _0x864ea2=_0x58a4c3,_0x202016=this['itemLineRect'](_0x409ebd);this[_0x864ea2(0x266)](),this[_0x864ea2(0x347)](this[_0x864ea2(0x1c6)](_0x409ebd));const _0x365ef6=this[_0x864ea2(0x154)](_0x409ebd),_0x395bf4=this['textSizeEx'](_0x365ef6)[_0x864ea2(0x13a)];_0x202016['x']+=Math[_0x864ea2(0x2a4)]((_0x202016['width']-_0x395bf4)/0x2),this[_0x864ea2(0xd6)](_0x365ef6,_0x202016['x'],_0x202016['y'],_0x395bf4);},Window_SkillLearnConfirm[_0x58a4c3(0x33d)][_0x58a4c3(0xe7)]=function(){const _0x11381a=_0x58a4c3;if(this['currentSymbol']()==='ok'){}else Window_HorzCommand[_0x11381a(0x33d)][_0x11381a(0xe7)]['call'](this);};