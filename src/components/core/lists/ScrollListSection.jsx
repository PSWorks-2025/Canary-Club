import {
  ScrollList,
  ScrollListItem,
} from "../core/lists/ScrollList";

import PropTypes from "prop-types";

const VerticalListSection = ({ title, listData }) => {
  return (
    <div>
        <div className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
          {title}
        </div>
        <ScrollList>
          {Object.entries(listData)
          .map(([id, detail]) => (
              <ScrollListItem
                key={`story_${id}`}
                href={'#'}
                imageUrl={detail?.thumbnail?.src || ''}
                title={detail?.title || ''}
                description={detail?.abstract || ''}
              />
            ))}
        </ScrollList>
      </div>
  );
}

VerticalListSection.propTypes = {
  title: PropTypes.string.isRequired, // Expecting a string for the title of the list
  listData: PropTypes.object.isRequired, // Expecting an object with event details
};

export default VerticalListSection;