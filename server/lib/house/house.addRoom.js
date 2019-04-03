const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Create a room in a house.
 * @param {string} selector - The selector of a house.
 * @param {Object} room - The room to create.
 * @example
 * gladys.house.addRoom('my-house', {
 *    name: 'Kitchen'
 * });
 */
async function addRoom(selector, room) {
  const house = await db.House.findOne({
    where: {
      selector,
    },
  });

  if (house === null) {
    throw new NotFoundError('House not found');
  }

  room.house_id = house.id;
  const roomCreated = await db.Room.create(room);
  return roomCreated.get({ plain: true });
}

module.exports = {
  addRoom,
};
