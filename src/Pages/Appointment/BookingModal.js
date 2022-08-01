import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box ">
        <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="text-center my-4">
          <h3 class="font-bold text-lg">{name}</h3>
          </div>

          <form  className="grid grid-cols-1 gap-3  justify-items-center">
          <input type="text" value={format(date, 'PP')} disabled class="input input-bordered w-full max-w-xs" />
          <select class="select select-bordered w-full max-w-xs">
                {
                    slots.map(slot  => <option value={slot}>{slot}</option>)
                }
                </select>
          <input type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
          <input type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
          <input type="Email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
          <input type="submit" placeholder="Type here" class="btn btn-accent w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
