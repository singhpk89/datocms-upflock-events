/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://virtual.upflockdigitalconference.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'UPFLOCK';
export const BRAND_NAME = 'UPFLOCK';
export const SITE_NAME_MULTILINE = ['UPFLOCK', 'Conf'];
export const SITE_NAME = 'UPFLOCK Conf';
export const META_DESCRIPTION =
  'UPFLOCK Digital Platform.';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'October 27, 2021';
export const SHORT_DATE = 'Oct 27 - 9:00am PST';
export const FULL_DATE = 'Oct 27th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';
export const META_CONTENT = 'UPFLOCK - Digital Network';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://virtual.upflockdigitalconference.com';
export const REPO = 'https://virtual.upflockdigitalconference.com';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'AUDI',
    route: '/stage/a'
  },
  {
    name: 'Stage C',
    route: '/stage/c'
  },
  {
    name: 'Stage M',
    route: '/stage/m'
  },
  {
    name: 'Stage E',
    route: '/stage/e'
  },
  {
    name: 'AGENDA',
    route: '/schedule'
  },
  {
    name: 'SPEAKERS',
    route: '/speakers'
  },
  {
    name: 'EXHIBIT',
    route: '/expo'
  },
  {
    name: 'PHOTO BOOTH',
    route: '/photobooth'
  },
  {
    name: 'LEADERBOARD',
    route: '/leaderboard'
  },
  {
    name: 'SOCIAL WALL',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
