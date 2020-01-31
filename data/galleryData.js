// Sizes: tall, wide, square, square-small
// Image Types: small, large
// Object Position: (x, y) 'top center', 'top left', 'top right'

const galleryArray = [
  {
    alt: 'Beach With Balloon',
    src: 'heidi_hoelting_beach_with_balloon',
    size: 'tall',
    imageType: 'large',
    objectPosition: '42% 50%'
  },
  {
    alt: 'Central Park Sun Drenched',
    src: 'heidi_hoelting_central_park_sun_drenched',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Diving Board Drink Glasses',
    src: 'heidi_hoelting_diving_board_drink_glasses',
    size: 'square-small',
    imageType: 'large'
  },
  {
    alt: 'Full Body Statue',
    src: 'heidi_hoelting_full_body_statue',
    size: 'wide',
    imageType: 'large'
  },
  {
    alt: 'Central Park Chic Purse',
    src: 'heidi_hoelting_central_park_chic_purse',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Happy Jump Beach',
    src: 'heidi_hoelting_happy_jump_beach',
    size: 'wide',
    imageType: 'large'
  },
  {
    alt: 'Back of House White Outfit',
    src: 'heidi_hoelting_back_of_house_white_outfit',
    size: 'square',
    imageType: 'large',
    objectPosition: 'top right'
  },
  {
    alt: 'Laying on Diving Board',
    src: 'heidi_hoelting_laying_on_diving_board',
    size: 'square',
    imageType: 'large'
  },
  {
    alt: 'Rocks Water Crashing',
    src: 'heidi_hoelting_on_rocks_water_crashing',
    size: 'square-small',
    imageType: 'large'
  },
  {
    alt: 'Yellow Skirt Tree Lined Tree',
    src: 'heidi_hoelting_yellow_skirt_tree_lined_street',
    size: 'wide',
    imageType: 'large'
  },
  {
    alt: 'Purple Flower',
    src: 'heidi_hoelting_purple_flower',
    size: 'square-small',
    imageType: 'large'
  },
  {
    alt: 'Hair Flowing Diving Board',
    src: 'heidi_hoelting_hair_flowing_diving_board',
    size: 'square-small',
    imageType: 'large'
  },
  {
    alt: 'White Outfit Deck',
    src: 'heidi_hoelting_white_outfit_deck',
    size: 'square-small',
    imageType: 'large',
    objectPosition: '30% 50%'
  },
  {
    alt: 'Visor Pool Smile',
    src: 'heidi_hoelting_visor_pool_smile',
    size: 'wide',
    imageType: 'large',
    objectPosition: 'top center'
  },
  {
    alt: 'Smiling Looking Up',
    src: 'heidi_hoelting_smiling_looking_up',
    size: 'square-small',
    imageType: 'large'
  },
  {
    alt: 'Yellow Dress Happy',
    src: 'heidi_hoelting_yellow_dress_happy',
    size: 'square',
    imageType: 'large'
  },
  {
    alt: 'Yellow Skirt Stop Sign',
    src: 'heidi_hoelting_yellow_skirt_stop_sign',
    size: 'wide',
    imageType: 'large',
    objectPosition: '50% 40%'
  },
  {
    alt: 'Pool Maestro',
    src: 'heidi_hoelting_pool_maestro',
    size: 'wide',
    imageType: 'large',
    objectPosition: 'top center'
  },
  {
    alt: 'Glasses Lined Up',
    src: 'heidi_hoelting_glasses_lined_up',
    size: 'square-small',
    imageType: 'large'
  },
  {
    alt: 'Bethesda Terrace Side View',
    src: 'heidi_hoelting_bethesda_terrace_side_view',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Bethesda Stairs Full Body',
    src: 'heidi_hoelting_bethesda_terrace_stairs_full_body',
    size: 'square-small',
    imageType: 'small'
  },
  {
    alt: 'Central Park Boat Pond',
    src: 'heidi_hoelting_central_park_boat_pond',
    size: 'tall',
    imageType: 'small',
    objectPosition: '40% 50%'
  },
  {
    alt: 'Lipstick Serious',
    src: 'heidi_hoelting_lipstick_serious',
    size: 'square-small',
    imageType: 'small',
    objectPosition: '50% 0'
  },
  {
    alt: 'Red Dress',
    src: 'heidi_hoelting_red_dress',
    size: 'square',
    imageType: 'small',
    objectPosition: '65% 50%'
  },
  {
    alt: 'Makeup 1',
    src: 'heidi_hoelting_makeup_1',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Chain Link 3',
    src: 'heidi_hoelting_chain_link_3',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Jeans Sitting Smiling',
    src: 'heidi_hoelting_jeans_sitting_smiling',
    size: 'tall',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    alt: 'Purple Top',
    src: 'heidi_hoelting_purple_top',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'One Piece 2',
    src: 'heidi_hoelting_one_piece_2',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Distorted Street 2',
    src: 'heidi_hoelting_distorted_street_2',
    size: 'wide',
    imageType: 'small'
  },
  {
    alt: 'Black Top Red Skirt 2',
    src: 'heidi_hoelting_black_top_red_skirt_2',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Jeans Sitting Serious',
    src: 'heidi_hoelting_jeans_sitting_serious',
    size: 'tall',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    alt: 'Makeup 4',
    src: 'heidi_hoelting_makeup_4',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Black Dress 3',
    src: 'heidi_hoelting_black_dress_3',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Makeup 3',
    src: 'heidi_hoelting_makeup_3',
    size: 'square',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    alt: 'White Dress',
    src: 'heidi_hoelting_white_dress',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Tennis Racket Side',
    src: 'heidi_hoelting_tennis_racket_side',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Cuba One Arm Up',
    src: 'heidi_hoelting_cuba_one_arm_up',
    size: 'wide',
    imageType: 'large'
  },
  {
    alt: 'Green Rocks Beach',
    src: 'heidi_hoelting_green_rocks_beach',
    size: 'square',
    imageType: 'large',
    objectPosition: 'center center'
  },
  {
    alt: 'One Piece 1',
    src: 'heidi_hoelting_one_piece_1',
    size: 'square-small',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    alt: 'Purple Makeup',
    src: 'heidi_hoelting_purple_makeup',
    size: 'tall',
    imageType: 'small',
    objectPosition: '60% 50%'
  },
  {
    alt: 'Chain Link Serious',
    src: 'heidi_hoelting_chain_link_serious',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Tiled Wall',
    src: 'heidi_hoelting_tiled_wall',
    size: 'wide',
    imageType: 'large',
    objectPosition: '50% 30%'
  },
  {
    alt: 'Black Top Red Skirt Path',
    src: 'heidi_hoelting_black_top_red_skirt_path',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Hat Smiling',
    src: 'heidi_hoelting_hat_smiling',
    size: 'square',
    imageType: 'small'
  },
  {
    alt: 'Fifth Avenue Heels',
    src: 'heidi_hoelting_fifth_avenue_heels',
    size: 'square',
    imageType: 'large'
  },
  {
    alt: 'Maroon Jacket Hand in Pocket',
    src: 'heidi_hoelting_maroon_jacket_hand_in_pocket',
    size: 'square-small',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    alt: 'Wedding Dress',
    src: 'heidi_hoelting_wedding_dress',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Red Puffy Shirt',
    src: 'heidi_hoelting_red_puffy_shirt',
    size: 'tall',
    imageType: 'small',
    objectPosition: '15% 50%'
  },
  {
    alt: 'Wedding Dress Headshot',
    src: 'heidi_hoelting_wedding_dress_headshot',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Distorted Street 1',
    src: 'heidi_hoelting_distorted_street_1',
    size: 'tall',
    imageType: 'large'
  },
  {
    alt: 'Maroon Jacket Full Body',
    src: 'heidi_hoelting_maroon_jacket_full_body',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Black Dress Crossed Arms',
    src: 'heidi_hoelting_black_dress_crossed_arms',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Blonde Box',
    src: 'heidi_hoelting_blonde_box',
    size: 'square',
    imageType: 'small'
  },
  {
    alt: 'Faded White',
    src: 'heidi_hoelting_faded_white',
    size: 'tall',
    imageType: 'large'
  },
  {
    alt: 'Makeup Red Lipstick Headshot',
    src: 'heidi_hoelting_makeup_red_lipstick_headshot',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Yoga Pants',
    src: 'heidi_hoelting_yoga_pants',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'White See Through',
    src: 'heidi_hoelting_white_see_through',
    size: 'tall',
    imageType: 'small'
  },
  {
    alt: 'Street Cars',
    src: 'heidi_hoelting_street_cars',
    size: 'square-small',
    imageType: 'small',
    objectPosition: '50% 65%'
  }
];

export default galleryArray;
