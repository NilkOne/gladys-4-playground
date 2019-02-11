
module.exports = (sequelize, DataTypes) => {
  const deviceFeatureState = sequelize.define('t_device_feature_state', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    device_feature_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 't_device_feature',
        key: 'id',
      },
    },
    value: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
  }, {});
  return deviceFeatureState;
};
