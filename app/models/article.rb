class Article < ApplicationRecord
    validates :slug, uniqueness: true
    after_create :update_slug
    before_update :assign_slug
    
def update_slug
    update slug: assign_slug
end


private

    def assign_slug
        self.slug = create_slug
    end

    def create_slug
        self.title.downcase!.strip.gsub(' ', '-').gsub(/[^\w-]/,'')
    end
end
