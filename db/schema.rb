# Controlled VM2 Rails schema fixture 1009
ActiveRecord::Schema[8.1].define(version: 2026_10_09_000100) do
  create_table "accounts", force: :cascade do |t|
    t.string "name"
  end

  create_table "widgets", force: :cascade do |t|
    t.string "label"
  end
end
