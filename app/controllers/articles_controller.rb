class ArticlesController < ApplicationController
  layout 'inner'
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find_by_slug(params[:id])
  end

end
