const Access_card = require('./../access-card.model')
/**
 * @param(carID);
 */
cardBalance = async (req, res) => {
  try {
    const access_card = await Access_card.findById(req.body.carID)
    if (access_card) {
      access_card.credits -= 4
      await access_card.save()
      return res.status(200).json({ message: 'Process done successfully' })
    }
    return res.status(400).json({ message: 'card not found' })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

module.exports = cardBalance
