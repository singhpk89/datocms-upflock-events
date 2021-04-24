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

export default function TicketColored() {
  return (
    
<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
<linearGradient id='g' x2='1' y2='1'>
<stop stop-color='#F19'/>
<stop offset='100%' stop-color='#0CF'/>
</linearGradient>
<rect width='100%' height='100%' fill='url(#g)'/>
</svg>

  );
}
