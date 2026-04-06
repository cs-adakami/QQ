const DISPLAY_PHONE = '08216364259';
const WA_NUMBER = '628216364259';
const WA_MESSAGE = 'Halo Admin, Saya butuh bantuan';

export const CONTACT = {
  displayPhone: DISPLAY_PHONE,
  waNumber: WA_NUMBER,
  waMessage: WA_MESSAGE,
  waLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`,
  telLink: `tel:${WA_NUMBER}`,
  email: 'info@adakami.id',
};
