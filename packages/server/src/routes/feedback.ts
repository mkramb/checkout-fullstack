import Router, { RouterContext } from 'koa-router';
import { getItems, appendItem } from '../store';
import getRatingsCount from '../store/getRatingsCount';
import { FeedbackItem, decode } from '../models';

export const feedbackRouter = new Router({
  prefix: '/feedback',
});

export const feedbackRouteAppend = async (ctx: RouterContext) => {
  ctx.status = 200;

  try {
    const feedback = decode(FeedbackItem, ctx.request.body);
    appendItem(feedback);
  } catch (errors) {
    ctx.status = 400;
    ctx.body = { errors };
  }
};

export const feedbackRouteList = async (ctx: RouterContext) => {
  ctx.status = 200;
  ctx.body = getItems();
};

export const feedbackRouteTreds = async (ctx: RouterContext) => {
  ctx.status = 200;
  ctx.body = getRatingsCount(getItems());
};

feedbackRouter.get('/trends', feedbackRouteTreds);
feedbackRouter.get('/', feedbackRouteList);
feedbackRouter.post('/', feedbackRouteAppend);
