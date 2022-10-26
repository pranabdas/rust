// #[derive(Debug, PartialEq, Copy, Clone)]
#[derive(Debug)] // Debug trait required for printing
enum MealPreference {
    Veg,
    NonVeg,
    Vegan,
}

fn main() {
    println!("Default meal: {:?}", select_meal(None));

    let preference = Some(MealPreference::Veg);
    println!("Selected meal: {:?}", select_meal(preference));

    // let preference = Some(MealPreference::Vegan);
    // println!("Selected meal: {:?}", select_meal(preference));
}

fn select_meal(preference: Option<MealPreference>) -> MealPreference {
    preference.unwrap_or_else(|| MealPreference::NonVeg)
    // unwrap_or_else() takes a closure, our closure takes no argument and
    // returns MealPreference::NonVeg
    // closures rarely requires type annotation, here are similarities between
    // function and closures:
    // fn  add_one_v1   (x: u32) -> u32 { x + 1 }
    // let add_one_v2 = |x: u32| -> u32 { x + 1 };
    // let add_one_v3 = |x|             { x + 1 };
    // let add_one_v4 = |x|               x + 1  ;
}
