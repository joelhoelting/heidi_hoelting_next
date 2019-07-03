// Sizes: tall, wide, square, square-small
// Image Types: small, large
// Object Position: 'top center', 'top left', 'top right'

const galleryArray = [
  {
    src: 'heidi_hoelting_beach_with_balloon',
    size: 'tall',
    imageType: 'large',
    objectPosition: '40% 50%'
  },
  {
    src: 'heidi_hoelting_diving_board_drink_glasses',
    size: 'square-small',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_full_body_statue',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_green_rocks_beach',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_happy_jump_beach',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_lay_by_pool',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_back_of_house_white_outfit',
    size: 'square',
    imageType: 'large',
    objectPosition: 'top right'
  },
  {
    src: 'heidi_hoelting_laying_on_diving_board',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_on_rocks_water_crashing',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_pool_maestro',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_purple_flower',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_smiling_happy_hour_diving_board',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_smiling_looking_up',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_visor_pool_smile',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_white_outfit_deck',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_yellow_dress_happy',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_yellow_skirt_stop_sign',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_yellow_skirt_tree_lined_street',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_chain_link_3',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_red_dress',
    size: 'square',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_makeup_1',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_jeans_top_and_bottom_1',
    size: 'tall',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    src: 'heidi_hoelting_purple_top',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_chain_link_1',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_one_piece_2',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_distorted_street_2',
    size: 'wide',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_black_top_red_skirt_2',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_jeans_top_and_bottom_2',
    size: 'tall',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    src: 'heidi_hoelting_white_dress',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_jeans_full_body',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_black_dress_3',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_street_cars',
    size: 'square-small',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_makeup_4',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_makeup_3',
    size: 'square-small',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    src: 'heidi_hoelting_sports_2',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_cuba_one_arm_up',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_one_piece_1',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_maroon_jacket_1',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_chain_link_2',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_tiled_wall',
    size: 'wide',
    imageType: 'large',
    objectPosition: 'top center'
  },
  {
    src: 'heidi_hoelting_black_top_red_skirt_1',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_hat',
    size: 'square-small',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_fifth_avenue',
    size: 'square',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_maroon_jacket_2',
    size: 'square-small',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    src: 'heidi_hoelting_distorted_street_1',
    size: 'tall',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_puffy_shirt',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_wedding_dress_headshot',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_wedding_dress',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_purple_makeup',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_black_dress_2',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_green_shimmering_dress',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_black_dress_1',
    size: 'square-small',
    imageType: 'small',
    objectPosition: 'top center'
  },
  {
    src: 'heidi_hoelting_blonde',
    size: 'square',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_bra',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_faded_white',
    size: 'tall',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_makeup_2',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_silouette_cuba',
    size: 'wide',
    imageType: 'large'
  },
  {
    src: 'heidi_hoelting_sports_1',
    size: 'tall',
    imageType: 'small'
  },
  {
    src: 'heidi_hoelting_white_see_through',
    size: 'tall',
    imageType: 'small'
  }
];

export default galleryArray;
