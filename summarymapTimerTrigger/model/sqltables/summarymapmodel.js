var Sequelize = require("sequelize");

var objSummaryMap = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    MeterID: { type: Sequelize.STRING(100), unique: 'uniquemeterid', allowNull: false },
    Meter_DeviceID: { type: Sequelize.STRING(100) },
    MeterLatitude: { type: Sequelize.DECIMAL(20, 7) },
    MeterLongitude: { type: Sequelize.DECIMAL(20, 7) },
    HypersproutID: { type: Sequelize.STRING(100) },
    Meter_ReadTimestamp: { type: Sequelize.DATE, unique: 'uniquemeterid' },
    TransformerID: { type: Sequelize.STRING(100), unique: 'uniquemeterid' },
    Transformer_CellID: { type: Sequelize.STRING(100) },
    TransformerLatitude: { type: Sequelize.DECIMAL(20, 7) },
    TransformerLongitude: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_ReadTimestamp: { type: Sequelize.DATE, unique: 'uniquemeterid' },
    CircuitLatitude: { type: Sequelize.DECIMAL(20, 7) },
    CircuitLongitude: { type: Sequelize.DECIMAL(20, 7) },
    CircuitID: { type: Sequelize.STRING(100) },
    Meter_Line1InstVoltage: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Line1InstCurrent: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Line1Frequency: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Apparent_m_Total: { type: Sequelize.DECIMAL(20, 3) },
    Meter_ActiveReceivedCumulativeRate_Total: { type: Sequelize.DECIMAL(20, 6) },
    Meter_ActiveDeliveredCumulativeRate_Total: { type: Sequelize.DECIMAL(20, 6) },
    Transformer_Line1Voltage: { type: Sequelize.DECIMAL(20) },
    Transformer_Line2Voltage: { type: Sequelize.DECIMAL(20) },
    Transformer_Line3Voltage: { type: Sequelize.DECIMAL(20) },
    Transformer_Line1Current: { type: Sequelize.DECIMAL(20, 2) },
    Transformer_Line2Current: { type: Sequelize.DECIMAL(20, 2) },
    Transformer_Line3Current: { type: Sequelize.DECIMAL(20, 2) },
    Transformer_AmbientTemperarture: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_TopTemperature: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_BottomTemperature: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_TransformerOilLevel: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_Apparent_m_Total: { type: Sequelize.DECIMAL(20, 3) },
    Transformer_ActiveReceivedCumulativeRate_Total: { type: Sequelize.DECIMAL(20, 6) },
    Transformer_ActiveDeliveredCumulativeRate_Total: { type: Sequelize.DECIMAL(20, 6) },

    DateTime: { type: Sequelize.DATE },
    Hours: { type: Sequelize.INTEGER() },
    "Circuit ID": { type: Sequelize.STRING(100) },
    Circuit_Latitude: { type: Sequelize.DECIMAL(20, 7) },
    Circuit_Longitude: { type: Sequelize.DECIMAL(20, 7) },
    "Transformer ID": { type: Sequelize.STRING(100) },
    "Hypersprout ID": { type: Sequelize.STRING(100) },
    Transformer_Latitude: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_Longitude: { type: Sequelize.DECIMAL(20, 7) },
    "Meter ID": { type: Sequelize.STRING(100) },
    Meter_Latitude: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Longitude: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_active_energy_received: { type: Sequelize.DECIMAL(20, 6) },
    Transformer_active_energy_delivered: { type: Sequelize.DECIMAL(20, 6) },
    Meter_active_energy_received: { type: Sequelize.DECIMAL(20, 6) },
    Meter_active_energy_delivered: { type: Sequelize.DECIMAL(20, 6) },
    Top_Temperature: { type: Sequelize.DECIMAL(20, 7) },
    Bottom_Temperature: { type: Sequelize.DECIMAL(20, 7) },
    ambient_temparature: { type: Sequelize.DECIMAL(20, 7) },
    Energy_Apparent_Absolute: { type: Sequelize.DECIMAL(10, 3) },
    "Date": { type: Sequelize.DATE },
    TransformerActiveReceivedCumulativeRate_Total: { type: Sequelize.DECIMAL(20, 6) },
    TransformerActiveDeliveredCumulativeRate_Total: { type: Sequelize.DECIMAL(20, 6) },
    MeterActiveReceivedCumulativeRate_Total: { type: Sequelize.DECIMAL(20, 6) },
    MeterActiveDeliveredCumulativeRate_Total: { type: Sequelize.DECIMAL(20, 6) },
    MeterApparentReceivedCumulativeRate_Total: { type: Sequelize.DECIMAL(20, 6) },
    NetworkResponceRate: { type: Sequelize.DECIMAL(3, 2) },
    TopTemperature: { type: Sequelize.DECIMAL(20, 7) },
    BottomTemperature: { type: Sequelize.DECIMAL(20, 7) },
    AmbientTemperarture: { type: Sequelize.DECIMAL(20, 7) },
    Apparent_m_Total: { type: Sequelize.DECIMAL(10, 3) },
    Circuit_Id: { type: Sequelize.STRING(100) },
    Tranformer_Id: { type: Sequelize.STRING(100) },
    Hypersprout_ID: { type: Sequelize.STRING(100) },
    Meter_Id: { type: Sequelize.STRING(100) },
    Non_technichal_Loss: { type: Sequelize.DECIMAL(10,6) },
    ActualMeter_ReadTimestamp: { type: Sequelize.DATE },
    ActualTransformer_ReadTimestamp: { type: Sequelize.DATE },
    SolarPanel: { type: Sequelize.BOOLEAN },
    EVMeter: { type: Sequelize.BOOLEAN },

    Meter_Line2InstVoltage: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Line3InstVoltage: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Line2InstCurrent: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Line3InstCurrent: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Line2Frequency: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Line3Frequency: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Phase: { type: Sequelize.INTEGER(1) },
    Meter_Line1PowerFactor: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Line2PowerFactor: { type: Sequelize.DECIMAL(20, 7) },
    Meter_Line3PowerFactor: { type: Sequelize.DECIMAL(20, 7) },

    Transformer_Phase: { type: Sequelize.INTEGER(1) },
    Transformer_Line1PhaseAngle: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_Line2PhaseAngle: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_Line3PhaseAngle: { type: Sequelize.DECIMAL(20, 7) },
    Transformer_BatteryVoltage: { type: Sequelize.INTEGER() },
    Transformer_BatteryStatus: { type: Sequelize.INTEGER() },

    TransformerRating: { type: Sequelize.INTEGER() },
    IsHyperHub: { type: Sequelize.BOOLEAN }
}

var objTableProps = {
    timestamps: true,
    freezeTableName: true,
    tableName: 'summarymap'
}

module.exports = {
    objSummaryMap: objSummaryMap,
    objTableProps: objTableProps
}