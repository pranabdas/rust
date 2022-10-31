use colored::*; // https://crates.io/crates/colored

fn main() {
    println!(
        "{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}{10}",
        "\nInstead of",                                   // 0
        " worrying".yellow(),                             // 1
        " about\nwhat you cannot".normal().clear(),       // 2
        " control".italic().cyan(),                       // 3
        ",\n".normal().clear(),                           // 4
        "shift".bold().purple().on_yellow(),              // 5
        " your".normal().clear(),                         // 6
        " energy".blink().truecolor(0, 255, 136),         // 7
        " to what\nyou can ".normal().clear(),            // 8
        "create.".bold().bright_blue().on_bright_white(), // 9
        "\n  ― Roy T. Bennett, The Light in the Heart"
            .dimmed()
            .italic()
    );
}
